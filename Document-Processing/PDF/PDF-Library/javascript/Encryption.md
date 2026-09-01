---
title: Encryption in JavaScript PDF Library | Syncfusion
description: Learn how to protect PDF documents with encryption and set permissions for printing, editing, and copying using Syncfusion JavaScript PDF Library.
platform: document-processing
control: PDF
documentation: UG
---

# Encryption in JavaScript PDF Library

The Syncfusion JavaScript PDF Library allows you to secure PDF documents using RC4 and AES encryption algorithms. You can also apply user and owner passwords and define permissions for operations such as printing, editing, copying content, filling form fields, and assembling documents.

A **user password** controls whether a user can open the PDF document. An **owner password** controls whether a user can change the document permissions. When both passwords are used, specify different values for better security.

The supported encryption algorithms are:

- Rivest Cipher 4 (RC4)
- Advanced Encryption Standard (AES)

## Working with RC4 encryption

You can encrypt a PDF document using 40-bit or 128-bit RC4 encryption by setting the `encryptionType` property of `PdfSecurityOptions` to `PdfEncryptionType.rc4Bit40` or `PdfEncryptionType.rc4Bit128`.

The following example encrypts a new PDF document using RC4 128-bit encryption and a user password.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfBrush, PdfDocument, PdfEncryptionType, PdfFontFamily, PdfFontStyle, PdfSecurityOptions, PdfStandardFont } from '@syncfusion/ej2-pdf';

// Create a new PDF document.
const document: PdfDocument = new PdfDocument();
// Add a page to the document.
const page = document.addPage();
// Embed the standard font used to draw text.
const font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 12, PdfFontStyle.regular);
// Draw text on the page.
page.graphics.drawString(
    'Encrypted with RC4 128-bit encryption',
    font,
    { x: 10, y: 20, width: 300, height: 50 },
    new PdfBrush({ r: 0, g: 0, b: 0 })
);
// Configure RC4 security using a user password.
const options: PdfSecurityOptions = {
    encryptionType: PdfEncryptionType.rc4Bit128,
    userPassword: 'password'
};
document.setSecurity(options);
// Save the encrypted PDF document.
document.save('Output.pdf');
// Destroy the document and release its resources.
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document.
const document = new ej.pdf.PdfDocument();
// Add a page to the document.
const page = document.addPage();
// Embed the standard font used to draw text.
const font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 12, ej.pdf.PdfFontStyle.regular);
// Draw text on the page.
page.graphics.drawString(
    'Encrypted with RC4 128-bit encryption',
    font,
    { x: 10, y: 20, width: 300, height: 50 },
    new ej.pdf.PdfBrush({ r: 0, g: 0, b: 0 })
);
// Configure RC4 security using a user password.
document.setSecurity({
    encryptionType: ej.pdf.PdfEncryptionType.rc4Bit128,
    userPassword: 'password'
});
// Save the encrypted PDF document.
document.save('Output.pdf');
// Destroy the document and release its resources.
document.destroy();

{% endhighlight %}
{% endtabs %}

You can restrict document operations by specifying an owner password and permission flags. The following example encrypts a new PDF document using RC4 128-bit encryption and permits only printing and accessibility-based content copying.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfEncryptionType, PdfPermissionFlag, PdfSecurityOptions } from '@syncfusion/ej2-pdf';

// Create a new PDF document.
const document: PdfDocument = new PdfDocument();
// Add a page to the document.
document.addPage();
// Restrict the document operations using an owner password and permission flags.
const options: PdfSecurityOptions = {
    encryptionType: PdfEncryptionType.rc4Bit128,
    ownerPassword: 'ownerPassword',
    userPassword: 'userPassword',
    permissions: PdfPermissionFlag.print |
        PdfPermissionFlag.accessibilityCopyContent
};
document.setSecurity(options);
// Save the encrypted PDF document.
document.save('Output.pdf');
// Destroy the document and release its resources.
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document.
const document = new ej.pdf.PdfDocument();
// Add a page to the document.
document.addPage();
// Restrict the document operations using an owner password and permission flags.
document.setSecurity({
    encryptionType: ej.pdf.PdfEncryptionType.rc4Bit128,
    ownerPassword: 'ownerPassword',
    userPassword: 'userPassword',
    permissions: ej.pdf.PdfPermissionFlag.print |
        ej.pdf.PdfPermissionFlag.accessibilityCopyContent
});
// Save the encrypted PDF document.
document.save('Output.pdf');
// Destroy the document and release its resources.
document.destroy();

