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
//Sets the application version used to create the signature.
settings.ApplicationVersion = "16.0";
//Sets the Office version recorded with the signature.
settings.OfficeVersion = "16.0";
//Sets the Windows version recorded with the signature.
settings.WindowsVersion = "10.0";
//Sets the horizontal resolution recorded with the signature.
settings.HorizontalResolution = 1920;
//Sets the vertical resolution recorded with the signature.
settings.VerticalResolution = 1080;
//Sets the color depth recorded with the signature.
settings.ColorDepth = 32;
//Sets the cryptographic provider identifier.
settings.ProviderId = new Guid("00000000-0000-0000-0000-000000000000");
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
//Sets the application version used to create the signature.
settings.ApplicationVersion = "16.0";
//Sets the Office version recorded with the signature.
settings.OfficeVersion = "16.0";
//Sets the Windows version recorded with the signature.
settings.WindowsVersion = "10.0";
//Sets the horizontal resolution recorded with the signature.
settings.HorizontalResolution = 1920;
//Sets the vertical resolution recorded with the signature.
settings.VerticalResolution = 1080;
//Sets the color depth recorded with the signature.
settings.ColorDepth = 32;
//Sets the cryptographic provider identifier.
settings.ProviderId = new Guid("00000000-0000-0000-0000-000000000000");
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
'Sets the application version used to create the signature.
settings.ApplicationVersion = "16.0"
'Sets the Office version recorded with the signature.
settings.OfficeVersion = "16.0"
'Sets the Windows version recorded with the signature.
settings.WindowsVersion = "10.0"
'Sets the horizontal resolution recorded with the signature.
settings.HorizontalResolution = 1920
'Sets the vertical resolution recorded with the signature.
settings.VerticalResolution = 1080
'Sets the color depth recorded with the signature.
settings.ColorDepth = 32
'Sets the cryptographic provider identifier.
settings.ProviderId = New Guid("00000000-0000-0000-0000-000000000000")
'Adds an invisible digital signature to the document using the certificate and settings.
document.AddDigitalSignature(certificate, settings)
'Saves the Word document to file.
document.Save(Path.GetFullPath("Output\Result.docx"), FormatType.Docx)
'Closes the document
document.Close()

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Digital-Signature/Add-digital-signature-invisible/.NET).

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
//Specifies whether the signer can attach comments when signing.
settings.AllowComments = true;
//Specifies whether the sign date is displayed on the signature line.
settings.ShowDate = true;
//Specifies whether the default signing instructions are used (false uses the custom Instructions value).
settings.DefaultInstructions = false;
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
//Specifies whether the signer can attach comments when signing.
settings.AllowComments = true;
//Specifies whether the sign date is displayed on the signature line.
settings.ShowDate = true;
//Specifies whether the default signing instructions are used (false uses the custom Instructions value).
settings.DefaultInstructions = false;
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
'Specifies whether the signer can attach comments when signing.
settings.AllowComments = True
'Specifies whether the sign date is displayed on the signature line.
settings.ShowDate = True
'Specifies whether the default signing instructions are used (false uses the custom Instructions value).
settings.DefaultInstructions = False
'Inserts the signature line into the new paragraph with the specified dimensions.
Dim picture As IWPicture = signatureParagraph.AppendSignatureLine(settings, 200, 100)
'Saves the Word document to file.
document.Save(Path.GetFullPath("Output\Result.docx"), FormatType.Docx)
'Closes the document
document.Close()

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Digital-Signature/Insert-signature-line/.NET).

## Sign Signature Line (Visible Signature)

The following code example illustrates how to sign a signature line by supplying a custom signature image (for example, a scanned signature or handwritten PNG).  It binds the new signature to the signature line by setting `SignatureSettings.SignatureLineId` to the id of the target signature line.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Digital-Signature/Sign-signature-line/.NET/Sign-signature-line/Program.cs" %}

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

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Digital-Signature/Sign-signature-line/.NET).

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

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Digital-Signature/Sign-multiple-signature-lines/.NET).

## Specify the Digital Signature Standard

