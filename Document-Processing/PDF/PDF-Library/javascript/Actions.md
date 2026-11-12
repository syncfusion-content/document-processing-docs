---
title: PDF Actions in JavaScript PDF | Syncfusion
canonical_url: https://www.syncfusion.com/document-sdk/javascript-pdf-library
description: Create, read, modify, and chain PDF actions for documents, pages, annotations, bookmarks, and form fields using the Syncfusion JavaScript PDF Library.
platform: document-processing
control: PDF
documentation: UG
---

# Actions in javaScript PDF

PDF actions enable automated operations in response to user interactions and document events. The [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) supports creating, managing, and chaining a wide range of PDF actions.

## Adding an action to the PDF document

The `PdfDocument.actions` property provides access to document-level actions for opening, closing, printing, and saving.

- `afterOpen` - Triggered when the document is opened.
- `beforeClose` - Triggered before the document is closed.
- `beforePrint` - Triggered before the document is printed.
- `afterPrint` - Triggered after the document is printed.
- `beforeSave` - Triggered before the document is saved.
- `afterSave` - Triggered after the document is saved.

The following code example demonstrates how to set open and close actions on a new PDF document

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfActionDestination, PdfDocument, PdfJavaScriptAction, PdfNamedAction } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document: PdfDocument = new PdfDocument();
// Add pages to the document
document.addPage();
document.addPage();
// Navigate to the last page when the document is opened
document.actions.afterOpen = new PdfNamedAction(PdfActionDestination.LastPage);
// Display an alert message before the document closes
document.actions.beforeClose = new PdfJavaScriptAction('app.alert("The document is closing");');
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add pages to the document
document.addPage();
document.addPage();
// Navigate to the last page when the document is opened
document.actions.afterOpen = new ej.pdf.PdfNamedAction(ej.pdf.PdfActionDestination.LastPage);
// Display an alert message before the document closes
document.actions.beforeClose = new ej.pdf.PdfJavaScriptAction('app.alert("The document is closing");');
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### Adding an action to an existing PDF

You can also read, modify, or replace existing document-level actions in a loaded PDF document. Read the `afterOpen` or other event properties to inspect the current action, update properties, or assign a new action.

The following code example demonstrates how to read and modify the document open action in an existing PDF document:

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfAction, PdfActionDestination, PdfDocument, PdfNamedAction } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
const document: PdfDocument = new PdfDocument(data);
// Add or update the existing after open action
document.actions.afterOpen = new PdfNamedAction(PdfActionDestination.FirstPage);
// Save the modified document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Set or update the after open action
document.actions.afterOpen = new ej.pdf.PdfNamedAction(ej.pdf.PdfActionDestination.FirstPage);
// Save the modified document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Supported action types

The JavaScript PDF Library supports a wide variety of PDF action types conforming to the PDF specification (ISO 32000-1). Each action class derives from the base `PdfAction` class.

| Action type | Description |
|---|---|
| JavaScript (`PdfJavaScriptAction`) | Executes a client-side JavaScript script in the PDF viewer. |
| GoTo (`PdfGoToAction`) | Navigates to a specific destination or page within the current document. |
| Remote GoTo (`PdfRemoteGoToAction`) | Navigates to a destination located in an external PDF file. |
| Embedded GoTo (`PdfEmbeddedGoToAction`) | Navigates to a destination within an embedded file or parent/child document. |
| GoTo DPart (`PdfGoToDPartAction`) | Navigates to a document part (DPart) destination. |
| GoTo 3D view (`PdfGoTo3DViewAction`) | Activates a specified view in a 3D annotation. |
| Named (`PdfNamedAction`) | Executes a predefined viewer navigation command, such as FirstPage, LastPage, NextPage, or PrevPage. |
| URI (`PdfUriAction`) | Resolves and opens a web URL or external hyperlink. |
| Launch (`PdfLaunchAction`) | Launches an external application or opens an external file. |
| Submit form (`PdfSubmitFormAction`) | Submits PDF interactive form data to a specified URL destination. |
| Reset form (`PdfResetFormAction`) | Resets interactive form fields to their default values. |
| Import data (`PdfImportDataAction`) | Imports form-field data into the document from an external data file. |
| Sound (`PdfSoundAction`) | Plays an audio clip or sound stream. |
| Rich-media execute (`PdfRichMediaExecuteAction`) | Executes a rich-media command on a rich-media annotation. |
| Set OCG state (`PdfSetOCGStateAction`) | Controls the visibility states of optional content groups or layers using On, Off, and Toggle states. |
| Hide (`PdfHideAction`) | Shows or hides one or more interactive form fields or annotations. |

