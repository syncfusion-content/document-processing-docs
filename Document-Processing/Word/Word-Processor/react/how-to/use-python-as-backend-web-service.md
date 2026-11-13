---
layout: post
title: How to Use Python as a Backend Web Service in React DOCX Editor | Syncfusion
description: Learn how to create a Python (Flask) backend web service for the React DOCX Editor by loading the Syncfusion .NET document processing libraries with Python.NET and exposing the Import, Save, SystemClipboard, RestrictEditing, MailMerge, and CompareDocuments endpoints.
control: Python web service
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to Use Python as a Backend Web Service in React DOCX Editor

In this documentation, learn how to host the server-side operations of the [React DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) from a **Python web service**. A class library written in C# contains the DOCX Editor Web API implementation, **Flask** hosts the endpoints from Python, and [Python.NET](https://pypi.org/project/pythonnet/) loads the published assemblies so Python can invoke the document-processing methods.

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

Add the following packages to the class library project.

```bash
dotnet add package Syncfusion.EJ2.WordEditor.AspNet.Core
dotnet add package Syncfusion.Compression.Net.Core
dotnet add package Syncfusion.OfficeChart.Net.Core
dotnet add package Syncfusion.DocIORenderer.Net.Core
dotnet add package Newtonsoft.Json
dotnet add package SkiaSharp
dotnet add package BitMiracle.LibTiff.NET
```

### Add the DOCX Editor wrapper class

Add a `Documenteditor.cs` file to the library. The wrapper class exposes the document-processing methods that Python invokes: `Import`, `Save`, `SystemClipboard`, `RestrictEditing`, `MailMerge`, and `CompareDocuments`.

