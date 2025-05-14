---
title: Syncfusion PDF Page Deletion Service Guide
description:  Easily remove specific pages from a PDF document using Syncfusion's Delete Pages API. Provide the PDF and page deletion options for precise management.
platform: document-processing
control: general
documentation: UG
---
# How to Delete Pages from a PDF Using Syncfusion API

This feature allows you to delete pages in a PDF document. To perform this operation, you need to supply a PDF document as input to the Delete Pages API.

## Delete PDF Pages

To delete PDF pages, send a request to the /v1/edit-pdf/delete-pages endpoint with a PDF document and its options as shown below.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/edit-pdf/delete-pages' \
--form 'file=@"merge/example.pdf"' \
--form 'settings="{
  \"RotationAngle\": \"90\",
  \"File\": \"file\",
  \"Password\": null,
  \"PageRanges\": [
    {
      \"Start\": 1,
      \"End\": 5
    },
    {
      \"Start\": 6,
      \"End\": 10
    }
  ]
}"'

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const formdata = new FormData();
formdata.append("file", fileInput.files[0], "merge/example.pdf");
formdata.append("settings", "{\n  \"RotationAngle\": \"90\",\n  \"File\": \"file\",\n  \"Password\": null,\n  \"PageRanges\": [\n    {\n      \"Start\": 1,\n      \"End\": 5\n    },\n    {\n      \"Start\": 6,\n      \"End\": 10\n    }\n  ]\n}");

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("http://localhost:4000/v1/edit-pdf/delete-pages", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

{% endhighlight %} 

{% highlight c# tabtitle="C#" %}

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Post, "http://localhost:8003/v1/edit-pdf/delete-pages");
var content = new MultipartFormDataContent();
content.Add(new StreamContent(File.OpenRead("merge/example.pdf")), "file", "merge/example.pdf");
content.Add(new StringContent("{
  \"RotationAngle\": \"90\",
  \"File\": \"file\",
  \"Password\": null,
  \"PageRanges\": [
    {
      \"Start\": 1,
      \"End\": 5
    },
    {
      \"Start\": 6,
      \"End\": 10
    }
  ]
}"), "settings");
request.Content = content;
var response = await client.SendAsync(request);
response.EnsureSuccessStatusCode();
Console.WriteLine(await response.Content.ReadAsStringAsync());

{% endhighlight %} 

{% endtabs %}

Once the request is sent, it will create a job to delete PDF pages and return the job details as follows:

```
{
    "jobID": "6be827c5-d86d-4fe5-9bd5-c8fd5887a455",
    "status": "requested",
    "createdAt": "2024-05-06T09:39:13.9505828Z"
}
```

## Poll the status of the Delete Pages Job

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