> **Note:** Action chaining: We can chain multiple actions to execute in sequence using the `next` property.

### JavaScript action

The `PdfJavaScriptAction` executes JavaScript code embedded in the PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfButtonField, PdfDocument, PdfJavaScriptAction, PdfPage } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document: PdfDocument = new PdfDocument();
// Add a page to the document
const page: PdfPage = document.addPage();
// Create a JavaScript action
const action: PdfJavaScriptAction = new PdfJavaScriptAction('app.alert("Button clicked");');
// Create a button and assign the action to mouseUp
const button: PdfButtonField = new PdfButtonField(page, 'btnAlert', { x: 20, y: 20, width: 120, height: 30 });
button.text = 'Click Me';
button.actions.mouseUp = action;
document.form.add(button);
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
// Create a JavaScript action
var action = new ej.pdf.PdfJavaScriptAction('app.alert("Button clicked");');
// Create a button and assign the action to mouseUp
var button = new ej.pdf.PdfButtonField(page, 'btnAlert', { x: 20, y: 20, width: 120, height: 30 });
button.text = 'Click Me';
button.actions.mouseUp = action;
document.form.add(button);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

For more PDF JavaScript code examples, refer to the [Adobe JavaScript Developer Guide](https://developer.adobe.com/acrobat-pdfl-sdk).

### GoTo action

The `PdfGoToAction` navigates to a specified page in the current document. You can also specify a location on the destination page.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfButtonField, PdfDestination, PdfDestinationMode, PdfDocument, PdfGoToAction, PdfPage } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document: PdfDocument = new PdfDocument();
// Add two pages
const page1: PdfPage = document.addPage();
const page2: PdfPage = document.addPage();
// Create a destination pointing to page 2 with specific coordinates and zoom
const destination: PdfDestination = new PdfDestination(page2, { x: 0, y: 100 }, { zoom: 1.5, mode: PdfDestinationMode.location });
const action: PdfGoToAction = new PdfGoToAction(destination);
// Assign the action to a button on page 1
const button: PdfButtonField = new PdfButtonField(page1, 'btnGoTo', { x: 20, y: 20, width: 120, height: 30 });
button.text = 'Go to Page 2';
button.actions.mouseUp = action;
document.form.add(button);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add two pages
var page1 = document.addPage();
var page2 = document.addPage();
// Create a destination pointing to page 2 with specific coordinates and zoom
var destination = new ej.pdf.PdfDestination(page2, { x: 0, y: 100 }, { zoom: 1.5, mode: ej.pdf.PdfDestinationMode.location });
var action = new ej.pdf.PdfGoToAction(destination);
// Assign the action to a button on page 1
var button = new ej.pdf.PdfButtonField(page1, 'btnGoTo', { x: 20, y: 20, width: 120, height: 30 });
button.text = 'Go to Page 2';
button.actions.mouseUp = action;
document.form.add(button);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### Remote GoTo action

The `PdfRemoteGoToAction` navigates to a specified page in an external PDF document. You can also configure the destination page view.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfButtonField, PdfDestinationMode, PdfDocument, PdfPage, PdfRemoteDestination, PdfRemoteGoToAction } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document: PdfDocument = new PdfDocument();
// Add a page
const page: PdfPage = document.addPage();
// Configure the remote destination
const remoteDestination: PdfRemoteDestination = new PdfRemoteDestination();
remoteDestination.pageNumber = 1;
remoteDestination.mode = PdfDestinationMode.fitToPage;
// Create the remote GoTo action
const action: PdfRemoteGoToAction = new PdfRemoteGoToAction('target.pdf', remoteDestination);
action.isNewWindow = true;
// Assign the action to a button
const button: PdfButtonField = new PdfButtonField(page, 'btnRemote', { x: 20, y: 20, width: 140, height: 30 });
button.text = 'Open Remote Document';
button.actions.mouseUp = action;
document.form.add(button);
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
// Configure the remote destination
var remoteDestination = new ej.pdf.PdfRemoteDestination();
remoteDestination.pageNumber = 1;
remoteDestination.mode = ej.pdf.PdfDestinationMode.fitToPage;
// Create the remote GoTo action
var action = new ej.pdf.PdfRemoteGoToAction('target.pdf', remoteDestination);
action.isNewWindow = true;
// Assign the action to a button
var button = new ej.pdf.PdfButtonField(page, 'btnRemote', { x: 20, y: 20, width: 140, height: 30 });
button.text = 'Open Remote Document';
button.actions.mouseUp = action;
document.form.add(button);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### Embedded GoTo action

