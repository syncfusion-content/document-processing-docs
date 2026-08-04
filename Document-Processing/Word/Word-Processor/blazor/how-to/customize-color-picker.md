---
layout: post
title: Customize Color Picker in Blazor DOCX Editor | Syncfusion
description: Learn how to customize the color picker in Syncfusion Blazor Document Editor component and much more.
platform: document-processing
control: Document Editor
documentation: ug
---

# Customize the Color Picker in Blazor Document Editor Component

## How to customize the color picker in the Document Editor Container

[Blazor Document Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) provides options to customize the color picker using [`ColorPickerSettings`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.DocumentEditorSettingsModel.html#Syncfusion_Blazor_DocumentEditor_DocumentEditorSettingsModel_ColorPickerSettings) in the document editor settings. The color picker offers customization options for its default appearance, including the ability to select between Picker and Palette modes for font and border colors.

The following example code illustrates how to customize the color picker in the Document Editor container.

```csharp
@using Syncfusion.Blazor.DocumentEditor
@inject Microsoft.AspNetCore.Components.NavigationManager UriHelper
@inject IJSRuntime JSRuntime

<SfDocumentEditorContainer @ref="container" Height="590px" DocumentEditorSettings="@settings">
</SfDocumentEditorContainer> 

@code {
    SfDocumentEditorContainer container; 
    DocumentEditorSettingsModel settings = new DocumentEditorSettingsModel() { ColorPickerSettings = { Mode = ColorPickerMode.Palette , ShowButtons = true , ModeSwitcher = true } };
}
```

The following table illustrates all the possible properties for the color picker.
 
| Property | Behavior | 
|---|---| 
| Columns | It is used to render the ColorPicker palette with specified columns. Defaults to 10 | 
| Disabled | It is used to enable / disable ColorPicker component. If it is disabled the ColorPicker popup won’t open. Defaults to false | 
| Mode | It is used to render the ColorPicker with the specified mode. Defaults to `Picker` | 
| ModeSwitcher | It is used to show / hide the mode switcher button of ColorPicker component. Defaults to true | 
| ShowButtons | It is used to show / hide the control buttons (apply / cancel) of ColorPicker component. Defaults to true |

## Online demo

Explore how to customize the color picker in the Blazor Document Editor for Word documents in this [live demo](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/color-picker-customization?theme=fluent2).