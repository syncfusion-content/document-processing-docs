---
layout: post
title: Getting started with React DOCX Editor in Next.js | Syncfusion
description: Learn how to create a DOCX Editor in a Next.js application using the Syncfusion® DOCX Editor control to create, edit, and view Word documents.
control: Next.js
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React DOCX Editor in Next.js

This section provides a step-by-step guide for setting up a Next.js application and integrating the [React DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) component.

## Prerequisites

* [Node.js 18.17.0](https://nodejs.org/en) or later (LTS recommended).
* [System requirements](https://ej2.syncfusion.com/react/documentation/system-requirement)
* [Browser Compatibility](https://ej2.syncfusion.com/react/documentation/browser)

## Create a Next.js application

**Step 1:** To create a new `Next.js` application, use one of the commands specific to NPM or Yarn.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx create-next-app@latest

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn create next-app

{% endhighlight %}
{% endtabs %}

Using one of the above commands will prompt you to configure additional settings for the project:

**Step 2:** Specify the name of the project directly.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? » ej2-nextjs-documenteditor

{% endhighlight %}
{% endtabs %}

**Step 3:** Choose the following configuration options below.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

? Would you like to use the recommended Next.js defaults?
>   Yes, use recommended defaults - TypeScript, ESLint, Tailwind CSS, App Router
    No, reuse previous settings
    No, customize settings

{% endhighlight %}
{% endtabs %}

**Step 4:** Once the above steps are complete, navigate to the project directory using the following command:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-nextjs-documenteditor

{% endhighlight %}
{% endtabs %}

The application is ready to run with default settings. The next steps will add the Syncfusion DOCX Editor component to the project.

## Install DOCX Editor packages

The DOCX Editor package is available at [npmjs.com](https://www.npmjs.com/package/@syncfusion/ej2-react-documenteditor).

To install the DOCX Editor component, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-react-documenteditor --save

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-react-documenteditor

{% endhighlight %}
{% endtabs %}

## Register a Syncfusion License Key

Before initializing the React DOCX Editor control in Next.js, generate a Syncfusion license key and register it in your application.

- [Generate a Syncfusion License Key](https://help.syncfusion.com/document-processing/licensing/how-to-generate)
- [Register a Syncfusion License Key](https://ej2.syncfusion.com/react/documentation/licensing/license-key-registration)

## Import the required CSS styles

Add the DOCX Editor component and its dependent component styles available in the `node_modules/@syncfusion` package folder. Reference these styles in the `app/globals.css` file.

{% tabs %}
{% highlight css tabtitle="globals.css" %}

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

N> To learn more about built-in themes and CSS reference for individual components, refer to the [themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) section.


## Initialize the DOCX Editor

Add the DOCX Editor component to your application. In the `app/page.tsx` file, add the following code to initialize the component:

{% tabs %}
{% highlight ts tabtitle="page.tsx" %}

'use client'
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);

export default function Home() {
  return (
      <DocumentEditorContainerComponent 
        id="container" 
        height="590px"
        // Use the following service URL only for demo purposes
        serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" 
        enableToolbar={true}>
      </DocumentEditorContainerComponent>
  )
}

{% endhighlight %}
{% endtabs %}

N> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).

## Run the application

Run the application using the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run dev

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn run dev

{% endhighlight %}
{% endtabs %}

After the application starts, open the `localhost` URL shown in the terminal. The DOCX Editor is rendered in the browser with a toolbar and an editable document area, as shown below.

![Output of React DOCX Editor in Next.js](./images/react_getting_started.png)

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/React-DOCX-Editor-Examples/tree/master/getting-started-nextjs).

## Server-side dependencies

The DOCX Editor component requires server-side interactions for the following operations:

* Opening file formats other than SFDT
* Pasting with formatting
* Restricting editing
* Spell checking
* Saving as file formats other than SFDT and DOCX

N> If you don't require the above functionalities, you can deploy the component as a pure client-side solution without any server-side interactions.

For detailed information about server-side dependencies, refer to the [Web Services Overview](./web-services-overview) page.

## See Also

- [Troubleshooting](https://help.syncfusion.com/document-processing/word/word-processor/react/troubleshooting)
