---
layout: post
title: How to Add a Save Button to the Toolbar in JavaScript | Syncfusion
description: Add, show, hide, enable, and disable a custom Save button in the built-in toolbar of the JavaScript (ES6) PDF Viewer using toolbar settings.
platform: document-processing
control: Toolbar

documentation: ug
domainurl: ##DomainURL##
---

# How to Add a Save Button to the Toolbar in JavaScript (ES6) PDF Viewer

The PDF Viewer supports customizing toolbar items, including adding, showing, hiding, enabling, and disabling items.

- Save button: The Save button can be defined using [CustomToolbarItemModel](https://ej2.syncfusion.com/documentation/api/document-editor/customToolbarItemModel) and included alongside existing items via [ToolbarSettings](https://ej2.syncfusion.com/documentation/api/file-manager/toolbarSettings). Handle the click action using [`toolbarclick`](https://ej2.syncfusion.com/documentation/api/file-manager/toolbarClickEventArgs).

- Show or hide: The Save button can be shown or hidden using [ToolbarSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/toolbarSettings). Predefined items are listed under [`ToolbarItem`](https://ej2.syncfusion.com/documentation/api/pdfviewer/toolbarItem).

- Enable or disable: The Save button can be enabled or disabled using [`enableToolbarItem`](https://ej2.syncfusion.com/documentation/api/pdfviewer/toolbar#enabletoolbaritem).

{% tabs %}
{% highlight js tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner,Print,CustomToolbarItemModel} from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner,Print);
let toolItem1: CustomToolbarItemModel = {
    prefixIcon: 'e-icons e-save',
    id: 'download',
    text: 'Save',
    tooltipText: 'Save Button',
    align: 'Left'
};
let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
pdfviewer.toolbarSettings = { toolbarItems: ['OpenOption', toolItem1, 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']}
pdfviewer.appendTo('#PdfViewer');
// To handle custom toolbar click event.
pdfviewer.toolbarClick = function (args) {
   if (args.item && args.item.id === 'download') {
      pdfviewer.download();
   }
};
function OnCreateSearch(this: any): any {
    this.addIcon('prepend', 'e-icons e-search');
}

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner,Print,CustomToolbarItemModel} from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner,Print);
let toolItem1: CustomToolbarItemModel = {
    prefixIcon: 'e-icons e-save',
    id: 'download',
    text: 'Save',
    tooltipText: 'Save Button',
    align: 'Left'
};
let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.toolbarSettings = { toolbarItems: ['OpenOption', toolItem1, 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']}
pdfviewer.appendTo('#PdfViewer');
// To handle custom toolbar click event.
pdfviewer.toolbarClick = function (args) {
   if (args.item && args.item.id === 'download') {
      pdfviewer.download();
   }
};
function OnCreateSearch(this: any): any {
    this.addIcon('prepend', 'e-icons e-search');
}
{% endhighlight %}
{% endtabs %}

N> Default toolbar items: ['OpenOption', 'PageNavigationTool','MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption','UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']

## Align property

Specifies the alignment of the Save button within the toolbar.

- Left: Aligns the item to the left side of the toolbar.
- Right: Aligns the item to the right side of the toolbar.

### Tooltip property

Sets the tooltip text for the Save button. The tooltip provides additional information on hover.

### CssClass property

Applies custom CSS classes to the Save button for styling using the `cssClass` property.

### Prefix property

Sets the CSS class or icon to add as a prefix to the Save button content.

### ID property

The id property within a CustomToolbarItemModel is required and uniquely identifies each toolbar item for configuration and interaction.

When defining or customizing toolbar items, assign a specific, descriptive id to each item. These properties are commonly used when defining custom toolbar items with `CustomToolbarItemModel` in the context of Syncfusion PDF Viewer. When configuring the toolbar using the `ToolbarSettings` property, include these properties to customize appearance and behavior.

N> When customizing the Save button, icons or text can be used based on design preference.

[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to/Add%20Save%20Button%20In%20Toolbar)