{% endhighlight %}
{% endtabs %}

N> When both user and owner passwords are specified, use different values for the two passwords.

## Working with AES encryption

You can encrypt a PDF document using AES encryption by setting the `encryptionType` property to a supported AES value such as `PdfEncryptionType.aesBit128`, `PdfEncryptionType.aesBit256Rev5`, or `PdfEncryptionType.aesBit256Rev6`.

The following example encrypts a new PDF document using AES 256-bit Revision 5 encryption and an owner password.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfEncryptionType, PdfSecurityOptions } from '@syncfusion/ej2-pdf';

// Create a new PDF document.
const document: PdfDocument = new PdfDocument();
// Add a page to the document.
document.addPage();
// Configure AES security using an owner password.
const options: PdfSecurityOptions = {
    encryptionType: PdfEncryptionType.aesBit256Rev5,
    ownerPassword: 'ownerPassword'
};
document.setSecurity(options);
// Save the encrypted PDF document.
document.save('Output.pdf');
// Destroy the document and release its resources.
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document.
const document = new ej.pdf.PdfDocument();
// Add a page to the document.
document.addPage();
// Configure AES security using an owner password.
document.setSecurity({
    encryptionType: ej.pdf.PdfEncryptionType.aesBit256Rev5,
    ownerPassword: 'ownerPassword'
});
// Save the encrypted PDF document.
document.save('Output.pdf');
// Destroy the document and release its resources.
document.destroy();

{% endhighlight %}
{% endtabs %}

## Decrypting an encrypted PDF document

The JavaScript PDF Library supports decrypting an encrypted PDF document by removing its owner or user password and restoring all supported permissions. This is particularly useful when you need to access or modify a secured PDF.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPermissionFlag, PdfSecurityOptions } from '@syncfusion/ej2-pdf';

// Open the document using a valid password.
const document: PdfDocument = new PdfDocument(inputData, 'password');
// Clear the passwords and restore all supported permissions.
const options: PdfSecurityOptions = {
    userPassword: '',
    ownerPassword: '',
    permissions: PdfPermissionFlag.print |
        PdfPermissionFlag.copyContent |
        PdfPermissionFlag.editContent |
        PdfPermissionFlag.editAnnotations |
        PdfPermissionFlag.fillFields |
        PdfPermissionFlag.accessibilityCopyContent |
        PdfPermissionFlag.assembleDocument |
        PdfPermissionFlag.fullQualityPrint
};
document.setSecurity(options);
// Save the decrypted PDF document.
document.save('Output.pdf');
// Destroy the document and release its resources.
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the encrypted PDF document data.
const document = new ej.pdf.PdfDocument(inputData, 'password');
// Clear the passwords and restore all supported permissions.
document.setSecurity({
    userPassword: '',
    ownerPassword: '',
    permissions: ej.pdf.PdfPermissionFlag.print |
        ej.pdf.PdfPermissionFlag.copyContent |
        ej.pdf.PdfPermissionFlag.editContent |
        ej.pdf.PdfPermissionFlag.editAnnotations |
        ej.pdf.PdfPermissionFlag.fillFields |
        ej.pdf.PdfPermissionFlag.accessibilityCopyContent |
        ej.pdf.PdfPermissionFlag.assembleDocument |
        ej.pdf.PdfPermissionFlag.fullQualityPrint
});
// Save the decrypted PDF document.
document.save('Output.pdf');
// Destroy the document and release its resources.
document.destroy();

{% endhighlight %}
{% endtabs %}

## Protect an existing PDF document

