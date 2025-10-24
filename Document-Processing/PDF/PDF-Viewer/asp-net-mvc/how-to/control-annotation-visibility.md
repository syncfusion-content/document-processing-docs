---
layout: post
title: Control annotation visibility in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to control the visibility of PDF annotations in the ASP.NET MVC PDF Viewer, ensuring annotations appear only in the viewer as needed.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Control annotation visibility in the ASP.NET MVC PDF Viewer

A concise guide to controlling annotation visibility so that annotations remain visible in the Syncfusion PDF Viewer while being hidden in the downloaded PDF.

## Steps to control annotation visibility

**Step 1:** Follow the steps provided in the [Syncfusion ASP.NET MVC PDF Viewer getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Add buttons for annotation modification and downloading.

Define the viewer markup and include a button that triggers the download workflow. The following Razor code also wires up helper functions that update annotation flags before saving the document.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

@using Syncfusion.EJ2
@{
    ViewBag.Title = "Home Page";
}
<div>
    <div style="height:500px;width:100%;">
        <button onclick="save()">Download</button>
        <!-- Render PDF Viewer using the Html helper method -->
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/annotations-v1.pdf").DocumentLoad("documentLoad").DownloadEnd("documentLoad").Render()
    </div>
</div>

    <script type="text/javascript">
        function documentLoad(arg) {
            var viewer = document.getElementById('pdfviewer').ej2_instances[0];
            //Code snippet to add basic annotations. You can also include other annotations as needed.
            viewer.annotation.addAnnotation("Highlight", {
                bounds: [{ x: 97, y: 610, width: 350, height: 14 }],
                pageNumber: 1
            });
            viewer.annotation.addAnnotation("Underline", {
                bounds: [{ x: 97, y: 723, width: 353.5, height: 14 }],
                pageNumber: 1
            });
            viewer.annotation.addAnnotation("Strikethrough", {
                bounds: [{ x: 97, y: 836, width: 376.5, height: 14 }],
                pageNumber: 1
            });
        }
        function save() {
            var viewer = document.getElementById('pdfviewer').ej2_instances[0];
            viewer.saveAsBlob().then((blob) => {
                const reader = new FileReader();
                reader.onload = function () {
                    const base64data = reader.result;
                    const base64EncodedData = base64data.split('base64,')[1];
                    const document1 = new ej.pdf.PdfDocument(base64EncodedData);
                    for (let i = 0; i < document1.pageCount; i++) {
                        const page = document1.getPage(i);
                        for (let j = 0; j < page.annotations.count; j++) {
                            const annot = page.annotations.at(j);
                            annot.flags |= ej.pdf.PdfAnnotationFlag.noView;
                        }
                    }
                    document1.saveAsBlob().then((modifiedBlob) => {
                        const internalReader = new FileReader();
                        internalReader.onload = function () {
                            const modifiedBase64 = internalReader.result;
                            const downloadLink = document.createElement('a');
                            downloadLink.href = modifiedBase64;
                            downloadLink.download = 'modified.pdf';
                            downloadLink.click();
                        };
                        internalReader.readAsDataURL(modifiedBlob.blobData);
                    });
                };
                reader.readAsDataURL(blob);
            });
        }


    </script>

{% endhighlight %}
{% endtabs %}

**Step 3:** Add annotations to the PDF document.

The `documentLoaded` function in the script above programmatically inserts highlight, underline, and strikethrough annotations. Extend this logic to include any additional annotations you require.

**Step 4:** Add event listeners for button clicks.

The button defined in the markup triggers the `save` function, allowing you to adjust annotation visibility before downloading the PDF.

**Step 5:** Modify annotation flags.

Inside the `save` function, the script iterates through each annotation and applies the `noView` flag so the annotations remain hidden in the downloaded file while still appearing in the viewer.

[View sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/How%20to)
