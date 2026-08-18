---
layout: post
title: How to Change Cursor Color in Vue DOCX Editor | Syncfusion
description: Change the default cursor color in Syncfusion® Vue DOCX Editor by overriding CSS properties and customizing the editor appearance.
control: Change the cursor color in document editor 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to Change Cursor Color in Vue DOCX Editor

[Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/vue-docx-editor) (Document Editor) default cursor color is black. The user can change the color by overriding the css property using class name. The Document editor cursor css have a class named `e-de-blink-cursor`.

Please refer the below code snippet to change the cursor color to red.

```
.e-de-blink-cursor {
border-left: 1px solid red!important;
}
```

Output will be like below:

![Change the cursor color in document editor](../images/cursor-css.png)
