---
title: Working with Security | Syncfusion
description: Learn how to protect PDF documents using RC4, AES, and AES-GCM encryption, set user and owner passwords, define permission flags, and decrypt or load protected PDF documents.
platform: document-processing
control: PDF
documentation: UG
---

# Working with PDF Security

Essential<sup>&reg;</sup> PDF enables you to [secure PDF documents](https://www.syncfusion.com/document-processing/pdf-framework/net/pdf-library/protect-pdf) using various encryption algorithms while defining specific permissions such as printing, editing, and copying content. You can apply both a user password (document open password) and an owner password (permission password) for enhanced protection.

Watch the following video to learn how to encrypt and decrypt PDF documents using the .NET PDF Library.

{% youtube "https://www.youtube.com/watch?v=aGVDvIf3ODI" %}

The two supported encryption algorithm families are:

1. Rivest Cipher 4 (RC4)
2. Advanced Encryption Standard (AES) — including AES-GCM

## Working with RC4 encryption

You can encrypt a PDF document by specifying the [Algorithm](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_Algorithm) property as `RC4` through the [PdfEncryptionAlgorithm](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfEncryptionAlgorithm.html) enum and the [KeySize](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_KeySize) property as `Key40Bit` or `Key128Bit` through the [PdfEncryptionKeySize](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfEncryptionKeySize.html) enum on the [PdfSecurity](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html) object returned by the [Security](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html#Syncfusion_Pdf_PdfDocument_Security) property of [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html). The following code snippet illustrates how to encrypt the PDF document with a [UserPassword](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_UserPassword).

**User password:** Prevents people from opening or viewing a PDF document. Once the user password is set, Adobe Acrobat/Reader prompts for this password to open the document. If the password is not correct, the document will not open.

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

//Get the document security.
PdfSecurity security = document.Security;
//Specify the key size and encryption algorithm.
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

//Get the document security.
PdfSecurity security = document.Security;
//Specify the key size and encryption algorithm.
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

'Get the document security.
Dim security As PdfSecurity = document.Security
'Specify the key size and encryption algorithm.
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

N> When using both user and owner passwords, specify different values for the user and owner passwords while encrypting the PDF document for better security.

You can protect the PDF document from printing, editing, and copying by setting the [OwnerPassword](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_OwnerPassword) and [Permissions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_Permissions) properties, as shown in the following code snippet.

**Owner password:** Sets PDF document restrictions, which include printing, content copying, editing, page extracting, commenting, and more. Once the owner password is set, Acrobat requires this password to make any changes to the PDF document.

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

//Get the document security.
PdfSecurity security = document.Security;
//Specify the key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key128Bit;
security.Algorithm = PdfEncryptionAlgorithm.RC4;
//Set the owner password to control permissions.
security.OwnerPassword = "syncfusion";
//Allow printing and accessibility copy content.
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

//Get the document security.
PdfSecurity security = document.Security;
//Specify the key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key128Bit;
security.Algorithm = PdfEncryptionAlgorithm.RC4;
//Set the owner password to control permissions.
security.OwnerPassword = "syncfusion";
//Allow printing and accessibility copy content.
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

'Get the document security.
Dim security As PdfSecurity = document.Security
'Specify the key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key128Bit
security.Algorithm = PdfEncryptionAlgorithm.RC4
'Set the owner password to control permissions.
security.OwnerPassword = "syncfusion"
'Allow printing and accessibility copy content.
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

## Working with AES encryption

You can encrypt a PDF document by specifying the [Algorithm](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_Algorithm) property as `AES` through the [PdfEncryptionAlgorithm](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfEncryptionAlgorithm.html) enum and the [KeySize](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_KeySize) property as `Key40Bit`, `Key128Bit`, or `Key256Bit` through the [PdfEncryptionKeySize](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfEncryptionKeySize.html) enum on the [PdfSecurity](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html) class. The following code snippet illustrates how to encrypt the PDF document with a [UserPassword](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_UserPassword).

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

//Get the document security.
PdfSecurity security = document.Security;
//Specify the key size and encryption algorithm.
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

//Get the document security.
PdfSecurity security = document.Security;
//Specify the key size and encryption algorithm.
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

'Get the document security.
Dim security As PdfSecurity = document.Security
'Specify the key size and encryption algorithm.
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

You can protect the PDF document from printing, editing, and copying by setting the [OwnerPassword](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_OwnerPassword) and [Permissions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_Permissions) properties, as shown in the following code snippet.

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

//Get the document security.
PdfSecurity security = document.Security;
//Specify the key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = PdfEncryptionAlgorithm.AES;
//Set the owner password to control permissions.
security.OwnerPassword = "syncfusion";
//Allow printing and accessibility copy content.
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

//Get the document security.
PdfSecurity security = document.Security;
//Specify the key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = PdfEncryptionAlgorithm.AES;
//Set the owner password to control permissions.
security.OwnerPassword = "syncfusion";
//Allow printing and accessibility copy content.
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

'Get the document security.
Dim security As PdfSecurity = document.Security
'Specify the key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key256Bit
security.Algorithm = PdfEncryptionAlgorithm.AES
'Set the owner password to control permissions.
security.OwnerPassword = "syncfusion"
'Allow printing and accessibility copy content.
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

To encrypt a PDF document using AES-GCM, set the [Algorithm](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_Algorithm) property to `AESGCM` through the [PdfEncryptionAlgorithm](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfEncryptionAlgorithm.html) enum and the [KeySize](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_KeySize) property to `Key256Bit` through the [PdfEncryptionKeySize](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfEncryptionKeySize.html) enum in the [PdfSecurity](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html) class. AES-GCM provides authenticated encryption that detects any modification of the encrypted data.

N> AES-GCM encryption is supported only in PDF version 2.0. Ensure that the [Version](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfFileStructure.html#Syncfusion_Pdf_PdfFileStructure_Version) property of the [FileStructure](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfFileStructure.html) is set to [PdfVersion.Version2_0](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfVersion.html) before saving.

Refer to the following code example for further details.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Security/Secure_data%20_with%20_AES_GCM/.NET/Secure_data%20_with%20_AES_GCM/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Security;

//Create a new PDF document.
PdfDocument document = new PdfDocument();

//Set the document version to 2.0.
document.FileStructure.Version = PdfVersion.Version2_0;

//Add a page to the document.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Set the font.
PdfStandardFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 15f, PdfFontStyle.Bold);
//Set the brush.
PdfBrush brush = PdfBrushes.Black;

//Draw the text.
graphics.DrawString("Encrypted document with AES-GCM 256bit", font, brush, new PointF(0, 40));

//Get the document security.
PdfSecurity security = document.Security;
//Specify the key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = PdfEncryptionAlgorithm.AESGCM;

//Set the owner and user passwords.
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

//Set the document version to 2.0.
document.FileStructure.Version = PdfVersion.Version2_0;

//Add a page to the document.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Set the font.
PdfStandardFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 15f, PdfFontStyle.Bold);
//Set the brush.
PdfBrush brush = PdfBrushes.Black;

//Get the document security.
PdfSecurity security = document.Security;
//Specify the key size and encryption algorithm.
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

'Create a new PDF document.
Dim document As PdfDocument = New PdfDocument()

'Set the document version to 2.0.
document.FileStructure.Version = PdfVersion.Version2_0

'Add a page to the document.
Dim page As PdfPage = document.Pages.Add()
'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics
'Set the font.
Dim font As New PdfStandardFont(PdfFontFamily.TimesRoman, 20.0F, PdfFontStyle.Bold)
'Set the brush.
Dim brush As PdfBrush = PdfBrushes.Black

'Get the document security.
Dim security As PdfSecurity = document.Security
'Specify the key size and encryption algorithm.
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

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Secure_data_with_AES_GCM/.NET).

