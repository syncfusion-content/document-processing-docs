---
layout: post
title: Add new page to PDF document - Syncfusion JavaScript PDF Viewer
description: Learn how to append a new page to a loaded PDF document in the Syncfusion JavaScript PDF Viewer control using the PDF library service.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Add a new page to a PDF document in JavaScript PDF Viewer control

The JavaScript PDF Viewer library can append a blank page to any loaded PDF document through the accompanying PDF library service.

**Step 1:** Follow the guidance in the [Getting started with the JavaScript PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started) article to configure a working sample.

**Step 2:** Complete the web service setup by using this [guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/how-to/create-pdfviewer-service).

**Step 3:** Add the following controller action to insert a new page into the loaded PDF document before returning it to the viewer.

```javascript

[HttpPost("Load")]
[Route("[controller]/Load")]
//Post action for loading PDF documents.
public IActionResult Load([FromBody] Dictionary<string, string> jsonObject)
{
    Console.WriteLine("Load called");
    //Initialize the PDF viewer object with the memory cache object.
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    MemoryStream stream = new MemoryStream();
    object jsonResult = new object();
    if (jsonObject != null && jsonObject.ContainsKey("document"))
    {
        if (bool.Parse(jsonObject["isFileName"]))
        {
            string documentPath = GetDocumentPath(jsonObject["document"]);
            if (!string.IsNullOrEmpty(documentPath))
            {
                byte[] bytes = System.IO.File.ReadAllBytes(documentPath);
                stream = new MemoryStream(bytes);
            }
            else
            {
                return this.Content(jsonObject["document"] + " is not found");
            }
        }
        else
        {
            byte[] bytes = Convert.FromBase64String(jsonObject["document"]);
            stream = new MemoryStream(bytes);
        }
    }

    //Code to create a new page at the end of the loaded pdf document.
    PdfLoadedDocument pdfLoadedDocument = new PdfLoadedDocument(stream);
    pdfLoadedDocument.Pages.Add();
    MemoryStream str = new MemoryStream();
    pdfLoadedDocument.Save(str);
    pdfLoadedDocument.Close(true);
    jsonResult = pdfviewer.Load(str, jsonObject);
    return Content(JsonConvert.SerializeObject(jsonResult));
}
```

[View the sample on GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to/Add%20new%20page%20to%20the%20PDF%20document%20using%20PDF%20library)
