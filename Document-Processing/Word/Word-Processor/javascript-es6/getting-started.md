---
layout: post
title: Getting started with JavaScript (ES6) Document editor | Syncfusion
description: Checkout and learn about Getting started with JavaScript (ES6) Document editor control of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with JavaScript (ES6) Document editor control

This section briefly explains how to create a simple **Document editor** component and configure its available functionalities in TypeScript, using Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application uses the latest version of [webpack-cli](https://webpack.js.org/api/cli#commands) integrated with `webpack.config.js` configuration. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following list shows the minimum dependencies required to use the Document Editor:

```javascript
|-- @syncfusion/ej2-documenteditor
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-office-chart
        |-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
```

### Server-side dependencies

The Document editor component requires server-side interactions for the following operations:

* [Open file formats other than SFDT](./import#convert-word-documents-into-sfdt)
* [Paste with formatting](./clipboard#paste-with-formatting)
* [Restrict editing](./document-management)
* [Spell check](./spell-check)
* [Save as file formats other than SFDT and DOCX](./saving-documents/server-side-export)

>Note: If you don't require the above functionalities, you can deploy the component as a pure client-side solution without any server-side interactions.

For detailed information about server-side dependencies, refer to the [Web Services Overview](./web-services-overview) page.

## Set up development environment

Open the command prompt from the required directory and run the following command to clone the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-):

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the `ej2-quickstart` folder, run the following command to navigate to the project directory:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript packages

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls come with [built-in themes](https://ej2.syncfusion.com/documentation/appearance/theme), which are available in the installed packages. It's easy to adapt the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls to match the style of your application by referring to one of the built-in themes.

The quickstart application is preconfigured to use the `Material` theme in the `~/src/styles/styles.css` file, as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import "../../node_modules/@syncfusion/ej2/material.css";

{% endhighlight %}
{% endtabs %}

>Note: To learn more about built-in themes and CSS reference for individual controls, refer to the [themes](https://ej2.syncfusion.com/documentation/appearance/theme) section.

## Adding component

You can add either the DocumentEditorContainer component with predefined toolbar and properties pane options or the DocumentEditor component with customizable options.

>Note: Starting from version `v19.3.0.x`, the accuracy of text size measurements has been optimized to match Microsoft Word pagination for most documents. This improvement is enabled by default. You can [disable it to retain the pagination behavior of older versions](./how-to/disable-optimized-text-measuring) if needed.

### Document editor component

The Document editor component is used to create, view, and edit Word documents. With this component, you can customize the UI options based on your requirements to modify documents.

#### Adding Document editor component

You can start adding the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Document editor component to the application. Add the DocumentEditor component in the `app.ts` and `index.html` files using the following code.

Place the following code in the `app.ts` file:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { DocumentEditor } from '@syncfusion/ej2-documenteditor';

// Initialize Document editor component
let documenteditor: DocumentEditor = new DocumentEditor({ 
    isReadOnly: false, 
    height: '370px', 
    serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/' 
});

// Enable all built-in modules
documenteditor.enableAllModules();

// Render the Document editor component
documenteditor.appendTo('#DocumentEditor');

{% endhighlight %}
{% endtabs %}

>Important: The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` used in the Document editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, host your own web service with the required server configurations. Refer to the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or use the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service.

Add an HTML div element to act as the DocumentEditor element in the `index.html` file:

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 Document editor</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <!-- Element which will render as DocumentEditor -->
    <div id="DocumentEditor"></div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

#### Run the Document editor application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

The Document editor output will be displayed as follows:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/javascript-es6/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es6/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "/document-processing/code-snippet/document-editor/javascript-es6/getting-started-cs1" %}

### Document editor Container component

The DocumentEditorContainer is a predefined component that wraps the DocumentEditor, toolbar, properties pane, and status bar into a single component. The toolbar and properties pane allow users to view and modify documents through public APIs available in the DocumentEditor.

#### Adding Document editor Container component

You can start adding the Essential<sup style="font-size:70%">&reg;</sup> JS 2 documenteditor container component to the application. Add the DocumentEditorContainer component in the `app.ts` and `index.html` files using the following code.

Place the following code in the `app.ts` file:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let documenteditor: DocumentEditorContainer = new DocumentEditorContainer({ 
    enableToolbar: true, 
    height: '390px', 
    serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/' 
});

documenteditor.appendTo('#DocumentEditor');

{% endhighlight %}
{% endtabs %}

>Important: The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` used in the Document editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, host your own web service with the required server configurations. Refer to the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or use the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service.

Add an HTML div element to act as the DocumentEditorContainer element in the `index.html` file:

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 Document editor</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <!-- Element which will render as DocumentEditorContainer -->
    <div id="DocumentEditor"></div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

#### Run the Document editor Container application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

The DocumentEditorContainer output will be displayed as follows:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/javascript-es6/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es6/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "/document-processing/code-snippet/document-editor/javascript-es6/getting-started-cs2" %}

## Next steps

After successfully setting up the Document editor component, explore these resources to enhance your implementation:

* [How to localize the Document editor container](./global-local)
* [How to load a document by default](./how-to/open-default-document)
* [How to customize the toolbar](./how-to/customize-tool-bar)
* [How to resize the Document editor component](./how-to/resize-document-editor)
* [How to add a save button to the DocumentEditorContainer toolbar](./how-to/add-save-button-in-toolbar)

## Troubleshooting

If you encounter issues during setup, consider the following:

* Ensure all dependencies are correctly installed by running `npm install`
* Verify that your Node.js version meets the minimum requirements (v14.15.0 or higher)
* Check that webpack is properly configured in the `webpack.config.js` file
* Clear the npm cache if dependency conflicts occur: `npm cache clean --force`
* Ensure the development server is running on the correct port (check console output)
* For server-side functionality issues, verify your web service is properly configured and accessible
* Check the browser console for any JavaScript errors or network issues