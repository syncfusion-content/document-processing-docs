---
title: Security in .NET PDF Library | Syncfusion
description: Learn how to protect PDF documents with encryption, set permissions, and validate certificates using EU trusted lists (LOTL) in Syncfusion .NET PDF.
platform: document-processing
control: PDF
documentation: UG
---
# Security in .NET PDF Library

Essential<sup>&reg;</sup> PDF enables you to [secure PDF documents](https://www.syncfusion.com/document-processing/pdf-framework/net/pdf-library/protect-pdf) using various encryption algorithms while defining specific permissions such as printing, editing, and copying content. You can apply both a user password (document open password) and an owner password (permission password) for enhanced protection.

Watch the following video to learn how to encrypt and decrypt PDF documents using the .NET PDF library.
{% youtube "https://www.youtube.com/watch?v=aGVDvIf3ODI" %}

The two supported encryption algorithms are:
1. Rivest Cipher 4 (RC4)
2. Advanced Encryption Standard (AES)

## Validate certificates using the EU List of Trusted Lists (LOTL)

The `PdfTrustedListProvider` class loads and cryptographically authenticates the European Commission List of Trusted Lists (LOTL) and the national trusted lists referenced by it. You can use these lists to evaluate whether a certificate is associated with a qualified trust service under eIDAS. The trusted list APIs are available in the `Syncfusion.Pdf.Security` namespace.

The LOTL points to national trusted lists; it is not a single certificate or a replacement for PDF signature integrity validation. Certificate trust, certificate revocation, and the integrity of a signed PDF must all be considered when accepting a signature.

### Load trusted lists and validate a certificate

To validate a signing certificate against EU trusted lists:

1. Create `PdfTrustedListSettings` and configure a writable cache directory.
2. Optionally specify the countries to load using ISO 3166-1 alpha-2 codes, such as `DE` and `FR`. An empty inclusion collection loads all available countries.
3. Create a `PdfTrustedListProvider` and call `Load()` to load and authenticate the lists.
4. Check the load result before validating the certificate.
5. Call `ValidateCertificate` with the certificate and `PdfTrustedCertificateValidationOptions`, then inspect the returned status and diagnostics.

The following example validates a public signing certificate stored in `signer.cer`. Replace this file with your certificate. No private key is required.

{% tabs %}

{% highlight c# tabtitle="C#" %}

using System;
using System.IO;
using System.Security.Cryptography.X509Certificates;
using Syncfusion.Pdf.Security;

PdfTrustedListSettings settings = new PdfTrustedListSettings();
settings.CacheDirectory = Path.Combine(
    Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
    "Syncfusion", "LOTLCache");
settings.IncludedCountries.Add("DE");
settings.IncludedCountries.Add("FR");
settings.AllowOnlineFetch = true;
settings.CountryFailureAction = PdfTrustedListCountryFailureAction.FailAll;

try
{
    PdfTrustedListProvider provider = new PdfTrustedListProvider(settings);
    PdfTrustedListLoadResult loadResult = provider.Load();
    Console.WriteLine("Load status: " + loadResult.Status);
    Console.WriteLine("Source: " + loadResult.Source);

    if (loadResult.Status == PdfTrustedListStatus.Success)
    {
        using (X509Certificate2 certificate = new X509Certificate2("signer.cer"))
        {
            PdfTrustedCertificateValidationOptions options =
                new PdfTrustedCertificateValidationOptions();
            options.ExpectedUsage = PdfTrustedCertificateUsage.Signature;
            options.CertificateSource = PdfTrustedCertificateSource.SigningCertificate;
            options.ValidationTime = DateTime.UtcNow;
            options.CheckRevocation = true;
            options.AllowOnlineRevocationCheck = true;

            PdfTrustedListValidationResult result =
                provider.ValidateCertificate(certificate, options);
            Console.WriteLine("Certificate trust status: " + result.Status);
            Console.WriteLine("Trust time source: " + result.TrustTimeSource);

            if (result.Service != null)
            {
                Console.WriteLine("Provider: " + result.Service.OperatorName);
                Console.WriteLine("Country: " + result.Service.OperatorCountry);
                Console.WriteLine("Service: " + result.Service.ServiceName);
                Console.WriteLine("Service type: " + result.Service.ServiceType);
                Console.WriteLine("Service status: " + result.Service.Status);
            }

            foreach (string entry in result.Log)
            {
                Console.WriteLine(entry);
            }
        }
    }
    else
    {
        foreach (string error in loadResult.Errors)
        {
            Console.WriteLine(error);
        }
    }
}
catch (PdfTrustedListException exception)
{
    Console.WriteLine("Trusted list processing failed: " + exception.Message);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

Imports System
Imports System.IO
Imports System.Security.Cryptography.X509Certificates
Imports Syncfusion.Pdf.Security

Dim settings As New PdfTrustedListSettings()
settings.CacheDirectory = Path.Combine(
    Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
    "Syncfusion", "LOTLCache")
settings.IncludedCountries.Add("DE")
settings.IncludedCountries.Add("FR")
settings.AllowOnlineFetch = True
settings.CountryFailureAction = PdfTrustedListCountryFailureAction.FailAll

Try
    Dim provider As New PdfTrustedListProvider(settings)
    Dim loadResult As PdfTrustedListLoadResult = provider.Load()
    Console.WriteLine("Load status: " & loadResult.Status.ToString())
    Console.WriteLine("Source: " & loadResult.Source.ToString())

    If loadResult.Status = PdfTrustedListStatus.Success Then
        Using certificate As New X509Certificate2("signer.cer")
            Dim options As New PdfTrustedCertificateValidationOptions()
            options.ExpectedUsage = PdfTrustedCertificateUsage.Signature
            options.CertificateSource = PdfTrustedCertificateSource.SigningCertificate
            options.ValidationTime = DateTime.UtcNow
            options.CheckRevocation = True
            options.AllowOnlineRevocationCheck = True

            Dim result As PdfTrustedListValidationResult =
                provider.ValidateCertificate(certificate, options)
            Console.WriteLine("Certificate trust status: " & result.Status.ToString())
            Console.WriteLine("Trust time source: " & result.TrustTimeSource.ToString())

            If result.Service IsNot Nothing Then
                Console.WriteLine("Provider: " & result.Service.OperatorName)
                Console.WriteLine("Country: " & result.Service.OperatorCountry)
                Console.WriteLine("Service: " & result.Service.ServiceName)
                Console.WriteLine("Service type: " & result.Service.ServiceType.ToString())
                Console.WriteLine("Service status: " & result.Service.Status.ToString())
            End If

            For Each entry As String In result.Log
                Console.WriteLine(entry)
            Next
        End Using
    Else
        For Each loadError As String In loadResult.Errors
            Console.WriteLine(loadError)
        Next
    End If
Catch exception As PdfTrustedListException
    Console.WriteLine("Trusted list processing failed: " & exception.Message)
End Try

{% endhighlight %}

{% endtabs %}

N> A successful load means that the requested trusted lists were loaded successfully; it does not mean that a certificate is trusted. Inspect the separate `PdfTrustedListValidationResult`, including its `Status`, `Service`, `Path`, and `Log`. A trusted certificate alone does not establish that a PDF signature is valid or that it is a qualified electronic signature.

### Configure trusted list loading

The following properties of `PdfTrustedListSettings` control loading and caching.

| Property | Description |
|---|---|
| `IncludedCountries` | Loads only the specified countries. Leave empty to load all available countries. |
| `ExcludedCountries` | Skips the specified countries. Use either inclusion or exclusion filtering, not both. |
| `CacheDirectory` | Specifies the local directory used to cache trusted list XML files. |
| `CacheValidity` | Specifies how long cached files remain valid before refresh is required. The public API specification defines a default of three days. |
| `AutoRefresh` | Controls automatic refresh of expired caches. The default is `true`. |
| `AllowOnlineFetch` | Allows network downloads of the LOTL and national trusted lists. The default is `true`. |
| `CountryFailureAction` | Controls handling of a country list that fails verification. The default, `IgnoreAndContinue`, allows other countries to load. Use `FailAll` when all requested lists must load successfully. |
| `RequestTimeout` | Sets the HTTP request timeout. The default is 30 seconds. |

With `IgnoreAndContinue`, inspect `PdfTrustedListLoadResult.Countries` and `Errors` when the overall status is `PartialSuccess`. Do not interpret missing or failed country lists as evidence that a certificate is untrusted or trusted.

By default, the provider uses the European Commission LOTL endpoint and embedded authentic LOTL signing certificates sourced from the Official Journal. `ListOfTrustedListsUrl`, `OfficialJournalUrl`, and `OfficialJournalCertificates` allow custom configuration. When overriding `OfficialJournalCertificates`, also configure `OfficialJournalUrl`. Obtain trust anchors through an independently authenticated source; do not trust an arbitrary certificate supplied with an XML file.

### Load trusted lists offline

For offline environments, set `AllowOnlineFetch` and `AutoRefresh` to `false`, then call `provider.Load(directoryPath)` with a directory containing the LOTL and the required national trusted list XML files. Local files are still subject to trusted list authentication. Provision and update these files through a trusted process.

N> Trusted list downloads and certificate revocation checks have separate network settings. To prevent online revocation requests during certificate validation, also set `PdfTrustedCertificateValidationOptions.AllowOnlineRevocationCheck` to `false`. Disabling network access does not establish that a certificate has not been revoked; review the path statuses and diagnostic log for unavailable revocation information.

### Refresh lists and discover services

Call `Refresh()` to reload and authenticate lists while ignoring unexpired cache entries. For asynchronous applications, use `LoadAsync(cancellationToken)` or `RefreshAsync(cancellationToken)` and await the returned load result.

Use `GetTrustedServices()` to enumerate loaded trust services, or `GetTrustedServices("DE")` to filter by country. Each `PdfTrustedServiceInfo` exposes the operator, service name, service type, status, status starting time, and digital identities. Service discovery does not replace certificate validation.

### Use trusted lists during PDF signature validation

Assign a loaded `PdfTrustedListProvider` to the `TrustedListProvider` property of `PdfSignatureValidationOptions` before validating PDF signatures. Inspect `PdfSignatureValidationResult.TrustedListResult` alongside the overall signature validation result. `TrustedListResult` is `null` when trusted lists were not used. Leaving `TrustedListProvider` unset preserves the existing signature validation behavior.

For standalone certificate validation, use `ExpectedUsage` to select the intended usage, such as `Signature`, `Seal`, or `Timestamp`. `ValidationTime` specifies the evaluation time, and the returned `TrustTimeSource` identifies the time source used. A caller-supplied historical time is not itself proof of a trusted signing time.

## Validate a certificate chain

The `PdfCertificateValidator` class validates an X.509 certificate chain and its revocation status without loading a PDF document. It supports certificate path validation and revocation checking according to RFC 5280 and RFC 6960. The certificate validation APIs are available in the `Syncfusion.Pdf.Security` namespace.

To validate a certificate chain:

1. Load the target certificate and the certificates needed to build its chain.
2. Create `PdfCertificateValidationOptions` and specify trusted anchors and intermediate certificates.
3. Optionally supply OCSP responses and CRLs, and configure the evaluation time and online revocation policy.
4. Call the static `PdfCertificateValidator.Validate` method.
5. Inspect the overall status, individual chain entries, and diagnostic log.

### Validate using caller-supplied certificates and revocation data

The following example validates `signer.cer` using a trusted root, an intermediate certificate, and locally supplied revocation data. Replace the sample files with certificates and revocation responses for your chain. The `.der` files must contain binary DER data, not PEM text or Base64 strings. No private keys are required.

{% tabs %}

{% highlight c# tabtitle="C#" %}

using System;
using System.Collections.Generic;
using System.IO;
using System.Security.Cryptography.X509Certificates;
using Syncfusion.Pdf.Security;

using (X509Certificate2 certificate = new X509Certificate2("signer.cer"))
using (X509Certificate2 intermediate = new X509Certificate2("intermediate.cer"))
using (X509Certificate2 root = new X509Certificate2("trusted-root.cer"))
{
    PdfCertificateValidationOptions options = new PdfCertificateValidationOptions();
    options.TrustedCertificates = new X509Certificate2Collection { root };
    options.IntermediateCertificates = new X509Certificate2Collection { intermediate };
    options.OcspResponses = new List<byte[]>
    {
        File.ReadAllBytes("signer_ocsp.der")
    };
    options.Crls = new List<byte[]>
    {
        File.ReadAllBytes("issuer_crl.der")
    };
    options.ValidationTime = DateTime.UtcNow;
    options.AllowOnlineRevocationCheck = false;

    PdfCertificateValidationResult result =
        PdfCertificateValidator.Validate(certificate, options);
    Console.WriteLine("Certificate chain status: " + result.Status);

    foreach (PdfCertificateValidationEntry entry in result.Certificates)
    {
        Console.WriteLine(entry.Certificate.Subject + ": " + entry.Status);
        foreach (PdfCertificateStatusReason reason in entry.Reasons)
        {
            Console.WriteLine("Reason: " + reason);
        }
        if (entry.RevocationTime.HasValue)
        {
            Console.WriteLine("Revoked at (UTC): " + entry.RevocationTime.Value);
        }
    }

    foreach (string message in result.Log)
    {
        Console.WriteLine(message);
    }
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

Imports System
Imports System.Collections.Generic
Imports System.IO
Imports System.Security.Cryptography.X509Certificates
Imports Syncfusion.Pdf.Security

Using certificate As New X509Certificate2("signer.cer"),
      intermediate As New X509Certificate2("intermediate.cer"),
      root As New X509Certificate2("trusted-root.cer")
    Dim options As New PdfCertificateValidationOptions()
    options.TrustedCertificates = New X509Certificate2Collection From {root}
    options.IntermediateCertificates = New X509Certificate2Collection From {intermediate}
    options.OcspResponses = New List(Of Byte()) From {
        File.ReadAllBytes("signer_ocsp.der")
    }
    options.Crls = New List(Of Byte()) From {
        File.ReadAllBytes("issuer_crl.der")
    }
    options.ValidationTime = DateTime.UtcNow
    options.AllowOnlineRevocationCheck = False

    Dim result As PdfCertificateValidationResult =
        PdfCertificateValidator.Validate(certificate, options)
    Console.WriteLine("Certificate chain status: " & result.Status.ToString())

    For Each entry As PdfCertificateValidationEntry In result.Certificates
        Console.WriteLine(entry.Certificate.Subject & ": " & entry.Status.ToString())
        For Each reason As PdfCertificateStatusReason In entry.Reasons
            Console.WriteLine("Reason: " & reason.ToString())
        Next
        If entry.RevocationTime.HasValue Then
            Console.WriteLine("Revoked at (UTC): " & entry.RevocationTime.Value.ToString())
        End If
    Next

    For Each message As String In result.Log
        Console.WriteLine(message)
    Next
End Using

{% endhighlight %}

{% endtabs %}

N> Only add certificates to `TrustedCertificates` when your application explicitly trusts them. Do not promote an unverified certificate from the input chain to a trust anchor. Supplying an intermediate certificate helps build a path; it does not make that certificate trusted.

### Configure certificate validation

| Property | Description |
|---|---|
| `TrustedCertificates` | Root certificates or explicitly trusted intermediate certificates. When null or empty, the platform trust store is evaluated. |
| `IntermediateCertificates` | Additional intermediate certificates used to complete certification paths. |
| `OcspResponses` | Caller-supplied DER-encoded OCSP responses. Accepts full `OCSPResponse` or `BasicOCSPResponse` data. |
| `Crls` | Caller-supplied DER-encoded certificate revocation lists. |
| `ValidationTime` | UTC time at which certificate validity and revocation are evaluated. The default is null, which uses the current time. |
| `AllowOnlineRevocationCheck` | Permits online revocation checking using AIA OCSP and CRL distribution points. The default is `true`. Set to `false` to prevent online revocation requests. |

You can supply OCSP responses, CRLs, or both, depending on the revocation evidence available for the chain. Supply evidence for all certificates that require revocation checking, not only the signer. Disabling online revocation checks does not make missing, expired, or unusable evidence acceptable. Review the result to determine whether revocation status could be established.

### Interpret certificate validation results

`PdfCertificateValidationResult.Status` reports the overall path status. `Certificates` contains chain entries ordered from the end-entity certificate to the trust anchor, and `Log` provides diagnostic trace messages.

| Status | Meaning |
|---|---|
| `Valid` | The certificate or path is correctly signed, within its validity dates, trusted, and not revoked. |
| `Revoked` | The certificate has been revoked by its issuer. |
| `Invalid` | The certificate or path is invalid, for example because it is expired, untrusted, or has an invalid signature. |
| `Unknown` | The status cannot be determined, for example because an intermediate certificate or revocation information is unavailable. |

Each `PdfCertificateValidationEntry` exposes its `Certificate`, `Status`, `Reasons`, and nullable `RevocationTime`. Reasons such as `IssuerNotFound`, `UntrustedRoot`, `Expired`, and `RevocationStatusUnknown` help identify missing inputs or validation failures. Do not treat `Unknown` as `Valid`.

N> Standalone certificate-chain validation does not verify PDF signature integrity or establish a trusted signing time. Use PDF signature validation to validate a signed document. A caller-supplied historical `ValidationTime` is an evaluation input, not proof that the document was signed at that time.

## Supply caller-provided OCSP and CRL data for PDF signature validation

You can provide previously obtained revocation evidence through the public `OCSPResponseData` and `CRLResponseData` properties of `PdfSignatureValidationOptions`, in the `Syncfusion.Pdf.Parsing` namespace. These responses supplement the OCSP responses and CRLs embedded in the signature and the document security store (DSS). Both properties default to null, and unusable items are ignored.

Use this feature when your application retrieves revocation evidence through a separate service or needs to make locally stored responses available during validation. Supplying data does not itself establish a valid signature or guarantee that all revocation information is available.

The following example validates the signature field named `Signature1` in `signed_document.pdf` using caller-supplied binary DER files. Replace the field name and file paths with those for your document.

{% tabs %}

{% highlight c# tabtitle="C#" %}

using System;
using System.Collections.Generic;
using System.IO;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

PdfSignatureValidationOptions options = new PdfSignatureValidationOptions();
options.OCSPResponseData = new List<byte[]>
{
    File.ReadAllBytes("signer_ocsp.der")
};
options.CRLResponseData = new List<byte[]>
{
    File.ReadAllBytes("issuer_crl.der")
};

using (PdfLoadedDocument document = new PdfLoadedDocument("signed_document.pdf"))
{
    PdfLoadedSignatureField signatureField =
        document.Form.Fields["Signature1"] as PdfLoadedSignatureField;
    if (signatureField != null)
    {
        PdfSignatureValidationResult result = signatureField.ValidateSignature(options);
        Console.WriteLine("Signature valid: " + result.IsSignatureValid);
    }
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

Imports System
Imports System.Collections.Generic
Imports System.IO
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security

Dim options As New PdfSignatureValidationOptions()
options.OCSPResponseData = New List(Of Byte()) From {
    File.ReadAllBytes("signer_ocsp.der")
}
options.CRLResponseData = New List(Of Byte()) From {
    File.ReadAllBytes("issuer_crl.der")
}

Using document As New PdfLoadedDocument("signed_document.pdf")
    Dim signatureField As PdfLoadedSignatureField =
        TryCast(document.Form.Fields("Signature1"), PdfLoadedSignatureField)
    If signatureField IsNot Nothing Then
        Dim result As PdfSignatureValidationResult = signatureField.ValidateSignature(options)
        Console.WriteLine("Signature valid: " & result.IsSignatureValid.ToString())
    End If
End Using

{% endhighlight %}

{% endtabs %}

The standalone and PDF signature validation APIs use different property names for caller-supplied data:

| Validation API | OCSP data property | CRL data property |
|---|---|---|
| `PdfCertificateValidationOptions` | `OcspResponses` | `Crls` |
| `PdfSignatureValidationOptions` | `OCSPResponseData` | `CRLResponseData` |

Add multiple byte arrays when evidence is available for multiple certificates. Leaving either signature validation property unset preserves the existing behavior for that input. These properties supply validation evidence; they do not embed it into the PDF or turn off network access. Configure the applicable online validation policy separately when network requests must be restricted.

## Working with RC4 Encryption

You can encrypt a PDF document by specifying the [Algorithm](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_Algorithm) property as **RC4** through the [PdfEncryptionAlgorithm](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfEncryptionAlgorithm.html) enum and the [KeySize](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_KeySize) property as **40-bit or 128-bit** through the [PdfEncryptionKeySize](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfEncryptionKeySize.html) enum in the [PdfSecurity](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html) class. The following code snippet illustrates how to encrypt the PDF document with the [UserPassword](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_UserPassword) property.

**User password:** Prevents people from opening or viewing a PDF document. Once the user password is set, opening the PDF document in Adobe Acrobat/Reader prompts the user to enter this password. If the password is incorrect, the document will not open. By setting a PDF user password, you can secure the PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Security/Encrypt-PDF-with-RC4-using-user-password/.NET/Encrypt-PDF-with-RC4-using-user-password/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page to the document.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Set the font.
PdfStandardFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 20f, PdfFontStyle.Bold);
//Set the brush.
PdfBrush brush = PdfBrushes.Black;

//Document security.
PdfSecurity security = document.Security;
//Specifies key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key128Bit;
security.Algorithm = PdfEncryptionAlgorithm.RC4;
security.UserPassword = "password";
//Draw the text.
graphics.DrawString("Encrypted with RC4 128bit", font, brush, new PointF(0, 40));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page to the document.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Set the font.
PdfStandardFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 20f, PdfFontStyle.Bold);
//Set the brush.
PdfBrush brush = PdfBrushes.Black;

//Document security.
PdfSecurity security = document.Security;
//Specifies key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key128Bit;
security.Algorithm = PdfEncryptionAlgorithm.RC4;
security.UserPassword = "password";
//Draw the text.
graphics.DrawString("Encrypted with RC4 128bit", font, brush, new PointF(0, 40));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Security

'Create a new PDF document.
Dim document As New PdfDocument()
'Add a page to the document.
Dim page As PdfPage = document.Pages.Add()
'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics
'Set the font.
Dim font As New PdfStandardFont(PdfFontFamily.TimesRoman, 20.0F, PdfFontStyle.Bold)
'Set the brush.
Dim brush As PdfBrush = PdfBrushes.Black

'Document security.
Dim security As PdfSecurity = document.Security
'Specifies key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key128Bit
security.Algorithm = PdfEncryptionAlgorithm.RC4
security.UserPassword = "password"
'Draw the text.
graphics.DrawString("Encrypted with RC4 128bit", font, brush, New PointF(0, 40))

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Encrypt-PDF-with-RC4-using-user-password/).

N> While using both user and owner passwords, please specify different user and owner password while encrypting the PDF document for better security.

You can protect the PDF document from printing, editing, and copying with the [OwnerPassword](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_OwnerPassword) property by using the following code snippet.

**Owner password:** Sets PDF document restrictions, which can include printing, content copying, editing, page extraction, commenting, and more. Once the owner password is set, Acrobat requires this password to make any changes to the PDF document. Setting a PDF owner password further secures the PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Security/Encrypt-PDF-with-RC4-using-owner-password/.NET/Encrypt-PDF-with-RC4-using-owner-password/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page to the document.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Set the font.
PdfStandardFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 20f, PdfFontStyle.Bold);
//Set the brush.
PdfBrush brush = PdfBrushes.Black;

//Document security.
PdfSecurity security = document.Security;
//Specifies key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key128Bit;
security.Algorithm = PdfEncryptionAlgorithm.RC4;
security.OwnerPassword = "syncfusion";
//It allows printing and accessibility copy content.
security.Permissions = PdfPermissionsFlags.Print | PdfPermissionsFlags.AccessibilityCopyContent;
security.UserPassword = "password";
//Draw the text.
graphics.DrawString("This document is protected with owner password", font, brush, new PointF(0, 40));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page to the document.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Set the font.
PdfStandardFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 20f, PdfFontStyle.Bold);
//Set the brush.
PdfBrush brush = PdfBrushes.Black;

//Document security.
PdfSecurity security = document.Security;
//Specifies key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key128Bit;
security.Algorithm = PdfEncryptionAlgorithm.RC4;
security.OwnerPassword = "syncfusion";
//It allows printing and accessibility copy content.
security.Permissions = PdfPermissionsFlags.Print | PdfPermissionsFlags.AccessibilityCopyContent;
security.UserPassword = "password";
//Draw the text.
graphics.DrawString("This document is protected with owner password", font, brush, new PointF(0, 40));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Security

'Create a new PDF document.
Dim document As New PdfDocument()
'Add a page to the document.
Dim page As PdfPage = document.Pages.Add()
'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics
'Set the font.
Dim font As New PdfStandardFont(PdfFontFamily.TimesRoman, 20.0F, PdfFontStyle.Bold)
'Set the brush.
Dim brush As PdfBrush = PdfBrushes.Black

'Document security.
Dim security As PdfSecurity = document.Security
'Specifies key size and encryption algorithm using 128 bit key in RC4 mode.
security.KeySize = PdfEncryptionKeySize.Key128Bit
security.Algorithm = PdfEncryptionAlgorithm.RC4
security.OwnerPassword = "syncfusion"
'It allows printing and accessibility copy content.
security.Permissions = PdfPermissionsFlags.Print Or PdfPermissionsFlags.AccessibilityCopyContent
security.UserPassword = "password"
'Draw the text.
graphics.DrawString("This document is protected with owner password", font, brush, New PointF(0, 40))

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Encrypt-PDF-with-RC4-using-owner-password/).

## Working with AES Encryption

You can encrypt a PDF document by specifying the [Algorithm](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_Algorithm) property as **AES** through the [PdfEncryptionAlgorithm](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfEncryptionAlgorithm.html) enum and the [KeySize](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_KeySize) property as **40-bit, 128-bit, or 256-bit** through the [PdfEncryptionKeySize](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfEncryptionKeySize.html) enum in the [PdfSecurity](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html) class. The following code snippet illustrates how to encrypt the PDF document with the [UserPassword](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_UserPassword) property.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Security/Encrypt-PDF-with-AES-using-user-password/.NET/Encrypt-PDF-with-AES-using-user-password/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page to the document.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Set the font.
PdfStandardFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 20f, PdfFontStyle.Bold);
//Set the brush.
PdfBrush brush = PdfBrushes.Black;

