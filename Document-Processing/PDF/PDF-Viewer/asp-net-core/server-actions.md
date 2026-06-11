---
layout: post
title: Server actions for Syncfusion ASP.NET Core PDF Viewer
description: Review the ASP.NET Core server actions used by the Syncfusion PDF Viewer to manage loading, caching, annotations, and document interactions.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Server Actions in ASP.NET Core PDF Viewer

The Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer is a client-server control that performs all heavy document processing on the server while sending incremental responses to the client for rendering and user interaction. This architecture ensures optimal performance, memory efficiency, and scalability by processing PDF documents on the backend and streaming only the necessary data to the browser.

**Key requirements for proper operation:**
- ASP.NET Core controller routes must be properly registered
- Dependency injection must supply `IHostingEnvironment` and `IMemoryCache`
- Memory caching must be configured to persist page data between requests
- File path validation must restrict access to trusted locations only
- Input sanitization must prevent path traversal and file access vulnerabilities

## Available server actions

The PDF Viewer controller exposes the following server actions that handle different aspects of document processing and interaction:

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

**Method signature:**
```csharp
public IActionResult Load([FromBody] Dictionary<string, string> jsonObject)
```

Initializes PDF document loading and establishes server-side caching for the document.

**Workflow:**
1. Accepts document reference (file name or base64 content)
2. Resolves file path using `GetDocumentPath` for file-based documents
3. Creates memory stream from file or base64 data
4. Invokes `PdfRenderer.Load()` to initialize the document
5. Caches document using a hash ID for subsequent page requests
6. Streams first 100 pages to client for immediate rendering
7. Remaining pages are fetched on-demand through virtual loading

**Example: Loading a PDF from file**

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

## Rendering actions

### RenderPdfPages action

**Method signature:**
```csharp
public IActionResult RenderPdfPages([FromBody] Dictionary<string, string> jsonObject)
```

[RenderPdfPages](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_RenderPages_System_String_) generates and returns page images for display as user scrolls or navigates. As user scrolls, client requests pages that are not yet rendered, server returns only those pages on-demand

**Workflow:**
1. Client requests specific page segments
2. Server retrieves cached document using provided document ID
3. [`PdfRenderer.GetPage()`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_GetPage_System_Collections_Generic_Dictionary_System_String_System_String__) renders requested pages to bitmap
4. Bitmap is encoded as base64 image data
5. Response includes rendered page image and metadata
6. Client receives only the pages needed

```cs
public IActionResult RenderPdfPages([FromBody] Dictionary<string, string> jsonObject)
{
    //Initialize the PDF Viewer object with memory cache object
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    object jsonResult = pdfviewer.GetPage(jsonObject);
    return Content(JsonConvert.SerializeObject(jsonResult));
}
```

### RenderThumbnailImages action

**Method signature:**
```csharp
public IActionResult RenderThumbnailImages([FromBody] Dictionary<string, string> jsonObject)
```

[RenderThumbnailImages](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_RenderThumbnail_System_String_) generates thumbnail previews for the sidebar navigation panel. It populates the left sidebar thumbnail panel for quick visual navigation

**Workflow:**
1. Client requests thumbnails (typically during document load)
2. [`PdfRenderer.GetThumbnailImages()`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_GetThumbnailImages_System_Collections_Generic_Dictionary_System_String_System_String__) generates small preview images for all pages
4. All thumbnail images are encoded as base64 strings
5. Response includes array of thumbnail images for every page

```cs
public IActionResult RenderThumbnailImages([FromBody] Dictionary<string, string> jsonObject)
{
    //Initialize the PDF Viewer object with memory cache object
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    object result = pdfviewer.GetThumbnailImages(jsonObject);
    return Content(JsonConvert.SerializeObject(result));
}
```

### Bookmarks action

**Method signature:**
```csharp
public IActionResult Bookmarks([FromBody] Dictionary<string, string> jsonObject)
```

Extract document outline/bookmarks for hierarchical navigation and populate bookmarks panel for users to jump to document sections

**How it works:**
1. [`PdfRenderer.GetBookmarks()`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_GetBookmarks_System_Collections_Generic_Dictionary_System_String_System_String__) extracts document outline from PDF
2. Bookmarks are organized in a hierarchical tree structure
3. Each bookmark includes title and target page reference
4. Nested bookmarks maintain parent-child relationships
5. Returns JSON structure mapping bookmarks to page indices

