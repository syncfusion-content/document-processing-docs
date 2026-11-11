# Lists

## Overview
Create ordered (numbered) and unordered (bulleted) lists with support for up to 9 nested levels using the MdListFormat class.

## MdListFormat Class

### Properties
```csharp
public class MdListFormat
{
    public bool IsNumbered { get; set; }         // true = numbered list, false = bulleted/list-value uses BulletedListMarker
    public string NumberedListMarker { get; set; } // Custom numbered marker (e.g. "1.")
    public string BulletedListMarker { get; }      // Bulleted marker (default: "- ")
    public string ListValue { get; set; }          // Complete list prefix value (used internally or for custom markers)
    public int ListLevel { get; set; }             // 0-8 (9 levels total)
}
```

### Other public properties — examples
```csharp
// Use a custom numbered marker
MdParagraph p = doc.AddParagraph();
p.ListFormat = new MdListFormat();
p.ListFormat.IsNumbered = true;
p.ListFormat.NumberedListMarker = "1.";
p.ListFormat.ListLevel = 0;

// Use a custom bulleted marker (read-only property returns default marker)
MdParagraph b = doc.AddParagraph();
b.ListFormat = new MdListFormat();
b.ListFormat.IsNumbered = false;
// BulletedListMarker returns "- " by default
string marker = b.ListFormat.BulletedListMarker;

// Override the full list value when generating or manipulating lists
MdParagraph custom = doc.AddParagraph();
custom.ListFormat = new MdListFormat();
custom.ListFormat.ListValue = "* ";
custom.ListFormat.ListLevel = 0;
```

## Simple Lists

### Unordered (Bulleted) List
```csharp
MarkdownDocument doc = new MarkdownDocument();

MdParagraph item1 = doc.AddParagraph();
item1.ListFormat = new MdListFormat();
item1.ListFormat.IsNumbered = false;
item1.ListFormat.ListLevel = 0;
item1.ListFormat.ListValue = "- ";
item1.AddTextRange().Text = "First item";

MdParagraph item2 = doc.AddParagraph();
item2.ListFormat = new MdListFormat();
item2.ListFormat.IsNumbered = false;
item2.ListFormat.ListLevel = 0;
item2.ListFormat.ListValue = "- ";
item2.AddTextRange().Text = "Second item";

MdParagraph item3 = doc.AddParagraph();
item3.ListFormat = new MdListFormat();
item3.ListFormat.IsNumbered = false;
item3.ListFormat.ListLevel = 0;
item3.ListFormat.ListValue = "- ";
item3.AddTextRange().Text = "Third item";

string markdown = doc.GetMarkdownText();
doc.Dispose();

// Output:
// - First item
// - Second item
// - Third item
```

### Ordered (Numbered) List
```csharp
MarkdownDocument doc = new MarkdownDocument();

MdParagraph item1 = doc.AddParagraph();
item1.ListFormat = new MdListFormat();
item1.ListFormat.IsNumbered = true;
item1.ListFormat.ListLevel = 0;
item1.ListFormat.NumberedListMarker = "1.";
item1.ListFormat.ListValue = "1. ";
item1.AddTextRange().Text = "First step";

MdParagraph item2 = doc.AddParagraph();
item2.ListFormat = new MdListFormat();
item2.ListFormat.IsNumbered = true;
item2.ListFormat.ListLevel = 0;
item2.ListFormat.NumberedListMarker = "1.";
item2.ListFormat.ListValue = "2. ";
item2.AddTextRange().Text = "Second step";

MdParagraph item3 = doc.AddParagraph();
item3.ListFormat = new MdListFormat();
item3.ListFormat.IsNumbered = true;
item3.ListFormat.ListLevel = 0;
item3.ListFormat.NumberedListMarker = "1.";
item3.ListFormat.ListValue = "3. ";
item3.AddTextRange().Text = "Third step";

string markdown = doc.GetMarkdownText();
doc.Dispose();

// Output:
// 1. First step
// 2. Second step
// 3. Third step
```

## Nested Lists

### Two-Level Nested List
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Level 0 (parent)
MdParagraph parent1 = doc.AddParagraph();
    parent1.ListFormat = new MdListFormat();
    parent1.ListFormat.IsNumbered = false;
parent1.ListFormat.ListLevel = 0;
parent1.ListFormat.ListValue = "- ";
parent1.AddTextRange().Text = "Parent item 1";

