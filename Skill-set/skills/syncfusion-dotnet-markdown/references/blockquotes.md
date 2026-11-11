# Blockquotes

## Overview
Create single and multi-level blockquotes using the HasBlockquote and BlockQuoteLevel properties of MdParagraph.

## MdParagraph Blockquote Properties

```csharp
public class MdParagraph : IMdBlock
{
    public bool HasBlockquote { get; set; }    // Enable blockquote
    public int BlockQuoteLevel { get; set; }   // Nesting level (1-based)
    public bool BlockQuoteHasLeadingSpace { get; set; } // Include a space after the '>' marker
    // ... other properties
}
```

## Creating Blockquotes

### Simple Blockquote
```csharp
MarkdownDocument doc = new MarkdownDocument();

MdParagraph quote = doc.AddParagraph();
quote.HasBlockquote = true;
quote.BlockQuoteLevel = 1;
quote.AddTextRange().Text = "This is a quoted text.";

string markdown = doc.GetMarkdownText();
doc.Dispose();

// Output: > This is a quoted text.
```
### Blockquote Leading Space
```csharp
MarkdownDocument doc = new MarkdownDocument();

// With leading space after '>'
MdParagraph spaced = doc.AddParagraph();
spaced.HasBlockquote = true;
spaced.BlockQuoteLevel = 1;
spaced.BlockQuoteHasLeadingSpace = true; // results in "> " prefix
spaced.AddTextRange().Text = "This quote shows a leading space.";

// Without leading space after '>'
MdParagraph nospace = doc.AddParagraph();
nospace.HasBlockquote = true;
nospace.BlockQuoteLevel = 1;
nospace.BlockQuoteHasLeadingSpace = false; // results in ">" prefix
nospace.AddTextRange().Text = "This quote has no leading space.";

string markdown2 = doc.GetMarkdownText();
doc.Dispose();

// Output:
// > This quote shows a leading space.
// >This quote has no leading space.
```

### Using ApplyParagraphStyle
```csharp
MdParagraph quote = markdown.AddParagraph();
quote.ApplyParagraphStyle("Quote");
quote.AddTextRange().Text = "Quoted text.";

// Equivalent to:
// quote.HasBlockquote = true;
// quote.BlockQuoteLevel = 1;

// Output: > Quoted text.
```

### Multiple Blockquote Paragraphs
```csharp
MarkdownDocument doc = new MarkdownDocument();

MdParagraph quote1 = doc.AddParagraph();
quote1.HasBlockquote = true;
quote1.BlockQuoteLevel = 1;
quote1.AddTextRange().Text = "First paragraph of quote.";

MdParagraph quote2 = doc.AddParagraph();
quote2.HasBlockquote = true;
quote2.BlockQuoteLevel = 1;
quote2.AddTextRange().Text = "Second paragraph of quote.";

string markdown = doc.GetMarkdownText();
doc.Dispose();

// Output:
// > First paragraph of quote.
// > Second paragraph of quote.
```

## Nested Blockquotes

### Two-Level Nesting
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Level 1
MdParagraph level1 = doc.AddParagraph();
level1.HasBlockquote = true;
level1.BlockQuoteLevel = 1;
level1.AddTextRange().Text = "First level quote.";

// Level 2 (nested)
MdParagraph level2 = doc.AddParagraph();
level2.HasBlockquote = true;
level2.BlockQuoteLevel = 2;
level2.AddTextRange().Text = "Second level quote.";

string markdown = doc.GetMarkdownText();
doc.Dispose();

// Output:
// > First level quote.
// >> Second level quote.
```

### Three-Level Nesting
```csharp
MarkdownDocument doc = new MarkdownDocument();

MdParagraph level1 = doc.AddParagraph();
level1.HasBlockquote = true;
level1.BlockQuoteLevel = 1;
level1.AddTextRange().Text = "Level 1";

MdParagraph level2 = doc.AddParagraph();
level2.HasBlockquote = true;
level2.BlockQuoteLevel = 2;
level2.AddTextRange().Text = "Level 2";

