# Macros

> Macros — load macro-enabled documents, preserve/remove macros, check for macro presence, handle macro-enabled formats (DOTM, DOCM).

---

## Required common usings

```java
import com.syncfusion.docio.*;
```

## Open and Save Macro-Enabled Documents

### Load and Save Macro-Enabled Document

```java
// Load macro-enabled document from stream
WordDocument document = new WordDocument("Input.dotm", FormatType.Dotm);
document.save("output.docm", FormatType.Word2013Docm);
document.close();
```

---

## Check for Macros

### Detect Macro Presence

```java
WordDocument document = new WordDocument("Input.dotm", FormatType.Dotm);
if(document.getHasMacros())
{
    // Document has macros
}
document.close();
```

---

## Remove Macros

### Remove All Macros from Document

```java
WordDocument document = new WordDocument("Input.dotm", FormatType.Dotm);
// Check and remove macros
if(document.getHasMacros())
{
document.removeMacros();
}
// Save as regular document (non-macro-enabled)
document.save("Output.docx", FormatType.Docx);
document.close();
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
```java
WordDocument document = new WordDocument("template.dotm", FormatType.Dotm);
// Macros are preserved during save if using macro-enabled format
document.save("output.docm", FormatType.Word2013Docm);
document.close();
```

### Important Notes
- Macros are only preserved when saving to macro-enabled formats (DOTM, DOCM, Word2013Docm)
- Converting to standard formats (DOCX, DOTX) removes macros during save
- Use `getHasMacros` property to detect macro presence before processing
- `removeMacros()` method removes all macros and VBA code from document
- Cross-platform requires FileStream for file access

---

## Practical Example: Load, Check, and Save
```java
WordDocument document = new WordDocument("template.dotm", FormatType.Dotm);
// Check for macros
if(document.getHasMacros())
{   
    // Document contains macros - save in macro-enabled format
    document.save("preserved.docm", FormatType.Word2013Docm);
}
else
{
    // No macros - save as regular document
    document.save("regular.docx", FormatType.Docx);
}
document.save("output.docx", FormatType.Docx);
document.close();
```

---

## Placeholders
- `"template.dotm"` → Replace with `"{input-macro-document}"` or actual template path
- `"template.docm"` → Replace with `"{input-macro-document}"` 
- `"input.docm"` → Replace with actual document with macros
- `"output.docm"` → Replace with `"{output-filename}"`
- `FormatType.Dotm` → Use for macro-enabled templates (.dotm)
- `FormatType.Word2013Docm` → Use for macro-enabled documents (.docm)