The `PdfEmbeddedGoToAction` navigates to a specified page in an embedded PDF file. You can also specify the destination page view and target document relationship.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfButtonField, PdfDestinationMode, PdfDocument, PdfEmbeddedGoToAction, PdfFileSpecification, PdfPage, PdfRemoteDestination, PdfTargetDictionary, PdfTargetRelation } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document: PdfDocument = new PdfDocument();
// Add a page
const page: PdfPage = document.addPage();
// Configure destination within the embedded PDF
const destination: PdfRemoteDestination = new PdfRemoteDestination();
destination.pageNumber = 0;
destination.mode = PdfDestinationMode.fitToPage;
// Configure the file specification and target dictionary
const fileSpec: PdfFileSpecification = new PdfFileSpecification('embedded.pdf');
const target: PdfTargetDictionary = new PdfTargetDictionary(PdfTargetRelation.Child, 'embedded.pdf');
// Create the embedded GoTo action
const action: PdfEmbeddedGoToAction = new PdfEmbeddedGoToAction(destination, fileSpec, target);
// Assign to a button
const button: PdfButtonField = new PdfButtonField(page, 'btnEmbedded', { x: 20, y: 20, width: 140, height: 30 });
button.text = 'Go to Embedded PDF';
button.actions.mouseUp = action;
document.form.add(button);
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
// Configure destination within the embedded PDF
var destination = new ej.pdf.PdfRemoteDestination();
destination.pageNumber = 0;
destination.mode = ej.pdf.PdfDestinationMode.fitToPage;
// Configure the file specification and target dictionary
var fileSpec = new ej.pdf.PdfFileSpecification('embedded.pdf');
var target = new ej.pdf.PdfTargetDictionary(ej.pdf.PdfTargetRelation.Child, 'embedded.pdf');
// Create the embedded GoTo action
var action = new ej.pdf.PdfEmbeddedGoToAction(destination, fileSpec, target);
// Assign to a button
var button = new ej.pdf.PdfButtonField(page, 'btnEmbedded', { x: 20, y: 20, width: 140, height: 30 });
button.text = 'Go to Embedded PDF';
button.actions.mouseUp = action;
document.form.add(button);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### GoTo DPart action

The `PdfGoToDPartAction` navigates to a specified document part (DPart) destination within a PDF document. You can also specify the target document part for navigation.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfButtonField, PdfDestination, PdfDocument, PdfGoToDPartAction, PdfPage } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document: PdfDocument = new PdfDocument();
// Add a page
const page: PdfPage = document.addPage();
// Create a destination and DPart action
const destination: PdfDestination = new PdfDestination(page);
const action: PdfGoToDPartAction = new PdfGoToDPartAction(destination);
// Assign to a button
const button: PdfButtonField = new PdfButtonField(page, 'btnDPart', { x: 20, y: 20, width: 120, height: 30 });
button.text = 'Go to DPart';
button.actions.mouseUp = action;
document.form.add(button);
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
// Create a destination and DPart action
var destination = new ej.pdf.PdfDestination(page);
var action = new ej.pdf.PdfGoToDPartAction(destination);
// Assign to a button
var button = new ej.pdf.PdfButtonField(page, 'btnDPart', { x: 20, y: 20, width: 120, height: 30 });
button.text = 'Go to DPart';
button.actions.mouseUp = action;
document.form.add(button);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### GoTo 3D view action

The `PdfGoTo3DViewAction` switches to a specified view of a 3D annotation. You can also navigate using a named view or view index.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Pdf3DAnnotation, PdfDocument, PdfGoTo3DViewAction, PdfPage } from '@syncfusion/ej2-pdf';

// Load an existing PDF document containing a 3D annotation
const document: PdfDocument = new PdfDocument(data);
const page: PdfPage = document.getPage(0);
const annotation: Pdf3DAnnotation = page.annotations.at(0) as Pdf3DAnnotation;

