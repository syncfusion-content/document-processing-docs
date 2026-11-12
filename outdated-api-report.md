# Outdated API report: JavaScript PDF UG

Validated only against `@syncfusion/ej2-pdf@35.1.46` and `@syncfusion/ej2-pdf-data-extract@35.1.46` (latest on npm; .d.ts and entry points).

Method: every `typescript` code block was compiled with `tsc` against the installed typings (4 blocks failed to parse and were reported as syntax issues); every `javascript` block, inline code and prose was checked via a name inventory of all `export declare` symbols plus targeted member checks. Placeholder variables (`data`, `certData`, ...) and Node/DOM typing noise were excluded.

## Report 1: Executive Summary

- Markdown files scanned: 34
- Code samples scanned: 449 (227 TypeScript, 222 JavaScript)
- API references detected: 3043 (`Pdf*` identifiers in code and prose) plus `ej.pdf.*`/`ej.pdfdataextract.*` usages (829, all exports checked)
- Issues found: 99 (in 18 files)

| Severity | Count |
|---|---|
| Critical | 2 |
| High | 54 |
| Medium | 28 |
| Low | 15 |

| Category | Count |
|---|---|
| OUTDATED_PROPERTY | 27 |
| INVALID_SAMPLE | 19 |
| SIGNATURE_MISMATCH | 17 |
| OUTDATED_IMPORT | 14 |
| OUTDATED_CONSTRUCTOR | 8 |
| RENAMED_API | 6 |
| OUTDATED_CLASS | 4 |
| OUTDATED_METHOD | 2 |
| OUTDATED_ENUM_MEMBER | 2 |

## Report 2: Detailed Findings

