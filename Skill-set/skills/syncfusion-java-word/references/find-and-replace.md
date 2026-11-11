# Find, Replace & Find-Item

> DocIO snippets for finding text, replacing text (string/regex), navigating matches, and locating document items by properties.

---

## Required common usings

```java
import com.syncfusion.docio.*;
import java.util.regex.Pattern;
import java.util.List;
```

## Find first text occurrence

```java
TextSelection sel = doc.find("{find-text}", false, true);
if (sel != null) 
{
    WTextRange r = sel.getAsOneRange();
    r.setText("{new-text}"); // optional inline replace
}
```

### Notes
- `Find` returns the first match as `TextSelection` (can be null).

---

## Find all occurrences (and optionally format)

```java
TextSelection[] hits = document.findAll("{find-text}", true, true);
if (hits != null) {
    for (int i = 0; i < hits.length; i++) {
        TextSelection h = hits[i];
        WTextRange r = h.getAsOneRange();
        r.getCharacterFormat().setHighlightColor(ColorSupport.fromName("Yellow"));
    }
}
```

---

## Find using Regex

```java
Pattern pattern = Pattern.compile("{pattern}");
TextSelection sel = doc.find(pattern);
TextSelection[] hits = doc.findAll(pattern);
```

---

## Find next occurrence (continue from a body item)

```java
// After a previous match
WTextRange prev = sel.getAsOneRange();
TextSelection next = doc.findNext(prev.getOwnerParagraph(), "{find-text}", false, true);
```

### Notes
- `findNext` starts searching after the provided `TextBodyItem` (e.g., a paragraph/table).

---

## Find multi-paragraph / multi-line text

Use these when the find text can span across paragraph boundaries.
### Common for Cross-Platform and Windows-Specific
```java
TextSelection[] hits = doc.findSingleLine("{multiline-find}", true, false);

// Regex variant
// TextSelection[] hits = doc.findSingleLine(Pattern.compile("{pattern}"));
```

---

## Find next multi-paragraph / multi-line text

### Common for Cross-Platform and Windows-Specific
```java
// After a previous match
WTextRange prev = sel.getAsOneRange();
TextSelection[] next = doc.findNextSingleLine(prev.getOwnerParagraph(), "{multiline-find}", false, true);

// Regex variant
// TextSelection[] next = doc.findNextSingleLine(prev.getOwnerParagraph(), Pattern.compile("{pattern}"));
```

### Notes
- `FindNextSingleLine` starts searching after the provided `TextBodyItem` (e.g., a paragraph/table).

---

## Replace all occurrences (string → string)

```java
// Replaces ALL occurrences by default
// To replace only the first occurrence: doc.setReplaceFirst(true);
doc.replace("{find-text}", "{replace-text}", true, true);
```

### Replace only first occurrence

```java
doc.setReplaceFirst(true);
doc.replace("{find-text}", "{replace-text}", false, false);
```

---

## Replace all occurrences (Regex → string)

```java
Pattern pattern = Pattern.compile("{pattern}");
doc.replace(pattern, "{replace-text}");
```

---

## Replace multi-paragraph / multi-line text

Use these when the target text can span across paragraph boundaries.
```java
// Single-line string variant
doc.replaceSingleLine("{multiline-find}", "{replace-text}", true, false);

// Regex variant
// Pattern pattern = Pattern.compile("{pattern}");
// doc.replaceSingleLine(pattern, "{replace-text}");
```

---

## Replace using selected content (keeps formatting)

```java
Pattern replacementPattern = Pattern.compile("{replacement-pattern}");
TextSelection replacement = doc.find(replacementPattern);
if (replacement != null) {
    doc.replace("{find-text}", replacement, false, false, true);
}
```

---

## Find items (pictures, charts, tables, fields, content controls)

### Find first item by a single property

```java
// Example: find picture by AlternativeText
WPicture pic = (WPicture) doc.findItemByProperty(EntityType.Picture, "AlternativeText", "{alt-text}");
if (pic != null) {
    pic.setWidth(100);
    pic.setHeight(75);
}
```

### Find first item by multiple properties

```java
String[] names = { "Title", "Rows.Count" };
String[] values = { "{table-title}", "{rows-count}" };
WTable table = (WTable) doc.findItemByProperties(EntityType.Table, names, values);
if (table != null) {
    table.getOwnerTextBody().getChildEntities().remove(table);
}
```

### Find ALL items by property / properties

```java
// Passing null/null can return all entities of a type
List<Entity> allFootnotes = (List<Entity>) document.findAllItemsByProperty(EntityType.Footnote, null, null);
String[] names  = { "ContentControlProperties.Title", "ContentControlProperties.Tag" };
String[] values = { "{title}", "{tag}" };
List<Entity> ccs = (List<Entity>) document.findAllItemsByProperties(EntityType.BlockContentControl, names, values);
```

### Placeholders
- `{find-text}`, `{replace-text}`, `{pattern}` etc.
- Entity properties must match DocIO property names (e.g., `AlternativeText`, `Rows.Count`).
