# Working with Macros

> Loading, saving, and removing macros in PowerPoint presentations. Support for macro-enabled file types (.PPTM and .POTM).

---

## Required Usings

```csharp
using Syncfusion.Presentation;
```
---

## Load and Save Macro-Enabled Presentation

### Minimal Code
```csharp
FileStream inputStream = new FileStream("Sample.PPTM", FileMode.Open);
IPresentation pptxDoc = Presentation.Open(inputStream);
// Add content here
FileStream outputStream = new FileStream("Output.PPTM", FileMode.Create);
pptxDoc.Save(outputStream);
pptxDoc.Close();
```


### Placeholders
- `"Sample.PPTM"` → Replace with actual input file path
- `"Output.PPTM"` → Replace with desired output filename (keep .PPTM extension to preserve macros)

---

## Check if Presentation has Macros

### Minimal Code
```csharp
bool hasMacros = pptxDoc.HasMacros;
```

## Remove Macros from Presentation

### Minimal Code
```csharp
if (pptxDoc.HasMacros)
    pptxDoc.RemoveMacros();
```
