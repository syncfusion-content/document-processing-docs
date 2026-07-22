---
title: Form Fields in JavaScript PDF Library | Syncfusion
description: Learn how to create, fill, modify, order, auto-name, flatten, import, and export form fields in a PDF document using the Syncfusion JavaScript PDF Library.
platform: document-processing
control: PDF
documentation: UG
---

# Form Fields in JavaScript PDF Library

An interactive form, sometimes referred to as an AcroForm, is a collection of fields for gathering information. A PDF document can contain any number of fields appearing on any combination of pages, all of which make a single, globally interactive form spanning the entire document.

The [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) supports the following form-field types:

- Text box (`PdfTextBoxField`)
- Combo box (`PdfComboBoxField`)
- List box (`PdfListBoxField`)
- Radio button (`PdfRadioButtonListField`)
- Check box (`PdfCheckBoxField`)
- Signature (`PdfSignatureField`)
- Button (`PdfButtonField`)

## Creating a new PDF form

[JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) allows you to create and manage a form in a PDF document by using the [PdfForm](https://ej2.syncfusion.com/documentation/api/pdf/pdfform) class. The [PdfForm](https://ej2.syncfusion.com/documentation/api/pdf/pdfform) class represents the entire field collection of the form.

### Adding the text box field

The following example adds a text box field to a PDF document using the [PdfTextBoxField](https://ej2.syncfusion.com/documentation/api/pdf/pdftextboxfield) class. A text box field allows users to enter text data in interactive PDF forms.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfField, PdfPage, PdfTextBoxField, PdfInteractiveBorder, PdfBorderStyle, PdfFontFamily, PdfFontStyle} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create a new textbox field
let field: PdfField = new PdfTextBoxField(
  page,
  'FirstName',
  { x: 50, y: 600, width: 200, height: 22 },
  {
    toolTip: 'Enter your first name',
    color: { r: 0, g: 0, b: 0 },
    backColor: { r: 255, g: 255, b: 255 },
    borderColor: { r: 0, g: 122, b: 204 },
    border: new PdfInteractiveBorder({ width: 1, style: PdfBorderStyle.solid }),
    text: 'John',
    font: document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular)
  }
);
// Add the textbox field
document.form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create a new textbox field
var field = new ej.pdf.PdfTextBoxField(
  page,
  'FirstName',
  { x: 50, y: 600, width: 200, height: 22 },
  {
    toolTip: 'Enter your first name',
    color: { r: 0, g: 0, b: 0 },
    backColor: { r: 255, g: 255, b: 255 },
    borderColor: { r: 0, g: 122, b: 204 },
    border: new ej.pdf.PdfInteractiveBorder({ width: 1, style: ej.pdf.PdfBorderStyle.solid }),
    text: 'John',
    font: document.embedFont(ej.pdf.PdfFontFamily.helvetica, 10, ej.pdf.PdfFontStyle.regular)
  }
);
// Add the textbox field
document.form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### Adding the combo box field

The following example adds a combo box field using the [PdfComboBoxField](https://ej2.syncfusion.com/documentation/api/pdf/pdfcomboboxfield) class. A combo box field provides a drop-down list for users to select predefined options.

`PdfComboBoxField.selectedIndex` is a single `number`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfField, PdfComboBoxField, PdfInteractiveBorder, PdfBorderStyle, PdfFontFamily, PdfFontStyle} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create a new combobox field
let field: PdfField = new PdfComboBoxField(
  page,
  'Country',
  { x: 50, y: 400, width: 180, height: 22 },
  {
    items: [
      { text: 'United States', value: 'US' },
      { text: 'Canada', value: 'CA' },
      { text: 'Germany', value: 'DE' }
    ],
    toolTip: 'Choose a country',
    color: { r: 0, g: 0, b: 0 },
    backColor: { r: 255, g: 255, b: 255 },
    borderColor: { r: 0, g: 0, b: 0 },
    border: new PdfInteractiveBorder({ width: 1, style: PdfBorderStyle.solid }),
    selectedIndex: 0,
    font: document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular)
  }
);
// Add the combobox field
document.form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create a new combobox field
var field = new ej.pdf.PdfComboBoxField(
  page,
  'Country',
  { x: 50, y: 400, width: 180, height: 22 },
  {
    items: [
      { text: 'United States', value: 'US' },
      { text: 'Canada', value: 'CA' },
      { text: 'Germany', value: 'DE' }
    ],
    toolTip: 'Choose a country',
    color: { r: 0, g: 0, b: 0 },
    backColor: { r: 255, g: 255, b: 255 },
    borderColor: { r: 0, g: 0, b: 0 },
    border: new ej.pdf.PdfInteractiveBorder({ width: 1, style: ej.pdf.PdfBorderStyle.solid }),
    selectedIndex: 0,
    font: document.embedFont(ej.pdf.PdfFontFamily.helvetica, 10, ej.pdf.PdfFontStyle.regular)
  }
);
// Add the combobox field
document.form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### Adding the radio button field