// Create an action to activate the first view of the 3D annotation
const action: PdfGoTo3DViewAction = new PdfGoTo3DViewAction(annotation, 0);
page.actions.open = action;

// Save the document
document.save('output.pdf');

// Destroy the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document containing a 3D annotation
var document = new ej.pdf.PdfDocument(data);
var page = document.getPage(0);
var annotation = page.annotations.at(0);

// Create an action to activate the first view of the 3D annotation
var action = new ej.pdf.PdfGoTo3DViewAction(annotation, 0);
page.actions.open = action;

// Save the document
document.save('output.pdf');

// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### Named action

The `PdfNamedAction` performs predefined PDF navigation operations. You can also navigate to the first, last, next, or previous page.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfActionDestination, PdfButtonField, PdfDocument, PdfNamedAction, PdfPage } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document: PdfDocument = new PdfDocument();
// Add pages
const page1: PdfPage = document.addPage();
document.addPage();
// Create a named action that jumps to the last page
const action: PdfNamedAction = new PdfNamedAction(PdfActionDestination.LastPage);
// Assign the action to a button
const button: PdfButtonField = new PdfButtonField(page1, 'btnLast', { x: 20, y: 20, width: 120, height: 30 });
button.text = 'Last Page';
button.actions.mouseUp = action;
document.form.add(button);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add pages
var page1 = document.addPage();
document.addPage();
// Create a named action that jumps to the last page
var action = new ej.pdf.PdfNamedAction(ej.pdf.PdfActionDestination.LastPage);
// Assign the action to a button
var button = new ej.pdf.PdfButtonField(page1, 'btnLast', { x: 20, y: 20, width: 120, height: 30 });
button.text = 'Last Page';
button.actions.mouseUp = action;
document.form.add(button);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### URI action

The `PdfUriAction` opens a specified web address or hyperlink. You can also navigate to external online resources.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfButtonField, PdfDocument, PdfPage, PdfUriAction } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document: PdfDocument = new PdfDocument();
// Add a page
const page: PdfPage = document.addPage();
// Create a URI action
const action: PdfUriAction = new PdfUriAction('https://www.syncfusion.com');
// Assign to a button
const button: PdfButtonField = new PdfButtonField(page, 'btnWeb', { x: 20, y: 20, width: 140, height: 30 });
button.text = 'Visit Website';
button.actions.mouseUp = action;
document.form.add(button);
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
// Create a URI action
var action = new ej.pdf.PdfUriAction('https://www.syncfusion.com');
// Assign to a button
var button = new ej.pdf.PdfButtonField(page, 'btnWeb', { x: 20, y: 20, width: 140, height: 30 });
button.text = 'Visit Website';
button.actions.mouseUp = action;
document.form.add(button);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### Launch action

The `PdfLaunchAction` opens an external file or launches an application. You can also specify launch parameters and target files.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfButtonField, PdfDocument, PdfFileSpecification, PdfLaunchAction, PdfPage, PdfWindowsLaunchParameters } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document: PdfDocument = new PdfDocument();
// Add a page
const page: PdfPage = document.addPage();
// Specify the file to launch
const fileSpec: PdfFileSpecification = new PdfFileSpecification('sample.txt');
fileSpec.description = 'Text document';
// Configure Windows-specific launch parameters
const winParams: PdfWindowsLaunchParameters = new PdfWindowsLaunchParameters();
winParams.fileName = 'notepad.exe';
winParams.operation = 'open';
winParams.directory = 'C:\\';
// Create the launch action
const action: PdfLaunchAction = new PdfLaunchAction(fileSpec, winParams);
// Assign to a button
const button: PdfButtonField = new PdfButtonField(page, 'btnLaunch', { x: 20, y: 20, width: 120, height: 30 });
button.text = 'Open File';
button.actions.mouseUp = action;
document.form.add(button);
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
// Specify the file to launch
var fileSpec = new ej.pdf.PdfFileSpecification('sample.txt');
fileSpec.description = 'Text document';
// Configure Windows-specific launch parameters
var winParams = new ej.pdf.PdfWindowsLaunchParameters();
winParams.fileName = 'notepad.exe';
winParams.operation = 'open';
winParams.directory = 'C:\\';
// Create the launch action
var action = new ej.pdf.PdfLaunchAction(fileSpec, winParams);
// Assign to a button
var button = new ej.pdf.PdfButtonField(page, 'btnLaunch', { x: 20, y: 20, width: 120, height: 30 });
button.text = 'Open File';
button.actions.mouseUp = action;
document.form.add(button);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### Submit form action