//Document security.
PdfSecurity security = document.Security;
//Specifies key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = PdfEncryptionAlgorithm.AES;
security.UserPassword = "password";
//Draw the text.
graphics.DrawString("Encrypted with AES 256bit", font, brush, new PointF(0, 40));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page to the document.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Set the font.
PdfStandardFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 20f, PdfFontStyle.Bold);
//Set the brush.
PdfBrush brush = PdfBrushes.Black;

//Document security.
PdfSecurity security = document.Security;
//Specifies key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = PdfEncryptionAlgorithm.AES;
security.UserPassword = "password";
//Draw the text.
graphics.DrawString("Encrypted with AES 256bit", font, brush, new PointF(0, 40));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Security

'Create a new PDF document.
Dim document As New PdfDocument()
'Add a page to the document.
Dim page As PdfPage = document.Pages.Add()
'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics
'Set the font.
Dim font As New PdfStandardFont(PdfFontFamily.TimesRoman, 20.0F, PdfFontStyle.Bold)
'Set the brush.
Dim brush As PdfBrush = PdfBrushes.Black

'Document security.
Dim security As PdfSecurity = document.Security
'Specifies key size and encryption algorithm using 256 bit key in AES mode.
security.KeySize = PdfEncryptionKeySize.Key256Bit
security.Algorithm = PdfEncryptionAlgorithm.AES
security.UserPassword = "password"
'Draw the text.
graphics.DrawString("Encrypted with AES 256bit", font, brush, New PointF(0, 40))

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Encrypt-PDF-with-AES-using-user-password/).