The following example adds a radio button field using the [PdfRadioButtonListField](https://ej2.syncfusion.com/documentation/api/pdf/pdfradiobuttonlistfield) class. Radio buttons allow users to select one option from a group of choices.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfField, PdfRadioButtonListField} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create a new radio button field
let field: PdfField = new PdfRadioButtonListField(
  page,
  'AgeGroup',
  {
    items: [
      { name: '18-25', bounds: { x: 50, y: 480, width: 14, height: 14 } },
      { name: '26-35', bounds: { x: 50, y: 460, width: 14, height: 14 } },
      { name: '36-45', bounds: { x: 50, y: 440, width: 14, height: 14 } }
    ],
    toolTip: 'Select an age range',
    selectedIndex: 1,
    allowUnisonSelection: false
  }
);
// Add the radio button field
document.form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create a new radio button field
var field = new ej.pdf.PdfRadioButtonListField(
  page,
  'AgeGroup',
  {
    items: [
      { name: '18-25', bounds: { x: 50, y: 480, width: 14, height: 14 } },
      { name: '26-35', bounds: { x: 50, y: 460, width: 14, height: 14 } },
      { name: '36-45', bounds: { x: 50, y: 440, width: 14, height: 14 } }
    ],
    toolTip: 'Select an age range',
    selectedIndex: 1,
    allowUnisonSelection: false
  }
);
// Add the radio button field
document.form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Adding the list box field

The following example adds a list box field using the [PdfListBoxField](https://ej2.syncfusion.com/documentation/api/pdf/pdflistboxfield) class. A list box field displays multiple options, allowing users to select one or more items.

`PdfListBoxField.selectedIndex` is a `number[]` (an array of indices) to support multi-select.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfField, PdfListBoxField, PdfInteractiveBorder, PdfBorderStyle, PdfFontFamily, PdfFontStyle} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create a new listbox field
let field: PdfField = new PdfListBoxField(
  page,
  'Languages',
  { x: 50, y: 340, width: 180, height: 60 },
  {
    items: [
      { text: 'English', value: 'en' },
      { text: 'French', value: 'fr' },
      { text: 'German', value: 'de' }
    ],
    toolTip: 'Select language(s)',
    color: { r: 0, g: 0, b: 0 },
    backColor: { r: 255, g: 255, b: 255 },
    borderColor: { r: 0, g: 0, b: 0 },
    border: new PdfInteractiveBorder({ width: 1, style: PdfBorderStyle.solid }),
    selectedIndex: [0, 2],
    multiSelect: true,
    font: document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular)
  }
);
// Add the listbox field
document.form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create a new listbox field
var field = new ej.pdf.PdfListBoxField(
  page,
  'Languages',
  { x: 50, y: 340, width: 180, height: 60 },
  {
    items: [
      { text: 'English', value: 'en' },
      { text: 'French', value: 'fr' },
      { text: 'German', value: 'de' }
    ],
    toolTip: 'Select language(s)',
    color: { r: 0, g: 0, b: 0 },
    backColor: { r: 255, g: 255, b: 255 },
    borderColor: { r: 0, g: 0, b: 0 },
    border: new ej.pdf.PdfInteractiveBorder({ width: 1, style: ej.pdf.PdfBorderStyle.solid }),
    selectedIndex: [0, 2],
    multiSelect: true,
    font: document.embedFont(ej.pdf.PdfFontFamily.helvetica, 10, ej.pdf.PdfFontStyle.regular)
  }
);
// Add the listbox field
document.form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Adding the check box field