MdParagraph level3 = doc.AddParagraph();
level3.HasBlockquote = true;
level3.BlockQuoteLevel = 3;
level3.AddTextRange().Text = "Level 3";

string markdown = doc.GetMarkdownText();
doc.Dispose();

// Output:
// > Level 1
// >> Level 2
// >>> Level 3
```

## Blockquotes with Formatting

### Bold Text in Blockquote
```csharp
MdParagraph quote = markdown.AddParagraph();
quote.HasBlockquote = true;
quote.BlockQuoteLevel = 1;
MdTextRange bold = quote.AddTextRange();
bold.Text = "Important message";
bold.TextFormat.Bold = true;

// Output: > **Important message**
```

### Multiple Formats in Blockquote
```csharp
MdParagraph quote = markdown.AddParagraph();
quote.HasBlockquote = true;
quote.BlockQuoteLevel = 1;
quote.AddTextRange().Text = "This is ";
MdTextRange bold = quote.AddTextRange();
bold.Text = "very";
bold.TextFormat.Bold = true;
quote.AddTextRange().Text = " ";
MdTextRange italic = quote.AddTextRange();
italic.Text = "important";
italic.TextFormat.Italic = true;
quote.AddTextRange().Text = ".";

// Output: > This is **very** *important*.
```

### Code Span in Blockquote
```csharp
MdParagraph quote = markdown.AddParagraph();
quote.HasBlockquote = true;
quote.BlockQuoteLevel = 1;
quote.AddTextRange().Text = "Use the ";
MdTextRange code = quote.AddTextRange();
code.Text = "AddParagraph()";
code.TextFormat.CodeSpan = true;
quote.AddTextRange().Text = " method.";

// Output: > Use the `AddParagraph()` method.
```

## Practical Examples

### Simple Quote with Attribution
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Quote
MdParagraph quote = doc.AddParagraph();
quote.HasBlockquote = true;
quote.BlockQuoteLevel = 1;
quote.AddTextRange().Text = "The only way to do great work is to love what you do.";

// Attribution
MdParagraph attribution = doc.AddParagraph();
attribution.AddTextRange().Text = "— Steve Jobs";

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Warning or Note Box
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Warning heading
MdParagraph warning = doc.AddParagraph();
warning.HasBlockquote = true;
warning.BlockQuoteLevel = 1;
MdTextRange warningText = warning.AddTextRange();
warningText.Text = "⚠️ Warning";
warningText.TextFormat.Bold = true;

// Warning message
MdParagraph message = doc.AddParagraph();
message.HasBlockquote = true;
message.BlockQuoteLevel = 1;
message.AddTextRange().Text = "This action cannot be undone. Proceed with caution.";

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Note or Tip Box
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Note heading
MdParagraph note = doc.AddParagraph();
note.HasBlockquote = true;
note.BlockQuoteLevel = 1;
MdTextRange noteText = note.AddTextRange();
noteText.Text = "💡 Tip";
noteText.TextFormat.Bold = true;

// Tip content
MdParagraph tip = doc.AddParagraph();
tip.HasBlockquote = true;
tip.BlockQuoteLevel = 1;
tip.AddTextRange().Text = "Use keyboard shortcuts to work faster.";

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Multi-Paragraph Quote
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Context
MdParagraph context = doc.AddParagraph();
context.AddTextRange().Text = "From the documentation:";

// Quote paragraph 1
MdParagraph para1 = doc.AddParagraph();
para1.HasBlockquote = true;
para1.BlockQuoteLevel = 1;
para1.AddTextRange().Text = "The MarkdownDocument class is the root of the document object model.";

// Quote paragraph 2
MdParagraph para2 = doc.AddParagraph();
para2.HasBlockquote = true;
para2.BlockQuoteLevel = 1;
para2.AddTextRange().Text = "It contains collections of blocks like paragraphs, tables, and code blocks.";

// Quote paragraph 3
MdParagraph para3 = doc.AddParagraph();
para3.HasBlockquote = true;
para3.BlockQuoteLevel = 1;
para3.AddTextRange().Text = "Use the Dispose() method to release resources when done.";

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Conversation Thread
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Original message
MdParagraph original = doc.AddParagraph();
original.HasBlockquote = true;
original.BlockQuoteLevel = 1;
original.AddTextRange().Text = "John: What time is the meeting?";

// Reply
MdParagraph reply1 = doc.AddParagraph();
reply1.HasBlockquote = true;
reply1.BlockQuoteLevel = 2;
reply1.AddTextRange().Text = "Jane: It's at 3 PM.";

// Further reply
MdParagraph reply2 = doc.AddParagraph();
reply2.HasBlockquote = true;
reply2.BlockQuoteLevel = 3;
reply2.AddTextRange().Text = "Mike: Can we reschedule to 4 PM?";

string markdown = doc.GetMarkdownText();
doc.Dispose();

// Output:
// > John: What time is the meeting?
// >> Jane: It's at 3 PM.
// >>> Mike: Can we reschedule to 4 PM?
```

