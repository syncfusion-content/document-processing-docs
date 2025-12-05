---
title: Working with Forms | Syncfusion
description: This section explains how to create, fill, modify, read only and flatten form fields in the  PDF document
platform: document-processing
control: PDF
documentation: UG
---
# Working with PDF Forms

An interactive form, sometimes referred to as an AcroForm is a collection of fields for gathering information. A PDF document can contain any number of fields appearing on any combination of pages, all of that make a single, globally interactive form spanning the entire document.

## Creating a new PDF form

Essential<sup>&reg;</sup> PDF allows you to create and manage the form in PDF document by using `PdfForm` class. The `PdfForm` class represents the entire field collection of the form.

### Adding the text box field 

This example demonstrates how to add a text box field to a PDF document using the `PdfTextBoxField` class. A text box field allows users to enter text data in interactive PDF forms.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfForm, PdfTextBoxField, PdfStandardFont} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
//Add the PDF page.
let page: PdfPage = document.addPage();
// Access the PDF form from the document
let form: PdfForm = document.form;
// Create a new text box field
let field: PdfTextBoxField = new PdfTextBoxField(page, 'FirstName', {x: 10, y: 10, width: 100, height: 50});
// Set the default text value for the text box
field.text = 'John';
// Apply a standard font (Helvetica) with size 10 to the text box
field.font = new PdfStandardFont(PdfFontFamily.helvetica, 10);
// Set the background color of the text box to red
field.backColor = { r: 255, g: 0, b: 0 };
// Set the border color of the text box to blue
field.borderColor = { r: 0, g: 0, b: 255 };
// Add a tooltip to the text box for user guidance
field.toolTip = 'FirstName';
// Set the text color inside the text box to green
field.color = { r: 0, g: 255, b: 0 };
// Add the configured text box field to the PDF form
form.add(field);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a popup annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfForm, PdfTextBoxField, PdfStandardFont} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data, password);
// Access the first page
let page: PdfPage = document.getPage(0);
// Access the PDF form from the document
let form: PdfForm = document.form;
// Create a new text box field
let field: PdfTextBoxField = new PdfTextBoxField(page, 'FirstName', {x: 10, y: 10, width: 100, height: 50});
// Set the default text value for the text box
field.text = 'John';
// Apply a standard font (Helvetica) with size 10 to the text box
field.font = new PdfStandardFont(PdfFontFamily.helvetica, 10);
// Set the background color of the text box to red
field.backColor = { r: 255, g: 0, b: 0 };
// Set the border color of the text box to blue
field.borderColor = { r: 0, g: 0, b: 255 };
// Add a tooltip to the text box for user guidance
field.toolTip = 'FirstName';
// Set the text color inside the text box to green
field.color = { r: 0, g: 255, b: 0 };
// Add the configured text box field to the PDF form
form.add(field);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Adding the combo box field

This example demonstrates how to add a combo box field to a PDF document using the `PdfComboBoxField` class. A combo box field provides a drop-down list for users to select predefined options.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfForm, PdfComboBoxField} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Access the PDF form
let form: PdfForm = document.form;
// Create a new combo box field
let field: PdfComboBoxField = new PdfComboBoxField(page, 'list1', { x: 100, y: 60, width: 100, height: 50 });
// Add list items to the field
field.addItem(new PdfListFieldItem('English', 'English'));
field.addItem(new PdfListFieldItem('French', 'French'));
field.addItem(new PdfListFieldItem('German', 'German'));
// Set the selected index
field.selectedIndex = 2;
// Set the flag indicating whether the combo box allows multiple selections
field.multiSelect = true;
// Add the field into PDF form
form.add(field);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a popup annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfForm, PdfComboBoxField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data, password);
// Access the first page
let page: PdfPage = document.getPage(0);
// Access the PDF form
let form: PdfForm = document.form;
// Create a new combo box field
let field: PdfComboBoxField = new PdfComboBoxField(page, 'list1', { x: 100, y: 60, width: 100, height: 50 });
// Add list items to the field
field.addItem(new PdfListFieldItem('English', 'English'));
field.addItem(new PdfListFieldItem('French', 'French'));
field.addItem(new PdfListFieldItem('German', 'German'));
// Set the selected index
field.selectedIndex = 2;
// Set the flag indicating whether the combo box allows multiple selections
field.multiSelect = true;
// Add the field into PDF form
form.add(field);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Adding the radio button field