The `PdfSubmitFormAction` submits interactive form data to a specified URL. You can also configure submission formats, methods, and target fields.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { HttpMethod, PdfButtonField, PdfDocument, PdfPage, PdfSubmitDataFormat, PdfSubmitFormAction, PdfTextBoxField } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document: PdfDocument = new PdfDocument();
// Add a page
const page: PdfPage = document.addPage();
// Add a form text box
const textBox: PdfTextBoxField = new PdfTextBoxField(page, 'Username', { x: 20, y: 20, width: 150, height: 24 });
document.form.add(textBox);
// Create a submit form action targeting an endpoint
const action: PdfSubmitFormAction = new PdfSubmitFormAction('https://example.com/submit');
action.httpMethod = HttpMethod.Post;
action.dataFormat = PdfSubmitDataFormat.Html;
// Select the fields the action applies to
action.fields = [textBox];
// Assign action to a submit button
const button: PdfButtonField = new PdfButtonField(page, 'btnSubmit', { x: 20, y: 60, width: 100, height: 30 });
button.text = 'Submit';
button.actions.mouseUp = action;
document.form.add(button);
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
// Add a form text box
var textBox = new ej.pdf.PdfTextBoxField(page, 'Username', { x: 20, y: 20, width: 150, height: 24 });
document.form.add(textBox);
// Create a submit form action targeting an endpoint
var action = new ej.pdf.PdfSubmitFormAction('https://example.com/submit');
action.httpMethod = ej.pdf.HttpMethod.Post;
action.dataFormat = ej.pdf.PdfSubmitDataFormat.Html;
// Select the fields the action applies to
action.fields = [textBox];
// Assign action to a submit button
var button = new ej.pdf.PdfButtonField(page, 'btnSubmit', { x: 20, y: 60, width: 100, height: 30 });
button.text = 'Submit';
button.actions.mouseUp = action;
document.form.add(button);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### Reset form action

The `PdfResetFormAction` restores form fields to their default values. You can also reset specific fields selectively.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfButtonField, PdfDocument, PdfPage, PdfResetFormAction, PdfTextBoxField } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document: PdfDocument = new PdfDocument();
// Add a page
const page: PdfPage = document.addPage();
// Add a text box
const textBox: PdfTextBoxField = new PdfTextBoxField(page, 'FirstName', { x: 20, y: 20, width: 150, height: 24 });
textBox.text = 'John';
document.form.add(textBox);
// Create a reset action for the text box
const action: PdfResetFormAction = new PdfResetFormAction();
action.fields = [textBox];
// Assign action to a reset button
const button: PdfButtonField = new PdfButtonField(page, 'btnReset', { x: 20, y: 60, width: 100, height: 30 });
button.text = 'Reset';
button.actions.mouseUp = action;
document.form.add(button);
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
// Add a text box
var textBox = new ej.pdf.PdfTextBoxField(page, 'FirstName', { x: 20, y: 20, width: 150, height: 24 });
textBox.text = 'John';
document.form.add(textBox);
// Create a reset action for the text box
var action = new ej.pdf.PdfResetFormAction();
action.fields = [textBox];
// Assign action to a reset button
var button = new ej.pdf.PdfButtonField(page, 'btnReset', { x: 20, y: 60, width: 100, height: 30 });
button.text = 'Reset';
button.actions.mouseUp = action;
document.form.add(button);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### Import data action

