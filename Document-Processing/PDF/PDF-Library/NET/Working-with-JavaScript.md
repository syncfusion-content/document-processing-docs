---
title: Working with JavaScript | Syncfusion
description: This section explains how to add and modify JavaScript actions in PDF documents using the Syncfusion .NET PDF library.
platform: document-processing
control: PDF
documentation: UG
---

# Working with JavaScript

A JavaScript action allows execution of JavaScript code embedded in a PDF document. Syncfusion<sup>&reg;</sup> PDF supports adding JavaScript actions to a PDF document in the following ways:

* Document-level JavaScript action
* JavaScript action on form fields
* JavaScript in 3D annotations

> **Note:** PDF JavaScript uses the Acrobat JavaScript API (such as `app.alert`, `this.print`, and `host.getURL`) rather than the standard browser JavaScript API. Refer to the [Acrobat JavaScript API Reference](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/) for the complete list of supported objects and methods.

## Document-level JavaScript action

You can add a JavaScript action to the PDF document by using the [PdfJavaScriptAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfJavaScriptAction.html) class and assigning it to the [Actions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html#Syncfusion_Pdf_PdfDocument_Actions) property of the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class. The following code example shows how to add an `AfterOpen` action that displays an alert when the document is opened.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/JavaScript/Add-the-JavaScript-action-to-the-PDF-document/.NET/Add-the-JavaScript-action-to-the-PDF-document/Program.cs" %}

using System.IO;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new document.
PdfDocument document = new PdfDocument();
//Add a page.
PdfPage page = document.Pages.Add();

//Create a JavaScript action.
PdfJavaScriptAction scriptAction = new PdfJavaScriptAction("app.alert(\"Hello World!!!\")");
//Add the JavaScript action to the document.
document.Actions.AfterOpen = scriptAction;

//Save and close the PDF document.
using (FileStream outputStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.Write))
{
    document.Save(outputStream);
}
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new document.
PdfDocument document = new PdfDocument();
//Add a page.
PdfPage page = document.Pages.Add();

//Create a JavaScript action.
PdfJavaScriptAction scriptAction = new PdfJavaScriptAction("app.alert(\"Hello World!!!\")");
//Add the JavaScript action to the document.
document.Actions.AfterOpen = scriptAction;

//Save and close the PDF document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Create a new document.
Dim document As New PdfDocument()
'Add a page.
Dim page As PdfPage = document.Pages.Add()

'Create a JavaScript action.
Dim scriptAction As New PdfJavaScriptAction("app.alert(""Hello World!!!"")")
'Add the JavaScript action to the document.
document.Actions.AfterOpen = scriptAction

'Save and close the PDF document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/JavaScript/Add-the-JavaScript-action-to-the-PDF-document).

> **Note:** The [PdfDocumentActions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentActions.html) class also exposes the [BeforeClose](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentActions.html#Syncfusion_Pdf_PdfDocumentActions_BeforeClose) and [BeforeSave](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentActions.html#Syncfusion_Pdf_PdfDocumentActions_BeforeSave) properties, which allow you to trigger JavaScript code before the document is closed or saved.

## JavaScript action on form fields

You can add JavaScript actions to form fields using the [PdfJavaScriptAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfJavaScriptAction.html) class. The [PdfFieldActions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfFieldActions.html) class is used to assign actions to a form field.

The following code example shows how to attach a `MouseDown` JavaScript action to a button field.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/JavaScript/Add-JavaScript-action-to-the-form-fields-in-a-PDF/.NET/Add-JavaScript-action-to-the-form-fields-in-a-PDF/Program.cs" %}

using System.IO;
using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Create a new page.
PdfPage page = document.Pages.Add();

//Create a new button field.
PdfButtonField submitButton = new PdfButtonField(page, "submitButton");
submitButton.Bounds = new RectangleF(25, 160, 100, 20);
submitButton.Text = "Apply";
submitButton.BackColor = new PdfColor(181, 191, 203);

//Create a JavaScript action.
PdfJavaScriptAction scriptAction = new PdfJavaScriptAction("app.alert(\"You are looking at Form field action of PDF\")");
//Set the JavaScript action to the button.
submitButton.Actions.MouseDown = scriptAction;

//Add the button to the new document.
document.Form.Fields.Add(submitButton);

//Save and close the PDF document.
using (FileStream outputStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.Write))
{
    document.Save(outputStream);
}
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Create a new page.
PdfPage page = document.Pages.Add();

