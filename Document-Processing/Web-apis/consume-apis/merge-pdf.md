---
title: Syncfusion PDF Merge Service Guide
description: Seamlessly combine one or multiple PDF documents into a unified PDF file with the PDF Merge Service.
platform: document-processing
control: general
documentation: UG
---
# Guide to Merging PDFs Using Syncfusion API

You can effortlessly merge one or more PDF documents into a single PDF file. To perform this merge, you need to supply one or more PDF documents as input to the merge PDF document service.

## Merge PDF Document

To merge PDF documents, send a request to the /v1/edit-pdf/merge endpoint, including both the PDF files as input and the settings as follows:

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/edit-pdf/merge' \
--form 'file1=@"merge/example.pdf"' \
--form 'file2=@"merge/example1.pdf"' \
--form 'settings="{
  \"Files\": [
    {
      \"File\": \"file1\",
    },
    {
      \"File\": \"file2\",
    }
  ],
  \"PreserveBookmarks\": true,
  \"FolderPath\": ""
}"'

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const formdata = new FormData();
formdata.append("file1", fileInput.files[0], "merge/example.pdf");
formdata.append("file2", fileInput.files[0], "merge/example1.pdf");
formdata.append("settings", "{\n  \"Files\": [\n    {\n      \"File\": \"file1\",\n    },\n    {\n      \"File\": \"file2\",\n    }\n  ],\n  \"PreserveBookmarks\": true,\n \"FolderPath\": ""\n}");

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("http://localhost:4000/v1/edit-pdf/merge", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

{% endhighlight %} 

{% highlight c# tabtitle="C#" %}

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Post, "http://localhost:8003/v1/edit-pdf/merge");
var content = new MultipartFormDataContent();
content.Add(new StreamContent(File.OpenRead("merge/example.pdf")), "file1", "merge/example.pdf");
content.Add(new StreamContent(File.OpenRead("merge/example1.pdf")), "file2", "merge/example1.pdf");
content.Add(new StringContent("{
  \"Files\": [
    {
      \"File\": \"file1\",
    },
    {
      \"File\": \"file2\",
    }
  ],
  \"PreserveBookmarks\": true,
  \"FolderPath\": ""
}"), "settings");
request.Content = content;
var response = await client.SendAsync(request);
response.EnsureSuccessStatusCode();
Console.WriteLine(await response.Content.ReadAsStringAsync());

{% endhighlight %} 

{% endtabs %}

Once the request is sent, it will create a job to merge PDF documents and return the job details as follows:

```
{
    "jobID": "6be827c5-d86d-4fe5-9bd5-c8fd5887a455",
    "status": "requested",
    "createdAt": "2024-05-06T09:39:13.9505828Z"
}
```

## Poll the status of the Merge Job

Next, you can retrieve the job status by sending a request to the /v1/edit-pdf/status/{jobID} endpoint with the job ID.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/conversion/status/ef0766ab-bc74-456c-8143-782e730a89df' \

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