---
layout: post
title: Getting started with React PPTX Editor | Syncfusion
description: Learn how to get started with the Syncfusion React PPTX Editor control. Explore setup, features, examples, and customization options.
control: Getting started 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React PPTX Editor

[React PPTX Editor](https://www.syncfusion.com/powerpoint-editor-sdk/react-powerpoint-editor) enables you to view, edit, and print PowerPoint presentations in web applications. This section guides you through the steps to get started and create a PPTX Editor in a React application.

## Prerequisites

* [System requirements for React components](https://ej2.syncfusion.com/react/documentation/system-requirement)
* [Browser Compatibility](https://ej2.syncfusion.com/react/documentation/browser)

## Create a new React application

To set up a React application, run the following commands:

{% tabs %}
{% highlight bash tabtitle="TypeScript" %}

npm create vite@latest pptxeditor-app -- --template react-ts
cd pptxeditor-app

{% endhighlight %}

{% highlight bash tabtitle="JavaScript" %}

npm create vite@latest pptxeditor-app -- --template react
cd pptxeditor-app

{% endhighlight %}
{% endtabs %}

## Install the React PPTX Editor npm package

The PPTX Editor package is available in the public npm registry and can be installed directly from [`npmjs.com`](https://www.npmjs.com/package/@syncfusion/ej2-react-pptxeditor).

To install the PPTX Editor component, use the following command:

```bash
npm install @syncfusion/ej2-react-pptxeditor --save
```

## Register a Syncfusion License Key

Before initializing the React PPTX Editor control, generate a Syncfusion license key and register it in your application.

- [Generate a Syncfusion License Key](https://help.syncfusion.com/document-processing/licensing/how-to-generate)
- [Register a Syncfusion License Key in React](https://ej2.syncfusion.com/react/documentation/licensing/license-key-registration)

## Import the required CSS styles

Themes for PPTX Editor can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme).

This guide uses the `Tailwind 3` theme as an example, sourced from the theme package. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

By default, Vite projects include a `src/index.css` file with default styles. These default styles may conflict with Syncfusion component styles. Clear all content from the `src/index.css` file to prevent style conflicts.

The required styles for the PPTX Editor are imported in the **src/index.css** file:

{% tabs %}
{% highlight css tabtitle="index.css" %}

@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pptx-editor/index.css";

{% endhighlight %}
{% endtabs %}

## Initialize the PPTX Editor

Add the PPTX Editor component to your application. Add the following code to initialize the component:

{% tabs %}
{% highlight ts tabtitle="TypeScript (App.tsx)" %}

import * as React from 'react';
import {
  PptxEditorComponent,
  Toolbar,
  ThumbnailView,
  Magnification,
  Navigation,
  Print,
  SlideShow
} from '@syncfusion/ej2-react-pptxeditor';

PptxEditorComponent.Inject(Toolbar, ThumbnailView, Magnification, Navigation, Print, SlideShow);

function App() {
  return (
    <PptxEditorComponent
      id="container"
      height="590px"
      // Open a presentation from a URL
      // documentPath="/sample.pptx"
    />
  );
}

export default App;

{% endhighlight %}

{% highlight js tabtitle="JavaScript (App.jsx)" %}

import {
  PptxEditorComponent,
  Toolbar,
  ThumbnailView,
  Magnification,
  Navigation,
  Print,
  SlideShow
} from '@syncfusion/ej2-react-pptxeditor';

PptxEditorComponent.Inject(Toolbar, ThumbnailView, Magnification, Navigation, Print, SlideShow);

function App() {
  return (
    <PptxEditorComponent
      id="container"
      height="590px"
      // Open a presentation from a URL
      // documentPath="/sample.pptx"
    />
  );
}

export default App;

{% endhighlight %}
{% endtabs %}

## Run the application

Run the application using the following command:

```bash
npm run dev
```

After the application starts, open the localhost URL shown in the terminal. The React PPTX Editor is rendered in the browser with a toolbar, thumbnail pane, and a slide area, as shown below.

![Output of React PPTX Editor](./images/react_getting_started.png)