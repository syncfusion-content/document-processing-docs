# Digital Signatures

> Add digital signatures and visible signature lines, sign the lines after adding them, inspect and validate signatures, and remove signatures in DOCX documents.

---

## Required common usings

```csharp
using System;
using System.Collections.Generic;
using System.IO;
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.Office;
```

DocIO supports digital signatures only in DOCX format. Signing certificates must be supplied as PFX or P12 files; certificates are not loaded from the certificate store.

## Add Invisible Digital Signature

### Common for Cross-Platform and Windows-Specific
```csharp
using (WordDocument document = new WordDocument("input.docx"))
{
    OfficeDigitalSignatureCertificate certificate =
        new OfficeDigitalSignatureCertificate("certificate.pfx", "{certificate-password}");

    SignatureSettings settings = new SignatureSettings
    {
        Comments = "Approved",
        SignTime = DateTime.Now
    };

    document.AddDigitalSignature(certificate, settings);
    document.Save("output.docx", FormatType.Docx);
}
```

---

## Insert Signature Line

A signature line is a visible placeholder. Inserting it does not sign the document; sign it separately using its signature-line ID.

### Common for Cross-Platform and Windows-Specific
```csharp
using (WordDocument document = new WordDocument("input.docx"))
{
    IWSection section = document.Sections[0];
    section.AddParagraph().AppendText("Please sign below:");

    IWParagraph paragraph = section.AddParagraph();
    SignatureLineSettings settings = new SignatureLineSettings
    {
        Signer = "John Doe",
        SignerTitle = "Manager",
        Email = "john.doe@example.com",
        Instructions = "Please review and sign.",
        AllowComments = true,
        ShowDate = true
    };

    paragraph.AppendSignatureLine(settings, 200, 100);
    document.Save("output.docx", FormatType.Docx);
}
```

---

## Sign Signature Line with an Image

Find the signature line, then set `SignatureSettings.SignatureLineId` and provide the signature image bytes.

### Common for Cross-Platform and Windows-Specific
```csharp
using (WordDocument document = new WordDocument("input.docx"))
{
    WPicture signaturePicture = null;
    foreach (WSection section in document.Sections)
    {
        foreach (WParagraph paragraph in section.Paragraphs)
        {
            foreach (Entity entity in paragraph.ChildEntities)
            {
                if (entity is WPicture picture && picture.IsSignatureLine)
                {
                    signaturePicture = picture;
                    break;
                }
            }

            if (signaturePicture != null)
                break;
        }

        if (signaturePicture != null)
            break;
    }

    if (signaturePicture == null)
        throw new InvalidOperationException("The document does not contain a signature line.");

    OfficeDigitalSignatureCertificate certificate =
        new OfficeDigitalSignatureCertificate("certificate.pfx", "{certificate-password}");
    SignatureSettings settings = new SignatureSettings
    {
        SignatureLineId = signaturePicture.SignatureLine.Id,
        SignatureLineImage = File.ReadAllBytes("signature.png"),
        Comments = "Approved",
        SignTime = DateTime.Now
    };

    document.AddDigitalSignature(certificate, settings);
    document.Save("output.docx", FormatType.Docx);
}
```

---

## Sign Multiple Signature Lines

Create the signature lines and retain each ID with its corresponding image path. Reopen the saved document and sign each line.

