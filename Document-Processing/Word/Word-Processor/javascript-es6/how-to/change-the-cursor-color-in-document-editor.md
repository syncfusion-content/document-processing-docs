---
layout: post
title: How to Change Cursor Color in TypeScript DOCX Editor | Syncfusion
description: Change the default cursor color in Syncfusion® TypeScript DOCX Editor by overriding CSS properties and customizing the editor appearance.
platform: document-processing
control: Change the Cursor Color in the Document Editor
documentation: ug
domainurl: ##DomainURL##
---

# How to Change Cursor Color in TypeScript DOCX Editor

[TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) default cursor color is black. The user can change the color by overriding the CSS property using the class name. The Document Editor cursor CSS has a class named `e-de-blink-cursor`.

Please refer to the code snippet below to change the cursor color to red.

```css
.e-de-blink-cursor {
    border-left: 1px solid red !important;
}
```

The output will be as shown below:

![Change the Cursor Color in the Document Editor](../images/cursor-css.png)
