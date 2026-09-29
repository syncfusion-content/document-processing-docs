---
title: How to Use Python with .NET Standard, React DOCX Editor | Syncfusion
description: Learn how to host a Python web service for the React DOCX Editor by exposing Syncfusion's .NET document processing libraries through a .NET Standard class library loaded with Python.NET.
platform: document-processing
control: DocumentEditor
documentation: ug
---

# How to Use Python with .NET Standard in React DOCX Editor

The React DOCX Editor depends on **server-side interactions** to perform the operations listed below, which are usually written in C# or Java. This article explains how to host those interactions from a **Python web service** while continuing to use Syncfusion's .NET document-processing capabilities through a **.NET Standard class library** loaded with Python.NET.

The Python web service implemented in this article handles the following operations:

-   Import Word documents into the DOCX Editor.
-   Save edited documents from the DOCX Editor.
-   Paste content with formatting (SystemClipboard).
-   Apply and manage document protection (RestrictEditing).

In this approach:

-   A .NET Standard class library contains the DOCX Editor Web API implementation.
-   Python hosts the web API endpoints by using Flask.
-   Python.NET loads the published .NET assemblies so that Python can invoke the document-processing methods.
-   The React DOCX Editor communicates with the Python service through the `serviceUrl` property.

## Prerequisites

### Software Requirements

