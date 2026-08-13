---
layout: post
title: Working with Lists in Blazor DOCX Editor Component | Syncfusion
description:  Learn how to create and manage bulleted and numbered lists in the Syncfusion Blazor Document Editor component with list formatting features.
platform: document-processing
control: Document Editor
documentation: ug
---

# Working with Lists in Blazor Document Editor Component

Lists are a fundamental feature for organizing content in a document, making it easier for readers to follow step-by-step instructions or grasp key points. The [Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) provides comprehensive support for single-level and multilevel lists, which can be ordered (numbered) or unordered (bulleted).

## Create a bulleted list

Bulleted (unordered) lists are ideal for items that do not need to be in a specific sequence. Use the [`ApplyBulletAsync(bullet, fontFamily)`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.EditorModule.html#Syncfusion_Blazor_DocumentEditor_EditorModule_ApplyBulletAsync_System_String_System_String_) method to apply a bullet format to the selected paragraphs. The method accepts a bullet character and its font family.

|Parameter|Type|Description|
|---------|----|-----------|
|Bullet|string|Bullet character.|
|fontFamily|string|Bullet font family.|

Refer to the following sample code.

```csharp
@* The following code example demonstrates how to apply a standard circular bullet. *@
await container.DocumentEditor.Editor.ApplyBulletAsync("\u00B7", "Symbol");
```

## Create a numbered list

Numbered (ordered) lists are used for sequential items. Use the [`ApplyNumberingAsync(numberFormat,listLevelPattern)`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.EditorModule.html#Syncfusion_Blazor_DocumentEditor_EditorModule_ApplyNumberingAsync_System_String_System_Nullable_Syncfusion_Blazor_DocumentEditor_ListLevelPattern__) method to apply a numbering format. This method allows you to define the number format and the character style for the list level.

The `numberFormat` parameter uses placeholders like `%1`, `%2`, etc., which correspond to the value of each list level. The `ListLevelPattern` specifies the character style for the number (e.g., Arabic numerals, Roman numerals, or letters).

| Parameter | Type | Description |
|---|---|---|
| `numberFormat` | `string` | Defines the pattern for the list number. For example, `"%1."` will produce "1.", "2.", etc. |
| `listLevelPattern` | `ListLevelPattern` | (Optional) Specifies the character style for the list numbers. Defaults to `Arabic`. Options include `UpRoman`, `LowRoman`, `UpLetter`, `LowLetter`, etc. |

```csharp
@* The following code example applies an uppercase Roman numeral format to the selected list. *@
await container.DocumentEditor.Editor.ApplyNumberingAsync("%1.", ListLevelPattern.UpRoman);
```

## Clear list

To remove all list formatting from a selection of paragraphs and revert them to normal text, use the [`ClearListAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.EditorModule.html#Syncfusion_Blazor_DocumentEditor_EditorModule_ClearListAsync) method.

```csharp
@* The following code example removes list formatting from the current selection. *@
await container.DocumentEditor.Editor.ClearListAsync();
```

## Editing numbered lists

The Document Editor provides options for controlling the sequence of numbered lists.

### Restarting and continuing numbering

When working with numbered lists, you can choose to restart numbering at "1" or continue the sequence from a previous list. These options are available in the context menu when you right-click a list number.

![Context menu in Blazor Document Editor showing options to restart or continue list numbering.](images/blazor-document-editor-list.jpeg)

## Online demo

Explore how to apply bullets and numbering in Word documents using the Blazor Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/bullets-and-numbering?theme=fluent2).