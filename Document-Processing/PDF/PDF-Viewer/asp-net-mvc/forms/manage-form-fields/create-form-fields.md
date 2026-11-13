---
layout: post
title: Create Form Fields in ASP.NET MVC PDF Viewer | Syncfusion
description: Add each PDF form field using the ASP.NET MVC PDF Viewer UI, and learn how to create the same fields programmatically from C# or JavaScript.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Create Form Fields in ASP.NET MVC PDF Viewer

You can create or add new form fields either visually using the [Form Designer UI](https://document.syncfusion.com/demos/pdf-viewer/javascript/#/tailwind3/pdfviewer/formdesigner.html) or dynamically using APIs.

## Create Form Fields Using the Form Designer UI 
Use this approach when you want to design forms manually without writing code.

**Steps:**

1. Enable [Form Designer](../form-designer) mode in the PDF Viewer.
2. Click a form field type (Textbox, Checkbox, Dropdown, etc.) from the toolbar.
3. Click on the PDF page to place the form field.
4. Move or resize the field as required.
5. Configure field properties using the **Properties** panel.

![Adding a form field using the Form Designer UI](../../../javascript-es6/images/FormDesigner.gif)

## Add Form Fields Programmatically (API)

Use this approach when you want to generate form fields dynamically based on data or application logic.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            // Example: add a Textbox programmatically
            pdfviewer.documentLoad = function () {
                pdfviewer.formDesignerModule.addFormField('Textbox', {
                    name: 'First Name',
                    bounds: { X: 146, Y: 229, Width: 150, Height: 24 },
                    pageNumber: 1,
                    isRequired: true,
                    tooltip: 'Enter your first name'
                });
            };
        });
    </script>

{% endhighlight %}
{% endtabs %}

**Use programmatic creation when:**

- Building dynamic forms
- Pre-filling forms from databases
- Automating form creation workflows

## PDF Form Field Types and How to Add Them
Each field can be added via the **Form Designer** or **programmatically**.

### Textbox

**Add via Toolbar (UI)**
- Open **Form Designer** → select **Textbox** → click on the page → configure in **Properties**.
![Textbox properties panel](../../../javascript-es6/images/ui-textbox-edit.png)

**Add Programmatically (API)**
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfviewer.documentLoad = function () {
                pdfviewer.formDesignerModule.addFormField('Textbox', {
                    name: 'FirstName',
                    pageNumber: 1,
                    bounds: { X: 100, Y: 150, Width: 200, Height: 24 },
                    isRequired: true,
                    tooltip: 'Enter your first name',
                    maxLength: 40
                });
            };
        });
    </script>

{% endhighlight %}
{% endtabs %}

### Password

**Add via Toolbar (UI)**
- Select **Password** → place it → configure tooltip, required, max length.
![Password Properties Panel](../../../javascript-es6/images/ui-password-edit.png)

**Add Programmatically (API)**
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfviewer.documentLoad = function () {
                pdfviewer.formDesignerModule.addFormField('Password', {
                    name: 'AccountPassword',
                    pageNumber: 1,
                    bounds: { X: 100, Y: 190, Width: 200, Height: 24 },
                    isRequired: true,
                    maxLength: 32,
                    tooltip: 'Enter a secure password'
                });
            };
        });
    </script>

{% endhighlight %}
{% endtabs %}

### CheckBox
**Add via Toolbar (UI)**
- Select **CheckBox** → click to place → duplicate for options → set isChecked, tooltip, appearance.
![CheckBox Properties Panel](../../../javascript-es6/images/ui-checkbox-edit.png)

**Add Programmatically (API)**
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfviewer.documentLoad = function () {
                pdfviewer.formDesignerModule.addFormField('CheckBox', {
                    name: 'AgreeTerms',
                    pageNumber: 1,
                    bounds: { X: 100, Y: 230, Width: 18, Height: 18 },
                    isChecked: false,
                    tooltip: 'I agree to the terms'
                });
            };
        });
    </script>

{% endhighlight %}
{% endtabs %}

