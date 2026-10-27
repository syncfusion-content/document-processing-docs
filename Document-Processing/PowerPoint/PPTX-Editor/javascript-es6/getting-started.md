---
layout: post
title: Getting started with TypeScript PPTX Editor | Syncfusion
description: Learn how to get started with the Syncfusion TypeScript PPTX Editor control. Explore setup, features, examples, and customization options.
platform: document-processing
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with TypeScript PPTX Editor

[TypeScript PPTX Editor](https://www.syncfusion.com/powerpoint-editor-sdk/javascript-powerpoint-editor) enables you to view and print PowerPoint presentations in web applications. This section guides you through the steps to get started and create a PPTX Editor in a TypeScript application.

## Prerequisites

To get started, ensure the following software is installed on your machine:

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/)

## Set up development environment

Create a simple TypeScript application using the Essential® JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository.

N> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). For more information on webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

**Step 1:** Open the command prompt from the required directory and clone the quickstart project from GitHub.

```bash
git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack ej2-quickstart
```

**Step 2:** Navigate to the `ej2-quickstart` folder.

```bash
cd ej2-quickstart
```

## Install the PPTX Editor package

By default, the `ej2‑quickstart` repository is preconfigured with the [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in `~/package.json`. This package installs all Syncfusion Essential JS 2 component packages, including the PPTX Editor and other EJ2 controls.

To install only the PPTX Editor component, replace the dependency with [@syncfusion/ej2-pptxeditor](https://www.npmjs.com/package/@syncfusion/ej2-pptxeditor), as shown below:

{% tabs %}
{% highlight json tabtitle="~/package.json" %}

"dependencies": {
  "@syncfusion/ej2-pptxeditor": "*"
}

{% endhighlight %}
{% endtabs %}

Install the dependent npm packages using the following command.

```bash
npm install
```

## Register a Syncfusion License Key

Before initializing the PPTX Editor control, generate a Syncfusion license key and register it in your application.

- [Generate a Syncfusion License Key](https://help.syncfusion.com/document-processing/licensing/how-to-generate)
- [Register a Syncfusion License Key in JavaScript ES6 / TypeScript](https://help.syncfusion.com/document-processing/licensing/how-to-register-in-an-application#javascript-es6--typescript)

## Import the required CSS styles

Themes for PPTX Editor can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/documentation/appearance/theme-studio).

This guide uses the `Tailwind 3` theme as an example, sourced from the theme package. In this package, each component includes an `index.css` file that automatically loads all the required dependency styles. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

By default, projects include an `~/src/styles/styles.css` file with default styles. These default styles may conflict with Syncfusion component styles. Clear all content from the `styles.css` file to prevent style conflicts.

The required styles for the PPTX Editor are imported in the **styles.css** file:

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import "../../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pptx-editor/index.css";

{% endhighlight %}
{% endtabs %}

## Initialize the PPTX Editor

Add an HTML `div` element to act as the PPTX Editor element in the `index.html` file:

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Syncfusion TypeScript PPTX Editor</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Syncfusion TypeScript PPTX Editor" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>
    <!-- Element which will render as PPTX Editor -->
    <div id="PptxEditor"></div>
</body>
</html>

{% endhighlight %}
{% endtabs %}

Add a container element for the PPTX Editor control in the `app.ts` file using the following code.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import {
  PptxEditor,
  Toolbar,
  ThumbnailView,
  Magnification,
  Navigation,
  Print,
  SlideShow
} from '@syncfusion/ej2-pptxeditor';
import samplePptxUrl from './sample.pptx?url';

PptxEditor.Inject(Toolbar, ThumbnailView, Magnification, Navigation, Print, SlideShow);

let editor: PptxEditor = new PptxEditor(undefined, document.getElementById('PptxEditor'), {
  height: '590px'
});

// Open a local presentation file in the PPTX Editor
fetch(samplePptxUrl)
  .then((response) => response.blob())
  .then((blob) => editor.openFromBlob(blob, 'sample.pptx'));

{% endhighlight %}
{% endtabs %}

## Run the application

Run the application using the following command. The quickstart template includes webpack dev server configuration that automatically builds and serves the application:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

After the application starts, open the localhost URL shown in the terminal. The TypeScript PPTX Editor is rendered in the browser with a toolbar, thumbnail pane, and a slide area, as shown below.

![Output of TypeScript PPTX Editor](./images/typescript_getting_started.png)