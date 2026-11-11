# Getting Started with Syncfusion JavaScript PowerPoint Library

## Table of Contents

- [Installation](#installation)
- [Prerequisites](#prerequisites)
- [Platform-Specific Setup](#platform-specific-setup)
  - [React](#react)
- [Basic Presentation Creation Workflow](#basic-presentation-creation-workflow)
- [Key Classes and Enums](#key-classes-and-enums)
- [Common Gotchas](#common-gotchas)
- [Next Steps](#next-steps)

This guide covers installation, setup, and basic usage of the Syncfusion JavaScript PowerPoint library across different platforms.

---

## Installation

The Syncfusion JavaScript PowerPoint library is published on npmjs.com. Install it using npm:

```bash
npm install @syncfusion/ej2-pptx --save
```

> All Syncfusion JS 2 packages are published in the `npmjs.com` registry. The `npm install` command resolves `@syncfusion/ej2-pptx` to the latest stable version.

---

## Prerequisites

Before starting, make sure you have the following installed:

- **Node.js** 18 or later
- **npm** 9 or later, or **Yarn** 1.22 or later
- **React** 18 or later (for React projects)
- A code editor such as Code Studio or Visual Studio Code
- A supported browser: latest versions of Microsoft Edge, Google Chrome, or Mozilla Firefox

To verify your Node.js and npm versions:

```bash
node --version
npm --version
```

---

## Platform-Specific Setup

### React

#### 1. Create a React Project with Vite

```bash
npm create vite@latest my-pptx-app -- --template react
cd my-pptx-app
npm install
```

#### 2. Install the PowerPoint Library

```bash
npm install @syncfusion/ej2-pptx --save
```

#### 3. Create a PowerPoint Presentation (App.jsx)

Replace the contents of `App.jsx` with the following code:

```jsx
import React from 'react';
import { Presentation, HorizontalAlignmentType } from '@syncfusion/ej2-pptx';

export default function App() {
  const createPPTX = async () => {
    // Creates a Presentation instance.
    const pptxDoc = Presentation.create();
    // Adds a slide to the PowerPoint presentation.
    const slide = pptxDoc.slides.add();
    // Adds a textbox for the title.
    const titleShape = slide.shapes.addTextBox({
      bounds: {
        x: 55,
        y: 25,
        width: 850,
        height: 72,
      },
    });
    const paragraph = titleShape.textBody.addParagraph();
    paragraph.horizontalAlignment = HorizontalAlignmentType.Center;
    const textPart1 = paragraph.addTextPart('Hello World!!!');
    textPart1.font.fontName = 'Calibri';
    textPart1.font.bold = true;
    textPart1.font.fontSize = 36;

        // Save the presentation
    const bytes = await presentation.save();

    // Download the presentation
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
  };

  return (
    <div style={{ padding: '1.5rem' }}>
      <button type="button" onClick={createPresentation}>
        Create PowerPoint document
      </button>
    </div>
  );
}
```

#### 4. Run the Application

```bash
npm run dev
```

Vite serves the application at `http://localhost:5173`. Open this URL in a browser and click **Create PowerPoint document** to download the generated file as `Output.pptx`.

> **Note:** If you used Create-React-App instead of Vite, the run command is `npm start` and the default URL is `http://localhost:3000`.

---

## Basic Presentation Creation Workflow

Every PowerPoint document creation follows this pattern:

```typescript
import { Presentation, HorizontalAlignmentType } from '@syncfusion/ej2-pptx';

// Step 1: Create a presentation instance
const pptxDoc = Presentation.create();

// Step 2: Add a slide
const slide = pptxDoc.slides.add();

// Step 3: Add shapes (e.g., text box)
const shape = slide.shapes.addTextBox({
  bounds: { x: 55, y: 25, width: 850, height: 72 },
});

// Step 4: Add paragraphs and text parts
const paragraph = shape.textBody.addParagraph();
paragraph.horizontalAlignment = HorizontalAlignmentType.Center;
const textPart = paragraph.addTextPart('Content here');
textPart.font.fontName = 'Calibri';
textPart.font.bold = true;
textPart.font.fontSize = 36;

// Step 5: Save the presentation
const bytes = await presentation.save();
```

---

## Key Classes and Enums

| Class / Enum | Description |
|---|---|
| `Presentation` | Main entry point — create or open presentations |
| `ISlide` | Represents a slide in the presentation |
| `IShape` / `ITextBox` | Shape elements on a slide |
| `ITextBody` | Text container within a shape |
| `IParagraph` | A paragraph within a text body |
| `ITextPart` | A run of text with specific formatting |
| `HorizontalAlignmentType` | Enum for paragraph alignment (`Left`, `Center`, `Right`, `Justify`) |

---

## Common Gotchas

| Issue | Cause | Fix |
|---|---|---|
| `ReferenceError: ej is not defined` | Using `ej.pptx.Presentation` in a bundler (Vite/CRA) | Use named imports: `import { Presentation } from '@syncfusion/ej2-pptx'` |
| File not downloaded in browser | `save()` not awaited | Always `await pptxDoc.save(...)` |
| Blank presentation | No slide added before saving | Call `pptxDoc.slides.add()` before saving |

---

## Next Steps

- [Loading and Saving Presentations](./loading-and-saving.md) — Open existing `.pptx` files, modify, and save
