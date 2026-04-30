---
layout: post
title: Form Fields API in ASP.NET Core PDF Viewer | Syncfusion
description:  Learn How to use Form Fields API to enable, update, retrieve and clear in the Syncfusion ASP.NET Core PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Form Fields API in ASP.NET Core PDF Viewer

The PDF Viewer exposes a set of programmatic APIs to create, edit, validate, navigate, and manage form fields. These APIs enable automation of common tasks such as updating values, exporting/importing form data, resetting fields, and toggling designer or validation features. The examples below demonstrate usage patterns; code samples remain unchanged and are runnable when the viewer is initialized.

Each sample demonstrates a single API call or small workflow (for example, updating a field value or exporting form data). Use the provided APIs in application logic or UI handlers to automate form workflows.

| API | Description |
|---|---|
| [updateFormFieldsValue](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfieldsvalue) | Updates the value for one or more form fields.|
| [updateFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) | Updates the properties of one or more form fields.|
| [retrieveFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#retrieveformfields) | Retrieves all form fields or by specific criteria.|
| [resetFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#resetformfields) | Resets the specified or all form fields to their default values.|
| [importFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#importformfields) | Imports values and states for form fields from a JSON object or file stream.|
| [focusFormField](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#focusformfield) | Sets focus to a form field by name or ID.|
| [exportFormFieldsAsObject](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#exportformfieldsasobject) | Exports form fields as a JSON object.|
| [exportFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#exportformfields) | Exports form fields as a downloadable file.|
| [clearFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#clearformfields) | Clears values of specified or all form fields without removing them.|
| [isFormFieldDocument](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_IsFormFieldDocument) | Indicates whether the loaded document contains form fields.|
| [isFormDesignerToolbarVisible](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_IsFormDesignerToolbarVisible) | Gets whether the Form Designer toolbar is currently visible.|
| [formFieldCollections](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#formfieldcollections) | Gets the collection of current form fields with their properties.|
| [enableFormFieldsValidation](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableFormFieldsValidation) | Enables or disables form field validation.|
| [enableFormFields](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableFormFields) | Enables or disables interaction with form fields.|
| [enableFormDesignerToolbar](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableFormDesignerToolbar) | Shows or hides the Form Designer toolbar.|

## updateFormFieldsValue

Updates the value of one or more form fields programmatically.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>

<button onclick="updateFormFieldsValue()">updateFormFieldsValue</button>

<script>
    function updateFormFieldsValue() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (!viewer) return;

        // Retrieve all form fields
        var fields = viewer.retrieveFormFields ? viewer.retrieveFormFields() : viewer.formFieldCollection || [];

        // Find the textbox named "First Name" (fallback to the first field)
        var field = fields.find(function(f) { return f && f.name === 'First Name'; }) || fields[0];

        if (field) {
            // Update value and tooltip, then apply via API
            field.value = 'John Doe';
            field.tooltip = 'First';
            viewer.updateFormFieldsValue(field);
        } else {
            console.warn('No form fields available to update.');
        }
    }
</script>
{% endhighlight %}
{% endtabs %}

## updateFormFields

Updates form field properties such as bounds, color, font, isReadOnly, required, and more.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>

<button onclick="updateFormFields()">updateFormFields</button>

<script>
    function updateFormFields() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (!viewer) return;

        var fields = viewer.retrieveFormFields ? viewer.retrieveFormFields() : viewer.formFieldCollection || [];
        var field = fields.find(function(f) { return f && f.name === 'First Name'; }) || fields[0];

        if (field) {
            // Use FormDesigner API to update properties
            viewer.formDesignerModule.updateFormField(field, {
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
        } else {
            console.warn('No form fields available to update.');
        }
    }
</script>
{% endhighlight %}
{% endtabs %}

## retrieveFormFields

Retrieves all form fields and their properties or filters by type/name.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>

<button onclick="retrieveFormFields()">retrieveFormFields</button>

<script>
    function retrieveFormFields() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (!viewer) return;

        // Either call the API or read the collection directly
        var fields = viewer.retrieveFormFields ? viewer.retrieveFormFields() : viewer.formFieldCollection || [];

        console.log('Form fields:', fields);

        var byName = fields.filter(function(f) { return f && f.name === 'First Name'; });
        var onlyTextboxes = fields.filter(function(f) { return f && f.type === 'Textbox'; });
        console.log('By name:', byName);
        console.log('Textboxes:', onlyTextboxes);
    }
</script>
{% endhighlight %}
{% endtabs %}

## resetFormFields

Resets specified form fields or all fields to their default values.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>

<button onclick="resetAll()">resetFormFields</button>
<button onclick="resetSpecific()" style="margin-left: 8px;">reset specific fields</button>

<script>
    function resetAll() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (!viewer) return;
        // Reset all form fields
        viewer.resetFormFields();
    }

    function resetSpecific() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (!viewer) return;
        var fields = viewer.retrieveFormFields ? viewer.retrieveFormFields() : viewer.formFieldCollection || [];
        if (fields.length) {
            viewer.resetFormFields([fields[0]]);
        }
    }
</script>
{% endhighlight %}
{% endtabs %}

## importFormFields

Imports form field data from an object or file into the current document.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>

<button onclick="importFromSource()">importFormFields</button>
<input type="file" accept=".json,.xfdf,.fdf" onchange="onFilePicked(event)" style="margin-left: 8px;" />

<script>
    // Import from a known source (path/stream depends on your integration)
    function importFromSource() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (!viewer) return;
        // Example: specify a key that your backend/hosted env resolves, or use your own logic
        viewer.importFormFields('File', 'Json');
    }

    // Optional: Import from a local file chosen by user
    function onFilePicked(e) {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (!viewer) return;

        var file = e.target.files ? e.target.files[0] : null;
        if (!file) return;

        // Pass the File object directly if your integration supports it
        viewer.importFormFields(file, 'Json');
        // Reset the input so picking same file again still triggers change
        e.target.value = '';
    }
</script>
{% endhighlight %}
{% endtabs %}

## focusFormField

Moves focus to a form field by name or ID.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>

<button onclick="focusFirstName()">focusFormField</button>

<script>
    function focusFirstName() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (!viewer) return;
        viewer.focusFormField('FirstName'); // use the exact field name/ID
    }
</script>
{% endhighlight %}
{% endtabs %}

## exportFormFieldsAsObject

Exports current form field values and states as a JSON object.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>

<button onclick="exportAsObject()">exportFormFieldsAsObject</button>

<script>
    function exportAsObject() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (!viewer) return;

        try {
            var data = viewer.exportFormFieldsAsObject('Fdf');
            // Save, send to server, or inspect in console
            console.log('Exported object:', data);
        } catch (e) {
            console.error('Export failed:', e);
        }
    }
</script>
{% endhighlight %}
{% endtabs %}

## exportFormFields

Exports form field data to a file for download.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>

<button onclick="exportFormFields()">exportFormFields</button>

<script>
    function exportFormFields() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (!viewer) return;
        // Triggers download based on given file token/name and format
        viewer.exportFormFields('FormData', 'Json');
    }
</script>
{% endhighlight %}
{% endtabs %}

## clearFormFields

Clears values of specified or all fields without removing the fields themselves.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>

<button onclick="clearFirstField()">clearformfield</button>

<script>
    function clearFirstField() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (!viewer) return;

        var fields = viewer.retrieveFormFields ? viewer.retrieveFormFields() : [];
        if (fields.length) {
            viewer.clearFormFields(fields[0]);
        } else {
            console.warn('No form fields to clear.');
        }
    }
