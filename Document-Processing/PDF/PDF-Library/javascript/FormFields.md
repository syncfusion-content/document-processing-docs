---
title: Form Fields in JavaScript PDF library | Syncfusion
description: This section explains how to create a digital signature in the PDF document by using the JavaScript PDF library
platform: document-processing
control: PDF
documentation: UG
---
# Form Fields in JavaScript PDF library

An interactive form, sometimes referred to as an AcroForm, is a collection of fields for gathering information. A PDF document can contain any number of fields appearing on any combination of pages, all of which make a single, globally interactive form spanning the entire document.

## Creating a new PDF form

Syncfusion<sup>&reg;</sup> PDF allows you to create and manage form in PDF document by using `PdfForm` class. The `PdfForm` class represents the entire field collection of the form.

### Adding the text box field 

This example demonstrates how to add a text box field to a PDF document using the `PdfTextBoxField` class. A text box field allows users to enter text data in interactive PDF forms.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfTextBoxField, PdfInteractiveBorder, PdfBorderStyle, PdfFontFamily, PdfFontStyle} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
//Add the PDF page.
let page: PdfPage = document.addPage();
// Add new textbox field into PDF form
document.form.add(new PdfTextBoxField(
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
));
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add the PDF page.
var page = document.addPage();
// Add new textbox field into PDF form
document.form.add(new ej.pdf.PdfTextBoxField(
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
));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a text box field in an existing PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfTextBoxField, PdfInteractiveBorder, PdfBorderStyle, PdfFontFamily, PdfFontStyle} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
//Add the PDF page.
let page: PdfPage = document.getPage(0);
// Add new textbox field into PDF form
document.form.add(new PdfTextBoxField(
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
));
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
// Add new textbox field into PDF form
document.form.add(new ej.pdf.PdfTextBoxField(
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
));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Adding the combo box field

This example demonstrates how to add a combo box field to a PDF document using the `PdfComboBoxField` class. A combo box field provides a drop-down list for users to select predefined options.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfForm, PdfComboBoxField, PdfInteractiveBorder, PdfBorderStyle, PdfFontFamily, PdfFontStyle} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add the first page of the document
let page: PdfPage = document.addPage();
// Add new combobox field into PDF form
document.form.add(new PdfComboBoxField(
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
));
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Add new combobox field into PDF form
document.form.add(new ej.pdf.PdfComboBoxField(
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
));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a combo box field in an existing PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfForm, PdfComboBoxField, PdfInteractiveBorder, PdfBorderStyle, PdfFontFamily, PdfFontStyle} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Get the first page of the document
let page: PdfPage = document.getPage(0);
// Add new combobox field into PDF form
document.form.add(new PdfComboBoxField(
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
));
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
// Add new combobox field into PDF form
document.form.add(new ej.pdf.PdfComboBoxField(
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
));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Adding the radio button field

This example demonstrates how to add a radio button field to a PDF document using the `PdfRadioButtonListField` class. Radio buttons allow users to select one option from a group of choices.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfRadioButtonListField} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Add new radio button list field into PDF form
document.form.add(new PdfRadioButtonListField(
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
));
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage(); 
// Add new radio button list field into PDF form
document.form.add(new ej.pdf.PdfRadioButtonListField(
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
));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a radio button field in an existing PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfRadioButtonListField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Add new radio button list field into PDF form
document.form.add(new PdfRadioButtonListField(
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
));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Add new radio button list field into PDF form
document.form.add(new ej.pdf.PdfRadioButtonListField(
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
));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Adding the list box field

This example demonstrates how to add a list box field to a PDF document using the `PdfListBoxField` class. A list box field displays multiple options, allowing users to select one or more items.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfListBoxField, PdfInteractiveBorder, PdfBorderStyle, PdfFontFamily, PdfFontStyle} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Add new listbox field into PDF form
document.form.add(new PdfListBoxField(
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
));
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Add new listbox field into PDF form
document.form.add(new ej.pdf.PdfListBoxField(
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
));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a list box field in an existing PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfListBoxField, PdfInteractiveBorder, PdfBorderStyle, PdfFontFamily, PdfFontStyle} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Add new listbox field into PDF form
document.form.add(new PdfListBoxField(
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
));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Add new listbox field into PDF form
document.form.add(new ej.pdf.PdfListBoxField(
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
));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Adding the check box field