You can protect the PDF document from printing, editing, copying with the [OwnerPassword](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_OwnerPassword) by using the following code snippet.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Security/Encrypt-PDF-with-AES-using-owner-password/.NET/Encrypt-PDF-with-AES-using-owner-password/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page to the document.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Set the font.
PdfStandardFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 20f, PdfFontStyle.Bold);
//Set the brush.
PdfBrush brush = PdfBrushes.Black;

//Document security.
PdfSecurity security = document.Security;
//Specifies key size and encryption algorithm using 256 bit key in AES mode.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = PdfEncryptionAlgorithm.AES;
security.OwnerPassword = "syncfusion";
//It allows printing and accessibility copy content.
security.Permissions = PdfPermissionsFlags.Print | PdfPermissionsFlags.AccessibilityCopyContent;
security.UserPassword = "password";
//Draw the text.
graphics.DrawString("This document is protected with owner password", font, brush, new PointF(0, 40));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page to the document.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Set the font.
PdfStandardFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 20f, PdfFontStyle.Bold);
//Set the brush.
PdfBrush brush = PdfBrushes.Black;

//Document security.
PdfSecurity security = document.Security;
//Specifies key size and encryption algorithm using 256 bit key in AES mode.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = PdfEncryptionAlgorithm.AES;
security.OwnerPassword = "syncfusion";
//It allows printing and accessibility copy content.
security.Permissions = PdfPermissionsFlags.Print | PdfPermissionsFlags.AccessibilityCopyContent;
security.UserPassword = "password";
//Draw the text.
graphics.DrawString("This document is protected with owner password", font, brush, new PointF(0, 40));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Security

