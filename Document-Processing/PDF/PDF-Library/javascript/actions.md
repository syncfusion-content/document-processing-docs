---
title: PDF Actions in JavaScript PDF | Syncfusion
canonical_url: https://www.syncfusion.com/document-sdk/javascript-pdf-library
description: Create, read, modify, and chain PDF actions for documents, pages, annotations, bookmarks, and form fields using the Syncfusion JavaScript PDF Library.
platform: document-processing
control: PDF
documentation: UG
---

# Actions in JavaScript PDF

A PDF action defines a predefined operation performed by a PDF reader or viewer when triggered by a document event, page transition, annotation interaction, outline selection, form-field event, or user action. The [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) provides comprehensive support to create, configure, read, modify, and chain various PDF actions.

## Adding an action to the PDF document

Document-level actions are associated with lifecycle events of the PDF document. You can configure an action to execute when the document is opened, before it closes, before or after printing, and before or after saving.

Document actions are accessed through the `actions` property of the `PdfDocument` instance, which returns a `PdfDocumentActions` object:

- `afterOpen`: Action executed when the document is opened (supports any `PdfAction`).
- `beforeClose`: JavaScript action executed before the document is closed (`PdfJavaScriptAction`).
- `beforePrint`: JavaScript action executed before the document is printed (`PdfJavaScriptAction`).
- `afterPrint`: JavaScript action executed after the document is printed (`PdfJavaScriptAction`).
- `beforeSave`: JavaScript action executed before the document is saved (`PdfJavaScriptAction`).
- `afterSave`: JavaScript action executed after the document is saved (`PdfJavaScriptAction`).

The following code example demonstrates how to set open and close actions on a new PDF document:

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

### Content for adding action to an existing PDF

You can also read, modify, or replace existing document-level actions in a loaded PDF document. Read the `afterOpen` or other event properties to inspect the current action, update properties, or assign a new action.

The following code example demonstrates how to read and modify the document open action in an existing PDF document:

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfAction, PdfActionDestination, PdfDocument, PdfNamedAction } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
const document: PdfDocument = new PdfDocument(data);
// Get the existing open action
const openAction: PdfAction = document.actions.afterOpen;
if (openAction instanceof PdfNamedAction) {
    // Change navigation to the first page instead
    document.actions.afterOpen = new PdfNamedAction(PdfActionDestination.FirstPage);
}
// Save the modified document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Get the existing open action
var openAction = document.actions.afterOpen;
if (openAction instanceof ej.pdf.PdfNamedAction) {
    // Change navigation to the first page instead
    document.actions.afterOpen = new ej.pdf.PdfNamedAction(ej.pdf.PdfActionDestination.FirstPage);
}
// Save the modified document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Supported action types

The JavaScript PDF Library supports a wide variety of PDF action types conforming to the PDF specification (ISO 32000-1). Each action class derives from the base `PdfAction` class.

