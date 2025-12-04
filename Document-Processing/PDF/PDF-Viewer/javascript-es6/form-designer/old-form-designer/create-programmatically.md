---
layout: post
title: Create form fields in the TypeScript PDF Viewer component | Syncfusion
description: Learn how to add, update, delete, save, print, validate, and import/export form fields in the Syncfusion TypeScript PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Create programmatically in TypeScript PDF Viewer control

The PDF Viewer component provides options to add, edit, and delete form fields. The supported form field types are:

- Textbox
- Password
- CheckBox
- RadioButton
- ListBox
- DropDown
- Signature field
- Initial field

## Add a form field to PDF document programmatically

Use the addFormField method to add form fields programmatically. Pass the form field type and the corresponding property object as parameters. The following example demonstrates adding multiple fields on document load.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
         TextSelection, Annotation, FormDesigner, FormFields, TextFieldSettings, RadioButtonFieldSettings,
         CheckBoxFieldSettings, InitialFieldSettings, SignatureFieldSettings } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation, ThumbnailView,
                  BookmarkView, TextSelection, Annotation, FormDesigner, FormFields );

let pdfviewer: PdfViewer = new PdfViewer({
    documentPath:'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
    resourceUrl:"https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
});
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = function (args) {
    pdfviewer.formDesignerModule.addFormField("Textbox", { name: "First Name", bounds: { X: 146, Y: 229, Width: 150, Height: 24 }as TextFieldSettings });
    pdfviewer.formDesignerModule.addFormField("Textbox", { name: "Middle Name", bounds: { X: 338, Y: 229, Width: 150, Height: 24 }as TextFieldSettings});
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'Last Name',bounds: { X: 530, Y: 229, Width: 150, Height: 24 }as TextFieldSettings,});
    pdfviewer.formDesignerModule.addFormField('RadioButton', {bounds: { X: 148, Y: 289, Width: 18, Height: 18 },name: 'Gender',isSelected: false}as RadioButtonFieldSettings);
    pdfviewer.formDesignerModule.addFormField('RadioButton', {bounds: { X: 292, Y: 289, Width: 18, Height: 18 },name: 'Gender',isSelected: false,}as RadioButtonFieldSettings);
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOB Month',bounds: { X: 146, Y: 320, Width: 35, Height: 24 }as TextFieldSettings,});
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOB Date',bounds: { X: 193, Y: 320, Width: 35, Height: 24 }as TextFieldSettings,});
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOB Year',bounds: { X: 242, Y: 320, Width: 35, Height: 24 }as TextFieldSettings,});
    pdfviewer.formDesignerModule.addFormField('InitialField', {name: 'Agree',bounds: { X: 148, Y: 408, Width: 200, Height: 43 },} as InitialFieldSettings);
    pdfviewer.formDesignerModule.addFormField('InitialField', {name: 'Do Not Agree',bounds: { X: 148, Y: 466, Width: 200, Height: 43 },} as InitialFieldSettings);
    pdfviewer.formDesignerModule.addFormField('CheckBox', {name: 'Text Message',bounds: { X: 56, Y: 664, Width: 20, Height: 20 },isChecked: false,}as CheckBoxFieldSettings);
    pdfviewer.formDesignerModule.addFormField('CheckBox', {name: 'Email',bounds: { X: 242, Y: 664, Width: 20, Height: 20 },isChecked: false,}as CheckBoxFieldSettings);
    pdfviewer.formDesignerModule.addFormField('CheckBox', {name: 'Appointment Reminder',bounds: { X: 56, Y: 740, Width: 20, Height: 20 },isChecked: false,}as CheckBoxFieldSettings);
    pdfviewer.formDesignerModule.addFormField('CheckBox', {name: 'Request for Customerservice',bounds: { X: 56, Y: 778, Width: 20, Height: 20 },isChecked: false,}as CheckBoxFieldSettings);
    pdfviewer.formDesignerModule.addFormField('CheckBox', {name: 'Information Billing',bounds: { X: 290, Y: 740, Width: 20, Height: 20 },isChecked: false,}as CheckBoxFieldSettings);
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'My Email',bounds: { X: 146, Y: 850, Width: 200, Height: 24 }as TextFieldSettings,});
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'My Phone',bounds: { X: 482, Y: 850, Width: 200, Height: 24 }as TextFieldSettings,});
    pdfviewer.formDesignerModule.addFormField('SignatureField', {name: 'Sign',bounds: { X: 57, Y: 923, Width: 200, Height: 43 },}as SignatureFieldSettings);
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOS Month',bounds: { X: 386, Y: 923, Width: 35, Height: 24 }as TextFieldSettings,});
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOS Date',bounds: { X: 434, Y: 923, Width: 35, Height: 24 }as TextFieldSettings} );
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOS Year',bounds: { X: 482, Y: 923, Width: 35, Height: 24 }as TextFieldSettings,});
}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="TypeScript PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.23/material.css" rel="stylesheet" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>
{% endhighlight %}
{% endtabs %}