'Create a new PDF document.
Dim document As New PdfDocument()
'Add a page to the document.
Dim page As PdfPage = document.Pages.Add()
'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics
'Set the font.
Dim font As New PdfStandardFont(PdfFontFamily.TimesRoman, 20.0F, PdfFontStyle.Bold)
'Set the brush.
Dim brush As PdfBrush = PdfBrushes.Black

'Document security.
Dim security As PdfSecurity = document.Security
'Specifies key size and encryption algorithm using 256-bit key in AES mode.
security.KeySize = PdfEncryptionKeySize.Key256Bit
security.Algorithm = PdfEncryptionAlgorithm.AES
security.OwnerPassword = "syncfusion"
'It allows printing and accessibility copy content.
security.Permissions = PdfPermissionsFlags.Print Or PdfPermissionsFlags.AccessibilityCopyContent
security.UserPassword = "password"
'Draw the text.
graphics.DrawString("This document is protected with owner password", font, brush, New PointF(0, 40))

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Encrypt-PDF-with-AES-using-owner-password/).

## Working with AES-GCM encryption

To encrypt a PDF document using AES-GCM, set the [Algorithm](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_Algorithm) property to **AESGCM** using the [PdfEncryptionAlgorithm](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfEncryptionAlgorithm.html) enum and the [KeySize](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_KeySize) property to **256-bit** using the [PdfEncryptionKeySize](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfEncryptionKeySize.html) enum in the [PdfSecurity](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html) class.