| Action type | Class name | Constructor | Description |
|---|---|---|---|
| JavaScript | `PdfJavaScriptAction` | `(script: string)` | Executes a client-side JavaScript script in the PDF viewer. |
| GoTo | `PdfGoToAction` | `(destination: PdfDestination \| PdfPage)` | Navigates to a specific destination or page within the current document. |
| Remote GoTo | `PdfRemoteGoToAction` | `(filePath?: string, remoteDestination?: PdfRemoteDestination)` | Navigates to a destination located in an external PDF file. |
| Embedded GoTo | `PdfEmbeddedGoToAction` | `(destination?: PdfRemoteDestination, fileSpecification?: PdfFileSpecification, target?: PdfTargetDictionary)` | Navigates to a destination within an embedded file or parent/child document. |
| GoTo DPart | `PdfGoToDPartAction` | `(destination?: PdfDestination)` | Navigates to a document part (DPart) destination. |
| GoTo 3D view | `PdfGoTo3DViewAction` | `(annotation?: Pdf3DAnnotation, view?: string \| number)` | Activates a specified view in a 3D annotation. |
| Named | `PdfNamedAction` | `(destination?: PdfActionDestination)` | Executes a predefined viewer navigation command (FirstPage, LastPage, NextPage, PrevPage). |
| URI | `PdfUriAction` | `(uri?: string)` | Resolves and opens a web URL or external hyperlink. |
| Launch | `PdfLaunchAction` | `(fileSpecification?: PdfFileSpecification, isNewWindow?: boolean \| PdfWindowsLaunchParameters)` | Launches an external application or opens an external file. |
| Submit form | `PdfSubmitFormAction` | `(url?: string)` | Submits PDF interactive form data to a specified URL destination. |
| Reset form | `PdfResetFormAction` | `()` | Resets interactive form fields to their default values. |
| Import data | `PdfImportDataAction` | `(fileSpecification?: PdfFileSpecification)` | Imports form-field data into the document from an external data file. |
| Sound | `PdfSoundAction` | `(sound?: PdfSound)` | Plays an audio clip or sound stream. |
| Rich-media execute | `PdfRichMediaExecuteAction` | `(annotation?: PdfRichMediaAnnotation, command?: PdfRichMediaCommand)` | Executes a rich-media command on a rich-media annotation. |
| Set OCG state | `PdfSetOCGStateAction` | `(state?: PdfLayerState[], preserveRadioButtons?: boolean)` | Controls the visibility states (On, Off, Toggle) of optional content groups (layers). |
| Action chaining | `PdfAction` | `next: PdfAction` | Chains multiple actions to execute in sequence using the `next` property. |

### JavaScript action

The `PdfJavaScriptAction` class allows you to run custom JavaScript within compatible PDF viewers. Pass the JavaScript code string to the constructor, or configure it using the `script` property.

N> PDF viewer JavaScript support varies across viewer applications and platforms. Many browser-embedded PDF viewers restrict or disable JavaScript execution for security.

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

### GoTo action

The `PdfGoToAction` class navigates to a destination within the current PDF document. The constructor accepts a `PdfDestination` or a `PdfPage` instance. You can customize the destination zoom, view mode, and target coordinates.

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

The `PdfRemoteGoToAction` class navigates to a destination in another, external PDF document. It requires the path to the target PDF file (`filePath`) and a `PdfRemoteDestination` that defines the remote page index and view mode.

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

The `PdfEmbeddedGoToAction` class navigates to a destination inside an embedded PDF file or between parent and child documents. It combines a `PdfRemoteDestination`, a `PdfFileSpecification`, and an optional `PdfTargetDictionary`.

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

The `PdfGoToDPartAction` class navigates to a document part (DPart) destination within documents supporting PDF document parts.

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

The `PdfGoTo3DViewAction` class switches the active view of an existing 3D annotation to a specified named or index-based view.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Pdf3DAnnotation, PdfAnnotation, PdfDocument, PdfGoTo3DViewAction, PdfPage } from '@syncfusion/ej2-pdf';

// Load an existing PDF document containing a 3D annotation
const document: PdfDocument = new PdfDocument(data);
const page: PdfPage = document.getPage(0);
if (page.annotations.count > 0) {
    const annotation: PdfAnnotation = page.annotations.at(0);
    if (annotation instanceof Pdf3DAnnotation) {
        // Create an action to activate the first view of the 3D annotation
        const action: PdfGoTo3DViewAction = new PdfGoTo3DViewAction(annotation, 0);
        page.actions.open = action;
    }
}
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document containing a 3D annotation
var document = new ej.pdf.PdfDocument(data);
var page = document.getPage(0);
if (page.annotations.count > 0) {
    var annotation = page.annotations.at(0);
    if (annotation instanceof ej.pdf.Pdf3DAnnotation) {
        // Create an action to activate the first view of the 3D annotation
        var action = new ej.pdf.PdfGoTo3DViewAction(annotation, 0);
        page.actions.open = action;
    }
}
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### Named action

The `PdfNamedAction` class executes predefined navigation operations standard to PDF viewers. It uses the `PdfActionDestination` enumeration:

- `FirstPage`: Navigates to the first page.
- `LastPage`: Navigates to the last page.
- `NextPage`: Navigates to the next page.
- `PrevPage`: Navigates to the previous page.

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

The `PdfUriAction` class resolves and opens a specified hyperlink or web address in the user's default browser or PDF reader.

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

