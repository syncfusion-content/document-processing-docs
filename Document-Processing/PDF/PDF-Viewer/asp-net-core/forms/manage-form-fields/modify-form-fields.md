---
layout: post
title: Edit form fields in the ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to edit PDF form fields using the UI and programmatically with APIs in the Syncfusion ASP.NET Core PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Modify PDF Form Field Properties in ASP.NET Core

Modify form fields using the UI or programmatically via the API.

## Modify PDF form field properties using the UI
- Right click a field → **Properties** to update settings.
![Textbox properties panel showing properties and layout](../../../javascript-es6/images/ui-textbox-edit.png)
- Drag to move; use handles to resize.
- Use the toolbar to toggle field mode or add new fields.

## Modify PDF form field properties programmatically
Use [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) to change behavior or data (including position and size):

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button onclick="onEditTextbox()">Apply Textbox Changes</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>

<script>
    function onEditTextbox() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (!viewer) return;
        var fields = viewer.retrieveFormFields();
        var field = fields.find(function(f) { return f.name === 'First Name'; }) || fields[0];
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
</script>
{% endhighlight %}
{% endtabs %}

## Modify PDF Form Field Properties by Field type

### Textbox
- UI: Update value, font, size, colors, border thickness, alignment, max length, multiline.
![Textbox properties panel showing value and typography settings](../../../javascript-es6/images/ui-textbox-edit.png)
- API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) for value, typography, alignment, colors, borders.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button onclick="onEditTextbox()">Apply Textbox Changes</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>

<script>
    function onEditTextbox() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (!viewer) return;
        var fields = viewer.retrieveFormFields();
        var field = fields.find(function(f) { return f.name === 'First Name'; }) || fields[0];
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
</script>
{% endhighlight %}
{% endtabs %}

### Password

- UI: Tooltip, required, max length, font, appearance.
![Password properties panel showing tooltip and validation settings](../../../javascript-es6/images/ui-password-edit.png)
- API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) for tooltip, validation flags, typography, colors, alignment, borders.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button onclick="onEditPassword()">Edit PasswordBox</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>

<script>
    function onEditPassword() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (!viewer) return;
        var fields = viewer.retrieveFormFields();
        var field = fields.find(function(f) { return f.name === 'Password'; });
        if (field) {
            viewer.formDesignerModule.updateFormField(field, {
                tooltip: 'Enter your password',
                isReadOnly: false,
                isRequired: true,
                isPrint: true,
                fontFamily: 'Courier',
                fontSize: 10,
                color: 'black',
                borderColor: 'black',
                backgroundColor: 'white',
                alignment: 'Left',
                maxLength: 20,
                thickness: 1
            });
        }
    }
</script>
{% endhighlight %}
{% endtabs %}

### CheckBox
- UI: Toggle checked state.
![CheckBox properties panel showing checked state](../../../javascript-es6/images/ui-checkbox-edit.png)
- API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) for isChecked, tooltip, colors, borders.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button onclick="onEditPassword()">Edit PasswordBox</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>

<script>
    function onEditCheckbox() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (!viewer) return;
        var fields = viewer.retrieveFormFields();
        var cb = fields.find(function(f) { return f.name === 'Subscribe'; });
        if (cb) {
            viewer.formDesignerModule.updateFormField(cb, {
                isChecked: true,
                backgroundColor: 'white',
                borderColor: 'black',
                thickness: 2,
                tooltip: 'Subscribe to newsletter'
            });
        }
    }
</script>
{% endhighlight %}
{% endtabs %}

### RadioButton
- UI: Set selected item in a group (same Name).
![RadioButton properties panel showing grouped options](../../../javascript-es6/images/ui-radiobutton-edit.png)
- API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) to set selected value and border appearance.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button onclick="onEditRadio()">Edit RadioButton</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>

<script>
    function onEditRadio() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (!viewer) return;
        var fields = viewer.retrieveFormFields();
        var genderRadios = fields.filter(function(f) { return f.name === 'Gender'; });
        if (genderRadios.length > 1) {
            viewer.formDesignerModule.updateFormField(genderRadios[0], { isSelected: false });
            viewer.formDesignerModule.updateFormField(genderRadios[1], { isSelected: true, thickness: 2, borderColor: 'black' });
        }
    }