This example demonstrates how to add a check box field to a PDF document using the `PdfCheckBoxField` class. Check boxes allow users to select or deselect options in a form.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfCheckBoxField, PdfInteractiveBorder, PdfBorderStyle} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Add new checkbox field into PDF form
document.form.add(new PdfCheckBoxField(
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
));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Add new checkbox field into PDF form
document.form.add(new ej.pdf.PdfCheckBoxField(
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
));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a check Box field in an existing PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfCheckBoxField, PdfInteractiveBorder, PdfBorderStyle} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Add new checkbox field into PDF form
document.form.add(new PdfCheckBoxField(
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
));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Add new checkbox field into PDF form
document.form.add(new ej.pdf.PdfCheckBoxField(
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
));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Adding the signature field

This example demonstrates how to add a signature field to a PDF document using the `PdfSignatureField` class. A signature field enables users to digitally sign the PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfSignatureField, PdfInteractiveBorder, PdfBorderStyle} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Add the signature field into PDF form
document.form.add(
    new PdfSignatureField(
        page,
        'ApprovalSignature',
        { x: 50, y: 260, width: 200, height: 40 },
        {
            toolTip: 'Sign here',
            color: { r: 0, g: 0, b: 0 },
            backColor: { r: 255, g: 255, b: 255 },
            borderColor: { r: 0, g: 0, b: 0 },
            border: new PdfInteractiveBorder({
                width: 1,
                style: PdfBorderStyle.solid
            })
        }
    )
);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Add the signature field into PDF form
document.form.add(
    new ej.pdf.PdfSignatureField(
        page,
        'ApprovalSignature',
        { x: 50, y: 260, width: 200, height: 40 },
        {
            toolTip: 'Sign here',
            color: { r: 0, g: 0, b: 0 },
            backColor: { r: 255, g: 255, b: 255 },
            borderColor: { r: 0, g: 0, b: 0 },
            border: new ej.pdf.PdfInteractiveBorder({
                width: 1,
                style: ej.pdf.PdfBorderStyle.solid
            })
        }
    )
);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a signature field in an existing PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfSignatureField, PdfInteractiveBorder, PdfBorderStyle} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Add the signature field into PDF form
document.form.add(
    new PdfSignatureField(
        page,
        'ApprovalSignature',
        { x: 50, y: 260, width: 200, height: 40 },
        {
            toolTip: 'Sign here',
            color: { r: 0, g: 0, b: 0 },
            backColor: { r: 255, g: 255, b: 255 },
            borderColor: { r: 0, g: 0, b: 0 },
            border: new PdfInteractiveBorder({
                width: 1,
                style: PdfBorderStyle.solid
            })
        }
    )
);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Add the signature field into PDF form
document.form.add(
    new ej.pdf.PdfSignatureField(
        page,
        'ApprovalSignature',
        { x: 50, y: 260, width: 200, height: 40 },
        {
            toolTip: 'Sign here',
            color: { r: 0, g: 0, b: 0 },
            backColor: { r: 255, g: 255, b: 255 },
            borderColor: { r: 0, g: 0, b: 0 },
            border: new ej.pdf.PdfInteractiveBorder({
                width: 1,
                style: ej.pdf.PdfBorderStyle.solid
            })
        }
    )
);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Adding the button field 

This example demonstrates how to add a button field to a PDF document using the `PdfButtonField` class. Buttons can be configured to perform actions such as submitting a form or triggering JavaScript.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfButtonField, PdfHighlightMode, PdfBorderStyle, PdfInteractiveBorder} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Add a button field into the PDF form
document.form.add(
    new PdfButtonField(
        page,
        'Submit',
        { x: 50, y: 560, width: 120, height: 28 },
        {
            toolTip: 'Submit form',
            color: { r: 255, g: 255, b: 255 },
            backColor: { r: 0, g: 122, b: 204 },
            borderColor: { r: 0, g: 0, b: 0 },
            border: new PdfInteractiveBorder({
                width: 1,
                style: PdfBorderStyle.solid
            }),
            text: 'Submit',
            highlightMode: PdfHighlightMode.push
        }
    )
);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Add a button field into the PDF form
document.form.add(
    new ej.pdf.PdfButtonField(
        page,
        'Submit',
        { x: 50, y: 560, width: 120, height: 28 },
        {
            toolTip: 'Submit form',
            color: { r: 255, g: 255, b: 255 },
            backColor: { r: 0, g: 122, b: 204 },
            borderColor: { r: 0, g: 0, b: 0 },
            border: new ej.pdf.PdfInteractiveBorder({
                width: 1,
                style: ej.pdf.PdfBorderStyle.solid
            }),
            text: 'Submit',
            highlightMode: ej.pdf.PdfHighlightMode.push
        }
    )
);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a button field in an existing PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfForm, PdfButtonField, PdfHighlightMode, PdfBorderStyle, PdfInteractiveBorder} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Add a button field into the PDF form
document.form.add(
    new PdfButtonField(
        page,
        'Submit',
        { x: 50, y: 560, width: 120, height: 28 },
        {
            toolTip: 'Submit form',
            color: { r: 255, g: 255, b: 255 },
            backColor: { r: 0, g: 122, b: 204 },
            borderColor: { r: 0, g: 0, b: 0 },
            border: new PdfInteractiveBorder({
                width: 1,
                style: PdfBorderStyle.solid
            }),
            text: 'Submit',
            highlightMode: PdfHighlightMode.push
        }
    )
);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Add a button field into the PDF form
document.form.add(
    new ej.pdf.PdfButtonField(
        page,
        'Submit',
        { x: 50, y: 560, width: 120, height: 28 },
        {
            toolTip: 'Submit form',
            color: { r: 255, g: 255, b: 255 },
            backColor: { r: 0, g: 122, b: 204 },
            borderColor: { r: 0, g: 0, b: 0 },
            border: new ej.pdf.PdfInteractiveBorder({
                width: 1,
                style: ej.pdf.PdfBorderStyle.solid
            }),
            text: 'Submit',
            highlightMode: ej.pdf.PdfHighlightMode.push
        }
    )
);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Filling form fields in an existing PDF Document

