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

- Rivest Cipher 4 (RC4) - Legacy encryption standard, suitable for backward compatibility
- Advanced Encryption Standard (AES) - Modern encryption standard, recommended for new applications

## Working with RC4 encryption

RC4 encryption is a legacy encryption standard that provides 40-bit and 128-bit encryption strength. Use RC4 encryption when you need to maintain compatibility with older PDF readers or legacy systems that don't support AES encryption. For new applications, consider using AES encryption instead, as it offers stronger security.

**Use cases for RC4 encryption:**
- Maintaining compatibility with PDF readers from before 2006
- Legacy systems that explicitly require RC4 encryption
- Quick protection for non-critical documents that need basic encryption

You can encrypt a PDF document using 40-bit or 128-bit RC4 encryption by setting the `encryptionType` property of `PdfSecurityOptions` to `PdfEncryptionType.rc4Bit40` or `PdfEncryptionType.rc4Bit128`.

The following example encrypts a new PDF document using RC4 128-bit encryption and a user password.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfBrush, PdfDocument, PdfEncryptionType, PdfFontFamily, PdfFontStyle, PdfSecurityOptions, PdfStandardFont } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document: PdfDocument = new PdfDocument();
// Add a page to the document
const page = document.addPage();
// Embed the standard font used to draw text
const font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 12, PdfFontStyle.regular);
// Draw text on the page
page.graphics.drawString(
    'Encrypted with RC4 128-bit encryption',
    font,
    { x: 10, y: 20, width: 300, height: 50 },
    new PdfBrush({ r: 0, g: 0, b: 0 })
);
// Configure RC4 security using a user password
const options: PdfSecurityOptions = {
    encryptionType: PdfEncryptionType.rc4Bit128,
    userPassword: 'password'
};
document.setSecurity(options);
// Save the encrypted PDF document
document.save('Output.pdf');
// Destroy the document and release its resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
const document = new ej.pdf.PdfDocument();
// Add a page to the document
const page = document.addPage();
// Embed the standard font used to draw text
const font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 12, ej.pdf.PdfFontStyle.regular);
// Draw text on the page
page.graphics.drawString(
    'Encrypted with RC4 128-bit encryption',
    font,
    { x: 10, y: 20, width: 300, height: 50 },
    new ej.pdf.PdfBrush({ r: 0, g: 0, b: 0 })
);
// Configure RC4 security using a user password
document.setSecurity({
    encryptionType: ej.pdf.PdfEncryptionType.rc4Bit128,
    userPassword: 'password'
});
// Save the encrypted PDF document
document.save('Output.pdf');
// Destroy the document and release its resources
document.destroy();

{% endhighlight %}
{% endtabs %}

You can restrict document operations by specifying an owner password and permission flags. The following example encrypts a new PDF document using RC4 128-bit encryption and permits only printing and accessibility-based content copying.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfEncryptionType, PdfPermissionFlag, PdfSecurityOptions } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document: PdfDocument = new PdfDocument();
// Add a page to the document
document.addPage();
// Restrict the document operations using an owner password and permission flags
// This allows only printing and accessibility-based content copying
const options: PdfSecurityOptions = {
    encryptionType: PdfEncryptionType.rc4Bit128,
    ownerPassword: 'ownerPassword',
    userPassword: 'userPassword',
    permissions: PdfPermissionFlag.print |
        PdfPermissionFlag.accessibilityCopyContent
};
document.setSecurity(options);
// Save the encrypted PDF document
document.save('Output.pdf');
// Destroy the document and release its resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
const document = new ej.pdf.PdfDocument();
// Add a page to the document
document.addPage();
// Restrict the document operations using an owner password and permission flags
// This allows only printing and accessibility-based content copying
document.setSecurity({
    encryptionType: ej.pdf.PdfEncryptionType.rc4Bit128,
    ownerPassword: 'ownerPassword',
    userPassword: 'userPassword',
    permissions: ej.pdf.PdfPermissionFlag.print |
        ej.pdf.PdfPermissionFlag.accessibilityCopyContent
});
// Save the encrypted PDF document
document.save('Output.pdf');
// Destroy the document and release its resources
document.destroy();

{% endhighlight %}
{% endtabs %}

N> When both user and owner passwords are specified, use different values for the two passwords.

## Working with AES encryption

AES (Advanced Encryption Standard) encryption provides modern, strong encryption for your PDF documents. It offers multiple bit strengths (128-bit, 256-bit Revision 5, and 256-bit Revision 6) to balance security requirements with compatibility. AES is the recommended encryption method for new applications and sensitive documents.

**Use cases for AES encryption:**
- Protecting confidential or sensitive documents
- Meeting compliance requirements (GDPR, HIPAA, etc.)
- Ensuring long-term document security
- Applications requiring strong, modern encryption standards
- Archival documents that need maximum security

