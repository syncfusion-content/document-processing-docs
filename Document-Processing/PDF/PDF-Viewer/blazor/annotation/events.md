---
layout: post
title: Annotation Events in Blazor SfPdfViewer Component | Syncfusion
description: Learn how to subscribe to and handle annotations and signature annotation events in the Syncfusion Blazor SfPdfViewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Annotation Events in Blazor SfPdfViewer Component

Annotation events notify the application when annotations are added, selected, moved, resized, modified, or removed. Subscribe to these events by using the PdfViewerEvents tag inside the SfPdfViewer component.

|Name|Description|
|---|---|
|AddSignature|Triggers when a signature is added to a page.| 
|AnnotationAdded|Triggers when an annotation is added to a page.| 
|AnnotationMouseover|Triggers when the mouse pointer moves over an annotation.| 
|AnnotationMoved|Triggers when an annotation is moved on a page.| 
|AnnotationPropertiesChanged|Triggers when annotation properties are modified.| 
|AnnotationRemoved|Triggers when an annotation is removed from a page.| 
|AnnotationResized|Triggers when an annotation is resized on a page.| 
|AnnotationSelected|Triggers when an annotation is selected on a page.| 
|AnnotationUnselected|Triggers when an annotation is unselected on a page.| 
|ExportFailed|Triggers when an annotation export fails.| 
|ExportStarted|Triggers when annotation export starts.| 
|ExportSucceed|Triggers when annotation export succeeds.| 
|ImportFailed|Triggers when an annotation import fails.| 
|ImportStarted|Triggers when annotation import starts.| 
|ImportSucceed|Triggers when annotation import succeeds.| 
|MoveSignature|Triggers when a signature is moved on a page.| 
|OnAnnotationDoubleClick|Triggers when an annotation is double-clicked.| 
|RemoveSignature|Triggers when a signature is removed from a page.| 
|ResizeSignature|Triggers when a signature is resized on a page.| 
|SignaturePropertiesChange|Triggers when signature properties are changed on a page.| 
|SignatureSelected|Triggers when a signature is selected on a page.| 
|SignatureUnselected|Triggers when a signature is unselected on a page.| 

## AddSignature event

The [AddSignature](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AddSignature) event triggers when a signature is added to a page.

#### Event arguments

See [AddSignatureEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AddSignatureEventArgs.html) for properties such as `Id`, `PageNumber`, and `Bounds`.

The following example illustrates handling the `AddSignature` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AddSignature="@AddSignature"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task AddSignature(AddSignatureEventArgs args) 
    {
        Console.WriteLine($"Added Signature ID: {args.Id}");
    }	 
}

```

## AnnotationAdded event

The [AnnotationAdded](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationAdded) event triggers when an annotation is added to a page.

#### Event arguments

See [AnnotationAddedEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationAddedEventArgs.html) for details such as `AnnotationId`, `AnnotationType`, `PageNumber`, and `Bounds`.

The following example illustrates handling the `AnnotationAdded` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AnnotationAdded="@AnnotationAdded"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task AnnotationAdded(AnnotationAddEventArgs args) 
    {
        Console.WriteLine($"Added Annotation ID: {args.AnnotationId}");
    }	 
}

```

## AnnotationMouseover event

The [AnnotationMouseover](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationMouseover) event triggers when the mouse pointer moves over an annotation.

#### Event arguments

See [AnnotationMouseoverEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationMouseoverEventArgs.html) for details such as `AnnotationId`, `AnnotationType`, `PageNumber`, and cursor position.

The following example illustrates handling the `AnnotationMouseover` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AnnotationMouseover="@AnnotationMouseover"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task AnnotationMouseover(AnnotationMouseoverEventArgs args) 
    {
        Console.WriteLine($"Annotation Mouseover X: {args.X} and y: {args.X}");
    }	 
}

```

## AnnotationMoved event

The [AnnotationMoved](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationMoved) event triggers when an annotation is moved on a page.

#### Event arguments

See [AnnotationMovedEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationMovedEventArgs.html) for details such as `AnnotationId`, `PageNumber`, `PreviousBounds`, and `Bounds`.

The following example illustrates handling the `AnnotationMoved` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AnnotationMoved="@AnnotationMoved"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task AnnotationMoved(AnnotationMoveEventArgs args) 
    {
        Console.WriteLine($"Annotation Current Position: {args.CurrentPosition}");
    }	 
}

```

## AnnotationPropertiesChanged event

The [AnnotationPropertiesChanged](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationPropertiesChanged) event triggers when annotation properties are modified on a page.

#### Event arguments

See [AnnotationPropertiesChangedEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationPropertiesChangedEventArgs.html) for details such as `AnnotationId`, `PageNumber`, changed property names, and old/new values.

