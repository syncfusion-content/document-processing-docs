# Code Blocks

## Overview
Create fenced and indented code blocks with optional syntax highlighting using the MdCodeBlock class.

### MdCodeBlock Class

### Properties
```csharp
public class MdCodeBlock : IMdBlock
{
    public MdLineCollection Lines { get; }     // Collection of code lines
    public bool IsFencedCode { get; set; }     // True for fenced (```) code blocks; false for indented code blocks
}
```

### MdLineCollection
```csharp
public class MdLineCollection
{
    public void Add(string line);              // Add a single line
    public void Clear();                        // Remove all lines
    public int Count { get; }                   // Number of lines
    public string this[int index] { get; set; } // Access line by index
}
```

## Creating Code Blocks

### Simple Code Block (No Language)
```csharp
MarkdownDocument doc = new MarkdownDocument();

MdCodeBlock code = doc.AddCodeBlock();
code.Lines.Add("function greet() {");
code.Lines.Add("  console.log('Hello');");
code.Lines.Add("}");

string markdown = doc.GetMarkdownText();
doc.Dispose();

// Output:
// ```
// function greet() {
//   console.log('Hello');
// }
// ```
```

### Code Block Types

The library exposes `IsFencedCode` to control whether a code block is rendered as a fenced block (triple backticks) or as an indented block. The `Language` property is internal and not exposed for direct setting.

```csharp
MarkdownDocument doc = new MarkdownDocument();

MdCodeBlock code = doc.AddCodeBlock();
// Default: fenced code block
code.IsFencedCode = true; // set to false for indented code block
code.Lines.Add("public class Person");
code.Lines.Add("{");
code.Lines.Add("    public string Name { get; set; }");
code.Lines.Add("}");

string markdown = doc.GetMarkdownText();
doc.Dispose();

// Output (fenced):
// ```
// public class Person
// {
//     public string Name { get; set; }
// }
// ```
```

### Multi-Line String
```csharp
string code = @"using System;

class Program
{
    static void Main()
    {
        Console.WriteLine(""Hello World"");
    }
}";

MdCodeBlock codeBlock = markdown.AddCodeBlock();
codeBlock.Language = "csharp";

