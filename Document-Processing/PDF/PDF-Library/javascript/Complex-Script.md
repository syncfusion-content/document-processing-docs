---
title: Complex script text rendering in JavaScript PDF | Syncfusion
canonical_url: https://www.syncfusion.com/document-sdk/javascript-pdf-library
description: Render complex script text such as Tamil and Hindi in PDF documents, form fields and annotations using the Syncfusion JavaScript PDF Library.
platform: document-processing
control: PDF
documentation: UG
---

# Complex script text rendering in JavaScript PDF

The [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) supports rendering complex script text, such as Tamil, Hindi, Marathi and Malayalam, where characters must be shaped and reordered. Enable shaping with the `complexScript` property and use a Unicode TrueType font that contains the required glyphs.

| Class | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `PdfStringFormat` | `complexScript` | `boolean` | `false` | Enables complex script rendering for drawn text. |
| `PdfForm` | `complexScript` | `boolean` | `false` | Enables complex script rendering for text-capable form fields. |
| `PdfField` | `complexScript` | `boolean` | `false` | Enables complex script rendering for the field content. |
| `PdfFreeTextAnnotation` | `complexScript` | `boolean` | `false` | Enables complex script rendering for the annotation text. |
| `PdfFreeTextAnnotation` | `textDirection` | `PdfTextDirection` | `PdfTextDirection.none` | Gets or sets the text direction of the annotation content. |

## Enable complex script for string drawing

Set `complexScript` on `PdfStringFormat` and pass the format to `drawString`.

```typescript
// Create a new PDF document.
let document: PdfDocument = new PdfDocument();
// Add a page to the document.
let page: PdfPage = document.addPage();
// Embed a Unicode TrueType font.
let font: PdfTrueTypeFont = new PdfTrueTypeFont(fontData, 14);
// Create a string format.
let format: PdfStringFormat = new PdfStringFormat();
// Enable complex-script shaping.
format.complexScript = true;
// Draw complex-script text.
page.graphics.drawString('வணக்கம்', font, {x: 20, y: 20, width: 300, height: 100}, null, null, format);
// Save the document.
document.save('output.pdf');
// Destroy the document.
document.destroy();
```

## Enable complex script for an entire form

Set `complexScript` on `PdfForm` to apply shaping to all text-capable fields.

```typescript
// Load an existing PDF document.
let document: PdfDocument = new PdfDocument(data, password);
// Enable complex-script shaping for text-capable fields.
document.form.complexScript = true;
// Generate new field appearances.
document.form.setDefaultAppearance(false);
// Save the document.
document.save('output.pdf');
// Destroy the document.
document.destroy();
```

## Create a text box field under a complex script form

```typescript
// Create a new PDF document.
let document: PdfDocument = new PdfDocument();
// Add a page to the document.
let page: PdfPage = document.addPage();
// Enable complex-script shaping for the form.
document.form.complexScript = true;
// Create a text box field.
let field: PdfTextBoxField = new PdfTextBoxField(page, 'Name', {x: 20, y: 20, width: 200, height: 30});
// Set the field text and Unicode font.
field.text = 'नमस्ते';
field.font = new PdfTrueTypeFont(fontData, 12);
// Add the field to the form.
document.form.add(field);
// Generate field appearances.
document.form.setDefaultAppearance(false);
// Save the document.
document.save('output.pdf');
// Destroy the document.
document.destroy();
```

## Combo box field

Set `complexScript` on `PdfField` to shape the display values of the field.

```typescript
// Create a new PDF document.
let document: PdfDocument = new PdfDocument();
// Add a page to the document.
let page: PdfPage = document.addPage();
// Create a combo box field.
let field: PdfComboBoxField = new PdfComboBoxField(page, 'Language', {x: 20, y: 20, width: 180, height: 24});
// Add the display and export values.
field.addItem(new PdfListFieldItem('தமிழ்', 'value1'));
field.addItem(new PdfListFieldItem('हिन्दी', 'value2'));
// Select the first item.
field.selectedIndex = 0;
// Set the Unicode TrueType font.
field.font = new PdfTrueTypeFont(fontData, 12);
// Enable complex-script shaping.
field.complexScript = true;
// Generate the field appearance.
field.setAppearance(true);
// Add the field to the form.
document.form.add(field);
// Save the document.
document.save('output.pdf');
// Destroy the document.
document.destroy();
```

## List box field

```typescript
// Create a new PDF document.
let document: PdfDocument = new PdfDocument();
// Add a page to the document.
let page: PdfPage = document.addPage();
// Create a list box field.
let field: PdfListBoxField = new PdfListBoxField(page, 'Languages', {x: 20, y: 20, width: 180, height: 80});
// Add the display and export values.
field.addItem(new PdfListFieldItem('मराठी', 'value1'));
field.addItem(new PdfListFieldItem('മലയാളം', 'value2'));
// Set the Unicode TrueType font.
field.font = new PdfTrueTypeFont(fontData, 12);
// Enable complex-script shaping.
field.complexScript = true;
// Generate the field appearance.
field.setAppearance(true);
// Add the field to the form.
document.form.add(field);
// Save the document.
document.save('output.pdf');
// Destroy the document.
document.destroy();
```

## Button caption

```typescript
// Create a new PDF document.
let document: PdfDocument = new PdfDocument();
// Add a page to the document.
let page: PdfPage = document.addPage();
// Create a button field.
let field: PdfButtonField = new PdfButtonField(page, 'Submit', {x: 20, y: 20, width: 120, height: 30});
// Set the button caption and Unicode TrueType font.
field.text = 'சமர்ப்பிக்கவும்';
field.font = new PdfTrueTypeFont(fontData, 12);
// Enable complex-script shaping.
field.complexScript = true;
// Generate the field appearance.
field.setAppearance(true);
// Add the field to the form.
document.form.add(field);
// Save the document.
document.save('output.pdf');
// Destroy the document.
document.destroy();
```

## Free text annotation

Use `complexScript` and `textDirection` on `PdfFreeTextAnnotation` to render shaped text with the required direction.

```typescript
// Load an existing PDF document.
let document: PdfDocument = new PdfDocument(data, password);
// Access the first page.
let page: PdfPage = document.getPage(0);
// Create a free-text annotation.
let annotation: PdfFreeTextAnnotation = new PdfFreeTextAnnotation({x: 20, y: 20, width: 250, height: 80});
// Set the annotation text and Unicode TrueType font.
annotation.text = 'नमस्ते जग';
annotation.font = new PdfTrueTypeFont(fontData, 12);
// Enable complex-script shaping and right-to-left layout.
annotation.complexScript = true;
annotation.textDirection = PdfTextDirection.rightToLeft;
// Add the annotation to the page.
page.annotations.add(annotation);
// Save the document.
document.save('output.pdf');
// Destroy the document.
document.destroy();
```
