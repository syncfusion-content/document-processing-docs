---
layout: post
title: Format Painter in Vue DOCX Editor component | Syncfusion
description: The Format Painter in Vue DOCX Editor allows you to copy the formatting from selected content and apply it to other content within the document.
control: Format Painter
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Format Painter in Vue DOCX Editor

## Format Painter

The Format Painter option is available in the **Home** tab of the ribbon under the **Clipboard** group. It allows users to copy the formatting from selected content and apply it to other content within the document.

### Use Format Painter Using the UI

You can use Format Painter to quickly replicate character and paragraph formatting across different parts of the document.

- Select the content whose formatting needs to be copied.
- Click **Format Painter** from the **Home** tab in the ribbon.
- Select the target content where the formatting should be applied.
- Double-click **Format Painter** to keep it active and apply the copied formatting to multiple selections.
- Press **Esc** or click **Format Painter** again to exit Format Painter mode.

You can also use the following keyboard shortcuts.

| Action | Shortcut |
|----------|----------|
| Copy formatting | `Ctrl + Alt + C` |
| Apply copied formatting | `Ctrl + Alt + V` |

> **Note:** When Format Painter is activated in persistent mode, the copied formatting can be applied to multiple selections until it is cancelled.

### Use Format Painter Using API

You can copy the formatting of the current selection and activate Format Painter by using the following sample code.

```javascript
this.$refs.documenteditor.ej2Instances.selection.copyFormat();
```

You can also enable persistent Format Painter mode to apply the copied formatting to multiple selections by using the following sample code.

```javascript
this.$refs.documenteditor.ej2Instances.selection.copyFormat(true);
```

You can apply the copied formatting to the current selection by using the following sample code.

```javascript
this.$refs.documenteditor.ej2Instances.selection.applyCopiedFormat();
```

> **Note:** When Format Painter is not in persistent mode, it is automatically deactivated after the formatting is applied.

You can determine whether Format Painter is currently active by using the following sample code.

```javascript
this.$refs.documenteditor.ej2Instances.selection.isFormatPainterActive;
```

You can cancel Format Painter and clear the copied formatting by using the following sample code.

```javascript
this.$refs.documenteditor.ej2Instances.selection.cancelFormatPainter();
```

> **Note:** After Format Painter is cancelled, the copied formatting cannot be applied again until the `copyFormat` method is invoked.