```csharp
using Syncfusion.EJ2.DocumentEditor;
using System;
using System.IO;

namespace DocumentEditorLibrary
{
    public class Documenteditor
    {
        // Converts the uploaded Word document into the SFDT string required by the DOCX Editor.
        // The MetafileImageParsed event converts TIFF, EMF, and WMF images to raster images
        // because web browsers cannot display metafile images.
        public string Import(byte[] byteArray, string fileName)
        {
            Stream stream = new MemoryStream(byteArray);
            int index = fileName.LastIndexOf('.');
            string type = index > -1 && index < fileName.Length - 1 ?
                fileName.Substring(index) : ".docx";

            try
            {
                //Hooks MetafileImageParsed event.
                WordDocument.MetafileImageParsed += OnMetafileImageParsed;
                WordDocument document = WordDocument.Load(stream, GetFormatType(type.ToLower()));
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

        // Converts clipboard content (HTML/RTF) into SFDT so content can be pasted with formatting.
        public string SystemClipboard(string Content, string type)
        {
            if (Content != null && Content != "")
            {
                try
                {
                    WordDocument document = WordDocument.LoadString(Content, GetFormatType(type));
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

        // Saves the SFDT content as a Word document with the given file name and returns it.
        public byte[] Save(string content, string fileName)
        {
            Syncfusion.DocIO.DLS.WordDocument document = WordDocument.Save(content);
            using (MemoryStream stream = new MemoryStream())
            {
                document.Save(stream, Syncfusion.DocIO.FormatType.Docx);
                document.Close();
                return stream.ToArray();
            }
        }

        // Computes the password hash used by the document protection feature.
        public string[] RestrictEditing(string passwordBase64, string saltBase64, int spinCount)
        {
            if (passwordBase64 == "" && passwordBase64 == null)
                return null;
            return WordDocument.ComputeHash(passwordBase64, saltBase64, spinCount);
        }

        // Performs mail merge on the uploaded Word document and returns the merged document as SFDT.
        public string MailMerge(string documentData)
        {
            byte[] data = Convert.FromBase64String(
                documentData.Contains(',') ? documentData.Split(',')[1] : documentData);
            using (MemoryStream stream = new MemoryStream())
            {
                stream.Write(data, 0, data.Length);
                stream.Position = 0;

                using (Syncfusion.DocIO.DLS.WordDocument document =
                    new Syncfusion.DocIO.DLS.WordDocument(stream, Syncfusion.DocIO.FormatType.Docx))
                {
                    document.MailMerge.RemoveEmptyGroup = true;
                    document.MailMerge.RemoveEmptyParagraphs = true;
                    document.MailMerge.ClearFields = true;
                    document.MailMerge.Execute(CustomerDataModel.GetAllRecords());
                    document.Save(stream, Syncfusion.DocIO.FormatType.Docx);
                }

                stream.Position = 0;
                WordDocument wordDocument = WordDocument.Load(stream, FormatType.Docx);
                string sfdtText = Newtonsoft.Json.JsonConvert.SerializeObject(wordDocument);
                wordDocument.Dispose();
                return sfdtText;
            }
        }

        // Compares the original and revised Word documents and returns
        // the comparison result (with tracked changes) as SFDT.
        public string CompareDocuments(byte[] originalFile, byte[] revisedFile)
        {
            using (Syncfusion.DocIO.DLS.WordDocument revisedDocument =
                new Syncfusion.DocIO.DLS.WordDocument(new MemoryStream(revisedFile), Syncfusion.DocIO.FormatType.Docx))
            using (Syncfusion.DocIO.DLS.WordDocument originalDocument =
                new Syncfusion.DocIO.DLS.WordDocument(new MemoryStream(originalFile), Syncfusion.DocIO.FormatType.Docx))
            {
                originalDocument.Compare(revisedDocument);

                //Hooks MetafileImageParsed event.
                WordDocument.MetafileImageParsed += OnMetafileImageParsed;
                WordDocument document = WordDocument.Load(originalDocument);
                //Unhooks MetafileImageParsed event.
                WordDocument.MetafileImageParsed -= OnMetafileImageParsed;

                string json = Newtonsoft.Json.JsonConvert.SerializeObject(document);
                document.Dispose();
                return json;
            }
        }

        //Converts Metafile to raster image.
        private static void OnMetafileImageParsed(object sender, MetafileImageParsedEventArgs args)
        {
            if (args.IsMetafile)
            {
                //MetaFile image conversion(EMF and WMF)
                //You can write your own method definition for converting metafile to raster image using any third-party image converter.
                args.ImageStream = ConvertMetafileToRasterImage(args.MetafileStream);
            }
            else
            {
                //TIFF image conversion
                args.ImageStream = TiffToPNG(args.MetafileStream);
            }
        }

        // Converting Tiff to Png image using Bitmiracle https://www.nuget.org/packages/BitMiracle.LibTiff.NET
        private static MemoryStream TiffToPNG(Stream tiffStream)
        {
            MemoryStream imageStream = new MemoryStream();
            using (BitMiracle.LibTiff.Classic.Tiff tif =
                BitMiracle.LibTiff.Classic.Tiff.ClientOpen("in-memory", "r", tiffStream, new BitMiracle.LibTiff.Classic.TiffStream()))
            {
                // Find the width and height of the image
                BitMiracle.LibTiff.Classic.FieldValue[] value =
                    tif.GetField(BitMiracle.LibTiff.Classic.TiffTag.IMAGEWIDTH);
                int width = value[0].ToInt();

                value = tif.GetField(BitMiracle.LibTiff.Classic.TiffTag.IMAGELENGTH);
                int height = value[0].ToInt();

                // Read the image into the memory buffer
                int[] raster = new int[height * width];
                if (!tif.ReadRGBAImage(width, height, raster))
                {
                    throw new Exception("Could not read image");
                }

                // Create a bitmap image using SkiaSharp.
                using (SKBitmap sKBitmap = new SKBitmap(
                    width, height, SKImageInfo.PlatformColorType, SKAlphaType.Premul))
                {
                    // Convert a RGBA value to byte array.
                    byte[] bitmapData = new byte[sKBitmap.RowBytes * sKBitmap.Height];
                    for (int y = 0; y < sKBitmap.Height; y++)
                    {
                        int rasterOffset = y * sKBitmap.Width;
                        int bitsOffset = (sKBitmap.Height - y - 1) * sKBitmap.RowBytes;

                        for (int x = 0; x < sKBitmap.Width; x++)
                        {
                            int rgba = raster[rasterOffset++];
                            bitmapData[bitsOffset++] = (byte)((rgba >> 16) & 0xff);
                            bitmapData[bitsOffset++] = (byte)((rgba >> 8) & 0xff);
                            bitmapData[bitsOffset++] = (byte)(rgba & 0xff);
                            bitmapData[bitsOffset++] = (byte)((rgba >> 24) & 0xff);
                        }
                    }

                    // Convert a byte array to SKColor array.
                    SKColor[] sKColor = new SKColor[bitmapData.Length / 4];
                    int index = 0;
                    for (int i = 0; i < bitmapData.Length; i++)
                    {
                        sKColor[index] = new SKColor(
                            bitmapData[i + 2], bitmapData[i + 1], bitmapData[i], bitmapData[i + 3]);
                        i += 3;
                        index += 1;
                    }

                    // Set the SKColor array to SKBitmap.
                    sKBitmap.Pixels = sKColor;

                    // Save the SKBitmap to PNG image stream.
                    sKBitmap.Encode(SKEncodedImageFormat.Png, 100).SaveTo(imageStream);
                    imageStream.Flush();
                }
            }
            return imageStream;
        }

        private static Stream ConvertMetafileToRasterImage(Stream ImageStream)
        {
            //Here we are loading a default raster image as fallback.
            Stream imgStream = GetManifestResourceStream("ImageNotFound.jpg");
            return imgStream;
            //To do : Write your own logic for converting metafile to raster image using any third-party image converter(Syncfusion doesn't provide any image converter).
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

### Build and publish the library

**Build** compiles the C# source code into a .NET assembly. **Publish** bundles that assembly together with every dependent Syncfusion assembly into a single folder that Python loads.

```bash
dotnet build -c Release
dotnet publish -c Release
```

N> Repeat both commands after any change to the wrapper code. The Python service loads the assemblies from the publish output folder, so it must be refreshed after every rebuild.

## Step 2: Create the Python web service

Create the Python web service with Flask that exposes the DOCX Editor APIs. The service receives requests from the React application, loads the published assemblies with Python.NET, invokes the matching method on the wrapper class, and returns the result to the client.

Implement all endpoints in a single `app.py` file for easier maintenance and deployment.

### Install the Python packages

```bash
pip install flask flask-cors pythonnet
```

*   **Flask** - Hosts the Web API endpoints.
*   **Flask-CORS** - Enables communication between the React application and the Python service.
*   **pythonnet** - Allows Python to load the published .NET assemblies.

### Create the app.py file

Create a new `app.py` file. The React application and the Python service run on different ports, so enable CORS so the editor can call the service. Also raise the request size limit so that large Word documents can be imported without being rejected by Flask's default limit.

Use `clr` from `pythonnet` to load the assemblies from the **publish output folder** generated in Step 1. Adjust the path to match the location of your `publish` folder.

```python
from flask import Flask, request, send_file
from flask_cors import CORS
from io import BytesIO
import clr
import os
import json

