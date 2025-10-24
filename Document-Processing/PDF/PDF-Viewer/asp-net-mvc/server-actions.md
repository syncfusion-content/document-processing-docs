---
layout: post
title: Server actions for Syncfusion ASP.NET MVC PDF Viewer
description: Review the ASP.NET MVC server actions used by the Syncfusion PDF Viewer to manage loading, caching, annotations, and document interactions.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Server Actions

Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer is a client-server control that processes PDF documents on the server and sends incremental responses to the client for rendering and interaction. Ensure the ASP.NET MVC controller routes are registered, dependency injection supplies `IHostingEnvironment` and `IMemoryCache`, and caching is configured to persist page data between requests. Validate file paths and restrict inputs to trusted locations to avoid exposing sensitive files.

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

N> public ActionResult Load(jsonObjects jsonObject)

The [Load](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_Load_System_String_) action initiates PDF loading. The PDF Viewer caches the document using the supplied hash ID, streaming the first 100 pages and fetching the remainder on demand through virtual loading. The `jsonObject` payload must include either a file name or base64 content, and the controller should resolve the document path by calling `GetDocumentPath`. The action invokes the [Load](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_Load_System_IO_Stream_System_Collections_Generic_Dictionary_System_String_System_String__) API, returning serialized JSON to the viewer.

```cs
[System.Web.Mvc.HttpPost]
public ActionResult Load(jsonObjects jsonObject)
{
    PdfRenderer pdfviewer = new PdfRenderer();
    MemoryStream stream = new MemoryStream();
    var jsonData = JsonConverter(jsonObject);
    object jsonResult = new object();
    if (jsonObject != null && jsonData.ContainsKey("document"))
    {
        if (bool.Parse(jsonData["isFileName"]))
        {
            string documentPath = GetDocumentPath(jsonData["document"]);

            if (!string.IsNullOrEmpty(documentPath))
            {
                byte[] bytes = System.IO.File.ReadAllBytes(documentPath);
                stream = new MemoryStream(bytes);

            }
            else
            {
                string fileName = jsonData["document"].Split(new string[] { "://" }, StringSplitOptions.None)[0];
                if (fileName == "http" || fileName == "https")
                {
                    var WebClient = new WebClient();
                    byte[] pdfDoc = WebClient.DownloadData(jsonData["document"]);
                    stream = new MemoryStream(pdfDoc);
                }
                else
                {
                    return this.Content(jsonData["document"] + " is not found");
                }

            }
        }
        else
        {
            byte[] bytes = Convert.FromBase64String(jsonData["document"]);
            stream = new MemoryStream(bytes);

        }
    }
    jsonResult = pdfviewer.Load(stream, jsonData);
    return Content(JsonConvert.SerializeObject(jsonResult));
}
```

## RenderPdfPages

N> public ActionResult RenderPdfPages(jsonObjects jsonObject)

Whenever the client requests a new page segment, the [RenderPdfPages](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_RenderPages_System_String_) action retrieves the necessary bitmap information. The request payload contains the page index and size constraints. The action calls [GetPage](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_GetPage_System_Collections_Generic_Dictionary_System_String_System_String__) and returns the serialized page data to the viewer for incremental rendering.

```cs
[System.Web.Mvc.HttpPost]
public ActionResult RenderPdfPages(jsonObjects jsonObject)
{
    PdfRenderer pdfviewer = new PdfRenderer();
    var jsonData = JsonConverter(jsonObject);
    object jsonResult = pdfviewer.GetPage(jsonData);
    return Content(JsonConvert.SerializeObject(jsonResult));
}
```

## RenderThumbnailImages action

N> public ActionResult RenderThumbnailImages(jsonObjects jsonObject)

The [RenderThumbnailImages](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_RenderThumbnail_System_String_) action generates thumbnail previews for page navigation. The viewer requests thumbnails once during initialization and whenever documents change. The action invokes [GetThumbnailImages](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_GetThumbnailImages_System_Collections_Generic_Dictionary_System_String_System_String__) to return the encoded image list that populates the thumbnail pane.