### RadioButton
**Add via Toolbar (UI)**
- Select **RadioButton** → place buttons with the **same Name** to group → configure selection/colors.
![Radio Button Properties Panel](../../../javascript-es6/images/ui-radiobutton-edit.png)

**Add Programmatically (API)**
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfviewer.documentLoad = function () {
                pdfviewer.formDesignerModule.addFormField('RadioButton', {
                    name: 'Gender',
                    value: 'Male',
                    pageNumber: 0,
                    bounds: { X: 100, Y: 270, Width: 16, Height: 16 }
                });
                pdfviewer.formDesignerModule.addFormField('RadioButton', {
                    name: 'Gender',
                    value: 'Female',
                    pageNumber: 0,
                    bounds: { X: 160, Y: 270, Width: 16, Height: 16 }
                });
            };
        });
    </script>

{% endhighlight %}
{% endtabs %}

### ListBox
**Add via Toolbar (UI)**
- Select **ListBox** → place → add items in **Properties**.
![ListBox Properties Panel](../../../javascript-es6/images/ui-listbox-edit.png)

**Add Programmatically (API)**
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfviewer.documentLoad = function () {
                var option = [
                    { itemName: 'Item 1', itemValue: 'item1' },
                    { itemName: 'Item 2', itemValue: 'item2' },
                    { itemName: 'Item 3', itemValue: 'item3' }
                ];
                pdfviewer.formDesignerModule.addFormField('ListBox', {
                    name: 'States',
                    pageNumber: 1,
                    bounds: { X: 100, Y: 310, Width: 220, Height: 70 },
                    options: option
                });
            };
        });
    </script>

{% endhighlight %}
{% endtabs %}

### DropDown
**Add via Toolbar (UI)**
- Select **DropDown** → place → add items → set default value.
![DropDown Properties Panel](../../../javascript-es6/images/ui-dropdown-edit.png)

**Add Programmatically (API)**
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfviewer.documentLoad = function () {
                var options = [
                    { itemName: 'Item 1', itemValue: 'item1' },
                    { itemName: 'Item 2', itemValue: 'item2' },
                    { itemName: 'Item 3', itemValue: 'item3' }
                ];

                pdfviewer.formDesignerModule.addFormField('DropDown', {
                    name: 'Country',
                    options: options,
                    bounds: { X: 560, Y: 320, Width: 150, Height: 24 }
                });
            };
        });
    </script>

{% endhighlight %}
{% endtabs %}

### Signature Field
**Add via Toolbar (UI)**
- Select **Signature Field** → place where signing is required → configure indicator text, thickness, tooltip, required.
![Signature Field](../../../javascript-es6/images/ui-signature-edit.png)

**Add Programmatically (API)**
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfviewer.documentLoad = function () {
                pdfviewer.formDesignerModule.addFormField('SignatureField', {
                    name: 'Sign',
                    bounds: { X: 57, Y: 923, Width: 200, Height: 43 },
                    tooltip: 'sign Here',
                    isRequired: true
                });
            };
        });
    </script>

{% endhighlight %}
{% endtabs %}

### Initial Field
**Add via Toolbar (UI)**
- Select **Initial Field** → place where initials are needed → configure text and required state.
![Initial field Properties Panel](../../../javascript-es6/images/ui-initial-edit.png)

**Add Programmatically (API)**
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfviewer.documentLoad = function () {
                pdfviewer.formDesignerModule.addFormField('InitialField', {
                    name: 'Sign',
                    bounds: { X: 57, Y: 923, Width: 200, Height: 43 },
                    tooltip: 'sign Here',
                    isRequired: true
                });
            };
        });
    </script>

{% endhighlight %}
{% endtabs %}

### DateTime Picker
**Add via Toolbar (UI)**
- Open the Form Designer toolbar, select **DateTime Picker**, and click on a PDF page to place the field. The DateTime Picker tool adds date and time fields in Form Designer mode.
![DateTime Picker tool and date and time fields in Form Designer](../../../javascript-es5/images/ui-date-time.png)
- Select the field to configure its general properties, such as its name, value, visibility, and whether it is read-only or required.
![General properties for a DateTime Picker field](../../../javascript-es5/images/ui-date-time-properties.png)

