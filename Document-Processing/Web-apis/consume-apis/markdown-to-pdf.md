---
title: Convert Markdown to PDF Using Syncfusion Web API 
description: Convert Markdown files to high-quality PDFs using Syncfusion Web API. Preserve headings, tables, code blocks, and formatting with fast, reliable server-side conversion.
platform: document-processing
control: general
documentation: UG
---
# Converting Markdown to PDF Using Syncfusion Web API 

The Syncfusion Markdown to PDF Web API allows you to convert Markdown documents into well‑formatted, high‑quality PDF files while preserving the structure and readability of the content. It supports accurate rendering of elements such as headings, paragraphs, tables, code blocks, lists, and inline formatting in the resulting PDF. The conversion can be customized with options like PDF/A compliance for long‑term archiving.

## Convert Markdown to PDF

To convert a Markdown document to PDF, send a request to the /v1/conversion/markdown-to-pdf endpoint, including both the Markdown file as input and the settings JSON.

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
**InputFile** 

Specifies the key name of the uploaded Markdown file to be converted to PDF.

**Password** 

Specifies the password to protect the output PDF document after conversion. 

**PdfCompliance** 

Defines the PDF/A compliance level for archival and standards adherence. Supported levels include PDF/A‑1B, PDF/A‑2B, PDF/A‑3B, and PDF/A‑4.

**EnableAccessibility**

Specifies whether to enable accessibility (tagged PDF) support in the output PDF document.

## Markdown to PDF Job Response 
Once the request is sent, it will create a conversion job to convert the Markdown document to PDF and return the job details as follows:

```
{
    "jobID": "6be827c5-d86d-4fe5-9bd5-c8fd5887a455",
    "status": "requested",
    "createdAt": "2024-05-06T09:39:13.9505828Z"
}
```
## Check Markdown to PDF Job Status

Next, you can retrieve the job status by sending a request to the /v1/conversion/status/{jobID} endpoint with the job ID.

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
    "status": "error",
    "code": "500",
    "message": "Failed to convert the document to PDF"        
}
```

N> The Syncfusion Document Processing API is now available as a Docker-based solution. [Try it out](https://hub.docker.com/r/syncfusion/document-processing-apis)