N> To configure the server-backed PDF Viewer, add the following `serviceUrl` in the `index.ts` file:
`pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';`

{% previewsample "Document-Processing/code-snippet/pdfviewer/javascript-es6/addformfield-cs3/index.html" %}

## Edit/Update form field programmatically

Use the updateFormField method to modify a form field programmatically. Retrieve the target field from the formFieldCollections property (by object or ID) and pass it as the first parameter. Provide the properties to update as the second parameter. The following example updates the background color of a Textbox field.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, TextFieldSettings,
    RadioButtonFieldSettings, CheckBoxFieldSettings, InitialFieldSettings, SignatureFieldSettings} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, Annotation, FormDesigner, FormFields);

let pdfviewer: PdfViewer = new PdfViewer({
    documentPath:'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
    resourceUrl:"https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
});
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = function (args) {
pdfviewer.formDesignerModule.addFormField("Textbox", { name: "First Name", bounds: { X: 146, Y: 229, Width: 150, Height: 24 }as TextFieldSettings });
pdfviewer.formDesignerModule.addFormField("Textbox", { name: "Middle Name", bounds: { X: 338, Y: 229, Width: 150, Height: 24 }as TextFieldSettings});
pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'Last Name',bounds: { X: 530, Y: 229, Width: 150, Height: 24 }as TextFieldSettings,});
pdfviewer.formDesignerModule.addFormField('RadioButton', {bounds: { X: 148, Y: 289, Width: 18, Height: 18 },name: 'Gender',isSelected: false}as RadioButtonFieldSettings);
pdfviewer.formDesignerModule.addFormField('RadioButton', {bounds: { X: 292, Y: 289, Width: 18, Height: 18 },name: 'Gender',isSelected: false,}as RadioButtonFieldSettings);
pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOB Month',bounds: { X: 146, Y: 320, Width: 35, Height: 24 }as TextFieldSettings,});
pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOB Date',bounds: { X: 193, Y: 320, Width: 35, Height: 24 }as TextFieldSettings,});
pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOB Year',bounds: { X: 242, Y: 320, Width: 35, Height: 24 }as TextFieldSettings,});
pdfviewer.formDesignerModule.addFormField('InitialField', {name: 'Agree',bounds: { X: 148, Y: 408, Width: 200, Height: 43 },} as InitialFieldSettings);
pdfviewer.formDesignerModule.addFormField('InitialField', {name: 'Do Not Agree',bounds: { X: 148, Y: 466, Width: 200, Height: 43 },} as InitialFieldSettings);
pdfviewer.formDesignerModule.addFormField('CheckBox', {name: 'Text Message',bounds: { X: 56, Y: 664, Width: 20, Height: 20 },isChecked: false,}as CheckBoxFieldSettings);
pdfviewer.formDesignerModule.addFormField('CheckBox', {name: 'Email',bounds: { X: 242, Y: 664, Width: 20, Height: 20 },isChecked: false,}as CheckBoxFieldSettings);
pdfviewer.formDesignerModule.addFormField('CheckBox', {name: 'Appointment Reminder',bounds: { X: 56, Y: 740, Width: 20, Height: 20 },isChecked: false,}as CheckBoxFieldSettings);
pdfviewer.formDesignerModule.addFormField('CheckBox', {name: 'Request for Customerservice',bounds: { X: 56, Y: 778, Width: 20, Height: 20 },isChecked: false,}as CheckBoxFieldSettings);
pdfviewer.formDesignerModule.addFormField('CheckBox', {name: 'Information Billing',bounds: { X: 290, Y: 740, Width: 20, Height: 20 },isChecked: false,}as CheckBoxFieldSettings);
pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'My Email',bounds: { X: 146, Y: 850, Width: 200, Height: 24 }as TextFieldSettings,});
pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'My Phone',bounds: { X: 482, Y: 850, Width: 200, Height: 24 }as TextFieldSettings,});
pdfviewer.formDesignerModule.addFormField('SignatureField', {name: 'Sign',bounds: { X: 57, Y: 923, Width: 200, Height: 43 },}as SignatureFieldSettings);
pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOS Month',bounds: { X: 386, Y: 923, Width: 35, Height: 24 }as TextFieldSettings,});
pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOS Date',bounds: { X: 434, Y: 923, Width: 35, Height: 24 }as TextFieldSettings} );
pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOS Year',bounds: { X: 482, Y: 923, Width: 35, Height: 24 }as TextFieldSettings,});
pdfviewer.formDesignerModule.updateFormField(pdfviewer.formFieldCollections[0], { backgroundColor: 'red' } as TextFieldSettings);
}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="TypeScript PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.23/material.css" rel="stylesheet" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>
{% endhighlight %}
{% endtabs %}

