---
layout: post
title: Use extractTextCompleted in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to use the extractTextCompleted event and isExtractText property in the Syncfusion ASP.NET Core PDF Viewer to extract text and bounds.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET Core
documentation: ug
---

# Use extractTextCompleted to extract text in ASP.NET Core PDF Viewer

Use the **isExtractText** property and the [**extractTextCompleted**](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ExtractTextCompleted) event to extract page text along with bounds.

The following example shows how to enable text extraction and handle the completion event:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

page "{handler?}"
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}

<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/29.1.33/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" isExtractText=true>
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
    document.addEventListener('DOMContentLoaded', function () {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.isExtractText = true;
        viewer.extractTextCompleted = args => {
        //Extract the Complete text of load document
        console.log(args);
        console.log(args.documentTextCollection[1]);
        //Extract the Text data.
        console.log(args.documentTextCollection[1][1].TextData);
        //Extract Text in the Page.
        console.log(args.documentTextCollection[1][1].PageText);
        //Extracts the first text of the PDF document along with its bounds
        console.log(args.documentTextCollection[1][1].TextData[0].Bounds);
    };
    });
</script>

{% endhighlight %}
{% endtabs %}

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to)
