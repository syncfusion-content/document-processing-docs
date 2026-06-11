---
layout: post
title: Form Fields API in MVC PDF Viewer | Syncfusion
description:  Learn How to use Form Fields API to enable, update, retrieve and clear in the Syncfusion MVC PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Form Fields API in MVC PDF Viewer

The PDF Viewer provides comprehensive APIs to create, edit, validate, navigate, and manage form fields programmatically. The following APIs are available:

| API | Description |
|---|---|
| [updateFormFieldsValue](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_UpdateFormFieldsValue) | Updates the value for one or more form fields.|
| [updateFormFields](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_UpdateFormFields) | Updates the properties of one or more form fields.|
| [retrieveFormFields](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_RetrieveFormFields) | Retrieves all form fields or by specific criteria.|
| [resetFormFields](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ResetFormFields) | Resets the specified or all form fields to their default values.|
| [importFormFields](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ImportFormFields) | Imports values and states for form fields from a JSON object or file stream.|
| [focusFormField](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FocusFormField) | Sets focus to a form field by name or ID.|
| [exportFormFieldsAsObject](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ExportFormFieldsAsObject) | Exports form fields as a JSON object.|
| [exportFormFields](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ExportFormFields) | Exports form fields as a downloadable file.|
| [clearFormFields](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ClearFormFields) | Clears values of specified or all form fields without removing them.|
| [isFormFieldDocument](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_IsFormFieldDocument) | Indicates whether the loaded document contains form fields.|
| [isFormDesignerToolbarVisible](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_IsFormDesignerToolbarVisible) | Gets whether the Form Designer toolbar is currently visible.|
| [formFieldCollections](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FormFieldCollections) | Gets the collection of current form fields with their properties.|
| [enableFormFieldsValidation](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableFormFieldsValidation) | Enables or disables form field validation.|
| [enableFormFields](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableFormFields) | Enables or disables interaction with form fields.|
| [enableFormDesignerToolbar](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableFormDesignerToolbar) | Shows or hides the Form Designer toolbar.|

## updateFormFieldsValue

Updates the value of one or more form fields programmatically.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <button id="updateFormFields">updateFormFields</button>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            var btn = document.getElementById('updateFormFields');
            if (btn) {
                btn.onclick = function () {
                    var fields = (pdfviewer.retrieveFormFields && pdfviewer.retrieveFormFields()) || pdfviewer.formFieldCollection || [];
                    var field = fields.find(function (f) { return f && f.name === 'First Name'; }) || fields[0];
                    if (field) {
                        field.value = 'John Doe';
                        field.tooltip = 'First';
                        pdfviewer.updateFormFieldsValue(field);
                    }
                };
            }
        });
    </script>

{% endhighlight %}
{% endtabs %}

## updateFormFields

Updates form field properties such as bounds, color, font, isReadOnly, required, and more.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <button id="updateFormFields">updateFormFields</button>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            var btn = document.getElementById('updateFormFields');
            if (btn) {
                btn.onclick = function () {
                    var fields = (pdfviewer.retrieveFormFields && pdfviewer.retrieveFormFields()) || pdfviewer.formFieldCollection || [];
                    var field = fields.find(function (f) { return f && f.name === 'First Name'; }) || fields[0];
                    if (field) {
                        pdfviewer.formDesignerModule.updateFormField(field, {
                            value: 'John',
                            fontFamily: 'Courier',
                            fontSize: 12,
                            color: 'black',
                            backgroundColor: 'white',
                            borderColor: 'black',
                            thickness: 2,
                            alignment: 'Left',
                            maxLength: 50
                        });
                    }
                };
            }
        });
    </script>

{% endhighlight %}
{% endtabs %}

## retrieveFormFields

Retrieves all form fields and their properties or filters by type/name.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <button id="retrieveFormFields">retrieveFormFields</button>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            var btn = document.getElementById('retrieveFormFields');
            if (btn) {
                btn.onclick = function () {
                    var fields = (pdfviewer.retrieveFormFields && pdfviewer.retrieveFormFields()) || [];
                    console.log(fields);
                };
            }
        });
    </script>

{% endhighlight %}
{% endtabs %}

## resetFormFields

Resets specified form fields or all fields to their default values.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <button id="resetFormFields">resetFormFields</button>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            var btn = document.getElementById('resetFormFields');
            if (btn) {
                btn.onclick = function () { pdfviewer.resetFormFields(); };
            }
        });
    </script>