## Encryption options

The Syncfusion<sup>&reg;</sup> PDF library provides the following options to control which parts of the document are encrypted through the [EncryptionOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_EncryptionOptions) property of the [PdfSecurity](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html) class:

* **EncryptAllContents** — All contents of the document are encrypted. This is the default.
* **EncryptAllContentsExceptMetadata** — All contents are encrypted except the document information dictionary (metadata).
* **EncryptOnlyAttachments** — Only the file attachments are encrypted; the rest of the document is left unencrypted.

### Encrypt all contents

You can encrypt all the PDF content by specifying the [EncryptionOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_EncryptionOptions) property as `EncryptAllContents` through the [PdfEncryptionOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfEncryptionOptions.html) enum in the [PdfSecurity](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html) class. The following code snippet explains how to encrypt all contents of the PDF document.

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

//Get the document security.
PdfSecurity security = document.Security;
//Specify the key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = PdfEncryptionAlgorithm.AES;
//Specify the encryption option.
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

//Get the document security.
PdfSecurity security = document.Security;
//Specify the key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = PdfEncryptionAlgorithm.AES;
//Specify the encryption option.
security.EncryptionOptions = PdfEncryptionOptions.EncryptAllContents;
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

'Get the document security.
Dim security As PdfSecurity = document.Security
'Specify the key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key256Bit
security.Algorithm = PdfEncryptionAlgorithm.AES
'Specify the encryption option.
security.EncryptionOptions = PdfEncryptionOptions.EncryptAllContents
security.UserPassword = "password"
'Draw the text.
graphics.DrawString("Encrypted with AES 256bit", font, brush, New PointF(0, 40))

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Encrypt-all-contents-of-the-PDF-document/).

