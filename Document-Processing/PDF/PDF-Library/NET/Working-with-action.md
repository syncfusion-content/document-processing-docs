---
title: Working with Action | Syncfusion
description: This section explains how to add actions to the document & form fields. Some supported actions are Sound, JavaScript, URI, Launch, Named, Submits & Resets.
platform: document-processing
control: PDF
documentation: UG
---
# Working with Actions

Essential<sup>&reg;</sup> PDF supports different actions that can be triggered by different events and user interactions.

## Adding an action to the PDF

The below code example illustrates how to add the action to the PDF document using [PdfLaunchAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLaunchAction.html) class. 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Actions/Add-action-to-the-PDF-document/.NET/Add-action-to-the-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument document = new PdfDocument();

//Create and add new launch Action to the document.
PdfLaunchAction action = new PdfLaunchAction("logo.png");
document.Actions.AfterOpen = action;

//Save the document
document.Save("Output.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document
PdfDocument document = new PdfDocument();

//Create and add new launch action to the document
PdfLaunchAction action = new PdfLaunchAction("logo.png");
document.Actions.AfterOpen = action;

//Save the document
document.Save("LaunchAction.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Create a new PDF document
Dim document As New PdfDocument()

'Create and add new launch action to the document
Dim action As New PdfLaunchAction("logo.png")
document.Actions.AfterOpen = action

'Save the document
document.Save("LaunchAction.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Actions/Add-action-to-the-PDF-document/).

## Supported action types

Essential<sup>&reg;</sup> PDF supports the following types of actions.

* [PdfSoundAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfSoundAction.html) that plays the music file
* [PdfJavaScriptAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfJavaScriptAction.html) that executes PDF JavaScript code
* [PdfUriAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfUriAction.html) that launches the URI
* [PdfGoToAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfGoToAction.html) that goes to the specified page of the document
* [PdfLaunchAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLaunchAction.html) that launches the application or opens the document
* [PdfNamedAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfNamedAction.html) that goes to the named destination: next, previous, first or last page
* [PdfSubmitAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfSubmitAction.html) that submits the data that is entered into the PDF form
* [PdfResetAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfResetAction.html) that resets the fields of the PDF form

### Sound action

The [PdfSoundAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfSoundAction.html) plays a specified music file in the PDF document. Volume and repeat can be specified for the sound action.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Actions/Add-the-sound-action-to-PDF-document/.NET/Add-the-sound-action-to-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new document
PdfDocument document = new PdfDocument();
//Add a page
PdfPage page = document.Pages.Add();

//Create a sound action
PdfSoundAction soundAction = new PdfSoundAction("Startup.wav");
soundAction.Sound.Bits = 16;
soundAction.Sound.Channels = PdfSoundChannels.Stereo;
soundAction.Sound.Encoding = PdfSoundEncoding.Signed;
soundAction.Volume = 0.9f;

//Set the sound action
document.Actions.AfterOpen = soundAction;

//Save the document
document.Save("Output.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new document
PdfDocument document = new PdfDocument();
//Add a page
PdfPage page = document.Pages.Add();

//Create a sound action
PdfSoundAction soundAction = new PdfSoundAction("../../Data/Startup.wav");
soundAction.Sound.Bits = 16;
soundAction.Sound.Channels = PdfSoundChannels.Stereo;
soundAction.Sound.Encoding = PdfSoundEncoding.Signed;
soundAction.Volume = 0.9f;

//Set the sound action
document.Actions.AfterOpen = soundAction;

//Save and close the PDF document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Create a new document
Dim document As New PdfDocument()
'Add a page
Dim page As PdfPage = document.Pages.Add()

'Create a sound action
Dim soundAction As New PdfSoundAction("../../Data/Startup.wav")
soundAction.Sound.Bits = 16
soundAction.Sound.Channels = PdfSoundChannels.Stereo
soundAction.Sound.Encoding = PdfSoundEncoding.Signed
soundAction.Volume = 0.9F

'Set the sound action
document.Actions.AfterOpen = soundAction

'Save and close the PDF document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Actions/Add-the-sound-action-to-PDF-document/).

### JavaScript action

The [PdfJavaScriptAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfJavaScriptAction.html) allows execution of **JavaScript** code embedded in the PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Actions/Add-JavaScript-action-to-the-PDF-document/.NET/Add-JavaScript-action-to-the-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new document
PdfDocument document = new PdfDocument();
//Add a page
PdfPage page = document.Pages.Add();

//Create JavaScript action
PdfJavaScriptAction scriptAction = new PdfJavaScriptAction("app.alert(\"Hello World!!!\")");

//Add the JavaScript action
document.Actions.AfterOpen = scriptAction;

//Save the document
document.Save("Output.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new document
PdfDocument document = new PdfDocument();
//Add a page
PdfPage page = document.Pages.Add();

//Create JavaScript action
PdfJavaScriptAction scriptAction = new PdfJavaScriptAction("app.alert(\"Hello World!!!\")");

//Add the JavaScript action
document.Actions.AfterOpen = scriptAction;

//Save and close the PDF document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Create a new document
Dim document As New PdfDocument()
'Add a page
Dim page As PdfPage = document.Pages.Add()

'Create JavaScript action
Dim scriptAction As New PdfJavaScriptAction("app.alert(""Hello World!!!"")")

'Add the JavaScript action
document.Actions.AfterOpen = scriptAction

'Save and close the PDF document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Actions/Add-JavaScript-action-to-the-PDF-document/).

N> You can refer more PDF JavaScript code in **PdfJavaScriptAction** from the below developer guide.
N> [https://opensource.adobe.com/dc-acrobat-sdk-docs/library/jsdevguide/index.html](https://opensource.adobe.com/dc-acrobat-sdk-docs/library/jsdevguide/index.html)

### URI action

The [PdfUriAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfUriAction.html) allows you to create a hyperlink that can open web page in a web browser.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Actions/Add-URI-action-to-the-PDF-document/.NET/Add-URI-action-to-the-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new document with PDF/A standard
PdfDocument document = new PdfDocument();

//Create a URI action
PdfUriAction uriAction = new PdfUriAction("http://www.google.com");

//Add the action to the document
document.Actions.AfterOpen = uriAction;

//Save the document
document.Save("Output.pdf");
//Close the document
document.Close(true);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new document with PDF/A standard
PdfDocument document = new PdfDocument();

//Create a uri action
PdfUriAction uriAction = new PdfUriAction("http://www.google.com");

//Add the action to the document
document.Actions.AfterOpen = uriAction;

//Save and close the PDF document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Create a new document with PDF/A standard
Dim document As New PdfDocument()

'Create a URI action
Dim uriAction As New PdfUriAction("http://www.google.com")

'Add the action to the document
document.Actions.AfterOpen = uriAction

'Save and close the PDF document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Actions/Add-URI-action-to-the-PDF-document/).

### GoTo action

The [PdfGoToAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfGoToAction.html) displays the specified page in the current document. The location can be specified for the destination page.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Actions/Add-GoTo-action-to-the-PDF-document/.NET/Add-GoTo-action-to-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new document
PdfDocument document = new PdfDocument();
//Add first page
PdfPage page = document.Pages.Add();
//Add second page
PdfPage secondPage = document.Pages.Add();

//Set the goto action
PdfGoToAction gotoAction = new PdfGoToAction(secondPage);
//Set destination location
gotoAction.Destination = new PdfDestination(secondPage, new PointF(0, 100));

//Add the action to the document
document.Actions.AfterOpen = gotoAction;

//Save the document
document.Save("Output.pdf");
//Close the document
document.Close(true);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new document
PdfDocument document = new PdfDocument();
//Add first page
PdfPage page = document.Pages.Add();
//Add second page
PdfPage secondPage = document.Pages.Add();

//Set the goto action
PdfGoToAction gotoAction = new PdfGoToAction(secondPage);
//Set destination location
gotoAction.Destination = new PdfDestination(secondPage, new PointF(0, 100));

//Add the action to the document
document.Actions.AfterOpen = gotoAction;

//Save and close the PDF document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Create a new document
Dim document As New PdfDocument()
'Add first page
Dim page As PdfPage = document.Pages.Add()
'Add second page
Dim secondPage As PdfPage = document.Pages.Add()

'Set the goto action
Dim gotoAction As New PdfGoToAction(secondPage)
'Set destination location
gotoAction.Destination = New PdfDestination(secondPage, New PointF(0, 100))

'Add the action to the document
document.Actions.AfterOpen = gotoAction

'Save and close the PDF document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Actions/Add-GoTo-action-to-the-PDF-document/).

### Launch action

The [PdfLaunchAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLaunchAction.html) allows execution of an external file. The following code example explains how to add a launch action in PDF document. 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Actions/Add-lauch-action-to-PDF-document/.NET/Add-lauch-action-to-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument document = new PdfDocument();

//Create and add new launch Action to the document.
PdfLaunchAction action = new PdfLaunchAction("logo.png");
document.Actions.AfterOpen = action;

//Save the document
document.Save("Output.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document
PdfDocument document = new PdfDocument();

//Create and add new launch Action to the document
PdfLaunchAction action = new PdfLaunchAction("logo.png");

//Add the action to the document. 
document.Actions.AfterOpen = action;

//Save and close the document
document.Save("LaunchAction.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Create a new PDF document
Dim document As New PdfDocument()

'Create and add new launch Action to the document
Dim action As New PdfLaunchAction("logo.png")

'Add the action to the document. 
document.Actions.AfterOpen = action

'Save and close the document
document.Save("LaunchAction.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Actions/Add-lauch-action-to-PDF-document).

### Named action

The [PdfNamedAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfNamedAction.html) allows execution of below predefined **PDF** actions using [PdfActionDestination](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfActionDestination.html) Enum. 

* Go to next page
* Go to previous page 
* Go to first page and 
* Go to last page

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Actions/Add-named-action-to-PDF-document/.NET/Add-named-action-to-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new document
PdfDocument document = new PdfDocument();
//Add the page
document.Pages.Add();
document.Pages.Add();

//Create a named action
PdfNamedAction namedAction = new PdfNamedAction(PdfActionDestination.LastPage);

//Add the named action
document.Actions.AfterOpen = namedAction;

//Save the document
document.Save("Output.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new document
PdfDocument document = new PdfDocument();
//Add the page
document.Pages.Add();
document.Pages.Add();

//Create a named action
PdfNamedAction namedAction = new PdfNamedAction(PdfActionDestination.LastPage);

//Add the named action
document.Actions.AfterOpen = namedAction;

//Save and close the PDF document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Create a new document
Dim document As New PdfDocument()
'Add the page
document.Pages.Add()
document.Pages.Add()

'Create a named action
Dim namedAction As New PdfNamedAction(PdfActionDestination.LastPage)

'Add the named action
document.Actions.AfterOpen = namedAction

'Save and close the PDF document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Actions/Add-named-action-to-PDF-document).

### Submit action

The [PdfSubmitAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfSubmitAction.html) allows submission of data that is entered in the PDF form using [PdfButtonField](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfButtonField.html) form field. 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Actions/Add-submit-action-to-the-PDF-document/.NET/Add-submit-action-to-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a PDF document
PdfDocument document = new PdfDocument();
//Add a new page
PdfPage page = document.Pages.Add();

//Create a Button field
PdfButtonField submitButton = new PdfButtonField(page, "Submit data");
submitButton.Bounds = new RectangleF(100, 60, 50, 20);
submitButton.ToolTip = "Submit";
//Add button field to the form
document.Form.Fields.Add(submitButton);

//Create a submit action. It submit the data of the form fields to the mentioned URL
PdfSubmitAction submitAction = new PdfSubmitAction("http://www.syncfusionforms.com/Submit.aspx");
submitAction.DataFormat = SubmitDataFormat.Html;
submitButton.Actions.GotFocus = submitAction;

//Save the document
document.Save("Output.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a PDF document
PdfDocument document = new PdfDocument();
//Add a new page
PdfPage page = document.Pages.Add();

//Create a Button field
PdfButtonField submitButton = new PdfButtonField(page, "Submit data");
submitButton.Bounds = new RectangleF(100, 60, 50, 20);
submitButton.ToolTip = "Submit";
//Add button field to the form
document.Form.Fields.Add(submitButton);

//Create a submit action. It submit the data of the form fields to the mentioned URL
PdfSubmitAction submitAction = new PdfSubmitAction("http://www.syncfusionforms.com/Submit.aspx");
submitAction.DataFormat = SubmitDataFormat.Html;
submitButton.Actions.GotFocus = submitAction;

//Save and close the PDF document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Create a PDF document
Dim document As New PdfDocument()
'Add a new page
Dim page As PdfPage = document.Pages.Add()

'Create a Button field.
Dim submitButton As New PdfButtonField(page, "Submit data")
submitButton.Bounds = New RectangleF(100, 60, 50, 20)
submitButton.ToolTip = "Submit"
'Add button field to the form
document.Form.Fields.Add(submitButton)

'Create a submit action. It submit the data of the form fields to the mentioned URL
Dim submitAction As New PdfSubmitAction("http:// www.example.com/Submit.aspx")
submitAction.DataFormat = SubmitDataFormat.Html
submitButton.Actions.GotFocus = submitAction

'Save and close the PDF document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Actions/Add-submit-action-to-the-PDF-document).

### Reset action

The [PdfResetAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfResetAction.html) allows execution of reset of all the form fields in the PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Actions/Reset-form-fields-in-the-PDF-document/.NET/Reset-form-fields-in-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a PDF document
PdfDocument document = new PdfDocument();
//Add a new page
PdfPage page = document.Pages.Add();

//Create a Text box field
PdfTextBoxField textBoxField = new PdfTextBoxField(page, "FirstName");
//Set properties to the textbox
textBoxField.BorderColor = new PdfColor(Color.Gray);
textBoxField.BorderStyle = PdfBorderStyle.Beveled;
textBoxField.Bounds = new RectangleF(80, 0, 100, 20);
textBoxField.Text = "First Name";

//Add the form field to the document
document.Form.Fields.Add(textBoxField);

//Create a Button field
PdfButtonField clearButton = new PdfButtonField(page, "Clear");
clearButton.Bounds = new RectangleF(100, 60, 50, 20);
clearButton.ToolTip = "Clear";
//Add button field to the form
document.Form.Fields.Add(clearButton);

//Save the document
document.Save("Output.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a PDF document
PdfDocument document = new PdfDocument();
//Add a new page
PdfPage page = document.Pages.Add();

//Create a Text box field
PdfTextBoxField textBoxField = new PdfTextBoxField(page, "FirstName");
//Set properties to the textbox
textBoxField.BorderColor = new PdfColor(Color.Gray);
textBoxField.BorderStyle = PdfBorderStyle.Beveled;
textBoxField.Bounds = new RectangleF(80, 0, 100, 20);
textBoxField.Text = "First Name";

//Add the form field to the document
document.Form.Fields.Add(textBoxField);

//Create a Button field.
PdfButtonField clearButton = new PdfButtonField(page, "Clear");
clearButton.Bounds = new RectangleF(100, 60, 50, 20);
clearButton.ToolTip = "Clear";
//Add button field to the form
document.Form.Fields.Add(clearButton);

//Create an instance of reset action
PdfResetAction resetAction = new PdfResetAction();
clearButton.Actions.GotFocus = resetAction;

//Save and close the PDF document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Interactive

'Create a PDF document
Dim document As New PdfDocument()
'Add a new page
Dim page As PdfPage = document.Pages.Add()

'Create a Text box field.
Dim textBoxField As New PdfTextBoxField(page, "FirstName")
'Set properties to the textbox.
textBoxField.BorderColor = New PdfColor(Color.Gray)
textBoxField.BorderStyle = PdfBorderStyle.Beveled
textBoxField.Bounds = New RectangleF(80, 0, 100, 20)
textBoxField.Text = "First Name"

'Add the form field to the document
document.Form.Fields.Add(textBoxField)

'Create a Button field.
Dim clearButton As New PdfButtonField(page, "Clear")
clearButton.Bounds = New RectangleF(100, 60, 50, 20)
clearButton.ToolTip = "Clear"
'Add button field to the form
document.Form.Fields.Add(clearButton)

'Create an instance of reset action
Dim resetAction As New PdfResetAction()
clearButton.Actions.GotFocus = resetAction

'Save and close the PDF document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Actions/Reset-form-fields-in-the-PDF-document).

## Remote GoTo action:

The PdfRemoteGoToAction in a PDF document enables users to navigate to a specific destination within a remote PDF file. This feature seamlessly directs users to specific pages or locations in another PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Create a new page
PdfPage page = document.Pages.Add();
//Create font and font style
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 12f, PdfFontStyle.Bold);
//Create a new PdfButtonField
PdfButtonField submitButton = new PdfButtonField(page, "submitButton");
submitButton.Bounds = new RectangleF(25, 160, 100, 20);
submitButton.Font = font;
submitButton.Text = "Open file";
submitButton.BackColor = new PdfColor(181, 191, 203);
//Create a new remote destination
PdfRemoteDestination remoteDestination = new PdfRemoteDestination();
remoteDestination.RemotePageNumber = 3;
remoteDestination.Mode = PdfDestinationMode.FitToPage;
//Create a new PdfRemoteGoToAction
PdfRemoteGoToAction goToAction = new PdfRemoteGoToAction("input.pdf", remoteDestination);
//Set the IsNewWindow
goToAction.IsNewWindow = true;
//Add the action to the button.
submitButton.Actions.GotFocus = goToAction;
//Add the submit button to a new document
document.Form.Fields.Add(submitButton);
//Save the document
document.Save("Output.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Create a new page
PdfPage page = document.Pages.Add();
//Create font and font style
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 12f, PdfFontStyle.Bold);
//Create a new PdfButtonField
PdfButtonField submitButton = new PdfButtonField(page, "submitButton");
submitButton.Bounds = new RectangleF(25, 160, 100, 20);
submitButton.Font = font;
submitButton.Text = "Open file";
submitButton.BackColor = new PdfColor(181, 191, 203);
//Create a new remote destination
PdfRemoteDestination remoteDestination = new PdfRemoteDestination();
remoteDestination.RemotePageNumber = 3;
remoteDestination.Mode = PdfDestinationMode.FitToPage;
//Create a new PdfRemoteGoToAction
PdfRemoteGoToAction goToAction = new PdfRemoteGoToAction("input.pdf", remoteDestination);
//Set the IsNewWindow
goToAction.IsNewWindow = true;
//Add the goToAction
submitButton.Actions.GotFocus = goToAction;
//Add the submit button to a new document
document.Form.Fields.Add(submitButton);
//Save the document
document.Save("Output.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Interactive

'Create a new document
Dim document As PdfDocument = New PdfDocument
'Create a new page
Dim page As PdfPage = document.Pages.Add
'Create a new font and font style
Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 12!, PdfFontStyle.Bold)
'Create a new Buttonfield
Dim submitButton As PdfButtonField = New PdfButtonField(page, "submitButton")
submitButton.Bounds = New RectangleF(25, 160, 100, 20)
submitButton.Font = font
submitButton.Text = "Open file"
submitButton.BackColor = New PdfColor(181, 191, 203)
'Create a new PdfRemoteDestination
Dim remoteDestination As PdfRemoteDestination = New PdfRemoteDestination
remoteDestination.RemotePageNumber = 3
remoteDestination.Mode = PdfDestinationMode.FitToPage
'Create a new PdfRemoteGoToAction
Dim goToAction As PdfRemoteGoToAction = New PdfRemoteGoToAction("input.pdf", remoteDestination)
'Set the IsNewWindow
goToAction.IsNewWindow = true
'Add the goToAction
submitButton.Actions.GotFocus = goToAction
'Add the submit button to a new document
document.Form.Fields.Add(submitButton)

'Save the document
document.Save("Output.pdf")
'Close the document
document.Close(true)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub]

## Adding an action to the form field

Essential<sup>&reg;</sup> PDF provides support to add various actions to the form fields. The following code example illustrates how to add actions to the form field in PDF document using [PdfFieldActions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfFieldActions.html) class. 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Actions/Adding-an-action-to-the-form-fields-in-PDF-document/.NET/Adding-an-action-to-the-form-fields-in-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();

//Create a new PdfButtonField
PdfButtonField submitButton = new PdfButtonField(page, "submitButton");
submitButton.Bounds = new RectangleF(25, 160, 100, 20);
submitButton.Text = "Apply";
submitButton.BackColor = new PdfColor(181, 191, 203);

//Create a new PdfJavaScriptAction
PdfJavaScriptAction scriptAction = new PdfJavaScriptAction("app.alert(\"You are looking at Form field action of PDF \")");
//Set the scriptAction to submitButton
submitButton.Actions.MouseDown = scriptAction;

//Add the submit button to the new document
document.Form.Fields.Add(submitButton);

//Save the document
document.Save("Output.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();

//Create a new PdfButtonField
PdfButtonField submitButton = new PdfButtonField(page, "submitButton");
submitButton.Bounds = new RectangleF(25, 160, 100, 20);
submitButton.Text = "Apply";
submitButton.BackColor = new PdfColor(181, 191, 203);

//Create a new PdfJavaScriptAction
PdfJavaScriptAction scriptAction = new PdfJavaScriptAction("app.alert(\"You are looking at Form field action of PDF \")");
//Set the scriptAction to submitButton
submitButton.Actions.MouseDown = scriptAction;

//Add the submit button to the new document
document.Form.Fields.Add(submitButton);

//Save document to disk
document.Save("fieldAction.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Interactive

'Create a new PDF document
Dim document As New PdfDocument()

'Creates a new page
Dim page As PdfPage = document.Pages.Add()

'Create a new PdfButtonField
Dim submitButton As New PdfButtonField(page, "submitButton")
submitButton.Bounds = New RectangleF(25, 160, 100, 20)
submitButton.Text = "Apply"
submitButton.BackColor = New PdfColor(181, 191, 203)

'Create a new PdfJavaScriptAction
Dim scriptAction As New PdfJavaScriptAction("app.alert(\"You are looking at Form field action of PDF \")")
'Set the scriptAction to submitButton
submitButton.Actions.MouseDown = scriptAction

'Add the submit button to the new document
document.Form.Fields.Add(submitButton)

'Save document to disk
document.Save("fieldAction.pdf")
'Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Actions/Adding-an-action-to-the-form-fields-in-PDF-document/).

## Adding an action to the bookmarks

Essential<sup>&reg;</sup> PDF provides support to add the various actions to the [Bookmarks](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-bookmarks). The code snippet below shows how to add an URI action to bookmark.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Actions/Adding-an-action-to-the-bookmark-in-the-PDF-document/.NET/Adding-an-action-to-the-bookmark-in-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new document
PdfDocument document = new PdfDocument();
//Add a page
PdfPage page = document.Pages.Add();

//Create document bookmarks
PdfBookmark bookmark = document.Bookmarks.Add("Page 1");
//Set the text style and color
bookmark.TextStyle = PdfTextStyle.Bold;
bookmark.Color = Color.Red;

//Create a Uri action
PdfUriAction uriAction = new PdfUriAction("http://www.google.com");
//Set the Uri action to the bookmark 
bookmark.Action = uriAction;

//Save the document
document.Save("Output.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new document
PdfDocument document = new PdfDocument();
//Add a page
PdfPage page = document.Pages.Add();

//Create document bookmarks
PdfBookmark bookmark = document.Bookmarks.Add("Page 1");
//Set the text style and color
bookmark.TextStyle = PdfTextStyle.Bold;
bookmark.Color = Color.Red;

//Create a Uri action
PdfUriAction uriAction = new PdfUriAction("http://www.google.com");
//Set the Uri action to bookmark
bookmark.Action = uriAction;

//Save and close the PDF document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Interactive

'Create a new document
Dim document As New PdfDocument()
'Add a page
Dim page As PdfPage = document.Pages.Add()

'Create document bookmarks
Dim bookmark As PdfBookmark = document.Bookmarks.Add("Page 1")
'Set the text style and color
bookmark.TextStyle = PdfTextStyle.Bold
bookmark.Color = Color.Red

'Create a Uri action
Dim uriAction As New PdfUriAction("http://www.google.com")
'Set the Uri action to the bookmark
bookmark.Action = uriAction

'Save and close the PDF document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Actions/Adding-an-action-to-the-bookmark-in-the-PDF-document).

## Add actions to the existing PDF document

To add actions to an existing PDF document, use the following code example.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Actions/Add-actions-to-the-existing-PDF-document/.NET/Add-actions-to-the-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

//Create JavaScript action
PdfJavaScriptAction scriptAction = new PdfJavaScriptAction("app.alert(\"Hello World!!!\")"); 

//Add the JavaScript action
document.Actions.AfterOpen = scriptAction;

//Save the document
document.Save("Output.pdf"); 
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load a document from the disk.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("input.pdf");

//Create JavaScript action.
PdfJavaScriptAction scriptAction = new PdfJavaScriptAction("app.alert(\"Hello World!!!\")");

//Add the JavaScript action.
loadedDocument.Actions.AfterOpen = scriptAction;
           
// Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Create a new PDF document. 
Dim document As New PdfLoadedDocument("input.pdf")

'Create JavaScript action. 
Dim scriptAction As New PdfJavaScriptAction("app.alert(""Hello World!!!"")") 

'Add the JavaScript action.
 document.Actions.AfterOpen = scriptAction

'Save the document to disk.
 document.Save("PopupAnnotation.pdf") 
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Actions/Add-actions-to-the-existing-PDF-document).

N> The action assigned to the bookmark works only when destination of bookmark is not set.

## Document-Level JavaScript Actions

Document-level JavaScript actions allow you to embed interactivity into your PDF documents. Using the Essential<sup>&reg;</sup> PDF Library, you can easily add these actions to execute scripts when the document is opened.

### Adding Document-Level JavaScript Actions

The following example demonstrates how to add document-level JavaScript actions to a PDF document using the [PdfDocumentJavaScriptCollection](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentJavaScriptCollection.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Actions/Adding-Document-Level%20JavaScript-Actions/.NET/Adding-Document-Level%20JavaScript-Actions/Program.cs" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Create a new PDF document instance.
PdfDocument document = new PdfDocument();
// Retrieve the JavaScript collection from the document.
PdfDocumentJavaScriptCollection javaScriptCollection = document.DocumentJavaScripts;

// Define a new JavaScript action that displays an alert with the message "Hello World!!!".
PdfJavaScriptAction javaScriptAction = new PdfJavaScriptAction("app.alert(\"Hello World!!!\")");

// Set the name of the JavaScript action.
javaScriptAction.Name = "Test";
// Add the JavaScript action to the document's JavaScript collection.
javaScriptCollection.Add(javaScriptAction);

//Save the document
document.Save("Output.pdf");

//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Create a new PDF document instance.
PdfDocument document = new PdfDocument();
// Retrieve the JavaScript collection from the document.
PdfDocumentJavaScriptCollection javaScriptCollection = document.DocumentJavaScripts;

// Define a new JavaScript action that displays an alert with the message "Hello World!!!".
PdfJavaScriptAction javaScriptAction = new PdfJavaScriptAction("app.alert(\"Hello World!!!\")");

// Set the name of the JavaScript action.
javaScriptAction.Name = "Test";
// Add the JavaScript action to the document's JavaScript collection.
javaScriptCollection.Add(javaScriptAction);

// Save the PDF document to a file named "Output.pdf".
document.Save("Output.pdf");

//Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

' Create a new PDF document instance.
Dim document As New PdfDocument()
' Retrieve the JavaScript collection from the document.
Dim javaScriptCollection As PdfDocumentJavaScriptCollection = document.DocumentJavaScripts

' Define a new JavaScript action that displays an alert with the message "Hello World!!!".
Dim javaScriptAction As New PdfJavaScriptAction("app.alert(""Hello World!!!"")")

' Set the name of the JavaScript action.
javaScriptAction.Name = "Test"
' Add the JavaScript action to the document's JavaScript collection.
javaScriptCollection.Add(javaScriptAction)

' Save the PDF document to a file named "Output.pdf".
document.Save("Output.pdf")

' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Actions/Adding-Document-Level%20JavaScript-Actions/.NET).

### Retrieve Document-Level JavaScript Actions

The following example demonstrates how to retrieve document-level JavaScript actions using the [PdfDocumentJavaScriptCollection](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentJavaScriptCollection.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Actions/Retrieve-Document-Level-JavaScript-Actions/.NET/Retrieve-Document-Level-JavaScript-Actions/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

// Retrieve the JavaScript collection from the loaded document.
PdfDocumentJavaScriptCollection javaScriptCollection = document.DocumentJavaScripts;

// Iterate through the JavaScript actions in the collection.
foreach (PdfJavaScriptAction action in javaScriptCollection)
{
    // Display the name of the JavaScript action.
    Console.WriteLine($"Action Name: {action.Name}");

    // Display the JavaScript code associated with the action.
    Console.WriteLine($"JavaScript Code: {action.JavaScript}");
}

// Close the document and release all associated resources.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load an existing PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

// Retrieve the JavaScript collection from the loaded document.
PdfDocumentJavaScriptCollection javaScriptCollection = document.DocumentJavaScripts;

// Iterate through the JavaScript actions in the collection.
foreach (PdfJavaScriptAction action in javaScriptCollection)
{
    // Display the name of the JavaScript action.
    Console.WriteLine($"Action Name: {action.Name}");

    // Display the JavaScript code associated with the action.
    Console.WriteLine($"JavaScript Code: {action.JavaScript}");
}

// Close the document and release all associated resources.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

' Load an existing PDF document.
Dim document As New PdfLoadedDocument("Input.pdf")

' Retrieve the JavaScript collection from the loaded document.
Dim javaScriptCollection As PdfDocumentJavaScriptCollection = document.DocumentJavaScripts

' Iterate through the JavaScript actions in the collection.
For Each action As PdfJavaScriptAction In javaScriptCollection
    ' Display the name of the JavaScript action.
    Console.WriteLine($"Action Name: {action.Name}")

    ' Display the JavaScript code associated with the action.
    Console.WriteLine($"JavaScript Code: {action.JavaScript}")
Next

' Close the document and release all associated resources.
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Actions/Retrieve-Document-Level-JavaScript-Actions/.NET).

### Remove Document-Level JavaScript Actions

The following example demonstrates how to remove document-level JavaScript actions using the [PdfDocumentJavaScriptCollection](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentJavaScriptCollection.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Actions/Remove-Document-Level-JavaScript-Actions/.NET/Remove-Document-Level-JavaScript-Actions/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

// Retrieve the JavaScript collection from the document.
PdfDocumentJavaScriptCollection javaScriptCollection = document.DocumentJavaScripts;

// Access the first JavaScript action in the collection.
PdfJavaScriptAction javaScriptAction = javaScriptCollection[0];

// Remove the selected JavaScript action from the collection.
javaScriptCollection.Remove(javaScriptAction);

// Close the document and release all associated resources.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load an existing PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

// Retrieve the JavaScript collection from the document.
PdfDocumentJavaScriptCollection javaScriptCollection = document.DocumentJavaScripts;

// Access the first JavaScript action in the collection.
PdfJavaScriptAction javaScriptAction = javaScriptCollection[0];

// Remove the selected JavaScript action from the collection.
javaScriptCollection.Remove(javaScriptAction);

// Close the document and release all associated resources.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

' Load an existing PDF document.
Dim document As New PdfLoadedDocument("Input.pdf")

' Retrieve the JavaScript collection from the document.
Dim javaScriptCollection As PdfDocumentJavaScriptCollection = document.DocumentJavaScripts

' Access the first JavaScript action from the collection.
Dim javaScriptAction As PdfJavaScriptAction = javaScriptCollection(0)

' Remove the selected JavaScript action from the collection.
javaScriptCollection.Remove(javaScriptAction)

' Close the document and release all associated resources.
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Actions/Remove-Document-Level-JavaScript-Actions/.NET).
