---
title: Syncfusion Word to PDF Converter Service Guide
description: Effortlessly convert Word documents to PDF using Syncfusion's API. Customize settings and integrate seamlessly for efficient document management.
platform: document-processing
control: general
documentation: UG
---
# Guide to Converting Word to PDF Using Syncfusion API

Converting a Word document to PDF is simple with support for .doc, .docx, and .rtf formats. Customize conversion settings, like accessibility and archiving options, to suit your needs.

## Convert Word to PDF

To convert a Word document to PDF, send a request to the /v1/conversion/word-to-pdf endpoint, including both the Word file as input and the settings JSON.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/conversion/word-to-pdf' \
--form 'file=@"SalesInvoice.docx"' \
--form 'settings="{
  \"File\": \"file\",
  \"Password\": null,
  \"PreserveFormFields\": true,
  \"PdfComplaince\": \"PDF/A-1B\",
  \"EnableAccessibility\": false
}"

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const formdata = new FormData();
formdata.append("file", fileInput.files[0], "SalesInvoice.docx");
formdata.append("settings", "{\n  \"File\": \"file\",\n  \"Password\": null,\n  \"PreserveFormFields\": true,\n  \"PdfComplaince\": \"PDF/A-1B\",\n  \"EnableAccessibility\": false\n}");

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("http://localhost:8003/v1/conversion/word-to-pdf", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))

{% endhighlight %} 

{% highlight c# tabtitle="C#" %}

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Post, "http://localhost:8003/v1/conversion/word-to-pdf");
var content = new MultipartFormDataContent();
content.Add(new StreamContent(File.OpenRead("SalesInvoice.docx")), "file", "SalesInvoice.docx");
content.Add(new StringContent("{
  \"File\": \"file\",
  \"Password\": null,
  \"PreserveFormFields\": true,
  \"PdfComplaince\": \"PDF/A-1B\",
  \"EnableAccessibility\": false
}"), "settings");
request.Content = content;
var response = await client.SendAsync(request);
response.EnsureSuccessStatusCode();
Console.WriteLine(await response.Content.ReadAsStringAsync());

{% endhighlight %} 

{% endtabs %}

Once the request is sent, it will create a conversion job to convert the Word document to PDF and return the job details as follows:

```
{
    "jobID": "6be827c5-d86d-4fe5-9bd5-c8fd5887a455",
    "status": "requested",
    "createdAt": "2024-05-06T09:39:13.9505828Z"
}
```

## Poll the status of the Conversion Job

Next, you can retrieve the job status by sending a request to the /v1/conversion/status/{jobID} endpoint with the job ID.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/conversion/status/ef0766ab-bc74-456c-8143-782e730a89df' \

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("http://localhost:4000/v1/conversion/status/4413bbb5-6b26-4c07-9af2-c26cd2c42fe3", requestOptions)
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
    "message": "Failed to convert the document to PDF"        
}
```

**Note**: The Syncfusion Document Processing API is now available as a Docker-based solution. [Try it out](https://hub.docker.com/r/syncfusion/document-processing-apis)