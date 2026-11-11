# Encryption

> Protect PDF documents using RC4 or AES encryption with user/owner passwords and permission flags.

---

## Encryption Algorithms

| Algorithm | Key Size | Constant |
|---|---|---|
| RC4 | 40-bit | `PdfEncryptionAlgorithm.rc4x40Bit` |
| RC4 | 128-bit | `PdfEncryptionAlgorithm.rc4x128Bit` |
| AES | 128-bit | `PdfEncryptionAlgorithm.aesx128Bit` |
| AES | 256-bit | `PdfEncryptionAlgorithm.aesx256Bit` |
| AES | 256-bit Revision 6 | `PdfEncryptionAlgorithm.aesx256BitRevision6` |

---

## Encrypt with User Password (RC4 128-bit)

```dart
PdfDocument document = PdfDocument();
PdfSecurity security = document.security;

//Set encryption algorithm
security.algorithm = PdfEncryptionAlgorithm.rc4x128Bit;

//Set user password
security.userPassword = 'userpassword';

//Add content
document.pages.add().graphics.drawString(
    'Protected with RC4 128-bit',
    PdfStandardFont(PdfFontFamily.helvetica, 20),
    brush: PdfBrushes.black,
    bounds: Rect.fromLTWH(10, 10, 500, 50));

File('Output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Encrypt with Owner Password and Permissions (RC4 128-bit)

```dart
security.algorithm = PdfEncryptionAlgorithm.rc4x128Bit;

//Set owner password
security.ownerPassword = 'ownerpassword';

//Grant specific permissions (all others are restricted)
security.permissions.addAll(<PdfPermissionsFlags>[
    PdfPermissionsFlags.print,
    PdfPermissionsFlags.accessibilityCopyContent
]);

document.pages.add().graphics.drawString(
    'Protected with owner password',
    PdfStandardFont(PdfFontFamily.helvetica, 18),
    brush: PdfBrushes.black,
    bounds: Rect.fromLTWH(10, 10, 500, 50));
```

---

## Encrypt with AES 256-bit (User Password)

```dart
security.algorithm = PdfEncryptionAlgorithm.aesx256Bit;
security.userPassword = 'userpassword';

document.pages.add().graphics.drawString(
    'Protected with AES 256-bit',
    PdfStandardFont(PdfFontFamily.helvetica, 20),
    brush: PdfBrushes.black,
    bounds: Rect.fromLTWH(10, 10, 500, 50));
```

---

## Encrypt with Both User and Owner Passwords (AES 256-bit)

```dart
security.algorithm = PdfEncryptionAlgorithm.aesx256Bit;

//Set both passwords — use different values for better security
security.userPassword = 'userpassword';
security.ownerPassword = 'ownerpassword';

// Set the PDF Encryption Type
security.encryptionOptions = PdfEncryptionOptions.encryptAllContents;

//Grant permissions
security.permissions.addAll(<PdfPermissionsFlags>[
    PdfPermissionsFlags.print,
    PdfPermissionsFlags.accessibilityCopyContent
]);

document.pages.add().graphics.drawString(
    'Fully protected document',
    PdfStandardFont(PdfFontFamily.helvetica, 18),
    brush: PdfBrushes.black,
    bounds: Rect.fromLTWH(10, 10, 500, 50));
```

### Available EncryptionOptions
```dart
PdfEncryptionOptions.encryptAllContents
PdfEncryptionOptions.encryptAllContentsExceptMetadata
PdfEncryptionOptions.encryptOnlyAttachments
```

---

## Protect an Existing PDF

```dart
//Load an existing PDF
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

PdfSecurity security = document.security;
security.algorithm = PdfEncryptionAlgorithm.aesx256Bit;
security.ownerPassword = 'ownerpassword';
security.userPassword = 'userpassword';

File('Output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Open an Encrypted PDF

```dart
//Open a password-protected PDF by providing the password
PdfDocument document = PdfDocument(
    inputBytes: File('input.pdf').readAsBytesSync(),
    password: 'userpassword');

//Access and modify the document
PdfPage page = document.pages[0];

File('Output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Change User Password

```dart
PdfDocument document = PdfDocument(
    inputBytes: File('input.pdf').readAsBytesSync(),
    password: 'currentpassword');

//Change to a new password
document.security.userPassword = 'newpassword';

File('Output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Remove User Password

```dart
PdfDocument document = PdfDocument(
    inputBytes: File('input.pdf').readAsBytesSync(),
    password: 'currentpassword');

//Remove the password by setting it to an empty string
document.security.userPassword = '';

File('Output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Change Permissions on Existing PDF

```dart
PdfDocument document = PdfDocument(
    inputBytes: File('input.pdf').readAsBytesSync(),
    password: 'ownerpassword');

//Remove a specific permission
document.security.permissions.remove(PdfPermissionsFlags.print);

//Add new permissions
document.security.permissions.addAll(<PdfPermissionsFlags>[
    PdfPermissionsFlags.editContent,
    PdfPermissionsFlags.copyContent,
    PdfPermissionsFlags.editAnnotations,
    PdfPermissionsFlags.fillFields,
    PdfPermissionsFlags.assembleDocument,
    PdfPermissionsFlags.fullQualityPrint]);

File('Output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Permission Flags Reference

| Flag | Description |
|---|---|
| `PdfPermissionsFlags.print` | Allow low-quality printing |
| `PdfPermissionsFlags.fullQualityPrint` | Allow high-quality printing |
| `PdfPermissionsFlags.editContent` | Allow editing document content |
| `PdfPermissionsFlags.copyContent` | Allow copying text/graphics |
| `PdfPermissionsFlags.editAnnotations` | Allow adding/modifying annotations |
| `PdfPermissionsFlags.fillFields` | Allow filling form fields |
| `PdfPermissionsFlags.assembleDocument` | Allow inserting/deleting/rotating pages |
| `PdfPermissionsFlags.accessibilityCopyContent` | Allow accessibility tools to copy content |

---

## Notes

- Use different user and owner passwords for better security.
- AES 256-bit (`aesx256Bit`) is recommended for strong encryption.
- When opening with the owner password for AES 256 / AES 256 Revision 6, the user password field returns `null`.
- An empty `userPassword` (`''`) effectively removes the user password restriction.
