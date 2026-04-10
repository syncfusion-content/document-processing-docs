---
layout: post
title: Get Base64 from loaded PDF in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to retrieve the Base64 value of a loaded PDF in the Syncfusion ASP.NET Core PDF Viewer using saveAsBlob and FileReader.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Convert a loaded PDF to Base64 string in ASP.NET Core PDF Viewer

Extract the current PDF as a Base64-encoded string from the Syncfusion ASP.NET Core PDF Viewer. This is useful for transmitting PDFs to a server, storing them in databases, or performing further processing on the client side.

## Retrieve the Base64 value

Follow these steps to convert the displayed PDF to a Base64 string:

**Step 1:** Follow the [Syncfusion ASP.NET Core PDF Viewer getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to set up a basic PDF Viewer instance.

**Step 2:** Add a button and JavaScript code to trigger the Base64 conversion:

```html
<div class="text-center">
    <button id="getBase64">Get Base64</button>
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/27.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
    document.addEventListener('DOMContentLoaded', function () {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        document.getElementById('getBase64').addEventListener('click', function () {
            base64ofloadedDocument();
        });
        function base64ofloadedDocument() {
            pdfViewer.saveAsBlob().then(function (value) {
                var data = value;
                var reader = new FileReader();
                reader.readAsDataURL(data);
                reader.onload = function () {
                    var base64data = reader.result;
                    console.log(base64data);
                };
            });
        }
    });
</script>

```

### Conclusion

With these steps, a loaded PDF can be converted to a Base64 string on button click for transfer or additional processing.

[View sample on GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to)
