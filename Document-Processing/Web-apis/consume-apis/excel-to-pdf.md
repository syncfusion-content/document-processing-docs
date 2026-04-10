---
title: Convert Excel to PDF Using Syncfusion Web API 
description: Convert Excel files to highquality PDFs using Syncfusion Web API. Preserve formulas, charts, formatting, and layout with fast, reliable serverside conversion.
platform: document-processing
control: general
documentation: UG
---
# Converting Excel to PDF Using Syncfusion Web API 

The Syncfusion Excel to PDF Web API allows you to convert Excel workbooks into well‑formatted, high‑quality PDF files while preserving the structure and readability of worksheets. It supports accurate rendering of data such as tables, formulas (as values), charts, images, and multi‑sheet layouts in the resulting PDF. The conversion can be customized with options like accessibility tagging for assistive technologies and PDF/A compliance for long‑term archiving.  

## Convert Excel to PDF

To convert an Excel document to PDF, send a request to the /v1/conversion/excel-to-pdf endpoint, including both the Excel file as input and the settings JSON.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/conversion/excel-to-pdf' \
--form 'file=@"Sample.xlsx"' \
--form 'settings={
  "File": "file",
  "Password": null,
  "PdfCompliance": "PDF/A-1B"
}'

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const formdata = new FormData();
formdata.append("file", fileInput.files[0], "Input.xlsx");
formdata.append(
    "settings",
    JSON.stringify({
      File: "file",
      Password: null,
      PdfCompliance: "PDF/A-1B", 
    })
  );

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("http://localhost:8003/v1/conversion/excel-to-pdf", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

{% endhighlight %} 

{% highlight c# tabtitle="C#" %}

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Post, "http://localhost:8003/v1/conversion/excel-to-pdf");
var content = new MultipartFormDataContent();
content.Add(new StreamContent(File.OpenRead("ExpenseReport.xlsx")), "file", "ExpenseReport.xlsx");
content.Add(new StringContent("{
  \"File\": \"file\",
  \"Password\": null,
  \"PdfComplaince\": \"PDF/A-1B\"
}"), "settings");
request.Content = content;
var response = await client.SendAsync(request);
response.EnsureSuccessStatusCode();
Console.WriteLine(await response.Content.ReadAsStringAsync());

{% endhighlight %} 

{% endtabs %}

## Excel to PDF settings
**Password** 

Specifies the password required to open a protected Word document before converting it to PDF. 

**PdfCompliance** 

Defines the PDF/A compliance level for archival and standards adherence. Supported levels include PDF/A‑1B, PDF/A‑2B, PDF/A‑3B, and PDF/A‑4. 

## Excel to PDF Job Response 
Once the request is sent, it will create a conversion job to convert the Excel document to PDF and return the job details as follows:

```
{
    "jobID": "6be827c5-d86d-4fe5-9bd5-c8fd5887a455",
    "status": "requested",
    "createdAt": "2024-05-06T09:39:13.9505828Z"
}
```
## Check Excel to PDF Job Status

Next, you can retrieve the job status by sending a request to the /v1/conversion/status/{jobID} endpoint with the job ID.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/conversion/status/7d0b62cd-c5a1-4035-9728-50c4efd1f0e1' \
  --output Output.pdf

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("http://localhost:8003/v1/conversion/status/4413bbb5-6b26-4c07-9af2-c26cd2c42fe3", requestOptions)
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