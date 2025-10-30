---
layout: post
title: Server actions for Syncfusion ASP.NET Core PDF Viewer
description: Review the ASP.NET Core server actions used by the Syncfusion PDF Viewer to manage loading, caching, annotations, and document interactions.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET Core
documentation: ug
---

# Server Actions

Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer is a client-server control that processes PDF documents on the server and sends incremental responses to the client for rendering and interaction. Ensure the ASP.NET Core controller routes are registered, dependency injection supplies `IHostingEnvironment` and `IMemoryCache`, and caching is configured to persist page data between requests. Validate file paths and restrict inputs to trusted locations to avoid exposing sensitive files.

The server actions exposed by the PDF Viewer controller include:

* Load
* RenderPdfPages
* RenderThumbnailImages
* Bookmarks
* RenderAnnotationComments
* Unload
* ExportAnnotations
* ImportAnnotations
* ImportFormFields
* ExportFormFields
* Download
* PrintImages

## Load action

N> public IActionResult Load([FromBody] Dictionary<string, string> jsonObject)

The [Load](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_Load_System_String_) action initiates PDF loading. The PDF Viewer caches the document using the supplied hash ID, streaming the first 100 pages and fetching the remainder on demand through virtual loading. The `jsonObject` payload must include either a file name or base64 content, and the controller should resolve the document path by calling `GetDocumentPath`. The action invokes the [Load](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_Load_System_IO_Stream_System_Collections_Generic_Dictionary_System_String_System_String__) API, returning serialized JSON to the viewer.

```cs
public IActionResult Load([FromBody] Dictionary<string, string> jsonObject)
{
    Console.WriteLine("Load called");
    //Initialize the PDF viewer object with memory cache object
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
    jsonResult = pdfviewer.Load(stream, jsonObject);
    return Content(JsonConvert.SerializeObject(jsonResult));
}
```

## RenderPdfPages

N> public IActionResult RenderPdfPages([FromBody] Dictionary<string, string> jsonObject)

Whenever the client requests a new page segment, the [RenderPdfPages](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_RenderPages_System_String_) action retrieves the necessary bitmap information. The request payload contains the page index and size constraints. The action calls [GetPage](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_GetPage_System_Collections_Generic_Dictionary_System_String_System_String__) and returns the serialized page data to the viewer for incremental rendering.

```cs
public IActionResult RenderPdfPages([FromBody] Dictionary<string, string> jsonObject)
{
    //Initialize the PDF Viewer object with memory cache object
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    object jsonResult = pdfviewer.GetPage(jsonObject);
    return Content(JsonConvert.SerializeObject(jsonResult));
}
```

## RenderThumbnailImages action

N> public IActionResult RenderThumbnailImages([FromBody] Dictionary<string, string> jsonObject)

The [RenderThumbnailImages](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_RenderThumbnail_System_String_) action generates thumbnail previews for page navigation. The viewer requests thumbnails once during initialization and whenever documents change. The action invokes [GetThumbnailImages](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_GetThumbnailImages_System_Collections_Generic_Dictionary_System_String_System_String__) to return the encoded image list that populates the thumbnail pane.

```cs
public IActionResult RenderThumbnailImages([FromBody] Dictionary<string, string> jsonObject)
{
    //Initialize the PDF Viewer object with memory cache object
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    object result = pdfviewer.GetThumbnailImages(jsonObject);
    return Content(JsonConvert.SerializeObject(result));
}
```

## Bookmarks

N> public IActionResult Bookmarks([FromBody] Dictionary<string, string> jsonObject)

The Bookmarks action extracts document outlines during initialization to populate the bookmarks panel. The action calls [GetBookmarks](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_GetBookmarks_System_Collections_Generic_Dictionary_System_String_System_String__) and returns a hierarchical JSON structure that links bookmark selections to their corresponding page indices.

```cs
public IActionResult Bookmarks([FromBody] Dictionary<string, string> jsonObject)
{
    //Initialize the PDF viewer object with memory cache object
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    var jsonResult = pdfviewer.GetBookmarks(jsonObject);
    return Content(JsonConvert.SerializeObject(jsonResult));
}
```

## RenderAnnotationComments

