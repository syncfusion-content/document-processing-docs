---
layout: post
title: How to Change Cursor Color in JavaScript DOCX Editor | Syncfusion
description: Change the default cursor color in Syncfusion® JavaScript DOCX Editor by overriding CSS properties and customizing the editor appearance.
platform: document-processing
control: Change the cursor color in document editor 
documentation: ug
domainurl: ##DomainURL##
---

# How to Change Cursor Color in JavaScript DOCX Editor

The default cursor color of the [JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) is black. The user can change the color by overriding the CSS property using the class name. The Document Editor cursor CSS has a class named `e-de-blink-cursor`.

Please refer to the below code snippet to change the cursor color to red.

```css
.e-de-blink-cursor {
border-left: 1px solid red !important;
}
```

Output will be like below:

![Change the cursor color in document editor](../images/cursor-css.png)
