---
title: Convert HTML to PDF Using Syncfusion Web API 
description: Convert HTML with full CSS, JavaScript, and media support into pixel‑perfect PDFs using Syncfusion HTML to PDF Web API for secure, fast and accurate rendering. 
platform: document-processing
control: general
documentation: UG
---
# Converting HTML to PDF Using Syncfusion Web API 

The Syncfusion HTML to PDF Web API allows you to convert web content into high‑quality PDF documents. It supports converting both static HTML templates and live web pages via URLs, ensuring accurate rendering of layouts, styles, images, and fonts. When converting an HTML template, you need to provide the main HTML file along with its dependent assets such as CSS files, images, fonts, and scripts, so the engine can fully render the content as it appears in a browser.

## Convert HTML URL to PDF

To convert HTML to PDF, send a request to the /v1/conversion/html-to-pdf endpoint, including the webpage URL as input as follows:

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/conversion/html-to-pdf' \
  --form-string 'settings={
    "JobID": "job-123",
    "IndexFile":"",
    "PaperSize": "A4",
    "Settings": {
      "Url": "https://www.syncfusion.com/",
      "AdditionalDelay": 500,
      "EnableScripts": true,
      "EnableLinks": true,
      "EnableBookmarks": true,
      "EnableForms": false,
      "EnableToc": false,
      "Margins": 24,
      "Rotation": 0,
      "Orientation": "Portrait",
      "SinglePagePdf": false,
      "ShowHeader": true,
      "ShowFooter": true
    }
  }'

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const formdata = new FormData();
formdata.append(
    "settings",
    JSON.stringify({
      JobID: "job-200",
      "IndexFile":"",
      PaperSize: "A4",
      Settings: {
        Url: "https://example.com/invoice/5678",
        AdditionalDelay: 800,
        EnableScripts: true,
        Enablelinks: true,
        EnableBookmarks: true,
        EnableForms: false,
        EnableToc: false,
        Margins: 24, // points
        Rotation: 0,
        Orientation: "Portrait", // or "Landscape"
        SinglePagePdf: false,
        ShowHeader: true,
        ShowFooter: true
      }
    })
  );

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("http://localhost:8003/v1/conversion/html-to-pdf", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

{% endhighlight %} 

{% highlight c# tabtitle="C#" %}

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Post, "http://localhost:8003/v1/conversion/html-to-pdf");
var content = new MultipartFormDataContent();

var settings = new
{
    JobID = "job-300",
    "IndexFile":"",
    PaperSize = "A4",
    Settings = new
    {
        Url = "https://example.com/guide",
        AdditionalDelay = 700,
        EnableScripts = true,
        Enablelinks = true,
        EnableBookmarks = true,
        EnableForms = false,
        EnableToc = false,
        Margins = 24,
        Rotation = 0,
        Orientation = "Portrait",
        SinglePagePdf = false,
        ShowHeader = true,
        ShowFooter = true
    }
};

content.Add(new StringContent(JsonSerializer.Serialize(settings)), "settings");
request.Content = content;

var response = await client.SendAsync(request);
response.EnsureSuccessStatusCode();
Console.WriteLine(await response.Content.ReadAsStringAsync());

{% endhighlight %} 

{% endtabs %}

## Convert HTML File to PDF

To convert HTML to PDF, send a request to the /v1/conversion/html-to-pdf endpoint, including both the HTML file as input and its assets as follows:

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/conversion/html-to-pdf' \
  --form-string 'settings={
    "JobID": "job-123",
    "IndexFile":"index.html",
    "Assets":["image1.jpeg","style.css"],
    "PaperSize": "A4",
    "Settings": {
      "Url": "",
      "AdditionalDelay": 500,
      "EnableScripts": true,
      "EnableLinks": true,
      "EnableBookmarks": true,
      "EnableForms": false,
      "EnableToc": false,
      "Margins": 24,
      "Rotation": 0,
      "Orientation": "Portrait",
      "SinglePagePdf": false,
      "ShowHeader": true,
      "ShowFooter": true
    },
  "AssetMap":[{"saveAs":"image1.jpeg","original":"image1.jpeg"},{"saveAs":"style.css","original":"style.css"}]
  }'

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const formdata = new FormData();
formdata.append(
    "settings",
    JSON.stringify({
      JobID: "job-200",
      IndexFile: "index.html",
      Assets: ["image1.jpeg", "style.css"],
      PaperSize: "A4",
      Settings: {
        Url: "",
        AdditionalDelay: 800,
        EnableScripts: true,
        EnableLinks: true,        
        EnableBookmarks: true,
        EnableForms: false,
        EnableToc: false,
        Margins: 24,              
        Rotation: 0,
        Orientation: "Portrait",  
        SinglePagePdf: false,
        ShowHeader: true,
        ShowFooter: true
    },
      AssetMap: [
          { saveAs: "image1.jpeg", original: "image1.jpeg" },
          { saveAs: "style.css",   original: "style.css" }
        ]
    })
  );

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("http://localhost:8003/v1/conversion/html-to-pdf", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

{% endhighlight %} 

{% highlight c# tabtitle="C#" %}

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Post, "http://localhost:8003/v1/conversion/html-to-pdf");
var content = new MultipartFormDataContent();

var settings = new
{
    JobID = "job-300",               
    "IndexFile" = "index.html",
    Assets = new[] { "image1.jpeg", "style.css" },
    PaperSize = "A4",
    Settings = new
    {
        Url = "",
        AdditionalDelay = 700,        
        EnableScripts = true,
        EnableLinks = true,         
        EnableBookmarks = true,
        EnableForms = false,
        EnableToc = false,
        Margins = 24,
        Rotation = 0,
        Orientation = "Portrait",
        SinglePagePdf = false,
        ShowHeader = true,
        ShowFooter = true
    },
    AssetMap = new[]
    {
        new { saveAs = "image1.jpeg", original = "image1.jpeg" },
        new { saveAs = "style.css",   original = "style.css" }
    }
};

content.Add(new StringContent(JsonSerializer.Serialize(settings)), "settings");
request.Content = content;

var response = await client.SendAsync(request);
response.EnsureSuccessStatusCode();
Console.WriteLine(await response.Content.ReadAsStringAsync());

{% endhighlight %} 

{% endtabs %}

## HTML to PDF settings
**PaperSize** 

Defines the page size for the generated PDF (e.g., A4, Letter). 

**Assets** 

Specifies additional resources—such as CSS files, images, and fonts—required for converting HTML templates. 

**IndexFile** 

Indicates the main HTML file that serves as the entry point for the conversion. 

**Settings** 

Provides rendering and conversion options for the Blink engine used during HTML to PDF processing. 

**RenderingEngine** 

Specifies the browser engine used to render HTML content before generating the PDF. 

**Url** 

Defines the source URL or HTML location to be converted into a PDF. 

**Orientation** 

Defines the page orientation of the PDF, such as Portrait or Landscape. 

**Rotation** 

Specifies the rotation angle applied to the pages in the generated PDF. 

**Margins** 

Configures the margin size for all sides of each PDF page. 

**AdditionalDelay** 

Adds a wait time (in milliseconds) before conversion to ensure dynamic content fully loads. 

**EnableLinks** 

Preserves active, clickable hyperlinks within the generated PDF. 

**EnableScripts** 

Allows JavaScript execution during HTML rendering for dynamic content support. 

**EnableForms** 

Enables interactive form fields in the generated PDF document. 

**EnableToc** 

Generates a table of contents based on the HTML document structure. 

**EnableBookmarks** 

Creates PDF bookmarks for easier navigation within the document. 

**SinglePagePdf** 

Renders the entire HTML content into one continuous PDF page. 

**ShowHeader** 

Displays header content on each page of the generated PDF. 

**ShowFooter** 

Displays footer content on each page of the generated PDF.

## HTML to PDF Job Response 

Once the request is sent, it will create a conversion job to convert HTML to PDF and return the job details as follows:

```
{
    "jobID": "6be827c5-d86d-4fe5-9bd5-c8fd5887a455",
    "status": "requested",
    "createdAt": "2024-05-06T09:39:13.9505828Z"
}
```

## Check HTML to PDF Job Status 

Next, you can retrieve the job status by sending a request to the /v1/conversion/status/{jobID} endpoint with the job ID.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/conversion/status/f58c9739-622e-41d4-9dd2-57a901dc13c3' \
  --output Output.pdf

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("http://localhost:8003/v1/conversion/status/4413bbb5-6b26-4c07-9af2-c26cd2c42fe3", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

{% endhighlight %} 

{% highlight c# tabtitle="C#" %}

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Get, "http://localhost:8003/v1/conversion/status/ef0766ab-bc74-456c-8143-782e730a89df");
var response = await client.SendAsync(request);
response.EnsureSuccessStatusCode();
Console.WriteLine(await response.Content.ReadAsStringAsync());

{% endhighlight %} 

{% endtabs %}

You will receive one of the following statuses until the job is completed. Upon completion, you will receive the actual output file.

**Job Statuses:**

- Queued:

```
{
    "jobID": "4b2782b2-9f08-478b-98fc-4464bd219ca0",
    "status": "queued"
}
```
- In Progress:

```
{
    "jobID": "ef0766ab-bc74-456c-8143-782e730a89df",
    "status": "in progress"
}
```
- Error:

```
{
    "jobID": "ef0766ab-bc74-456c-8143-782e730a89df",
    "status": "errror",
    "code": "500",
    "message": "Failed to convert the document to PDF"        
}
```

N> The Syncfusion Document Processing API is now available as a Docker-based solution. [Try it out](https://hub.docker.com/r/syncfusion/document-processing-apis)