The following code example illustrates how to set the XmlDSig level for a digital signature in a Word document.
Use `XmlDsigLevel.XmlDsig` for a standard XMLDSig signature or `XmlDsigLevel.XAdEsEpes` for an XAdES-EPES signature with an explicit signature policy.

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
//Configures the XmlDSig level for the digital signature.
settings.XmlDsigLevel = XmlDsigLevel.XAdEsEpes;
//Adds an invisible digital signature to the document using the certificate and settings.
document.AddDigitalSignature(certificate, settings);
//Saves the Word document to file.
document.Save(Path.GetFullPath(@"Output\XmlDsigLevelSignature.docx"), FormatType.Docx);
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
//Configures the XmlDSig level for the digital signature.
settings.XmlDsigLevel = XmlDsigLevel.XAdEsEpes;
//Adds an invisible digital signature to the document using the certificate and settings.
document.AddDigitalSignature(certificate, settings);
//Saves the Word document to file.
document.Save(Path.GetFullPath(@"Output\XmlDsigLevelSignature.docx"), FormatType.Docx);
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
'Configures the XmlDSig level for the digital signature.
settings.XmlDsigLevel = XmlDsigLevel.XAdEsEpes
'Adds an invisible digital signature to the document using the certificate and settings.
document.AddDigitalSignature(certificate, settings)
'Saves the Word document to file.
document.Save(Path.GetFullPath("Output\XmlDsigLevelSignature.docx"), FormatType.Docx)
'Closes the document
document.Close()

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Digital-Signature/Specify-digital-signature-standard/.NET).


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

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Digital-Signature/Validate-digital-signature/.NET).

## Inspect Digital Signature

The following code example illustrates how to inspect digital signature details in a Word document, including comments, signing time, certificate information, and the properties of any signature line shapes that are present in the document body.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Opens the signed Word document.
WordDocument document = new WordDocument(Path.GetFullPath(@"Data\SignedDocument.docx"));
// Gets the digital signature collection in the document.
OfficeDigitalSignatureCollection signatures = document.DigitalSignatures;

// Gets the number of digital signatures in the document.
int signatureCount = signatures.Count;
Console.WriteLine("Signature count: " + signatureCount);

// Checks whether every digital signature in the collection is valid.
bool allValid = signatures.IsValid;
Console.WriteLine("All signatures are valid: " + allValid);

// Displays details of each signature.
foreach (OfficeDigitalSignature signature in signatures)
{
    // Checks whether the signature is valid.
    bool isValid = signature.IsValid;
    // Gets the comments recorded with the signature.
    string comments = signature.Comments;
    // Gets the timestamp recorded with the signature.
    DateTime signingTime = signature.SigningTime;
    // Gets the application version recorded with the signature.
    string applicationVersion = signature.ApplicationVersion;
    // Gets the Office version recorded with the signature.
    string officeVersion = signature.OfficeVersion;
    // Gets the Windows version recorded with the signature.
    string windowsVersion = signature.WindowsVersion;
    // Gets the color depth recorded with the signature.
    int colorDepth = signature.ColorDepth;
    // Gets the horizontal resolution recorded with the signature.
    float horizontalResolution = signature.HorizontalResolution;
    // Gets the vertical resolution recorded with the signature.
    float verticalResolution = signature.VerticalResolution;
    // Gets the raw signature value bytes.
    byte[] signatureValue = signature.SignatureValue;
    // Gets the certificate used to create the signature.
    OfficeDigitalSignatureCertificate certificate = signature.Certificate;

    Console.WriteLine("Signature is valid: " + isValid);
    Console.WriteLine("Comments: " + comments);
    Console.WriteLine("Signing time: " + signingTime);
    Console.WriteLine("Application version: " + applicationVersion);
    Console.WriteLine("Office version: " + officeVersion);
    Console.WriteLine("Windows version: " + windowsVersion);
    Console.WriteLine("Color depth: " + colorDepth);
    Console.WriteLine("Horizontal resolution: " + horizontalResolution);
    Console.WriteLine("Vertical resolution: " + verticalResolution);
    Console.WriteLine("Signature value length: " + (signatureValue != null ? signatureValue.Length : 0));

    if (certificate != null)
    {
        // Gets the certificate subject.
        string subject = certificate.Subject;
        // Gets the certificate issuer.
        string issuer = certificate.Issuer;
        // Gets the certificate serial number.
        string serialNumber = certificate.SerialNumber;
        // Gets the certificate thumbprint.
        string thumbprint = certificate.Thumbprint;
        // Gets the date the certificate is valid from.
        DateTime validFrom = certificate.ValidFrom;
        // Gets the date the certificate is valid to.
        DateTime validTo = certificate.ValidTo;

        Console.WriteLine("Subject name: " + subject);
        Console.WriteLine("Issuer name: " + issuer);
        Console.WriteLine("Serial number: " + serialNumber);
        Console.WriteLine("Thumbprint: " + thumbprint);
        Console.WriteLine("Valid from: " + validFrom);
        Console.WriteLine("Valid to: " + validTo);
    }

    Console.WriteLine();
}