**Manual Entry and Picker**
The field accepts values either by direct typing or through the integrated picker UI:
- **Date Field** – Enter a date manually, or open the calendar dropdown to pick a date.

  ![Calendar picker open for a DateTime field](../../../javascript-es5/images/ui-date-entry.png)

- **Time Field** – Enter a time manually, or open the time dropdown to pick a time.

  ![Time picker open for a DateTime field](../../../javascript-es5/images/ui-time-entry.png)

**Strict Format Validation**
Invalid values are rejected and a validation popup is displayed. The invalid value is not applied to the field.

For example, with the format `m/d/yy`:

| Input | Result |
|---|---|
| `10/19/2026` | Accepted |
| `19/10/26` | Rejected |
| `not-a-date` | Rejected |

**Date / Time Toggle and Format Editing**
The **Format** tab in the Properties panel lets you:
- Switch between Date Picker and Time Picker modes.
- Edit the display format string.
- Preview formatting changes before saving.
![DateTime Picker format settings with type, format, and preview](../../../javascript-es5/images/ui-date-time-format.png)

**Common Formats**

| Format String | Example Output |
|---|---|
| `m/d/yy` | `10/19/26` |
| `mm/dd/yyyy` | `10/19/2026` |
| `HH:MM` | `14:30` |
| `HH:MM:ss` | `14:30:45` |

**Form Designer Appearance**
Placed DateTime pickers have a distinct visual appearance in Form Designer mode, including:
- Colored background
- Visible border
- Field-type indicator
![DateTime Picker Appearance](../../../javascript-es5/images/ui-date-time-appearance.png)

**Add Programmatically (API)**
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfviewer.documentLoad = function () {
                pdfviewer.formDesignerModule.addFormField('Textbox', {
                    name: 'DateField1',
                    bounds: { X: 146, Y: 200, Width: 200, Height: 24 },
                    pageNumber: 1,
                    isDateField: true,
                    fontSize: 10,
                    color: 'black',
                    fontFamily: 'Helvetica',
                    backgroundColor: '#daeaf7ff',
                    borderColor: '#303030',
                    alignment: 'Left',
                    isReadOnly: false,
                    visibility: 'visible',
                    isRequired: false,
                    isPrint: true,
                    tooltip: '',
                    thickness: 1,
                    actions: {
                        format: { script: 'AFDate_FormatEx("m/d/yy")' }
                    }
                });
                pdfviewer.formDesignerModule.addFormField('Textbox', {
                    name: 'TimeField1',
                    bounds: { X: 146, Y: 250, Width: 200, Height: 24 },
                    pageNumber: 1,
                    isDateField: true,
                    fontSize: 10,
                    color: 'black',
                    fontFamily: 'Helvetica',
                    backgroundColor: '#daeaf7ff',
                    borderColor: '#303030',
                    alignment: 'Left',
                    isReadOnly: false,
                    visibility: 'visible',
                    isRequired: false,
                    isPrint: true,
                    tooltip: '',
                    thickness: 1,
                    actions: {
                        format: { script: 'AFTime_FormatEx("HH:MM")' }
                    }
                });
            };
        });
    </script>

{% endhighlight %}
{% endtabs %}

### Button

A button field is an interactive form field displayed on a PDF page that allows users to perform various actions, such as navigating to a specific page or location within the document. Users can configure actions to be triggered through mouse and keyboard interactions. Button fields can be added and edited using both the Form Designer UI and programmatically.

#### Button Text and Value

The text displayed on the button is defined using the **text** property, while the data value associated with the button field is defined using the **value** property. If the **text** property is not specified, the **value** property is used as the displayed button text.

![Button field in Form Designer](../../../asp-net-mvc/images/ui-button.png)

#### Button Actions

An action can be associated with a button field, and the action is executed when the corresponding event occurs. The action is configured for the required event in the **Actions** tab of the Button Properties dialog.

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

**Add via Toolbar (UI)**
- Open **Form Designer** → select **Button** → click on the page → configure in **Properties**.
- Select the placed field to review or change its general properties, such as its name, value, tooltip, visibility, and whether it is read-only or required.

