# Text Formatting in Markdown

## Overview
Apply various text formatting options including bold, italic, strikethrough, code span, subscript, and superscript using the MdTextFormat class.

## Text Format Properties

### MdTextFormat Class
The `MdTextFormat` class provides all text formatting capabilities.

**Properties:**
- `Bold` - Bold text formatting
- `Italic` - Italic text formatting
- `StrikeThrough` - Strikethrough formatting
- `CodeSpan` - Inline code formatting
- `IsHidden` - Hidden text (HTML comments)
- `SubSuperScriptType` - Subscript or superscript (MdSubSuperScript enum)

## Bold Text

### Apply Bold Formatting
```csharp
MdParagraph para = markdown.AddParagraph();
MdTextRange boldText = para.AddTextRange();
boldText.Text = "This is bold text";
boldText.TextFormat.Bold = true;

// Output: **This is bold text**
```

### Bold with Other Text
```csharp
MdParagraph para = markdown.AddParagraph();
para.AddTextRange().Text = "This is ";
MdTextRange bold = para.AddTextRange();
bold.Text = "bold";
bold.TextFormat.Bold = true;
para.AddTextRange().Text = " text.";

// Output: This is **bold** text.
```

## Italic Text

### Apply Italic Formatting
```csharp
MdParagraph para = markdown.AddParagraph();
MdTextRange italicText = para.AddTextRange();
italicText.Text = "This is italic text";
italicText.TextFormat.Italic = true;

// Output: *This is italic text*
```

### Italic in Sentence
```csharp
MdParagraph para = markdown.AddParagraph();
para.AddTextRange().Text = "This is ";
MdTextRange italic = para.AddTextRange();
italic.Text = "italic";
italic.TextFormat.Italic = true;
para.AddTextRange().Text = " text.";

// Output: This is *italic* text.
```

## Bold and Italic Combined

### Apply Both Bold and Italic
```csharp
MdParagraph para = markdown.AddParagraph();
MdTextRange boldItalic = para.AddTextRange();
boldItalic.Text = "Bold and Italic";
boldItalic.TextFormat.Bold = true;
boldItalic.TextFormat.Italic = true;

// Output: ***Bold and Italic***
```

## Strikethrough Text

### Apply Strikethrough Formatting
```csharp
MdParagraph para = markdown.AddParagraph();
MdTextRange strikeText = para.AddTextRange();
strikeText.Text = "Strikethrough text";
strikeText.TextFormat.StrikeThrough = true;

// Output: ~~Strikethrough text~~
```

### Strikethrough in Context
```csharp
MdParagraph para = markdown.AddParagraph();
para.AddTextRange().Text = "This is ";
MdTextRange strike = para.AddTextRange();
strike.Text = "deleted";
strike.TextFormat.StrikeThrough = true;
para.AddTextRange().Text = " text.";

// Output: This is ~~deleted~~ text.
```

## Inline Code (Code Span)

### Apply Code Span Formatting
```csharp
MdParagraph para = markdown.AddParagraph();
MdTextRange code = para.AddTextRange();
code.Text = "var x = 10;";
code.TextFormat.CodeSpan = true;

// Output: `var x = 10;`
```

### Code Span in Sentence
```csharp
MdParagraph para = markdown.AddParagraph();
para.AddTextRange().Text = "Use the ";
MdTextRange code = para.AddTextRange();
code.Text = "Console.WriteLine()";
code.TextFormat.CodeSpan = true;
para.AddTextRange().Text = " method to print output.";

// Output: Use the `Console.WriteLine()` method to print output.
```

## Subscript

### Apply Subscript Formatting
```csharp
MdParagraph para = markdown.AddParagraph();
para.AddTextRange().Text = "H";
MdTextRange sub = para.AddTextRange();
sub.Text = "2";
sub.TextFormat.SubSuperScriptType = MdSubSuperScript.SubScript;
para.AddTextRange().Text = "O";

// Output: H<sub>2</sub>O
```

### Chemical Formula
```csharp
MdParagraph para = markdown.AddParagraph();
para.AddTextRange().Text = "CO";
MdTextRange sub = para.AddTextRange();
sub.Text = "2";
sub.TextFormat.SubSuperScriptType = MdSubSuperScript.SubScript;

// Output: CO<sub>2</sub>
```

## Superscript

### Apply Superscript Formatting
```csharp
MdParagraph para = markdown.AddParagraph();
para.AddTextRange().Text = "x";
MdTextRange sup = para.AddTextRange();
sup.Text = "2";
sup.TextFormat.SubSuperScriptType = MdSubSuperScript.SuperScript;

// Output: x<sup>2</sup>
```

### Mathematical Expression
```csharp
MdParagraph para = markdown.AddParagraph();
para.AddTextRange().Text = "E = mc";
MdTextRange sup = para.AddTextRange();
sup.Text = "2";
sup.TextFormat.SubSuperScriptType = MdSubSuperScript.SuperScript;

// Output: E = mc<sup>2</sup>
```

## Hidden Text (Comments)

### Create Hidden Text
```csharp
MdParagraph para = markdown.AddParagraph();
MdTextRange hidden = para.AddTextRange();
hidden.Text = "This is a comment";
hidden.TextFormat.IsHidden = true;

// Output: <!--This is a comment-->
```

## Combined Formatting

### Multiple Formats on Same Text
```csharp
MdParagraph para = markdown.AddParagraph();
MdTextRange formatted = para.AddTextRange();
formatted.Text = "Important";
formatted.TextFormat.Bold = true;
formatted.TextFormat.Italic = true;
formatted.TextFormat.StrikeThrough = true;

// Output: ~~***Important***~~
```

