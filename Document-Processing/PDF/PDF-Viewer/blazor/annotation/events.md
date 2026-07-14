---
layout: post
title: Annotation Events in Blazor SfPdfViewer Component | Syncfusion
description: Learn how to subscribe to and handle annotations and signature annotation events in the Blazor SfPdfViewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Annotation Events in Blazor SfPdfViewer Component

Annotation events notify the application when annotations are added, selected, moved, resized, modified, or removed. Subscribe to these events by using the `PdfViewerEvents` tag inside the `SfPdfViewer` component.

## Events list

The table below lists every annotation and signature events in the `PdfViewerEvents` tag.

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

See [AddSignatureEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AddSignatureEventArgs.html) for properties such as `Id` (string), `PageNumber` (int), and `Bounds` (`PdfBounds` – the rectangle of the added signature in page coordinates).

The following example illustrates handling the `AddSignature` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AddSignature="@AddSignature"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task AddSignature(AddSignatureEventArgs args) 
    {
        Console.WriteLine($"Added signature ID: {args.Id}");
    }	 
}

```

## AnnotationAdded event

The [AnnotationAdded](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationAdded) event triggers when an annotation is added to a page.

#### Event arguments

See [AnnotationAddedEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationAddedEventArgs.html) for details such as `AnnotationId` (string), `AnnotationType` (`PdfAnnotationType`), `PageNumber` (int), and `Bounds` (`PdfBounds`).

The following example illustrates handling the `AnnotationAdded` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AnnotationAdded="@AnnotationAdded"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task AnnotationAdded(AnnotationAddEventArgs args)
    {
        Console.WriteLine($"Added annotation ID: {args.AnnotationId}");
    }	 
}

```

## AnnotationMouseover event

The [AnnotationMouseover](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationMouseover) event triggers when the mouse pointer moves over an annotation.

#### Event arguments

See [AnnotationMouseoverEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationMouseoverEventArgs.html) for details such as `AnnotationId` (string), `AnnotationType` (`PdfAnnotationType`), `PageNumber` (int), and the mouse cursor position via `X` and `Y` (double, in page coordinates).

The following example illustrates handling the `AnnotationMouseover` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AnnotationMouseover="@AnnotationMouseover"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task AnnotationMouseover(AnnotationMouseoverEventArgs args)
    {
        Console.WriteLine($"Annotation Mouseover X: {args.X} and Y: {args.Y}");
    }
}

```

## AnnotationMoved event

The [AnnotationMoved](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationMoved) event triggers when an annotation is moved on a page.

#### Event arguments

See [AnnotationMovedEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationMovedEventArgs.html) for details such as `AnnotationId` (string), `PageNumber` (int), `PreviousBounds` (`PdfBounds`), and `Bounds` (`PdfBounds`).

The following example illustrates handling the `AnnotationMoved` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AnnotationMoved="@AnnotationMoved"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task AnnotationMoved(AnnotationMoveEventArgs args)
    {
        Console.WriteLine($"Annotation current position: {args.CurrentPosition}");
    }	 
}

```

## AnnotationPropertiesChanged event

The [AnnotationPropertiesChanged](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationPropertiesChanged) event triggers when annotation properties are modified on a page.

#### Event arguments

See [AnnotationPropertiesChangedEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationPropertiesChangedEventArgs.html) for details such as `AnnotationId` (string), `PageNumber` (int), the changed property names, and old/new values. The class also exposes boolean change flags such as `IsColorChanged`, `IsOpacityChanged`, `IsThicknessChanged`, `IsFontFamilyChanged`, `IsFontSizeChanged`, and `IsTextChanged` that you can inspect in the handler.

The following example illustrates handling the `AnnotationPropertiesChanged` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AnnotationPropertiesChanged="@AnnotationPropertiesChanged"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task AnnotationPropertiesChanged(AnnotationPropertiesChangeEventArgs args)
    {
        Console.WriteLine($"Is annotation color changed: {args.IsColorChanged}");
    }	 
}

```

## AnnotationRemoved event

The [AnnotationRemoved](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationRemoved) event triggers when an annotation is removed from a page.

#### Event arguments

See [AnnotationRemovedEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationRemovedEventArgs.html) for details such as `AnnotationId` (string), `AnnotationType` (`PdfAnnotationType`), and `PageNumber` (int).

The following example illustrates handling the `AnnotationRemoved` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AnnotationRemoved="@AnnotationRemoved"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task AnnotationRemoved(AnnotationRemoveEventArgs args)
    {
        Console.WriteLine($"Removed annotation ID: {args.AnnotationId}");
    }	 
}

```

## AnnotationResized event

The [AnnotationResized](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationResized) event triggers when an annotation is resized on a page.

#### Event arguments

