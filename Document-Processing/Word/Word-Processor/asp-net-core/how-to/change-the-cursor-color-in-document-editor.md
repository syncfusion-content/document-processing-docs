---
layout: post
title: Change Cursor Color in ASP.NET Core DOCX Editor | Syncfusion
description: Learn how to change the cursor color using CSS in ASP.NET Core Document Editor component of syncfusion and more.
platform: document-processing
control: Change The Cursor Color
documentation: ug
---

# Change the cursor color in the ASP.NET Core Document Editor

[ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) default cursor color is black. You can change the color by overriding the CSS property using the class name. The Document Editor cursor CSS uses a class named `e-de-blink-cursor`.

Refer to the following code snippet to change the cursor color to red.

```css
.e-de-blink-cursor {
border-left: 1px solid red !important;
}
```

Output will be like below:

![Change the cursor color in Document Editor](../images/cursor-css.png)
