
# Comments

> Add, modify, remove, and manage comments — insert comments on specific text, access parent comments, retrieve commented items.

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

## Add Comment

Add a new comment to a paragraph with author information and timestamp.

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
doc.EnsureMinimal();
var para = doc.LastParagraph;
para.AppendText("This is sample text for comment.");

// Add comment to paragraph
WComment comment = para.AppendComment("This needs review");

// Set comment metadata
comment.Format.User = "Peter";
comment.Format.UserInitials = "PT";
comment.Format.DateTime = DateTime.Now;

// Save document
stream = new FileStream("output.docx", FileMode.Create, FileAccess.Write);
doc.Save(stream, FormatType.Docx);
stream.Dispose();
doc.Close();
```

### Placeholders
- `"This needs review"` → Replace with `"{comment-text}"`
- `"Peter"` → Replace with `"{author-name}"`
- `"PT"` → Replace with `"{author-initials}"`
- `"output.docx"` → Replace with `"{output-file-path}"`

---

## Modify Comment

Change the text content of an existing comment.

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);

// Iterate through all comments
foreach (WComment comment in doc.Comments)
{
    // Modify comment by author
    if (comment.Format.User == "Peter")
    {
        comment.TextBody.LastParagraph.Text = "Updated comment text";
    }
}

// Save modified document
var outputStream = new FileStream("output.docx", FileMode.Create, FileAccess.Write);
doc.Save(outputStream, FormatType.Docx);
outputStream.Dispose();
stream.Dispose();
doc.Close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`
- `"Peter"` → Replace with `"{author-name}"`
- `"Updated comment text"` → Replace with `"{new-comment-text}"`
- `"output.docx"` → Replace with `"{output-file-path}"`

---

## Insert Comment on Specific Text

Find specific text and insert comments using regex pattern matching.

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("document.docx", FileMode.Open, FileAccess.ReadWrite);
var doc = new WordDocument(stream, FormatType.Docx);

// Find all text patterns ending with comma
TextSelection[] textSelections = doc.FindAll(new Regex("\\w+,"));

if (textSelections != null)
{
    for (int i = 0; i < textSelections.Length; i++)
    {
        WTextRange textRange = textSelections[i].GetAsOneRange();
        WParagraph paragraph = textRange.OwnerParagraph;
        int textIndex = paragraph.ChildEntities.IndexOf(textRange);
        
        // Add comment to paragraph
        WComment comment = paragraph.AppendComment($"Review item {i + 1}");
        comment.Format.User = "Peter";
        comment.Format.UserInitials = "PT";
        comment.Format.DateTime = DateTime.Now;
        
        // Insert comment next to text
        paragraph.ChildEntities.Insert(textIndex + 1, comment);
        
        // Add text to commented items
        comment.AddCommentedItem(textRange);
    }
}

// Save document
var outputStream = new FileStream("output.docx", FileMode.Create, FileAccess.Write);
doc.Save(outputStream, FormatType.Docx);
outputStream.Dispose();
stream.Dispose();
doc.Close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`
- `"\\w+,"` → Replace with `"{regex-pattern}"`
- `"Peter"` → Replace with `"{author-name}"`
- `"Review item"` → Replace with `"{comment-prefix}"`
- `"output.docx"` → Replace with `"{output-file-path}"`

---

## Remove All Comments

Remove all comments from a document.

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);

// Remove all comments from document
doc.Comments.Clear();

// Save modified document
var outputStream = new FileStream("output.docx", FileMode.Create, FileAccess.Write);
doc.Save(outputStream,FormatType.Docx);
outputStream.Dispose();
stream.Dispose();
doc.Close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`
- `"output.docx"` → Replace with `"{output-file-path}"`

---

## Remove Specific Comment

Remove a particular comment by index.

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);

// Remove comment at index 1 (second comment)
if (doc.Comments.Count > 1)
{
    doc.Comments.RemoveAt(1);
}

WComment comment = doc.Comments[3];
// Remove by instance
doc.Comments.Remove(comment);

// Save modified document
var outputStream = new FileStream("output.docx", FileMode.Create, FileAccess.Write);
doc.Save(outputStream, FormatType.Docx);
outputStream.Dispose();
stream.Dispose();
doc.Close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`
- `1`, `3` → Replace with `"{comment-index}"`
- `"output.docx"` → Replace with `"{output-file-path}"`

---

## Access Parent Comment

Get the parent comment of a reply comment using the Ancestor property.

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);

// Iterate through comments
foreach (WComment comment in doc.Comments)
{
    // Get parent comment (ancestor)
    WComment parentComment = comment.Ancestor;
    
    if (parentComment != null)
    {
        Console.WriteLine($"Parent comment: {parentComment.TextBody.LastParagraph.Text}");
        Console.WriteLine($"Reply: {comment.TextBody.LastParagraph.Text}");
    }
    else
    {
        Console.WriteLine($"This is a parent comment: {comment.TextBody.LastParagraph.Text}");
    }
}

stream.Dispose();
doc.Close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`

