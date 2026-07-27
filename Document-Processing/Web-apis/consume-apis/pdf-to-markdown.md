---
title: Convert PDF to Markdown Using Syncfusion Web API 
description: Convert PDF files to Markdown format using Syncfusion Web API. Extract structured text, tables, and content from PDFs with fast, reliable server-side conversion.
platform: document-processing
control: general
documentation: UG
---
# Converting PDF to Markdown Using Syncfusion Web API 

The Syncfusion PDF to Markdown Web API allows you to extract and convert content from PDF documents into well‑structured Markdown format. It accurately extracts text, tables, and other document elements, making the content ready for use in documentation systems, content pipelines, and AI-powered workflows.

## Convert PDF to Markdown

To convert a PDF document to Markdown, send a request to the /v1/conversion/pdf-to-markdown endpoint, including the PDF file as input along with the settings JSON.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/conversion/pdf-to-markdown"' \
--form 'file=@Input1.pdf' \
--form 'settings={
  "File": "file"
}'

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const formdata = new FormData();
formdata.append("file", fileInput.files[0], "Input1.pdf");
formdata.append(
  "settings",
  JSON.stringify({
    File: "file"      
  })
);

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("http://localhost:8003/v1/conversion/pdf-to-markdown", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

{% endhighlight %} 

{% highlight c# tabtitle="C#" %}

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Post, "http://localhost:8003/v1/conversion/pdf-to-markdown");
var content = new MultipartFormDataContent();
content.Add(new StreamContent(File.OpenRead("Input1.pdf")), "file", "Input1.pdf");
var settings = new
{
    File = "file",             
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

## PDF to Markdown Settings
**Password** 

Specifies the password required to open a protected PDF document before converting it to Markdown. 

## PDF to Markdown Job Response 
Once the request is sent, it will create a conversion job to convert the PDF document to Markdown and return the job details as follows:

```
{
    "jobID": "6be827c5-d86d-4fe5-9bd5-c8fd5887a455",
    "status": "requested",
    "createdAt": "2024-05-06T09:39:13.9505828Z"
}
```
## Check PDF to Markdown Job Status

Next, you can retrieve the job status by sending a request to the /v1/conversion/status/{jobID} endpoint with the job ID.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/conversion/status/7d0b62cd-c5a1-4035-9728-50c4efd1f0e1' \
  --output Output.md

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
    "message": "Failed to convert the document to Markdown"        
}
```

N> The Syncfusion Document Processing API is now available as a Docker-based solution. [Try it out](https://hub.docker.com/r/syncfusion/document-processing-apis)