The following example adds a check box field using the [PdfCheckBoxField](https://ej2.syncfusion.com/documentation/api/pdf/pdfcheckboxfield) class. Check boxes allow users to select or deselect options in a form.

> **Note:** The `PdfCheckBoxField` constructor uses the argument order `(name, bounds, page, options)`. All other field constructors use `(page, name, bounds, options)`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfField, PdfCheckBoxField, PdfInteractiveBorder, PdfBorderStyle} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create a new checkbox field
let field: PdfField = new PdfCheckBoxField(
  'AcceptTerms',
  { x: 50, y: 520, width: 14, height: 14 },
  page,
  {
    toolTip: 'Accept the terms and conditions',
    backColor: { r: 255, g: 255, b: 255 },
    borderColor: { r: 0, g: 0, b: 0 },
    border: new PdfInteractiveBorder({ width: 1, style: PdfBorderStyle.solid }),
    checked: true
  }
);
// Add the checkbox field
document.form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create a new checkbox field
var field = new ej.pdf.PdfCheckBoxField(
  'AcceptTerms',
  { x: 50, y: 520, width: 14, height: 14 },
  page,
  {
    toolTip: 'Accept the terms and conditions',
    backColor: { r: 255, g: 255, b: 255 },
    borderColor: { r: 0, g: 0, b: 0 },
    border: new ej.pdf.PdfInteractiveBorder({ width: 1, style: ej.pdf.PdfBorderStyle.solid }),
    checked: true
  }
);
// Add the checkbox field
document.form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Adding the signature field

The following example adds a signature field using the [PdfSignatureField](https://ej2.syncfusion.com/documentation/api/pdf/pdfsignaturefield) class. A signature field enables users to digitally sign the PDF document. To apply a real digital signature using PFX data, see [Signing PDF documents](#signing-pdf-documents).

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfField, PdfSignatureField, PdfInteractiveBorder, PdfBorderStyle} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create a new signature field
let field: PdfField = new PdfSignatureField(
  page,
  'ApprovalSignature',
  { x: 50, y: 260, width: 200, height: 40 },
  {
    toolTip: 'Sign here',
    color: { r: 0, g: 0, b: 0 },
    backColor: { r: 255, g: 255, b: 255 },
    borderColor: { r: 0, g: 0, b: 0 },
    border: new PdfInteractiveBorder({ width: 1, style: PdfBorderStyle.solid })
  }
);
// Add the signature field
document.form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create a new signature field
var field = new ej.pdf.PdfSignatureField(
  page,
  'ApprovalSignature',
  { x: 50, y: 260, width: 200, height: 40 },
  {
    toolTip: 'Sign here',
    color: { r: 0, g: 0, b: 0 },
    backColor: { r: 255, g: 255, b: 255 },
    borderColor: { r: 0, g: 0, b: 0 },
    border: new ej.pdf.PdfInteractiveBorder({ width: 1, style: ej.pdf.PdfBorderStyle.solid })
  }
);
// Add the signature field
document.form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Adding the button field

