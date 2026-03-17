---
layout: post
title: How PDF Rendering Works in the Browser  | Syncfusion
description: Understand how PDF files are parsed, processed, and rendered as pixels in the browser, and the performance and security considerations involved.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How PDF Rendering Works in the Browser

A detailed walkthrough of the end-to-end PDF rendering pipeline in the browser. Learn how PDFium and the Syncfusion React PDF Viewer parse PDF documents, resolve resources, convert drawing instructions into pixels, and handle the practical trade-offs that affect performance, accuracy, and security.

## Overview

Rendering a PDF in the browser is a multi-stage process that transforms a binary PDF file into interactive visual content on screen. Understanding this pipeline is essential for developers and integrators who need to:

- **Troubleshoot rendering issues** – Identify which stage of the pipeline is causing problems (e.g., missing images, blurry text, font misalignment).
- **Optimize performance** – Apply targeted caching, lazy-loading, and worker strategies to improve rendering speed and responsiveness.
- **Make informed architectural decisions** – Choose between client-side rendering, server preprocessing, or hybrid approaches based on document complexity and user experience requirements.
- **Ensure security and compliance** – Understand cross-origin resource sharing (CORS), font handling, and memory constraints.

This page explains the conceptual rendering pipeline used by the Syncfusion React PDF Viewer (powered by the PDFium rendering engine). While the specific implementation details may vary, the core concepts apply to most browser-based PDF viewers.

## 1. Parsing and decoding

PDF rendering begins with parsing the binary PDF file structure. The PDFium rendering engine extracts:

- **Document structure**: Indirect objects, cross-reference tables, and content streams that define each page.
- **Page hierarchy**: Resolving object references to reconstruct complete page definitions.
- **Resources**: Associated fonts, images, graphics states, and annotations linked to each page.

**Resource extraction:**

Once pages are identified, the viewer extracts encoded content:

- **Image streams**: Embedded images (JPEG, PNG, TIFF, etc.) are identified but **not decoded until rendering time** to minimize memory usage.
- **Font streams**: Embedded font data is identified; subset and full fonts are handled separately.
- **Content streams**: PDF drawing commands (path operators, text placement, fills) are extracted for later conversion to a display list.

**Parsing location (main thread vs. worker):**

Parsing is typically **offloaded to a Web Worker** to prevent blocking the UI thread. This is especially important for large PDFs where parsing can take hundreds of milliseconds. The main thread coordinates by sending parsing work items to the worker via `postMessage()`. If workers are unavailable, the viewer falls back to main-thread parsing with reduced responsiveness.