```cs
public IActionResult Bookmarks([FromBody] Dictionary<string, string> jsonObject)
{
    //Initialize the PDF viewer object with memory cache object
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    var jsonResult = pdfviewer.GetBookmarks(jsonObject);
    return Content(JsonConvert.SerializeObject(jsonResult));
}
```

## Annotation actions

### RenderAnnotationComments action

**Method signature:**
```csharp
public IActionResult RenderAnnotationComments([FromBody] Dictionary<string, string> jsonObject)
```

Retrieve annotation comment threads for display in the comments panel.

**Workflow:**
1. `PdfRenderer.GetAnnotationComments()` retrieves all comment data from document
2. Comments are organized by annotation and sorted chronologically
3. Includes metadata: author, timestamp, status
4. Returns comment threads linked to specific annotations
5. Client displays comments in sidebar panel

**Request payload:**
- `uniqueId` (string): Document cache ID

**Response:** JSON array of comment threads with metadata

**Use case:** Display collaboration comments and annotation discussions

```cs
public IActionResult RenderAnnotationComments([FromBody] Dictionary<string, string> jsonObject)
{
    //Initialize the PDF viewer object with memory cache object
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    object jsonResult = pdfviewer.GetAnnotationComments(jsonObject);
    return Content(JsonConvert.SerializeObject(jsonResult));
}
```

### Unload action

**Method signature:**
```csharp
public IActionResult Unload([FromBody] Dictionary<string, string> jsonObject)
```

Clear cached document data and free server memory.

**Workflow:**
1. [Unload](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_Unload_System_String_) should be called when viewer is closed or document is unloaded
2. [`PdfRenderer.ClearCache()`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_ClearCache_System_Collections_Generic_Dictionary_System_String_System_String__) removes document from memory cache
3. All rendered pages and metadata for this document are cleared
4. Memory is freed for other documents or operations
5. Document ID becomes invalid for subsequent requests

Unload should be called to prevent memory leaks when documents are no longer needed

```cs
public IActionResult Unload([FromBody] Dictionary<string, string> jsonObject)
{
    //Initialize the PDF viewer object with memory cache object
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    pdfviewer.ClearCache(jsonObject);
    return this.Content("Document cache is cleared");
}
```

### ExportAnnotations action

**Method signature:**
```csharp
public IActionResult ExportAnnotations([FromBody] Dictionary<string, string> jsonObject)
```

Export annotations to JSON or XFDF format for storage or sharing using the [ExportAnnotations](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_ExportAnnotations_System_String_) action.

**Workflow:**
1. User clicks "Export annotations" in toolbar
2. [`PdfRenderer.ExportAnnotation()`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_ExportAnnotation_System_Collections_Generic_Dictionary_System_String_System_String__) serializes all annotations from document
3. Supports two formats: JSON or XFDF
4. Returns serialized annotation data
5. Client initiates file download with exported data

```cs
public IActionResult ExportAnnotations([FromBody] Dictionary<string, string> jsonObject)
{
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    string jsonResult = pdfviewer.ExportAnnotation(jsonObject);
    return Content(jsonResult);
}
```

### ImportAnnotations action

**Method signature:**
```csharp
public IActionResult ImportAnnotations([FromBody] Dictionary<string, string> jsonObject)
```

Import annotations from JSON or XFDF file into the current document using [ImportAnnotations](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_ImportAnnotations_System_String_) action. Validate file paths and restrict access to trusted locations only

**Workflow:**
1. User selects annotation file to import from toolbar
2. File can be specified by filename or as base64-encoded data
3. Controller resolves file path for file-based imports
4. [`PdfRenderer.ImportAnnotation()`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_ImportAnnotation_System_Collections_Generic_Dictionary_System_String_System_String__) parses annotation data
5. Annotations are merged into the current document
6. Client UI updates to display imported annotations

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

## Form field actions

### ImportFormFields action

**Method signature:**
```csharp
public IActionResult ImportFormFields([FromBody] Dictionary<string, string> jsonObject)
```

Populate form fields from saved field data using [ImportFormFields](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_ImportFormFields_System_String_) action. Validate and sanitize input file paths to prevent directory traversal.

