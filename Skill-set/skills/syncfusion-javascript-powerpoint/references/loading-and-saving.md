# Loading and Saving PowerPoint Presentations

## Table of Contents

- [Overview](#overview)
- [Opening an Existing Presentation](#opening-an-existing-presentation)
  - [Open from Uint8Array or ArrayBuffer](#open-from-uint8array-or-arraybuffer)
  - [Open from a File Input (Browser)](#open-from-a-file-input-browser)
  - [Open from the File System (Node.js)](#open-from-the-file-system-nodejs)
  - [Open from a Network URL (fetch)](#open-from-a-network-url-fetch)
- [Saving a Presentation](#saving-a-presentation)
  - [Save to File (Browser Download)](#save-to-file-browser-download)
  - [Save to File System (Node.js)](#save-to-file-system-nodejs)
  - [Save and Get Bytes (Uint8Array)](#save-and-get-bytes-uint8array)
- [Open, Modify, and Save Workflow](#open-modify-and-save-workflow)
- [Supported Input Formats](#supported-input-formats)
- [Common Gotchas](#common-gotchas)

---

## Overview

The Syncfusion JavaScript PowerPoint Library (`@syncfusion/ej2-pptx`) provides support to:

- **Open** existing PowerPoint presentations from a `Uint8Array`, `ArrayBuffer`, or Base64-encoded string
- **Modify** presentation content programmatically
- **Save** the result and return it as a byte array

> **Note:** The current version of the JavaScript PowerPoint Library supports the `.PPTX` file format only.

---

## Opening an Existing Presentation

### Open from Uint8Array or ArrayBuffer

Use `Presentation.open()` to load an existing presentation. The method accepts presentation data as a **Base64-encoded string** or a **Uint8Array / ArrayBuffer**.

```typescript
import { Presentation } from '@syncfusion/ej2-pptx';

// `data` is a Uint8Array or ArrayBuffer of a .pptx file
const pptxDoc = await Presentation.open(data);
```

---

### Open from a File Input (Browser)

Read the file selected by the user via an `<input type="file">` element, convert it to a `Uint8Array`, and pass it to `Presentation.open()`.

```typescript
import { Presentation } from '@syncfusion/ej2-pptx';

async function openFromFileInput(event: Event): Promise<void> {
  const input = event.target as HTMLInputElement;
  if (!input.files || input.files.length === 0) return;

  const file = input.files[0];
  const arrayBuffer = await file.arrayBuffer();
  const data = new Uint8Array(arrayBuffer);

  // Open the presentation from the Uint8Array
  const pptxDoc = await Presentation.open(data);
  console.log('Presentation opened. Slides:', pptxDoc.slides.count);
}
```

**HTML:**

```html
<input type="file" accept=".pptx" onchange="openFromFileInput(event)" />
```

Searched for text `save()` (`**/docs/**`), 40 results

Read [](file:///d%3A/FeatureAnalysis/EJ2%20PowerPoint%20library/EJ2%20PowerPoint%20viewer/Repo/ej2-powerpoint-library/src/core/package/presentation.ts#580-580), lines 580 to 640

Here is the updated documentation and code examples modified to use parameterless `await pptxDoc.save()` returning `Uint8Array` (standard across browsers and universal runtimes), along with host-environment saving and downloading:

---

### Open from the File System (Node.js)

Use Node.js's `fs` module to read the file as a buffer, then pass it to `Presentation.open()`.

```typescript
import { Presentation } from '@syncfusion/ej2-pptx';
import { readFileSync } from 'fs';

async function openFromDisk(): Promise<void> {
  const buffer = readFileSync('Input.pptx');
  const data = new Uint8Array(buffer);

  const pptxDoc = await Presentation.open(data);
  console.log('Presentation opened. Slides:', pptxDoc.slides.count);
}

openFromDisk();
```

---

### Open from a Network URL (fetch)

Fetch a remote `.pptx` file over HTTP and open it:

```typescript
import { Presentation } from '@syncfusion/ej2-pptx';

async function openFromUrl(url: string): Promise<void> {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const data = new Uint8Array(arrayBuffer);

  const pptxDoc = await Presentation.open(data);
  console.log('Presentation opened from URL. Slides:', pptxDoc.slides.count);
}

openFromUrl('https://example.com/presentations/sample.pptx');
```

---

## Saving a Presentation

### Save to File (Browser Download)

In browser environments, call `await pptxDoc.save()` to serialize the package into a `Uint8Array`, create a `Blob` with the PresentationML MIME type, and trigger a download via an anchor element.

```typescript
import { Presentation } from '@syncfusion/ej2-pptx';

async function downloadPresentation(): Promise<void> {
  // Creates a Presentation instance
  const pptxDoc = Presentation.create();
  // Adds a slide to the presentation
  pptxDoc.slides.add();

  // Serializes the presentation to OPC package bytes
  const bytes = await pptxDoc.save();

  // Triggers browser download
  const blob = new Blob([bytes], {
    type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'Output.pptx';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}
```

---

### Save to File System (Node.js)

In Node.js, retrieve the bytes using `await pptxDoc.save()` and write them to disk using `fs/promises`:

```typescript
import { Presentation } from '@syncfusion/ej2-pptx';
import { writeFile } from 'fs/promises';

async function saveToFile(): Promise<void> {
  const pptxDoc = Presentation.create();
  pptxDoc.slides.add();

  // Serializes to package bytes and writes to disk
  const bytes = await pptxDoc.save();
  await writeFile('Output.pptx', bytes);
  console.log('Saved to Output.pptx');
}

saveToFile();
```

---

### Save and Get Bytes (Uint8Array)

To get raw presentation bytes in memory (for transmission, database storage, or upload to a server), call `save()` with no arguments:

```typescript
import { Presentation } from '@syncfusion/ej2-pptx';

async function saveAsBytes(): Promise<Uint8Array> {
  const pptxDoc = Presentation.create();
  pptxDoc.slides.add();

  // Returns a Uint8Array containing the complete OPC .pptx package
  const bytes = await pptxDoc.save();
  console.log('Bytes length:', bytes.length);
  return bytes;
}
```

---

## Open, Modify, and Save Workflow

The typical round-trip workflow — open an existing presentation, modify it, and serialize the updated bytes with `await pptxDoc.save()`:

```typescript
import { Presentation, HorizontalAlignmentType } from '@syncfusion/ej2-pptx';

async function modifyAndSave(data: Uint8Array): Promise<Uint8Array> {
  // Step 1: Open an existing presentation
  const pptxDoc = await Presentation.open(data);

  // Step 2: Access the first slide (0-based index)
  const slide = pptxDoc.slides.get(0);

  // Step 3: Add a new text box to the slide
  const shape = slide.shapes.addTextBox({
    name: 'NewTitle',
    bounds: { x: 55, y: 25, width: 850, height: 72 },
  });
  const paragraph = shape.textBody.addParagraph();
  paragraph.horizontalAlignment = HorizontalAlignmentType.Center;
  const textPart = paragraph.addTextPart('Modified Title');
  textPart.font.fontName = 'Calibri';
  textPart.font.bold = true;
  textPart.font.fontSize = 36;

  // Step 4: Save and retrieve the modified presentation bytes
  const modifiedBytes = await pptxDoc.save();
  return modifiedBytes;
}
```

---

## Supported Input Formats

| Input Type | Supported | Notes |
|---|---|---|
| `Uint8Array` | ✅ | Recommended — most flexible |
| `ArrayBuffer` | ✅ | Convert to `Uint8Array` via `new Uint8Array(buffer)` |
| Base64 string | ✅ | Pass encoded string directly to `Presentation.open()` |
| File path (Node.js) | ✅ | Use `fs.readFileSync()` to read into a `Uint8Array` |
| Remote URL | ✅ (indirectly) | Use `fetch()` to retrieve the bytes first |
| `.ppt` (legacy binary) | ❌ | Only `.pptx` (Office Open XML) is supported |

---

## Common Gotchas

| Issue | Cause | Fix |
|---|---|---|
| `Presentation.open()` not awaited | Missing `await` on an async call | Always use `await Presentation.open(data)` |
| `save()` not awaited | Missing `await` causes empty file | Always use `await pptxDoc.save(...)` |
| Node.js — file not found | Relative path not resolved correctly | Use `path.resolve(__dirname, 'Input.pptx')` for absolute paths |
| `ArrayBuffer` rejected | Passing raw `ArrayBuffer` to `open()` | Wrap it: `new Uint8Array(arrayBuffer)` before passing |

---

## Next Steps

- [Getting Started](./getting-started.md) — Set up the library and create your first presentation
