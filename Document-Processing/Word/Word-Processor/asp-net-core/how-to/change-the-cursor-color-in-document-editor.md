---
layout: post
title: How to Change Cursor Color using CSS in DOCX Editor | Syncfusion
description: Learn how to change the cursor color using CSS in ASP.NET Core DOCX Editor component of syncfusion and more.
platform: document-processing
control: Change The Cursor Color
documentation: ug
---

# How to change the cursor color using CSS in DOCX Editor component

[ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) default cursor color is black. You can change the color by overriding the CSS property using the class name. The DOCX Editor cursor CSS uses a class named `e-de-blink-cursor`.

Refer to the following code snippet to change the cursor color to red.

```css
.e-de-blink-cursor {
border-left: 1px solid red !important;
}
```

Output will be like below:

![Change the cursor color in DOCX Editor](../images/cursor-css.png)