**How it works:**
1. User imports form field data from a previously saved file
2. Controller resolves file path or accepts base64-encoded data
3. [`PdfRenderer.ImportFormFields()`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_ImportFormFields_System_Collections_Generic_Dictionary_System_String_System_String__) parses field data and maps to form fields
4. Form field values are populated in the document
5. Client UI updates to display imported field values

```cs
public IActionResult ImportFormFields([FromBody] Dictionary<string, string> jsonObject)
{
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    jsonObject["data"] = GetDocumentPath(jsonObject["data"]);
    object jsonResult = pdfviewer.ImportFormFields(jsonObject);
    return Content(JsonConvert.SerializeObject(jsonResult));
}
```

### ExportFormFields action

**Method signature:**
```csharp
public IActionResult ExportFormFields([FromBody] Dictionary<string, string> jsonObject)
```

Export form field values to JSON format for storage or submission using [ExportFormFields](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_ExportFormFields_System_String_).

**Workflow:**
1. User submits form or exports form data
2. [`PdfRenderer.ExportFormFields()`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_ExportFormFields_System_Collections_Generic_Dictionary_System_String_System_String__) serializes all form field values
3. Each field includes name and current value
4. Returns JSON object mapping field names to values
5. Client can save or transmit this data

```cs
public IActionResult ExportFormFields([FromBody] Dictionary<string, string> jsonObject)
{
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    string jsonResult = pdfviewer.ExportFormFields(jsonObject);
    return Content(jsonResult);
}
```

### Download action

**Method signature:**
```csharp
public IActionResult Download([FromBody] Dictionary<string, string> jsonObject)
```

Stream the current PDF document to client for download using [Download](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_Download_System_String_) action.

**Workflow:**
1. User clicks download button in toolbar
2. [`PdfRenderer.GetDocumentAsBase64()`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_GetDocumentAsBase64_System_Collections_Generic_Dictionary_System_String_System_String__) retrieves current document
3. Document is encoded as base64 string for safe transmission
4. Server returns base64-encoded PDF data
5. Client decodes and initiates browser download with original filename

```cs
public IActionResult Download([FromBody] Dictionary<string, string> jsonObject)
{
    //Initialize the PDF Viewer object with memory cache object
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    string documentBase = pdfviewer.GetDocumentAsBase64(jsonObject);
    return Content(documentBase);
}
```

### PrintImages action

**Method signature:**
```csharp
public IActionResult PrintImages([FromBody] Dictionary<string, string> jsonObject)
```

[PrintImages](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerServerActionSettingsBuilder.html#Syncfusion_EJ2_PdfViewer_PdfViewerServerActionSettingsBuilder_Print_System_String_) action generates print-ready page images for client-side printing.

**How it works:**
1. User clicks print button in toolbar
2. Browser opens print preview dialog
3. For each page visible in print range:
   - [`PdfRenderer.GetPrintImage()`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfRenderer.html#Syncfusion_EJ2_PdfViewer_PdfRenderer_GetPrintImage_System_Collections_Generic_Dictionary_System_String_System_String__) renders page at print resolution
   - Image is encoded as base64
   - Client receives image data
4. Browser composes HTML with images for printing
5. User can print to physical printer or PDF

```cs
public IActionResult PrintImages([FromBody] Dictionary<string, string> jsonObject)
{
    //Initialize the PDF Viewer object with memory cache object
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    object pageImage = pdfviewer.GetPrintImage(jsonObject);
    return Content(JsonConvert.SerializeObject(pageImage));
}
```

## Helper methods

### GetDocumentPath method

**Method signature:**
```csharp
private string GetDocumentPath(string document)
```

`GetDocumentPath` resolves document file path from a relative or absolute reference.

**Workflow:**
1. Checks if provided path is absolute and file exists
2. If not found, tries to locate file in `Data/` subdirectory
3. Logs path for diagnostics and security auditing
4. Returns resolved file path or empty string if not found

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

### PdfViewerController constructor

**Method signature:**
```csharp
public PdfViewerController(IHostingEnvironment hostingEnvironment, IMemoryCache cache)
```

Initializes the PDF Viewer controller with required dependencies.

**Dependencies:**
- **IHostingEnvironment**: Provides application root path via `ContentRootPath` property
  - Used by `GetDocumentPath` to locate documents relative to application directory
  - Enables secure path resolution
- **IMemoryCache**: ASP.NET Core in-memory cache service
  - Stores rendered pages and document metadata
  - Improves performance by avoiding repeated processing
  - Critical for multi-user scenarios

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