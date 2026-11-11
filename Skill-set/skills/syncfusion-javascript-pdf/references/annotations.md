# Annotations in PDF Documents

## Table of Contents

1. [Overview](#overview)
2. [Annotation Types](#annotation-types)
   - [Popup Annotation](#popup-annotation)
   - [Free Text Annotation](#free-text-annotation)
   - [Line Annotation](#line-annotation)
   - [Shape Annotations](#shape-annotations)
   - [Rubber Stamp Annotation](#rubber-stamp-annotation)
   - [Ink Annotation](#ink-annotation)
   - [Text Markup Annotations](#text-markup-annotations)
   - [File Attachment Annotation](#file-attachment-annotation)
   - [URI Annotation](#uri-annotation)
   - [Document Link Annotation](#document-link-annotation)
   - [Watermark Annotation](#watermark-annotation)
   - [Redaction Annotation](#redaction-annotation)
3. [Custom Appearance in Stamp Annotation](#custom-appearance-in-stamp-annotation)
4. [Measurement Annotations](#measurement-annotations)
   - [Adding Measurement Annotations](#adding-measurement-annotations)
   - [Modifying Measurement Annotations](#modifying-measurement-annotations)
5. [Cloud Border Styles](#cloud-border-styles)
6. [Adding Annotations](#adding-annotations)
7. [Modifying Annotations](#modifying-annotations)
8. [Removing Annotations](#removing-annotations)
9. [Flattening Annotations](#flattening-annotations)
10. [Import and Export](#import-and-export)
11. [Best Practices](#best-practices)
12. [Common Gotchas](#common-gotchas)
13. [Related References](#related-references)

## Overview

Annotations in Syncfusion's JavaScript PDF library enable interactive elements within PDF documents including comments, highlights, shapes, and markup. The library supports creating, modifying, importing, and exporting annotations with full control over appearance and behavior. The library supports annotation appearance customization, including cloud border style effects for supported shape-based annotations.

## Annotation Types

### Popup Annotation

Add comment popups:

```typescript
import {PdfDocument, PdfPage, PdfPopupAnnotation, PdfPopupIcon, PdfAnnotationBorder} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let popup: PdfPopupAnnotation = new PdfPopupAnnotation(
    'Test popup annotation',
    { x: 10, y: 40, width: 30, height: 30 },
    {
        author: 'Syncfusion',
        subject: 'General',
        color: { r: 255, g: 255, b: 0 },
        icon: PdfPopupIcon.newParagraph,
        open: true
    });
popup.border = new PdfAnnotationBorder({width: 4, hRadius: 20, vRadius: 30});
page.annotations.add(popup);
document.save('output.pdf');
document.destroy();
```

### Free Text Annotation

Add visible text directly on pages:

```typescript
import {PdfDocument, PdfPage, PdfFreeTextAnnotation, PdfTextAlignment, PdfAnnotationIntent, PdfAnnotationBorder, PdfBorderStyle, PdfLineEndingStyle, PdfFontFamily, PdfFontStyle} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let freeText: PdfFreeTextAnnotation = new PdfFreeTextAnnotation({ x: 250, y: 260, width: 180, height: 80 },
    {
        text: 'Free Text with Callout',
        annotationIntent: PdfAnnotationIntent.freeTextCallout,
        calloutLines: [{ x: 200, y: 320 }, { x: 260, y: 300 }, { x: 260, y: 300 }],
        lineEndingStyle: PdfLineEndingStyle.openArrow,
        font: document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular),
        textMarkUpColor: { r: 40, g: 40, b: 40 },
        innerColor: { r: 240, g: 248, b: 255 },
        borderColor: { r: 0, g: 0, b: 0 },
        textAlignment: PdfTextAlignment.left,
        opacity: 1,
        border: new PdfAnnotationBorder({ width: 1, hRadius: 0, vRadius: 0, style: PdfBorderStyle.solid })
    });
page.annotations.add(freeText);
document.save('output.pdf');
document.destroy();
```

### Line Annotation

Draw lines with endpoints:

```typescript
import {PdfDocument, PdfPage, PdfLineAnnotation, PdfAnnotationLineEndingStyle, PdfLineEndingStyle, PdfAnnotationCaption, PdfLineCaptionType} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let lineAnnotation: PdfLineAnnotation = new PdfLineAnnotation({ x: 80, y: 420 }, { x: 150, y: 420 }, {
    text: 'Line Annotation',
    author: 'Syncfusion',
    color: { r: 255, g: 0, b: 0 },
    innerColor: { r: 255, g: 255, b: 0 },
    lineEndingStyle: new PdfAnnotationLineEndingStyle({ begin: PdfLineEndingStyle.circle, end: PdfLineEndingStyle.diamond }),
    opacity: 0.5
});
lineAnnotation.leaderExt = 0;
lineAnnotation.leaderLine = 0;
lineAnnotation.caption = new PdfAnnotationCaption({ cap: true, type: PdfLineCaptionType.inline });
page.annotations.add(lineAnnotation);
document.save('output.pdf');
document.destroy();
```

### Shape Annotations

Add geometric shapes:

```typescript
import {PdfDocument, PdfPage, PdfRectangleAnnotation, PdfCircleAnnotation, PdfPolygonAnnotation, PdfAnnotationBorder, PdfBorderStyle} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let rect: PdfRectangleAnnotation = new PdfRectangleAnnotation({ x: 50, y: 80, width: 200, height: 100 }, {
    text: 'Rect',
    author: 'Syncfusion',
    color: { r: 255, g: 0, b: 0 },
    innerColor: { r: 255, g: 240, b: 240 },
    opacity: 0.6,
    border: new PdfAnnotationBorder({ width: 1, style: PdfBorderStyle.solid })
});
page.annotations.add(rect);
document.save('output.pdf');
document.destroy();
```

### Rubber Stamp Annotation

Apply predefined stamps:

```typescript
import {PdfDocument, PdfPage, PdfRubberStampAnnotation, PdfRubberStampAnnotationIcon} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let stamp: PdfRubberStampAnnotation = new PdfRubberStampAnnotation({ x: 40, y: 60, width: 80, height: 20 },
    {
        icon: PdfRubberStampAnnotationIcon.draft,
        text: 'Text Properties Rubber Stamp Annotation'
    });
page.annotations.add(stamp);
document.save('output.pdf');
document.destroy();
```

### Ink Annotation

Draw freehand marks:

```typescript
import {PdfDocument, PdfPage, PdfInkAnnotation} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let annotation: PdfInkAnnotation = new PdfInkAnnotation(
    { x: 50, y: 100, width: 200, height: 150 },
    [
        { x: 60, y: 120 },
        { x: 120, y: 180 },
        { x: 200, y: 160 }
    ],
    {
        text: 'Ink',
        author: 'Syncfusion',
        color: { r: 0, g: 0, b: 255 },
        thickness: 2,
        opacity: 0.8
    }
);
page.annotations.add(annotation);
document.save('output.pdf');
document.destroy();
```

### Text Markup Annotations

Highlight, underline, or strikeout text:

```typescript
import {PdfDocument, PdfPage, PdfTextMarkupAnnotation, PdfTextMarkupAnnotationType} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
let annotation: PdfTextMarkupAnnotation = new PdfTextMarkupAnnotation('Water Mark', {x: 0, y: 0, width: 0, height: 0}, {
    boundsCollection: [{ x: 50, y: 200, width: 120, height: 14}, { x: 50, y: 215, width: 90, height: 14}],
    textMarkupType: PdfTextMarkupAnnotationType.underline,
    textMarkUpColor: { r: 0, g: 128, b: 255}
});
page.annotations.add(annotation);
document.save('output.pdf');
document.destroy();
```

### File Attachment Annotation

Embed external files within a PDF document using `PdfAttachmentAnnotation`:

```typescript
import {
  PdfDocument,
  PdfPage,
  PdfAttachmentAnnotation,
  PdfAttachmentIcon,
  PdfAnnotationBorder,
  PdfBorderStyle
} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();

let attachment: PdfAttachmentAnnotation = new PdfAttachmentAnnotation(
  { x: 300, y: 200, width: 30, height: 30 },
  'Nature.jpg',
  imageData, // Uint8Array or Base64 string
  {
    text: 'Attachment',
    icon: PdfAttachmentIcon.pushPin,
    color: { r: 255, g: 0, b: 0 },
    opacity: 1,
    border: new PdfAnnotationBorder({ width: 1, hRadius: 0, vRadius: 0, style: PdfBorderStyle.solid })
  }
);
page.annotations.add(attachment);

document.save('output.pdf');
document.destroy();
```

### URI Annotation

Create clickable links to external web addresses or online resources using `PdfUriAnnotation`:

```typescript
import { PdfDocument, PdfPage, PdfUriAnnotation } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();

let uriAnnotation: PdfUriAnnotation = new PdfUriAnnotation(
  { x: 100, y: 150, width: 200, height: 100 },
  'https://www.syncfusion.com'
);
page.annotations.add(uriAnnotation);

document.save('output.pdf');
document.destroy();
```

### Document Link Annotation

Create internal navigation links that jump to a specific page and destination using `PdfDocumentLinkAnnotation`:

```typescript
import {
  PdfDocument,
  PdfPage,
  PdfDocumentLinkAnnotation,
  PdfDestination,
  PdfDestinationMode,
  PdfAnnotationBorder,
  PdfBorderStyle
} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();

let linkAnnotation: PdfDocumentLinkAnnotation = new PdfDocumentLinkAnnotation(
  { x: 80, y: 100, width: 120, height: 18 },
  new PdfDestination(page, { x: 0, y: 0 }, { mode: PdfDestinationMode.fitToPage }),
  {
    color: { r: 0, g: 128, b: 0 },
    opacity: 1,
    border: new PdfAnnotationBorder({ width: 1, hRadius: 0, vRadius: 0, style: PdfBorderStyle.solid })
  }
);
page.annotations.add(linkAnnotation);

document.save('output.pdf');
document.destroy();
```

### Watermark Annotation

Add visible watermark overlays to a PDF page using `PdfWatermarkAnnotation`:

```typescript
import { PdfDocument, PdfPage, PdfWatermarkAnnotation } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();

let watermarkAnnotation: PdfWatermarkAnnotation = new PdfWatermarkAnnotation(
  'Water Mark',
  { x: 50, y: 100, width: 100, height: 50 }
);
watermarkAnnotation.color = { r: 0, g: 0, b: 0 };
page.annotations.add(watermarkAnnotation);

document.save('output.pdf');
document.destroy();
```

### Redaction Annotation

Mark sensitive areas of a PDF for permanent removal using `PdfRedactionAnnotation`:

```typescript
import {
  PdfDocument,
  PdfPage,
  PdfRedactionAnnotation,
  PdfFontFamily,
  PdfFontStyle
} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();

let redactionAnnotation: PdfRedactionAnnotation = new PdfRedactionAnnotation(
  { x: 100, y: 100, width: 100, height: 100 },
  {
    borderColor: { r: 255, g: 0, b: 0 },
    repeatText: true,
    overlayText: 'CONFIDENTIAL',
    font: document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular),
    textColor: { r: 0, g: 0, b: 0 }
  }
);
page.annotations.add(redactionAnnotation);

document.save('output.pdf');
document.destroy();
```

## Custom Appearance in Stamp Annotation

Embed a custom raster image or vector graphic into the normal appearance template of a rubber stamp using `PdfRubberStampAnnotation`:

```typescript
import {
  PdfDocument,
  PdfPage,
  PdfRubberStampAnnotation,
  PdfImage,
  PdfBitmap
} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(data);
let page: PdfPage = document.getPage(0) as PdfPage;

// Create image from byte array
let image: PdfImage = new PdfBitmap(imageBytes);

// Create rubber stamp annotation
let stamp: PdfRubberStampAnnotation = new PdfRubberStampAnnotation({ x: 50, y: 100, width: 100, height: 50 });

// Draw custom image into normal appearance template
stamp.appearance.normal.graphics.drawImage(image, { x: 0, y: 0, width: 100, height: 50 });
page.annotations.add(stamp);

document.save('output.pdf');
document.destroy();
```

## Measurement Annotations

Measurement annotations display real-world dimensions for distances (Line), circular dimensions/radius (Circle), areas (Square), and angular measurements (Angle) directly on a PDF page.

### Adding Measurement Annotations

Add a line measurement annotation using `PdfLineAnnotation` configured with `measurementUnit` and `PdfAnnotationCaption`:

```typescript
import {
  PdfDocument,
  PdfPage,
  PdfLineAnnotation,
  PdfAnnotationLineEndingStyle,
  PdfLineEndingStyle,
  PdfAnnotationCaption,
  PdfLineCaptionType,
  PdfMeasurementUnit
} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();

let lineAnnotation: PdfLineAnnotation = new PdfLineAnnotation(
  { x: 80, y: 420 },
  { x: 150, y: 420 },
  {
    text: 'Line Measurement',
    author: 'Syncfusion',
    color: { r: 255, g: 0, b: 0 },
    innerColor: { r: 255, g: 255, b: 0 },
    lineEndingStyle: new PdfAnnotationLineEndingStyle({
      begin: PdfLineEndingStyle.circle,
      end: PdfLineEndingStyle.diamond
    }),
    opacity: 0.5,
    measurementUnit: PdfMeasurementUnit.centimeter
  }
);

// Assign line caption type
lineAnnotation.caption = new PdfAnnotationCaption({ cap: true, type: PdfLineCaptionType.inline });
page.annotations.add(lineAnnotation);

document.save('output.pdf');
document.destroy();
```

### Modifying Measurement Annotations

Modify existing measurement annotations by updating `unit` and setting `measure = true`:

```typescript
import { PdfDocument, PdfPage, PdfLineAnnotation, PdfMeasurementUnit } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(data);
let page: PdfPage = document.getPage(0);

let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
annotation.unit = PdfMeasurementUnit.centimeter;
annotation.measure = true;

document.save('output.pdf');
document.destroy();
```

## Cloud Border Styles

Apply cloud-style borders to supported annotations using PdfBorderEffect. Cloud borders help visually emphasize annotations and preserve the appearance of review and markup workflows.

### Supported Annotation Types

- Rectangle annotations
- Polygon annotations
- Circle annotations
- Ellipse annotations
- Free text annotations

### Key APIs

- PdfBorderEffect
- PdfBorderEffectStyle
- borderEffect

```typescript
const borderEffect = new PdfBorderEffect();
borderEffect.intensity = 2;
borderEffect.style = PdfBorderEffectStyle.cloudy;

annotation.borderEffect = borderEffect;
```

Use cloud border effects when annotations need stronger visual emphasis or when preserving review markup appearance during annotation modification workflows.

## Adding Annotations

### Basic Addition

Add annotations to pages:

```typescript
// Create annotation
let annotation = new PdfPopupAnnotation(...);

// Add to page
page.annotations.add(annotation);
```

## Modifying Annotations

### Updating Properties

Modify existing annotations:

```typescript
import {PdfDocument, PdfPage, PdfPopupAnnotation} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(data);
let page: PdfPage = document.getPage(0);
let annotation: PdfPopupAnnotation = page.annotations.at(0) as PdfPopupAnnotation;
annotation.text = 'Updated text';
annotation.color = { r: 0, g: 128, b: 255};
annotation.opacity = 0.5;
document.save('output.pdf');
document.destroy();
```

## Removing Annotations

### Deletion Methods

Remove annotations from documents:

```typescript
import {PdfDocument, PdfPage, PdfAnnotation} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(data);
let page: PdfPage = document.getPage(0);
let annotation: PdfAnnotation = page.annotations.at(0);
page.annotations.remove(annotation);
page.annotations.removeAt(1);
document.save('output.pdf');
document.destroy();
```

## Flattening Annotations

### Making Permanent

Convert annotations to static content:

```typescript
import {PdfDocument, PdfPage, PdfLineAnnotation} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(data);
let page: PdfPage = document.getPage(0);
let annotation: PdfLineAnnotation = page.annotations.at(0) as PdfLineAnnotation;
annotation.flatten = true;
document.save('output.pdf');
document.destroy();
```

## Import and Export

### Importing Annotations

Import from external sources:

```typescript
import {PdfDocument, DataFormat} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(data);
document.importAnnotations(jsonData, DataFormat.json);
document.save('output.pdf');
document.destroy();
```

### Exporting Annotations

Export to external formats:

```typescript
import {PdfDocument, PdfAnnotationExportSettings, DataFormat} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument(data);
let settings: PdfAnnotationExportSettings = new PdfAnnotationExportSettings();
settings.dataFormat = DataFormat.json;
document.exportAnnotations('annotations.json', settings);
document.destroy();
```

## Best Practices

1. **Type Safety**: Use specific annotation classes for type-safe operations
2. **Bounds**: Ensure annotation bounds fit within page dimensions
3. **Colors**: Use appropriate color contrast for visibility
4. **Flattening**: Flatten annotations before final document distribution
5. **Performance**: Minimize number of complex annotations per page
6. **Accessibility**: Add meaningful text descriptions for screen readers
7. **Cloud Border Styling**: Use cloud border styles for review-oriented annotations.
8. **Intensity Adjustment**: Adjust border effect intensity carefully to maintain readability.
9. **Preserve Settings**: Preserve borderEffect settings when modifying annotations.
10. **Consistency**: Apply cloud effects consistently across related annotations.

## Common Gotchas

1. **Coordinate System**: PDF uses bottom-left origin for positioning
2. **Flattening**: Once flattened, annotations cannot be edited
3. **Import Format**: Ensure import data matches specified format
4. **Bounds Validation**: Invalid bounds may cause rendering issues
5. **Type Casting**: Cast to specific types when accessing annotations
6. **Document State**: Some operations require saving before export
7. **Type Support**: Cloud border effects are supported only by specific annotation types.
8. **Intensity Impact**: Extreme intensity values may reduce readability.
9. **Style Requirement**: Border effects require PdfBorderEffectStyle.cloudy to render as cloud borders.
10. **Appearance Workflow**: Appearance changes may require saving the document before export workflows.

## Related References

- [Text Rendering](./text-rendering.md) - Adding text content
- [Form Fields](./form-fields.md) - Interactive form elements
- [Bookmarks](./bookmarks.md) - Document navigation
- [Hyperlinks](./hyperlinks.md) - Link annotations
- [Measurement Annotations](./annotations.md) - Dimension and markup tracking
- [Templates](./templates.md) - Document stamps and templates