The following example illustrates handling the `AnnotationPropertiesChanged` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AnnotationPropertiesChanged="@AnnotationPropertiesChanged"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task AnnotationPropertiesChanged(AnnotationPropertiesChangeEventArgs args) 
    {
        Console.WriteLine($"Is Annotation Color Changed: {args.IsColorChanged}");
    }	 
}

```

## AnnotationRemoved event

The [AnnotationRemoved](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationRemoved) event triggers when an annotation is removed from a page.

#### Event arguments

See [AnnotationRemovedEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationRemovedEventArgs.html) for details such as `AnnotationId`, `AnnotationType`, and `PageNumber`.

The following example illustrates handling the `AnnotationRemoved` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AnnotationRemoved="@AnnotationRemoved"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task AnnotationRemoved(AnnotationRemoveEventArgs args) 
    {
        Console.WriteLine($"Removed Annotation ID: {args.AnnotationId}");
    }	 
}

```

## AnnotationResized event

The [AnnotationResized](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationResized) event triggers when an annotation is resized on a page.

#### Event arguments

See [AnnotationResizedEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationResizedEventArgs.html) for details such as `AnnotationId`, `PageNumber`, `PreviousBounds`, and `Bounds`.

The following example illustrates handling the `AnnotationResized` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AnnotationResized="@AnnotationResized"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task AnnotationResized(AnnotationResizeEventArgs args) 
    {
        Console.WriteLine($"Resized Annotation ID: {args.AnnotationId}");
    }	 
}

```

## AnnotationSelected event

The [AnnotationSelected](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationSelected) event triggers when an annotation is selected on a page.

#### Event arguments

See [AnnotationSelectedEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationSelectedEventArgs.html) for details such as `AnnotationId`, `AnnotationType`, and `PageNumber`.

The following example illustrates handling the `AnnotationSelected` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AnnotationSelected="@AnnotationSelected"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task AnnotationSelected(AnnotationSelectEventArgs args) 
    {
        Console.WriteLine($"Selected Annotation ID: {args.AnnotationId}");
    }	 
}

```

## AnnotationUnselected event

The [AnnotationUnselected](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationUnselected) event triggers when an annotation is unselected on a page.

#### Event arguments

See [AnnotationUnselectedEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationUnselectedEventArgs.html) for details such as `AnnotationId`, `AnnotationType`, and `PageNumber`.

The following example illustrates handling the `AnnotationUnselected` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AnnotationUnselected="@AnnotationUnselected"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task AnnotationUnselected(AnnotationUnselectEventArgs args) 
    {
        Console.WriteLine($"UnSelected Annotation ID: {args.AnnotationId}");
    }	 
}

```

## ExportFailed event

The [ExportFailed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ExportFailed) event triggers when annotation export fails.

#### Event arguments

See [ExportFailureEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ExportFailureEventArgs.html) for details such as `ErrorDetails`.

The following example illustrates handling the `ExportFailed` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents ExportFailed="@ExportFailed"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task ExportFailed(ExportFailureEventArgs args) 
    {
        Console.WriteLine($"Error details: {args.ErrorDetails}");
    }	 
}

```

## ExportStarted event

The [ExportStarted](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ExportStarted) event triggers when annotation export starts.

#### Event arguments

See [ExportStartEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ExportStartEventArgs.html) for details about the export start event.

The following example illustrates handling the `ExportStarted` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents ExportStarted="@ExportStarted"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task ExportStarted(ExportStartEventArgs args) 
    {
        Console.WriteLine("Export Action Started");
    }	 
}

```

## ExportSucceed event

The [ExportSucceed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ExportSucceed) event triggers when annotation export succeeds.

#### Event arguments

See [ExportSuccessEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ExportSuccessEventArgs.html) for details such as `FileName`.

The following example illustrates handling the `ExportSucceed` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents ExportSucceed="@ExportSucceed"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task ExportSucceed(ExportSuccessEventArgs args) 
    {
        Console.WriteLine($"Exported File name : {args.FileName }");
    }	 
}

```

## ImportFailed event

The [ImportFailed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ImportFailed) event triggers when annotation import fails.

#### Event arguments

See [ImportFailureEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ImportFailureEventArgs.html) for details such as `ErrorDetails`.

The following example illustrates handling the `ImportFailed` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents ImportFailed="@ImportFailed"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task ImportFailed(ImportFailureEventArgs args) 
    {
        Console.WriteLine($"Error details: {args.ErrorDetails}");
    }	 
}

```

## ImportStarted event

The [ImportStarted](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ImportStarted) event triggers when annotation import starts.

#### Event arguments

See [ImportStartEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ImportStartEventArgs.html) for details about the import start event.

The following example illustrates handling the `ImportStarted` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents ImportStarted="@ImportStarted"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task ImportStarted(ImportStartEventArgs args) 
    {
        Console.WriteLine("Import Annotation Started");
    }	 
}

```

