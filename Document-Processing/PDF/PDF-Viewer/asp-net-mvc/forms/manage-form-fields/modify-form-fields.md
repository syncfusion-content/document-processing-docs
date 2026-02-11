---
layout: post
title: Modify form fields in MVC PDF Viewer | Syncfusion
description: Learn how to modify PDF form fields using the UI and programmatically with APIs in the Syncfusion MVC PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Modify PDF Form Field Properties in MVC PDF Viewer
You can modify form fields using the **UI** or **API**.

## Modify PDF Form Field Properties using the UI
- Right click a field → **Properties** to update settings.
![Textbox properties panel](../../../javascript-es6/images/ui-textbox-edit.png)
- Drag to move; use handles to resize.
- Use the toolbar to toggle field mode or add new fields.

## Modify PDF Form Field Properties programmatically
Use [updateFormField()](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#updateFormField) to change behavior/data (including position and size):

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:120px">
        <button id="modifyTextbox">Apply Textbox Changes</button>
    </div>

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            document.getElementById('modifyTextbox').addEventListener('click', function () {
                var fields = pdfviewer.retrieveFormFields();
                var field = fields.find(function (f) { return f.name === 'First Name'; }) || fields[0];
                if (field) {
                    pdfviewer.formDesignerModule.updateFormField(field, {
                        value: 'John',
                        fontFamily: 'Courier',
                        fontSize: 12,
                        fontStyle: 'None',
                        color: 'black',
                        backgroundColor: 'white',
                        borderColor: 'black',
                        thickness: 2,
                        alignment: 'Left',
                        maxLength: 50
                    });
                }
            });
        });
    </script>

{% endhighlight %}
{% endtabs %}

## Modify PDF Form Field Properties by Field type

### Textbox
- UI: Update value, font, size, colors, border thickness, alignment, max length, multiline.
![Textbox properties panel](../../../javascript-es6/images/ui-textbox-edit.png)
- API: [updateFormField()](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#updateFormField) for value, typography, alignment, colors, borders.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:120px">
        <button id="modifyTextbox">Apply Textbox Changes</button>
    </div>

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            document.getElementById('modifyTextbox').addEventListener('click', function () {
                var fields = pdfviewer.retrieveFormFields();
                var field = fields.find(function (f) { return f.name === 'First Name'; }) || fields[0];
                if (field) {
                    pdfviewer.formDesignerModule.updateFormField(field, {
                        value: 'John',
                        fontFamily: 'Courier',
                        fontSize: 12,
                        fontStyle: 'None',
                        color: 'black',
                        backgroundColor: 'white',
                        borderColor: 'black',
                        thickness: 2,
                        alignment: 'Left',
                        maxLength: 50
                    });
                }
            });
        });
    </script>

{% endhighlight %}
{% endtabs %}

### Password

- UI: Tooltip, required, max length, font, appearance.
![Password edited from UI](../../../javascript-es6/images/ui-password-edit.png)
- API: [updateFormField()](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#updateFormField) for tooltip, validation flags, typography, colors, alignment, borders.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:120px">
        <button id="modifyPasswordBox">Edit PasswordBox</button>
    </div>

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            document.getElementById('modifyPasswordBox').addEventListener('click', function () {
                var fields = pdfviewer.retrieveFormFields();
                var field = fields.find(function (f) { return f.name === 'Password'; });
                if (field) {
                    pdfviewer.formDesignerModule.updateFormField(field, {
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
            });
        });
    </script>

{% endhighlight %}
{% endtabs %}

### CheckBox
- UI: Toggle checked state.
![CheckBox edited from UI](../../../javascript-es6/images/ui-checkbox-edit.png)
- API: [updateFormField()](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#updateFormField) for isChecked, tooltip, colors, borders.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:120px">
        <button id="modifyCheckbox">Modify CheckBox</button>
    </div>

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            document.getElementById('modifyCheckbox').addEventListener('click', function () {
                var fields = pdfviewer.retrieveFormFields();
                var cb = fields.find(function (f) { return f.name === 'Subscribe'; });
                if (cb) {
                    pdfviewer.formDesignerModule.updateFormField(cb, {
                        isChecked: true,
                        backgroundColor: 'white',
                        borderColor: 'black',
                        thickness: 2,
                        tooltip: 'Subscribe to newsletter'
                    });
                }
            });
        });
    </script>

{% endhighlight %}
{% endtabs %}

### RadioButton
•	UI: Set selected item in a group (same Name).
![RadioButton edited from UI](../../../javascript-es6/images/ui-radiobutton-edit.png)
•	API: [updateFormField()](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#updateFormField) to set selected value and border appearance.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:120px">
        <button id="editRadio">Modify RadioButton</button>
    </div>

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            document.getElementById('editRadio').addEventListener('click', function () {
                var fields = pdfviewer.retrieveFormFields();
                var genderRadios = fields.filter(function (f) { return f.name === 'Gender'; });
                if (genderRadios[1]) {
                    pdfviewer.formDesignerModule.updateFormField(genderRadios[0], { isSelected: false });
                    pdfviewer.formDesignerModule.updateFormField(genderRadios[1], { isSelected: true, thickness: 2, borderColor: 'black' });
                }
            });
        });
    </script>

