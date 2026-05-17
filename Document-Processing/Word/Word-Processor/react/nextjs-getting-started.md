---
layout: post
title: React Document Editor getting started with Next.js | Syncfusion
description: Integrate the Syncfusion React Document Editor into a Next.js application with step‑by‑step setup and usage.
control: Next.js
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Document Editor in Next.js

Syncfusion<sup style="font-size:70%">&reg;</sup> DOCX Editor (Document Editor) enables you to create, edit, view, and print Word documents in web applications. This section guides you through the steps to get started and create a DOCX Editor in a Next.js application. 

## Steps to create React DOCX Editor in Next.js

### Prerequisites

Before getting started with the Next.js application, ensure the following prerequisites are met:

* [Node.js 16.8](https://nodejs.org/en) or later.

* The application is compatible with macOS, Windows, and Linux operating systems.

### Create a Next.js application

To create a new `Next.js` application, use one of the commands that are specific to either NPM or Yarn.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx create-next-app@latest ej2-nextjs-documenteditor
cd ej2-nextjs-documenteditor

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn create next-app ej2-nextjs-documenteditor
cd ej2-nextjs-documenteditor

{% endhighlight %}
{% endtabs %}

Select the required options when prompted:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ Would you like to use TypeScript? ... No / `Yes`
√ Would you like to use ESLint? ... No / `Yes`
√ Would you like to use Tailwind CSS? ... `No` / Yes
√ Would you like to use `src/` directory? ... No / `Yes`
√ Would you like to use App Router? (recommended) ... No / `Yes`
√ Would you like to customize the default import alias? ... `No` / Yes
Creating a new Next.js app in D:\ej2-nextjs-documenteditor.

{% endhighlight %}
{% endtabs %}

### Install Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

The Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor package is available in the public npm registry and can be installed directly from [`npmjs.com`](https://www.npmjs.com/package/@syncfusion/ej2-react-documenteditor).

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-react-documenteditor --save

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-react-documenteditor

{% endhighlight %}
{% endtabs %}

### Add CSS reference

Add the Document Editor component and its dependent component styles available in the `node_modules/@syncfusion` package folder.

Import the `Material` theme into the **src/app/globals.css** file and removed the existing styles in that file, as shown below:

{% tabs %}
{% highlight css tabtitle="globals.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-react-documenteditor/styles/material.css';

{% endhighlight %}
{% endtabs %}

### Add Syncfusion<sup style="font-size:70%">&reg;</sup> React Document Editor component


Add the Document Editor component to your application. In the `src/app/page.tsx` file, add the following code to initialize the component:

{% tabs %}
{% highlight ts tabtitle="page.tsx" %}

'use client'
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);

export default function Home() {
  return (
      <h2>Syncfusion React Document Editor Component</h2>

      <DocumentEditorContainerComponent
        id="container"
        height="590px"
        serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
        enableToolbar={true}
      />
  );
}

{% endhighlight %}
{% endtabs %}

> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).

### Run the application

To run the application, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run dev

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn run dev

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/ej2-nextjs-documenteditor).