| File | Line | API | Type | Severity | Issue | Current Usage | Suggested Fix |
|---|---|---|---|---|---|---|---|
| Document-Processing/PDF/PDF-Library/javascript/Annotations.md | 460 | PdfAttachmentAnnotation | OUTDATED_CONSTRUCTOR | High | Constructor takes (bounds, attachment[, properties]); sample passes (bounds, fileName, data, properties). | `let annotation: PdfAttachmentAnnotation = new PdfAttachmentAnnotation(` | new PdfAttachmentAnnotation(bounds, new PdfAttachment('Nature.jpg', imageData), {...}) |
| Document-Processing/PDF/PDF-Library/javascript/Annotations.md | 482 | PdfAttachmentAnnotation | OUTDATED_CONSTRUCTOR | High | Constructor takes (bounds, attachment[, properties]); sample passes (bounds, fileName, data, properties). | `var annotation = new ej.pdf.PdfAttachmentAnnotation(` | new PdfAttachmentAnnotation(bounds, new PdfAttachment('Nature.jpg', imageData), {...}) |
| Document-Processing/PDF/PDF-Library/javascript/Annotations.md | 561 | PdfDestination | INVALID_SAMPLE | High | `page: page` is not valid syntax; sample cannot compile. | `new PdfDestination(page: page, { x: 0, y: 0 }, {mode: PdfDestinationMode.fitToPage}),` | new PdfDestination(page, { x:0, y:0 }, { mode: PdfDestinationMode.fitToPage }) |
| Document-Processing/PDF/PDF-Library/javascript/Annotations.md | 583 | PdfDestination | INVALID_SAMPLE | High | `page: page` is not valid syntax; sample cannot compile. | `new ej.pdf.PdfDestination(page: page, {x:0, y:0}, {mode:ej.pdf.PdfDestinationMode.fitToPage}),` | new PdfDestination(page, { x:0, y:0 }, { mode: PdfDestinationMode.fitToPage }) |
| Document-Processing/PDF/PDF-Library/javascript/Annotations.md | 1343 | PdfPage | INVALID_SAMPLE | Low | Missing import | `let page: PdfPage = document.getPage(0) as PdfPage;` | Add the missing import/cast or rename variable |
| Document-Processing/PDF/PDF-Library/javascript/Create-PDF-document-angular.md | 137 | PdfDocument/PdfPage/PdfGraphics/PdfFont/PdfBrush | INVALID_SAMPLE | Low | Types used without import | `const document = new PdfDocument();` | Add the missing import/cast or rename variable |
| Document-Processing/PDF/PDF-Library/javascript/Create-PDF-document-typescript.md | 158 | PdfDocument/PdfPage/PdfGraphics/PdfFont/PdfBrush | INVALID_SAMPLE | Low | Types used without import | `const pdf = new PdfDocument();` | Add the missing import/cast or rename variable |
| Document-Processing/PDF/PDF-Library/javascript/DigitalSignature.md | 186 | PdfSignatureOptions.algorithm | OUTDATED_PROPERTY | High | PdfSignatureOptions uses digestAlgorithm; `algorithm` is rejected (only valid in callback's own options param). | `algorithm: DigestAlgorithm.sha256,` | digestAlgorithm: DigestAlgorithm.sha256 |
| Document-Processing/PDF/PDF-Library/javascript/DigitalSignature.md | 219 | PdfSignatureOptions.algorithm | OUTDATED_PROPERTY | High | PdfSignatureOptions uses digestAlgorithm; `algorithm` is rejected (only valid in callback's own options param). | `algorithm: ej.pdf.DigestAlgorithm.sha256` | digestAlgorithm: DigestAlgorithm.sha256 |
| Document-Processing/PDF/PDF-Library/javascript/DigitalSignature.md | 266 | PdfSignatureOptions.algorithm | OUTDATED_PROPERTY | High | PdfSignatureOptions uses digestAlgorithm; `algorithm` is rejected (only valid in callback's own options param). | `algorithm: DigestAlgorithm.sha256` | digestAlgorithm: DigestAlgorithm.sha256 |
| Document-Processing/PDF/PDF-Library/javascript/DigitalSignature.md | 300 | PdfSignatureOptions.algorithm | OUTDATED_PROPERTY | High | PdfSignatureOptions uses digestAlgorithm; `algorithm` is rejected (only valid in callback's own options param). | `algorithm: ej.pdf.DigestAlgorithm.sha256` | digestAlgorithm: DigestAlgorithm.sha256 |
| Document-Processing/PDF/PDF-Library/javascript/DigitalSignature.md | 352 | PdfSignatureOptions.algorithm | OUTDATED_PROPERTY | High | PdfSignatureOptions uses digestAlgorithm; `algorithm` is rejected (only valid in callback's own options param). | `algorithm: DigestAlgorithm.sha256` | digestAlgorithm: DigestAlgorithm.sha256 |
| Document-Processing/PDF/PDF-Library/javascript/DigitalSignature.md | 400 | PdfSignatureOptions.algorithm | OUTDATED_PROPERTY | High | PdfSignatureOptions uses digestAlgorithm; `algorithm` is rejected (only valid in callback's own options param). | `algorithm: ej.pdf.DigestAlgorithm.sha256` | digestAlgorithm: DigestAlgorithm.sha256 |
| Document-Processing/PDF/PDF-Library/javascript/DigitalSignature.md | 721 | PdfCertificationFlags | RENAMED_API | High | Enum is named PdfCertificationFlag (singular). | `PdfCertificationFlags.allowFormFill` | PdfCertificationFlag |
| Document-Processing/PDF/PDF-Library/javascript/DigitalSignature.md | 832 | PdfCertificationFlags | RENAMED_API | High | Enum is named PdfCertificationFlag (singular). | `PdfCertificationFlags.allowFormFill` | PdfCertificationFlag |
| Document-Processing/PDF/PDF-Library/javascript/DigitalSignature.md | 851 | PdfCertificationFlags | RENAMED_API | High | Enum is named PdfCertificationFlag (singular). | `PdfCertificationFlags.allowFormFill` | PdfCertificationFlag |
| Document-Processing/PDF/PDF-Library/javascript/DigitalSignature.md | 867 | PdfForm.fieldAt | INVALID_SAMPLE | Low | `fieldAt` returns PdfField; assignment to PdfSignatureField needs `as PdfSignatureField` | `field = ldocument.form.fieldAt(1);` | Add the missing import/cast or rename variable |
| Document-Processing/PDF/PDF-Library/javascript/DigitalSignature.md | 876 | PdfCertificationFlags | RENAMED_API | High | Enum is named PdfCertificationFlag (singular). | `PdfCertificationFlags.allowFormFill` | PdfCertificationFlag |
| Document-Processing/PDF/PDF-Library/javascript/DigitalSignature.md | 906 | PdfCertificationFlags | RENAMED_API | High | Enum is named PdfCertificationFlag (singular). | `PdfCertificationFlags.allowFormFill` | PdfCertificationFlag |
| Document-Processing/PDF/PDF-Library/javascript/DigitalSignature.md | 931 | PdfCertificationFlags | RENAMED_API | High | Enum is named PdfCertificationFlag (singular). | `PdfCertificationFlags.allowFormFill` | PdfCertificationFlag |
| Document-Processing/PDF/PDF-Library/javascript/DigitalSignature.md | 961 | TimestampCallback | SIGNATURE_MISMATCH | Medium | TimestampCallback must resolve { data }, not { response }. | `async function timestampCallback(request: Uint8Array): Promise<{ response: Uint8Array }> {` | Promise<{ data: Uint8Array }> |
| Document-Processing/PDF/PDF-Library/javascript/DigitalSignature.md | 1432 | PdfForm.fieldAt | INVALID_SAMPLE | Low | `fieldAt` returns PdfField; needs cast | `let signature: PdfSignatureField = form.fieldAt(0);` | Add the missing import/cast or rename variable |
| Document-Processing/PDF/PDF-Library/javascript/FormFields.md | 1054 | PdfSignature constructor | OUTDATED_CONSTRUCTOR | Critical | Constructor takes no args; sign via static PdfSignature.create(...). | `let signature: PdfSignature = new PdfSignature(pfxData, 'password');` | PdfSignature.create(pfxData, password, options) |
| Document-Processing/PDF/PDF-Library/javascript/FormFields.md | 1055 | PdfSignature.reason/location/contactInfo | OUTDATED_PROPERTY | High | No public setters (only private _reason/_contactInfo). | `signature.reason = 'Approval';` | Pass reason/location/contactInfo in PdfSignatureOptions to PdfSignature.create |
| Document-Processing/PDF/PDF-Library/javascript/FormFields.md | 1056 | PdfSignature.reason/location/contactInfo | OUTDATED_PROPERTY | High | No public setters (only private _reason/_contactInfo). | `signature.location = 'Headquarters';` | Pass reason/location/contactInfo in PdfSignatureOptions to PdfSignature.create |
| Document-Processing/PDF/PDF-Library/javascript/FormFields.md | 1057 | PdfSignature.reason/location/contactInfo | OUTDATED_PROPERTY | High | No public setters (only private _reason/_contactInfo). | `signature.contactInfo = 'support@example.com';` | Pass reason/location/contactInfo in PdfSignatureOptions to PdfSignature.create |
| Document-Processing/PDF/PDF-Library/javascript/FormFields.md | 1059 | PdfSignatureField.sign | OUTDATED_METHOD | High | Method does not exist on PdfSignatureField. | `field.sign(signature);` | field.setSignature(signature) |
| Document-Processing/PDF/PDF-Library/javascript/FormFields.md | 1075 | PdfSignature constructor | OUTDATED_CONSTRUCTOR | Critical | Constructor takes no args; sign via static PdfSignature.create(...). | `var signature = new ej.pdf.PdfSignature(pfxData, pfxPassword);` | PdfSignature.create(pfxData, password, options) |
| Document-Processing/PDF/PDF-Library/javascript/FormFields.md | 1076 | PdfSignature.reason/location/contactInfo | OUTDATED_PROPERTY | High | No public setters (only private _reason/_contactInfo). | `signature.reason = 'Approval';` | Pass reason/location/contactInfo in PdfSignatureOptions to PdfSignature.create |
| Document-Processing/PDF/PDF-Library/javascript/FormFields.md | 1077 | PdfSignature.reason/location/contactInfo | OUTDATED_PROPERTY | High | No public setters (only private _reason/_contactInfo). | `signature.location = 'Headquarters';` | Pass reason/location/contactInfo in PdfSignatureOptions to PdfSignature.create |
| Document-Processing/PDF/PDF-Library/javascript/FormFields.md | 1078 | PdfSignature.reason/location/contactInfo | OUTDATED_PROPERTY | High | No public setters (only private _reason/_contactInfo). | `signature.contactInfo = 'support@example.com';` | Pass reason/location/contactInfo in PdfSignatureOptions to PdfSignature.create |
| Document-Processing/PDF/PDF-Library/javascript/FormFields.md | 1080 | PdfSignatureField.sign | OUTDATED_METHOD | High | Method does not exist on PdfSignatureField. | `field.sign(signature);` | field.setSignature(signature) |
| Document-Processing/PDF/PDF-Library/javascript/HyperLinks.md | 83 | PdfDocumentLinkAnnotation | OUTDATED_CONSTRUCTOR | High | Constructor is (bounds) \| (bounds, destination[, properties]); the (bounds,color,innerColor,opacity) form is gone. | `let annotation: PdfDocumentLinkAnnotation = new PdfDocumentLinkAnnotation({ x: 50, y: 40, width: size.width, height: size.height }, { r: 0, g: 0, b: 0}, { r: 16` | new PdfDocumentLinkAnnotation(bounds, destination, { color, innerColor, opacity }) |
| Document-Processing/PDF/PDF-Library/javascript/HyperLinks.md | 109 | PdfDocumentLinkAnnotation | OUTDATED_CONSTRUCTOR | High | Constructor is (bounds) \| (bounds, destination[, properties]); the (bounds,color,innerColor,opacity) form is gone. | `var annotation = new ej.pdf.PdfDocumentLinkAnnotation({ x: 50, y: 40, width: size.width, height: size.height }, { r: 0, g: 0, b: 0 }, { r: 165, g: 42, b: 42 }, ` | new PdfDocumentLinkAnnotation(bounds, destination, { color, innerColor, opacity }) |
| Document-Processing/PDF/PDF-Library/javascript/Image-Extraction.md | 34 | PdfDataExtractor.extractImages | SIGNATURE_MISMATCH | Medium | Returns Promise<PdfEmbeddedImage[]>; sample assigns without await. | `const imageInfoCollection: PdfEmbeddedImage[] = extractor.extractImages({` | await extractor.extractImages({...}) |
| Document-Processing/PDF/PDF-Library/javascript/Image-Extraction.md | 70 | PdfDataExtractor.extractImages | SIGNATURE_MISMATCH | Medium | Returns Promise<PdfEmbeddedImage[]>; sample assigns without await. | `var imageInfoCollection = extractor.extractImages({` | await extractor.extractImages({...}) |
| Document-Processing/PDF/PDF-Library/javascript/Images.md | 133 | PdfImage.draw | SIGNATURE_MISMATCH | High | draw accepts only (graphics) or (graphics, Point); no bounds overload. | `image.draw(graphics, { x: 10, y: 10, width: 200, height: 100 });` | graphics.drawImage(image, { x:10, y:10, width:200, height:100 }) |
| Document-Processing/PDF/PDF-Library/javascript/Images.md | 157 | PdfImage.draw | SIGNATURE_MISMATCH | High | draw accepts only (graphics) or (graphics, Point); no bounds overload. | `image.draw(graphics, { x: 10, y: 10, width: 200, height: 100 });` | graphics.drawImage(image, { x:10, y:10, width:200, height:100 }) |
| Document-Processing/PDF/PDF-Library/javascript/Lists.md | 99 | PdfTextAlignment | INVALID_SAMPLE | Low | Not imported in sample | `format: new PdfStringFormat(PdfTextAlignment.center),` | Add the missing import/cast or rename variable |
| Document-Processing/PDF/PDF-Library/javascript/Lists.md | 333 | PdfNumberStyle.lowerLetter | OUTDATED_ENUM_MEMBER | High | Enum member does not exist. | `style: PdfNumberStyle.lowerLetter,` | PdfNumberStyle.lowerLatin |
| Document-Processing/PDF/PDF-Library/javascript/Lists.md | 358 | PdfNumberStyle.lowerLetter | OUTDATED_ENUM_MEMBER | High | Enum member does not exist. | `style: ej.pdf.PdfNumberStyle.lowerLetter,` | PdfNumberStyle.lowerLatin |
| Document-Processing/PDF/PDF-Library/javascript/Open-and-save-PDF-files.md | 29 | PdfDocument | INVALID_SAMPLE | Low | Type used without import | `let document: PdfDocument = new PdfDocument(data);` | Add the missing import/cast or rename variable |
| Document-Processing/PDF/PDF-Library/javascript/Open-and-save-PDF-files.md | 36 | PdfDocumentPdfDocument | INVALID_SAMPLE | High | Typo creates non-existent class. | `var document = new ej.pdf.PdfDocumentPdfDocument(data);` | new ej.pdf.PdfDocument(data) |
| Document-Processing/PDF/PDF-Library/javascript/PDF-document.md | 81 | PdfDocumentInformation | OUTDATED_IMPORT | Medium | Type is declared in pdf/core/pdf-document-information.d.ts but is not re-exported from the ej2-pdf entry point (index.d.ts has no export for it); `import { PdfDocumentInformation }` fails with TS2724. | `import { PdfDocument, PdfDocumentInformation } from '@syncfusion/ej2-pdf';` | Remove the import and use inferred type (`let info = document.getDocumentInformation()`). |
| Document-Processing/PDF/PDF-Library/javascript/Redaction.md | 44 | document.createElement | INVALID_SAMPLE | Low | `document` is shadowed by a PdfDocument variable so DOM createElement fails | `const canvas = document.createElement('canvas');` | Add the missing import/cast or rename variable |
| Document-Processing/PDF/PDF-Library/javascript/Redaction.md | 150 | PdfRedactor.redact | INVALID_SAMPLE | High | `callBack:` label inside call is not valid syntax. | `await redactor.redact(callBack: canvasRenderCallback);` | redactor.redact(canvasRenderCallback) |
| Document-Processing/PDF/PDF-Library/javascript/Redaction.md | 225 | PdfRedactor.redact | INVALID_SAMPLE | High | `callBack:` label inside call is not valid syntax. | `await redactor.redact(callBack: canvasRenderCallback);` | redactor.redact(canvasRenderCallback) |
| Document-Processing/PDF/PDF-Library/javascript/Shapes.md | 122 | drawRoundedRectangle | OUTDATED_IMPORT | High | Not an exported function; it is a method of PdfGraphics. | `import { PdfDocument, PdfPage, PdfGraphics, PdfPen, PdfBrush, drawRoundedRectangle } from '@syncfusion/ej2-pdf';` | Remove from import; call graphics.drawRoundedRectangle(...). |
| Document-Processing/PDF/PDF-Library/javascript/Shapes.md | 238 | Point | INVALID_SAMPLE | Low | `Point` type not imported | `let points: Point[] = [{x: 10, y: 100}, { x: 10, y: 200}, { x: 100, y: 100}, { x: 100, y: 200}, { x: 55, y: 150}];` | Add the missing import/cast or rename variable |
| Document-Processing/PDF/PDF-Library/javascript/Shapes.md | 420 | PdfGraphics | INVALID_SAMPLE | Low | Not imported | `let graphics: PdfGraphics = page.graphics;` | Add the missing import/cast or rename variable |
| Document-Processing/PDF/PDF-Library/javascript/Tables.md | 375 | PdfGrid.rows | OUTDATED_PROPERTY | High | PdfGrid has no `rows` property. | `grid.rows[0].height = 50;` | grid.getRow(0) |
| Document-Processing/PDF/PDF-Library/javascript/Tables.md | 377 | PdfGrid.rows | OUTDATED_PROPERTY | High | PdfGrid has no `rows` property. | `grid.rows[0].style = {` | grid.getRow(0) |
| Document-Processing/PDF/PDF-Library/javascript/Tables.md | 418 | PdfGrid.rows | OUTDATED_PROPERTY | High | PdfGrid has no `rows` property. | `grid.rows[0].height = 50;` | grid.getRow(0) |
| Document-Processing/PDF/PDF-Library/javascript/Tables.md | 420 | PdfGrid.rows | OUTDATED_PROPERTY | High | PdfGrid has no `rows` property. | `grid.rows[0].style = {` | grid.getRow(0) |
| Document-Processing/PDF/PDF-Library/javascript/Tables.md | 466 | PdfGridStyle.space | SIGNATURE_MISMATCH | Medium | `space` is typed number, not an object. | `space: { left: 1, right: 1, top: 1, bottom: 1 },` | space: 1 |
| Document-Processing/PDF/PDF-Library/javascript/Tables.md | 497 | PdfGridStyle.space | SIGNATURE_MISMATCH | Medium | `space` is typed number, not an object. | `space: { left: 1, right: 1, top: 1, bottom: 1 },` | space: 1 |
| Document-Processing/PDF/PDF-Library/javascript/Tables.md | 1018 | PdfGridCellStyle.backgroundImage | OUTDATED_PROPERTY | Medium | Cell style has no `backgroundImage`; image goes into `background`. | `Set `backgroundImage` in the cell style. A `fitType` value of `3` stretches the background image to fill the content area.` | style: { background: <PdfBackgroundImage> } |
| Document-Processing/PDF/PDF-Library/javascript/Tables.md | 1041 | PdfGridCellStyle.backgroundImage | OUTDATED_PROPERTY | Medium | Cell style has no `backgroundImage`; image goes into `background`. | `{ value: 'Employee ID', style: { backgroundImage: {` | style: { background: <PdfBackgroundImage> } |
| Document-Processing/PDF/PDF-Library/javascript/Tables.md | 1083 | PdfGridCellStyle.backgroundImage | OUTDATED_PROPERTY | Medium | Cell style has no `backgroundImage`; image goes into `background`. | `{ value: 'Employee ID', style: { backgroundImage: {` | style: { background: <PdfBackgroundImage> } |
| Document-Processing/PDF/PDF-Library/javascript/Tables.md | 1211 | PdfGrid constructor | OUTDATED_CONSTRUCTOR | High | Third argument must be options object `{style?, builtInStyle?}`. | `let grid: PdfGrid = new PdfGrid(source, columns, style);` | new PdfGrid(source, columns, { style }) |
| Document-Processing/PDF/PDF-Library/javascript/Tables.md | 1233 | PdfGrid constructor | OUTDATED_CONSTRUCTOR | High | Third argument must be options object `{style?, builtInStyle?}`. | `var grid = new ej.pdf.PdfGrid(source, columns, style);` | new PdfGrid(source, columns, { style }) |
| Document-Processing/PDF/PDF-Library/javascript/Tables.md | 1266 | PdfGrid.dataSource | OUTDATED_PROPERTY | High | dataSource is declared `readonly`; cannot be assigned. | `grid.dataSource = [{ id: 'E10', name: 'Andrew' }, { id: 'E11', name: 'Michael' }];` | Create a new PdfGrid with the new data source (or add rows via addRow). |
| Document-Processing/PDF/PDF-Library/javascript/Tables.md | 1288 | PdfGrid.dataSource | OUTDATED_PROPERTY | High | dataSource is declared `readonly`; cannot be assigned. | `grid.dataSource = [{ id: 'E10', name: 'Andrew' }, { id: 'E11', name: 'Michael' }];` | Create a new PdfGrid with the new data source (or add rows via addRow). |
| Document-Processing/PDF/PDF-Library/javascript/Tables.md | 1457 | PdfTemplate | INVALID_SAMPLE | Low | Not imported | `let template: PdfTemplate = new PdfTemplate(300, 200);` | Add the missing import/cast or rename variable |
| Document-Processing/PDF/PDF-Library/javascript/Tables.md | 1467 | PdfGraphics.drawTemplate | SIGNATURE_MISMATCH | High | Only overload takes Rectangle (width and height required). | `page.graphics.drawTemplate(template, { x: 10, y: 10 });` | drawTemplate(template, { x: 10, y: 10, width: 300, height: 200 }) |
| Document-Processing/PDF/PDF-Library/javascript/Tables.md | 1491 | PdfGraphics.drawTemplate | SIGNATURE_MISMATCH | High | Only overload takes Rectangle (width and height required). | `page.graphics.drawTemplate(template, { x: 10, y: 10 });` | drawTemplate(template, { x: 10, y: 10, width: 300, height: 200 }) |
| Document-Processing/PDF/PDF-Library/javascript/Text-Extraction.md | 171 | PdfFontStyle/Rectangle import | OUTDATED_IMPORT | High | Not exported by @syncfusion/ej2-pdf-data-extract (defined in ej2-pdf). | `import { PdfDataExtractor, TextLine, TextWord, TextGlyph, PdfFontStyle, Rectangle } from '@syncfusion/ej2-pdf-data-extract';` | Import PdfFontStyle and Rectangle from '@syncfusion/ej2-pdf'. |
| Document-Processing/PDF/PDF-Library/javascript/Text-Extraction.md | 246 | PdfFontStyle/Rectangle import | OUTDATED_IMPORT | High | Not exported by @syncfusion/ej2-pdf-data-extract (defined in ej2-pdf). | `import { PdfDataExtractor, TextLine, TextWord, TextGlyph, PdfFontStyle, Rectangle } from '@syncfusion/ej2-pdf-data-extract';` | Import PdfFontStyle and Rectangle from '@syncfusion/ej2-pdf'. |
| Document-Processing/PDF/PDF-Library/javascript/Text-Extraction.md | 324 | PdfFontStyle/Rectangle import | OUTDATED_IMPORT | High | Not exported by @syncfusion/ej2-pdf-data-extract (defined in ej2-pdf). | `import { PdfDataExtractor, TextLine, TextWord, TextGlyph, PdfFontStyle } from '@syncfusion/ej2-pdf-data-extract';` | Import PdfFontStyle and Rectangle from '@syncfusion/ej2-pdf'. |
| Document-Processing/PDF/PDF-Library/javascript/Text-Extraction.md | 448 | PdfFontStyle/Rectangle import | OUTDATED_IMPORT | High | Not exported by @syncfusion/ej2-pdf-data-extract (defined in ej2-pdf). | `import { PdfDataExtractor, TextSearchResult, Rectangle } from '@syncfusion/ej2-pdf-data-extract';` | Import PdfFontStyle and Rectangle from '@syncfusion/ej2-pdf'. |
| Document-Processing/PDF/PDF-Library/javascript/Text-Extraction.md | 461 | searchResults declaration | INVALID_SAMPLE | Medium | Stray `;` before `=` breaks the statement. | `let searchResults: Map<number, Rectangle[]>; = textSearch.searchResults;` | let searchResults: Map<number, Rectangle[]> = textSearch.searchResults; |
| Document-Processing/PDF/PDF-Library/javascript/Text.md | 502 | PdfDocument.embedFont | SIGNATURE_MISMATCH | Medium | Standard-font overload requires the `style` argument. | `let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 14);` | document.embedFont(PdfFontFamily.helvetica, 14, PdfFontStyle.regular) |
| Document-Processing/PDF/PDF-Library/javascript/Text.md | 524 | PdfPage.drawTextElement | SIGNATURE_MISMATCH | Medium | Argument must be Point ({x,y}) or full Rectangle; {x,y,width} matches neither. | `let result: PdfLayoutResult = page.drawTextElement(element, { x: 40, y: 60, width: 400 });` | Pass a Point `{x,y}` or add `height` to make a Rectangle. |
| Document-Processing/PDF/PDF-Library/javascript/Text.md | 534 | PdfPage.drawTextElement | SIGNATURE_MISMATCH | Medium | Argument must be Point ({x,y}) or full Rectangle; {x,y,width} matches neither. | `nextPage.drawTextElement(continuation, { x: 40, y: result.bounds.y + 10, width: 400 });` | Pass a Point `{x,y}` or add `height` to make a Rectangle. |
| Document-Processing/PDF/PDF-Library/javascript/Text.md | 546 | PdfDocument.embedFont | SIGNATURE_MISMATCH | Medium | Standard-font overload requires the `style` argument. | `var font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 14);` | document.embedFont(PdfFontFamily.helvetica, 14, PdfFontStyle.regular) |
| Document-Processing/PDF/PDF-Library/javascript/Text.md | 568 | PdfPage.drawTextElement | SIGNATURE_MISMATCH | Medium | Argument must be Point ({x,y}) or full Rectangle; {x,y,width} matches neither. | `var result = page.drawTextElement(element, { x: 40, y: 60, width: 400 });` | Pass a Point `{x,y}` or add `height` to make a Rectangle. |
| Document-Processing/PDF/PDF-Library/javascript/Text.md | 578 | PdfPage.drawTextElement | SIGNATURE_MISMATCH | Medium | Argument must be Point ({x,y}) or full Rectangle; {x,y,width} matches neither. | `nextPage.drawTextElement(continuation, { x: 40, y: result.bounds.y + 10, width: 400 });` | Pass a Point `{x,y}` or add `height` to make a Rectangle. |
| Document-Processing/PDF/PDF-Library/javascript/Watermarks.md | 39 | PdfImage | INVALID_SAMPLE | Low | Not imported | `let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');` | Add the missing import/cast or rename variable |
| Document-Processing/PDF/PDF-Library/javascript/Watermarks.md | 149 | PdfAnnotationCollection.at | INVALID_SAMPLE | Low | `at(i)` returns PdfAnnotation; assignment to PdfWatermarkAnnotation needs a cast | `const annotation: PdfWatermarkAnnotation = page.annotations.at(i);` | Add the missing import/cast or rename variable |
| Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md | 25 | PdfDocumentInformation | OUTDATED_IMPORT | Medium | Type is declared in pdf/core/pdf-document-information.d.ts but is not re-exported from the ej2-pdf entry point (index.d.ts has no export for it); `import { PdfDocumentInformation }` fails with TS2724. | `import { PdfDocument, PdfXmpMetadata, PdfDocumentInformation } from '@syncfusion/ej2-pdf';` | Remove the import and use inferred type (`let info = document.getDocumentInformation()`). |
| Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md | 77 | PdfDocumentInformation | OUTDATED_IMPORT | Medium | Type is declared in pdf/core/pdf-document-information.d.ts but is not re-exported from the ej2-pdf entry point (index.d.ts has no export for it); `import { PdfDocumentInformation }` fails with TS2724. | `import { PdfDocument, PdfDocumentInformation, PdfXmpMetadata } from '@syncfusion/ej2-pdf';` | Remove the import and use inferred type (`let info = document.getDocumentInformation()`). |
| Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md | 121 | PdfDocumentProperties | OUTDATED_CLASS | High | No such class/type in either package. | `import { PdfDocument, PdfDocumentProperties, PdfCustomMetadata } from '@syncfusion/ej2-pdf';` | Remove import; use inferred type from `document.getDocumentInformation(false)`. |
| Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md | 126 | PdfDocumentProperties | OUTDATED_CLASS | High | No such class/type in either package. | `let documentProperties: PdfDocumentProperties = document.getDocumentInformation(false);` | Remove import; use inferred type from `document.getDocumentInformation(false)`. |
| Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md | 166 | PdfDocumentProperties | OUTDATED_CLASS | High | No such class/type in either package. | `import { PdfDocument, PdfDocumentProperties, PdfCustomMetadata } from '@syncfusion/ej2-pdf';` | Remove import; use inferred type from `document.getDocumentInformation(false)`. |
| Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md | 171 | PdfDocumentProperties | OUTDATED_CLASS | High | No such class/type in either package. | `let documentProperties: PdfDocumentProperties = document.getDocumentInformation(false);` | Remove import; use inferred type from `document.getDocumentInformation(false)`. |
| Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md | 225 | PdfDocumentInformation | OUTDATED_IMPORT | Medium | Type is declared in pdf/core/pdf-document-information.d.ts but is not re-exported from the ej2-pdf entry point (index.d.ts has no export for it); `import { PdfDocumentInformation }` fails with TS2724. | `import { PdfDocument, PdfDocumentInformation } from '@syncfusion/ej2-pdf';` | Remove the import and use inferred type (`let info = document.getDocumentInformation()`). |
| Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md | 272 | PdfDocumentInformation | OUTDATED_IMPORT | Medium | Type is declared in pdf/core/pdf-document-information.d.ts but is not re-exported from the ej2-pdf entry point (index.d.ts has no export for it); `import { PdfDocumentInformation }` fails with TS2724. | `import { PdfDocument, PdfDocumentInformation, PdfXmpMetadata } from '@syncfusion/ej2-pdf';` | Remove the import and use inferred type (`let info = document.getDocumentInformation()`). |
| Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md | 317 | PdfDocumentInformation | OUTDATED_IMPORT | Medium | Type is declared in pdf/core/pdf-document-information.d.ts but is not re-exported from the ej2-pdf entry point (index.d.ts has no export for it); `import { PdfDocumentInformation }` fails with TS2724. | `import { PdfDocument, PdfDocumentInformation, PdfXmpMetadata } from '@syncfusion/ej2-pdf';` | Remove the import and use inferred type (`let info = document.getDocumentInformation()`). |
| Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md | 327 | PdfBasicJobTicketSchema.jobName | OUTDATED_PROPERTY | Medium | Property does not exist (only jobRef). | `xmpMetadata.basicJobTicketSchema.jobName = 'Quarterly Report';` | Remove, or use basicJobTicketSchema.jobRef |
| Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md | 344 | PdfBasicJobTicketSchema.jobName | OUTDATED_PROPERTY | Medium | Property does not exist (only jobRef). | `xmpMetadata.basicJobTicketSchema.jobName = 'Quarterly Report';` | Remove, or use basicJobTicketSchema.jobRef |
| Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md | 362 | PdfDocumentInformation | OUTDATED_IMPORT | Medium | Type is declared in pdf/core/pdf-document-information.d.ts but is not re-exported from the ej2-pdf entry point (index.d.ts has no export for it); `import { PdfDocumentInformation }` fails with TS2724. | `import { PdfDocument, PdfDocumentInformation, PdfXmpMetadata } from '@syncfusion/ej2-pdf';` | Remove the import and use inferred type (`let info = document.getDocumentInformation()`). |
| Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md | 372 | PdfRightsManagementSchema.mark | OUTDATED_PROPERTY | Medium | Property does not exist. | `xmpMetadata.rightsManagementSchema.mark = 'Copyright 2026 Syncfusion';` | rightsManagementSchema.isMarked = true (and usageTerms/webStatement) |
| Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md | 390 | PdfRightsManagementSchema.mark | OUTDATED_PROPERTY | Medium | Property does not exist. | `xmpMetadata.rightsManagementSchema.mark = 'Copyright 2026 Syncfusion';` | rightsManagementSchema.isMarked = true (and usageTerms/webStatement) |
| Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md | 416 | PdfDocument.xmpMetadata | OUTDATED_PROPERTY | High | PdfDocument has no public xmpMetadata (only private _xmpMetadata). | `document.xmpMetadata = xmpMetadata;` | document.setDocumentInformation({ xmpMetadata }) |
| Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md | 434 | PdfDocument.xmpMetadata | OUTDATED_PROPERTY | High | PdfDocument has no public xmpMetadata (only private _xmpMetadata). | `document.xmpMetadata = xmpMetadata;` | document.setDocumentInformation({ xmpMetadata }) |
| Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md | 456 | PdfDocumentInformation | OUTDATED_IMPORT | Medium | Type is declared in pdf/core/pdf-document-information.d.ts but is not re-exported from the ej2-pdf entry point (index.d.ts has no export for it); `import { PdfDocumentInformation }` fails with TS2724. | `import { PdfDocument, PdfDocumentInformation, PdfXmpMetadata } from '@syncfusion/ej2-pdf';` | Remove the import and use inferred type (`let info = document.getDocumentInformation()`). |
| Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md | 465 | PdfPagedTextSchema.pageCount | SIGNATURE_MISMATCH | Low | pageCount is number. | `xmpMetadata.pagedTextSchema.pageCount = document.pageCount.toString();` | pageCount = document.pageCount |
| Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md | 481 | PdfPagedTextSchema.pageCount | SIGNATURE_MISMATCH | Low | pageCount is number. | `xmpMetadata.pagedTextSchema.pageCount = document.pageCount.toString();` | pageCount = document.pageCount |
| Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md | 499 | PdfDocumentInformation | OUTDATED_IMPORT | Medium | Type is declared in pdf/core/pdf-document-information.d.ts but is not re-exported from the ej2-pdf entry point (index.d.ts has no export for it); `import { PdfDocumentInformation }` fails with TS2724. | `import { PdfDocument, PdfDocumentInformation, PdfCustomSchema, PdfXmpMetadata } from '@syncfusion/ej2-pdf';` | Remove the import and use inferred type (`let info = document.getDocumentInformation()`). |

## Report 3: File-wise Summary

| File | Pdf* references checked | Issues Found |
|---|---|---|
| Document-Processing/PDF/PDF-Library/javascript/Annotations.md | 428 | 5 |
| Document-Processing/PDF/PDF-Library/javascript/Barcode.md | 66 | 0 |
| Document-Processing/PDF/PDF-Library/javascript/Bookmarks.md | 102 | 0 |
| Document-Processing/PDF/PDF-Library/javascript/Create-PDF-document-angular.md | 20 | 1 |
| Document-Processing/PDF/PDF-Library/javascript/Create-PDF-document-asp-net-core.md | 10 | 0 |
| Document-Processing/PDF/PDF-Library/javascript/Create-PDF-document-asp-net-mvc.md | 10 | 0 |
| Document-Processing/PDF/PDF-Library/javascript/Create-PDF-document-javascript.md | 9 | 0 |
| Document-Processing/PDF/PDF-Library/javascript/Create-PDF-document-node-js.md | 20 | 0 |
| Document-Processing/PDF/PDF-Library/javascript/Create-PDF-document-react.md | 17 | 0 |
| Document-Processing/PDF/PDF-Library/javascript/Create-PDF-document-typescript.md | 20 | 1 |
| Document-Processing/PDF/PDF-Library/javascript/Create-PDF-document-vue.md | 17 | 0 |
| Document-Processing/PDF/PDF-Library/javascript/DigitalSignature.md | 330 | 15 |
| Document-Processing/PDF/PDF-Library/javascript/Encryption.md | 138 | 0 |
| Document-Processing/PDF/PDF-Library/javascript/FormFields.md | 380 | 10 |
| Document-Processing/PDF/PDF-Library/javascript/Header-Footer.md | 438 | 0 |
| Document-Processing/PDF/PDF-Library/javascript/HyperLinks.md | 77 | 2 |
| Document-Processing/PDF/PDF-Library/javascript/Image-Extraction.md | 14 | 2 |
| Document-Processing/PDF/PDF-Library/javascript/Images.md | 71 | 2 |
| Document-Processing/PDF/PDF-Library/javascript/Layers.md | 74 | 0 |
| Document-Processing/PDF/PDF-Library/javascript/Lists.md | 207 | 3 |
| Document-Processing/PDF/PDF-Library/javascript/Merge-Document.md | 43 | 0 |
| Document-Processing/PDF/PDF-Library/javascript/Open-and-save-PDF-files.md | 24 | 2 |
| Document-Processing/PDF/PDF-Library/javascript/Overview.md | 0 | 0 |
| Document-Processing/PDF/PDF-Library/javascript/PDF-document.md | 50 | 1 |
| Document-Processing/PDF/PDF-Library/javascript/PDF-pages.md | 155 | 0 |
| Document-Processing/PDF/PDF-Library/javascript/Redaction.md | 64 | 3 |
| Document-Processing/PDF/PDF-Library/javascript/Shapes.md | 125 | 3 |
| Document-Processing/PDF/PDF-Library/javascript/Split-Documents.md | 22 | 0 |
| Document-Processing/PDF/PDF-Library/javascript/Tables.md | 374 | 16 |
| Document-Processing/PDF/PDF-Library/javascript/Templates.md | 27 | 0 |
| Document-Processing/PDF/PDF-Library/javascript/Text-Extraction.md | 94 | 5 |
| Document-Processing/PDF/PDF-Library/javascript/Text.md | 278 | 6 |
| Document-Processing/PDF/PDF-Library/javascript/Watermarks.md | 40 | 2 |
| Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md | 91 | 20 |

## Report 4: Consolidated Fix List

### PdfDocumentInformation
- Category: OUTDATED_IMPORT (Medium)
- Occurrences: 9
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/PDF-document.md
  - Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md
- Recommended replacement: Remove the import and use inferred type (`let info = document.getDocumentInformation()`).
- Evidence: `export declare type PdfDocumentInformation = {...}` in pdf-document-information.d.ts; `grep pdf-document-information index.d.ts` -> no match.

### PdfSignatureOptions.algorithm
- Category: OUTDATED_PROPERTY (High)
- Occurrences: 6
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/DigitalSignature.md
- Recommended replacement: digestAlgorithm: DigestAlgorithm.sha256
- Evidence: signature-properties.d.ts:47 `digestAlgorithm?: DigestAlgorithm;` ; PdfSignature.create(callBack, options: PdfSignatureOptions).

### PdfCertificationFlags
- Category: RENAMED_API (High)
- Occurrences: 6
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/DigitalSignature.md
- Recommended replacement: PdfCertificationFlag
- Evidence: `export declare enum PdfCertificationFlag { forbidChanges = 1, allowFormFill = 2, allowComments = 3 }` (enumerator.d.ts:1719).

### PdfSignature.reason/location/contactInfo
- Category: OUTDATED_PROPERTY (High)
- Occurrences: 6
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/FormFields.md
- Recommended replacement: Pass reason/location/contactInfo in PdfSignatureOptions to PdfSignature.create
- Evidence: TS2551/TS2339; only `_reason`, `_contactInfo` declared.

### PdfGrid.rows
- Category: OUTDATED_PROPERTY (High)
- Occurrences: 4
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Tables.md
- Recommended replacement: grid.getRow(0)
- Evidence: PdfGrid exposes getRow(index): PdfGridRow and getHeader(index) (pdf-grid.d.ts:365,373); no public `rows`.

### PdfFontStyle/Rectangle import
- Category: OUTDATED_IMPORT (High)
- Occurrences: 4
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Text-Extraction.md
- Recommended replacement: Import PdfFontStyle and Rectangle from '@syncfusion/ej2-pdf'.
- Evidence: data-extract src/index.d.ts has no PdfFontStyle/Rectangle; font-structure.d.ts imports PdfFontStyle from '@syncfusion/ej2-pdf'; Rectangle is a type in ej2-pdf pdf-type.d.ts:20.

### PdfPage.drawTextElement
- Category: SIGNATURE_MISMATCH (Medium)
- Occurrences: 4
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Text.md
- Recommended replacement: Pass a Point `{x,y}` or add `height` to make a Rectangle.
- Evidence: drawTextElement(element, location: Point) / (element, bounds: Rectangle) (pdf-page.d.ts:436,465).

### PdfDocumentProperties
- Category: OUTDATED_CLASS (High)
- Occurrences: 4
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md
- Recommended replacement: Remove import; use inferred type from `document.getDocumentInformation(false)`.
- Evidence: getDocumentInformation(skipMetadata?: boolean): PdfDocumentInformation (pdf-document.d.ts:1018); no declaration named PdfDocumentProperties.

### PdfGridCellStyle.backgroundImage
- Category: OUTDATED_PROPERTY (Medium)
- Occurrences: 3
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Tables.md
- Recommended replacement: style: { background: <PdfBackgroundImage> }
- Evidence: PdfGridCellStyle: `background?: PdfBrush | PdfBackgroundImage;` (pdf-type.d.ts:599); no backgroundImage.

### PdfAttachmentAnnotation
- Category: OUTDATED_CONSTRUCTOR (High)
- Occurrences: 2
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Annotations.md
- Recommended replacement: new PdfAttachmentAnnotation(bounds, new PdfAttachment('Nature.jpg', imageData), {...})
- Evidence: annotation.d.ts:5584 constructor(bounds, attachment); 5599 constructor(bounds, attachment, properties).

### PdfDestination
- Category: INVALID_SAMPLE (High)
- Occurrences: 2
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Annotations.md
- Recommended replacement: new PdfDestination(page, { x:0, y:0 }, { mode: PdfDestinationMode.fitToPage })
- Evidence: TS1005 syntax error on the snippet.

### PdfDocument/PdfPage/PdfGraphics/PdfFont/PdfBrush
- Category: INVALID_SAMPLE (Low)
- Occurrences: 2
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Create-PDF-document-angular.md
  - Document-Processing/PDF/PDF-Library/javascript/Create-PDF-document-typescript.md
- Recommended replacement: Add the missing import/cast or rename variable
- Evidence: TypeScript compile of the snippet against package .d.ts: TS2304/TS2740.

### PdfForm.fieldAt
- Category: INVALID_SAMPLE (Low)
- Occurrences: 2
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/DigitalSignature.md
- Recommended replacement: Add the missing import/cast or rename variable
- Evidence: TypeScript compile of the snippet against package .d.ts: TS2304/TS2740.

### PdfSignature constructor
- Category: OUTDATED_CONSTRUCTOR (Critical)
- Occurrences: 2
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/FormFields.md
- Recommended replacement: PdfSignature.create(pfxData, password, options)
- Evidence: pdf-signature.d.ts:251 `constructor();` ; static create overloads at 340-490.

### PdfSignatureField.sign
- Category: OUTDATED_METHOD (High)
- Occurrences: 2
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/FormFields.md
- Recommended replacement: field.setSignature(signature)
- Evidence: PdfSignatureField declares getSignature() and setSignature(signature: PdfSignature) (field.d.ts), no sign().

### PdfDocumentLinkAnnotation
- Category: OUTDATED_CONSTRUCTOR (High)
- Occurrences: 2
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/HyperLinks.md
- Recommended replacement: new PdfDocumentLinkAnnotation(bounds, destination, { color, innerColor, opacity })
- Evidence: annotation.d.ts:5143 constructor(); 5161 constructor(bounds); constructor(bounds, destination, properties).

### PdfDataExtractor.extractImages
- Category: SIGNATURE_MISMATCH (Medium)
- Occurrences: 2
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Image-Extraction.md
- Recommended replacement: await extractor.extractImages({...})
- Evidence: extractImages(options): Promise<PdfEmbeddedImage[]> (pdf-data-extractor.d.ts:785).

### PdfImage.draw
- Category: SIGNATURE_MISMATCH (High)
- Occurrences: 2
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Images.md
- Recommended replacement: graphics.drawImage(image, { x:10, y:10, width:200, height:100 })
- Evidence: PdfImage.draw(graphics) / draw(graphics, location: Point) (pdf-image.d.ts:227,252); PdfGraphics.drawImage(image, bounds: Rectangle) (pdf-graphics.d.ts:956).

### PdfNumberStyle.lowerLetter
- Category: OUTDATED_ENUM_MEMBER (High)
- Occurrences: 2
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Lists.md
- Recommended replacement: PdfNumberStyle.lowerLatin
- Evidence: enum PdfNumberStyle { none, numeric, lowerLatin, lowerRoman, upperLatin, upperRoman } (enumerator.d.ts:1421).

### PdfRedactor.redact
- Category: INVALID_SAMPLE (High)
- Occurrences: 2
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Redaction.md
- Recommended replacement: redactor.redact(canvasRenderCallback)
- Evidence: TS1005 syntax error on the snippet.

### PdfGridStyle.space
- Category: SIGNATURE_MISMATCH (Medium)
- Occurrences: 2
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Tables.md
- Recommended replacement: space: 1
- Evidence: PdfGridStyle: `space?: number;` (pdf-type.d.ts:612+).

### PdfGrid constructor
- Category: OUTDATED_CONSTRUCTOR (High)
- Occurrences: 2
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Tables.md
- Recommended replacement: new PdfGrid(source, columns, { style })
- Evidence: constructor(dataSource: object[], columns: PdfColumnInformation[], options?: { style?: PdfGridStyle; builtInStyle?: PdfGridBuiltinStyle }) (pdf-grid.d.ts:210).

### PdfGrid.dataSource
- Category: OUTDATED_PROPERTY (High)
- Occurrences: 2
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Tables.md
- Recommended replacement: Create a new PdfGrid with the new data source (or add rows via addRow).
- Evidence: `readonly dataSource: object[];` (pdf-grid.d.ts:317).

### PdfGraphics.drawTemplate
- Category: SIGNATURE_MISMATCH (High)
- Occurrences: 2
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Tables.md
- Recommended replacement: drawTemplate(template, { x: 10, y: 10, width: 300, height: 200 })
- Evidence: `drawTemplate(template: PdfTemplate, bounds: Rectangle): void;` (pdf-graphics.d.ts:983).

### PdfDocument.embedFont
- Category: SIGNATURE_MISMATCH (Medium)
- Occurrences: 2
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Text.md
- Recommended replacement: document.embedFont(PdfFontFamily.helvetica, 14, PdfFontStyle.regular)
- Evidence: embedFont(fontFamily: PdfFontFamily, size: number, style: PdfFontStyle): PdfStandardFont (pdf-document.d.ts:680).

### PdfBasicJobTicketSchema.jobName
- Category: OUTDATED_PROPERTY (Medium)
- Occurrences: 2
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md
- Recommended replacement: Remove, or use basicJobTicketSchema.jobRef
- Evidence: pdf-basic-job-ticket-schema.d.ts declares only `jobRef: string[]`.

### PdfRightsManagementSchema.mark
- Category: OUTDATED_PROPERTY (Medium)
- Occurrences: 2
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md
- Recommended replacement: rightsManagementSchema.isMarked = true (and usageTerms/webStatement)
- Evidence: Declared: certificateUrl, webStatement, isMarked, owners, usageTerms.

### PdfDocument.xmpMetadata
- Category: OUTDATED_PROPERTY (High)
- Occurrences: 2
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md
- Recommended replacement: document.setDocumentInformation({ xmpMetadata })
- Evidence: pdf-document.d.ts:239 `private _xmpMetadata`; PdfDocumentInformation.xmpMetadata?: PdfXmpMetadata.

### PdfPagedTextSchema.pageCount
- Category: SIGNATURE_MISMATCH (Low)
- Occurrences: 2
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/XMP-Meta-Data.md
- Recommended replacement: pageCount = document.pageCount
- Evidence: pdf-paged-text-schema.d.ts:94 `pageCount: number;`.

### PdfPage
- Category: INVALID_SAMPLE (Low)
- Occurrences: 1
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Annotations.md
- Recommended replacement: Add the missing import/cast or rename variable
- Evidence: TypeScript compile of the snippet against package .d.ts: TS2304/TS2740.

### TimestampCallback
- Category: SIGNATURE_MISMATCH (Medium)
- Occurrences: 1
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/DigitalSignature.md
- Recommended replacement: Promise<{ data: Uint8Array }>
- Evidence: pdf-type.d.ts:108 `TimestampCallback = (data: Uint8Array) => Promise<{ data: Uint8Array }>`.

### PdfTextAlignment
- Category: INVALID_SAMPLE (Low)
- Occurrences: 1
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Lists.md
- Recommended replacement: Add the missing import/cast or rename variable
- Evidence: TypeScript compile of the snippet against package .d.ts: TS2304/TS2740.

### PdfDocument
- Category: INVALID_SAMPLE (Low)
- Occurrences: 1
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Open-and-save-PDF-files.md
- Recommended replacement: Add the missing import/cast or rename variable
- Evidence: TypeScript compile of the snippet against package .d.ts: TS2304/TS2740.

### PdfDocumentPdfDocument
- Category: INVALID_SAMPLE (High)
- Occurrences: 1
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Open-and-save-PDF-files.md
- Recommended replacement: new ej.pdf.PdfDocument(data)
- Evidence: No such export.

### document.createElement
- Category: INVALID_SAMPLE (Low)
- Occurrences: 1
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Redaction.md
- Recommended replacement: Add the missing import/cast or rename variable
- Evidence: TypeScript compile of the snippet against package .d.ts: TS2304/TS2740.

### drawRoundedRectangle
- Category: OUTDATED_IMPORT (High)
- Occurrences: 1
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Shapes.md
- Recommended replacement: Remove from import; call graphics.drawRoundedRectangle(...).
- Evidence: `drawRoundedRectangle(bounds, radius, pen, brush): void` is a member of PdfGraphics (pdf-graphics.d.ts:1104); TS2305 no exported member.

### Point
- Category: INVALID_SAMPLE (Low)
- Occurrences: 1
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Shapes.md
- Recommended replacement: Add the missing import/cast or rename variable
- Evidence: TypeScript compile of the snippet against package .d.ts: TS2304/TS2740.

### PdfGraphics
- Category: INVALID_SAMPLE (Low)
- Occurrences: 1
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Shapes.md
- Recommended replacement: Add the missing import/cast or rename variable
- Evidence: TypeScript compile of the snippet against package .d.ts: TS2304/TS2740.

### PdfTemplate
- Category: INVALID_SAMPLE (Low)
- Occurrences: 1
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Tables.md
- Recommended replacement: Add the missing import/cast or rename variable
- Evidence: TypeScript compile of the snippet against package .d.ts: TS2304/TS2740.

### searchResults declaration
- Category: INVALID_SAMPLE (Medium)
- Occurrences: 1
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Text-Extraction.md
- Recommended replacement: let searchResults: Map<number, Rectangle[]> = textSearch.searchResults;
- Evidence: TS1128 syntax error.

### PdfImage
- Category: INVALID_SAMPLE (Low)
- Occurrences: 1
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Watermarks.md
- Recommended replacement: Add the missing import/cast or rename variable
- Evidence: TypeScript compile of the snippet against package .d.ts: TS2304/TS2740.

### PdfAnnotationCollection.at
- Category: INVALID_SAMPLE (Low)
- Occurrences: 1
- Affected files:
  - Document-Processing/PDF/PDF-Library/javascript/Watermarks.md
- Recommended replacement: Add the missing import/cast or rename variable
- Evidence: TypeScript compile of the snippet against package .d.ts: TS2304/TS2740.

## Report 5: Potential Documentation Risks

### Broken code samples
- Annotations.md:561 PdfDestination: `page: page` is not valid syntax; sample cannot compile.
- Annotations.md:583 PdfDestination: `page: page` is not valid syntax; sample cannot compile.
- Annotations.md:1343 PdfPage: Missing import
- Create-PDF-document-angular.md:137 PdfDocument/PdfPage/PdfGraphics/PdfFont/PdfBrush: Types used without import
- Create-PDF-document-typescript.md:158 PdfDocument/PdfPage/PdfGraphics/PdfFont/PdfBrush: Types used without import
- DigitalSignature.md:867 PdfForm.fieldAt: `fieldAt` returns PdfField; assignment to PdfSignatureField needs `as PdfSignatureField`
- DigitalSignature.md:1432 PdfForm.fieldAt: `fieldAt` returns PdfField; needs cast
- Lists.md:99 PdfTextAlignment: Not imported in sample
- Open-and-save-PDF-files.md:29 PdfDocument: Type used without import
- Open-and-save-PDF-files.md:36 PdfDocumentPdfDocument: Typo creates non-existent class.
- Redaction.md:44 document.createElement: `document` is shadowed by a PdfDocument variable so DOM createElement fails
- Redaction.md:150 PdfRedactor.redact: `callBack:` label inside call is not valid syntax.
- Redaction.md:225 PdfRedactor.redact: `callBack:` label inside call is not valid syntax.
- Shapes.md:238 Point: `Point` type not imported
- Shapes.md:420 PdfGraphics: Not imported
- Tables.md:1457 PdfTemplate: Not imported
- Text-Extraction.md:461 searchResults declaration: Stray `;` before `=` breaks the statement.
- Watermarks.md:39 PdfImage: Not imported
- Watermarks.md:149 PdfAnnotationCollection.at: `at(i)` returns PdfAnnotation; assignment to PdfWatermarkAnnotation needs a cast

### Invalid imports / non-exported APIs
- PDF-document.md:81 PdfDocumentInformation: Type is declared in pdf/core/pdf-document-information.d.ts but is not re-exported from the ej2-pdf entry point (index.d.ts has no export for it); `import { PdfDocumentInformation }` fails with TS2724.
- Shapes.md:122 drawRoundedRectangle: Not an exported function; it is a method of PdfGraphics.
- Text-Extraction.md:171 PdfFontStyle/Rectangle import: Not exported by @syncfusion/ej2-pdf-data-extract (defined in ej2-pdf).
- Text-Extraction.md:246 PdfFontStyle/Rectangle import: Not exported by @syncfusion/ej2-pdf-data-extract (defined in ej2-pdf).
- Text-Extraction.md:324 PdfFontStyle/Rectangle import: Not exported by @syncfusion/ej2-pdf-data-extract (defined in ej2-pdf).
- Text-Extraction.md:448 PdfFontStyle/Rectangle import: Not exported by @syncfusion/ej2-pdf-data-extract (defined in ej2-pdf).
- XMP-Meta-Data.md:25 PdfDocumentInformation: Type is declared in pdf/core/pdf-document-information.d.ts but is not re-exported from the ej2-pdf entry point (index.d.ts has no export for it); `import { PdfDocumentInformation }` fails with TS2724.
- XMP-Meta-Data.md:77 PdfDocumentInformation: Type is declared in pdf/core/pdf-document-information.d.ts but is not re-exported from the ej2-pdf entry point (index.d.ts has no export for it); `import { PdfDocumentInformation }` fails with TS2724.
- XMP-Meta-Data.md:225 PdfDocumentInformation: Type is declared in pdf/core/pdf-document-information.d.ts but is not re-exported from the ej2-pdf entry point (index.d.ts has no export for it); `import { PdfDocumentInformation }` fails with TS2724.
- XMP-Meta-Data.md:272 PdfDocumentInformation: Type is declared in pdf/core/pdf-document-information.d.ts but is not re-exported from the ej2-pdf entry point (index.d.ts has no export for it); `import { PdfDocumentInformation }` fails with TS2724.
- XMP-Meta-Data.md:317 PdfDocumentInformation: Type is declared in pdf/core/pdf-document-information.d.ts but is not re-exported from the ej2-pdf entry point (index.d.ts has no export for it); `import { PdfDocumentInformation }` fails with TS2724.
- XMP-Meta-Data.md:362 PdfDocumentInformation: Type is declared in pdf/core/pdf-document-information.d.ts but is not re-exported from the ej2-pdf entry point (index.d.ts has no export for it); `import { PdfDocumentInformation }` fails with TS2724.
- XMP-Meta-Data.md:456 PdfDocumentInformation: Type is declared in pdf/core/pdf-document-information.d.ts but is not re-exported from the ej2-pdf entry point (index.d.ts has no export for it); `import { PdfDocumentInformation }` fails with TS2724.
- XMP-Meta-Data.md:499 PdfDocumentInformation: Type is declared in pdf/core/pdf-document-information.d.ts but is not re-exported from the ej2-pdf entry point (index.d.ts has no export for it); `import { PdfDocumentInformation }` fails with TS2724.

### Removed or renamed APIs
- DigitalSignature.md:186 PdfSignatureOptions.algorithm: PdfSignatureOptions uses digestAlgorithm; `algorithm` is rejected (only valid in callback's own options param).
- DigitalSignature.md:219 PdfSignatureOptions.algorithm: PdfSignatureOptions uses digestAlgorithm; `algorithm` is rejected (only valid in callback's own options param).
- DigitalSignature.md:266 PdfSignatureOptions.algorithm: PdfSignatureOptions uses digestAlgorithm; `algorithm` is rejected (only valid in callback's own options param).
- DigitalSignature.md:300 PdfSignatureOptions.algorithm: PdfSignatureOptions uses digestAlgorithm; `algorithm` is rejected (only valid in callback's own options param).
- DigitalSignature.md:352 PdfSignatureOptions.algorithm: PdfSignatureOptions uses digestAlgorithm; `algorithm` is rejected (only valid in callback's own options param).
- DigitalSignature.md:400 PdfSignatureOptions.algorithm: PdfSignatureOptions uses digestAlgorithm; `algorithm` is rejected (only valid in callback's own options param).
- DigitalSignature.md:721 PdfCertificationFlags: Enum is named PdfCertificationFlag (singular).
- DigitalSignature.md:832 PdfCertificationFlags: Enum is named PdfCertificationFlag (singular).
- DigitalSignature.md:851 PdfCertificationFlags: Enum is named PdfCertificationFlag (singular).
- DigitalSignature.md:876 PdfCertificationFlags: Enum is named PdfCertificationFlag (singular).
- DigitalSignature.md:906 PdfCertificationFlags: Enum is named PdfCertificationFlag (singular).
- DigitalSignature.md:931 PdfCertificationFlags: Enum is named PdfCertificationFlag (singular).
- FormFields.md:1055 PdfSignature.reason/location/contactInfo: No public setters (only private _reason/_contactInfo).
- FormFields.md:1056 PdfSignature.reason/location/contactInfo: No public setters (only private _reason/_contactInfo).
- FormFields.md:1057 PdfSignature.reason/location/contactInfo: No public setters (only private _reason/_contactInfo).
- FormFields.md:1059 PdfSignatureField.sign: Method does not exist on PdfSignatureField.
- FormFields.md:1076 PdfSignature.reason/location/contactInfo: No public setters (only private _reason/_contactInfo).
- FormFields.md:1077 PdfSignature.reason/location/contactInfo: No public setters (only private _reason/_contactInfo).
- FormFields.md:1078 PdfSignature.reason/location/contactInfo: No public setters (only private _reason/_contactInfo).
- FormFields.md:1080 PdfSignatureField.sign: Method does not exist on PdfSignatureField.
- Tables.md:375 PdfGrid.rows: PdfGrid has no `rows` property.
- Tables.md:377 PdfGrid.rows: PdfGrid has no `rows` property.
- Tables.md:418 PdfGrid.rows: PdfGrid has no `rows` property.
- Tables.md:420 PdfGrid.rows: PdfGrid has no `rows` property.
- Tables.md:1018 PdfGridCellStyle.backgroundImage: Cell style has no `backgroundImage`; image goes into `background`.
- Tables.md:1041 PdfGridCellStyle.backgroundImage: Cell style has no `backgroundImage`; image goes into `background`.
- Tables.md:1083 PdfGridCellStyle.backgroundImage: Cell style has no `backgroundImage`; image goes into `background`.
- Tables.md:1266 PdfGrid.dataSource: dataSource is declared `readonly`; cannot be assigned.
- Tables.md:1288 PdfGrid.dataSource: dataSource is declared `readonly`; cannot be assigned.
- XMP-Meta-Data.md:121 PdfDocumentProperties: No such class/type in either package.
- XMP-Meta-Data.md:126 PdfDocumentProperties: No such class/type in either package.
- XMP-Meta-Data.md:166 PdfDocumentProperties: No such class/type in either package.
- XMP-Meta-Data.md:171 PdfDocumentProperties: No such class/type in either package.
- XMP-Meta-Data.md:327 PdfBasicJobTicketSchema.jobName: Property does not exist (only jobRef).
- XMP-Meta-Data.md:344 PdfBasicJobTicketSchema.jobName: Property does not exist (only jobRef).
- XMP-Meta-Data.md:372 PdfRightsManagementSchema.mark: Property does not exist.
- XMP-Meta-Data.md:390 PdfRightsManagementSchema.mark: Property does not exist.
- XMP-Meta-Data.md:416 PdfDocument.xmpMetadata: PdfDocument has no public xmpMetadata (only private _xmpMetadata).
- XMP-Meta-Data.md:434 PdfDocument.xmpMetadata: PdfDocument has no public xmpMetadata (only private _xmpMetadata).

### Unsupported constructor signatures
- Annotations.md:460 PdfAttachmentAnnotation: Constructor takes (bounds, attachment[, properties]); sample passes (bounds, fileName, data, properties).
- Annotations.md:482 PdfAttachmentAnnotation: Constructor takes (bounds, attachment[, properties]); sample passes (bounds, fileName, data, properties).
- FormFields.md:1054 PdfSignature constructor: Constructor takes no args; sign via static PdfSignature.create(...).
- FormFields.md:1075 PdfSignature constructor: Constructor takes no args; sign via static PdfSignature.create(...).
- HyperLinks.md:83 PdfDocumentLinkAnnotation: Constructor is (bounds) | (bounds, destination[, properties]); the (bounds,color,innerColor,opacity) form is gone.
- HyperLinks.md:109 PdfDocumentLinkAnnotation: Constructor is (bounds) | (bounds, destination[, properties]); the (bounds,color,innerColor,opacity) form is gone.
- Tables.md:1211 PdfGrid constructor: Third argument must be options object `{style?, builtInStyle?}`.
- Tables.md:1233 PdfGrid constructor: Third argument must be options object `{style?, builtInStyle?}`.

### Invalid enum values
- Lists.md:333 PdfNumberStyle.lowerLetter: Enum member does not exist.
- Lists.md:358 PdfNumberStyle.lowerLetter: Enum member does not exist.

### Signature mismatches
- DigitalSignature.md:961 TimestampCallback: TimestampCallback must resolve { data }, not { response }.
- Image-Extraction.md:34 PdfDataExtractor.extractImages: Returns Promise<PdfEmbeddedImage[]>; sample assigns without await.
- Image-Extraction.md:70 PdfDataExtractor.extractImages: Returns Promise<PdfEmbeddedImage[]>; sample assigns without await.
- Images.md:133 PdfImage.draw: draw accepts only (graphics) or (graphics, Point); no bounds overload.
- Images.md:157 PdfImage.draw: draw accepts only (graphics) or (graphics, Point); no bounds overload.
- Tables.md:466 PdfGridStyle.space: `space` is typed number, not an object.
- Tables.md:497 PdfGridStyle.space: `space` is typed number, not an object.
- Tables.md:1467 PdfGraphics.drawTemplate: Only overload takes Rectangle (width and height required).
- Tables.md:1491 PdfGraphics.drawTemplate: Only overload takes Rectangle (width and height required).
- Text.md:502 PdfDocument.embedFont: Standard-font overload requires the `style` argument.
- Text.md:524 PdfPage.drawTextElement: Argument must be Point ({x,y}) or full Rectangle; {x,y,width} matches neither.
- Text.md:534 PdfPage.drawTextElement: Argument must be Point ({x,y}) or full Rectangle; {x,y,width} matches neither.
- Text.md:546 PdfDocument.embedFont: Standard-font overload requires the `style` argument.
- Text.md:568 PdfPage.drawTextElement: Argument must be Point ({x,y}) or full Rectangle; {x,y,width} matches neither.
- Text.md:578 PdfPage.drawTextElement: Argument must be Point ({x,y}) or full Rectangle; {x,y,width} matches neither.
- XMP-Meta-Data.md:465 PdfPagedTextSchema.pageCount: pageCount is number.
- XMP-Meta-Data.md:481 PdfPagedTextSchema.pageCount: pageCount is number.

## Evidence notes
Inheritance, re-exports, overloads and barrel exports were checked (e.g. `drawTextElement`, `embedFont`, `PdfSignature.create` overload sets were read in full; `PdfDocumentInformation` exists but is absent from `index.d.ts`). Prose-only mentions of names not in the inventory: only `PdfCertificationFlags` and `PdfDocumentProperties` (both reported). Not reported: Node/DOM typing noise, TypeScript 7 strictness-only errors (e.g. Uint8Array->BlobPart).
