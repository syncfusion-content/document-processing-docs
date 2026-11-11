# Hyperlinks

## Overview
Create hyperlinks with display text, URLs, and optional screen tips using the MdHyperlink class.

## MdHyperlink Class

### Properties
```csharp
public class MdHyperlink : IMdInline
{
    public string DisplayText { get; set; }   // Text shown to user
    public string Url { get; set; }            // Target URL or anchor
    public string ScreenTip { get; set; }      // Tooltip/title text
    public MdInlineCollection Inlines { get; } // For nested inline content
}
```

## Creating Simple Links

### Basic Hyperlink
```csharp
MdParagraph para = markdown.AddParagraph();
MdHyperlink link = para.AddHyperlink();
link.DisplayText = "Visit our website";
link.Url = "https://example.com";

// Output: [Visit our website](https://example.com)
```

### Link with Screen Tip
```csharp
MdParagraph para = markdown.AddParagraph();
MdHyperlink link = para.AddHyperlink();
link.DisplayText = "Documentation";
link.Url = "https://docs.example.com";
link.ScreenTip = "Complete user documentation";

// Output: [Documentation](https://docs.example.com "Complete user documentation")
```

### Multiple Links in Paragraph
```csharp
MdParagraph para = markdown.AddParagraph();
para.AddTextRange().Text = "Visit our ";
MdHyperlink link1 = para.AddHyperlink();
link1.DisplayText = "website";
link1.Url = "https://example.com";
para.AddTextRange().Text = " or ";
MdHyperlink link2 = para.AddHyperlink();
link2.DisplayText = "blog";
link2.Url = "https://blog.example.com";
para.AddTextRange().Text = ".";

// Output: Visit our [website](https://example.com) or [blog](https://blog.example.com).
```

## Link Types

### External Links (HTTP/HTTPS)
```csharp
MdHyperlink link = para.AddHyperlink();
link.DisplayText = "Google";
link.Url = "https://www.google.com";

// Output: [Google](https://www.google.com)
```

### Internal Links (Anchor/Fragment)
```csharp
MdHyperlink link = para.AddHyperlink();
link.DisplayText = "Go to section";
link.Url = "#installation";

// Output: [Go to section](#installation)
```

### Relative File Links
```csharp
MdHyperlink link = para.AddHyperlink();
link.DisplayText = "Read more";
link.Url = "./docs/guide.md";

// Output: [Read more](./docs/guide.md)
```

### Email Links (Mailto)
```csharp
MdHyperlink link = para.AddHyperlink();
link.DisplayText = "Contact us";
link.Url = "mailto:support@example.com";

// Output: [Contact us](mailto:support@example.com)
```

### Links in Lists

### Bulleted List of Links
```csharp
MarkdownDocument doc = new MarkdownDocument();

MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 2");
title.AddTextRange().Text = "Useful Links";

string[][] links = {
    new[] { "Documentation", "https://docs.example.com" },
    new[] { "Tutorials", "https://tutorials.example.com" },
    new[] { "Blog", "https://blog.example.com" }
};

foreach (string[] linkData in links)
{
    MdParagraph item = doc.AddParagraph();
    item.ListFormat = new MdListFormat();
    item.ListFormat.IsNumbered = false;
    item.ListFormat.ListLevel = 0;
    item.ListFormat.ListValue = "- ";
    MdHyperlink link = item.AddHyperlink();
    link.DisplayText = linkData[0];
    link.Url = linkData[1];
}

string markdown = doc.GetMarkdownText();
doc.Dispose();

// Output: 
//## Useful Links

//- [Documentation](https://docs.example.com)
//- [Tutorials](https://tutorials.example.com)
//- [Blog](https://blog.example.com)
```

### Code in Link Text
```csharp
MdHyperlink link = para.AddHyperlink();
// Use DisplayText since MdHyperlink does not expose inlines
link.DisplayText = "`GetDocument()`";
link.Url = "https://docs.example.com/api#getdocument";

// Output: [`GetDocument()`](https://docs.example.com/api#getdocument)
```

### Combined Formatting
```csharp
MdHyperlink link = para.AddHyperlink();
// Use DisplayText; the API does not support adding formatted inlines directly
link.DisplayText = "***Critical API***";
link.Url = "https://docs.example.com";
link.ScreenTip = "Important documentation";

// Output: [***Critical API***](https://docs.example.com "Important documentation")
```

