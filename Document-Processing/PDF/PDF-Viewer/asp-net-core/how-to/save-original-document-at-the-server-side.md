---
layout: post
title: Save the original document on the server in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to save the original PDF document on the server by calling a custom download action in the Syncfusion ASP.NET Core PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Save original document at the server side

The Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer can persist the original PDF file on the server by redirecting the download action to a custom controller method. This approach is useful for audit trails, archival policies, or downstream processing that requires access to the unmodified document after the user views it.

Follow these steps to enable server-side persistence:

**Step 1:** Create a PDF Viewer project by following the [ASP.NET Core getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started/) to configure the necessary scripts, Razor markup, and controller endpoints.

**Step 2:** Add a button to the user interface that overrides the download action before invoking the viewer's `download` method. The script below targets the `serverActionSettings.download` endpoint, triggers the download, and then restores the default action.

```html
<button onclick="save()">Save Document</button>

<script>
    function save() {
        var pdfViewer = document.getElementById('pdfviewer1').ej2_instances[0];
        pdfViewer.serverActionSettings.download = "SaveDocument";
        pdfViewer.download();
        pdfViewer.serverActionSettings.download = "Download";
    }
</script>
```

**Step 3:** Implement the `SaveDocument` action in the `PDFViewerController.cs`. Use `PdfRenderer.GetDocumentAsBase64` to retrieve the original file data and write it to the server's disk.

```cs

public ActionResult SaveDocument([FromBody] Dictionary<string, string> jsonObject)
{
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    string documentBase = pdfviewer.GetDocumentAsBase64(jsonObject);
    string base64String = documentBase.Split(new string[] { "data:application/pdf;base64," }, StringSplitOptions.None)[1];
    if (base64String != null || base64String != string.Empty)
    {
        byte[] byteArray = Convert.FromBase64String(base64String);

        MemoryStream ms = new MemoryStream(byteArray);
        var path = _hostingEnvironment.ContentRootPath;
        System.IO.File.WriteAllBytes(path + "/ouptut.pdf", byteArray);
    }
    return Content(string.Empty);
}

```

Download the sample: [How to save original document at the server side](https://www.syncfusion.com/downloads/support/directtrac/general/ze/EJ2PDF~11039397667)

N> Ensure the controller has the necessary write permissions for the target directory. It is also recommended to validate user authorization before saving files and to manage file naming conventions to prevent overwriting existing data.
