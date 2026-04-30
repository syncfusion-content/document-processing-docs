---
layout: post
title: Create form fields in the ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to add each PDF form field using the PDF Viewer UI and how to create them programmatically in the Syncfusion ASP.NET Core PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Create PDF Form Fields in ASP.NET Core

Create or add new form fields visually with the Form Designer UI or programmatically using the ASP.NET Core PDF Viewer API. This guide explains both methods and shows field‑specific examples and a complete runnable example.

**Outcome:**

The guide explains the following:
- How to add fields with the Form Designer UI.
- How to add and edit fields programmatically (API).
- How to add common field types: Textbox, Password, CheckBox, RadioButton, ListBox, DropDown, Signature, Initial.

## Steps

### 1. Create form fields using Form Designer UI.

- Enable the Form Designer mode in the PDF Viewer. See [Form Designer overview](../overview).
- Select a field type from the toolbar and click the PDF page to place it.
- Move/resize the field and configure properties in the **Properties** panel.

![Adding a form field using the Form Designer UI](../../../javascript-es6/images/FormDesigner.gif)

### 2. Create Form fields programmatically

Use `addFormField` method of the `formDesigner` module inside the viewer's [`documentLoad`](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#documentload) handler or in response to user actions.
Use this approach to generate form fields dynamically based on data or application logic.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                   documentLoad="onDocumentLoad">
    </ejs-pdfviewer>
</div>
<script>
    function onDocumentLoad() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.formDesignerModule.addFormField('Textbox', {
            name: 'First Name',
            bounds: { X: 146, Y: 229, Width: 150, Height: 24 }
        });
    }
</script>
{% endhighlight %}
{% endtabs %}

**Use programmatic creation when:**

- Building dynamic forms
- Pre-filling forms from databases
- Automating form creation workflows

## Field‑specific instructions

Below are concise UI steps and the programmatic examples for each common field type. The code samples below are complete per‑field examples you can reuse unchanged.

### Textbox

**Add via UI**: Open Form Designer toolbar → select Textbox → click page → configure properties

![Textbox properties panel](../../../javascript-es6/images/ui-textbox-edit.png)

**Add Programmatically (API)**:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                   documentLoad="onDocumentLoad">
    </ejs-pdfviewer>
</div>
<script>
    function onDocumentLoad() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.formDesignerModule.addFormField('Textbox', {
            name: 'FirstName',
            pageNumber: 1,
            bounds: { X: 100, Y: 150, Width: 200, Height: 24 },
            isRequired: true,
            tooltip: 'Enter your first name',
            maxLength: 40
        });
    }
</script>
{% endhighlight %}
{% endtabs %}

### Password

**Add via UI**: Open form designer toolbar → Select Password → place → configure properties

![Password Properties Panel](../../../javascript-es6/images/ui-password-edit.png)

**Add Programmatically (API)**:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                   documentLoad="onDocumentLoad">
    </ejs-pdfviewer>
</div>
<script>
    function onDocumentLoad() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.formDesignerModule.addFormField('Password', {
            name: 'AccountPassword',
            pageNumber: 1,
            bounds: { X: 100, Y: 190, Width: 200, Height: 24 },
            isRequired: true,
            maxLength: 32,
            tooltip: 'Enter a secure password'
        });
    }
</script>
{% endhighlight %}
{% endtabs %}

### CheckBox

**Add via UI**: Open form designer toolbar → Select CheckBox → click to place → duplicate for options.

![CheckBox Properties Panel](../../../javascript-es6/images/ui-checkbox-edit.png)

**Add Programmatically (API)**:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                   documentLoad="onDocumentLoad">
    </ejs-pdfviewer>
</div>
<script>
    function onDocumentLoad() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.formDesignerModule.addFormField('CheckBox', {
            name: 'AgreeTerms',
            pageNumber: 1,
            bounds: { X: 100, Y: 230, Width: 18, Height: 18 },
            isChecked: false,
            tooltip: 'I agree to the terms'
        });
    }
</script>
{% endhighlight %}
{% endtabs %}

### RadioButton

**Add via UI**: Open form designer toolbar → Select RadioButton → place buttons using the same `name` to group them.

![Radio Button Properties Panel](../../../javascript-es6/images/ui-radiobutton-edit.png)

**Add Programmatically (API)**:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                   documentLoad="onDocumentLoad">
    </ejs-pdfviewer>
</div>
<script>
    function onDocumentLoad() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Group by name: 'Gender'
        viewer.formDesignerModule.addFormField('RadioButton', {
            name: 'Gender',
            value: 'Male',
            pageNumber: 0,
            bounds: { X: 100, Y: 270, Width: 16, Height: 16 }
        });

        viewer.formDesignerModule.addFormField('RadioButton', {
            name: 'Gender',
            value: 'Female',
            pageNumber: 0,
            bounds: { X: 160, Y: 270, Width: 16, Height: 16 }
        });
    }
