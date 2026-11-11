# Macros

> Macros — load macro-enabled documents, preserve/remove macros, check for macro presence, handle macro-enabled formats (DOTM, DOCM).

---

## Required common usings

```csharp
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
```

## Open and Save Macro-Enabled Documents

### Load and Save Macro-Enabled Document

#### Cross-Platform
```csharp
// Load macro-enabled document from stream
FileStream inputStream = new FileStream("template.dotm", FileMode.Open, FileAccess.ReadWrite);
WordDocument document = new WordDocument(inputStream, FormatType.Dotm);

// Preserve macros and save to stream
MemoryStream outputStream = new MemoryStream();
document.Save(outputStream, FormatType.Word2013Docm);
document.Close();
inputStream.Close();
```

#### Windows-Specific
```csharp
// Load macro-enabled document from file
WordDocument document = new WordDocument("template.dotm");

// Preserve macros and save
document.Save("output.docm");
document.Close();
```

---

## Check for Macros

### Detect Macro Presence

#### Common for Cross-Platform and Windows-Specific
```csharp
WordDocument document = new WordDocument("input.docm");

// Check if document contains macros
if (document.HasMacros)
{
    // Document has macros
}
document.Close();
```

---

## Remove Macros

### Remove All Macros from Document

#### Common for Cross-Platform and Windows-Specific
```csharp
WordDocument document = new WordDocument("input.docm");

// Check and remove macros
if (document.HasMacros)
    document.RemoveMacros();

// Save as regular document (non-macro-enabled)
document.Save("output.docx");
document.Close();
```

---

## Supported Macro-Enabled Formats

| Format | Extension | Description |
|--------|-----------|-------------|
| **Dotm** | .dotm | Macro-enabled template format |
| **Docm** | .docm | Macro-enabled document format (Word 2007+) |
| **Word2013Docm** | .docm | Macro-enabled document format (Word 2013+) |
| **Dotx** | .dotx | Standard template format (no macros) |
| **Docx** | .docx | Standard document format (no macros) |

---

## Preserve Macros Through Conversion

### Convert Macro-Enabled Document
```csharp
WordDocument document = new WordDocument("template.dotm", FormatType.Dotm);

// Macros are preserved during save if using macro-enabled format
document.Save("output.docm", FormatType.Word2013Docm);
document.Close();
```

### Important Notes
- Macros are only preserved when saving to macro-enabled formats (DOTM, DOCM, Word2013Docm)
- Converting to standard formats (DOCX, DOTX) removes macros during save
- Use `HasMacros` property to detect macro presence before processing
- `RemoveMacros()` method removes all macros and VBA code from document
- Cross-platform requires FileStream for file access

---

## Practical Example: Load, Check, and Save
```csharp
WordDocument document = new WordDocument("template.dotm");

// Check for macros
if (document.HasMacros)
{
    // Document contains macros - save in macro-enabled format
    document.Save("preserved.docm", FormatType.Word2013Docm);
}
else
{
    // No macros - save as regular document
    document.Save("regular.docx", FormatType.Docx);
}

document.Close();
```

---

## Placeholders
- `"template.dotm"` → Replace with `"{input-macro-document}"` or actual template path
- `"template.docm"` → Replace with `"{input-macro-document}"` 
- `"input.docm"` → Replace with actual document with macros
- `"output.docm"` → Replace with `"{output-filename}"`
- `FormatType.Dotm` → Use for macro-enabled templates (.dotm)
- `FormatType.Word2013Docm` → Use for macro-enabled documents (.docm)