// Retrieves a specific signature by index from the collection.
if (signatures.Count > 0)
{
    OfficeDigitalSignature firstSignature = signatures[0];
    Console.WriteLine("First signature comments: " + firstSignature.Comments);
}

// Walks the document body and reads the properties of any signature line shapes.
foreach (WSection section in document.Sections)
{
    foreach (WParagraph paragraph in section.Paragraphs)
    {
        foreach (Entity entity in paragraph.ChildEntities)
        {
            if (entity is WPicture picture && picture.IsSignatureLine)
            {
                OfficeSignatureLine signatureLine = picture.SignatureLine;

                // Gets the unique identifier of the signature line.
                Guid id = signatureLine.Id;
                // Gets the instructions displayed to the signer.
                string instructions = signatureLine.Instructions;
                // Gets whether the signer can attach comments when signing.
                bool allowComments = signatureLine.AllowComments;
                // Gets whether the sign date is displayed on the signature line.
                bool showDate = signatureLine.ShowDate;
                // Gets whether the signature line has been signed.
                bool isSigned = signatureLine.IsSigned;

                Console.WriteLine("Signature line id: " + id);
                Console.WriteLine("Signature line instructions: " + instructions);
                Console.WriteLine("Signature line allow comments: " + allowComments);
                Console.WriteLine("Signature line show date: " + showDate);
                Console.WriteLine("Signature line is signed: " + isSigned);
            }
        }
    }
}

// Closes the document.
document.Close();

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Opens the signed Word document.
WordDocument document = new WordDocument(Path.GetFullPath(@"Data\SignedDocument.docx"));
// Gets the digital signature collection in the document.
OfficeDigitalSignatureCollection signatures = document.DigitalSignatures;

// Gets the number of digital signatures in the document.
int signatureCount = signatures.Count;
Console.WriteLine("Signature count: " + signatureCount);

// Checks whether every digital signature in the collection is valid.
bool allValid = signatures.IsValid;
Console.WriteLine("All signatures are valid: " + allValid);