This example demonstrates how to add a radio button field to a PDF document using the `PdfRadioButtonListField` class. Radio buttons allow users to select one option from a group of choices.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfForm, PdfRadioButtonListField} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage(); 
// Access the PDF form
let form: PdfForm = document.form;
// Create a new radio button list field
let field: PdfRadioButtonListField = new PdfRadioButtonListField(page, 'Age');
// Create and add first item
let first: PdfRadioButtonListItem = field.add('1-9', { x: 100, y: 140, width: 20, height: 20 });
// Create and add second item
let second: PdfRadioButtonListItem = field.add('10-49', { x: 100, y: 170, width: 20, height: 20 }, page);
// Set selected index of the radio button list field
field.selectedIndex = 0;
// Add the field into PDF form
form.add(field);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a popup annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfForm, PdfRadioButtonListField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data, password);
// Access the first page
let page: PdfPage = document.getPage(0);
// Access the PDF form
let form: PdfForm = document.form;
// Create a new radio button list field
let field: PdfRadioButtonListField = new PdfRadioButtonListField(page, 'Age');
// Create and add first item
let first: PdfRadioButtonListItem = field.add('1-9', { x: 100, y: 140, width: 20, height: 20 });
// Create and add second item
let second: PdfRadioButtonListItem = field.add('10-49', { x: 100, y: 170, width: 20, height: 20 }, page);
// Set selected index of the radio button list field
field.selectedIndex = 0;
// Add the field into PDF form
form.add(field);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Adding the list box field

This example demonstrates how to add a list box field to a PDF document using the `PdfListBoxField` class. A list box field displays multiple options, allowing users to select one or more items.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfForm, PdfListBoxField} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Access the PDF form
let form: PdfForm = document.form;
// Create a new list box field
let field: PdfListBoxField = new PdfListBoxField(page, 'list1', { x: 100, y: 60, width: 100, height: 50 });
// Add list items to the field
field.addItem(new PdfListFieldItem('English', 'English'));
field.addItem(new PdfListFieldItem('French', 'French'));
// Set the selected index
field.selectedIndex = 1;
// Set the flag indicating whether the list box allows multiple selections
field.multiSelect = true;
// Add the field into PDF form
form.add(field);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a popup annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfForm, PdfListBoxField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data, password);
// Access the first page
let page: PdfPage = document.getPage(0);
// Access the PDF form
let form: PdfForm = document.form;
// Create a new list box field
let field: PdfListBoxField = new PdfListBoxField(page, 'list1', { x: 100, y: 60, width: 100, height: 50 });
// Add list items to the field
field.addItem(new PdfListFieldItem('English', 'English'));
field.addItem(new PdfListFieldItem('French', 'French'));
// Set the selected index
field.selectedIndex = 1;
// Set the flag indicating whether the list box allows multiple selections
field.multiSelect = true;
// Add the field into PDF form
form.add(field);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Adding the check Box field

This example demonstrates how to add a check box field to a PDF document using the `PdfCheckBoxField` class. Check boxes allow users to select or deselect options in a form.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfForm, PdfCheckBoxField} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Access the PDF form
let form: PdfForm = document.form;
// Create a new check box field
let field: PdfCheckBoxField = new PdfCheckBoxField('CheckBox1', { x: 100, y: 40, width: 20, height: 20 }, page);
// Set the checked flag as true
field.checked = true;
// Set the tooltip value
field.toolTip = 'Checked';
// Add the field into PDF form
form.add(field);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a popup annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfForm, PdfCheckBoxField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data, password);
// Access the first page
let page: PdfPage = document.getPage(0);
// Access the PDF form
let form: PdfForm = document.form;
// Create a new check box field
let field: PdfCheckBoxField = new PdfCheckBoxField('CheckBox1', { x: 100, y: 40, width: 20, height: 20 }, page);
// Set the checked flag as true
field.checked = true;
// Set the tooltip value
field.toolTip = 'Checked';
// Add the field into PDF form
form.add(field);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Adding the signature field

