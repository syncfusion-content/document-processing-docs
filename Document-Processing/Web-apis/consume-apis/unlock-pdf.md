---
title: Unlock Secured PDFs Using Syncfusion Web API 
description: Remove password protection from authorized PDFs securely using Syncfusion unlock Web API for automated workflows.
control: general
documentation: UG
---
# Unlock PDF Using Syncfusion Web API

The Syncfusion Unlock PDF Web API removes password protection from secured PDF documents through a straightforward process. By providing the correct password, you can restore full access to the document, including editing, copying, and printing. 

## Unlocking PDF Document

To unlock a PDF document, send a request to the /v1/edit-pdf/unlock-pdf endpoint with the input PDF and its options as shown below.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/edit-pdf/unlock-pdf' \
--form 'file=@Image1.pdf' \
--form 'settings={
  "File": "file",
  "Password": "12345678"
}'

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const formdata = new FormData();
formdata.append("file", fileInput.files[0], "invoice.pdf");
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

fetch("http://localhost:8003/v1/edit-pdf/unlock-pdf", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

{% endhighlight %} 

{% highlight c# tabtitle="C#" %}

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Post, "http://localhost:8003/v1/edit-pdf/unlock-pdf");
var content = new MultipartFormDataContent();
content.Add(new StreamContent(File.OpenRead("Image1.pdf")), "file", "Image1.pdf");

var settings = new
{
  File = "file",
  Password = "12345678"
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

## Unlock PDF settings

**File** 

Specifies the input PDF file that needs to be unlocked or unprotected. 

**Password** 

Specifies the password required to open and unlock the protected PDF file. 

## Unlock PDF Job Response

Once the request is sent, it will create a unlock job to unlock the PDF and return the job details as follows:

```
{
    "jobID": "6be827c5-d86d-4fe5-9bd5-c8fd5887a455",
    "status": "requested",
    "createdAt": "2024-05-06T09:39:13.9505828Z"
}
```

## Check Unlock PDF Job Status

Next, you can retrieve the job status by sending a request to the /v1/edit-pdf/status/{jobID} endpoint with the job ID.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/edit-pdf/status/f58c9739-622e-41d4-9dd2-57a901dc13c3' \
  --output Output.pdf
  
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