---
layout: post
title: Change Cursor Color in JavaScript (ES6) DOCX Editor | Syncfusion
description: Learn how to change the cursor color in Syncfusion JavaScript (ES6) Document Editor by overriding the CSS property using the e-de-blink-cursor class.
platform: document-processing
control: Change the Cursor Color in the Document Editor
documentation: ug
domainurl: ##DomainURL##
---

# Change Cursor Color in JavaScript (ES6) Document Editor

[TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) default cursor color is black. The user can change the color by overriding the CSS property using the class name. The Document Editor cursor CSS has a class named `e-de-blink-cursor`.

Please refer to the code snippet below to change the cursor color to red.

```css
.e-de-blink-cursor {
    border-left: 1px solid red !important;
}
```

The output will be as shown below:

![Change the Cursor Color in the Document Editor](../images/cursor-css.png)
