---
layout: post
title: Modify Form Fields in ASP.NET Core PDF Viewer | Syncfusion
description: Edit PDF form fields in the ASP.NET Core PDF Viewer using the built-in UI and programmatic APIs to update field properties at runtime.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Modify Form Fields in ASP.NET Core PDF Viewer
You can modify form fields using the **UI** or **API**.

## Modify PDF Form Field Properties using the UI
- Right click a field → **Properties** to update settings.
![Textbox properties panel](../../../javascript-es6/images/ui-textbox-edit.png)
- Drag to move; use handles to resize.
- Use the toolbar to toggle field mode or add new fields.

## Modify PDF Form Field Properties programmatically
Use [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) to change behavior/data (including position and size).

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="modifyTextbox">Apply Textbox Changes</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  document.getElementById('modifyTextbox').addEventListener('click', function () {
    if (!pdfviewer || !pdfviewer.formDesignerModule) { console.warn('formDesignerModule not ready'); return; }
    var fields = pdfviewer.retrieveFormFields() || [];
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
- API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) for value, typography, alignment, colors, borders.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="modifyTextbox">Apply Textbox Changes</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  document.getElementById('modifyTextbox').addEventListener('click', function () {
    if (!pdfviewer || !pdfviewer.formDesignerModule) { console.warn('formDesignerModule not ready'); return; }
    var fields = pdfviewer.retrieveFormFields() || [];
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
- API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) for tooltip, validation flags, typography, colors, alignment, borders.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="modifyPasswordBox">Edit PasswordBox</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  document.getElementById('modifyPasswordBox').addEventListener('click', function () {
    if (!pdfviewer || !pdfviewer.formDesignerModule) { console.warn('formDesignerModule not ready'); return; }
    var fields = pdfviewer.retrieveFormFields() || [];
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
- API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) for isChecked, tooltip, colors, borders.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="modifyCheckbox">Modify CheckBox</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  document.getElementById('modifyCheckbox').addEventListener('click', function () {
    if (!pdfviewer || !pdfviewer.formDesignerModule) { console.warn('formDesignerModule not ready'); return; }
    var fields = pdfviewer.retrieveFormFields() || [];
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
- API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) to set selected value and border appearance.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="editRadio">Modify RadioButton</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  document.getElementById('editRadio').addEventListener('click', function () {
    if (!pdfviewer || !pdfviewer.formDesignerModule) { console.warn('formDesignerModule not ready'); return; }
    var fields = pdfviewer.retrieveFormFields() || [];
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
- API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) for items, selection, borders.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="editListBox">Edit ListBox</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  document.getElementById('editListBox').addEventListener('click', function () {
    if (!pdfviewer || !pdfviewer.formDesignerModule) { console.warn('formDesignerModule not ready'); return; }
    var fields = pdfviewer.retrieveFormFields() || [];
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
- API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) for items, value, borders.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="editDropDown">Edit DropDown</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  document.getElementById('editDropDown').addEventListener('click', function () {
    if (!pdfviewer || !pdfviewer.formDesignerModule) { console.warn('formDesignerModule not ready'); return; }
    var fields = pdfviewer.retrieveFormFields() || [];
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
- API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) for tooltip, required, colors, borders.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>

<button id="editSignature">Edit Signature</button>

<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  document.getElementById('editSignature').addEventListener('click', function () {
    if (!pdfviewer || !pdfviewer.formDesignerModule) { console.warn('formDesignerModule not ready'); return; }
    var fields = pdfviewer.retrieveFormFields() || [];
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
- API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) for tooltip, required, colors, borders.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="editInitial">Edit Initial</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  document.getElementById('editInitial').addEventListener('click', function () {
    if (!pdfviewer || !pdfviewer.formDesignerModule) { console.warn('formDesignerModule not ready'); return; }
    var fields = pdfviewer.retrieveFormFields() || [];
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

- API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) for value, format script, typography, colors, borders.

[View Sample on GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples)

### Barcode

Select a Barcode field in Form Designer to review or change its settings. The toolbar includes the Barcode tool, and the page displays the generated barcode.

![Barcode field in Form Designer](../../../asp-net-core/images/ui-barcode.png)

Use the field's **General** properties to review or edit its name, value, caption, tooltip, visibility, read-only and required settings, and print visibility.

The **Options** properties include the barcode type, X dimension, error correction level, and the option to compress the data before encoding it to the barcode.

#### Symbology

The barcode type is referred to as the **symbology**. The following symbologies are supported, and **PDF417** is used by default.

| Symbology | Description |
|---|---|
| `PDF417` | A stacked, linear barcode that supports alphanumeric data. This is the default symbology. |
| `QRCode` | A two-dimensional matrix barcode that supports numeric, alphanumeric, and binary data. |
| `DataMatrix` | A two-dimensional matrix barcode that is used to encode a small amount of data in a compact area. |

![Barcode field Symbology in Form Designer](../../../asp-net-core/images/barcode-ui-types.png)

#### Value Format

The value that is encoded in the barcode can be supplied in three ways.

| Value format | Description |
|---|---|
| `TabDelimited` | Carries the values in the barcode separated by a tab character, so the values appear at a tab space distance from each other. |
| `XML` | Stores the values pairwise in an XML structure. |
| `CustomValue` | Stores the value as a string, and any string can be assigned to it. |

![Barcode Value Format in Form Designer](../../../asp-net-core/images/barcode-value-types.png)

N> Complete support for executing custom scripts is not available. Instead, the PDF Viewer parses the final value assigned to the barcode field in the PDF document.

#### Static Barcode Value

The barcode value can be set to a fixed value from the **Value** tab of the Barcode Properties dialog.

Select **Custom Value** in the **Encode** dropdown, and then enter the text to be encoded in the **Custom Value** text box.

![Custom Value option in the Value tab](../../../asp-net-core/images/ui-barcode-value-tab.png)

#### Dynamic Barcode Value

The barcode value can also be calculated from the other form fields that are present in the PDF document.

In the Form Designer, open the **Value** tab of the Barcode Properties dialog and use the **Select Field for Calculation** option to bind one or more fields to the barcode field.

![Select Field for Calculation option in the Value tab](../../../asp-net-core/images/dynamic-field-binding.png)

When a value is entered in a bound field, the barcode value is updated automatically.

N> By default, the barcode stores the field name along with its value. To store only the field values, clear the **Include Field Names** option. This option is available only for the `TabDelimited` format and does not apply to the `XML` format, which always stores data as name-value pairs.

#### Caption

By default, the name of the loaded PDF document is displayed below the generated barcode field. Use the **caption** property to change this text, either from the UI or programmatically.

#### Error Correction Level

The error correction level determines how much damage the generated barcode can tolerate before it can no longer be read. The available levels depend on the selected symbology.

| Symbology | Supported values |
|---|---|
| `PDF417` | `Level0` to `Level8` |
| `QRCode` | `Low`, `Medium`, `Quartile`, `High` |
| `DataMatrix` | Not applicable, since Data Matrix does not use this setting. |

The default error correction level is `Level5`.

![Barcode error correction level settings in Form Designer](../../../asp-net-core/images/ui-barcode-error-correction.png)

- API: [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) for caption, symbology, value format, and error correction level.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script type="text/javascript">
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

[View Sample on GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/1065622_barcode/How%20to/Barcode%20Field)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Create form fields](./create-form-fields)
- [Remove form fields](./remove-form-fields)
- [Style form fields](./customize-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Form fields API](../form-fields-api)