Syncfusion<sup>&reg;</sup> PDF allows you to fill the form fields using PdfField class. 

### Filling the text box field

This example demonstrates how to fill a text box field in a PDF document using the `text` property of the `PdfTextBoxField` class. The following code snippet illustrates how to set the text value for the field.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfTextBoxField, PdfTextAlignment} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Access text box field
let field: PdfTextBoxField = document.form.fieldAt(0) as PdfTextBoxField;
// Sets the text value to text box field
field.text = 'Syncfusion';
// Sets the text alignment of form field as center
field.textAlignment = PdfTextAlignment.center;
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Access text box field
var field = document.form.fieldAt(0);
// Sets the text value to text box field
field.text = 'Syncfusion';
// Sets the text alignment of form field as center
field.textAlignment = ej.pdf.PdfTextAlignment.center;
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Filling the combo box field

This example demonstrates how to fill a combo box field in a PDF document using the `selectedIndex` property of the `PdfComboBoxField` class. The following code snippet shows how to change the selected index in a combo box.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfComboBoxField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Access combobox field
let field: PdfComboBoxField = document.form.fieldAt(0) as PdfComboBoxField;
// Sets the selected index
field.selectedIndex = 2;
// Sets the flag indicates whether the list box allows multiple selections.
field.multiSelect = true;
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Access combobox field
var field = document.form.fieldAt(0);
// Sets the selected index
field.selectedIndex = 2;
// Sets the flag indicates whether the list box allows multiple selections.
field.multiSelect = true;
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Filling the radio button field

This example demonstrates how to fill a radio button field in a PDF document using the `selectedIndex` property of the `PdfRadioButtonListField` class. The following code snippet illustrates how to change the selected index in a radio button.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfRadioButtonListField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Access radio button list field
let field: PdfRadioButtonListField = document.form.fieldAt(0) as PdfRadioButtonListField;
// Sets the selected index
field.selectedIndex = 2;
// Added tool tip
field.toolTip = 'Radio button';
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Access radio button list field
var field = document.form.fieldAt(0);
// Sets the selected index
field.selectedIndex = 2;
// Added tool tip
field.toolTip = 'Radio button';
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Filling the list box field

This example demonstrates how to fill a list box field in a PDF document using the `selectedIndex` property of the `PdfLoadedListBoxField` class. The following code snippet shows how to change the selected index in a list box.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfListBoxField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Access listbox field
let field: PdfListBoxField = document.form.fieldAt(2) as PdfListBoxField;
// Sets the selected index
field.selectedIndex = 2;
// Added tool tip
field.toolTip = 'ListBox Fields';
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Access listbox field
var field = document.form.fieldAt(2);
// Sets the selected index
field.selectedIndex = 2;
// Added tool tip
field.toolTip = 'ListBox Fields';
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Filling the check Box field

This example demonstrates how to fill a check box field in a PDF document using the `Checked` property of the `PdfCheckBoxField` class. The following code snippet illustrates how to mark a checkbox as selected.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfCheckBoxField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Access checkbox field
let field: PdfCheckBoxField = document.form.fieldAt(2) as PdfCheckBoxField;
// Sets the tooltip value
field.toolTip = 'Check Box Field';
// Added tool tip
field.toolTip = 'CheckBox Fields';
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Access checkbox field
var field = document.form.fieldAt(2);
// Sets the tooltip value
field.toolTip = 'Check Box Field';
// Added tool tip
field.toolTip = 'CheckBox Fields';
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Filling the signature field

