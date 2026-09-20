---
layout: post
title: Getting Started with React DOCX Editor in SharePoint | Syncfusion
description: Learn how to get started with the Syncfusion React DOCX Editor component in SharePoint Framework applications. Explore setup and examples.
control: DOCX Editor
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React DOCX Editor in SharePoint

This article provides a step-by-step guide for setting up a [SharePoint](https://learn.microsoft.com/en-us/sharepoint/dev/) project and integrating the [React DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) component.

`SharePoint` Framework (SPFx) is a development model and framework provided by Microsoft for building custom solutions and extensions for SharePoint and Microsoft Teams. It is a modern, client-side framework that allows developers to create web parts, extensions, and customizations that can be deployed and used within SharePoint sites and Teams applications.

## Prerequisites

* [System requirements for Syncfusion React DOCX Editor](https://ej2.syncfusion.com/react/documentation/system-requirement)
* [System requirements for the SharePoint Framework Development Environment](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-development-environment)

## Set up the SharePoint project

Create a new SPFx project using the following command:

**Step 1:** To initiate the creation of a new [SharePoint](https://learn.microsoft.com/en-us/sharepoint/dev/) project, use the following command:

```bash
yo @microsoft/sharepoint
```

**Step 2:** Specify the name of the project as `my-project` and the name of the WebPart as `App` for this article. You will be prompted with a series of configuration questions as shown below:

```bash
Let's create a new Microsoft 365 solution.
? What is your solution name? my-project
? Which type of client-side component to create? WebPart
Add new Web part to solution my-project.
? What is your Web part name? App
? Which template would you like to use? React
```

**Step 3:** To establish trust for the certificate in the development environment, execute the following command:

```bash
npx heft trust-dev-cert
```

With these steps complete, your `my-project` SharePoint Framework solution is ready for Syncfusion® component integration.

## Add Syncfusion® DOCX Editor packages

To install the React DOCX Editor component package, use the following command:

```bash
npm install @syncfusion/ej2-react-documenteditor --save
```

## Import the required CSS styles

Themes for DOCX Editor can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme).

This guide uses the `Tailwind 3` theme as an example, sourced from the theme package. In this package, each component includes an `index.css` file that automatically loads all the required dependency styles. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

This example imports the `tailwind3` theme CSS in `~/src/webparts/app/AppWebPart.ts`:

{% tabs %}
{% highlight ts tabtitle="AppWebPart.ts" %}

import { SPComponentLoader } from '@microsoft/sp-loader';

...
...

protected onInit(): Promise<void>{
  // Load Syncfusion Tailwind 3 theme
  SPComponentLoader.loadCss('https://cdn.syncfusion.com/ej2/34.1.29/tailwind3.css');
    return this._getEnvironmentMessage().then(message => {
    this._environmentMessage = message;
  });
}

{% endhighlight %}
{% endtabs %}

## Add DOCX Editor Component

Add the following code in the `App.tsx` file inside the ~/src/webparts/app/components folder to render the DOCX Editor.

```ts
import * as React from 'react';
import styles from './App.module.scss';
import { IAppProps } from './IAppProps';

import {
  DocumentEditorContainerComponent,
  Toolbar
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);

export default class App extends React.Component<IAppProps, {}> {

  public render(): React.ReactElement<IAppProps> {
    return (
      <div className={styles.app}>
        <DocumentEditorContainerComponent
          id="container"
          height="600px"
          serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
          enableToolbar={true}
        />
      </div>
    );
  }
}
```

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

## See Also
* [Getting Started with React DOCX Editor](../getting-started)