N> To configure the server-backed PDF Viewer, add the following `serviceUrl` in the `index.ts` file:
`pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';`

{% previewsample "Document-Processing/code-snippet/pdfviewer/javascript-es6/updateformfield-cs3/index.html" %}

## Delete form field programmatically

Use the deleteFormField method to remove a form field programmatically. Retrieve the target field from the formFieldCollections property (by object or ID) and pass it to deleteFormField. The following example deletes the first form field.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, TextFieldSettings,
    RadioButtonFieldSettings, CheckBoxFieldSettings, InitialFieldSettings, SignatureFieldSettings} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, Annotation, FormDesigner, FormFields);

let pdfviewer: PdfViewer = new PdfViewer({
    documentPath:'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
    resourceUrl:"https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
});
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = function (args) {
    pdfviewer.formDesignerModule.addFormField("Textbox", { name: "First Name", bounds: { X: 146, Y: 229, Width: 150, Height: 24 }as TextFieldSettings });
    pdfviewer.formDesignerModule.addFormField("Textbox", { name: "Middle Name", bounds: { X: 338, Y: 229, Width: 150, Height: 24 }as TextFieldSettings});
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'Last Name',bounds: { X: 530, Y: 229, Width: 150, Height: 24 }as TextFieldSettings,});
    pdfviewer.formDesignerModule.addFormField('RadioButton', {bounds: { X: 148, Y: 289, Width: 18, Height: 18 },name: 'Gender',isSelected: false}as RadioButtonFieldSettings);
    pdfviewer.formDesignerModule.addFormField('RadioButton', {bounds: { X: 292, Y: 289, Width: 18, Height: 18 },name: 'Gender',isSelected: false,}as RadioButtonFieldSettings);
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOB Month',bounds: { X: 146, Y: 320, Width: 35, Height: 24 }as TextFieldSettings,});
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOB Date',bounds: { X: 193, Y: 320, Width: 35, Height: 24 }as TextFieldSettings,});
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOB Year',bounds: { X: 242, Y: 320, Width: 35, Height: 24 }as TextFieldSettings,});
    pdfviewer.formDesignerModule.addFormField('InitialField', {name: 'Agree',bounds: { X: 148, Y: 408, Width: 200, Height: 43 },} as InitialFieldSettings);
    pdfviewer.formDesignerModule.addFormField('InitialField', {name: 'Do Not Agree',bounds: { X: 148, Y: 466, Width: 200, Height: 43 },} as InitialFieldSettings);
    pdfviewer.formDesignerModule.addFormField('CheckBox', {name: 'Text Message',bounds: { X: 56, Y: 664, Width: 20, Height: 20 },isChecked: false,}as CheckBoxFieldSettings);
    pdfviewer.formDesignerModule.addFormField('CheckBox', {name: 'Email',bounds: { X: 242, Y: 664, Width: 20, Height: 20 },isChecked: false,}as CheckBoxFieldSettings);
    pdfviewer.formDesignerModule.addFormField('CheckBox', {name: 'Appointment Reminder',bounds: { X: 56, Y: 740, Width: 20, Height: 20 },isChecked: false,}as CheckBoxFieldSettings);
    pdfviewer.formDesignerModule.addFormField('CheckBox', {name: 'Request for Customerservice',bounds: { X: 56, Y: 778, Width: 20, Height: 20 },isChecked: false,}as CheckBoxFieldSettings);
    pdfviewer.formDesignerModule.addFormField('CheckBox', {name: 'Information Billing',bounds: { X: 290, Y: 740, Width: 20, Height: 20 },isChecked: false,}as CheckBoxFieldSettings);
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'My Email',bounds: { X: 146, Y: 850, Width: 200, Height: 24 }as TextFieldSettings,});
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'My Phone',bounds: { X: 482, Y: 850, Width: 200, Height: 24 }as TextFieldSettings,});
    pdfviewer.formDesignerModule.addFormField('SignatureField', {name: 'Sign',bounds: { X: 57, Y: 923, Width: 200, Height: 43 },}as SignatureFieldSettings);
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOS Month',bounds: { X: 386, Y: 923, Width: 35, Height: 24 }as TextFieldSettings,});
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOS Date',bounds: { X: 434, Y: 923, Width: 35, Height: 24 }as TextFieldSettings} );
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOS Year',bounds: { X: 482, Y: 923, Width: 35, Height: 24 }as TextFieldSettings,});
    pdfviewer.formDesignerModule.deleteFormField(pdfviewer.formFieldCollections[0]);
}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="TypeScript PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.23/material.css" rel="stylesheet" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>
{% endhighlight %}
{% endtabs %}

N> To configure the server-backed PDF Viewer, add the following `serviceUrl` in the `index.ts` file:
`pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';`

{% previewsample "Document-Processing/code-snippet/pdfviewer/javascript-es6/deleteformfield-cs3/index.html" %}