N> public IActionResult RenderAnnotationComments([FromBody] Dictionary<string, string> jsonObject)

The [RenderAnnotationComments](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_RenderComments_System_String_) action synchronizes annotation discussions. It calls [GetAnnotationComments](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_GetAnnotationComments_System_Collections_Generic_Dictionary_System_String_System_String__) to retrieve comment threads and metadata, enabling the client to display the comments panel with the latest entries.

```cs
public IActionResult RenderAnnotationComments([FromBody] Dictionary<string, string> jsonObject)
{
    //Initialize the PDF viewer object with memory cache object
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    object jsonResult = pdfviewer.GetAnnotationComments(jsonObject);
    return Content(JsonConvert.SerializeObject(jsonResult));
}
```

## Unload action

N> public IActionResult Unload([FromBody] Dictionary<string, string> jsonObject)

The [Unload](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_Unload_System_String_) action clears cached artifacts when the viewer closes or refreshes. Callers do not need additional payload details beyond the document GUID. The action invokes [ClearCache](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_ClearCache_System_Collections_Generic_Dictionary_System_String_System_String__) to release memory for the stored document.

```cs
public IActionResult Unload([FromBody] Dictionary<string, string> jsonObject)
{
    //Initialize the PDF viewer object with memory cache object
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    pdfviewer.ClearCache(jsonObject);
    return this.Content("Document cache is cleared");
}
```

## ExportAnnotations action

N> public IActionResult ExportAnnotations([FromBody] Dictionary<string, string> jsonObject)

The [ExportAnnotations](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_ExportAnnotations_System_String_) action responds to the “Export annotation to JSON” and “Export annotation to XFDF” toolbar commands. The `jsonObject` parameter identifies the format. The action delegates to [ExportAnnotation](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_ExportAnnotation_System_Collections_Generic_Dictionary_System_String_System_String__) and returns the exported data so the client can trigger a download.

```cs
public IActionResult ExportAnnotations([FromBody] Dictionary<string, string> jsonObject)
{
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    string jsonResult = pdfviewer.ExportAnnotation(jsonObject);
    return Content(jsonResult);
}
```

## ImportAnnotations

N> public IActionResult ImportAnnotations([FromBody] Dictionary<string, string> jsonObject)

The [ImportAnnotations](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_ImportAnnotations_System_String_) action imports XFDF or JSON annotation data supplied by the toolbar. The payload either provides a file name that resolves through `GetDocumentPath` or contains base64 data. Update error responses to echo available keys such as `fileName` to keep diagnostics consistent when documents are missing. The action ultimately calls [ImportAnnotation](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_ImportAnnotation_System_Collections_Generic_Dictionary_System_String_System_String__) and returns the serialized result.

```cs
public IActionResult ImportAnnotations([FromBody] Dictionary<string, string> jsonObject)
{
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    string jsonResult = string.Empty;
    object JsonResult;
    if (jsonObject != null && jsonObject.ContainsKey("fileName"))
    {
        string documentPath = GetDocumentPath(jsonObject["fileName"]);
        if (!string.IsNullOrEmpty(documentPath))
        {
            jsonResult = System.IO.File.ReadAllText(documentPath);
        }
        else
        {
            return this.Content(jsonObject["document"] + " is not found");
        }
    }
    else
    {
        string extension = Path.GetExtension(jsonObject["importedData"]);
        if (extension != ".xfdf")
        {
            JsonResult = pdfviewer.ImportAnnotation(jsonObject);
            return Content(JsonConvert.SerializeObject(JsonResult));
        }
        else
        {
            string documentPath = GetDocumentPath(jsonObject["importedData"]);
            if (!string.IsNullOrEmpty(documentPath))
            {
                byte[] bytes = System.IO.File.ReadAllBytes(documentPath);
                jsonObject["importedData"] = Convert.ToBase64String(bytes);
                JsonResult = pdfviewer.ImportAnnotation(jsonObject);
                return Content(JsonConvert.SerializeObject(JsonResult));
            }
            else
            {
                return this.Content(jsonObject["document"] + " is not found");
            }
        }
    }
    return Content(jsonResult);
}
```