The following example adds a button field using the [PdfButtonField](https://ej2.syncfusion.com/documentation/api/pdf/pdfbuttonfield) class. Buttons can be configured with actions such as form submission or JavaScript execution.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfField, PdfButtonField, PdfHighlightMode, PdfBorderStyle, PdfInteractiveBorder} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create a new button field
let field: PdfField = new PdfButtonField(
  page,
  'Submit',
  { x: 50, y: 560, width: 120, height: 28 },
  {
    toolTip: 'Submit form',
    color: { r: 255, g: 255, b: 255 },
    backColor: { r: 0, g: 122, b: 204 },
    borderColor: { r: 0, g: 0, b: 0 },
    border: new PdfInteractiveBorder({ width: 1, style: PdfBorderStyle.solid }),
    text: 'Submit',
    highlightMode: PdfHighlightMode.push
  }
);
// Add the button field
document.form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create a new button field
var field = new ej.pdf.PdfButtonField(
  page,
  'Submit',
  { x: 50, y: 560, width: 120, height: 28 },
  {
    toolTip: 'Submit form',
    color: { r: 255, g: 255, b: 255 },
    backColor: { r: 0, g: 122, b: 204 },
    borderColor: { r: 0, g: 0, b: 0 },
    border: new ej.pdf.PdfInteractiveBorder({ width: 1, style: ej.pdf.PdfBorderStyle.solid }),
    text: 'Submit',
    highlightMode: ej.pdf.PdfHighlightMode.push
  }
);
// Add the button field
document.form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Adding the date field

The following example adds a date field to a PDF form, allowing users to enter or select a date within the document. Configure the date field's appearance, format, and behavior by attaching JavaScript actions to the `actions` object.

> **Note:** The `AFDate_*` functions are built-in Adobe Acrobat JavaScript APIs. They execute on the reader side (Adobe Reader/Acrobat) when the form is opened or filled. See the [Adobe Acrobat JavaScript API reference](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/) for the full list.

| Action key | Fires when | Typical use |
|---|---|---|
| `format` | The field is formatted for display | Apply a date format such as `yyyy-mm-dd` |
| `keyPressed` | The user presses a key | Validate the keystroke against the expected format |
| `validate` | The field value is committed | Verify the final value |
| `focus` | The field gains focus | Show helper UI |
| `blur` | The field loses focus | Hide helper UI |
| `calculate` | A referenced field changes | Recompute dependent fields |

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfTextBoxField, PdfJavaScriptAction} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create a new text box field for the date
let field: PdfTextBoxField = new PdfTextBoxField(
  page,
  'DateField',
  { x: 50, y: 200, width: 150, height: 20 }
);
// Set the text value
field.text = '18/08/2003';
// Set the date format
const format: string = 'yyyy-mm-dd';
// Attach JavaScript actions to the field
field.actions.format = new PdfJavaScriptAction(`AFDate_FormatEx("${format}");`);
field.actions.keyPressed = new PdfJavaScriptAction(`AFDate_KeystrokeEx("${format}");`);
field.actions.validate = new PdfJavaScriptAction(`AFDate_Validate("${format}");`);
// Add the field to the form
document.form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create a new text box field for the date
var field = new ej.pdf.PdfTextBoxField(page, 'DateField', {
  x: 50, y: 200, width: 150, height: 20
});
// Set the text value
field.text = '18/08/2003';
// Set the date format
var format = 'yyyy-mm-dd';
// Attach JavaScript actions to the field
field.actions.format = new ej.pdf.PdfJavaScriptAction(`AFDate_FormatEx("${format}");`);
field.actions.keyPressed = new ej.pdf.PdfJavaScriptAction(`AFDate_KeystrokeEx("${format}");`);
field.actions.validate = new ej.pdf.PdfJavaScriptAction(`AFDate_Validate("${format}");`);
// Add the field to the form
document.form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Filling form fields in an existing PDF document

The [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) lets you fill form fields using the `PdfField` API.

> **Tip:** Look up fields by name using `document.form.getField('FirstName')` rather than by index. Field order is implementation-defined and may change across API versions. The samples below use `fieldAt(index)` for illustration only.

### Filling the text box field

