---
title: Syncfusion PDF Organize Service Guide
description: Organize and customize pages within PDF files by reordering, rotating, deleting, or inserting blank pages using the PDF Organize Service.
platform: document-processing
control: general
documentation: UG
---

# Guide to Organizing PDFs Using Syncfusion API

You can manipulate the structure and content of PDF documents by rearranging, rotating, deleting, or inserting blank pages. To perform these operations, send your PDF files along with the appropriate settings to the Organize PDF service.

## Organize PDF Document

To organize PDF documents, send a request to the `/v1/edit-pdf/organize` endpoint, including both the PDF files and the settings as shown below:

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/edit-pdf/organize' \
--form 'file1=@"example.pdf"' \
--form 'file2=@"example1.pdf"' \
--form 'settings="{
  \"Files\": [
    {
      \"File\": \"file1\",
      \"Password\": \"password1\",
      \"DeletedPages\": [
        { \"pageNumber\": 2, \"fileName\": \"file1\" }
      ]
    },
    {
      \"File\": \"file2\",
      \"Password\": \"password2\",
      \"DeletedPages\": []
    }
  ],
  \"PageDetails\": [
    {
      \"PageNumber\": 1,
      \"Rotation\": 90,
      \"HasEmptyPageBefore\": true,
      \"HasEmptyPageAfter\": false
    },
    {
      \"PageNumber\": 2,
      \"Rotation\": 0,
      \"HasEmptyPageBefore\": false,
      \"HasEmptyPageAfter\": true
    }
  ],
  \"SortedPageNumber\": [
    { \"SortedPageNumber\": 2 },
    { \"SortedPageNumber\": 1 }
  ]
}"'

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const formdata = new FormData();
formdata.append("file1", fileInput.files[0], "example.pdf");
formdata.append("file2", fileInput.files[1], "example1.pdf");

formdata.append("settings", JSON.stringify({
  Files: [
    {
      File: "file1",
      Password: "password1",
      DeletedPages: [{ pageNumber: 2, fileName: "file1" }]
    },
    {
      File: "file2",
      Password: "password2",
      DeletedPages: []
    }
  ],
  PageDetails: [
    {
      PageNumber: 1,
      Rotation: 90,
      HasEmptyPageBefore: true,
      HasEmptyPageAfter: false
    },
    {
      PageNumber: 2,
      Rotation: 0,
      HasEmptyPageBefore: false,
      HasEmptyPageAfter: true
    }
  ],
  SortedPageNumber: [
    { SortedPageNumber: 2 },
    { SortedPageNumber: 1 }
  ]
}));

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("http://localhost:8003/v1/edit-pdf/organize", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

{% endhighlight %}

{% highlight c# tabtitle="C#" %}

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Post, "http://localhost:8003/v1/edit-pdf/organize");
var content = new MultipartFormDataContent();

content.Add(new StreamContent(File.OpenRead("example.pdf")), "file1", "example.pdf");
content.Add(new StreamContent(File.OpenRead("example1.pdf")), "file2", "example1.pdf");

var settingsJson = @"{
  ""Files"": [
    {
      ""File"": ""file1"",
      ""Password"": ""password1"",
      ""DeletedPages"": [
        { ""pageNumber"": 2, ""fileName"": ""file1"" }
      ]
    },
    {
      ""File"": ""file2"",
      ""Password"": ""password2"",
      ""DeletedPages"": []
    }
  ],
  ""PageDetails"": [
    {
      ""PageNumber"": 1,
      ""Rotation"": 90,
      ""HasEmptyPageBefore"": true,
      ""HasEmptyPageAfter"": false
    },
    {
      ""PageNumber"": 2,
      ""Rotation"": 0,
      ""HasEmptyPageBefore"": false,
      ""HasEmptyPageAfter"": true
    }
  ],
  ""SortedPageNumber"": [
    { ""SortedPageNumber"": 2 },
    { ""SortedPageNumber"": 1 }
  ]
}";

content.Add(new StringContent(settingsJson, Encoding.UTF8, "application/json"), "settings");
request.Content = content;

var response = await client.SendAsync(request);
response.EnsureSuccessStatusCode();
Console.WriteLine(await response.Content.ReadAsStringAsync());

{% endhighlight %}

{% endtabs %}

After submitting the request, a job is created to organize the PDF and the following job details are returned:

```
{
    "jobID": "6be827c5-d86d-4fe5-9bd5-c8fd5887a455",
    "status": "requested",
    "createdAt": "2024-05-06T09:39:13.9505828Z"
}
```

## Poll the status of the Organize Job

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