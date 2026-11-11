# Find and Replace

> Search for text patterns in PowerPoint presentations and replace them with other text. Supports matching by case, whole words, regex patterns, and highlighting found text.

---
# Find and Replace

### Required Usings
```csharp
using Syncfusion.Presentation;
using System.Text.RegularExpressions;
```

---

## Find and Replace Text

### Minimal Code

```csharp
// Find all occurrences of a particular text
ITextSelection[] textSelections = pptxDoc.FindAll("{search-text}", false, false);

foreach (ITextSelection textSelection in textSelections)
{
    // Get the found text as a single text part
    ITextPart textPart = textSelection.GetAsOneTextPart();
    
    // Replace the text
    textPart.Text = "{replacement-text}";
}

```

### Placeholders

- `"{search-text}"` → Replace with the text you want to find (e.g., `"product"`)
- `"{replacement-text}"` → Replace with the replacement text (e.g., `"Service"`)

---

## Match Case

### Minimal Code

```csharp
// Find all occurrences matching exact case
ITextSelection[] textSelections = pptxDoc.FindAll("{search-text}", true, false);

foreach (ITextSelection textSelection in textSelections)
{
    ITextPart textPart = textSelection.GetAsOneTextPart();
    textPart.Text = "{replacement-text}";
}

```

### Placeholders

- `true` (2nd parameter) → Set to `true` to match case exactly; `false` for case-insensitive search
- `false` (3rd parameter) → Set to `true` to match whole words only
- `"{search-text}"` → Replace with your search term
- `"{replacement-text}"` → Replace with your replacement text

---

## Whole Words Only

### Minimal Code

```csharp

    // Find whole words only
ITextSelection[] textSelections = pptxDoc.FindAll("{search-text}", false, true);

foreach (ITextSelection textSelection in textSelections)
{
    ITextPart textPart = textSelection.GetAsOneTextPart();
    textPart.Text = "{replacement-text}";
}

```

### Placeholders

- `true` (3rd parameter) → Set to `true` to match only complete words; `false` for partial matches
- `"{search-text}"` → Replace with your search term
- `"{replacement-text}"` → Replace with your replacement text

---

## Find First Occurrence

### Minimal Code

```csharp

// Find only the first occurrence
ITextSelection textSelection = pptxDoc.Find("{search-text}", false, false);

// Replace the first occurrence
ITextPart textPart = textSelection.GetAsOneTextPart();
textPart.Text = "{replacement-text}";
    
```

### Placeholders

- `Find()` method → Uses `Find()` instead of `FindAll()` to replace only the first occurrence
- `"{search-text}"` → Replace with your search term
- `"{replacement-text}"` → Replace with your replacement text

---

## Find and Replace Using Regex

### Minimal Code

```csharp
// Find all occurrences matching a regex pattern
ITextSelection[] textSelections = pptxDoc.FindAll(new Regex("{regex-pattern}"));

foreach (ITextSelection textSelection in textSelections)
{
    ITextPart textPart = textSelection.GetAsOneTextPart();
    textPart.Text = "{replacement-text}";
}
        
```

### Placeholders

- `"{regex-pattern}"` → Replace with your regex pattern (e.g., `"{[A-Za-z]+}"` for curly-braced words)
- `"{replacement-text}"` → Replace with your replacement text
- `new Regex()` → Enables pattern-based search instead of literal text search

---

## Find and Highlight

### Minimal Code

```csharp
// Find all occurrences of text
ITextSelection[] textSelections = pptxDoc.FindAll("{search-text}", false, false);

foreach (ITextSelection textSelection in textSelections)
{
    // Highlight each found text part
    foreach (ITextPart textPart in textSelection.GetTextParts())
    {
        textPart.Font.HighlightColor = ColorObject.Yellow;
    }
}
```

### Placeholders

- `"{search-text}"` → Replace with the text you want to find and highlight
- `ColorObject.Yellow` → Replace with desired highlight color (e.g., `ColorObject.Red`, `ColorObject.Green`)


---

## Find and Replace in Specific Slide

### Minimal Code

```csharp
// Find all occurrences in the specific slide
ITextSelection[] textSelections = slide.FindAll("{search-text}", false, false);

foreach (ITextSelection textSelection in textSelections)
{
    ITextPart textPart = textSelection.GetAsOneTextPart();
    textPart.Text = "{replacement-text}";
}
```

### Placeholders

- `"{search-text}"` → Replace with the text you want to find
- `"{replacement-text}"` → Replace with your replacement text

---
