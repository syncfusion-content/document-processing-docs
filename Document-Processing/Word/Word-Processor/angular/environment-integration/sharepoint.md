---
layout: post
title: Getting Started with Angular DOCX Editor in SharePoint | Syncfusion
description: Learn how to get started with the Syncfusion Angular DOCX Editor component in SharePoint Framework applications. Explore setup and examples.
control: DOCX Editor
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular DOCX Editor in SharePoint

This article provides a step-by-step guide for setting up a [SharePoint](https://learn.microsoft.com/en-us/sharepoint/dev/) project and integrating the [Angular DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/angular-docx-editor) component.

`SharePoint` Framework (SPFx) is a development model and framework provided by Microsoft for building custom solutions and extensions for SharePoint and Microsoft Teams. It is a modern, client-side framework that allows developers to create web parts, extensions, and customizations that can be deployed and used within SharePoint sites and Teams applications.

## Prerequisites

* [System requirements for Syncfusion Angular DOCX Editor](https://ej2.syncfusion.com/angular/documentation/system-requirement)
* [System requirements for the SharePoint Framework Development Environment](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-development-environment)

## Set up the SharePoint project

Create a new SPFx project using the following command:

**Step 1:** To initiate the creation of a new [SharePoint](https://learn.microsoft.com/en-us/sharepoint/dev/) project, use the following command:

```bash
npm install -g yo
npm install -g @microsoft/generator-sharepoint
yo @microsoft/sharepoint
```
> Note: The examples in this topic were tested with **Node.js 22.x**, the **SharePoint Framework generator 1.23.2**, and **Syncfusion Angular DOCX Editor ^34.2.8**. To confirm the installed versions on your machine, run `node -v`, `npm -v`, and `yo --version` for the generator.

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

## Add Syncfusion® DOCX Editor packages

Angular component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use the Angular DOCX Editor component in the project, install the required npm packages and Angular framework dependencies:

```bash
npm install @angular/core @angular/common @angular/platform-browser @angular/compiler rxjs zone.js --save
npm install @syncfusion/ej2-angular-documenteditor --save
```

## Add Angular DOCX Editor Component

Follow the steps below to add the component:

Step 1: Create Angular component files inside the `~/src/webparts/App/` folder. 

Create `docxeditor.component.ts` file:

{% tabs %}
{% highlight ts tabtitle="docxeditor.component.ts" %}

import { Component } from '@angular/core';
import {
  DocumentEditorContainerModule,
  ToolbarService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-docxeditor',
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
export class DOCXEditorComponent {}

{% endhighlight %}
{% endtabs %}

Create `main.ts` file:

{% tabs %}
{% highlight ts tabtitle="main.ts" %}

import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { DOCXEditorComponent } from './docxeditor.component';

export function bootstrapAngular(): void{
  bootstrapApplication(DOCXEditorComponent)
  .catch((err) => console.error(err));
}

{% endhighlight %}
{% endtabs %}

Step 2: Update the main web part file `AppWebPart.ts` inside the `src/webparts/App` folder to bootstrap Angular:

{% tabs %}
{% highlight ts tabtitle="AppWebPart.ts" %}
...
// import function from angular
import { bootstrapAngular } from './main';

export default class AppWebPart extends BaseClientSideWebPart<{}> {
  ...
    public render(): void {
    // create the Angular component selector in the DOM
    this.domElement.innerHTML = `
      <link href="https://cdn.syncfusion.com/ej2/34.2.8/tailwind3.css" rel="stylesheet" />
      <div>
        <app-docxeditor></app-docxeditor>
      </div>
    `;

    // start the Angular application
    bootstrapAngular();
  }
  ...
}
...
{% endhighlight %}
{% endtabs %}

Step 3: Update the TypeScript configuration `tsconfig.json` to map Angular and Syncfusion package paths for proper module resolution in the SPFx project:

{% tabs %}
{% highlight ts tabtitle="AppWebPart.ts" %}

{
  "extends": "./node_modules/@microsoft/spfx-web-build-rig/profiles/default/tsconfig-base.json",
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "useDefineForClassFields": false,
    "skipLibCheck": true,
    "paths": {
      "@angular/*": ["./node_modules/@angular/*"],
      "@syncfusion/*": ["./node_modules/@syncfusion/*"]
    }
  }
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
https://your-Sharepoint-site/_layouts/15/workbench.aspx?debugManifestsFile=https://localhost:4321/temp/build/manifests.js&debug=true&noredir=true
```

Add the DOCXEditor (named as App) web part to the page.

The output will appear as follows:

![Angular DOCX Editor running in SPFx Web](../images/docxeditor-sharepoint.png)

## See Also
* [Getting Started with Angular DOCX Editor](../getting-started)