The `PdfLaunchAction` class opens an external file or launches a desktop application. You can supply a `PdfFileSpecification` to identify the file, configure `isNewWindow` to open in a new window, and specify Windows-specific launch parameters (`PdfWindowsLaunchParameters`) including command-line arguments and working directory.

N> Launch actions are subject to strict operating system and PDF reader security policies. Modern PDF viewers frequently prompt the user for permission or block launch actions.

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

The `PdfSubmitFormAction` class submits interactive PDF form data to a specified URL destination over HTTP/HTTPS. It supports various submission data formats (`Html`, `Pdf`, `Fdf`, `Xfdf`), HTTP methods (`Post`, `Get`), coordinate submission, and field filtering.

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

The `PdfResetFormAction` class resets interactive PDF form fields back to their default values. By default, it resets all fields. You can selectively limit the reset operation to specific fields using the `fields` property.

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

The `PdfImportDataAction` class imports form data from an external FDF or data file into the document's interactive form fields.

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

The `PdfSoundAction` class plays an embedded sound stream when triggered. It uses a `PdfSound` object that encapsulates the audio bytes, sampling rate, bit depth, channel configuration (`PdfSoundChannels.Mono` or `Stereo`), and audio encoding (`PdfSoundEncoding`).

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

The `PdfRichMediaExecuteAction` class triggers executable commands on rich-media annotations (such as video or audio players embedded in PDF documents).

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

The `PdfSetOCGStateAction` class manipulates the visibility states of optional content groups (layers). It accepts an array of `PdfLayerState` entries, each pairing a layer with an operation (`PdfLayerStateOperation.On`, `Off`, or `Toggle`).

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

### Action chaining

Every `PdfAction` object provides a `next` property that references subsequent actions. When the primary action is triggered, the viewer executes each chained action in sequence. Different action types can be combined in the chain.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfActionDestination, PdfButtonField, PdfDocument, PdfJavaScriptAction, PdfNamedAction, PdfPage } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document: PdfDocument = new PdfDocument();
// Add pages
const page: PdfPage = document.addPage();
document.addPage();
// Create the primary action: navigate to the last page
const primaryAction: PdfNamedAction = new PdfNamedAction(PdfActionDestination.LastPage);
// Create the subsequent action: execute JavaScript
const nextAction: PdfJavaScriptAction = new PdfJavaScriptAction('app.alert("Navigated to last page");');
// Chain the actions
primaryAction.next = nextAction;
// Assign the chained action to a button
const button: PdfButtonField = new PdfButtonField(page, 'btnChain', { x: 20, y: 20, width: 130, height: 30 });
button.text = 'Navigate & Alert';
button.actions.mouseUp = primaryAction;
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
var page = document.addPage();
document.addPage();
// Create the primary action: navigate to the last page
var primaryAction = new ej.pdf.PdfNamedAction(ej.pdf.PdfActionDestination.LastPage);
// Create the subsequent action: execute JavaScript
var nextAction = new ej.pdf.PdfJavaScriptAction('app.alert("Navigated to last page");');
// Chain the actions
primaryAction.next = nextAction;
// Assign the chained action to a button
var button = new ej.pdf.PdfButtonField(page, 'btnChain', { x: 20, y: 20, width: 130, height: 30 });
button.text = 'Navigate & Alert';
button.actions.mouseUp = primaryAction;
document.form.add(button);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Supported Targets and Events

PDF actions can be attached to various document structures, elements, and interactive targets. Each target exposes an `actions` property providing access to its specific collection of events.