This example demonstrates how to add a signature field to a PDF document using the `PdfSignatureField` class. A signature field enables users to digitally sign the PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfForm, PdfSignatureField} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Access the PDF form
let form: PdfForm = document.form;
// Create a new signature field
let field: PdfSignatureField = new PdfSignatureField(page, 'Signature', {x: 10, y: 10, width: 100, height: 50});
// Add the field into PDF form
form.add(field);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a popup annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfForm, PdfSignatureField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data, password);
// Access the first page
let page: PdfPage = document.getPage(0);
// Access the PDF form
let form: PdfForm = document.form;
// Create a new signature field
let field: PdfSignatureField = new PdfSignatureField(page, 'Signature', {x: 10, y: 10, width: 100, height: 50});
// Add the field into PDF form
form.add(field);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Adding the button field 

This example demonstrates how to add a button field to a PDF document using the `PdfButtonField` class. Buttons can be configured to perform actions such as submitting a form or triggering JavaScript.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfForm, PdfButtonField} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Access the PDF form
let form: PdfForm = document.form;
// Create a new button field
let field: PdfButtonField = new PdfButtonField(page , 'Button1', {x: 100, y: 40, width: 100, height: 20});
// Add the field into PDF form
form.add(field);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a popup annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfForm, PdfButtonField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data, password);
// Access the first page
let page: PdfPage = document.getPage(0);
// Access the PDF form
let form: PdfForm = document.form;
// Create a new button field
let field: PdfButtonField = new PdfButtonField(page , 'Button1', {x: 100, y: 40, width: 100, height: 20});
// Add the field into PDF form
form.add(field);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Filling form fields in an existing PDF Document

Essential<sup>&reg;</sup> PDF allows you to fill the form fields using PdfField class. 

### Filling the text box field

This example demonstrates how to fill a text box field in a PDF document using the `text` property of the `PdfTextBoxField` class. The following code snippet illustrates how to set the text value for the field.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfTextBoxField} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Access text box field
    let field: PdfTextBoxField = document.form.fieldAt(0) as PdfTextBoxField;
    // Sets the text value to text box field
    field.text = 'Syncfusion';
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

### Filling the combo box field

This example demonstrates how to fill a combo box field in a PDF document using the `selectedIndex` property of the `PdfComboBoxField` class. The following code snippet shows how to change the selected index in a combo box.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfComboBoxField} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Access combobox field
    let field: PdfComboBoxField = document.form.fieldAt(0) as PdfComboBoxField;
    // Sets the selected index
    field.selectedIndex = 2;
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

### Filling the radio button field

This example demonstrates how to fill a radio button field in a PDF document using the `selectedIndex` property of the `PdfRadioButtonListField` class. The following code snippet illustrates how to change the selected index in a radio button.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfRadioButtonListField} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Access radio button list field
    let field: PdfRadioButtonListField = document.form.fieldAt(0) as PdfRadioButtonListField;
    // Sets the selected index
    field.selectedIndex = 2;
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

### Filling the list box field

This example demonstrates how to fill a list box field in a PDF document using the `selectedIndex` property of the `PdfLoadedListBoxField` class. The following code snippet shows how to change the selected index in a list box.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfListBoxField} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Access listbox field
    let field: PdfListBoxField = document.form.fieldAt(2) as PdfListBoxField;
    // Sets the selected index
    field.selectedIndex = 2;
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

### Filling the check Box field

This example demonstrates how to fill a check box field in a PDF document using the `Checked` property of the `PdfCheckBoxField` class. The following code snippet illustrates how to mark a checkbox as selected.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfCheckBoxField} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Access checkbox field
    let field: PdfCheckBoxField = document.form.fieldAt(2) as PdfCheckBoxField;
    // Sets the tooltip value
    field.toolTip = 'Checked';
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}


### Filling the signature field