//Create a new button field.
PdfButtonField submitButton = new PdfButtonField(page, "submitButton");
submitButton.Bounds = new RectangleF(25, 160, 100, 20);
submitButton.Text = "Apply";
submitButton.BackColor = new PdfColor(181, 191, 203);

//Create a JavaScript action.
PdfJavaScriptAction scriptAction = new PdfJavaScriptAction("app.alert(\"You are looking at Form field action of PDF\")");
//Set the JavaScript action to the button.
submitButton.Actions.MouseDown = scriptAction;

//Add the button to the new document.
document.Form.Fields.Add(submitButton);

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document.
Dim document As New PdfDocument()
'Create a new page.
Dim page As PdfPage = document.Pages.Add()

'Create a new button field.
Dim submitButton As New PdfButtonField(page, "submitButton")
submitButton.Bounds = New RectangleF(25, 160, 100, 20)
submitButton.Text = "Apply"
submitButton.BackColor = New PdfColor(181, 191, 203)

'Create a JavaScript action.
Dim scriptAction As New PdfJavaScriptAction("app.alert(""You are looking at Form field action of PDF"")")
'Set the JavaScript action to the button.
submitButton.Actions.MouseDown = scriptAction

'Add the button to the new document.
document.Form.Fields.Add(submitButton)

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/JavaScript/Add-JavaScript-action-to-the-form-fields-in-a-PDF).

## JavaScript in 3D Annotation

The 3D Annotations are used to represent 3D artworks in a PDF document. You can add a JavaScript code to 3D annotation using the [OnInstantiate](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.Pdf3DAnnotation.html#Syncfusion_Pdf_Interactive_Pdf3DAnnotation_OnInstantiate) property in [Pdf3DAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.Pdf3DAnnotation.html) instance. The JavaScript script is executed when the 3D artwork is instantiated. The following code snippet illustrate this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/JavaScript/Add-JavaScript-to-3D-annotation-in-a-PDF-document/.NET/Add-JavaScript-to-3D-annotation-in-a-PDF-document/Program.cs" %}

using System.IO;
using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Create a new page.
PdfPage page = document.Pages.Add();

//Load the 3D annotation stream.
FileStream inputStream = new FileStream("3DAnnotation.U3D", FileMode.Open, FileAccess.Read);
//Create a new PDF 3D annotation.
Pdf3DAnnotation pdf3dAnnotation = new Pdf3DAnnotation(new RectangleF(10, 50, 300, 150), inputStream);
//Assign a JavaScript script.
pdf3dAnnotation.OnInstantiate = "host.getURL(\"http://www.google.com\")";
//Handle the activation of the 3D annotation.
Pdf3DActivation activation = new Pdf3DActivation();
activation.ActivationMode = Pdf3DActivationMode.ExplicitActivation;
activation.ShowToolbar = true;
pdf3dAnnotation.Activation = activation;
//Add the annotation to the page.
page.Annotations.Add(pdf3dAnnotation);

//Save and close the PDF document.
using (FileStream outputStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.Write))
{
    document.Save(outputStream);
}
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Create a new page.
PdfPage page = document.Pages.Add();

//Create a new PDF 3D annotation.
Pdf3DAnnotation pdf3dAnnotation = new Pdf3DAnnotation(new RectangleF(10, 50, 300, 150), "Input.u3d");
//Assign a JavaScript script.
pdf3dAnnotation.OnInstantiate = "host.getURL(\"http://www.google.com\")";
//Handle the activation of the 3D annotation.
Pdf3DActivation activation = new Pdf3DActivation();
activation.ActivationMode = Pdf3DActivationMode.ExplicitActivation;
activation.ShowToolbar = true;
pdf3dAnnotation.Activation = activation;
//Add the annotation to the page.
page.Annotations.Add(pdf3dAnnotation);

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Create a new PDF document.
Dim document As New PdfDocument()
'Create a new page.
Dim page As PdfPage = document.Pages.Add()