### FAQ with Questions as Blockquotes
```csharp
MarkdownDocument doc = new MarkdownDocument();

// FAQ title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 1");
title.AddTextRange().Text = "Frequently Asked Questions";

// Question 1
MdParagraph q1 = doc.AddParagraph();
q1.HasBlockquote = true;
q1.BlockQuoteLevel = 1;
MdTextRange q1Text = q1.AddTextRange();
q1Text.Text = "Q: How do I install the library?";
q1Text.TextFormat.Bold = true;

// Answer 1
MdParagraph a1 = doc.AddParagraph();
a1.AddTextRange().Text = "A: Use NuGet Package Manager or dotnet CLI.";

// Question 2
MdParagraph q2 = doc.AddParagraph();
q2.HasBlockquote = true;
q2.BlockQuoteLevel = 1;
MdTextRange q2Text = q2.AddTextRange();
q2Text.Text = "Q: Is it cross-platform?";
q2Text.TextFormat.Bold = true;

// Answer 2
MdParagraph a2 = doc.AddParagraph();
a2.AddTextRange().Text = "A: Yes, it supports .NET Core and .NET Framework.";

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

## Blockquotes with Other Elements

### Blockquote with List
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Quote introduction
MdParagraph intro = doc.AddParagraph();
intro.HasBlockquote = true;
intro.BlockQuoteLevel = 1;
intro.AddTextRange().Text = "Key features:";

// List items (still within blockquote context)
MdParagraph item1 = doc.AddParagraph();
    item1.HasBlockquote = true;
    item1.BlockQuoteLevel = 1;
    item1.ListFormat = new MdListFormat();
    item1.ListFormat.IsNumbered = false;
    item1.ListFormat.ListLevel = 0;
    item1.ListFormat.ListValue = "- ";
item1.AddTextRange().Text = "Easy to use";

MdParagraph item2 = doc.AddParagraph();
    item2.HasBlockquote = true;
    item2.BlockQuoteLevel = 1;
    item2.ListFormat = new MdListFormat();
    item2.ListFormat.IsNumbered = false;
    item2.ListFormat.ListLevel = 0;
    item2.ListFormat.ListValue = "- ";
item2.AddTextRange().Text = "Powerful features";

string markdown = doc.GetMarkdownText();
doc.Dispose();

// Output:
// > Key features:
// > - Easy to use
// > - Powerful features
```

### Blockquote with Link
```csharp
MdParagraph quote = markdown.AddParagraph();
quote.HasBlockquote = true;
quote.BlockQuoteLevel = 1;
quote.AddTextRange().Text = "Read more in our ";
MdHyperlink link = quote.AddHyperlink();
link.DisplayText = "documentation";
link.Url = "https://docs.example.com";
quote.AddTextRange().Text = ".";

// Output: > Read more in our [documentation](https://docs.example.com).
```