This example demonstrates how to fill a signature field in a PDF document using the `PdfSignatureField` class. The following code snippet illustrates how to create a signature using PFX data and assign it to the signature field.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfForm, PdfSignatureField} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Gets the first page of the document
    let page: PdfPage = document.getPage(0);
    // Access the PDF form
    let form: PdfForm = document.form;
    // Create a new signature field
    let field: PdfSignatureField = new PdfSignatureField(page, 'Signature', { x: 10, y: 10, width: 100, height: 50 });
    // Define a callback function used for external signing
    const externalSignatureCallback = (data: Uint8Array,
                                        options: {
                                         algorithm: DigestAlgorithm,
                                         cryptographicStandard: CryptographicStandard,
                                         }): {signedData: Uint8Array, timestampData?: Uint8Array}  => {
        // Implement external signing logic here
        return new Uint8Array(); // Placeholder return
    };
    // Create a new signature using external signing
    const signature: PdfSignature = PdfSignature.create(externalSignatureCallback, {
         cryptographicStandard: CryptographicStandard.cms,
         algorithm: DigestAlgorithm.sha256
    });
    // Sets the signature to the field
    field.setSignature(signature);
    // Add the field into PDF form
    form.add(field);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
    
{% endhighlight %}
{% endtabs %}

## Retrieving/Modifying the form fields

### Modifying the existing form field in PDF document

This example demonstrates how to modify an existing form field in a PDF document using the `PdfTextBoxField` class. The following code snippet illustrates how to update the text value, alignment, and default value of a text box field.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfTextBoxField} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Access text box field
    let field: PdfTextBoxField = document.form.fieldAt(0) as PdfTextBoxField;
    // Sets the text value to text box field
    field.text = 'Syncfusion';
    // Sets the text alignment of form field as center
    field.textAlignment = PdfTextAlignment.center;
    // Sets the default value of the text box field
    field.defaultValue = 'Syncfusion';
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

## Removing the form fields from existing PDF document

This example demonstrates how to remove items from an existing form field in a PDF document using the `removeItemAt()` method of the `PdfField` class. The following code snippet illustrates how to access a form field and remove its first item.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfField} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the form field at index 0
    let field: PdfField = document.form.fieldAt(0);
    // Remove the first item of the form field
    field.removeItemAt(0);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

## Flattening form fields in a PDF

This example demonstrates how to flatten form fields in a PDF document to make their values permanent and non-editable. Flattening removes the interactive elements while preserving the visual appearance of the filled data.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfField} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Get the first field
    let field: PdfField = document.form.fieldAt(0);
    // Sets the boolean flag indicating whether the form field have been flattened or not.
    field.flatten = true;
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

## Marking form fields as Read-Only

This example demonstrates how to mark form fields as read-only by accessing them from the PdfFormFieldCollection and setting their ReadOnly property to true. 

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfField} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the form field at index 0
    let field: PdfField = document.form.fieldAt(0);
    // Sets a value indicating whether read only.
    field.readOnly = true;
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

## Importing form fields

### Importing FDF file to PDF

This example demonstrates how to import form data from an FDF file into a PDF document using the `importFormData` method. Importing FDF data allows you to populate form fields in a PDF with values from an external data source.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Imports form data from to the PDF document.
    document.importFormData('formData.fdf', DataFormat.fdf);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

### Importing XFDF file to PDF

This example demonstrates how to import form data from an XFDF file into a PDF document using the `importFormData` method. Importing XFDF data allows you to populate form fields in a PDF with values from an external data source.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Imports form data from to the PDF document.
    document.importFormData('formData.xfdf', DataFormat.xfdf);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

## Exporting form fields

### Export PDF file to FDF

This example demonstrates how to export form data from a PDF document to an FDF file using the `exportFormData` method. Exporting FDF data allows you to save the values of form fields in a lightweight format for reuse or integration with other systems.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, Uint8Array, PdfFormFieldExportSettings } from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Sets the form field data export settings with output data format.
    let settings: PdfFormFieldExportSettings = new PdfFormFieldExportSettings();
    settings.dataFormat = DataFormat.fdf;
    // Export form field to fdf format
    let fdf: Uint8Array = document.exportFormData(settings);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

### Export PDF file to XFDF

This example demonstrates how to export form data from a PDF document to an XFDF file using the `exportFormData` method. Exporting XFDF data allows you to save the values of form fields in a lightweight format for reuse or integration with other systems.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, Uint8Array, PdfFormFieldExportSettings } from '@syncfusion/ej2-pdf';
    
    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Sets the form field data export settings with output data format.
    let settings: PdfFormFieldExportSettings = new PdfFormFieldExportSettings();
    settings.dataFormat = DataFormat.xfdf;
    // Export form field to XFDF format
    let xfdf: Uint8Array = document.exportFormData(settings);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}