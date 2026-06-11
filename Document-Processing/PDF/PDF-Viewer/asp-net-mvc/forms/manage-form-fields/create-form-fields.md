---
layout: post
title: Create form fields in MVC PDF Viewer | Syncfusion
description: Learn how to add each PDF form field using the PDF Viewer UI and how to create them programmatically in the Syncfusion MVC PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Create PDF Form Fields in MVC PDF Viewer

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

[View Sample on GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples)

## See Also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Modify form fields](./modify-form-fields)
- [Style form fields](./style-form-fields)
- [Remove form fields](./remove-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Form Fields API](../form-fields-api)