You can encrypt a PDF document using AES encryption by setting the `encryptionType` property to a supported AES value such as `PdfEncryptionType.aesBit128`, `PdfEncryptionType.aesBit256Rev5`, or `PdfEncryptionType.aesBit256Rev6`.

The following example encrypts a new PDF document using AES 256-bit Revision 5 encryption and an owner password.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfEncryptionType, PdfSecurityOptions } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document: PdfDocument = new PdfDocument();
// Add a page to the document
document.addPage();

// Configure AES 256-bit encryption with owner password
// This provides strong, modern encryption recommended for sensitive documents
const options: PdfSecurityOptions = {
    encryptionType: PdfEncryptionType.aesBit256Rev5,
    ownerPassword: 'ownerPassword'
};
document.setSecurity(options);
// Save the encrypted PDF document
document.save('Output.pdf');
// Destroy the document and release its resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
const document = new ej.pdf.PdfDocument();
// Add a page to the document
document.addPage();

// Configure AES 256-bit encryption with owner password
// This provides strong, modern encryption recommended for sensitive documents
document.setSecurity({
    encryptionType: ej.pdf.PdfEncryptionType.aesBit256Rev5,
    ownerPassword: 'ownerPassword'
});
// Save the encrypted PDF document
document.save('Output.pdf');
// Destroy the document and release its resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Decrypting an encrypted PDF document

Decryption allows you to remove password protection from a PDF document by clearing both the user and owner passwords and restoring full permissions. This is useful when you need to access or modify a previously secured document, or when you need to change the security settings.

**Use cases for decryption:**
- Removing security from documents you own
- Preparing documents for unrestricted distribution
- Converting from one encryption method to another
- Restoring full permissions to previously restricted documents

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPermissionFlag, PdfSecurityOptions } from '@syncfusion/ej2-pdf';

// Open the encrypted document using a valid password
const document: PdfDocument = new PdfDocument(inputData, 'password');
// Clear the passwords and restore all supported permissions
const options: PdfSecurityOptions = {
    userPassword: '',
    ownerPassword: '',
    permissions: PdfPermissionFlag.default
};
document.setSecurity(options);
// Save the decrypted PDF document
document.save('Output.pdf');
// Destroy the document and release its resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the encrypted PDF document using the current password
const document = new ej.pdf.PdfDocument(inputData, 'password');
// Clear the passwords and restore all supported permissions
document.setSecurity({
    userPassword: '',
    ownerPassword: '',
    permissions: ej.pdf.PdfPermissionFlag.default
});
// Save the decrypted PDF document
document.save('Output.pdf');
// Destroy the document and release its resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Protect an existing PDF document

This approach allows you to add encryption to documents that were previously unencrypted. It's useful when you already have PDF files and need to secure them retroactively.

**Use cases for protecting existing documents:**
- Securing previously unencrypted documents
- Upgrading to stronger encryption on existing PDFs
- Adding access control to documents already in use
- Batch-protecting multiple documents with consistent security settings

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfEncryptionType, PdfSecurityOptions } from '@syncfusion/ej2-pdf';

// Load an existing PDF document that is currently unencrypted
const document: PdfDocument = new PdfDocument(inputData);
// Configure encryption settings with both user and owner passwords
// User password: Required to open the document
// Owner password: Controls document permissions and modifications
const securityOptions: PdfSecurityOptions = {
    encryptionType: PdfEncryptionType.aesBit256Rev5,
    ownerPassword: 'ownerPassword256',
    userPassword: 'userPassword256'
};
// Apply encryption to the document
document.setSecurity(securityOptions);
// Save the now-encrypted document
document.save('ProtectedDocument.pdf');
// Clean up resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document that is currently unencrypted
const document = new ej.pdf.PdfDocument(inputData);
// Configure encryption settings with both user and owner passwords
// User password: Required to open the document
// Owner password: Controls document permissions and modifications
document.setSecurity({
    encryptionType: ej.pdf.PdfEncryptionType.aesBit256Rev5,
    ownerPassword: 'ownerPassword256',
    userPassword: 'userPassword256'
});
// Save the now-encrypted document
document.save('ProtectedDocument.pdf');
// Clean up resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Changing the password of a PDF document

Update the security credentials of an existing encrypted document without modifying other security settings. This allows users or administrators to refresh authentication credentials periodically.

**Use cases for password changes:**
- Periodic security credential rotation
- Responding to password compromise
- Updating passwords when personnel change
- Enforcing new password policies

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfSecurityOptions } from '@syncfusion/ej2-pdf';

