---
title: Events in ASP.NET Core PDF Viewer Control | Syncfusion
description: Learn all events in ASP.NET Core PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Events in ASP.NET Core PDF Viewer Control

The PDF Viewer component provides a comprehensive event system for integrating custom logic into application workflows. Events are triggered throughout the document lifecycle, user interactions, and feature operations.

## Event reference table

The following table lists all events supported by the PDF Viewer control, organized by category:

| Event | Description |
| ----- | ----------- |
| [`bookmarkClick`](#bookmarkclick) | Triggers when a bookmark item is clicked in the bookmark panel. |
| [`buttonFieldClick`](#buttonfieldclick) | Triggers when a button form field is clicked. |
| [`commentAdd`](#commentadd) | Triggers when a comment is added to the comment panel. |
| [`commentDelete`](#commentdelete) | Triggers when a comment is deleted from the comment panel. |
| [`commentEdit`](#commentedit) | Triggers when a comment is edited in the comment panel. |
| [`commentSelect`](#commentselect) | Triggers when a comment is selected in the comment panel. |
| [`commentStatusChanged`](#commentstatuschanged) | Triggers when a comment’s status changes in the comment panel. |
| [`created`](#created) | Triggers during the creation of the PDF Viewer component. |
| [`customContextMenuBeforeOpen`](#customcontextmenubeforeopen) | Fires before the custom context menu opens. |
| [`customContextMenuSelect`](#customcontextmenuselect) | Fires when a custom context menu item is selected. |
| [`documentLoad`](#documentload) | Triggers while loading a document into the PDF Viewer. |
| [`documentLoadFailed`](#documentloadfailed) | Triggers when document loading fails. |
| [`documentUnload`](#documentunload) | Triggers when the document is closed. |
| [`downloadEnd`](#downloadend) | Triggers after a document is downloaded. |
| [`downloadStart`](#downloadstart) | Triggers when the download action is initiated. |
| [`exportFailed`](#exportfailed) | Triggers when exporting annotations fails. |
| [`exportStart`](#exportstart) | Triggers when exporting annotations starts. |
| [`exportSuccess`](#exportsuccess) | Triggers when annotations are exported successfully. |
| [`extractTextCompleted`](#extracttextcompleted) | Triggers when text extraction is completed. |
| [`hyperlinkClick`](#hyperlinkclick) | Triggers when a hyperlink is clicked. |
| [`hyperlinkMouseOver`](#hyperlinkmouseover) | Triggers when hovering over a hyperlink. |
| [`importFailed`](#importfailed) | Triggers when importing annotations fails. |
| [`importStart`](#importstart) | Triggers when importing annotations starts. |
| [`importSuccess`](#importsuccess) | Triggers when annotations are imported successfully. |
| [`keyboardCustomCommands`](#keyboardcustomcommands) | Triggers when customized keyboard command keys are pressed. |
| [`moveSignature`](#movesignature) | Triggers when a signature is moved across the page. |
| [`pageChange`](#pagechange) | Triggers when the current page number changes. |
| [`pageClick`](#pageclick) | Triggers when a mouse click occurs on a page. |
| [`pageMouseover`](#pagemouseover) | Triggers when moving the mouse over a page. |
| [`pageOrganizerSaveAs`](#pageorganizersaveas) | Triggers when a `save as` action is performed in the page organizer. |
| [`pageRenderComplete`](#pagerendercomplete) | Triggers after a page finishes rendering. |
| [`pageRenderInitiate`](#pagerenderinitiate) | Triggers when page rendering begins. |
| [`printEnd`](#printend) | Triggers when a print action is completed. |
| [`printStart`](#printstart) | Triggers when a print action is initiated. |
| [`removeSignature`](#removesignature) | Triggers when a signature is removed. |
| [`resizeSignature`](#resizesignature) | Triggers when a signature is resized. |
| [`resourcesLoaded`](#resourcesloaded) | Triggers after PDFium resources are loaded. |
| [`signaturePropertiesChange`](#signaturepropertieschange) | Triggers when signature properties are changed. |
| [`signatureSelect`](#signatureselect) | Triggers when a signature is selected. |
| [`signatureUnselect`](#signatureunselect) | Triggers when a signature is unselected. |
| [`textSearchComplete`](#textsearchcomplete) | Triggers when a text search is completed. |
| [`textSearchHighlight`](#textsearchhighlight) | Triggers when the searched text is highlighted. |
| [`textSearchStart`](#textsearchstart) | Triggers when a text search is initiated. |
| [`textSelectionEnd`](#textselectionend) | Triggers when text selection is complete. |
| [`textSelectionStart`](#textselectionstart) | Triggers when text selection is initiated. |
| [`thumbnailClick`](#thumbnailclick) | Triggers when a thumbnail is clicked. |
| [`toolbarClick`](#toolbarclick) | Triggers when a toolbar item is clicked. |
| [`validateFormFields`](#validateformfields) | Triggers when form field validation fails. |
| [`zoomChange`](#zoomchange) | Triggers when the magnification value changes. |

Note: For annotation and signature events, see the dedicated Annotations Events topic.

## bookmarkClick

The [bookmarkClick](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_BookmarkClick) event triggers when a bookmark item is clicked in the bookmark panel.

- Event arguments: [BookmarkClickEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/bookmarkClickEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   bookmarkClick="bookmarkClicked">
    </ejs-pdfviewer>
</div>

<script>
    function bookmarkClicked(args) {
        console.log(`Bookmark clicked: ${args.name}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   serviceUrl="/api/PdfViewer"
                   bookmarkClick="bookmarkClicked">
    </ejs-pdfviewer>
</div>

<script>
    function bookmarkClicked(args) {
        console.log(`Bookmark clicked: ${args.name}`);
    }
</script>
{% endhighlight %}
{% endtabs %}

## toolbarClick

The [toolbarClick](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ToolbarClick) event triggers when a toolbar item is clicked.

- Event arguments: `ClickEventArgs`.

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   toolbarClick="ToolbarClicked">
    </ejs-pdfviewer>
</div>

<script>
    function ToolbarClicked(args) {
        console.log(`Toolbar item clicked: ${args.name}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   serviceUrl="/api/PdfViewer"
                   toolbarClick="ToolbarClicked">
    </ejs-pdfviewer>
</div>

<script>
    function ToolbarClicked(args) {
        console.log(`Toolbar item clicked: ${args.name}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## validateFormFields

The [validateFormFields](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ValidateFormFields) event is raised when form validation fails, typically before a download or submit action proceeds. Use this event to inspect which required fields are empty and show custom messages or block your app logic if needed.

- Event arguments: [ValidateFormFieldsArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/validateFormFieldsArgs/)
  - name: Event name
  - documentName: Current document name
  - formField: The last interacted field’s data (if applicable)
  - nonFillableFields: Array detailing required/invalid fields

How to trigger
- Add a form field and mark it Required (UI: right‑click field > Properties > Required).
- Leave the field empty and click Download. The event fires and provides the list of fields that failed validation.

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   validateFormFields="validateFormFields"
                   enableFormFieldsValidation=true>
    </ejs-pdfviewer>
</div>

<script>
    function validateFormFields(args) {
        console.log('form field event name:', args.name);
        console.log('form field document name:', args.documentName);
        console.log('form field data:', args.formField);
        console.log('non fillable form field details:', args.nonFillableFields);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   serviceUrl="/api/PdfViewer"
                   validateFormFields="validateFormFields"
                   enableFormFieldsValidation=true>
    </ejs-pdfviewer>
</div>

<script>
    function validateFormFields(args) {
        console.log('form field event name:', args.name);
        console.log('form field document name:', args.documentName);
        console.log('form field data:', args.formField);
        console.log('non fillable form field details:', args.nonFillableFields);
    }
</script>

{% endhighlight %}
{% endtabs %}

Tip
- To require a field programmatically, set isRequired: true when creating/editing the field via Form Designer APIs.

## zoomChange

The [zoomChange](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ZoomChange) event triggers when the magnification value changes.

- Event arguments: [ZoomChangeEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/zoomChangeEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   zoomChange="zoomChanged">
    </ejs-pdfviewer>
</div>

<script>
    function zoomChange(args) {
        console.log(`Zoom changed to: ${args.zoomValue}%`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   serviceUrl="/api/PdfViewer"
                   zoomChange="zoomChanged">
    </ejs-pdfviewer>
</div>

<script>
    function zoomChange(args) {
        console.log(`Zoom changed to: ${args.zoomValue}%`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## buttonFieldClick

The [buttonFieldClick](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ButtonFieldClick) event triggers when a button form field is clicked.

- Event arguments: [ButtonFieldClickEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/buttonFieldClickEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   buttonFieldClick="buttonFieldClicked">
    </ejs-pdfviewer>
</div>

<script>
    function buttonFieldClicked(args) {
        console.log(`Button field clicked. Name: ${args.name}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   serviceUrl="/api/PdfViewer"
                   buttonFieldClick="buttonFieldClicked">
    </ejs-pdfviewer>
</div>

<script>
    function buttonFieldClicked(args) {
        console.log(`Button field clicked. Name: ${args.name}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## commentAdd

The [commentAdd](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_CommentAdd) event triggers when a comment is added in the comment panel.

- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/commentEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   commentAdd="commentAdded">
    </ejs-pdfviewer>
</div>

<script>
    function commentAdded(args) {
        console.log(`Comment added. Id: ${args.id}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   serviceUrl="/api/PdfViewer"
                   commentAdd="commentAdded">
    </ejs-pdfviewer>
</div>

<script>
    function commentAdded(args) {
        console.log(`Comment added. Id: ${args.id}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## commentDelete

The [commentDelete](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_CommentDelete) event triggers when a comment is deleted in the comment panel.

- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/commentEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   commentDelete="commentDeleted">
    </ejs-pdfviewer>
</div>

<script>
    function commentDeleted(args) {
        console.log(`Comment deleted. Id: ${args.id}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   commentDelete="commentDeleted">
    </ejs-pdfviewer>
</div>

<script>
    function commentDeleted(args) {
        console.log(`Comment deleted. Id: ${args.id}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## commentEdit

The [commentEdit](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_CommentEdit) event triggers when a comment is edited in the comment panel.

- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/commentEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   commentEdit="CommentEdited">
    </ejs-pdfviewer>
</div>

<script>
    function CommentEdited(args) {
        console.log(`Comment edited. Id: ${args.id}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   commentEdit="CommentEdited">
    </ejs-pdfviewer>
</div>

<script>
    function CommentEdited(args) {
        console.log(`Comment edited. Id: ${args.id}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## commentSelect

The [commentSelect](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_CommentSelect) event triggers when a comment is selected in the comment panel.

- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/commentEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   commentSelect="commentSelected">
    </ejs-pdfviewer>
</div>

<script>
    function CommentEdited(args) {
        console.log(`Comment selected. Id: ${args.id}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   serviceUrl="/api/PdfViewer"
                   commentSelect="commentSelected">
    </ejs-pdfviewer>
</div>

<script>
    function CommentEdited(args) {
        console.log(`Comment selected. Id: ${args.id}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## commentStatusChanged

The [commentStatusChanged](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_CommentStatusChanged) event triggers when a comment status is changed in the comment panel.

- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/commentEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   commentStatusChanged="commentStatusChanged">
    </ejs-pdfviewer>
</div>

<script>
    function commentStatusChanged(args) {
        console.log(`Comment status changed. Id: ${args.id}, Status: ${args.status}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   commentStatusChanged="commentStatusChanged">
    </ejs-pdfviewer>
</div>

<script>
    function commentStatusChanged(args) {
        console.log(`Comment status changed. Id: ${args.id}, Status: ${args.status}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## created

The [created](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_Created) event is triggered during the creation of the PDF Viewer component.

- Event arguments: `void`.

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   created="created">
    </ejs-pdfviewer>
</div>

<script>
    function created(args) {
        console.log('PDF Viewer created');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   serviceUrl="/api/PdfViewer"
                   created="created">
    </ejs-pdfviewer>
</div>

<script>
    function created(args) {
        console.log('PDF Viewer created');
    }
</script>

{% endhighlight %}
{% endtabs %}

## customContextMenuBeforeOpen

The [customContextMenuBeforeOpen](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_CustomContextMenuBeforeOpen) event fires just before the context menu is shown. Use it to show/hide items based on current state (for example, only show search items when text is selected).

- Event arguments: [CustomContextMenuBeforeOpenEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/customContextMenuBeforeOpenEventArgs/)
  - name: Event name
  - ids: Array of menu item ids that will be shown; you can remove ids to hide items for this open

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   customContextMenuBeforeOpen="customContextMenuBeforeOpened">
    </ejs-pdfviewer>
</div>

<script>
    function customContextMenuBeforeOpened(args) {
        console.log(`Before open context menu at page ${args.name}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   serviceUrl="/api/PdfViewer"
                   customContextMenuBeforeOpen="customContextMenuBeforeOpened">
    </ejs-pdfviewer>
</div>

<script>
    function customContextMenuBeforeOpened(args) {
        console.log(`Before open context menu at page ${args.name}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## customContextMenuSelect

The [customContextMenuSelect](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_CustomContextMenuSelect) event fires when a custom menu item is clicked. Use it to branch logic by the clicked item id.

- Event arguments: [CustomContextMenuSelectEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/customContextMenuSelectEventArgs/).

- name: Event name
- id: The id of the clicked menu item

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   customContextMenuSelect="customContextMenuSelected">
    </ejs-pdfviewer>
</div>

<script>
    function customContextMenuSelected(args) {
        console.log(`Before open context menu at page ${args.name}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   serviceUrl="/api/PdfViewer"
                   customContextMenuSelect="customContextMenuSelected">
    </ejs-pdfviewer>
</div>

<script>
    function customContextMenuSelected(args) {
        console.log(`Before open context menu at page ${args.name}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## documentLoad

The [documentLoad](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_DocumentLoad) event occurs when a document is successfully loaded.

- Event arguments: [LoadEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/loadEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   documentLoad="documentLoaded">
    </ejs-pdfviewer>
</div>

<script>
    function documentLoaded(args) {
        console.log(`Document loaded: page count = ${args.pageData}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   serviceUrl="/api/PdfViewer"
                   documentLoad="documentLoaded">
    </ejs-pdfviewer>
</div>

<script>
    function documentLoaded(args) {
        console.log(`Document loaded: page count = ${args.pageData}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## documentLoadFailed

The [documentLoadFailed](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_DocumentLoadFailed) event is triggered when loading a document fails.

- Event arguments: [LoadFailedEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/loadFailedEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   documentLoadFailed="documentLoadFailed">
    </ejs-pdfviewer>
</div>

<script>
    function documentLoadFailed(args) {
        console.log(`Load failed. Error: ${args.documentName}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   serviceUrl="/api/PdfViewer"
                   documentLoadFailed="documentLoadFailed">
    </ejs-pdfviewer>
</div>

<script>
    function documentLoadFailed(args) {
        console.log(`Load failed. Error: ${args.documentName}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## documentUnload

The [documentUnload](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_DocumentUnload) event is triggered when closing the current document.

- Event arguments: [UnloadEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/unloadEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   documentUnload="documentUnloaded">
    </ejs-pdfviewer>
</div>

<script>
    function documentUnloaded(args) {
        console.log('Document unloaded');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   serviceUrl="/api/PdfViewer"
                   documentUnload="documentUnloaded">
    </ejs-pdfviewer>
</div>

<script>
    function documentUnloaded(args) {
        console.log('Document unloaded');
    }
</script>

{% endhighlight %}
{% endtabs %}

## downloadEnd

The [downloadEnd](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_DownloadEnd) event is triggered after a document download completes.

- Event arguments: [DownloadEndEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/downloadEndEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   downloadEnd="downloadEnded">
    </ejs-pdfviewer>
</div>

<script>
    function downloadEnded(args) {
        console.log(`Download finished. File name: ${args.fileName}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   serviceUrl="/api/PdfViewer
                   downloadEnd="downloadEnded">
    </ejs-pdfviewer>
</div>

<script>
    function downloadEnded(args) {
        console.log(`Download finished. File name: ${args.fileName}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## downloadStart

The [downloadStart](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_DownloadStart) event is triggered when the download operation is initiated.

- Event arguments: [DownloadStartEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/downloadStartEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   downloadStart="downloadStarted">
    </ejs-pdfviewer>
</div>

<script>
    function downloadStarted(args) {
        console.log('Download started');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   serviceUrl="/api/PdfViewer"
                   downloadStart="downloadStarted">
    </ejs-pdfviewer>
</div>

<script>
    function downloadStarted(args) {
        console.log('Download started');
    }
</script>

{% endhighlight %}
{% endtabs %}

## exportFailed

The [exportFailed](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ExportFailed) event is triggered when exporting annotations fails.

- Event arguments: [ExportFailureEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/exportFailureEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   exportFailed="exportFailed">
    </ejs-pdfviewer>
</div>

<script>
    function exportFailed(args) {
        console.log(`Export failed: ${args.name}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   exportFailed="exportFailed">
    </ejs-pdfviewer>
</div>

<script>
    function exportFailed(args) {
        console.log(`Export failed: ${args.name}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## exportStart

The [exportStart](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ExportStart) event is triggered when exporting annotations starts.

- Event arguments: [ExportStartEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/exportStartEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   exportStart="exportStarted">
    </ejs-pdfviewer>
</div>

<script>
    function exportStarted(args) {
        console.log('Export started');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   exportStart="exportStarted">
    </ejs-pdfviewer>
</div>

<script>
    function exportStarted(args) {
        console.log('Export started');
    }
</script>

{% endhighlight %}
{% endtabs %}

## exportSuccess

The [exportSuccess](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ExportSuccess) event is triggered when annotations are exported successfully.

- Event arguments: [ExportSuccessEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/exportSuccessEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   exportSuccess="exportSuccess">
    </ejs-pdfviewer>
</div>

<script>
    function exportSuccess(args) {
        console.log('Export success');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   exportSuccess="exportSuccess">
    </ejs-pdfviewer>
</div>

<script>
    function exportSuccess(args) {
        console.log('Export success');
    }
</script>

{% endhighlight %}
{% endtabs %}

## extractTextCompleted

The [extractTextCompleted](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ExtractTextCompleted) event is triggered when text extraction completes.

- Event arguments: [ExtractTextCompletedEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/extractTextCompletedEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   extractTextCompleted="extractTextCompleted">
    </ejs-pdfviewer>
</div>

<script>
    function extractTextCompleted(args) {
        console.log(`Extracted text length: ${(args.documentTextCollection || '').length}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   extractTextCompleted="extractTextCompleted">
    </ejs-pdfviewer>
</div>

<script>
    function extractTextCompleted(args) {
        console.log(`Extracted text length: ${(args.documentTextCollection || '').length}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## hyperlinkClick

The [hyperlinkClick](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_HyperlinkClick) event is triggered when a hyperlink is clicked.

- Event arguments: [HyperlinkClickEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/hyperlinkClickEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   hyperlinkClick="hyperlinkClicked">
    </ejs-pdfviewer>
</div>

<script>
    function hyperlinkClicked(args) {
        console.log(`Hyperlink clicked: ${args.hyperlink}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   hyperlinkClick="hyperlinkClicked">
    </ejs-pdfviewer>
</div>

<script>
    function hyperlinkClicked(args) {
        console.log(`Hyperlink clicked: ${args.hyperlink}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## hyperlinkMouseOver

The [hyperlinkMouseOver](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_HyperlinkMouseOver) event is triggered when hovering over a hyperlink.

- Event arguments: HyperlinkMouseOverArgs.

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   hyperlinkMouseOver="hyperlinkMouseOvered">
    </ejs-pdfviewer>
</div>

<script>
    function hyperlinkMouseOvered(args) {
        console.log(`Hyperlink hover at page: ${args.name}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   hyperlinkMouseOver="hyperlinkMouseOvered">
    </ejs-pdfviewer>
</div>

<script>
    function hyperlinkMouseOvered(args) {
        console.log(`Hyperlink hover at page: ${args.name}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## importFailed

The [importFailed](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ImportFailed) event is triggered when importing annotations fails.

- Event arguments: [ImportFailureEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/importFailureEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   importFailed="importFailed">
    </ejs-pdfviewer>
</div>

<script>
    function importFailed(args) {
        console.log(`Import failed: ${args.name}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   importFailed="importFailed">
    </ejs-pdfviewer>
</div>

<script>
    function importFailed(args) {
        console.log(`Import failed: ${args.name}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## importStart

The [importStart](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ImportStart) event is triggered when importing annotations starts.

- Event arguments: [ImportStartEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/importStartEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   importStart="importStarted">
    </ejs-pdfviewer>
</div>

<script>
    function importStarted(args) {
        console.log('Import started');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   importStart="importStarted">
    </ejs-pdfviewer>
</div>

<script>
    function importStarted(args) {
        console.log('Import started');
    }
</script>

{% endhighlight %}
{% endtabs %}

## importSuccess

The [importSuccess](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ImportSuccess) event is triggered when annotations are imported successfully.

- Event arguments: [ImportSuccessEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/importSuccessEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   importSuccess="importSuccess">
    </ejs-pdfviewer>
</div>

<script>
    function importSuccess(args) {
        console.log('Import success');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   importSuccess="importSuccess">
    </ejs-pdfviewer>
</div>

<script>
    function importSuccess(args) {
        console.log('Import success');
    }
</script>

{% endhighlight %}
{% endtabs %}

## keyboardCustomCommands

The [keyboardCustomCommands](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_KeyboardCustomCommands) event is triggered when customized keyboard command keys are pressed.

- Event arguments: [KeyboardCustomCommandsEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/keyboardCustomCommandsEventArgs/).

  - name: Event name
  - keyboardCommand: The command metadata raised by Command Manager
  
When it triggers
- After you register gestures in commandManager.keyboardCommand. For example, when you press Shift + Alt + G or Shift + Alt + H, the event gets triggered. Just like this, you can handle custom keyboard shortcuts.

Refer here for additional details about adding your own shortcut keys and handling them: see [Keyboard interaction](./accessibility#keyboard-interaction).
Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   keyboardCustomCommands="keyboardCustomCommands">
    </ejs-pdfviewer>
</div>

<script>
    function keyboardCustomCommands(args) {
        console.log('Custom command triggered:', args);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   keyboardCustomCommands="keyboardCustomCommands">
    </ejs-pdfviewer>
</div>

<script>
    function keyboardCustomCommands(args) {
        console.log('Custom command triggered:', args);
    }
</script>

{% endhighlight %}
{% endtabs %}

## moveSignature

The [moveSignature](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_MoveSignature) event triggers when a signature is moved across a page.

- Event arguments: `MoveSignatureEventArgs`.

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   moveSignature="moveSignatured">
    </ejs-pdfviewer>
</div>

<script>
    function moveSignatured(args) {
        console.log(`Signature moved on page ${args.id}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   moveSignature="moveSignatured">
    </ejs-pdfviewer>
</div>

<script>
    function moveSignatured(args) {
        console.log(`Signature moved on page ${args.id}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## pageChange

The [pageChange](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_PageChange) event triggers when the current page number changes.

- Event arguments: [PageChangeEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/pageChangeEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   pageChange="pageChanged">
    </ejs-pdfviewer>
</div>

<script>
    function pageChanged(args) {
        console.log(`Page changed from ${args.previousPageNumber} to ${args.currentPageNumber}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   pageChange="pageChanged">
    </ejs-pdfviewer>
</div>

<script>
    function pageChanged(args) {
        console.log(`Page changed from ${args.previousPageNumber} to ${args.currentPageNumber}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## pageClick

The [pageClick](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_PageClick) event triggers when a mouse click occurs on a page.

- Event arguments: [PageClickEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/pageClickEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   pageClick="pageClicked">
    </ejs-pdfviewer>
</div>

<script>
    function pageClicked(args) {
        console.log(`Page ${args.pageNumber} clicked at (${args.x}, ${args.y})`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   pageClick="pageClicked">
    </ejs-pdfviewer>
</div>

<script>
    function pageClicked(args) {
        console.log(`Page ${args.pageNumber} clicked at (${args.x}, ${args.y})`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## pageMouseover

The [pageMouseover](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_PageMouseover) event triggers when moving the mouse over a page.

- Event arguments: `PageMouseoverEventArgs`.

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   pageMouseover="pageMouseover">
    </ejs-pdfviewer>
</div>

<script>
    function pageMouseover(args) {
        console.log(`Mouse over page ${args.name}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   pageMouseover="pageMouseover">
    </ejs-pdfviewer>
</div>

<script>
    function pageMouseover(args) {
        console.log(`Mouse over page ${args.name}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## pageOrganizerSaveAs

The [pageOrganizerSaveAs](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_PageOrganizerSaveAs) event triggers when a `save as` action is performed in the page organizer.

- Event arguments: `PageOrganizerSaveAsEventArgs`.

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   pageOrganizerSaveAs="pageOrganizerSaveAs">
    </ejs-pdfviewer>
</div>

<script>
    function pageOrganizerSaveAs(args) {
        console.log(`Page organizer save triggered. File name: ${args.downloadDocument}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   pageOrganizerSaveAs="pageOrganizerSaveAs">
    </ejs-pdfviewer>
</div>

<script>
    function pageOrganizerSaveAs(args) {
        console.log(`Page organizer save triggered. File name: ${args.downloadDocument}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## pageRenderComplete

The [pageRenderComplete](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_PageRenderComplete) event triggers after a page finishes rendering.

- Event arguments: [PageRenderCompleteEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/pageRenderCompleteEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   pageRenderComplete="pageRenderCompleted">
    </ejs-pdfviewer>
</div>

<script>
    function pageRenderCompleted(args) {
        console.log(`Page ${args.data} rendering completed.`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   pageRenderComplete="pageRenderCompleted">
    </ejs-pdfviewer>
</div>

<script>
    function pageRenderCompleted(args) {
        console.log(`Page ${args.data} rendering completed.`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## pageRenderInitiate

The [pageRenderInitiate](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_PageRenderInitiate) event triggers when page rendering begins.

- Event arguments: [PageRenderInitiateEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/pageRenderInitiateEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   pageRenderInitiate="pageRenderInitiated">
    </ejs-pdfviewer>
</div>

<script>
    function pageRenderInitiated(args) {
        console.log(`Page ${args.jsonData} rendering initiated.`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   pageRenderInitiate="pageRenderInitiated">
    </ejs-pdfviewer>
</div>

<script>
    function pageRenderInitiated(args) {
        console.log(`Page ${args.jsonData} rendering initiated.`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## printEnd

The [printEnd](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_PrintEnd) event triggers when a print action is completed.

- Event arguments: [PrintEndEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/printEndEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   printEnd="printEnded">
    </ejs-pdfviewer>
</div>

<script>
    function printEnded(args) {
        console.log('Print action completed.');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   printEnd="printEnded">
    </ejs-pdfviewer>
</div>

<script>
    function printEnded(args) {
        console.log('Print action completed.');
    }
</script>

{% endhighlight %}
{% endtabs %}

## printStart

The [printStart](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_PrintStart) event triggers when a print action is initiated.

- Event arguments: [PrintStartEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/printStartEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   printStart="printStarted">
    </ejs-pdfviewer>
</div>

<script>
    function printStarted(args) {
        console.log('Print action initiated.');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   printStart="printStarted">
    </ejs-pdfviewer>
</div>

<script>
    function printStarted(args) {
        console.log('Print action initiated.');
    }
</script>

{% endhighlight %}
{% endtabs %}

## removeSignature

The [removeSignature](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_RemoveSignature) event triggers when a signature is removed.

- Event arguments: [RemoveSignatureEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/removeSignatureEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   removeSignature="removeSignatured">
    </ejs-pdfviewer>
</div>

<script>
    function removeSignatured(args) {
        console.log(`Signature removed from page ${args.bounds}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   removeSignature="removeSignatured">
    </ejs-pdfviewer>
</div>

<script>
    function removeSignatured(args) {
        console.log(`Signature removed from page ${args.bounds}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## resizeSignature

The [resizeSignature](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ResizeSignature) event triggers when a signature is resized.

- Event arguments: [ResizeSignatureEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/resizeSignatureEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   resizeSignature="resizeSignatured">
    </ejs-pdfviewer>
</div>

<script>
    function resizeSignatured(args) {
        console.log(`Signature resized on page ${args.currentPosition}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   resizeSignature="resizeSignatured">
    </ejs-pdfviewer>
</div>

<script>
    function resizeSignatured(args) {
        console.log(`Signature resized on page ${args.currentPosition}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## resourcesLoaded

The [resourcesLoaded](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ResourcesLoaded) event triggers after PDFium resources are loaded.

- Event arguments: `void`.

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   resourcesLoaded="resourcesLoaded">
    </ejs-pdfviewer>
</div>

<script>
    function resourcesLoaded(args) {
        console.log('PDFium resources loaded.');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   resourcesLoaded="resourcesLoaded">
    </ejs-pdfviewer>
</div>

<script>
    function resourcesLoaded(args) {
        console.log('PDFium resources loaded.');
    }
</script>

{% endhighlight %}
{% endtabs %}

## signaturePropertiesChange

The [signaturePropertiesChange](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_SignaturePropertiesChange) event triggers when signature properties are changed.

- Event arguments: [SignaturePropertiesChangeEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/signaturePropertiesChangeEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   signaturePropertiesChange="signaturePropertiesChanged">
    </ejs-pdfviewer>
</div>

<script>
    function signaturePropertiesChanged(args) {
        console.log(`Signature properties changed on page ${args.type}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   signaturePropertiesChange="signaturePropertiesChanged">
    </ejs-pdfviewer>
</div>

<script>
    function signaturePropertiesChanged(args) {
        console.log(`Signature properties changed on page ${args.type}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## signatureSelect

The [signatureSelect](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_SignatureSelect) event triggers when a signature is selected.

- Event arguments: [SignatureSelectEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/signatureSelectEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   signatureSelect="signatureSelected">
    </ejs-pdfviewer>
</div>

<script>
    function signatureSelected(args) {
        console.log(`Signature selected on page ${args.signature}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   signatureSelect="signatureSelected">
    </ejs-pdfviewer>
</div>

<script>
    function signatureSelected(args) {
        console.log(`Signature selected on page ${args.signature}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## signatureUnselect

The [signatureUnselect](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_SignatureUnselect) event triggers when a signature is unselected.

- Event arguments: [SignatureUnselectEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/signatureUnselectEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   signatureUnselect="signatureUnselected">
    </ejs-pdfviewer>
</div>

<script>
    function signatureUnselected(args) {
        console.log(`Signature unselected ${args.signature}`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   signatureUnselect="signatureUnselected">
    </ejs-pdfviewer>
</div>

<script>
    function signatureUnselected(args) {
        console.log(`Signature unselected ${args.signature}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## textSearchComplete

The [textSearchComplete](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_TextSearchComplete) event triggers when a text search is completed.

- Event arguments: [TextSearchCompleteEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/textSearchCompleteEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   textSearchComplete="textSearchCompleted">
    </ejs-pdfviewer>
</div>

<script>
    function textSearchCompleted(args) {
        console.log('Text search completed.');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   textSearchComplete="textSearchCompleted">
    </ejs-pdfviewer>
</div>

<script>
    function textSearchCompleted(args) {
        console.log('Text search completed.');
    }
</script>

{% endhighlight %}
{% endtabs %}

## textSearchHighlight

The [textSearchHighlight](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_TextSearchHighlight) event triggers when the searched text is highlighted.

- Event arguments: [TextSearchHighlightEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/textSearchHighlightEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   textSearchHighlight="textSearchHighlight">
    </ejs-pdfviewer>
</div>

<script>
    function textSearchHighlight(args) {
        console.log(`Search result ${args.bounds} highlighted.`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   textSearchHighlight="textSearchHighlight">
    </ejs-pdfviewer>
</div>

<script>
    function textSearchHighlight(args) {
        console.log(`Search result ${args.bounds} highlighted.`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## textSearchStart

The [textSearchStart](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_TextSearchStart) event triggers when a text search is initiated.

- Event arguments: [TextSearchStartEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/textSearchStartEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   textSearchStart="textSearchStarted">
    </ejs-pdfviewer>
</div>

<script>
    function textSearchStarted(args) {
        console.log(`Text search started for: "${args.searchText}"`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   textSearchStart="textSearchStarted">
    </ejs-pdfviewer>
</div>

<script>
    function textSearchStarted(args) {
        console.log(`Text search started for: "${args.searchText}"`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## textSelectionEnd

The [textSelectionEnd](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_TextSelectionEnd) event triggers when text selection is complete.

- Event arguments: [TextSelectionEndEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/textSelectionEndEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   textSelectionEnd="textSelectionEnded">
    </ejs-pdfviewer>
</div>

<script>
    function textSelectionEnded(args) {
        console.log(`Text search started for: "${args.searchText}"`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   textSelectionEnd="textSelectionEnded">
    </ejs-pdfviewer>
</div>

<script>
    function textSelectionEnded(args) {
        console.log(`Text search started for: "${args.searchText}"`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## textSelectionStart

The [textSelectionStart](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_TextSelectionStart) event triggers when text selection is initiated.

- Event arguments: `TextSelectionStartEventArgs`.

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   textSelectionStart="textSelectionStarted">
    </ejs-pdfviewer>
</div>

<script>
    function textSelectionStarted(args) {
        console.log(`Text selection started on page ${args.pageIndex}.`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   textSelectionStart="textSelectionStarted">
    </ejs-pdfviewer>
</div>

<script>
    function textSelectionStarted(args) {
        console.log(`Text selection started on page ${args.pageIndex}.`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## thumbnailClick

The [thumbnailClick](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ThumbnailClick) event triggers when a thumbnail is clicked.

- Event arguments: [ThumbnailClickEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/thumbnailClickEventArgs/).

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   thumbnailClick="thumbnailClicked">
    </ejs-pdfviewer>
</div>

<script>
    function thumbnailClicked(args) {
        console.log(`Thumbnail clicked for page index ${args.pageNumber}.`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   thumbnailClick="thumbnailClicked">
    </ejs-pdfviewer>
</div>

<script>
    function thumbnailClicked(args) {
        console.log(`Thumbnail clicked for page index ${args.pageNumber}.`);
    }
</script>

{% endhighlight %}
{% endtabs %}

> For comprehensive documentation on **annotation events** and **signature events**, see the dedicated [Annotation Events](annotation/annotation-event) topic with complete examples and use cases.