### Encrypt all contents except metadata

The Syncfusion<sup>&reg;</sup> PDF library supports encrypting the PDF document except the document information (metadata) by using the `EncryptAllContentsExceptMetadata` option. When this option is used, the document information dictionary is not encrypted.

You can encrypt all contents except metadata by specifying the [EncryptionOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_EncryptionOptions) property as `EncryptAllContentsExceptMetadata` through the [PdfEncryptionOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfEncryptionOptions.html) enum in the [PdfSecurity](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html) class. The following code snippet explains how to encrypt all contents except metadata of the PDF document.

N> `EncryptAllContentsExceptMetadata` is only supported by the AES algorithm with 128-bit, 256-bit, and 256-bit Revision 6 key sizes.

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

//Get the document security.
PdfSecurity security = document.Security;
//Specify the key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = PdfEncryptionAlgorithm.AES;
//Specify the encryption option.
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

//Get the document security.
PdfSecurity security = document.Security;
//Specify the key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = PdfEncryptionAlgorithm.AES;
//Specify the encryption option.
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

'Get the document security.
Dim security As PdfSecurity = document.Security
'Specify the key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key256Bit
security.Algorithm = PdfEncryptionAlgorithm.AES
'Specify the encryption option.
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

You can encrypt only the file attachments in the PDF document by specifying the [EncryptionOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_EncryptionOptions) property as `EncryptOnlyAttachments` through the [PdfEncryptionOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfEncryptionOptions.html) enum in the [PdfSecurity](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html) class.

The following code example explains how to create an encrypt-only-attachments document using the Syncfusion<sup>&reg;</sup> PDF Library.

N> [UserPassword](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_UserPassword) is mandatory for `EncryptOnlyAttachments`, and this option is only supported by the AES algorithm with 128-bit, 256-bit, and 256-bit Revision 6 key sizes.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Security/Encrypt-only-attachment-in-the-PDF-document/.NET/Encrypt-only-attachment-in-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
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

//Get the document security.
PdfSecurity security = document.Security;
//Specify the key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = PdfEncryptionAlgorithm.AES;
//Specify the encryption option.
security.EncryptionOptions = PdfEncryptionOptions.EncryptOnlyAttachments;
security.UserPassword = "password";
//Draw the text.
graphics.DrawString("Encrypted only attachments with AES 256bit", font, brush, new PointF(0, 40));