// Load the password-protected PDF document with the current password
const document: PdfDocument = new PdfDocument(inputData, 'password');
// Create new security options with the updated user password
// All other encryption settings remain unchanged
const securityOptions: PdfSecurityOptions = {
    userPassword: 'NewPassword'
};
// Apply the new password to the document
document.setSecurity(securityOptions);
// Save the document with the updated password
document.save('PasswordChanged.pdf');
// Clean up resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the password-protected PDF document with the current password
const document = new ej.pdf.PdfDocument(inputData, 'password');
// Create new security options with the updated user password
// All other encryption settings remain unchanged
document.setSecurity({
    userPassword: 'NewPassword'
});
// Save the document with the updated password
document.save('PasswordChanged.pdf');
// Clean up resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## View document permission flags

Inspect the permissions currently set on a secured PDF document to understand which operations users can perform. This is essential for auditing document security and verifying that restrictions are correctly applied.

**Use cases for viewing permissions:**
- Auditing document security settings
- Verifying permission restrictions before distribution
- Understanding which operations are permitted on received documents
- Programmatically checking document access levels

The `permissions` property of `PdfDocument` returns the permission flags available in the loaded PDF document. Since `PdfPermissionFlag` is a bitwise enumeration, use the bitwise AND operator to determine whether an individual permission is enabled.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPermissionFlag } from '@syncfusion/ej2-pdf';

// Load the secured PDF document with the required password
const document: PdfDocument = new PdfDocument(inputData, 'password');
// Get the permission flags from the document
// PdfPermissionFlag is a bitwise enumeration, so use bitwise AND (&) to check each flag
const permissions: PdfPermissionFlag = document.permissions;
// Check individual permission flags
// Each permission is checked using bitwise AND operation to verify if enabled
const canPrint: boolean = (permissions & PdfPermissionFlag.print) !== 0;
const canCopyContent: boolean = (permissions & PdfPermissionFlag.copyContent) !== 0;
const canEditContent: boolean = (permissions & PdfPermissionFlag.editContent) !== 0;
const canEditAnnotations: boolean = (permissions & PdfPermissionFlag.editAnnotations) !== 0;
const canFillFields: boolean = (permissions & PdfPermissionFlag.fillFields) !== 0;
const canCopyForAccessibility: boolean = (permissions & PdfPermissionFlag.accessibilityCopyContent) !== 0;
const canAssembleDocument: boolean = (permissions & PdfPermissionFlag.assembleDocument) !== 0;
const canPrintInFullQuality: boolean = (permissions & PdfPermissionFlag.fullQualityPrint) !== 0;
// Use the permission flags for decision-making
console.log('Printing allowed: ' + canPrint);
console.log('Copying allowed: ' + canCopyContent);
console.log('Editing allowed: ' + canEditContent);
// Clean up resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the secured PDF document with the required password
const document = new ej.pdf.PdfDocument(inputData, 'password');
// Get the permission flags from the document
// PdfPermissionFlag is a bitwise enumeration, so use bitwise AND (&) to check each flag
const permissions = document.permissions;
// Check individual permission flags
// Each permission is checked using bitwise AND operation to verify if enabled
const canPrint = (permissions & ej.pdf.PdfPermissionFlag.print) !== 0;
const canCopyContent = (permissions & ej.pdf.PdfPermissionFlag.copyContent) !== 0;
const canEditContent = (permissions & ej.pdf.PdfPermissionFlag.editContent) !== 0;
const canEditAnnotations = (permissions & ej.pdf.PdfPermissionFlag.editAnnotations) !== 0;
const canFillFields = (permissions & ej.pdf.PdfPermissionFlag.fillFields) !== 0;
const canCopyForAccessibility = (permissions & ej.pdf.PdfPermissionFlag.accessibilityCopyContent) !== 0;
const canAssembleDocument = (permissions & ej.pdf.PdfPermissionFlag.assembleDocument) !== 0;
const canPrintInFullQuality = (permissions & ej.pdf.PdfPermissionFlag.fullQualityPrint) !== 0;
// Use the permission flags for decision-making
console.log('Printing allowed: ' + canPrint);
console.log('Copying allowed: ' + canCopyContent);
console.log('Editing allowed: ' + canEditContent);
// Clean up resources
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

Modify the access restrictions on an existing secured document to grant or restrict specific operations. This allows fine-grained control over what users can do with your PDF documents.

**Use cases for changing permissions:**
- Restricting editing capabilities while allowing printing
- Limiting copy/paste operations to prevent content theft
- Preventing form field modifications on locked forms
- Allowing printing but restricting annotation abilities
- Disabling high-quality printing for premium documents

Load the document using a valid password before updating the permission flags using the `permissions` property of `PdfSecurityOptions`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPermissionFlag, PdfSecurityOptions } from '@syncfusion/ej2-pdf';