// Level 1 (child)
MdParagraph child1 = doc.AddParagraph();
    child1.ListFormat = new MdListFormat();
    child1.ListFormat.IsNumbered = false;
child1.ListFormat.ListLevel = 1;
child1.ListFormat.ListValue = "  - ";
child1.AddTextRange().Text = "Child item 1";

MdParagraph child2 = doc.AddParagraph();
    child2.ListFormat = new MdListFormat();
    child2.ListFormat.IsNumbered = false;
child2.ListFormat.ListLevel = 1;
child2.ListFormat.ListValue = "  - ";
child2.AddTextRange().Text = "Child item 2";

// Level 0 (parent)
MdParagraph parent2 = doc.AddParagraph();
    parent2.ListFormat = new MdListFormat();
    parent2.ListFormat.IsNumbered = false;
parent2.ListFormat.ListLevel = 0;
parent2.ListFormat.ListValue = "- ";
parent2.AddTextRange().Text = "Parent item 2";

string markdown = doc.GetMarkdownText();
doc.Dispose();

// Output:
// - Parent item 1
//   - Child item 1
//   - Child item 2
// - Parent item 2
```

### Multi-Level Nested List
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Level 0
MdParagraph level0 = doc.AddParagraph();
    level0.ListFormat = new MdListFormat();
    level0.ListFormat.IsNumbered = false;
level0.ListFormat.ListLevel = 0;
level0.ListFormat.ListValue = "- ";
level0.AddTextRange().Text = "Level 0";

// Level 1
MdParagraph level1 = doc.AddParagraph();
    level1.ListFormat = new MdListFormat();
    level1.ListFormat.IsNumbered = false;
level1.ListFormat.ListLevel = 1;
level1.ListFormat.ListValue = "  - ";
level1.AddTextRange().Text = "Level 1";

// Level 2
MdParagraph level2 = doc.AddParagraph();
    level2.ListFormat = new MdListFormat();
    level2.ListFormat.IsNumbered = false;
level2.ListFormat.ListLevel = 2;
level2.ListFormat.ListValue = "    - ";
level2.AddTextRange().Text = "Level 2";

// Level 3
MdParagraph level3 = doc.AddParagraph();
    level3.ListFormat = new MdListFormat();
    level3.ListFormat.IsNumbered = false;
level3.ListFormat.ListLevel = 3;
level3.ListFormat.ListValue = "      - ";
level3.AddTextRange().Text = "Level 3";

string markdown = doc.GetMarkdownText();
doc.Dispose();

// Output:
// - Level 0
//   - Level 1
//     - Level 2
//       - Level 3
```

## Mixed List Types

### Numbered with Bulleted Subitems
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Numbered parent
MdParagraph step1 = doc.AddParagraph();
step1.ListFormat = new MdListFormat();
step1.ListFormat.IsNumbered = true;
step1.ListFormat.ListLevel = 0;
step1.ListFormat.NumberedListMarker = "1.";
step1.ListFormat.ListValue = "1. ";
step1.AddTextRange().Text = "First step";

// Bulleted children
MdParagraph note1 = doc.AddParagraph();
note1.ListFormat = new MdListFormat();
note1.ListFormat.IsNumbered = false;
note1.ListFormat.ListLevel = 1;
note1.ListFormat.ListValue = "  - ";
note1.AddTextRange().Text = "Important note";

MdParagraph note2 = doc.AddParagraph();
note2.ListFormat = new MdListFormat();
note2.ListFormat.IsNumbered = false;
note2.ListFormat.ListLevel = 1;
note2.ListFormat.ListValue = "  - ";
note2.AddTextRange().Text = "Another note";

// Numbered parent
MdParagraph step2 = doc.AddParagraph();
step2.ListFormat = new MdListFormat();
step2.ListFormat.IsNumbered = true;
step2.ListFormat.ListLevel = 0;
step2.ListFormat.NumberedListMarker = "1.";
step2.ListFormat.ListValue = "2. ";
step2.AddTextRange().Text = "Second step";

string markdown = doc.GetMarkdownText();
doc.Dispose();

