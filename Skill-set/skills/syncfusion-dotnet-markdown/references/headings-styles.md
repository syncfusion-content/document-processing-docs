# Headings and Paragraph Styles

## Overview
Apply paragraph styles including headings (H1-H6) and blockquotes to markdown paragraphs using the ApplyParagraphStyle method.

## Paragraph Styles

### MdParagraphStyle Enumeration
```csharp
public enum MdParagraphStyle
{
    None = 0,        // Normal paragraph (default)
    Heading1 = 1,    // # Heading 1
    Heading2 = 2,    // ## Heading 2
    Heading3 = 3,    // ### Heading 3
    Heading4 = 4,    // #### Heading 4
    Heading5 = 5,    // ##### Heading 5
    Heading6 = 6,    // ###### Heading 6
    BlockQuote = 7   // > Blockquote
}
```

## Applying Heading Styles

### Heading 1 (H1)
```csharp
MdParagraph h1 = markdown.AddParagraph();
h1.ApplyParagraphStyle("Heading 1");
h1.AddTextRange().Text = "Main Title";

// Output: # Main Title
```

### Heading 2 (H2)
```csharp
MdParagraph h2 = markdown.AddParagraph();
h2.ApplyParagraphStyle("Heading 2");
h2.AddTextRange().Text = "Section Title";

// Output: ## Section Title
```

### Heading 3 (H3)
```csharp
MdParagraph h3 = markdown.AddParagraph();
h3.ApplyParagraphStyle("Heading 3");
h3.AddTextRange().Text = "Subsection Title";

// Output: ### Subsection Title
```

### Heading 4 (H4)
```csharp
MdParagraph h4 = markdown.AddParagraph();
h4.ApplyParagraphStyle("Heading 4");
h4.AddTextRange().Text = "Sub-subsection Title";

// Output: #### Sub-subsection Title
```

### Heading 5 (H5)
```csharp
MdParagraph h5 = markdown.AddParagraph();
h5.ApplyParagraphStyle("Heading 5");
h5.AddTextRange().Text = "Minor Heading";

// Output: ##### Minor Heading
```

### Heading 6 (H6)
```csharp
MdParagraph h6 = markdown.AddParagraph();
h6.ApplyParagraphStyle("Heading 6");
h6.AddTextRange().Text = "Smallest Heading";

// Output: ###### Smallest Heading
```

## Normal Paragraphs

### Default Style (None)
```csharp
MdParagraph para = markdown.AddParagraph();
// StyleName is MdParagraphStyle.None by default
para.AddTextRange().Text = "This is a normal paragraph.";

// Output: This is a normal paragraph.
```

### Explicitly Set to None
```csharp
MdParagraph para = markdown.AddParagraph();
para.ApplyParagraphStyle("None"); // or leave default
para.AddTextRange().Text = "Normal text.";

// Output: Normal text.
```

## Blockquotes

### Single Level Blockquote
```csharp
MdParagraph quote = markdown.AddParagraph();
quote.ApplyParagraphStyle("Quote");
quote.AddTextRange().Text = "This is a quote.";

// Output: > This is a quote.
```

### Using HasBlockquote Property
```csharp
MdParagraph quote = markdown.AddParagraph();
quote.HasBlockquote = true;
quote.BlockQuoteLevel = 1;
quote.AddTextRange().Text = "Quote text.";

// Output: > Quote text.
```

### Nested Blockquotes
```csharp
// Level 1
MdParagraph quote1 = markdown.AddParagraph();
quote1.HasBlockquote = true;
quote1.BlockQuoteLevel = 1;
quote1.AddTextRange().Text = "First level quote";

// Level 2 (nested)
MdParagraph quote2 = markdown.AddParagraph();
quote2.HasBlockquote = true;
quote2.BlockQuoteLevel = 2;
quote2.AddTextRange().Text = "Second level quote";

// Output:
// > First level quote
// >> Second level quote
```

## Headings with Formatting

### Bold Heading
```csharp
MdParagraph h1 = markdown.AddParagraph();
h1.ApplyParagraphStyle("Heading 1");
MdTextRange boldTitle = h1.AddTextRange();
boldTitle.Text = "Important Title";
boldTitle.TextFormat.Bold = true;

// Output: # **Important Title**
```