// Displays details of each signature.
foreach (OfficeDigitalSignature signature in signatures)
{
    // Checks whether the signature is valid.
    bool isValid = signature.IsValid;
    // Gets the comments recorded with the signature.
    string comments = signature.Comments;
    // Gets the timestamp recorded with the signature.
    DateTime signingTime = signature.SigningTime;
    // Gets the application version recorded with the signature.
    string applicationVersion = signature.ApplicationVersion;
    // Gets the Office version recorded with the signature.
    string officeVersion = signature.OfficeVersion;
    // Gets the Windows version recorded with the signature.
    string windowsVersion = signature.WindowsVersion;
    // Gets the color depth recorded with the signature.
    int colorDepth = signature.ColorDepth;
    // Gets the horizontal resolution recorded with the signature.
    float horizontalResolution = signature.HorizontalResolution;
    // Gets the vertical resolution recorded with the signature.
    float verticalResolution = signature.VerticalResolution;
    // Gets the raw signature value bytes.
    byte[] signatureValue = signature.SignatureValue;
    // Gets the certificate used to create the signature.
    OfficeDigitalSignatureCertificate certificate = signature.Certificate;

    Console.WriteLine("Signature is valid: " + isValid);
    Console.WriteLine("Comments: " + comments);
    Console.WriteLine("Signing time: " + signingTime);
    Console.WriteLine("Application version: " + applicationVersion);
    Console.WriteLine("Office version: " + officeVersion);
    Console.WriteLine("Windows version: " + windowsVersion);
    Console.WriteLine("Color depth: " + colorDepth);
    Console.WriteLine("Horizontal resolution: " + horizontalResolution);
    Console.WriteLine("Vertical resolution: " + verticalResolution);
    Console.WriteLine("Signature value length: " + (signatureValue != null ? signatureValue.Length : 0));

    if (certificate != null)
    {
        // Gets the certificate subject.
        string subject = certificate.Subject;
        // Gets the certificate issuer.
        string issuer = certificate.Issuer;
        // Gets the certificate serial number.
        string serialNumber = certificate.SerialNumber;
        // Gets the certificate thumbprint.
        string thumbprint = certificate.Thumbprint;
        // Gets the date the certificate is valid from.
        DateTime validFrom = certificate.ValidFrom;
        // Gets the date the certificate is valid to.
        DateTime validTo = certificate.ValidTo;

        Console.WriteLine("Subject name: " + subject);
        Console.WriteLine("Issuer name: " + issuer);
        Console.WriteLine("Serial number: " + serialNumber);
        Console.WriteLine("Thumbprint: " + thumbprint);
        Console.WriteLine("Valid from: " + validFrom);
        Console.WriteLine("Valid to: " + validTo);
    }

    Console.WriteLine();
}

// Retrieves a specific signature by index from the collection.
if (signatures.Count > 0)
{
    OfficeDigitalSignature firstSignature = signatures[0];
    Console.WriteLine("First signature comments: " + firstSignature.Comments);
}

// Walks the document body and reads the properties of any signature line shapes.
foreach (WSection section in document.Sections)
{
    foreach (WParagraph paragraph in section.Paragraphs)
    {
        foreach (Entity entity in paragraph.ChildEntities)
        {
            if (entity is WPicture picture && picture.IsSignatureLine)
            {
                OfficeSignatureLine signatureLine = picture.SignatureLine;

                // Gets the unique identifier of the signature line.
                Guid id = signatureLine.Id;
                // Gets the instructions displayed to the signer.
                string instructions = signatureLine.Instructions;
                // Gets whether the signer can attach comments when signing.
                bool allowComments = signatureLine.AllowComments;
                // Gets whether the sign date is displayed on the signature line.
                bool showDate = signatureLine.ShowDate;
                // Gets whether the signature line has been signed.
                bool isSigned = signatureLine.IsSigned;

                Console.WriteLine("Signature line id: " + id);
                Console.WriteLine("Signature line instructions: " + instructions);
                Console.WriteLine("Signature line allow comments: " + allowComments);
                Console.WriteLine("Signature line show date: " + showDate);
                Console.WriteLine("Signature line is signed: " + isSigned);
            }
        }
    }
}

// Closes the document.
document.Close();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Opens the signed Word document.
Dim document As New WordDocument(Path.GetFullPath("Data\SignedDocument.docx"))
'Gets the digital signature collection in the document.
Dim signatures As OfficeDigitalSignatureCollection = document.DigitalSignatures

'Gets the number of digital signatures in the document.
Dim signatureCount As Integer = signatures.Count
Console.WriteLine("Signature count: " & signatureCount)

'Checks whether every digital signature in the collection is valid.
Dim allValid As Boolean = signatures.IsValid
Console.WriteLine("All signatures are valid: " & allValid)

