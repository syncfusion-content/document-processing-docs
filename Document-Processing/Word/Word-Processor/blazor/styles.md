---
layout: post
title: Working with Styles in Blazor DOCX Editor Component | Syncfusion
description: Learn how to work with styles in the Syncfusion Blazor Document Editor component, including creating, applying, and managing document styles.
platform: document-processing
control: Document Editor
documentation: ug
---

# Working with Styles in Blazor Document Editor Component

Styles are useful for applying a set of formatting consistently throughout the document. In [Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor), styles are created and added to a document programmatically or via the built-in Styles dialog.

## Styles definition overview

A style in the Document Editor should have the following properties:

* **name**: Name of the style. All styles in a document have a unique name, which is used as an identifier when applying the style.
* **type**: Specifies the document elements that the style will target. For example, paragraph or character.
* **next**: Specifies the style that should be automatically applied to a new paragraph created after the current one.
* **link**: Provides a relation between the paragraph and character style.
* **characterFormat**: Specifies the properties of paragraph and character style.
* **paragraphFormat**: Specifies the properties of paragraph style.
* **basedOn**: Specifies that the current style inherits the style set to this property. This is how hierarchical styles are defined. It can be optional.

N> The style type should match the inherited style type. For example, it is not possible to have a character style inherit a paragraph style.

## Default style

The default style for span and paragraph properties is `Normal`. It internally inherits the default style of the document loaded or the Document Editor component.

## Style hierarchy

Each style initially checks its local value for the property that is being evaluated and turns to the style it is based on. If no local value is found, it turns to its default style. Style inheritance of different styles is listed as follows.

### Character style

Character styles are based only on other character styles. The inheritance is: Character properties are inherited from the base character style.

### Paragraph style

Paragraph styles are based on other paragraph styles or on linked styles. When a paragraph style is based on another paragraph style, the inheritance of the properties is as follows:
* Paragraph properties are inherited from the base paragraph style.
* Span properties are inherited from the base paragraph style.

When a paragraph style is based on a linked style, the inheritance of the properties is as follows:
* Paragraph properties are inherited from the paragraph style part in its base linked style.
* Span properties are inherited from the span style part in its base linked style.

### Linked style

Linked styles are composite styles and their components are paragraph and character styles with a link between them. To apply paragraph properties, take the properties from the linked paragraph style. Similarly, to apply character properties, take the properties from the linked character style. Linked styles are based on other linked styles or on paragraph styles.

When a linked style is based on a paragraph style, the hierarchy of the properties is as follows:

* Paragraph properties are inherited from the `basedOn` paragraph style.
* Character properties are inherited from the `basedOn` paragraph style.

When a linked style is based on another linked style, the hierarchy of the properties is as follows:

* Paragraph properties are inherited from the paragraph style part in its base linked style.
* Span properties are inherited from the span style part in its base linked style.

## Defining new styles

New styles are defined and added to the style collection of the document. In this way, they will be discovered by the default UI and applied to the parts of a document.

## Defining a character style

The following example shows how to programmatically create a character style.

```cshtml
@using Syncfusion.Blazor.DocumentEditor;
<SfDocumentEditorContainer @ref="container" EnableToolbar="true">
    <DocumentEditorContainerEvents Created="OnLoad"></DocumentEditorContainerEvents>
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;
    protected async void OnLoad(object args)
    {
        string styleJson = "{\"type\":\"Character\",\"name\":\"New CharacterStyle\",\"basedOn\":\"Default Paragraph Font\",\"characterFormat\":{\"fontSize\":16.0,\"fontFamily\":\"Calibri Light\",\"fontColor\":\"#2F5496\",\"bold\":true,\"italic\":true,\"underline\":\"Single\"}}";
        await container.DocumentEditor.Editor.CreateStyleAsync(styleJson);
        await container.DocumentEditor.Editor.ApplyStyleAsync("New CharacterStyle");
    }
}
```

## Defining a paragraph style

The following example shows how to programmatically create a paragraph style.