'Create a new PDF 3D annotation.
Dim pdf3dAnnotation As New Pdf3DAnnotation(New RectangleF(10, 50, 300, 150), "Input.u3d")
'Assign a JavaScript script.
pdf3dAnnotation.OnInstantiate = "host.getURL(""http://www.google.com"")"
'Handle the activation of the 3D annotation.
Dim activation As New Pdf3DActivation()
activation.ActivationMode = Pdf3DActivationMode.ExplicitActivation
activation.ShowToolbar = True
pdf3dAnnotation.Activation = activation
'Add the annotation to the page.
page.Annotations.Add(pdf3dAnnotation)

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/JavaScript/Add-JavaScript-to-3D-annotation-in-a-PDF-document).

> **Note:** 3D annotations require a U3D-formatted file as input. The U3D file must be available in the application directory or supplied through a stream. To view 3D content, the PDF reader must support the PDF 3D specification; the standard Acrobat Reader provides this support.

## Add/Modify JavaScript actions to the PDF

Add or modify the JavaScript action in a [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html). The below code example shows how to add/modify JavaScript code using [PdfJavaScriptAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfJavaScriptAction.html) class to an existing PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

// PDF does not support JavaScript actions in C#/.NET cross-platform environments.

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Change the javascript action in a pdf document.
loadedDocument.Actions.AfterOpen= new PdfJavaScriptAction("app.alert(\"Modified Script!\")");

//Save the document.
loadedDocument.Save("Output.pdf");
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Load the PDF document.
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
 
'Change the javascript Action in a pdf document.
loadedDocument.Actions.AfterOpen = new PdfJavaScriptAction("app.alert(\"Modified Script!\")")

'Save the document.
loadedDocument.Save("Output.pdf")

'Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/JavaScript/Add-JavaScript-to-3D-annotation-in-a-PDF-document).

## Types of JavaScript actions

The pdf will generate trigger with the javascript actions in the following places.

<table>
<tr>
<th style="font-size:14px">Action Type 
</th>
<th style="font-size:14px">Description
</th>
</tr>
<tr>
<td>document.Actions.AfterOpen	</td>
<td>A JavaScript action will be performed after opening the document</td>
</tr>
<tr>
<td>document.Actions.BeforeClose</td>
<td>A JavaScript action will be performed before closing the document</td>
</tr>
<tr>
<td>document.Actions.AfterSave</td>
<td>	A JavaScript action will be performed after saving the document</td>
</tr>
<tr>
<td>document.Actions.BeforeSave</td>
<td>	A JavaScript action will be performed before saving the document</td>
</tr>
<tr>
<td>document.Actions.AfterPrint	</td>
<td>A JavaScript action will be performed after printing the document</td>
</tr>
<tr>
<td>document.Actions.BeforePrint</td>
<td>	A JavaScript action will be performed before printing the document</td>
</tr>
</table>

## Types of Mouseover actions

The pdf will generate trigger with the javascript actions on the form fields in the places listed below.

<table>
<tr>
<th style="font-size:14px">Action Type 
</th>
<th style="font-size:14px">Description
</th>
</tr>
<tr>
<td>
submitButton.Actions.MouseDown</td>
<td>Gets or sets the action to be performed when the mouse button is pressed inside the annotation’s active area.</td>
</tr>
<tr>
<td>submitButton.Actions.MouseUp</td>
<td>	Gets or sets the action to be performed when the mouse button is released inside the annotation’s active area.</td>
</tr>
<tr>
<td>submitButton.Actions.MouseEnter</td>
<td>	Gets or sets the action to be performed when the cursor enters the annotation’s active area.</td>
</tr>
<tr>
<td>submitButton.Actions.MouseLeave</td>
<td>	Gets or sets the action to be performed when the cursor exits the annotation’s active area.</td>
</tr>
<tr>
<td>submitButton.Actions.GotFocus</td>
<td>	Gets or sets the action to be performed when the annotation receives the input focus.</td>
</tr>
<tr>
<td>submitButton.Actions.LostFocus</td>
<td>	Gets or sets the action to be performed when the annotation loses the input focus.</td>
</tr>
</table>
