---
layout: post
title: View in Blazor DocumentEditor Component | Syncfusion
description: Checkout and learn here all about the view in the Syncfusion Blazor DocumentEditor component and more.
platform: document-processing
control: DocumentEditor
documentation: ug
---

# View in Blazor DocumentEditor component

This topic describes view-related options in the Document Editor, including layout type (Pages or Continuous), displaying the ruler, and enabling the heading navigation pane.

## Web Layout

The [`Blazor Word Processor`](https://www.syncfusion.com/blazor-components/blazor-word-processor) component (a.k.a Document Editor) component allows you to change the view to web layout and print using the  [`layoutType`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.LayoutType.html#fields) property with the supported [`LayoutType`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.LayoutType.html).

```csharp
<SfDocumentEditorContainer @ref="editor" EnableToolbar="true" Height="590px" LayoutType="LayoutType.Continuous">
</SfDocumentEditorContainer>
```

N> The Default value of [`LayoutType`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.LayoutType.html?_ga=2.86979928.1792501268.1670214760-93590999.1630704258) in the DocumentEditorContainer component is [`Pages`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.LayoutType.html#Syncfusion_Blazor_DocumentEditor_LayoutType_Pages).

## Show Ruler

The ruler helps set margins, tab stops, and indentations to maintain consistent formatting in the Document Editor Container.

The following example illustrates how to the enable ruler in the Document Editor Container.

```csharp
<div>
    <SfDocumentEditorContainer @ref="container" EnableToolbar=true Height="590px" DocumentEditorSettings="@settings">      
    </SfDocumentEditorContainer>    
</div>

@code {
    SfDocumentEditorContainer container;
    public DocumentEditorSettingsModel settings = new DocumentEditorSettingsModel() { ShowRuler = true };   
}
```

## Heading Navigation Pane  

Using the heading navigation pane allows users to swiftly navigate documents by heading, enhancing their ability to move through the document efficiently. 

The following example demonstrates how to enable the heading navigation pane in a Document Editor. 

```csharp
<SfDocumentEditorContainer @ref="container" Height="590px" DocumentEditorSettings="settings">
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;
    DocumentEditorSettingsModel settings = new DocumentEditorSettingsModel() { ShowNavigationPane = true};
}
```
