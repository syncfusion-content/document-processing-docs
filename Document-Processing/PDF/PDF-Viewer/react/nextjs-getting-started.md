---
layout: post
title: React getting started with Next.js | Syncfusion
description: Check out and learn here all about how to use the Syncfusion React UI components in the Next.js project.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Creating a Next.js application using Syncfusion<sup style="font-size:70%">&reg;</sup> React components

This guide shows how to set up a Next.js application and integrate the Syncfusion<sup style="font-size:70%">&reg;</sup> React PDF Viewer component.

## What is Next.js?

[Next.js](https://nextjs.org/) is a React framework that makes it easy to build fast, SEO-friendly, and user-friendly web applications. It provides features such as server-side rendering, automatic code splitting, routing, and API routes, making it an excellent choice for building modern web applications.

## Prerequisites

Before getting started with the Next.js application, ensure the following prerequisites are met:

* [Node.js 18.17](https://nodejs.org/en) or later.

* The application is compatible with macOS, Windows, and Linux operating systems.

## Create a Next.js application

To create a new `Next.js` application, use one of the commands that are specific to either NPM or Yarn.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx create-next-app@latest

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn create next-app

{% endhighlight %}
{% endtabs %}

Using one of the above commands will prompt for project configuration options.

1. Define the project name. For example: `ej2-nextjs-pdfviewer`.
{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? » ej2-nextjs-pdfviewer

{% endhighlight %}
{% endtabs %}

2. Select the required packages.
{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? ... ej2-nextjs-pdfviewer
√ Would you like to use TypeScript? ... No / `Yes`
√ Would you like to use ESLint? ... No / `Yes`
√ Would you like to use Tailwind CSS? ... `No` / Yes
√ Would you like to use `src/` directory? ... No / `Yes`
√ Would you like to use App Router? (recommended) ... No / `Yes`
√ Would you like to customize the default import alias? ... `No`/ Yes
Creating a new Next.js app in D:\ej2-nextjs-pdfviewer.

{% endhighlight %}
{% endtabs %}

3. After the project is created, navigate to the project directory:
{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-nextjs-pdfviewer

{% endhighlight %}
{% endtabs %}

The application is ready to run with default settings. Next, add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

Syncfusion<sup style="font-size:70%">&reg;</sup> React packages are available on npm. Install the package for the component required by the project.

This guide uses the [React PDF Viewer component](https://www.syncfusion.com/pdf-viewer-sdk) component as an example. Install it with:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

 npm install @syncfusion/ej2-react-pdfviewer --save

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-react-pdfviewer

{% endhighlight %}
{% endtabs %}

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> React components include built-in themes. Import a theme to match the look and feel of the application.

For projects using the App Router, add the imports to `src/app/globals.css`. For projects using the Pages Router, add them to a global stylesheet such as `pages/_app.js` or its CSS import. Remove or consolidate any conflicting styles as needed.

{% tabs %}
{% highlight css tabtitle="globals.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import "../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css";

{% endhighlight %}
{% endtabs %}

N> To learn more about built-in themes and CSS references for individual components, see the [themes](https://ej2.syncfusion.com/react/documentation/appearance/theme/) documentation.

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> React component

Follow these steps to add the React PDF Viewer component to the Next.js project:

1. Define the PDF Viewer component in `src/app/page.tsx`, as shown below:

{% tabs %}
{% highlight ts tabtitle="page.tsx" %}
{% raw %}

'use client'
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';
export function App() {
return (<div>
    <div className='control-section'>
        <PdfViewerComponent
            id="container"
            documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
            serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
            style={{ 'height': '640px' }}>
               {/* Inject the required services */}
               <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                   Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
        </PdfViewerComponent>
    </div>
</div>);
}
export default App;

{% endraw %}
{% endhighlight %}
{% endtabs %}

## Run the application

To run the application, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run dev

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn run dev

{% endhighlight %}
{% endtabs %}

To learn more about the PDF Viewer component, see the [documentation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started#module-injection).

N> [View the Next.js PDF Viewer sample in the GitHub repository]https://github.com/SyncfusionExamples/syncfusion-react-pdfviewer-component-in-nextjs
