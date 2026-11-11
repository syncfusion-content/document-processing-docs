# Content Elements

> All block & inline content — paragraphs, headings, bullet lists, and numbered lists.

---

## Required common usings

```csharp
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
```

## Add Paragraph

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var para = section.AddParagraph();
para.AppendText("Your text here");
```

### With Formatting

#### Common for Cross-Platform and Windows-Specific
```csharp
var para = section.AddParagraph();
para.AppendText("Your text here");
para.ParagraphFormat.AfterSpacing = 6f;
para.ParagraphFormat.BeforeSpacing = 6f;

// Text formatting
var text = para.AppendText("Bold text");
text.CharacterFormat.Bold = true;
text.CharacterFormat.FontSize = 12f;
```

### Placeholders
- `"Your text here"` → Replace with `"{paragraph-text}"`

---

## Add Title / Headings

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var titlePara = section.AddParagraph();
titlePara.AppendText("Document Title");
titlePara.ApplyStyle(BuiltinStyle.Heading1);
section.AddParagraph(); // Spacing
```

### Built-in Styles

#### Common for Cross-Platform and Windows-Specific
```csharp
// Heading levels
titlePara.ApplyStyle(BuiltinStyle.Heading1); // Main title
titlePara.ApplyStyle(BuiltinStyle.Heading2); // Section heading
titlePara.ApplyStyle(BuiltinStyle.Heading3); // Subsection heading
```

### Placeholders
- `"Document Title"` → Replace with `"{title}"`

---

## Add Bullets

### Minimal Code (Simple)

#### Common for Cross-Platform and Windows-Specific
```csharp
var bullet = section.AddParagraph();
bullet.AppendText("• Bullet point text");
```

### With List Style

#### Common for Cross-Platform and Windows-Specific
```csharp
var bullet = section.AddParagraph();
bullet.AppendText("Bullet point text");
bullet.ListFormat.ApplyDefBulletStyle();
```

### Multiple Bullets

#### Common for Cross-Platform and Windows-Specific
```csharp
var items = new[] { "First item", "Second item", "Third item" };
foreach (var item in items)
{
    var bullet = section.AddParagraph();
    bullet.AppendText(item);
    bullet.ListFormat.ApplyDefBulletStyle();
}
```

### Placeholders
- `"Bullet point text"` → Replace with `"{bullet-text}"`

---

## Add Numbered List

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var listItem = section.AddParagraph();
listItem.AppendText("List item text");
listItem.ListFormat.ApplyDefNumberedStyle();
```

### Multiple Items

#### Common for Cross-Platform and Windows-Specific
```csharp
var items = new[] { "First step", "Second step", "Third step" };
foreach (var item in items)
{
    var listItem = section.AddParagraph();
    listItem.AppendText(item);
    listItem.ListFormat.ApplyDefNumberedStyle();
}
```

### Custom List Level

#### Common for Cross-Platform and Windows-Specific
```csharp
var listItem = section.AddParagraph();
listItem.AppendText("Main item");
listItem.ListFormat.ApplyDefNumberedStyle();

var subItem = section.AddParagraph();
subItem.AppendText("Sub item");
subItem.ListFormat.ApplyDefNumberedStyle();
subItem.ListFormat.IncreaseIndentLevel(); // Indent level

subItem = section.AddParagraph();
subItem.AppendText("Sub item 2");
subItem.ListFormat.ContinueListNumbering(); // Continues the list numbering from the previous list.
```

### Placeholders
- `"List item text"` → Replace with `"{list-item}"`
