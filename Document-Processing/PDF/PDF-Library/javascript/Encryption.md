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

import {
    PdfBrush,
    PdfDocument,
    PdfEncryptionType,
    PdfFontFamily,
    PdfFontStyle,
    PdfSecurityOptions,
    PdfStandardFont
} from '@syncfusion/ej2-pdf';

// Create a new PDF document.
const document: PdfDocument = new PdfDocument();
// Add a page to the document.
const page = document.addPage();
// Draw text on the page.
page.graphics.drawString(
    'Encrypted with RC4 128-bit encryption',
    new PdfStandardFont(PdfFontFamily.helvetica, 12, PdfFontStyle.regular),
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
const data: Uint8Array = document.save('Output.pdf');
// Destroy the document and release its resources.
document.destroy();

{% endhighlight %}

{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document.
const document = new ej.pdf.PdfDocument();
// Add a page to the document.
const page = document.addPage();
// Draw text on the page.
page.graphics.drawString(
    'Encrypted with RC4 128-bit encryption',
    new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.helvetica, 12, ej.pdf.PdfFontStyle.regular),
    { x: 10, y: 20, width: 300, height: 50 },
    new PdfBrush({ r: 0, g: 0, b: 0 })
);
// Configure RC4 security using a user password.
document.setSecurity({
    encryptionType: ej.pdf.PdfEncryptionType.rc4Bit128,
    userPassword: 'password'
});
// Save the encrypted PDF document.
const data = document.save('Output.pdf');
// Destroy the document and release its resources.
document.destroy();

{% endhighlight %}
{% endtabs %}

You can restrict document operations by specifying an owner password and permission flags. The following security configuration permits printing and accessibility-based content copying.

```typescript
const options: PdfSecurityOptions = {
    encryptionType: PdfEncryptionType.rc4Bit128,
    ownerPassword: 'ownerPassword',
    userPassword: 'userPassword',
    permissions: PdfPermissionFlag.print |
        PdfPermissionFlag.accessibilityCopyContent
};
document.setSecurity(options);
```

N> When both user and owner passwords are specified, use different values for the two passwords.

## Working with AES encryption

You can encrypt a PDF document using AES encryption by setting the `encryptionType` property to a supported AES value such as `PdfEncryptionType.aesBit128`, `PdfEncryptionType.aesBit256Rev5`, or `PdfEncryptionType.aesBit256Rev6`.

The following example encrypts a new PDF document using AES 256-bit Revision 5 encryption and an owner password.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import {
    PdfDocument,
    PdfEncryptionType,
    PdfSecurityOptions
} from '@syncfusion/ej2-pdf';

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

import {
    PdfDocument,
    PdfEncryptionType
} from '@syncfusion/ej2-pdf';

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

The JavaScript PDF Library supports decrypting a secured PDF document by loading it with a valid password, clearing its passwords, and saving it again. Reset the permission flags when the document restrictions must also be removed.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import {
    PdfDocument,
    PdfPermissionFlag,
    PdfSecurityOptions
} from '@syncfusion/ej2-pdf';

// Load the encrypted PDF document data.
const response: Response = await fetch('Input.pdf');
const inputData: Uint8Array = new Uint8Array(await response.arrayBuffer());
// Open the document using a valid password.
const document: PdfDocument = new PdfDocument(inputData, 'syncfusion');
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
const response = await fetch('Input.pdf');
const inputData = new Uint8Array(await response.arrayBuffer());
// Open the document using a valid password.
const document = new ej.pdf.PdfDocument(inputData, 'syncfusion');
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

You can protect an existing PDF document by loading its data, configuring the required encryption type and passwords, and saving the document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import {
    PdfDocument,
    PdfEncryptionType,
    PdfSecurityOptions
} from '@syncfusion/ej2-pdf';

// Load an existing PDF document.
const response: Response = await fetch('Input.pdf');
const inputData: Uint8Array = new Uint8Array(await response.arrayBuffer());
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
const response = await fetch('Input.pdf');
const inputData = new Uint8Array(await response.arrayBuffer());
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

import {
    PdfDocument,
    PdfSecurityOptions
} from '@syncfusion/ej2-pdf';

// Load the password-protected PDF document.
const response: Response = await fetch('Input.pdf');
const inputData: Uint8Array = new Uint8Array(await response.arrayBuffer());
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
const response = await fetch('Input.pdf');
const inputData = new Uint8Array(await response.arrayBuffer());
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

## Change the permissions of a PDF document

You can change the permissions of an existing secured PDF document using the `permissions` property of `PdfSecurityOptions`. Load the document using a valid password before updating the permission flags.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import {
    PdfDocument,
    PdfPermissionFlag,
    PdfSecurityOptions
} from '@syncfusion/ej2-pdf';

// Load the secured PDF document.
const response: Response = await fetch('Input.pdf');
const inputData: Uint8Array = new Uint8Array(await response.arrayBuffer());
const document: PdfDocument = new PdfDocument(inputData, 'syncfusion');
// Allow content copying and document assembly.
const options: PdfSecurityOptions = {
    permissions: PdfPermissionFlag.copyContent |
        PdfPermissionFlag.assembleDocument
};
document.setSecurity(options);
// Save the PDF document with the updated permissions.
const data: Uint8Array = document.save('Output.pdf');
// Destroy the document and release its resources.
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the secured PDF document.
const response = await fetch('Input.pdf');
const inputData = new Uint8Array(await response.arrayBuffer());
const document = new PdfDocument(inputData, 'syncfusion');
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

## View document permission flags

The `permissions` property of `PdfDocument` returns the permission flags available in the loaded PDF document. Since `PdfPermissionFlag` is a bitwise enumeration, use the bitwise AND operator to determine whether an individual permission is enabled.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import {
    PdfDocument,
    PdfPermissionFlag
} from '@syncfusion/ej2-pdf';

// Load the secured PDF document.
const response: Response = await fetch('Input.pdf');
const inputData: Uint8Array = new Uint8Array(await response.arrayBuffer());
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
const response = await fetch('Input.pdf');
const inputData = new Uint8Array(await response.arrayBuffer());
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

## Remove the password from a user-password-protected PDF document

You can remove the user password from an encrypted PDF document by loading it with the current password, setting `userPassword` to an empty string, and saving the document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import {
    PdfDocument,
    PdfSecurityOptions
} from '@syncfusion/ej2-pdf';

// Load the password-protected PDF document.
const response: Response = await fetch('Input.pdf');
const inputData: Uint8Array = new Uint8Array(await response.arrayBuffer());
const document: PdfDocument = new PdfDocument(inputData, 'password');
// Remove the user password.
const options: PdfSecurityOptions = {
    userPassword: ''
};
document.setSecurity(options);
// Save the PDF document without the user password.
document.save('Output.pdf');
// Destroy the document and release its resources.
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the password-protected PDF document.
const response = await fetch('Input.pdf');
const inputData = new Uint8Array(await response.arrayBuffer());
const document = new ej.pdf.PdfDocument(inputData, 'password');
// Remove the user password.
document.setSecurity({
    userPassword: ''
});
// Save the PDF document without the user password.
document.save('Output.pdf');
// Destroy the document and release its resources.
document.destroy();

{% endhighlight %}
{% endtabs %}

N> If the document also has an owner password or permission restrictions, clear the owner password and update the permissions when complete decryption is required.

## How to determine whether a PDF document is password protected

To determine whether a PDF document requires a password, try loading it without a password and handle the error raised for an encrypted document. Avoid depending on an exact error-message string because the message can change between versions.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument } from '@syncfusion/ej2-pdf';

// Load the PDF document data.
const response: Response = await fetch('Input.pdf');
const inputData: Uint8Array = new Uint8Array(await response.arrayBuffer());
let isPasswordProtected: boolean = false;
let document: PdfDocument | undefined;
try {
    // Loading without a password fails when a valid password is required.
    document = new PdfDocument(inputData);
} catch (error) {
    isPasswordProtected = true;
}
if (document) {
    document.destroy();
}

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the PDF document data.
const response = await fetch('Input.pdf');
const inputData = new Uint8Array(await response.arrayBuffer());
let isPasswordProtected = false;
let document;
try {
    // Loading without a password fails when a valid password is required.
    document = new ej.pdf.PdfDocument(inputData);
} catch (error) {
    isPasswordProtected = true;
}
if (document) {
    document.destroy();
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