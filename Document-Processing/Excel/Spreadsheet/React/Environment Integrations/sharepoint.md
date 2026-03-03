---
layout: post
title: Syncfusion React Spreadsheet in SharePoint
description: Checkout and learn how to use the React Spreadsheet component of Syncfusion Essential JS 2 in a SharePoint web part.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Getting Started with React Spreadsheet in the SharePoint Framework

This article provides a step-by-step guide for setting up a SharePoint project and integrating the Syncfusion® React components.

`SharePoint` Framework is a development model and framework provided by Microsoft for building custom solutions and extensions for SharePoint and Microsoft Teams. It is a modern, client-side framework that allows developers to create web parts, extensions, and customizations that can be deployed and used within SharePoint sites and Teams applications.

## Prerequisites

* [System requirements for Syncfusion React Spreadsheet](https://ej2.syncfusion.com/react/documentation/system-requirement)
* [System requirements for the SharePoint Framework Development Environment](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-development-environment)

## Set up the SharePoint project

Create a new project using the following command:

**Step 1:** To initiate the creation of a new SharePoint project, use the following command:

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
gulp trust-dev-cert
```

With these steps complete, your `my-project` SharePoint Framework solution is ready for Syncfusion® component integration.

## Add Syncfusion Spreadsheet packages

To install the React Spreadsheet component package, use the following command:

```bash
npm install @syncfusion/ej2-react-spreadsheet --save
```

## Adding CSS reference
Themes for Syncfusion React Spreadsheet can be applied using CSS files from npm packages, CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). Refer to the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme) for more detail.

This example demonstrates importing the `Tailwind 3` theme CSS within the `App.ts` file located at `~/src/webparts/app/components/App.ts`:

```ts
require('@syncfusion/ej2-base/styles/tailwind3.css');
require('@syncfusion/ej2-inputs/styles/tailwind3.css');
require('@syncfusion/ej2-buttons/styles/tailwind3.css');
require('@syncfusion/ej2-splitbuttons/styles/tailwind3.css');
require('@syncfusion/ej2-lists/styles/tailwind3.css');
require('@syncfusion/ej2-navigations/styles/tailwind3.css');
require('@syncfusion/ej2-popups/styles/tailwind3.css');
require('@syncfusion/ej2-dropdowns/styles/tailwind3.css');
require('@syncfusion/ej2-grids/styles/tailwind3.css');
require('@syncfusion/ej2-react-spreadsheet/styles/tailwind3.css');
```

## Add Spreadsheet Component

Add the below code in the `App.ts` file inside the ~/src/webparts/app/components folder to render the spreadsheet.

```ts
import * as React from 'react';
import { IAppProps } from './IAppProps';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

require('@syncfusion/ej2-base/styles/tailwind3.css');
require('@syncfusion/ej2-inputs/styles/tailwind3.css');
require('@syncfusion/ej2-buttons/styles/tailwind3.css');
require('@syncfusion/ej2-splitbuttons/styles/tailwind3.css');
require('@syncfusion/ej2-lists/styles/tailwind3.css');
require('@syncfusion/ej2-navigations/styles/tailwind3.css');
require('@syncfusion/ej2-popups/styles/tailwind3.css');
require('@syncfusion/ej2-dropdowns/styles/tailwind3.css');
require('@syncfusion/ej2-grids/styles/tailwind3.css');
require('@syncfusion/ej2-react-spreadsheet/styles/tailwind3.css');;

export default class App extends React.Component<IAppProps, {}> {
  
  public render(): React.ReactElement<IAppProps> {
    return  (<SpreadsheetComponent/>);
  }
}
```

## Run the project
To run the project, use the following command:

```bash
gulp serve
```

## See Also
* [Getting Started with Syncfusion React Spreadsheet](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/getting-started)