// Output:
// 1. First step
//    - Important note
//    - Another note
// 2. Second step
```

### Bulleted with Numbered Subitems
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Bulleted parent
MdParagraph category = doc.AddParagraph();
category.ListFormat = new MdListFormat();
category.ListFormat.IsNumbered = false;
category.ListFormat.ListLevel = 0;
category.ListFormat.ListValue = "- ";
category.AddTextRange().Text = "Setup tasks:";

// Numbered children
MdParagraph task1 = doc.AddParagraph();
task1.ListFormat = new MdListFormat();
task1.ListFormat.IsNumbered = true;
task1.ListFormat.ListLevel = 1;
task1.ListFormat.NumberedListMarker = "1.";
task1.ListFormat.ListValue = "1. ";
task1.AddTextRange().Text = "Install software";

MdParagraph task2 = doc.AddParagraph();
task2.ListFormat = new MdListFormat();
task2.ListFormat.IsNumbered = true;
task2.ListFormat.ListLevel = 1;
task2.ListFormat.NumberedListMarker = "1.";
task2.ListFormat.ListValue = "2. ";
task2.AddTextRange().Text = "Configure settings";

string markdown = doc.GetMarkdownText();
doc.Dispose();

// Output:
// - Setup tasks:
//   1. Install software
//   2. Configure settings
```

## Lists with Formatting

### Bold List Items
```csharp
MdParagraph item = markdown.AddParagraph();
item.ListFormat.IsNumbered = false;
item.ListFormat.ListLevel = 0;
MdTextRange bold = item.AddTextRange();
bold.Text = "Important item";
bold.TextFormat.Bold = true;

// Output: - **Important item**
```

### List Items with Multiple Formats
```csharp
MdParagraph item = markdown.AddParagraph();
item.ListFormat.IsNumbered = true;
item.ListFormat.ListLevel = 0;
item.AddTextRange().Text = "Install ";
MdTextRange code = item.AddTextRange();
code.Text = "dotnet-script";
code.TextFormat.CodeSpan = true;
item.AddTextRange().Text = " using ";
MdTextRange bold = item.AddTextRange();
bold.Text = "NuGet";
bold.TextFormat.Bold = true;

// Output: 1. Install `dotnet-script` using **NuGet**
```

### List with Inline Code
```csharp
MdParagraph item = markdown.AddParagraph();
item.ListFormat.IsNumbered = false;
item.ListFormat.ListLevel = 0;
item.AddTextRange().Text = "Call the ";
MdTextRange method = item.AddTextRange();
method.Text = "AddParagraph()";
method.TextFormat.CodeSpan = true;
item.AddTextRange().Text = " method";

// Output: - Call the `AddParagraph()` method
```

## Practical Examples

### Installation Steps
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 2");
title.AddTextRange().Text = "Installation";

// Step 1
MdParagraph step1 = doc.AddParagraph();
step1.ListFormat = new MdListFormat();
step1.ListFormat.IsNumbered = true;
step1.ListFormat.ListLevel = 0;
step1.ListFormat.NumberedListMarker = "1.";
step1.ListFormat.ListValue = "1. ";
step1.AddTextRange().Text = "Download the installer";

// Step 2 with substeps
MdParagraph step2 = doc.AddParagraph();
step2.ListFormat = new MdListFormat();
step2.ListFormat.IsNumbered = true;
step2.ListFormat.ListLevel = 0;
step2.ListFormat.NumberedListMarker = "1.";
step2.ListFormat.ListValue = "2. ";
step2.AddTextRange().Text = "Run the installer:";

MdParagraph substep1 = doc.AddParagraph();
substep1.ListFormat = new MdListFormat();
substep1.ListFormat.IsNumbered = false;
substep1.ListFormat.ListLevel = 1;
substep1.ListFormat.ListValue = "  - ";
substep1.AddTextRange().Text = "Accept the license";

MdParagraph substep2 = doc.AddParagraph();
substep2.ListFormat = new MdListFormat();
substep2.ListFormat.IsNumbered = false;
substep2.ListFormat.ListLevel = 1;
substep2.ListFormat.ListValue = "  - ";
substep2.AddTextRange().Text = "Choose installation directory";

// Step 3
MdParagraph step3 = doc.AddParagraph();
step3.ListFormat = new MdListFormat();
step3.ListFormat.IsNumbered = true;
step3.ListFormat.ListLevel = 0;
step3.ListFormat.NumberedListMarker = "1.";
step3.ListFormat.ListValue = "3. ";
step3.AddTextRange().Text = "Verify installation";

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Feature List
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 2");
title.AddTextRange().Text = "Key Features";

// Feature categories
string[] categories = { "Performance", "Security", "Usability" };
string[][] features = {
    new[] { "Fast processing", "Low memory usage", "Optimized algorithms" },
    new[] { "Encryption support", "Access control", "Audit logging" },
    new[] { "Intuitive UI", "Keyboard shortcuts", "Dark mode" }
};

