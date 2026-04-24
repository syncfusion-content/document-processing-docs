---
layout: post
title: Module Injection for TypeScript PDF Viewer | Syncfusion
description: Learn how to inject required modules to enable features in the Syncfusion TypeScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Module Injection in TypeScript PDF Viewer

To customize the **TypeScript PDF Viewer** with specific features, you must import and inject the required modules. The PDF Viewer provides the following modules to enable its functionalities.

## Available modules

- `LinkAnnotation`: Hyperlink navigation
- `BookmarkView`: Bookmark display and navigation
- `Magnification`: Zoom in/out
- `Navigation`: Page navigation
- `TextSelection`: Text selection
- `ThumbnailView`: Page thumbnails
- `Toolbar`: Built-in toolbar UI
- `Print`: Printing support
- `Annotation`: Annotation features
- `TextSearch`: Text search
- `FormFields`: Form field support
- `FormDesigner`: Form field design and editing

---

## Module injection

The required modules should be injected into the PDF Viewer using the **`PdfViewer.Inject`** method, as shown below. Only the injected module functionalities will be loaded and available in the PDF Viewer.

**src/app.ts**

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
import {
  PdfViewer,
  Toolbar,
  Navigation,
  Magnification,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner
} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(
  Toolbar,
  Navigation,
  Magnification,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner
);

const pdfviewer: PdfViewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
});

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

---

## Minimal module injection example

Inject only the modules required for your application to reduce bundle size and improve performance.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
import { PdfViewer, Navigation } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Navigation);

const pdfviewer: PdfViewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
});

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

---

## Important notes

- Inject **only the required modules** to optimize performance.
- Module injection applies to **both standalone and server-backed modes**.
- If a feature is used without injecting its corresponding module, a runtime error may occur and the PDF Viewer might fail to render properly.