// Add all lines at once
foreach (string line in code.Split('\n'))
{
    codeBlock.Lines.Add(line.TrimEnd('\r'));
}
```

## Common Programming Languages

### C# Code Block
```csharp
MdCodeBlock code = markdown.AddCodeBlock();
code.Lines.Add("var result = items.Where(x => x.IsActive).ToList();");
```

### JavaScript Code Block
```csharp
MdCodeBlock code = markdown.AddCodeBlock();
code.Lines.Add("const result = items.filter(x => x.isActive);");
```

### Python Code Block
```csharp
MdCodeBlock code = markdown.AddCodeBlock();
code.Lines.Add("result = [x for x in items if x.is_active]");
```

### SQL Code Block
```csharp
MdCodeBlock code = markdown.AddCodeBlock();
code.Lines.Add("SELECT * FROM Users WHERE IsActive = 1;");
```

### JSON Code Block
```csharp
MdCodeBlock code = markdown.AddCodeBlock();
code.Lines.Add("{");
code.Lines.Add("  \"name\": \"John\",");
code.Lines.Add("  \"age\": 30");
code.Lines.Add("}");
```

### XML Code Block
```csharp
MdCodeBlock code = markdown.AddCodeBlock();
code.Lines.Add("<configuration>");
code.Lines.Add("  <setting name=\"timeout\" value=\"30\" />");
code.Lines.Add("</configuration>");
```

### Bash/Shell Code Block
```csharp
MdCodeBlock code = markdown.AddCodeBlock();
code.Lines.Add("#!/bin/bash");
code.Lines.Add("echo \"Hello World\"");
```

### HTML Code Block
```csharp
MdCodeBlock code = markdown.AddCodeBlock();
code.Lines.Add("<div class=\"container\">\");
code.Lines.Add("  <h1>Title</h1>");
code.Lines.Add("</div>");
```

### CSS Code Block
```csharp
MdCodeBlock code = markdown.AddCodeBlock();
code.Lines.Add(".container {");
code.Lines.Add("  max-width: 1200px;");
code.Lines.Add("  margin: 0 auto;");
code.Lines.Add("}");
```

## Practical Examples

### API Documentation with Examples
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Method heading
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 2");
title.AddTextRange().Text = "AddParagraph() Method";

// Description
MdParagraph desc = doc.AddParagraph();
desc.AddTextRange().Text = "Adds a new paragraph to the markdown document.";

// Syntax
MdParagraph syntaxHeading = doc.AddParagraph();
syntaxHeading.ApplyParagraphStyle("Heading 3");
syntaxHeading.AddTextRange().Text = "Syntax";

MdCodeBlock syntax = doc.AddCodeBlock();
syntax.Language = "csharp";
syntax.Lines.Add("public MdParagraph AddParagraph()");

// Example
MdParagraph exampleHeading = doc.AddParagraph();
exampleHeading.ApplyParagraphStyle("Heading 3");
exampleHeading.AddTextRange().Text = "Example";

MdCodeBlock example = doc.AddCodeBlock();
example.Language = "csharp";
example.Lines.Add("MarkdownDocument doc = new MarkdownDocument();");
example.Lines.Add("MdParagraph para = doc.AddParagraph();");
example.Lines.Add("para.AddTextRange().Text = \"Hello World\";");

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Tutorial with Code Samples
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Tutorial title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 1");
title.AddTextRange().Text = "Getting Started Tutorial";

// Step 1
MdParagraph step1 = doc.AddParagraph();
step1.ApplyParagraphStyle("Heading 2");
step1.AddTextRange().Text = "1. Create a Document";

MdParagraph step1Desc = doc.AddParagraph();
step1Desc.AddTextRange().Text = "First, create a new MarkdownDocument instance:";

MdCodeBlock code1 = doc.AddCodeBlock();
code1.Language = "csharp";
code1.Lines.Add("MarkdownDocument doc = new MarkdownDocument();");

// Step 2
MdParagraph step2 = doc.AddParagraph();
step2.ApplyParagraphStyle("Heading 2");
step2.AddTextRange().Text = "2. Add Content";

MdParagraph step2Desc = doc.AddParagraph();
step2Desc.AddTextRange().Text = "Add a paragraph with text:";

MdCodeBlock code2 = doc.AddCodeBlock();
code2.Language = "csharp";
code2.Lines.Add("MdParagraph para = doc.AddParagraph();");
code2.Lines.Add("para.AddTextRange().Text = \"Hello World\";");

// Step 3
MdParagraph step3 = doc.AddParagraph();
step3.ApplyParagraphStyle("Heading 2");
step3.AddTextRange().Text = "3. Get Markdown";

MdParagraph step3Desc = doc.AddParagraph();
step3Desc.AddTextRange().Text = "Generate the markdown text:";

MdCodeBlock code3 = doc.AddCodeBlock();
code3.Language = "csharp";
code3.Lines.Add("string markdown = doc.GetMarkdownText();");
code3.Lines.Add("doc.Dispose();");

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Configuration File Example
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 1");
title.AddTextRange().Text = "Configuration";

// Description
MdParagraph desc = doc.AddParagraph();
desc.AddTextRange().Text = "Add the following to your appsettings.json:";

// JSON configuration
MdCodeBlock config = doc.AddCodeBlock();
config.Language = "json";
config.Lines.Add("{");
config.Lines.Add("  \"Logging\": {");
config.Lines.Add("    \"LogLevel\": {");
config.Lines.Add("      \"Default\": \"Information\",");
config.Lines.Add("      \"Microsoft\": \"Warning\"");
config.Lines.Add("    }");
config.Lines.Add("  },");
config.Lines.Add("  \"ConnectionStrings\": {");
config.Lines.Add("    \"DefaultConnection\": \"Server=localhost;Database=mydb;\"");
config.Lines.Add("  }");
config.Lines.Add("}");

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Command-Line Examples
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 2");
title.AddTextRange().Text = "Installation";

// Description
MdParagraph desc = doc.AddParagraph();
desc.AddTextRange().Text = "Install the package using dotnet CLI:";

// Command
MdCodeBlock command = doc.AddCodeBlock();
command.Language = "bash";
command.Lines.Add("dotnet add package Syncfusion.Office.Markdown");

// Alternative installation
MdParagraph altDesc = doc.AddParagraph();
altDesc.AddTextRange().Text = "Or using Package Manager Console:";

MdCodeBlock pmCommand = doc.AddCodeBlock();
pmCommand.Language = "powershell";
pmCommand.Lines.Add("Install-Package Syncfusion.Office.Markdown");

string markdown = doc.GetMarkdownText();
doc.Dispose();

### Before/After Code Comparison
```csharp
MarkdownDocument doc = new MarkdownDocument();
step2.ListFormat.IsNumbered = true;
step2.ListFormat.ListLevel = 0;
step2.ListFormat.NumberedListMarker = "2.";
step2.ListFormat.ListValue = "2. ";
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 2");
title.AddTextRange().Text = "Refactoring Example";

// Before
MdParagraph beforeHeading = doc.AddParagraph();
beforeHeading.ApplyParagraphStyle("Heading 3");
beforeHeading.AddTextRange().Text = "Before";

MdCodeBlock before = doc.AddCodeBlock();
before.Language = "csharp";
before.Lines.Add("if (user != null && user.IsActive == true && user.HasPermission)");
before.Lines.Add("{");
before.Lines.Add("    ProcessUser(user);");
before.Lines.Add("}");

// After
MdParagraph afterHeading = doc.AddParagraph();
afterHeading.ApplyParagraphStyle("Heading 3");
afterHeading.AddTextRange().Text = "After";

MdCodeBlock after = doc.AddCodeBlock();
after.Language = "csharp";
after.Lines.Add("if (user?.IsActive == true && user.HasPermission)");
after.Lines.Add("{");
after.Lines.Add("    ProcessUser(user);");
after.Lines.Add("}");

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

## Code Blocks in Lists

### Numbered Steps with Code
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 2");
title.AddTextRange().Text = "Installation Steps";

// Step 1
MdParagraph step1 = doc.AddParagraph();
step1.ListFormat = new MdListFormat();
step1.ListFormat.IsNumbered = true;
step1.ListFormat.ListLevel = 0;
step1.AddTextRange().Text = "Install the package:";

MdCodeBlock code1 = doc.AddCodeBlock();
code1.Language = "bash";
code1.Lines.Add("dotnet add package MyPackage");

// Step 2
MdParagraph step2 = doc.AddParagraph();
step2.ListFormat = new MdListFormat();
step2.ListFormat.IsNumbered = true;
step2.ListFormat.ListLevel = 0;
step2.AddTextRange().Text = "Add using directive:";

MdCodeBlock code2 = doc.AddCodeBlock();
code2.Language = "csharp";
code2.Lines.Add("using MyPackage;");

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

## Parsing Code Blocks

### Extract All Code Blocks
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

List<(string language, List<string> lines)> codeBlocks = new List<(string, List<string>)>();

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdCodeBlock code)
    {
        List<string> lines = new List<string>();
        for (int i = 0; i < code.Lines.Count; i++)
        {
            lines.Add(code.Lines[i]);
        }
        codeBlocks.Add((code.Language ?? "text", lines));
    }
}