-   [.NET SDK](https://dotnet.microsoft.com/download)
-   Python 3.x
-   Node.js and npm
-   Visual Studio or Visual Studio Code
-   A Syncfusion license key — you can sign in to your [Syncfusion account](https://www.syncfusion.com/account) to retrieve a key, or generate a free trial key.

### NuGet Packages for the .NET Standard Project

Add the following Syncfusion NuGet packages to the .NET Standard class library project.

-   `Syncfusion.EJ2.DocumentEditor`
-   `Syncfusion.DocIO.Portable`
-   `Syncfusion.Compression.Portable`
-   `Syncfusion.OfficeChart.Portable`
-   `Syncfusion.Licensing`
-   `Syncfusion.MetafileRenderer.Portable`
-   `Syncfusion.SkiaSharpHelper.Portable`
-   `Syncfusion.Pdf.Imaging.Portable`

Add the following supporting packages from the NuGet gallery:

-   `Newtonsoft.Json`
-   `SkiaSharp`
-   `SkiaSharp.HarfBuzz`
-   `HarfBuzzSharp`
-   `BitMiracle.LibTiff.NET`
-   `Microsoft.Bcl.AsyncInterfaces`

The Python web service loads these assemblies from the .NET Standard class library publish output folder by using Python.NET.

### Required Python Packages

Install the following Python packages:

```bash
pip install flask
pip install flask-cors
pip install pythonnet
```

The packages are used for the following purposes:

-   **Flask** - Hosts the Python web API endpoints.
-   **Flask-CORS** - Enables communication between the React application and the Python service.
-   **Python.NET** - Allows Python to load and access the published .NET assemblies.

## Create the .NET Standard Class Library

This section explains how to create the .NET Standard class library that contains the DOCX Editor Web API implementation, and how to publish it so that Python can load the compiled assemblies.

### Create the Project

Create a new **.NET Standard Class Library** project. This project acts as the bridge between the Python web service and the Syncfusion document-processing libraries.

After creating the project, add the NuGet packages listed in the [Prerequisites](#nuget-packages-for-the-net-standard-project) section.

### Add the DOCX Editor Web API Implementation

Add the DOCX Editor Web API implementation to the .NET Standard project. The library exposes the document-processing methods that are invoked from the Python service, such as:

-   Import
-   Save
-   SystemClipboard
-   RestrictEditing

The implementation of these methods is identical to the existing **DOCX Editor Web Services** implementation. You can reuse the same document-processing logic in the .NET Standard library project by following the instructions provided in the [**ASP.NET Core Web Service**](https://help.syncfusion.com/document-processing/word/word-processor/react/web-services/core) documentation.

### Build and Publish the .NET Standard Library

**Build** compiles the C# source code and produces the .NET assembly.

```bash
dotnet build -c Release
```

**Publish** bundles that assembly with every dependent library into a single folder. The Python service loads from this `publish` folder.

```bash
dotnet publish -c Release
```

Repeat both commands after any change to the wrapper code.

## Create the Python Web Service

After publishing the .NET Standard library, create a Python web service to expose the DOCX Editor APIs. The Python service receives requests from the React application, loads the published .NET assemblies by using Python.NET, invokes the required document-processing methods, and returns the response to the client.

For easier maintenance and deployment, implement all required DOCX Editor functionalities in a single `app.py` file.

### Install Python Dependencies

Install the Python packages required for the web service:

```bash
pip install flask flask-cors pythonnet
```

### Configure the Flask Application

Create a new `app.py` file and configure the Flask application. The React application and the Python service run on different ports, so enable CORS so the editor can call the service. Also raise the request size limit so that large Word documents can be imported without being rejected by Flask's default limit.

```python
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)

# Raise the request size limit so large Word documents can be imported.
app.config['MAX_CONTENT_LENGTH'] = 500 * 1024 * 1024      # 500 MB
app.config['MAX_FORM_MEMORY_SIZE'] = 500 * 1024 * 1024    # 500 MB

# Enable CORS for all origins so the React application can call the service.
CORS(
    app,
    resources={r"/*": {"origins": "*"}},
    supports_credentials=False,
    expose_headers=["Content-Disposition", "Content-Type"],
)

# Force CORS headers on every response, including 413/500 error responses.
@app.after_request
def add_cors_on_errors(resp):
    resp.headers["Access-Control-Allow-Origin"]  = "*"
    resp.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    resp.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    return resp
```

### Load the Published .NET Assemblies

Use **Python.NET** to load the published .NET assemblies into the Python application. This enables the Python service to access the document-processing functionality provided by the Syncfusion .NET libraries.

The publish output folder is determined by the project build. Set `publish_base` to the path of the `publish` folder generated by `dotnet publish -c Release`.

```python
import clr
import os
import json

# Point this to the publish output folder of the .NET Standard class library you created.
# Replace <YourDotNetStandardProject> with the project folder name.
publish_base = os.path.join(
    os.getcwd(),
    "<YourDotNetStandardProject>", "bin", "Release", "netstandard2.0", "publish",
)

# Load the published .NET assemblies.
# Replace <YourAssemblyName> with the name of the .NET Standard class library project you created.
clr.AddReference(publish_base + "<YourAssemblyName>.dll")
clr.AddReference(publish_base + "Syncfusion.EJ2.DocumentEditor.dll")
clr.AddReference(publish_base + "Syncfusion.DocIO.Portable.dll")
clr.AddReference(publish_base + "Syncfusion.Compression.Portable.dll")
clr.AddReference(publish_base + "Syncfusion.OfficeChart.Portable.dll")
clr.AddReference(publish_base + "Syncfusion.Licensing.dll")
clr.AddReference(publish_base + "Syncfusion.MetafileRenderer.Portable.dll")
clr.AddReference(publish_base + "Syncfusion.Pdf.Imaging.Portable.dll")
clr.AddReference(publish_base + "Syncfusion.SkiaSharpHelper.Portable.dll")
clr.AddReference(publish_base + "Newtonsoft.Json.dll")
clr.AddReference(publish_base + "SkiaSharp.dll")
clr.AddReference(publish_base + "SkiaSharp.HarfBuzz.dll")
clr.AddReference(publish_base + "HarfBuzzSharp.dll")
clr.AddReference(publish_base + "BitMiracle.LibTiff.NET.dll")
clr.AddReference(publish_base + "Microsoft.Bcl.AsyncInterfaces.dll")
```

### Configure the DOCX Editor API Endpoints

Configure the required API endpoints in the Python application and map them to the corresponding methods exposed by the .NET Standard library. Each endpoint receives a request from the React DOCX Editor, invokes the matching method on the wrapper class instance, and returns the processed result to the client.

Before adding the endpoints, import the wrapper class and create an instance of it. The wrapper class in the .NET Standard library must expose methods named `Import`, `Save`, `SystemClipboard`, and `RestrictEditing` to match the callers below.

```python
# Replace <YourNamespace> with the namespace of the class you created in the .NET Standard
# class library, and <YourClass> with the class that hosts the four DOCX Editor methods.
from <YourNamespace> import <YourClass>
docEditor = <YourClass>()
```

#### Import API

The Import API is used to load Word documents into the DOCX Editor. The React DOCX Editor uploads the file as `multipart/form-data` using the form field name `files`, which the Python endpoint reads as `request.files['files']`.

```python
@app.route('/Import', methods=['POST'])
def importDocument():
    if 'files' in request.files:
        files = request.files['files']
        # Get the stream data
        stream_data = files.stream.read()
        # Get the file name
        file_name = files.filename
        # Calling our Import method from our DocumentEditor class which will return the SFDT string
        return docEditor.Import(stream_data, file_name)
    else:
        return ""
```

This endpoint receives the uploaded document from the React application and invokes the `Import` method exposed by the .NET library to process and load the document into the editor.

#### Save API

The Save API is used to export the edited document from the DOCX Editor.

```python
@app.route('/Save', methods=['POST'])
def save():
    # Get the SFDT data from the request
    content = request.json['content']
    # Get the file name from the request
    fileName = request.json['fileName']
    # Calling our Save method from our DocumentEditor class which will save the document in the given file name.
    result = docEditor.Save(content, fileName)
    print(result)
    return result
```

This endpoint receives the document content from the editor and invokes the corresponding `Save` method from the .NET library to generate and return the requested output document.

#### SystemClipboard API

The SystemClipboard API is used to support clipboard operations within the DOCX Editor.

```python
@app.route('/SystemClipboard', methods=['POST'])
def systemClipboard():
    # Get the SFDT data from the request
    content = request.json['content']
    # Get the type from the request
    type = request.json['type']
    # Calling our SystemClipboard method from our DocumentEditor class which will return the SFDT string
    return docEditor.SystemClipboard(content, type)
```

This endpoint forwards clipboard-related requests to the .NET library and returns the processed response to the DOCX Editor.

#### RestrictEditing API

The RestrictEditing API is used to apply and manage editing restrictions within a document.

```python
@app.route('/RestrictEditing', methods=['POST'])
def restrictEditing():
    passwordBase64 = request.json['passwordBase64']
    saltBase64 = request.json['saltBase64']
    spinCount = request.json['spinCount']
    # Calling our RestrictEditing method from our DocumentEditor class which will return the array of System.String represents the password and salt value.
    jsonString = docEditor.RestrictEditing(passwordBase64, saltBase64, spinCount)
    return json.loads(jsonString)
```

This endpoint invokes the corresponding method from the .NET library to process document protection and editing restriction requests.

### Start the Python Web Service

Add the application entry point at the bottom of `app.py` and start the service.

```python
if __name__ == "__main__":
    app.run(debug=True)   # http://localhost:5000/
```

Run the service from the folder that contains `app.py`:

```bash
python app.py
```

When the application starts successfully, a message similar to the following is displayed:

```
* Running on http://127.0.0.1:5000
```

## Configure the React Application

After setting up the Python web service, configure the React application to communicate with the backend service and host the DOCX Editor.

### Create a React Application

Create a new React application and install the DOCX Editor package.

```bash
npm install @syncfusion/ej2-react-documenteditor
```

Then integrate the Syncfusion React DOCX Editor component by following the steps provided in the [React DOCX Editor Getting Started](https://help.syncfusion.com/document-processing/word/word-processor/react/getting-started) documentation.

After creating the application, ensure that all required project dependencies are installed and that the development environment is ready for running the React application.

### Configure the Python Service URL

Configure the DOCX Editor's `serviceUrl` property to point to the Python web service.

```tsx
serviceUrl = "http://127.0.0.1:5000/";
```

The `serviceUrl` property tells the DOCX Editor where to send its server-side requests. With this configuration, every import, save, paste, and restrict-editing operation is sent to the Python service, processed through the published .NET assembly, and returned to the React application.

## Run and Verify

After configuring the .NET Standard library, Python web service, and React application, run each component in this order and verify that the DOCX Editor can communicate with the backend service.

1.  Build and publish the .NET Standard library as described in [Build and Publish the .NET Standard Library](#build-and-publish-the-net-standard-library).
2.  Start the Python web service as described in [Start the Python Web Service](#start-the-python-web-service).
3.  Open a terminal in the React application directory and start the development server:

    ```bash
    npm run dev
    ```

    If you have not installed the React dependencies yet, run `npm install` first.
4.  Open the URL displayed in the terminal, typically `http://localhost:5173`.
5.  Click **Open** in the DOCX Editor toolbar and select a Word document.
6.  Confirm that the document is loaded successfully in the editor.

## Download Sample

A complete working sample is available on GitHub. The sample repository's `app.py` implements the four DOCX Editor endpoints (`Import`, `Save`, `SystemClipboard`, and `RestrictEditing`). If you get stuck, compare your `app.py` against the sample's `app.py` to find the discrepancy.

**Sample Repository:**
[React DOCX Editor with Python Web Service on GitHub](https://github.com/SyncfusionExamples/navigate-to-different-paragraphs-react-docx-editor-python)