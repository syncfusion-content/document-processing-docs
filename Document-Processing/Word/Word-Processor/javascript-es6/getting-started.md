---
layout: post
title: Getting Started with TypeScript DOCX Editor | Syncfusion
description: Learn how to create a DOCX Editor in a TypeScript application using the Syncfusion® Document Editor control to create, edit, and view Word documents.
platform: document-processing
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with TypeScript DOCX Editor

[TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) enables you to create, edit, view, and print Word documents in web applications. This section guides you through the steps to get started and create a DOCX Editor in a TypeScript application. 

## Steps to create a DOCX Editor using TypeScript

### Prerequisites
Ensure the following tools are installed on your machine:

1. [Git](https://git-scm.com/downloads)
2. [Node.js](https://nodejs.org/en/) v14.0 or later
3. [npm](https://www.npmjs.com/) v6.0 or later (bundled with Node.js)
4. A valid Syncfusion license (free community license available at [https://www.syncfusion.com/products/communitylicense](https://www.syncfusion.com/products/communitylicense))

**Supported Browsers:**
* Google Chrome (latest version)
* Mozilla Firefox (latest version)
* Microsoft Edge (latest version)
* Safari 13+ (macOS and iOS)

**Note:** The Document Editor requires ES2015 (ES6) support in the browser.

### Register a Syncfusion License (Recommended)

Before running the application, register your Syncfusion license to avoid evaluation watermarks and expiration notices. You can obtain a free community license or use a commercial license.

**To register your license in the application:**

Add the following code at the **top** of your `app.ts` file, before initializing any Syncfusion components:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { registerLicense } from '@syncfusion/ej2-base';

// Register your Syncfusion license key
// Get your license key from https://www.syncfusion.com/products/communitylicense
registerLicense('YOUR_LICENSE_KEY');

import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

// Rest of your code...

{% endhighlight %}
{% endtabs %}

> **Note:** For evaluation purposes only, you can skip this step and the application will work with an evaluation notice. However, we recommend registering a free community license for development.

### Set up development environment

Create a simple TypeScript application using the Essential® JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository.

> **Note:** This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

**Step 1:** Open the command prompt from the required directory and clone the quickstart project from GitHub.

```bash
git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack ej2-quickstart
```

**Step 2:** Navigate to the `ej2-quickstart` folder.

```bash
cd ej2-quickstart
```

### Install the Syncfusion® Document Editor packages

By default, the `ej2‑quickstart` repository is preconfigured with the [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in `~/package.json`. This package installs all Syncfusion Essential JS 2 component packages, including the Document Editor and other EJ2 controls.
 
To install only the Document Editor component, replace the dependency with [@syncfusion/ej2-documenteditor](https://www.npmjs.com/package/@syncfusion/ej2-documenteditor), as shown below:

{% tabs %}
{% highlight json tabtitle="~/package.json" %}

"dependencies": {
  "@syncfusion/ej2-documenteditor": "*"
}

{% endhighlight %}
{% endtabs %}

Install the dependent npm packages using the following command.

```bash
npm install
```

**Step 3:** Verify the build configuration and install any additional dependencies.

```bash
npm run build
```

This command compiles your TypeScript files and prepares the application for development or production.

### Add CSS reference

Add the following Document Editor and dependent component style references to `~/src/styles/styles.css`:

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-documenteditor/styles/tailwind3.css';

{% endhighlight %}
{% endtabs %}


### Add the Document Editor component

Add an HTML `div` element to act as the Document Editor element in the `index.html` file:

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Syncfusion TypeScript Document Editor</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Syncfusion TypeScript Document Editor" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>
    <!-- Element which will render as Document Editor -->
    <div id="DocumentEditor"></div>
</body>
</html>

{% endhighlight %}
{% endtabs %}

Add a container element for the Document Editor control in the `app.ts` file using the following code.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let documenteditor: DocumentEditorContainer = new DocumentEditorContainer({
    enableToolbar: true,
    height: '590px',
    serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
});
documenteditor.appendTo('#DocumentEditor');

{% endhighlight %}
{% endtabs %}

### Configure the service URL

The `serviceUrl` property is set to the demo endpoint (`https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/`). This is for demo and evaluation purposes only. For production environments, host your own web service.

**The Document Editor requires server-side interactions for:**

* Opening file formats other than SFDT (DOC, DOCX, RTF, HTML, etc.)
* Pasting with formatting
* Restricting editing
* Spell checking
* Saving as file formats other than SFDT and DOCX
* Mail merge operations
* Collaborative editing features

**Hosting the Web Service:**

**Option 1: Self-Hosted using .NET**
Use the [EJ2-DocumentEditor-WebServices](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) repository to host the service on your own infrastructure.

```bash
git clone https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices.git
cd EJ2-DocumentEditor-WebServices
dotnet build
dotnet run
```

The service will typically run on `http://localhost:5000/api/documenteditor/`.

**Option 2: Docker Container**
Deploy the service using the pre-built [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server):

```bash
docker pull syncfusion/word-processor-server:latest
docker run -p 5000:5000 syncfusion/word-processor-server:latest
```

Access the service at `http://localhost:5000/api/documenteditor/`.

**Option 3: Azure App Service**
Deploy the web service to Azure for scalability and high availability. Refer to the deployment guide in the web services repository.

**Client-Side Only Deployment:**
If you don't require the server-side functionalities listed above, you can deploy the component as a pure client-side solution by omitting the `serviceUrl` property. This is suitable for basic document viewing and SFDT/DOCX editing.

### Run the application

Run the application using the following command. The quickstart template includes webpack dev server configuration that automatically builds and serves the application:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

**Starting the Application:**

1. The `npm start` command will compile your TypeScript and start the webpack development server
2. The development server will automatically open in your default browser
3. By default, the application runs on **`http://localhost:3000`** or **`http://localhost:8080`** (depending on your webpack configuration)
4. If the browser doesn't open automatically, manually navigate to `http://localhost:3000` or check the terminal output for the exact port number

**Expected Output in Terminal:**

```
i ｢wds｣: Project is running at http://localhost:3000/
i ｢wds｣: webpack output is served from /
i ｢wds｣: Content not from webpack is served from .../ej2-quickstart
```

**Live Reload:**

The development server supports **live reload**. Any changes you make to your TypeScript or CSS files will automatically rebuild and refresh in the browser.

After the application starts and loads in the browser, the TypeScript Document Editor is rendered with a toolbar and an editable document area, as shown below.

![Output of TypeScript Document Editor](./images/typescript_getting_started.png)

**Understanding SFDT Format:**

SFDT (Syncfusion Document Format Text) is Syncfusion's native JSON-based document format that provides a lightweight alternative to DOCX. Benefits include:

* **Smaller file size** — Ideal for storage and transmission
* **Fast parsing** — No decompression overhead like ZIP-based DOCX
* **Full feature support** — Preserves all document elements, formatting, and metadata
* **Easy integration** — JSON format is natively supported by JavaScript

SFDT format is commonly used for:
* Real-time collaborative editing
* Storing documents in databases
* Server-side document manipulation
* Version control systems (human-readable diffs)

Example SFDT structure:
```json
{
  "sfdt": "1.0",
  "sections": [{
    "blocks": [{
      "paragraphFormat": { "styleName": "Normal" },
      "inlines": [{
        "text": "Hello World"
      }]
    }]
  }]
}
```

To work with other formats (DOCX, PDF, RTF), the service URL must be configured.

You can also explore the Document Editor interactively using the live sample below.

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es6/getting-started-cs2" %}

> **Note:** [View Sample in GitHub](https://github.com/SyncfusionExamples/JavaScript-ES6-DOCX-Editor-Examples/tree/master/getting-started).

## Online Demo

Explore how to create, edit, and print Word documents using the JavaScript Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/javascript/#/material3/document-editor/default.html).

For detailed information about server-side web services, refer to the [Web Services Overview](./web-services-overview) page.

## See also

* [Open a document](./import)
* [Save a document](./export)
* [Collaborative Editing](./collaborative-editing/overview)
* [Web Services Overview](./web-services-overview)
* [API Reference](./api-reference.md)