You can make the existing PDF document password protected by configuring the required encryption type and passwords, and saving the document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfEncryptionType, PdfSecurityOptions } from '@syncfusion/ej2-pdf';

// Load the existing PDF document
const document: PdfDocument = new PdfDocument(inputData);
// Protect the document using AES encryption.
const options: PdfSecurityOptions = {
    encryptionType: PdfEncryptionType.aesBit256Rev5,
    ownerPassword: 'ownerPassword256',
    userPassword: 'userPassword256'
};
document.setSecurity(options);
// Save the protected PDF document.
document.save('Output.pdf');
// Destroy the document and release its resources.
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document.
const document = new ej.pdf.PdfDocument(inputData);
// Protect the document using AES encryption.
document.setSecurity({
    encryptionType: ej.pdf.PdfEncryptionType.aesBit256Rev5,
    ownerPassword: 'ownerPassword256',
    userPassword: 'userPassword256'
});
// Save the protected PDF document.
document.save('Output.pdf');
// Destroy the document and release its resources.
document.destroy();

{% endhighlight %}
{% endtabs %}

## Changing the password of a PDF document

You can change the user password of an existing encrypted PDF document by loading it with the current password and applying the new password through `setSecurity`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfSecurityOptions } from '@syncfusion/ej2-pdf';

// Load the password-protected PDF document.
const document: PdfDocument = new PdfDocument(inputData, 'password');
// Change the user password.
const options: PdfSecurityOptions = {
    userPassword: 'NewPassword'
};
document.setSecurity(options);
// Save the password-changed PDF document.
document.save('Output.pdf');
// Destroy the document and release its resources.
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the password-protected PDF document.
const document = new ej.pdf.PdfDocument(inputData, 'password');
// Change the user password.
document.setSecurity({
    userPassword: 'NewPassword'
});
// Save the password-changed PDF document.
document.save('Output.pdf');
// Destroy the document and release its resources.
document.destroy();

{% endhighlight %}
{% endtabs %}

## View document permission flags

The `permissions` property of `PdfDocument` returns the permission flags available in the loaded PDF document. Since `PdfPermissionFlag` is a bitwise enumeration, use the bitwise AND operator to determine whether an individual permission is enabled.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPermissionFlag } from '@syncfusion/ej2-pdf';

// Load the secured PDF document.
const document: PdfDocument = new PdfDocument(inputData, 'password');
// Get the document permission flags.
const permissions: PdfPermissionFlag = document.permissions;
// Check the required permission flags.
const canPrint: boolean =
    (permissions & PdfPermissionFlag.print) !== 0;
const canCopyContent: boolean =
    (permissions & PdfPermissionFlag.copyContent) !== 0;
const canEditContent: boolean =
    (permissions & PdfPermissionFlag.editContent) !== 0;
const canEditAnnotations: boolean =
    (permissions & PdfPermissionFlag.editAnnotations) !== 0;
const canFillFields: boolean =
    (permissions & PdfPermissionFlag.fillFields) !== 0;
const canCopyForAccessibility: boolean =
    (permissions & PdfPermissionFlag.accessibilityCopyContent) !== 0;
const canAssembleDocument: boolean =
    (permissions & PdfPermissionFlag.assembleDocument) !== 0;
const canPrintInFullQuality: boolean =
    (permissions & PdfPermissionFlag.fullQualityPrint) !== 0;
// Destroy the document and release its resources.
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the secured PDF document.
const document = new ej.pdf.PdfDocument(inputData, 'password');
// Get the document permission flags.
const permissions = document.permissions;
// Check the required permission flags.
const canPrint = (permissions & ej.pdf.PdfPermissionFlag.print) !== 0;
const canCopyContent =
    (permissions & ej.pdf.PdfPermissionFlag.copyContent) !== 0;
const canEditContent =
    (permissions & ej.pdf.PdfPermissionFlag.editContent) !== 0;
const canEditAnnotations =
    (permissions & ej.pdf.PdfPermissionFlag.editAnnotations) !== 0;
