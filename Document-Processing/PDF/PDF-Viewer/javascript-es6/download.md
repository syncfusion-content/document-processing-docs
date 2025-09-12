---
layout: post
title: Download in Typescript Pdfviewer control | Syncfusion
description: Learn here all about Download in Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Download
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---
# Download in Typescript Pdfviewer control

The PDF Viewer supports downloading the loaded PDF file. You can enable/disable the download using the following code snippet.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />

    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <!--Element which will render as PdfViewer -->
    <div id="PdfViewer"></div>
</body>

</html>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar,Magnification,Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, TextSearch, Print} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, TextSearch, Print);

let pdfviewer: PdfViewer = new PdfViewer({enableDownload: true});
pdfviewer.appendTo('#PdfViewer');
pdfviewer.load('https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf', null);

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar,Magnification,Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, TextSearch, Print} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, TextSearch, Print);

let pdfviewer: PdfViewer = new PdfViewer({enableDownload: true});
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.appendTo('#PdfViewer');
pdfviewer.load('https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf', null);

{% endhighlight %}
{% endtabs %}

![Alt text](./images/download.png)

You can invoke download action using following code snippet.,

{% tabs %}
{% highlight ts tabtitle="Standalone" %}


import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.appendTo('#PdfViewer');
pdfviewer.load('https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf', null);
pdfviewer.download();

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.appendTo('#PdfViewer');
pdfviewer.load('https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf', null);
pdfviewer.download();

{% endhighlight %}
{% endtabs %}

## How to get the base64 string while downloading the PDF document

The [downloadEnd](https://ej2.syncfusion.com/documentation/api/pdfviewer/#downloadend) event of the PDF viewer allows you to get the downloaded document as a base64 string.

The following code illustrates how to get the downloaded document as a base64 string.

```

<button id="download">Download</button>
<button id="load">Load</button>

```

```ts

document.getElementById('download').addEventListener('click', function () {
    //API to perform download action.
    viewer.download();
    viewer.downloadEnd = function (args) {
        pdfstream = args.downloadDocument;
        //Print the document as a base64 string in the console window.
        console.log(pdfstream);
    };
});

document.getElementById('load').addEventListener('click', function () {
    //Load the base64 string in the viewer.
    viewer.load(pdfstream, null);
});

```

## See also

* [Toolbar items](./toolbar)
* [Feature Modules](./feature-module)