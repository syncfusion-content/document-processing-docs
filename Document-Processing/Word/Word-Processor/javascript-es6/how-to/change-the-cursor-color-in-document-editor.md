---
layout: post
title: Change the Cursor Color in the Document Editor in JavaScript (ES6) DOCX Editor control | Syncfusion
description: Learn here all about changing the cursor color in the Document Editor in Syncfusion JavaScript (ES6) Document Editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Change the Cursor Color in the Document Editor
documentation: ug
domainurl: ##DomainURL##
---

# Change the Cursor Color in the Document Editor in JavaScript (ES6) Document Editor control

[TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) default cursor color is black. The user can change the color by overriding the CSS property using the class name. The Document Editor cursor CSS has a class named `e-de-blink-cursor`.

Please refer to the code snippet below to change the cursor color to red.

```css
.e-de-blink-cursor {
    border-left: 1px solid red !important;
}
```

The output will be as shown below:

![Change the Cursor Color in the Document Editor](../images/cursor-css.png)