The `PdfImportDataAction` imports form data from an external data file. You can also populate interactive form fields with imported values.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfButtonField, PdfDocument, PdfFileSpecification, PdfImportDataAction, PdfPage, PdfTextBoxField } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document: PdfDocument = new PdfDocument();
// Add a page
const page: PdfPage = document.addPage();
// Add a text box
const textBox: PdfTextBoxField = new PdfTextBoxField(page, 'AccountNo', { x: 20, y: 20, width: 150, height: 24 });
document.form.add(textBox);
// Create an import data action referencing the data file
const fileSpec: PdfFileSpecification = new PdfFileSpecification('data.fdf');
const action: PdfImportDataAction = new PdfImportDataAction(fileSpec);
// Assign action to a button
const button: PdfButtonField = new PdfButtonField(page, 'btnImport', { x: 20, y: 60, width: 100, height: 30 });
button.text = 'Import Data';
button.actions.mouseUp = action;
document.form.add(button);
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
// Add a text box
var textBox = new ej.pdf.PdfTextBoxField(page, 'AccountNo', { x: 20, y: 20, width: 150, height: 24 });
document.form.add(textBox);
// Create an import data action referencing the data file
var fileSpec = new ej.pdf.PdfFileSpecification('data.fdf');
var action = new ej.pdf.PdfImportDataAction(fileSpec);
// Assign action to a button
var button = new ej.pdf.PdfButtonField(page, 'btnImport', { x: 20, y: 60, width: 100, height: 30 });
button.text = 'Import Data';
button.actions.mouseUp = action;
document.form.add(button);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### Sound action

The `PdfSoundAction` plays an embedded sound when triggered. You can also configure playback properties and audio settings.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfButtonField, PdfDocument, PdfPage, PdfSound, PdfSoundAction, PdfSoundChannels, PdfSoundEncoding } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document: PdfDocument = new PdfDocument();
// Add a page
const page: PdfPage = document.addPage();
// Prepare sound data and configure properties
const soundData: Uint8Array = new Uint8Array([0, 32, 64, 96, 127, 96, 64, 32]);
const sound: PdfSound = new PdfSound(soundData);
sound.rate = 8000;
sound.bits = 8;
sound.channels = PdfSoundChannels.Mono;
sound.encoding = PdfSoundEncoding.Raw;
// Create the sound action
const action: PdfSoundAction = new PdfSoundAction(sound);
action.volume = 1;
// Assign action to a button
const button: PdfButtonField = new PdfButtonField(page, 'btnSound', { x: 20, y: 20, width: 120, height: 30 });
button.text = 'Play Sound';
button.actions.mouseUp = action;
document.form.add(button);
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
// Prepare sound data and configure properties
var soundData = new Uint8Array([0, 32, 64, 96, 127, 96, 64, 32]);
var sound = new ej.pdf.PdfSound(soundData);
sound.rate = 8000;
sound.bits = 8;
sound.channels = ej.pdf.PdfSoundChannels.Mono;
sound.encoding = ej.pdf.PdfSoundEncoding.Raw;
// Create the sound action
var action = new ej.pdf.PdfSoundAction(sound);
action.volume = 1;
// Assign action to a button
var button = new ej.pdf.PdfButtonField(page, 'btnSound', { x: 20, y: 20, width: 120, height: 30 });
button.text = 'Play Sound';
button.actions.mouseUp = action;
document.form.add(button);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### Rich-media execute action

The `PdfRichMediaExecuteAction` executes commands on a rich-media annotation. You can also control embedded multimedia content such as video or audio.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfAnnotation, PdfDocument, PdfPage, PdfRichMediaAnnotation, PdfRichMediaCommand, PdfRichMediaExecuteAction } from '@syncfusion/ej2-pdf';

// Load an existing PDF document with a rich-media annotation
const document: PdfDocument = new PdfDocument(data);
const page: PdfPage = document.getPage(0);
if (page.annotations.count > 0) {
    const annotation: PdfAnnotation = page.annotations.at(0);
    if (annotation instanceof PdfRichMediaAnnotation) {
        // Configure rich media command
        const command: PdfRichMediaCommand = new PdfRichMediaCommand('play');
        const action: PdfRichMediaExecuteAction = new PdfRichMediaExecuteAction(annotation, command);
        page.actions.open = action;
    }
}
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document with a rich-media annotation
var document = new ej.pdf.PdfDocument(data);
var page = document.getPage(0);
if (page.annotations.count > 0) {
    var annotation = page.annotations.at(0);
    if (annotation instanceof ej.pdf.PdfRichMediaAnnotation) {
        // Configure rich media command
        var command = new ej.pdf.PdfRichMediaCommand('play');
        var action = new ej.pdf.PdfRichMediaExecuteAction(annotation, command);
        page.actions.open = action;
    }
}
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### Set optional-content-group state action