app = Flask(__name__)

# Raise the request size limit so large Word documents can be imported.
app.config['MAX_CONTENT_LENGTH'] = 500 * 1024 * 1024      # 500 MB
app.config['MAX_FORM_MEMORY_SIZE'] = 500 * 1024 * 1024    # 500 MB

# Enable CORS so the React application can call the service.
CORS(app)

# Point this to the publish output folder of the class library created in Step 1.
publish_base = os.path.join(
    os.getcwd(), "DocumentEditorLibrary", "bin", "Release", "netstandard2.0", "publish"
)

# Load the wrapper library and the Syncfusion assemblies.
clr.AddReference(os.path.join(publish_base, "DocumentEditorLibrary.dll"))
clr.AddReference(os.path.join(publish_base, "Syncfusion.EJ2.DocumentEditor.dll"))
clr.AddReference(os.path.join(publish_base, "Syncfusion.DocIO.Portable.dll"))
clr.AddReference(os.path.join(publish_base, "Syncfusion.Compression.Portable.dll"))
clr.AddReference(os.path.join(publish_base, "Syncfusion.OfficeChart.Portable.dll"))
clr.AddReference(os.path.join(publish_base, "Syncfusion.DocIORenderer.Net.Core.dll"))
clr.AddReference(os.path.join(publish_base, "Newtonsoft.Json.dll"))
clr.AddReference(os.path.join(publish_base, "SkiaSharp.dll"))
clr.AddReference(os.path.join(publish_base, "BitMiracle.LibTiff.NET.dll"))

