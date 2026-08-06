---
title: Convert Word to Markdown Using Syncfusion Web API 
description: Convert Word documents (DOCX) to Markdown using Syncfusion Web API. Preserve headings, tables, lists, and text formatting with reliable server-side conversion.
platform: document-processing
control: general
documentation: UG
---
# Convert Word Documents to Markdown using Syncfusion Web API

The Syncfusion Word to Markdown Web API converts Word documents into well-structured Markdown files while preserving document content and formatting. It accurately converts headings, paragraphs, tables, lists, and inline text formatting to maintain the structure and readability of the original document.
The API is useful for documentation websites, knowledge bases, content management systems, content migration workflows, and AI-powered applications.

## Convert Word to Markdown

To convert a Word document to Markdown format, send a request to the /v1/conversion/word-to-markdown endpoint with the Word document and conversion settings in the request body.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl -v --location 'http://localhost:8003/v1/conversion/word-to-markdown' \
  --form 'file=@"Input.docx"' \
  --form 'settings={
    "File": "file",
    "Password": null
  }'
{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const formdata = new FormData();
formdata.append("file", fileInput.files[0], "Input.docx");
formdata.append(
    "settings",
    JSON.stringify({
      File: "file",
      Password: null,
    })
  );

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("http://localhost:8003/v1/conversion/word-to-markdown", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))

{% endhighlight %} 

{% highlight c# tabtitle="C#" %}

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Post, "http://localhost:8003/v1/conversion/word-to-markdown");
var content = new MultipartFormDataContent();
content.Add(new StreamContent(File.OpenRead("Input.docx")), "file", "Input.docx");
var settings = new
{
    File = "file",
    Password = (string?)null,
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

## Word to Markdown Settings
**File**

Specifies the form field key name of the uploaded Word document to be converted.

**Password** 

Specifies the password required to open a protected Word document before converting it to Markdown.

## Word to Markdown Job Response 
Once the request is sent, a conversion job is created, and the API returns the job details as shown below:

```
{
    "jobID": "6be827c5-d86d-4fe5-9bd5-c8fd5887a455",
    "status": "requested",
    "createdAt": "2024-05-06T09:39:13.9505828Z"
}
```
## Check Word to Markdown Job Status

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

N> The Syncfusion Document Processing APIs are available as Docker-based services for simplified deployment and scalability. [Try them from Docker Hub](https://hub.docker.com/r/syncfusion/document-processing-apis).
