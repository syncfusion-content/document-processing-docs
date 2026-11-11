# Syncfusion JavaScript PowerPoint Library - Skill Documentation

This directory contains skill documentation for working with Syncfusion's JavaScript PowerPoint processing library. The skill provides guidance on creating, opening, modifying, and saving PowerPoint presentations across multiple platforms.

## Directory Structure

```
syncfusion-javascript-powerpoint/
├── README.md           (this file)
├── SKILL.md            (main skill entry point)
└── references/         (detailed feature documentation)
    ├── getting-started.md
    └── loading-and-saving.md
```

---

## Overview

**Skill Name:** `syncfusion-javascript-powerpoint`

**Purpose:** Create, open, modify, and save PowerPoint presentations programmatically using the Syncfusion JavaScript PowerPoint library.

**Library:**
- `@syncfusion/ej2-pptx` — JavaScript PowerPoint creation and manipulation

**Platform Support:**
- ✅ JavaScript (ES5+)
- ✅ TypeScript
- ✅ Angular
- ✅ React
- ✅ Vue
- ✅ Node.js

**Supported File Format:** `.PPTX` (Office Open XML) only

---

## Installation

Install the Syncfusion JavaScript PowerPoint library using npm:

```bash
npm install @syncfusion/ej2-pptx --save
```

---

## References

| File | Description |
|---|---|
| [references/getting-started.md](references/getting-started.md) | Installation, platform setup (React, TypeScript, JS, Angular, Vue, Node.js), basic creation workflow, key classes, and common gotchas |
| [references/loading-and-saving.md](references/loading-and-saving.md) | Opening presentations from Uint8Array, file input, Node.js disk, and URLs; saving to file or bytes; open-modify-save round-trip workflow |

---

## Quick Usage Example

```typescript
import { Presentation, HorizontalAlignmentType } from '@syncfusion/ej2-pptx';

// Create a new presentation
const pptxDoc = Presentation.create();
const slide = pptxDoc.slides.add();
const shape = slide.shapes.addTextBox({
  bounds: { x: 55, y: 25, width: 850, height: 72 },
});
const paragraph = shape.textBody.addParagraph();
paragraph.horizontalAlignment = HorizontalAlignmentType.Center;
const textPart = paragraph.addTextPart('Hello World!!!');
textPart.font.fontName = 'Calibri';
textPart.font.bold = true;
textPart.font.fontSize = 36;
await pptxDoc.save();
```