## Saving the form fields

Selecting the Download icon on the toolbar saves the form fields in the exported PDF without modifying the original document. See the following GIF for reference.

![Save form fields from the PDF Viewer](../../images/saveformfield.gif)

You can invoke the download action using the following code snippet.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.appendTo('#PdfViewer');
pdfviewer.load('https://cdn.syncfusion.com/content/pdf/form-designer.pdf', null);
pdfviewer.download();

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.appendTo('#PdfViewer');
pdfviewer.load('https://cdn.syncfusion.com/content/pdf/form-designer.pdf', null);
pdfviewer.download();


{% endhighlight %}
{% endtabs %}

## Printing the form fields

Selecting the Print icon on the toolbar prints the PDF with the added form fields. This action does not modify the original document. See the following GIF for reference.

![Print the PDF with form fields](../../images/printformfield.gif)

You can invoke the print action using the following code snippet:

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection} from '@syncfusion/ej2-pdfviewer';

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
         BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
                  BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.appendTo('#PdfViewer');
pdfviewer.load('https://cdn.syncfusion.com/content/pdf/form-designer.pdf', null);
pdfviewer.print.print();

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection} from '@syncfusion/ej2-pdfviewer';


import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
         BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
                  BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.appendTo('#PdfViewer');
pdfviewer.load('https://cdn.syncfusion.com/content/pdf/form-designer.pdf', null);
pdfviewer.print.print();

{% endhighlight %}
{% endtabs %}

## setFormFieldMode programmatically

The setFormFieldMode method enables adding a form field dynamically by specifying the field type. For example, the following adds a Password field when a button is clicked.

```
<button id="addPasswordField">Add Password Field</button>

```

{% tabs %}
{% highlight js tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
         BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
                  BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.appendTo('#PdfViewer');

document.getElementById('addPasswordField').addEventListener('click', function () {
    pdfviewer.formDesignerModule.setFormFieldMode("Password");
});

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
         BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
                  BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.appendTo('#PdfViewer');

document.getElementById('addPasswordField').addEventListener('click', function () {
    pdfviewer.formDesignerModule.setFormFieldMode("Password");
});
{% endhighlight %}
{% endtabs %}

## Open the existing PDF document

Open a PDF that already contains form fields by clicking the Open icon on the toolbar. See the following GIF for reference.

![Open a PDF with existing form fields](../../images/openexistingpdf.gif)

## Validate form fields

Form fields are validated when enableFormFieldsValidation is set to true and the validateFormFields event is handled. The event triggers during download or print if required fields are not filled. The non-filled fields are available in the nonFillableFields property of the event arguments.

Add the following code to validate form fields:

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
TextSelection, Annotation, FormDesigner, FormFields, TextFieldSettings} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, Annotation, FormDesigner, FormFields);

let pdfviewer: PdfViewer = new PdfViewer({ documentPath:'https://cdn.syncfusion.com/content/pdf/form-designer.pdf' });
pdfviewer.appendTo('#PdfViewer');
pdfviewer.enableFormFieldsValidation = true;
viewer.validateFormFields= function (args) {
var nonfilledFormFields = args.nonFillableFields;
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
TextSelection, Annotation, FormDesigner, FormFields, TextFieldSettings} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, Annotation, FormDesigner, FormFields);

let pdfviewer: PdfViewer = new PdfViewer({ documentPath:'https://cdn.syncfusion.com/content/pdf/form-designer.pdf' });
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.appendTo('#PdfViewer');
pdfviewer.enableFormFieldsValidation = true;
viewer.validateFormFields= function (args) {
var nonfilledFormFields = args.nonFillableFields;
}

{% endhighlight %}
{% endtabs %}

## Export and import form fields

The PDF Viewer component supports exporting and importing form field data using the importFormFields, exportFormFields, and exportFormFieldsAsObject methods in the following formats:

- FDF
- XFDF
- JSON

### Export and import as FDF

Using the `exportFormFields` method, the form field data can be exported in the specified data format. This method accepts two parameters:

* The first one must be the destination path for the exported data. If the path is not specified, it will ask for the location while exporting.
* The second parameter should be the format type of the form data.

The following example exports and imports form field data as FDF.

```ts

<button id="exportFdf">Export FDF</button>
<button id="importFdf">Import FDF</button>
<!--Add the PDF Viewer-->
<div id="pdfViewer" style="height: 640px; width: 100%"></div>

// Event triggers on Export FDF button click.
document.getElementById('exportFdf').addEventListener('click', ()=> {
    // Data must be the desired path for the exported document.
    viewer.exportFormFields('Data', FormFieldDataFormat.Fdf);
});

// Event triggers on Import FDF button click.
document.getElementById('importFdf').addEventListener('click', ()=> {
    // The file for importing the form field should be placed in the desired location, and the path should be provided correctly
    viewer.importFormFields('File', FormFieldDataFormat.Fdf);
});

```

