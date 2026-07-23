---
layout: post
title: Authorization token in React PDF Viewer component | Syncfusion
description: Learn how to securely pass an authorization token to the Syncfusion React PDF Viewer for authenticated document access and API requests.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Authorization token in React PDF Viewer component

This article shows how to include an authorization token in AJAX requests issued by the React PDF Viewer by using the `ajaxRequestSettings` property. The token is included in every AJAX request sent by the viewer when configured via `ajaxHeaders`.

Here is an example that adds an Authorization header using `AjaxRequestSettings`:

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