</script>
{% endhighlight %}
{% endtabs %}

### ListBox
- UI: Add/remove items, set selection, adjust fonts/colors.
![ListBox properties panel showing items and selection](../../../javascript-es6/images/ui-listbox-edit.png)
- API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) for items, selection, borders.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button onclick="onEditListBox()">Edit ListBox</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>

<script>
    function onEditListBox() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (!viewer) return;
        var fields = viewer.retrieveFormFields();
        var lb = fields.find(function(f) { return f.name === 'States'; });
        if (lb) {
            viewer.formDesignerModule.updateFormField(lb, {
                options: [
                    { itemName: 'Alabama', itemValue: 'AL' },
                    { itemName: 'Alaska', itemValue: 'AK' },
                    { itemName: 'Arizona', itemValue: 'AZ' }
                ],
                value: 'AZ',
                fontFamily: 'Courier',
                fontSize: 10,
                color: 'black',
                borderColor: 'black',
                backgroundColor: 'white'
            });
        }
    }
</script>
{% endhighlight %}
{% endtabs %}

### DropDown
- UI: Add/remove items, default value, appearance.
![DropDown properties panel showing list items and default value](../../../javascript-es6/images/ui-dropdown-edit.png)
- API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) for items, value, borders.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button onclick="onEditDropDown()">Edit DropDown</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>

<script>
    function onEditDropDown() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (!viewer) return;
        var fields = viewer.retrieveFormFields();
        var dd = fields.find(function(f) { return f.name === 'Country'; });
        if (dd) {
            viewer.formDesignerModule.updateFormField(dd, {
                options: [
                    { itemName: 'USA', itemValue: 'US' },
                    { itemName: 'Canada', itemValue: 'CA' },
                    { itemName: 'Mexico', itemValue: 'MX' }
                ],
                value: 'US',
                fontFamily: 'Courier',
                fontSize: 10,
                color: 'black',
                borderColor: 'black',
                backgroundColor: 'white'
            });
        }
    }
</script>
{% endhighlight %}
{% endtabs %}

### Signature Field
- UI: Tooltip, thickness, indicator text, required/visibility.
![Signature field properties panel showing indicator and appearance](../../../javascript-es6/images/ui-signature-edit.png)
- API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) for tooltip, required, colors, borders.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button onclick="onEditSignature()">Edit Signature</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>

<script>
    function onEditSignature() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (!viewer) return;
        var fields = viewer.retrieveFormFields();
        var sig = fields.find(function(f) { return f.name === 'Sign'; });
        if (sig) {
            viewer.formDesignerModule.updateFormField(sig, {
                tooltip: 'Please sign here',
                thickness: 3,
                isRequired: true,
                isPrint: true,
                backgroundColor: 'white',
                borderColor: 'black'
            });
        }
    }
</script>
{% endhighlight %}
{% endtabs %}

### Initial Field
- UI: Tooltip, indicator text, thickness, required/visibility.
![Initial field properties panel showing indicator and tooltip](../../../javascript-es6/images/ui-initial-edit.png)
- API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) for tooltip, required, colors, borders.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button onclick="onEditInitial()">Edit Initial</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>

<script>
    function onEditInitial() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (!viewer) return;
        var fields = viewer.retrieveFormFields();
        var init = fields.find(function(f) { return f.name === 'Initial'; });
        if (init) {
            viewer.formDesignerModule.updateFormField(init, {
                tooltip: 'Add your initials',
                thickness: 2,
                isRequired: true,
                isPrint: true,
                backgroundColor: 'white',
                borderColor: 'black'
            });
        }
    }
</script>
{% endhighlight %}
{% endtabs %}

[View Sample on GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Create form fields](./create-form-fields)
- [Remove form Fields](./remove-form-fields)
- [Style form fields](./customize-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Form fields API](../form-fields-api)