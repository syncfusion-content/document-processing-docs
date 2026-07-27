---
title: Convert HTML to Markdown Using Syncfusion Web API 
description: Convert HTML files to Markdown format using Syncfusion Web API. Extract structured text, headings, tables, and formatting with fast, reliable server-side conversion.
platform: document-processing
control: general
documentation: UG
---
# Converting HTML to Markdown Using Syncfusion Web API 

The Syncfusion HTML to Markdown Web API allows you to convert HTML documents into well‑structured Markdown format while preserving the content and readability of the document. It supports accurate conversion of elements such as headings, paragraphs, tables, lists, and inline formatting, making the output ready for use in documentation systems, content pipelines, and AI-powered workflows.

## Convert HTML to Markdown

To convert an HTML document to Markdown, send a request to the /v1/conversion/html-to-markdown endpoint, including both the HTML file as input and the settings JSON.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/conversion/html-to-markdown' \
  --form-string 'settings={
    "JobID": "job-123",
    "InputFile":"",
  }'

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const formdata = new FormData();
formdata.append(
    "settings",
    JSON.stringify({
      JobID: "job-200",
      "InputFile":""
    })
  );

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("http://localhost:8003/v1/conversion/html-to-markdown", requestOptions)
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
    "InputFile":"",
};

content.Add(new StringContent(JsonSerializer.Serialize(settings)), "settings");
request.Content = content;

var response = await client.SendAsync(request);
response.EnsureSuccessStatusCode();
Console.WriteLine(await response.Content.ReadAsStringAsync());

{% endhighlight %} 

{% endtabs %}

## HTML to Markdown Settings
**File** 

Specifies the key name of the uploaded HTML file to be converted to Markdown.

## HTML to Markdown Job Response 
Once the request is sent, it will create a conversion job to convert the HTML document to Markdown and return the job details as follows:

```
{
    "jobID": "6be827c5-d86d-4fe5-9bd5-c8fd5887a455",
    "status": "requested",
    "createdAt": "2024-05-06T09:39:13.9505828Z"
}
```
## Check HTML to Markdown Job Status

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
