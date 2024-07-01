---
title: Syncfusion PDF Flattening Service Guide
description: Flatten PDF documents seamlessly using Syncfusion's API. Ensure document integrity and security by flattening annotations, form fields, and layers.
platform: document-processing
control: general
documentation: UG
---
# Guide to Flattening PDFs Using Syncfusion API

This feature enables you to flatten annotations and form fields in a PDF document. To use this functionality, you need to provide a PDF document as input to the Flatten PDF API.

## Flatten PDF Document

To flatten a PDF document, send a request to the /v1/edit-pdf/flatten endpoint with the input PDF and its options as shown below.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/edit-pdf/flatten' \
--form 'file=@"Form.pdf"' \
--form 'settings="{
  \"File\": \"file\",
  \"Password\": null,
  \"FlattenFormFields\": true,
  \"FlattenAnnotations\": true
}"'

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const formdata = new FormData();
formdata.append("file", fileInput.files[0], "Form.pdf");
formdata.append("settings", "{\n  \"File\": \"file\",\n  \"Password\": null,\n  \"FlattenFormFields\": true,\n  \"FlattenAnnotations\": true\n}");

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("http://localhost:4000/v1/edit-pdf/flatten", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

{% endhighlight %} 

{% highlight c# tabtitle="C#" %}

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Post, "http://localhost:8003/v1/edit-pdf/flatten");
var content = new MultipartFormDataContent();
content.Add(new StreamContent(File.OpenRead("Form.pdf")), "file", "Form.pdf");
content.Add(new StringContent("{
  \"File\": \"file\",
  \"Password\": null,
  \"FlattenFormFields\": true,
  \"FlattenAnnotations\": true
}"), "settings");
request.Content = content;
var response = await client.SendAsync(request);
response.EnsureSuccessStatusCode();
Console.WriteLine(await response.Content.ReadAsStringAsync());

{% endhighlight %} 

{% endtabs %}

Once the request is sent, it will create a flatten job to flatten the PDF and return the job details as follows:

```
{
    "jobID": "6be827c5-d86d-4fe5-9bd5-c8fd5887a455",
    "status": "requested",
    "createdAt": "2024-05-06T09:39:13.9505828Z"
}
```

## Poll the status of the Flatten Pages Job

Next, you can retrieve the job status by sending a request to the /v1/edit-pdf/status/{jobID} endpoint with the job ID.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/conversion/status/ef0766ab-bc74-456c-8143-782e730a89df' \
--header 'Authorization: Bearer {{Placeholder for token}}'

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("http://localhost:4000/v1/edit-pdf/status/4413bbb5-6b26-4c07-9af2-c26cd2c42fe3", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

{% endhighlight %} 

{% highlight c# tabtitle="C#" %}

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Get, "http://localhost:8003/v1/conversion/status/ef0766ab-bc74-456c-8143-782e730a89df");
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
    "jobId": "4b2782b2-9f08-478b-98fc-4464bd219ca0",
    "status": "queued"
}
```
- In Progress:

```
{
    "jobId": "ef0766ab-bc74-456c-8143-782e730a89df",
    "status": "in progress"
}
```
- Error:

```
{
    "jobId": "ef0766ab-bc74-456c-8143-782e730a89df",
    "status": "errror",
    "code": "500",
    "message": "Failed to convert the document to PDF"        
}
```