</script>
{% endhighlight %}
{% endtabs %}

## isFormFieldDocument

Returns true if the loaded document contains one or more form fields.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>

<button onclick="checkFormFieldDocument()">checkFormFieldDocument</button>

<script>
    function checkFormFieldDocument() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (!viewer) return;
        console.log(viewer.isFormFieldDocument);
    }
</script>
{% endhighlight %}
{% endtabs %}

## isFormDesignerToolbarVisible

Opens the form designer toolbar when the PDF document is loaded in the PDF Viewer control initially
and get the form designer Toolbar Visible status.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                   documentLoad="onDocumentLoad"
                   isFormDesignerToolbarVisible="true">
    </ejs-pdfviewer>
</div>

<script>
    function onDocumentLoad() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.formDesignerModule.addFormField("Textbox", { 
            name: "Textbox", 
            bounds: { X: 146, Y: 229, Width: 150, Height: 24 }
        });
    }
</script>
{% endhighlight %}
{% endtabs %}
{% endtabs %}

## formFieldCollections

Gets the current collection of form fields with their properties from the viewer instance.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>

<button onclick="logFormFieldCollections()" style="margin-bottom: 12px;">Form Field Collections</button>

<script>
    function logFormFieldCollections() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (!viewer) {
            console.warn('Viewer instance not ready yet.');
            return;
        }
        // Gets the form field collections
        var collections = viewer.formFieldCollections || viewer.formFieldCollection || [];
        console.log('Form Field Collections:', collections);
    }
</script>
{% endhighlight %}
{% endtabs %}

## enableFormFieldsValidation

Enables or disables built-in validation for required and constrained fields.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                   documentLoad="onDocumentLoad"
                   enableFormFieldsValidation="true">
    </ejs-pdfviewer>
</div>

<script>
    function onDocumentLoad() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.formDesignerModule.addFormField("Textbox", { 
            name: "Textbox", 
            bounds: { X: 146, Y: 229, Width: 150, Height: 24 }
        });
    }
</script>
{% endhighlight %}
{% endtabs %}

## enableFormFields

Enables or disables user interaction with form fields globally.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                   enableFormFields="false">
    </ejs-pdfviewer>
</div>
{% endhighlight %}
{% endtabs %}


## enableFormDesignerToolbar

Shows or hides the Form Designer toolbar at runtime.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                   enableFormDesignerToolbar="false">
    </ejs-pdfviewer>
</div>
{% endhighlight %}
{% endtabs %}

## See also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create form fields](./Create-edit-Style-del-formFields/create-formfields)
- [Edit form fields](./Create-edit-Style-del-formFields/edit-formfields)
- [Group form fields](./group-formfields)
- [Add custom data to form fields](./custom-data)
- [Form Constrain](./form-constrain)
- [Form fields Validation](./form-validation)