## ImportFormFields action

N> public IActionResult ImportFormFields([FromBody] Dictionary<string, string> jsonObject)

The [ImportFormFields](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_ImportFormFields_System_String_) action hydrates form fields from JSON data supplied by the viewer or a stored file. The controller should resolve the source path and ensure the input is sanitized before calling [ImportFormFields](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_ImportFormFields_System_Collections_Generic_Dictionary_System_String_System_String__) to populate the form fields within the loaded document.

```cs
public IActionResult ImportFormFields([FromBody] Dictionary<string, string> jsonObject)
{
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    jsonObject["data"] = GetDocumentPath(jsonObject["data"]);
    object jsonResult = pdfviewer.ImportFormFields(jsonObject);
    return Content(JsonConvert.SerializeObject(jsonResult));
}
```

## ExportFormFields action

N> public IActionResult ExportFormFields([FromBody] Dictionary<string, string> jsonObject)

The [ExportFormFields](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_ExportFormFields_System_String_) action runs when end users submit PDF forms. It serializes the current form values to JSON for custom processing or download. The action delegates to [ExportFormFields](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_ExportFormFields_System_Collections_Generic_Dictionary_System_String_System_String__) and returns the generated JSON string to the viewer.

```cs
public IActionResult ExportFormFields([FromBody] Dictionary<string, string> jsonObject)
{
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    string jsonResult = pdfviewer.ExportFormFields(jsonObject);
    return Content(jsonResult);
}
```

## Download action

N> public IActionResult Download([FromBody] Dictionary<string, string> jsonObject)

The [Download](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_Download_System_String_) action streams the current PDF to the client when the toolbar download command is used. The controller calls [GetDocumentAsBase64](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_GetDocumentAsBase64_System_Collections_Generic_Dictionary_System_String_System_String__), and the client decodes the base64 string to initiate a file download.

```cs
public IActionResult Download([FromBody] Dictionary<string, string> jsonObject)
{
    //Initialize the PDF Viewer object with memory cache object
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    string documentBase = pdfviewer.GetDocumentAsBase64(jsonObject);
    return Content(documentBase);
}
```

## PrintImages

N> public IActionResult PrintImages([FromBody] Dictionary<string, string> jsonObject)

The [PrintImages](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_Print_System_String_) action supports client-side printing. The viewer requests each page image sequentially, and the controller calls [GetPrintImage](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_GetPrintImage_System_Collections_Generic_Dictionary_System_String_System_String__) to return serialized image data that the browser uses to compose printable markup.

```cs
public IActionResult PrintImages([FromBody] Dictionary<string, string> jsonObject)
{
    //Initialize the PDF Viewer object with memory cache object
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    object pageImage = pdfviewer.GetPrintImage(jsonObject);
    return Content(JsonConvert.SerializeObject(pageImage));
}
```

## GetDocumentPath method

N> private string GetDocumentPath(string document)

`GetDocumentPath` resolves the document file system path used by multiple actions. Ensure the implementation restricts file access to known directories and logs attempts to access missing resources for diagnostics.

```cs
private string GetDocumentPath(string document)
{
    string documentPath = string.Empty;
    if (!System.IO.File.Exists(document))
    {
        var path = _hostingEnvironment.ContentRootPath;
        if (System.IO.File.Exists(path + "/Data/" + document))
            documentPath = path + "/Data/" + document;
    }
    else
    {
        documentPath = document;
    }
    Console.WriteLine(documentPath);
    return documentPath;
}
```

## PdfViewerController constructor

N> public PdfViewerController(IHostingEnvironment hostingEnvironment, IMemoryCache cache)

`IMemoryCache` stores rendered document resources, while `IHostingEnvironment` exposes the application path for locating files. Inject both services through the constructor so that each controller action reuses the same cache instance for optimal performance.

```cs
private IHostingEnvironment _hostingEnvironment;
//Initialize the memory cache object
public IMemoryCache _cache;
public PdfViewerController(IHostingEnvironment hostingEnvironment, IMemoryCache cache)
{
    _hostingEnvironment = hostingEnvironment;
    _cache = cache;
    Console.WriteLine("PdfViewerController initialized");
}
```