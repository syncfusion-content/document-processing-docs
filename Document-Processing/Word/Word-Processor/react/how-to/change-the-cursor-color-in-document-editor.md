---
layout: post
title: How to Change Cursor Color in React DOCX Editor | Syncfusion
description: Change the default cursor color in Syncfusion® React DOCX Editor by overriding CSS properties and customizing the editor appearance.
control: Change the cursor color in Document Editor 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to Change Cursor Color in React DOCX Editor

The default cursor color of the [React Document Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) is black. The user can change the color by overriding the CSS property using the class name. The Document Editor cursor CSS has a class named `e-de-blink-cursor`.

Please refer to the below code snippet to change the cursor color to red.

```css
.e-de-blink-cursor {
border-left: 1px solid red !important;
}
```

Output will be like below:

![Change the cursor color in document editor](../images/cursor-css.png)