### Heading with Code
```csharp
MdParagraph h2 = markdown.AddParagraph();
h2.ApplyParagraphStyle("Heading 2");
h2.AddTextRange().Text = "The ";
MdTextRange code = h2.AddTextRange();
code.Text = "AddParagraph()";
code.TextFormat.CodeSpan = true;
h2.AddTextRange().Text = " Method";

// Output: ## The `AddParagraph()` Method
```

### Heading with Multiple Formats
```csharp
MdParagraph h3 = markdown.AddParagraph();
h3.ApplyParagraphStyle("Heading 3");
h3.AddTextRange().Text = "Chapter ";
MdTextRange chapter = h3.AddTextRange();
chapter.Text = "5";
chapter.TextFormat.Bold = true;
h3.AddTextRange().Text = ": ";
MdTextRange title = h3.AddTextRange();
title.Text = "Advanced Topics";
title.TextFormat.Italic = true;

// Output: ### Chapter **5**: *Advanced Topics*
```

## Document Structure Examples

### Complete Document Hierarchy
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Main title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 1");
title.AddTextRange().Text = "User Guide";

// Introduction
MdParagraph intro = doc.AddParagraph();
intro.AddTextRange().Text = "This guide covers all features.";

// Section
MdParagraph section = doc.AddParagraph();
section.ApplyParagraphStyle("Heading 2");
section.AddTextRange().Text = "Getting Started";

// Subsection
MdParagraph subsection = doc.AddParagraph();
subsection.ApplyParagraphStyle("Heading 3");
subsection.AddTextRange().Text = "Installation";

// Content
MdParagraph content = doc.AddParagraph();
content.AddTextRange().Text = "Follow these steps...";

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Technical Documentation Structure
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Document title (H1)
MdParagraph docTitle = doc.AddParagraph();
docTitle.ApplyParagraphStyle("Heading 1");
docTitle.AddTextRange().Text = "API Documentation";

// Overview section (H2)
MdParagraph overview = doc.AddParagraph();
overview.ApplyParagraphStyle("Heading 2");
overview.AddTextRange().Text = "Overview";

MdParagraph overviewText = doc.AddParagraph();
overviewText.AddTextRange().Text = "This API provides...";

// Classes section (H2)
MdParagraph classes = doc.AddParagraph();
classes.ApplyParagraphStyle("Heading 2");
classes.AddTextRange().Text = "Classes";

// Specific class (H3)
MdParagraph className = doc.AddParagraph();
className.ApplyParagraphStyle("Heading 3");
className.AddTextRange().Text = "MarkdownDocument";

// Method (H4)
MdParagraph method = doc.AddParagraph();
method.ApplyParagraphStyle("Heading 4");
MdTextRange methodName = method.AddTextRange();
methodName.Text = "AddParagraph()";
methodName.TextFormat.CodeSpan = true;

// Method description
MdParagraph methodDesc = doc.AddParagraph();
methodDesc.AddTextRange().Text = "Adds a new paragraph to the document.";

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

## Blockquote Examples

### Simple Quote
```csharp
MarkdownDocument doc = new MarkdownDocument();

MdParagraph para = doc.AddParagraph();
para.AddTextRange().Text = "As Einstein said:";

MdParagraph quote = doc.AddParagraph();
quote.HasBlockquote = true;
quote.BlockQuoteLevel = 1;
quote.AddTextRange().Text = "Imagination is more important than knowledge.";

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Multi-Level Quote
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Original quote
MdParagraph quote1 = doc.AddParagraph();
quote1.HasBlockquote = true;
quote1.BlockQuoteLevel = 1;
quote1.AddTextRange().Text = "The original statement.";

// Response to quote
MdParagraph quote2 = doc.AddParagraph();
quote2.HasBlockquote = true;
quote2.BlockQuoteLevel = 2;
quote2.AddTextRange().Text = "A response to the statement.";

// Further nested response
MdParagraph quote3 = doc.AddParagraph();
quote3.HasBlockquote = true;
quote3.BlockQuoteLevel = 3;
quote3.AddTextRange().Text = "An even deeper response.";

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Quote with Formatting
```csharp
MdParagraph quote = markdown.AddParagraph();
quote.HasBlockquote = true;
quote.BlockQuoteLevel = 1;
quote.AddTextRange().Text = "This is ";
MdTextRange bold = quote.AddTextRange();
bold.Text = "important";
bold.TextFormat.Bold = true;
quote.AddTextRange().Text = " information.";

