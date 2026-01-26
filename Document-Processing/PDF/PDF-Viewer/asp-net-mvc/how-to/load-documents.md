---
layout: post
title: Load documents dynamically in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to load or switch PDF documents dynamically in the Syncfusion ASP.NET MVC PDF Viewer using the load method.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Load documents dynamically in the ASP.NET MVC PDF Viewer

Load or switch PDF documents dynamically after the initial load. Use the **load()** method to load a PDF by Base64 string or file name.

## Steps to load PDF documents dynamically

**Step 1:** Follow the steps in the [Syncfusion ASP.NET MVC PDF Viewer getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started) to create a sample.

**Step 2:** Use the following code to load a PDF using a Base64 string.

```html
<button type="button" onclick="load1()">LoadDocumentFromBase64</button>
<script>
    // Load a Base64 String
    function load1() {
        // Sending Ajax request to the controller to get base 64 string
        $.ajax({
            url: '/PdfViewer/GetDocument',
            type: 'POST',
            cache: false,
            processData: false,
            contentType: false,
            success: function (data) {
                debugger;
                var viewer = document.getElementById('pdfViewer').ej2_instances[0];
                viewer.load(data, null);
            },
            error: function (msg, textStatus, errorThrown) {
                debugger;
                alert('Exception' + msg.responseText);
            }
        });
    }
</script>
```

**Step 3:** Add the following code snippet in `PdfViewerController.cs` file to get the base64 string of the given document.

```cs
public ActionResult GetDocument()
{
    var docBytes = System.IO.File.ReadAllBytes(GetDocumentPath("PDF_Succinctly.pdf"));
    string docBase64 = "data:application/pdf;base64," + Convert.ToBase64String(docBytes);
    return Content(docBase64);
}
```

**Step 4:** Use the following code snippet to load PDF document using document name.

```html
<button type="button" onclick="load2()">LoadDocumentFromBase64</button>

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").Render()
</div>

<script>
    // load document using document name.
    function load2() {
        var viewer = document.getElementById('pdfViewer').ej2_instances[0];
        viewer.load("HTTP Succinctly.pdf", null)
    }
</script>
```

By following these steps, the load API can be used to switch documents dynamically in the ASP.NET MVC PDF Viewer.

[how to load PDF documents dynamically](https://www.syncfusion.com/downloads/support/directtrac/general/ze/EJ2MvcSample-1778613339.zip)