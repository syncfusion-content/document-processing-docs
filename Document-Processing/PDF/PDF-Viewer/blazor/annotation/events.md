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
|AddSignature|Triggers when a signature is added to a page in the PDF document.|
|AnnotationAdded|Triggers when an annotation is added to a page in the PDF document.|
|AnnotationMouseover|Triggers when the mouse pointer moves over an annotation object.|
|AnnotationMoved|Triggers when an annotation is moved on a page in the PDF document.|
|AnnotationPropertiesChanged|Triggers when annotation properties are modified on a PDF page.|
|AnnotationRemoved|Triggers when an annotation is removed from a page in the PDF document.|
|AnnotationResized|Triggers when an annotation is resized on a page in the PDF document.|
|AnnotationSelected|Triggers when an annotation is selected on a page in the PDF document.|
|AnnotationUnselected|Triggers when an annotation is unselected on a page in the PDF document.|
|ExportFailed|Triggers when exporting annotations fails in the SfPdfViewer.|
|ExportStarted|Triggers when exporting annotations starts in the SfPdfViewer.|
|ExportSucceed|Triggers when exporting annotations succeeds in the SfPdfViewer.|
|ImportFailed|Triggers when importing annotations fails in the PDF document.|
|ImportStarted|Triggers when importing annotations starts in the PDF document.|
|ImportSucceed|Triggers when importing annotations succeeds in the PDF document.|
|MoveSignature|Triggers when a signature is moved on a page in the PDF document.|
|OnAnnotationDoubleClick|Triggers when an annotation is double-clicked.|
|RemoveSignature|Triggers when a signature is removed from a page in the PDF document.|
|ResizeSignature|Triggers when a signature is resized on a page in the PDF document.|
|SignaturePropertiesChange|Triggers when the properties of a signature are changed on a page in the PDF document.|
|SignatureSelected|Triggers when a signature is selected on a page in the PDF document.|
|SignatureUnselected|Triggers when a signature is unselected on a page in the PDF document.|

## AddSignature Event

The [AddSignature](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AddSignature) event triggers when a signature is added to a page in the PDF document.

#### Event Arguments

For event data, see [AddSignatureEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AddSignatureEventArgs.html) for properties such as Id, PageNumber, and Bounds.

The following example illustrates how to handle the AddSignature event.

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

## AnnotationAdded Event

The [AnnotationAdded](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationAdded) event triggers when an annotation is added to a page in the PDF document.

#### Event Arguments

See [AnnotationAddedEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationAddedEventArgs.html) for details such as AnnotationId, AnnotationType, PageNumber, and Bounds.

The following example illustrates how to handle the AnnotationAdded event.

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

## AnnotationMouseover Event

The [AnnotationMouseover](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationMouseover) event triggers when the mouse pointer moves over an annotation object.

#### Event Arguments

See [AnnotationMouseoverEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationMouseoverEventArgs.html) for details such as AnnotationId, AnnotationType, PageNumber, and cursor position.

The following example illustrates how to handle the AnnotationMouseover event.

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

## AnnotationMoved Event

The [AnnotationMoved](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationMoved) event triggers when an annotation is moved on a page in the PDF document.

#### Event Arguments

See [AnnotationMovedEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationMovedEventArgs.html) for details such as AnnotationId, PageNumber, PreviousBounds, and Bounds.

The following example illustrates how to handle the AnnotationMoved event.

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

## AnnotationPropertiesChanged Event

The [AnnotationPropertiesChanged](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationPropertiesChanged) event triggers when annotation properties are modified on a PDF page.

#### Event Arguments

See [AnnotationPropertiesChangedEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationPropertiesChangedEventArgs.html) for details such as AnnotationId, PageNumber, changed property names, and old/new values.

The following example illustrates how to handle the AnnotationPropertiesChanged event.

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

## AnnotationRemoved Event

The [AnnotationRemoved](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationRemoved) event triggers when an annotation is removed from a page in the PDF document.

#### Event Arguments

See [AnnotationRemovedEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationRemovedEventArgs.html) for details such as AnnotationId, AnnotationType, and PageNumber.

The following example illustrates how to handle the AnnotationRemoved event.

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

## AnnotationResized Event

The [AnnotationResized](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationResized) event triggers when an annotation is resized on a page in the PDF document.

#### Event Arguments

See [AnnotationResizedEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationResizedEventArgs.html) for details such as AnnotationId, PageNumber, PreviousBounds, and Bounds.

The following example illustrates how to handle the AnnotationResized event.

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

## AnnotationSelected Event

The [AnnotationSelected](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationSelected) event triggers when an annotation is selected on a page in the PDF document.

#### Event Arguments

See [AnnotationSelectedEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationSelectedEventArgs.html) for details such as AnnotationId, AnnotationType, and PageNumber.