```cs
[System.Web.Mvc.HttpPost]
public ActionResult RenderThumbnailImages(jsonObjects jsonObject)
{
    PdfRenderer pdfviewer = new PdfRenderer();
    var jsonData = JsonConverter(jsonObject);
    object result = pdfviewer.GetThumbnailImages(jsonData);
    return Content(JsonConvert.SerializeObject(result));
}
```

## Bookmarks

N> public ActionResult Bookmarks(jsonObjects jsonObject)

The Bookmarks action extracts document outlines during initialization to populate the bookmarks panel. The action calls [GetBookmarks](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_GetBookmarks_System_Collections_Generic_Dictionary_System_String_System_String__) and returns a hierarchical JSON structure that links bookmark selections to their corresponding page indices.

```cs
[System.Web.Mvc.HttpPost]
public ActionResult Bookmarks(jsonObjects jsonObject)
{
    PdfRenderer pdfviewer = new PdfRenderer();
    var jsonData = JsonConverter(jsonObject);
    object jsonResult = pdfviewer.GetBookmarks(jsonData);
    return Content(JsonConvert.SerializeObject(jsonResult));
}
```

## RenderAnnotationComments

N> public ActionResult RenderAnnotationComments(jsonObjects jsonObject)

The [RenderAnnotationComments](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_RenderComments_System_String_) action synchronizes annotation discussions. It calls [GetAnnotationComments](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_GetAnnotationComments_System_Collections_Generic_Dictionary_System_String_System_String__) to retrieve comment threads and metadata, enabling the client to display the comments panel with the latest entries.

```cs
[System.Web.Mvc.HttpPost]
public ActionResult RenderAnnotationComments(jsonObjects jsonObject)
{
    PdfRenderer pdfviewer = new PdfRenderer();
    var jsonData = JsonConverter(jsonObject);
    object jsonResult = pdfviewer.GetAnnotationComments(jsonData);
    return Content(JsonConvert.SerializeObject(jsonResult));
}
```

## Unload action

N> public ActionResult Unload(jsonObjects jsonObject)

The [Unload](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_Unload_System_String_) action clears cached artifacts when the viewer closes or refreshes. Callers do not need additional payload details beyond the document GUID. The action invokes [ClearCache](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_ClearCache_System_Collections_Generic_Dictionary_System_String_System_String__) to release memory for the stored document.

```cs
[System.Web.Mvc.HttpPost]
public ActionResult Unload(jsonObjects jsonObject)
{
    PdfRenderer pdfviewer = new PdfRenderer();
    var jsonData = JsonConverter(jsonObject);
    pdfviewer.ClearCache(jsonData);
    return this.Content("Document cache is cleared");
}
```

## ExportAnnotations action

N> public ActionResult ExportAnnotations(jsonObjects jsonObject)

The [ExportAnnotations](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_ExportAnnotations_System_String_) action responds to the “Export annotation to JSON” and “Export annotation to XFDF” toolbar commands. The `jsonObject` parameter identifies the format. The action delegates to [ExportAnnotation](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_ExportAnnotation_System_Collections_Generic_Dictionary_System_String_System_String__) and returns the exported data so the client can trigger a download.

```cs
[System.Web.Mvc.HttpPost]
public ActionResult ExportAnnotations(jsonObjects jsonObject)
{
    PdfRenderer pdfviewer = new PdfRenderer();
    var jsonData = JsonConverter(jsonObject);
    string jsonResult = pdfviewer.ExportAnnotation(jsonData);
    return Content((jsonResult));
}
```

## ImportAnnotations

N> public ActionResult ImportAnnotations(jsonObjects jsonObject)

The [ImportAnnotations](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_ImportAnnotations_System_String_) action imports XFDF or JSON annotation data supplied by the toolbar. The payload either provides a file name that resolves through `GetDocumentPath` or contains base64 data. Update error responses to echo available keys such as `fileName` to keep diagnostics consistent when documents are missing. The action ultimately calls [ImportAnnotation](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_ImportAnnotation_System_Collections_Generic_Dictionary_System_String_System_String__) and returns the serialized result.

