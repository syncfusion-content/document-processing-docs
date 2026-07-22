---
layout: post
title: Overview of the JavaScript PDF Library | Syncfusion
canonical_url: https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview
description: Learn about the JavaScript PDF Library, including its key capabilities, system requirements, and supported platforms.
platform: document-processing
control: PDF
documentation: ug
domainurl: ##DomainURL##
---

# Overview of the JavaScript PDF Library

The [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) is a lightweight, high-performance non-UI library written natively in JavaScript for generating PDF documents in both Node.js and browser environments. It enables developers to integrate robust PDF functionality into their applications for creating, reading, and editing PDF documents, and does not require Adobe Acrobat. Designed to work across JavaScript, TypeScript, Angular, React, Vue, ASP.NET Core, and ASP.NET MVC, the [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) supports programmatic generation of PDF reports with rich content, including formatted text, images, shapes, hyperlinks, and lists. The library is compliant with PDF 1.7 (ISO 32000-1) and PDF 2.0 (ISO 32000-2:2020), and produces output compatible with all major PDF readers.

> **Latest release compatibility:** Available from Essential Studio 2024 Volume 1 and later. Updated July 2026.

## Prerequisites

Before you begin, make sure you have the following:

- A modern web browser such as the latest versions of Microsoft Edge, Google Chrome, Mozilla Firefox, or Safari.
- A static file server. The page must be served over `http://` or `https://` (not opened directly from disk) because the CDN scripts and the PDF download use APIs that are restricted under the `file://` protocol.
- A text editor such as Visual Studio Code, Code Studio, or Notepad.

Common static-server options include:

- **Node.js** (recommended): `npx serve` (no install required)
- **VS Code**: the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension

## CDN Syntax

The JS 2 global scripts and styles are hosted on the Syncfusion CDN in the following format:

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{Version}/dist/{PACKAGE_NAME}.min.js`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js`](https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js)

N> The example uses the all-in-one `ej2.min.js` bundle, which exposes the `ej.pdf` namespace along with other Essential JS 2 controls. A PDF-only CDN bundle is not provided separately. Replace `31.2.15` with the latest available version when starting a new project.

## Quickstart

### 1. Install the package

```bash
npm install @syncfusion/ej2-pdf
```

### 2. Register the license

Register your Syncfusion license key before using the library. Place the following code at the entry point of your application (e.g., `index.js`, `main.ts`, or `server.js`).

```javascript
// filepath: index.js
import { PdfDocument } from '@syncfusion/ej2-pdf';

Sf.base.registerLicense('YOUR_LICENSE_KEY');
```

To generate a free trial license, see [Generate a license key](https://help.syncfusion.com/document-processing/licensing/overview).

### 3. Create your first PDF

**Node.js:**

```javascript
// filepath: index.js
import { PdfDocument, PdfPage, PdfFont, PdfBrush, PdfStandardFont, PdfFontFamily } from '@syncfusion/ej2-pdf';

let document = new PdfDocument();
let page = document.addPage();
let font = new PdfStandardFont(PdfFontFamily.Helvetica, 14);
let brush = new PdfSolidBrush(new PdfColor(0, 0, 0));

page.graphics.drawString('Hello, World!', font, brush, 20, 20);

const bytes = document.save();
require('fs').writeFileSync('output.pdf', bytes);
document.destroy();
```

**Browser:**

```javascript
// filepath: app.js
import { PdfDocument, PdfStandardFont, PdfFontFamily, PdfSolidBrush, PdfColor } from '@syncfusion/ej2-pdf';

let document = new PdfDocument();
let page = document.addPage();
let font = new PdfStandardFont(PdfFontFamily.Helvetica, 14);
let brush = new PdfSolidBrush(new PdfColor(0, 0, 0));

page.graphics.drawString('Hello, World!', font, brush, 20, 20);

document.save('output.pdf').then(() => document.destroy());
```

### 4. Run

```bash
node index.js
```

The PDF is saved to `output.pdf` in the project root.

## Key features

### Document creation and editing

* [Create PDF documents from scratch](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/create-pdf-document-javascript) with full layout control.
* [Load, edit, and save](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/open-and-save-pdf-files) existing PDF files.
* [Merge multiple PDFs](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/merge-document) or [split a document into separate files](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/split-documents).
* [Design and apply templates](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/templates) for consistent layouts and branding.

### Content and graphics

* Add formatted text, images, shapes, and other graphical elements.
* [Insert hyperlinks](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/hyperlinks) for both web and document navigation.
* Apply text, image, and annotation watermarks.
* [Add, remove, or modify bookmarks](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/bookmarks) for better document organization.
* [Create, remove, and flatten layers](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/layers) within PDFs.

### Forms and annotations

* Add and manage interactive components such as bookmarks, annotations, and form fields.
* [Form fields](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/formfields) for a finalized document.
* [Annotations](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/annotations) between documents.

### Security

* [Digitally sign PDF documents](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/digitalsignature) using PFX and PKCS#12 certificates. PKCS#11 hardware tokens are supported via the platform-specific extension.
* [Redacting in PDF Document](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/redaction) to protect sensitive content.

### Text and image extraction

* [Extract text from PDF files](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/text-extraction) for indexing or downstream processing.
* [Extract images from PDF documents](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/image-extraction).

> **PDF version notes:** Redaction and certain digital signature features require PDF 2.0 (ISO 32000-2:2020). All other features are compatible with PDF 1.7 (ISO 32000-1).

## Supported environments

| Environment | Type | Package | Get started |
|---|---|---|---|
| Node.js | Server | `@syncfusion/ej2-pdf` | [Create PDF in Node.js](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/create-pdf-document-node-js) |
| JavaScript (browser) | Client | `@syncfusion/ej2-pdf` | [Create PDF in JavaScript](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/create-pdf-document-javascript) |
| TypeScript (browser) | Client | `@syncfusion/ej2-pdf` | [Create PDF in TypeScript](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/create-pdf-document-typescript) |
| Angular | Client | `@syncfusion/ej2-angular-pdf` | [Create PDF in Angular](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/create-pdf-document-angular) |
| React | Client | `@syncfusion/ej2-react-pdf` | [Create PDF in React](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/create-pdf-document-react) |
| Vue | Client | `@syncfusion/ej2-vue-pdf` | [Create PDF in Vue](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/create-pdf-document-vue) |
| ASP.NET Core | Server | NuGet `Syncfusion.Pdf.Imaging` (with JS interop) | [Create PDF in ASP.NET Core](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/create-pdf-document-asp-net-core) |
| ASP.NET MVC | Server | NuGet `Syncfusion.Pdf.Imaging` (with JS interop) | [Create PDF in ASP.NET MVC](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/create-pdf-document-asp-net-mvc) |

## Licensing

A valid Syncfusion license is required to use the JavaScript PDF Library in commercial applications. A free community license is available for individuals and small businesses; trial licenses are available for evaluation.

* [Generate a license key](https://help.syncfusion.com/document-processing/licensing/overview)

If the license is not registered, the generated PDFs include a watermark and an evaluation notice.

## Accessibility and output

* PDF/UA tagging is supported via the `PdfDocument.tag` API for accessible document generation.
* TrueType and OpenType fonts are embedded automatically when used.
* Documents exceeding 1.5 GB require additional heap tuning.

## Next steps

* [Quickstart tutorial](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/getting-started)
* [API reference](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/api)
* [Release notes](https://www.syncfusion.com/document-sdk/javascript-pdf-library/release-notes)