{% endhighlight %}
{% endtabs %}

## importFormFields

Imports form field data from an object or file into the current document.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <button id="importFormFields">importFormFields</button>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            var btn = document.getElementById('importFormFields');
            if (btn) {
                btn.onclick = function () {
                    // The file for importing should be accessible at the given path or as a file stream depending on your integration
                    pdfviewer.importFormFields('File', FormFieldDataFormat.Json);
                };
            }
        });
    </script>

{% endhighlight %}
{% endtabs %}

## focusFormField

Moves focus to a form field by name or ID.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <button id="focusFormField">focusFormField</button>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            var btn = document.getElementById('focusFormField');
            if (btn) { btn.onclick = function () { pdfviewer.focusFormField('FirstName'); }; }
        });
    </script>

{% endhighlight %}
{% endtabs %}

## exportFormFieldsAsObject

Exports current form field values and states as a JSON object.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <button id="exportFormFieldsAsObject">exportFormFieldsAsObject</button>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            var btn = document.getElementById('exportFormFieldsAsObject');
            if (btn) {
                btn.onclick = function () {
                    pdfviewer.exportFormFieldsAsObject(FormFieldDataFormat.Fdf).then(function (data) {
                        var exportedData = data;
                        console.log('Exported object:', exportedData);
                    });
                };
            }
        });
    </script>

{% endhighlight %}
{% endtabs %}

## exportFormFields

Exports form field data to a file for download.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <button id="exportFormFields">exportFormFields</button>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            var btn = document.getElementById('exportFormFields');
            if (btn) { btn.onclick = function () { pdfviewer.exportFormFields('FormData', FormFieldDataFormat.Json); }; }
        });
    </script>

{% endhighlight %}
{% endtabs %}

## clearFormFields

Clears values of specified or all fields without removing the fields themselves.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <button id="clearFormFields">clearFormFields</button>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            var btn = document.getElementById('clearFormFields');
            if (btn) {
                btn.onclick = function () {
                    var field = (pdfviewer.retrieveFormFields && pdfviewer.retrieveFormFields()) || [];
                    if (field && field.length) { pdfviewer.clearFormFields(field[0]); }
                };
            }
        });
    </script>

{% endhighlight %}
{% endtabs %}

## isFormFieldDocument

Returns true if the loaded document contains one or more form fields.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <button id="checkFormFieldDocument">checkFormFieldDocument</button>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            var element = document.getElementById('checkFormFieldDocument');
            if (element) { element.onclick = function () { console.log(pdfviewer.isFormFieldDocument); }; }
        });
    </script>

{% endhighlight %}
{% endtabs %}

## isFormDesignerToolbarVisible

Opens the form designer toolbar when the PDF document is loaded in the PDF Viewer control initially
and get the form designer Toolbar Visible status.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            // Open the Form Designer toolbar and read its visibility state
            pdfviewer.enableFormDesignerToolbar(true);
            console.log(pdfviewer.isFormDesignerToolbarVisible);
        });
    </script>

{% endhighlight %}
{% endtabs %}

## formFieldCollections

Gets the current collection of form fields with their properties from the viewer instance.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <button id="formfieldcollection">formfieldcollection</button>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            var element = document.getElementById('formfieldcollection');
            if (element) { element.onclick = function () { console.log(pdfviewer.formFieldCollections); }; }
        });
    </script>

{% endhighlight %}
{% endtabs %}

## enableFormFieldsValidation

Enables or disables built-in validation for required and constrained fields.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfviewer.enableFormFieldsValidation = true; // enable form fields validation
        });
    </script>

{% endhighlight %}
{% endtabs %}

## enableFormFields

Enables or disables user interaction with form fields globally.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfviewer.enableFormFields = false;  // Disable interaction with all fields
        });
    </script>

{% endhighlight %}
{% endtabs %}

## enableFormDesignerToolbar

Shows or hides the Form Designer toolbar at runtime.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            // Show or hide the Form Designer toolbar at runtime
            pdfviewer.enableFormDesignerToolbar(true); // show
            // pdfviewer.enableFormDesignerToolbar(false); // hide
        });
    </script>

{% endhighlight %}
{% endtabs %}

## See also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create form fields](./manage-form-fields/create-form-fields)
- [Edit form fields](./manage-form-fields/modify-form-fields)
- [Group form fields](./group-form-fields)
- [Add custom data to form fields](./custom-data)
- [Form Constrain](./form-constrain)
- [Form fields Validation](./form-validation)