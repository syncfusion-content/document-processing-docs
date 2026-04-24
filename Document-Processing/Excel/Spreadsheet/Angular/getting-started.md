---
layout: post
title: Getting started with Angular Spreadsheet component | Syncfusion
description: Checkout and learn here all about getting started with Syncfusion Essential Angular Spreadsheet component, it's elements, and more details.
platform: document-processing
control: Getting started
documentation: ug
---

# Getting Started with Angular Spreadsheet component

This section explains how to create a simple Angular application and add the [Syncfusion® Angular Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/angular-spreadsheet-editor) component with the minimum required setup.

## Prerequisites

[System requirements for Syncfusion® Angular components](https://ej2.syncfusion.com/angular/documentation/system-requirement)

## Create an Angular Application
Use the [`Angular CLI`](https://angular.dev/installation) to create a new Angular application.

To create a new Angular application, run the following commands.

```
npm install -g @angular/cli
ng new spreadsheet-app
cd spreadsheet-app
```

## Install the Syncfusion® Angular Spreadsheet package

Syncfusion® Angular packages are distributed in npm as [@syncfusion](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-) scoped packages. The [Angular Spreadsheet](https://www.npmjs.com/package/@syncfusion/ej2-angular-spreadsheet) package uses the [Ivy](https://docs.angular.lat/guide/ivy) library distribution [format](https://angular.dev/tools/libraries/angular-package-format) and is compatible with `Angular 12` and above. Use the following command to install the package:

```
npm install @syncfusion/ej2-angular-spreadsheet --save
```

For `Angular versions below 12`, use the legacy `ngcc` package instead:

```
npm install @syncfusion/ej2-angular-spreadsheet@ngcc --save
```

## Add CSS references

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

Now, import the required Spreadsheet module into your application file and render the component.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/spreadsheet-cs1/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/spreadsheet-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

> **Note:** The [`openUrl`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#openurl) and [`saveUrl`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#saveurl) endpoints used in this example are provided only for demonstration purposes. For development and production use, we strongly recommend configuring your own local or hosted web service for the Open and Save actions instead of relying on the online demo service. For more information, refer to the [`link`](https://www.syncfusion.com/blogs/post/host-spreadsheet-open-and-save-services).

## Run the application

Run the following command to start the development server:

```
ng serve
```

After the application starts, open the local URL shown in the terminal to view the Angular Spreadsheet component in the browser.

The following example shows a basic Spreadsheet component.
 
{% previewsample "/document-processing/samples/spreadsheet/angular/spreadsheet-cs1" %}

## Video tutorial

To get started quickly with Angular Spreadsheet, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=2Ozwe37X-7Q" %}

## See Also

* [Data Binding](./data-binding)
* [Open and Save](./open-save)