---
layout: post
title: Save a PDF document to a URL in TypeScript PDF Viewer | Syncfusion
description: Learn how to save a PDF document to a specific URL using the Syncfusion TypeScript PDF Viewer and a web service endpoint.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Save a PDF document to a URL in TypeScript PDF Viewer

Save the loaded PDF document to a specific URL using a custom web service endpoint.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started/) to create simple PDF Viewer sample.

**Step 2:** Follow the steps in the [Create PDF Viewer web service](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/how-to/create-pdfviewer-service/) guide to create the PDF Viewer web service.

**Step 3:** Add the below code snippet in the PDF Viewer controller code to save the PDF document to the URL.

```ts

[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("SaveUrl")]
public async Task<IActionResult> SaveUrl([FromBody] Dictionary<string, string> jsonObject)
{
    PdfRenderer pdfviewer;
    if (Startup.isRedisCacheEnable)
        pdfviewer = new PdfRenderer(_mCache, _dCache, _slidingTime);
    else
        pdfviewer = new PdfRenderer(_mCache);
    try
    {
        HttpClient client = new HttpClient();
        Dictionary<string, string> RequestDetails = new Dictionary<string, string>();
        RequestDetails.Add("Url", jsonObject["RequestedUrl"]);
        RequestDetails.Add("base64", jsonObject["base64Data"]);
        string jsonString = JsonConvert.SerializeObject(RequestDetails);
        StringContent Data = new StringContent(jsonString);
        string UriAddress = jsonObject["UriAddress"];
        var result = await client.PutAsync(UriAddress, Data);
        if (result.StatusCode.ToString() == "OK")
        {
            return Content("Document saved successfully!");
        }
        else
        {
            return Content("Failed to save the document!");
        }
    } catch (Exception exception)
    {
        return Content(exception.Message);
    }
}

```

**Step 4:** Add the following code in your file server to rewrite the content.

```ts

[AcceptVerbs("Put")]
[HttpPut]
[EnableCors("AllowAllOrigins")]
public async System.Threading.Tasks.Task PutAsync(string name)
{
using (var Reader = new StreamReader(Request.Body))
{
var Data = await Reader.ReadToEndAsync();
Dictionary<string, string> Response = JsonConvert.DeserializeObject<Dictionary<string,string>>(Data);
string Url = Response["Url"].ToString();
string base64String = Response["base64"].ToString();
var document = Url.Split(Request.Host.Value + "/");
System.Net.WebClient WebClient = new WebClient();
Stream stream = WebClient.OpenWrite(document[1], "PUT");
byte[] bytes = System.Convert.FromBase64String(base64String);
stream.Write(bytes, 0, bytes.Length);
}
}

```

**Step 5:** Send an AJAX request to save the PDF document to a specific URL.

```
<button id="save">SaveURL</button>
```

```ts

let jsonData: any = {};
document.getElementById('save').addEventListener('click', () => {
    let data: any;
    let base64data: any;
    viewer.saveAsBlob().then(function (value) {
        data = value;
        var reader = new FileReader();
        reader.readAsDataURL(data);
        reader.onload = () => {
            base64data = reader.result;
            let RequestHandler = new AjaxHandler(viewer);
            RequestHandler.url = viewer.serviceUrl + "/" + "saveUrl";
            RequestHandler.responseType = "json";
            jsonData["action"] = 'SaveUrl';
            // base64 string
            jsonData["base64Data"] = base64data.replace('data:application/pdf;base64,', '');
            // File location of the file server which we have to rewrite the content
            jsonData["RequestedUrl"] = "http://localhost:65534/Data/PDF_Succinctly.pdf";
            // Hosted file server address
            jsonData["UriAddress"] = "http://localhost:65534/pdfviewer";
            RequestHandler.send(jsonData);
            RequestHandler.onSuccess = function (result: any) {
                console.log("PDF Document saved to URL!");
            }
        };
    });
});

```