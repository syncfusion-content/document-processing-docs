---
title: Syncfusion HTML to PDF Conversion Guide
description: Convert HTML templates or URLs to PDF with Syncfusion's engine. Simplify the process by including HTML files and associated assets seamlessly.
platform: document-processing
control: general
documentation: UG
---
# Guide to Converting HTML to PDF Using Syncfusion API

With the Syncfusion document processing engine, you can easily convert an HTML template or URL to a PDF document. To convert an HTML template to a PDF document, you need to provide both the HTML template file and its assets.

## Convert HTML to PDF

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

To convert HTML to PDF, send a request to the /v1/conversion/html-to-pdf endpoint, including the HTML file as input as follows:

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/conversion/html-to-pdf' \
  --form-string 'settings={
    "JobID": "job-123",
    "IndexFile":"index.html",
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
    }
  }'

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const formdata = new FormData();
formdata.append(
    "settings",
    JSON.stringify({
      JobID: "job-200",
      "IndexFile":"index.html",
      PaperSize: "A4",
      Settings: {
        Url: "",
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
    "IndexFile":"index.html",
    PaperSize = "A4",
    Settings = new
    {
        Url = "",
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

Once the request is sent, it will create a conversion job to convert HTML to PDF and return the job details as follows:

```
{
    "jobID": "6be827c5-d86d-4fe5-9bd5-c8fd5887a455",
    "status": "requested",
    "createdAt": "2024-05-06T09:39:13.9505828Z"
}
```

## Poll the status of the Conversion Job

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