// Load the secured PDF document using the owner password
// The owner password is required to modify document permissions
const document: PdfDocument = new PdfDocument(inputData, 'syncfusion');
// Configure new permissions using bitwise OR (|) to combine multiple flags
// This example allows content copying and document assembly
// Use the bitwise OR operator to combine multiple permission flags
const securityOptions: PdfSecurityOptions = {
    permissions: PdfPermissionFlag.copyContent |
        PdfPermissionFlag.assembleDocument
};
// Apply the new permission settings to the document
document.setSecurity(securityOptions);
// Save the document with updated permissions
document.save('UpdatedPermissions.pdf');
// Clean up resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the secured PDF document using the owner password
// The owner password is required to modify document permissions
const document = new ej.pdf.PdfDocument(inputData, 'syncfusion');
// Configure new permissions using bitwise OR (|) to combine multiple flags
// This example allows content copying and document assembly
// Use the bitwise OR operator to combine multiple permission flags
document.setSecurity({
    permissions: ej.pdf.PdfPermissionFlag.copyContent |
        ej.pdf.PdfPermissionFlag.assembleDocument
});
// Save the document with updated permissions
document.save('UpdatedPermissions.pdf');
// Clean up resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## How to determine whether a PDF document is password protected

To determine whether a PDF document requires a password, try loading it without a password and check if the error message indicates the document is encrypted. This approach allows you to programmatically detect password-protected documents.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument } from '@syncfusion/ej2-pdf';

let isPasswordProtected: boolean = false;
try {
    // Attempt to load the document without providing a password
    const document: PdfDocument = new PdfDocument(inputData);
    // If we reach here, the document is not password protected
    isPasswordProtected = false;
    document.destroy();
} catch (error: any) {
    // Check if the error message indicates an encrypted document requiring a password
    if (error.message === 'Cannot open an encrypted document. The password is invalid.') {
        isPasswordProtected = true;
    }
}
// Use isPasswordProtected to determine next action
console.log('Password protected: ' + isPasswordProtected);

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

let isPasswordProtected = false;
try {
    // Attempt to load the document without providing a password
    const document = new ej.pdf.PdfDocument(inputData);
    // If we reach here, the document is not password protected
    isPasswordProtected = false;
    document.destroy();
} catch (error) {
    // Check if the error message indicates an encrypted document requiring a password
    if (error.message === 'Cannot open an encrypted document. The password is invalid.') {
        isPasswordProtected = true;
    }
}
// Use isPasswordProtected to determine next action
console.log('Password protected: ' + isPasswordProtected);

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

## Encryption API Reference

The following table summarizes the key methods and options for encryption operations in the JavaScript PDF Library:

| Operation | Method/Property | Description | Use Case |
|-----------|-----------------|-------------|----------|
| **Encrypt a new document with RC4** | `PdfDocument.setSecurity({ encryptionType: PdfEncryptionType.rc4Bit128, userPassword: 'password' })` | Encrypts a document using 128-bit RC4 encryption with a user password | Legacy system compatibility, backward compatibility with older PDF readers |
| **Encrypt with permissions (RC4)** | `PdfDocument.setSecurity({ encryptionType: PdfEncryptionType.rc4Bit128, ownerPassword: 'owner', userPassword: 'user', permissions: PdfPermissionFlag.print \| ... })` | Restricts document operations using owner password and permission flags | Fine-grained access control on legacy documents |
| **Encrypt with AES (recommended)** | `PdfDocument.setSecurity({ encryptionType: PdfEncryptionType.aesBit256Rev5, ownerPassword: 'password' })` | Encrypts a document using modern AES 256-bit encryption | Securing sensitive/confidential documents, compliance requirements |
| **Decrypt a document** | `PdfDocument.setSecurity({ userPassword: '', ownerPassword: '', permissions: PdfPermissionFlag.default })` | Removes password protection and restores all permissions | Removing security from owned documents, unrestricted distribution |
| **Protect existing document** | `new PdfDocument(inputData)` + `setSecurity({ encryptionType: PdfEncryptionType.aesBit256Rev5, ... })` | Adds encryption to an unencrypted PDF document | Retroactive security, batch encryption of existing files |
| **Change password** | `new PdfDocument(inputData, 'currentPassword')` + `setSecurity({ userPassword: 'NewPassword' })` | Updates authentication credentials without changing encryption type | Credential rotation, security policy updates |
| **View permissions** | `document.permissions` + bitwise AND checks | Retrieves permission flags from an encrypted document | Auditing security settings, verifying restrictions |
| **Change permissions** | `PdfDocument.setSecurity({ permissions: PdfPermissionFlag.copyContent \| PdfPermissionFlag.assembleDocument })` | Modifies access restrictions on secured documents | Restricting editing, preventing copying, limiting operations |

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/tailwind3/pdf/default)