{% endhighlight %}
{% endtabs %}

### ListBox
•	UI: Add/remove items, set selection, adjust fonts/colors.
![ListBox edited from UI](../../../javascript-es6/images/ui-listbox-edit.png)
•	API: [updateFormField()](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#updateFormField) for items, selection, borders.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:120px">
        <button id="editListBox">Edit ListBox</button>
    </div>

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            document.getElementById('editListBox').addEventListener('click', function () {
                var fields = pdfviewer.retrieveFormFields();
                var lb = fields.find(function (f) { return f.name === 'States'; });
                if (lb) {
                    var option = [
                        { itemName: 'Alabama', itemValue: 'AL' },
                        { itemName: 'Alaska', itemValue: 'AK' },
                        { itemName: 'Arizona', itemValue: 'AZ' }
                    ];
                    pdfviewer.formDesignerModule.updateFormField(lb, {
                        fontFamily: 'Courier',
                        fontSize: 5,
                        color: 'black',
                        backgroundColor: 'white',
                        tooltip: 'listbox',
                        options: option
                    });
                }
            });
        });
    </script>

{% endhighlight %}
{% endtabs %}

### DropDown
•	UI: Add/remove items, default value, appearance.
![DropDown edited from UI](../../../javascript-es6/images/ui-dropdown-edit.png)
•	API: [updateFormField()](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#updateFormField) for items, value, borders.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:120px">
        <button id="editDropDown">Edit DropDown</button>
    </div>

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            document.getElementById('editDropDown').addEventListener('click', function () {
                var fields = pdfviewer.retrieveFormFields();
                var dd = fields.find(function (f) { return f.name === 'Country'; });
                if (dd) {
                    pdfviewer.formDesignerModule.updateFormField(dd, {
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
            });
        });
    </script>

{% endhighlight %}
{% endtabs %}

### Signature Field
•	UI: Tooltip, thickness, indicator text, required/visibility.
![Signature field edited from UI](../../../javascript-es6/images/ui-signature-edit.png)
•	API: [updateFormField()](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#updateFormField) for tooltip, required, colors, borders.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:120px">
        <button id="editSignature">Edit Signature</button>
    </div>

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            document.getElementById('editSignature').addEventListener('click', function () {
                var fields = pdfviewer.retrieveFormFields();
                var sig = fields.find(function (f) { return f.name === 'Sign'; });
                if (sig) {
                    pdfviewer.formDesignerModule.updateFormField(sig, {
                        tooltip: 'Please sign here',
                        thickness: 3,
                        isRequired: true,
                        isPrint: true,
                        backgroundColor: 'white',
                        borderColor: 'black'
                    });
                }
            });
        });
    </script>

{% endhighlight %}
{% endtabs %}

### Initial Field
•	UI: Tooltip, indicator text, thickness, required/visibility.
![Initial field edited from UI](../../../javascript-es6/images/ui-initial-edit.png)
•	API: [updateFormField()](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#updateFormField) for tooltip, required, colors, borders.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:120px">
        <button id="editInitial">Edit Initial</button>
    </div>

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            document.getElementById('editInitial').addEventListener('click', function () {
                var fields = pdfviewer.retrieveFormFields();
                var init = fields.find(function (f) { return f.name === 'Initial'; });
                if (init) {
                    pdfviewer.formDesignerModule.updateFormField(init, {
                        tooltip: 'Add your initials',
                        thickness: 2,
                        isRequired: true,
                        isPrint: true,
                        backgroundColor: 'white',
                        borderColor: 'black'
                    });
                }
            });
        });
    </script>

{% endhighlight %}
{% endtabs %}

[View Sample on GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Create form fields](./create-form-fields)
- [Remove form Fields](./remove-form-fields)
- [Style form fields](./customize-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Form fields API](../form-fields-api)