### Complex Formatting in Paragraph
```csharp
MdParagraph para = markdown.AddParagraph();

para.AddTextRange().Text = "This is ";

MdTextRange bold = para.AddTextRange();
bold.Text = "bold";
bold.TextFormat.Bold = true;

para.AddTextRange().Text = ", ";

MdTextRange italic = para.AddTextRange();
italic.Text = "italic";
italic.TextFormat.Italic = true;

para.AddTextRange().Text = ", and ";

MdTextRange code = para.AddTextRange();
code.Text = "code";
code.TextFormat.CodeSpan = true;

para.AddTextRange().Text = " text.";

// Output: This is **bold**, *italic*, and `code` text.
```

## MdSubSuperScript Enumeration

```csharp
public enum MdSubSuperScript
{
    None = 0,        // Normal text (default)
    SuperScript = 1, // Superscript: x<sup>2</sup>
    SubScript = 2    // Subscript: H<sub>2</sub>O
}
```

## Practical Examples

### Technical Documentation
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 1");
title.AddTextRange().Text = "API Reference";

// Method description
MdParagraph desc = doc.AddParagraph();
desc.AddTextRange().Text = "The ";
MdTextRange method = desc.AddTextRange();
method.Text = "AddParagraph()";
method.TextFormat.CodeSpan = true;
desc.AddTextRange().Text = " method adds a new paragraph to the document.";

// Important note
MdParagraph note = doc.AddParagraph();
MdTextRange important = note.AddTextRange();
important.Text = "Important:";
important.TextFormat.Bold = true;
note.AddTextRange().Text = " Always dispose the document after use.";

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Scientific Content
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Chemical formula
MdParagraph formula = doc.AddParagraph();
formula.AddTextRange().Text = "Water molecule: H";
MdTextRange sub1 = formula.AddTextRange();
sub1.Text = "2";
sub1.TextFormat.SubSuperScriptType = MdSubSuperScript.SubScript;
formula.AddTextRange().Text = "O";

// Mathematical equation
MdParagraph equation = doc.AddParagraph();
equation.AddTextRange().Text = "Pythagorean theorem: a";
MdTextRange sup1 = equation.AddTextRange();
sup1.Text = "2";
sup1.TextFormat.SubSuperScriptType = MdSubSuperScript.SuperScript;
equation.AddTextRange().Text = " + b";
MdTextRange sup2 = equation.AddTextRange();
sup2.Text = "2";
sup2.TextFormat.SubSuperScriptType = MdSubSuperScript.SuperScript;
equation.AddTextRange().Text = " = c";
MdTextRange sup3 = equation.AddTextRange();
sup3.Text = "2";
sup3.TextFormat.SubSuperScriptType = MdSubSuperScript.SuperScript;

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Code Documentation
```csharp
MarkdownDocument doc = new MarkdownDocument();

MdParagraph para = doc.AddParagraph();
para.AddTextRange().Text = "Use ";
MdTextRange var = para.AddTextRange();
var.Text = "var";
var.TextFormat.CodeSpan = true;
para.AddTextRange().Text = " for type inference, or ";
MdTextRange explicit = para.AddTextRange();
explicit.Text = "string";
explicit.TextFormat.CodeSpan = true;
para.AddTextRange().Text = " for explicit declaration.";

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

## Best Practices

1. **Set Format Before or After Text**: TextFormat can be set before or after assigning text
2. **Combine Formats Carefully**: Test combined formatting for desired output
3. **Use Code Span for Code**: Always use CodeSpan for inline code snippets
4. **Subscript/Superscript**: Use for scientific notation, mathematical expressions
5. **Hidden Text**: Use for comments that shouldn't appear in final output
6. **Consistency**: Maintain consistent formatting throughout the document

## Common Patterns

### Reusable Format Template
```csharp
// Create a reusable format
MdTextFormat emphasisFormat = new MdTextFormat
{
    Bold = true,
    Italic = true
};

// Apply to multiple text ranges
MdParagraph para = markdown.AddParagraph();
MdTextRange text1 = para.AddTextRange();
text1.Text = "First emphasis";
text1.TextFormat.Bold = emphasisFormat.Bold;
text1.TextFormat.Italic = emphasisFormat.Italic;
```

### Conditional Formatting
```csharp
bool isImportant = true;

MdParagraph para = markdown.AddParagraph();
MdTextRange text = para.AddTextRange();
text.Text = "Message";

if (isImportant)
{
    text.TextFormat.Bold = true;
}
```

### Clear Formatting
```csharp
// Reset to default (no formatting)
MdTextRange text = para.AddTextRange();
text.Text = "Normal text";
text.TextFormat.Bold = false;
text.TextFormat.Italic = false;
text.TextFormat.StrikeThrough = false;
text.TextFormat.CodeSpan = false;
text.TextFormat.SubSuperScriptType = MdSubSuperScript.None;
```

## Troubleshooting

- **Formatting not showing**: Verify TextFormat properties are set to true
- **Combined formats**: Test output as some combinations may not render as expected
- **Code span with special chars**: Use CodeSpan for proper escaping
- **Subscript/Superscript rendering**: Ensure HTML rendering is enabled
- **Hidden text visibility**: Hidden text appears as HTML comments in output

## HTML Output

When converting to HTML:
- Bold → `<strong>text</strong>`
- Italic → `<em>text</em>`
- Strikethrough → `<del>text</del>`
- Code span → `<code>text</code>`
- Subscript → `<sub>text</sub>`
- Superscript → `<sup>text</sup>`
- Hidden → `<!-- text -->`
