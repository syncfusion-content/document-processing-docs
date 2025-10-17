---
title: Working with Digital Signature | Syncfusion
description: This section explains how to create a digital signature in the PDF document by using Syncfusion .NET PDF library.
platform: document-processing
control: PDF
documentation: UG
---
# Working with Digital Signature

To quickly get started with digitally signing a PDF document and validating signatures using the Blazor PDF Library, check this video:
{% youtube "https://www.youtube.com/watch?v=NNIFh1Ckdzw&t=672s" %}

## Adding a digital signature

The Essential<sup>&reg;</sup> PDF allows you to add a [digital signature](https://www.syncfusion.com/document-processing/pdf-framework/net/pdf-library/digital-signature-pdf) to the PDF document. To add a digital signature, you need a certificate with private keys. The Essential<sup>&reg;</sup> PDF provides support for digital signature by using the PFX files, Hardware Security Module (HSM), Online Certificate Status Protocol (OCSP), Certificate Revocation List (CRL), Windows Certificate Store, and supports signatures using the Elliptic Curve Digital Signature Algorithm (ECDSA).

The following code example explains how to add a digital signature to the PDF document by using [PdfSignature](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Add-a-digital-signature-to-the-PDF-document/.NET/Add-a-digital-signature-to-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Creates a new PDF document.
PdfDocument document = new PdfDocument();
//Adds a new page.
PdfPageBase page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;

//Creates a certificate instance from PFX file with private key.
FileStream certificateStream = new FileStream("PDF.pfx", FileMode.Open, FileAccess.Read);
PdfCertificate pdfCert = new PdfCertificate(certificateStream, "password123");
//Creates a digital signature.
PdfSignature signature = new PdfSignature(document, page, pdfCert, "Signature");
//Sets an image for signature field.
FileStream imageStream = new FileStream("signature.jpg", FileMode.Open, FileAccess.Read);
//Sets an image for signature field.
PdfBitmap signatureImage = new PdfBitmap(imageStream);
//Sets signature information.
signature.Bounds = new RectangleF(new PointF(0, 0), signatureImage.PhysicalDimension);
signature.ContactInfo = "johndoe@owned.us";
signature.LocationInfo = "Honolulu, Hawaii";
signature.Reason = "I am author of this document.";
//Draws the signature image.
signature.Appearance.Normal.Graphics.DrawImage(signatureImage, 0, 0);

//Save the document
document.Save("Output.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Adds a new page
PdfPageBase page = document.Pages.Add();
//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;

//Creates a certificate instance from PFX file with private key
PdfCertificate pdfCert = new PdfCertificate(@"PDF.pfx", "password123");
//Creates a digital signature
PdfSignature signature = new PdfSignature(document, page, pdfCert, "Signature");
//Sets an image for signature field
PdfBitmap signatureImage = new PdfBitmap(@"signature.jpg");
//Sets signature information
signature.Bounds = new RectangleF(new PointF(0, 0), signatureImage.PhysicalDimension);
signature.ContactInfo = "johndoe@owned.us";
signature.LocationInfo = "Honolulu, Hawaii";
signature.Reason = "I am author of this document.";
//Draws the signature image
signature.Appearance.Normal.Graphics.DrawImage(signatureImage, 0, 0);

//Saves and closes the document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Security

'Creates a new PDF document
Dim document As New PdfDocument()
'Adds a new page
Dim page As PdfPageBase = document.Pages.Add()
'Create PDF graphics for the page
Dim graphics As PdfGraphics = page.Graphics

'Creates a certificate instance from PFX file with private key
Dim pdfCert As New PdfCertificate("PDF.pfx", "password123")
'Creates a digital signature
Dim signature As New PdfSignature(document, page, pdfCert, "Signature")
'Sets an image for signature field
Dim signatureImage As New PdfBitmap("signature.jpg")
'Sets signature information
signature.Bounds = New RectangleF(New PointF(0, 0), signatureImage.PhysicalDimension)
signature.ContactInfo = "johndoe@owned.us"
signature.LocationInfo = "Honolulu, Hawaii"
signature.Reason = "I am author of this document."
'Draws the signature image
signature.Appearance.Normal.Graphics.DrawImage(signatureImage, 0, 0)

'Saves and closes the document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Add-a-digital-signature-to-the-PDF-document/).

## Adding a digital signature using stream

The following code example illustrates how to add a digital signature in the PDF document as stream using the [PdfSignature](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html) class as follows.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Add-a-digital-signature-to-the-PDF-document/.NET/Add-a-digital-signature-to-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Adds a new page
PdfPageBase page = document.Pages.Add();
//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;

//Creates a certificate instance from PFX file with private key
FileStream certificateStream = new FileStream("PDF.pfx", FileMode.Open, FileAccess.Read);
PdfCertificate pdfCert = new PdfCertificate(certificateStream, "password123");
//Creates a digital signature
PdfSignature signature = new PdfSignature(document, page, pdfCert, "Signature");
//Sets an image for signature field
FileStream imageStream = new FileStream("signature.jpg", FileMode.Open, FileAccess.Read);
//Sets an image for signature field
PdfBitmap signatureImage = new PdfBitmap(imageStream);
//Sets signature information
signature.Bounds = new RectangleF(new PointF(0, 0), signatureImage.PhysicalDimension);
signature.ContactInfo = "johndoe@owned.us";
signature.LocationInfo = "Honolulu, Hawaii";
signature.Reason = "I am author of this document.";
//Draws the signature image
signature.Appearance.Normal.Graphics.DrawImage(signatureImage, 0, 0);

//Save the document
document.Save("Output.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Adds a new page
PdfPageBase page = document.Pages.Add();
//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;

//Gets a stream from .pfx file
Stream pfxStream = File.OpenRead("PDF.pfx");
//Creates a certificate instance from PFX file stream with private key
PdfCertificate pdfCert = new PdfCertificate(pfxStream, "password123");
//Creates a digital signature
PdfSignature signature = new PdfSignature(document, page, pdfCert, "Signature");
//Sets an image for signature field
PdfBitmap signatureImage = new PdfBitmap(@"signature.jpg");
//Sets signature information
signature.Bounds = new RectangleF(new PointF(0, 0), signatureImage.PhysicalDimension);
signature.ContactInfo = "johndoe@owned.us";
signature.LocationInfo = "Honolulu, Hawaii";
signature.Reason = "I am author of this document.";
//Draws the signature image
signature.Appearance.Normal.Graphics.DrawImage(signatureImage, 0, 0);

//Saves and closes the document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
 
Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Security

'Creates a new PDF document
Dim document As New PdfDocument()
'Adds a new page
Dim page As PdfPageBase = document.Pages.Add()
'Create PDF graphics for the page
Dim graphics As PdfGraphics = page.Graphics

'Gets stream from .pfx file
Dim pfxStream As Stream = File.OpenRead("PDF.pfx")
'Creates a certificate instance from PFX file stream with private key
Dim pdfCert As New PdfCertificate(pfxStream, "password123")
'Creates a digital signature
Dim signature As New PdfSignature(document, page, pdfCert, "Signature")
'Sets an image for signature field
Dim signatureImage As New PdfBitmap("signature.jpg")
'Sets signature information
signature.Bounds = New RectangleF(New PointF(0, 0), signatureImage.PhysicalDimension)
signature.ContactInfo = "johndoe@owned.us"
signature.LocationInfo = "Honolulu, Hawaii"
signature.Reason = "I am author of this document."
'Draws the signature image
signature.Appearance.Normal.Graphics.DrawImage(signatureImage, 0, 0)

'Saves and closes the document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can add a digital signature to an existing document as follows.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Add-a-digital-signature-to-an-existing-document/.NET/Add-a-digital-signature-to-an-existing-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Gets the page
PdfLoadedPage page = loadedDocument.Pages[0] as PdfLoadedPage;

//Creates a signature field
PdfSignatureField signatureField = new PdfSignatureField(page, "SignatureField");
signatureField.Bounds = new RectangleF(0, 0, 100, 100);
signatureField.Signature = new PdfSignature();
//Adds certificate to the signature field
FileStream certificateStream = new FileStream("PDF.pfx", FileMode.Open, FileAccess.Read);
signatureField.Signature.Certificate = new PdfCertificate(certificateStream, "password123");
signatureField.Signature.Reason = "I am author of this document";
//Adds the field
loadedDocument.Form.Fields.Add(signatureField);

//Save the document
loadedDocument.Save("Output.pdf");
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Loads the PDF document with signature field
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");         
//Gets the page
PdfLoadedPage page = loadedDocument.Pages[0] as PdfLoadedPage;

//Creates a signature field
PdfSignatureField signatureField = new PdfSignatureField(page, "SignatureField");
signatureField.Bounds = new RectangleF(0, 0, 100, 100);
signatureField.Signature = new PdfSignature();
//Adds certificate to the signature field
signatureField.Signature.Certificate = new PdfCertificate(@"PDF.pfx", "password123");
signatureField.Signature.Reason = "I am author of this document";
//Adds the field
loadedDocument.Form.Fields.Add(signatureField);

//Saves the certified PDF document
loadedDocument.Save(@"Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security

'Loads the PDF document with signature field
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Gets the page
Dim page As PdfLoadedPage = TryCast(loadedDocument.Pages(0), PdfLoadedPage)

'Creates a signature field
Dim signatureField As New PdfSignatureField(page, "SignatureField")
signatureField.Bounds = New RectangleF(0, 0, 100, 100)
signatureField.Signature = New PdfSignature()
'Adds certificate to the signature field
signatureField.Signature.Certificate = New PdfCertificate("PDF.pfx", "password123")
signatureField.Signature.Reason = "I am author of this document"
'Adds the field
loadedDocument.Form.Fields.Add(signatureField)

'Saves the certified PDF document
loadedDocument.Save("Output.pdf")
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Add-a-digital-signature-to-an-existing-document/).

## Adding a digital signature using X509Certificate2

The following code example illustrates how to add digital signature in a PDF document using [X509Certificate2](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfCertificate.html#Syncfusion_Pdf_Security_PdfCertificate__ctor_System_Security_Cryptography_X509Certificates_X509Certificate2_) as follows.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Add-digital-signature-using-X509Certificate2/.NET/Add-digital-signature-using-X509Certificate2/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;
using System.Security.Cryptography.X509Certificates;

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Adds a new page  
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;

//Creates a certificate instance from PFX file with private key  
X509Certificate2 certificate = new X509Certificate2("PDF.pfx", "password123");
PdfCertificate pdfCertificate = new PdfCertificate(certificate);
//Creates a digital signature  
PdfSignature signature = new PdfSignature(document, page, pdfCertificate, "Signature");
//Sets an image for signature field
FileStream imageStream = new FileStream("signature.jpg", FileMode.Open, FileAccess.Read);
PdfBitmap signatureImage = new PdfBitmap(imageStream);
//Sets signature information
signature.Bounds = new RectangleF(new PointF(0, 0), signatureImage.PhysicalDimension);
signature.ContactInfo = "johndoe@owned.us";
signature.LocationInfo = "Honolulu, Hawaii";
signature.Reason = "I am author of this document.";
//Draws the signature image
signature.Appearance.Normal.Graphics.DrawImage(signatureImage, 0, 0);

//Save the document
document.Save("Output.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;
using System.Security.Cryptography.X509Certificates;

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Adds a new page  
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;

//Creates a certificate instance from PFX file with private key  
X509Certificate2 certificate = new X509Certificate2("PDF.pfx", "password123");
PdfCertificate pdfCertificate = new PdfCertificate(certificate);
//Creates a digital signature  
PdfSignature signature = new PdfSignature(document, page, pdfCertificate, "Signature");
//Sets an image for signature field
PdfBitmap signatureImage = new PdfBitmap(@"signature.jpg");
//Sets signature information
signature.Bounds = new RectangleF(new PointF(0, 0), signatureImage.PhysicalDimension);
signature.ContactInfo = "johndoe@owned.us";
signature.LocationInfo = "Honolulu, Hawaii";
signature.Reason = "I am author of this document.";
//Draws the signature image
signature.Appearance.Normal.Graphics.DrawImage(signatureImage, 0, 0);

//Save the document
document.Save("Output.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Security
Imports System.Security.Cryptography.X509Certificates

'Creates a new PDF document
Dim document As New PdfDocument()
'Adds a new page  
Dim page As PdfPage = document.Pages.Add()
'Create PDF graphics for the page
Dim graphics As PdfGraphics = page.Graphics

'Creates a certificate instance from PFX file with private key  
Dim certificate As New X509Certificate2("PDF.pfx", "password123")
Dim pdfCertificate As New PdfCertificate(certificate)
'Creates a digital signature 
Dim signature As New PdfSignature(document, page, pdfCertificate, "Signature")
'Sets an image for signature field
Dim signatureImage As New PdfBitmap("signature.jpg")
'Sets signature information
signature.Bounds = New RectangleF(New PointF(0, 0), signatureImage.PhysicalDimension)
signature.ContactInfo = "johndoe@owned.us"
signature.LocationInfo = "Honolulu, Hawaii"
signature.Reason = "I am author of this document."
'Draws the signature image
signature.Appearance.Normal.Graphics.DrawImage(signatureImage, 0, 0)

'Save the document
document.Save("Output.pdf")
'Close the document
document.Close(True)      

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Add-digital-signature-using-X509Certificate2/).

## Signing an existing document

You can load the signature field from the existing PDF document using [PdfLoadedSignatureField](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedSignatureField.html) class and add certificate to the document using [PdfCertificate](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfCertificate.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Signing-an-existing-PDF-document/.NET/Signing-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Gets the first page of the document
PdfLoadedPage page = loadedDocument.Pages[0] as PdfLoadedPage;
//Gets the first signature field of the PDF document
PdfLoadedSignatureField field = loadedDocument.Form.Fields[0] as PdfLoadedSignatureField;

//Creates a certificate
FileStream certificateStream = new FileStream("PDF.pfx", FileMode.Open, FileAccess.Read);
PdfCertificate certificate = new PdfCertificate(certificateStream, "password123");
field.Signature = new PdfSignature(loadedDocument, page, certificate, "Signature", field);

//Save the document
loadedDocument.Save("Output.pdf");
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Loads a PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Gets the first page of the document
PdfLoadedPage page = loadedDocument.Pages[0] as PdfLoadedPage;
//Gets the first signature field of the PDF document
PdfLoadedSignatureField field = loadedDocument.Form.Fields[0] as PdfLoadedSignatureField;

//Creates a certificate
PdfCertificate certificate = new PdfCertificate(@"PDF.pfx", "password123");
field.Signature = new PdfSignature(loadedDocument,page,certificate,"Signature",field);

//Saves the document
loadedDocument.Save("Output.pdf");
//Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
 
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security

'Loads a PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Gets the first page of the document
Dim page As PdfLoadedPage = TryCast(loadedDocument.Pages(0), PdfLoadedPage)
'Gets the first signature field of the PDF document
Dim field As PdfLoadedSignatureField = TryCast(loadedDocument.Form.Fields(0), PdfLoadedSignatureField)

'Creates a certificate
Dim certificate As New PdfCertificate("PDF.pfx", "password123")
field.Signature = New PdfSignature(loadedDocument, page, certificate, "Signature", field)

'Saves the document
loadedDocument.Save("Output.pdf")
'Close the document
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Signing-an-existing-PDF-document/).

## Sign an existing document using stream

You can load the signature field from an existing PDF document using [PdfLoadedSignatureField](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedSignatureField.html) class and add certificate to the document as stream using [PdfCertificate](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfCertificate.html) as follows.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Gets the first page of the document
PdfLoadedPage page = loadedDocument.Pages[0] as PdfLoadedPage;
//Gets the first signature field of the PDF document
PdfLoadedSignatureField field = loadedDocument.Form.Fields[0] as PdfLoadedSignatureField;

//Creates a certificate
FileStream certificateStream = new FileStream("PDF.pfx", FileMode.Open, FileAccess.Read);
PdfCertificate certificate = new PdfCertificate(certificateStream, "password123");
field.Signature = new PdfSignature(loadedDocument, page, certificate, "Signature", field);

//Save the document
loadedDocument.Save("Output.pdf");
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
 
using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Loads a PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Gets the first page of the document
PdfLoadedPage page = loadedDocument.Pages[0] as PdfLoadedPage;
//Gets the first signature field of the PDF document
PdfLoadedSignatureField field = loadedDocument.Form.Fields[0] as PdfLoadedSignatureField;

//Gets the stream from .pfx file
Stream pfxStream = File.OpenRead("PDF.pfx");
//Creates a certificate instance from PFX file stream with private key
PdfCertificate certificate = new PdfCertificate(pfxStream, "password123");
field.Signature = new PdfSignature(loadedDocument, page, certificate, "Signature", field);

//Save the document
loadedDocument.Save("Output.pdf");
//Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security

'Loads a PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Gets the first page of the document
Dim page As PdfLoadedPage = TryCast(loadedDocument.Pages(0), PdfLoadedPage)
'Gets the first signature field of the PDF document
Dim field As PdfLoadedSignatureField = TryCast(loadedDocument.Form.Fields(0), PdfLoadedSignatureField)

'Gets the stream from .pfx file
Dim pfxStream As Stream = File.OpenRead("PDF.pfx")
'Creates a certificate instance from PFX file stream with private key
Dim certificate As New PdfCertificate(pfxStream, "password123")
field.Signature = New PdfSignature(loadedDocument, page, certificate, "Signature", field)

'Save the document
loadedDocument.Save("Output.pdf")
'Close the document
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

## Verify if a signature field is signed

The [IsSigned](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedSignatureField.html#Syncfusion_Pdf_Parsing_PdfLoadedSignatureField_IsSigned) property in the [PdfLoadedSignatureField](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedSignatureField.html) class allows you to determine whether a signature field in a PDF document has been signed.

The following code example demonstrates how to check if a signature field is signed.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Check-If-PDF-Is-Signed/.NET/Check-If-PDF-Is-Signed/Program.cs" %}

using Syncfusion.Pdf.Parsing;

// Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

// Check if the document contains a form with fields
if (loadedDocument.Form == null || loadedDocument.Form.Fields.Count == 0)
{
    Console.WriteLine("No signature fields found in the document.");
}
else
{
    // Iterate through all fields in the form
    foreach (PdfLoadedField field in loadedDocument.Form.Fields)
    {
        // Check if the field is a signature field
        PdfLoadedSignatureField signatureField = field as PdfLoadedSignatureField;
        if (signatureField != null)
        {
            // Determine whether the signature field is signed or not
            string status = signatureField.IsSigned ? "Signed" : "UnSigned";

            // Output the result for each signature field
            Console.WriteLine("Signature Field " + signatureField.Name + " is: " + status);
        }
    }
}

// Close the document
loadedDocument.Close(true);


{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

    using Syncfusion.Pdf.Parsing;

    // Load the PDF document
    PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

    // Check if the document contains a form with fields
    if (loadedDocument.Form == null || loadedDocument.Form.Fields.Count == 0)
    {
        Console.WriteLine("No signature fields found in the document.");
    }
    else
    {
        // Iterate through all fields in the form
        foreach (PdfLoadedField field in loadedDocument.Form.Fields)
        {
            // Check if the field is a signature field
            PdfLoadedSignatureField signatureField = field as PdfLoadedSignatureField;
            if (signatureField != null)
            {
                // Determine whether the signature field is signed or not
                string status = signatureField.IsSigned ? "Signed" : "UnSigned";

                // Output the result for each signature field
                Console.WriteLine("Signature Field " + signatureField.Name + " is: " + status);
            }
        }
    }

    // Close the document
    loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing

' Load the PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")

' Check if the document contains a form with fields
If loadedDocument.Form Is Nothing OrElse loadedDocument.Form.Fields.Count = 0 Then
    Console.WriteLine("No signature fields found in the document.")
Else
    ' Iterate through all fields in the form
    For Each field As PdfLoadedField In loadedDocument.Form.Fields
        ' Check if the field is a signature field
        Dim signatureField As PdfLoadedSignatureField = TryCast(field, PdfLoadedSignatureField)
        If signatureField IsNot Nothing Then
            ' Determine whether the signature field is signed or not
            Dim status As String = If(signatureField.IsSigned, "Signed", "UnSigned")

            ' Output the result for each signature field
            Console.WriteLine("Signature Field " & signatureField.Name & " is: " & status)
        End If
    Next
End If

' Close the document
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Check-If-PDF-Is-Signed/.NET).

## Externally sign a PDF document 

You can sign the PDF document with an external digital signature created from various sources, such as an HSM, USB token, smart card, or other cloud services such as DigitalSign. The following approaches are available for externally signing the PDF documents.

* [ComputeHash](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html#Syncfusion_Pdf_Security_PdfSignature_ComputeHash) event 
* [IPdfExternalSigner](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html#Syncfusion_Pdf_Security_PdfSignature_ComputeHash) interface

### Externally sign the PDF document using ComputeHash event 

The following code example shows how to sign the PDF document from an external signature using [ComputeHash](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html#Syncfusion_Pdf_Security_PdfSignature_ComputeHash) event.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Externally-sign-a-PDF-document/.NET/Externally-sign-a-PDF-document/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using System.Security.Cryptography;
using System.Security.Cryptography.Pkcs;
using System.Security.Cryptography.X509Certificates;

//Load the PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

//Creates a digital signature
PdfSignature signature = new PdfSignature(document, document.Pages[0], null, "DigitalSignature");
signature.ComputeHash += Signature_ComputeHash;

//Save the document
document.Save("Output.pdf");
//Close the document.
document.Close(true);

private static void Signature_ComputeHash1(object sender, PdfSignatureEventArgs ars)
{
    //Get the document bytes
    byte[] documentBytes = ars.Data;
    SignedCms signedCms = new SignedCms(new ContentInfo(documentBytes), detached: true);

    //Compute the signature using the specified digital ID file and the password
    FileStream certificateStream = new FileStream("DigitalSignatureTest.pfx", FileMode.Open, FileAccess.Read);
    X509Certificate2 certificate = new X509Certificate2(certificateStream, "DigitalPass123");
    var cmsSigner = new CmsSigner(certificate);

    //Set the digest algorithm SHA256
    cmsSigner.DigestAlgorithm = new Oid("2.16.840.1.101.3.4.2.1");
    signedCms.ComputeSignature(cmsSigner);

    //Embed the encoded digital signature to the PDF document
    ars.SignedData = signedCms.Encode();
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using System.Security.Cryptography;
using System.Security.Cryptography.Pkcs;
using System.Security.Cryptography.X509Certificates;
 
//Load existing PDF document
PdfLoadedDocument document = new PdfLoadedDocument("PDF_Succinctly.pdf");
//Creates a digital signature
PdfSignature signature = new PdfSignature(document, document.Pages[0], null, "DigitalSignature");
signature.ComputeHash += Signature_ComputeHash;

//Save the PDF document
document.Save("ExternalSignature.pdf");
//Close the document
document.Close(true);

void Signature_ComputeHash(object sender, PdfSignatureEventArgs arguments)
{
    //Get the document bytes
    byte[] documentBytes = arguments.Data;
    SignedCms signedCms = new SignedCms(new ContentInfo(documentBytes), detached: true);

    //Compute the signature using the specified digital ID file and the password
    X509Certificate2 certificate = new X509Certificate2("DigitalSignatureTest.pfx", "DigitalPass123");
    var cmsSigner = new CmsSigner(certificate);
    
    //Set the digest algorithm SHA256
    cmsSigner.DigestAlgorithm = new Oid("2.16.840.1.101.3.4.2.1");
    signedCms.ComputeSignature(cmsSigner);

    //Embed the encoded digital signature to the PDF document
    arguments.SignedData = signedCms.Encode();
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
 
Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security
Imports System.Security.Cryptography
Imports System.Security.Cryptography.Pkcs
Imports System.Security.Cryptography.X509Certificates

'Load existing PDF document
Dim document As PdfLoadedDocument = New PdfLoadedDocument("PDF_Succinctly.pdf")
'Creates a digital signature
Dim signature As PdfSignature = New PdfSignature(document, document.Pages(0), Nothing, "DigitalSignature")
AddHandler signature.ComputeHash, AddressOf Signature_ComputeHash

'Save the PDF document
document.Save("ExternalSignature.pdf")
'Close the document
document.Close(True)

Private Sub Signature_ComputeHash(ByVal sender As Object, ByVal arguments As PdfSignatureEventArgs)
    'Get the document bytes
    Dim documentBytes As Byte() = arguments.Data
    Dim signedCms As SignedCms = New SignedCms(New ContentInfo(documentBytes), detached:=True)

    'Compute the signature using the specified digital ID file and the password
    Dim certificate As X509Certificate2 = New X509Certificate2("DigitalSignatureTest.pfx", "DigitalPass123")
    Dim cmsSigner = New CmsSigner(certificate)

    'Set the digest algorithm SHA256
    cmsSigner.DigestAlgorithm = New Oid("2.16.840.1.101.3.4.2.1")
    signedCms.ComputeSignature(cmsSigner)

    'Embed the encoded digital signature to the PDF document
    arguments.SignedData = signedCms.Encode()
End Sub

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Externally-sign-a-PDF-document/).

### Externally sign the PDF document using IPdfExternalSigner

The following code example shows how to sign the PDF document from external signature using [IPdfExternalSigner](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.IPdfExternalSigner.html).

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Externally-sign-the-PDF-document-using-IPdfExternalSigner/.NET/Externally-sign-the-PDF-document/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using Syncfusion.Drawing;
using System.Security.Cryptography.X509Certificates;
using System.Security.Cryptography;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Creates a digital signature.
PdfSignature signature = new PdfSignature(loadedDocument, loadedDocument.Pages[0], null, "Signature");
//Sets the signature information.
signature.Bounds = new RectangleF(new PointF(0, 0), new SizeF(100, 30));
signature.Settings.CryptographicStandard = CryptographicStandard.CADES;
signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA1;

//Create an external signer.
IPdfExternalSigner externalSignature = new ExternalSigner("SHA1");

//Add public certificates.
List<X509Certificate2> certificates = new List<X509Certificate2>();
certificates.Add(new X509Certificate2(Convert.FromBase64String(PublicCert)));
signature.AddExternalSigner(externalSignature, certificates, null);

//Save the document
loadedDocument.Save("Output.pdf");
//Close the document.
loadedDocument.Close(true);

//Create the external signer class and sign the document hash.
class ExternalSigner : IPdfExternalSigner
{
    private string _hashAlgorithm;
    public string HashAlgorithm
    {
        get { return _hashAlgorithm; }
    }

    public ExternalSigner(string hashAlgorithm)
    {
        _hashAlgorithm = hashAlgorithm;
    }
    public byte[] Sign(byte[] message, out byte[] timeStampResponse)
    {
        timeStampResponse = null;
        FileStream certificateStream = new FileStream("PDF.pfx", FileMode.Open, FileAccess.Read);
        X509Certificate2 digitalID = new X509Certificate2(new X509Certificate2(certificateStream, "password123"));
        if (digitalID.PrivateKey is System.Security.Cryptography.RSACryptoServiceProvider)
        {
            System.Security.Cryptography.RSACryptoServiceProvider rsa = (System.Security.Cryptography.RSACryptoServiceProvider)digitalID.PrivateKey;
            return rsa.SignData(message, HashAlgorithm);
        }
        else if (digitalID.PrivateKey is RSACng)
        {
            RSACng rsa = (RSACng)digitalID.PrivateKey;
            return rsa.SignData(message, System.Security.Cryptography.HashAlgorithmName.SHA1, RSASignaturePadding.Pkcs1);
        }
        else if (digitalID.PrivateKey is System.Security.Cryptography.RSAOpenSsl)
        {       
            System.Security.Cryptography.RSAOpenSsl rsa = (System.Security.Cryptography.RSAOpenSsl)digitalID.PrivateKey;
            return rsa.SignData(message, System.Security.Cryptography.HashAlgorithmName.SHA1, RSASignaturePadding.Pkcs1);
           }
        return null;
    }
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using System.Drawing;
using System.Security.Cryptography.X509Certificates;
using System.Security.Cryptography;

//Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Creates a digital signature.
PdfSignature signature = new PdfSignature(loadedDocument, loadedDocument.Pages[0], null, "Signature");
//Sets the signature information.
signature.Bounds = new RectangleF(new PointF(0, 0), new SizeF(100, 30));
signature.Settings.CryptographicStandard = CryptographicStandard.CADES;
signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA1;

//Create an external signer.
IPdfExternalSigner externalSignature = new ExternalSigner("SHA1");

//Add public certificates.
List<X509Certificate2> certificates = new List<X509Certificate2>();
certificates.Add(new X509Certificate2(Convert.FromBase64String(PublicCert)));
signature.AddExternalSigner(externalSignature, certificates, null);

//Saves the document.
loadedDocument.Save("Output.pdf");
//Closes the document.
loadedDocument.Close(true);

//Create the external signer class and sign the document hash.
class ExternalSigner : IPdfExternalSigner
{
    private string _hashAlgorithm;
    public string HashAlgorithm
    {
        get { return _hashAlgorithm; }
    }

    public ExternalSigner(string hashAlgorithm)
    {
        _hashAlgorithm = hashAlgorithm;
    }
    public byte[] Sign(byte[] message, out byte[] timeStampResponse)
    {
        timeStampResponse = null;

        X509Certificate2 digitalID = new X509Certificate2(new X509Certificate2(Path.GetFullPath("PDF.pfx"), "password123"));
        if (digitalID.PrivateKey is System.Security.Cryptography.RSACryptoServiceProvider)
        {
            System.Security.Cryptography.RSACryptoServiceProvider rsa = (System.Security.Cryptography.RSACryptoServiceProvider)digitalID.PrivateKey;
            return rsa.SignData(message, HashAlgorithm);
        }
        else if (digitalID.PrivateKey is RSACng)
        {
            RSACng rsa = (RSACng)digitalID.PrivateKey;
            return rsa.SignData(message, System.Security.Cryptography.HashAlgorithmName.SHA1, RSASignaturePadding.Pkcs1);
        }
        return null;
    }
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security
Imports System.Security.Cryptography
Imports System.Drawing
Imports System.Security.Cryptography.X509Certificates

'Load an existing PDF document.
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")

'Creates a digital signature. 
Dim signature As PdfSignature = New PdfSignature(loadedDocument, loadedDocument.Pages(0), Nothing, "Signature")
'Sets the signature information.
signature.Bounds = New RectangleF(New PointF(0, 0), New SizeF(100, 30))
signature.Settings.CryptographicStandard = CryptographicStandard.CADES
signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA1

'Create an external signer.
Dim externalSignature As IPdfExternalSigner = New ExternalSigner("SHA1")
Dim certificates As List(Of X509Certificate2) = New List(Of X509Certificate2)()
certificates.Add(New X509Certificate2(Convert.FromBase64String(PublicCert)))
signature.AddExternalSigner(externalSignature, certificates, Nothing)

'Saves the document.
loadedDocument.Save("Output.pdf")
'Closes the document.
loadedDocument.Close(True)

Class ExternalSigner
    Implements IPdfExternalSigner

    Private _hashAlgorithm As String

    Public ReadOnly Property HashAlgorithm As String Implements IPdfExternalSigner.HashAlgorithm
        Get
            Return _hashAlgorithm
        End Get
    End Property

    Public Sub New(ByVal hashAlgorithm As String)
        _hashAlgorithm = hashAlgorithm
    End Sub

    Public Function Sign(message() As Byte, ByRef timeStampResponse() As Byte) As Byte() Implements IPdfExternalSigner.Sign
        timeStampResponse = Nothing
        Dim digitalID As X509Certificate2 = New X509Certificate2(New X509Certificate2("PDF.pfx", "password123"))

        If TypeOf digitalID.PrivateKey Is System.Security.Cryptography.RSACryptoServiceProvider Then
            Dim rsa As System.Security.Cryptography.RSACryptoServiceProvider = CType(digitalID.PrivateKey, System.Security.Cryptography.RSACryptoServiceProvider)
            Return rsa.SignData(message, HashAlgorithm)
        ElseIf TypeOf digitalID.PrivateKey Is RSACng Then
            Dim rsa As RSACng = CType(digitalID.PrivateKey, RSACng)
            Return rsa.SignData(message, System.Security.Cryptography.HashAlgorithmName.SHA1, RSASignaturePadding.Pkcs1)
        End If

        Return Nothing
    End Function
End Class

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Externally-sign-the-PDF-document-using-IPdfExternalSigner/).

## Adding Timestamps to a PDF document using external signing

This section explains how to add a timestamp to a PDF document during the external signing process. We have implemented a solution that generates a timestamp response from a timestamp server URI using the [BouncyCastle](https://www.nuget.org/packages/Portable.BouncyCastle) library. The accepted timestamp token follows the RFC3161 standard.

N> In this example, we have used the open-source [BouncyCastle](https://www.nuget.org/packages/Portable.BouncyCastle) library. Ensure you review its licensing before including it in your production environment. Alternatively, you can directly use the timestamp token provided by your service provider.

The following example illustrates the process of adding timestamps to a PDF document during the external signing process.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using Syncfusion.Drawing;
using System.Security.Cryptography.X509Certificates;
using System.Security.Cryptography;
using Org.BouncyCastle.Tsp;
using System.Net;
using System.Text;
using Org.BouncyCastle.Math;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

// Create a digital signature for the first page of the document.
PdfSignature signature = new PdfSignature(loadedDocument, loadedDocument.Pages[0], null, "Signature");

// Set the signature bounds and cryptographic settings.
signature.Bounds = new RectangleF(new PointF(0, 0), new SizeF(100, 30));
signature.Settings.CryptographicStandard = CryptographicStandard.CADES;
signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA1;

// Create an external signer using the SHA1 hash algorithm.
IPdfExternalSigner externalSignature = new ExternalSigner("SHA1");

// Add the public certificates for the external signer.
List<X509Certificate2> certificates = new List<X509Certificate2>();
certificates.Add(new X509Certificate2(Convert.FromBase64String(PublicCert)));
signature.AddExternalSigner(externalSignature, certificates, null);

//Save the document
loadedDocument.Save("Output.pdf");
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using Syncfusion.Drawing;
using System.Security.Cryptography.X509Certificates;
using System.Security.Cryptography;
using Org.BouncyCastle.Tsp;
using System.Net;
using System.Text;
using Org.BouncyCastle.Math;

//Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Creates a digital signature.
PdfSignature signature = new PdfSignature(loadedDocument, loadedDocument.Pages[0], null, "Signature");
//Sets the signature information.
signature.Bounds = new RectangleF(new PointF(0, 0), new SizeF(100, 30));
signature.Settings.CryptographicStandard = CryptographicStandard.CADES;
signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA1;

//Create an external signer.
IPdfExternalSigner externalSignature = new ExternalSigner("SHA1");

//Add public certificates.
List<X509Certificate2> certificates = new List<X509Certificate2>();
certificates.Add(new X509Certificate2(Convert.FromBase64String(PublicCert)));
signature.AddExternalSigner(externalSignature, certificates, null);

//Saves the document.
loadedDocument.Save("Output.pdf");
//Closes the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security
Imports Syncfusion.Drawing
Imports System.Security.Cryptography.X509Certificates
Imports System.Security.Cryptography
Imports Org.BouncyCastle.Tsp
Imports System.Net
Imports System.Text
Imports Org.BouncyCastle.Math

'Load an existing PDF document.
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")

'Creates a digital signature. 
Dim signature As PdfSignature = New PdfSignature(loadedDocument, loadedDocument.Pages(0), Nothing, "Signature")
'Sets the signature information.
signature.Bounds = New RectangleF(New PointF(0, 0), New SizeF(100, 30))
signature.Settings.CryptographicStandard = CryptographicStandard.CADES
signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA1

'Create an external signer.
Dim externalSignature As IPdfExternalSigner = New ExternalSigner("SHA1")
Dim certificates As List(Of X509Certificate2) = New List(Of X509Certificate2)()
certificates.Add(New X509Certificate2(Convert.FromBase64String(PublicCert)))
signature.AddExternalSigner(externalSignature, certificates, Nothing)

'Saves the document.
loadedDocument.Save("Output.pdf")
'Closes the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

To sign the document using the **X509Certificate2** API and generate an RFC3161-compliant timestamp token with the BouncyCastle library, add the following code:

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

// External signer class that implements IPdfExternalSigner for signing the document hash.
class ExternalSigner : IPdfExternalSigner
{
  private string _hashAlgorithm;

  // Gets the hash algorithm used for signing.
  public string HashAlgorithm
  {
      get { return _hashAlgorithm; }
  }

  // Constructor that sets the hash algorithm for the signer.
  public ExternalSigner(string hashAlgorithm)
  {
      _hashAlgorithm = hashAlgorithm;
  }

  // Sign the document hash and return the timestamp response.
  public byte[] Sign(byte[] message, out byte[] timeStampResponse)
  {
      byte[] signedBytes = null;
      X509Certificate2 digitalID = new X509Certificate2(new X509Certificate2(Path.GetFullPath(@"Data/PDF.pfx"), "password123"));

      // Use the appropriate signing algorithm based on the private key type.
      if (digitalID.PrivateKey is System.Security.Cryptography.RSACryptoServiceProvider)
      {
          System.Security.Cryptography.RSACryptoServiceProvider rsa = (System.Security.Cryptography.RSACryptoServiceProvider)digitalID.PrivateKey;
          signedBytes = rsa.SignData(message, HashAlgorithm);
      }
      else if (digitalID.PrivateKey is RSACng)
      {
          RSACng rsa = (RSACng)digitalID.PrivateKey;
          signedBytes = rsa.SignData(message, System.Security.Cryptography.HashAlgorithmName.SHA1, RSASignaturePadding.Pkcs1);
      }

      // Generate an RFC3161 timestamp token for the signed data.
      timeStampResponse = GetRFC3161TimeStampToken(signedBytes);
      return signedBytes;
  }

  // Generate the RFC3161 timestamp token using the provided signed data.
  public byte[] GetRFC3161TimeStampToken(byte[] bytes)
  {
      SHA1 sha1 = SHA1CryptoServiceProvider.Create();
      byte[] hash = sha1.ComputeHash(bytes);

      // Create a timestamp request using the SHA1 hash.
      TimeStampRequestGenerator reqGen = new TimeStampRequestGenerator();
      reqGen.SetCertReq(true);
      TimeStampRequest tsReq = reqGen.Generate(TspAlgorithms.Sha1, hash, BigInteger.ValueOf(100));
      byte[] tsData = tsReq.GetEncoded();

      // Send the timestamp request to the server.
      HttpWebRequest req = (HttpWebRequest)WebRequest.Create("https://rfc3161.ai.moda"); // Update your timestamp URI here
      req.Method = "POST";
      req.ContentType = "application/timestamp-query";
      req.Headers.Add("Authorization", "Basic " + Convert.ToBase64String(Encoding.ASCII.GetBytes("9024:yourPass")));
      req.ContentLength = tsData.Length;

      // Write the request data to the stream.
      Stream reqStream = req.GetRequestStream();
      reqStream.Write(tsData, 0, tsData.Length);
      reqStream.Close();

      // Get the timestamp response from the server.
      HttpWebResponse res = (HttpWebResponse)req.GetResponse();
      if (res != null)
      {
          Stream resStream = new BufferedStream(res.GetResponseStream());
          TimeStampResponse tsRes = new TimeStampResponse(resStream);
          return tsRes.TimeStampToken.GetEncoded();
      }

      return null;
  }
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

// External signer class that implements IPdfExternalSigner for signing the document hash.
class ExternalSigner : IPdfExternalSigner
{
  private string _hashAlgorithm;

  // Gets the hash algorithm used for signing.
  public string HashAlgorithm
  {
      get { return _hashAlgorithm; }
  }

  // Constructor that sets the hash algorithm for the signer.
  public ExternalSigner(string hashAlgorithm)
  {
      _hashAlgorithm = hashAlgorithm;
  }

  // Sign the document hash and return the timestamp response.
  public byte[] Sign(byte[] message, out byte[] timeStampResponse)
  {
      byte[] signedBytes = null;
      X509Certificate2 digitalID = new X509Certificate2(new X509Certificate2(Path.GetFullPath(@"Data/PDF.pfx"), "password123"));

      // Use the appropriate signing algorithm based on the private key type.
      if (digitalID.PrivateKey is System.Security.Cryptography.RSACryptoServiceProvider)
      {
          System.Security.Cryptography.RSACryptoServiceProvider rsa = (System.Security.Cryptography.RSACryptoServiceProvider)digitalID.PrivateKey;
          signedBytes = rsa.SignData(message, HashAlgorithm);
      }
      else if (digitalID.PrivateKey is RSACng)
      {
          RSACng rsa = (RSACng)digitalID.PrivateKey;
          signedBytes = rsa.SignData(message, System.Security.Cryptography.HashAlgorithmName.SHA1, RSASignaturePadding.Pkcs1);
      }

      // Generate an RFC3161 timestamp token for the signed data.
      timeStampResponse = GetRFC3161TimeStampToken(signedBytes);
      return signedBytes;
  }

  // Generate the RFC3161 timestamp token using the provided signed data.
  public byte[] GetRFC3161TimeStampToken(byte[] bytes)
  {
      SHA1 sha1 = SHA1CryptoServiceProvider.Create();
      byte[] hash = sha1.ComputeHash(bytes);

      // Create a timestamp request using the SHA1 hash.
      TimeStampRequestGenerator reqGen = new TimeStampRequestGenerator();
      reqGen.SetCertReq(true);
      TimeStampRequest tsReq = reqGen.Generate(TspAlgorithms.Sha1, hash, BigInteger.ValueOf(100));
      byte[] tsData = tsReq.GetEncoded();

      // Send the timestamp request to the server.
      HttpWebRequest req = (HttpWebRequest)WebRequest.Create("https://rfc3161.ai.moda"); // Update your timestamp URI here
      req.Method = "POST";
      req.ContentType = "application/timestamp-query";
      req.Headers.Add("Authorization", "Basic " + Convert.ToBase64String(Encoding.ASCII.GetBytes("9024:yourPass")));
      req.ContentLength = tsData.Length;

      // Write the request data to the stream.
      Stream reqStream = req.GetRequestStream();
      reqStream.Write(tsData, 0, tsData.Length);
      reqStream.Close();

      // Get the timestamp response from the server.
      HttpWebResponse res = (HttpWebResponse)req.GetResponse();
      if (res != null)
      {
          Stream resStream = new BufferedStream(res.GetResponseStream());
          TimeStampResponse tsRes = new TimeStampResponse(resStream);
          return tsRes.TimeStampToken.GetEncoded();
      }

      return null;
  }
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' External signer class that implements IPdfExternalSigner for signing the document hash.
Public Class ExternalSigner
    Implements IPdfExternalSigner

    Private _hashAlgorithm As String

    ' Gets the hash algorithm used for signing.
    Public ReadOnly Property HashAlgorithm() As String Implements IPdfExternalSigner.HashAlgorithm
        Get
            Return _hashAlgorithm
        End Get
    End Property

    ' Constructor that sets the hash algorithm for the signer.
    Public Sub New(hashAlgorithm As String)
        _hashAlgorithm = hashAlgorithm
    End Sub

    ' Sign the document hash and return the timestamp response.
    Public Function Sign(message As Byte(), ByRef timeStampResponse As Byte()) As Byte() Implements IPdfExternalSigner.Sign
        Dim signedBytes As Byte() = Nothing

        ' Load the digital ID (certificate) from the file system.
        Dim digitalID As New X509Certificate2(Path.GetFullPath("Data/PDF.pfx"), "password123")

        ' Use the appropriate signing algorithm based on the private key type.
        If TypeOf digitalID.PrivateKey Is RSACryptoServiceProvider Then
            ' Use RSACryptoServiceProvider to sign the data.
            Dim rsa As RSACryptoServiceProvider = CType(digitalID.PrivateKey, RSACryptoServiceProvider)
            signedBytes = rsa.SignData(message, HashAlgorithm)
        ElseIf TypeOf digitalID.PrivateKey Is RSACng Then
            ' Use RSACng to sign the data with SHA1 and PKCS1 padding.
            Dim rsa As RSACng = CType(digitalID.PrivateKey, RSACng)
            signedBytes = rsa.SignData(message, HashAlgorithmName.SHA1, RSASignaturePadding.Pkcs1)
        End If

        ' Generate an RFC3161 timestamp token for the signed data.
        timeStampResponse = GetRFC3161TimeStampToken(signedBytes)

        ' Return the signed bytes.
        Return signedBytes
    End Function

    ' Generate the RFC3161 timestamp token using the provided signed data.
    Public Function GetRFC3161TimeStampToken(bytes As Byte()) As Byte()
        ' Create a SHA1 hash of the provided signed data.
        Dim sha1 As SHA1 = SHA1CryptoServiceProvider.Create()
        Dim hash As Byte() = sha1.ComputeHash(bytes)

        ' Create a timestamp request using the SHA1 hash.
        Dim reqGen As New TimeStampRequestGenerator()
        reqGen.SetCertReq(True)
        Dim tsReq As TimeStampRequest = reqGen.Generate(TspAlgorithms.Sha1, hash, BigInteger.ValueOf(100))
        Dim tsData As Byte() = tsReq.GetEncoded()

        ' Send the timestamp request to the server.
        Dim req As HttpWebRequest = CType(WebRequest.Create("https://rfc3161.ai.moda"), HttpWebRequest) ' Update your timestamp URI here
        req.Method = "POST"
        req.ContentType = "application/timestamp-query"
        req.Headers.Add("Authorization", "Basic " & Convert.ToBase64String(Encoding.ASCII.GetBytes("9024:yourPass")))
        req.ContentLength = tsData.Length

        ' Write the request data to the request stream.
        Using reqStream As Stream = req.GetRequestStream()
            reqStream.Write(tsData, 0, tsData.Length)
        End Using

        ' Get the response from the timestamp server.
        Dim res As HttpWebResponse = CType(req.GetResponse(), HttpWebResponse)

        ' If a response is received, read and return the timestamp token.
        If res IsNot Nothing Then
            Using resStream As Stream = New BufferedStream(res.GetResponseStream())
                Dim tsRes As New TimeStampResponse(resStream)
                Return tsRes.TimeStampToken.GetEncoded()
            End Using
        End If

        ' Return null if no valid response is received.
        Return Nothing
    End Function
End Class

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/TimestampingPDFwithExternalSigning/).

## Create Long Term Validation (LTV) when signing PDF documents externally

You can create a Long Term validation (LTV) when signing PDF documents externally using your private/public certificates.The following code example shows how to create an LTV when signing a PDF document from external signature using [CreateLongTermValidity](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html#Syncfusion_Pdf_Security_PdfSignature_CreateLongTermValidity_System_Collections_Generic_List_System_Security_Cryptography_X509Certificates_X509Certificate2__) method in [PdfSignature](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Create-LTV-when-signing-PDF-documents-externally/.NET/Create-LTV-when-signing-PDF-documents-externally/Program.cs" %}

    using Syncfusion.Pdf;
    using Syncfusion.Pdf.Parsing;
    using Syncfusion.Pdf.Security;
    using System.Security.Cryptography;
    using System.Security.Cryptography.Pkcs;
    using System.Security.Cryptography.X509Certificates;

    //Load the PDF document
    PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

    //Get the page of the existing PDF document.
    PdfLoadedPage loadedPage = document.Pages[0] as PdfLoadedPage;

    //Create a new PDF signature without PdfCertificate instance.
    PdfSignature signature = new PdfSignature(document, loadedPage, null, "Signature1");

    //Hook up the ComputeHash event.
    signature.ComputeHash += Signature_ComputeHash;

    //Save the document.
    document.Save("SignedDocument.pdf");
    //Close the document
    document.Close(true);

    //Load an existing PDF stream.
    PdfLoadedDocument loadedDocument = new PdfLoadedDocument("SignedDocument.pdf");

    //Gets the first signature field of the PDF document
    PdfLoadedSignatureField signatureField = loadedDocument.Form.Fields[0] as PdfLoadedSignatureField;
    PdfSignature pdfSignature = signatureField.Signature;

    //Create X509Certificate2 from your certificate to create a long-term validity.
    X509Certificate2 x509 = new X509Certificate2(Path.GetFullPath(@"Data/PDF.pfx"), "syncfusion");

    //Create LTV with your public certificates.
    pdfSignature.CreateLongTermValidity(new List<X509Certificate2> { x509 });

    //Save the document
    loadedDocument.Save("Output.pdf");
    //Close the document.
    loadedDocument.Close(true);

    void Signature_ComputeHash(object sender, PdfSignatureEventArgs ars)
    {
        //Get the document bytes
        byte[] documentBytes = ars.Data;

        SignedCms signedCms = new SignedCms(new ContentInfo(documentBytes), detached: true);

        //Compute the signature using the specified digital ID file and the password
        X509Certificate2 certificate = new X509Certificate2(Path.GetFullPath(@"Data/PDF.pfx"), "syncfusion");
        CmsSigner cmsSigner = new CmsSigner(certificate);

        //Set the digest algorithm SHA256
        cmsSigner.DigestAlgorithm = new Oid("2.16.840.1.101.3.4.2.1");

        signedCms.ComputeSignature(cmsSigner);

        //Embed the encoded digital signature to the PDF document
        ars.SignedData = signedCms.Encode();
    }

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

    using Syncfusion.Pdf;
    using Syncfusion.Pdf.Parsing;
    using Syncfusion.Pdf.Security;
    using System.Security.Cryptography;
    using System.Security.Cryptography.Pkcs;
    using System.Security.Cryptography.X509Certificates;

    //Load an existing PDF document.
    PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

    //Get the page of the existing PDF document.
    PdfLoadedPage loadedPage = document.Pages[0] as PdfLoadedPage;

    //Create a new PDF signature without PdfCertificate instance.
    PdfSignature signature = new PdfSignature(document, loadedPage, null, "Signature1");

    //Hook up the ComputeHash event.
    signature.ComputeHash += Signature_ComputeHash;

    //Save the document.
    document.Save("SignedDocument.pdf");
    //Close the document
    document.Close(true);

    //Load an existing PDF stream..
    PdfLoadedDocument loadedDocument = new PdfLoadedDocument("SignedDocument.pdf");

    //Gets the first signature field of the PDF document
    PdfLoadedSignatureField signatureField = loadedDocument.Form.Fields[0] as PdfLoadedSignatureField;
    PdfSignature pdfSignature = signatureField.Signature;

    //Create X509Certificate2 from your certificate to create a long-term validity.
    X509Certificate2 x509 = new X509Certificate2(Path.GetFullPath(@"Data/PDF.pfx"), "syncfusion");

    //Create LTV with your public certificates.
    pdfSignature.CreateLongTermValidity(new List<X509Certificate2> { x509 });
    
    //Save and close the PDF document
    loadedDocument.Save("Output.pdf");
    loadedDocument.Close(true);

    void Signature_ComputeHash(object sender, PdfSignatureEventArgs ars)
    {
        //Get the document bytes
        byte[] documentBytes = ars.Data;

        SignedCms signedCms = new SignedCms(new ContentInfo(documentBytes), detached: true);

        //Compute the signature using the specified digital ID file and the password
        X509Certificate2 certificate = new X509Certificate2(Path.GetFullPath(@"Data/PDF.pfx"), "syncfusion");
        CmsSigner cmsSigner = new CmsSigner(certificate);

        //Set the digest algorithm SHA256
        cmsSigner.DigestAlgorithm = new Oid("2.16.840.1.101.3.4.2.1");

        signedCms.ComputeSignature(cmsSigner);

        //Embed the encoded digital signature to the PDF document
        ars.SignedData = signedCms.Encode();
    }

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

    Imports Syncfusion.Pdf
    Imports Syncfusion.Pdf.Parsing
    Imports Syncfusion.Pdf.Security
    Imports System.Security.Cryptography
    Imports System.Security.Cryptography.Pkcs
    Imports System.Security.Cryptography.X509Certificates

    ' Load an existing PDF document.
    Dim document As New PdfLoadedDocument("Input.pdf")

    ' Get the page of the existing PDF document.
    Dim loadedPage As PdfLoadedPage = TryCast(document.Pages(0), PdfLoadedPage)

    ' Create a new PDF signature without PdfCertificate instance.
    Dim signature As New PdfSignature(document, loadedPage, Nothing, "Signature1")

    ' Hook up the ComputeHash event.
    AddHandler signature.ComputeHash, AddressOf Signature_ComputeHash

    ' Save the document.
    document.Save("SignedDocument")
    ' Close the document
    document.Close(True)

    ' Load an existing PDF stream.
    Dim loadedDocument As New PdfLoadedDocument("SignedDocument")

    ' Gets the first signature field of the PDF document
    Dim signatureField As PdfLoadedSignatureField = TryCast(loadedDocument.Form.Fields(0), PdfLoadedSignatureField)
    Dim pdfSignature As PdfSignature = signatureField.Signature

    ' Create X509Certificate2 from your certificate to create a long-term validity.
    Dim x509 As New X509Certificate2(Path.GetFullPath("Data/PDF.pfx"), "syncfusion")

    ' Create LTV with your public certificates.
    pdfSignature.CreateLongTermValidity(New List(Of X509Certificate2) From {x509})

    ' Save and close the PDF document
    loadedDocument.Save("Output.pdf")
    loadedDocument.Close(True)

    Private Sub Signature_ComputeHash(sender As Object, ars As PdfSignatureEventArgs)
        ' Get the document bytes
        Dim documentBytes As Byte() = ars.Data

        Dim signedCms As New SignedCms(New ContentInfo(documentBytes), True)

        ' Compute the signature using the specified digital ID file and the password
        Dim certificate As New X509Certificate2(Path.GetFullPath("Data/PDF.pfx"), "syncfusion")
        Dim cmsSigner As New CmsSigner(certificate)

        ' Set the digest algorithm SHA256
        cmsSigner.DigestAlgorithm = New Oid("2.16.840.1.101.3.4.2.1")

        signedCms.ComputeSignature(cmsSigner)

        ' Embed the encoded digital signature to the PDF document
        ars.SignedData = signedCms.Encode()
    End Sub

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Create-LTV-when-signing-PDF-documents-externally/).

## Digitally sign a PDF document using long-term archive timestamps (LTA)

The PDF LTA signature is the next level of the LTV signature. It follows the standard PAdES B-LTA. According to the standard, the validation-related information of the timestamp is added to the DSS along with other signature information mentioned in the LTV signature.

The document timestamp is also applied to the PDF document, so it provides more viability to the signature. This level is recommended for qualified electronic signatures.

The following code example shows how to sign a PDF document with LTA using [TimeStampServer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html#Syncfusion_Pdf_Security_PdfSignature_TimeStampServer) property and [EnableLtv](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html#Syncfusion_Pdf_Security_PdfSignature_EnableLtv) property in [PdfSignature](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Sign_PDF_with_LTA/.NET/Sign_PDF_with_LTA/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using Syncfusion.Pdf;

//Load existing PDF document.
FileStream documentStream1 = new FileStream("PDF_Succinctly.pdf", FileMode.Open, FileAccess.Read);
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(documentStream1);
//Load digital ID with password.
FileStream documentStream2 = new FileStream("DigitalSignatureTest.pfx", FileMode.Open, FileAccess.Read);
PdfCertificate certificate = new PdfCertificate(documentStream2, "DigitalPass123");

//Create a signature with loaded digital ID.
PdfSignature signature = new PdfSignature(loadedDocument, loadedDocument.Pages[0], certificate, "DigitalSignature");
signature.Settings.CryptographicStandard = CryptographicStandard.CADES;
signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA256;
signature.TimeStampServer = new TimeStampServer(new Uri("http://timestamping.ensuredca.com"));
//Enable LTV document.
signature.EnableLtv = true;

//Save the PDF document.
loadedDocument.Save("LTV_document.pdf");
//Close the document.
loadedDocument.Close(true);

//Load existing PDF document.
PdfLoadedDocument ltDocument = new PdfLoadedDocument("LTV_document.pdf");
//Load the existing PDF page.
PdfLoadedPage lpage = ltDocument.Pages[0] as PdfLoadedPage;

//Create PDF signature with empty certificate.
PdfSignature timeStamp = new PdfSignature(lpage, "timestamp");
timeStamp.TimeStampServer = new TimeStampServer(new Uri("http://timestamping.ensuredca.com"));

//Save the document
ltDocument.Save("Output.pdf");
//Close the document.
ltDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using Syncfusion.Pdf;

//Load existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("PDF_Succinctly.pdf");
//Load digital ID with password.
PdfCertificate certificate = new PdfCertificate("DigitalSignatureTest.pfx", "DigitalPass123");

//Create a signature with loaded digital ID.
PdfSignature signature = new PdfSignature(loadedDocument, loadedDocument.Pages[0], certificate, "DigitalSignature");
signature.Settings.CryptographicStandard = CryptographicStandard.CADES;
signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA256;
signature.TimeStampServer = new TimeStampServer(new Uri("http://timestamping.ensuredca.com"));
//Enable LTV document.
signature.EnableLtv = true;

//Save the PDF document.
loadedDocument.Save("LTV_document.pdf");
//Close the document.
loadedDocument.Close(true);

//Load existing PDF document.
PdfLoadedDocument ltDocument = new PdfLoadedDocument("LTV_document.pdf");
//Load the existing PDF page.
PdfLoadedPage lpage = ltDocument.Pages[0] as PdfLoadedPage;

//Create PDF signature with empty certificate.
PdfSignature timeStamp = new PdfSignature(lpage, "timestamp");
timeStamp.TimeStampServer = new TimeStampServer(new Uri("http://timestamping.ensuredca.com"));

//Save and close the PDF document.
ltDocument.Save("PAdES B-LTA.pdf");
ltDocument.Close(true);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security
Imports Syncfusion.Pdf

'Loads a PDF document.
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("PDF_Succinctly.pdf")
'Load digital ID with password.
Dim certificate As PdfCertificate = New PdfCertificate("DigitalSignatureTest.pfx", "DigitalPass123")

'Create a signature with loaded digital ID.
Dim signature As PdfSignature = New PdfSignature(loadedDocument, loadedDocument.Pages(0), certificate, "DigitalSignature")
signature.Settings.CryptographicStandard = CryptographicStandard.CADES
signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA256
signature.TimeStampServer = New TimeStampServer(New Uri("http://timestamping.ensuredca.com"))
'Enable LTV document.
signature.EnableLtv = True

'Save the document.
loadedDocument.Save("LTV_document.pdf")
'Close the document.
loadedDocument.Close(True)

'Loads a PDF document.
Dim ltDocument As PdfLoadedDocument = New PdfLoadedDocument("LTV_document.pdf")
'Load the existing PDF page.
Dim lpage As PdfLoadedPage = TryCast(ltDocument.Pages(0), PdfLoadedPage)

'Create PDF signature with empty certificate.
Dim timeStamp As PdfSignature = New PdfSignature(lpage, "timestamp")
timeStamp.TimeStampServer = New TimeStampServer(New Uri("http://timestamping.ensuredca.com"))

'Save the document.
ltDocument.Save("PAdES B-LTA.pdf")
'Close the document.
ltDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Sign_PDF_with_LTA/).

N> When using a custom timestamp server for digital signatures with LTA, you may encounter  `OverflowException`  if the estimated signature size is too small.

N> To avoid this, increase the [EstimatedSignatureSize](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html#Syncfusion_Pdf_Security_PdfSignature_EstimatedSignatureSize) property to allocate enough space for the timestamp and LTV data returned by the server.

## Digitally sign a PDF document using the Windows certificate store

A Windows certificate store is a secure way to store the digital ID. If a root certificate is added to the Windows certificate store, you do not need to manually add and trust each of the certificates that are already present in the Windows certificate store.

You can retrieve the digital ID [X509Certificate2](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfCertificate.html#Syncfusion_Pdf_Security_PdfCertificate__ctor_System_Security_Cryptography_X509Certificates_X509Certificate2_) from the Windows certificate store X509Store and use it to add a digital signature to a PDF document using [PdfSignature](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html) class.

The following code example shows how to create a PDF digital signature using the Windows certificate store.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Sign_PDF_Windows_Certificate/.NET/Sign_PDF_Windows_Certificate/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using Syncfusion.Pdf;
using System.Security.Cryptography.X509Certificates;

//Initialize the Windows store.
X509Store store = new X509Store("MY", StoreLocation.CurrentUser);
store.Open(OpenFlags.ReadOnly | OpenFlags.OpenExistingOnly);
X509Certificate2Collection collection = (X509Certificate2Collection)store.Certificates;
//Find the certificate using thumb print.
X509Certificate2Collection fcollection = (X509Certificate2Collection)collection.Find(X509FindType.FindByThumbprint, "F85E1C5D93115CA3F969DA3ABC8E0E9547FCCF5A", true);
X509Certificate2 digitalID = collection[0];

//Load existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("PDF_Succinctly.pdf");
//Load X509Certificate2.
PdfCertificate certificate = new PdfCertificate(digitalID);

//Create a Revision 2 signature with loaded digital ID.
PdfSignature signature = new PdfSignature(loadedDocument, loadedDocument.Pages[0], certificate, "DigitalSignature");
//Changing the digital signature standard and hashing algorithm.
signature.Settings.CryptographicStandard = CryptographicStandard.CADES;
signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA512;

//Save the document
loadedDocument.Save("Output.pdf");
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using Syncfusion.Pdf;
using System.Security.Cryptography.X509Certificates;

//Initialize the Windows store.
X509Store store = new X509Store("MY", StoreLocation.CurrentUser);
store.Open(OpenFlags.ReadOnly | OpenFlags.OpenExistingOnly);
X509Certificate2Collection collection = (X509Certificate2Collection)store.Certificates;
//Find the certificate using thumb print.
X509Certificate2Collection fcollection = (X509Certificate2Collection)collection.Find(X509FindType.FindByThumbprint, "F85E1C5D93115CA3F969DA3ABC8E0E9547FCCF5A", true);
X509Certificate2 digitalID = fcollection[0];

//Load existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("PDF_Succinctly.pdf");
//Load X509Certificate2.
PdfCertificate certificate = new PdfCertificate(digitalID);

//Create a Revision 2 signature with loaded digital ID.
PdfSignature signature = new PdfSignature(loadedDocument, loadedDocument.Pages[0], certificate, "DigitalSignature");
//Changing the digital signature standard and hashing algorithm.
signature.Settings.CryptographicStandard = CryptographicStandard.CADES;
signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA512;

//Save the PDF document.
loadedDocument.Save("WindowsStore.pdf");
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security
Imports Syncfusion.Pdf
Imports System.Security.Cryptography.X509Certificates

'Initialize the Windows store.
Dim store As X509Store = New X509Store("MY", StoreLocation.CurrentUser)
store.Open(OpenFlags.[ReadOnly] Or OpenFlags.OpenExistingOnly)
'Find the certificate using thumb print.
Dim collection As X509Certificate2Collection = CType(store.Certificates, X509Certificate2Collection)
Dim fcollection As X509Certificate2Collection = CType(collection.Find(X509FindType.FindByThumbprint, "F85E1C5D93115CA3F969DA3ABC8E0E9547FCCF5A", True), X509Certificate2Collection)
Dim digitalID As X509Certificate2 = fcollection(0)

'Load existing PDF document.
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("PDF_Succinctly.pdf")
'Load X509Certificate2.
Dim certificate As PdfCertificate = New PdfCertificate(digitalID)
'Create a Revision 2 signature with loaded digital ID.
Dim signature As PdfSignature = New PdfSignature(loadedDocument, loadedDocument.Pages(0), certificate, "DigitalSignature")
'Changing the digital signature standard and hashing algorithm.
signature.Settings.CryptographicStandard = CryptographicStandard.CADES
signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA512

'Save the PDF document.
loadedDocument.Save("WindowsStore.pdf")
'Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Sign_PDF_Windows_Certificate/).

## Adding a signature validation appearance based on the signature 

You can add the dynamic signature validation appearance to the signature field by enabling the [EnableValidationAppearance](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html#Syncfusion_Pdf_Security_PdfSignature_EnableValidationAppearance) property available in the [PdfSignature](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html) class, the appearance will change based on the PDF reader validation. 

Refer to the following code sample.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Adding-a-signature-validation-appearance-in-a-PDF/.NET/Adding-a-signature-validation-appearance-in-a-PDF/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Adds a new page
PdfPageBase page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;

//Creates a certificate instance from the PFX file with private key
FileStream certificateStream = new FileStream("PDF.pfx", FileMode.Open, FileAccess.Read);
PdfCertificate pdfCert = new PdfCertificate(certificateStream, "password123");
//Creates a digital signature
PdfSignature signature = new PdfSignature(document, page, pdfCert, "Signature");
//Sets an image for the signature field
FileStream imageStream = new FileStream("signature.jpg", FileMode.Open, FileAccess.Read);
//Sets an image for signature field
PdfBitmap signatureImage = new PdfBitmap(imageStream);
//Sets enable signature validation appearance
signature.EnableValidationAppearance = true;
//Sets signature information
signature.Bounds = new RectangleF(new PointF(0, 0), signatureImage.PhysicalDimension);
signature.ContactInfo = "johndoe@owned.us";
signature.LocationInfo = "Honolulu, Hawaii";
signature.Reason = "I am author of this document.";
//Draws the signature image
signature.Appearance.Normal.Graphics.DrawImage(signatureImage, 0, 0);

//Save the document
document.Save("Output.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Creates a new PDF document
PdfDocument document = new PdfDocument();         
//Add a new page
PdfPageBase page = document.Pages.Add();
//Create PDF graphics for the page
PdfGraphics graphics=page.Graphics;

//Creates a certificate instance from the PFX file with private key         
PdfCertificate pdfCert = new PdfCertificate(@"PDF.pfx", "password123");
//Creates a digital signature
PdfSignature signature = new PdfSignature(document, page, pdfCert, "Signature");
//Sets an image for the signature field
PdfBitmap signatureImage = new PdfBitmap(@"signature.jpg");
//Sets enable signature validation appearance
signature.EnableValidationAppearance = true;
//Sets signature information
signature.ContactInfo = "johndoe@owned.us";
signature.LocationInfo = "Honolulu, Hawaii";
signature.Reason = "I am author of this document.";
//Draw the signature image  
signature.Appearance.Normal.Graphics.DrawImage(signatureImage, 0, 0);
 
//Save and close document
document.Save("Output.pdf");
document.Close( true );

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Security

'Creates a new PDF document
Dim document As New PdfDocument()
'Adds a new page
Dim page As PdfPageBase = document.Pages.Add()
'Create PDF graphics for the page
Dim graphics As PdfGraphics = page.Graphics

'Creates a certificate instance from the PFX file with private key
Dim pdfCert As New PdfCertificate("PDF.pfx", "password123")
'Creates a digital signature
Dim signature As New PdfSignature(document, page, pdfCert, "Signature")
'Sets an image for the signature field
Dim signatureImage As New PdfBitmap("signature.jpg")
'Sets enable signature validation appearance    
signature.EnableValidationAppearance = True
'Sets signature info
signature.Bounds = New RectangleF(New PointF(0, 0), signatureImage.PhysicalDimension)
signature.ContactInfo = "johndoe@owned.us"
signature.LocationInfo = "Honolulu, Hawaii"
signature.Reason = "I am author of this document."
'Draws the signature image
signature.Appearance.Normal.Graphics.DrawImage(signatureImage, 0, 0)

'Save and close the document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Adding-a-signature-validation-appearance-in-a-PDF/).

## Adding a timestamp in digital signature

Essential<sup>&reg;</sup> PDF allows you to add timestamp in the digital signature of the PDF document using [TimeStampServer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html#Syncfusion_Pdf_Security_PdfSignature_TimeStampServer) property in [PdfSignature](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html) class. The following code example explains the same.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Adding-a-timestamp-in-digital-signature-of-PDF/.NET/Adding-a-timestamp-in-digital-signature-of-PDF/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Adds a new page
PdfPageBase page = document.Pages.Add();
//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;

//Creates a certificate instance from PFX file with private key
FileStream certificateStream = new FileStream("PDF.pfx", FileMode.Open, FileAccess.Read);
PdfCertificate pdfCert = new PdfCertificate(certificateStream, "password123");
//Creates a digital signature
PdfSignature signature = new PdfSignature(document, page, pdfCert, "Signature");
//Sets an image for signature field
FileStream imageStream = new FileStream("syncfusion_logo.jpeg", FileMode.Open, FileAccess.Read);
//Sets an image for signature field
PdfBitmap image = new PdfBitmap(imageStream);
//Adds time stamp by using the server URI and credentials
signature.TimeStampServer = new TimeStampServer(new Uri("http://syncfusion.digistamp.com"), "user", "123456");
//Sets signature info
signature.Bounds = new RectangleF(new PointF(0, 0), image.PhysicalDimension);
signature.ContactInfo = "johndoe@owned.us";
signature.LocationInfo = "Honolulu, Hawaii";
signature.Reason = "I am author of this document.";
//Draws the signature image
signature.Appearance.Normal.Graphics.DrawImage(image, 0, 0);

//Save the document
document.Save("Output.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Adds a new page
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;

//Creates a certificate instance from PFX file with private key
PdfCertificate pdfCert = new PdfCertificate(@"PDF.pfx", "password123");
//Creates a digital signature
PdfSignature signature = new PdfSignature(page, pdfCert, "Signature");
//Change the digital signature standard and hashing algorithm
signature.Settings.CryptographicStandard = CryptographicStandard.CADES;
signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA512;
//Sets an image for signature field
PdfBitmap image = new PdfBitmap(@"syncfusion_logo.jpeg");
//Adds time stamp by using the server URI and credentials
signature.TimeStampServer = new TimeStampServer(new Uri("http://syncfusion.digistamp.com"), "user", "123456");
//Sets signature info
signature.Bounds = new RectangleF(new PointF(0, 0), image.PhysicalDimension);
signature.ContactInfo = "johndoe@owned.us";
signature.LocationInfo = "Honolulu, Hawaii";
signature.Reason = "I am author of this document.";
//Draws the signature image
signature.Appearance.Normal.Graphics.DrawImage(image, 0, 0);

//Save and close the document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Security

'Creates a new PDF document
Dim document As New PdfDocument()
'Adds a new page
Dim page As PdfPage = document.Pages.Add()
'Create PDF graphics for the page
Dim graphics As PdfGraphics = page.Graphics

'Creates a certificate instance from PFX file with private key
Dim pdfCert As New PdfCertificate("PDF.pfx", "password123")
'Creates a digital signature
Dim signature As New PdfSignature(page, pdfCert, "Signature")
'Sets an image for signature field
Dim image As New PdfBitmap("syncfusion_logo.jpeg")
'Adds time stamp by using the server URI and credentials
signature.TimeStampServer = New TimeStampServer(New Uri("http://syncfusion.digistamp.com"), "user", "123456")
'Sets signature info
signature.Bounds = New RectangleF(New PointF(0, 0), image.PhysicalDimension)
signature.ContactInfo = "johndoe@owned.us"
signature.LocationInfo = "Honolulu, Hawaii"
signature.Reason = "I am author of this document."
'Draws the signature image
signature.Appearance.Normal.Graphics.DrawImage(image, 0, 0)

'Save and close the document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Adding-a-timestamp-in-digital-signature-of-PDF/).

## Adding a timestamp to PDF document

You can add timestamp to the PDF document using [TimeStampServer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html#Syncfusion_Pdf_Security_PdfSignature_TimeStampServer) property in [PdfSignature](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html) class. The following code example explains the same.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Adding-a-timestamp-to-PDF-document/.NET/Adding-a-timestamp-to-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Security;

//Create a new pdf document
PdfDocument document = new PdfDocument();
//Adds a new page
PdfPage page = document.Pages.Add();

//Creates a digital signature
PdfSignature signature = new PdfSignature(page, "Signature");
//Add the time stamp by using the server URI
signature.TimeStampServer = new TimeStampServer(new Uri("http://syncfusion.digistamp.com"), "user", "123456");

//Save the document
document.Save("Output.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Security;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a new page
PdfPage page = document.Pages.Add();

//Creates a digital signature
PdfSignature signature = new PdfSignature(page, "Signature");
//Add the time stamp by using the server URI
signature.TimeStampServer = new TimeStampServer(new Uri("http://syncfusion.digistamp.com"), "user", "123456");

//Save and close the document
document.Save("Output.pdf");
document.Close(true);  

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Security

'Creates a new PDF document
Dim document As New PdfDocument()
'Adds a new page
Dim page As PdfPage = document.Pages.Add()

'Creates a digital signature
Dim signature As New PdfSignature(page, "Signature")
'Adds time stamp by using the server URI
signature.TimeStampServer = New TimeStampServer(New Uri("http://syncfusion.digistamp.com"), "user", "123456")

'Save and close the document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Adding-a-timestamp-to-PDF-document/).

## Adding a timestamp to existing PDF document

You can add timestamp to the existing PDF document using [TimeStampServer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html#Syncfusion_Pdf_Security_PdfSignature_TimeStampServer) property in [PdfSignature](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html) class. The following code example explains the same.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Adding-a-timestamp-to-an-existing-PDF/.NET/Adding-a-timestamp-to-an-existing-PDF/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Gets the page
PdfLoadedPage page = loadedDocument.Pages[0] as PdfLoadedPage;

//Creates a digital signature
PdfSignature signature = new PdfSignature(page, "Signature");
//Add the time stamp by using the server URI
signature.TimeStampServer = new TimeStampServer(new Uri("http://syncfusion.digistamp.com"), "user", "123456");

//Save the document
loadedDocument.Save("Output.pdf");
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Add a new page
PdfLoadedPage page = loadedDocument.Pages[0] as PdfLoadedPage;

//Creates a digital signature
PdfSignature signature = new PdfSignature(page, "Signature");
//Add the time stamp by using the server URI
signature.TimeStampServer = new TimeStampServer(new Uri("http://syncfusion.digistamp.com"), "user", "123456");

//Save the PDF document
loadedDocument.Save("Output.pdf");
//Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Security

'Load the PDF document
Dim document As New PdfLoadedDocument("Input.pdf")
'Gets the first page of the document
Dim page As PdfLoadedPage = TryCast(document.Pages(0), PdfLoadedPage)

'Creates a digital signature
Dim signature As New PdfSignature(page, "Signature")
'Adds time stamp by using the server URI
signature.TimeStampServer = New TimeStampServer(New Uri("http://syncfusion.digistamp.com"), "user", "123456")

'Save and close the document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Adding-a-timestamp-to-an-existing-PDF/).

## Retrieve certificate details from an existing signed PDF document

The Essential<sup>&reg;</sup> PDF provides support to get the certificate details from an existing signed PDF document such as,

* [Signed date](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html#Syncfusion_Pdf_Security_PdfSignature_SignedDate)
* Expiry date
* [Signed name](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html#Syncfusion_Pdf_Security_PdfSignature_SignedName)
* [Subject name](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html#Syncfusion_Pdf_Security_PdfSignature_SignedName)
* [Issuer name](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfCertificate.html#Syncfusion_Pdf_Security_PdfCertificate_IssuerName)
* Certificate distinguished names (country, state, street, email, organization, organization unit, locality, and more).

You can get the above certificate details from an existing signed PDF document using [ValidFrom](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfCertificate.html#Syncfusion_Pdf_Security_PdfCertificate_ValidFrom) and [ValidTo](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfCertificate.html#Syncfusion_Pdf_Security_PdfCertificate_ValidTo) property.The following code example explains the same.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Retrieve-certificate-details-from-an-existing-PDF/.NET/Retrieve-certificate-details-from-an-existing-PDF/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the signature field
PdfLoadedSignatureField signatureField = loadedDocument.Form.Fields[0] as PdfLoadedSignatureField;

//Get the certificate
PdfCertificate certificate = signatureField.Signature.Certificate;
//Get the signed date
DateTime date = signatureField.Signature.SignedDate;
//Get the signed name
string name = signatureField.Signature.SignedName;
//Gets the certificate subject's name
string subjectName = certificate.SubjectName;
//Gets the certificate issuer's name
string issuerName = certificate.IssuerName;
//Get certificate validation date information
DateTime validFrom = certificate.ValidFrom;
DateTime validTo = certificate.ValidTo;

//Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the existing signed PDF
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("SignedDocument.pdf");
//Load the PDF form
PdfLoadedForm loadedForm = loadedDocument.Form as PdfLoadedForm;
//Get the signature field
PdfLoadedSignatureField signatureField = loadedForm.Fields[0] as PdfLoadedSignatureField;

//Get the certificate
PdfCertificate certificate = signatureField.Signature.Certificate;
//Get the signed date
DateTime date = signatureField.Signature.SignedDate;
//Get the signed name
string name = signatureField.Signature.SignedName;
//Get the certificate names based on their distinguished name.
string subjectName = certificate.SubjectName
string subjectCountry = certificate.GetValue(PdfCertificateDistinguishedName.Country, PdfCertificateField.Subject);
string subjectOrganization = certificate.GetValue(PdfCertificateDistinguishedName.Organization, PdfCertificateField.Subject);
//Issuer details
string issuerName = certificate.IssuerName;
string issuerOrganization = certificate.GetValue(PdfCertificateDistinguishedName.Organization, PdfCertificateField.Issuer);
string issuerCountry = certificate.GetValue(PdfCertificateDistinguishedName.Country, PdfCertificateField.Issuer);
//Get certificate validation date information
DateTime validFrom = certificate.ValidFrom;
DateTime validTo = certificate.ValidTo;

//Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security

'Load the existing signed PDF
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("../../Signed.pdf")
'Load the PDF form
Dim loadedForm As PdfLoadedForm = TryCast(loadedDocument.Form, PdfLoadedForm)
'Get the signature field
Dim signatureField As PdfLoadedSignatureField = TryCast(loadedForm.Fields(0), PdfLoadedSignatureField)

'Get the certificate
Dim certificate As PdfCertificate = signatureField.Signature.Certificate
'Get the signed date
Dim signedDate As DateTime = signatureField.Signature.SignedDate
'Get the signed name
Dim name As String = signatureField.Signature.SignedName
'Get the certificate names based on their distinguished name
Dim subjectName As String = certificate.SubjectName
Dim subjectCountry As String = certificate.GetValue(PdfCertificateDistinguishedName.Country, PdfCertificateField.Subject)
Dim subjectOrganization As String = certificate.GetValue(PdfCertificateDistinguishedName.Organization, PdfCertificateField.Subject)
'Issuer details
Dim issuerName As String = certificate.IssuerName
Dim issuerOrganization As String = certificate.GetValue(PdfCertificateDistinguishedName.Organization, PdfCertificateField.Issuer)
Dim issuerCountry As String = certificate.GetValue(PdfCertificateDistinguishedName.Country, PdfCertificateField.Issuer)
'Get certificate validation date information
Dim validFrom As DateTime = certificate.ValidFrom
Dim validTo As DateTime = certificate.ValidTo

'Close the PDF document
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Retrieve-certificate-details-from-an-existing-PDF/).

## Enable Long Term Validation (LTV) PDF signature

The Essential<sup>&reg;</sup> PDF supports creating long term signature validation when signing the PDF document. The LTV signature allows you to check the validity of a signature long after the document was signed. To achieve long term validation, all the required elements for signature validation must be embedded in the signed PDF.

N> The resulted PDF document size will be large since all the necessary signature information, Certificate Revocation List (CRL), and Online Certificate Status Protocol (OCSP) are embedded.

The following code example explains how to create LTV PDF using [EnableLtv](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html#Syncfusion_Pdf_Security_PdfSignature_EnableLtv) property in [PdfSignature](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html) class when signing the PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Enable-LTV-PDF-signature/.NET/Enable-LTV-PDF-signature/Program.cs" %}

    using Syncfusion.Drawing;
    using Syncfusion.Pdf;
    using Syncfusion.Pdf.Graphics;
    using Syncfusion.Pdf.Parsing;
    using Syncfusion.Pdf.Security;

    //Creates a new PDF document.
    PdfDocument document = new PdfDocument();

    //Adds a new page.
    PdfPageBase page = document.Pages.Add();

    //Create graphics for the page. 
    PdfGraphics graphics = page.Graphics;

    //Creates a certificate instance from PFX file with private key.
    FileStream certificateStream = new FileStream(Path.GetFullPath(@"Data/PDF.pfx"), FileMode.Open, FileAccess.Read);
    PdfCertificate pdfCert = new PdfCertificate(certificateStream, "DigitalPass123");

    //Creates a digital signature.
    PdfSignature signature = new PdfSignature(document, page, pdfCert, "Signature");
    signature.Settings.CryptographicStandard = CryptographicStandard.CADES;
    signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA256;

    document.Save("SignedDocument.pdf");
    //Close the document
    document.Close(true);

    //Load an existing PDF stream.
    PdfLoadedDocument loadedDocument = new PdfLoadedDocument("SignedDocument.pdf");

    //Gets the first signature field of the PDF document
    PdfLoadedSignatureField signatureField = loadedDocument.Form.Fields[0] as PdfLoadedSignatureField;
    PdfSignature pdfSignature = signatureField.Signature;

    //Enable LTV on Signature.
    pdfSignature.EnableLtv = true;

    //Save the document
    loadedDocument.Save("Output.pdf");
    //Close the document.
    loadedDocument.Close(true);


{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

    using System.Drawing;
    using Syncfusion.Pdf;
    using Syncfusion.Pdf.Graphics;
    using Syncfusion.Pdf.Parsing;
    using Syncfusion.Pdf.Security;

    //Creates a new PDF document.
    PdfDocument document = new PdfDocument();

    //Adds a new page.
    PdfPageBase page = document.Pages.Add();

    //Create graphics for the page. 
    PdfGraphics graphics = page.Graphics;

    //Creates a certificate instance from PFX file with private key.
    PdfCertificate pdfCert = new PdfCertificate(Path.GetFullPath(@"Data/PDF.pfx"), "DigitalPass123");

    //Creates a digital signature.
    PdfSignature signature = new PdfSignature(document, page, pdfCert, "Signature");
    signature.Settings.CryptographicStandard = CryptographicStandard.CADES;
    signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA256;

    //Save the document.

    document.Save("SignedDocument.pdf");
    //Close the document
    document.Close(true);

    //Load an existing PDF stream.
    PdfLoadedDocument loadedDocument = new PdfLoadedDocument("SignedDocument.pdf");

    //Gets the first signature field of the PDF document
    PdfLoadedSignatureField signatureField = loadedDocument.Form.Fields[0] as PdfLoadedSignatureField;
    PdfSignature pdfSignature = signatureField.Signature;

    //Enable LTV on Signature.
    pdfSignature.EnableLtv = true;

    //Save and close the document
    loadedDocument.Save("Output.pdf");
    loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

    Imports System.Drawing
    Imports Syncfusion.Pdf
    Imports Syncfusion.Pdf.Graphics
    Imports Syncfusion.Pdf.Parsing
    Imports Syncfusion.Pdf.Security

    ' Creates a new PDF document.
    Dim document As New PdfDocument()

    ' Adds a new page.
    Dim page As PdfPageBase = document.Pages.Add()

    ' Create graphics for the page.
    Dim graphics As PdfGraphics = page.Graphics

    ' Creates a certificate instance from PFX file with private key.
    Dim pdfCert As New PdfCertificate(Path.GetFullPath("Data/PDF.pfx"), "DigitalPass123")

    ' Creates a digital signature.
    Dim signature As New PdfSignature(document, page, pdfCert, "Signature")
    signature.Settings.CryptographicStandard = CryptographicStandard.CADES
    signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA256

    ' Save the document.
    document.Save("SignedDocument.pdf")

    ' Close the document.
    document.Close(True)

    ' Load an existing PDF stream.
    Dim loadedDocument As New PdfLoadedDocument("SignedDocument.pdf")

    ' Gets the first signature field of the PDF document.
    Dim signatureField As PdfLoadedSignatureField = TryCast(loadedDocument.Form.Fields(0), PdfLoadedSignatureField)
    Dim pdfSignature As PdfSignature = signatureField.Signature

    ' Enable LTV on Signature.
    pdfSignature.EnableLtv = True

    ' Save and close the document.
    loadedDocument.Save("Output.pdf")
    loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Enable-LTV-PDF-signature/).

## Adding a digital signature with customization

The [PdfSignatureSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignatureSettings.html) allows you to add customized digital signatures to the PDF document.

### Adding a digital signature with CAdES format

As per the PDF specification 2.0, now Syncfusion PDF library supports digital signature based on CAdES (CMS Advanced Electronics Signature). The CAdES based digital signature can remain valid for long periods, even if underlying cryptographic algorithms are broken. Using the API [CryptographicStandard](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignatureSettings.html#Syncfusion_Pdf_Security_PdfSignatureSettings_CryptographicStandard), you can change the standard between CMS (Cryptographic Message Syntax) and CAdES.

The following code example explains how to add a digital signature with [cryptographic standard](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignatureSettings.html#Syncfusion_Pdf_Security_PdfSignatureSettings_CryptographicStandard) as CAdES through [CryptographicStandard](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.CryptographicStandard.html) Enum when creating the PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Adding-a-digital-signature-with-CAdES-format/.NET/Adding-a-digital-signature-with-CAdES-format/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a new page
PdfPageBase page = document.Pages.Add();
//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;

//Creates a certificate instance from PFX file with private key
FileStream certificateStream = new FileStream("PDF.pfx", FileMode.Open, FileAccess.Read);
PdfCertificate pdfCert = new PdfCertificate(certificateStream, "password123");
//Creates a digital signature
PdfSignature signature = new PdfSignature(document, page, pdfCert, "Signature");
//Sets signature settings to customize cryptographic standard specified
PdfSignatureSettings settings = signature.Settings;
settings.CryptographicStandard  = CryptographicStandard.CADES;

//Sets an image for signature field
FileStream imageStream = new FileStream("signature.jpg", FileMode.Open, FileAccess.Read);
//Sets an image for signature field
PdfBitmap signatureImage = new PdfBitmap(imageStream);
//Sets signature information
signature.Bounds = new RectangleF(new PointF(0, 0), signatureImage.PhysicalDimension);
signature.ContactInfo = "johndoe@owned.us";
signature.LocationInfo = "Honolulu, Hawaii";
signature.Reason = "I am author of this document.";
//Draws the signature image
signature.Appearance.Normal.Graphics.DrawImage(signatureImage, 0, 0);

//Save the document
document.Save("Output.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Adds a new page
PdfPageBase page = document.Pages.Add();
//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;

//Creates a certificate instance from PFX file with private key
PdfCertificate pdfCert = new PdfCertificate(@"PDF.pfx", "password123");
//Creates a digital signature
PdfSignature signature = new PdfSignature(document, page, pdfCert, "Signature");
//Sets signature settings to customize cryptographic standard specified
PdfSignatureSettings settings = signature.Settings;
settings.CryptographicStandard  = CryptographicStandard.CADES;

//Sets an image for signature field
PdfBitmap signatureImage = new PdfBitmap(@"signature.jpg");
//Sets signature information
signature.Bounds = new RectangleF(new PointF(0, 0), signatureImage.PhysicalDimension);
signature.ContactInfo = "johndoe@owned.us";
signature.LocationInfo = "Honolulu, Hawaii";
signature.Reason = "I am author of this document.";
//Draws the signature image
signature.Appearance.Normal.Graphics.DrawImage(signatureImage, 0, 0);

//Save and close the document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Security

'Creates a new PDF document
Dim document As New PdfDocument()
'Adds a new page
Dim page As PdfPageBase = document.Pages.Add()
'Create PDF graphics for the page
Dim graphics As PdfGraphics = page.Graphics

'Creates a certificate instance from PFX file with private key
Dim pdfCert As New PdfCertificate("PDF.pfx", "password123")
'Creates a digital signature
Dim signature As New PdfSignature(document, page, pdfCert, "Signature")
'Sets signature settings to customize cryptographic standard specified
Dim settings As PdfSignatureSettings = signature.Settings
settings.CryptographicStandard  = CryptographicStandard.CADES

'Sets an image for signature field
Dim signatureImage As New PdfBitmap("signature.jpg")
'Sets signature info
signature.Bounds = New RectangleF(New PointF(0, 0), signatureImage.PhysicalDimension)
signature.ContactInfo = "johndoe@owned.us"
signature.LocationInfo = "Honolulu, Hawaii"
signature.Reason = "I am author of this document."
'Draws the signature image
signature.Appearance.Normal.Graphics.DrawImage(signatureImage, 0, 0)

'Save and close the document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Adding-a-digital-signature-with-CAdES-format/).

### Customize digestion algorithm

In addition, you can now set the different message digest algorithm to sign PDF document using the [DigestAlgorithm](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignatureSettings.html#Syncfusion_Pdf_Security_PdfSignatureSettings_DigestAlgorithm) enum available in the class [PdfSignatureSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignatureSettings.html). 

The following message digest algorithms are now supported:
* SHA1
* SHA256
* SHA384
* SHA512
* RIPEMD160

The following code example explains how to add a digital signature with various digest algorithms to the PDF document by specifying the [DigestAlgorithm](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignatureSettings.html#Syncfusion_Pdf_Security_PdfSignatureSettings_DigestAlgorithm) property as **SHA256** through [DigestAlgorithm](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.DigestAlgorithm.html) enum in [PdfSignatureSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignatureSettings.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Add-digital-signature-with-digest-algorithm/.NET/Add-digital-signature-with-digest-algorithm/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a new page
PdfPageBase page = document.Pages.Add();
//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;

//Creates a certificate instance from PFX file with private key
FileStream certificateStream = new FileStream("PDF.pfx", FileMode.Open, FileAccess.Read);
PdfCertificate pdfCert = new PdfCertificate(certificateStream, "password123");
//Creates a digital signature
PdfSignature signature = new PdfSignature(document, page, pdfCert, "Signature");
//Sets signature settings to customize digest algorithm specified
PdfSignatureSettings settings = signature.Settings;
settings.DigestAlgorithm = DigestAlgorithm.SHA256;

//Sets an image for signature field
FileStream imageStream = new FileStream("signature.jpg", FileMode.Open, FileAccess.Read);
//Sets an image for signature field
PdfBitmap signatureImage = new PdfBitmap(imageStream);
//Sets signature information
signature.Bounds = new RectangleF(new PointF(0, 0), signatureImage.PhysicalDimension);
signature.ContactInfo = "johndoe@owned.us";
signature.LocationInfo = "Honolulu, Hawaii";
signature.Reason = "I am author of this document.";
//Draws the signature image
signature.Appearance.Normal.Graphics.DrawImage(signatureImage, 0, 0);

//Save the document
document.Save("Output.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a new page
PdfPageBase page = document.Pages.Add();
//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;

//Creates a certificate instance from PFX file with private key
PdfCertificate pdfCert = new PdfCertificate(@"PDF.pfx", "password123");
//Creates a digital signature
PdfSignature signature = new PdfSignature(document, page, pdfCert, "Signature");
//Sets signature settings to customize digest algorithm specified
PdfSignatureSettings settings = signature.Settings;
settings.DigestAlgorithm = DigestAlgorithm.SHA256;

//Sets an image for signature field
PdfBitmap signatureImage = new PdfBitmap(@"signature.jpg");
//Sets signature information
signature.Bounds = new RectangleF(new PointF(0, 0), signatureImage.PhysicalDimension);
signature.ContactInfo = "johndoe@owned.us";
signature.LocationInfo = "Honolulu, Hawaii";
signature.Reason = "I am author of this document.";
//Draws the signature image
signature.Appearance.Normal.Graphics.DrawImage(signatureImage, 0, 0);

//Save and close the document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Security

'Creates a new PDF document
Dim document As New PdfDocument()
'Adds a new page
Dim page As PdfPageBase = document.Pages.Add()
'Create PDF graphics for the page
Dim graphics As PdfGraphics = page.Graphics

'Creates a certificate instance from PFX file with private key
Dim pdfCert As New PdfCertificate("PDF.pfx", "password123")
'Creates a digital signature
Dim signature As New PdfSignature(document, page, pdfCert, "Signature")
'Sets signature settings to customize digest algorithm specified
Dim settings As PdfSignatureSettings = signature.Settings
settings.DigestAlgorithm = DigestAlgorithm.SHA256

'Sets an image for signature field
Dim signatureImage As New PdfBitmap("signature.jpg")
'Sets signature info
signature.Bounds = New RectangleF(New PointF(0, 0), signatureImage.PhysicalDimension)
signature.ContactInfo = "johndoe@owned.us"
signature.LocationInfo = "Honolulu, Hawaii"
signature.Reason = "I am author of this document."
'Draws the signature image
signature.Appearance.Normal.Graphics.DrawImage(signatureImage, 0, 0)

'Save and close the document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Add-digital-signature-with-digest-algorithm/).

## Digital signature validation

Added the support to validate the digital signatures in an existing PDF document. Digital signature validation covers the following steps to ensure the validity of the signatures:

* Validate the document modification.
* Validate the certificate chain.
* Ensure the signature with timestamp time.
* Check the revocation status of the certificate with OCSP and CRL.
* Ensure the multiple digital signatures.

You can use the [ValidateSignature](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedSignatureField.html#Syncfusion_Pdf_Parsing_PdfLoadedSignatureField_ValidateSignature) method available in the [PdfLoadedSignatureField](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedSignatureField.html) class to validate the digital signature. 

You can get the overall status from the [IsSignatureValid](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignatureValidationResult.html#Syncfusion_Pdf_Security_PdfSignatureValidationResult_IsSignatureValid) property available in the [PdfSignatureValidationResult](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignatureValidationResult.html) class.

The following code example explains how to validate the digitally signed PDF document signature.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Validate-the-digitally-signed-PDF-signature/.NET/Validate-the-digitally-signed-PDF-signature/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using System.Security.Cryptography.X509Certificates;

// Load the signed PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

// Retrieve the first signature field from the PDF form
PdfLoadedSignatureField signatureField = loadedDocument.Form.Fields[0] as PdfLoadedSignatureField;

// Create a certificate collection to hold trusted root certificates for validation
X509CertificateCollection collection = new X509CertificateCollection();

// Load the root certificate from a PFX file (includes private key)
FileStream certificateStream = new FileStream(Path.GetFullPath(@"Data/PDF.pfx"), FileMode.Open, FileAccess.Read);
byte[] data = new byte[certificateStream.Length];
certificateStream.Read(data, 0, data.Length);

// Create an X509Certificate2 instance using the loaded certificate data and password
X509Certificate2 certificate = new X509Certificate2(data, "syncfusion");

// Add the certificate to the validation collection
collection.Add(certificate);

// Validate the signature using the provided certificate collection
PdfSignatureValidationResult result = signatureField.ValidateSignature(collection);

// Initialize flag to detect timestamp signatures
bool isTimeStampSignature = false;

// Check if the TimeStampInformation object is not null
if (result.TimeStampInformation != null)
{
    // Check if the signature is a document timestamp
    if (result.TimeStampInformation.IsDocumentTimeStamp)
    {
        isTimeStampSignature = true;
        Console.WriteLine("Signature is a document timestamp signature.");
    }

    // Retrieve signer certificates if available
    PdfSignerCertificate[] certificates = result.TimeStampInformation.SignerCertificates;
    if (certificates != null && certificates.Length > 0)
    {
        Console.WriteLine($"Retrieved {certificates.Length} signer certificate(s).");
    }
    else
    {
        Console.WriteLine("No signer certificates found.");
    }

    // Retrieve the main certificate
    X509Certificate2 certificate2 = result.TimeStampInformation.Certificate;
    if (certificate2 != null)
    {
        Console.WriteLine($"Certificate Subject: {certificate2.Subject}");
    }
    else
    {
        Console.WriteLine("No certificate found.");
    }

    // Retrieve timestamp date
    DateTime dateTime = result.TimeStampInformation.Time;
    Console.WriteLine($"Timestamp Date: {dateTime}");

    // Retrieve timestamp policy ID
    string policyID = result.TimeStampInformation.TimeStampPolicyId;
    if (!string.IsNullOrEmpty(policyID))
    {
        Console.WriteLine($"Timestamp Policy ID: {policyID}");
    }
    else
    {
        Console.WriteLine("No Timestamp Policy ID found.");
    }

    // Check if the timestamp is valid
    bool valid = result.TimeStampInformation.IsValid;
    Console.WriteLine($"Timestamp Validity: {(valid ? "Valid" : "Invalid")}");
}
else
{
    Console.WriteLine("TimeStampInformation is null. Cannot retrieve timestamp details.");
}

// Check if the signature is valid
SignatureStatus status = result.SignatureStatus;

// Check if the document has been modified after signing
bool isModified = result.IsDocumentModified;

// Check if Long-Term Validation (LTV) is enabled in the signature
bool isLtvEnabled = result.LtvVerificationInfo.IsLtvEnabled;

// Check if Certificate Revocation List (CRL) data is embedded in the PDF
bool isCrlEmbedded = result.LtvVerificationInfo.IsCrlEmbedded;

// Check if Online Certificate Status Protocol (OCSP) data is embedded in the PDF
bool isOcspEmbedded = result.LtvVerificationInfo.IsOcspEmbedded;

// Output the validation results to the console
Console.WriteLine("Document modified: " + isModified);
Console.WriteLine("LTV enabled: " + isLtvEnabled);
Console.WriteLine("CRL embedded: " + isCrlEmbedded);
Console.WriteLine("OCSP embedded: " + isOcspEmbedded);

// Extract and display signature certificate details
string issuerName = signatureField.Signature.Certificate.IssuerName;
DateTime validFrom = signatureField.Signature.Certificate.ValidFrom;
DateTime validTo = signatureField.Signature.Certificate.ValidTo;
string signatureAlgorithm = result.SignatureAlgorithm;
DigestAlgorithm digestAlgorithm = result.DigestAlgorithm;

Console.WriteLine("Issuer Name: " + issuerName);
Console.WriteLine("Valid From: " + validFrom);
Console.WriteLine("Valid To: " + validTo);
Console.WriteLine("Signature Algorithm: " + signatureAlgorithm);
Console.WriteLine("Digest Algorithm: " + digestAlgorithm);

// Extract and display revocation validation details
RevocationResult revocationDetails = result.RevocationResult;
RevocationStatus revocationStatus = revocationDetails.OcspRevocationStatus;
bool isRevokedCRL = revocationDetails.IsRevokedCRL;

Console.WriteLine("Revocation Status: " + revocationStatus);
Console.WriteLine("Is Revoked CRL: " + isRevokedCRL);

// Close the loaded PDF document and release resources
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using System.Security.Cryptography.X509Certificates;

// Load the signed PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

// Retrieve the first signature field from the PDF form
PdfLoadedSignatureField signatureField = loadedDocument.Form.Fields[0] as PdfLoadedSignatureField;

// Create a certificate collection to hold trusted root certificates for validation
X509CertificateCollection collection = new X509CertificateCollection();

// Load the root certificate from a PFX file (includes private key)
FileStream certificateStream = new FileStream(Path.GetFullPath(@"Data/PDF.pfx"), FileMode.Open, FileAccess.Read);
byte[] data = new byte[certificateStream.Length];
certificateStream.Read(data, 0, data.Length);

// Create an X509Certificate2 instance using the loaded certificate data and password
X509Certificate2 certificate = new X509Certificate2(data, "syncfusion");

// Add the certificate to the validation collection
collection.Add(certificate);

// Validate the signature using the provided certificate collection
PdfSignatureValidationResult result = signatureField.ValidateSignature(collection);

// Initialize flag to detect timestamp signatures
bool isTimeStampSignature = false;

// Check if the TimeStampInformation object is not null
if (result.TimeStampInformation != null)
{
    // Check if the signature is a document timestamp
    if (result.TimeStampInformation.IsDocumentTimeStamp)
    {
        isTimeStampSignature = true;
        Console.WriteLine("Signature is a document timestamp signature.");
    }

    // Retrieve signer certificates if available
    PdfSignerCertificate[] certificates = result.TimeStampInformation.SignerCertificates;
    if (certificates != null && certificates.Length > 0)
    {
        Console.WriteLine($"Retrieved {certificates.Length} signer certificate(s).");
    }
    else
    {
        Console.WriteLine("No signer certificates found.");
    }

    // Retrieve the main certificate
    X509Certificate2 certificate2 = result.TimeStampInformation.Certificate;
    if (certificate2 != null)
    {
        Console.WriteLine($"Certificate Subject: {certificate2.Subject}");
    }
    else
    {
        Console.WriteLine("No certificate found.");
    }

    // Retrieve timestamp date
    DateTime dateTime = result.TimeStampInformation.Time;
    Console.WriteLine($"Timestamp Date: {dateTime}");

    // Retrieve timestamp policy ID
    string policyID = result.TimeStampInformation.TimeStampPolicyId;
    if (!string.IsNullOrEmpty(policyID))
    {
        Console.WriteLine($"Timestamp Policy ID: {policyID}");
    }
    else
    {
        Console.WriteLine("No Timestamp Policy ID found.");
    }

    // Check if the timestamp is valid
    bool valid = result.TimeStampInformation.IsValid;
    Console.WriteLine($"Timestamp Validity: {(valid ? "Valid" : "Invalid")}");
}
else
{
    Console.WriteLine("TimeStampInformation is null. Cannot retrieve timestamp details.");
}

// Check if the signature is valid
SignatureStatus status = result.SignatureStatus;

// Check if the document has been modified after signing
bool isModified = result.IsDocumentModified;

// Check if Long-Term Validation (LTV) is enabled in the signature
bool isLtvEnabled = result.LtvVerificationInfo.IsLtvEnabled;

// Check if Certificate Revocation List (CRL) data is embedded in the PDF
bool isCrlEmbedded = result.LtvVerificationInfo.IsCrlEmbedded;

// Check if Online Certificate Status Protocol (OCSP) data is embedded in the PDF
bool isOcspEmbedded = result.LtvVerificationInfo.IsOcspEmbedded;

// Output the validation results to the console
Console.WriteLine("Document modified: " + isModified);
Console.WriteLine("LTV enabled: " + isLtvEnabled);
Console.WriteLine("CRL embedded: " + isCrlEmbedded);
Console.WriteLine("OCSP embedded: " + isOcspEmbedded);

// Extract and display signature certificate details
string issuerName = signatureField.Signature.Certificate.IssuerName;
DateTime validFrom = signatureField.Signature.Certificate.ValidFrom;
DateTime validTo = signatureField.Signature.Certificate.ValidTo;
string signatureAlgorithm = result.SignatureAlgorithm;
DigestAlgorithm digestAlgorithm = result.DigestAlgorithm;

Console.WriteLine("Issuer Name: " + issuerName);
Console.WriteLine("Valid From: " + validFrom);
Console.WriteLine("Valid To: " + validTo);
Console.WriteLine("Signature Algorithm: " + signatureAlgorithm);
Console.WriteLine("Digest Algorithm: " + digestAlgorithm);

// Extract and display revocation validation details
RevocationResult revocationDetails = result.RevocationResult;
RevocationStatus revocationStatus = revocationDetails.OcspRevocationStatus;
bool isRevokedCRL = revocationDetails.IsRevokedCRL;

Console.WriteLine("Revocation Status: " + revocationStatus);
Console.WriteLine("Is Revoked CRL: " + isRevokedCRL);

// Close the loaded PDF document and release resources
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security
Imports System.Security.Cryptography.X509Certificates

' Load the signed PDF document using the stream
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")

' Retrieve the first signature field from the PDF form
Dim signatureField As PdfLoadedSignatureField = TryCast(loadedDocument.Form.Fields(0), PdfLoadedSignatureField)

' Create a certificate collection to hold trusted root certificates for validation
Dim collection As New X509CertificateCollection()

' Load the root certificate from a PFX file (includes private key)
Dim certificateStream As New FileStream(Path.GetFullPath("Data/PDF.pfx"), FileMode.Open, FileAccess.Read)
Dim data(CInt(certificateStream.Length) - 1) As Byte
certificateStream.Read(data, 0, data.Length)

' Create an X509Certificate2 instance using the loaded certificate data and password
Dim certificate As New X509Certificate2(data, "syncfusion")

' Add the certificate to the validation collection
collection.Add(certificate)

' Validate the signature using the provided certificate collection
Dim result As PdfSignatureValidationResult = signatureField.ValidateSignature(collection)

' Initialize flag to detect timestamp signatures
Dim isTimeStampSignature As Boolean = False

' Check if the TimeStampInformation object is not null
If result.TimeStampInformation IsNot Nothing Then

    ' Check if the signature is a document timestamp
    If result.TimeStampInformation.IsDocumentTimeStamp Then
        isTimeStampSignature = True
        Console.WriteLine("Signature is a document timestamp signature.")
    End If

    ' Retrieve signer certificates if available
    Dim certificates As PdfSignerCertificate() = result.TimeStampInformation.SignerCertificates
    If certificates IsNot Nothing AndAlso certificates.Length > 0 Then
        Console.WriteLine($"Retrieved {certificates.Length} signer certificate(s).")
    Else
        Console.WriteLine("No signer certificates found.")
    End If

    ' Retrieve the main certificate
    Dim certificate2 As X509Certificate2 = result.TimeStampInformation.Certificate
    If certificate2 IsNot Nothing Then
        Console.WriteLine($"Certificate Subject: {certificate2.Subject}")
    Else
        Console.WriteLine("No certificate found.")
    End If

    ' Retrieve timestamp date
    Dim dateTime As DateTime = result.TimeStampInformation.Time
    Console.WriteLine($"Timestamp Date: {dateTime}")

    ' Retrieve timestamp policy ID
    Dim policyID As String = result.TimeStampInformation.TimeStampPolicyId
    If Not String.IsNullOrEmpty(policyID) Then
        Console.WriteLine($"Timestamp Policy ID: {policyID}")
    Else
        Console.WriteLine("No Timestamp Policy ID found.")
    End If

    ' Check if the timestamp is valid
    Dim valid As Boolean = result.TimeStampInformation.IsValid
    Console.WriteLine($"Timestamp Validity: {(If(valid, "Valid", "Invalid"))}")

Else
    Console.WriteLine("TimeStampInformation is null. Cannot retrieve timestamp details.")
End If

' Check if the signature is valid
Dim status As SignatureStatus = result.SignatureStatus

' Check if the document has been modified after signing
Dim isModified As Boolean = result.IsDocumentModified

' Check if Long-Term Validation (LTV) is enabled in the signature
Dim isLtvEnabled As Boolean = result.LtvVerificationInfo.IsLtvEnabled

' Check if Certificate Revocation List (CRL) data is embedded in the PDF
Dim isCrlEmbedded As Boolean = result.LtvVerificationInfo.IsCrlEmbedded

' Check if Online Certificate Status Protocol (OCSP) data is embedded in the PDF
Dim isOcspEmbedded As Boolean = result.LtvVerificationInfo.IsOcspEmbedded

' Output the validation results to the console
Console.WriteLine("Document modified: " & isModified)
Console.WriteLine("LTV enabled: " & isLtvEnabled)
Console.WriteLine("CRL embedded: " & isCrlEmbedded)
Console.WriteLine("OCSP embedded: " & isOcspEmbedded)

' Extract and display signature certificate details
Dim issuerName As String = signatureField.Signature.Certificate.IssuerName
Dim validFrom As DateTime = signatureField.Signature.Certificate.ValidFrom
Dim validTo As DateTime = signatureField.Signature.Certificate.ValidTo
Dim signatureAlgorithm As String = result.SignatureAlgorithm
Dim digestAlgorithm As DigestAlgorithm = result.DigestAlgorithm

Console.WriteLine("Issuer Name: " & issuerName)
Console.WriteLine("Valid From: " & validFrom)
Console.WriteLine("Valid To: " & validTo)
Console.WriteLine("Signature Algorithm: " & signatureAlgorithm)
Console.WriteLine("Digest Algorithm: " & digestAlgorithm)

' Extract and display revocation validation details
Dim revocationDetails As RevocationResult = result.RevocationResult
Dim revocationStatus As RevocationStatus = revocationDetails.OcspRevocationStatus
Dim isRevokedCRL As Boolean = revocationDetails.IsRevokedCRL

Console.WriteLine("Revocation Status: " & revocationStatus)
Console.WriteLine("Is Revoked CRL: " & isRevokedCRL)

' Close the loaded PDF document and release resources
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Validate-the-digitally-signed-PDF-signature/).

### Validate all signatures in PDF document

Added the support to validate all the digital signatures in an existing PDF document. 

You can use the [ValidateSignatures](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedFormFieldCollection.html#Syncfusion_Pdf_Parsing_PdfLoadedFormFieldCollection_ValidateSignatures_Syncfusion_Pdf_Parsing_PdfSignatureValidationOptions_System_Collections_Generic_List_Syncfusion_Pdf_Security_PdfSignatureValidationResult___) method available in the [PdfLoadedFormFieldCollection](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedFormFieldCollection.html) class to validate all the digital signatures. You can get the list of [PdfSignatureValidationResult](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignatureValidationResult.html) from the [ValidateSignatures](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedFormFieldCollection.html#Syncfusion_Pdf_Parsing_PdfLoadedFormFieldCollection_ValidateSignatures_Syncfusion_Pdf_Parsing_PdfSignatureValidationOptions_System_Collections_Generic_List_Syncfusion_Pdf_Security_PdfSignatureValidationResult___) method.

The following code example explains how to validate all the signatures in digitally signed PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Validate-all-signatures-in-digitally-signed-PDF/.NET/Validate-all-signatures-in-digitally-signed-PDF/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using System.Security.Cryptography.X509Certificates;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//X509Certificate2Collection to check the signer's identity using root certificates
X509Certificate2Collection collection = new X509Certificate2Collection();
//Creates a certificate instance from PFX file with private key
FileStream certificateStream = new FileStream("PDF.pfx", FileMode.Open, FileAccess.Read);
byte[] data = new byte[certificateStream.Length];
certificateStream.Read(data, 0, data.Length);
//Create new X509Certificate2 with the root certificate
X509Certificate2 certificate = new X509Certificate2(data, "password123");
//Add the certificate to the collection
collection.Add(certificate);
//Validate all signatures in loaded PDF document and get the list of validation result
List<PdfSignatureValidationResult> results;
bool isValid = loadedDocument.Form.Fields.ValidateSignatures(collection, out results);
Console.WriteLine("All signatures in the document are valid: " + isValid);
//Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using System.Security.Cryptography.X509Certificates;

//Load an existing signed PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//X509Certificate2Collection to check the signer's identity using root certificates
X509Certificate2Collection collection = new X509Certificate2Collection();
//Create new X509Certificate2 with the root certificate
X509Certificate2 certificate = new X509Certificate2("PDF.pfx", "password123");
//Add the certificate to the collection
collection.Add(certificate);
//Validate all signatures in loaded PDF document and get the list of validation result
List<PdfSignatureValidationResult> results;
bool isValid = loadedDocument.Form.Fields.ValidateSignatures(collection, out results);
Console.WriteLine("All signatures in the document are valid: " + isValid);
//Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security
Imports System.Security.Cryptography.X509Certificates

'Load an existing signed PDF document
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")

'X509Certificate2Collection to check the signer's identity using root certificates
Dim collection As X509Certificate2Collection = New X509Certificate2Collection()
'Create new X509Certificate2 with the root certificate
Dim certificate As X509Certificate2 = New X509Certificate2("PDF.pfx", "password123")
'Add the certificate to the collection
collection.Add(certificate)
'Validate all signatures in loaded PDF document and get the list of validation result
Dim results As List(Of PdfSignatureValidationResult)
Dim isValid As Boolean = loadedDocument.Form.Fields.ValidateSignatures(collection, results)
Console.WriteLine("All signatures in the document are valid: " + isValid);
'Close the document
loadedDocument.Close(true)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Validate-all-signatures-in-digitally-signed-PDF/).

### Validate and classify digital signatures in a PDF document

It checks each signature field in the PDF to determine if it’s a timestamp, LTV (Long-Term Validation), or LTA (Long-Term Archival) signature. It also identifies the cryptographic standard used, such as CAdES, and prints the results to the console.

This example shows how to validate and identify different types of digital signatures in a PDF using C#.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Get the stream from the document
FileStream documentStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read);
// Load the signed PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(documentStream);

// Get the PDF form
PdfLoadedForm form = loadedDocument.Form;

// Initialize flag to detect timestamp signatures
bool isTimeStampSignature = false;

// Loop through all form fields in reverse
for (int i = form.Fields.Count - 1; i >= 0; i--)
{
    PdfLoadedField field = form.Fields[i] as PdfLoadedField;

    // Check if the field is a signature field
    if (field is PdfLoadedSignatureField)
    {
        PdfLoadedSignatureField signatureField = field as PdfLoadedSignatureField;
        Console.WriteLine("Signature field name: " + signatureField.Name);

        // Validate the signature
        PdfSignatureValidationResult result = signatureField.ValidateSignature();

        if (result != null)
        {
            // Check if it's a timestamp signature
            if (result.TimeStampInformation != null && result.TimeStampInformation.IsDocumentTimeStamp)
            {
                isTimeStampSignature = true;
                Console.WriteLine("Signature is a time stamp signature.");
            }
            else
            {
                bool isCAdES = false;

                // Check if the cryptographic standard is CAdES
                if (result.CryptographicStandard == CryptographicStandard.CADES)
                {
                    isCAdES = true;
                }

                // Check if LTV (Long-Term Validation) is enabled
                if (result.LtvVerificationInfo.IsLtvEnabled)
                {
                    // Identify the type of long-term signature
                    if (isCAdES && isTimeStampSignature)
                    {
                        Console.WriteLine("LTA signature.");
                    }
                    else
                    {
                        Console.WriteLine("LTV signature.");
                    }
                }
                else
                {
                    Console.WriteLine("No LTV signature.");
                }
            }
        }
        else
        {
            Console.WriteLine("Signature is not valid.");
        }
    }
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

// Load the signed PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Signed PDF.pdf");

// Get the PDF form
PdfLoadedForm form = loadedDocument.Form;

// Initialize flag to detect timestamp signatures
bool isTimeStampSignature = false;

// Loop through all form fields in reverse
for (int i = form.Fields.Count - 1; i >= 0; i--)
{
    PdfLoadedField field = form.Fields[i] as PdfLoadedField;

    // Check if the field is a signature field
    if (field is PdfLoadedSignatureField)
    {
        PdfLoadedSignatureField signatureField = field as PdfLoadedSignatureField;
        Console.WriteLine("Signature field name: " + signatureField.Name);

        // Validate the signature
        PdfSignatureValidationResult result = signatureField.ValidateSignature();

        if (result != null)
        {
            // Check if it's a timestamp signature
            if (result.TimeStampInformation != null && result.TimeStampInformation.IsDocumentTimeStamp)
            {
                isTimeStampSignature = true;
                Console.WriteLine("Signature is a time stamp signature.");
            }
            else
            {
                bool isCAdES = false;

                // Check if the cryptographic standard is CAdES
                if (result.CryptographicStandard == CryptographicStandard.CADES)
                {
                    isCAdES = true;
                }

                // Check if LTV (Long-Term Validation) is enabled
                if (result.LtvVerificationInfo.IsLtvEnabled)
                {
                    // Identify the type of long-term signature
                    if (isCAdES && isTimeStampSignature)
                    {
                        Console.WriteLine("LTA signature.");
                    }
                    else
                    {
                        Console.WriteLine("LTV signature.");
                    }
                }
                else
                {
                    Console.WriteLine("No LTV signature.");
                }
            }
        }
        else
        {
            Console.WriteLine("Signature is not valid.");
        }
    }
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security

' Load the signed PDF document
Dim loadedDocument As New PdfLoadedDocument("Signed PDF.pdf")

' Get the PDF form
Dim form As PdfLoadedForm = loadedDocument.Form

' Initialize flag to detect timestamp signatures
Dim isTimeStampSignature As Boolean = False

' Loop through all form fields in reverse
For i As Integer = form.Fields.Count - 1 To 0 Step -1
    Dim field As PdfLoadedField = TryCast(form.Fields(i), PdfLoadedField)

    ' Check if the field is a signature field
    If TypeOf field Is PdfLoadedSignatureField Then
        Dim signatureField As PdfLoadedSignatureField = CType(field, PdfLoadedSignatureField)
        Console.WriteLine("Signature field name: " & signatureField.Name)

        ' Validate the signature
        Dim result As PdfSignatureValidationResult = signatureField.ValidateSignature()

        If result IsNot Nothing Then
            ' Check if it's a timestamp signature
            If result.TimeStampInformation IsNot Nothing AndAlso result.TimeStampInformation.IsDocumentTimeStamp Then
                isTimeStampSignature = True
                Console.WriteLine("Signature is a time stamp signature.")
            Else
                Dim isCAdES As Boolean = False

                ' Check if the cryptographic standard is CAdES
                If result.CryptographicStandard = CryptographicStandard.CADES Then
                    isCAdES = True
                End If

                ' Check if LTV (Long-Term Validation) is enabled
                If result.LtvVerificationInfo.IsLtvEnabled Then
                    ' Identify the type of long-term signature
                    If isCAdES AndAlso isTimeStampSignature Then
                        Console.WriteLine("LTA signature.")
                    Else
                        Console.WriteLine("LTV signature.")
                    End If
                Else
                    Console.WriteLine("No LTV signature.")
                End If
            End If
        Else
            Console.WriteLine("Signature is not valid.")
        End If
    End If
Next

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from GitHub.

## Deferred signing in PDF document

The following code sample shows how to be deferred signing in a PDF document from an external signature using [IPdfExternalSigner](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.IPdfExternalSigner.html) class and [AddExternalSigner](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html#Syncfusion_Pdf_Security_PdfSignature_AddExternalSigner_Syncfusion_Pdf_Security_IPdfExternalSigner_System_Collections_Generic_List_System_Security_Cryptography_X509Certificates_X509Certificate2__System_Byte___) method in [PdfSignature](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html).

Steps for deferred signing: 
1.	Create a PDF document with an empty signature.
2.	Users will sign the document hash using the external services.
3.	Replace the empty signature with a signed hash from the external services using [ReplaceEmptySignature](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html#Syncfusion_Pdf_Security_PdfSignature_ReplaceEmptySignature_System_IO_Stream_System_String_System_IO_Stream_System_String_Syncfusion_Pdf_Security_IPdfExternalSigner_System_Collections_Generic_List_System_Security_Cryptography_X509Certificates_X509Certificate2__) method. 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/refs/heads/master/Digital%20Signature/Deferred-signing-in-PDF-document/.NET/Deferred-signing-in-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Creates a digital signature.
PdfSignature signature = new PdfSignature(loadedDocument, loadedDocument.Pages[0], null, "Signature");
//Sets the signature information.
signature.Bounds = new RectangleF(new PointF(0, 0), new SizeF(100, 30));
signature.Settings.CryptographicStandard = CryptographicStandard.CADES;
signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA1;

//Create an external signer.
IPdfExternalSigner externalSignature = new SignEmpty("SHA1");
//Add public certificates.
System.Collections.Generic.List<X509Certificate2> certificates = new System.Collections.Generic.List<X509Certificate2>();
certificates.Add(new X509Certificate2(Convert.FromBase64String(PublicCert)));
signature.AddExternalSigner(externalSignature, certificates, null);

//Save the document
loadedDocument.Save("Output.pdf");
//Close the document.
loadedDocument.Close(true);

void DeferredSign()
{
    //Create an external signer with a signed hash message.
    IPdfExternalSigner externalSigner = new ExternalSigner("SHA1", signedHash);
    //Add public certificates.
    System.Collections.Generic.List<X509Certificate2> publicCertificates = new System.Collections.Generic.List<X509Certificate2>();
    publicCertificates.Add(new X509Certificate2(Convert.FromBase64String(PublicCert)));

    //Create an output file stream.
    MemoryStream outputFileStream = new MemoryStream();
    //Get the stream from the document.
    FileStream inputFileStream = new FileStream("EmptySignature.pdf", FileMode.Open, FileAccess.Read);
    string pdfPassword = string.Empty;
    //Replace an empty signature.
    PdfSignature.ReplaceEmptySignature(inputFileStream, pdfPassword, outputFileStream, signatureName, externalSigner, publicCertificates);
}

/// <summary>
/// Represents to sign an empty signature from the external signer.
/// </summary>
class SignEmpty : IPdfExternalSigner
{
    private string _hashAlgorithm;

    public string HashAlgorithm
    {
        get { return _hashAlgorithm; }
    }

    public SignEmpty(string hashAlgorithm)
    {
        _hashAlgorithm = hashAlgorithm;
    }

    public byte[] Sign(byte[] message, out byte[] timeStampResponse)
    {
        //Send document hash for signing using the external services.
        SignDocumentHash(message);
        //Set a null value to create an empty signed document.
        byte[] signedBytes = null;
        timeStampResponse = null;
        return signedBytes;
    }

    private void SignDocumentHash(byte[] documentHash)
    {
      X509Certificate2 digitalID = new X509Certificate2(new X509Certificate2(Path.GetFullPath("../../../PDF.pfx"), "password123"));
      if (digitalID.PrivateKey is System.Security.Cryptography.RSACryptoServiceProvider)
      {
        System.Security.Cryptography.RSACryptoServiceProvider rsa = (System.Security.Cryptography.RSACryptoServiceProvider)digitalID.PrivateKey;
        Program.SignedHash = rsa.SignData(documentHash, HashAlgorithm);
      }
      else if (digitalID.PrivateKey is RSACng)
      {
        RSACng rsa = (RSACng)digitalID.PrivateKey;
        Program.SignedHash = rsa.SignData(documentHash, System.Security.Cryptography.HashAlgorithmName.SHA1, RSASignaturePadding.Pkcs1);
      }
    }
}

/// <summary>
/// Represents to replace an empty signature from an external signer.
/// </summary>
class ExternalSigner : IPdfExternalSigner
{
    private string _hashAlgorithm;
    private byte[] _signedHash;
    public string HashAlgorithm
    {
        get { return _hashAlgorithm; }
    }

    public ExternalSigner(string hashAlgorithm, byte[] hash)
    {
        _hashAlgorithm = hashAlgorithm;
        _signedHash = hash;
    }

    public byte[] Sign(byte[] message, out byte[] timeStampResponse)
    {
        //Set the signed hash message to replace an empty signature.
        byte[] signedBytes = _signedHash;
        timeStampResponse = null;
        return signedBytes;
    }
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;

//Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("PDF_Succinctly.pdf");

//Creates a digital signature.
PdfSignature signature = new PdfSignature(loadedDocument, loadedDocument.Pages[0], null, "Signature");
//Sets the signature information.
signature.Bounds = new RectangleF(new PointF(0, 0), new SizeF(100, 30));
signature.Settings.CryptographicStandard = CryptographicStandard.CADES;
signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA1;

//Create an external signer.
IPdfExternalSigner externalSignature = new SignEmpty("SHA1");
//Add public certificates.
System.Collections.Generic.List<X509Certificate2> certificates = new System.Collections.Generic.List<X509Certificate2>();
certificates.Add(new X509Certificate2(Convert.FromBase64String(PublicCert)));
signature.AddExternalSigner(externalSignature, certificates, null);

//Saves the document.
loadedDocument.Save("EmptySignature.pdf");
//Closes the document.
loadedDocument.Close(true);

void DeferredSign()
{
    //Create an external signer with a signed hash message.
    IPdfExternalSigner externalSigner = new ExternalSigner("SHA1", signedHash);
    //Add public certificates.
    System.Collections.Generic.List<X509Certificate2> publicCertificates = new System.Collections.Generic.List<X509Certificate2>();
    publicCertificates.Add(new X509Certificate2(Convert.FromBase64String(PublicCert)));

    //Create an output file stream.
    MemoryStream outputFileStream = new MemoryStream();
    //Get the stream from the document.
    FileStream inputFileStream = new FileStream("EmptySignature.pdf", FileMode.Open, FileAccess.Read);
    string pdfPassword = string.Empty;
    //Replace an empty signature.
    PdfSignature.ReplaceEmptySignature(inputFileStream, pdfPassword, outputFileStream, signatureName, externalSigner, publicCertificates);
}

/// <summary>
/// Represents to sign an empty signature from an external signer.
/// </summary>
class SignEmpty : IPdfExternalSigner
{
    private string _hashAlgorithm;
    public string HashAlgorithm
    {
        get { return _hashAlgorithm; }
    }

    public SignEmpty(string hashAlgorithm)
    {
        _hashAlgorithm = hashAlgorithm;
    }

    public byte[] Sign(byte[] message, out byte[] timeStampResponse)
    {
        //Send the document hash for signing using the external services.
        SignDocumentHash(message);
        //Set a null value to create an empty signed document.
        byte[] signedBytes = null;
        timeStampResponse = null;
        return signedBytes;
    }

    private void SignDocumentHash(byte[] documentHash)
    {
      X509Certificate2 digitalID = new X509Certificate2(new X509Certificate2(Path.GetFullPath("../../../PDF.pfx"), "password123"));
      if (digitalID.PrivateKey is System.Security.Cryptography.RSACryptoServiceProvider)
      {
        System.Security.Cryptography.RSACryptoServiceProvider rsa = (System.Security.Cryptography.RSACryptoServiceProvider)digitalID.PrivateKey;
        Program.SignedHash = rsa.SignData(documentHash, HashAlgorithm);
      }
      else if (digitalID.PrivateKey is RSACng)
      {
        RSACng rsa = (RSACng)digitalID.PrivateKey;
        Program.SignedHash = rsa.SignData(documentHash, System.Security.Cryptography.HashAlgorithmName.SHA1, RSASignaturePadding.Pkcs1);
      }
    }
}


/// <summary>
/// Represents to replace an empty signature from an external signer.
/// </summary>
class ExternalSigner : IPdfExternalSigner
{
    private string _hashAlgorithm;
    private byte[] _signedHash;
    public string HashAlgorithm
    {
        get { return _hashAlgorithm; }
    }

    public ExternalSigner(string hashAlgorithm, byte[] hash)
    {
        _hashAlgorithm = hashAlgorithm;
        _signedHash = hash;
    }

    public byte[] Sign(byte[] message, out byte[] timeStampResponse)
    {
        //Set the signed hash message to replace an empty signature.
        byte[] signedBytes = _signedHash;
        timeStampResponse = null;
        return signedBytes;
    }
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security
Imports System.Security.Cryptography

'Load an existing PDF document.
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("PDF_Succinctly.pdf")

'Creates a digital signature.
Dim signature As PdfSignature = New PdfSignature(loadedDocument, loadedDocument.Pages(0), Nothing, "Signature")
'Sets the signature information.
signature.Bounds = New RectangleF(New PointF(0, 0), New SizeF(100, 30))
signature.Settings.CryptographicStandard = CryptographicStandard.CADES
signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA1

'Create an external signer.
Dim externalSignature As IPdfExternalSigner = New SignEmpty("SHA1")
'Add public certificates.
Dim certificates As System.Collections.Generic.List(Of X509Certificate2) = New System.Collections.Generic.List(Of X509Certificate2)
certificates.Add(New X509Certificate2(Convert.FromBase64String(PublicCert)))
signature.AddExternalSigner(externalSignature, certificates, Nothing)

'Save the document.
loadedDocument.Save("EmptySignature.pdf")
'Close the document.
loadedDocument.Close(True)

Private Sub DeferredSign()
    Dim externalSigner As IPdfExternalSigner = New ExternalSigner("SHA1", signedHash)
    Dim publicCertificates As System.Collections.Generic.List(Of X509Certificate2) = New System.Collections.Generic.List(Of X509Certificate2)()
    publicCertificates.Add(New X509Certificate2(Convert.FromBase64String(PublicCert)))
    Dim outputFileStream As FileStream = New FileStream("DeferredSign.pdf", FileMode.Create, FileAccess.ReadWrite)
    Dim inputFileStream As FileStream = New FileStream("EmptySignature.pdf", FileMode.Open, FileAccess.Read)
    Dim pdfPassword As String = String.Empty
    PdfSignature.ReplaceEmptySignature(inputFileStream, pdfPassword, outputFileStream, "Signature", externalSigner, publicCertificates)
End Sub

''' <summary>
''' Represents to sign an empty signature. 
''' </summary>
Class SignEmpty
    Implements IPdfExternalSigner

    Private _hashAlgorithm As String

    Public ReadOnly Property HashAlgorithm As String Implements IPdfExternalSigner.HashAlgorithm
        Get
            Return Me._hashAlgorithm
        End Get
    End Property

    Public Sub New(ByVal hashAlgorithm As String)
        MyBase.New
        Me._hashAlgorithm = hashAlgorithm
    End Sub

    Private Function IPdfExternalSigner_Sign(message() As Byte, ByRef timeStampResponse() As Byte) As Byte() Implements IPdfExternalSigner.Sign
        'Send document hash for signing using the external services.
        Me.SignDocumentHash(message)
        'Set a null value to create an empty signed document.
        Dim signedBytes() As Byte = Nothing
        timeStampResponse = Nothing
        Return signedBytes
    End Function

    Private Sub SignDocumentHash(ByVal documentHash As Byte())
    Dim digitalID As X509Certificate2 = New X509Certificate2(New X509Certificate2("PDF.pfx", "password123"))

    If TypeOf digitalID.PrivateKey Is System.Security.Cryptography.RSACryptoServiceProvider Then
        Dim rsa As System.Security.Cryptography.RSACryptoServiceProvider = CType(digitalID.PrivateKey, System.Security.Cryptography.RSACryptoServiceProvider)
        SignedHash = rsa.SignData(documentHash, HashAlgorithm)
    ElseIf TypeOf digitalID.PrivateKey Is RSACng Then
        Dim rsa As RSACng = CType(digitalID.PrivateKey, RSACng)
        SignedHash = rsa.SignData(documentHash, System.Security.Cryptography.HashAlgorithmName.SHA1, RSASignaturePadding.Pkcs1)
    End If
    End Sub
End Class

''' <summary>
''' Represents to replace the empty signature.
''' </summary>
Class ExternalSigner
    Implements IPdfExternalSigner
    Private _hashAlgorithm As String
    Private _signedHash() As Byte

    Public ReadOnly Property HashAlgorithm As String Implements IPdfExternalSigner.HashAlgorithm
        Get
            Return Me._hashAlgorithm
        End Get
    End Property

    Public Sub New(ByVal hashAlgorithm As String, ByVal hash() As Byte)
        MyBase.New
        Me._hashAlgorithm = hashAlgorithm
        Me._signedHash = hash
    End Sub

    Private Function IPdfExternalSigner_Sign(message() As Byte, ByRef timeStampResponse() As Byte) As Byte() Implements IPdfExternalSigner.Sign
        'Set the signed hash message to replace an empty signature.
        Dim signedBytes() As Byte = Me._signedHash
        timeStampResponse = Nothing
        Return signedBytes
    End Function
End Class

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Deferred-signing-in-PDF-document/).

## Adding the estimated size of the signature

The following code sample shows how to add the estimated size of the signature in the PDF document using [EstimatedSignatureSize](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html#Syncfusion_Pdf_Security_PdfSignature_EstimatedSignatureSize) property.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Adding-the-estimated-size-of-the-signature/.NET/Adding-the-estimated-size-of-the-signature/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Security;

//Creating a new PDF Document. 
PdfDocument document = new PdfDocument();
//Adding a new page to the PDF document.
PdfPageBase page = document.Pages.Add();

//Creates a certificate instance from the PFX file with a private key.
FileStream certificateStream = new FileStream("PDF.pfx", FileMode.Open, FileAccess.Read);
PdfCertificate pdfCert = new PdfCertificate(certificateStream, "password123"); 
//Add a new signature to the PDF page.
PdfSignature signature = new PdfSignature(document, page, pdfCert, "Signature");
signature.Bounds = new Rectangle(10, 20, 400, 200);
//Sets the estimated size of the signature.
signature.EstimatedSignatureSize = 20000;

//Save the document
document.Save("Output.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Security;

//Creating a new PDF Document. 
PdfDocument document = new PdfDocument();
//Adding a new page to the PDF document. 
PdfPageBase page = document.Pages.Add();

//Create a PDF certificate.
PdfCertificate pdfCert = new PdfCertificate(@"PDF.pfx", "password123");
//Add a new signature to the PDF page.
PdfSignature signature = new PdfSignature(document, page, pdfCert, "Signature");
signature.Bounds = new Rectangle(10, 20, 400, 200);
//Sets the estimated size of the signature.
signature.EstimatedSignatureSize = 20000;

//Save the PDF document.
document.Save("Output.pdf");
//Close the PDF document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
 
Imports System.Drawing
Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security

'Creating a new PDF Document. 
Dim document As PdfDocument =  New PdfDocument()  
'Adding a new page to the PDF document. 
Dim page As PdfPageBase =  document.Pages.Add() 
 
'Create a PDF certificate.
Dim pdfCert As PdfCertificate =  New PdfCertificate("PDF.pfx","password123") 
'Add a new signature to the PDF page.
Dim signature As PdfSignature =  New PdfSignature(document,page,pdfCert,"Signature") 
signature.Bounds = New Rectangle(10, 20, 400, 200)
'Sets the estimated size of the signature.
signature.EstimatedSignatureSize = 20000
 
'Save the PDF document.
document.Save("Output.pdf")
'Close the PDF document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Adding-the-estimated-size-of-the-signature/).

## Deferred signing without PKCS7 encoding

The following code sample shows deferred signing in a PDF document without PKCS7 encoding from an external signature using [IPdfExternalSigner](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.IPdfExternalSigner.html) class and [AddExternalSigner](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html#Syncfusion_Pdf_Security_PdfSignature_AddExternalSigner_Syncfusion_Pdf_Security_IPdfExternalSigner_System_Collections_Generic_List_System_Security_Cryptography_X509Certificates_X509Certificate2__System_Byte___) method.

Steps for deferred signing: 
1.	Create a PDF document with an empty signature.
2.	Users will sign the document hash using the external services.
3.	Replace the empty signature with a PKCS7 encoded signed hash from the external services using [ReplaceEmptySignature](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html#Syncfusion_Pdf_Security_PdfSignature_ReplaceEmptySignature_System_IO_Stream_System_String_System_IO_Stream_System_String_Syncfusion_Pdf_Security_IPdfExternalSigner_System_Collections_Generic_List_System_Security_Cryptography_X509Certificates_X509Certificate2__System_Boolean_s) method. 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using System.Security.Cryptography.X509Certificates;

//Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("PDF_Succinctly.pdf");

//Creates a digital signature.
PdfSignature signature = new PdfSignature(loadedDocument, loadedDocument.Pages[0], null, "Signature");
//Sets the signature information.
signature.Bounds = new RectangleF(new PointF(0, 0), new SizeF(100, 30));
signature.Settings.CryptographicStandard = CryptographicStandard.CADES;
signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA1;

//Create an external signer.
IPdfExternalSigner externalSignature = new SignEmpty("SHA1");
//Add public certificates.
System.Collections.Generic.List<X509Certificate2> certificates = new System.Collections.Generic.List<X509Certificate2>();
signature.AddExternalSigner(externalSignature, certificates, null);

//Save a document.
loadedDocument.Save("EmptySignature.pdf");
//Close a document.
loadedDocument.Close(true);

//Create an external signer with a signed hash message.
IPdfExternalSigner externalSigner = new ExternalSigner("SHA1");
//Add public certificates.
System.Collections.Generic.List<X509Certificate2> publicCertificates = new System.Collections.Generic.List<X509Certificate2>();
publicCertificates.Add(new X509Certificate2(Convert.FromBase64String(PublicCert)));

//Create an output file stream.
MemoryStream outputFileStream = new MemoryStream();
//Get the stream from a document.
FileStream inputFileStream = new FileStream("EmptySignature.pdf", FileMode.Open, FileAccess.Read);
string pdfPassword = string.Empty;
//Deferred signing without PKCS7 encoding.
PdfSignature.ReplaceEmptySignature(inputFileStream, pdfPassword, outputFileStream, signatureName, externalSigner, publicCertificates, false);

/// <summary>
/// Represents to create an empty signature.
/// </summary>
class SignEmpty : IPdfExternalSigner
{
    private string _hashAlgorithm;
    public string HashAlgorithm
    {
        get { return _hashAlgorithm; }
    }

    public SignEmpty(string hashAlgorithm)
    {
        _hashAlgorithm = hashAlgorithm;
    }

    public byte[] Sign(byte[] message, out byte[] timeStampResponse)
    {
        //Set a null value to create an empty signed document.
        byte[] signedBytes = null;
        timeStampResponse = null;
        return signedBytes;
    }
}

/// <summary>
/// Represents to replace an empty signature from an external signer.
/// </summary>
class ExternalSigner : IPdfExternalSigner
{
    private string _hashAlgorithm;
    public string HashAlgorithm
    {
        get { return _hashAlgorithm; }
    }

    public ExternalSigner(string hashAlgorithm)
    {
        _hashAlgorithm = hashAlgorithm;
    }

    public byte[] Sign(byte[] message, out byte[] timeStampResponse)
    {
        //Set the signed encoded PKCS7 hash message to replace an empty signature.
        byte[] signedBytes = EncodedPKCS7Hash;
        timeStampResponse = null;
        return signedBytes;
    }
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using System.Security.Cryptography.X509Certificates;

//Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("PDF_Succinctly.pdf");

//Creates a digital signature.
PdfSignature signature = new PdfSignature(loadedDocument, loadedDocument.Pages[0], null, "Signature");
//Sets the signature information.
signature.Bounds = new RectangleF(new PointF(0, 0), new SizeF(100, 30));
signature.Settings.CryptographicStandard = CryptographicStandard.CADES;
signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA1;

//Create an external signer.
IPdfExternalSigner externalSignature = new SignEmpty("SHA1");
//Add public certificates.
System.Collections.Generic.List<X509Certificate2> certificates = new System.Collections.Generic.List<X509Certificate2>();
signature.AddExternalSigner(externalSignature, certificates, null);

//Save a document.
loadedDocument.Save("EmptySignature.pdf");
//Close a document.
loadedDocument.Close(true);

//Create an external signer with a signed hash message.
IPdfExternalSigner externalSigner = new ExternalSigner("SHA1");
//Add public certificates.
System.Collections.Generic.List<X509Certificate2> publicCertificates = new System.Collections.Generic.List<X509Certificate2>();
publicCertificates.Add(new X509Certificate2(Convert.FromBase64String(PublicCert)));

//Create an output file stream.
MemoryStream outputFileStream = new MemoryStream();
//Get the stream from a document.
FileStream inputFileStream = new FileStream("EmptySignature.pdf", FileMode.Open, FileAccess.Read);
string pdfPassword = string.Empty;
//Deferred signing without PKCS7 encoding.
PdfSignature.ReplaceEmptySignature(inputFileStream, pdfPassword, outputFileStream, signatureName, externalSigner, publicCertificates, false);

/// <summary>
/// Represents to create an empty signature.
/// </summary>
class SignEmpty : IPdfExternalSigner
{
    private string _hashAlgorithm;
    public string HashAlgorithm
    {
        get { return _hashAlgorithm; }
    }

    public SignEmpty(string hashAlgorithm)
    {
        _hashAlgorithm = hashAlgorithm;
    }

    public byte[] Sign(byte[] message, out byte[] timeStampResponse)
    {
        //Set a null value to create an empty signed document.
        byte[] signedBytes = null;
        timeStampResponse = null;
        return signedBytes;
    }
}

/// <summary>
/// Represents to replace an empty signature from an external signer.
/// </summary>
class ExternalSigner : IPdfExternalSigner
{
    private string _hashAlgorithm;
    public string HashAlgorithm
    {
        get { return _hashAlgorithm; }
    }

    public ExternalSigner(string hashAlgorithm)
    {
        _hashAlgorithm = hashAlgorithm;
    }

    public byte[] Sign(byte[] message, out byte[] timeStampResponse)
    {
        //Set the signed encoded PKCS7 hash message to replace an empty signature.
        byte[] signedBytes = EncodedPKCS7Hash;
        timeStampResponse = null;
        return signedBytes;
    }
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security
Imports System.Security.Cryptography.X509Certificates

'Load an existing PDF document.
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("PDF_Succinctly.pdf")

'Creates a digital signature.
Dim signature As PdfSignature = New PdfSignature(loadedDocument, loadedDocument.Pages(0), Nothing, "Signature")
'Sets the signature information.
signature.Bounds = New RectangleF(New PointF(0, 0), New SizeF(100, 30))
signature.Settings.CryptographicStandard = CryptographicStandard.CADES
signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA1

'Create an external signer.
Dim externalSignature As IPdfExternalSigner = New SignEmpty("SHA1")
'Add public certificates.
Dim certificates As System.Collections.Generic.List(Of X509Certificate2) = New System.Collections.Generic.List(Of X509Certificate2)
signature.AddExternalSigner(externalSignature, certificates, Nothing)

'Save the document.
loadedDocument.Save("EmptySignature.pdf")
'Close the document.
loadedDocument.Close(True)

'Create an external signer with a signed hash message.
Dim externalSigner As IPdfExternalSigner = New ExternalSigner("SHA1")
'Add public certificates.
Dim publicCertificates As System.Collections.Generic.List(Of X509Certificate2) = New System.Collections.Generic.List(Of X509Certificate2)
publicCertificates.Add(New X509Certificate2(Convert.FromBase64String(PublicCert)))

'Create an output file stream.
Dim outputFileStream As MemoryStream = New MemoryStream
'Get the stream from the document.
Dim documentStream As FileStream = New FileStream("EmptySignature.pdf ", FileMode.Open, FileAccess.Read)
Dim pdfPassword As String = String.Empty
'Deferred signing without PKCS7 encoding 
PdfSignature.ReplaceEmptySignature(documentStream, pdfPassword, outputFileStream, "Signature", externalSigner, publicCertificates, False)

''' <summary>
''' Represents to create an empty signature.
''' </summary>
Class SignEmpty
    Implements IPdfExternalSigner
    Private _hashAlgorithm As String

    Public ReadOnly Property HashAlgorithm As String Implements IPdfExternalSigner.HashAlgorithm
        Get
            Return Me._hashAlgorithm
        End Get
    End Property

    Public Sub New(ByVal hashAlgorithm As String)
        MyBase.New
        Me._hashAlgorithm = hashAlgorithm
    End Sub

    Private Function IPdfExternalSigner_Sign(message() As Byte, ByRef timeStampResponse() As Byte) As Byte() Implements IPdfExternalSigner.Sign
        'Set a null value to create an empty signed document.
        Dim signedBytes() As Byte = Nothing
        timeStampResponse = Nothing
        Return signedBytes
    End Function
End Class

''' <summary>
''' Represents to replace the empty signature.
''' </summary>
Class ExternalSigner
    Implements IPdfExternalSigner
    Private _hashAlgorithm As String
    Public ReadOnly Property HashAlgorithm As String Implements IPdfExternalSigner.HashAlgorithm
        Get
            Return Me._hashAlgorithm
        End Get
    End Property

    Public Sub New(ByVal hashAlgorithm As String)
        MyBase.New
        Me._hashAlgorithm = hashAlgorithm
    End Sub

    Private Function IPdfExternalSigner_Sign(message() As Byte, ByRef timeStampResponse() As Byte) As Byte() Implements IPdfExternalSigner.Sign
        'Set the signed encoded PKCS7 hash message to replace an empty signature.
        Dim signedBytes() As Byte = EncodedPKCS7Hash
        timeStampResponse = Nothing
        Return signedBytes
    End Function
End Class

{% endhighlight %}

{% endtabs %}

## Drawing text/image in the Signature Appearance

The following code example illustrates how to draw text/images in a digital appearance using [Appearance](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html#Syncfusion_Pdf_Security_PdfSignature_Appearance) property and [DrawImage](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawImage_Syncfusion_Pdf_Graphics_PdfImage_System_Drawing_PointF_) method as follows.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Draw-text-or-images-in-the-signature-appearance/.NET/Draw-text-or-images-in-the-signature-appearance/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Creates a new PDF document.
PdfDocument document = new PdfDocument();
//Adds a new page.
PdfPageBase page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;

//Creates a certificate instance from PFX file with private key.
PdfCertificate pdfCert = new PdfCertificate(@"PDF.pfx", "password123");
//Creates a digital signature.
PdfSignature signature = new PdfSignature(document, page, pdfCert, "Signature");
//Sets an image for signature field.
PdfBitmap signatureImage = new PdfBitmap(@"signature.png");
//Sets signature information.
signature.Bounds = new RectangleF(0,0,200,100);
signature.ContactInfo = "johndoe@owned.us";
signature.LocationInfo = "Honolulu, Hawaii";
signature.Reason = "I am author of this document.";
//Create appearance for the digital siganture.
signature.Appearance.Normal.Graphics.DrawImage(signatureImage, signature.Bounds);

//Save the document.
document.Save("DigitalSignature.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Creates a new PDF document.
PdfDocument document = new PdfDocument();
//Adds a new page.
PdfPageBase page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;

//Creates a certificate instance from PFX file with private key.
PdfCertificate pdfCert = new PdfCertificate(@"PDF.pfx", "password123");
//Creates a digital signature.
PdfSignature signature = new PdfSignature(document, page, pdfCert, "Signature");
//Sets an image for signature field.
PdfBitmap signatureImage = new PdfBitmap(@"signature.png");
//Sets signature information.
signature.Bounds = new RectangleF(0,0,200,100);
signature.ContactInfo = "johndoe@owned.us";
signature.LocationInfo = "Honolulu, Hawaii";
signature.Reason = "I am author of this document.";
//Create appearance for the digital siganture.
signature.Appearance.Normal.Graphics.DrawImage(signatureImage, signature.Bounds);

//Save the document.
document.Save("DigitalSignature.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Security

'Create a new PDF document.
Dim document As New PdfDocument()
'Add a new page.
Dim page As PdfPageBase = document.Pages.Add()
'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics

'Create a certificate instance from a PFX file with a private key.
Dim pdfCert As New PdfCertificate("PDF.pfx", "password123")
'Create a digital signature.
Dim signature As New PdfSignature(document, page, pdfCert, "Signature")
'Set an image for signature field.
Dim signatureImage As New PdfBitmap("signature.jpg")
'Set the signature information.
signature.Bounds = New RectangleF(New PointF(0, 0), signatureImage.PhysicalDimension)
signature.ContactInfo = "johndoe@owned.us"
signature.LocationInfo = "Honolulu, Hawaii"
signature.Reason = "I am author of this document."
'Create appearance for the digital signature.
signature.Appearance.Normal.Graphics.DrawImage(signatureImage, signature.Bounds)

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Draw-text-or-images-in-the-signature-appearance/).

## Long Term Validation (LTV) information

Added support for LTV validation and getting CRL and OCSP embedded details from the digital signature using [LtvVerificationInfo](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignatureValidationResult.html#Syncfusion_Pdf_Security_PdfSignatureValidationResult_LtvVerificationInfo) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Get-LTV-information/.NET/Get-LTV-information/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

// Gets the signature field
PdfLoadedSignatureField signatureField = document.Form.Fields[0] as PdfLoadedSignatureField;

// Validates signature and get validation result
PdfSignatureValidationResult result = signatureField.ValidateSignature();

// Gets the LTV verification Information.
LtvVerificationInfo ltvVerificationInfo = result.LtvVerificationInfo;

// Checks whether the signature document LTV is enabled.
bool isLtvEnabled = ltvVerificationInfo.IsLtvEnabled;

// Checks whether the signature document has CRL embedded.
bool isCrlEmbedded = ltvVerificationInfo.IsCrlEmbedded;

// Checks whether the signature document has OCSP embedded.
bool isOcspEmbedded = ltvVerificationInfo.IsOcspEmbedded;

Console.WriteLine("LTV enabled: " + isLtvEnabled);
Console.WriteLine("CRL embedded: " + isCrlEmbedded);
Console.WriteLine("OCSP embedded: " + isOcspEmbedded);

// Closes the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

// Gets the signature field
PdfLoadedSignatureField signatureField = document.Form.Fields[0] as PdfLoadedSignatureField;

// Validates signature and get validation result
PdfSignatureValidationResult result = signatureField.ValidateSignature();

// Gets the LTV verification Information.
LtvVerificationInfo ltvVerificationInfo = result.LtvVerificationInfo;

// Checks whether the signature document LTV is enabled.
bool isLtvEnabled = ltvVerificationInfo.IsLtvEnabled;

// Checks whether the signature document has CRL embedded.
bool isCrlEmbedded = ltvVerificationInfo.IsCrlEmbedded;

// Checks whether the signature document has OCSP embedded.
bool isOcspEmbedded = ltvVerificationInfo.IsOcspEmbedded;

Console.WriteLine("LTV enabled: " + isLtvEnabled);
Console.WriteLine("CRL embedded: " + isCrlEmbedded);
Console.WriteLine("OCSP embedded: " + isOcspEmbedded);

// Closes the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security

' Loads an existing signed PDF document
Dim document As New PdfLoadedDocument("Input.pdf")

' Gets the signature field
Dim signatureField As PdfLoadedSignatureField = TryCast(document.Form.Fields(0), PdfLoadedSignatureField)

' Validates signature and get validation result
Dim result As PdfSignatureValidationResult = signatureField.ValidateSignature()

' Gets the LTV verification Information.
Dim ltvVerificationInfo As LtvVerificationInfo = result.LtvVerificationInfo

' Checks whether the signature document LTV is enabled.
Dim isLtvEnabled As Boolean = ltvVerificationInfo.IsLtvEnabled

' Checks whether the signature document has CRL embedded.
Dim isCrlEmbedded As Boolean = ltvVerificationInfo.IsCrlEmbedded

' Checks whether the signature document has OCSP embedded.
Dim isOcspEmbedded As Boolean = ltvVerificationInfo.IsOcspEmbedded

Console.WriteLine("LTV enabled: " & isLtvEnabled)
Console.WriteLine("CRL embedded: " & isCrlEmbedded)
Console.WriteLine("OCSP embedded: " & isOcspEmbedded)

' Closes the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Get-LTV-information/).

## Customized revocation validation

Added support to customize revocation validation using [PdfSignatureValidationOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfSignatureValidationOptions.html).

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Customized-revocation-validation/.NET/Customized-revocation-validation/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

// Gets the signature field
PdfLoadedSignatureField signatureField = document.Form.Fields[0] as PdfLoadedSignatureField;

// Signature validation options
PdfSignatureValidationOptions options = new PdfSignatureValidationOptions();

// Sets the revocation type
options.RevocationValidationType = RevocationValidationType.Crl;

// Validate signature and get validation result
PdfSignatureValidationResult result = signatureField.ValidateSignature(options);

//Check whether the CRL is revoked
if (result.RevocationResult.IsRevokedCRL)
{
    Console.WriteLine("CRL is revoked");
}
else
{
    Console.WriteLine("CRL is not revoked");
}

// Closes the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

// Gets the signature field
PdfLoadedSignatureField signatureField = document.Form.Fields[0] as PdfLoadedSignatureField;

// Signature validation options
PdfSignatureValidationOptions options = new PdfSignatureValidationOptions();

// Sets the revocation type
options.RevocationValidationType = RevocationValidationType.Crl;

// Validate signature and get validation result
PdfSignatureValidationResult result = signatureField.ValidateSignature(options);

//Check whether the CRL is revoked
if (result.RevocationResult.IsRevokedCRL)
{
    Console.WriteLine("CRL is revoked");
}
else
{
    Console.WriteLine("CRL is not revoked");
}

// Closes the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security

' Gets the stream from the document
Dim documentStream As New FileStream(Path.GetFullPath("Data/Input.pdf"), FileMode.Open, FileAccess.Read)

' Loads an existing signed PDF document
Dim document As New PdfLoadedDocument(documentStream)

' Gets the signature field
Dim signatureField As PdfLoadedSignatureField = TryCast(document.Form.Fields(0), PdfLoadedSignatureField)

' Signature validation options
Dim options As New PdfSignatureValidationOptions()

' Sets the revocation type
options.RevocationValidationType = RevocationValidationType.Crl

' Validate signature and get validation result
Dim result As PdfSignatureValidationResult = signatureField.ValidateSignature(options)

' Check whether the CRL is revoked
If result.RevocationResult.IsRevokedCRL Then
    Console.WriteLine("CRL is revoked")
Else
    Console.WriteLine("CRL is not revoked")
End If

' Closes the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Customized-revocation-validation/).

## Remove existing digital signatures from a PDF document 

The following code example illustrates how to remove existing digital signatures from a PDF document using [Remove](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfFieldCollection.html#Syncfusion_Pdf_Interactive_PdfFieldCollection_Remove_Syncfusion_Pdf_Interactive_PdfField_) method in [PdfLoadedFormFieldCollection](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedFormFieldCollection.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Remove_existing_digital_signature_from_PDF/.NET/Remove_existing_digital_signature_from_PDF/Program.cs" %}

using Syncfusion.Pdf.Parsing;

//Load an existing PDF document.
PdfLoadedDocument pdfLoadedDocument = new PdfLoadedDocument("Input.pdf");

//Get the signature field from PDF form field collection.
PdfLoadedSignatureField signatureField = pdfLoadedDocument.Form.Fields[0] as PdfLoadedSignatureField;
//Remove signature field from form field collection.
pdfLoadedDocument.Form.Fields.Remove(signatureField);

//Save and close the PDF document.
pdfLoadedDocument.Save("RemoveDigital.pdf");
pdfLoadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;

//Load an existing PDF document.
PdfLoadedDocument pdfLoadedDocument = new PdfLoadedDocument("Input.pdf");

//Get the signature field from PDF form field collection.
PdfLoadedSignatureField signatureField = pdfLoadedDocument.Form.Fields[0] as PdfLoadedSignatureField;
//Remove signature field from form field collection.
pdfLoadedDocument.Form.Fields.Remove(signatureField);

//Save and close the PDF document.
pdfLoadedDocument.Save("RemoveDigital.pdf");
pdfLoadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing

'Load an existing PDF document.
Dim pdfLoadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")

'Get the signature field from PDF form field collection.
Dim signatureField As PdfLoadedSignatureField = TryCast(pdfLoadedDocument.Form.Fields(0), PdfLoadedSignatureField)
'Remove signature field from form field collection.
pdfLoadedDocument.Form.Fields.Remove(signatureField)

'Save and close the PDF document.
pdfLoadedDocument.Save("RemoveDigital.pdf")
pdfLoadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Remove_existing_digital_signature_from_PDF/).

## Certified signature 

The following code snippet illustrates how to sign a PDF document without showing the digital signature using [Certificated](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html#Syncfusion_Pdf_Security_PdfSignature_Certificated) property in [PdfSignature](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html) class.  

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Sign-PDF-without-showing-digital-signature/.NET/Sign-PDF-without-showing-digital-signature/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Load digital ID with password.
PdfCertificate certificate = new PdfCertificate(@"PDF.pfx", "password123");

//Create a signature with loaded digital ID.
PdfSignature signature = new PdfSignature(loadedDocument, loadedDocument.Pages[0], certificate, "DigitalSignature");
signature.Settings.CryptographicStandard = CryptographicStandard.CADES;
signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA256;
//This property enables the author or certifying signature.
signature.Certificated = true;
//Allow the form fill and and comments.
signature.DocumentPermissions = PdfCertificationFlags.AllowFormFill | PdfCertificationFlags.AllowComments;

//Save and close the PDF document.
loadedDocument.Save("Certifying.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Load digital ID with password.
PdfCertificate certificate = new PdfCertificate(@"PDF.pfx", "password123");

//Create a signature with loaded digital ID.
PdfSignature signature = new PdfSignature(loadedDocument, loadedDocument.Pages[0], certificate, "DigitalSignature");
signature.Settings.CryptographicStandard = CryptographicStandard.CADES;
signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA256;
//This property enables the author or certifying signature.
signature.Certificated = true;
//Allow the form fill and and comments.
signature.DocumentPermissions = PdfCertificationFlags.AllowFormFill | PdfCertificationFlags.AllowComments;

//Save and close the PDF document.
loadedDocument.Save("Certifying.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security

'Load an existing PDF document.
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Load digital ID with password. 
Dim certificate As PdfCertificate = New PdfCertificate("PDF.pfx", "password123")

'Create a signature with loaded digital ID. 
Dim signature As PdfSignature = New PdfSignature(loadedDocument, loadedDocument.Pages(0), certificate, "DigitalSignature")
signature.Settings.CryptographicStandard = CryptographicStandard.CADES
signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA256
'This property enables the author or certifying signature.
signature.Certificated = True
'Allow the form fill and and comments. 
signature.DocumentPermissions = PdfCertificationFlags.AllowFormFill Or PdfCertificationFlags.AllowComments

'Save and close the PDF document.
loadedDocument.Save("Certifying.pdf")
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Sign-PDF-without-showing-digital-signature/).

## Retrieve digital signature information from an existing PDF document 

The following code snippet illustrates how to retrieve digital signature information from an existing PDF document using [IssuerName](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfCertificate.html#Syncfusion_Pdf_Security_PdfCertificate_IssuerName), [ValidFrom](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfCertificate.html#Syncfusion_Pdf_Security_PdfCertificate_ValidFrom), and [ValidTo](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfCertificate.html#Syncfusion_Pdf_Security_PdfCertificate_ValidTo) property. 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Retrieve-digital-signature-information-from-PDF/.NET/Retrieve-digital-signature-information-from-PDF/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Get the signature field from PdfLoadedDocument form field collection.
PdfLoadedSignatureField signatureField = loadedDocument.Form.Fields[0] as PdfLoadedSignatureField;
PdfSignature signature = signatureField.Signature;

//Extract the signature information.
Console.WriteLine("Digitally Signed by: " + signature.Certificate.IssuerName);
Console.WriteLine("Valid From: " + signature.Certificate.ValidFrom);
Console.WriteLine("Valid To: " + signature.Certificate.ValidTo);
Console.WriteLine("Hash Algorithm : " + signature.Settings.DigestAlgorithm);
Console.WriteLine("Cryptographics Standard : " + signature.Settings.CryptographicStandard);

//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Get the signature field from PdfLoadedDocument form field collection.
PdfLoadedSignatureField signatureField = loadedDocument.Form.Fields[0] as PdfLoadedSignatureField;
PdfSignature signature = signatureField.Signature;

//Extract the signature information.
Console.WriteLine("Digitally Signed by: " + signature.Certificate.IssuerName);
Console.WriteLine("Valid From: " + signature.Certificate.ValidFrom);
Console.WriteLine("Valid To: " + signature.Certificate.ValidTo);
Console.WriteLine("Hash Algorithm : " + signature.Settings.DigestAlgorithm);
Console.WriteLine("Cryptographics Standard : " + signature.Settings.CryptographicStandard);

//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security

'Load an existing PDF document. 
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")

'Get the signature field from PdfLoadedDocument form field collection.
Dim signatureField As PdfLoadedSignatureField = TryCast(loadedDocument.Form.Fields(0), PdfLoadedSignatureField)
Dim signature As PdfSignature = signatureField.Signature

'Extract the signature information.
Console.WriteLine("Digitally Signed by: " & signature.Certificate.IssuerName)
Console.WriteLine("Valid From: " & signature.Certificate.ValidFrom)
Console.WriteLine("Valid To: " & signature.Certificate.ValidTo)
Console.WriteLine("Hash Algorithm : " & signature.Settings.DigestAlgorithm)
Console.WriteLine("Cryptographics Standard : " & signature.Settings.CryptographicStandard)

'Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Retrieve-digital-signature-information-from-PDF/).

## Adding multiple signatures to a PDF document

The following code example illustrates how to add multiple signatures to a PDF document without invalidating the previous signature.  

N> It is recommended to use licensed assemblies or registered license keys in your respective applications to add multiple digital signatures to the PDF documents without invalidating the previous signatures. 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/refs/heads/master/Digital%20Signature/Multiple-digital-signature/.NET/Multiple-digital-signature/Program.cs" %}

using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using Syncfusion.Pdf;

//Load an existing PDF document. 
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the first page of the document.
PdfLoadedPage page = loadedDocument.Pages[0] as PdfLoadedPage;

//Get the first signature field of the PDF document.
PdfLoadedSignatureField signatureField1 = loadedDocument.Form.Fields[0] as PdfLoadedSignatureField;
//Create a certificate instance from a PFX file with a private key.
PdfCertificate certificate1 = new PdfCertificate("PDF.pfx", "password123");
//Add a signature to the signature field.
signatureField1.Signature = new PdfSignature(loadedDocument, page, certificate1, "Signature", signatureField1);
//Set an image for the signature field.
PdfBitmap signatureImage = new PdfBitmap(@"Student Signature.jpg");
//Insert an image in the signature appearance. 
signatureField1.Signature.Appearance.Normal.Graphics.DrawImage(signatureImage, 0, 0, 90, 20);

//Save the document into the stream.
MemoryStream stream = new MemoryStream();
loadedDocument.Save(stream);

//Load the signed PDF document.
PdfLoadedDocument signedDocument = new PdfLoadedDocument(stream);
//Load the PDF page.
PdfLoadedPage loadedPage = signedDocument.Pages[0] as PdfLoadedPage;

//Get the first signature field of the PDF document.
PdfLoadedSignatureField signatureField2 = signedDocument.Form.Fields[1] as PdfLoadedSignatureField;
//Add a signature to the signature field. 
signatureField2.Signature = new PdfSignature(signedDocument, loadedPage, certificate1, "Signature", signatureField2);
//Set an image for the signature field.
PdfBitmap signatureImage1 = new PdfBitmap(@"Teacher Signature.png");
//Draw an image in the signature appearance. 
signatureField2.Signature.Appearance.Normal.Graphics.DrawImage(signatureImage1, 0, 0, 90, 20);

//Save the PDF document. 
signedDocument.Save("Multiple_signature.pdf");
//Close the PDF documents. 
signedDocument.Close(true);
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using Syncfusion.Pdf;

//Load an existing PDF document. 
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the first page of the document.
PdfLoadedPage page = loadedDocument.Pages[0] as PdfLoadedPage;

//Get the first signature field of the PDF document.
PdfLoadedSignatureField signatureField1 = loadedDocument.Form.Fields[0] as PdfLoadedSignatureField;
//Create a certificate instance from a PFX file with a private key.
PdfCertificate certificate1 = new PdfCertificate("PDF.pfx", "password123");
//Add a signature to the signature field.
signatureField1.Signature = new PdfSignature(loadedDocument, page, certificate1, "Signature", signatureField1);
//Set an image for the signature field.
PdfBitmap signatureImage = new PdfBitmap(@"Student Signature.jpg");
//Insert an image in the signature appearance. 
signatureField1.Signature.Appearance.Normal.Graphics.DrawImage(signatureImage, 0, 0, 90, 20);

//Save the document into the stream.
MemoryStream stream = new MemoryStream();
loadedDocument.Save(stream);

//Load the signed PDF document.
PdfLoadedDocument signedDocument = new PdfLoadedDocument(stream);
//Load the PDF page.
PdfLoadedPage loadedPage = signedDocument.Pages[0] as PdfLoadedPage;

//Get the first signature field of the PDF document.
PdfLoadedSignatureField signatureField2 = signedDocument.Form.Fields[1] as PdfLoadedSignatureField;
//Add a signature to the signature field. 
signatureField2.Signature = new PdfSignature(signedDocument, loadedPage, certificate1, "Signature", signatureField2);
//Set an image for the signature field.
PdfBitmap signatureImage1 = new PdfBitmap(@"Teacher Signature.png");
//Draw an image in the signature appearance. 
signatureField2.Signature.Appearance.Normal.Graphics.DrawImage(signatureImage1, 0, 0, 90, 20);

//Save the PDF document. 
signedDocument.Save("Multiple_signature.pdf");
//Close the PDF documents. 
signedDocument.Close(true);
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security
Imports Syncfusion.Pdf

'Load an existing PDF document. 
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the first page of the document.
Dim page As PdfLoadedPage = TryCast(loadedDocument.Pages(0), PdfLoadedPage)

'Get the first signature field of the PDF document.
Dim signatureField1 As PdfLoadedSignatureField = TryCast(loadedDocument.Form.Fields(0), PdfLoadedSignatureField)
'Create a certificate instance from the PFX file with a private key.
Dim certificate1 As PdfCertificate = New PdfCertificate("PDF.pfx", "password123")
'Add a signature to the signature field. 
signatureField1.Signature = New PdfSignature(loadedDocument, page, certificate1, "Signature", signatureField1)
'Set an image for the signature field.
Dim signatureImage As PdfBitmap = New PdfBitmap("Student Signature.jpg")
'Draw an image in the signature appearance. 
signatureField1.Signature.Appearance.Normal.Graphics.DrawImage(signatureImage, 0, 0, 90, 20)

'Save the document into the stream.
Dim stream As MemoryStream = New MemoryStream()
loadedDocument.Save(stream)

'Load the signed PDF document.
Dim signedDocument As PdfLoadedDocument = New PdfLoadedDocument(stream)
'Load the PDF page.
Dim loadedPage As PdfLoadedPage = TryCast(signedDocument.Pages(0), PdfLoadedPage)

'Get the first signature field of the PDF document.
Dim signatureField2 As PdfLoadedSignatureField = TryCast(signedDocument.Form.Fields(1), PdfLoadedSignatureField)
signatureField2.Signature = New PdfSignature(signedDocument, loadedPage, certificate1, "Signature", signatureField2)
'Set an image for the signature field.
Dim signatureImage1 As PdfBitmap = New PdfBitmap("Teacher Signature.png")
'Draw an image in the signature appearance. 
signatureField2.Signature.Appearance.Normal.Graphics.DrawImage(signatureImage1, 0, 0, 90, 20)

'Save the PDF document. 
signedDocument.Save("Multiple_signature.pdf")
'Close the PDF documents. 
signedDocument.Close(True)
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Multiple-digital-signature/).

## Retrieve revocation certificate information from digital signature

The following code example illustrates how to retrieve revocation certificate information from digital signature using [PdfSignerCertificate](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignerCertificate.html). 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Retrieve-revocation-certificate-information/.NET/Retrieve-revocation-certificate-information/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using System.Security.Cryptography.X509Certificates;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Get signature field.
PdfLoadedSignatureField loadedSignatureField = loadedDocument.Form.Fields[0] as PdfLoadedSignatureField;
//X509Certificate2Collection to check the signer's identity using root certificates.
X509CertificateCollection collection = new X509CertificateCollection();
//Create new X509Certificate2 with the root certificate.
X509Certificate2 certificate = new X509Certificate2(@"Root.cer");
//Add the certificate to the collection.
collection.Add(certificate);
//Create new X509Certificate2 with the intermediate certificate.
certificate = new X509Certificate2(@"Intermediate.cer");
//Add the certificate to the collection.
collection.Add(certificate);
//Validate signature and get the validation result.
PdfSignatureValidationResult result = loadedSignatureField.ValidateSignature(collection);

foreach (PdfSignerCertificate signerCertificate in result.SignerCertificates)
{
    if (signerCertificate.OcspCertificate != null)
    {
        foreach (X509Certificate2 item in signerCertificate.OcspCertificate.Certificates)
        {
            string subjectName = "The OCSP Response was signed by " + item.SubjectName.Name;
        }
        bool isEmbbed = signerCertificate.OcspCertificate.IsEmbedded;
        DateTime validForm = signerCertificate.OcspCertificate.ValidFrom;
        DateTime validTo = signerCertificate.OcspCertificate.ValidTo;

    }
    if (signerCertificate.CrlCertificate != null)
    {
        foreach (X509Certificate2 item in signerCertificate.CrlCertificate.Certificates)
        {
            string subjectName = "The CRL was signed by " + item.SubjectName.Name;
        }
        bool isEmbbed = signerCertificate.CrlCertificate.IsEmbedded;
        DateTime validForm = signerCertificate.CrlCertificate.ValidFrom;
        DateTime validTo = signerCertificate.CrlCertificate.ValidTo;
    }
}

//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using System.Security.Cryptography.X509Certificates;

//Load an existing signed PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Get signature field.
PdfLoadedSignatureField loadedSignatureField = loadedDocument.Form.Fields[0] as PdfLoadedSignatureField;
//X509Certificate2Collection to check the signer's identity using root certificates.
X509CertificateCollection collection = new X509CertificateCollection();
//Create new X509Certificate2 with the root certificate.
X509Certificate2 certificate = new X509Certificate2(@"Root.cer");
//Add the certificate to the collection.
collection.Add(certificate);
//Create new X509Certificate2 with the intermediate certificate.
certificate = new X509Certificate2(@"Intermediate.cer");
//Add the certificate to the collection.
collection.Add(certificate);

//Validate signature and get the validation result.
PdfSignatureValidationResult result = loadedSignatureField.ValidateSignature(collection);

foreach (PdfSignerCertificate signerCertificate in result.SignerCertificates)
{
    if (signerCertificate.OcspCertificate != null)
    {
        foreach (X509Certificate2 item in signerCertificate.OcspCertificate.Certificates)
        {
            string subjectName = "The OCSP Response was signed by " + item.SubjectName.Name;
        }
        bool isEmbbed = signerCertificate.OcspCertificate.IsEmbedded;
        DateTime validForm = signerCertificate.OcspCertificate.ValidFrom;
        DateTime validTo = signerCertificate.OcspCertificate.ValidTo;

    }
    if (signerCertificate.CrlCertificate != null)
    {
        foreach (X509Certificate2 item in signerCertificate.CrlCertificate.Certificates)
        {
            string subjectName = "The CRL was signed by " + item.SubjectName.Name;
        }
        bool isEmbbed = signerCertificate.CrlCertificate.IsEmbedded;
        DateTime validForm = signerCertificate.CrlCertificate.ValidFrom;
        DateTime validTo = signerCertificate.CrlCertificate.ValidTo;
    }
}
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security
Imports System.Security.Cryptography.X509Certificates

'Load an existing signed PDF document.
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")

'Get signature field.
Dim loadedSignatureField As PdfLoadedSignatureField = TryCast(loadedDocument.Form.Fields(0), PdfLoadedSignatureField)
'X509Certificate2Collection to check the signer's identity using root certificates.
Dim collection As X509CertificateCollection = New X509CertificateCollection()
'Create new X509Certificate2 with the root certificate.
Dim certificate As X509Certificate2 = New X509Certificate2("Root.cer")
'Add the certificate to the collection.
collection.Add(certificate)
'Create new X509Certificate2 with the intermediate certificate.
certificate = New X509Certificate2("Intermediate.cer")
'Add the certificate to the collection.
collection.Add(certificate)

'Validate signature and get the validation result.
Dim result As PdfSignatureValidationResult = loadedSignatureField.ValidateSignature(collection)

For Each signerCertificate As PdfSignerCertificate In result.SignerCertificates

    If signerCertificate.OcspCertificate IsNot Nothing Then

        For Each item As X509Certificate2 In signerCertificate.OcspCertificate.Certificates
            Dim subjectName As String = "The OCSP Response was signed by " & item.SubjectName.Name
        Next

        Dim isEmbbed As Boolean = signerCertificate.OcspCertificate.IsEmbedded
        Dim validForm As DateTime = signerCertificate.OcspCertificate.ValidFrom
        Dim validTo As DateTime = signerCertificate.OcspCertificate.ValidTo
    End If

    If signerCertificate.CrlCertificate IsNot Nothing Then

        For Each item As X509Certificate2 In signerCertificate.CrlCertificate.Certificates
            Dim subjectName As String = "The CRL was signed by " & item.SubjectName.Name
        Next

        Dim isEmbbed As Boolean = signerCertificate.CrlCertificate.IsEmbedded
        Dim validForm As DateTime = signerCertificate.CrlCertificate.ValidFrom
        Dim validTo As DateTime = signerCertificate.CrlCertificate.ValidTo
    End If
Next
'Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Retrieve-revocation-certificate-information).

## Retrieve signed revision information from digital signature

The following code example illustrates how to retrieve signed revision information from digital signature using [Revision](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedSignatureField.html#Syncfusion_Pdf_Parsing_PdfLoadedSignatureField_Revision) property of [PdfLoadedSignatureField](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedSignatureField.html). 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Retrieve-signed-revision-information/.NET/Retrieve-signed-revision-information/Program.cs" %}

using Syncfusion.Pdf.Parsing;

//Load an existing PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Get the document revisions. 
PdfRevision[] revisions = document.Revisions;
foreach (PdfRevision rev in revisions)
{
    //Get revision start position.
    long startPosition = rev.StartPosition;
}
//Load the existing signature field.
PdfLoadedSignatureField field = document.Form.Fields[0] as PdfLoadedSignatureField;
//Get the revision of the signature.
int revisionIndex = field.Revision;
//Close the document.
document.Close(true);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;

//Load an existing PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Get the document revisions. 
PdfRevision[] revisions = document.Revisions;
foreach (PdfRevision rev in revisions)
{
    //Get revision start position.
    long startPosition = rev.StartPosition;
}
//Load the existing signature field.
PdfLoadedSignatureField field = document.Form.Fields[0] as PdfLoadedSignatureField;
//Get the revision of the signature.
int revisionIndex = field.Revision;
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing

'Load an existing PDF document.
Dim document As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the document revisions. 
Dim revisions As PdfRevision() = document.Revisions
For Each rev As PdfRevision In revisions
    'Get revision start position.
    Dim startPosition As Long = rev.StartPosition
Next
'Load the existing signature field.
Dim field As PdfLoadedSignatureField = TryCast(document.Form.Fields(0), PdfLoadedSignatureField)
'Get the revision of the signature.
Dim revisionIndex As Integer = field.Revision
'Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Retrieve-signed-revision-information).

## Retrieve revocation certificate information from digital signature embed timestamp

The following code example illustrates how to retrieve revocation certificate information from digital signature embed timestamp using  [PdfSignerCertificate](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignerCertificate.html). 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Retrieve-revocation-certificate-information-from-digital-signature-embed-timestamp/.NET/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using System.Security.Cryptography.X509Certificates;

//Load an existing PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Gets the signature field.
PdfLoadedSignatureField signatureField = document.Form.Fields[0] as PdfLoadedSignatureField;
//Validates signature and gets the validation result.
PdfSignatureValidationResult result = signatureField.ValidateSignature();
//Gets signer certificates
PdfSignerCertificate[] certifcate = result.TimeStampInformation.SignerCertificates;
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using System.Security.Cryptography.X509Certificates;

//Load an existing PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Gets the signature field.
PdfLoadedSignatureField signatureField = document.Form.Fields[0] as PdfLoadedSignatureField;
//Validates signature and gets the validation result.
PdfSignatureValidationResult result = signatureField.ValidateSignature();
//Gets signer certificates
PdfSignerCertificate[] certifcate = result.TimeStampInformation.SignerCertificates;
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security
Imports System.Security.Cryptography.X509Certificates

'Load an existing PDF document.
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Gets the signature field.
Dim loadedSignatureField As PdfLoadedSignatureField = TryCast(loadedDocument.Form.Fields(0), PdfLoadedSignatureField)
'Validates signature and gets the validation result.
Dim result As PdfSignatureValidationResult = loadedSignatureField.ValidateSignature()
'Gets signer certificates
Dim certifcate As PdfSignerCertificate() = result.TimeStampInformation.SignerCertificates
'Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Retrieve-revocation-certificate-information-from-digital-signature-embed-timestamp).

## Get images from the existing signed signature field

Utilize the **GetImages** method within the [PdfLoadedSignatureField](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedSignatureField.html) class to obtain images from the appearance of an existing signed signature field. The following code example provides a clear demonstration of this functionality.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Digital%20Signature/Get-images-from-the-existing-signed-signature-field/.NET/Get-images-from-the-existing-signed-signature-field/Program.cs" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF file.
PdfLoadedDocument ldoc = new PdfLoadedDocument("Input.pdf");
//Get the existing signed signature field.
PdfLoadedSignatureField loadedSignature = ldoc.Form.Fields[0] as PdfLoadedSignatureField;
//Get the image.
Image[] images = loadedSignature.GetImages();
for (int i = 0; i < images.Length; i++) {
    images[i].Save("Image" + i.ToString() + ".jpg", ImageFormat.Png);
}
//Close a PDF document.
ldoc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF file.
PdfLoadedDocument ldoc = new PdfLoadedDocument("Input.pdf");
//Get the existing signed signature field.
PdfLoadedSignatureField loadedSignature = ldoc.Form.Fields[0] as PdfLoadedSignatureField;
//Get the image.
Image[] images = loadedSignature.GetImages();
for (int i = 0; i < images.Length; i++) {
    images[i].Save("Image" + i.ToString() + ".jpg", ImageFormat.Png);
}
//Close a PDF document.
ldoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Interactive

'Load an existing PDF file.
Dim fileStream As FileStream = New FileStream("Input.pdf", FileMode.Open, FileAccess.Read)
Dim ldoc As PdfLoadedDocument = New PdfLoadedDocument(fileStream)
'Get the existing signed signature field.
Dim loadedSignature As PdfLoadedSignatureField = TryCast(ldoc.Form.Fields(0), PdfLoadedSignatureField)
'Get the image.
Dim images As Image() = loadedSignature.GetImages()
For i As Integer = 0 To images.Length - 1
    images(i).Save("Image.jpg", Imaging.ImageFormat.Png)
Next
'Close a PDF document.
ldoc.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Digital%20Signature/Get-images-from-the-existing-signed-signature-field).

N> This method retrieves the images when rendered on the signed signature field appearance; otherwise, it will return null.

## Integrating signature and timestamp certificates into the Document Secure Store (DSS).

Effortlessly Integrate **signature and timestamp** certificates into the Document Security Store (DSS) with the Essential<sup>&reg;</sup> PDF Library. This streamlined process enhances certificate management, ensuring robust validation for your PDF documents. Below is a code example demonstrating how to include certificates when creating Long-Term Validity (LTV) from an external signature, utilizing the [CreateLongTermValidity](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html#Syncfusion_Pdf_Security_PdfSignature_CreateLongTermValidity_System_Collections_Generic_List_System_Security_Cryptography_X509Certificates_X509Certificate2__System_Boolean_) method in the [PdfSignature](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using System.Security.Cryptography.X509Certificates;

//Loads an existing document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Gets the signature field
PdfLoadedSignatureField signatureField = document.Form.Fields[0] as PdfLoadedSignatureField;
//Add public Certificates
List<X509Certificate2> x509Certificate2s = new List<X509Certificate2>();
//Create long term validation of the signature.
signatureField.Signature.CreateLongTermValidity(x509Certificate2s , true);
//Save the document into stream
MemoryStream stream = new MemoryStream();
document.Save(stream);
//Close the document
document.Close(true);
//Loads the stream from the document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(stream);
// Access the Document Security Store details
PdfDocumentSecureStore pdfDocumentSecureStore = loadedDocument.DocumentSecureStore;
// Store the DSS certificates on X509Certificate2 certificates.
X509Certificate2[] cert2 = pdfDocumentSecureStore.Certificates;
foreach(X509Certificate2 cert in cert2)
{
    PdfCertificate certificate = new PdfCertificate(cert);
}
// Close the document
loadedDocument.Close(true); 

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;
using System.Security.Cryptography.X509Certificates;

//Gets the stream from the document
FileStream documentStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read);
//Loads an existing signed PDF document
PdfLoadedDocument document = new PdfLoadedDocument(documentStream);
//Gets the signature field
PdfLoadedSignatureField signatureField = document.Form.Fields[0] as PdfLoadedSignatureField;
//Add public Certificates
List<X509Certificate2> x509Certificate2s = new List<X509Certificate2>();
//Create long term validation of the signature.
signatureField.Signature.CreateLongTermValidity(x509Certificate2s, true);
//Save the document into stream
MemoryStream stream = new MemoryStream();
document.Save(stream);
//Close the document
document.Close(true);
//Loads an existing steam
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(stream);
//Access the Document Security Store details
PdfDocumentSecureStore pdfDocumentSecureStore = loadedDocument.DocumentSecureStore;
//Store the DSS certificates on X509Certificate2 certificates.
X509Certificate2[] cert2 = pdfDocumentSecureStore.Certificates;
foreach(X509Certificate2 cert in cert2)
{
    PdfCertificate certificate = new PdfCertificate(cert);
}
// Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security
Imports System.Security.Cryptography.X509Certificates

'Loads an existing signed PDF document
Dim document As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Gets the signature field
Dim signatureField As PdfLoadedSignatureField = CType(document.Form.Fields(0),PdfLoadedSignatureField)
'Add public Certificates
Dim x509Certificate2s As List(Of X509Certificate2) = New List(Of X509Certificate2)
'Create long term validation of the signature.
signatureField.Signature.CreateLongTermValidity(x509Certificate2s, true)
Dim stream As MemoryStream = New MemoryStream
document.Save(stream)
'Close the document
document.Close(true)
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument(stream)
'Access the Document Security Store details
Dim pdfDocumentSecureStore As PdfDocumentSecureStore = loadedDocument.DocumentSecureStore
'Store the DSS certificates on X509Certificate2 certificates.
Dim cert2() As X509Certificate2 = pdfDocumentSecureStore.Certificates
For Each cert As X509Certificate2 In cert2
    Dim certificate As PdfCertificate = New PdfCertificate(cert)
Next
' Close the document
loadedDocument.Close(true)

{% endhighlight %}

{% endtabs %}

## Troubleshooting

<th style="font-size:14px"><b>Signature is not visible after signing the document.
</b></th>

<table>
<tr>
<th style="font-size:14px">Reason
</th>
<td style="font-size:14px">
<b>The signature bounds is not properly set, due to this may appear invisible.</b>
</td>
</tr>
<tr>
<th style="font-size:14px"> Solution
</th>
<td>We recommend ensuring that the bounds value of the signature field is correctly set and drawing the image with the signature to ensure its visibility 
{% tabs %}

{% highlight c# tabtitle="C#" %}

//Set the signature bounds.
signature.Bounds= new RectangleF(new PointF(0, 0), new SizeF(100, 100));

{% endhighlight %}
{% endtabs %}
</td>
</tr>
</table>

<th style="font-size:14px"><b>Digital signature with LTA `Overflow exception when using custom timestamp server`.
</b></th>

<table>

<th style="font-size:14px" width="100px">Exception
</th>
<th style="font-size:14px">when signing a PDF with LTA using a custom timestamp server.
System.OverflowException: `Arithmetic operation resulted in an overflow`.
</th>

<tr>
<th style="font-size:14px" width="100px">Reason
</th>
<td>This exception occurs when the `EstimatedSignatureSize` is set too small to accommodate the data returned by certain timestamp servers. Some servers may return a larger timestamp token or include additional certificate/OCSP information, which exceeds the allocated space, causing an arithmetic overflow.
</td>
</tr>

<tr>
<th style="font-size:14px" width="100px">Solution
</th>
<td>Increase the <a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSignature.html#Syncfusion_Pdf_Security_PdfSignature_EstimatedSignatureSize">EstimatedSignatureSize</a> property when configuring the PDF digital signature to ensure enough space is reserved for the full timestamp and LTV content.
<br><br/>
{% tabs %}
{% highlight C# tabtitle="C#" %}

// Set the estimated signature size
signature.EstimatedSignatureSize = 20000;

{% endhighlight %}
{% endtabs %}
</td>
</tr>

</table>