```cs
[System.Web.Mvc.HttpPost]
public ActionResult ImportAnnotations(jsonObjects jsonObject)
{
    PdfRenderer pdfviewer = new PdfRenderer();
    string jsonResult = string.Empty;
    var jsonData = JsonConverter(jsonObject);
    if (jsonObject != null && jsonData.ContainsKey("fileName"))
    {
        string documentPath = GetDocumentPath(jsonData["fileName"]);
        if (!string.IsNullOrEmpty(documentPath))
        {
            jsonResult = System.IO.File.ReadAllText(documentPath);
        }
        else
        {
            return this.Content(jsonData["document"] + " is not found");
        }
    }
    return Content(JsonConvert.SerializeObject(jsonResult));
}
```

## ImportFormFields action

N> public ActionResult ImportFormFields(jsonObjects jsonObject)

The [ImportFormFields](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_ImportFormFields_System_String_) action hydrates form fields from JSON data supplied by the viewer or a stored file. The controller should resolve the source path and ensure the input is sanitized before calling [ImportFormFields](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_ImportFormFields_System_Collections_Generic_Dictionary_System_String_System_String__) to populate the form fields within the loaded document.

```cs
[System.Web.Mvc.HttpPost]
public ActionResult ImportFormFields(jsonObjects jsonObject)
{
    PdfRenderer pdfviewer = new PdfRenderer();
    var jsonData = JsonConverter(jsonObject);
    object jsonResult = pdfviewer.ImportFormFields(jsonData);
    return Content(JsonConvert.SerializeObject(jsonResult));
}
```

## ExportFormFields action

N> public ActionResult ExportFormFields(jsonObjects jsonObject)

The [ExportFormFields](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_ExportFormFields_System_String_) action runs when end users submit PDF forms. It serializes the current form values to JSON for custom processing or download. The action delegates to [ExportFormFields](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_ExportFormFields_System_Collections_Generic_Dictionary_System_String_System_String__) and returns the generated JSON string to the viewer.

```cs
[System.Web.Mvc.HttpPost]
public ActionResult ExportFormFields(jsonObjects jsonObject)
{
    PdfRenderer pdfviewer = new PdfRenderer();
    var jsonData = JsonConverter(jsonObject);
    string jsonResult = pdfviewer.ExportFormFields(jsonData);
    return Content(jsonResult);
}
```

## Download action

N> public ActionResult Download(jsonObjects jsonObject)

The [Download](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_Download_System_String_) action streams the current PDF to the client when the toolbar download command is used. The controller calls [GetDocumentAsBase64](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_GetDocumentAsBase64_System_Collections_Generic_Dictionary_System_String_System_String__), and the client decodes the base64 string to initiate a file download.

```cs
[System.Web.Mvc.HttpPost]
public ActionResult Download(jsonObjects jsonObject)
{
    PdfRenderer pdfviewer = new PdfRenderer();
    var jsonData = JsonConverter(jsonObject);
    string documentBase = pdfviewer.GetDocumentAsBase64(jsonData);
    return Content(documentBase);
}
```

## PrintImages

N> public ActionResult PrintImages(jsonObjects jsonObject)

The [PrintImages](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_Print_System_String_) action supports client-side printing. The viewer requests each page image sequentially, and the controller calls [GetPrintImage](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_GetPrintImage_System_Collections_Generic_Dictionary_System_String_System_String__) to return serialized image data that the browser uses to compose printable markup.

```cs
[System.Web.Mvc.HttpPost]
public ActionResult PrintImages(jsonObjects jsonObject)
{
    PdfRenderer pdfviewer = new PdfRenderer();
    var jsonData = JsonConverter(jsonObject);
    object pageImage = pdfviewer.GetPrintImage(jsonData);
    return Content(JsonConvert.SerializeObject(pageImage));
}
```

## Other methods

### GetDocumentPath

N> private string GetDocumentPath(string document)

`GetDocumentPath` resolves the document file system path used by multiple actions. Ensure the implementation restricts file access to known directories and logs attempts to access missing resources for diagnostics.