The `PdfSetOCGStateAction` changes the visibility state of PDF layers. You can also show, hide, or toggle optional content groups.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfButtonField, PdfDocument, PdfLayer, PdfLayerState, PdfLayerStateOperation, PdfPage, PdfSetOCGStateAction } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document: PdfDocument = new PdfDocument();
// Add a page
const page: PdfPage = document.addPage();
// Add two layers
const layerA: PdfLayer = document.layers.add('Layer A');
const layerB: PdfLayer = document.layers.add('Layer B');
// Define state operations: hide Layer A and toggle Layer B
const states: PdfLayerState[] = [
    new PdfLayerState(PdfLayerStateOperation.Off, layerA),
    new PdfLayerState(PdfLayerStateOperation.Toggle, layerB)
];
const action: PdfSetOCGStateAction = new PdfSetOCGStateAction(states, false);
// Assign action to a button
const button: PdfButtonField = new PdfButtonField(page, 'btnLayers', { x: 20, y: 20, width: 120, height: 30 });
button.text = 'Toggle Layers';
button.actions.mouseUp = action;
document.form.add(button);
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
// Add two layers
var layerA = document.layers.add('Layer A');
var layerB = document.layers.add('Layer B');
// Define state operations: hide Layer A and toggle Layer B
var states = [
    new ej.pdf.PdfLayerState(ej.pdf.PdfLayerStateOperation.Off, layerA),
    new ej.pdf.PdfLayerState(ej.pdf.PdfLayerStateOperation.Toggle, layerB)
];
var action = new ej.pdf.PdfSetOCGStateAction(states, false);
// Assign action to a button
var button = new ej.pdf.PdfButtonField(page, 'btnLayers', { x: 20, y: 20, width: 120, height: 30 });
button.text = 'Toggle Layers';
button.actions.mouseUp = action;
document.form.add(button);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### Hide action

The `PdfHideAction` shows or hides specified form fields or annotations. You can also control the visibility of multiple targets.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfButtonField, PdfDocument, PdfHideAction, PdfPage, PdfTextBoxField } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document: PdfDocument = new PdfDocument();
// Add a page to the document
const page: PdfPage = document.addPage();
// Create a text box field to hide
const textBox: PdfTextBoxField = new PdfTextBoxField(page, 'CustomerName', { x: 20, y: 20, width: 150, height: 30 });
textBox.text = 'John Doe';
document.form.add(textBox);
// Create a hide action targeting the text box field
const action: PdfHideAction = new PdfHideAction(true, [
    { fieldName: 'CustomerName' }
]);
// Create a button to trigger the hide action
const button: PdfButtonField = new PdfButtonField(page, 'btnToggle', { x: 20, y: 70, width: 120, height: 30 });
button.text = 'Hide Field';
button.actions.mouseUp = action;
document.form.add(button);
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
// Create a text box field to hide
var textBox = new ej.pdf.PdfTextBoxField(page, 'CustomerName', { x: 20, y: 20, width: 150, height: 30 });
textBox.text = 'John Doe';
document.form.add(textBox);
// Create a hide action targeting the text box field
var action = new ej.pdf.PdfHideAction(true, [
    { fieldName: 'CustomerName' }
]);
// Create a button to trigger the hide action
var button = new ej.pdf.PdfButtonField(page, 'btnToggle', { x: 20, y: 70, width: 120, height: 30 });
button.text = 'Hide Field';
button.actions.mouseUp = action;
document.form.add(button);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Supported Targets and Events

PDF actions can be associated with various document elements and interactive objects. Each supported target exposes an actions or action property that provides access to the supported action events.


### Adding an action to the form field

The `PdfField.actions` property provides access to form field events.

- `mouseEnter` - Triggered when the pointer enters the field area.
- `mouseLeave` - Triggered when the pointer leaves the field area.
- `mouseDown` - Triggered when a mouse button is pressed on the field.
- `mouseUp` - Triggered when a mouse button is released on the field.
- `gotFocus` - Triggered when the field receives focus.
- `lostFocus` - Triggered when the field loses focus.
- `keyPressed` - Triggered when the user enters text into the field.
- `format` - Triggered before the field value is formatted for display.
- `validate` - Triggered to validate the field value after it changes.
- `calculate` - Triggered to calculate the field value based on other fields.