//Create an attachment.
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
using Syncfusion.Pdf.Interactive;
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

//Get the document security.
PdfSecurity security = document.Security;
//Specify the key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = PdfEncryptionAlgorithm.AES;
//Specify the encryption option.
security.EncryptionOptions = PdfEncryptionOptions.EncryptOnlyAttachments;
security.UserPassword = "password";
//Draw the text.
graphics.DrawString("Encrypted only attachments with AES 256bit", font, brush, new PointF(0, 40));

//Create an attachment.
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
Imports Syncfusion.Pdf.Interactive
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

'Get the document security.
Dim security As PdfSecurity = document.Security
'Specify the key size and encryption algorithm.
security.KeySize = PdfEncryptionKeySize.Key256Bit
security.Algorithm = PdfEncryptionAlgorithm.AES
'Specify the encryption option.
security.EncryptionOptions = PdfEncryptionOptions.EncryptOnlyAttachments
security.UserPassword = "password"
'Draw the text.
graphics.DrawString("Encrypted only attachments with AES 256bit", font, brush, New PointF(0, 40))

'Create an attachment.
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

## Decrypting an encrypted PDF document

The Syncfusion<sup>&reg;</sup> PDF library can decrypt an encrypted PDF document by removing its owner and user passwords and resetting its permissions to default. This is particularly useful when you need to access or modify a secured PDF.

The following code example demonstrates how to decrypt a PDF document and restore its default permissions.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Security/Decrypting-encrypted-PDF-document/.NET/Decrypting-encrypted-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the encrypted PDF document using the password that was used to encrypt it.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf", "syncfusion");

//Reset the document permissions to default (removes any restrictions).
loadedDocument.Security.Permissions = PdfPermissionsFlags.Default;

//Clear the owner and user passwords to decrypt the document.
loadedDocument.Security.OwnerPassword = string.Empty;
loadedDocument.Security.UserPassword = string.Empty;

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the encrypted PDF document using the password that was used to encrypt it.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf", "syncfusion");

//Reset the document permissions to default (removes any restrictions).
loadedDocument.Security.Permissions = PdfPermissionsFlags.Default;

//Clear the owner and user passwords to decrypt the document.
loadedDocument.Security.OwnerPassword = string.Empty;
loadedDocument.Security.UserPassword = string.Empty;

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security

'Load the encrypted PDF document using the password that was used to encrypt it.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf", "syncfusion")

'Reset the document permissions to default (removes any restrictions).
loadedDocument.Security.Permissions = PdfPermissionsFlags.Default

'Clear the owner and user passwords to decrypt the document.
loadedDocument.Security.OwnerPassword = String.Empty
loadedDocument.Security.UserPassword = String.Empty

'Save and close the document.
loadedDocument.Save("Output.pdf")
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Decrypting-encrypted-PDF-document/).

## Opening an encrypt-only-attachments document

The Syncfusion<sup>&reg;</sup> PDF library supports loading encrypt-only-attachments PDF documents. To access the attachments in such a document, the [UserPassword](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_UserPassword) is mandatory.

You can provide the [UserPassword](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_UserPassword) in either of the following ways:

* Load the PDF document with the password in the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) constructor.
* Provide the password through the [OnPdfPassword](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_OnPdfPassword) event when accessing the attachments.

All other document contents can be accessed without the [UserPassword](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_UserPassword).

The following code example explains how to load an encrypt-only-attachments document with the password.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Security/Load-an-encrypt-only-attachment-document/.NET/Load-an-encrypt-only-attachment-document/Program.cs" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document with the user password.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf", "password");

//Access the attachments.
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

//Load the PDF document with the user password.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf", "password");

//Access the attachments.
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

'Load the PDF document with the user password.
Dim document As New PdfLoadedDocument("Input.pdf", "password")