## Practical Examples

### Navigation Menu
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 2");
title.AddTextRange().Text = "Quick Links";

// Links list
string[][] links = {
    new[] { "Home", "/" },
    new[] { "Documentation", "/docs" },
    new[] { "API Reference", "/api" },
    new[] { "Support", "/support" },
    new[] { "About", "/about" }
};

foreach (string[] linkData in links)
{
    MdParagraph para = doc.AddParagraph();
    para.ListFormat = new MdListFormat();
    para.ListFormat.IsNumbered = false;
    para.ListFormat.ListLevel = 0;
    para.ListFormat.ListValue = "- ";
    MdHyperlink link = para.AddHyperlink();
    link.DisplayText = linkData[0];
    link.Url = linkData[1];
}

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### API Documentation Links
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 2");
title.AddTextRange().Text = "API Methods";

// Method 1
MdParagraph method1 = doc.AddParagraph();
method1.AddTextRange().Text = "Use ";
MdHyperlink link1 = method1.AddHyperlink();
MdTextRange methodName1 = link1.AddTextRange();
for (int i = 0; i < steps.Length; i++)
{
    MdParagraph para = markdown.AddParagraph();
methodName1.Text = "AddParagraph()";
methodName1.TextFormat.CodeSpan = true;
link1.Url = "#addparagraph";
        para.ListFormat.IsNumbered = true;

// Method 2
MdParagraph method2 = doc.AddParagraph();
method2.AddTextRange().Text = "Use ";
MdHyperlink link2 = method2.AddHyperlink();
MdTextRange methodName2 = link2.AddTextRange();
methodName2.Text = "AddTable()";
methodName2.TextFormat.CodeSpan = true;
link2.Url = "#addtable";
method2.AddTextRange().Text = " to add tables.";

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Resource Links with Descriptions
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 1");
title.AddTextRange().Text = "External Resources";

// Resource categories
string[][] resources = {
    new[] { "Official Website", "https://example.com", "Main company website" },
    new[] { "GitHub Repository", "https://github.com/example/repo", "Source code and issues" },
    new[] { "Stack Overflow", "https://stackoverflow.com/questions/tagged/example", "Community Q&A" }
};

foreach (string[] resource in resources)
{
    // Heading
    MdParagraph heading = doc.AddParagraph();
    heading.ApplyParagraphStyle("Heading 3");
    heading.AddTextRange().Text = resource[0];
    
    // Link and description
    MdParagraph para = doc.AddParagraph();
    MdHyperlink link = para.AddHyperlink();
    link.DisplayText = resource[1];
    link.Url = resource[1];
    link.ScreenTip = resource[2];
    para.AddTextRange().Text = " - " + resource[2];
}

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Contact Information
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 2");
title.AddTextRange().Text = "Contact Us";

// Email
MdParagraph email = doc.AddParagraph();
email.AddTextRange().Text = "Email: ";
MdHyperlink emailLink = email.AddHyperlink();
emailLink.DisplayText = "support@example.com";
emailLink.Url = "mailto:support@example.com";

// Phone
MdParagraph phone = doc.AddParagraph();
phone.AddTextRange().Text = "Phone: +1-555-0123";

// Website
MdParagraph website = doc.AddParagraph();
website.AddTextRange().Text = "Website: ";
MdHyperlink webLink = website.AddHyperlink();
webLink.DisplayText = "www.example.com";
webLink.Url = "https://www.example.com";

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Table of Contents
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 1");
title.AddTextRange().Text = "User Guide";

// TOC
MdParagraph tocTitle = doc.AddParagraph();
tocTitle.ApplyParagraphStyle("Heading 2");
tocTitle.AddTextRange().Text = "Table of Contents";

string[][] sections = {
    new[] { "1", "Introduction", "#introduction" },
    new[] { "2", "Installation", "#installation" },
    new[] { "3", "Configuration", "#configuration" },
    new[] { "4", "Usage", "#usage" },
    new[] { "5", "Troubleshooting", "#troubleshooting" }
};

foreach (string[] section in sections)
{
    MdParagraph para = doc.AddParagraph();
    para.AddTextRange().Text = section[0] + ". ";
    MdHyperlink link = para.AddHyperlink();
    link.DisplayText = section[1];
    link.Url = section[2];
}

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

## Links in Lists

### Bulleted List of Links
```csharp
MarkdownDocument doc = new MarkdownDocument();

MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 2");
title.AddTextRange().Text = "Useful Links";

string[][] links = {
    new[] { "Documentation", "https://docs.example.com" },
    new[] { "Tutorials", "https://tutorials.example.com" },
    new[] { "Blog", "https://blog.example.com" }
};

foreach (string[] linkData in links)
{
    MdParagraph item = doc.AddParagraph();
    item.ListFormat.IsNumbered = false;
    item.ListFormat.ListLevel = 0;
    item.ListFormat.ListValue = "- ";
    MdHyperlink link = item.AddHyperlink();
    link.DisplayText = linkData[0];
    link.Url = linkData[1];
}

string markdown = doc.GetMarkdownText();
doc.Dispose();

// Output:
// ## Useful Links
// - [Documentation](https://docs.example.com)
// - [Tutorials](https://tutorials.example.com)
// - [Blog](https://blog.example.com)
```

### Numbered List with Links
```csharp
string[] steps = { "Visit registration page", "Fill out form", "Confirm email" };
string[] urls = { "https://example.com/register", "https://example.com/form", "https://example.com/confirm" };

for (int i = 0; i < steps.Length; i++)
{
    MdParagraph para = markdown.AddParagraph();
    para.ListFormat = new MdListFormat();
    para.ListFormat.IsNumbered = true;
    para.ListFormat.ListLevel = 0;
    para.ListFormat.NumberedListMarker = "1.";
    para.ListFormat.ListValue = (i + 1).ToString() + ". ";
    MdHyperlink link = para.AddHyperlink();
    link.DisplayText = steps[i];
    link.Url = urls[i];
}
```

## Links in Tables

### Link Table
```csharp
MarkdownDocument doc = new MarkdownDocument();
MdTable table = doc.AddTable();

// Header
MdTableRow header = table.AddTableRow();
header.AddTableCell().Items.Add(new MdTextRange { Text = "Resource" });
header.AddTableCell().Items.Add(new MdTextRange { Text = "Link" });

// Rows with links
string[][] resources = {
    new[] { "API Docs", "https://api.example.com" },
    new[] { "SDK", "https://sdk.example.com" },
    new[] { "Support", "https://support.example.com" }
};

foreach (string[] resource in resources)
{
    MdTableRow row = table.AddTableRow();
    row.AddTableCell().Items.Add(new MdTextRange { Text = resource[0] });
    MdHyperlink link = new MdHyperlink();
    link.DisplayText = "Visit";
    link.Url = resource[1];
    row.AddTableCell().Items.Add(link);
}

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

## Parsing Links

### Extract All Links
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

List<(string displayText, string url, string screenTip)> links = new List<(string, string, string)>();

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para)
    {
        foreach (IMdInline inline in para.Inlines)
        {
            if (inline is MdHyperlink link)
            {
                string display = link.DisplayText ?? GetLinkText(link);
                links.Add((display, link.Url, link.ScreenTip));
            }
        }
    }
}

foreach (var (display, url, tip) in links)
{
    Console.WriteLine($"Link: {display} -> {url}");
    if (!string.IsNullOrEmpty(tip))
        Console.WriteLine($"  Tip: {tip}");
}

string GetLinkText(MdHyperlink link)
{
    StringBuilder text = new StringBuilder();
    foreach (IMdInline inline in link.Inlines)
    {
        if (inline is MdTextRange tr)
            text.Append(tr.Text);
    }
    return text.ToString();
}
```

### Check for Broken Links
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para)
    {
        foreach (IMdInline inline in para.Inlines)
        {
            if (inline is MdHyperlink link)
            {
                if (string.IsNullOrEmpty(link.Url))
                {
                    Console.WriteLine($"Warning: Empty URL for link '{link.DisplayText}'");
                }
                else if (!link.Url.StartsWith("http") && !link.Url.StartsWith("#") && !link.Url.StartsWith("mailto"))
                {
                    Console.WriteLine($"Warning: Relative URL '{link.Url}'");
                }
            }
        }
    }
}
```

### Convert Links to Plain Text
```csharp
foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para)
    {
        var linksToReplace = new List<MdHyperlink>();
        
        foreach (IMdInline inline in para.Inlines)
        {
            if (inline is MdHyperlink link)
                linksToReplace.Add(link);
        }
        
        foreach (MdHyperlink link in linksToReplace)
        {
            int index = para.Inlines.IndexOf(link);
            para.Inlines.Remove(link);
            MdTextRange text = new MdTextRange();
            text.Text = $"{link.DisplayText} ({link.Url})";
            para.Inlines.Insert(index, text);
        }
    }
}

