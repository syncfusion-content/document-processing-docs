---
layout: post
title: Authorization token in React Pdfviewer component | Syncfusion
description: Learn here all about Authorization token in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Authorization token
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Authorization token in React Pdfviewer component

The PDF Viewer library allows you to include the authorization token in the PDF viewer AJAX request using the properties of the ajaxRequest header available in `AjaxRequestSettings`, and it will be included in every AJAX request send from PDF Viewer.

Here is an example of how you can use the **AjaxRequestSettings** property to include the authorization token to the PDF viewer control:

{% raw %}

```javascript

  <PdfViewerComponent
    id="container"
    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
    style={{ height: '640px' }}
    ajaxRequestSettings={{
      ajaxHeaders: [
        {
          headerName: 'Authorization',
          headerValue: 'Bearerabcdefghijklmnopqrstuvwxyz',
        },
      ],
      withCredentials: false,
      }}>
         <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                             ThumbnailView, Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
  </PdfViewerComponent>

```
{% endraw %}

Find the sample [how to include authorization token](https://stackblitz.com/edit/react-njmuk3?file=src%2Findex.js)