---
layout: post
title: Getting Started with TypeScript DOCX Editor in SharePoint | Syncfusion
description: Learn how to get started with the Syncfusion TypeScript DOCX Editor component in SharePoint Framework applications. Explore setup and examples.
control: DOCX Editor
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with TypeScript DOCX Editor in SharePoint

This article provides a step-by-step guide for setting up a [SharePoint](https://learn.microsoft.com/en-us/sharepoint/dev/) project and integrating the [TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) component.

`SharePoint` Framework (SPFx) is a development model and framework provided by Microsoft for building custom solutions and extensions for SharePoint and Microsoft Teams. It is a modern, client-side framework that allows developers to create web parts, extensions, and customizations that can be deployed and used within SharePoint sites and Teams applications.

## Prerequisites
Before creating the SharePoint application, ensure that the following software is installed:

- [Node.js 22.x](https://nodejs.org/en/download)
- [Yeoman](https://yeoman.io/)
- [SharePoint Framework Generator](https://www.npmjs.com/package/@microsoft/generator-sharepoint)

References:
- [System requirements for Syncfusion TypeScript DOCX Editor](https://ej2.syncfusion.com/documentation/deployment)
- [System requirements for the SharePoint Framework Development Environment](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-development-environment)

## Set up the SharePoint project

Create a new SPFx project using the following command:

**Step 1:** To initiate the creation of a new [SharePoint](https://learn.microsoft.com/en-us/sharepoint/dev/) project, use the following command:

```bash
npm install -g yo
npm install -g @microsoft/generator-sharepoint
yo @microsoft/sharepoint
```
> Note: The examples in this topic were tested with **Node.js 22.x**, the **SharePoint Framework generator 1.23.2**, and **Syncfusion TypeScript DOCX Editor ^34.2.8**. To confirm the installed versions on your machine, run `node -v`, `npm -v`, and `yo --version` for the generator.

**Step 2:** Specify the name of the project as `my-project` and the name of the WebPart as `App` for this article. You will be prompted with a series of configuration questions as shown below:

```bash
Let's create a new Microsoft 365 solution.
? What is your solution name? my-project
? Which type of client-side component to create? WebPart
Add new Web part to solution my-project.
? What is your Web part name? App
? Which template would you like to use? No framework
```

**Step 3:** To establish trust for the certificate in the development environment, execute the following command:

```bash
npx heft trust-dev-cert
```

With these steps complete, your `my-project` SharePoint Framework solution is ready for Syncfusion® component integration.

## Add Syncfusion® DOCX Editor package

To install the TypeScript DOCX Editor component package, use the following command:

```bash
npm install @syncfusion/ej2-documenteditor --save
```

## Import the required CSS styles

Themes for DOCX Editor can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/documentation/appearance/theme).

This guide uses the `Tailwind 3` theme as an example, sourced from the theme package. In this package, each component includes an `index.css` file that automatically loads all the required dependency styles. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

```bash
npm install @syncfusion/ej2-tailwind3-theme
```
## Add DOCX Editor into WebPart

The following code example demonstrates how to integrate the Syncfusion DOCX Editor into the `~/src/webparts/App/AppWebPart.ts` file and configure the associated theme file to to render the editor.

{% tabs %}
{% highlight ts tabtitle="AppWebPart.ts" %}

import {
DocumentEditorContainer,
Toolbar
} from '@syncfusion/ej2-documenteditor';
DocumentEditorContainer.Inject(Toolbar);
import { SPComponentLoader } from '@microsoft/sp-loader';
...
...
export default class AppWebPart extends BaseClientSideWebPart<IAppWebPartProps> {

  public render(): void {

    this.domElement.innerHTML = `
      <div
        id="document-editor-container"
        style="height:800px;">
      </div>
    `;

    const editor = new DocumentEditorContainer({
      enableToolbar: true,
      height: '800px'
    });

    editor.appendTo('#document-editor-container');
  }

  protected onInit(): Promise<void> {

    SPComponentLoader.loadCss(
      'https://cdn.syncfusion.com/ej2/34.2.8/tailwind3.css'
    );

    return this._getEnvironmentMessage().then(message => {
      this._environmentMessage = message;
    });
  }
  ....
  ....
}

{% endhighlight %}
{% endtabs %}


## Set up Tenant Domain for SPFx

Set your tenant domain in the `serve.json` file located in the `config` folder.

 ```
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/spfx-serve.schema.json",
  "port": 4321,
  "https": true,
  "initialPage": "https://{tenantDomain}/_layouts/workbench.aspx"
}
 ```

## Run the project

To run the project, use the following command:

```bash
npm start
```
Open:

```
https://your-sharepoint-site/_layouts/15/workbench.aspx?debugManifestsFile=https://localhost:4321/temp/build/manifests.js&debug=true&noredir=true
```

Add the DOCXEditor (named as App) web part to the page.

The output will appear as follows:

![TypeScript DOCX Editor running in SPFx Web](../images/docxeditor-sharepoint.png)

## See Also
* [Getting Started with TypeScript DOCX Editor](../getting-started)