for (int i = 0; i < categories.Length; i++)
{
    // Category
    MdParagraph category = doc.AddParagraph();
    category.ListFormat.IsNumbered = false;
    category.ListFormat.ListLevel = 0;
    MdTextRange catText = category.AddTextRange();
    catText.Text = categories[i];
    catText.TextFormat.Bold = true;
    
    // Features
    foreach (string feature in features[i])
    {
        MdParagraph item = doc.AddParagraph();
        item.ListFormat.IsNumbered = false;
        item.ListFormat.ListLevel = 1;
        item.AddTextRange().Text = feature;
    }
}

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Requirements List
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 2");
title.AddTextRange().Text = "System Requirements";

// Software requirements
MdParagraph software = doc.AddParagraph();
software.ListFormat.IsNumbered = false;
software.ListFormat.ListLevel = 0;
software.AddTextRange().Text = "Software:";

MdParagraph sw1 = doc.AddParagraph();
sw1.ListFormat = new MdListFormat();
sw1.ListFormat.IsNumbered = true;
sw1.ListFormat.ListLevel = 1;
sw1.AddTextRange().Text = ".NET 8.0 or later";

MdParagraph sw2 = doc.AddParagraph();
sw2.ListFormat = new MdListFormat();
sw2.ListFormat.IsNumbered = true;
sw2.ListFormat.ListLevel = 1;
sw2.AddTextRange().Text = "Visual Studio 2022";

// Hardware requirements
MdParagraph hardware = doc.AddParagraph();
hardware.ListFormat.IsNumbered = false;
hardware.ListFormat.ListLevel = 0;
hardware.AddTextRange().Text = "Hardware:";

MdParagraph hw1 = doc.AddParagraph();
hw1.ListFormat = new MdListFormat();
hw1.ListFormat.IsNumbered = true;
hw1.ListFormat.ListLevel = 1;
hw1.AddTextRange().Text = "4 GB RAM minimum";

MdParagraph hw2 = doc.AddParagraph();
hw2.ListFormat = new MdListFormat();
hw2.ListFormat.IsNumbered = true;
hw2.ListFormat.ListLevel = 1;
hw2.AddTextRange().Text = "2 GB disk space";

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

## Parsing Existing Lists

### Read List Items
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para)
    {
        // Determine whether this paragraph represents a list item by inspecting ListValue or ListLevel
        if (!string.IsNullOrEmpty(para.ListFormat.ListValue) || para.ListFormat.ListLevel >= 0)
        {
            string indent = new string(' ', para.ListFormat.ListLevel * 2);
            string prefix = para.ListFormat.IsNumbered ? "1." : "-";
        
            Console.WriteLine($"{indent}{prefix} {GetText(para)}");
        }
    }
}

string GetText(MdParagraph para)
{
    StringBuilder text = new StringBuilder();
    foreach (IMdInline inline in para.Inlines)
    {
        if (inline is MdTextRange tr)
            text.Append(tr.Text);
    }
    return text.ToString();
}
```

### Extract List Structure
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

var lists = new List<(int level, bool isNumbered, string text)>();

foreach (IMdBlock block in doc.Blocks)
{
        if (block is MdParagraph para && (!string.IsNullOrEmpty(para.ListFormat.ListValue) || para.ListFormat.ListLevel >= 0))
    {
        string text = string.Join("", 
            para.Inlines
                .OfType<MdTextRange>()
                .Select(tr => tr.Text));
        
        lists.Add((para.ListFormat.ListLevel, para.ListFormat.IsNumbered, text));
    }
}

// Process list structure
foreach (var (level, type, text) in lists)
{
    Console.WriteLine($"Level {level}, Type: {type}, Text: {text}");
}
```

## Modifying Lists

### Convert Bulleted to Numbered
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para)
    {
        if (!para.ListFormat.IsNumbered)
        {
            para.ListFormat.IsNumbered = true;
        }
    }
}