foreach (var (language, lines) in codeBlocks)
{
    Console.WriteLine($"Language: {language}");
    Console.WriteLine($"Lines: {lines.Count}");
    Console.WriteLine("Code:");
    foreach (string line in lines)
    {
        Console.WriteLine("  " + line);
    }
}
```

### Find Code Blocks by Language
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdCodeBlock code && code.Language == "csharp")
    {
        Console.WriteLine("Found C# code block:");
        for (int i = 0; i < code.Lines.Count; i++)
        {
            Console.WriteLine(code.Lines[i]);
        }
    }
}
```

### Extract Code to Files
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

int codeBlockIndex = 0;

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdCodeBlock code && !string.IsNullOrEmpty(code.Language))
    {
        string extension = GetExtensionForLanguage(code.Language);
        string filename = $"code_block_{codeBlockIndex++}.{extension}";
        
        List<string> lines = new List<string>();
        for (int i = 0; i < code.Lines.Count; i++)
        {
            lines.Add(code.Lines[i]);
        }
        
        File.WriteAllLines(filename, lines);
        Console.WriteLine($"Extracted to {filename}");
    }
}

string GetExtensionForLanguage(string language)
{
    return language.ToLower() switch
    {
        "csharp" or "cs" => "cs",
        "javascript" or "js" => "js",
        "python" or "py" => "py",
        "java" => "java",
        "cpp" or "c++" => "cpp",
        "sql" => "sql",
        "json" => "json",
        "xml" => "xml",
        "html" => "html",
        "css" => "css",
        _ => "txt"
    };
}
```

## Modifying Code Blocks

### Update Code Block Language
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdCodeBlock code)
    {
        // Set language if missing
        if (string.IsNullOrEmpty(code.Language))
        {
            code.Language = "text";
        }
    }
}

string modified = doc.GetMarkdownText();
```