| Target | Class | Event property | Event type | Trigger condition |
|---|---|---|---|---|
| Document | `PdfDocument` | `afterOpen` | `PdfAction` | Fired when the document is opened. |
| Document | `PdfDocument` | `beforeClose` | `PdfJavaScriptAction` | Fired before the document is closed. |
| Document | `PdfDocument` | `beforePrint` | `PdfJavaScriptAction` | Fired before the document is printed. |
| Document | `PdfDocument` | `afterPrint` | `PdfJavaScriptAction` | Fired after the document finishes printing. |
| Document | `PdfDocument` | `beforeSave` | `PdfJavaScriptAction` | Fired before the document is saved. |
| Document | `PdfDocument` | `afterSave` | `PdfJavaScriptAction` | Fired after the document is saved. |
| Page | `PdfPage` | `open` | `PdfAction` | Fired when the page becomes active or visible. |
| Page | `PdfPage` | `close` | `PdfAction` | Fired when navigating away from the page. |
| Annotation | `PdfAnnotation` | `mouseEnter` | `PdfAction` | Fired when the mouse pointer enters the annotation bounds. |
| Annotation | `PdfAnnotation` | `mouseLeave` | `PdfAction` | Fired when the mouse pointer leaves the annotation bounds. |
| Annotation | `PdfAnnotation` | `mouseDown` | `PdfAction` | Fired when the mouse button is pressed inside the annotation. |
| Annotation | `PdfAnnotation` | `mouseUp` | `PdfAction` | Fired when the mouse button is released inside the annotation. |
| Annotation | `PdfAnnotation` | `gotFocus` | `PdfAction` | Fired when the annotation receives input focus. |
| Annotation | `PdfAnnotation` | `lostFocus` | `PdfAction` | Fired when the annotation loses input focus. |
| Bookmark | `PdfBookmark` | `action` | `PdfAction` | Fired when the bookmark or outline item is clicked. |
| Form field | `PdfField` | `mouseEnter` | `PdfAction` | Fired when the cursor enters the field area. |
| Form field | `PdfField` | `mouseLeave` | `PdfAction` | Fired when the cursor leaves the field area. |
| Form field | `PdfField` | `mouseDown` | `PdfAction` | Fired when the mouse button is pressed inside the field. |
| Form field | `PdfField` | `mouseUp` | `PdfAction` | Fired when the mouse button is released inside the field. |
| Form field | `PdfField` | `gotFocus` | `PdfAction` | Fired when the form field receives focus. |
| Form field | `PdfField` | `lostFocus` | `PdfAction` | Fired when the form field loses focus. |
| Form field | `PdfField` | `keyPressed` | `PdfJavaScriptAction` | Fired when the user enters a keystroke into the field. |
| Form field | `PdfField` | `format` | `PdfJavaScriptAction` | Fired before the field value is formatted for display. |
| Form field | `PdfField` | `validate` | `PdfJavaScriptAction` | Fired when the field value changes to validate the value. |
| Form field | `PdfField` | `calculate` | `PdfJavaScriptAction` | Fired to compute the field value from other fields. |

### Adding an action to the form field

Form fields expose the `actions` property (`PdfFieldActions`) which provides events for mouse interactions (`mouseEnter`, `mouseLeave`, `mouseDown`, `mouseUp`, `gotFocus`, `lostFocus`) and JavaScript-specific field events (`keyPressed`, `format`, `validate`, `calculate`).

The following code example demonstrates attaching validation and focus actions to a text box field:

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

Annotations support the `actions` property (`PdfAnnotationActions`), allowing you to trigger navigation, URI, JavaScript, or other actions on user interaction (`mouseEnter`, `mouseLeave`, `mouseDown`, `mouseUp`, `gotFocus`, `lostFocus`).

The following code example demonstrates adding hover and click actions to a rectangle annotation:

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

Pages expose the `actions` property (`PdfPageActions`) supporting page lifecycle events:
- `open`: Executed when the page is displayed.
- `close`: Executed when leaving or closing the page view.

The following code example demonstrates assigning page open actions in an existing PDF document:

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfJavaScriptAction, PdfPage } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
const document: PdfDocument = new PdfDocument(data);
// Configure an action for each page when displayed
for (let i: number = 0; i < document.pageCount; i++) {
    const page: PdfPage = document.getPage(i);
    page.actions.open = new PdfJavaScriptAction('app.alert("Page opened");');
}
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Configure an action for each page when displayed
for (var i = 0; i < document.pageCount; i++) {
    var page = document.getPage(i);
    page.actions.open = new ej.pdf.PdfJavaScriptAction('app.alert("Page opened");');
}
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### Adding an action to the PDF bookmark

PDF bookmarks expose the `action` property directly through the `PdfBookmark`. Use this property to get or set the action performed when the bookmark is selected.

The following code example demonstrates attaching a named navigation action to a bookmark:

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
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/tailwind3/pdf)
