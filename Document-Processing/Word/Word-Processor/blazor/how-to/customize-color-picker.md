---
layout: post
title: Customize Color Picker in Blazor DocumentEditor | Syncfusion
description: Learn how to customize the color picker in Syncfusion Blazor DocumentEditor component and much more.
platform: document-processing
control: DocumentEditor
documentation: ug
---

# Customize the Color Picker in Blazor Document Editor Component

## How to customize color picker in Document Editor Container

[Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) provides an options to customize the color picker using [`ColorPickerSettings`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.DocumentEditorSettingsModel.html#Syncfusion_Blazor_DocumentEditor_DocumentEditorSettingsModel_ColorPickerSettings)in the document editor settings. The color picker offers customization options for default appearance, by allowing selection between Picker or Palette mode, for font and border colors." 

The following example code illustrates how to Customize the color picker in Document editor container. 

```csharp
@using Syncfusion.Blazor.DocumentEditor
@inject Microsoft.AspNetCore.Components.NavigationManager UriHelper
@inject IJSRuntime JSRuntime;

<SfDocumentEditorContainer @ref="container" Height="590px" DocumentEditorSettings="@settings">
</SfDocumentEditorContainer> 

@code {
    SfDocumentEditorContainer container; 
    DocumentEditorSettingsModel settings = new DocumentEditorSettingsModel() { ColorPickerSettings = { Mode = ColorPickerMode.Palette , ShowButtons = true , ModeSwitcher = true}};
}
```

The following table illustrates all the possible properties for the color picker. 
| Property | Behavior | 
|---|---| 
| Columns | It is used to render the ColorPicker palette with specified columns. Defaults to 10 | 
| Disabled | It is used to enable / disable ColorPicker component. If it is disabled the ColorPicker popup won’t open. Defaults to false | 
| Mode | It is used to render the ColorPicker with the specified mode. Defaults to ‘Picker’ | 
| ModeSwitcher | It is used to show / hide the mode switcher button of ColorPicker component. Defaults to true | 
| ShowButtons | It is used to show / hide the control buttons (apply / cancel) of ColorPicker component. Defaults to true |

## Online Demo

Explore how to customize the color picker in the Blazor Document Editor for Word documents in this live demo [here](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/color-picker-customization?theme=fluent2).