---

## Retrieve Commented Items

Get the paragraph items (text, images, etc.) that are within a comment.

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);

// Iterate through all comments
foreach (WComment comment in doc.Comments)
{
    // Get the text of the comment
    string commentText = comment.TextBody.LastParagraph.Text;
    
    // Get paragraph items within comment
    ParagraphItemCollection commentedItems = comment.CommentedItems;
    
    if (commentedItems.Count > 0)
    {
        Console.WriteLine($"Comment: {commentText}");
        Console.WriteLine($"Commented items count: {commentedItems.Count}");
        
        // Access individual items
        foreach (IParagraphItem item in commentedItems)
        {
            if (item is WTextRange textRange)
            {
                Console.WriteLine($"Commented text: {textRange.Text}");
            }
        }
    }
}

stream.Dispose();
doc.Close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`

---

## Remove or Replace Commented Items

Remove or replace the paragraph items (text, images, etc.) that are within a comment.

### Remove Commented Items

#### Common for Cross-Platform and Windows-Specific
```csharp

var stream = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);

// Iterate through comments
foreach (WComment comment in doc.Comments)
{
    // Remove all items associated with the comment
    comment.RemoveCommentedItems();
}

// Save document
var outputStream = new FileStream("output.docx", FileMode.Create, FileAccess.Write);
doc.Save(outputStream, FormatType.Docx);
outputStream.Dispose();
stream.Dispose();
doc.Close();
```

### Replace Commented Items using TextBodyPart

#### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);

// Create replacement content
TextBodyPart replacementPart = new TextBodyPart(doc);
WParagraph para = replacementPart.AddParagraph();
para.AppendText("Updated content for the comment.");

// Replace commented items
foreach (WComment comment in doc.Comments)
{
    comment.ReplaceCommentedItems(replacementPart);
}

// Save document
var outputStream = new FileStream("output.docx", FileMode.Create, FileAccess.Write);
doc.Save(outputStream, FormatType.Docx);
outputStream.Dispose();
stream.Dispose();
doc.Close();
```

###  Replace Commented Items using String

#### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);

// Replace commented items with plain text
foreach (WComment comment in doc.Comments)
{
    comment.ReplaceCommentedItems("This content has been replaced.");
}

// Save document
var outputStream = new FileStream("output.docx", FileMode.Create, FileAccess.Write);
doc.Save(outputStream, FormatType.Docx);
outputStream.Dispose();
stream.Dispose();
doc.Close();
```

### Placeholders
- `document.docx` → Replace with `{input-file-path}`
- `Updated content for the comment.` and `This content has been replaced.` → Replace with `{replacement-text}`
- `output.docx` → Replace with `{output-file-path}`

---

## List All Comments

Retrieve and display all comments in a document with metadata.
### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);

Console.WriteLine($"Total comments: {doc.Comments.Count}");

// Iterate through all comments
for (int i = 0; i < doc.Comments.Count; i++)
{
    WComment comment = doc.Comments[i];
    
    Console.WriteLine($"\n--- Comment {i + 1} ---");
    Console.WriteLine($"Author: {comment.Format.User}");
    Console.WriteLine($"Initials: {comment.Format.UserInitials}");
    Console.WriteLine($"Date: {comment.Format.DateTime}");
    Console.WriteLine($"Text: {comment.TextBody.LastParagraph.Text}");
    Console.WriteLine($"Resolved: {comment.Done}");
    
    // Check if it's a reply
    WComment parent = comment.Ancestor;
    if (parent != null)
    {
        Console.WriteLine($"Reply to: {parent.TextBody.LastParagraph.Text}");
    }
}

stream.Dispose();
doc.Close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`

---

## Edit Comment by Author

Find and modify all comments by a specific author.
### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);

string targetAuthor = "Peter";
string newText = "Action required";

// Find and modify comments by author
foreach (WComment comment in doc.Comments)
{
    if (comment.Format.User == targetAuthor)
    {
        comment.TextBody.LastParagraph.Text = newText;
        comment.Format.DateTime = DateTime.Now;
    }
}

// Save modified document
var outputStream = new FileStream("output.docx", FileMode.Create, FileAccess.Write);
doc.Save(outputStream, FormatType.Docx);
outputStream.Dispose();
stream.Dispose();
doc.Close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`
- `"Peter"` → Replace with `"{target-author}"`
- `"Action required"` → Replace with `"{new-comment-text}"`
- `"output.docx"` → Replace with `"{output-file-path}"`