### Export and import as XFDF

The following example exports and imports form field data as XFDF.

```ts

<button id="exportXfdf">Export XFDF</button>
<button id="importXfdf">Import XFDF</button>
<!--Add the PDF Viewer-->
<div id="pdfViewer" style="height: 640px; width: 100%"></div>

// Event triggers on Export XFDF button click.
document.getElementById('exportXfdf').addEventListener('click', ()=> {
    // Data must be the desired path for the exported document.
    viewer.exportFormFields('Data', FormFieldDataFormat.Xfdf);
});

// Event triggers on Import XFDF button click.
document.getElementById('importXfdf').addEventListener('click', ()=> {
    // The file for importing the form field should be placed in the desired location, and the path should be provided correctly
    viewer.importFormFields('File', FormFieldDataFormat.Xfdf);
});

```

### Export and import as JSON

The following example exports and imports form field data as JSON.

```ts

<button id="exportJson">Export JSON</button>
<button id="importJson">Import JSON</button>
<!--Add the PDF Viewer-->
<div id="pdfViewer" style="height: 640px; width: 100%"></div>

// Event triggers on Export JSON button click.
document.getElementById('exportJson').addEventListener('click', ()=> {
    // Data must be the desired path for the exported document.
    viewer.exportFormFields('Data', FormFieldDataFormat.Json);
});

// Event triggers on Import JSON button click.
document.getElementById('importJson').addEventListener('click', ()=> {
    // The file for importing the form field should be placed in the desired location, and the path should be provided correctly
    viewer.importFormFields('File', FormFieldDataFormat.Json);
});

```

### Export and import as Object

The PDF Viewer component supports exporting the form field data as an object and importing that data back into the current PDF document.

The following code shows how to export the form field data as an object and import the form field data from that object into the current PDF document via a button click.

```ts

<button id="exportDataAsObject">Export Object</button>
<button id="importData">Import Data</button>
<!--Add the PDF Viewer-->
<div id="pdfViewer" style="height: 640px; width: 100%"></div>

let exportedData;

// Event triggers on Export Object button click.
document.getElementById('exportDataAsObject').addEventListener('click', ()=> {
    // Export the form field data to an FDF object.
    viewer.exportFormFieldsAsObject(FormFieldDataFormat.Fdf).then(value => {
        exportedData = value;
    });

    // // Export the form field data to an XFDF object.
    // viewer.exportFormFieldsAsObject(FormFieldDataFormat.Xfdf).then(value =>{
    //      exportedData = value;
    // })

    // // Export the form field data to an JSON object.
    // viewer.exportFormFieldsAsObject(FormFieldDataFormat.Json).then(value =>{
    //      exportedData = value;
    // })
});

// Event triggers on Import Data button click.
document.getElementById('importData').addEventListener('click', ()=> {
    // Import the form field data from the FDF object into the current PDF document.
    viewer.importFormFields(exportedData, FormFieldDataFormat.Fdf);

    //// Import the form field data from the XFDF object into the current PDF document.
    //viewer.importFormFields (exportedData, FormFieldDataFormat.Xfdf);

    //// Import the form field data from the FDF object into the current PDF document.
    //viewer.importFormFields (exportedData, FormFieldDataFormat.Json);
});
```
## Form field properties

Form field properties allow customization and interaction with fields embedded in PDF documents. The following sections outline the supported field types and their configurable settings.

- Textbox
- Password
- CheckBox
- RadioButton
- ListBox
- DropDown
- Signature field
- Initial field

### Signature and initial fields settings

Use the updateFormField method to modify form fields programmatically.

The following code example explains how to update the signature field properties on a button click.

```ts

document.getElementById('updateProperties').addEventListener('click',function() {
    var formField = viewer.retrieveFormFields();
    viewer.formDesignerModule.updateFormField(formField[0], {
        name: 'Initial',
        isReadOnly: true,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'Initial',
        thickness: 4
    });
});

```

The following code shows how to configure default properties for a signature field added from the Form Designer toolbar.

```ts

// Properties to customize the signature field settings
viewer.signatureFieldSettings = {
    // Set the name of the form field element.
    name: 'Signature',
    // Specify whether the signature field is in read-only or read-write mode.
    isReadOnly: false,
    // Set the visibility of the form field.
    visibility: 'visible',
    // Specify whether the field is mandatory or not.
    isRequired: false,
    // Specify whether to print the signature field.
    isPrint: true,
    // Set the text to be displayed as a tooltip.
    tooltip: 'Signature',
    // Set the thickness of the Signature field. To hide the borders, set the value to 0 (zero).
    thickness: 4,
    // Specify the properties of the signature Dialog Settings in the signature field.
    signatureDialogSettings: {
        displayMode: DisplayMode.Draw | DisplayMode.Upload | DisplayMode.Text,
        hideSaveSignature: false,
    },
    // Specify the properties of the signature indicator in the signature field.
    signatureIndicatorSettings: {
        opacity: 1,
        backgroundColor: '#237ba2',
        height: 50,
        fontSize: 15,
        text: 'Signature Field',
        color: 'white'
    },
};

```

