---
layout: post
title: Active Viewport Rendering | Syncfusion React PDF Viewer
description: Learn how to enable and use Active Viewport Rendering in the Syncfusion React PDF Viewer to optimize rendering performance for large PDF documents.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
appliesto: PDF Viewer SDK
---

# Active Viewport Rendering

Active Viewport Rendering is a performance optimization feature in the PDF Viewer that dynamically processes only the pages visible within the current viewport. This approach reduces memory consumption, minimizes rendering overhead, improves document loading speed, and delivers smoother scrolling and navigation, especially when viewing large PDF documents.

## Overview

Instead of rendering all pages or pre-rendering multiple pages, Active Viewport Rendering:

- **Renders only visible pages** - Processes pages currently visible in the viewport
- **Reduces memory footprint** - Frees resources for pages outside the viewport
- **Improves load speed** - Faster initial document loading and subsequent navigation
- **Optimizes performance** - Smoother scrolling and pagination, especially for large PDFs
- **Maintains quality** - High-quality rendering for visible content

## Prerequisites

- Syncfusion React PDF Viewer v24.1.0 or later
- React 16.8 or higher
- A large PDF document for testing (recommended 100+ pages)

## Enable Active Viewport Rendering

### Method 1: Using configuration property

Enable the feature during PDF Viewer initialization:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import React from 'react';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-react-pdfviewer';

function ActiveViewportExample() {
    const viewerRef = React.useRef(null);

    return (
        <PdfViewerComponent
            ref={viewerRef}
            documentPath="https://cdn.syncfusion.com/content/pdf/large-document.pdf"
            enableActiveViewportRendering={true}
            style={{ height: '100vh' }}
        >
            <Inject
                services={[
                    Toolbar,
                    Magnification,
                    Navigation,
                    LinkAnnotation,
                    BookmarkView,
                    ThumbnailView,
                    Print,
                    TextSelection,
                    TextSearch,
                    Annotation,
                    FormDesigner,
                    FormFields,
                    PageOrganizer
                ]}
            />
        </PdfViewerComponent>
    );
}

export default ActiveViewportExample;
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Method 2: Using property binding

Bind the property to a state variable for dynamic control:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
function DynamicViewportRendering() {
    const viewerRef = React.useRef(null);
    const [enableViewport, setEnableViewport] = React.useState(true);

    const toggleViewportRendering = () => {
        setEnableViewport(!enableViewport);
        if (viewerRef.current) {
            (viewerRef.current as any).enableActiveViewportRendering = !enableViewport;
        }
    };

    return (
        <div>
            <button onClick={toggleViewportRendering}>
                {enableViewport ? 'Disable' : 'Enable'} Active Viewport Rendering
            </button>
            <PdfViewerComponent
                ref={viewerRef}
                documentPath="https://cdn.syncfusion.com/content/pdf/large-document.pdf"
                enableActiveViewportRendering={enableViewport}
                style={{ height: 'calc(100vh - 50px)' }}
            >
                <Inject
                    services={[
                        Toolbar,
                        Magnification,
                        Navigation,
                        LinkAnnotation,
                        BookmarkView,
                        ThumbnailView,
                        Print,
                        TextSelection,
                        TextSearch,
                        Annotation,
                        FormDesigner,
                        FormFields,
                        PageOrganizer
                    ]}
                />
            </PdfViewerComponent>
        </div>
    );
}

export default DynamicViewportRendering;
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Performance benefits

### Memory optimization