See [AnnotationResizedEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationResizedEventArgs.html) for details such as `AnnotationId` (string), `PageNumber` (int), `PreviousBounds` (`PdfBounds`), and `Bounds` (`PdfBounds`).

The following example illustrates handling the `AnnotationResized` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AnnotationResized="@AnnotationResized"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task AnnotationResized(AnnotationResizeEventArgs args)
    {
        Console.WriteLine($"Resized annotation ID: {args.AnnotationId}");
    }	 
}

```

## AnnotationSelected event

The [AnnotationSelected](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationSelected) event triggers when an annotation is selected on a page.

#### Event arguments

See [AnnotationSelectedEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationSelectedEventArgs.html) for details such as `AnnotationId` (string), `AnnotationType` (`PdfAnnotationType`), and `PageNumber` (int).

The following example illustrates handling the `AnnotationSelected` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AnnotationSelected="@AnnotationSelected"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task AnnotationSelected(AnnotationSelectEventArgs args)
    {
        Console.WriteLine($"Selected annotation ID: {args.AnnotationId}");
    }	 
}

```

## AnnotationUnselected event

The [AnnotationUnselected](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationUnselected) event triggers when an annotation is unselected on a page.

#### Event arguments

See [AnnotationUnselectedEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationUnselectedEventArgs.html) for details such as `AnnotationId` (string), `AnnotationType` (`PdfAnnotationType`), and `PageNumber` (int).

The following example illustrates handling the `AnnotationUnselected` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents AnnotationUnselected="@AnnotationUnselected"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task AnnotationUnselected(AnnotationUnselectEventArgs args)
    {
        Console.WriteLine($"Unselected Annotation ID: {args.AnnotationId}");
    }	 
}

```

## ExportFailed event

The [ExportFailed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ExportFailed) event triggers when annotation export fails.

#### Event arguments

See [ExportFailureEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ExportFailureEventArgs.html) for the `ErrorDetails` (string) describing why the export failed.

The following example illustrates handling the `ExportFailed` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents ExportFailed="@ExportFailed"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task ExportFailed(ExportFailureEventArgs args)
    {
        Console.WriteLine($"Error details: {args.ErrorDetails}");
    }	 
}

```

## ExportStarted event

The [ExportStarted](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ExportStarted) event triggers when annotation export starts.

#### Event arguments

See [ExportStartEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ExportStartEventArgs.html) for the `FileName` (string) of the file being exported. The export is triggered by the user's **Export annotations** action in the toolbar.

The following example illustrates handling the `ExportStarted` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents ExportStarted="@ExportStarted"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task ExportStarted(ExportStartEventArgs args)
    {
        Console.WriteLine("Export action started");
    }	 
}

```

## ExportSucceed event

The [ExportSucceed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ExportSucceed) event triggers when annotation export succeeds.

#### Event arguments

See [ExportSuccessEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ExportSuccessEventArgs.html) for details such as `FileName` (string, the name of the exported file) and the exported annotation data.

The following example illustrates handling the `ExportSucceed` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents ExportSucceed="@ExportSucceed"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task ExportSucceed(ExportSuccessEventArgs args)
    {
        Console.WriteLine($"Exported File name: {args.FileName}");
    }	 
}

```

## ImportFailed event

The [ImportFailed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ImportFailed) event triggers when annotation import fails.

#### Event arguments

See [ImportFailureEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ImportFailureEventArgs.html) for the `ErrorDetails` (string) describing why the import failed.

The following example illustrates handling the `ImportFailed` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents ImportFailed="@ImportFailed"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task ImportFailed(ImportFailureEventArgs args)
    {
        Console.WriteLine($"Error details: {args.ErrorDetails}");
    }	 
}

```

## ImportStarted event

The [ImportStarted](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ImportStarted) event triggers when annotation import starts.

#### Event arguments

See [ImportStartEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ImportStartEventArgs.html) for the `FileName` (string) of the file being imported. The import is triggered by the user's **Import annotations** action in the toolbar.

The following example illustrates handling the `ImportStarted` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents ImportStarted="@ImportStarted"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task ImportStarted(ImportStartEventArgs args)
    {
        Console.WriteLine("Import annotation started");
    }	 
}

```

## ImportSucceed event

The [ImportSucceed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ImportSucceed) event triggers when annotation import succeeds.

#### Event arguments

See [ImportSuccessEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ImportSuccessEventArgs.html) for the `FileName` (string) of the imported file.

The following example illustrates handling the `ImportSucceed` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents ImportSucceed="@ImportSucceed"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task ImportSucceed(ImportSuccessEventArgs args)
    {
        Console.WriteLine("Annotation imported successfully");
    }	 
}

