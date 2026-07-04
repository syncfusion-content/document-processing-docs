---
layout: post
title: Getting started with Angular Spreadsheet component | Syncfusion
description: Checkout and learn about getting started with the Syncfusion Angular Spreadsheet component in the Spreadsheet Editor SDK and more details.
platform: document-processing
control: Getting started
documentation: ug
---

# Getting Started with Angular Spreadsheet component

This section explains how to create a simple Angular application and add the [Angular Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/angular-spreadsheet-editor) component with the minimum required setup.

## Prerequisites

[System requirements for Syncfusion® Angular components](https://ej2.syncfusion.com/angular/documentation/system-requirement)

## Create an Angular application

Use [Angular CLI](https://angular.dev/installation) to create a new Angular application, as it provides a standardized project structure, built-in testing tools, and simplified deployment.

Install Angular CLI globally, using the following command:

```
npm install -g @angular/cli
```

Create a new Angular application using the following commands:

```
ng new spreadsheet-app
cd spreadsheet-app
```

> **Note:** When prompted during project creation, select the default options: **CSS** for stylesheet, **No** for SSR/SSG, and **None** for AI tools.

## Install the Syncfusion® Angular Spreadsheet package

The [Angular Spreadsheet Editor](https://www.npmjs.com/package/@syncfusion/ej2-angular-spreadsheet) package uses the [Ivy](https://docs.angular.lat/guide/ivy) library distribution [format](https://angular.dev/tools/libraries/angular-package-format) and is compatible with `Angular 12` and above. Use the following command to install the package:

```
npm install @syncfusion/ej2-angular-spreadsheet --save
```

For `Angular versions below 12`, use the legacy `ngcc` package instead:

```
npm install @syncfusion/ej2-angular-spreadsheet@ngcc --save
```

## Add CSS references

Add the following Spreadsheet and dependent component style references to the `[src/styles.css]` file.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-angular-spreadsheet/styles/tailwind3.css';
```

> **Note:** Refer to the [Themes topic](https://ej2.syncfusion.com/angular/documentation/appearance/overview) to learn more about built-in themes and different ways to refer to themes in an Angular project.

## Add the Syncfusion® Angular Spreadsheet component to the application

Now, import the required Spreadsheet module into your application file and render the component.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'
import { Component } from '@angular/core';

@Component({
  imports: [SpreadsheetAllModule],
  standalone: true,
  selector: 'app-root',
  template: '<ejs-spreadsheet openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open" saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save"></ejs-spreadsheet>'
})
export class App { }
{% endhighlight %}
{% endtabs %}

> **Note:** The [`openUrl`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#openurl) and [`saveUrl`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#saveurl) endpoints used in this example are provided only for demonstration purposes. For development and production use, we strongly recommend configuring your own local or hosted web service for the Open and Save actions instead of relying on the online demo service. For more information, refer to the [`link`](https://www.syncfusion.com/blogs/post/host-spreadsheet-open-and-save-services).

## Run the application

Run the following command to start the development server:

```
ng serve
```

After the application starts, open the localhost URL shown in the terminal to view the Angular Spreadsheet component in the browser. The output will appear as follows:
![Angular Spreadsheet component](./images/spreadsheet.png)

You can also explore the Spreadsheet interactively using the live sample below.
 
{% previewsample "/document-processing/samples/spreadsheet/angular/spreadsheet-cs1" %}

> [View Sample in GitHub](https://github.com/SyncfusionExamples/getting-started-with-the-angular-spreadsheet-component).

## Video tutorial

To get started quickly with Angular Spreadsheet, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=2Ozwe37X-7Q" %}

N> Looking for the full Angular Spreadsheet Editor component overview, features, pricing, and documentation? Visit the [Angular Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/angular-spreadsheet-editor) page.

## See also

* [Data Binding](./data-binding)
* [Open and Save](./open-save)