**Performance tip:** For large documents, consider **server-side document preprocessing** using the Syncfusion PDF Library to simplify structure, reduce object count, and speed up parsing on the client. See [Server Integration](#) for details.

## 2. Resolve resources (fonts, images)

After parsing, the viewer resolves and fetches resources needed for rendering.

**Font resolution:**

- **Embedded fonts**: Full or subset fonts stored in the PDF are extracted and made available to the rendering engine.
- **System fonts**: If a PDF references standard fonts (e.g., Helvetica, Times New Roman) not embedded, the viewer uses system fonts.
- **Font subsetting trade-off**: Subset fonts reduce PDF file size but require careful glyph-to-character mapping during text layer creation (see [HTML Text Layer](#5-html-text-layer-selectable-and-searchable-text)). If mapping fails, text selection becomes misaligned.

**Image resolution:**

- **Decoding**: Encoded image streams (JPEG, PNG, TIFF, Flate-compressed) are identified and decoded **on-demand** during rendering, not during resource resolution. This lazy approach saves memory for documents with many images.
- **Format handling**: Common formats are supported natively by canvas/WebGL; unsupported formats are trans-coded server-side via `serviceUrl`.

**Cross-origin resource sharing (CORS):**

If fonts or images reference external URLs (uncommon but possible), CORS headers must permit browser access. Missing or mis-configured CORS headers cause resource load failures. Configure your server:

```
Access-Control-Allow-Origin: https://your-app-domain
```

**Caching strategies:**

Effective resource caching dramatically improves performance for multi-page documents:

- **Decoded resource cache**: Fonts and images are cached in memory after first decode to avoid redundant processing during page re-renders and zooms.
- **Cache eviction**: For large PDFs on memory-constrained devices, implement cache eviction policies to free resources for unseen pages.
- **HTTP caching**: Serve PDFs and resources with appropriate `Cache-Control` headers to enable browser caching.

**Performance tip:** For documents with large or many images, consider **server-side image optimization** (compression, trans-coding) before serving to clients.

## 3. Convert PDF drawing instructions into an internal display list

PDF content streams contain drawing instructions that define how to render page content. The viewer converts these instructions into an internal **display list** (also called a **scene graph**), which serves as an optimized intermediate representation for efficient rendering.

**How it works:**

PDFium processes the raw PDF drawing commands and converts them into an optimized internal format that includes:

- Resolved graphics operations (paths, fills, images, text) with final coordinates and properties
- Transformed graphics state changes (color, scaling, transparency)
- Bounding boxes for efficient region management

**Performance benefits:**

1. **Efficient re-rendering**: Zooming, panning, or rotating reuses the display list; no need to re-parse the original instructions
2. **Partial updates**: Only changed regions (e.g., annotation overlays) are re-rendered; unchanged content is cached
3. **Memory efficiency**: The optimized display list is typically smaller than the original PDF content stream
4. **Reliability**: Rendering errors are caught early, ensuring consistent results

**Trade-offs:**

- **Memory usage**: Complex pages consume more memory for the display list; very large pages may require tiling strategies
- **Conversion time**: Initial display list creation adds latency, though this is typically handled off-thread (see [Off-main-thread processing](#7-off-main-thread-processing-workers--wasm))

## 4. Rendering (Rasterization / Vector rendering / Compositing)

The display list is converted to visual output on screen through a rendering process that handles multiple rendering targets, scaling, anti-aliasing, and layer composition.

**Rendering back-ends:**

The viewer can use different rendering back-ends depending on platform and performance requirements:

- **Canvas 2D**: Most common; rasterize display list to a bitmap on an HTML5 `<canvas>` element. Hardware-accelerated on most devices.
- **SVG**: Vector rendering for specific use cases (e.g., accessibility, search ability). Slower for complex pages but produces sharp text and graphics.
- **WebGL**: High-performance GPU-accelerated rasterization for large documents or repeated re-renders (zooming, panning).

**Device pixel ratio (DPR) scaling:**

To render sharp content on high-DPI displays (e.g., 2x or 3x scaling on mobile), the viewer:

1. Reads `window.devicePixelRatio` (e.g., 2.0 for Retina displays).
2. Allocates canvas buffer at `canvas.width = logicalWidth × DPR` to capture physical pixels.
3. Applies CSS scaling to display the buffer at logical size.

**Blurry output** is typically caused by DPR mismatch. See [Common issues & quick troubleshooting](../troubleshooting/troubleshooting).

**Anti-aliasing and quality:**

PDFium applies sub-pixel anti-aliasing to smooth edges of text and graphics. Quality can be tuned via rendering parameters:

- **Quality levels**: Faster (less sampling) vs. higher quality (more sampling and processing).
- **Font hinting**: Can improve text clarity for small fonts.

**Layer composition:**

Multiple layers are composited to create the final output:

1. **Base layer (PDF content)**: Rasterize once and cached.
2. **Annotation layer**: Overlaid above PDF content; updated when annotations change.
3. **Text layer**: Positioned HTML elements for selection/search (see section 5); rendered with `pointer-events: none` to allow clicks through to underlying layers.
4. **UI layer**: Toolbar, dialogs, form highlights.

This layering ensures efficient updates: only modified layers are re-rendered.

**Performance considerations:**

- Rendering large pages or high DPR values increases memory and CPU usage.
- Repeated renders (e.g., continuous zooming) benefit from caching strategies (see section 8).

## 5. HTML text layer (selectable and searchable text)

To enable text selection, copy-paste, and search functionality, the viewer constructs an **invisible HTML text layer** that overlays the rendered PDF content. This layer bridges the gap between PDF rendering and DOM-based text interaction.

**How the text layer works:**

1. **Extract glyph information**: During PDF parsing, the viewer extracts text content, glyph IDs, and positioning matrices from the PDF content stream.
2. **Render invisible HTML elements**: For each text span, an HTML element (typically a `<span>`) is positioned and sized to match the glyph positions in the rendered PDF.
3. **Apply CSS styling**: Text elements are styled with `opacity: 0` or positioned absolutely so they're invisible but interactive.
4. **Enable interaction**: When users select or search text, they interact with the HTML layer, which references the underlying PDF text.

```html
<!-- Example: invisible text layer overlay -->
<div class="pdfviewer-text-layer">
  <span style="position: absolute; left: 50px; top: 100px; width: 40px; height: 15px;">Hello</span>
  <span style="position: absolute; left: 95px; top: 100px; width: 30px; height: 15px;">World</span>
</div>
```

**Challenges in text layer creation:**

- **Ligatures**: Some fonts replace character sequences (e.g., "fi") with single glyphs. Mapping glyphs back to characters requires special handling.
- **Glyph-to-character mapping**: Subset fonts include only glyphs used in the document. Determining which Unicode characters correspond to subset glyph IDs is complex and error-prone.
- **Font substitution**: If the PDF references fonts unavailable in the browser, fallback fonts are used. If fallback fonts have different metrics, text positioning becomes misaligned.
- **Vertical text**: Right-to-left scripts (Arabic, Hebrew) and vertical text (CJK languages) require special handling.

**Text selection misalignment:**

If text layer elements don't align with rendered text, the root cause is usually:

- **Font metric mismatch**: Embedded font and fallback font have different character widths.
- **Subset mapping error**: Incorrect glyph-to-character mapping, causing shifted text positions.
- **Rotation/scaling**: Transform matrices not correctly applied during positioning.

See [Common issues & quick troubleshooting](../troubleshooting/troubleshooting) for diagnosis and fixes.

N> **Performance tip:** Text layer creation is typically offloaded to a worker thread to avoid UI blocking. For documents with very large text volumes, consider lazy text layer creation (only for visible pages).

## 6. Fonts: embedding, subsetting, and fallback

Font handling is a critical and often overlooked aspect of PDF rendering. PDFs can reference fonts in multiple ways, each with different implications for rendering quality and text layer accuracy.

**Font types and embedding:**

- **Fully embedded fonts**: The PDF includes the entire font data. The viewer uses these directly; rendering is accurate and text selection is reliable. Common in documents created with office applications.
- **Subset fonts**: Only glyphs used in the document are embedded, reducing PDF size. This saves bandwidth but complicates text layer creation (see section 5).
- **Referenced fonts**: The PDF references standard fonts (e.g., "Helvetica", "Times New Roman") by name without embedding data. The viewer must find these on the system or use fallback fonts.
- **Type 3 fonts**: Custom fonts defined by drawing operations. Rendering is correct, but text layer creation is impossible (text selection won't work).

**Subsetting trade-offs:**

| Aspect | Fully embedded | Subset |
|--------|---|---|
| PDF size | Larger | Smaller |
| Rendering quality | Excellent | Excellent |
| Text selection reliability | High | Lower (mapping errors common) |
| Copy-paste accuracy | High | Lower |
| Search functionality | Reliable | Prone to errors |

**System font fallback:**

When the viewer encounters a referenced font not available in the browser:

1. Check system font directories for a matching font name.
2. If no match, use a generic fallback (serif, sans-serif, monospace).
3. Apply metric adjustments (spacing, size) to approximate the original font's appearance.

**Font rendering quality vs. text layer accuracy:**

- Embedded fonts render correctly but may introduce text layer mapping errors (subset fonts especially).
- System fonts render with fallback fonts but may look visibly different. However, text layer is often more reliable because character-to-glyph mapping is straightforward.

**Best practices and troubleshooting:**

1. **Preload system fonts**: If your PDFs reference common fonts, preload them in your HTML:
   ```html
   <link rel="preload" href="/fonts/Helvetica.woff2" as="font">
   ```

2. **Validate glyph coverage**: Before using a fallback font, verify it covers all glyphs in the PDF. Missing glyphs will render as boxes or boxes.

3. **CORS configuration**: If fonts are served from a different origin, ensure CORS headers permit access:
   ```
   Access-Control-Allow-Origin: *
   ```

4. **Server-side font optimization**: Use the Syncfusion PDF Library to pre-process PDFs and convert subset fonts to fully embedded fonts, improving text layer reliability. See [Server Integration](#).

5. **Font substitution tables**: Some viewers allow configuring font substitution mappings (e.g., "Helvetica" → "Arial") to improve visual consistency across platforms.

**Common font issues:**

- **Missing glyphs** (rendered as boxes): Fallback font lacks glyphs present in the original font.
- **Text layout errors**: Metric mismatch between embedded and fallback fonts causes misalignment.
- **Type 3 font failure**: Text selection is disabled; consider server-side conversion to standard fonts.

## 7. Off-main-thread processing (Workers / WASM)

PDF rendering involves CPU-intensive tasks (parsing, font processing, rasterization) that can block the main thread and freeze the UI. The Syncfusion React PDF Viewer solves this by offloading heavy work to background threads.

**Worker-based architecture:**

The viewer uses **Web Workers**—background threads that run JavaScript in parallel with the main thread without blocking UI interactions:

1. **Task dispatch**: The main thread sends work items (e.g., "parse page 5") to workers via `postMessage()`.
2. **Off-thread execution**: Workers execute PDFium parsing, decoding, and rasterization commands.
3. **Result callback**: Workers send rendered results (bitmap data, text layer, etc.) back to the main thread.
4. **DOM update**: The main thread receives results and updates the DOM with new rendered content.

**Example message flow:**

```
Main Thread:
  → "Parse and render page 5, 100dpi"
     ↓
Worker Thread:
  → Execute PDFium rendering commands
  → Generate bitmap and text layer data
     ↓
  ← { image: ImageData, textLayer: Array }
     ↓
Main Thread:
  → Update canvas and text layer DOM
```

**Worker pool and concurrency:**

- **Multiple workers**: The viewer typically creates a pool of workers (e.g., 2-4) to parallelize work. Page 5 can be rendered while page 6 is being parsed.
- **Queue management**: If work exceeds available workers, tasks are queued and processed in order.
- **Configurable pool size**: Tune worker count based on device CPU cores and available memory.

**WebAssembly (WASM) acceleration:**

PDFium itself is implemented in C++ and compiled to WebAssembly for faster execution than equivalent JavaScript. This enables:

- Fast PDF parsing
- Efficient rasterization (rendering)
- Reduced memory overhead

**Graceful fallback:**

If workers are unavailable (disabled by user, unsupported browser, or restricted environment):

- Parsing and rasterization execute on the main thread.
- UI responsiveness decreases; long operations may freeze the page.
- Fallback mode is useful for debugging but should not be used in production.

**Configuration and troubleshooting:**

- **Worker count**: Adjust `workerCount` in viewer config to balance parallelism and memory usage.
- **Worker path**: Ensure worker scripts are served from the correct location and accessible.
- **Security**: Workers must be served from the same origin (same domain and protocol) due to browser security policies.

**Performance impact:**

- **Positive**: Off-thread processing keeps the main thread responsive, enabling smooth UI interactions during rendering.
- **Trade-off**: Message passing overhead (serializing data) adds latency for very small tasks; not all operations benefit from worker offloading.

## 8. Device & performance considerations

Rendering performance varies dramatically based on device capability (CPU, memory, GPU), document complexity (number of pages, image density, font count), and network conditions. Strategic optimizations can dramatically improve user experience, especially on low-powered devices and over slow networks.

**Core performance optimization strategies:**

### DPR-aware rendering

High-DPI displays (phones, tablets, modern laptops) have `devicePixelRatio > 1`, requiring higher-resolution rendering. Without proper scaling, output is blurry. Proper handling:

- Allocate canvas buffer at `physicalWidth = logicalWidth × devicePixelRatio`
- Apply CSS scaling to display at logical size
- Monitor DPR changes (orientation changes, moving window between displays)

### Lazy page rendering (visible-only rendering)

Load and render only pages currently visible to the user:

- **Virtual scrolling**: Maintain a viewport; render pages entering the viewport, unload pages leaving it.
- **Memory savings**: For 500-page documents, render only 3-5 visible pages instead of all 500.
- **Network savings**: Fetch resources (fonts, images) only for visible pages.

Implementation requires a scroll listener and dynamic page allocation.

### Thumbnail prefetching

While the user views page 10, prefetch thumbnails for nearby pages (9, 11, 12):

- Improves perceived responsiveness when navigating quickly.
- Use lower DPR and compression for thumbnails to minimize memory.

### Resource caching and eviction

- **Cache decoded images**: Store decoded images in memory; reuse during zoom operations.
- **Cache rasterized pages**: For fixed zoom levels, cache rendered bitmaps to avoid re-rendering on scroll.
- **Cache fonts**: Decoded fonts are reused across pages; large PDFs benefit significantly.
- **Eviction policy**: Implement LRU (least-recently-used) or other policies to free cache when memory approaches limits.

### Minimize zoom re-renders

Continuous zoom events (mouse wheel, pinch) can trigger re-renders for each intermediate level:

- **Debounce zoom**: Wait for zoom gestures to complete before rendering at final zoom level.
- **Interim preview**: Show blurry upscaled/downscaled content during gestures; render at final zoom when gesture ends.

### Network streaming strategies

For large PDFs over slow networks:

- **Byte-range requests**: Server sends only requested page ranges, not the entire PDF.
- **Progressive rendering**: Render visible pages first; background requests fetch remaining pages.
- **Server preprocessing**: Use the Syncfusion PDF Library to compress, optimize, or split large documents before serving.

### Memory management for large documents

On memory-constrained devices:

- **Reduce worker pool size**: Fewer workers = lower memory overhead.
- **Aggressive cache eviction**: Free resources aggressively; tolerate re-rendering cost.
- **Limit zoom level**: Prevent users from zooming to extremely high levels that require huge bitmaps.
- **Page tiling**: For very large pages, split into smaller tiles and render individually.

**Quick tuning checklist:**

- ✓ Enable DPR-aware scaling (check `devicePixelRatio` on init and on orientation change)
- ✓ Implement visible-only page rendering or lazy loading
- ✓ Cache decoded resources (images, fonts) and reuse across pages
- ✓ Debounce or throttle zoom events to avoid excessive re-renders
- ✓ For large PDFs: enable byte-range requests and progressive loading
- ✓ Monitor memory usage; implement cache eviction if memory exceeds thresholds
- ✓ Test on low-powered devices (older phones, tablets) to identify bottlenecks
- ✓ Use Chrome DevTools Performance tab to profile rendering and identify slow stages

**Performance monitoring:**

Use browser APIs to measure rendering performance:

```js
// Measure render time
const start = performance.now();
await pdfViewer.renderPage(5);
const renderTime = performance.now() - start;
console.log(`Render time: ${renderTime}ms`);
```

See [Performance Optimization](#) for detailed configuration options and [Performance Profiling](#) for advanced diagnostics.

## 9. Common issues & quick troubleshooting

Rendering issues often trace to one of the stages in the pipeline. By understanding the likely cause, you can diagnose and resolve problems quickly.

### Blurry output

**Symptoms**: Text and graphics appear fuzzy or pixelated, especially on high-DPI displays.

**Root causes**:
- Incorrect `devicePixelRatio` handling (canvas buffer too small for physical pixels)
- CSS transform or zoom applied after rendering
- WebGL context loss and fallback to lower-quality rendering

**Fixes**:
1. Verify DPR at init and on orientation change:
   ```js
   console.log('devicePixelRatio:', window.devicePixelRatio);
   ```
2. Check canvas buffer size matches physical dimensions:
   ```js
   canvas.width = logicalWidth * devicePixelRatio;
   ```
3. Disable CSS zoom/transforms that conflict with canvas scaling.
4. For high-resolution devices, consider reducing rendering quality to balance sharpness and performance.

See [Rendering, Rasterization](#4-rendering-rasterization--vector-rendering--compositing) to know more about DPR conversion.

### Text selection misalignment

**Symptoms**: Selecting text doesn't highlight the correct characters; copy-paste gives wrong text.

**Root causes**:
- Font metric mismatch (embedded vs. fallback font)
- Subset font glyph-to-character mapping errors
- Transform matrix not applied correctly
- CORS issues preventing embedded font loading

**Fixes**:
1. Check developer console for font loading errors:
   ```
   CORS error loading font from example.com
   ```
   Add CORS headers on font server.

2. Verify PDF uses fully embedded fonts (not subsets). If subset fonts, enable server-side preprocessing:
   ```js
   const viewer = new PdfViewer({
     serviceUrl: 'https://your-server.com/api/pdf'
   });
   ```

3. For specific PDFs, test with server-side font optimization via the Syncfusion PDF Library.

See [Section 5: HTML text layer](#5-html-text-layer-selectable-and-searchable-text) and [Section 6: Fonts](#6-fonts-embedding-subsetting-and-fallback).

### Missing images

**Symptoms**: Image placeholders or blank areas where images should appear; images render at lower quality than expected.

**Root causes**:
- Image stream decoding failures (unsupported format)
- CORS restrictions preventing image loading
- Memory limits preventing image decoding
- Corrupted image data in the PDF

**Fixes**:
1. Check console for CORS errors:
   ```
   Access to image at 'https://external-domain.com/img.jpg' blocked by CORS policy
   ```
   Solution: Configure CORS on the external server or proxy through your server.

2. Check for decoding errors. Enable debug logging to see which images fail.

3. For unsupported image formats (e.g., JPEG2000), use server-side trans-coding:
   ```js
   const viewer = new PdfViewer({
     serviceUrl: 'https://your-server.com/api/pdf/transcode'
   });
   ```

4. If memory-constrained, implement image caching and eviction (see [Section 8](#8-device--performance-considerations)).

See [Section 2: Resolve resources](#2-resolve-resources-fonts-images).

### Worker failures

**Symptoms**: PDF loads slowly or not at all; console shows worker errors; viewer falls back to main-thread rendering (UI becomes sluggish).

**Root causes**:
- Worker script not found (404) due to incorrect path
- CORS policy blocking worker script load from different origin
- SharedArrayBuffer disabled (security restriction on some browsers)
- Worker quota exceeded (too many workers spawned)
- Browser or environment doesn't support workers

**Fixes**:
1. Verify worker path is correct and accessible:
   ```js
   const viewer = new PdfViewer({
     workerPath: '/assets/pdfviewer-worker.js'  // Verify file exists
   });
   ```

2. Ensure worker script is served with correct `Content-Type`:
   ```
   Content-Type: application/javascript
   ```

3. Check CORS headers if workers are served from a different origin. Workers require same-origin by default.

4. Reduce worker pool size if hitting quota limits:
   ```js
   const viewer = new PdfViewer({
     workerCount: 2  // Reduce from default 4
   });
   ```

5. Test fallback mode (disable workers) to isolate worker-specific issues:
   ```js
   const viewer = new PdfViewer({
     workerCount: 0  // Disable workers
   });
   ```

See [Section 7: Off-main-thread processing](#7-off-main-thread-processing-workers--wasm) and [Worker Troubleshooting](#).

### Performance is sluggish

**Symptoms**: Slow scrolling, delayed rendering, UI freezes during zoom operations.

**Root causes**:
- No visible-only rendering (rendering all pages instead of visible pages)
- Excessive re-renders during continuous zoom or scroll
- Worker pool too small for document complexity
- Insufficient caching or aggressive cache eviction

**Fixes**:
1. Enable lazy rendering if document has many pages:
   ```js
   const viewer = new PdfViewer({
     enableLazyRendering: true
   });
   ```

2. Debounce zoom and scroll events:
   ```js
   viewer.on('zoom', debounce(() => { /* render */ }, 300));
   ```

3. Increase worker pool for high-complexity documents:
   ```js
   const viewer = new PdfViewer({
     workerCount: 4
   });
   ```

4. Profile with Chrome DevTools to identify bottleneck stage (parsing, rendering, etc.).

See [Section 8: Device & performance considerations](#8-device--performance-considerations) and [Performance Profiling](#).

**General diagnostic approach:**

1. **Identify the stage**: Use browser DevTools Network, Performance, and Console tabs to pinpoint which stage fails.
2. **Check logs**: Enable debug logging in the viewer to see intermediate steps.
3. **Test fallbacks**: Disable workers, reduce quality, or use server preprocessing to isolate the root cause.
4. **Isolate the PDF**: Test with simple PDFs (single page, no images) to rule out document-specific issues.
5. **Check environment**: Verify browser version, device capabilities, and network conditions.

## Related topics and further reading

**Architecture and design:**
- [Architecture of Syncfusion React PDF Viewer](../architecture/architecture-pdfviewer) – Component design, module interaction, and data flow
- [Standalone vs Server-Backed Viewer](../architecture/standalone-vs-server-backed) – Client-only vs. hybrid architectures

**Performance and optimization:**
- **Performance Optimization** – Detailed tuning strategies, worker configuration, caching, and profiling
- **Performance Profiling** – Using browser DevTools to measure and diagnose rendering bottlenecks
- **Memory Management** – Cache policies, eviction strategies, and handling large documents

**Rendering and styling:**
- [Theming & Styling](../theming-and-styling) – Theme customization and CSS class reference
- **Rendering Options** – Quality levels, rendering backends (Canvas, SVG, WebGL)

**Resource handling:**
- [Font Management](../how-to/custom-fonts) – Font subsetting, fallback strategies, and troubleshooting
- **Image Optimization** – Server-side image preprocessing and CORS configuration
- [Loading PDF Documents](../getting-started/loading-documents) – Document sources, streaming, and authentication

**Advanced topics:**
- **eb Worker Configuration** – Worker pool tuning, debugging, and fallback modes
- [Server Integration](../server-integration/getting-started) – Using `serviceUrl` for preprocessing, OCR, and advanced features
- [Troubleshooting Guide](../troubleshooting/troubleshooting) – Comprehensive issue resolution and FAQs
- [Syncfusion PDF Library Documentation](../pdf-library/overview) – Server-side PDF processing and manipulation

**Related technologies:**
- [PDFium Reference](https://pdfium.googlesource.com/pdfium/) – Official PDFium documentation (external link)
- [Canvas API Reference](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) – MDN Canvas documentation (external link)
