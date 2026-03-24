---
title: Convert Word to PDF Using Syncfusion Web API 
description: Convert Word documents to highquality PDFs using Syncfusion Web API. Preserve formatting, images, and structure with fast, reliable serverside conversion.
platform: document-processing
control: general
documentation: UG
---
# Converting Word to PDF Using Syncfusion Web API 

The Syncfusion Word to PDF Web API allows you to transform Word documents into high‑quality PDF files while preserving the original layout, formatting, and content accurary. It supports .doc, .docx, and .rtf formats and ensures accurate rendering of text, images, tables, and styles. The conversion process can be customized with options such as accessibility tagging and PDF/A archival compliance, making the output suitable for inclusive access and long‑term preservation.  

## Convert Word to PDF

To convert a Word document to PDF, send a request to the /v1/conversion/word-to-pdf endpoint, including both the Word file as input and the settings JSON.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl -v --location 'http://localhost:8003/v1/conversion/word-to-pdf' \
  --form 'file=@"Input.docx"' \
  --form 'settings={
    "File": "file",
    "Password": null,
    "PreserveFormFields": true,
    "PdfCompliance": "PDF/A-1B",
    "EnableAccessibility": false
  }'

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const formdata = new FormData();
formdata.append("file", fileInput.files[0], "Input.docx");
 formdata.append(
    "settings",
    JSON.stringify({
      File: "file",
      Password: null,
      PreserveFormFields: true,
      PdfCompliance: "PDF/A-1B", // use whatever your backend expects
      EnableAccessibility: false
    })
  );

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
content.Add(new StreamContent(File.OpenRead("Input.docx")), "file", "Input.docx");
var settings = new
{
    File = "file",
    Password = (string?)null,
    PreserveFormFields = true,
    PdfCompliance = "PDF/A-1B",  
    EnableAccessibility = false
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
## Word to PDF settings

**Password** 

Specifies the password required to open a protected Word document before conversion. 

**PreserveFormFields** 

Retains form fields—such as text boxes, checkboxes, and dropdowns—so they remain interactive in the converted PDF. 

**PdfCompliance**

Defines the PDF/A compliance level for archival and standards adherence. Supported levels include PDF/A‑1B, PDF/A‑2B, PDF/A‑3B, and PDF/A‑4. 

**EnableAccessibility**

Applies accessibility tags to the PDF to improve compatibility with screen readers and assistive technologies. 

## Word to PDF Job Response  

Once the request is sent, it will create a conversion job to convert the Word document to PDF and return the job details as follows:

```
{
    "jobID": "6be827c5-d86d-4fe5-9bd5-c8fd5887a455",
    "status": "requested",
    "createdAt": "2024-05-06T09:39:13.9505828Z"
}
```

## Check Word to PDF Job Status 

Next, you can retrieve the job status by sending a request to the /v1/conversion/status/{jobID} endpoint with the job ID.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/conversion/status/f58c9739-622e-41d4-9dd2-57a901dc13c3' \
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