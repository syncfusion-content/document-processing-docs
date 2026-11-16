---
title: Form Fields in JavaScript Word | Syncfusion
description: Learn how to work with form fields such as Text, Checkbox and Drop-Down in a Word document using the Syncfusion JavaScript Word library without Microsoft Word.
platform: document-processing
control: Word Library
documentation: UG
---
# Form Fields in JavaScript Word Library

You can create a template document with form fields such as Text, Checkbox, and Drop-Down. You can also open an existing template document and fill or modify the form fields with the specified data.

The following are the types of form fields available in a Word document:

* Checkbox – represented by an instance of `CheckBoxFormField`
* Drop-Down – represented by an instance of `DropDownFormField`
* Text input – represented by an instance of `TextFormField`

## Check Box

You can add a new Checkbox form field to a Word document by using the `appendCheckBoxFormField` method of the `Paragraph` class.

The following code illustrates how to add a new Checkbox form field.

{% tabs %}
{% highlight javascript tabtitle="JavaScript" %}
// Create document
let document = WordDocument.create();

// Add section
let section = document.lastSection;

// Add paragraph
let paragraph = section.body.paragraphs[0];

paragraph.appendText('Gender\t');

// Append first checkbox
let checkBox = paragraph.appendCheckBoxFormField();
checkBox.checked = false;
checkBox.checkBoxSize = 10;
checkBox.calculateOnExit = true;
checkBox.help = 'Help text';

paragraph.appendText('Male\t');

// Append second checkbox
checkBox = paragraph.appendCheckBoxFormField();
checkBox.checked = false;
checkBox.checkBoxSize = 10;
checkBox.calculateOnExit = true;

paragraph.appendText('Female');

// Saves the Word document.
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

You can modify the checkbox properties such as checked state and size in a Word document. The following code illustrates how to modify the Checkbox form field properties.

{% tabs %}
{% highlight javascript tabtitle="JavaScript" %}
let document = WordDocument.open(data);
const paragraph = document.lastParagraph;

for (const item of paragraph.items) {
    if (item instanceof CheckBoxFormField) {
        if (item.checked) {
            item.checked = false;
        }

        item.sizeType = CheckBoxSizeType.Exactly;
    }
}

// Saves the Word document. 
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Drop-Down

You can add a new Drop-Down form field to a Word document by using the `appendDropDownFormField` method of the `Paragraph` class.

The following code illustrates how to add a new Drop-Down form field.

{% tabs %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new Word document
let document = WordDocument.create();

// Add a new section
let section = document.lastSection;

// Add a new paragraph
let paragraph = section.body.paragraphs[0];

paragraph.appendText('Educational Qualification\t');

// Append a dropdown form field
let dropDownField = paragraph.appendDropDownFormField();

// Add items to the dropdown collection
dropDownField.dropDownItems.add('Higher');
dropDownField.dropDownItems.add('Vocational');
dropDownField.dropDownItems.add('Universal');

// Enable the dropdown field
dropDownField.enabled = true;

// Set the selected item index
dropDownField.selectedIndex = 1;

// Enable calculation when exiting the field
dropDownField.calculateOnExit = true;

// Save the Word document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

You can add or modify the list of items of a Drop-Down form field in a Word document. The following code illustrates how to modify the drop-down list of a Drop-Down form field.

{% tabs %}
{% highlight javascript tabtitle="JavaScript" %}
let document = WordDocument.open(data);
const paragraph = document.lastParagraph;

for (const item of paragraph.items) {
    if (item instanceof DropDownFormField) {
        item.dropDownItems.removeAt(1);
        item.selectedIndex = 0;
    }
}

// Saves the Word document. 
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Text Form Field

You can add a new Text form field to a Word document by using the `appendTextFormField` method of the `Paragraph` class.

The following code illustrates how to add a new Text form field.

{% tabs %}
{% highlight javascript tabtitle="JavaScript" %}
// Create document 
let document = WordDocument.create(); 
let section = document.lastSection;
// Add heading paragraph
let paragraph = section.body.paragraphs[0];
paragraph.appendText('General Information');

// Name field
paragraph = section.body.appendParagraph();

let text = paragraph.appendText('Name\t');
text.characterFormat.bold = true;

// Text form field
let textField = paragraph.appendTextFormField();
textField.type = TextFormFieldType.RegularText;
textField.characterFormat.fontName = 'Calibri';
textField.calculateOnExit = true;

// Date of birth field
paragraph = section.body.appendParagraph();

text = paragraph.appendText('Date of Birth\t');
text.characterFormat.bold = true;

// Date form field
textField = paragraph.appendTextFormField(
    'Date field',
    new Date().toLocaleDateString('en-US')
);

textField.stringFormat = 'MM/DD/YY';
textField.type = TextFormFieldType.DateText;
textField.calculateOnExit = true;

// Saves the Word document. 
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

You can add or modify Text form field properties such as default text and type in a Word document. The following code illustrates how to modify the Text form field.

{% tabs %}
{% highlight javascript tabtitle="JavaScript" %}
let document = WordDocument.open(data);
for (let section of document.sections) {
    for (let formField of section.body.formFields) {
        switch (formField.formFieldType) {
            case 'textInput': {
                const textField = formField as TextFormField;

                if (textField.type === TextFormFieldType.DateText) {
                    textField.type = TextFormFieldType.RegularText;
                    textField.stringFormat = '';

                    textField.defaultText = 'Default text';
                    textField.text = 'Default text';

                    textField.calculateOnExit = false;
                }
                break;
            }
        }
    }
}
// Saves the Word document. 
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}