### Add Line Numbers
```csharp
foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdCodeBlock code)
    {
        for (int i = 0; i < code.Lines.Count; i++)
        {
            code.Lines[i] = $"{i + 1,3}: {code.Lines[i]}";
        }
    }
}
```

### Remove Empty Lines
```csharp
foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdCodeBlock code)
    {
        var nonEmptyLines = new List<string>();
        for (int i = 0; i < code.Lines.Count; i++)
        {
            if (!string.IsNullOrWhiteSpace(code.Lines[i]))
            {
                nonEmptyLines.Add(code.Lines[i]);
            }
        }
        
        code.Lines.Clear();
        foreach (string line in nonEmptyLines)
        {
            code.Lines.Add(line);
        }
    }
}
```

## HTML Conversion

Code blocks are converted to HTML with syntax highlighting support:
```html
<!-- Without language -->
<pre><code>console.log('Hello');
</code></pre>

<!-- With language -->
<pre><code class="language-javascript">console.log('Hello');
</code></pre>
```

Many markdown renderers use syntax highlighting libraries like Prism.js or highlight.js to colorize code based on the language class.

## Supported Language Identifiers

Common language identifiers (case-insensitive):
- **C#**: `csharp`, `cs`
- **JavaScript**: `javascript`, `js`
- **TypeScript**: `typescript`, `ts`
- **Python**: `python`, `py`
- **Java**: `java`
- **C++**: `cpp`, `c++`
- **C**: `c`
- **Go**: `go`, `golang`
- **Rust**: `rust`
- **Ruby**: `ruby`, `rb`
- **PHP**: `php`
- **Swift**: `swift`
- **Kotlin**: `kotlin`
- **SQL**: `sql`
- **Shell**: `bash`, `sh`, `shell`
- **PowerShell**: `powershell`, `ps1`
- **JSON**: `json`
- **XML**: `xml`
- **HTML**: `html`
- **CSS**: `css`
- **YAML**: `yaml`, `yml`
- **Markdown**: `markdown`, `md`
- **Plain Text**: `text`, `plain`

## Best Practices

1. **Code Block Type**: Use `IsFencedCode` to choose fenced or indented code blocks
2. **Indentation**: Preserve original indentation in code
3. **Line Endings**: Use consistent line endings (LF or CRLF)
4. **Context**: Add description before code blocks
5. **Short Examples**: Keep code blocks concise and focused
6. **Comments**: Include comments in complex code examples
7. **Runnable Code**: Ensure examples are complete and runnable when possible