N> AES-GCM encryption is supported only in PDF version 2.0. Ensure that the PDF file version is set to 2.0 by assigning `document.FileStructure.Version = PdfVersion.Version2_0` before applying encryption.

Refer to the following code example for further details.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Security/Secure_data%20_with%20_AES_GCM/.NET/Secure_data%20_with%20_AES_GCM/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Create a new PDF document. 
PdfDocument document = new PdfDocument(); 

//Set the document version as 2.0 
document.FileStructure.Version = PdfVersion.Version2_0; 

//Add a page to the document. 
PdfPage page = document.Pages.Add(); 

//Create PDF graphics for the page. 
PdfGraphics graphics = page.Graphics; 
//Create font. 
PdfStandardFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 15f, PdfFontStyle.Bold); 
//Create brush. 
PdfBrush brush = PdfBrushes.Black; 

//Draw the text. 
graphics.DrawString("Encrypted document with AES-GCM 256bit", font, brush, new PointF(0, 40)); 

//Get document security. 
PdfSecurity security = document.Security; 
//Specifies key size and encryption algorithm. 
security.KeySize = PdfEncryptionKeySize.Key256Bit; 
security.Algorithm = PdfEncryptionAlgorithm.AESGCM; 

//Set Owner and User password. 
security.OwnerPassword = "ownerPassword"; 
security.UserPassword = "userPassword"; 

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Create a new PDF document. 
PdfDocument document = new PdfDocument(); 

//Set the document version as 2.0
document.FileStructure.Version = PdfVersion.Version2_0; 

//Add a page to the document. 
PdfPage page = document.Pages.Add(); 

//Create PDF graphics for the page. 
PdfGraphics graphics = page.Graphics; 

//Set the font. 
PdfStandardFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 15f, PdfFontStyle.Bold); 

//Set the brush. 
PdfBrush brush = PdfBrushes.Black; 

//Document security. 
PdfSecurity security = document.Security; 

//Specifies key size and encryption algorithm. 
security.KeySize = PdfEncryptionKeySize.Key256Bit; 
security.Algorithm = PdfEncryptionAlgorithm.AESGCM; 
security.OwnerPassword = "ownerPassword"; 
security.UserPassword = "userPassword"; 

//Draw the text. 
graphics.DrawString("Encrypted document with AES-GCM 256bit", font, brush, new PointF(0, 40)); 

//Save and close the document. 
document.Save("Output.pdf"); 
document.Close(true); 

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Security

' Create a new PDF document 
Dim document As PdfDocument = New PdfDocument() 

' Set the document version as 2.0 
document.FileStructure.Version = PdfVersion.Version2_0 

' Add a page to the document 
Dim page As PdfPage = document.Pages.Add() 

' Create PDF graphics for the page 
Dim graphics As PdfGraphics = page.Graphics 

' Set the font 
Dim font As New PdfStandardFont(PdfFontFamily.TimesRoman, 15.0F, PdfFontStyle.Bold) 

' Set the brush 
Dim brush As PdfBrush = PdfBrushes.Black 

'Document security. 
Dim security As PdfSecurity = document.Security 

'Specifies key size and encryption algorithm using 256-bit key in AES-GCM mode. 
security.KeySize = PdfEncryptionKeySize.Key256Bit 
security.Algorithm = PdfEncryptionAlgorithm.AESGCM 
security.OwnerPassword = "ownerPassword" 
security.UserPassword = "userPassword" 

'Draw the text. 
graphics.DrawString("Encrypted document with AES-GCM 256bit", font, brush, New PointF(0, 40)) 

'Save and close the document. 
document.Save("Output.pdf") 
document.Close(True) 

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Secure_data%20_with%20_AES_GCM/.NET).

## Encryption Options

Now, the Syncfusion<sup>&reg;</sup> PDF library has provided options to encrypt the PDF document as follows: 

* **Encrypt all contents** - All contents of the document will be encrypted.

*	**Encrypt all contents except Metadata** - All contents of the document will be encrypted except metadata.

*	**Encrypt only attachments**  - Encrypts only the file attachments, rest of the document will be left unencrypted.

The default value of EncryptionOptions is EncryptAllContents. You can choose any one of these options using the property [EncryptionOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_EncryptionOptions) available in the class [PdfSecurity](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html).

### Encrypt all contents

You can encrypt all the PDF content by specifying the [EncryptionOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_EncryptionOptions) property as **EncryptAllContents** option through [PdfEncryptionOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfEncryptionOptions.html) Enum in [PdfSecurity](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html) class. The following code snippet explains how to encrypt all contents of the PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Security/Encrypt-all-contents-of-the-PDF-document/.NET/Encrypt-all-contents-of-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page to the document.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Set the font.
PdfStandardFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 20f, PdfFontStyle.Bold);
//Set the brush.
PdfBrush brush = PdfBrushes.Black;

//Document security.
PdfSecurity security = document.Security;
//Specifies key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = PdfEncryptionAlgorithm.AES;
//Specifies encryption option.
security.EncryptionOptions = PdfEncryptionOptions.EncryptAllContents;
security.UserPassword = "password";
//Draw the text.
graphics.DrawString("Encrypted with AES 256bit", font, brush, new PointF(0, 40));                        

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page to the document.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Set the font.
PdfStandardFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 20f, PdfFontStyle.Bold);
//Set the brush.
PdfBrush brush = PdfBrushes.Black;

//Document security.
PdfSecurity security = document.Security;
//Specifies key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = PdfEncryptionAlgorithm.AES;
//Specifies encryption option.
security.EncryptionOptions = PdfEncryptionOptions.EncryptAllContents;
security.UserPassword = "password";
//Draw the text.
graphics.DrawString("Encrypted with AES 256bit", font, brush, new PointF(0, 40));

//Save and close the document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Security

'Create a new PDF document.
Dim document As New PdfDocument()
'Add a page to the document.
Dim page As PdfPage = document.Pages.Add()
'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics
'Set the font.
Dim font As New PdfStandardFont(PdfFontFamily.TimesRoman, 20.0F, PdfFontStyle.Bold)
'Set the brush.
Dim brush As PdfBrush = PdfBrushes.Black

'Document security.
Dim security As PdfSecurity = document.Security
'Specifies key size and encryption algorithm using 256-bit key in AES mode.
security.KeySize = PdfEncryptionKeySize.Key256Bit
security.Algorithm = PdfEncryptionAlgorithm.AES
'Specifies encryption option.
security.EncryptionOptions = PdfEncryptionOptions.EncryptAllContents
security.UserPassword = "password"
'Draw the text.
graphics.DrawString("Encrypted with AES 256bit", font, brush, New PointF(0, 40))        

'Save and close the document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Encrypt-all-contents-of-the-PDF-document/).

### Encrypt all contents except metadata

The Syncfusion Essential<sup>&reg;</sup> PDF library now supports encrypting the PDF document except the document information (metadata) by using the EncryptAllContentsExceptMetadata option. The document information will not be encrypted when using this EncryptionOption.

You can encrypt all contents except metadata by specifying the [EncryptionOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_EncryptionOptions) property as **EncryptAllContentsExceptMetadata** option through [PdfEncryptionOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfEncryptionOptions.html) Enum in [PdfSecurity](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html) class. The following code snippet explains how to encrypt all contents except metadata of the PDF document.

N> Encrypt all contents except metadata  is only supported in AES algorithms with 128bit, 256bit, and 256bit revision6 key size.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Security/Encrypt-all-contents-except-metadata-of-the-PDF/.NET/Encrypt-all-contents-except-metadata-of-the-PDF/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page to the document.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Set the font.
PdfStandardFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 20f, PdfFontStyle.Bold);
//Set the brush.
PdfBrush brush = PdfBrushes.Black;

