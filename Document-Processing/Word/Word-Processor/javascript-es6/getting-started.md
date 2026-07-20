---
layout: post
title: Getting Started with TypeScript DOCX Editor | Syncfusion
description: Learn how to create a DOCX Editor in a TypeScript application using the Syncfusion® DOCX Editor control to create, edit, and view Word documents.
platform: document-processing
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with TypeScript DOCX Editor

[TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) enables you to create, edit, view, and print Word documents in web applications. This section guides you through the steps to get started and create a DOCX Editor in a TypeScript application. 

### Prerequisites

* [Browser Compatibility](https://ej2.syncfusion.com/documentation/browser)

**Note:** The DOCX Editor requires ES2015 (ES6) support in the browser.

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

### Install the JavaScript DOCX Editor npm package

By default, the `ej2‑quickstart` repository is preconfigured with the [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in `~/package.json`. This package installs all Syncfusion Essential JS 2 component packages, including the DOCX Editor and other EJ2 controls.
 
To install only the DOCX Editor component, replace the dependency with [@syncfusion/ej2-documenteditor](https://www.npmjs.com/package/@syncfusion/ej2-documenteditor), as shown below:

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

### Register a Syncfusion License Key

Before initializing the Javascript (ES6) DOCX Editor control, generate a Syncfusion license key and register it in your application.

- [Generate a Syncfusion License Key](https://ej2.syncfusion.com/documentation/licensing/license-key-generation)
- [Register a Syncfusion License Key in Javascript ES6](https://ej2.syncfusion.com/documentation/licensing/license-key-registration)

### Import the required CSS styles

Add the following DOCX Editor and dependent component style references to `~/src/styles/styles.css`:

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


### Initialize the DOCX Editor

Add an HTML `div` element to act as the DOCX Editor element in the `index.html` file:

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Syncfusion TypeScript DOCX Editor</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Syncfusion TypeScript DOCX Editor" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>
    <!-- Element which will render as DOCX Editor -->
    <div id="DocumentEditor"></div>
</body>
</html>

{% endhighlight %}
{% endtabs %}

Add a container element for the DOCX Editor control in the `app.ts` file using the following code.

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

N> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).

### Run the application

Run the application using the following command. The quickstart template includes webpack dev server configuration that automatically builds and serves the application:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

After the application starts, open the localhost URL shown in the terminal. The TypeScript Document Editor is rendered in the browser with a toolbar and an editable document area, as shown below.

![Output of TypeScript DOCX Editor](./images/typescript_getting_started.png)

You can also explore the Document Editor interactively using the live sample below.

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es6/getting-started-cs2" %}

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/JavaScript-ES6-DOCX-Editor-Examples/tree/master/getting-started).

## Online Demo

Explore how to create, edit, and print Word documents using the JavaScript DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/javascript/#/material3/document-editor/default.html).

## Server-side dependencies

The DOCX Editor component requires server-side interactions for the following operations:

* Open file formats other than SFDT
* Paste with formatting
* Restrict editing
* Spell check
* Save as file formats other than SFDT and DOCX
* Collaborative editing features

N> If you don't require the above functionalities, you can deploy the component as a pure client-side solution without any server-side interactions.

For detailed information about server-side web services, refer to the [Web Services Overview](./web-services-overview) page.

## See also

* [Open a document](./import)
* [Save a document](./export)
* [Collaborative Editing](./collaborative-editing/overview)
