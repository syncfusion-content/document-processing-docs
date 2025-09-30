---
layout: post
title: Install Packages Required for Angular Versions Below 12 | Syncfusion
description: Learn how to install the necessary packages for Syncfusion Angular PDF Viewer component in Angular versions below 12.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Install packages required for versions below 12

For Angular versions below 12, use the legacy (ngcc) package of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To install the `ngcc` package, follow the instructions below.

Add the [`@syncfusion/ej2-angular-pdfviewer@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-pdfviewer/v/20.2.38-ngcc) package to the application:

```bash
npm install @syncfusion/ej2-angular-pdfviewer@ngcc --save
```

To specify the ngcc package in the `package.json` file, append the suffix `-ngcc` to the package version, as shown below:

```bash
@syncfusion/ej2-angular-pdfviewer:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified during package installation, the Ivy Library Package will be installed, and this may result in a warning.