![Signature field settings in the PDF Viewer](../../images/SignatureField.png)

The following code shows how to configure default properties for an initial field added from the Form Designer toolbar.

```ts

// Properties to customize the initial field settings
viewer.initialFieldSettings = {
    // Set the name of the form field element.
    name: 'Initial',
    // Specify whether the initial field is in read-only or read-write mode.
    isReadOnly: false,
    // Set the visibility of the form field.
    visibility: 'visible',
    // Specify whether the field is mandatory or not.
    isRequired: false,
    // Specify whether to print the initial field.
    isPrint: true,
    // Set the text to be displayed as a tooltip.
    tooltip: 'Initial',
    // Set the thickness of the initial field. To hide the borders, set the value to 0 (zero).
    thickness: 4,
    // Specifies the properties of the initial indicator in the initial field.
    initialIndicatorSettings: {
        opacity: 1,
        backgroundColor: '#237ba2',
        height: 50,
        fontSize: 15,
        text: 'Initial Field',
        color: 'white'
    },
    // Specify the properties of the initial Dialog Settings in the intial field.
    initialDialogSettings: {
        displayMode: DisplayMode.Draw | DisplayMode.Upload | DisplayMode.Text,
        hideSaveSignature: false
    }
};

```

![Initial field settings in the PDF Viewer](../../images/InitialField.png)

### Textbox field settings

Using the `updateFormField` method, the form fields can be updated programmatically.

The following example updates Textbox field properties on a button click.

```html
<button id="updateProperties">Update Properties</button>

```

```ts

document.getElementById('updateProperties').addEventListener('click',function() {
    var formField = viewer.retrieveFormFields();
    viewer.formDesignerModule.updateFormField(formField[0], {
        name: 'Textbox',
        isReadOnly: true,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'Textbox',
        thickness: 4,
        value:'Textbox',
        fontFamily: 'Courier',
        fontSize: 10,
        fontStyle: 'None',
        color: 'black',
        borderColor: 'black',
        backgroundColor: 'white',
        alignment: 'Left',
        maxLength: 0,
        isMultiline: false,
        bounds: { X: 146, Y: 229, Width: 150, Height: 24 }
    });
});


```

The following code shows how to configure default properties for a Textbox field added from the Form Designer toolbar.

```ts

// Properties to customize the Textbox field settings
viewer.textFieldSettings = {
 // Set the name of the form field element.
    name: 'Textbox',
    // Specify whether the Textbox field is in read-only or read-write mode.
    isReadOnly: false,
    // Set the visibility of the form field.
    visibility: 'visible',
    // Specify whether the field is mandatory or not.
    isRequired: false,
    // Specify whether to print the Textbox field.
    isPrint: true,
    // Set the text to be displayed as a tooltip.
    tooltip: 'Textbox',
    // Set the thickness of the Textbox field. To hide the borders, set the value to 0 (zero).
    thickness: 4,
    // Set the value of the form field element.
    value:'Textbox',
    // Set the font family of the textbox field.
    fontFamily: 'Courier',
    // Set the font size of the textbox field.
    fontSize: 10,
    // Specify the font style
    fontStyle: 'None',
    // Set the font color of the textbox field.
    color: 'black',
    // Set the border color of the textbox field.
    borderColor: 'black',
    // Set the background color of the textbox field.
    backgroundColor: 'White',
    // Set the alignment of the text.
    alignment: 'Left',
    // Set the maximum character length.
    maxLength: 0,
    // Allows multiline input in the text field. FALSE, by default.
    isMultiline: false
};

```

![Textbox field settings in the PDF Viewer](../../images/Textbox.png)

### Password field settings

Using the `updateFormField` method, the form fields can be updated programmatically.

The following example updates Password field properties on a button click.

```html
<button id="updateProperties">Update Properties</button>

```

```ts

document.getElementById('updateProperties').addEventListener('click',function() {
    var formField = viewer.retrieveFormFields();
    viewer.formDesignerModule.updateFormField(formField[0], {
      name: 'Password',
      isReadOnly: true,
      visibility: 'visible',
      isRequired: false,
      isPrint: true,
      tooltip: 'Password',
      thickness: 4,
      value:'Password',
      fontFamily: 'Courier',
      fontSize: 10,
      fontStyle: 'None',
      color: 'black',
      borderColor: 'black',
      backgroundColor: 'white',
      alignment: 'Left',
      maxLength: 0,
      bounds: { X: 148, Y: 229, Width: 150, Height: 24 }
    });
});


```

The following code shows how to configure default properties for a Password field added from the Form Designer toolbar.

