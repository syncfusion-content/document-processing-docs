---
layout: post
title: Format Painter in JavaScript DOCX Editor | Syncfusion
description: The Format Painter in JavaScript DOCX Editor allows you to copy the formatting from selected content and apply it to other content within the document.
control: Format Painter
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Format Painter in JavaScript DOCX Editor

## Format Painter

The Format Painter option is available in the **Home** tab of the ribbon under the **Clipboard** group. It allows users to copy the formatting from selected content and apply it to other content within the document.

## Use format painter using the UI

You can use Format Painter to quickly replicate character and paragraph formatting across different parts of the document.

- Select the content whose formatting needs to be copied.
- Click **Format Painter** from the **Home** tab in the ribbon.
- Select the target content where the formatting should be applied. After the formatting is applied, Format Painter is automatically turned off.
- To apply the same formatting to multiple selections, double-click **Format Painter**. Format Painter remains active until you press **Esc** or click **Format Painter** again.
- Press **Esc** or click **Format Painter** again to exit Format Painter mode.

You can also use the following keyboard shortcuts.

| Action | Shortcut |
|----------|----------|
| Copy formatting | `Ctrl + Alt + C` |
| Apply copied formatting | `Ctrl + Alt + V` |

N> When Format Painter is activated by double-clicking the button, the copied formatting can be applied to multiple selections until Format Painter is cancelled.

## Use format painter using API

You can copy the formatting of the current selection and activate Format Painter by using the following sample code.

```ts
documenteditor.selection.copyFormat();
```

You can also keep Format Painter active after each use and apply the copied formatting to multiple selections by using the following sample code.

```ts
documenteditor.selection.copyFormat(true);
```

You can apply the copied formatting to the current selection by using the following sample code.

```ts
documenteditor.selection.applyCopiedFormat();
```

N> By default, Format Painter is automatically deactivated after the copied formatting is applied once. When activated with `copyFormat(true)`, it remains active until it is cancelled.

You can determine whether Format Painter is currently active by using the following sample code.

```ts
documenteditor.selection.isFormatPainterActive;
```

You can cancel Format Painter and remove the formatting currently stored by Format Painter by using the following sample code.

```ts
documenteditor.selection.cancelFormatPainter();
```

N> Cancelling Format Painter removes the copied formatting from memory. To apply formatting again, copy the formatting by calling the `copyFormat` method.