## ImportSucceed event

The [ImportSucceed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ImportSucceed) event triggers when annotation import succeeds.

#### Event arguments

See [ImportSuccessEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ImportSuccessEventArgs.html) for details about successful import.

The following example illustrates handling the `ImportSucceed` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents ImportSucceed="@ImportSucceed"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task ImportSucceed(ImportSuccessEventArgs args) 
    {
        Console.WriteLine("Annotation Imported Successfully");
    }	 
}

```

## MoveSignature event

The [MoveSignature](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_MoveSignature) event triggers when a signature is moved on a page.

#### Event arguments

See [MoveSignatureEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.MoveSignatureEventArgs.html) for details such as `Id`, `PageNumber`, `PreviousBounds`, and `Bounds`.

The following example illustrates handling the `MoveSignature` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents MoveSignature="@MoveSignature"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task MoveSignature(MoveSignatureEventArgs args) 
    {
        Console.WriteLine($"Moved Signture ID: {args.Id}");
    }	 
}

```

## OnAnnotationDoubleClick event

The [OnAnnotationDoubleClick](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnAnnotationDoubleClick) event triggers when an annotation is double-clicked.

#### Event arguments

See [AnnotationDoubleClickEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationDoubleClickEventArgs.html) for details such as `AnnotationId`, `AnnotationType`, `PageNumber`, and mouse position.

The following example illustrates handling the `OnAnnotationDoubleClick` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents OnAnnotationDoubleClick="@OnAnnotationDoubleClick"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task OnAnnotationDoubleClick(AnnotationDoubleClickEventArgs args) 
    {
        Console.WriteLine($"Double Clicked Annotation ID: {args.AnnotationId}");
    }	 
}

```

## RemoveSignature event

The [RemoveSignature](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_RemoveSignature) event triggers when a signature is removed from a page.

#### Event arguments

See [RemoveSignatureEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.RemoveSignatureEventArgs.html) for details such as `Id` and `PageNumber`.

The following example illustrates handling the `RemoveSignature` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents RemoveSignature="@RemoveSignature"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task RemoveSignature(RemoveSignatureEventArgs args) 
    {
        Console.WriteLine($"Removed Signature ID: {args.Id}");
    }	 
}

```

## ResizeSignature event

The [ResizeSignature](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ResizeSignature) event triggers when a signature is resized on a page.

#### Event arguments

See [ResizeSignatureEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ResizeSignatureEventArgs.html) for details such as `Id`, `PageNumber`, `PreviousBounds`, and `Bounds`.

The following example illustrates handling the `ResizeSignature` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents ResizeSignature="@ResizeSignature"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task ResizeSignature(ResizeSignatureEventArgs args) 
    {
        Console.WriteLine($"Resized Signature ID: {args.Id}");
    }	 
}

```

## SignaturePropertiesChange event

The [SignaturePropertiesChange](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_SignaturePropertiesChange) event triggers when signature properties are changed on a page.

#### Event arguments

See [SignaturePropertiesChangeEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SignaturePropertiesChangeEventArgs.html) for details such as `Id`, `PageNumber`, and changed property values.

The following example illustrates handling the `SignaturePropertiesChange` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents SignaturePropertiesChange="@SignaturePropertiesChange"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task SignaturePropertiesChange(SignaturePropertiesChangeEventArgs args) 
    {
        Console.WriteLine($"Is Stroke Color Changed: {args.IsStrokeColorChanged}");
    }	 
}

```

## SignatureSelected event

The [SignatureSelected](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_SignatureSelected) event triggers when a signature is selected on a page.

#### Event arguments

See [SignatureSelectedEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SignatureSelectedEventArgs.html) for details such as `Id` and `PageNumber`.

The following example illustrates handling the `SignatureSelected` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents SignatureSelected="@SignatureSelected"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task SignatureSelected(SignatureSelectEventArgs args) 
    {
        Console.WriteLine($"Selected Signture ID: {args.Id}");
    }	 
}

```

## SignatureUnselected event

The [SignatureUnselected](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_SignatureUnselected) event triggers when a signature is unselected on a page.

#### Event arguments

See [SignatureUnselectedEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SignatureUnselectedEventArgs.html) for details such as `Id` and `PageNumber`.

The following example illustrates handling the `SignatureUnselected` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents SignatureUnselected="@SignatureUnselected"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task SignatureUnselected(SignatureSelectEventArgs args) 
    {
        Console.WriteLine($"UnSelected Signature ID: {args.Id}");
    }	 
}

```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Annotations/Annotation%20Events).

## See also

* [Events in Blazor SfPdfViewer Component](../events)