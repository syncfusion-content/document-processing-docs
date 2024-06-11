---
title: PowerPoint to PDF Conversion
description: Easily convert PowerPoint presentations to PDF format with customizable settings. Integration is simple, allowing you to tailor conversion options to your needs.
platform: document-processing
control: DocIO
documentation: UG
---
# PowerPoint to PDF

Converting a PowerPoint document to PDF is simple. Customize conversion settings, like accessibility and archiving options, to suit your needs.

## Convert PowerPoint to PDF

To convert a PowerPoint document to PDF, send a request to the /v1/conversion/powerpoint-to-pdf endpoint, including both the PowerPoint file as input and the settings JSON.

{% tabs %}

{% highlight sh tabtitle="curl" %}

curl --location 'http://localhost:8003/v1/conversion/powerpoint-to-pdf' \
--form 'file=@"Images.pptx"' \
--form 'settings="{
  \"File\": \"file\",
  \"Password\": null,
  \"PdfComplaince\": \"PDF/A-1B\",
  \"EnableAccessibility\": false
}"'

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript:" %}

const formdata = new FormData();
formdata.append("file", fileInput.files[0], "Images.pptx");
formdata.append("settings", "{\n  \"File\": \"file\",\n  \"Password\": null,\n  \"PdfComplaince\": \"PDF/A-1B\",\n  \"EnableAccessibility\": false\n}");

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("http://localhost:4000/v1/conversion/powerpoint-to-pdf", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

{% endhighlight %} 

{% highlight c# tabtitle="C#" %}

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Post, "http://localhost:8003/v1/conversion/powerpoint-to-pdf");
var content = new MultipartFormDataContent();
content.Add(new StreamContent(File.OpenRead("Images.pptx")), "file", "Images.pptx");
content.Add(new StringContent("{
  \"File\": \"file\",
  \"Password\": null,
  \"PdfComplaince\": \"PDF/A-1B\",
  \"EnableAccessibility\": false
}"), "settings");
request.Content = content;
var response = await client.SendAsync(request);
response.EnsureSuccessStatusCode();
Console.WriteLine(await response.Content.ReadAsStringAsync());

{% endhighlight %} 

{% endtabs %}

Once the request is sent, it will create a conversion job to convert the PowerPoint to PDF and return the job details as follows:

```bash
{
    "jobID": "6be827c5-d86d-4fe5-9bd5-c8fd5887a455",
    "status": "requested",
    "createdAt": "2024-05-06T09:39:13.9505828Z"
}
```

## Poll the status of the Conversion Job

Next, you can retrieve the job status by sending a request to the /v1/conversion/status/{jobID} endpoint with the job ID.

{% tabs %}

{% highlight sh tabtitle="curl" %}

curl --location 'http://localhost:8003/v1/conversion/status/ef0766ab-bc74-456c-8143-782e730a89df' \

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript:" %}

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

```bash
{
    "jobId": "4b2782b2-9f08-478b-98fc-4464bd219ca0",
    "status": "queued"
}
```
- In Progress:

```bash
{
    "jobId": "ef0766ab-bc74-456c-8143-782e730a89df",
    "status": "in progress"
}
```
- Error:

```bash
{
    "jobId": "ef0766ab-bc74-456c-8143-782e730a89df",
    "status": "errror",
    "code": "500",
    "message": "Failed to convert the document to PDF"        
}
```