---
title: Digital signature in .NET Word library | Syncfusion
description: Learn how to add, validate, and remove digital signatures and signature lines in a Word document using the .NET Word library.
platform: document-processing
control: DocIO
documentation: UG
---
# Digital signature in .NET Word library

A digital signature in a Word document is a cryptographic seal that validates the authenticity and integrity of the document. It assures recipients that the content has not been altered since it was signed and confirms the identity of the signer. Using the [.NET Word Library](https://www.syncfusion.com/document-sdk/net-word-library) (DocIO), you can add both visible and invisible signatures, insert signature lines, sign them, validate existing signatures, and remove signatures from Word documents.

N> DocIO supports digital signature only in DOCX format documents.

## Add Digital Signature (Invisible Signature)

The following code example illustrates how to add an invisible digital signature to a Word document. The signature is embedded within the document without any visible indicator on the page.

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core; ***C# [Windows-specific]*** for WinForms and WPF; ***VB.NET [Windows-specific]*** for VB.NET applications.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Opens an existing Word document.
WordDocument document = new WordDocument(Path.GetFullPath(@"Data\Template.docx"));
//Loads the signing certificate from disk.
OfficeDigitalSignatureCertificate certificate = new OfficeDigitalSignatureCertificate(Path.GetFullPath(@"Data\Certificate.pfx"), "password");
//Configures signature settings.
SignatureSettings settings = new SignatureSettings();
settings.Comments = "Approved";
settings.SignTime = DateTime.Now;
//Adds an invisible digital signature to the document using the certificate and settings.
document.AddDigitalSignature(certificate, settings);
//Saves the Word document to file.
document.Save(Path.GetFullPath(@"Output\Result.docx"), FormatType.Docx);
//Closes the document
document.Close();

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Opens an existing Word document.
WordDocument document = new WordDocument(Path.GetFullPath(@"Data\Template.docx"));
//Loads the signing certificate from disk.
OfficeDigitalSignatureCertificate certificate = new OfficeDigitalSignatureCertificate(Path.GetFullPath(@"Data\Certificate.pfx"), "password");
//Configures signature settings.
SignatureSettings settings = new SignatureSettings();
settings.Comments = "Approved";
settings.SignTime = DateTime.Now;
//Adds an invisible digital signature to the document using the certificate and settings.
document.AddDigitalSignature(certificate, settings);
//Saves the Word document to file.
document.Save(Path.GetFullPath(@"Output\Result.docx"), FormatType.Docx);
//Closes the document
document.Close();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Opens an existing Word document.
Dim document As New WordDocument(Path.GetFullPath("Data\Template.docx"))
'Loads the signing certificate from disk.
Dim certificate As New OfficeDigitalSignatureCertificate(Path.GetFullPath("Data\Certificate.pfx"), "password")
'Configures signature settings.
Dim settings As New SignatureSettings()
settings.Comments = "Approved"
settings.SignTime = DateTime.Now
'Adds an invisible digital signature to the document using the certificate and settings.
document.AddDigitalSignature(certificate, settings)
'Saves the Word document to file.
document.Save(Path.GetFullPath("Output\Result.docx"), FormatType.Docx)
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
WordDocument document = new WordDocument(Path.GetFullPath(@"Data\Template.docx"));
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
document.Save(Path.GetFullPath(@"Output\Result.docx"), FormatType.Docx);
//Closes the document
document.Close();

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Opens an existing Word document.
WordDocument document = new WordDocument(Path.GetFullPath(@"Data\Template.docx"));
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
document.Save(Path.GetFullPath(@"Output\Result.docx"), FormatType.Docx);
//Closes the document
document.Close();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Opens an existing Word document.
Dim document As New WordDocument(Path.GetFullPath("Data\Template.docx"))
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
'Saves the Word document to file.
document.Save(Path.GetFullPath("Output\Result.docx"), FormatType.Docx)
'Closes the document
document.Close()

{% endhighlight %}

{% endtabs %}

## Sign Signature Line (Visible Signature)

The following code example illustrates how to sign a signature line by supplying a custom signature image (for example, a scanned signature or handwritten PNG). The image replaces the default X mark on the signature line. It binds the new signature to the signature line by setting `SignatureSettings.SignatureLineId` to the id of the target signature line.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Opens an existing Word document with signature line.
using (WordDocument document =
    new WordDocument(
        Path.GetFullPath(@"Data\Template.docx")))
{
    WPicture picture = null;
    OfficeSignatureLine signatureLine = null;

    //Finds the signature line in the document.
    foreach (WSection section in document.Sections)
    {
        foreach (WParagraph paragraph in section.Paragraphs)
        {
            foreach (Entity entity in paragraph.ChildEntities)
            {
                if (entity is WPicture currentPicture && currentPicture.IsSignatureLine)
                {
                    picture = currentPicture;
                    signatureLine = picture.SignatureLine;
                    break;
                }
            }

            if (picture != null)
                break;
        }

        if (picture != null)
            break;
    }

    //Loads the signing certificate.
    OfficeDigitalSignatureCertificate certificate =
        new OfficeDigitalSignatureCertificate(
            Path.GetFullPath(@"Data\Certificate.pfx"),
            "password");

    //Signs the signature line with the image.
    SignatureSettings settings = new SignatureSettings
    {
        SignatureLineId = signatureLine.Id,
        SignTime = DateTime.Now,
        SignatureLineImage = File.ReadAllBytes(Path.GetFullPath(@"Data\Signature.png")),
        Comments = "Approved"
    };

    if (File.Exists(Path.GetFullPath(@"Data\Signature.png")))
        settings.SignatureLineImage = File.ReadAllBytes(Path.GetFullPath(@"Data\Signature.png"));

    document.AddDigitalSignature(certificate, settings);
    //Saves the signed document.
    document.Save(Path.GetFullPath(@"Output\Result.docx"), FormatType.Docx);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Opens an existing Word document with signature line.
using (WordDocument document =
    new WordDocument(
        Path.GetFullPath(@"Data\Template.docx")))
{
    WPicture picture = null;
    OfficeSignatureLine signatureLine = null;

    //Finds the signature line in the document.
    foreach (WSection section in document.Sections)
    {
        foreach (WParagraph paragraph in section.Paragraphs)
        {
            foreach (Entity entity in paragraph.ChildEntities)
            {
                if (entity is WPicture currentPicture && currentPicture.IsSignatureLine)
                {
                    picture = currentPicture;
                    signatureLine = picture.SignatureLine;
                    break;
                }
            }

            if (picture != null)
                break;
        }

        if (picture != null)
            break;
    }

    //Loads the signing certificate.
    OfficeDigitalSignatureCertificate certificate =
        new OfficeDigitalSignatureCertificate(
            Path.GetFullPath(@"Data\Certificate.pfx"),
            "password");

    //Signs the signature line with the image.
    SignatureSettings settings = new SignatureSettings
    {
        SignatureLineId = signatureLine.Id,
        SignTime = DateTime.Now,
        SignatureLineImage = File.ReadAllBytes(Path.GetFullPath(@"Data\Signature.png")),
        Comments = "Approved"
    };

    if (File.Exists(Path.GetFullPath(@"Data\Signature.png")))
        settings.SignatureLineImage = File.ReadAllBytes(Path.GetFullPath(@"Data\Signature.png"));

    document.AddDigitalSignature(certificate, settings);
    //Saves the signed document.
    document.Save(Path.GetFullPath(@"Output\Result.docx"), FormatType.Docx);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Opens an existing Word document with signature line.
Using document As New WordDocument(Path.GetFullPath("Data\Template.docx"))
    Dim picture As WPicture = Nothing
    Dim signatureLine As OfficeSignatureLine = Nothing

    'Finds the signature line in the document.
    For Each section As WSection In document.Sections
        For Each paragraph As WParagraph In section.Paragraphs
            For Each entity As Entity In paragraph.ChildEntities
                If TypeOf entity Is WPicture AndAlso DirectCast(entity, WPicture).IsSignatureLine Then
                    picture = DirectCast(entity, WPicture)
                    signatureLine = picture.SignatureLine
                    Exit For
                End If
            Next

            If picture IsNot Nothing Then
                Exit For
            End If
        Next

        If picture IsNot Nothing Then
            Exit For
        End If
    Next

    'Loads the signing certificate.
    Dim certificate As New OfficeDigitalSignatureCertificate(
        Path.GetFullPath("Data\Certificate.pfx"),
        "password")

    'Signs the signature line with the image.
    Dim settings As New SignatureSettings() With {
        .SignatureLineId = signatureLine.Id,
        .SignTime = DateTime.Now,
        .SignatureLineImage = File.ReadAllBytes(Path.GetFullPath("Data\Signature.png")),
        .Comments = "Approved"
    }

    If File.Exists(Path.GetFullPath("Data\Signature.png")) Then
        settings.SignatureLineImage = File.ReadAllBytes(Path.GetFullPath("Data\Signature.png"))
    End If

    document.AddDigitalSignature(certificate, settings)
    'Saves the signed document.
    document.Save(Path.GetFullPath("Output\Result.docx"), FormatType.Docx)
End Using

{% endhighlight %}

{% endtabs %}

## Sign Multiple Signature Lines

The following code example illustrates how to add multiple signature lines to a Word document and sign each signature line using a custom signature image. This is useful for scenarios that require multiple approvers to review and sign the document, such as approval workflows or contracts involving several signatories.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

// Opens an existing Word document and adds signature lines.
Dictionary<Guid, string> signatureInfo;
using (WordDocument document = new WordDocument(Path.GetFullPath(@"Data\Template.docx")))
{
    // Gets the last section of the document.
    IWSection section = document.LastSection;

    // Stores the signature line IDs and corresponding signature image paths.
    signatureInfo = new Dictionary<Guid, string>();

    // Defines the signers.
    string[] signers = { "Tony", "Steve", "Bruce" };

    // Defines the signature images corresponding to each signer.
    string[] images =
    {
        Path.GetFullPath(@"Data\TonySignature.png"),
        Path.GetFullPath(@"Data\SteveSignature.png"),
        Path.GetFullPath(@"Data\BruceSignature.png")
    };

    // Adds a signature line for each signer.
    for (int i = 0; i < signers.Length; i++)
    {
        IWParagraph paragraph = section.AddParagraph();

        IWPicture picture = paragraph.AppendSignatureLine(
            new SignatureLineSettings()
            {
                Signer = signers[i],
                SignerTitle = "Approver",
                Email = signers[i] + "@example.com",
                Instructions = "Please review and sign.",
                ShowDate = true
            },
            192,
            96);

        // Gets the unique identifier of the inserted signature line.
        Guid signatureLineId = ((WPicture)picture).SignatureLine.Id;

        // Maps the signature line to its corresponding signature image.
        signatureInfo.Add(signatureLineId, images[i]);
    }

    // Saves the document after adding the signature lines.
    document.Save(Path.GetFullPath(@"Output\Result.docx"), FormatType.Docx);
}

// Loads the signing certificate.
OfficeDigitalSignatureCertificate certificate =
    new OfficeDigitalSignatureCertificate(
        Path.GetFullPath(@"Data\Certificate.pfx"),
        "password");

// Opens the saved document to sign each signature line.
using (WordDocument document = new WordDocument(Path.GetFullPath(@"Output\Result.docx")))
{
    // Signs each signature line using its corresponding signature image.
    foreach (KeyValuePair<Guid, string> item in signatureInfo)
    {
        SignatureSettings settings = new SignatureSettings()
        {
            SignatureLineId = item.Key,
            SignatureLineImage = File.ReadAllBytes(item.Value),
            Comments = "Approved",
            SignTime = DateTime.Now
        };

        document.AddDigitalSignature(certificate, settings);
    }

    // Saves the signed document.
    document.Save(Path.GetFullPath(@"Output\Result.docx"), FormatType.Docx);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

// Opens an existing Word document and adds signature lines.
Dictionary<Guid, string> signatureInfo;
using (WordDocument document = new WordDocument(Path.GetFullPath(@"Data\Template.docx")))
{
    // Gets the last section of the document.
    IWSection section = document.LastSection;

    // Stores the signature line IDs and corresponding signature image paths.
    signatureInfo = new Dictionary<Guid, string>();

    // Defines the signers.
    string[] signers = { "Tony", "Steve", "Bruce" };

    // Defines the signature images corresponding to each signer.
    string[] images =
    {
        Path.GetFullPath(@"Data\TonySignature.png"),
        Path.GetFullPath(@"Data\SteveSignature.png"),
        Path.GetFullPath(@"Data\BruceSignature.png")
    };

    // Adds a signature line for each signer.
    for (int i = 0; i < signers.Length; i++)
    {
        IWParagraph paragraph = section.AddParagraph();

        IWPicture picture = paragraph.AppendSignatureLine(
            new SignatureLineSettings()
            {
                Signer = signers[i],
                SignerTitle = "Approver",
                Email = signers[i] + "@example.com",
                Instructions = "Please review and sign.",
                ShowDate = true
            },
            192,
            96);

        // Gets the unique identifier of the inserted signature line.
        Guid signatureLineId = ((WPicture)picture).SignatureLine.Id;

        // Maps the signature line to its corresponding signature image.
        signatureInfo.Add(signatureLineId, images[i]);
    }

    // Saves the document after adding the signature lines.
    document.Save(Path.GetFullPath(@"Output\Result.docx"), FormatType.Docx);
}

// Loads the signing certificate.
OfficeDigitalSignatureCertificate certificate =
    new OfficeDigitalSignatureCertificate(
        Path.GetFullPath(@"Data\Certificate.pfx"),
        "password");

// Opens the saved document to sign each signature line.
using (WordDocument document = new WordDocument(Path.GetFullPath(@"Output\Result.docx")))
{
    // Signs each signature line using its corresponding signature image.
    foreach (KeyValuePair<Guid, string> item in signatureInfo)
    {
        SignatureSettings settings = new SignatureSettings()
        {
            SignatureLineId = item.Key,
            SignatureLineImage = File.ReadAllBytes(item.Value),
            Comments = "Approved",
            SignTime = DateTime.Now
        };

        document.AddDigitalSignature(certificate, settings);
    }

    // Saves the signed document.
    document.Save(Path.GetFullPath(@"Output\Result.docx"), FormatType.Docx);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Opens an existing Word document and adds signature lines.
Dim signatureInfo As Dictionary(Of Guid, String)
Using document As New WordDocument(Path.GetFullPath("Data\Template.docx"))
    'Gets the last section of the document.
    Dim section As IWSection = document.LastSection
    'Stores the signature line IDs and corresponding signature image paths.
    signatureInfo = New Dictionary(Of Guid, String)()
    'Defines the signers.
    Dim signers As String() = { "Tony", "Steve", "Bruce" }
    'Defines the signature images corresponding to each signer.
    Dim images As String() = {
        Path.GetFullPath("Data\TonySignature.png"),
        Path.GetFullPath("Data\SteveSignature.png"),
        Path.GetFullPath("Data\BruceSignature.png")
    }
    'Adds a signature line for each signer.
    For i As Integer = 0 To signers.Length - 1
        Dim paragraph As IWParagraph = section.AddParagraph()
        Dim picture As IWPicture = paragraph.AppendSignatureLine(
            New SignatureLineSettings() With {
                .Signer = signers(i),
                .SignerTitle = "Approver",
                .Email = signers(i) & "@example.com",
                .Instructions = "Please review and sign.",
                .ShowDate = True
            },
            192,
            96)
        'Gets the unique identifier of the inserted signature line.
        Dim signatureLineId As Guid = DirectCast(picture, WPicture).SignatureLine.Id
        'Maps the signature line to its corresponding signature image.
        signatureInfo.Add(signatureLineId, images(i))
    Next
    'Saves the document after adding the signature lines.
    document.Save(Path.GetFullPath("Output\Result.docx"), FormatType.Docx)
End Using

'Loads the signing certificate.
Dim certificate As New OfficeDigitalSignatureCertificate(
    Path.GetFullPath("Data\Certificate.pfx"),
    "password")
'Opens the saved document to sign each signature line.
Using document As New WordDocument(Path.GetFullPath("Output\Result.docx"))
    'Signs each signature line using its corresponding signature image.
    For Each item As KeyValuePair(Of Guid, String) In signatureInfo
        Dim settings As New SignatureSettings() With {
            .SignatureLineId = item.Key,
            .SignatureLineImage = File.ReadAllBytes(item.Value),
            .Comments = "Approved",
            .SignTime = DateTime.Now
        }
        document.AddDigitalSignature(certificate, settings)
    Next
    'Saves the signed document.
    document.Save(Path.GetFullPath("Output\Result.docx"), FormatType.Docx)
End Using

{% endhighlight %}

{% endtabs %}

## Validate Digital Signature

The following code example illustrates how to validate digital signatures that are present in a Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Opens the signed Word document.
WordDocument document = new WordDocument(Path.GetFullPath(@"Data\SignedDocument.docx"));
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
WordDocument document = new WordDocument(Path.GetFullPath(@"Data\SignedDocument.docx"));
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

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Opens the signed Word document.
Dim document As New WordDocument(Path.GetFullPath("Data\SignedDocument.docx"))
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
'Closes the document
document.Close()

{% endhighlight %}

{% endtabs %}

## Remove Digital Signature

The following code example illustrates how to remove all the digital signatures from a Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Opens the signed Word document.
WordDocument document = new WordDocument(Path.GetFullPath(@"Data\SignedDocument.docx"));
//Removes all digital signatures from the document.
document.RemoveAllDigitalSignatures();
//Saves the Word document to file.
document.Save(Path.GetFullPath(@"Output\Result.docx"), FormatType.Docx);
//Closes the document
document.Close();

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Opens the signed Word document.
WordDocument document = new WordDocument(Path.GetFullPath(@"Data\SignedDocument.docx"));
//Removes all digital signatures from the document.
document.RemoveAllDigitalSignatures();
//Saves the Word document to file.
document.Save(Path.GetFullPath(@"Output\Result.docx"), FormatType.Docx);
//Closes the document
document.Close();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Opens the signed Word document.
Dim document As New WordDocument(Path.GetFullPath("Data\SignedDocument.docx"))
'Removes all digital signatures from the document.
document.RemoveAllDigitalSignatures()
'Saves the Word document to file.
document.Save(Path.GetFullPath("Output\Result.docx"), FormatType.Docx)
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

## See Also

* [Ink elements in .NET Word library](./Working-with-Ink)
* [Word Document Protection in .NET Word](./Working-with-Security)