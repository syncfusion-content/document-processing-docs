---
layout: post
title: Command Manager in Blazor SfPdfViewer Component | Syncfusion
description: Learn how to configure the Command Manager to add custom keyboard shortcuts and handle command execution in the Syncfusion Blazor PDF Viewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Command Manager in Blazor SfPdfViewer Component

The PDF Viewer supports mapping keyboard gestures to named commands so that pressing a defined key combination triggers a viewer action.

The [PdfViewerCommandManager](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerCommandManager.html) enables defining custom commands that execute when the specified key gesture is recognized.

## Command execution
Provide a list of keyboard shortcuts and corresponding action names; the viewer raises `CommandExecuted` when a registered shortcut is detected.

- [Commands](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.KeyboardCommand.html): Defines the collection of custom keyboard shortcuts and their action names.
- [CommandExecuted](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.CommandExecutedEventArgs.html): Raised when a registered keyboard shortcut is detected; handle this event to perform the action.

## How to create a custom command
Create custom keyboard commands by specifying an action name and the corresponding key gesture for the PDF Viewer.

- [ActionName](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.CommandExecutedEventArgs.html#Syncfusion_Blazor_SfPdfViewer_CommandExecutedEventArgs_ActionName): The name of the action to execute when the keyboard shortcut is pressed (for example, `FitToWidth`, `FitToPage`). The action name must match a recognized viewer action.

- [Gesture](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.KeyGesture.html): The combination of [keys](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.KeyGesture.html#Syncfusion_Blazor_SfPdfViewer_KeyGesture_Key) and [modifiers](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.KeyGesture.html#Syncfusion_Blazor_SfPdfViewer_KeyGesture_Modifiers) (Control, Shift, Alt, Meta). On macOS, Meta maps to the Command key.

### Usage
Register commands with `PdfViewerCommandManager` and handle `CommandExecuted` to invoke viewer methods (for example, `FitToWidthAsync` or `FitToPageAsync`). See the `CommandExecuted` API documentation for recognized action names and expected behavior.

The following example registers two custom keyboard commands (`FitToWidth` and `FitToPage`) and handles them in `CommandExecuted`. The example uses `SfPdfViewer2`; use the component that matches the project version.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 Height="100%"
              Width="100%"
              @ref="@pdfViewer"
              DocumentPath="@DocumentPath">
    <PdfViewerEvents CommandExecuted="@CommandExecute"></PdfViewerEvents>
    <PdfViewerCommandManager Commands="@command" ></PdfViewerCommandManager>                
</SfPdfViewer2>

@code {
    // Reference to the Pdf viewer 
    SfPdfViewer2 pdfViewer;
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    /// <summary> 
    /// Defines the list of custom commands 
    /// </summary> 

    public List<KeyboardCommand> command = new List<KeyboardCommand>() 
    { 
        new KeyboardCommand() 
        { 
            ActionName = "FitToWidth", 
            Gesture = new KeyGesture() { Key = PdfKeys.W, Modifiers = PdfModifierKeys.Shift } 
        }, 
        new KeyboardCommand() 
        { 
            ActionName = "FitToPage", 
            Gesture = new KeyGesture() { Key = PdfKeys.P, Modifiers = PdfModifierKeys.Alt } 
        } 
    }; 

    /// <summary> 
    /// Custom command execution. 
    /// </summary> 

    public void CommandExecute(CommandExecutedEventArgs args) 
    { 
        if(args.Modifiers == PdfModifierKeys.Shift && args.Key == PdfKeys.W) 
        { 
            pdfViewer.FitToWidthAsync(); 
        } 
        else if (args.Modifiers == PdfModifierKeys.Alt && args.Key == PdfKeys.P) 
        { 
            pdfViewer.FitToPageAsync(); 
        }  
    } 
} 

```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Keyboard%20accessibility/Command%20Manager)

## See also

* [Keyboard Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor PDF Viewer](./accessibility)