## Code Block Types

### Fenced Code Blocks (Recommended)
Created by MdCodeBlock with triple backticks:
````markdown
```csharp
var x = 10;
```
````

### Indented Code Blocks
Traditional markdown (4 spaces or 1 tab):
```markdown
    var x = 10;
```

The Syncfusion library creates fenced code blocks when using MdCodeBlock.

## Troubleshooting

- **Syntax highlighting not working**: Language detection is internal; ensure your renderer supports the detected language and that the output includes the appropriate language class. If needed, post-process the markdown to add a language class.
- **Code formatting lost**: Preserve whitespace when adding lines
- **Special characters**: Markdown may interpret certain characters (escape if needed)
- **Empty code block**: Ensure Lines.Count > 0
- **Language not recognized**: Check supported language identifiers

## Common Mistakes

```csharp
// ❌ Wrong: Adding multi-line string as single line
code.Lines.Add("line1\nline2\nline3");

// ✅ Correct: Add each line separately
code.Lines.Add("line1");
code.Lines.Add("line2");
code.Lines.Add("line3");

// ❌ Wrong: Forgetting to set language
MdCodeBlock code = markdown.AddCodeBlock();
code.Lines.Add("var x = 10;"); // No language specified

// ✅ Correct: Set language for syntax highlighting
MdCodeBlock code = markdown.AddCodeBlock();
code.Language = "csharp";
code.Lines.Add("var x = 10;");

// ❌ Wrong: Using inconsistent indentation
code.Lines.Add("if (true)");
code.Lines.Add("{");
code.Lines.Add("Console.WriteLine(\"test\");"); // Forgot indentation
code.Lines.Add("}");

// ✅ Correct: Maintain consistent indentation
code.Lines.Add("if (true)");
code.Lines.Add("{");
code.Lines.Add("    Console.WriteLine(\"test\");");
code.Lines.Add("}");
```

## Complete Example: Technical Documentation

```csharp
MarkdownDocument doc = new MarkdownDocument();

// Document title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 1");
title.AddTextRange().Text = "Quick Start Guide";

// Introduction
MdParagraph intro = doc.AddParagraph();
intro.AddTextRange().Text = "This guide shows how to use the Markdown library.";

// Installation section
MdParagraph installTitle = doc.AddParagraph();
installTitle.ApplyParagraphStyle("Heading 2");
installTitle.AddTextRange().Text = "Installation";

MdParagraph installDesc = doc.AddParagraph();
installDesc.AddTextRange().Text = "Install via NuGet:";

MdCodeBlock installCmd = doc.AddCodeBlock();
installCmd.Language = "bash";
installCmd.Lines.Add("dotnet add package Syncfusion.Office.Markdown");

// Usage section
MdParagraph usageTitle = doc.AddParagraph();
usageTitle.ApplyParagraphStyle("Heading 2");
usageTitle.AddTextRange().Text = "Basic Usage";

MdParagraph usageDesc = doc.AddParagraph();
usageDesc.AddTextRange().Text = "Create a simple markdown document:";

MdCodeBlock usageCode = doc.AddCodeBlock();
usageCode.Language = "csharp";
usageCode.Lines.Add("using Syncfusion.Office.Markdown;");
usageCode.Lines.Add("");
usageCode.Lines.Add("MarkdownDocument doc = new MarkdownDocument();");
usageCode.Lines.Add("MdParagraph para = doc.AddParagraph();");
usageCode.Lines.Add("para.AddTextRange().Text = \"Hello World\";");
usageCode.Lines.Add("string markdown = doc.GetMarkdownText();");
usageCode.Lines.Add("doc.Dispose();");

// Save document
string markdown = doc.GetMarkdownText();
File.WriteAllText("guide.md", markdown);
doc.Dispose();
```
