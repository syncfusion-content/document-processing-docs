---
title: Convert HTML Documents to Markdown Using Web API | Syncfusion
description: Convert HTML documents to Markdown using Syncfusion Web API. Preserve headings, tables, lists, and formatting with reliable server-side conversion.
platform: document-processing
control: general
documentation: UG
---
# HTML to Markdown Conversion Using Syncfusion Web API

The Syncfusion HTML to Markdown Web API converts HTML documents into well-structured Markdown files while preserving document content and formatting. It accurately converts headings, paragraphs, tables, lists, links, and inline formatting to generate readable and maintainable Markdown output.

The API is useful for content migration, documentation websites, knowledge bases, content management systems, and AI-powered workflows.

## Convert HTML to Markdown

To convert an HTML document to Markdown format, send a request to the /v1/conversion/html-to-markdown endpoint with the HTML document and conversion settings in the request body.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location "http://localhost:8003/v1/conversion/html-to-markdown" \
  --form 'file=@"Input.html"' \
  --form 'settings={
    "File":"file",
    "JobID":"job-123"
  }'

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const formdata = new FormData();
formdata.append("file", fileInput.files[0], "Input.html");
formdata.append(
    "settings",
    JSON.stringify({
      JobID: "job-200",
      InputFile: "file"
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
var request = new HttpRequestMessage(HttpMethod.Post, "http://localhost:8003/v1/conversion/html-to-markdown");
var content = new MultipartFormDataContent();
content.Add(new StreamContent(File.OpenRead("Input.md")), "file", "Input.html");
var settings = new
{
    JobID = "job-300",
    InputFile = "file"
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

Specifies the form field key name of the uploaded HTML document to be converted.

## HTML to Markdown Job Response 
Once the request is sent, a conversion job is created, and the API returns the job details as shown below.

```
{
    "jobID": "6be827c5-d86d-4fe5-9bd5-c8fd5887a455",
    "status": "requested",
    "createdAt": "2024-05-06T09:39:13.9505828Z"
}
```
## Check HTML to Markdown Job Status

After submitting the conversion request, use the job ID to check the conversion status by sending a request to the /v1/conversion/status/{jobID} endpoint.

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

You will receive one of the following job statuses while the conversion is in progress. When the job completed successfully, the generated Markdown file is returned.

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
    "message": "Failed to convert the document to Markdown"        
}
```

N> The Syncfusion Document Processing APIs are available as Docker-based services for simplified deployment and scalability. [Try them from Docker Hub](https://hub.docker.com/r/syncfusion/document-processing-apis)
