---
layout: post
title: How to Change Cursor Color in Blazor DOCX Editor | Syncfusion
description: Change the default cursor color in Syncfusion® Blazor DOCX Editor by overriding CSS properties and customizing the editor appearance.
platform: document-processing
control: Document Editor
documentation: ug
---

# How to Change Cursor Color in Blazor DOCX Editor

The [Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) component uses a black cursor by default. However, this color can be customized by overriding the `.e-de-blink-cursor` CSS class.

The editor's blinking cursor is styled using the `.e-de-blink-cursor` CSS class. To change its color, define a new style for this class with the desired `border-left` color.

## Applying the CSS override

```css
.e-de-blink-cursor {
    border-left: 1px solid red !important;
}
```

N> The `!important` declaration is used here to ensure this custom style takes precedence over the component's default styles.

After applying this CSS, the cursor in the Document Editor will appear in the new color.

![Cursor shown in red in the Blazor Document Editor.](../images/cursor-css.png)