//Document security.
PdfSecurity security = document.Security;
//Specifies key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = PdfEncryptionAlgorithm.AES;
//Specifies encryption option.
security.EncryptionOptions = PdfEncryptionOptions.EncryptAllContentsExceptMetadata;
security.UserPassword = "password";
//Draw the text.
graphics.DrawString("Encrypted all contents except metadata with AES 256bit", font, brush, new PointF(0, 40));                        

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page to the document.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Set the font.
PdfStandardFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 20f, PdfFontStyle.Bold);
//Set the brush.
PdfBrush brush = PdfBrushes.Black;

//Document security.
PdfSecurity security = document.Security;
//Specifies key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = PdfEncryptionAlgorithm.AES;
//Specifies encryption option.
security.EncryptionOptions = PdfEncryptionOptions.EncryptAllContentsExceptMetadata;
security.UserPassword = "password";
//Draw the text.
graphics.DrawString("Encrypted all contents except metadata with AES 256bit", font, brush, new PointF(0, 40));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Security

'Create a new PDF document.
Dim document As New PdfDocument()
'Add a page to the document.
Dim page As PdfPage = document.Pages.Add()
'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics
'Set the font.
Dim font As New PdfStandardFont(PdfFontFamily.TimesRoman, 20.0F, PdfFontStyle.Bold)
'Set the brush.
Dim brush As PdfBrush = PdfBrushes.Black

'Document security.
Dim security As PdfSecurity = document.Security
'Specifies key size and encryption algorithm using 256 bit key in AES mode.
security.KeySize = PdfEncryptionKeySize.Key256Bit
security.Algorithm = PdfEncryptionAlgorithm.AES
'Specifies encryption option.
security.EncryptionOptions = PdfEncryptionOptions.EncryptAllContentsExceptMetadata
security.UserPassword = "password"
'Draw the text.
graphics.DrawString("Encrypted all contents except metadata with AES 256bit", font, brush, New PointF(0, 40))        

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Encrypt-all-contents-except-metadata-of-the-PDF/).

### Encrypt only attachments

You can encrypt only attachments present in the PDF document by specifying the [EncryptionOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_EncryptionOptions) property as **EncryptOnlyAttachments** option through [PdfEncryptionOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfEncryptionOptions.html) Enum in [PdfSecurity](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html) class.

The following code example explains how to create an encrypt only attachment document using the Syncfusion<sup>&reg;</sup> PDF Library. 

N> [UserPassword](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_UserPassword) is mandatory for encrypt only attachments and it is only supported in AES algorithms with 128bit, 256bit, and 256bit revision6 key size.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Security/Encrypt-only-attachment-in-the-PDF-document/.NET/Encrypt-only-attachment-in-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page to the document.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Set the font.
PdfStandardFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 20f, PdfFontStyle.Bold);
//Set the brush.
PdfBrush brush = PdfBrushes.Black;

//Document security.
PdfSecurity security = document.Security;
//Specifies key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = PdfEncryptionAlgorithm.AES;
//Specifies encryption option.
security.EncryptionOptions = PdfEncryptionOptions.EncryptOnlyAttachments;
security.UserPassword = "password";
//Draw the text.
graphics.DrawString("Encrypted only attachments with AES 256bit", font, brush, new PointF(0, 40));

//Creates an attachment.
PdfAttachment attachment = new PdfAttachment("Input.txt");
attachment.ModificationDate = DateTime.Now;
attachment.Description = "Input.txt";
attachment.MimeType = "application/txt";
//Add the attachment to the document.
document.Attachments.Add(attachment);

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page to the document.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Set the font.
PdfStandardFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 20f, PdfFontStyle.Bold);
//Set the brush.
PdfBrush brush = PdfBrushes.Black;

//Document security.
PdfSecurity security = document.Security;
//Specifies key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = PdfEncryptionAlgorithm.AES;
//Specifies encryption option.
security.EncryptionOptions = PdfEncryptionOptions.EncryptOnlyAttachments;
security.UserPassword = "password";
//Draw the text.
graphics.DrawString("Encrypted only attachments with AES 256bit", font, brush, new PointF(0, 40));

//Creates an attachment.
PdfAttachment attachment = new PdfAttachment("Input.txt");
attachment.ModificationDate = DateTime.Now;
attachment.Description = "Input.txt";
attachment.MimeType = "application/txt";
//Add the attachment to the document.
document.Attachments.Add(attachment);

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Security

'Create a new PDF document.      
Dim document As New PdfDocument()
'Add a page to the document.
Dim page As PdfPage = document.Pages.Add()
'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics
'Set the font.
Dim font As New PdfStandardFont(PdfFontFamily.TimesRoman, 20.0F, PdfFontStyle.Bold)
'Set the brush.
Dim brush As PdfBrush = PdfBrushes.Black

'Document security.
Dim security As PdfSecurity = document.Security
'Specifies key size and encryption algorithm using 256-bit key in AES mode.
security.KeySize = PdfEncryptionKeySize.Key256Bit
security.Algorithm = PdfEncryptionAlgorithm.AES
'Specifies encryption option.
security.EncryptionOptions = PdfEncryptionOptions.EncryptOnlyAttachments
security.UserPassword = "password"
'Draw the text.
graphics.DrawString("Encrypted only attachments with AES 256bit", font, brush, New PointF(0, 40))

'Creates an attachment.
Dim attachment As New PdfAttachment("Input.txt")
attachment.ModificationDate = DateTime.Now
attachment.Description = "Input.txt" 
attachment.MimeType = "application/txt" 
'Add the attachment to the document.
document.Attachments.Add(attachment)

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Encrypt-only-attachment-in-the-PDF-document).

## Decrypt an Encrypted PDF Document

An encrypted PDF document can be decrypted by removing its `user` or `owner` password and restoring its permissions to their default settings. This allows the document to be opened, viewed, edited, copied, and printed without security restrictions.

The following code example demonstrates how to decrypt an encrypted PDF document and restore its default permissions.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Security/Decrypting-encrypted-PDF-document/.NET/Decrypting-encrypted-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

// Load the encrypted PDF document from the input stream
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf", "syncfusion");

// Set the document permissions to default (removes any restrictions)
loadedDocument.Security.Permissions = PdfPermissionsFlags.Default;

// Clear the owner and user passwords to decrypt the document
loadedDocument.Security.OwnerPassword = string.Empty;
loadedDocument.Security.UserPassword = string.Empty;

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

// Load the encrypted PDF document from the input stream
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf", "syncfusion");

// Set the document permissions to default (removes any restrictions)
loadedDocument.Security.Permissions = PdfPermissionsFlags.Default;

// Clear the owner and user passwords to decrypt the document
loadedDocument.Security.OwnerPassword = string.Empty;
loadedDocument.Security.UserPassword = string.Empty;

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security

' Load the encrypted PDF document from the input stream with password
Dim loadedDocument As New PdfLoadedDocument("Input.pdf", "syncfusion")

' Set the document permissions to default (removes any restrictions)
loadedDocument.Security.Permissions = PdfPermissionsFlags.Default

' Clear the owner and user passwords to decrypt the document
loadedDocument.Security.OwnerPassword = String.Empty
loadedDocument.Security.UserPassword = String.Empty

' Save the decrypted PDF document to the specified file
loadedDocument.Save("Output.pdf")

' Close the loaded PDF document and release resources
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Decrypting-encrypted-PDF-document/.NET).

## Opening an encrypt-only-attachment document

The Syncfusion Essential<sup>&reg;</sup> PDF library now provides support for loading the encrypt-only-attachment PDF documents. To access the attachments in the existing PDF document, the [UserPassword](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_UserPassword) is mandatory. 

You can provide the [UserPassword](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_UserPassword) in following ways:
*	Load the PDF document with password. 
*	Provide password using the OnPdfPassword Event when accessing the attachments. 

It is possible to access all the contents except attachment when loading the PDF document without [UserPassword](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_UserPassword). 

