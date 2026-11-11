# Find, Replace & Find-Item

> DocIO snippets for finding text, replacing text (string/regex), navigating matches, and locating document items by properties.

---

## Required common usings

```csharp
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
```

## Required usings for Windows-Specific

```csharp
using System;
using System.IO;
```

## Find first text occurrence

### Common for Cross-Platform and Windows-Specific
```csharp
TextSelection sel = doc.Find("{find-text}", caseSensitive: false, wholeWord: true);
if (sel != null)
{
    WTextRange r = sel.GetAsOneRange();
    r.Text = "{new-text}"; // optional inline replace
}
```

### Notes
- `Find` returns the first match as `TextSelection` (can be null).

---

## Find all occurrences (and optionally format)

### Common for Cross-Platform and Windows-Specific
```csharp
TextSelection[] hits = doc.FindAll("{find-text}", caseSensitive: true, wholeWord: true);
foreach (var h in hits)
{
```
### Cross-Platform
```csharp
    h.GetAsOneRange().CharacterFormat.HighlightColor = Syncfusion.Drawing.Color.Yellow;
```
### Windows-Specific
```csharp
    h.GetAsOneRange().CharacterFormat.HighlightColor = System.Drawing.Color.Yellow;
```
#### Common for Cross-Platform and Windows-Specific
```csharp
}
```

---

## Find using Regex

### Common for Cross-Platform and Windows-Specific
```csharp
var sel = doc.Find(new System.Text.RegularExpressions.Regex(@"{pattern}"));
var hits = doc.FindAll(new System.Text.RegularExpressions.Regex(@"{pattern}"));
```

---

## Find next occurrence (continue from a body item)

### Common for Cross-Platform and Windows-Specific
```csharp
// After a previous match
WTextRange prev = sel.GetAsOneRange();
TextSelection next = doc.FindNext(prev.OwnerParagraph, "{find-text}", caseSensitive: false, wholeWord: true);
```

### Notes
- `FindNext` starts searching after the provided `TextBodyItem` (e.g., a paragraph/table).

---

## Find multi-paragraph / multi-line text

Use these when the find text can span across paragraph boundaries.
### Common for Cross-Platform and Windows-Specific
```csharp
TextSelection[] hits = doc.FindSingleLine("{multiline-find}", caseSensitive: true, wholeWord: false);

// Regex variant
// TextSelection[] hits = doc.FindSingleLine(new Regex(@"{pattern}"));
```

---

## Find next multi-paragraph / multi-line text

### Common for Cross-Platform and Windows-Specific
```csharp
// After a previous match
WTextRange prev = sel.GetAsOneRange();
TextSelection[] next = doc.FindNextSingleLine(prev.OwnerParagraph, "{multiline-find}", caseSensitive: false, wholeWord: true);

// Regex variant
// TextSelection[] next = doc.FindNextSingleLine(prev.OwnerParagraph, new Regex(@"{pattern}"));
```

### Notes
- `FindNextSingleLine` starts searching after the provided `TextBodyItem` (e.g., a paragraph/table).

---

## Replace all occurrences (string → string)

### Common for Cross-Platform and Windows-Specific
```csharp
// Replaces ALL occurrences by default
// (set doc.ReplaceFirst = true to replace only first occurrence)
doc.Replace("{find-text}", "{replace-text}", caseSensitive: true, wholeWord: true);
```

### Replace only first occurrence

#### Common for Cross-Platform and Windows-Specific
```csharp
doc.ReplaceFirst = true;
doc.Replace("{find-text}", "{replace-text}", caseSensitive: false, wholeWord: false);
```

---

## Replace all occurrences (Regex → string)

### Common for Cross-Platform and Windows-Specific
```csharp
doc.Replace(new System.Text.RegularExpressions.Regex(@"{pattern}"), "{replace-text}");
```

---

## Replace multi-paragraph / multi-line text

Use these when the target text can span across paragraph boundaries.
### Common for Cross-Platform and Windows-Specific
```csharp
doc.ReplaceSingleLine("{multiline-find}", "{replace-text}", caseSensitive: true, wholeWord: false);

// Regex variant
// doc.ReplaceSingleLine(new Regex(@"{pattern}"), "{replace-text}");
```

---

## Replace using selected content (keeps formatting)

### Common for Cross-Platform and Windows-Specific
```csharp
TextSelection replacement = doc.Find(new System.Text.RegularExpressions.Regex(@"{replacement-pattern}"));
if (replacement != null)
    doc.Replace("{find-text}", replacement, caseSensitive: false, wholeWord: false, saveFormatting: true);
```

---

## Find items (pictures, charts, tables, fields, content controls)

### Find first item by a single property

#### Common for Cross-Platform and Windows-Specific
```csharp
// Example: find picture by AlternativeText
WPicture pic = doc.FindItemByProperty(EntityType.Picture, "AlternativeText", "{alt-text}") as WPicture;
if (pic != null)
{
    pic.Width = 100;
    pic.Height = 75;
}
```

### Find first item by multiple properties

#### Common for Cross-Platform and Windows-Specific
```csharp
string[] names  = { "Title", "Rows.Count" };
string[] values = { "{table-title}", "{rows-count}" };
WTable table = doc.FindItemByProperties(EntityType.Table, names, values) as WTable;
if (table != null)
    table.OwnerTextBody.ChildEntities.Remove(table);
```

### Find ALL items by property / properties

#### Common for Cross-Platform and Windows-Specific
```csharp
// Passing null/null can return all entities of a type
List<Entity> allFootnotes = doc.FindAllItemsByProperty(EntityType.Footnote, null, null);

string[] names  = { "ContentControlProperties.Title", "ContentControlProperties.Tag" };
string[] values = { "{title}", "{tag}" };
List<Entity> ccs = doc.FindAllItemsByProperties(EntityType.BlockContentControl, names, values);
```

### Placeholders
- `{find-text}`, `{replace-text}`, `{pattern}` etc.
- Entity properties must match DocIO property names (e.g., `AlternativeText`, `Rows.Count`).