```cshtml
@using Syncfusion.Blazor.DocumentEditor;
<SfDocumentEditorContainer @ref="container" EnableToolbar="true">
    <DocumentEditorContainerEvents Created="OnLoad"></DocumentEditorContainerEvents>
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;
    protected async void OnLoad(object args)
    {
        string styleJson = "{\"type\":\"Paragraph\",\"name\":\"New ParagraphStyle\",\"basedOn\":\"Normal\",\"characterFormat\":{\"fontSize\":16.0,\"fontFamily\":\"Calibri Light\",\"fontColor\":\"#2F5496\",\"bold\":true,\"italic\":true,\"underline\":\"Single\"},\"paragraphFormat\":{\"leftIndent\":0.0,\"rightIndent\":0.0,\"firstLineIndent\":0.0,\"beforeSpacing\":12.0,\"afterSpacing\":0.0,\"lineSpacing\":1.0791666507720947,\"lineSpacingType\":\"Multiple\",\"textAlignment\":\"Left\",\"outlineLevel\":\"Level1\"}}";
        await container.DocumentEditor.Editor.CreateStyleAsync(styleJson);
        await container.DocumentEditor.Editor.ApplyStyleAsync("New ParagraphStyle");
    }
}
```

## Defining a linked style

The following example shows how to programmatically create a linked style.

```cshtml
@using Syncfusion.Blazor.DocumentEditor;

<SfDocumentEditorContainer @ref="container" EnableToolbar="true">
    <DocumentEditorContainerEvents Created="OnLoad"></DocumentEditorContainerEvents>
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;
    protected async void OnLoad(object args)
    {
        string styleJson = "{\"type\": \"Paragraph\",\"name\":\"New Linked\",\"basedOn\":\"Normal\",\"next\":\"Normal\",\"link\":\"New Linked Char\",\"characterFormat\":{\"fontSize\":16.0,\"fontFamily\":\"Calibri Light\",\"fontColor\":\"#2F5496\"},\"paragraphFormat\":{\"leftIndent\": 0.0,\"rightIndent\":0.0,\"firstLineIndent\":0.0,\"beforeSpacing\":12.0,\"afterSpacing\":0.0,\"lineSpacing\":1.0791666507720947,\"lineSpacingType\":\"Multiple\",\"textAlignment\":\"Left\",\"outlineLevel\":\"Level1\"}}";
        await container.DocumentEditor.Editor.CreateStyleAsync(styleJson);
        await container.DocumentEditor.Editor.ApplyStyleAsync("New Linked");
    }
}
```

## Applying a style

Styles are applied using the [`ApplyStyleAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.Editor.html#Syncfusion_Blazor_DocumentEditor_Editor_ApplyStyleAsync_System_String_System_Boolean_) method of the `Editor` module. The required parameter is the `Name` of the style. The optional second parameter, when set to `true`, clears the direct formatting before applying the style.

The styles of the **Character** type are applied to the currently selected part of the document. If there is no selection, the values are applied to the word at the caret position. The styles of **Paragraph** type follow the same logic and are applied to all paragraphs in the selection or the current paragraph.

When there is no selection, styles of **Linked** type change the values of the paragraph, and apply both the Paragraph and Character properties. When there is a selection, Linked Style changes only the character properties of the selected text.

For example, the following line will apply the `New Linked` style to the current paragraph.

```csharp
await container.DocumentEditor.Editor.ApplyStyleAsync("New Linked");
//Clear direct formatting and apply the specified style.
await container.DocumentEditor.Editor.ApplyStyleAsync("New Linked", true);
```

## Get styles

You can get the styles in the document using the [`GetStylesAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.DocumentEditor.html#Syncfusion_Blazor_DocumentEditor_DocumentEditor_GetStylesAsync_Syncfusion_Blazor_DocumentEditor_StyleType_) method with the required `StyleType`.

```csharp
// Get paragraph styles.
object paragraphStyles = await container!.DocumentEditor.GetStylesAsync(StyleType.Paragraph);
// Get character styles.
object characterStyles = await container!.DocumentEditor.GetStylesAsync(StyleType.Character);
```

## Online Demo

Explore how to apply and modify styles in Word documents using the Blazor Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/styles?theme=fluent2).