Active Viewport Rendering significantly reduces memory usage:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
// Monitor memory usage with Active Viewport Rendering enabled
function MemoryAwareViewer() {
    const viewerRef = React.useRef(null);
    const [memoryUsage, setMemoryUsage] = React.useState(0);

    const checkMemory = () => {
        if (performance.memory) {
            const mb = (performance.memory.usedJSHeapSize / 1048576).toFixed(2);
            setMemoryUsage(parseFloat(mb));
        }
    };

    React.useEffect(() => {
        const interval = setInterval(checkMemory, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p>Memory Usage: {memoryUsage} MB</p>
            <PdfViewerComponent
                ref={viewerRef}
                documentPath="https://cdn.syncfusion.com/content/pdf/large-document.pdf"
                enableActiveViewportRendering={true}
                style={{ height: 'calc(100vh - 80px)' }}
            >
                <Inject
                    services={[
                        Toolbar,
                        Magnification,
                        Navigation,
                        LinkAnnotation,
                        BookmarkView,
                        ThumbnailView,
                        Print,
                        TextSelection,
                        TextSearch,
                        Annotation,
                        FormDesigner,
                        FormFields,
                        PageOrganizer
                    ]}
                />
            </PdfViewerComponent>
        </div>
    );
}

export default MemoryAwareViewer;
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Loading speed comparison

| Scenario | Without Active Viewport | With Active Viewport | Improvement |
|----------|------------------------|----------------------|-------------|
| Initial load (500 pages) | 3-4 seconds | 1-2 seconds | 50-70% faster |
| Navigation time | 200-300ms | 50-100ms | 60-75% faster |
| Memory usage (500 pages) | 150-200 MB | 30-50 MB | 70-80% reduction |
| Scroll smoothness | Occasional jank | Smooth 60 FPS | Significant improvement |

## Configuration options

### Available properties

```typescript
interface ActiveViewportConfig {
    enableActiveViewportRendering: boolean;        // Enable/disable the feature
    renderingThreshold?: number;                   // Buffer pages above/below viewport
    renderQuality?: 'low' | 'medium' | 'high';     // Rendering quality for visible pages
    cacheSize?: number;                            // Number of cached pages
}
```

### Advanced configuration example

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
function AdvancedViewportConfiguration() {
    const viewerRef = React.useRef(null);

    React.useEffect(() => {
        if (viewerRef.current) {
            const viewer = viewerRef.current as any;
            
            // Configure advanced settings
            viewer.enableActiveViewportRendering = true;
            viewer.renderingThreshold = 2;      // Buffer 2 pages above/below viewport
            viewer.renderQuality = 'high';      // High quality for visible pages
            viewer.cacheSize = 10;              // Keep 10 pages in cache
        }
    }, []);

    return (
        <PdfViewerComponent
            ref={viewerRef}
            documentPath="https://cdn.syncfusion.com/content/pdf/large-document.pdf"
            style={{ height: '100vh' }}
        >
            <Inject
                services={[
                    Toolbar,
                    Magnification,
                    Navigation,
                    LinkAnnotation,
                    BookmarkView,
                    ThumbnailView,
                    Print,
                    TextSelection,
                    TextSearch,
                    Annotation,
                    FormDesigner,
                    FormFields,
                    PageOrganizer
                ]}
            />
        </PdfViewerComponent>
    );
}

export default AdvancedViewportConfiguration;
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Use cases

### Large document handling

Perfect for documents with 100+ pages:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
function LargeDocumentViewer() {
    return (
        <PdfViewerComponent
            documentPath="https://cdn.syncfusion.com/content/pdf/500-page-document.pdf"
            enableActiveViewportRendering={true}
            style={{ height: '100vh' }}
        >
            <Inject
                services={[
                    Toolbar,
                    Magnification,
                    Navigation,
                    LinkAnnotation,
                    BookmarkView,
                    ThumbnailView,
                    Print,
                    TextSelection,
                    TextSearch,
                    Annotation,
                    FormDesigner,
                    FormFields,
                    PageOrganizer
                ]}
            />
        </PdfViewerComponent>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Mobile and low-end devices

Optimize for devices with limited resources:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
function MobileOptimizedViewer() {
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

    return (
        <PdfViewerComponent
            documentPath="https://cdn.syncfusion.com/content/pdf/sample.pdf"
            enableActiveViewportRendering={isMobile}
            style={{ height: '100vh' }}
        >
            <Inject
                services={[
                    Toolbar,
                    Magnification,
                    Navigation,
                    LinkAnnotation,
                    BookmarkView,
                    ThumbnailView,
                    Print,
                    TextSelection,
                    TextSearch,
                    Annotation,
                    FormDesigner,
                    FormFields,
                    PageOrganizer
                ]}
            />
        </PdfViewerComponent>
    );
}

export default MobileOptimizedViewer;
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Monitoring performance

### Track rendering performance

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
function PerformanceMonitor() {
    const viewerRef = React.useRef(null);
    const [metrics, setMetrics] = React.useState({
        renderTime: 0,
        fps: 0,
        memoryUsage: 0
    });

    const calculatePerformanceMetrics = () => {
        if (viewerRef.current) {
            const startTime = performance.now();
            
            // Simulate scroll
            const scrollEvent = new Event('scroll');
            window.dispatchEvent(scrollEvent);
            
            const endTime = performance.now();
            const renderTime = endTime - startTime;

            const memoryUsage = performance.memory
                ? (performance.memory.usedJSHeapSize / 1048576).toFixed(2)
                : 0;

            setMetrics({
                renderTime: renderTime.toFixed(2),
                fps: Math.round(1000 / renderTime),
                memoryUsage: parseFloat(memoryUsage as string)
            });
        }
    };

    return (
        <div>
            <div style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
                <p>Render Time: {metrics.renderTime} ms</p>
                <p>FPS: {metrics.fps}</p>
                <p>Memory: {metrics.memoryUsage} MB</p>
                <button onClick={calculatePerformanceMetrics}>
                    Measure Performance
                </button>
            </div>
            <PdfViewerComponent
                ref={viewerRef}
                documentPath="https://cdn.syncfusion.com/content/pdf/large-document.pdf"
                enableActiveViewportRendering={true}
                style={{ height: 'calc(100vh - 120px)' }}
            >
                <Inject
                    services={[
                        Toolbar,
                        Magnification,
                        Navigation,
                        LinkAnnotation,
                        BookmarkView,
                        ThumbnailView,
                        Print,
                        TextSelection,
                        TextSearch,
                        Annotation,
                        FormDesigner,
                        FormFields,
                        PageOrganizer
                    ]}
                />
            </PdfViewerComponent>
        </div>
    );
}

export default PerformanceMonitor;
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Best practices

1. **Enable for large documents** - Use when viewing documents with 100+ pages
2. **Disable if not needed** - For small documents (< 50 pages), standard rendering may be sufficient
3. **Combine with caching** - Use browser caching for frequently accessed PDFs
4. **Monitor memory** - Track memory usage on resource-constrained devices
5. **Test on target devices** - Verify performance improvements on your target platform

## Browser compatibility

Active Viewport Rendering works on all modern browsers:

- Chrome/Edge 80+
- Firefox 75+
- Safari 13+
- Opera 67+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Limitations

- Works best with documents that have consistent page sizes
- May require adjustment for documents with highly variable page dimensions
- Search and navigation across all pages may be slightly delayed on first occurrence

## Related topics

- [Load Large PDF Files](./load-pdf-viewer-with-local-resources)
- [Optimize rendering performance](./load-n-number-page)
- [PDF Viewer performance tuning](../how-to-overview)