```ts

// Properties to customize the Password field settings
viewer.passwordFieldSettings = {
 // Set the name of the form field element.
    name: 'Password',
    // Specify whether the Password field is in read-only or read-write mode.
    isReadOnly: false,
    // Set the visibility of the form field.
    visibility: 'visible',
    // Specify whether the field is mandatory or not.
    isRequired: false,
    // Specify whether to print the Password field.
    isPrint: true,
    // Set the text to be displayed as a tooltip.
    tooltip: 'Password',
    // Set the thickness of the Password field. To hide the borders, set the value to 0 (zero).
    thickness: 4,
    // Set the value of the form field element.
    value:'Password',
    // Set the font family of the Password field.
    fontFamily: 'Courier',
    // Set the font size of the Password field.
    fontSize: 10,
    // Specify the font style
    fontStyle: 'None',
    // Set the font color of the Password field.
    color: 'black',
    // Set the border color of the Password field.
    borderColor: 'black',
    // Set the background color of the Password field.
    backgroundColor: 'white',
    // Set the alignment of the text.
    alignment: 'Left',
    // Set the maximum character length.
    maxLength: 0,
};

```

![Password field settings in the PDF Viewer](../../images/Password.png)

### CheckBox field settings

Using the `updateFormField` method, the form fields can be updated programmatically.

The following example updates CheckBox field properties on a button click.

```html
<button id="updateProperties">Update Properties</button>

```

```ts

document.getElementById('updateProperties').addEventListener('click',function() {
    var formField = viewer.retrieveFormFields();
    viewer.formDesignerModule.updateFormField(formField[0], {
      name: 'CheckBox',
      isReadOnly: true,
      visibility: 'visible',
      isRequired: false,
      isPrint: true,
      tooltip: 'CheckBox',
      thickness: 4,
      isChecked: true,
      backgroundColor: 'white',
      borderColor: 'black',
      value: 'CheckBox',
    });
});


```

The following code shows how to configure default properties for a CheckBox field added from the Form Designer toolbar.

```ts

// Properties to customize the CheckBox field settings
viewer.checkBoxFieldSettings = {
   // Set the name of the form field element.
    name: 'CheckBox',
    // Specify whether the CheckBox field is in read-only or read-write mode.
    isReadOnly: false,
    // Set the visibility of the form field.
    visibility: 'visible',
    // Specify whether the field is mandatory or not.
    isRequired: false,
    // Specify whether to print the CheckBox field.
    isPrint: true,
    // Set the text to be displayed as a tooltip.
    tooltip: 'CheckBox',
    // Set the thickness of the CheckBox field. To hide the borders, set the value to 0 (zero).
    thickness: 4,
    // Specifies whether the check box is in checked state or not.
    isChecked: true,
    // Set the background color of the check box in hexadecimal string format.
    backgroundColor: 'white',
    // Set the border color of the check box field.
    borderColor: 'black',
    // Set the value of
};

```

![CheckBox field settings in the PDF Viewer](../../images/Checkbox.png)

### RadioButton field settings

Using the `updateFormField` method, the form fields can be updated programmatically.

The following example updates RadioButton field properties on a button click.

```html
<button id="updateProperties">Update Properties</button>

```

```ts

document.getElementById('updateProperties').addEventListener('click',function() {
    var formField = viewer.retrieveFormFields();
    viewer.formDesignerModule.updateFormField(formField[0], {
        name: 'RadioButton',
        isReadOnly: true,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'RadioButton',
        thickness: 4,
        isSelected: true,
        backgroundColor: 'white',
        borderColor: 'black',
        value: 'RadioButton'
    });
});


```

The following code shows how to configure default properties for a RadioButton field added from the Form Designer toolbar.

```ts

// Properties to customize the RadioButton field settings
viewer.radioButtonFieldSettings = {
    // Set the name of the form field element.
    name: 'RadioButton',
    // Specify whether the RadioButton field is in read-only or read-write mode.
    isReadOnly: false,
    // Set the visibility of the form field.
    visibility: 'visible',
    // Specify whether the field is mandatory or not.
    isRequired: false,
    // Specify whether to print the RadioButton field.
    isPrint: true,
    // Set the text to be displayed as a tooltip.
    tooltip: 'RadioButton',
    // Set the thickness of the RadioButton field. To hide the borders, set the value to 0 (zero).
    thickness: 4,
    // Specifies whether the radio button is in checked state or not.
    isSelected: true,
    // Set the background color of the radio button in hexadecimal string format.
    backgroundColor: 'white',
    // Set the border color of the radio button field.
    borderColor: 'black',
    // Set the value of the form field element.
    value: 'RadioButton'
};

```

![RadioButton field settings in the PDF Viewer](../../images/Radiobutton.png)

### ListBox field settings

Using the `updateFormField` method, the form fields can be updated programmatically.

