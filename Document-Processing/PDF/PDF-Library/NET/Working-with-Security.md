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

`PdfTrustedListProvider` in `Syncfusion.Pdf.Security` authenticates the EU LOTL and referenced national lists to evaluate certificate trust under eIDAS. Accepting a PDF signature also requires revocation and signature integrity checks.

### Load trusted lists and validate a certificate

Configure a writable cache in `PdfTrustedListSettings`, create the provider, and call `Load()`. Check the load result, then call `ValidateCertificate` with the certificate and validation options.

{% tabs %}

{% highlight c# tabtitle="C#" %}

using System;
using System.Security.Cryptography.X509Certificates;
using Syncfusion.Pdf.Security;

// 1. Initialize and load EU List of Trusted Lists
PdfTrustedListSettings settings = new PdfTrustedListSettings();
settings.CacheDirectory = @"C:\AppData\LOTLCache";
settings.CacheValidity = TimeSpan.FromDays(7);
settings.IncludedCountries.Add("DE"); // Germany
settings.IncludedCountries.Add("FR"); // France
   
PdfTrustedListProvider provider = new PdfTrustedListProvider(settings);
provider.Load();
PdfTrustedListLoadResult loadResult = provider.LoadResult;

if (loadResult.Status == PdfTrustedListStatus.Valid || loadResult.Status == PdfTrustedListStatus.PartiallyValid)
{
    // 2. Validate signer certificate against qualified trust services
    X509Certificate2 cert = new X509Certificate2("eidas_signer.cer");
    PdfTrustedCertificateValidationOptions valOptions = new PdfTrustedCertificateValidationOptions();
    valOptions.Usage = PdfTrustedCertificateUsage.Signature;

    PdfTrustedListValidationResult valResult = provider.ValidateCertificate(cert, valOptions);

    Console.WriteLine($"EU Trust Status: {valResult.IsTrusted}, Qualified: {valResult.IsQualified}");
    if (valResult.TrustedService != null)
    {
        Console.WriteLine($"TSP Name: {valResult.TrustedService.ServiceProviderName}");
        Console.WriteLine($"Service Name: {valResult.TrustedService.ServiceName}");
        Console.WriteLine($"Service Type: {valResult.TrustedService.ServiceType}");
        Console.WriteLine($"Status: {valResult.TrustedService.ServiceStatus}");
    }
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

Imports System
Imports System.Security.Cryptography.X509Certificates
Imports Syncfusion.Pdf.Security

Dim settings As New PdfTrustedListSettings()
settings.CacheDirectory = "C:\AppData\LOTLCache"
settings.CacheValidity = TimeSpan.FromDays(7)

settings.IncludedCountries.Add("DE") ' Germany
settings.IncludedCountries.Add("FR") ' France

Dim provider As New PdfTrustedListProvider(settings)
provider.Load()

Dim loadResult As PdfTrustedListLoadResult = provider.LoadResult

If loadResult.Status = PdfTrustedListStatus.Valid OrElse
   loadResult.Status = PdfTrustedListStatus.PartiallyValid Then

    ' 2. Validate signer certificate against qualified trust services
    Dim cert As New X509Certificate2("eidas_signer.cer")

    Dim valOptions As New PdfTrustedCertificateValidationOptions()
    valOptions.Usage = PdfTrustedCertificateUsage.Signature

    Dim valResult As PdfTrustedListValidationResult =
        provider.ValidateCertificate(cert, valOptions)

    Console.WriteLine($"EU Trust Status: {valResult.IsTrusted}, Qualified: {valResult.IsQualified}")

    If valResult.TrustedService IsNot Nothing Then
        Console.WriteLine($"TSP Name: {valResult.TrustedService.ServiceProviderName}")
        Console.WriteLine($"Service Name: {valResult.TrustedService.ServiceName}")
        Console.WriteLine($"Service Type: {valResult.TrustedService.ServiceType}")
        Console.WriteLine($"Status: {valResult.TrustedService.ServiceStatus}")
    End If
End If

{% endhighlight %}

{% endtabs %}

N> Successful loading does not mean a certificate is trusted. Inspect `PdfTrustedListValidationResult.Status`, `Service`, `Path`, and `Log`. Certificate trust alone proves neither PDF signature validity nor qualified electronic signature status.


### Load trusted lists offline

Set `AllowOnlineFetch` and `AutoRefresh` to `false`, then call `provider.Load(directoryPath)` with local LOTL and national list XML files. These files are still authenticated; provision and update them through a trusted process.

{% tabs %}

{% highlight c# tabtitle="C#" %}

using System;
using System.IO;
using System.Security.Cryptography.X509Certificates;
using Syncfusion.Pdf.Security;

 PdfTrustedListSettings settings = new PdfTrustedListSettings();
 settings.AllowOnlineFetch = false;
 settings.AutoRefresh = false;
 settings.CountryFailureAction = PdfTrustedListCountryFailureAction.Throw;

 PdfTrustedListProvider provider = new PdfTrustedListProvider(settings);
 provider.Load(Path.Combine(Environment.CurrentDirectory, "TrustedLists"));
 PdfTrustedListLoadResult loadResult = provider.LoadResult;
 Console.WriteLine("Load status: " + loadResult.Status);

 if (loadResult.Status == PdfTrustedListStatus.Valid)
 {
     using (X509Certificate2 certificate = new X509Certificate2("signer.cer"))
     {
         PdfTrustedCertificateValidationOptions options =
             new PdfTrustedCertificateValidationOptions();
         options.Usage = PdfTrustedCertificateUsage.Signature;
         options.ValidationTime = DateTime.UtcNow;
         // Trusted-list options do not expose revocation controls; use PdfCertificateValidator for offline revocation validation.

         PdfTrustedListValidationResult result =
             provider.ValidateCertificate(certificate, options);
         Console.WriteLine($"Certificate trusted: {result.IsTrusted}, Qualified: {result.IsQualified}");
         foreach (PdfTrustedCertificatePathElement entry in result.CertificatePath)
         {
             Console.WriteLine($"{entry.Certificate.Subject}: source={entry.Source}, trust anchor={entry.IsTrustAnchor}");
         }
         foreach (PdfSignatureValidationException error in result.Errors)
         {
             Console.WriteLine(error.Message);
         }
         foreach (string warning in result.Warnings)
         {
             Console.WriteLine(warning);
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

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

Imports System
Imports System.IO
Imports System.Security.Cryptography.X509Certificates
Imports Syncfusion.Pdf.Security

Dim settings As New PdfTrustedListSettings()
settings.AllowOnlineFetch = False
settings.AutoRefresh = False
settings.CountryFailureAction = PdfTrustedListCountryFailureAction.Throw

Dim provider As New PdfTrustedListProvider(settings)
provider.Load(Path.Combine(Environment.CurrentDirectory, "TrustedLists"))

Dim loadResult As PdfTrustedListLoadResult = provider.LoadResult

Console.WriteLine("Load status: " & loadResult.Status)

If loadResult.Status = PdfTrustedListStatus.Valid Then

    Using certificate As New X509Certificate2("signer.cer")

        Dim options As New PdfTrustedCertificateValidationOptions()
        options.Usage = PdfTrustedCertificateUsage.Signature
        options.ValidationTime = DateTime.UtcNow

        ' Trusted-list options do not expose revocation controls;
        ' use PdfCertificateValidator for offline revocation validation.

        Dim result As PdfTrustedListValidationResult =
            provider.ValidateCertificate(certificate, options)

        Console.WriteLine($"Certificate trusted: {result.IsTrusted}, Qualified: {result.IsQualified}")

        For Each entry As PdfTrustedCertificatePathElement In result.CertificatePath
            Console.WriteLine($"{entry.Certificate.Subject}: source={entry.Source}, trust anchor={entry.IsTrustAnchor}")
        Next

        For Each [error] As PdfSignatureValidationException In result.Errors
            Console.WriteLine([error].Message)
        Next

        For Each warning As String In result.Warnings
            Console.WriteLine(warning)
        Next

    End Using

Else

    For Each [error] As String In loadResult.Errors
        Console.WriteLine([error])
    Next

End If

{% endhighlight %}

{% endtabs %}

N> List downloads and revocation checks have separate settings. This example disables both online list fetching and online revocation requests; it does not skip revocation checking. Missing revocation information does not prove that a certificate has not been revoked. Inspect path statuses and logs before accepting the result.


### Use trusted lists during PDF signature validation

Assign the loaded provider to `PdfSignatureValidationOptions.TrustedListProvider`. Inspect `PdfSignatureValidationResult.TrustedListResult` alongside the overall result; it is `null` when trusted lists were not used.

The following example validates a PDF signature using EU trusted lists and a caller-supplied OCSP response. Replace the PDF path, signature field name, and OCSP response file with your inputs.

{% tabs %}

{% highlight c# tabtitle="C#" %}

using System;
using System.IO;
using System.Collections.Generic;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

 PdfTrustedListProvider trustedLists = new PdfTrustedListProvider();
 trustedLists.Load();

 // 2. Configure signature validation options
 PdfSignatureValidationOptions valOptions = new PdfSignatureValidationOptions();
 valOptions.TrustedListProvider = trustedLists;
 // Inject pre-fetched OCSP response for offline or restricted proxy validation
 valOptions.OCSPResponseData = new List<byte[]> { File.ReadAllBytes("signer_ocsp.der") };

 using (PdfLoadedDocument doc = new PdfLoadedDocument("signed_document.pdf"))
 {
     PdfLoadedSignatureField sigField = doc.Form.Fields["Signature1"] as PdfLoadedSignatureField;
     if (sigField != null)
     {
         PdfSignatureValidationResult result = sigField.ValidateSignature(valOptions);

         Console.WriteLine($"Signature Valid: {result.IsSignatureValid}");
         if (result.TrustedListResult != null)
         {
             Console.WriteLine($"eIDAS Qualified Trust Status: {result.TrustedListResult.IsTrusted}, Qualified: {result.TrustedListResult.IsQualified}");
             if (result.TrustedListResult.TrustedService != null)
             {
                 Console.WriteLine($"Service: {result.TrustedListResult.TrustedService.ServiceName}");
             }
         }
     }
 }

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

Imports System
Imports System.IO
Imports System.Collections.Generic
Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security

' 1. Load trusted lists
Dim trustedLists As New PdfTrustedListProvider()
trustedLists.Load()

' 2. Configure signature validation options
Dim valOptions As New PdfSignatureValidationOptions()
valOptions.TrustedListProvider = trustedLists

' Inject pre-fetched OCSP response for offline or restricted proxy validation
valOptions.OCSPResponseData = New List(Of Byte()) From {
    File.ReadAllBytes("signer_ocsp.der")
}

Using doc As New PdfLoadedDocument("signed_document.pdf")

    Dim sigField As PdfLoadedSignatureField =
        TryCast(doc.Form.Fields("Signature1"), PdfLoadedSignatureField)

    If sigField IsNot Nothing Then

        Dim result As PdfSignatureValidationResult =
            sigField.ValidateSignature(valOptions)

        Console.WriteLine($"Signature Valid: {result.IsSignatureValid}")

        If result.TrustedListResult IsNot Nothing Then

            Console.WriteLine(
                $"eIDAS Qualified Trust Status: {result.TrustedListResult.IsTrusted}, Qualified: {result.TrustedListResult.IsQualified}")

            If result.TrustedListResult.TrustedService IsNot Nothing Then
                Console.WriteLine(
                    $"Service: {result.TrustedListResult.TrustedService.ServiceName}")
            End If

        End If

    End If

End Using

{% endhighlight %}

{% endtabs %}

N> Supplying an OCSP response does not disable network access. This example loads trusted lists using the default online settings. Check the trusted list load result before relying on its trust information.

## Validate a certificate chain

`PdfCertificateValidator` in `Syncfusion.Pdf.Security` validates X.509 chains and revocation without a PDF, following RFC 5280 and RFC 6960.

Configure trusted anchors, intermediates, revocation evidence, and validation policy in `PdfCertificateValidationOptions`. Call `PdfCertificateValidator.Validate`, then inspect the status, chain entries.

### Validate using caller-supplied certificates and revocation data

Replace the sample certificate and revocation files with yours. Revocation files must be binary DER, not PEM or Base64 text. 

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
         new PdfCertificateValidator().Validate(certificate, options);
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

    options.TrustedCertificates = New X509Certificate2Collection From {
        root
    }

    options.IntermediateCertificates = New X509Certificate2Collection From {
        intermediate
    }

    options.OcspResponses = New List(Of Byte()) From {
        File.ReadAllBytes("signer_ocsp.der")
    }

    options.Crls = New List(Of Byte()) From {
        File.ReadAllBytes("issuer_crl.der")
    }

    options.ValidationTime = DateTime.UtcNow
    options.AllowOnlineRevocationCheck = False

    Dim result As PdfCertificateValidationResult =
        New PdfCertificateValidator().Validate(certificate, options)

    Console.WriteLine("Certificate chain status: " & result.Status)

    For Each entry As PdfCertificateValidationEntry In result.Certificates

        Console.WriteLine(entry.Certificate.Subject & ": " & entry.Status)

        For Each reason As PdfCertificateStatusReason In entry.Reasons
            Console.WriteLine("Reason: " & reason)
        Next

        If entry.RevocationTime.HasValue Then
            Console.WriteLine("Revoked at (UTC): " & entry.RevocationTime.Value)
        End If

    Next

    For Each message As String In result.Log
        Console.WriteLine(message)
    Next

End Using
{% endhighlight %}

{% endtabs %}

N> Add only explicitly trusted anchors to `TrustedCertificates`, never unverified input certificates. `IntermediateCertificates` helps build a path but grants no trust.

## Supply caller-provided OCSP and CRL data for PDF signature validation

Set `PdfSignatureValidationOptions.OCSPResponseData` and `CRLResponseData` in `Syncfusion.Pdf.Parsing` to supply external revocation evidence. It supplements evidence in the signature and DSS. Both default to null; unusable items are ignored. Supplied data alone does not prove signature validity or complete revocation coverage.

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


## Create offline LTV using document security store data

Use `PdfDocumentSecureStore` to extract existing revocation records and pass them to `CreateLongTermValidity` through `PdfLongTermValidityOptions`. Set `OfflineOnly` to `true` to suppress online revocation discovery.

{% tabs %}

{% highlight c# tabtitle="C#" %}

using System.IO;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Security;
using Syncfusion.Pdf.Parsing;

List<byte[]> extractedOcsps = new List<byte[]>();
List<byte[]> extractedCrls = new List<byte[]>();
using (PdfLoadedDocument ltvDoc = new PdfLoadedDocument("existing_ltv.pdf"))
{
    PdfDocumentSecureStore dss = ltvDoc.DocumentSecureStore;
    foreach (byte[] ocsp in dss.OcspResponses)
    {
        extractedOcsps.Add(ocsp);
    }
    foreach (byte[] crl in dss.Crls)
    {
        extractedCrls.Add(crl);
    }
}

using (PdfLoadedDocument loadedDocument = new PdfLoadedDocument("existing_ltv.pdf"))
using (X509Certificate2 signer = new X509Certificate2(Path.GetFullPath("Data/signer.cer")))
using (X509Certificate2 intermediate = new X509Certificate2(Path.GetFullPath("Data/intermediate.cer")))
using (X509Certificate2 root = new X509Certificate2(Path.GetFullPath("Data/root.cer")))
{
    PdfLoadedSignatureField signatureField =
        loadedDocument.Form.Fields[0] as PdfLoadedSignatureField;
    PdfSignature pdfSignature = signatureField.Signature;

    PdfLongTermValidityOptions options = new PdfLongTermValidityOptions();
    options.OcspResponses = extractedOcsps;
    options.Crls = extractedCrls;
    options.IncludePublicCertificates = true;
    options.OfflineOnly = true;

    pdfSignature.CreateLongTermValidity(
        new List<X509Certificate2> { signer, intermediate, root }, options);

    loadedDocument.Save("OfflineLTVDocument.pdf");
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

Imports System.IO
Imports System.Collections.Generic
Imports System.Security.Cryptography.X509Certificates
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Security
Imports Syncfusion.Pdf.Parsing

Dim extractedOcsps As New List(Of Byte())()
Dim extractedCrls As New List(Of Byte())()
Using ltvDoc As New PdfLoadedDocument("existing_ltv.pdf")
    Dim dss As PdfDocumentSecureStore = ltvDoc.DocumentSecureStore
    For Each ocsp As Byte() In dss.OcspResponses
        extractedOcsps.Add(ocsp)
    Next
    For Each crl As Byte() In dss.Crls
        extractedCrls.Add(crl)
    Next
End Using

Using loadedDocument As New PdfLoadedDocument("existing_ltv.pdf"),
      signer As New X509Certificate2(Path.GetFullPath("Data/signer.cer")),
      intermediate As New X509Certificate2(Path.GetFullPath("Data/intermediate.cer")),
      root As New X509Certificate2(Path.GetFullPath("Data/root.cer"))
    Dim signatureField As PdfLoadedSignatureField =
        TryCast(loadedDocument.Form.Fields(0), PdfLoadedSignatureField)
    Dim pdfSignature As PdfSignature = signatureField.Signature

    Dim options As New PdfLongTermValidityOptions()
    options.OcspResponses = extractedOcsps
    options.Crls = extractedCrls
    options.IncludePublicCertificates = True
    options.OfflineOnly = True

    pdfSignature.CreateLongTermValidity(
        New List(Of X509Certificate2) From {signer, intermediate, root}, options)

    loadedDocument.Save("OfflineLTVDocument.pdf")
End Using

{% endhighlight %}

{% endtabs %}

N> Extracted records must apply to the target signature's certificate chain and validation time. Reusing DSS data does not by itself establish complete LTV evidence or a valid signature. This example updates an existing signature's LTV information; it does not create a new signature.


### Add lock options to an unsigned signature field 

This example selects applicant fields for locking when the approval field is signed, leaving manager comments outside this lock policy.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Security;

using (PdfDocument document = new PdfDocument())
{
    PdfPage page = document.Pages.Add();

    PdfTextBoxField applicantName = new PdfTextBoxField(page, "Applicant.Name");
    applicantName.Bounds = new RectangleF(50, 50, 200, 25);
    document.Form.Fields.Add(applicantName);

    PdfTextBoxField applicantDepartment =
        new PdfTextBoxField(page, "Applicant.Department");
    applicantDepartment.Bounds = new RectangleF(50, 90, 200, 25);
    document.Form.Fields.Add(applicantDepartment);

    PdfTextBoxField managerComments = new PdfTextBoxField(page, "Manager.Comments");
    managerComments.Bounds = new RectangleF(50, 130, 200, 50);
    document.Form.Fields.Add(managerComments);

    PdfSignatureField approval = new PdfSignatureField(page, "ManagerApproval");
    approval.Bounds = new RectangleF(50, 200, 200, 50);
    approval.LockOptions = new PdfSignatureLockOptions(
        PdfSignatureLockAction.Include,
        new string[] { "Applicant.Name", "Applicant.Department" },
        PdfCertificationFlags.AllowFormFill);
    document.Form.Fields.Add(approval);

    document.Save("ApprovalTemplate.pdf");
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Security

Using document As New PdfDocument()
    Dim page As PdfPage = document.Pages.Add()

    Dim applicantName As New PdfTextBoxField(page, "Applicant.Name")
    applicantName.Bounds = New RectangleF(50, 50, 200, 25)
    document.Form.Fields.Add(applicantName)

    Dim applicantDepartment As New PdfTextBoxField(page, "Applicant.Department")
    applicantDepartment.Bounds = New RectangleF(50, 90, 200, 25)
    document.Form.Fields.Add(applicantDepartment)

    Dim managerComments As New PdfTextBoxField(page, "Manager.Comments")
    managerComments.Bounds = New RectangleF(50, 130, 200, 50)
    document.Form.Fields.Add(managerComments)

    Dim approval As New PdfSignatureField(page, "ManagerApproval")
    approval.Bounds = New RectangleF(50, 200, 200, 50)
    approval.LockOptions = New PdfSignatureLockOptions(
        PdfSignatureLockAction.Include,
        New String() {"Applicant.Name", "Applicant.Department"},
        PdfCertificationFlags.AllowFormFill)
    document.Form.Fields.Add(approval)

    document.Save("ApprovalTemplate.pdf")
End Using

{% endhighlight %}

{% endtabs %}


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