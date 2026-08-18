---
title: Convert Markdown Files to PDF Using Web API | Syncfusion
description: Convert Markdown files to PDF using Syncfusion Web API. Preserve headings, tables, code blocks, lists, and formatting with reliable server-side conversion.
platform: document-processing
control: general
documentation: UG
---
# Markdown to PDF Conversion Using Syncfusion Web API

The Syncfusion Markdown to PDF Web API converts Markdown documents into PDF files while preserving document structure and formatting. It accurately renders headings, paragraphs, tables, code blocks, lists, and inline formatting to generate visually consistent PDF documents.

The API is useful for documentation publishing, report generation, knowledge bases, technical content distribution, and long-term document archiving.

## Convert Markdown to PDF

To convert a Markdown document to PDF, send a request to the /v1/conversion/markdown-to-pdf endpoint with the Markdown file and conversion settings in the request body.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

 curl --location "http://localhost:8003/v1/conversion/markdown-to-pdf" \
  --form 'file=@"Input.md"' \
  --form 'settings={
    "File": "file",
    "PdfCompliance": "PDF/A-1B",
    "EnableAccessibility": false
  }'

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const formdata = new FormData();
formdata.append("file", fileInput.files[0], "Input.md");
formdata.append(
    "settings",
    JSON.stringify({
      File: "file",
      PdfCompliance: "PDF/A-1B",
      EnableAccessibility: false
    })
  );

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("http://localhost:8003/v1/conversion/markdown-to-pdf", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))

{% endhighlight %} 

{% highlight c# tabtitle="C#" %}

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Post, "http://localhost:8003/v1/conversion/markdown-to-pdf");
var content = new MultipartFormDataContent();
content.Add(new StreamContent(File.OpenRead("Input.md")), "file", "Input.md");
var settings = new
{
    File = "file",
    PdfCompliance = "PDF/A-1B",
    EnableAccessibility = false
};

var json = JsonSerializer.Serialize(settings);
var settingsContent = new StringContent(json, Encoding.UTF8, "application/json");
content.Add(settingsContent, "settings");
request.Content = content;

var response = await client.SendAsync(request);
response.EnsureSuccessStatusCode();
Console.WriteLine(await response.Content.ReadAsStringAsync());

{% endhighlight %} 

{% endtabs %}

## Markdown to PDF Settings
**File** 

Specifies the form field key name of the uploaded Markdown file to be converted.

**Password** 

Specifies the password used to protect the generated PDF document after conversion.

**PdfCompliance** 

Specifies the PDF compliance standard to apply to the generated PDF document. Supported values include PDF/A-1B, PDF/A-2B, PDF/A-3B, and PDF/A-4.

**EnableAccessibility**

Specifies whether accessibility support (tagged PDF) should be enabled in the generated PDF document.

## Markdown to PDF Job Response 
Once the request is sent, a conversion job is created, and the API returns the job details as shown below.

```
{
    "jobID": "6be827c5-d86d-4fe5-9bd5-c8fd5887a455",
    "status": "requested",
    "createdAt": "2024-05-06T09:39:13.9505828Z"
}
```
## Check Markdown to PDF Job Status

After submitting the conversion request, use the job ID to check the conversion status by sending a request to the /v1/conversion/status/{jobID} endpoint.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/conversion/status/9b131bfe-d4eb-4f1d-b946-46443a363eb5' \
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

You will receive one of the following job statuses while the conversion is in progress. When the job is completed successfully, the generated PDF document is returned.

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
    "status": "error",
    "code": "500",
    "message": "Failed to convert the document to PDF"        
}
```

N> The Syncfusion Document Processing APIs are available as Docker-based services for simplified deployment and scalability. [Try them from Docker Hub](https://hub.docker.com/r/syncfusion/document-processing-apis)
