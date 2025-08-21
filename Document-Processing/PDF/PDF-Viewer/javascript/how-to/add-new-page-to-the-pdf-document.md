---
layout: post
title: Add new page to the pdf document in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about Add new page to the pdf document in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Add new page to the pdf document
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Add new page to the pdf document in ##Platform_Name## Pdfviewer control

The PDF Viewer library allows you to add a new page to the PDF document using the PDF library.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/documentation/pdfviewer/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Follow the steps provided in the [link](https://ej2.syncfusion.com/documentation/pdfviewer/how-to/create-pdfviewer-service/) to create the PDF Viewer web service.

**Step 3:** Add the following code sample in the PDF Viewer controller code to add a new page in the PDF document using the PDF library.

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

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to/Add%20new%20page%20to%20the%20PDF%20document%20using%20PDF%20library)