This example demonstrates how to fill a signature field in a PDF document using the `PdfSignatureField` class. The following code snippet illustrates how to create a signature using PFX data and assign it to the signature field.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfSignatureField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Access checkbox field
let field: PdfSignatureField = document.form.fieldAt(2) as PdfSignatureField;
// // Set custom value
field.setValue('Author', 'John');
// Added tool tip
field.toolTip = 'CheckBox Fields';
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Access signature field
var field = document.form.fieldAt(2);
// Set custom value
field.setValue('Author', 'John');
// Added tool tip
field.toolTip = 'CheckBox Fields';
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
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfTextBoxField, PdfTextAlignment} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
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
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Access text box field
var field = document.form.fieldAt(0);
// Sets the text value to text box field
field.text = 'Syncfusion';
// Sets the text alignment of form field as center (enum via namespace)
field.textAlignment = ej.pdf.PdfTextAlignment.center;
// Sets the default value of the text box field
field.defaultValue = 'Syncfusion';
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Removing the form fields from existing PDF document

This example demonstrates how to remove items from an existing form field in a PDF document using the `remove()` method of the `PdfField` class. The following code snippet illustrates how to access a form field and remove its first item.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the form field at index 0
let field: PdfField = document.form.fieldAt(0);
// Remove the first item of the form field
field.removeItemAt(0);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the form field at index 0
var field = document.form.fieldAt(0);
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
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Get the first field
let field: PdfField = document.form.fieldAt(0);
// Sets the boolean flag indicating whether the form field has been flattened or not.
field.flatten = true;
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Get the first field
var field = document.form.fieldAt(0);
// Sets the boolean flag indicating whether the form field has been flattened or not.
field.flatten = true;
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

N> Setting `document.flatten = true;` flattens all interactive elements in the PDF, converting form fields and annotations into static content throughout the entire document.

## Marking form fields as Read-Only

This example demonstrates how to mark form fields as read-only by accessing them from the PdfFormFieldCollection and setting their ReadOnly property to true. 

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfField} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the form field at index 0
let field: PdfField = document.form.fieldAt(0);
// Sets a value indicating whether read only.
field.readOnly = true;
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the form field at index 0
var field = document.form.fieldAt(0);
// Sets a value indicating whether read only.
field.readOnly = true;
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Importing form fields data

### Importing FDF file to PDF

This example demonstrates how to import form data from an FDF file into a PDF document using the `importFormData` method. Importing FDF data allows you to populate form fields in a PDF with values from an external data source.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, DataFormat} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Imports form data into the PDF document.
document.importFormData('formData.fdf', DataFormat.fdf);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Imports form data into the PDF document.
document.importFormData('formData.fdf', ej.pdf.DataFormat.fdf);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### Importing XFDF file to PDF

This example demonstrates how to import form data from an XFDF file into a PDF document using the `importFormData` method. Importing XFDF data allows you to populate form fields in a PDF with values from an external data source.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, DataFormat} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Imports form data into the PDF document.
document.importFormData('formData.xfdf', DataFormat.xfdf);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Imports form data into the PDF document.
document.importFormData('formData.xfdf', ej.pdf.DataFormat.xfdf);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Exporting form fields data

### Export PDF file to FDF

This example demonstrates how to export form data from a PDF document to an FDF file using the `exportFormData` method. Exporting FDF data allows you to save the values of form fields in a lightweight format for reuse or integration with other systems.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfFormFieldExportSettings, DataFormat } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
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
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Sets the form field data export settings with output data format.
var settings = new ej.pdf.PdfFormFieldExportSettings();
settings.dataFormat = ej.pdf.DataFormat.fdf;
// Export form field to fdf format
var fdf = document.exportFormData(settings);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Export PDF file to XFDF

This example demonstrates how to export form data from a PDF document to an XFDF file using the `exportFormData` method. Exporting XFDF data allows you to save the values of form fields in a lightweight format for reuse or integration with other systems.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfFormFieldExportSettings, DataFormat } from '@syncfusion/ej2-pdf';
    
// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
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
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Sets the form field data export settings with output data format.
var settings = new ej.pdf.PdfFormFieldExportSettings();
settings.dataFormat = ej.pdf.DataFormat.xfdf;
// Export form field to XFDF format
var xfdf = document.exportFormData(settings);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}