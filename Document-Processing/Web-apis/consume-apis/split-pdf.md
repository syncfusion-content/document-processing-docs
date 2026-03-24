---
title: Split PDF Files Using Syncfusion Web API
description: Extract or split PDF pages by ranges quickly using Syncfusion page-level split Web API for automated workflows and batch processing.
platform: document-processing
control: general
documentation: UG
---
# Splitting PDFs Using Syncfusion WEB API

The Syncfusion Split PDF Web API makes it easy to split a PDF into multiple smaller files. You can extract single pages or specific page ranges while preserving the document’s original layout and quality. This feature is ideal for separating important sections, sharing only the needed pages, or organizing large PDFs into more manageable files. It helps simplify document handling and improves distribution efficiency.

## Split PDF Document

To split a PDF file, send a request to the /v1/edit-pdf/split endpoint with a PDF document and split options as shown below.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/edit-pdf/split' \
--form 'file=@Input.pdf' \
--form 'settings={
  "File": "file",
  "Password": null,
  "SplitOption":{"FileCount":10}
}'

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const formdata = new FormData();
formdata.append("file", fileInput.files[0], "Input1.pdf");
const formdata = new FormData();
  formdata.append("file", file, file.name);
  formdata.append(
    "settings",
    JSON.stringify({
      File: "file",
      Password: null,
      SplitOption: { "FileCount": 10 }
    })
  );  

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("http://localhost:8003/v1/edit-pdf/split", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

{% endhighlight %} 

{% highlight c# tabtitle="C#" %}

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Post, "http://localhost:8003/v1/edit-pdf/split");
var content = new MultipartFormDataContent();
content.Add(new StreamContent(File.OpenRead("Input1.pdf")), "file", "Input1.pdf");
var settings = new
{
    File = "file",
    Password = (string?)null,
    SplitOption = new
    {
        FileCount = 10
    }
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

## Split PDFs settings

**File** 

Specifies the input PDF file that will be split into multiple documents. 

**Password** 

Specifies the password required to open and process a protected PDF file. 

**SplitOption** 

Defines the method and rules used to split the input PDF file. 

**FileCount** 

Specifies the number of output PDF files to create by evenly splitting the input document. 

**PageCount** 

Specifies the number of pages per output PDF file during the split process. 

**PageRanges** 

Specifies custom page ranges to split the input PDF into multiple documents. 

**ExtractRanges** 

Specifies specific pages or page groups to extract from the input PDF. 

**Start** 

Specifies the starting page number of the range to be split. 

**End** 

Specifies the ending page number of the range to be split. 

**ExtractPages** 

Specifies the pages to extract using page numbers or ranges (for example, 1,3,5‑7). 

**DownloadAsSinglePdf**  

Indicates whether the extracted pages should be combined into a single PDF file or saved as separate files. 

## Split PDF Job Response 

Once the request is sent, it will create a job to split the PDF document and return the job details as follows:

```
{
    "jobID": "6be827c5-d86d-4fe5-9bd5-c8fd5887a455",
    "status": "requested",
    "createdAt": "2024-05-06T09:39:13.9505828Z"
}
```

## Check Split PDF Job Status

Next, you can retrieve the job status by sending a request to the /v1/edit-pdf/status/{jobID} endpoint with the job ID.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/edit-pdf/status/f58c9739-622e-41d4-9dd2-57a901dc13c3' \
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