// Output: > This is **important** information.
```

## Checking Paragraph Style

### Read Existing Style
```csharp
// When parsing markdown
foreach (IMdBlock block in markdown.Blocks)
{
    if (block is MdParagraph para)
    {
        switch (para.StyleName)
        {
            case MdParagraphStyle.Heading1:
                Console.WriteLine("H1: " + GetParagraphText(para));
                break;
            case MdParagraphStyle.Heading2:
                Console.WriteLine("H2: " + GetParagraphText(para));
                break;
            case MdParagraphStyle.BlockQuote:
                Console.WriteLine("Quote: " + GetParagraphText(para));
                break;
            case MdParagraphStyle.None:
                Console.WriteLine("Normal: " + GetParagraphText(para));
                break;
        }
    }
}

string GetParagraphText(MdParagraph para)
{
    StringBuilder text = new StringBuilder();
    foreach (IMdInline inline in para.Inlines)
    {
        if (inline is MdTextRange textRange)
            text.Append(textRange.Text);
    }
    return text.ToString();
}
```

## HTML Conversion Output

When converting to HTML:
- Heading 1 → `<h1>Text</h1>`
- Heading 2 → `<h2>Text</h2>`
- Heading 3 → `<h3>Text</h3>`
- Heading 4 → `<h4>Text</h4>`
- Heading 5 → `<h5>Text</h5>`
- Heading 6 → `<h6>Text</h6>`
- Normal → `<p>Text</p>`
- Blockquote → `<blockquote><p>Text</p></blockquote>`

## Best Practices

1. **Use H1 for Document Title**: Only one H1 per document
2. **Hierarchical Structure**: H2 → H3 → H4, don't skip levels
3. **Consistent Naming**: Use descriptive heading text
4. **Blockquote Attribution**: Add source after quotes
5. **Heading Length**: Keep headings concise (5-10 words max)
6. **Semantic Structure**: Use headings for document outline, not just styling

## Common Patterns

### Table of Contents Structure
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Document title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 1");
title.AddTextRange().Text = "Complete Guide";

// Main sections
string[] sections = { "Introduction", "Setup", "Usage", "Advanced", "Troubleshooting" };

foreach (string section in sections)
{
    MdParagraph h2 = doc.AddParagraph();
    h2.ApplyParagraphStyle("Heading 2");
    h2.AddTextRange().Text = section;
    
    // Add placeholder content
    MdParagraph content = doc.AddParagraph();
    content.AddTextRange().Text = $"Content for {section} section...";
}

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### FAQ Structure
```csharp
MarkdownDocument doc = new MarkdownDocument();

// FAQ title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 1");
title.AddTextRange().Text = "Frequently Asked Questions";

// Question 1
MdParagraph q1 = doc.AddParagraph();
q1.ApplyParagraphStyle("Heading 3");
q1.AddTextRange().Text = "How do I install?";

MdParagraph a1 = doc.AddParagraph();
a1.AddTextRange().Text = "Installation steps...";

// Question 2
MdParagraph q2 = doc.AddParagraph();
q2.ApplyParagraphStyle("Heading 3");
q2.AddTextRange().Text = "How do I get support?";

MdParagraph a2 = doc.AddParagraph();
a2.AddTextRange().Text = "Contact support at...";

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

## Troubleshooting

- **Style not applying**: Verify correct style name string
- **Heading numbers wrong**: Check BlockQuoteLevel values (1-based)
- **Blockquote not showing**: Ensure HasBlockquote is set to true
- **Nested quotes**: Increment BlockQuoteLevel for each nesting level
- **Empty headings**: Add text content to heading paragraphs

## Style Name Mappings

Valid strings for `ApplyParagraphStyle()`:
- `"Heading 1"` → MdParagraphStyle.Heading1
- `"Heading 2"` → MdParagraphStyle.Heading2
- `"Heading 3"` → MdParagraphStyle.Heading3
- `"Heading 4"` → MdParagraphStyle.Heading4
- `"Heading 5"` → MdParagraphStyle.Heading5
- `"Heading 6"` → MdParagraphStyle.Heading6
- `"Quote"` → MdParagraphStyle.BlockQuote
- `"None"` → MdParagraphStyle.None (default)