string plainText = doc.GetMarkdownText();
```

## Modifying Links

### Update Link URLs
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para)
    {
        foreach (IMdInline inline in para.Inlines)
        {
            if (inline is MdHyperlink link)
            {
                // Update old domain to new domain
                if (link.Url.Contains("oldsite.com"))
                {
                    link.Url = link.Url.Replace("oldsite.com", "newsite.com");
                }
            }
        }
    }
}

string modified = doc.GetMarkdownText();
```

### Add Screen Tips
```csharp
foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para)
    {
        foreach (IMdInline inline in para.Inlines)
        {
            if (inline is MdHyperlink link)
            {
                if (string.IsNullOrEmpty(link.ScreenTip))
                {
                    link.ScreenTip = $"Visit {link.DisplayText}";
                }
            }
        }
    }
}
```

## HTML Conversion

Links are converted to HTML:
```html
<!-- Basic link -->
<a href="https://example.com">Visit our website</a>

<!-- Link with screen tip -->
<a href="https://example.com" title="Complete user documentation">Documentation</a>

<!-- Formatted link text -->
<a href="https://example.com"><strong>Important Link</strong></a>
```

## Best Practices

1. **Descriptive Text**: Use meaningful link text (not "click here")
2. **Screen Tips**: Add screen tips for context
3. **URL Validation**: Ensure URLs are valid and complete
4. **Protocol**: Always include protocol (http://, https://)
5. **Relative Links**: Use relative paths for internal documentation
6. **Email Links**: Use mailto: for email addresses
7. **Anchor Links**: Use # for same-document navigation

## Common Patterns

### Reference Links Section
```csharp
MdParagraph references = markdown.AddParagraph();
references.ApplyParagraphStyle("Heading 2");
references.AddTextRange().Text = "References";

MdParagraph ref1 = markdown.AddParagraph();
ref1.AddTextRange().Text = "[1] ";
MdHyperlink link1 = ref1.AddHyperlink();
link1.DisplayText = "Original Research";
link1.Url = "https://research.example.com/paper";
```

### Footer Links
```csharp
MdParagraph footer = markdown.AddParagraph();
footer.AddTextRange().Text = "© 2024 Example Corp. | ";
MdHyperlink privacy = footer.AddHyperlink();
privacy.DisplayText = "Privacy Policy";
privacy.Url = "/privacy";
footer.AddTextRange().Text = " | ";
MdHyperlink terms = footer.AddHyperlink();
terms.DisplayText = "Terms of Service";
terms.Url = "/terms";
```

## Troubleshooting

- **Link not clickable**: Verify Url property is set
- **Missing display text**: Set DisplayText or add TextRange to Inlines
- **Screen tip not showing**: Some renderers may not support title attribute
- **Relative links broken**: Check path relativity to document location
- **Special characters**: URL-encode special characters in URLs

## Common Mistakes

```csharp
// ❌ Wrong: Empty URL
MdHyperlink link = para.AddHyperlink();
link.DisplayText = "Click here";
// Forgot to set Url

// ✅ Correct: Complete link
MdHyperlink link = para.AddHyperlink();
link.DisplayText = "Click here";
link.Url = "https://example.com";

// ❌ Wrong: Missing protocol
link.Url = "www.example.com"; // Invalid

// ✅ Correct: Full URL
link.Url = "https://www.example.com";

// ❌ Wrong: Using DisplayText with Inlines
link.DisplayText = "Text";
link.AddTextRange().Text = "More text"; // DisplayText ignored

// ✅ Correct: Use either DisplayText OR Inlines
link.DisplayText = "Simple text";
// OR
link.AddTextRange().Text = "Formatted text";
```
