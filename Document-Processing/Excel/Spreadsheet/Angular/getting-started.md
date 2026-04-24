---
layout: post
title: Getting started with Angular Spreadsheet component | Syncfusion
description: Checkout and learn here all about getting started with Syncfusion Essential Angular Spreadsheet component, it's elements, and more details.
platform: document-processing
control: Getting started
documentation: ug
---

# Getting Started with Angular Spreadsheet component

This section explains how to create a simple Angular application and add the [Syncfusion Angular Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/angular-spreadsheet-editor) component with the minimum required setup.

## Prerequisites

[System requirements for Syncfusion® Angular components](https://ej2.syncfusion.com/angular/documentation/system-requirement)

## Create an Angular Application
Use the [`Angular CLI`](https://angular.dev/installation) to create a new Angular application. It is the official and easiest way to get started with Angular.

To create a new Angular application, run the following commands.

```
npm install -g @angular/cli
ng new spreadsheet-app
cd spreadsheet-app
```

## Install the Syncfusion® Angular Spreadsheet package

Currently, Syncfusion® provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://v17.angular.io/guide/angular-package-format#angular-package-format):

Install the [Angular](https://www.npmjs.com/package/@syncfusion/ej2-angular-spreadsheet) package from npm using the following command:

```
npm install @syncfusion/ej2-angular-spreadsheet --save
```

2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion® [Angular Spreadsheet](https://www.npmjs.com/package/@syncfusion/ej2-angular-spreadsheet/v/33.2.3-ngcc). To download the `ngcc` package use the below.

```bash
npm install @syncfusion/ej2-angular-spreadsheet@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-spreadsheet:"33.2.3-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Add CSS reference

Add the following style references to the `[src/styles.css]` file.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-spreadsheet/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
```

## Add the Syncfusion® Angular Spreadsheet component to the application

Modify the template in [src/app/app.ts] file to render the spreadsheet component. Add the Angular Spreadsheet by using `<ejs-spreadsheet>` selector in template section of the `app.ts` file.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/spreadsheet-cs1/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/spreadsheet-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

> **Note:** The [`openUrl`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#openurl) and [`saveUrl`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#saveurl) endpoints used in this example are provided only for demonstration purposes. For development and production use, we strongly recommend configuring your own local or hosted web service for the Open and Save actions instead of relying on the online demo service. For more information, refer to the [`Blog Post`](https://www.syncfusion.com/blogs/post/host-spreadsheet-open-and-save-services).

## Run the application

Use the following command to run the application in the web browser

```
ng serve
```

The following example shows a basic Spreadsheet component
 
{% previewsample "/document-processing/samples/spreadsheet/angular/spreadsheet-cs1" %}

> You can refer to our [Angular Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/angular-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Spreadsheet example](https://document.syncfusion.com/demos/spreadsheet-editor/angular/#/bootstrap5/spreadsheet/default) that shows you how present and manipulate data, including editing, formulas, formatting, importing, and exporting.

## Video tutorial

To get start quickly with Angular Spreadsheet using CLI, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=2Ozwe37X-7Q" %}

## See Also

* [Data Binding](./data-binding)
* [Open and Save](./open-save)
* [Save Excel files](./save-excel-files)
* [Web Services](./web-services/webservice-overview)