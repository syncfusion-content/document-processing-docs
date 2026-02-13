---
title: Install packages required for versions below 12 | Syncfusion
component: "PDF Viewer"
description: Learn here all about how to install the packages required for versions below 12 in PDF Viewer control.
---

# Install packages required for versions below 12

For Angular versions below 12, use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package, use the commands below.

Add [`@syncfusion/ej2-angular-pdfviewer@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-pdfviewer/v/20.2.38-ngcc) to the application:

```bash
npm install @syncfusion/ej2-angular-pdfviewer@ngcc --save
```

To reference the ngcc package in the `package.json` file, append the `-ngcc` suffix to the package version:

```bash
"@syncfusion/ej2-angular-pdfviewer": "20.2.38-ngcc"
```

N> If the `-ngcc` tag is not specified during installation, the Ivy library package will be installed. In View Engine projects this may produce compatibility warnings; use the `-ngcc` package for Angular versions below 12.
