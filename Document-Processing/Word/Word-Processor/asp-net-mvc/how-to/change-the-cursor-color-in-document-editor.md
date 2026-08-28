---
layout: post
title: How to Change Cursor Color in ASP.NET MVC DOCX Editor | Syncfusion
description: Change the default cursor color in Syncfusion® ASP.NET MVC DOCX Editor by overriding CSS properties and customizing the editor appearance.
platform: document-processing
control: Change The Cursor Color
documentation: ug
---

# How to Change Cursor Color in ASP.NET MVC DOCX Editor

The DOCX Editor default cursor color is black. The user can change the color by overriding the CSS property using the class name. The DOCX Editor cursor CSS has a class named `e-de-blink-cursor`.

Add the following CSS to change the cursor color to red.

```css
.e-de-blink-cursor {
    border-left: 1px solid red !important;
}
```

The output is shown below:

![Change the cursor color in DOCX Editor](../images/cursor-css.png)
