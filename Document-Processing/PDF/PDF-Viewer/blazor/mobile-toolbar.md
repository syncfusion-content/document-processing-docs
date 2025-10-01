---
layout: post
title: Mobile toolbar in Blazor SfPdfViewer | Syncfusion
description: Learn how to use and customize the mobile toolbar, overflow menu, and navigation panel in the Syncfusion Blazor SfPdfViewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Mobile toolbar interface in Blazor SfPdfViewer

The mobile PDF Viewer provides features for viewing, searching, annotating, and managing PDF documents on phones and tablets. It includes search, download, bookmarks, annotations, form designer, and redaction. Desktop-style toolbar features can be enabled on mobile using the EnableDesktopMode API for a broader set of actions.

## Mobile mode toolbar configuration
In mobile mode, the toolbar is optimized for small screens and exposes the most common actions. The mobile toolbar can be customized using MobileToolbarItems (for mobile) and ToolbarItems (for desktop). When both are set, MobileToolbarItems controls the mobile toolbar content.

![Mobile toolbar with primary PDF interaction options](./images/mobileToolbar.png)

### Main toolbar options

- Open: Load a PDF document.
- Search: Open the search bar to find text within the document.

![Search bar displayed for finding text within a PDF](./images/searchOption.png)

- Undo/Redo: Undo or redo recent annotation actions.
- Edit annotations: Turn annotation editing on or off to add or modify annotations.

![Annotation editing toolbar allowing users to add, edit, or delete annotations on a PDF](./images/editAnnotation.png)

N> In mobile mode, the Annotation, Form Designer, and Redaction toolbars are displayed at the bottom of the viewer for easier reach.

- Form designer: Add, edit, or delete form fields in the PDF.

![Form designer toolbar for managing form fields in PDF](./images/formDesigner.png)

- Redaction: Open the redaction toolbar to mark and remove sensitive content.

![Redaction toolbar to redact sensitive content in PDF](./images/Redaction-MobileView.png)

Use the following code snippet to add the redaction toolbar to the PDF Viewer.

```cshtml
@page "/";

<SfPdfViewer2 @ref="SfPdfViewer2" Height="640px" Width="100%" DocumentPath="@DocumentPath">
    <PdfViewerToolbarSettings ToolbarItems="ToolbarItems" MobileToolbarItems="MobileToolbarItems"></PdfViewerToolbarSettings>
</SfPdfViewer2>
@code {
    SfPdfViewer2? SfPdfViewer2;
    bool redactionToolbar;
    private string DocumentPath { get; set; } = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
    public List<ToolbarItem>? ToolbarItems { get; set; }
    public List<MobileToolbarItem>? MobileToolbarItems { get; set; }
    protected override void OnInitialized()
    {
        ToolbarItems = new List<ToolbarItem>()
        {
            ToolbarItem.OpenOption,
            ToolbarItem.PageNavigationTool,
            ToolbarItem.MagnificationTool,
            ToolbarItem.SelectionTool,
            ToolbarItem.PanTool,
            ToolbarItem.UndoRedoTool,
            ToolbarItem.CommentTool,
            ToolbarItem.SubmitForm,
            ToolbarItem.SearchOption,
            ToolbarItem.AnnotationEditTool,
            ToolbarItem.Redaction,
            ToolbarItem.FormDesigner,
            ToolbarItem.PrintOption,
            ToolbarItem.DownloadOption
        };
        MobileToolbarItems = new List<MobileToolbarItem>()
        {
            MobileToolbarItem.Open,
            MobileToolbarItem.UndoRedo,
            MobileToolbarItem.EditAnnotation,
            MobileToolbarItem.Redaction,
            MobileToolbarItem.FormDesigner,
            MobileToolbarItem.Search
        };
    }
}
```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Toolbar)

### More options menu
Open the overflow (three-dots) menu to access additional actions such as:

- Download: Download the currently opened PDF document.
- Bookmark: View and navigate bookmarks within the document.

![More options menu showing additional actions like download and bookmark](./images/moreOptions.png)

## Enable desktop mode on mobile

Enable the desktop toolbar on mobile devices with the EnableDesktopMode API. This replaces the mobile toolbar with the desktop layout and provides access to additional actions and controls.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%" EnableDesktopMode="true">
</SfPdfViewer2>
```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Toolbar)

## Modern navigation panel in mobile view

On mobile devices, the navigation toolbar collapses into a toggle menu to save space. Any custom items added appear at the beginning of this menu.

![Modern navigation in mobile view](./images/ModernNavigation-mobile.png)

Enable the modern navigation panel by setting EnableNavigationPanel to true.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%" EnableNavigationPanel="true">
</SfPdfViewer2>
```
[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Toolbar)

## Enable scrolling in desktop mode with touch gestures

For smooth scrolling of PDF documents on mobile while in desktop mode, disable text selection (set EnableTextSelection to false) to allow touch panning.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%" EnableDesktopMode="true" EnableTextSelection="false">
</SfPdfViewer2>
```
[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Toolbar)

## Print option availability

The Print option is not available in mobile mode by default. To use printing on mobile, enable the desktop toolbar with the EnableDesktopMode API. Availability and behavior may vary by mobile browser.

## See also

- [Annotations in mobile view](./annotation/annotations-in-mobile-view)
- [Form designer in mobile view](./form-designer/form-designer-in-mobile-view)
