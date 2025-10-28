---
layout: post
title: Magnification in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to use magnification tools (Zoom In, Zoom Out, Fit Page, Fit Width) in the Syncfusion ASP.NET Core PDF Viewer and control zoom behavior.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET Core
documentation: ug
---


# Magnification

The PDF Viewer includes magnification tools on the default toolbar: Zoom In, Zoom Out, Zoom, Fit Page, and Fit Width. The toolbar can also be configured to show or hide magnification tools as needed.

The following example shows how to enable magnification in the PDF Viewer.


{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableMagnification="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableMagnification="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

The following magnification options are available in the default toolbar of the PDF Viewer:

* **ZoomIn**:- Zoom in from the current zoom value.
* **ZoomOut**:- Zoom out from the current zoom value.
* **Zoom**:- Zoom to a specific percentage.
* **FitPage**:- Fit the entire page within the available viewport.
* **FitWidth**:- Fit the page width to the viewport.
* **Auto**:- Fits the page content with-in the viewport on resizing action.

![Zoom controls in the PDF Viewer toolbar](./images/zoom.png)

N> The PDF Viewer supports zoom values from 10% to 400%.

## See also

* [Toolbar items](./toolbar)
* [Feature Modules](./feature-module)