```

## MoveSignature event

The [MoveSignature](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_MoveSignature) event triggers when a signature is moved on a page.

#### Event arguments

See [MoveSignatureEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.MoveSignatureEventArgs.html) for details such as `Id` (string), `PageNumber` (int), `PreviousBounds` (`PdfBounds`), and `Bounds` (`PdfBounds`).

The following example illustrates handling the `MoveSignature` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents MoveSignature="@MoveSignature"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task MoveSignature(MoveSignatureEventArgs args)
    {
        Console.WriteLine($"Moved Signature ID: {args.Id}");
    }	 
}

```

## OnAnnotationDoubleClick event

The [OnAnnotationDoubleClick](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnAnnotationDoubleClick) event triggers when an annotation is double-clicked.

#### Event arguments

See [AnnotationDoubleClickEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationDoubleClickEventArgs.html) for details such as `AnnotationId` (string), `AnnotationType` (`PdfAnnotationType`), `PageNumber` (int), and the mouse position (`X`, `Y` – double, in page coordinates).

The following example illustrates handling the `OnAnnotationDoubleClick` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents OnAnnotationDoubleClick="@OnAnnotationDoubleClick"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task OnAnnotationDoubleClick(AnnotationDoubleClickEventArgs args)
    {
        Console.WriteLine($"Double-clicked annotation ID: {args.AnnotationId}");
    }	 
}

```

## RemoveSignature event

The [RemoveSignature](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_RemoveSignature) event triggers when a signature is removed from a page.

#### Event arguments

See [RemoveSignatureEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.RemoveSignatureEventArgs.html) for details such as `Id` (string) and `PageNumber` (int).

The following example illustrates handling the `RemoveSignature` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents RemoveSignature="@RemoveSignature"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task RemoveSignature(RemoveSignatureEventArgs args)
    {
        Console.WriteLine($"Removed signature ID: {args.Id}");
    }	 
}

```

## ResizeSignature event

The [ResizeSignature](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ResizeSignature) event triggers when a signature is resized on a page.

#### Event arguments

See [ResizeSignatureEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ResizeSignatureEventArgs.html) for details such as `Id` (string), `PageNumber` (int), `PreviousBounds` (`PdfBounds`), and `Bounds` (`PdfBounds`).

The following example illustrates handling the `ResizeSignature` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents ResizeSignature="@ResizeSignature"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task ResizeSignature(ResizeSignatureEventArgs args)
    {
        Console.WriteLine($"Resized signature ID: {args.Id}");
    }	 
}

```

## SignaturePropertiesChange event

The [SignaturePropertiesChange](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_SignaturePropertiesChange) event triggers when signature properties are changed on a page.

#### Event arguments

See [SignaturePropertiesChangeEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SignaturePropertiesChangeEventArgs.html) for details such as `Id` (string), `PageNumber` (int), and the changed property values.

The following example illustrates handling the `SignaturePropertiesChange` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents SignaturePropertiesChange="@SignaturePropertiesChange"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task SignaturePropertiesChange(SignaturePropertiesChangeEventArgs args)
    {
        Console.WriteLine($"Is stroke color changed: {args.IsStrokeColorChanged}");
    }	 
}

```

## SignatureSelected event

The [SignatureSelected](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_SignatureSelected) event triggers when a signature is selected on a page.

#### Event arguments

See [SignatureSelectEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SignatureSelectEventArgs.html) for details such as `Id` (string) and `PageNumber` (int).

The following example illustrates handling the `SignatureSelected` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents SignatureSelected="@SignatureSelected"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task SignatureSelected(SignatureSelectEventArgs args)
    {
        Console.WriteLine($"Selected Signature ID: {args.Id}");
    }	 
}

```

## SignatureUnselected event

The [SignatureUnselected](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_SignatureUnselected) event triggers when a signature is unselected on a page.

#### Event arguments

See [SignatureSelectEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SignatureSelectEventArgs.html) for details such as `Id` (string) and `PageNumber` (int).

The following example illustrates handling the `SignatureUnselected` event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents SignatureUnselected="@SignatureUnselected"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private async Task SignatureUnselected(SignatureSelectEventArgs args)
    {
        Console.WriteLine($"Unselected Signature ID: {args.Id}");
    }	 
}

```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Annotations/Annotation%20Events).

## See also

* [Events in Blazor SfPdfViewer Component](../events)
* [Hand-written signature in Blazor SfPdfViewer](../hand-written-signature)
* [Import and export annotations in Blazor SfPdfViewer](./import-export-annotation)
* [Annotation permissions in Blazor SfPdfViewer](./annotation-permission)
* [Annotations overview in Blazor SfPdfViewer](./overview)
* [Getting started with Blazor SfPdfViewer](../getting-started/web-assembly-application)