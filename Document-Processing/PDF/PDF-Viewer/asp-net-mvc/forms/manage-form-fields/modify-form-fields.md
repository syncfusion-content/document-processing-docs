---
layout: post
title: Modify Form Fields in ASP.NET MVC PDF Viewer | Syncfusion
description: Edit PDF form fields in the ASP.NET MVC PDF Viewer using the built-in UI and programmatic APIs to update field properties at runtime.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Modify Form Fields in ASP.NET MVC PDF Viewer
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
- UI: Set selected item in a group (same Name).
![RadioButton edited from UI](../../../javascript-es6/images/ui-radiobutton-edit.png)
- API: [updateFormField()](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#updateFormField) to set selected value and border appearance.

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
- UI: Add/remove items, set selection, adjust fonts/colors.
![ListBox edited from UI](../../../javascript-es6/images/ui-listbox-edit.png)
- API: [updateFormField()](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#updateFormField) for items, selection, borders.

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
- UI: Add/remove items, default value, appearance.
![DropDown edited from UI](../../../javascript-es6/images/ui-dropdown-edit.png)
- API: [updateFormField()](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#updateFormField) for items, value, borders.

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
- UI: Tooltip, thickness, indicator text, required/visibility.
![Signature field edited from UI](../../../javascript-es6/images/ui-signature-edit.png)
- API: [updateFormField()](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#updateFormField) for tooltip, required, colors, borders.

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
- UI: Tooltip, indicator text, thickness, required/visibility.
![Initial field edited from UI](../../../javascript-es6/images/ui-initial-edit.png)
- API: [updateFormField()](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#updateFormField) for tooltip, required, colors, borders.

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

### DateTime Picker

Select a DateTime Picker field in Form Designer to review or change its settings. The toolbar includes the DateTime Picker tool, and the page displays date and time fields.

![DateTime Picker tool and date and time fields in Form Designer](../../../javascript-es5/images/ui-date-time.png)

Date and time fields can also be used to enter values directly or choose a value from the picker:

- For a date field, type a date or open the calendar picker.

  ![Calendar picker open for a DateTime field](../../../javascript-es5/images/ui-date-entry.png)

- For a time field, type a time or open the time picker.

  ![Time picker open for a DateTime field](../../../javascript-es5/images/ui-time-entry.png)

Use the field's **General** properties to review or edit its name, value, tooltip, visibility, read-only and required settings, and print visibility.

![General properties for a DateTime Picker field](../../../javascript-es5/images/ui-date-time-properties.png)

The **Appearance** properties include font, colors, border, and alignment.

![DateTime Picker Appearance](../../../javascript-es5/images/ui-date-time-appearance.png)

Use the **Format** tab to change the field type (Date or Time), select a display format, and review the preview.

![DateTime Picker format settings with type, format, and preview](../../../javascript-es5/images/ui-date-time-format.png)

- API: [updateFormField()](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#updateFormField) for value, format script, typography, colors, borders.

[View Sample on GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples)

### Button

Select a Button field in Form Designer to review or change its settings. The toolbar includes the Button tool, and the page displays the button field.

![Button field in Form Designer](../../../asp-net-mvc/images/ui-button.png)

Use the field's **General** properties to review or edit its name, value, tooltip, visibility, read-only and required settings, and print visibility.

The **Appearance** properties include font, colors, border, and alignment of the button caption.

#### Button Actions

Use the **Actions** tab to associate an action with the button field. The action is executed when the corresponding event occurs.

| Action | Description |
|---|---|
| `mouseUp` | Executes the action when the mouse button is released over the button field. |
| `mouseDown` | Executes the action when the mouse button is pressed over the button field. |
| `mouseEnter` | Executes the action when the pointer enters the button field area. |
| `mouseLeave` | Executes the action when the pointer leaves the button field area. |
| `gotFocus` | Executes the action when the button field receives focus. |
| `lostFocus` | Executes the action when the button field loses focus. |

![Button field Actions in Form Designer](../../../asp-net-mvc/images/ui-button-actions.png)

The **Go To Action** navigates the viewer to a specific page, position, and zoom level in the document when the action is triggered.

| Property | Description |
|---|---|
| `destinationPageNumber` | The page number to navigate to. |
| `destinationLocation` | The position (`x` and `y`) within the destination page. |
| `zoomValue` | The zoom level applied when navigating to the destination. A value of `0` retains the current zoom level. |

- API: [`updateFormField()`](https://ej2.syncfusion.com/documentation/api/pdfviewer/formdesigner#updateformfield) for the button text, value, tooltip, alignment, typography, colors, borders, and actions.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:120px">
    <button id="editButton">Edit Button</button>
</div>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").DocumentLoad("documentLoad").Render()
</div>

<script>
    function documentLoad() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Add a button field that navigates to page 5 when it is clicked
        pdfviewer.formDesignerModule.addFormField('ButtonField', {
            name: 'Submit1',
            pageNumber: 1,
            bounds: { X: 100, Y: 350, Width: 120, Height: 32 },
            value: 'Submit',
            text: 'Submit',
            tooltip: 'Click to submit',
            actions: {
                mouseUp: {
                    action: 'GoTo',
                    destinationPageNumber: 5,
                    destinationLocation: { x: 100, y: 100 },
                    zoomValue: 2
                }
            }
        });
    };
    document.getElementById('editButton').addEventListener('click', function () {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Retrieve form fields collection
        var fields = pdfviewer.retrieveFormFields();
        // Find the button field by name
        var button = (fields || []).find(function (f) { return f && f.name === 'Submit1'; });

        if (button) {
            pdfviewer.formDesignerModule.updateFormField(button, {
                value: 'Submit Button',
                text: 'Submit Button',
                alignment: 'Left',
                tooltip: 'Updated Submit Button',
                actions: {
                    mouseUp: {
                        action: 'GoTo',
                        destinationPageNumber: 7,
                        destinationLocation: { x: 100, y: 100 },
                        zoomValue: 1
                    }
                }
            });
        }
    });
</script>

{% endhighlight %}
{% endtabs %}

[View Sample on GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/Forms/Button%20field)

### Barcode

Select a Barcode field in Form Designer to review or change its settings. The toolbar includes the Barcode tool, and the page displays the generated barcode.

![Barcode field in Form Designer](../../../asp-net-mvc/images/ui-barcode.png)

Use the field's **General** properties to review or edit its name, value, caption, tooltip, visibility, read-only and required settings, and print visibility.

The **Options** properties include the barcode type, X dimension, error correction level, and the option to compress the data before encoding it to the barcode.

#### Symbology

The barcode type is referred to as the **symbology**. The following symbologies are supported, and **PDF417** is used by default.

| Symbology | Description |
|---|---|
| `PDF417` | A stacked, linear barcode that supports alphanumeric data. This is the default symbology. |
| `QRCode` | A two-dimensional matrix barcode that supports numeric, alphanumeric, and binary data. |
| `DataMatrix` | A two-dimensional matrix barcode that is used to encode a small amount of data in a compact area. |

![Barcode field Symbology in Form Designer](../../../asp-net-mvc/images/barcode-ui-types.png)

#### Value Format

The value that is encoded in the barcode can be supplied in three ways.

| Value format | Description |
|---|---|
| `TabDelimited` | Carries the values in the barcode separated by a tab character, so the values appear at a tab space distance from each other. |
| `XML` | Stores the values pairwise in an XML structure. |
| `CustomValue` | Stores the value as a string, and any string can be assigned to it. |

![Barcode Value Format in Form Designer](../../../asp-net-mvc/images/barcode-value-types.png)

N> Complete support for executing custom scripts is not available. Instead, the PDF Viewer parses the final value assigned to the barcode field in the PDF document.

#### Static Barcode Value

The barcode value can be set to a fixed value from the **Value** tab of the Barcode Properties dialog.

Select **Custom Value** in the **Encode** dropdown, and then enter the text to be encoded in the **Custom Value** text box.

![Custom Value option in the Value tab](../../../asp-net-mvc/images/ui-barcode-value-tab.png)

#### Dynamic Barcode Value

The barcode value can also be calculated from the other form fields that are present in the PDF document.

In the Form Designer, open the **Value** tab of the Barcode Properties dialog and use the **Select Field for Calculation** option to bind one or more fields to the barcode field.

![Select Field for Calculation option in the Value tab](../../../asp-net-mvc/images/dynamic-field-binding.png)

When a value is entered in a bound field, the barcode value is updated automatically.

N> By default, the barcode stores the field name along with its value. To store only the field values, clear the **Include Field Names** option. This option is available only for the `TabDelimited` format and does not apply to the `XML` format, which always stores data as name-value pairs.

#### Barcode Caption

By default, the name of the loaded PDF document is displayed below the generated barcode field. Use the **caption** property to change this text, either from the UI or programmatically.

#### Error Correction Level

The error correction level determines how much damage the generated barcode can tolerate before it can no longer be read. The available levels depend on the selected symbology.

| Symbology | Supported values |
|---|---|
| `PDF417` | `Level0` to `Level8` |
| `QRCode` | `Low`, `Medium`, `Quartile`, `High` |
| `DataMatrix` | Not applicable, since Data Matrix does not use this setting. |

The default error correction level is `Level5`.

![Barcode error correction level settings in Form Designer](../../../asp-net-mvc/images/ui-barcode-error-correction.png)

- API: [updateFormField()](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#updateFormField) for caption, symbology, value format, and error correction level.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <script>
        function updateBarcodeField() {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            var fields = Array.isArray(pdfviewer.formFieldCollections)
                ? pdfviewer.formFieldCollections
                : [];
            var barcode = fields.filter(function (field) {
                return field.type === 'Barcode';
            })[0];

            if (barcode) {
                // Update the caption, symbology, value format and error correction level of the barcode field
                pdfviewer.formDesignerModule.updateFormField(barcode, {
                    caption: 'Updated Barcode Caption',
                    symbology: 'QRCode',
                    valueFormat: 'CustomValue',
                    errorCorrectionLevel: 'High'
                });
            }
        }
    </script>

{% endhighlight %}
{% endtabs %}

[View Sample on GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/Forms/Barcode%20field)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Create form fields](./create-form-fields)
- [Remove form fields](./remove-form-fields)
- [Customize form fields](./customize-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Form fields API](../form-fields-api)