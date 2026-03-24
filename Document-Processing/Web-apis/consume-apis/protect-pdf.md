---
title: Protect PDF Files Using Syncfusion Web API
description: Apply passwords and permission restrictions to safeguard sensitive PDFs using Syncfusion strong encryption and protection Web API.
platform: document-processing
control: general
documentation: UG
---
# Protecting PDFs Using Syncfusion WEB API

The Syncfusion Protect PDF WEB API allows you to secure PDF documents by applying protection settings through a simple API‑based workflow. By providing a PDF document along with a password as input to the Protect PDF API, you can restrict unauthorized access and control document usage by setting permissions such as preventing editing, copying, or printing. This ensures that sensitive information remains protected while preserving the original content, layout, and quality of the PDF for secure sharing.

## Protecting PDF Document

To protect a PDF document, send a request to the /v1/edit-pdf/protect-pdf endpoint with the input PDF and its options as shown below.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/edit-pdf/protect-pdf' \
--form 'file=@Input1.pdf' \
--form 'settings={
  "File": "file",
  "Password": "12345678"
}'

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const formdata = new FormData();
formdata.append("file", fileInput.files[0], "Input1.pdf");
formdata.append(
  "settings",
  JSON.stringify({
    File: "file",
    Password: "12345678"
  })
);

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("http://localhost:8003/v1/edit-pdf/protect-pdf", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

{% endhighlight %} 

{% highlight c# tabtitle="C#" %}

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Post, "http://localhost:8003/v1/edit-pdf/protect-pdf");
var content = new MultipartFormDataContent();
content.Add(new StreamContent(File.OpenRead("Image1.pdf")), "file", "Image1.pdf");
var settings = new
{
  File = "file",
  Password = "12345678",    
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

## Protect PDF settings

**File** 

Specifies the unique identifier of the uploaded PDF document that needs to be protected. 

**Password** 

Specifies the user password used to protect the PDF document and restrict unauthorized access.

## Protect PDF Job Response

Once the request is sent, it will create a protect job to protect the PDF and return the job details as follows:

```
{
    "jobID": "6be827c5-d86d-4fe5-9bd5-c8fd5887a455",
    "status": "requested",
    "createdAt": "2024-05-06T09:39:13.9505828Z"
}
```

## Check Protect PDF Job Status

Next, you can retrieve the job status by sending a request to the /v1/edit-pdf/status/{jobID} endpoint with the job ID.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/edit-pdf/status/ef0766ab-bc74-456c-8143-782e730a89df' \
--header 'Authorization: Bearer {{Placeholder for token}}'

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
request.Headers.Add("Authorization", "Bearer {{Placeholder for token}}");
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