'Displays details of each signature.
For Each signature As OfficeDigitalSignature In signatures
    'Checks whether the signature is valid.
    Dim isValid As Boolean = signature.IsValid
    'Gets the comments recorded with the signature.
    Dim comments As String = signature.Comments
    'Gets the timestamp recorded with the signature.
    Dim signingTime As DateTime = signature.SigningTime
    'Gets the application version recorded with the signature.
    Dim applicationVersion As String = signature.ApplicationVersion
    'Gets the Office version recorded with the signature.
    Dim officeVersion As String = signature.OfficeVersion
    'Gets the Windows version recorded with the signature.
    Dim windowsVersion As String = signature.WindowsVersion
    'Gets the color depth recorded with the signature.
    Dim colorDepth As Integer = signature.ColorDepth
    'Gets the horizontal resolution recorded with the signature.
    Dim horizontalResolution As Single = signature.HorizontalResolution
    'Gets the vertical resolution recorded with the signature.
    Dim verticalResolution As Single = signature.VerticalResolution
    'Gets the raw signature value bytes.
    Dim signatureValue As Byte() = signature.SignatureValue
    'Gets the certificate used to create the signature.
    Dim certificate As OfficeDigitalSignatureCertificate = signature.Certificate

    Console.WriteLine("Signature is valid: " & isValid)
    Console.WriteLine("Comments: " & comments)
    Console.WriteLine("Signing time: " & signingTime)
    Console.WriteLine("Application version: " & applicationVersion)
    Console.WriteLine("Office version: " & officeVersion)
    Console.WriteLine("Windows version: " & windowsVersion)
    Console.WriteLine("Color depth: " & colorDepth)
    Console.WriteLine("Horizontal resolution: " & horizontalResolution)
    Console.WriteLine("Vertical resolution: " & verticalResolution)
    Console.WriteLine("Signature value length: " & If(signatureValue IsNot Nothing, signatureValue.Length, 0))

    If certificate IsNot Nothing Then
        'Gets the certificate subject.
        Dim subject As String = certificate.Subject
        'Gets the certificate issuer.
        Dim issuer As String = certificate.Issuer
        'Gets the certificate serial number.
        Dim serialNumber As String = certificate.SerialNumber
        'Gets the certificate thumbprint.
        Dim thumbprint As String = certificate.Thumbprint
        'Gets the date the certificate is valid from.
        Dim validFrom As DateTime = certificate.ValidFrom
        'Gets the date the certificate is valid to.
        Dim validTo As DateTime = certificate.ValidTo

        Console.WriteLine("Subject name: " & subject)
        Console.WriteLine("Issuer name: " & issuer)
        Console.WriteLine("Serial number: " & serialNumber)
        Console.WriteLine("Thumbprint: " & thumbprint)
        Console.WriteLine("Valid from: " & validFrom)
        Console.WriteLine("Valid to: " & validTo)
    End If

    Console.WriteLine()
Next

'Retrieves a specific signature by index from the collection.
If signatures.Count > 0 Then
    Dim firstSignature As OfficeDigitalSignature = signatures(0)
    Console.WriteLine("First signature comments: " & firstSignature.Comments)
End If

'Walks the document body and reads the properties of any signature line shapes.
For Each section As WSection In document.Sections
    For Each paragraph As WParagraph In section.Paragraphs
        For Each entity As Entity In paragraph.ChildEntities
            If TypeOf entity Is WPicture AndAlso DirectCast(entity, WPicture).IsSignatureLine Then
                Dim signatureLine As OfficeSignatureLine = DirectCast(entity, WPicture).SignatureLine

                'Gets the unique identifier of the signature line.
                Dim id As Guid = signatureLine.Id
                'Gets the instructions displayed to the signer.
                Dim instructions As String = signatureLine.Instructions
                'Gets whether the signer can attach comments when signing.
                Dim allowComments As Boolean = signatureLine.AllowComments
                'Gets whether the sign date is displayed on the signature line.
                Dim showDate As Boolean = signatureLine.ShowDate
                'Gets whether the signature line has been signed.
                Dim isSigned As Boolean = signatureLine.IsSigned

                Console.WriteLine("Signature line id: " & id)
                Console.WriteLine("Signature line instructions: " & instructions)
                Console.WriteLine("Signature line allow comments: " & allowComments)
                Console.WriteLine("Signature line show date: " & showDate)
                Console.WriteLine("Signature line is signed: " & isSigned)
            End If
        Next
    Next
Next

'Closes the document.
document.Close()

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Digital-Signature/Inspect-digital-signature/.NET).

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

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Digital-Signature/Remove-digital-signature/.NET).

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
