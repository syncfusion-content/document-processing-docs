---
layout: post
title: Save the original document on the server in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to save the original PDF document on the server by calling a custom download action in the Syncfusion ASP.NET Core PDF Viewer.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET Core
documentation: ug
---

# Save original document at the server side

The PDF Viewer can persist the original PDF file on the server by redirecting the download action to a custom controller method. Use this approach when audit trails, archival policies, or downstream processing require access to the unmodified document after users view it in the browser.

Follow these steps to enable server-side persistence:

**Step 1:** Create a PDF Viewer project by following the [ASP.NET Core getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started/) so that the viewer scripts, Razor markup, and controller endpoints are configured.

**Step 2:** Add a button that overrides the download action before invoking the viewer’s `download` method. The snippet below toggles the `serverActionSettings.download` endpoint, triggers the download call, and then restores the default action.

```html

<button onclick="save()">SaveDocument</button>
<script>
    function save() {
        var pdfViewer = document.getElementById('pdfviewer1').ej2_instances[0];
        pdfViewer.serverActionSettings.download = "SaveDocument";
        pdfViewer.download();
        pdfViewer.serverActionSettings.download = "Download";
    }
</script>

```

**Step 3:** Implement the `SaveDocument` action in `PDFViewerController.cs`. The controller uses `PdfRenderer.GetDocumentAsBase64` to retrieve the original file stream and writes it to disk.

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

Download the sample [how to save original document at the server side](https://www.syncfusion.com/downloads/support/directtrac/general/ze/EJ2PDF~11039397667)

N> Ensure that the controller has permission to write to the target folder, validate user authorization before saving sensitive files, and update the output path and file name to match your deployment standards.
