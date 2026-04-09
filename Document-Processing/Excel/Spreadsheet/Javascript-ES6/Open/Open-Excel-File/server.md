---
layout: post
title: Open from Server in JavaScript (ES6) Spreadsheet Editor | Syncfusion
description: Learn here all about Open an Excel file located on a server in javascript(ES6) Spreadsheet editor of Syncfusion Essential JS 2 and more.
platform: document-processing
control: server
documentation: ug
---

# Open an Excel file located on a server

By default, the Spreadsheet control provides an option to browse files from the local file system and open them within the control. If you want to load an Excel file located on a server, you need to configure the server endpoint to fetch the Excel file from the server location, process it using `Syncfusion.EJ2.Spreadsheet.AspNet.Core`, and send it back to the client side as `JSON data`. On the client side, you should use the [openFromJson](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#openfromjson) method to load that `JSON data` into the Spreadsheet control.

**Server Endpoint**:

```csharp
    public IActionResult Open([FromBody] FileOptions options)
    {
        OpenRequest open = new OpenRequest();
        string filePath = _env.ContentRootPath.ToString() + "\\Files\\" + options.FileName + ".xlsx";
        // Getting the file stream from the file path.
        FileStream fileStream = new FileStream(filePath, FileMode.Open);
        // Converting "MemoryStream" to "IFormFile".
        IFormFile formFile = new FormFile(fileStream, 0, fileStream.Length, "", options.FileName + ".xlsx"); 
        open.File = formFile;
        // Processing the Excel file and return the workbook JSON.
        var result = Workbook.Open(open);
        fileStream.Close();
        return Content(result);
    }

    public class FileOptions
    {
        public string FileName { get; set; } = string.Empty;
    }
```

**Client Side**:

```js

    // Fetch call to server to load the Excel file.
    fetch('https://localhost:{Your port number}/Home/Open', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ FileName: 'Sample' }),
    })
    .then((response) => response.json())
    .then((data) => {
            // Load the JSON data into spreadsheet.
            spreadsheet.openFromJson({ file: data });
    })

```

You can find the server endpoint code to fetch and process the Excel file in this [attachment](https://www.syncfusion.com/downloads/support/directtrac/general/ze/WebApplication1_(1)-880363187). After launching the server endpoint, you need to update the URL on the client side sample as shown below.

```js
// To open an Excel file from the server.
fetch('https://localhost:{port number}/Home/Open')
```