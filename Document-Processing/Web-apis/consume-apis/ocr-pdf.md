---
title: OCR PDF Using Syncfusion Web API
description: Convert scanned or image-based PDFs into searchable, selectable text PDFs using Syncfusion OCR Web API with image-enhancement options.
control: general
documentation: UG
---

# OCR PDFs Using Syncfusion Web API

The Syncfusion OCR Web API converts scanned or image-based PDF documents into fully searchable and selectable text PDFs. It allows you to submit one or multiple PDF files, configure OCR processing options, and retrieve the output through a job-based processing system. The OCR Web API supports multiple languages and includes image-processing enhancements such as grayscale optimization, contrast adjustment, deskewing, denoising, and binarization—to improve text-recognition accuracy through the OCR settings.

## Convert Scanned PDFs to Searchable PDF

To convert scanned PDFs into searchable PDFs, send a POST request to the `/v1/edit-pdf/ocr` endpoint with the input PDF files and OCR settings.

{% tabs %}

{% highlight c# tabtitle="Curl" %}

curl --location 'http://localhost:8003/v1/edit-pdf/ocr' \
--form 'file1=@Input1.pdf' \
--form 'file2=@Input2.pdf' \
--form 'settings="{\
  \"Files\": [\
    { \"File\": \"file1\" },\
    { \"File\": \"file2\" }\
  ],\
  \"Language\": \"eng+ara+ell\",\
  \"isToEnhanceGrayscale\": true,\
  \"isToEnhanceContrast\": true,\
  \"isToDeskew\": true,\
  \"isToDenoise\": true,\
  \"isToBinarize\": true\
}"'

{% endhighlight %}

{% highlight javaScript tabtitle="JavaScript" %}

const formdata = new FormData();
formdata.append("file1", fileInput.files[0], "Input1.pdf");
formdata.append("file2", fileInput.files[1], "Input2.pdf");
formdata.append(
  "settings",
  JSON.stringify({
    Files: [
      { File: "file1" },
      { File: "file2" }
    ],
    Language: "eng+ara+ell",
    isToEnhanceGrayscale: true,
    isToEnhanceContrast: true,
    isToDeskew: true,
    isToDenoise: true,
    isToBinarize: true
  })
);

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("http://localhost:8003/v1/edit-pdf/ocr", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

{% endhighlight %}

{% highlight c# tabtitle="C#" %}

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Post, "http://localhost:8003/v1/edit-pdf/ocr");
var content = new MultipartFormDataContent();
content.Add(new StreamContent(File.OpenRead("Input1.pdf")), "file1", "Input1.pdf");
content.Add(new StreamContent(File.OpenRead("Input2.pdf")), "file2", "Input2.pdf");
var settings = new
{
    Files = new[]
    {
        new { File = "file1" },
        new { File = "file2" }
    },
    Language = "eng+ara+ell",
    isToEnhanceGrayscale = true,
    isToEnhanceContrast = true,
    isToDeskew = true,
    isToDenoise = true,
    isToBinarize = true,
    Password = (string?)null,
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

## OCR Settings

**Language**

Specifies one or more OCR recognition languages for accurate text extraction. The OCR Web API supports a predefined set of languages, each identified by a language code. To improve recognition accuracy, specify only the languages that are present in the document.

Multiple languages can be provided by combining their codes using the `+` (plus) separator.

Supported languages:

| Code | Language |
|---|---|
| ara | Arabic |
| aze | Azerbaijani |
| bul | Bulgarian |
| cat | Catalan |
| ces | Czech |
| chi_sim | Chinese (Simplified) |
| chi_tra | Chinese (Traditional) |
| chr | Cherokee |
| dan | Danish |
| deu | German |
| ell | Greek |
| eng | English |
| enm | Middle English |
| epo | Esperanto |
| est | Estonian |
| fin | Finnish |
| fra | French |
| frm | Middle French |
| glg | Galician |
| heb | Hebrew |
| hin | Hindi |
| hrv | Croatian |
| hun | Hungarian |
| ind | Indonesian |
| ita | Italian |
| jpn | Japanese |
| kor | Korean |
| lav | Latvian |
| lit | Lithuanian |
| nld | Dutch |
| nor | Norwegian |
| pol | Polish |
| por | Portuguese |
| ron | Romanian |
| rus | Russian |
| slk | Slovak |
| slv | Slovenian |
| sqi | Albanian |
| spa | Spanish |
| srp | Serbian |
| swe | Swedish |
| tam | Tamil |
| tel | Telugu |
| tha | Thai |
| tur | Turkish |
| ukr | Ukrainian |
| vie | Vietnamese |
| osd | Orientation and Script Detection |

**isToEnhanceGrayscale**

Converts the image to grayscale to reduce color noise and improve clarity.

**isToEnhanceContrast**

Increases the contrast between text and background for better recognition accuracy.

**isToDeskew**

Automatically detects and corrects tilted or rotated pages to ensure proper text alignment during OCR.

**isToDenoise**

Removes visual noise and artifacts from the image to provide cleaner input for more reliable character recognition.

**isToBinarize**

Converts the image to high contrast black-and-white to isolate text from the background and improve OCR performance.

## OCR PDF Job Response

When the OCR request is submitted, the API creates a background job and returns the job details:

```
{
  "jobID": "d69b0ef2-b816-4e3b-bc94-1fb35cdfa5bb",
  "status": "requested",
  "createdAt": "2026-03-17T10:11:20Z"
}
```

## Check OCR PDF Job Status

Use the `/v1/edit-pdf/status/{jobID}` endpoint to check the job progress or download the final processed PDF.

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
  "status": "error",
  "code": "500",
  "message": "Failed to process OCR"
}
```

N> The Syncfusion Document Processing API is available as a Docker-based solution. [Try it out](https://hub.docker.com/r/syncfusion/document-processing-apis)
