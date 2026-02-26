---
title: Syncfusion Image to PDF Converter Service Guide
description: Convert Images to PDF seamlessly using Syncfusion's API. Customize settings, monitor job status, and integrate effortlessly into your applications.
platform: document-processing
control: general
documentation: UG
---
# Guide to Image to PDF Conversion Using Syncfusion API

Converting Image files to PDF is simple. Customize conversion settings, like accessibility and archiving options, to suit your needs.

## Convert Image to PDF

To convert the Images to PDF, send a request to the /v1/conversion/image-to-pdf endpoint, including both the image files as inputs and the settings JSON.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/conversion/image-to-pdf' \
--form 'file1=@image1.jpeg' \
--form 'file2=@image2.jpeg' \
--form 'settings={
  "Files": [
    { "File": "file1","RotationValue": "RotateAngle0" },
    { "File": "file2" ,"RotationValue": "RotateAngle0"}
  ],
 
 "Orientation": "Portrait",
  "Margin": 0,
  "EnableSaveAsSeperateFile": false,
  "PageSize": "A4"
}'

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const formdata = new FormData();
formdata.append("files", fileInput.files[0], "Image1.png");
formdata.append("files", fileInput.files[0], "Image2.png");
formdata.append(
  "settings",
  JSON.stringify({
    Files: [
      { File: "file1", RotationValue: "RotateAngle0" },
      { File: "file2", RotationValue: "RotateAngle0" }
    ],
    Orientation: "Portrait",
    Margin: 0,
    EnableSaveAsSeperateFile: false,
    PageSize: "A4"
  })
);

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("http://localhost:8003/v1/conversion/image-to-pdf", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

{% endhighlight %} 

{% highlight c# tabtitle="C#" %}

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Post, "http://localhost:8003/v1/conversion/image-to-pdf");
var content = new MultipartFormDataContent();

content.Add(new StreamContent(File.OpenRead("image1.jpeg")), "file1", "image1.jpeg");
content.Add(new StreamContent(File.OpenRead("image2.jpeg")), "file2", "image2.jpeg");

var settings = new
{
    Files = new[]
    {
        new { File = "file1", RotationValue = "RotateAngle0" },
        new { File = "file2", RotationValue = "RotateAngle0" }
    },
    Orientation = "Portrait",
    Margin = 0,
    EnableSaveAsSeperateFile = false,
    PageSize = "A4",
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

Once the request is sent, it will create a job to merge PDF documents and return the job details as follows:

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
    "message": "Failed to convert the Image to PDF"        
}
```

N> The Syncfusion Document Processing API is now available as a Docker-based solution. [Try it out](https://hub.docker.com/r/syncfusion/document-processing-apis)