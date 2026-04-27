---
layout: post
title: Getting started with React DOCX Editor component | Syncfusion
description: Learn how to create a DOCX Editor in a React application using the Syncfusion® Document Editor control to create, edit, and view Word documents.
control: Getting started 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React DOCX Editor

Syncfusion® DOCX Editor (Document Editor) enables you to create, edit, view, and print Word documents in web applications. This section guides you through the steps to get started and create a DOCX Editor in a React application. 

## Steps to create React DOCX Editor

### Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor](https://ej2.syncfusion.com/react/documentation/system-requirement)

### Create a new React application

To create a new React application, run the following command:

```bash
npm create vite@latest my-app
```

To set up a React application in a TypeScript environment, run the following commands:

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```

### Install the Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor packages

The Syncfusion<sup style="font-size:70%">&reg;</sup> DOCX Editor package is available in the public npm registry and can be installed directly from [`npmjs.com`](https://www.npmjs.com/~syncfusionorg).


To install the Document Editor component, use the following command:

```bash
npm install @syncfusion/ej2-react-documenteditor --save
```

### Add CSS reference

Add the Document Editor component and its dependent component styles available in the `node_modules/@syncfusion` package folder. Reference these styles in the `src/App.css` file:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-documenteditor/styles/material.css";
```

### Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor component

Add the DocumentEditorContainer component to your application. In the `src/App.tsx` file, add the following code to initialize the component:

{% raw %}

```ts
import * as React from 'react';
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);

function App() {
    return (
        <DocumentEditorContainerComponent 
            id="container" 
            height={'590px'} 
            //Use the following service URL only for demo purposes
            serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" 
            enableToolbar={true}
        />
    );
}

export default App;
```

{% endraw %}

> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).

### Run the  application

Run the application using the following command:

```bash
npm run dev
```
Open http://localhost:3000 in your browser to see the DocumentEditorContainer output displayed as shown below.

The DocumentEditorContainer output will be displayed as follows:

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/document-editor/react/base-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/react/base-cs3" %}

## Video tutorial

To get started quickly with Document Editor component, you can check the video below.

{% youtube "https://www.youtube.com/watch?v=tgJgvbnxdBA" %}

## Server-side dependencies

The Document Editor component requires server-side interactions for the following operations:

* Open file formats other than SFDT
* Paste with formatting
* Restrict editing
* Spell check
* Save as file formats other than SFDT and DOCX

>Note: If you don't require the above functionalities, you can deploy the component as a pure client-side solution without any server-side interactions.

For detailed information about server-side dependencies, refer to the [Web Services Overview](./web-services-overview) page.