**Add Programmatically (API)**
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
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
    </script>
{% endhighlight %}
{% endtabs %}

**Place a button field interactively**
Use [`setFormFieldMode()`](https://ej2.syncfusion.com/documentation/api/pdfviewer/formdesigner#setformfieldmode) to switch the form designer into the button placement mode, and then click on the PDF page to place the button field. The existing button fields can be removed using [`deleteFormField()`](https://ej2.syncfusion.com/documentation/api/pdfviewer/formdesigner#deleteformfield).

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div class="toolbar-actions">
        <button onclick="addButtonField()">Add Button Field</button>
        <button onclick="enableButtonMode()">Enable Button Designer Mode</button>
        <select id="buttonFields">
            <option value="">No Button Field</option>
        </select>
        <button onclick="editButtonField()">Edit Button Field</button>
        <button onclick="deleteSelectedField()">Delete Button Field</button>
    </div>

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").DocumentLoad("refreshButtonFields").FormFieldAdd("refreshButtonFields").FormFieldRemove("refreshButtonFields").Render()
    </div>

    <script>
        // Refresh the button fields available in the document
        function refreshButtonFields() {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            var dropdown = document.getElementById('buttonFields');

            dropdown.innerHTML = '';

            var fields = Array.isArray(pdfviewer.formFieldCollections)
                ? pdfviewer.formFieldCollections
                : [];

            var buttonFields = fields.filter(function (field) {
                return field.type === 'ButtonField';
            });

            if (buttonFields.length === 0) {
                var emptyOption = document.createElement('option');
                emptyOption.text = 'No Button Field';
                emptyOption.value = '';
                dropdown.appendChild(emptyOption);
                return;
            }

            buttonFields.forEach(function (field) {
                var option = document.createElement('option');
                option.value = field.id;
                option.text = field.name || field.value || field.id;
                dropdown.appendChild(option);
            });
        }

        // Add a button field programmatically
        function addButtonField() {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];

            pdfviewer.formDesignerModule.addFormField('ButtonField', {
                name: 'Submit' + (document.getElementById('buttonFields').options.length + 1),
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

            refreshButtonFields();
        }

        // Switch the form designer into the button placement mode
        function enableButtonMode() {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];

            pdfviewer.formDesignerModule.setFormFieldMode('ButtonField');
        }

        // Update the properties and actions of the selected button field
        function editButtonField() {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            var selectedId = document.getElementById('buttonFields').value;

            var fields = Array.isArray(pdfviewer.formFieldCollections)
                ? pdfviewer.formFieldCollections
                : [];

            var field = fields.find(function (f) { return f.id === selectedId; });

            if (field) {
                pdfviewer.formDesignerModule.updateFormField(field, {
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

            refreshButtonFields();
        }

        // Delete the selected button field
        function deleteSelectedField() {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            var selectedId = document.getElementById('buttonFields').value;

            var fields = Array.isArray(pdfviewer.formFieldCollections)
                ? pdfviewer.formFieldCollections
                : [];

            var field = fields.find(function (f) { return f.id === selectedId; });

            if (field) {
                pdfviewer.formDesignerModule.deleteFormField(field);
            }

            refreshButtonFields();
        }
    </script>

{% endhighlight %}
{% endtabs %}

[View Sample on GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/Forms/Button%20field)

### Barcode

A barcode field is a form field that displays the entered value as a barcode that can be scanned. Barcode fields can be added and edited both through the Form Designer UI and programmatically.

#### Barcode Symbology

The barcode type is referred to as the **symbology**. The following symbologies are supported, and **PDF417** is used by default.

| Symbology | Description |
|---|---|
| `PDF417` | A stacked, linear barcode that supports alphanumeric data. This is the default symbology. |
| `QRCode` | A two-dimensional matrix barcode that supports numeric, alphanumeric, and binary data. |
| `DataMatrix` | A two-dimensional matrix barcode that is used to encode a small amount of data in a compact area. |

![Barcode field Symbology in Form Designer](../../../asp-net-mvc/images/barcode-ui-types.png)

#### Barcode Value Format

The value that is encoded in the barcode can be supplied in three ways.

| Value format | Description |
|---|---|
| `TabDelimited` | Carries the values in the barcode separated by a tab character, so the values appear at a tab space distance from each other. |
| `XML` | Stores the values pairwise in an XML structure. |
| `CustomValue` | Stores the value as a string, and any string can be assigned to it. |

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

![Barcode field with caption in Form Designer](../../../asp-net-mvc/images/ui-barcode.png)

#### Barcode Error Correction Level

The error correction level determines how much damage the generated barcode can tolerate before it can no longer be read. The available levels depend on the selected symbology.

| Symbology | Supported values |
|---|---|
| `PDF417` | `Level0` to `Level8` |
| `QRCode` | `Low`, `Medium`, `Quartile`, `High` |
| `DataMatrix` | Not applicable, since Data Matrix does not use this setting. |

The default error correction level is `Level5`.

![Barcode error correction level settings in Form Designer](../../../asp-net-mvc/images/ui-barcode-error-correction.png)

**Add via UI**: Open the Form Designer toolbar, select **Barcode**, and click on a PDF page to place the field. Select the placed field to review or change its general properties, such as its name, value, visibility, and whether it is read-only or required.

**Add Programmatically (API)**
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").DocumentLoad("documentLoad").Render()
</div>

<script type="text/javascript">
    function documentLoad() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfviewer.formDesignerModule.addFormField('Barcode', {
            name: 'ProductBarcode',
            bounds: { X: 146, Y: 300, Width: 180, Height: 100 },
            pageNumber: 1,
            value: 'SYNCFUSION-001',
            caption: 'Product Barcode',
            symbology: 'PDF417',
            valueFormat: 'TabDelimited',
            errorCorrectionLevel: 'Level5',
            isRequired: false,
            isPrint: true,
            visibility: 'visible',
            tooltip: 'Scan to view the product details'
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

**Add a barcode field with a specific symbology and update an existing barcode field**
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <script>
        function addBarcodeField(symbology) {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            // Add a barcode field with the given symbology
            pdfviewer.formDesignerModule.addFormField('Barcode', {
                name: 'Barcode1',
                bounds: { X: 100, Y: 150, Width: 200, Height: 80 },
                pageNumber: 1,
                symbology: symbology
            });
        }

        function updateSymbology(symbology) {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            var fields = Array.isArray(pdfviewer.formFieldCollections)
                ? pdfviewer.formFieldCollections
                : [];
            var barcode = fields.filter(function (field) {
                return field.type === 'Barcode';
            })[0];

            if (barcode) {
                // Update the symbology of the barcode field
                pdfviewer.formDesignerModule.updateFormField(barcode, {
                    symbology: symbology
                });
            }
        }
    </script>

{% endhighlight %}
{% endtabs %}

## Add Fields Dynamically with setFormFieldMode

Use **setFormFieldMode()** to add fields on the fly based on user actions.

### Edit Form Fields in MVC PDF Viewer
You can edit form fields using the UI or API.

#### Edit Using the UI
- Right click a field → **Properties** to update settings. (Image here)
- Drag to move; use handles to resize.
- Use the toolbar to toggle field mode or add new fields.

#### Edit Programmatically

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:200px">
        <button id='editTextbox'>EditTextBox</button>
        <button id='addPasswordField'>Add Form Field</button>
    </div>

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];

            // Edit FormField on Button Click
            document.getElementById('editTextbox').addEventListener('click', function () {
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

            // Add Form Fields using setFormFieldMode
            document.getElementById('addPasswordField').addEventListener('click', function () {
                pdfviewer.formDesignerModule.setFormFieldMode("Password");
            });
        });
    </script>

{% endhighlight %}
{% endtabs %}

[View Sample on GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/Forms/DateAndTimePicker)

## See Also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Modify form fields](./modify-form-fields)
- [Customize form fields](./customize-form-fields)
- [Remove form fields](./remove-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Form Fields API](../form-fields-api)