The following example demonstrates how to add an action to a text box field

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfJavaScriptAction, PdfPage, PdfTextBoxField } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document: PdfDocument = new PdfDocument();
// Add a page
const page: PdfPage = document.addPage();
// Create a text box field
const field: PdfTextBoxField = new PdfTextBoxField(page, 'Quantity', { x: 20, y: 20, width: 120, height: 22 });
// Validate that the entered value is positive
field.actions.validate = new PdfJavaScriptAction('if (event.value < 0) { app.alert("Enter a positive value"); event.rc = false; }');
// Alert instruction when the field receives focus
field.actions.gotFocus = new PdfJavaScriptAction('app.alert("Enter the quantity");');
document.form.add(field);
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
// Create a text box field
var field = new ej.pdf.PdfTextBoxField(page, 'Quantity', { x: 20, y: 20, width: 120, height: 22 });
// Validate that the entered value is positive
field.actions.validate = new ej.pdf.PdfJavaScriptAction('if (event.value < 0) { app.alert("Enter a positive value"); event.rc = false; }');
// Alert instruction when the field receives focus
field.actions.gotFocus = new ej.pdf.PdfJavaScriptAction('app.alert("Enter the quantity");');
document.form.add(field);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### Adding an action to the annotation

The `PdfAnnotation.actions` property provides access to annotation events. You can assign navigation, URI, JavaScript, or other PDF actions to these events.

- `mouseEnter` - Triggered when the pointer enters the annotation area.
- `mouseLeave` - Triggered when the pointer leaves the annotation area.
- `mouseDown` - Triggered when a mouse button is pressed on the annotation.
- `mouseUp` - Triggered when a mouse button is released on the annotation.
- `gotFocus` - Triggered when the annotation receives focus.
- `lostFocus` - Triggered when the annotation loses focus.

The following example demonstrates how to add hover and click actions to a rectangle annotation.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfJavaScriptAction, PdfPage, PdfRectangleAnnotation, PdfUriAction } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document: PdfDocument = new PdfDocument();
// Add a page
const page: PdfPage = document.addPage();
// Create a rectangle annotation
const annotation: PdfRectangleAnnotation = new PdfRectangleAnnotation({ x: 20, y: 20, width: 150, height: 60 });
// Display an alert on mouse enter
annotation.actions.mouseEnter = new PdfJavaScriptAction('app.alert("Pointer entered");');
// Navigate to website on mouse up
annotation.actions.mouseUp = new PdfUriAction('https://www.syncfusion.com');
page.annotations.add(annotation);
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
// Create a rectangle annotation
var annotation = new ej.pdf.PdfRectangleAnnotation({ x: 20, y: 20, width: 150, height: 60 });
// Display an alert on mouse enter
annotation.actions.mouseEnter = new ej.pdf.PdfJavaScriptAction('app.alert("Pointer entered");');
// Navigate to website on mouse up
annotation.actions.mouseUp = new ej.pdf.PdfUriAction('https://www.syncfusion.com');
page.annotations.add(annotation);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### Adding an action to the PDF page

The `PdfPage.actions` property provides access to page events.

- `open` - Triggered when the page is displayed.
- `close` - Triggered when the user leaves or closes the page view.

The following example demonstrates how to add an open action to a page in an existing PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfJavaScriptAction, PdfPage } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
const document: PdfDocument = new PdfDocument(data);
// Access the first page and add JavaScript action to the page open event.
const page: PdfPage = document.getPage(0);
page.actions.open = new PdfJavaScriptAction('app.alert("Page opened");');
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Configure an action for each page when displayed
var page = document.getPage(0);
page.actions.open = new ej.pdf.PdfJavaScriptAction('app.alert("Page opened");');
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### Adding an action to the PDF bookmark

The `PdfBookmark.action` property provides access to the action associated with a bookmark. You can use this property to get or set the action that is performed when the bookmark is selected.

The following example demonstrates how to add a named navigation action to a bookmark.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfActionDestination, PdfBookmark, PdfDocument, PdfNamedAction } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document: PdfDocument = new PdfDocument();
// Add two pages
document.addPage();
document.addPage();
// Add a bookmark to the document
const bookmark: PdfBookmark = document.bookmarks.add('Go to Last Page');
// Assign a named action to the bookmark
bookmark.action = new PdfNamedAction(PdfActionDestination.LastPage);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add two pages
document.addPage();
document.addPage();
// Add a bookmark to the document
var bookmark = document.bookmarks.add('Go to Last Page');
// Assign a named action to the bookmark
bookmark.action = new ej.pdf.PdfNamedAction(ej.pdf.PdfActionDestination.LastPage);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/document-library/javascript/#/tailwind3/pdf/default)
