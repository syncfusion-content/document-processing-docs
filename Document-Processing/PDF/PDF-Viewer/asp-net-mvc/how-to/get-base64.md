---
layout: post
title: Get Base64 from loaded PDF in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to retrieve the Base64 value of a loaded PDF in the Syncfusion ASP.NET MVC PDF Viewer using saveAsBlob and FileReader.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Get Base64 value from a loaded PDF

### Overview

This guide shows how to get the base64-encoded value of a PDF loaded in the Syncfusion ASP.NET MVC PDF Viewer. Use this to send the PDF as a Base64 string or process it on the client.

### How to retrieve Base64 value

**Step 1:** Follow the steps in the [Syncfusion ASP.NET MVC PDF Viewer getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started) to create a simple viewer sample.

**Step 2:** Add a button to trigger the Base64 conversion.

```html
<div>
    <div style="height:500px;width:100%;">
        <!-- Button to trigger Base64 conversion -->
        <button id="getBase64">Get Base64</button>
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
</div>

<!-- Ensure necessary Syncfusion scripts and styles are included -->
<script src="https://cdn.syncfusion.com/ej2/27.2.4/dist/ej2.min.js"></script>

<script type="text/javascript">
    window.onload = function () {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Add an event listener to the button to get Base64 string of the loaded document
        document.getElementById('getBase64').addEventListener('click', function () {
            getBase64EncodedDocument();  // Call the function to get the Base64 string
        });

        // Function to get Base64 of the loaded document
        function getBase64EncodedDocument() {
            viewer.saveAsBlob().then(function (blob) {
                var reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onload = function () {
                    var base64data = reader.result;
                    console.log(base64data);
                    // You can handle the base64data as needed, e.g., sending it to a server or displaying it
                };
            }).catch(function (error) {
                console.error('Error converting PDF to Base64:', error);
            });
        }
    };
</script>

```

### Conclusion

With these steps, a loaded PDF can be converted to a Base64 string on button click for transfer or additional processing.

[View sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/How%20to)