The following example illustrates how to handle the AnnotationSelected event.

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

## AnnotationUnselected Event

The [AnnotationUnselected](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationUnselected) event triggers when an annotation is unselected on a page in the PDF document.

#### Event Arguments

See [AnnotationUnselectedEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationUnselectedEventArgs.html) for details such as AnnotationId, AnnotationType, and PageNumber.

The following example illustrates how to handle the AnnotationUnselected event.

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

## ExportFailed Event

The [ExportFailed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ExportFailed) event triggers when an export annotations failed in the PDF Viewer.

#### Event Arguments

See [ExportFailureEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ExportFailureEventArgs.html) for details such as ErrorDetails.

The following example illustrates how to handle the ExportFailed event.

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

## ExportStarted Event

The [ExportStarted](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ExportStarted) event triggers  when an exported annotations started in the PDF Viewer.

#### Event Arguments

See [ExportStartEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ExportStartEventArgs.html) triggers when an exported annotations started in the PDF Viewer.

The following example illustrates how to handle the ExportStarted event.

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

## ExportSucceed Event

The [ExportSucceed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ExportSucceed) event triggers when an export annotations succeed in the PDF Viewer.

#### Event Arguments

See [ExportSuccessEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ExportSuccessEventArgs.html) for details such as FileName.

The following example illustrates how to handle the ExportSucceed event.

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

## ImportFailed Event

The [ImportFailed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ImportFailed) event triggers when an imports annotations failed in the PDF document.

#### Event Arguments

See [ImportFailureEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ImportFailureEventArgs.html) for details such as ErrorDetails.

The following example illustrates how to handle the ImportFailed event.

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

## ImportStarted Event

The [ImportStarted](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ImportStarted) event triggers when an imported annotations started in the PDF document.

#### Event Arguments

See [ImportStartEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ImportStartEventArgs.html) triggers when an imported annotations started in the PDF document.

The following example illustrates how to handle the ImportStarted event.

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

## ImportSucceed Event

The [ImportSucceed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ImportSucceed) event triggers when an imports annotations succeed in the PDF document.

#### Event Arguments

See [ImportSuccessEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ImportSuccessEventArgs.html) triggers when an imports annotations succeed in the PDF document.

The following example illustrates how to handle the ImportSucceed event.

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

## MoveSignature Event

The [MoveSignature](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_MoveSignature) event triggers when a signature is moved on a page in the PDF document.

#### Event Arguments

See [MoveSignatureEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.MoveSignatureEventArgs.html) for details such as Id, PageNumber, PreviousBounds, and Bounds.

The following example illustrates how to handle the MoveSignature event.

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

## OnAnnotationDoubleClick Event

The [OnAnnotationDoubleClick](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnAnnotationDoubleClick) event triggers when an annotation is double-clicked.

#### Event Arguments

See [AnnotationDoubleClickEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.AnnotationDoubleClickEventArgs.html) for details such as AnnotationId, AnnotationType, PageNumber, and mouse position.

The following example illustrates how to handle the OnAnnotationDoubleClick event.

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

## RemoveSignature Event

The [RemoveSignature](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_RemoveSignature) event triggers when a signature is removed from a page in the PDF document.

#### Event Arguments

See [RemoveSignatureEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.RemoveSignatureEventArgs.html) for details such as Id and PageNumber.

The following example illustrates how to handle the RemoveSignature event.

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

## ResizeSignature Event

The [ResizeSignature](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ResizeSignature) event triggers when a signature is resized on a page in the PDF document.

#### Event Arguments

See [ResizeSignatureEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.ResizeSignatureEventArgs.html) for details such as Id, PageNumber, PreviousBounds, and Bounds.

The following example illustrates how to handle the ResizeSignature event.

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

## SignaturePropertiesChange Event

The [SignaturePropertiesChange](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_SignaturePropertiesChange) event triggers when the properties of a signature are changed on a page in the PDF document.

#### Event Arguments

See [SignaturePropertiesChangeEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SignaturePropertiesChangeEventArgs.html) for details such as Id, PageNumber, and changed property values.

The following example illustrates how to handle the SignaturePropertiesChange event.

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

## SignatureSelected Event

The [SignatureSelected](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_SignatureSelected) event triggers when a signature is selected on a page in the PDF document.

#### Event Arguments

See [SignatureSelectedEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SignatureSelectedEventArgs.html) for details such as Id and PageNumber.

The following example illustrates how to handle the SignatureSelected event.

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

## SignatureUnselected Event

The [SignatureUnselected](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_SignatureUnselected) event triggers when a signature is unselected on a page in the PDF document.

#### Event Arguments

See [SignatureUnselectedEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SignatureUnselectedEventArgs.html) for details such as Id and PageNumber.

The following example illustrates how to handle the SignatureUnselected event.

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