The following code example explains how to load an encrypt-only-attachment document with password in [PdfAttachment](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachment.html) class using Syncfusion<sup>&reg;</sup> PDF Library. 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Security/Load-an-encrypt-only-attachment-document/.NET/Load-an-encrypt-only-attachment-document/Program.cs" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf", "password");

//Accessing the attachments.
foreach (PdfAttachment attachment in document.Attachments)
{
  FileStream stream = new FileStream("Output/" + attachment.FileName, FileMode.Create);
  stream.Write(attachment.Data, 0, attachment.Data.Length);
  stream.Dispose();
}
    
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf", "password");

//Accessing the attachments.
foreach (PdfAttachment attachment in document.Attachments)
{
  FileStream stream = new FileStream("Output/" + attachment.FileName, FileMode.Create);
  stream.Write(attachment.Data, 0, attachment.Data.Length);
  stream.Dispose();
}
    
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Interactive

' Load the PDF document.
Dim document As New PdfLoadedDocument("Input.pdf", "password")

' Accessing the attachments.
For Each attachment As PdfAttachment In document.Attachments
  Dim stream As New FileStream("Output/" & attachment.FileName, FileMode.Create)
  stream.Write(attachment.Data, 0, attachment.Data.Length)
  stream.Dispose()
Next

' Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Load-an-encrypt-only-attachment-document).

## Set user password using event when accessing the attachment