## Parsing Blockquotes

### Extract All Blockquotes
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

List<(int level, string text)> quotes = new List<(int, string)>();

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para && para.HasBlockquote)
    {
        StringBuilder text = new StringBuilder();
        foreach (IMdInline inline in para.Inlines)
        {
            if (inline is MdTextRange tr)
                text.Append(tr.Text);
        }
        quotes.Add((para.BlockQuoteLevel, text.ToString()));
    }
}

foreach (var (level, text) in quotes)
{
    string indent = new string('>', level);
    Console.WriteLine($"{indent} {text}");
}
```

### Count Blockquote Levels
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

Dictionary<int, int> levelCounts = new Dictionary<int, int>();

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para && para.HasBlockquote)
    {
        if (!levelCounts.ContainsKey(para.BlockQuoteLevel))
            levelCounts[para.BlockQuoteLevel] = 0;
        
        levelCounts[para.BlockQuoteLevel]++;
    }
}

foreach (var (level, count) in levelCounts)
{
    Console.WriteLine($"Level {level}: {count} blockquotes");
}
```

### Find Nested Blockquotes
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para && para.HasBlockquote && para.BlockQuoteLevel > 1)
    {
        Console.WriteLine($"Nested blockquote (level {para.BlockQuoteLevel}):");
        foreach (IMdInline inline in para.Inlines)
        {
            if (inline is MdTextRange tr)
                Console.Write(tr.Text);
        }
        Console.WriteLine();
    }
}
```

## Modifying Blockquotes

### Add Blockquote to Existing Paragraphs
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para && !para.HasBlockquote)
    {
        // Convert to blockquote
        para.HasBlockquote = true;
        para.BlockQuoteLevel = 1;
    }
}

string modified = doc.GetMarkdownText();
```

### Remove Blockquotes
```csharp
foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para && para.HasBlockquote)
    {
        para.HasBlockquote = false;
        para.BlockQuoteLevel = 0;
    }
}
```

### Increase Nesting Level
```csharp
foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para && para.HasBlockquote)
    {
        para.BlockQuoteLevel++;
    }
}
```

### Decrease Nesting Level
```csharp
foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para && para.HasBlockquote && para.BlockQuoteLevel > 1)
    {
        para.BlockQuoteLevel--;
    }
}
```

## Complete Example: Technical Documentation

### API Deprecation Notice
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Section title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 2");
title.AddTextRange().Text = "Deprecated Methods";

// Deprecation warning
MdParagraph warning = doc.AddParagraph();
warning.HasBlockquote = true;
warning.BlockQuoteLevel = 1;
MdTextRange warningIcon = warning.AddTextRange();
warningIcon.Text = "⚠️ DEPRECATED";
warningIcon.TextFormat.Bold = true;

// Details
MdParagraph details = doc.AddParagraph();
details.HasBlockquote = true;
details.BlockQuoteLevel = 1;
details.AddTextRange().Text = "The ";
MdTextRange method = details.AddTextRange();
method.Text = "OldMethod()";
method.TextFormat.CodeSpan = true;
details.AddTextRange().Text = " is deprecated and will be removed in version 2.0.";

// Alternative
MdParagraph alternative = doc.AddParagraph();
alternative.HasBlockquote = true;
alternative.BlockQuoteLevel = 1;
alternative.AddTextRange().Text = "Use ";
MdTextRange newMethod = alternative.AddTextRange();
newMethod.Text = "NewMethod()";
newMethod.TextFormat.CodeSpan = true;
alternative.AddTextRange().Text = " instead.";

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Release Notes with Quotes
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Version heading
MdParagraph version = doc.AddParagraph();
version.ApplyParagraphStyle("Heading 1");
version.AddTextRange().Text = "Version 2.0 Release Notes";

// Breaking changes
MdParagraph breaking = doc.AddParagraph();
breaking.ApplyParagraphStyle("Heading 2");
breaking.AddTextRange().Text = "Breaking Changes";

