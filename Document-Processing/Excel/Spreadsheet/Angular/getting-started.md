---
layout: post
title: Getting started with Angular Spreadsheet component | Syncfusion
description: Check out and learn about getting started with the Syncfusion Angular Spreadsheet component in the Spreadsheet Editor SDK and more details.
platform: document-processing
control: Getting started
documentation: ug
---

# Getting Started with Angular Spreadsheet Component

This section explains how to create a simple Angular application and add the [Angular Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/angular-spreadsheet-editor) component with the minimum required setup.

{% tabcontents %}

{% tabcontent Syncfusion CLI %}

## Prerequisites

- [Node.js 24+](https://nodejs.org/en) (LTS recommended).
- Syncfusion CLI.

## Install the Syncfusion CLI 

Install the Syncfusion CLI globally using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}
npm install -g @syncfusion/syncfusion-cli
{% endhighlight %}
{% endtabs %}

## Create a new Angular application using Syncfusion CLI

You can create a Angular application using the Syncfusion CLI. The CLI provides two ways to create a project:

### Non-interactive mode

Non-interactive mode allows you to create a project directly using a single command with the required command-line arguments.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf new syncfusion-angular-app --framework angular --template spreadsheet-editor
{% endhighlight %}
{% endtabs %}

In this mode, the project configuration is passed directly in the command. The above command creates a Angular application configured with the Syncfusion<sup style="font-size:70%">&reg;</sup> `Spreadsheet Editor` component.

### Interactive mode

Interactive mode guides you through the project creation process with step-by-step prompts.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf
{% endhighlight %}
{% endtabs %}

When you run the `sf` command, the CLI prompts you to select the required project configuration. To create a Angular application with the Syncfusion<sup style="font-size:70%">&reg;</sup> `Spreadsheet Editor` component, select the following options:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ Project name? ... syncfusion-angular-app
√ Choose Framework: » Angular
√ Choose Template: » Spreadsheet Editor
√ Choose Theme: » Material3
√ Choose Style Format: » CSS
√ Would you like to integrate the Syncfusion MCP Server (AI Assistant) into this project? ... no
√ Would you like to install Syncfusion Component Skills for AI-powered development? ... no
√ Install dependencies and start app now? ... no

{% endhighlight %}
{% endtabs %}

The above selections generate a Angular application configured with the Syncfusion<sup style="font-size:70%">&reg;</sup> `Spreadsheet Editor` component. You can choose different values for language, theme, style format, MCP setup, and skills installation based on your project requirements.

The Syncfusion<sup style="font-size:70%">&reg;</sup> CLI creates the project with a predefined template. After the project is generated, you can customize or replace the component code based on your application requirements.

## Run the project

Once the project is created, navigate to the project directory and run the following commands in your terminal.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
cd syncfusion-angular-app
npm install
ng serve
{% endhighlight %}
{% endtabs %}

The output will appear as follows:

![Scheduler Component](images/syncfusion-cli.png)

{% endtabcontent %}

{% tabcontent Angular CLI %}

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

The [Angular Spreadsheet Editor](https://www.npmjs.com/package/@syncfusion/ej2-angular-spreadsheet) package uses the Ivy-based Angular library distribution [format](https://angular.dev/tools/libraries/angular-package-format) and is compatible with `Angular 12` and above. Use the following command to install the package:

```
npm install @syncfusion/ej2-angular-spreadsheet
```

For `Angular versions below 12`, use the legacy `ngcc` package instead:

```
npm install @syncfusion/ej2-angular-spreadsheet@ngcc
```

## Register a Syncfusion License Key

Before initializing the Syncfusion Angular Spreadsheet component, generate a Syncfusion license key and register it in the application.

- [Generate a Syncfusion License Key](https://help.syncfusion.com/document-processing/licensing/how-to-generate)
- [Register a Syncfusion License Key in an Angular Application](https://help.syncfusion.com/document-processing/licensing/how-to-register-in-an-application#angular)

## Add CSS references

Add the following Spreadsheet and dependent component styles to `src/styles.css` file. Replace the existing content with the theme import code below.

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

> **Note:** This example uses the `Tailwind3` theme. To use a different built-in theme, replace the `tailwind3.css` references with the corresponding theme stylesheets. Refer to the [Themes documentation](https://ej2.syncfusion.com/angular/documentation/appearance/overview) for information about the available themes and the different ways to include theme styles in an Angular application.

## Add the Syncfusion® Angular Spreadsheet component

Import and render the `Spreadsheet` in `src/app/app.ts`. Replace the existing content with the following code.

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

> **Note:** The [`openUrl`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#openurl) and [`saveUrl`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#saveurl) endpoints used in this example are provided only for demonstration purposes. For development and production use, we strongly recommend configuring your own local or hosted web service for the Open and Save actions instead of relying on the online demo service. For more information, refer to the [`Host Spreadsheet Open and Save Services`](https://www.syncfusion.com/blogs/post/host-spreadsheet-open-and-save-services).

## Run the application

Run the following command to start the development server:

```
ng serve
```

After the application starts, open the localhost URL shown in the terminal to view the Angular Spreadsheet Editor in the browser. The output will appear as follows:
![Angular Spreadsheet Editor](./images/spreadsheet.png)

{% endtabcontent %}

{% endtabcontents %}

You can also explore the Spreadsheet interactively using the live sample below.
 
{% previewsample "/document-processing/samples/spreadsheet/angular/spreadsheet-cs1" %}

> [View Sample in GitHub](https://github.com/SyncfusionExamples/getting-started-with-the-angular-spreadsheet-component).

## Video tutorial

To get started quickly with Angular Spreadsheet, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=2Ozwe37X-7Q" %}


## See also

* [Open and Save](./open-save)
* [Data Binding](./data-binding)
