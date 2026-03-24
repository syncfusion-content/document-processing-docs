---
title: Compress PDF Files Using Syncfusion Web API 
description: Reduce PDF file size with image optimization and structural compression while maintaining visual quality using Syncfusion compression Web API. 
control: general
documentation: UG
---
# Compress PDF Files Using Syncfusion Web API

The Syncfusion Compress PDF Web API reduces the file size of PDF documents while maintaining acceptable visual quality. It optimizes images, fonts, metadata, and internal structures, producing smaller PDFs that are easier to store, share, and distribute. This is especially useful for email sharing, web delivery, and document archiving.

## Compress PDF Document

To compress a PDF document, send a request to the /v1/edit-pdf/compress endpoint with the input PDF file and compression options as shown below.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/edit-pdf/compress' \
--form 'file=@"Input.pdf"' \
--form 'settings="{
  \"File\": \"file\",
  \"Password\": null,
  \"ImageQuality\": 50,
  \"OptimizeFont\": true,
  \"RemoveMetadata\": false,
  \"OptimizePageContents\": true,
  \"FlattenFormFields\": true,
  \"FlattenAnnotations\": true
}"'

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const formdata = new FormData();
formdata.append("file", fileInput.files[0], "4mb.pdf");
formdata.append(
  "settings",
  JSON.stringify({
    File: "file",
    Password: null,
    ImageQuality: 50,
    OptimizeFont: true,
    RemoveMetadata: false,
    OptimizePageContents: true,
    FlattenFormFields: true,
    FlattenAnnotations: true
  })
);

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("http://localhost:8003/v1/edit-pdf/compress", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

{% endhighlight %} 

{% highlight c# tabtitle="C#" %}

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Post, "http://localhost:8003/v1/edit-pdf/compress");
var content = new MultipartFormDataContent();
content.Add(new StreamContent(File.OpenRead("Sample.pdf")), "file1", "Sample.pdf");

var settings = new
{
    File = "file",
    Password = (string?)null,
    ImageQuality = 50,
    OptimizeFont = true,
    RemoveMetadata = false,
    OptimizePageContents = true,
    FlattenFormFields = true,
    FlattenAnnotations = true
};

var json = JsonSerializer.Serialize(settings);
var settingsContent = new StringContent(json, Encoding.UTF8, "application/json");
content.Add(settingsContent, "settings");
request.Content = content;

using var response = await client.SendAsync(request);
response.EnsureSuccessStatusCode();
Console.WriteLine(await response.Content.ReadAsStringAsync());

{% endhighlight %} 

{% endtabs %}

## Compress PDF settings

**Password** 

Specifies the password required to open and process a protected PDF file. 

**ImageQuality** 

Controls image compression quality. Lower values reduce file size.  

**OptimizeFont** 

Optimizes and subsets embedded fonts to reduce overall PDF size without affecting text appearance. 

**RemoveMetadata** 

Removes document metadata such as author, title, and creation details to reduce file size and improve privacy. 

**OptimizePageContents** 

Optimizes page content by removing unnecessary objects and streamlining internal PDF structures. 

**FlattenFormFields** 

Converts interactive form fields into static content to further reduce file size. 

**FlattenAnnotations** 

Converts annotations (such as comments and highlights) into static content to minimize PDF size. 

## Compress PDF Job Response

Once the request is sent, it will create a compression job to compress the PDF and return the job details as follows:

```
{
    "jobID": "6be827c5-d86d-4fe5-9bd5-c8fd5887a455",
    "status": "requested",
    "createdAt": "2024-05-06T09:39:13.9505828Z"
}
```

## Check Compress PDF Job Status

Next, you can retrieve the job status by sending a request to the /v1/edit-pdf/status/{jobID} endpoint with the job ID.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/edit-pdf/status/9b131bfe-d4eb-4f1d-b946-46443a363eb5' \
  --output Output.pdf

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const requestOptions = {
  method: "GET",
  redirect: "follow"
};
fetch("http://localhost:8003/v1/edit-pdf/status/4413bbb5-6b26-4c07-9af2-c26cd2c42fe3", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

{% endhighlight %} 

{% highlight c# tabtitle="C#" %}

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Get, "http://localhost:8003/v1/edit-pdf/status/ef0766ab-bc74-456c-8143-782e730a89df");
var response = await client.SendAsync(request);
response.EnsureSuccessStatusCode();
Console.WriteLine(await response.Content.ReadAsStringAsync());

{% endhighlight %} 

{% endtabs %}

You will receive one of the following statuses until the job is completed. Upon completion, you will receive the actual output file.

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