// Quote for important note
MdParagraph note = doc.AddParagraph();
note.HasBlockquote = true;
note.BlockQuoteLevel = 1;
MdTextRange noteText = note.AddTextRange();
noteText.Text = "Important: ";
noteText.TextFormat.Bold = true;

MdParagraph noteContent = doc.AddParagraph();
noteContent.HasBlockquote = true;
noteContent.BlockQuoteLevel = 1;
noteContent.AddTextRange().Text = "The default behavior has changed. Please review your code.";

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

## HTML Conversion

Blockquotes are converted to HTML:
```html
<!-- Single level -->
<blockquote>
  <p>This is a quoted text.</p>
</blockquote>

<!-- Nested -->
<blockquote>
  <p>Level 1</p>
  <blockquote>
    <p>Level 2</p>
  </blockquote>
</blockquote>
```

## Best Practices

1. **Context**: Provide context before blockquotes
2. **Attribution**: Include source/author when quoting others
3. **Formatting**: Use bold for emphasis within quotes
4. **Nesting**: Limit nesting to 2-3 levels for readability
5. **Purpose**: Use blockquotes for quotes, notes, warnings, or callouts
6. **Consistency**: Maintain consistent blockquote styling throughout document

## Common Use Cases

- **Quotes**: Citations from other sources
- **Notes**: Important information that stands out
- **Warnings**: Critical information requiring attention
- **Tips**: Helpful suggestions
- **Examples**: Sample output or results
- **Conversations**: Email or forum thread replies
- **Documentation**: API notes, deprecation warnings

## Troubleshooting

- **Blockquote not showing**: Verify HasBlockquote is true
- **Wrong nesting level**: Check BlockQuoteLevel value (1-based)
- **Broken structure**: Ensure consecutive blockquote paragraphs have same or sequential levels
- **Formatting issues**: Check inline content (text ranges) within blockquote

## Common Mistakes

```csharp
// ❌ Wrong: Forgetting to set HasBlockquote
MdParagraph quote = markdown.AddParagraph();
quote.BlockQuoteLevel = 1; // HasBlockquote is still false
quote.AddTextRange().Text = "Quote";

// ✅ Correct: Set both properties
MdParagraph quote = markdown.AddParagraph();
quote.HasBlockquote = true;
quote.BlockQuoteLevel = 1;
quote.AddTextRange().Text = "Quote";

// ❌ Wrong: Using 0 for level (should be 1-based)
quote.BlockQuoteLevel = 0; // Invalid

// ✅ Correct: Use 1 for first level
quote.BlockQuoteLevel = 1;

// ❌ Wrong: Skipping levels
para1.BlockQuoteLevel = 1;
para2.BlockQuoteLevel = 3; // Skips level 2

// ✅ Correct: Sequential levels
para1.BlockQuoteLevel = 1;
para2.BlockQuoteLevel = 2;
```

## Styling Patterns

### Information Box
```csharp
MdParagraph info = markdown.AddParagraph();
info.HasBlockquote = true;
info.BlockQuoteLevel = 1;
MdTextRange infoIcon = info.AddTextRange();
infoIcon.Text = "ℹ️ Info: ";
infoIcon.TextFormat.Bold = true;
info.AddTextRange().Text = "Additional information here.";
```

### Success Message
```csharp
MdParagraph success = markdown.AddParagraph();
success.HasBlockquote = true;
success.BlockQuoteLevel = 1;
MdTextRange successIcon = success.AddTextRange();
successIcon.Text = "✅ Success: ";
successIcon.TextFormat.Bold = true;
success.AddTextRange().Text = "Operation completed successfully.";
```

### Error Message
```csharp
MdParagraph error = markdown.AddParagraph();
error.HasBlockquote = true;
error.BlockQuoteLevel = 1;
MdTextRange errorIcon = error.AddTextRange();
errorIcon.Text = "❌ Error: ";
errorIcon.TextFormat.Bold = true;
error.AddTextRange().Text = "An error occurred.";
```