### Common for Cross-Platform and Windows-Specific
```csharp
Dictionary<Guid, string> signatureInfo = new Dictionary<Guid, string>();
string[] signers = { "Tony", "Steve", "Bruce" };
string[] images = { "TonySignature.png", "SteveSignature.png", "BruceSignature.png" };

using (WordDocument document = new WordDocument("input.docx"))
{
    IWSection section = document.LastSection;
    for (int index = 0; index < signers.Length; index++)
    {
        IWParagraph paragraph = section.AddParagraph();
        IWPicture picture = paragraph.AppendSignatureLine(
            new SignatureLineSettings
            {
                Signer = signers[index],
                SignerTitle = "Approver",
                Email = signers[index] + "@example.com",
                Instructions = "Please review and sign.",
                ShowDate = true
            },
            192,
            96);

        Guid signatureLineId = ((WPicture)picture).SignatureLine.Id;
        signatureInfo.Add(signatureLineId, images[index]);
    }

    document.Save("output.docx", FormatType.Docx);
}

OfficeDigitalSignatureCertificate certificate =
    new OfficeDigitalSignatureCertificate("certificate.pfx", "{certificate-password}");
using (WordDocument document = new WordDocument("output.docx"))
{
    foreach (KeyValuePair<Guid, string> item in signatureInfo)
    {
        SignatureSettings settings = new SignatureSettings
        {
            SignatureLineId = item.Key,
            SignatureLineImage = File.ReadAllBytes(item.Value),
            Comments = "Approved",
            SignTime = DateTime.Now
        };
        document.AddDigitalSignature(certificate, settings);
    }

    document.Save("output.docx", FormatType.Docx);
}
```

---

## Specify the Digital Signature Standard

Use `XmlDsigLevel.XmlDsig` for standard XMLDSig, or `XmlDsigLevel.XAdEsEpes` for XAdES-EPES with an explicit signature policy.

### Common for Cross-Platform and Windows-Specific
```csharp
using (WordDocument document = new WordDocument("input.docx"))
{
    OfficeDigitalSignatureCertificate certificate =
        new OfficeDigitalSignatureCertificate("certificate.pfx", "{certificate-password}");
    SignatureSettings settings = new SignatureSettings
    {
        Comments = "Approved",
        SignTime = DateTime.Now,
        XmlDsigLevel = XmlDsigLevel.XAdEsEpes
    };

    document.AddDigitalSignature(certificate, settings);
    document.Save("output.docx", FormatType.Docx);
}
```

---

## Validate Digital Signatures

### Common for Cross-Platform and Windows-Specific
```csharp
using (WordDocument document = new WordDocument("signed.docx"))
{
    OfficeDigitalSignatureCollection signatures = document.DigitalSignatures;
    Console.WriteLine("All signatures are valid: " + signatures.IsValid);

    foreach (OfficeDigitalSignature signature in signatures)
        Console.WriteLine("Signature is valid: " + signature.IsValid);
}
```

---

## Inspect Digital Signatures

### Common for Cross-Platform and Windows-Specific
```csharp
using (WordDocument document = new WordDocument("signed.docx"))
{
    foreach (OfficeDigitalSignature signature in document.DigitalSignatures)
    {
        Console.WriteLine("Comments: " + signature.Comments);
        Console.WriteLine("Signing time: " + signature.SigningTime);
        Console.WriteLine("Certificate subject: " + signature.Certificate.Subject);
        Console.WriteLine("Certificate issuer: " + signature.Certificate.Issuer);
    }
}
```

---

## Remove Digital Signatures

Removes all digital signatures. Save the updated document as DOCX.

### Common for Cross-Platform and Windows-Specific
```csharp
using (WordDocument document = new WordDocument("signed.docx"))
{
    document.RemoveAllDigitalSignatures();
    document.Save("output.docx", FormatType.Docx);
}
```

---

## Placeholders

- `"input.docx"` / `"signed.docx"` → Replace with the source DOCX path.
- `"output.docx"` → Replace with the destination DOCX path.
- `"certificate.pfx"` → Replace with the signing certificate PFX or P12 path.
- `"{certificate-password}"` → Replace with the certificate password.
- `"signature.png"` and image paths → Replace with the signer's signature image paths.
- `XmlDsigLevel.XAdEsEpes` → Use `XmlDsigLevel.XmlDsig` for standard XMLDSig.

## Limitations

- Digital signatures are supported only for DOCX documents; legacy DOC is not supported.
- A signed document's content, images, signature lines, or properties must not be modified without invalidating the existing signature. Complete all edits before signing, or add a new signature after making changes.
