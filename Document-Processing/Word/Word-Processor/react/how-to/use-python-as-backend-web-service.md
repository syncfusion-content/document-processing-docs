---
layout: post
title: How to Use Python as a Backend Web Service in React DOCX Editor | Syncfusion
description: Learn how to create a Python (Flask) backend web service for the React DOCX Editor by loading the Syncfusion .NET document processing libraries with Python.NET and exposing the Import, Save, ExportSFDT, SystemClipboard, and RestrictEditing endpoints.
control: Python web service
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to Use Python as a Backend Web Service in React DOCX Editor

In this article, learn how to host the server-side operations of the [React DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) from a **Python web service**. A class library written in C# contains the DOCX Editor Web API implementation, **Flask** hosts the endpoints from Python, and [Python.NET](https://pypi.org/project/pythonnet/) loads the published assemblies so Python can invoke the document-processing methods.

## Prerequisites

*   [.NET SDK](https://dotnet.microsoft.com/download)
*   [Python 3.9 or later](https://www.python.org/downloads/) (CPython distribution recommended)
*   [pythonnet](https://pypi.org/project/pythonnet/) installed in the active Python environment
*   Node.js and npm
*   An active [Syncfusion&reg; license key](https://www.syncfusion.com/products/communitylicense) (a free 30-day trial is available)

## Step 1: Create the class library

The class library acts as the bridge between the Python web service and the Syncfusion document-processing libraries.

Open a terminal and create a new class library project.

```bash
mkdir PythonDocumentEditor
cd PythonDocumentEditor
dotnet new classlib -n DocumentEditorLibrary
cd DocumentEditorLibrary
```

### Add the required NuGet packages

Add the following packages to the class library project. These are the same Syncfusion and supporting packages used by the [DOCX Editor Web Services sample](https://github.com/SyncfusionExamples/EJ2-Document-Editor-Web-Services/blob/master/ASP.NET%20Core/src/Controllers/DocumentEditorController.cs) (spell checker related packages are not required).

```bash
dotnet add package Syncfusion.EJ2.WordEditor.AspNet.Core
dotnet add package Syncfusion.Compression.Net.Core
dotnet add package Syncfusion.OfficeChart.Net.Core
dotnet add package Syncfusion.Licensing
dotnet add package Newtonsoft.Json
dotnet add package SkiaSharp
dotnet add package BitMiracle.LibTiff.NET
```

## Step 2: Add the DOCX Editor wrapper class

Add a `Documenteditor.cs` file to the library. The wrapper class exposes the same methods as the [DocumentEditorController.cs](https://github.com/SyncfusionExamples/EJ2-Document-Editor-Web-Services/blob/master/ASP.NET%20Core/src/Controllers/DocumentEditorController.cs) of the ASP.NET Core web service: `Import`, `Save`, `ExportSFDT`, `SystemClipboard`, and `RestrictEditing`.

```csharp
using Syncfusion.EJ2.DocumentEditor;
using System;
using System.IO;

namespace DocumentEditorLibrary
{
    public class Documenteditor
    {
        public string Import(string base64String)
        {
            byte[] byteArray = Convert.FromBase64String(base64String);
            Stream stream = new MemoryStream(byteArray);

            try
            {
                //Hooks MetafileImageParsed event to convert EMF, WMF, and TIFF images to raster images.
                WordDocument.MetafileImageParsed += OnMetafileImageParsed;
                WordDocument document = WordDocument.Load(stream, FormatType.Docx);
                //Unhooks MetafileImageParsed event.
                WordDocument.MetafileImageParsed -= OnMetafileImageParsed;

                string json = Newtonsoft.Json.JsonConvert.SerializeObject(document);
                document.Dispose();
                stream.Dispose();
                return json;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public string SystemClipboard(string Content, string type)
        {
            if (Content != null && Content != "")
            {
                try
                {
                    //Hooks MetafileImageParsed event to convert EMF, WMF, and TIFF images to raster images.
                    WordDocument.MetafileImageParsed += OnMetafileImageParsed;
                    WordDocument document = WordDocument.LoadString(Content, GetFormatType(type));
                    //Unhooks MetafileImageParsed event.
                    WordDocument.MetafileImageParsed -= OnMetafileImageParsed;

                    string json = Newtonsoft.Json.JsonConvert.SerializeObject(document);
                    document.Dispose();
                    return json;
                }
                catch (Exception ex)
                {
                    return ex.Message;
                }
            }
            return "";
        }

        public string Save(string content, string fileName)
        {
            Stream document = WordDocument.Save(content);
            FileStream file = new FileStream(fileName, FileMode.OpenOrCreate, FileAccess.ReadWrite);
            document.CopyTo(file);
            file.Close();
            document.Close();
            return "success";
        }

        public string[] RestrictEditing(string passwordBase64, string saltBase64, int spinCount)
        {
            if (passwordBase64 == "" && passwordBase64 == null)
                return null;
            return WordDocument.ComputeHash(passwordBase64, saltBase64, spinCount);
        }

        //Converts metafile (EMF and WMF) and TIFF images to raster images.
        private static void OnMetafileImageParsed(object sender, MetafileImageParsedEventArgs args)
        {
            if (args.IsMetafile)
            {
                //Metafile image conversion (EMF and WMF).
                //You can write your own method definition for converting metafile to raster image using any third-party image converter.
                args.ImageStream = ConvertMetafileToRasterImage(args.MetafileStream);
            }
            else
            {
                //TIFF image conversion.
                args.ImageStream = ConvertTiffToRasterImage(args.MetafileStream);
            }
        }

        private static Stream ConvertMetafileToRasterImage(Stream ImageStream)
        {
            //Here we are loading a default raster image as fallback.
            Stream imgStream = GetManifestResourceStream("ImageNotFound.jpg");
            return imgStream;
            //To do: Write your own logic for converting metafile to raster image using any third-party image converter.
        }

        private static MemoryStream ConvertTiffToRasterImage(Stream tiffStream)
        {
            //You can write your own logic for converting TIFF to a raster image.
            //Refer to the ASP.NET Core web service sample for an implementation using BitMiracle.LibTiff.NET and SkiaSharp.
            return new MemoryStream();
        }

        private static Stream GetManifestResourceStream(string fileName)
        {
            System.Reflection.Assembly execAssembly = typeof(Syncfusion.DocIO.DLS.WordDocument).Assembly;
            string[] resourceNames = execAssembly.GetManifestResourceNames();
            foreach (string resourceName in resourceNames)
            {
                if (resourceName.EndsWith("." + fileName))
                {
                    fileName = resourceName;
                    break;
                }
            }
            return execAssembly.GetManifestResourceStream(fileName);
        }

        internal static FormatType GetFormatType(string format)
        {
            if (string.IsNullOrEmpty(format))
                throw new NotSupportedException("EJ2 DocumentEditor does not support this file format.");
            switch (format.ToLower())
            {
                case ".dotx":
                case ".docx":
                case ".docm":
                case ".dotm":
                    return FormatType.Docx;
                case ".dot":
                case ".doc":
                    return FormatType.Doc;
                case ".rtf":
                    return FormatType.Rtf;
                case ".txt":
                    return FormatType.Txt;
                case ".xml":
                    return FormatType.WordML;
                case ".html":
                    return FormatType.Html;
                default:
                    throw new NotSupportedException("EJ2 DocumentEditor does not support this file format.");
            }
        }
    }
}
```

## Step 3: Build and publish the library

**Build** compiles the C# source code into a .NET assembly. **Publish** bundles that assembly with every dependent library into a single folder. The Python service loads the assemblies from this `publish` folder.

```bash
dotnet build -c Release
dotnet publish -c Release
```

N> Repeat both commands after any change to the wrapper code, because the Python service loads the assemblies from the publish output folder.

## Step 4: Create the Python web service

Create the Python web service with Flask that exposes the DOCX Editor APIs. Implement all endpoints in a single `app.py` file.

### Install the Python packages

```bash
pip install flask flask-cors pythonnet
```

*   **Flask** - Hosts the Web API endpoints.
*   **Flask-CORS** - Enables communication between the React application and the Python service.
*   **pythonnet** - Allows Python to load the published .NET assemblies.

### Load the published .NET assemblies

At the top of `app.py`, use `clr` from `pythonnet` to load the assemblies from the publish output folder generated in Step 3. Adjust the path to match the location of your `publish` folder.

```python
import clr
import os

# Point this to the publish output folder of the class library you created.
publish_base = os.path.join(
    os.getcwd(), "DocumentEditorLibrary", "bin", "Release", "netstandard2.0", "publish"
)

# Wrapper library.
clr.AddReference(os.path.join(publish_base, "DocumentEditorLibrary.dll"))

# Syncfusion assemblies.
clr.AddReference(os.path.join(publish_base, "Syncfusion.EJ2.DocumentEditor.dll"))
clr.AddReference(os.path.join(publish_base, "Syncfusion.DocIO.Net.Core.dll"))
clr.AddReference(os.path.join(publish_base, "Syncfusion.Compression.Net.Core.dll"))
clr.AddReference(os.path.join(publish_base, "Syncfusion.OfficeChart.Net.Core.dll"))
clr.AddReference(os.path.join(publish_base, "Syncfusion.Licensing.dll"))

# Supporting assemblies.
clr.AddReference(os.path.join(publish_base, "Newtonsoft.Json.dll"))
clr.AddReference(os.path.join(publish_base, "SkiaSharp.dll"))
clr.AddReference(os.path.join(publish_base, "BitMiracle.LibTiff.NET.dll"))
```

### Create the wrapper class instance

Import the wrapper class and create one shared instance. All endpoints call their methods on this instance.

```python
from DocumentEditorLibrary import Documenteditor

docEditor = Documenteditor()
```

### Configure the Flask application

The React application and the Python service run on different ports, so enable CORS. Also raise the request size limit so large Word documents are not rejected by Flask's default limit.

```python
from flask import Flask, request
from flask_cors import CORS
import base64
import json

app = Flask(__name__)

# Raise the request size limit so large Word documents can be imported.
app.config['MAX_CONTENT_LENGTH'] = 500 * 1024 * 1024      # 500 MB

# Enable CORS so the React application can call the service.
CORS(app)
```

## Step 5: Add the DOCX Editor API endpoints

Add one Flask route for each server-side operation of the DOCX Editor.

### Import

The React DOCX Editor uploads the Word document as `multipart/form-data` using the form field name `files`. The endpoint converts the uploaded file to base64 and passes it to the `Import` method, which returns the SFDT string.

```python
@app.route('/Import', methods=['POST'])
def importDocument():
    if 'files' in request.files:
        file = request.files['files']
        # Read the file and convert to base64 for the .NET wrapper.
        stream_data = file.stream.read()
        base64_string = base64.b64encode(stream_data).decode('utf-8')
        # Returns the SFDT string for the uploaded Word document.
        return docEditor.Import(base64_string)
    return ""
```

### Save

The Save API exports the edited document from the DOCX Editor.

```python
@app.route('/Save', methods=['POST'])
def save():
    # Get the SFDT data and the file name from the request.
    content = request.json['content']
    fileName = request.json['fileName']
    # Saves the SFDT content as a Word document.
    result = docEditor.Save(content, fileName)
    return result
```

### SystemClipboard

The SystemClipboard API converts clipboard data (HTML/RTF) to SFDT so content can be pasted with formatting.

```python
@app.route('/SystemClipboard', methods=['POST'])
def systemClipboard():
    content = request.json['content']
    type = request.json['type']
    # Returns the SFDT string for the clipboard content.
    return docEditor.SystemClipboard(content, type)
```

### RestrictEditing

The RestrictEditing API computes the password hash used by the document protection feature.

```python
@app.route('/RestrictEditing', methods=['POST'])
def restrictEditing():
    passwordBase64 = request.json['passwordBase64']
    saltBase64 = request.json['saltBase64']
    spinCount = request.json['spinCount']
    # Returns an array of strings that represent the password and salt values.
    result = docEditor.RestrictEditing(passwordBase64, saltBase64, spinCount)
    return list(result)
```

## Step 6: Start the Python web service

Add the application entry point at the bottom of `app.py`.

```python
if __name__ == "__main__":
    app.run(debug=True)   # http://localhost:5000/
```

Run the service from the folder that contains `app.py`:

```bash
python app.py
```

When the service starts, a message similar to the following is displayed:

```
* Running on http://127.0.0.1:5000
```

## Step 7: Create the React application

To create the React application and integrate the React DOCX Editor component, follow the steps in the [Getting Started with React DOCX Editor](https://help.syncfusion.com/document-processing/word/word-processor/react/getting-started) documentation.

After creating the application, configure the DOCX Editor's `serviceUrl` property to point to the Python web service.

```tsx
serviceUrl = "http://127.0.0.1:5000/";
```

With this configuration, every import, save, paste, and restrict-editing operation is sent to the Python service, processed through the published .NET assembly, and returned to the React application.

## Run and verify

Run the components in the following order:

1.  Build and publish the class library as described in [Step 3](#step-3-build-and-publish-the-library).
2.  Start the Python web service as described in [Step 6](#step-6-start-the-python-web-service).
3.  Open a terminal in the React application directory and start the development server:

    ```bash
    npm run dev
    ```

    If you have not installed the React dependencies yet, run `npm install` first.

4.  Click **Open** in the DOCX Editor toolbar and select a Word document.
5.  Confirm that the document loads successfully in the editor.

## Complete working sample

A complete working sample is available on GitHub. The sample repository contains the class library wrapper project (`DocumentEditorLibrary`) and the Python API files (`import.py`, `save.py`, `systemclipboard.py`) that call each DOCX Editor operation.

**Sample repository:** [EJ2-Document-Editor-Web-Services — Python](https://github.com/SyncfusionExamples/EJ2-Document-Editor-Web-Services/tree/master/Python)

If you get stuck while following this article, compare your code against the sample to find the discrepancy.