---
layout: post
title: Getting started with React DOCX editor component | Syncfusion
description: Checkout and learn about Getting started with React Document editor component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React DOCX editor component

This section explains the steps to create a DOCX Editor within your application and demonstrates the basic usage of the Document editor component.

To get started quickly with Document Editor component, you can check the video below.

{% youtube "https://www.youtube.com/watch?v=tgJgvbnxdBA" %}

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Document editor](https://ej2.syncfusion.com/react/documentation/system-requirement)

### Create a new React application

{% tabcontents %}

{% tabcontent TypeScript %}


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


## Install the Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor packages

The Syncfusion<sup style="font-size:70%">&reg;</sup> DOCX Editor package is available in the public npm registry and can be installed directly from [`npmjs.com`](https://www.npmjs.com/~syncfusionorg).


To install the Document editor component, use the following command:

```bash
npm install @syncfusion/ej2-react-documenteditor --save
```

## Adding CSS reference

Add the Document editor component and its dependent component styles available in the `node_modules/@syncfusion` package folder. Reference these styles in the `src/App.css` file:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-ribbon/styles/material.css";
@import "../node_modules/@syncfusion/ej2-documenteditor/styles/material.css";
```

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor component

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

#### Run the  application

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

{% endtabcontent %}

{% tabcontent JavaScript %}


To create a new React application, run the following command:

```bash
npm create vite@latest my-app
```

To set up a React application in a Javascript environment, run the following commands:

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```


## Install the Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor packages

The Syncfusion<sup style="font-size:70%">&reg;</sup> DOCX Editor package is available in the public npm registry and can be installed directly from [`npmjs.com`](https://www.npmjs.com/~syncfusionorg).


To install the Document editor component, use the following command:

```bash
npm install @syncfusion/ej2-react-documenteditor --save
```

## Adding CSS reference

Add the Document editor component and its dependent component styles available in the `node_modules/@syncfusion` package folder. Reference these styles in the `src/App.css` file:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-ribbon/styles/material.css";
@import "../node_modules/@syncfusion/ej2-documenteditor/styles/material.css";
```

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor component

Add the DocumentEditorContainer component to your application. In the `src/App.tsx` file, add the following code to initialize the component:

{% raw %}

```js
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

#### Run the  application

Run the application using the following command:

```bash
npm run dev
```
Open http://localhost:3000 in your browser to see the DocumentEditorContainer output displayed as shown below.

The DocumentEditorContainer output will be displayed as follows:

{% tabs %}
{% highlight ts tabtitle="app.jsx" %}
{% include code-snippet/document-editor/react/base-cs3/app/index.jsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/react/base-cs3" %}

{% endtabcontent %}

{% endtabcontents %}


