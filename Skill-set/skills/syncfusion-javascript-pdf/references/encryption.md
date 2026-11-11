# PDF Encryption and Security

## Table of Contents

- [Overview](#overview)
- [Encryption Types](#encryption-types)
  - [RC4 Encryption](#rc4-encryption)
  - [AES Encryption](#aes-encryption)
- [User and Owner Passwords](#user-and-owner-passwords)
  - [User Password](#user-password)
  - [Owner Password](#owner-password)
- [Securing New Documents](#securing-new-documents)
- [Protecting Existing Documents](#protecting-existing-documents)
- [Decrypting Documents](#decrypting-documents)
- [Changing Passwords](#changing-passwords)
- [Document Permissions](#document-permissions)
- [Viewing Permissions](#viewing-permissions)
- [Modifying Permissions](#modifying-permissions)
- [Password Protection Detection](#password-protection-detection)
- [Password Type Identification](#password-type-identification)
- [Security APIs](#security-apis)
- [Best Practices](#best-practices)
- [Common Gotchas](#common-gotchas)
- [Related References](#related-references)

## Overview

The Syncfusion JavaScript PDF Library provides document-level security features including encryption, password protection, permission restrictions, and document access control. Both RC4 and AES encryption standards are supported, enabling developers to protect sensitive content, control document permissions, comply with data protection regulations, and secure existing or new PDF files.

## Encryption Types

Syncfusion supports two primary encryption algorithms: legacy RC4 and modern AES. Encryption is configured by passing `PdfSecurityOptions` to `document.setSecurity()`.

### RC4 Encryption

RC4 (Rivest Cipher 4) is a legacy stream cipher standard provided for backward compatibility with older PDF readers (prior to 2006) and legacy software systems that cannot parse AES-encrypted PDFs. It is not recommended for modern or sensitive applications.

**Supported Bit Strengths:**
- `PdfEncryptionType.rc4Bit40`: 40-bit RC4 encryption (basic legacy protection)
- `PdfEncryptionType.rc4Bit128`: 128-bit RC4 encryption (standard legacy compatibility)

**When to Use:**
- Maintaining compatibility with legacy PDF viewers and older infrastructure
- Non-critical documents where modern AES support is unavailable

**Key APIs:**
- `PdfEncryptionType.rc4Bit40`
- `PdfEncryptionType.rc4Bit128`
- `PdfSecurityOptions`

```typescript
import { PdfDocument, PdfEncryptionType, PdfSecurityOptions } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
document.addPage();

const options: PdfSecurityOptions = {
    encryptionType: PdfEncryptionType.rc4Bit128,
    userPassword: 'password'
};
document.setSecurity(options);

document.save('output.pdf');
document.destroy();
```

### AES Encryption

AES (Advanced Encryption Standard) is the modern, robust cryptographic standard recommended for all new applications, sensitive data, archival documents, and regulatory compliance (e.g., GDPR, HIPAA).

**Supported Bit Strengths and Revisions:**
- `PdfEncryptionType.aesBit128`: 128-bit AES encryption
- `PdfEncryptionType.aesBit256Rev5`: 256-bit AES encryption (Revision 5, standard AES 256)
- `PdfEncryptionType.aesBit256Rev6`: 256-bit AES encryption (Revision 6, enhanced security)

**When to Use:**
- Protecting confidential, proprietary, or regulated documents
- Default choice for newly generated documents requiring strong encryption
- Meeting strict compliance and long-term security requirements

**Key APIs:**
- `PdfEncryptionType.aesBit128`
- `PdfEncryptionType.aesBit256Rev5`
- `PdfEncryptionType.aesBit256Rev6`
- `PdfSecurityOptions`

```typescript
import { PdfDocument, PdfEncryptionType, PdfSecurityOptions } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
document.addPage();

const options: PdfSecurityOptions = {
    encryptionType: PdfEncryptionType.aesBit256Rev5,
    ownerPassword: 'ownerPassword'
};
document.setSecurity(options);

document.save('output.pdf');
document.destroy();
```

## User and Owner Passwords

PDF document security distinguishes between two password types with separate access control roles.

### User Password

- **Purpose**: Controls whether a recipient can open and view the document.
- **Behavior**: When set, readers prompt the user to supply this password before rendering any document content.

### Owner Password

- **Purpose**: Controls permission changes and security settings.
- **Behavior**: Allows full access to the document, including modifying security settings, changing permissions, and printing or copying content even if restrictions are enabled.

> **Recommendation**: Always specify different values for user and owner passwords. If both passwords are set to the same value, the document may grant full permissions to any user opening the document.

## Securing New Documents

Apply encryption, password protection, and optional permissions when creating a new PDF document.

**Key APIs:**
- `PdfDocument`
- `PdfSecurityOptions`
- `document.setSecurity()`

```typescript
import { PdfDocument, PdfEncryptionType, PdfPermissionFlag, PdfSecurityOptions } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument();
document.addPage();

const options: PdfSecurityOptions = {
    encryptionType: PdfEncryptionType.aesBit256Rev5,
    userPassword: 'userPassword',
    ownerPassword: 'ownerPassword',
    permissions: PdfPermissionFlag.print | PdfPermissionFlag.accessibilityCopyContent
};
document.setSecurity(options);

document.save('SecuredNewDocument.pdf');
document.destroy();
```

## Protecting Existing Documents

Retroactively encrypt and apply security restrictions to previously unencrypted PDF files.

**Key APIs:**
- `new PdfDocument(inputData)`
- `PdfSecurityOptions`
- `document.setSecurity()`

```typescript
import { PdfDocument, PdfEncryptionType, PdfSecurityOptions } from '@syncfusion/ej2-pdf';

// Load existing unencrypted PDF
const document: PdfDocument = new PdfDocument(inputData);

const securityOptions: PdfSecurityOptions = {
    encryptionType: PdfEncryptionType.aesBit256Rev5,
    userPassword: 'userPassword256',
    ownerPassword: 'ownerPassword256'
};
document.setSecurity(securityOptions);

document.save('ProtectedDocument.pdf');
document.destroy();
```

## Decrypting Documents

Remove encryption and password protection from a secured PDF by opening the document with a valid password, clearing passwords, and restoring default permissions.

**Key APIs:**
- `new PdfDocument(inputData, password)`
- `PdfPermissionFlag.default`
- `document.setSecurity()`

```typescript
import { PdfDocument, PdfPermissionFlag, PdfSecurityOptions } from '@syncfusion/ej2-pdf';

// Open document using valid password (owner or user)
const document: PdfDocument = new PdfDocument(inputData, 'currentPassword');

const options: PdfSecurityOptions = {
    userPassword: '',
    ownerPassword: '',
    permissions: PdfPermissionFlag.default
};
document.setSecurity(options);

document.save('DecryptedDocument.pdf');
document.destroy();
```

## Changing Passwords

Update user or owner passwords on an existing secured document without altering existing encryption algorithms or other security settings.

**Key APIs:**
- `new PdfDocument(inputData, password)`
- `PdfSecurityOptions`
- `document.setSecurity()`

```typescript
import { PdfDocument, PdfSecurityOptions } from '@syncfusion/ej2-pdf';

// Open document with existing password
const document: PdfDocument = new PdfDocument(inputData, 'currentPassword');

const securityOptions: PdfSecurityOptions = {
    userPassword: 'NewUserPassword'
};
document.setSecurity(securityOptions);

document.save('PasswordChanged.pdf');
document.destroy();
```

## Document Permissions

Permissions restrict user operations such as printing, editing, copying, and assembling. Permissions require setting an owner password to enforce restrictions.

**Permission Categories (`PdfPermissionFlag`):**
- `PdfPermissionFlag.print`: Allows printing the document.
- `PdfPermissionFlag.copyContent`: Allows copying or extracting text and graphics.
- `PdfPermissionFlag.editContent`: Allows modifying document content.
- `PdfPermissionFlag.editAnnotations`: Allows adding or modifying text annotations and form fields.
- `PdfPermissionFlag.fillFields`: Allows filling in existing interactive form fields and signatures.
- `PdfPermissionFlag.accessibilityCopyContent`: Allows extracting content for accessibility and screen readers.
- `PdfPermissionFlag.assembleDocument`: Allows inserting, rotating, or deleting pages and creating bookmarks.
- `PdfPermissionFlag.fullQualityPrint`: Allows printing high-resolution, full-quality copies.
- `PdfPermissionFlag.default`: Grants all supported permissions (used when decrypting).

## Viewing Permissions

Inspect the permission flags currently applied to a secured document. Because `PdfPermissionFlag` is a bitwise flag enumeration, evaluate each capability using bitwise AND (`&`).

**Key APIs:**
- `document.permissions`
- `PdfPermissionFlag`

```typescript
import { PdfDocument, PdfPermissionFlag } from '@syncfusion/ej2-pdf';

const document: PdfDocument = new PdfDocument(inputData, 'password');

const permissions: PdfPermissionFlag = document.permissions;

const canPrint: boolean = (permissions & PdfPermissionFlag.print) !== 0;
const canCopyContent: boolean = (permissions & PdfPermissionFlag.copyContent) !== 0;
const canEditContent: boolean = (permissions & PdfPermissionFlag.editContent) !== 0;
const canEditAnnotations: boolean = (permissions & PdfPermissionFlag.editAnnotations) !== 0;
const canFillFields: boolean = (permissions & PdfPermissionFlag.fillFields) !== 0;
const canCopyForAccessibility: boolean = (permissions & PdfPermissionFlag.accessibilityCopyContent) !== 0;
const canAssembleDocument: boolean = (permissions & PdfPermissionFlag.assembleDocument) !== 0;
const canPrintInFullQuality: boolean = (permissions & PdfPermissionFlag.fullQualityPrint) !== 0;

document.destroy();
```

## Modifying Permissions

Change operation restrictions on an existing secured document. The document must be loaded with the owner password, and new permissions are combined using bitwise OR (`|`).

**Key APIs:**
- `new PdfDocument(inputData, ownerPassword)`
- `PdfSecurityOptions.permissions`
- `document.setSecurity()`

```typescript
import { PdfDocument, PdfPermissionFlag, PdfSecurityOptions } from '@syncfusion/ej2-pdf';

// Load with owner password to modify permissions
const document: PdfDocument = new PdfDocument(inputData, 'ownerPassword');

const securityOptions: PdfSecurityOptions = {
    permissions: PdfPermissionFlag.copyContent | PdfPermissionFlag.assembleDocument
};
document.setSecurity(securityOptions);

document.save('UpdatedPermissions.pdf');
document.destroy();
```

## Password Protection Detection

Detect whether an unknown PDF requires a password by attempting to load it without credentials and intercepting the encryption exception.

```typescript
import { PdfDocument } from '@syncfusion/ej2-pdf';

let isPasswordProtected: boolean = false;

try {
    const document: PdfDocument = new PdfDocument(inputData);
    isPasswordProtected = false;
    document.destroy();
} catch (error: any) {
    if (error.message === 'Cannot open an encrypted document. The password is invalid.') {
        isPasswordProtected = true;
    }
}
```

## Password Type Identification

When loading a protected document, the resulting user and owner password properties reflect how the file was secured and which password was provided:

- **Secured with both User and Owner Passwords**:
  - Opened with User Password: User password value returns the user password; Owner password returns `null`.
  - Opened with Owner Password: Owner password returns the owner password. For RC4 encryption, user password value returns the user password; for AES 256-bit (Revision 5 and Revision 6), user password returns `null`.
- **Secured only with Owner Password**:
  - Opened with Owner Password: User password returns `null`; Owner password returns the owner password.
- **Secured only with User Password**:
  - Opened with User Password: User password returns the user password; Owner password returns the user password (matching user password, granting full permissions).

## Security APIs

| Operation | Key API |
|---|---|
| AES encryption | `document.setSecurity({ encryptionType: PdfEncryptionType.aesBit256Rev5, ... })` |
| RC4 encryption | `document.setSecurity({ encryptionType: PdfEncryptionType.rc4Bit128, ... })` |
| Decryption | `document.setSecurity({ userPassword: '', ownerPassword: '', permissions: PdfPermissionFlag.default })` |
| Change password | `document.setSecurity({ userPassword: 'newPassword' })` |
| View permissions | `document.permissions` (evaluated with bitwise `&`) |
| Change permissions | `document.setSecurity({ permissions: PdfPermissionFlag.print \| ... })` |

## Best Practices

1. **Prefer AES Encryption**: Use AES encryption (`aesBit256Rev5` or `aesBit256Rev6`) for all new documents and sensitive information.
2. **Differentiate Passwords**: Always specify different values for user and owner passwords to maintain distinct access and permission privileges.
3. **Owner Password for Permission Enforcement**: Always configure an owner password whenever applying permission restrictions; without an owner password, permissions may be bypassed.
4. **Minimal Permission Grants**: Restrict permissions to only the operations required by the end user (principle of least privilege).
5. **Audit Before Distribution**: Inspect `document.permissions` using bitwise checks prior to distributing documents to verify restrictions are correctly applied.
6. **Protect Existing Documents**: Encrypt existing unprotected documents before sharing across untrusted networks or external storage.
7. **Rotate Credentials Periodically**: Regularly update document passwords to mitigate risks associated with credential exposure.
8. **Preserve Accessibility**: Include `PdfPermissionFlag.accessibilityCopyContent` when restricting copying so screen readers and assistive technology can function.
9. **Follow Organizational Policies**: Align bit-strength choices (128-bit vs 256-bit AES) with compliance mandates (GDPR, HIPAA, ISO).

## Common Gotchas

1. **RC4 Deprecation**: RC4 encryption is insecure by modern cryptographic standards and should only be used when supporting legacy readers prior to 2006.
2. **Matching Passwords**: Setting identical user and owner passwords compromises access control, granting users full administrative permissions.
3. **Owner Password Required for Permission Changes**: Attempting to modify document permissions requires opening the document with the owner password.
4. **Decryption Resets Security**: Decryption completely removes both passwords and restores all permissions to default; ensure this is intended before saving.
5. **Bitwise Flag Handling**: `PdfPermissionFlag` values are bit flags. Always use bitwise OR (`|`) to combine flags and bitwise AND (`&`) to check flags.
6. **Viewer Inconsistencies**: Some third-party or non-compliant PDF viewers do not honor standard permission flags; permissions do not substitute for strong encryption.
7. **Error Ambiguity on Load**: A document failure on load may indicate file corruption or unsupported format rather than password protection. Always check the error message string.
8. **AES 256 User Password Exposure**: Unlike RC4, opening an AES 256-bit encrypted document with the owner password does not disclose the user password (returns `null`).

## Related References

- [Digital Signatures](./digital-signatures.md) - Document authentication and integrity
- [Document Settings](./document-settings.md) - Document viewer preferences and metadata
- [Content Redaction](./content-redaction.md) - Permanent removal of sensitive content
- [Form Fields](./form-fields.md) - Form controls and interactive field permissions
- [Annotations](./annotations.md) - Adding and locking review markups
