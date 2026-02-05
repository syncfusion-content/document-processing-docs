---
layout: post
title: Form Designer and Toolbar Customization in ASP.NET Core | Syncfusion
description: Learn here all about form designer and toolbar in Syncfusion ASP.NET Core PDF Viewer and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Form Designer in ASP.NET Core PDF Viewer

When **Form Designer mode** is enabled in the Syncfusion ASP.NET Core PDF Viewer, a default [Form Designer user interface (UI)](https://document.syncfusion.com/demos/pdf-viewer/asp-net-core/pdfviewer/formdesigner#/tailwind3) is displayed. This UI includes a built in toolbar for adding form fields such as text boxes, password fields, check boxes, radio buttons, drop down lists, list boxes, and signature and initial fields.

Using the Form Designer UI, users can place form fields on the PDF, move and resize them, configure field and widget properties, preview the designed form, and remove fields when required. The Form Designer toolbar can also be shown or hidden and customized to control the available tools based on application requirements, enabling flexible and interactive form design directly within the viewer.

## Key Features

**Add Form Fields**
You can add the following form fields to the PDF:

- [Text box](../forms/manage-form-fields/create-form-fields#add-textbox)
- [Password Field](../forms/manage-form-fields/create-form-fields#add-password)
- [Check box](../forms/manage-form-fields/create-form-fields#add-checkbox)
- [Radio button](../forms/manage-form-fields/create-form-fields#add-radiobutton)
- [Dropdown List](../forms/manage-form-fields/create-form-fields#add-dropdown)
- [List box](../forms/manage-form-fields/create-form-fields#add-listbox)
- [Signature field](../forms/manage-form-fields/create-form-fields#add-signature-field)
- [Initial field](../forms/manage-form-fields/create-form-fields#add-initial-field)

**Edit Form Fields**
You can move, resize, align, distribute, copy, paste, and undo or redo changes to form fields.

**Set Field Properties**
You can configure field properties such as name, value, font, color, border, alignment, visibility, tab order, and required or read only state.

**Control Field Behavior**
You can enable or disable read only mode, show or hide fields, and control whether fields appear when printing the document.

**Manage Form Fields**
You can select, group or ungroup, reorder, and delete form fields as needed.

**Save and Print Forms**
Designed form fields can be saved into the PDF document and printed with their appearances.

## Enable Form Designer

To enable form design features, use the ASP.NET Core TagHelper for the PDF Viewer. The TagHelper renders the client component and loads the EJ2 bundle (via `resourceUrl`) which provides the Form Designer modules at runtime.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

@page "{handler?}"
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}

<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  // Place client-side initialization or injection code here if you use modular bundles.
});
</script>

{% endhighlight %}
{% endtabs %}

## Form Designer UI

When **Form Designer mode** is enabled in the Syncfusion ASP.NET Core PDF Viewer, a default [Form Designer user interface (UI)](https://document.syncfusion.com/demos/pdf-viewer/asp-net-core/pdfviewer/formdesigner#/tailwind3) is displayed. This UI provides a built in toolbar for adding common form fields such as text boxes, check boxes, radio buttons, drop down lists, and signature fields. Users can place fields on the PDF, select them, resize or move them, and configure their properties using the available editing options, enabling interactive form creation directly within the viewer.

![FormDesigner](../../javascript-es6/images/FormDesigner.gif)

{% previewsample "/document-processing/code-snippet/pdfviewer/javascript-es6/prefilledforms-cs1" %}

For more information about creating and editing form fields in the PDF Viewer, refer to the [Form Creation](./manage-form-fields/create-form-fields) documentation.

## Form Designer Toolbar

The **Form Designer toolbar** appears at the top of the PDF Viewer and provides quick access to form field creation tools. It includes frequently used field types such as:

- [Text box](../forms/manage-form-fields/create-form-fields#add-textbox)
- [Password Field](../forms/manage-form-fields/create-form-fields#add-password)
- [Check box](../forms/manage-form-fields/create-form-fields#add-checkbox)
- [Radio button](../forms/manage-form-fields/create-form-fields#add-radiobutton)
- [Dropdown List](../forms/manage-form-fields/create-form-fields#add-dropdown)
- [List box](../forms/manage-form-fields/create-form-fields#add-listbox)
- [Signature field](../forms/manage-form-fields/create-form-fields#add-signature-field)
- [Initial field](../forms/manage-form-fields/create-form-fields#add-initial-field)

Each toolbar item allows users to place the corresponding form field by selecting the tool and clicking on the desired location in the PDF document.

![Adding Text Box](../../javascript-es6/images/AddTextBox.gif)

Use the following code snippet to enable Form Designer using the ASP.NET Core TagHelper.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

@page "{handler?}"
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}

<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  pdfviewer.enableFormDesigner = false;
});
</script>

{% endhighlight %}
{% endtabs %}

For more information about creating and editing form fields in the PDF Viewer, refer to the [Form Creation](./manage-form-fields/create-form-fields) documentation.

## Show or Hide the Built-in Form Designer Toolbar

You can control the visibility of the Form Designer toolbar using the [isFormDesignerToolbarVisible()](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_IsFormDesignerToolbarVisible) method. This allows you to display or hide the Form Designer tools in the PDF Viewer based on your application requirements.

**Use this method to:**
- Show the Form Designer toolbar when form design is required
- Hide the toolbar to provide cleaner viewing experience

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<!-- Buttons to toggle the Form Designer toolbar -->
<button id="showDesignerBtn">Show Form Designer Toolbar</button>
<button id="hideDesignerBtn">Hide Form Designer Toolbar</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  document.getElementById('showDesignerBtn').onclick = function () {
    pdfviewer.isFormDesignerToolbarVisible = true;
  };
  document.getElementById('hideDesignerBtn').onclick = function () {
    pdfviewer.isFormDesignerToolbarVisible = false;
  };
});
</script>
{% endhighlight %}
{% endtabs %}

## Customize the Built-in Form Designer Toolbar

You can customize the Form Designer toolbar by specifying the tools to display and arranging them in the required order using the [FormDesignerToolbarItems](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableFormDesignerToolbar) property.

This customization helps you limit the available tools and simplify the user interface.

**Key Points**
- Include only the toolbar items you need, in the exact order you specify.
- Any toolbar items not listed remain hidden, resulting in a cleaner and more focused UI.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   toolbarSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings 
                   { 
                       ToolbarItems = new List<string> 
                       {
                           "OpenOption",
                           "UndoRedoTool",
                           "PageNavigationTool",
                           "ZoomTool",
                           "PanTool",
                           "SelectionTool",
                           "SearchOption",
                           "PrintOption",
                           "FormDesignerEditTool",
                           "DownloadOption"
                       },
                       FormDesignerToolbarItems = "TextboxTool PasswordTool CheckBoxTool RadioButtonTool DropdownTool ListboxTool DrawSignatureTool DeleteTool",
                   })">
    </ejs-pdfviewer>
</div>
{% endhighlight %}
{% endtabs %}

## Move, Resize, and Edit Form Fields

You can move, resize, and edit an existing form field directly in the PDF Viewer using the Form Designer.

- Move a field by selecting it and dragging it to the required position.

- Resize a field using the handles displayed on the field boundary.

![Moveing and Resizing a form field](../../javascript-es6/images/move-resize-forms.gif)

- Edit a field by selecting it to open the Form Field Properties popover. The popover allows you to modify the form field and widget annotation properties. Changes are reflected immediately in the viewer and are saved when the properties popover is closed.
For more information, see Editing Form Fields

## Deleting Form Fields

You can remove a form field from the PDF document by selecting the field and using one of the following methods:
- Click the `Delete option` in the Form Designer UI.
- Press the `Delete key` on the keyboard after selecting the form field.

The selected form field and its associated widget annotation are permanently removed from the page.
For more information, see  [Deleting Form Fields](./manage-form-fields/remove-form-fields)

## See Also

- [Filling PDF Forms](./form-filling)
- [Create](./manage-form-fields/create-form-fields), [edit](./manage-form-fields/modify-form-fields), [style](./manage-form-fields/style-form-fields) and [remove](./manage-form-fields/remove-form-fields) form fields
- [Grouping form fields](./group-form-fields)
- [Form Constrains](./form-constrain)
- [Form Validation](./form-validation)
- [Custom Data](./custom-data)
- [Import](./import-export-form-fields/import-form-fields)/[Export Form Data](./import-export-form-fields/export-form-fields)
- [Form field events](./form-field-events)