```cs
private string GetDocumentPath(string document)
{
    string documentPath = string.Empty;
    if (!System.IO.File.Exists(document))
    {
        var path = HttpContext.Request.PhysicalApplicationPath;
        if (System.IO.File.Exists(path + "/App_Data/" + document))
            documentPath = path + "/App_Data/" + document;
    }
    else
    {
        documentPath = document;
    }
    return documentPath;
}
```

### JsonConverter method

N> public Dictionary<string, string> JsonConverter(jsonObjects results)

The JsonConverter method converts the posted `jsonObjects` instance into a flat `Dictionary<string, string>` for easy consumption by controller actions.

N> Required namespaces: `System.Reflection` and `System.Linq`.

```cs
public Dictionary<string, string> JsonConverter(jsonObjects results)
{
    Dictionary<string, object> resultObjects = new Dictionary<string, object>();
    resultObjects = results.GetType().GetProperties(BindingFlags.Instance | BindingFlags.Public).ToDictionary(prop => prop.Name, prop => prop.GetValue(results, null));
    var emptyObjects = (from kv in resultObjects
                        where kv.Value != null
                        select kv).ToDictionary(kv => kv.Key, kv => kv.Value);
    Dictionary<string, string> jsonResult = emptyObjects.ToDictionary(k => k.Key, k => k.Value.ToString());
    return jsonResult;
}
```

### GetPlainText method

N> private HttpResponseMessage GetPlainText(string pageImage)

Use GetPlainText to return the action result status as `HttpResponseMessage` with `text/plain` content, preventing the browser from downloading a file. This pattern is helpful when actions produce data that should not trigger a download (for example, status or debug output).

```cs
private HttpResponseMessage GetPlainText(string pageImage)
{
    var responseText = new HttpResponseMessage(HttpStatusCode.OK);
    responseText.Content = new StringContent(pageImage, System.Text.Encoding.UTF8, "text/plain");
    return responseText;
}
```

## jsonObjects class

The `jsonObjects` parameter represents the request payload sent by the PDF Viewer. It groups properties used across different actions; each action reads only the fields it requires. Define this class in the PdfViewer controller so all actions can bind to it.

```cs
 public class jsonObjects
    {
        public string document { get; set; }
        public string password { get; set; }
        public string zoomFactor { get; set; }
        public string isFileName { get; set; }
        public string xCoordinate { get; set; }
        public string yCoordinate { get; set; }
        public string pageNumber { get; set; }
        public string documentId { get; set; }
        public string hashId { get; set; }
        public string sizeX { get; set; }
        public string sizeY { get; set; }
        public string startPage { get; set; }
        public string endPage { get; set; }
        public string stampAnnotations { get; set; }
        public string textMarkupAnnotations { get; set; }
        public string stickyNotesAnnotation { get; set; }
        public string shapeAnnotations { get; set; }
        public string measureShapeAnnotations { get; set; }
        public string action { get; set; }
        public string pageStartIndex { get; set; }
        public string pageEndIndex { get; set; }
        public string fileName { get; set; }
        public string elementId { get; set; }
        public string pdfAnnotation { get; set; }
        public string importPageList { get; set; }
        public string uniqueId { get; set; }
        public string data { get; set; }
        public string viewPortWidth { get; set; }
        public string viewportHeight { get; set; }
        public string tilecount { get; set; }
        public string freeTextAnnotation { get; set; }
        public string signatureData { get; set; }
        public string fieldsData { get; set; }
        public string FormDesigner { get; set; }
        public string inkSignatureData { get; set; }
        public string tileXCount { get; set; }
        public string tileYCount { get; set; }
        public string digitalSignaturePageList { get; set; }
        public string annotationCollection { get; set; }
        public string annotationsPageList { get; set; }
        public string formFieldsPageList { get; set; }
        public string documentLiveCount { get; set; }
        public string annotationDataFormat { get; set; }
		public bool isCompletePageSizeNotReceived { get; set; }
        public bool hideEmptyDigitalSignatureFields { get; set; }
        public bool showDigitalSignatureAppearance { get; set; }
        public bool digitalSignaturePresent { get; set; }
		public bool isAnnotationsExist { get; set; }
        public bool isFormFieldAnnotationsExist { get; set; }
    }
```