'Access the attachments.
For Each attachment As PdfAttachment In document.Attachments
    Dim stream As New FileStream("Output/" & attachment.FileName, FileMode.Create)
    stream.Write(attachment.Data, 0, attachment.Data.Length)
    stream.Dispose()
Next

'Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Load-an-encrypt-only-attachment-document).

## Setting the user password through the OnPdfPassword event

The following code example illustrates how to provide the password when accessing attachments from an encrypt-only-attachments document using the [OnPdfPasswordEventArgs](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.OnPdfPasswordEventArgs.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Set-user-password-when-accessing-the-attachment/.NET/Set-user-password-when-accessing-the-attachment/Program.cs" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

//Subscribe to the OnPdfPassword event to provide the password on demand.
document.OnPdfPassword += Document_OnPdfPassword;

//Access the attachments.
foreach (PdfAttachment attachment in document.Attachments)
{
    FileStream stream = new FileStream("Output/" + attachment.FileName, FileMode.Create);
    stream.Write(attachment.Data, 0, attachment.Data.Length);
    stream.Dispose();
}

//Close the document.
document.Close(true);

//Event handler to provide the user password.
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

//Subscribe to the OnPdfPassword event to provide the password on demand.
document.OnPdfPassword += Document_OnPdfPassword;

//Access the attachments.
foreach (PdfAttachment attachment in document.Attachments)
{
    FileStream stream = new FileStream("Output/" + attachment.FileName, FileMode.Create);
    stream.Write(attachment.Data, 0, attachment.Data.Length);
    stream.Dispose();
}

//Close the document.
document.Close(true);

//Event handler to provide the user password.
void Document_OnPdfPassword(object sender, OnPdfPasswordEventArgs args)
{
    args.UserPassword = "syncfusion";
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Interactive

'Load the PDF document.
Dim document As New PdfLoadedDocument("Input.pdf")

'Subscribe to the OnPdfPassword event to provide the password on demand.
AddHandler document.OnPdfPassword, AddressOf Document_OnPdfPassword

'Access the attachments.
For Each attachment As PdfAttachment In document.Attachments
    Dim stream As New FileStream("Output/" & attachment.FileName, FileMode.Create)
    stream.Write(attachment.Data, 0, attachment.Data.Length)
    stream.Dispose()
Next

'Close the document.
document.Close(True)

'Event handler to provide the user password.
Private Sub Document_OnPdfPassword(sender As Object, args As OnPdfPasswordEventArgs)
    args.UserPassword = "syncfusion"
End Sub

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Set-user-password-when-accessing-the-attachment).

## Protecting attachments in an existing PDF document

The Syncfusion PDF Library supports encrypting only the attachment files in an existing PDF document by specifying the [EncryptionOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_EncryptionOptions) property as `EncryptOnlyAttachments` through the [PdfEncryptionOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfEncryptionOptions.html) enum in the [PdfSecurity](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html) class. Refer to the following code snippet.

N> [UserPassword](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_UserPassword) is mandatory for this encryption option.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Security/Protect-attachments-in-existing-PDF-document/.NET/Protect-attachments-in-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

//Get the document security.
PdfSecurity security = document.Security;
//Specify the encryption key size, algorithm, and user password.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = PdfEncryptionAlgorithm.AES;
security.UserPassword = "password";
//Specify the encryption option.
security.EncryptionOptions = PdfEncryptionOptions.EncryptOnlyAttachments;

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

//Get the document security.
PdfSecurity security = document.Security;
//Specify the encryption key size, algorithm, and user password.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = PdfEncryptionAlgorithm.AES;
security.UserPassword = "password";
//Specify the encryption option.
security.EncryptionOptions = PdfEncryptionOptions.EncryptOnlyAttachments;

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security

'Load the PDF document.
Dim document As New PdfLoadedDocument("Input.pdf")

'Get the document security.
Dim security As PdfSecurity = document.Security
'Specify the encryption key size, algorithm, and user password.
security.KeySize = PdfEncryptionKeySize.Key256Bit
security.Algorithm = PdfEncryptionAlgorithm.AES
security.UserPassword = "password"
'Specify the encryption option.
security.EncryptionOptions = PdfEncryptionOptions.EncryptOnlyAttachments

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Protect-attachments-in-existing-PDF-document/).