The following code example illustrates how to provide the password when accessing attachments from encrypt-only-attachment document using [OnPdfPasswordEventArgs](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.OnPdfPasswordEventArgs.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Security/Set-user-password-when-accessing-the-attachment/.NET/Set-user-password-when-accessing-the-attachment/Program.cs" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

document.OnPdfPassword += Document_OnPdfPassword;

//Accessing the attachments.
foreach (PdfAttachment attachment in document.Attachments)
{
  FileStream stream = new FileStream("Output/" + attachment.FileName, FileMode.Create);

  stream.Write(attachment.Data, 0, attachment.Data.Length);

  stream.Dispose();
}

//Close the document.
document.Close(true);

//Provide the user password in event. 
void Document_OnPdfPassword(object sender, OnPdfPasswordEventArgs args)
{
  args.UserPassword = "syncfusion";
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

document.OnPdfPassword += Document_OnPdfPassword;

//Accessing the attachments.
foreach (PdfAttachment attachment in document.Attachments)
{
  FileStream stream = new FileStream("Output/" + attachment.FileName, FileMode.Create);

  stream.Write(attachment.Data, 0, attachment.Data.Length);

  stream.Dispose();
}

//Close the document.
document.Close(true);

//Provide the user password in event. 
void Document_OnPdfPassword(object sender, OnPdfPasswordEventArgs args)
{
  args.UserPassword = "syncfusion";
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Interactive

' Load the PDF document.
Dim document As New PdfLoadedDocument("Input.pdf")

' Add the event handler for PDF password.
AddHandler document.OnPdfPassword, AddressOf Document_OnPdfPassword

' Accessing the attachments.
For Each attachment As PdfAttachment In document.Attachments
    Dim stream As New FileStream("Output/" & attachment.FileName, FileMode.Create)
    stream.Write(attachment.Data, 0, attachment.Data.Length)
    stream.Dispose()
Next

' Close the document.
document.Close(True)

' Provide the user password in event.
Private Sub Document_OnPdfPassword(sender As Object, args As OnPdfPasswordEventArgs)
  args.UserPassword = "syncfusion"
End Sub

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Set-user-password-when-accessing-the-attachment).

## Protect attachments in existing PDF document

The Syncfusion PDF Library supports encrypting only the attachment files in an existing PDF document  by specifying the [EncryptionOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_EncryptionOptions) property as **EncryptOnlyAttachments** option through [PdfEncryptionOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfEncryptionOptions.html) Enum in [PdfSecurity](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html) class. Refer to the following code snippet.

N> [UserPassword](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_UserPassword) is mandatory for this encryption option.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Security/Protect-attachments-in-existing-PDF-document/.NET/Protect-attachments-in-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

//PDF document security.
PdfSecurity security = document.Security; 
//Specifies encryption key size, algorithm and permission.
security.KeySize = PdfEncryptionKeySize.Key256Bit; 
security.Algorithm = PdfEncryptionAlgorithm.AES;
//Provide user password.
security.UserPassword = "password";
//Specifies encryption option.
security.EncryptionOptions = PdfEncryptionOptions.EncryptOnlyAttachments;

//Save the document.
document.Save("Output.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

//PDF document security.
PdfSecurity security = document.Security; 
//Specifies encryption key size, algorithm and permission.
security.KeySize = PdfEncryptionKeySize.Key256Bit; 
security.Algorithm = PdfEncryptionAlgorithm.AES; 
//Provide user password.
security.UserPassword = "password";
//Specifies encryption option.
security.EncryptionOptions = PdfEncryptionOptions.EncryptOnlyAttachments;

//Save the document.
document.Save("Output.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security

'Load the PDF document.        
Dim document As New PdfLoadedDocument("Input.pdf")

'PDF document security.
Dim security As PdfSecurity = document.Security
'Specifies encryption key size, algorithm and permission.
security.KeySize = PdfEncryptionKeySize.Key256Bit
security.Algorithm = PdfEncryptionAlgorithm.AES
'Provide user password.
security.UserPassword = "password"
'Specifies encryption option.
security.EncryptionOptions = PdfEncryptionOptions.EncryptOnlyAttachments

'Save the document.
document.Save("Output.pdf")
'Close the document
document.Close(true)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Protect-attachments-in-existing-PDF-document/).

## Protect an existing document

You can protect an existing PDF document with both [UserPassword](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_UserPassword) and [OwnerPassword](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_OwnerPassword) by using the following code snippet.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Security/Protect-an-existing-PDF-document/.NET/Protect-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

//PDF document security.
PdfSecurity security = document.Security;
//Specifies encryption key size, algorithm and permission. 
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = PdfEncryptionAlgorithm.AES;
//Provide owner and user password.
security.OwnerPassword = "ownerPassword256";
security.UserPassword = "userPassword256";

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

//PDF document security.
PdfSecurity security = document.Security;
//Specifies encryption key size, algorithm and permission.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = PdfEncryptionAlgorithm.AES;
//Provide owner and user password.
security.OwnerPassword = "ownerPassword256";
security.UserPassword = "userPassword256";

//Save the document.
document.Save("Output.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security

'Load an existing document.
Dim document As New PdfLoadedDocument("Input.pdf")

'PDF Document Security.
Dim security As PdfSecurity = document.Security
'Specifies key size and encryption algorithm using 256-bit key in AES mode.
security.KeySize = PdfEncryptionKeySize.Key256Bit
security.Algorithm = PdfEncryptionAlgorithm.AES
'Provide owner and user password.
security.OwnerPassword = "ownerPassword256"
security.UserPassword = "userPassword256"

'Save the document.
document.Save("Output.pdf")
'Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Protect-an-existing-PDF-document/).

## Changing the password of the PDF document

You can change the [UserPassword](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_UserPassword) of the existing PDF document by using following code snippet.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Security/Change-password-of-the-PDF-document/.NET/Change-password-of-the-PDF-document/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf", "password");
//Change the user password 
loadedDocument.Security.UserPassword = "NewPassword";

//Save the password changed PDF document.
loadedDocument.Save("Output.pdf");
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the password protected PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf","password");
//Change the user password.
loadedDocument.Security.UserPassword = "NewPassword";

//Save the password changed PDF document.
loadedDocument.Save("Output.pdf");
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security

'Load the password protected PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf", "password")
'Change the user password 
loadedDocument.Security.UserPassword = "NewPassword"

'Save the password changed PDF document
loadedDocument.Save("Output.pdf")
'Close the document
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Change-password-of-the-PDF-document/).

## Change the permission of the PDF document

You can change the permission of the PDF document using the [Permissions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_Permissions). The following code snippet illustrates the same.

<table>
  <thead>
    <tr>
      <th>Permission Flag</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>PdfPermissionsFlags.Print</b></td>
      <td>Grants permission to print the document.</td>
    </tr>
    <tr>
      <td><b>PdfPermissionsFlags.EditContent</b></td>
      <td>Grants permission to modify the content.</td>
    </tr>
    <tr>
      <td><b>PdfPermissionsFlags.CopyContent</b></td>
      <td>Allows copying content from the document (e.g., text or images).</td>
    </tr>
    <tr>
      <td><b>PdfPermissionsFlags.EditAnnotations</b></td>
      <td>Allows modification of annotations, such as highlights or comments.</td>
    </tr>
    <tr>
      <td><b>PdfPermissionsFlags.FillFields</b></td>
      <td>Allows filling out interactive form fields.</td>
    </tr>
    <tr>
      <td><b>PdfPermissionsFlags.AssembleDocument</b></td>
      <td>Allows the document to be used in an assembly (i.e., modifying or interacting with the file).</td>
    </tr>
    <tr>
      <td><b>PdfPermissionsFlags.AccessibilityCopyContent</b></td>
      <td>Allows accessibility content copying.</td>
    </tr>
    <tr>
      <td><b>PdfPermissionsFlags.FullQualityPrint</b></td>
      <td>Allows printing in full quality.</td>
    </tr>
    <tr>
      <td><b>PdfPermissionsFlags.Default</b></td>
      <td>The document has no restrictions.</td>
    </tr>
  </tbody>
</table>

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Security/Change-the-permission-of-the-PDF-document/.NET/Change-the-permission-of-the-PDF-document/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf", "syncfusion");
//Change the permission
loadedDocument.Security.Permissions = PdfPermissionsFlags.CopyContent | PdfPermissionsFlags.AssembleDocument;

//Save and Close the PDF document
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the password protected PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf", "syncfusion");
//Change the permission
loadedDocument.Security.Permissions = PdfPermissionsFlags.CopyContent | PdfPermissionsFlags.AssembleDocument;

//Save and Close the PDF document
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security

'Load the password protected PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf", "syncfusion")
'Change the permission
loadedDocument.Security.Permissions = PdfPermissionsFlags.CopyContent Or PdfPermissionsFlags.AssembleDocument

'Save and Close the PDF document
loadedDocument.Save("Output.pdf")
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Change-the-permission-of-the-PDF-document/).

## View document permission flags

Read the permission flags of a PDF document using the [Security.Permissions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_Permissions) property, which returns a bitwise combination of values from the [PdfPermissionsFlags](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfPermissionsFlags.html) enumeration.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Security/PDF-permission-viewer/.NET/PDF-permission-viewer/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

// Load an existing PDF
using (PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf"))
{
    // Access the document security settings
    PdfSecurity security = loadedDocument.Security;
    // Get the permission flags (bitwise enum)
    PdfPermissionsFlags permissions = security.Permissions;
    Console.WriteLine("Permissions in the document:");
    // Enumerate all flags and print the enabled ones
    foreach (PdfPermissionsFlags flag in Enum.GetValues(typeof(PdfPermissionsFlags)))
    {
      // Skip None (0)
      if (flag == 0) continue; 
      // Check whether the specific flag is set
      if (permissions.HasFlag(flag))
      {
        Console.WriteLine($"- {flag}");
      }
    }
}

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

// Load an existing PDF
using (PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf"))
{
    // Access the document security settings
    PdfSecurity security = loadedDocument.Security;
    // Get the permission flags (bitwise enum)
    PdfPermissionsFlags permissions = security.Permissions;
    Console.WriteLine("Permissions in the document:");
    // Enumerate all flags and print the enabled ones
    foreach (PdfPermissionsFlags flag in Enum.GetValues(typeof(PdfPermissionsFlags)))
    {
      // Skip None (0)
      if (flag == 0) continue; 
      // Check whether the specific flag is set
      if (permissions.HasFlag(flag))
      {
        Console.WriteLine($"- {flag}");
      }
    }
}

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security

' Load an existing PDF
Using loadedDocument As New PdfLoadedDocument("Input.pdf")
    ' Access the document security settings
    Dim security As PdfSecurity = loadedDocument.Security
    ' Get the permission flags (bitwise enum)
    Dim permissions As PdfPermissionsFlags = security.Permissions
    Console.WriteLine("Permissions in the document:")
    ' Enumerate all flags and print the enabled ones
    For Each flag As PdfPermissionsFlags In [Enum].GetValues(GetType(PdfPermissionsFlags))
        If flag = 0 Then
            Continue For ' Skip None (0)
        End If
        ' Check whether the specific flag is set
        If permissions.HasFlag(flag) Then
          Console.WriteLine($"- {flag}")
        End If
    Next
End Using

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/PDF-permission-viewer/.NET).

## Remove password from the user password PDF document

You can remove the [UserPassword](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_UserPassword) from the encrypted PDF document by using the following code snippet.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Security/Remove-password-from-user-password-PDF-document/.NET/Remove-password-from-user-password-PDF-document/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf", "password");
//Change the user password
loadedDocument.Security.UserPassword = string.Empty;

//Save and Close the PDF document
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the password protected PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf","password");
//Change the user password 
loadedDocument.Security.UserPassword = string.Empty;

//Save the password removed PDF document
loadedDocument.Save("Output.pdf");
//Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security

'Load the password protected PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf", "password")
'Change the user password 
loadedDocument.Security.UserPassword = String.Empty

'Save the password removed PDF document
loadedDocument.Save("Output.pdf")
'Close the document
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Remove-password-from-user-password-PDF-document/).

## How to determine whether the PDF document is password protected or not?

You can determine whether the existing PDF document is password protected or not by catching the [PdfDocumentException](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentException.html) as shown below.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Security/Determine-whether-the-PDF-is-protected-or-not/.NET/Determine-whether-the-PDF-is-protected-or-not/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

try
{
    //Load the PDF document
    PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
}
catch (PdfDocumentException exception)
{
    if (exception.Message == "Can't open an encrypted document. The password is invalid.")
    {
        MessageBox.Show("Cannot open an encrypted document without password");
    }
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

try
{
    //Load the PDF document
    PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
}
catch (PdfDocumentException exception)
{
    if (exception.Message == "Can't open an encrypted document. The password is invalid.")
    {
        MessageBox.Show("Cannot open an encrypted document without password");
    }
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

Try
	'Load the password protected PDF document without user password
	Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
Catch exception As PdfDocumentException
	If exception.Message = "Can't open an encrypted document. The password is invalid." Then
		MessageBox.Show("Cannot open an encrypted document without password")
	End If
End Try

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Determine-whether-the-PDF-is-protected-or-not/).

## How to determine whether the PDF document is protected by user or owner password

Essential<sup>&reg;</sup> PDF supports identifying whether a document is protected by a user or owner password.

The following table shows the various combination for loading the secured document with user or owner password:

<table>
  <thead>
    <tr>
      <th>Document Type</th>
      <th>Open With</th>
      <th>User Password</th>
      <th>Owner Password</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PDF document secured with both the owner and user passwords.</td>
      <td>User password</td>
      <td>Returns user password</td>
      <td>Returns null</td>
    </tr>
    <tr>
      <td>PDF document secured with both the owner and user passwords.</td>
      <td>Owner password</td>
      <td>Returns user password <br/><br/><b>Note:</b> Returns null for AES 256 and AES 256 Revision 6 encryptions.</td>
      <td>Returns owner password</td>
    </tr>
    <tr>
      <td>PDF document secured with owner password alone.</td>
      <td>Owner password</td>
      <td>Returns null</td>
      <td>Returns owner password</td>
    </tr>
    <tr>
      <td>PDF document secured with user password alone.</td>
      <td>User password</td>
      <td>Returns user password</td>
      <td>Returns owner password (owner password is same as the user password; it allows full permission to users).</td>
    </tr>
  </tbody>
</table>