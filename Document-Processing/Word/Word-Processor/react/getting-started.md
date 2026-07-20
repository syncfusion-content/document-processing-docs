---
layout: post
title: Getting Started with React DOCX Editor component | Syncfusion
description: Learn how to create a DOCX Editor using React with the Syncfusion® Document Editor control to create, edit, and view Word documents.
control: Getting Started
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React DOCX Editor

[React DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) enables you to create, edit, view, and print Word documents in web applications. This section guides you through the steps to get started and create a DOCX Editor using React.

## Steps to create a React DOCX Editor

Follow these steps to set up and run the React Document Editor. Click any step to jump directly to that section:

* [Prerequisites](#prerequisites)
* [Create a new React application](#create-a-new-react-application)
* [Install the Document Editor packages](#install-the-document-editor-packages)
* [Register the license key](#register-the-license-key)
* [Add CSS reference](#add-css-reference)
* [Add the Document Editor component](#add-the-document-editor-component)
* [Run the application](#run-the-application)

{% tabcontents %}

{% tabcontent TypeScript %}

### Prerequisites

Before getting started with the React application, ensure the following prerequisites are met:

* [Vite 5.x](https://vitejs.dev/) or later (Vite is used as the build tool when scaffolding the application).
* See the [System requirements for Document Editor](https://ej2.syncfusion.com/react/documentation/system-requirement) for the supported Node.js, React, browser, and operating system versions.

### Create a new React application

To set up a React application in a TypeScript environment, run the following commands:

```bash
npm create vite@latest documenteditor-app -- --template react-ts
cd documenteditor-app
```

**Launch and Test the Application** (recommended) before adding Syncfusion packages. Install dependencies and start the dev server to confirm the project runs correctly:

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (default: `http://localhost:5173/`) — you should see the default Vite + React welcome page. Stop the dev server with `Ctrl+C` before proceeding to the next step.


### Install the Document Editor packages

The Document Editor package is published to npm and can be installed from [`npmjs.com`](https://www.npmjs.com/package/@syncfusion/ej2-react-documenteditor).


To install the Document Editor component, use the following command:

```bash
npm install @syncfusion/ej2-react-documenteditor
```

For the full compatibility matrix, see the [React supported versions](https://ej2.syncfusion.com/react/documentation/system-requirement#react-supported-versions) section of the System Requirements page.

### Register the license key

Syncfusion requires a license key to be registered for production use. Generate your license key from the [Syncfusion License Dashboard](https://www.syncfusion.com/account/downloads) and register it in your app's entry file (`src/App.tsx`).

Add the following line **before** any Syncfusion component is rendered:

{% tabs %}
{% highlight js tabtitle="App.tsx" %}

import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('YOUR_LICENSE_KEY');

{% endhighlight %}
{% endtabs %}

### Add CSS reference

Add the Document Editor component and its dependent component styles available in the `node_modules/@syncfusion` package folder. Reference these styles in the `src/index.css` file.

{% tabs %}
{% highlight css tabtitle="index.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-react-documenteditor/styles/tailwind3.css';

{% endhighlight %}
{% endtabs %}

Refer to the [themes topic](https://ej2.syncfusion.com/react/documentation/appearance/theme) to learn about built-in themes and the different ways to refer to them in a React project.

Vite supports `@import` of `node_modules` paths natively, so no additional CSS preprocessor configuration is required. Make sure that `src/index.css` is imported from your entry file `src/main.tsx` so the component styles are included in the build output. The default Vite template already includes this import.

**CSS load order matters:** The `@import` statements are processed in the order they appear, and later styles take precedence over earlier ones when specificity is equal. The component import (`@syncfusion/ej2-react-documenteditor`) is listed last so that any of your own custom styles added below it will override the default theme. If you add your own styles, place them **after** these imports to ensure they apply correctly.

### Add the Document Editor component

Add the Document Editor component to your application. In the `src/App.tsx` file, add the following code to initialize the component:

**File roles:**
`src/main.tsx` is the application entry point (boots React and imports `index.css`);
`src/index.css` holds the global styles including the Syncfusion `@import`s from the previous step;
`src/App.tsx` is the root component where the Document Editor is rendered.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}

import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);

function App() {
  return (
    <div>
        <DocumentEditorContainerComponent 
            id="container" 
            height="590px" 
            // Use the following service URL only for demo purposes
            serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" 
            enableToolbar={true}
        />
      </div>
  );
}

export default App;

{% endhighlight %}
{% endtabs %}

The following props are configured on `DocumentEditorContainerComponent` in the example above:

| Property | Type | Description |
| --- | --- | --- |
| `id` | `string` | Sets the unique ID of the container element. |
| `height` | `string \| number` | Sets the height of the editor container (e.g., `"590px"`). |
| `serviceUrl` | `string` | URL of the server-side web service required for opening/saving non-SFDT formats, paste with formatting, restrict editing, and spell check. |
| `enableToolbar` | `boolean` |  When `true`, shows the built-in toolbar. Set to `false` to hide it. |

**Toolbar registration:** The `Inject(Toolbar)` call registers the toolbar service with the editor container so the built-in formatting toolbar is rendered.

The hosted Web API URL shown above is for demo and evaluation purposes only. For production, or if the demo service is unavailable, deploy your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) and update the `serviceUrl` to point to it.

### Run the application

Run the application using the following command:

```bash
npm run dev
```

To build the application for production, run:

```bash
npm run build
```

This generates an optimized production build in the `dist/` folder. To preview the production build locally, run `npm run preview`.

{% endtabcontent %}

{% tabcontent JavaScript %}


### Prerequisites

Before getting started with the React application, ensure the following prerequisites are met:

* [Vite 5.x](https://vitejs.dev/) or later (Vite is used as the build tool when scaffolding the application).
* See the [System requirements for Document Editor](https://ej2.syncfusion.com/react/documentation/system-requirement) for the supported Node.js, React, browser, and operating system versions.

### Create a new React application

To set up a React application in a JavaScript environment, run the following commands:

```bash
npm create vite@latest documenteditor-app -- --template react
cd documenteditor-app
```

**Launch and Test the Application** (recommended) before adding Syncfusion packages. Install dependencies and start the dev server to confirm the project runs correctly:

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (default: `http://localhost:5173/`) — you should see the default Vite + React welcome page. Stop the dev server with `Ctrl+C` before proceeding to the next step.

### Install the Document Editor packages

The Document Editor package is published to npm and can be installed from [`npmjs.com`](https://www.npmjs.com/package/@syncfusion/ej2-react-documenteditor).


To install the Document Editor component, use the following command:

```bash
npm install @syncfusion/ej2-react-documenteditor
```

For the full compatibility matrix, see the [React supported versions](https://ej2.syncfusion.com/react/documentation/system-requirement#react-supported-versions) section of the System Requirements page.

### Register the license key

Syncfusion requires a license key to be registered for production use. Generate your license key from the [Syncfusion License Dashboard](https://www.syncfusion.com/account/downloads) and register it in your app's entry file (`src/App.jsx`).

Add the following line **before** any Syncfusion component is rendered:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('YOUR_LICENSE_KEY');

{% endhighlight %}
{% endtabs %}


### Add CSS referenc

Add the Document Editor component and its dependent component styles available in the `node_modules/@syncfusion` package folder. Reference these styles in the `src/index.css` file:

{% tabs %}
{% highlight css tabtitle="index.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-react-documenteditor/styles/tailwind3.css';

{% endhighlight %}
{% endtabs %}

N> Refer to [themes topic](https://ej2.syncfusion.com/react/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in a react project.

Vite supports `@import` of `node_modules` paths natively, so no additional CSS preprocessor configuration is required. Make sure that `src/index.css` is imported from your entry file `src/main.jsx` so the component styles are included in the build output. The default Vite template already includes this import.

**CSS load order matters:** The `@import` statements are processed in the order they appear, and later styles take precedence over earlier ones when specificity is equal. The component import (`@syncfusion/ej2-react-documenteditor`) is listed last so that any of your own custom styles added below it will override the default theme. If you add your own styles, place them **after** these imports to ensure they apply correctly.

### Add the Document Editor component

Add the Document Editor component to your application. In the `src/App.jsx` file, add the following code to initialize the component:

**File roles:** `src/main.jsx` is the application entry point (boots React and imports `index.css`); `src/index.css` holds the global styles including the Syncfusion `@import`s from the previous step; `src/App.jsx` is the root component where the Document Editor is rendered.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);

function App() {
    return (
      <div>
        <DocumentEditorContainerComponent 
            id="container" 
            height="590px" 
            // Use the following service URL only for demo purposes
            serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" 
            enableToolbar={true}
        />
      </div>
    );
}

export default App;

{% endhighlight %}
{% endtabs %}

The following props are configured on `DocumentEditorContainerComponent` in the example above:

| Property | Type | Description |
| --- | --- | --- |
| `id` | `string` | Sets the unique ID of the container element. |
| `height` | `string \| number` | Sets the height of the editor container (e.g., `"590px"`). |
| `serviceUrl` | `string` | URL of the server-side web service required for opening/saving non-SFDT formats, paste with formatting, restrict editing, and spell check. |
| `enableToolbar` | `boolean` | When `true`, shows the built-in toolbar. Set to `false` to hide it. |

**Toolbar registration:** The `Inject(Toolbar)` call registers the toolbar service with the editor container so the built-in formatting toolbar is rendered.

N> The hosted Web API URL is for demo and evaluation purposes only. For production, or if the demo service is unavailable, deploy your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) and update the `serviceUrl` to point to it.

### Run the application

Run the application using the following command:

```bash
npm run dev
```

To build the application for production, run:

```bash
npm run build
```

This generates an optimized production build in the `dist/` folder. To preview the production build locally, run `npm run preview`.

{% endtabcontent %}

{% endtabcontents %}

After the application starts, open the localhost URL shown in the terminal (default: `http://localhost:5173/`, or the next available port if `5173` is in use) in the browser. The React Document Editor is rendered in the browser with a toolbar and an editable document area, as shown below.

![React Document Editor with toolbar and an empty editable area](./images/react_getting_started.png)

*React Document Editor with the built-in toolbar and an empty editing area, rendered in the browser after `npm run dev`.*

You can also explore the Document Editor interactively using the live sample below.
        
{% previewsample "/document-processing/code-snippet/document-editor/react/base-cs3" %}

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/React-DOCX-Editor-Examples/tree/master/getting-started).

## Online Demo

Explore how to create, edit, and print Word documents using the React Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/react/#/tailwind3/document-editor/default).

## Video tutorial

To get started quickly with Document Editor component, you can check the video below.

{% youtube "https://www.youtube.com/watch?v=tgJgvbnxdBA" %}

## Server-side dependencies

The Document Editor requires server-side interactions for:

* Open file formats other than SFDT
* Paste with formatting
* Restrict editing
* Spell check
* Save as file formats other than SFDT and DOCX

N> If you don't require the above functionalities, you can deploy the component as a pure client-side solution without any server-side interactions.

For detailed information about server-side dependencies, refer to the [Web Services Overview](./web-services-overview) page.

N> Looking for the full React DOCX Editor component overview, features, pricing, and documentation? Visit the [React DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) page.

## Troubleshooting

If you experience issues while loading, opening, or saving documents, ensure that the Document Editor service is properly configured and reachable from your application. For more details refer this [troubleshooting page](https://help.syncfusion.com/document-processing/word/word-processor/react/troubleshooting/document-loading-issue-with-404-error)

## See also

- [Open a document](./import)
- [Save a document](./export)
- [Collaborative editing](./collaborative-editing/overview)
- [Ribbon customization](./ribbon)
- [Features overview](./feature-module)