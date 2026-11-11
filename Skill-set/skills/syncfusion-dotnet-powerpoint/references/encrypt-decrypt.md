# Encrypt Decrypt

> Protect PowerPoint presentations by encrypting with passwords, decrypting encrypted files, and setting write protection to restrict unauthorized access and editing.

---
# Encrypt Decrypt
### Required Usings

```csharp
using Syncfusion.Presentation;
```

## Encrypting with Password

### Minimal Code

```csharp
// Open the presentation
// Encrypt the presentation with a password

pptxDoc.Encrypt("{password}");

// Save the encrypted presentation
```

### Placeholders

- `"{password}"` → Replace with your desired encryption password (e.g., `"syncfusion"`)
---

## Opening Encrypted Presentation

### Minimal Code

```csharp

// Open an encrypted presentation by providing the password
using (FileStream inputStream = new FileStream("Encrypted.pptx", FileMode.Open))
{
    using (IPresentation pptxDoc = Presentation.Open(inputStream, "{password}"))
    {
        // Access and work with the decrypted presentation
    }
}
```

### Placeholders

- `"{password}"` → Replace with the encryption password (e.g., `"PASSWORD!@1#$"`)
- `"Encrypted.pptx"` → Replace with your encrypted presentation file path

---

## Removing Encryption

### Minimal Code

```csharp
// Remove encryption from the document
pptxDoc.RemoveEncryption();
```

### Placeholders

- `"{password}"` → Replace with the encryption password


---

## Write Protection

### Minimal Code

```csharp

// Set write protection with password
pptxDoc.SetWriteProtection("{password}");
```

### Placeholders

- `"{password}"` → Replace with your desired write protection password (e.g., `"MYPASSWORD"`)

---

## Removing Write Protection

### Minimal Code

```csharp
// Open the write-protected presentation

// Check if write protection is enabled
if (pptxDoc.IsWriteProtected)
{
    // Remove write protection
    pptxDoc.RemoveWriteProtection();
}
```

---
