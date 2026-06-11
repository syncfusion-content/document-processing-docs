---
title: Delete PDF Pages Using Syncfusion Web API
description:  Remove blank or unwanted PDF pages programmatically to streamline cleanup and automate document preparation using Syncfusion Web API.
platform: document-processing
control: general
documentation: UG
---
# Delete Pages from PDF Using Syncfusion Web API 

The Syncfusion Delete PDF Pages Web API allows you to remove unwanted pages from a PDF document using a simple, API‑driven workflow. You can delete specific pages or page ranges while preserving the original layout, formatting, and quality of the remaining content. This feature is ideal for refining documents, removing sensitive information, or creating customized PDFs for specific use cases.

## Delete PDF Pages

To delete PDF pages, send a request to the /v1/edit-pdf/delete-pages endpoint with a PDF document and its options as shown below.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/edit-pdf/delete-pages' \
--form 'file=@"Input.pdf"' \
--form 'settings={
   "File": "file",
  "Password": null,
  "PageRanges": [
    {
      "Start": 1,
      "End": 2
    }]
}'

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const formdata = new FormData();
formdata.append("file", fileInput.files[0], "Input.pdf");
formdata.append(
  "settings",
  JSON.stringify({    
    File: "file",      
    Password: null,
    PageRanges: [
      { Start: 1, End: 2 }         ]
  })
);

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("http://localhost:8003/v1/edit-pdf/delete-pages", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

{% endhighlight %} 

{% highlight c# tabtitle="C#" %}

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Post, "http://localhost:8003/v1/edit-pdf/delete-pages");
var content = new MultipartFormDataContent();
content.Add(new StreamContent(File.OpenRead("Input.pdf")), "file1", "Input.pdf");

var settings = new
{
    File = "file",
    Password = (string?)null,
    PageRanges = new[]
    {
        (Start: 1, End: 2)
    }
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

## Delete PDF pages settings

**Password** 

Specifies the password required to open and process a protected PDF file. 

**PageRanges** 

Defines the page ranges to be deleted from the PDF. 

**Start** 

Specifies the starting page number of the deletion range. 

**End** 

Specifies the ending page number of the deletion range. 

## Delete Pages Job Response 

Once the request is sent, it will create a job to delete PDF pages and return the job details as follows:

```
{
    "jobID": "6be827c5-d86d-4fe5-9bd5-c8fd5887a455",
    "status": "requested",
    "createdAt": "2024-05-06T09:39:13.9505828Z"
}
```

## Check Delete Pages Job Status 

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