## Protecting an existing document

You can protect an existing PDF document with both [UserPassword](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_UserPassword) and [OwnerPassword](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfSecurity.html#Syncfusion_Pdf_Security_PdfSecurity_OwnerPassword) by using the following code snippet.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Security/Protect-an-existing-PDF-document/.NET/Protect-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

//Get the document security.
PdfSecurity security = document.Security;
//Specify the encryption key size and algorithm.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = PdfEncryptionAlgorithm.AES;
//Provide the owner and user passwords.
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

//Get the document security.
PdfSecurity security = document.Security;
//Specify the encryption key size and algorithm.
security.KeySize = PdfEncryptionKeySize.Key256Bit;
security.Algorithm = PdfEncryptionAlgorithm.AES;
//Provide the owner and user passwords.
security.OwnerPassword = "ownerPassword256";
security.UserPassword = "userPassword256";

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security

'Load the PDF document.
Dim document As New PdfLoadedDocument("Input.pdf")

'Get the document security.
Dim security As PdfSecurity = document.Security
'Specify the encryption key size and algorithm.
security.KeySize = PdfEncryptionKeySize.Key256Bit
security.Algorithm = PdfEncryptionAlgorithm.AES
'Provide the owner and user passwords.
security.OwnerPassword = "ownerPassword256"
security.UserPassword = "userPassword256"

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Protect-an-existing-PDF-document/).

## How to determine whether the PDF document is protected by a user or owner password

Essential<sup>&reg;</sup> PDF supports identifying whether a document is protected by a user or owner password. The following code example demonstrates how to detect the protection state of a PDF.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Security/Determine-whether-the-PDF-is-protected-or-not/.NET/Determine-whether-the-PDF-is-protected-or-not/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the PDF document by providing either the user or owner password.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf", "password");

//Determine whether the document is protected by a user or owner password.
bool isEncrypted = document.IsEncrypted;
bool isOwnerProtected = document.Security.OwnerPassword != null;
bool isUserProtected = document.Security.UserPassword != null;

Console.WriteLine($"Is encrypted: {isEncrypted}");
Console.WriteLine($"Is owner protected: {isOwnerProtected}");
Console.WriteLine($"Is user protected: {isUserProtected}");

//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;

//Load the PDF document by providing either the user or owner password.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf", "password");

//Determine whether the document is protected by a user or owner password.
bool isEncrypted = document.IsEncrypted;
bool isOwnerProtected = document.Security.OwnerPassword != null;
bool isUserProtected = document.Security.UserPassword != null;

Console.WriteLine($"Is encrypted: {isEncrypted}");
Console.WriteLine($"Is owner protected: {isOwnerProtected}");
Console.WriteLine($"Is user protected: {isUserProtected}");

//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Security

'Load the PDF document by providing either the user or owner password.
Dim document As New PdfLoadedDocument("Input.pdf", "password")

'Determine whether the document is protected by a user or owner password.
Dim isEncrypted As Boolean = document.IsEncrypted
Dim isOwnerProtected As Boolean = document.Security.OwnerPassword IsNot Nothing
Dim isUserProtected As Boolean = document.Security.UserPassword IsNot Nothing

Console.WriteLine($"Is encrypted: {isEncrypted}")
Console.WriteLine($"Is owner protected: {isOwnerProtected}")
Console.WriteLine($"Is user protected: {isUserProtected}")

'Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Security/Determine-whether-the-PDF-is-protected-or-not/).

The following table shows the various combinations for loading the secured document with a user or owner password:

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
      <td>Returns owner password (owner password is the same as the user password; it allows full permission to users).</td>
    </tr>
  </tbody>
</table>