# Import the wrapper class from the C# namespace.
from DocumentEditorLibrary import Documenteditor

docEditor = Documenteditor()   # create the wrapper object
```

## Step 3: Add the DOCX Editor API endpoints

Add one Flask route for each server-side operation of the DOCX Editor inside the same `app.py` file.

### Import

The React DOCX Editor uploads the Word document as `multipart/form-data` using the form field name `files`. The endpoint reads the uploaded file and passes it to the `Import` method, which returns the SFDT string.

```python
@app.route('/Import', methods=['POST'])
def importDocument():
    if 'files' in request.files:
        file = request.files['files']
        # Get the stream data and the file name.
        stream_data = file.stream.read()
        file_name = file.filename
        # Returns the SFDT string for the uploaded Word document.
        return docEditor.Import(stream_data, file_name)
    return ""
```

### Save

The Save API exports the edited document from the DOCX Editor. The endpoint receives the SFDT content and the file name, and returns the generated document to the client.

```python
@app.route('/Save', methods=['POST'])
def save():
    # Get the SFDT data and the file name from the request.
    content = request.json['content']
    fileName = request.json['fileName']
    # Saves the SFDT content as a Word document and returns it.
    result = docEditor.Save(content, fileName)
    output = BytesIO(bytes(result))
    output.seek(0)
    return send_file(output, as_attachment=True, download_name=fileName)
```

### SystemClipboard

The SystemClipboard API converts clipboard data (HTML/RTF) to SFDT so content can be pasted with formatting.

```python
@app.route('/SystemClipboard', methods=['POST'])
def systemClipboard():
    # Get the SFDT data and the type from the request.
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
    jsonString = docEditor.RestrictEditing(passwordBase64, saltBase64, spinCount)
    return json.dumps(list(jsonString))
```

### MailMerge

The MailMerge API performs mail merge on the uploaded Word document using the given data records and returns the merged document as SFDT.

```python
@app.route('/MailMerge', methods=['POST'])
def mailMerge():
    # Get the base64 Word document from the request.
    documentData = request.json['documentData']
    # Performs mail merge and returns the merged document as SFDT.
    return docEditor.MailMerge(documentData)
```

### CompareDocuments

The CompareDocuments API compares the original and revised Word documents and returns the comparison result (with tracked changes) as SFDT.

```python
@app.route('/CompareDocuments', methods=['POST'])
def compareDocuments():
    # Get the original and revised files from the request.
    originalFile = request.files['originalFile'].stream.read()
    revisedFile = request.files['revisedFile'].stream.read()
    # Returns the comparison result as SFDT.
    return docEditor.CompareDocuments(originalFile, revisedFile)
```

## Step 4: Start the Python web service

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

## Step 5: Configure the React application

Create the React application with the DOCX Editor component by following the [Getting Started with React DOCX Editor](https://help.syncfusion.com/document-processing/word/word-processor/react/getting-started) documentation, then configure the DOCX Editor's `serviceUrl` property to point to the Python web service.

```tsx
serviceUrl = "http://127.0.0.1:5000/";
```

With this configuration, every server-side operation of the editor is sent to the Python service, processed through the published assembly, and returned to the React application.

## Step 6: Run and verify

1.  Build and publish the class library as described in [Step 1](#step-1-create-the-class-library).
2.  Start the Python web service as described in [Step 4](#step-4-start-the-python-web-service).
3.  Open a terminal in the React application directory and run `npm install` followed by `npm run dev`.
4.  Click **Open** in the DOCX Editor toolbar and select a Word document.
5.  Confirm that the document loads successfully in the editor.

## Complete working sample

A complete working sample is available on GitHub. The sample repository contains the .NET wrapper library and the single `app.py` file that hosts all the DOCX Editor endpoints (`Import`, `Save`, `SystemClipboard`, `RestrictEditing`, `MailMerge`, and `CompareDocuments`). If you get stuck, compare your code against the sample to find the discrepancy.

**Sample repository:** [EJ2-Document-Editor-Web-Services — Python](https://github.com/SyncfusionExamples/EJ2-Document-Editor-Web-Services/tree/master/Python)