</script>
{% endhighlight %}
{% endtabs %}

### ListBox

**Add via UI**: Open form designer toolbar → Select ListBox → place → add items in Properties.

![ListBox Properties Panel](../../../javascript-es6/images/ui-listbox-edit.png)

**Add Programmatically (API)**:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                   documentLoad="onDocumentLoad">
    </ejs-pdfviewer>
</div>
<script>
    function onDocumentLoad() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        var options = [
            { itemName: 'Item 1', itemValue: 'item1' },
            { itemName: 'Item 2', itemValue: 'item2' },
            { itemName: 'Item 3', itemValue: 'item3' }
        ];

        viewer.formDesignerModule.addFormField('ListBox', {
            name: 'States',
            pageNumber: 1,
            bounds: { X: 100, Y: 310, Width: 220, Height: 70 },
            options: options
        });
    }
</script>
{% endhighlight %}
{% endtabs %}

### DropDown

**Add via UI**: Open form designer toolbar → Select DropDown → place → add items → set default value.

![DropDown Properties Panel](../../../javascript-es6/images/ui-dropdown-edit.png)

**Add Programmatically (API)**:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                   documentLoad="onDocumentLoad">
    </ejs-pdfviewer>
</div>
<script>
    function onDocumentLoad() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        var options = [
            { itemName: 'Item 1', itemValue: 'item1' },
            { itemName: 'Item 2', itemValue: 'item2' },
            { itemName: 'Item 3', itemValue: 'item3' }
        ];

        viewer.formDesignerModule.addFormField('DropDown', {
            name: 'Country',
            options: options,
            bounds: { X: 560, Y: 320, Width: 150, Height: 24 }
        });
    }
</script>
{% endhighlight %}
{% endtabs %}

### Signature Field

**Add via UI**: Open form designer toolbar → select Signature Field → place where signing is required → configure indicator text/thickness/tooltip/isRequired.

![Signature Field](../../../javascript-es6/images/ui-signature-edit.png)

**Add Programmatically (API)**:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                   documentLoad="onDocumentLoad">
    </ejs-pdfviewer>
</div>
<script>
    function onDocumentLoad() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.formDesignerModule.addFormField('SignatureField', {
            name: 'Sign',
            bounds: { X: 57, Y: 923, Width: 200, Height: 43 },
            tooltip: 'sign Here',
            isRequired: true
        });
    }
</script>
{% endhighlight %}
{% endtabs %}

### Initial Field

**Add via UI**: Open form designer toolbar → select Initial Field → place where initials are needed → configure text/isRequired.

![Initial field Properties Panel](../../../javascript-es6/images/ui-initial-edit.png)

**Add Programmatically (API)**:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                   documentLoad="onDocumentLoad">
    </ejs-pdfviewer>
</div>
<script>
    function onDocumentLoad() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.formDesignerModule.addFormField('InitialField', {
            name: 'Sign',
            bounds: { X: 57, Y: 923, Width: 200, Height: 43 },
            tooltip: 'sign Here',
            isRequired: true
        });
    }
</script>
{% endhighlight %}
{% endtabs %}

## Add fields dynamically with setFormFieldMode

Use `setFormFieldMode()` to switch the designer into a specific field mode and let users add fields on the fly.

### Edit Form Fields in ASP.NET Core PDF Viewer
You can edit form fields using the UI or API.

#### Edit Using the UI
- Right click a field → **Properties** to update settings. (Image here)
- Drag to move; use handles to resize.
- Use the toolbar to toggle field mode or add new fields.

#### Edit Programmatically

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button onclick="editTextbox()">EditTextBox</button>
<button onclick="addPasswordField()">Add Form Field</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                   documentLoad="onDocumentLoad">
    </ejs-pdfviewer>
</div>

<script>
    function onDocumentLoad() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.formDesignerModule.addFormField('InitialField', {
            name: 'Sign',
            bounds: { X: 57, Y: 923, Width: 200, Height: 43 },
            tooltip: 'sign Here',
            isRequired: true
        });
    }

    function editTextbox() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        var fields = viewer.retrieveFormFields() || [];
        var field = fields.find(function(f) { return f.name === 'FirstName'; }) || fields[0];
        if (field) {
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
        }
    }

    function addPasswordField() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.formDesignerModule.setFormFieldMode('Password');
    }
</script>
{% endhighlight %}
{% endtabs %}

[View Sample on GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples)

## Troubleshooting

- If fields do not appear, verify [`resourceUrl`](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#resourceurl) matches the EJ2 PDF Viewer library version and that the document loads correctly.
- If using WASM or additional services, confirm those resources are reachable from the environment.

## Related topics

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Modify form fields](./modify-form-fields)
- [Style form fields](./customize-form-fields)
- [Remove form fields](./remove-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Form Fields API](../form-fields-api)