The following example fills a text box field by setting the [text](https://ej2.syncfusion.com/documentation/api/pdf/pdftextboxfield#get-text-string) property of the [PdfTextBoxField](https://ej2.syncfusion.com/documentation/api/pdf/pdftextboxfield) class.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfTextBoxField, PdfTextAlignment} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Access the text box field
let field: PdfTextBoxField = document.form.fieldAt(0) as PdfTextBoxField;
// Set the text value
field.text = 'Syncfusion';
// Set the text alignment
field.textAlignment = PdfTextAlignment.center;
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Access the text box field
var field = document.form.fieldAt(0);
// Set the text value
field.text = 'Syncfusion';
// Set the text alignment
field.textAlignment = ej.pdf.PdfTextAlignment.center;
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Filling the combo box field

The following example fills a combo box field by setting the [selectedIndex](https://ej2.syncfusion.com/documentation/api/pdf/pdfcomboboxfield#get-selectedindex-number---number) property of the [PdfComboBoxField](https://ej2.syncfusion.com/documentation/api/pdf/pdfcomboboxfield) class.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfComboBoxField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Access the combobox field
let field: PdfComboBoxField = document.form.fieldAt(0) as PdfComboBoxField;
// Set the selected index
field.selectedIndex = 2;
// Set the flag indicating whether the combo box allows multiple selections
field.multiSelect = true;
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Access the combobox field
var field = document.form.fieldAt(0);
// Set the selected index
field.selectedIndex = 2;
// Set the flag indicating whether the combo box allows multiple selections
field.multiSelect = true;
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Filling the radio button field

The following example fills a radio button field by setting the [selectedIndex](https://ej2.syncfusion.com/documentation/api/pdf/pdfcomboboxfield#get-selectedindex-number---number) property of the [PdfRadioButtonListField](https://ej2.syncfusion.com/documentation/api/pdf/pdfradiobuttonlistfield) class.

> **Note:** In TypeScript, `fieldAt` returns the base `PdfField` type, so cast to the specific field type before accessing specialized properties.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfRadioButtonListField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Access the radio button list field
let field: PdfRadioButtonListField = document.form.fieldAt(0) as PdfRadioButtonListField;
// Set the selected index
field.selectedIndex = 2;
// Set the tooltip
field.toolTip = 'Radio button';
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Access the radio button list field
var field = document.form.fieldAt(0);
// Set the selected index
field.selectedIndex = 2;
// Set the tooltip
field.toolTip = 'Radio button';
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Filling the list box field

The following example fills a list box field by setting the [selectedIndex](https://ej2.syncfusion.com/documentation/api/pdf/pdflistboxfield#get-selectedindex-number---number) property of the [PdfListBoxField](https://ej2.syncfusion.com/documentation/api/pdf/pdflistboxfield) class.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfListBoxField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Access the listbox field
let field: PdfListBoxField = document.form.fieldAt(2) as PdfListBoxField;
// Set the selected index
field.selectedIndex = 2;
// Set the tooltip
field.toolTip = 'ListBox Fields';
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Access the listbox field
var field = document.form.fieldAt(2);
// Set the selected index
field.selectedIndex = 2;
// Set the tooltip
field.toolTip = 'ListBox Fields';
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Filling the check box field

The following example fills a check box field by setting the [checked](https://ej2.syncfusion.com/documentation/api/pdf/pdfcheckboxfield#get-checked-boolean) property of the [PdfCheckBoxField](https://ej2.syncfusion.com/documentation/api/pdf/pdfcheckboxfield) class.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfCheckBoxField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Access the checkbox field
let field: PdfCheckBoxField = document.form.fieldAt(2) as PdfCheckBoxField;
// Mark the check box as selected
field.checked = true;
// Set the tooltip
field.toolTip = 'CheckBox Field';
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Access the checkbox field
var field = document.form.fieldAt(2);
// Mark the check box as selected
field.checked = true;
// Set the tooltip
field.toolTip = 'CheckBox Field';
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Filling the signature field (metadata)

The following example sets custom metadata on a signature field by using the [PdfSignatureField](https://ej2.syncfusion.com/documentation/api/pdf/pdfsignaturefield) class. To perform a real digital signature using a PFX certificate, see [Signing PDF documents](#signing-pdf-documents).

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfSignatureField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Access the signature field
let field: PdfSignatureField = document.form.fieldAt(2) as PdfSignatureField;
// Set a custom value
field.setValue('Author', 'John');
// Set the tooltip
field.toolTip = 'Signature Field';
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Access the signature field
var field = document.form.fieldAt(2);
// Set a custom value
field.setValue('Author', 'John');
// Set the tooltip
field.toolTip = 'Signature Field';
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Signing PDF documents

To apply a real digital signature using a PFX certificate, use the `PdfSignature` API together with a `PdfSignatureField`. The following example loads a PFX file, applies a digital signature to the document, and saves the result.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfSignatureField, PdfSignature} from '@syncfusion/ej2-pdf';
import * as fs from 'fs';

// Load the existing PDF
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Add (or access) a signature field
let field: PdfSignatureField = document.form.fieldAt(0) as PdfSignatureField;
// Load the PFX certificate
let pfxData: Uint8Array = fs.readFileSync('certificate.pfx');
let pfxPassword: string = 'password';
// Create a digital signature
let signature: PdfSignature = new PdfSignature(pfxData, pfxPassword);
signature.reason = 'Approval';
signature.location = 'Headquarters';
signature.contactInfo = 'support@example.com';
// Apply the signature to the field
field.sign(signature);
// Save the signed document
document.save('signed.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the existing PDF
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Add (or access) a signature field
var field = document.form.fieldAt(0);
// Load the PFX certificate (browser: use a file input / fetch)
var pfxData = /* Uint8Array of the PFX bytes */;
var pfxPassword = 'password';
// Create a digital signature
var signature = new ej.pdf.PdfSignature(pfxData, pfxPassword);
signature.reason = 'Approval';
signature.location = 'Headquarters';
signature.contactInfo = 'support@example.com';
// Apply the signature to the field
field.sign(signature);
// Save the signed document
document.save('signed.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Modifying form fields

The following example modifies an existing form field by using the [PdfTextBoxField](https://ej2.syncfusion.com/documentation/api/pdf/pdftextboxfield) class. It updates the text value, alignment, and default value of a text box field.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfTextBoxField, PdfTextAlignment} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Access the text box field
let field: PdfTextBoxField = document.form.fieldAt(0) as PdfTextBoxField;
// Set the text value
field.text = 'Syncfusion';
// Set the text alignment
field.textAlignment = PdfTextAlignment.center;
// Set the default value
field.defaultValue = 'Syncfusion';
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Access the text box field
var field = document.form.fieldAt(0);
// Set the text value
field.text = 'Syncfusion';
// Set the text alignment
field.textAlignment = ej.pdf.PdfTextAlignment.center;
// Set the default value
field.defaultValue = 'Syncfusion';
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Auto-naming form fields

By default, fields with the same name are grouped together in the PDF. To prevent grouping, enable the [fieldAutoNaming](https://ej2.syncfusion.com/documentation/api/pdf/pdfform#get-fieldautonaming-boolean) property of the [PdfForm](https://ej2.syncfusion.com/documentation/api/pdf/pdfform) class. When `fieldAutoNaming` is `true`, each field receives a unique internal name even when you specify the same name during creation.

**Without `fieldAutoNaming`** (default): two fields named `'Name'` are treated as a single group.
**With `fieldAutoNaming = true`**: each field keeps the display name `'Name'` but is stored with a unique internal name, so the two fields are independent.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfFontFamily, PdfFontStyle, PdfTextBoxField} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Access the form collection
let form = document.form;
// Enable auto-naming
form.fieldAutoNaming = true;
// Embed a font
let font = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
// Create the first text box field
let field1: PdfTextBoxField = new PdfTextBoxField(
  page,
  'Name',
  { x: 0, y: 0, width: 100, height: 50 },
  {
    text: 'John',
    font: font,
    backColor: { r: 255, g: 0, b: 0 },
    borderColor: { r: 0, g: 0, b: 255 },
    toolTip: 'FirstName',
    color: { r: 0, g: 255, b: 0 }
  }
);
// Add the first field
form.add(field1);
// Create a second text box field with the same display name
let field2: PdfTextBoxField = new PdfTextBoxField(
  page,
  'Name',
  { x: 0, y: 50, width: 100, height: 50 },
  {
    text: 'Doe',
    backColor: { r: 128, g: 0, b: 128 },
    borderColor: { r: 255, g: 165, b: 0 },
    toolTip: 'SecondName',
    color: { r: 0, g: 128, b: 0 }
  }
);
// Add the second field
form.add(field2);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Access the form collection
var form = document.form;
// Enable auto-naming
form.fieldAutoNaming = true;
// Embed a font
var font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 10, ej.pdf.PdfFontStyle.regular);
// Create the first text box field
var field1 = new ej.pdf.PdfTextBoxField(
  page,
  'Name',
  { x: 0, y: 0, width: 100, height: 50 },
  {
    text: 'John',
    font: font,
    backColor: { r: 255, g: 0, b: 0 },
    borderColor: { r: 0, g: 0, b: 255 },
    toolTip: 'FirstName',
    color: { r: 0, g: 255, b: 0 }
  }
);
// Add the first field
form.add(field1);
// Create a second text box field with the same display name
var field2 = new ej.pdf.PdfTextBoxField(
  page,
  'Name',
  { x: 0, y: 50, width: 100, height: 50 },
  {
    text: 'Doe',
    backColor: { r: 128, g: 0, b: 128 },
    borderColor: { r: 255, g: 165, b: 0 },
    toolTip: 'SecondName',
    color: { r: 0, g: 128, b: 0 }
  }
);
// Add the second field
form.add(field2);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Ordering form fields

Use the [PdfFormFieldsTabOrder](https://ej2.syncfusion.com/documentation/api/pdf/pdfformfieldstaborder) enum to control the tab order of form fields. Available values:

| Member | Description |
|---|---|
| `row` | Row-major tab order |
| `column` | Column-major tab order |
| `manual` | Manual tab order (uses the field sequence in the document) |
| `structure` | Tab order follows the document's structure tree |

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfFormFieldsTabOrder} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Apply row-major tab order
document.form.orderFormFields(PdfFormFieldsTabOrder.row);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Apply row-major tab order
document.form.orderFormFields(ej.pdf.PdfFormFieldsTabOrder.row);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Removing the form fields from an existing PDF document

The following example removes a form field from an existing PDF using the [removeField()](https://ej2.syncfusion.com/documentation/api/pdf/pdfform#removefield) method of the [PdfForm](https://ej2.syncfusion.com/documentation/api/pdf/pdfform) class.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the form field at index 0
let field: PdfField = document.form.fieldAt(0);
// Remove the form field
document.form.removeField(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the form field at index 0
var field = document.form.fieldAt(0);
// Remove the form field
document.form.removeField(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Flattening form fields in a PDF

Flattening a form field makes its value permanent and non-editable. The field's visual appearance is preserved while the interactive element is removed. Set the `flatten` property on any `PdfField` (text box, combo box, list box, radio button, check box, signature, or button).

> **Note:** The `flatten` flag must be set before `document.save()`. After save, the field is no longer interactive in the saved PDF.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Get the first field
let field: PdfField = document.form.fieldAt(0);
// Mark the field for flattening
field.flatten = true;
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Get the first field
var field = document.form.fieldAt(0);
// Mark the field for flattening
field.flatten = true;
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

To flatten all interactive elements (form fields and annotations) in a single call, set `document.flatten = true;` before saving. This is a document-level operation that applies throughout the document.

## Marking form fields as read-only

Mark a form field as read-only by accessing it from the form's field collection and setting its `readOnly` property to `true`. The flag must be set before `document.save()` to persist.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the form field at index 0
let field: PdfField = document.form.fieldAt(0);
// Mark the field as read-only
field.readOnly = true;
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the form field at index 0
var field = document.form.fieldAt(0);
// Mark the field as read-only
field.readOnly = true;
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Importing form fields data

The `importFormData` method imports form data into a PDF document. The `DataFormat` enum specifies the format of the data: `FDF`, `XFDF`, `JSON`, or `XML`.

Obtain `fdfData` as a `Uint8Array` from a local file, a fetch request, or `fs.readFileSync`. When importing, fields in the PDF that do not appear in the imported data are left unchanged (merge semantics).

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, DataFormat} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Import form data (FDF)
document.importFormData(fdfData, DataFormat.fdf);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Import form data (FDF)
document.importFormData(fdfData, ej.pdf.DataFormat.fdf);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Exporting form fields data

The `exportFormData` method exports form data from a PDF document. The `DataFormat` enum specifies the format: `FDF`, `XFDF`, `JSON`, or `XML`.

In a browser, the call triggers a file download using the supplied file name. In Node.js, pass a file path and then read the file back as needed.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfFormFieldExportSettings, DataFormat} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Configure the export settings
let settings: PdfFormFieldExportSettings = new PdfFormFieldExportSettings();
settings.dataFormat = DataFormat.json;
// Export the form data to JSON
document.exportFormData('formData.json', settings);
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Configure the export settings
var settings = new ej.pdf.PdfFormFieldExportSettings();
settings.dataFormat = ej.pdf.DataFormat.json;
// Export the form data to JSON
document.exportFormData('formData.json', settings);
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/fluent2/pdf/default)