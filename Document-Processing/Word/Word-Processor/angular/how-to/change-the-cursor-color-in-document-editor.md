---
layout: post
title: How to Change Cursor Color in Angular DOCX Editor | Syncfusion
description: Change the default cursor color in Syncfusion® Angular DOCX Editor by overriding CSS properties and customizing the editor appearance.
platform: document-processing
control: Change the cursor color in DOCX Editor 
documentation: ug
domainurl: ##DomainURL##
---

# How to Change Cursor Color in Angular DOCX Editor

The default cursor color of the [Angular DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/angular-docx-editor) (Document Editor) is black. The user can change the color by overriding the CSS property using the class name. The DOCX Editor cursor CSS has a class named `e-de-blink-cursor`.

Please refer to the below code snippet to change the cursor color to red.

```css
.e-de-blink-cursor {
border-left: 1px solid red !important;
}
```

Output will be like below:

![Change the cursor color in DOCX Editor](../images/cursor-css.png)

