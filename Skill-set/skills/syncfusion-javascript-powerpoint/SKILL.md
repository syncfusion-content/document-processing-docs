---
name: syncfusion-javascript-powerpoint
description: "Provides comprehensive guidance for implementing the Syncfusion JavaScript PowerPoint library (@syncfusion/ej2-pptx) to create, open, modify, and save PowerPoint presentations programmatically across TypeScript, JavaScript, Angular, React, Vue, and Node.js platforms. Use this when working with PowerPoint creation, loading existing presentations, saving to file or bytes, adding slides, text boxes, paragraphs, and text formatting."
metadata:
  author: "Syncfusion Inc"
  version: "1.0.0"
---

# Processing PowerPoint Presentations

A comprehensive skill for creating, reading, and manipulating PowerPoint presentations programmatically using the Syncfusion JavaScript PowerPoint library. This library provides seamless integration for TypeScript, JavaScript, Angular, React, Vue, and Node.js applications.

## When to Use This Skill

Use this skill when the user needs to:

- **Create PowerPoint presentations** from scratch with slides, text boxes, paragraphs, and formatted text
- **Open existing presentations** from `Uint8Array`, `ArrayBuffer`, Base64 strings, or file paths
- **Modify presentations** by accessing existing slides and adding or updating shapes
- **Save presentations** to file system downloads (browser) or disk (Node.js)
- **Get raw bytes** of a saved presentation as a `Uint8Array` for upload or in-memory use
- **Format text** using font name, size, bold, and alignment options
- **Integrate PowerPoint generation** into React, Angular, Vue, or Node.js applications

**Platform Support:** TypeScript, JavaScript, Angular, React, Vue, Node.js

## Library Overview

The Syncfusion JavaScript PowerPoint library (`@syncfusion/ej2-pptx`) is a lightweight, high-performance non-UI library written natively in JavaScript for:

- Creating PowerPoint presentations from scratch
- Opening, modifying, and saving existing `.pptx` presentations
- Adding and formatting slides, text boxes, paragraphs, and text runs
- Running in both **browser** and **Node.js** environments
- No dependency on Microsoft Office or COM libraries

**Supported File Format:** `.PPTX` (Office Open XML) only

**Key Classes and Enums:**

| Class / Enum | Description |
|---|---|
| `Presentation` | Main entry point — `create()` or `open()` presentations |
| `ISlide` | Represents a slide in the presentation |
| `IShape` / `ITextBox` | Shape elements placed on a slide |
| `ITextBody` | Text container within a shape |
| `IParagraph` | A paragraph within a text body |
| `ITextPart` | A run of text with specific formatting |
| `HorizontalAlignmentType` | Enum for paragraph alignment (`Left`, `Center`, `Right`, `Justify`) |

---

## Documentation and Navigation Guide

### Getting Started

📄 **Read:** [references/getting-started.md](references/getting-started.md)

Use this reference when the user needs to:
- Install the `@syncfusion/ej2-pptx` npm package
- Set up the library for React, TypeScript, JavaScript, Angular, Vue, or Node.js
- Understand prerequisites and environment requirements
- Create their first PowerPoint presentation from scratch
- Learn about the basic presentation creation workflow
- Understand key classes and common import patterns
- Avoid common errors such as `ReferenceError: ej is not defined`

### Loading and Saving Presentations

📄 **Read:** [references/loading-and-saving.md](references/loading-and-saving.md)

Use this reference when the user needs to:
- Open an existing `.pptx` file from a `Uint8Array` or `ArrayBuffer`
- Open a presentation from a browser file input (`<input type="file">`)
- Open a presentation from disk in Node.js using `fs.readFileSync`
- Fetch a remote presentation from a URL using `fetch`
- Save a presentation as a file download in the browser
- Save a presentation to disk in Node.js
- Obtain the raw `Uint8Array` bytes of a saved presentation
- Perform a full open → modify → save round-trip workflow
- Understand supported input formats and their limitations

---

## General Rules and Best Practices

1. **Always use named imports** from the npm package:
   ```typescript
   import { Presentation, HorizontalAlignmentType } from '@syncfusion/ej2-pptx';
   ```
   The npm package does **not** expose a global `ej` namespace. Using `ej.pptx.Presentation` without loading the UMD bundle from CDN will throw `ReferenceError: ej is not defined`.

2. **Always `await` async methods:**
   - `await Presentation.open(data)` — opens an existing presentation
   - `await pptxDoc.save()` — saves the presentation

3. **Supported format:** Only `.pptx` (Office Open XML) is supported. Legacy `.ppt` binary format is not supported.

4. **Browser vs. Node.js behavior:**
   - In browsers, `save()` triggers a file download automatically.
   - In Node.js, `save()` return the saved pptx bytes.

5. **Slide access is 0-based:** Use `pptxDoc.slides(0)` to access the first slide.
