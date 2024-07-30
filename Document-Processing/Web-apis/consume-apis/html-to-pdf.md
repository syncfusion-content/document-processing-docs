---
title: Syncfusion HTML to PDF Conversion Guide
description: Convert HTML templates or URLs to PDF with Syncfusion's engine. Simplify the process by including HTML files and associated assets seamlessly.
platform: document-processing
control: general
documentation: UG
---
# Guide to Converting HTML to PDF Using Syncfusion API

With the Syncfusion document processing engine, you can easily convert an HTML template or URL to a PDF document. To convert an HTML template to a PDF document, you need to provide both the HTML template file and its assets.

## Convert HTML to PDF

To convert HTML to PDF, send a request to the /v1/conversion/html-to-pdf endpoint, including both the HTML file as input and its assets as follows:

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/conversion/html-to-pdf' \
--form 'Index.html=@"html/index.html"' \
--form 'logo.png=@"html/logo.png"' \
--form 'font=@"html/SourceSansPro-Regular.ttf"' \
--form 'style=@"html/style.css"' \
--form 'settings="{
  \"IndexFile\": \"index.html\",
  \"Assets\": [\"logo.png\", \"font\",\"style\"]
}"'

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const formdata = new FormData();
formdata.append("Index.html", fileInput.files[0], "html/index.html");
formdata.append("logo.png", fileInput.files[0], "html/logo.png");
formdata.append("font", fileInput.files[0], "html/SourceSansPro-Regular.ttf");
formdata.append("style", fileInput.files[0], "html/style.css");
formdata.append("settings", "{\n  \"IndexFile\": \"index.html\",\n  \"Assets\": [\"logo.png\", \"font\",\"style\"]\n}");

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("http://localhost:4000/v1/conversion/html-to-pdf", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

{% endhighlight %} 

{% highlight c# tabtitle="C#" %}

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Post, "http://localhost:8003/v1/conversion/html-to-pdf");
var content = new MultipartFormDataContent();
content.Add(new StreamContent(File.OpenRead("html/index.html")), "Index.html", "html/index.html");
content.Add(new StreamContent(File.OpenRead("html/logo.png")), "logo.png", "html/logo.png");
content.Add(new StreamContent(File.OpenRead("html/SourceSansPro-Regular.ttf")), "font", "html/SourceSansPro-Regular.ttf");
content.Add(new StreamContent(File.OpenRead("html/style.css")), "style", "html/style.css");
content.Add(new StringContent("{
  \"IndexFile\": \"index.html\",
  \"Assets\": [\"logo.png\", \"font\",\"style\"]
}"), "settings");
request.Content = content;
var response = await client.SendAsync(request);
response.EnsureSuccessStatusCode();
Console.WriteLine(await response.Content.ReadAsStringAsync());

{% endhighlight %} 

{% endtabs %}

Once the request is sent, it will create a conversion job to convert HTML to PDF and return the job details as follows:

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

curl --location 'http://localhost:8003/v1/conversion/status/ef0766ab-bc74-456c-8143-782e730a89df' \

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

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