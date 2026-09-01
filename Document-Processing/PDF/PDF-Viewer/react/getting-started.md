---
layout: post
title: Getting Started with React PDF Viewer | Syncfusion
description: Learn how to get started with the Syncfusion React PDF Viewer control. Explore setup, features, examples, and customization options.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React PDF Viewer

[Syncfusion® React PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk/react-pdf-viewer) enables you to view, annotate, and interact with PDF documents in web applications. This section guides you through the steps to get started and create a PDF Viewer in a React application.

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

## Set up the Vite project using Syncfusion CLI

You can create a React Vite application using the Syncfusion CLI. The CLI provides two ways to create a project:

### Non-interactive mode

Non-interactive mode allows you to create a project directly using a single command with the required command-line arguments.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

sf new syncfusion-react-app --framework react --template pdf-viewer --theme tailwind3

{% endhighlight %}
{% endtabs %}

In this mode, the project configuration is passed directly in the command. The above command creates a React Vite application configured with the Syncfusion<sup style="font-size:70%">&reg;</sup> `PDF Viewer` component.

### Interactive mode

Interactive mode guides you through the project creation process with step-by-step prompts.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

sf

{% endhighlight %}
{% endtabs %}

When you run the `sf` command, the CLI prompts you to select the required project configuration. To create a React Vite application with the Syncfusion<sup style="font-size:70%">&reg;</sup> `PDF Viewer` component, select the following options:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ Project name? ... syncfusion-react-app
√ Choose Framework: » React
√ Choose Build Tool: » Vite
√ Choose Language: » JavaScript
√ Choose Template: » PDF Viewer
√ Choose Theme: » Tailwind3
√ Choose Style Format: » CSS
√ Would you like to integrate the Syncfusion MCP Server (AI Assistant) into this project? ... no
√ Would you like to install Syncfusion Component Skills for AI-powered development? ... no
√ Install dependencies and start app now? ... no

{% endhighlight %}
{% endtabs %}

The above selections generate a React Vite application configured with the Syncfusion<sup style="font-size:70%">&reg;</sup> `PDF Viewer` component. You can choose different values for language, theme, style format, MCP setup, and skills installation based on your project requirements.

The Syncfusion<sup style="font-size:70%">&reg;</sup> CLI creates the project with a predefined template. After the project is generated, you can customize or replace the component code based on your application requirements.

## Run the project

Once the project is created, navigate to the project directory and run the following commands in your terminal.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd syncfusion-react-app
npm install
npm run dev

{% endhighlight %}
{% endtabs %}

The output will appear as follows:

![Output of React PDF Viewer Using Syncfusion CLI](./images/react-cli-pdfviewer.png)

You can also explore the PDF Viewer interactively using the live sample below.

{% previewsample "/document-processing/code-snippet/pdfviewer/react/base-cs1-standalone" %}

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/Getting%20Started).

{% endtabcontent %}

{% tabcontent Vite CLI %}

## Prerequisites

* [System requirements for React components](https://ej2.syncfusion.com/react/documentation/system-requirement)
* [Browser Compatibility](https://ej2.syncfusion.com/react/documentation/browser)

## Create a new React application

To set up a React application, run the following commands:

{% tabs %}
{% highlight bash tabtitle="TypeScript" %}

npm create vite@latest pdf-viewer-app -- --template react-ts
cd pdf-viewer-app

{% endhighlight %}

{% highlight bash tabtitle="JavaScript" %}

npm create vite@latest pdf-viewer-app -- --template react
cd pdf-viewer-app

{% endhighlight %}
{% endtabs %}

## Install the Syncfusion<sup style="font-size:70%">&reg;</sup> React PDF Viewer package

Install the [React PDF Viewer](https://www.npmjs.com/package/@syncfusion/ej2-react-pdfviewer) package from npm using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-react-pdfviewer --save

{% endhighlight %}
{% endtabs %}

## Import the required CSS styles

Themes for PDF Viewer can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme).

This guide uses the `Tailwind 3` theme as an example, sourced from the theme package. In this package, each component includes an `index.css` file that automatically loads all the required dependency styles. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% endtabs %}

By default, Vite projects include a `src/index.css` file with default styles. These default styles may conflict with Syncfusion component styles. Clear all content from the `src/index.css` file to prevent style conflicts.

The required styles for the PDF Viewer are imported in the **src/index.css** file:

{% tabs %}
{% highlight css tabtitle="index.css" %}

@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pdfviewer/index.css';

{% endhighlight %}
{% endtabs %}

N> The `index.css` file automatically includes all required dependent component styles for the PDF Viewer. You do not need to import individual dependency styles such as Base, Buttons, Dropdowns, Inputs, Navigations, Popups, and SplitButtons separately.

## Initialize the PDF Viewer

Add the **Syncfusion® React PDF Viewer** component to your `src/App.jsx` or `src/App.tsx` file.

The key props and services used in the following samples are:

* `documentPath`: URL or Base64 string of the PDF to load.
* `resourceUrl`: Path to the PDFium (`pdfium.js` / `pdfium.wasm`) assets required for rendering.
* `Inject services={[...]}`: Registers the optional modules (toolbar, navigation, annotations, search, form fields, etc.) you want to enable.

{% tabs %}
{% highlight js tabtitle="JSX" %}
{% raw %}

import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner,
         PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

export default function App() {
    return (
      <PdfViewerComponent id="container"
        // Specifies the URL (for example, a file from the public folder) or a Base64-encoded PDF.
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        // Specifies the path to the PDFium resource files required for the PDF Viewer to function.
        resourceUrl="https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2-pdfviewer-lib">

         <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
                             BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
                             FormFields, FormDesigner, PageOrganizer ]}/>
      </PdfViewerComponent>
    );
}

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="TSX" %}
{% raw %}

import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner,
         PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';
 
export default function App() {
  return (
    <PdfViewerComponent id="container"
      // Specifies the URL (for example, a file from the public folder) or a Base64-encoded PDF.
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      // Specifies the path to the PDFium resource files required for the PDF Viewer to function.
      resourceUrl="https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2-pdfviewer-lib">
      <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
                          BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
                          FormFields, FormDesigner, PageOrganizer ]}/>
    </PdfViewerComponent>
  );
}

{% endraw %}
{% endhighlight %}
{% endtabs %}

N> To load PDF documents and resources from your local application instead of a CDN, refer to [Load PDF Viewer with Local Resources](how-to/load-pdf-viewer-with-local-resources).

## Run the application

Run the application using the following command:

{% tabs %}
{% highlight bash tabtitle="Vite CLI" %}

npm run dev

{% endhighlight %}
{% endtabs %}

After the application starts, open the localhost URL shown in the terminal to view the React PDF Viewer in the browser. The output will appear as follows:

![React PDF Viewer Control](images/pdfviewer-control.png)

You can also explore the PDF Viewer interactively using the live sample below.

{% previewsample "/document-processing/code-snippet/pdfviewer/react/base-cs1-standalone" %}

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/Getting%20Started).

## Video tutorial

To get started quickly with React PDF Viewer, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=VJibluQFWns" %}

{% endtabcontent %}

{% endtabcontents %}

## See also

- [Getting started with Server-Backed React PDF Viewer](./getting-started-with-server-backed)
- [Open PDF Files](./open-pdf-files)
- [Save PDF Files](./save-pdf-files)