const canFillFields =
    (permissions & ej.pdf.PdfPermissionFlag.fillFields) !== 0;
const canCopyForAccessibility =
    (permissions & ej.pdf.PdfPermissionFlag.accessibilityCopyContent) !== 0;
const canAssembleDocument =
    (permissions & ej.pdf.PdfPermissionFlag.assembleDocument) !== 0;
const canPrintInFullQuality =
    (permissions & ej.pdf.PdfPermissionFlag.fullQualityPrint) !== 0;
// Destroy the document and release its resources.
document.destroy();

{% endhighlight %}
{% endtabs %}

The following flags can be combined when configuring document permissions:

- `PdfPermissionFlag.print`
- `PdfPermissionFlag.copyContent`
- `PdfPermissionFlag.editContent`
- `PdfPermissionFlag.editAnnotations`
- `PdfPermissionFlag.fillFields`
- `PdfPermissionFlag.accessibilityCopyContent`
- `PdfPermissionFlag.assembleDocument`
- `PdfPermissionFlag.fullQualityPrint`

## Change the permissions of a PDF document

You can change the permissions of an existing secured PDF document using the `permissions` property of `PdfSecurityOptions`. Load the document using a valid password before updating the permission flags.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPermissionFlag, PdfSecurityOptions } from '@syncfusion/ej2-pdf';

// Load the secured PDF document.
const document: PdfDocument = new PdfDocument(inputData, 'syncfusion');
// Allow content copying and document assembly.
const options: PdfSecurityOptions = {
    permissions: PdfPermissionFlag.copyContent |
        PdfPermissionFlag.assembleDocument
};
document.setSecurity(options);
// Save the PDF document with the updated permissions.
document.save('Output.pdf');
// Destroy the document and release its resources.
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the secured PDF document.
const document = new ej.pdf.PdfDocument(inputData, 'syncfusion');
// Allow content copying and document assembly.
document.setSecurity({
    permissions: ej.pdf.PdfPermissionFlag.copyContent |
        ej.pdf.PdfPermissionFlag.assembleDocument
});
// Save the PDF document with the updated permissions.
document.save('Output.pdf');
// Destroy the document and release its resources.
document.destroy();

{% endhighlight %}
{% endtabs %}

## How to determine whether a PDF document is password protected

To determine whether a PDF document requires a password, try loading it without a password and handle the error raised for an encrypted document. Avoid depending on an exact error-message string because the message can change between versions.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument } from '@syncfusion/ej2-pdf';

// Load the PDF document data
let isPasswordProtected: boolean = false;
try {
    // Loading without a password fails when a valid password is required.
    let document = new PdfDocument(inputData);
} catch (error.message == 'Cannot open an encrypted document. The password is invalid.') {
    isPasswordProtected = true;
}

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the PDF document data.
let isPasswordProtected = false;
try {
    // Loading without a password fails when a valid password is required.
    let document = new ej.pdf.PdfDocument(inputData);
} catch (error.message == 'Cannot open an encrypted document. The password is invalid.') {
    isPasswordProtected = true;
}

{% endhighlight %}
{% endtabs %}

N> A loading error can also occur for a damaged or unsupported PDF document. If an application needs to distinguish these cases, inspect the reported error and handle other load failures separately.

## How to determine whether a PDF document is protected by a user or owner password

The following table describes the values available after loading a secured PDF document with either its user password or owner password. No code sample is required for this behavior.

| Document type | Opened with | User password value | Owner password value |
|----------|----------|----------|----------|
| PDF document secured with both owner and user passwords | User password | Returns the user password | Returns null |
| PDF document secured with both owner and user passwords | Owner password | Returns the user password. **Note:** Returns null for AES 256-bit and AES 256-bit Revision 6 encryption. | Returns the owner password |
| PDF document secured only with an owner password | Owner password | Returns null | Returns the owner password |
| PDF document secured only with a user password | User password | Returns the user password | Returns the owner password. The owner password is the same as the user password and grants full permission to the user. |

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/tailwind3/pdf/default)