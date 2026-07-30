---
layout: post
title: Change the cursor color in the Vue DOCX Editor component | Syncfusion
description: Learn here all about how to change the cursor color in the Syncfusion Vue DOCX Editor component of Syncfusion Essential JS 2 and more.
control: Change the cursor color in DOCX Editor
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Change the cursor color in the Vue DOCX Editor component

[Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/vue-docx-editor) (Document Editor) default cursor color is black. The user can change the color by overriding the CSS property using the class name. The Document Editor cursor CSS has a class named `e-de-blink-cursor`.

Please refer to the code snippet below to change the cursor color to red.

```
.e-de-blink-cursor {
border-left: 1px solid red !important;
}
```

The output will be as shown below:

![Change the cursor color in the DOCX Editor](../images/cursor-css.png)
