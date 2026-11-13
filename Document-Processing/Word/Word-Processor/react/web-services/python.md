---
layout: post
title: Python Web Service in React DOCX Editor | Syncfusion
description: Learn how to create a Python web service for the React DOCX Editor by loading the Syncfusion .NET Standard document processing library with Python.NET and exposing Import, Save, SystemClipboard, and RestrictEditing endpoints using Flask.
control: Python
platform: document-processing
control: DocumentEditor
documentation: ug
---

# Python Web Service in React DOCX Editor

The React DOCX Editor depends on **server-side interactions** for the operations listed below. These operations are usually written in C# or Java, but this article shows how to host them from a **Python web service** by loading Syncfusion's .NET document-processing libraries with [Python.NET](https://pypi.org/project/pythonnet/).

*   Import Word documents
*   Paste with formatting (SystemClipboard)
*   Restrict Editing
*   Save documents

In this approach:

*   A **.NET Standard class library** contains the DOCX Editor Web API implementation.
*   **Flask** hosts the Web API endpoints from Python.
*   **Python.NET** loads the published .NET assemblies so Python can invoke the document-processing methods.
*   The React DOCX Editor communicates with the Python service through the `serviceUrl` property.

N> A complete working sample is available on GitHub: [React DOCX Editor with Python Web Service](https://github.com/SyncfusionExamples/EJ2-Document-Editor-Web-Services/tree/master/Python).

## Prerequisites

*   [.NET SDK](https://dotnet.microsoft.com/download)
*   [Python 3.9 or later](https://www.python.org/downloads/) (CPython distribution recommended)
*   Node.js and npm
*   An active [Syncfusion&reg; license key](https://www.syncfusion.com/products/communitylicense) (a free 30-day trial is available)

## Step 1: Create the .NET Standard class library

The .NET Standard class library acts as the bridge between the Python web service and the Syncfusion document-processing libraries.

Open a terminal and create a new .NET Standard class library project.

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
dotnet add package Newtonsoft.Json
```

### Add the DOCX Editor wrapper class

The wrapper class exposes the document-processing methods that Python invokes: `Import`, `SystemClipboard`, `ExportSFDT`, and `RestrictEditing`. Add a `Documenteditor.cs` file with the following implementation.

```csharp
using Syncfusion.EJ2.DocumentEditor;
using System;
using System.IO;

namespace DocumentEditorLibrary
{
    public class Documenteditor
    {
        // Converts a Word document (base64) into the SFDT string required by the DOCX Editor.
        public string Import(string base64String)
        {
            byte[] byteArray = Convert.FromBase64String(base64String);
            Stream stream = new MemoryStream(byteArray);

            try
            {
                WordDocument document = WordDocument.Load(stream, FormatType.Docx);
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

        // Converts clipboard content (HTML/RTF) into SFDT to paste with formatting.
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

        // Saves an SFDT string as a Word document.
        public string ExportSFDT(string content)
        {
            Stream document = WordDocument.Save(content, FormatType.Docx);
            FileStream file = new FileStream("sample.docx", FileMode.OpenOrCreate, FileAccess.ReadWrite);
            document.CopyTo(file);
            file.Close();
            document.Close();
            return "success";
        }

        // Computes the password hash used by the document protection feature.
        public string[] RestrictEditing(string passwordBase64, string saltBase64, int spinCount)
        {
            if (passwordBase64 == "" && passwordBase64 == null)
                return null;
            return WordDocument.ComputeHash(passwordBase64, saltBase64, spinCount);
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

After publishing the .NET Standard library, create a Python web service with Flask that exposes the DOCX Editor APIs. The service receives requests from the React application, loads the published .NET assemblies with Python.NET, invokes the matching method on the wrapper class, and returns the result to the client.

Implement all endpoints in a single `app.py` file for easier maintenance and deployment.

### Install the Python packages

```bash
pip install flask flask-cors pythonnet
```

*   **Flask** - Hosts the Web API endpoints.
*   **Flask-CORS** - Enables communication between the React application and the Python service.
*   **pythonnet** - Allows Python to load the published .NET assemblies.

### Load the published .NET assemblies

At the top of `app.py`, use `clr` from `pythonnet` to load the assemblies from the **publish output folder** generated in Step 1. Adjust the path to match the location of your `publish` folder.

```python
import clr
import os

# Point this to the publish output folder of the .NET Standard class library.
publish_base = os.path.join(
    os.getcwd(), "DocumentEditorLibrary", "bin", "Release", "netstandard2.0", "publish"
)

# Wrapper library.
clr.AddReference(os.path.join(publish_base, "DocumentEditorLibrary.dll"))

# Syncfusion assemblies.
clr.AddReference(os.path.join(publish_base, "Syncfusion.EJ2.DocumentEditor.dll"))
clr.AddReference(os.path.join(publish_base, "Syncfusion.DocIO.Portable.dll"))
clr.AddReference(os.path.join(publish_base, "Syncfusion.Compression.Portable.dll"))
clr.AddReference(os.path.join(publish_base, "Syncfusion.OfficeChart.Portable.dll"))
clr.AddReference(os.path.join(publish_base, "Syncfusion.Licensing.dll"))

# Supporting assemblies.
clr.AddReference(os.path.join(publish_base, "Newtonsoft.Json.dll"))
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
app.config['MAX_FORM_MEMORY_SIZE'] = 500 * 1024 * 1024    # 500 MB

# Enable CORS so the React application can call the service.
CORS(app)
```

## Step 3: Add the DOCX Editor API endpoints

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

The Save API exports the edited document from the DOCX Editor. The endpoint receives the SFDT content and passes it to the `ExportSFDT` method of the .NET library.

```python
@app.route('/Save', methods=['POST'])
def save():
    # Get the SFDT data and the file name from the request.
    content = request.json['content']
    fileName = request.json['fileName']
    # Saves the SFDT content as a Word document.
    result = docEditor.ExportSFDT(content)
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

1.  Create a React application and install the DOCX Editor package.

    ```bash
    npm install @syncfusion/ej2-react-documenteditor
    ```

2.  Integrate the React DOCX Editor component by following the [Getting Started with React DOCX Editor](https://help.syncfusion.com/document-processing/word/word-processor/react/getting-started) documentation.

3.  Configure the DOCX Editor's `serviceUrl` property to point to the Python web service.

    ```tsx
    serviceUrl = "http://127.0.0.1:5000/";
    ```

With this configuration, every import, save, paste, and restrict-editing operation is sent to the Python service, processed through the published .NET assembly, and returned to the React application.

## Step 6: Run and verify

Run the components in the following order:

1.  Build and publish the .NET Standard library as described in [Step 1](#step-1-create-the-net-standard-class-library).
2.  Start the Python web service as described in [Step 4](#step-4-start-the-python-web-service).
3.  Open a terminal in the React application directory and start the development server:

    ```bash
    npm run dev
    ```

    If you have not installed the React dependencies yet, run `npm install` first.

4.  Click **Open** in the DOCX Editor toolbar and select a Word document.
5.  Confirm that the document loads successfully in the editor.

## Download sample

A complete working sample is available on GitHub. The sample repository contains the .NET Standard wrapper library and the Python API files (`import.py`, `save.py`, `systemclipboard.py`) that call each DOCX Editor operation.

**Sample repository:** [EJ2-Document-Editor-Web-Services — Python](https://github.com/SyncfusionExamples/EJ2-Document-Editor-Web-Services/tree/master/Python)

If you get stuck while following this article, compare your code against the sample to find the discrepancy.