The following example updates ListBox field properties on a button click.

```html
<button id="updateProperties">Update Properties</button>

```

```ts

document.getElementById('updateProperties').addEventListener('click',function() {
    var formField = viewer.retrieveFormFields();
    var customOptions  = [{itemName:'item1',itemValue:'item1'}, {itemName:'item2',itemValue:'item2'}, {itemName:'item3',itemValue:'item3'}]
    viewer.formDesignerModule.updateFormField(formField[0], {
      name: 'ListBox',
      isReadOnly: false,
      visibility: 'visible',
      isRequired: false,
      isPrint: true,
      tooltip: 'ListBox',
      thickness: 4,
      fontFamily: 'Courier',
      fontSize: 10,
      fontStyle: 'None',
      color: 'black',
      borderColor: 'black',
      backgroundColor: 'white',
      alignment: 'Left',
      options: customOptions,
    });
});


```

The following code shows how to configure default properties for a ListBox field added from the Form Designer toolbar.

```ts

// Properties to customize the Listbox field settings
viewer.listBoxFieldSettings = {
    var customOptions  = [{itemName:'item1',itemValue:'item1'}, {itemName:'item2',itemValue:'item2'}, {itemName:'item3',itemValue:'item3'}]
    // Set the name of the form field element.
    name: 'ListBox',
    // Specify whether the ListBox field is in read-only or read-write mode.
    isReadOnly: false,
    // Set the visibility of the form field.
    visibility: 'visible',
    // Specify whether the field is mandatory or not.
    isRequired: false,
    // Specify whether to print the ListBox field.
    isPrint: true,
    // Set the text to be displayed as a tooltip.
    tooltip: 'ListBox',
    // Set the thickness of the ListBox field. To hide the borders, set the value to 0 (zero).
    thickness: 4,
    // Set the value of the form field element.
    value:'ListBox',
    // Set the font family of the ListBox field.
    fontFamily: 'Courier',
    // Set the font size of the ListBox field.
    fontSize: 10,
    // Specify the font style
    fontStyle: 'None',
    // Set the  font color of the ListBox field.
    color: 'black',
    // Set the border color of the ListBox field.
    borderColor: 'black',
    // Set the background color of the ListBox field.
    backgroundColor: 'White',
    // Set the alignment of the text.
    alignment: 'Left',
    // Set the listbox items.
    options: customOptions
};

```

![ListBox field settings in the PDF Viewer](../../images/Listbox.png)

### DropDown field settings

Using the `updateFormField` method, the form fields can be updated programmatically.

The following example updates DropDown field properties on a button click.

```html
<button id="updateProperties">Update Properties</button>

```

```ts

document.getElementById('updateProperties').addEventListener('click',function() {
    var formField = viewer.retrieveFormFields();
    var customOptions  = [{itemName:'item1',itemValue:'item1'}, {itemName:'item2',itemValue:'item2'}, {itemName:'item3',itemValue:'item3'}]
    viewer.formDesignerModule.updateFormField(formField[0], {
        name: 'DropDown',
        isReadOnly: false,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'DropDown',
        thickness: 4,
        fontFamily: 'Courier',
        fontSize: 10,
        fontStyle: 'None',
        color: 'black',
        borderColor: 'black',
        backgroundColor: 'white',
        alignment: 'Left',
        options: customOptions,
    });
});


```

The following code shows how to configure default properties for a DropDown field added from the Form Designer toolbar.

```ts

// Properties to customize the Dropdown field settings
viewer.listBoxFieldSettings = {
    var customOptions = [{itemName:'item1',itemValue:'item1'}, {itemName:'item2',itemValue:'item2'}, {itemName:'item3',itemValue:'item3'}]
    // Set the name of the form field element.
    name: 'DropDown',
    // Specify whether the DropDown field is in read-only or read-write mode.
    isReadOnly: false,
    // Set the visibility of the form field.
    visibility: 'visible',
    // Specify whether the field is mandatory or not.
    isRequired: false,
    // Specify whether to print the DropDown field.
    isPrint: true,
    // Set the text to be displayed as a tooltip.
    tooltip: 'DropDown',
    // Set the thickness of the DropDown field. To hide the borders, set the value to 0 (zero).
    thickness: 4,
    // Set the value of the form field element.
    value:'DropDown',
    // Set the font family of the DropDown field.
    fontFamily: 'Courier',
    // Set the font size of the DropDown field.
    fontSize: 10,
    // Specify the font style
    fontStyle: 'None',
    // Set the  font color of the DropDown field.
    color: 'black',
    // Set the border color of the DropDown field.
    borderColor: 'black',
    // Set the background color of the DropDown field.
    backgroundColor: 'White',
    // Set the alignment of the text.
    alignment: 'Left',
    // Set the DropDown items.
    options: customOptions
};

```

![DropDown field settings in the PDF Viewer](../../images/Dropdown.png)