string modified = doc.GetMarkdownText();
```

### Change List Level (Indent)
```csharp
foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para)
    {
        if (!string.IsNullOrEmpty(para.ListFormat.ListValue) || para.ListFormat.ListLevel >= 0)
        {
            // Increase indentation by 1 level
            if (para.ListFormat.ListLevel < 8)
                para.ListFormat.ListLevel++;
        }
    }
}
```

### Remove List Formatting
```csharp
foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para)
    {
        // Convert list item to normal paragraph
        para.ListFormat.IsNumbered = false;
        para.ListFormat.ListLevel = 0;
        para.ListFormat.ListValue = string.Empty;
    }
}
```

## Complete List Example

### Documentation Table of Contents
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 1");
title.AddTextRange().Text = "Documentation";

// Section 1
MdParagraph sec1 = doc.AddParagraph();
sec1.ListFormat.IsNumbered = true;
sec1.ListFormat.ListLevel = 0;
MdTextRange sec1Text = sec1.AddTextRange();
sec1Text.Text = "Introduction";
sec1Text.TextFormat.Bold = true;

MdParagraph sub1_1 = doc.AddParagraph();
sub1_1.ListFormat.IsNumbered = false;
sub1_1.ListFormat.ListLevel = 1;
sub1_1.AddTextRange().Text = "What is this?";

MdParagraph sub1_2 = doc.AddParagraph();
sub1_2.ListFormat.IsNumbered = false;
sub1_2.ListFormat.ListLevel = 1;
sub1_2.AddTextRange().Text = "Key benefits";

// Section 2
MdParagraph sec2 = doc.AddParagraph();
sec2.ListFormat.IsNumbered = true;
sec2.ListFormat.ListLevel = 0;
MdTextRange sec2Text = sec2.AddTextRange();
sec2Text.Text = "Getting Started";
sec2Text.TextFormat.Bold = true;

MdParagraph sub2_1 = doc.AddParagraph();
sub2_1.ListFormat.IsNumbered = false;
sub2_1.ListFormat.ListLevel = 1;
sub2_1.AddTextRange().Text = "Installation";

MdParagraph detail1 = doc.AddParagraph();
detail1.ListFormat.IsNumbered = true;
detail1.ListFormat.ListLevel = 2;
detail1.AddTextRange().Text = "System requirements";

MdParagraph detail2 = doc.AddParagraph();
detail2.ListFormat.IsNumbered = true;
detail2.ListFormat.ListLevel = 2;
detail2.AddTextRange().Text = "Installation steps";

MdParagraph sub2_2 = doc.AddParagraph();
sub2_2.ListFormat.IsNumbered = false;
sub2_2.ListFormat.ListLevel = 1;
sub2_2.AddTextRange().Text = "Configuration";

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

## List Levels (0-8)

The library supports 9 levels of nesting (0-8):
- Level 0: Root level
- Level 1: First nested level (2 spaces indent)
- Level 2: Second nested level (4 spaces indent)
- Level 3: Third nested level (6 spaces indent)
- Level 4-8: Additional nesting levels

## HTML Conversion

When converting to HTML:
- Bulleted lists → `<ul><li>Item</li></ul>`
- Numbered lists → `<ol><li>Item</li></ol>`
- Nested lists → Nested `<ul>` or `<ol>` tags
- Mixed lists → Appropriate combination of `<ul>` and `<ol>`

## Best Practices

1. **Consistent Indentation**: Use consistent list levels throughout
2. **Clear Hierarchy**: Don't skip levels (0 → 2 without 1)
3. **Logical Grouping**: Group related items under parent items
4. **Avoid Deep Nesting**: Limit nesting to 3-4 levels for readability
5. **Mixed Types**: Use numbered for sequential steps, bulleted for features
6. **List Continuation**: Keep list items together (don't interrupt with non-list paragraphs)

## Troubleshooting

- **List not showing**: Verify `ListFormat.IsNumbered` or `ListFormat.ListValue` is set appropriately (not empty)
- **Wrong indentation**: Check ListLevel value (0-8)
- **List breaks**: Ensure consecutive list items have proper types/levels
- **Numbering restarts**: Markdown renderers may restart numbering after interruptions
- **Mixed formatting**: Some renderers may not support mixed numbered/bulleted at same level

## Common Mistakes

```csharp
// ❌ Wrong: Skipping list level
item1.ListFormat.ListLevel = 0;
item2.ListFormat.ListLevel = 2; // Skips level 1

// ✅ Correct: Sequential levels
item1.ListFormat.ListLevel = 0;
item2.ListFormat.ListLevel = 1;

// ❌ Wrong: Forgetting to set list marker
item.ListFormat.ListLevel = 0;
item.AddTextRange().Text = "Item";

// ✅ Correct: Set both marker and level
item.ListFormat.IsNumbered = false;
item.ListFormat.ListLevel = 0;
item.AddTextRange().Text = "Item";
```
