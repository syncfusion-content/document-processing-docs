---
title: Digital signature in .NET Word library | Syncfusion
description: Learn how to add, validate, and remove digital signatures and signature lines in a Word document using the .NET Word library without Microsoft Word or interop dependencies.
platform: document-processing
control: DocIO
documentation: UG
---
# Digital signature in .NET Word library

A digital signature in a Word document is a cryptographic seal that validates the authenticity and integrity of the document. It assures recipients that the content has not been altered since it was signed and confirms the identity of the signer. Using the [.NET Word Library](https://www.syncfusion.com/document-sdk/net-word-library) (DocIO), you can add both visible and invisible signatures, insert signature lines, sign them, validate existing signatures, and remove signatures from Word documents.

N> DocIO supports digital signature only in DOCX format documents.

## Add Digital Signature (Invisible Signature)

The following code example illustrates how to add an invisible digital signature to a Word document. The signature is embedded within the document without any visible indicator on the page.

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, and WinUI; ***C# [Windows-specific]*** for WinForms and WPF; ***VB.NET [Windows-specific]*** for VB.NET applications.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Opens an existing Word document.
WordDocument document = new WordDocument("Template.docx");
//Gets the first section of the document.
IWSection section = document.Sections[0];
//Adds new paragraph to the section.
IWParagraph paragraph = section.AddParagraph();
//Adds new text to the paragraph
paragraph.AppendText("This document is digitally signed.");
//Loads the signing certificate from disk.
OfficeDigitalSignatureCertificate certificate = new OfficeDigitalSignatureCertificate("Certificate.pfx", "password");
//Configures signature settings.
SignatureSettings settings = new SignatureSettings();
settings.Comments = "Approved";
settings.SignTime = DateTime.Now;
//Adds an invisible digital signature to the document using the certificate and settings.
document.AddDigitalSignature(certificate, settings);
//Saves the Word document to file.
document.Save("Result.docx", FormatType.Docx);
//Closes the document
document.Close();

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Opens an existing Word document.
WordDocument document = new WordDocument("Template.docx");
//Gets the first section of the document.
IWSection section = document.Sections[0];
//Adds new paragraph to the section.
IWParagraph paragraph = section.AddParagraph();
//Adds new text to the paragraph
paragraph.AppendText("This document is digitally signed.");
//Loads the signing certificate from disk.
OfficeDigitalSignatureCertificate certificate = new OfficeDigitalSignatureCertificate("Certificate.pfx", "password");
//Configures signature settings.
SignatureSettings settings = new SignatureSettings();
settings.Comments = "Approved";
settings.SignTime = DateTime.Now;
//Adds an invisible digital signature to the document using the certificate and settings.
document.AddDigitalSignature(certificate, settings);
//Saves and closes the Word document instance
document.Save("Result.docx", FormatType.Docx);
//Closes the document
document.Close();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Opens an existing Word document.
Dim document As New WordDocument("Template.docx")
'Gets the first section of the document.
Dim section As IWSection = document.Sections(0)
'Adds new paragraph to the section.
Dim paragraph As IWParagraph = section.AddParagraph()
'Adds new text to the paragraph
paragraph.AppendText("This document is digitally signed.")
'Loads the signing certificate from disk.
Dim certificate As New OfficeDigitalSignatureCertificate("Certificate.pfx", "password")
'Configures signature settings.
Dim settings As New SignatureSettings()
settings.Comments = "Approved"
settings.SignTime = DateTime.Now
'Adds an invisible digital signature to the document using the certificate and settings.
document.AddDigitalSignature(certificate, settings)
'Saves and closes the Word document instance
document.Save("Result.docx", FormatType.Docx)
'Closes the document
document.Close()

{% endhighlight %}

{% endtabs %}

## Insert Signature Line

A signature line is a placeholder that lets signers add their visible signature to the document. The following code example illustrates how to insert a signature line into a Word document with signer information such as name, title, instructions, and email.

N> A signature line itself is not signed. You must [sign the signature line](#sign-signature-line-visible-signature) to apply a visible signature.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Opens an existing Word document.
WordDocument document = new WordDocument("Template.docx");
//Gets the first section of the document.
IWSection section = document.Sections[0];
//Adds new paragraph to the section.
IWParagraph paragraph = section.AddParagraph();
//Adds new text to the paragraph
paragraph.AppendText("Please sign below: ");
//Adds a new paragraph that will host the signature line.
IWParagraph signatureParagraph = section.AddParagraph();
//Configures the signature line settings.
SignatureLineSettings settings = new SignatureLineSettings();
settings.Signer = "John Doe";
settings.SignerTitle = "Manager";
settings.Email = "john.doe@example.com";
settings.Instructions = "Please review and sign.";
settings.AllowComments = true;
settings.ShowDate = true;
//Inserts the signature line into the new paragraph with the specified dimensions.
IWPicture picture = signatureParagraph.AppendSignatureLine(settings, 200, 100);
//Saves the Word document to file.
document.Save("Result.docx", FormatType.Docx);
//Closes the document
document.Close();

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Opens an existing Word document.
WordDocument document = new WordDocument("Template.docx");
//Gets the first section of the document.
IWSection section = document.Sections[0];
//Adds new paragraph to the section.
IWParagraph paragraph = section.AddParagraph();
//Adds new text to the paragraph
paragraph.AppendText("Please sign below: ");
//Adds a new paragraph that will host the signature line.
IWParagraph signatureParagraph = section.AddParagraph();
//Configures the signature line settings.
SignatureLineSettings settings = new SignatureLineSettings();
settings.Signer = "John Doe";
settings.SignerTitle = "Manager";
settings.Email = "john.doe@example.com";
settings.Instructions = "Please review and sign.";
settings.AllowComments = true;
settings.ShowDate = true;
//Inserts the signature line into the new paragraph with the specified dimensions.
IWPicture picture = signatureParagraph.AppendSignatureLine(settings, 200, 100);
//Saves and closes the Word document instance
document.Save("Result.docx", FormatType.Docx);
//Closes the document
document.Close();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Opens an existing Word document.
Dim document As New WordDocument("Template.docx")
'Gets the first section of the document.
Dim section As IWSection = document.Sections(0)
'Adds new paragraph to the section.
Dim paragraph As IWParagraph = section.AddParagraph()
'Adds new text to the paragraph
paragraph.AppendText("Please sign below: ")
'Adds a new paragraph that will host the signature line.
Dim signatureParagraph As IWParagraph = section.AddParagraph()
'Configures the signature line settings.
Dim settings As New SignatureLineSettings()
settings.Signer = "John Doe"
settings.SignerTitle = "Manager"
settings.Email = "john.doe@example.com"
settings.Instructions = "Please review and sign."
settings.AllowComments = True
settings.ShowDate = True
'Inserts the signature line into the new paragraph with the specified dimensions.
Dim picture As IWPicture = signatureParagraph.AppendSignatureLine(settings, 200, 100)
'Saves and closes the Word document instance
document.Save("Result.docx", FormatType.Docx)
'Closes the document
document.Close()

{% endhighlight %}

{% endtabs %}

## Sign Signature Line (Visible Signature)

The following code example illustrates how to sign an existing signature line in a Word document, producing a visible digital signature on the page. It binds the new signature to the signature line by setting `SignatureSettings.SignatureLineId` to the id of the target signature line.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Creates a new Word document and adds a signature line.
Guid signatureLineId;
using (WordDocument document = new WordDocument("Template.docx", FormatType.Docx))
{
    //Gets the first section of the document.
    IWSection section = document.Sections[0];
    //Adds new paragraph to the section.
    IWParagraph paragraph = section.AddParagraph();
    //Adds new text to the paragraph
    paragraph.AppendText("Signed by: ");
    //Adds a new paragraph that will host the signature line and aligns it to the left.
    IWParagraph signatureParagraph = section.AddParagraph();
    signatureParagraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Left;
    //Configures the signature line settings.
    SignatureLineSettings lineSettings = new SignatureLineSettings();
    lineSettings.Signer = "John Doe";
    lineSettings.SignerTitle = "Manager";
    lineSettings.Email = "john.doe@example.com";
    lineSettings.Instructions = "Please review and sign.";
    lineSettings.ShowDate = true;
    //Inserts the signature line into the new paragraph with the specified dimensions.
    IWPicture picture = signatureParagraph.AppendSignatureLine(lineSettings, 200, 100);
    //Gets the unique identifier of the inserted signature line.
    signatureLineId = ((WPicture)picture).SignatureLine.Id;
    //Saves the Word document that contains the signature line.
    document.Save("Result.docx", FormatType.Docx);
}

//Loads the signing certificate from disk.
OfficeDigitalSignatureCertificate certificate = new OfficeDigitalSignatureCertificate("Certificate.pfx", "password");
//Opens the saved document to sign the signature line.
using (WordDocument document = new WordDocument("Result.docx", FormatType.Docx))
{
    //Configures signature settings and binds the signature to the signature line.
    SignatureSettings settings = new SignatureSettings();
    settings.SignatureLineId = signatureLineId;
    settings.Comments = "Approved";
    settings.SignTime = DateTime.Now;
    //Signs the signature line to apply a visible digital signature.
    document.AddDigitalSignature(certificate, settings);
    //Saves the signed Word document to file.
    document.Save("Result.docx", FormatType.Docx);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Creates a new Word document and adds a signature line.
Guid signatureLineId;
using (WordDocument document = new WordDocument("Template.docx", FormatType.Docx))
{
    //Gets the first section of the document.
    IWSection section = document.Sections[0];
    //Adds new paragraph to the section.
    IWParagraph paragraph = section.AddParagraph();
    //Adds new text to the paragraph
    paragraph.AppendText("Signed by: ");
    //Adds a new paragraph that will host the signature line and aligns it to the left.
    IWParagraph signatureParagraph = section.AddParagraph();
    signatureParagraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Left;
    //Configures the signature line settings.
    SignatureLineSettings lineSettings = new SignatureLineSettings();
    lineSettings.Signer = "John Doe";
    lineSettings.SignerTitle = "Manager";
    lineSettings.Email = "john.doe@example.com";
    lineSettings.Instructions = "Please review and sign.";
    lineSettings.ShowDate = true;
    //Inserts the signature line into the new paragraph with the specified dimensions.
    IWPicture picture = signatureParagraph.AppendSignatureLine(lineSettings, 200, 100);
    //Gets the unique identifier of the inserted signature line.
    signatureLineId = ((WPicture)picture).SignatureLine.Id;
    //Saves the Word document that contains the signature line.
    document.Save("Result.docx", FormatType.Docx);
}

//Loads the signing certificate from disk.
OfficeDigitalSignatureCertificate certificate = new OfficeDigitalSignatureCertificate("Certificate.pfx", "password");
//Opens the saved document to sign the signature line.
using (WordDocument document = new WordDocument("Result.docx", FormatType.Docx))
{
    //Configures signature settings and binds the signature to the signature line.
    SignatureSettings settings = new SignatureSettings();
    settings.SignatureLineId = signatureLineId;
    settings.Comments = "Approved";
    settings.SignTime = DateTime.Now;
    //Signs the signature line to apply a visible digital signature.
    document.AddDigitalSignature(certificate, settings);
    //Saves the signed Word document to file.
    document.Save("Result.docx", FormatType.Docx);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Creates a new Word document and adds a signature line.
Dim signatureLineId As Guid
Using document As New WordDocument("Template.docx", FormatType.Docx)
    'Gets the first section of the document.
    Dim section As IWSection = document.Sections(0)
    'Adds new paragraph to the section.
    Dim paragraph As IWParagraph = section.AddParagraph()
    'Adds new text to the paragraph
    paragraph.AppendText("Signed by: ")
    'Adds a new paragraph that will host the signature line and aligns it to the left.
    Dim signatureParagraph As IWParagraph = section.AddParagraph()
    signatureParagraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Left
    'Configures the signature line settings.
    Dim lineSettings As New SignatureLineSettings()
    lineSettings.Signer = "John Doe"
    lineSettings.SignerTitle = "Manager"
    lineSettings.Email = "john.doe@example.com"
    lineSettings.Instructions = "Please review and sign."
    lineSettings.ShowDate = True
    'Inserts the signature line into the new paragraph with the specified dimensions.
    Dim picture As IWPicture = signatureParagraph.AppendSignatureLine(lineSettings, 200, 100)
    'Gets the unique identifier of the inserted signature line.
    signatureLineId = DirectCast(picture, WPicture).SignatureLine.Id
    'Saves the Word document that contains the signature line.
    document.Save("Result.docx", FormatType.Docx)
End Using

'Loads the signing certificate from disk.
Dim certificate As New OfficeDigitalSignatureCertificate("Certificate.pfx", "password")
'Opens the saved document to sign the signature line.
Using document As New WordDocument("Result.docx", FormatType.Docx)
    'Configures signature settings and binds the signature to the signature line.
    Dim settings As New SignatureSettings()
    settings.SignatureLineId = signatureLineId
    settings.Comments = "Approved"
'Signs the signature line to apply a visible digital signature.
    document.AddDigitalSignature(certificate, settings)
    'Saves the signed Word document to file.
    document.Save("Result.docx", FormatType.Docx)
End Using

{% endhighlight %}

{% endtabs %}

### Sign Signature Line with Image

The following code example illustrates how to sign a signature line by supplying a custom signature image (for example, a scanned signature or handwritten PNG). The image replaces the default X mark on the signature line.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Opens an existing Word document and adds a signature line.
Guid signatureLineId;
using (WordDocument document = new WordDocument("Template.docx", FormatType.Docx))
{
    //Gets the first section of the document.
    IWSection section = document.Sections[0];
    //Adds new paragraph to the section.
    IWParagraph paragraph = section.AddParagraph();
    //Adds new text to the paragraph
    paragraph.AppendText("Signed by: ");
    //Adds a new paragraph that will host the signature line and aligns it to the left.
    IWParagraph signatureParagraph = section.AddParagraph();
    signatureParagraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Left;
    //Configures the signature line settings.
    SignatureLineSettings lineSettings = new SignatureLineSettings();
    lineSettings.Signer = "John Doe";
    lineSettings.SignerTitle = "Manager";
    lineSettings.Email = "john.doe@example.com";
    lineSettings.Instructions = "Please review and sign.";
    lineSettings.ShowDate = true;
    //Inserts the signature line into the new paragraph with the specified dimensions.
    IWPicture picture = signatureParagraph.AppendSignatureLine(lineSettings, 200, 100);
    //Gets the unique identifier of the inserted signature line.
    signatureLineId = ((WPicture)picture).SignatureLine.Id;
    //Saves the Word document that contains the signature line.
    document.Save("Result.docx", FormatType.Docx);
}

//Loads the signing certificate from disk.
OfficeDigitalSignatureCertificate certificate = new OfficeDigitalSignatureCertificate("Certificate.pfx", "password");
//Opens the saved document to sign the signature line.
using (WordDocument document = new WordDocument("Result.docx", FormatType.Docx))
{
    //Configures signature settings, binds the signature to the signature line, and supplies a custom signature image.
    SignatureSettings settings = new SignatureSettings();
    settings.SignatureLineId = signatureLineId;
    settings.SignatureImage = File.ReadAllBytes("Signature.png");
    settings.Comments = "Approved";
    settings.SignTime = DateTime.Now;
    //Signs the signature line with the supplied image to apply a visible digital signature.
    document.AddDigitalSignature(certificate, settings);
    //Saves the signed Word document to file.
    document.Save("Result.docx", FormatType.Docx);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Opens an existing Word document and adds a signature line.
Guid signatureLineId;
using (WordDocument document = new WordDocument("Template.docx", FormatType.Docx))
{
    //Gets the first section of the document.
    IWSection section = document.Sections[0];
    //Adds new paragraph to the section.
    IWParagraph paragraph = section.AddParagraph();
    //Adds new text to the paragraph
    paragraph.AppendText("Signed by: ");
    //Adds a new paragraph that will host the signature line and aligns it to the left.
    IWParagraph signatureParagraph = section.AddParagraph();
    signatureParagraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Left;
    //Configures the signature line settings.
    SignatureLineSettings lineSettings = new SignatureLineSettings();
    lineSettings.Signer = "John Doe";
    lineSettings.SignerTitle = "Manager";
    lineSettings.Email = "john.doe@example.com";
    lineSettings.Instructions = "Please review and sign.";
    lineSettings.ShowDate = true;
    //Inserts the signature line into the new paragraph with the specified dimensions.
    IWPicture picture = signatureParagraph.AppendSignatureLine(lineSettings, 200, 100);
    //Gets the unique identifier of the inserted signature line.
    signatureLineId = ((WPicture)picture).SignatureLine.Id;
    //Saves the Word document that contains the signature line.
    document.Save("Result.docx", FormatType.Docx);
}

//Loads the signing certificate from disk.
OfficeDigitalSignatureCertificate certificate = new OfficeDigitalSignatureCertificate("Certificate.pfx", "password");
//Opens the saved document to sign the signature line.
using (WordDocument document = new WordDocument("Result.docx", FormatType.Docx))
{
    //Configures signature settings, binds the signature to the signature line, and supplies a custom signature image.
    SignatureSettings settings = new SignatureSettings();
    settings.SignatureLineId = signatureLineId;
    settings.SignatureLineImage = File.ReadAllBytes("Signature.png");
    settings.Comments = "Approved";
    settings.SignTime = DateTime.Now;
    //Signs the signature line with the supplied image to apply a visible digital signature.
    document.AddDigitalSignature(certificate, settings);
    //Saves the signed Word document to file.
    document.Save("Result.docx", FormatType.Docx);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Opens an existing Word document.
Dim document As New WordDocument("Template.docx", FormatType.Docx)
'Gets the first section of the document.
Dim section As IWSection = document.Sections(0)
'Adds new paragraph to the section.
Dim paragraph As IWParagraph = section.AddParagraph()
'Adds new text to the paragraph
paragraph.AppendText("Signed by: ")
'Adds a new paragraph that will host the signature line and aligns it to the left.
Dim signatureParagraph As IWParagraph = section.AddParagraph()
signatureParagraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Left
'Configures the signature line settings.
Dim lineSettings As New SignatureLineSettings()
lineSettings.Signer = "John Doe"
lineSettings.SignerTitle = "Manager"
lineSettings.Email = "john.doe@example.com"
lineSettings.Instructions = "Please review and sign."
lineSettings.ShowDate = True
'Inserts the signature line into the new paragraph with the specified dimensions.
Dim picture As IWPicture = signatureParagraph.AppendSignatureLine(lineSettings, 200, 100)
'Gets the unique identifier of the inserted signature line.
Dim signatureLineId As Guid = DirectCast(picture, WPicture).SignatureLine.Id
'Loads the signing certificate from disk.
Dim certificate As New OfficeDigitalSignatureCertificate("Certificate.pfx", "password")
'Configures signature settings, binds the signature to the signature line, and supplies a custom signature image.
Dim settings As New SignatureSettings()
settings.SignatureLineId = signatureLineId
settings.SignatureImage = File.ReadAllBytes("Signature.png")
settings.Comments = "Approved"
settings.SignTime = DateTime.Now
'Signs the signature line with the supplied image to apply a visible digital signature.
document.AddDigitalSignature(certificate, settings)
'Saves and closes the Word document instance
document.Save("Result.docx", FormatType.Docx)
'Closes the document
document.Close()

{% endhighlight %}

{% endtabs %}

## Validate Digital Signature

The following code example illustrates how to validate digital signatures that are present in a Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Opens the signed Word document.
WordDocument document = new WordDocument("SignedDocument.docx");
//Gets the digital signature collection in the document.
OfficeDigitalSignatureCollection signatures = document.DigitalSignatures;
//Checks whether every digital signature in the collection is valid.
bool allValid = signatures.IsValid;
Console.WriteLine("All signatures are valid : " + allValid);
//Iterates through each signature and checks whether it is valid.
foreach (OfficeDigitalSignature signature in signatures)
{
    //Checks whether the signature is valid.
    bool isValid = signature.IsValid;
    Console.WriteLine("Signature is valid : " + isValid);
}
//Closes the document
document.Close();

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Opens the signed Word document.
WordDocument document = new WordDocument("SignedDocument.docx");
//Gets the digital signature collection in the document.
OfficeDigitalSignatureCollection signatures = document.DigitalSignatures;
//Checks whether every digital signature in the collection is valid.
bool allValid = signatures.IsValid;
Console.WriteLine("All signatures are valid : " + allValid);
//Iterates through each signature and checks whether it is valid.
foreach (OfficeDigitalSignature signature in signatures)
{
    //Checks whether the signature is valid.
    bool isValid = signature.IsValid;
    Console.WriteLine("Signature is valid : " + isValid);
}
//Saves and closes the Word document instance
document.Save("Result.docx", FormatType.Docx);
//Closes the document
document.Close();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Opens the signed Word document.
Dim document As New WordDocument("SignedDocument.docx")
'Gets the digital signature collection in the document.
Dim signatures As OfficeDigitalSignatureCollection = document.DigitalSignatures
'Checks whether every digital signature in the collection is valid.
Dim allValid As Boolean = signatures.IsValid
Console.WriteLine("All signatures are valid : " & allValid)
'Iterates through each signature and checks whether it is valid.
For Each signature As OfficeDigitalSignature In signatures
    'Checks whether the signature is valid.
    Dim isValid As Boolean = signature.IsValid
    Console.WriteLine("Signature is valid : " & isValid)
Next
'Saves and closes the Word document instance
document.Save("Result.docx", FormatType.Docx)
'Closes the document
document.Close()

{% endhighlight %}

{% endtabs %}

## Remove Digital Signature

The following code example illustrates how to remove all the digital signatures from a Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Opens the signed Word document.
WordDocument document = new WordDocument("SignedDocument.docx");
//Removes all digital signatures from the document.
document.RemoveAllDigitalSignatures();
//Saves the Word document to file.
document.Save("Result.docx", FormatType.Docx);
//Closes the document
document.Close();

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Opens the signed Word document.
WordDocument document = new WordDocument("SignedDocument.docx");
//Removes all digital signatures from the document.
document.RemoveAllDigitalSignatures();
//Saves and closes the Word document instance
document.Save("Result.docx", FormatType.Docx);
//Closes the document
document.Close();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Opens the signed Word document.
Dim document As New WordDocument("SignedDocument.docx")
'Removes all digital signatures from the document.
document.RemoveAllDigitalSignatures()
'Saves and closes the Word document instance
document.Save("Result.docx", FormatType.Docx)
'Closes the document
document.Close()

{% endhighlight %}

{% endtabs %}

## Limitations

The [.NET Word Library](https://www.syncfusion.com/document-sdk/net-word-library) (DocIO) has the following limitations when working with digital signatures in Word documents.

**Supported Format**

DocIO supports digital signatures only in DOCX format documents. DOC and other legacy formats are not supported.

**Certificate Storage**

The certificate must be provided as a PFX or P12 file. The certificate store is not used to load signing certificates.

**Signed Document Modification**

Once a Word document is digitally signed, modifying any content (text, images, signature lines, or properties) using DocIO will invalidate the existing digital signature. To re-sign the document, add a new digital signature after the modifications are complete.

**Multiple Signature Lines**

When a document contains more than one signature line, each signature must be added separately by binding `SignatureSettings.SignatureLineId` to the id of the target signature line.

## See Also

* [Ink elements in .NET Word library](./Working-with-Ink)
* [Word Document Protection in .NET Word](./Working-with-Security)

