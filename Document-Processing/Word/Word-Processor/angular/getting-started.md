---
layout: post
title: Getting Started with Angular DOCX Editor | Syncfusion
description: Learn how to create a DOCX Editor in an Angular application using the Syncfusion® Document Editor control to create, edit, and view Word documents.
platform: document-processing
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular DOCX Editor

Syncfusion® DOCX Editor (Document Editor) enables you to create, edit, view, and print Word documents in web applications. This section guides you through the steps to get started and create a DOCX Editor in an Angular application. 

## Steps to create an Angular DOCX Editor

### Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Document Editor](https://ej2.syncfusion.com/angular/documentation/system-requirement)

### Setup Angular environment

You can use [Angular CLI](https://github.com/angular/angular-cli) to set up your Angular applications. To install Angular CLI, use the following command:

```bash
npm install -g @angular/cli
```

### Create an Angular application

Start a new Angular application using the Angular CLI command below:

```bash
ng new my-app
```

This command will prompt you to configure settings like enabling Angular routing and choosing a stylesheet format.

![Initial_setup](images/Initial-setup.png)

In this guide, CSS is selected as the stylesheet format.

During project setup, when prompted for the Server-side rendering (SSR) option, choose the appropriate configuration.

![Server Side Rendering setup](images/Server-Side-Rendering-setup.png)

Select the required AI tool or 'none' if you do not need any AI tool.

![AI tools](images/AI-tools.png)

Next, navigate to the created project folder:

```bash
cd my-app
```

### Install the Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor packages

The Syncfusion<sup style="font-size:70%">&reg;</sup> DOCX Editor package is available in the public npm registry and can be installed directly from [`npmjs.com`](https://www.npmjs.com/~syncfusionorg).

To install the Document Editor component, use the following command:

```bash
npm install @syncfusion/ej2-angular-documenteditor --save
```

### Add CSS reference

The following CSS files are available in the `node_modules/@syncfusion` package folder. Reference these styles in the `src/styles.css` file using the following code:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-documenteditor/styles/material.css';
```

### Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor component

Modify the template in the `src/app/app.ts` file to render the Document Editor component. Add the Angular Document Editor by using the <ejs-documenteditorcontainer> selector in the template section of the app.ts file.

```typescript
import { Component } from '@angular/core';
import {
  DocumentEditorContainerModule,
  ToolbarService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DocumentEditorContainerModule],
  providers: [ToolbarService],
  template: `
    <!-- Use the following service URL only for demo purposes -->
    <ejs-documenteditorcontainer
      serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
      height="600px"
      style="display: block"
      [enableToolbar]="true">
    </ejs-documenteditorcontainer>
  `
})
export class App {}
```

> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).

### Run the application

Run the application using the following command:

```bash
ng serve --open
```
Open http://localhost:4200 in your browser to run the application.

The Document Editor is displayed as shown below.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/document-editor/angular/document-editor-container-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/angular/document-editor-container-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/document-editor/angular/document-editor-container-cs2" %}

## Video tutorial

To get started quickly with the Document Editor component using CLI, you can check the video below.

{% youtube "https://www.youtube.com/watch?v=UHdjjR_BbQY" %}

## Server-side dependencies

The Document Editor component requires server-side interactions for the following operations:

* Open file formats other than SFDT
* Paste with formatting
* Restrict editing
* Spell check
* Save as file formats other than SFDT and DOCX

>Note: If you don't require the above functionalities, you can deploy the component as a pure client-side solution without any server-side interactions.

For detailed information about server-side dependencies, refer to the [Web Services Overview](./web-services-overview) page.
