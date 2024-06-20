---
title: Rotate PDF Pages Service
description: Easily rotate pages in a PDF document using the Rotate Pages API. Provide the PDF file and rotation options to the rotate-pages endpoint for precise page adjustments.
platform: document-processing
control: general
documentation: UG
---
# Rotate Pages

This feature allows you to rotate pages in a PDF document. To perform this operation, you need to supply a PDF document as input to the Rotate Pages API.

## Rotate PDF Pages

To rotate PDF pages, send a request to the /v1/edit-pdf/rotate-pages endpoint with a PDF document and its options as shown below.

{% tabs %}

{% highlight c# tabtitle="curl" %}

curl --location 'http://localhost:8003/v1/edit-pdf/rotate-pages' \
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

{% highlight javaScript tabtitle="JavaScript:" %}

const formdata = new FormData();
formdata.append("file", fileInput.files[0], "merge/example.pdf");
formdata.append("settings", "{\n  \"RotationAngle\": \"90\",\n  \"File\": \"file\",\n  \"Password\": null,\n  \"PageRanges\": [\n    {\n      \"Start\": 1,\n      \"End\": 5\n    },\n    {\n      \"Start\": 6,\n      \"End\": 10\n    }\n  ]\n}");

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("http://localhost:4000/v1/edit-pdf/rotate-pages", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

{% endhighlight %} 

{% highlight c# tabtitle="C#" %}

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Post, "http://localhost:8003/v1/edit-pdf/rotate-pages");
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

Once the request is sent, it will create a job to rotate PDF pages and return the job details as follows:

```
{
    "jobID": "6be827c5-d86d-4fe5-9bd5-c8fd5887a455",
    "status": "requested",
    "createdAt": "2024-05-06T09:39:13.9505828Z"
}
```

## Poll the status of the Rotate Pages Job

Next, you can retrieve the job status by sending a request to the /v1/edit-pdf/status/{jobID} endpoint with the job ID.

{% tabs %}

{% highlight c# tabtitle="curl" %}

curl --location 'http://localhost:8003/v1/conversion/status/ef0766ab-bc74-456c-8143-782e730a89df' \

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript:" %}

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