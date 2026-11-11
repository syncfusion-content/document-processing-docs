# Track Changes

> Accept or reject tracked changes — manage revisions, filter by reviewer, retrieve revision information.

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

## Enable Track Changes

Enable tracking of all changes made to the document (author, date, time for insertions, deletions, modifications).

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
doc.EnsureMinimal();
var section = doc.Sections[0];
var para = section.AddParagraph();
para.AppendText("This document has track changes enabled.");

doc.TrackChanges = true;

var stream = new FileStream("output.docx", FileMode.Create, FileAccess.Write);
doc.Save(stream, FormatType.Docx);
stream.Close();
doc.Close();
```

### Placeholders
- `"output.docx"` → Replace with `"{output-file-path}"`

---

## Accept All Changes

Accept all tracked changes in a Word document.

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);

if (doc.HasChanges)
{
    doc.Revisions.AcceptAll();
}

var outputStream = new FileStream("output.docx", FileMode.Create, FileAccess.Write);
doc.Save(outputStream, FormatType.Docx);
outputStream.Close();
stream.Close();
doc.Close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`
- `"output.docx"` → Replace with `"{output-file-path}"`

---

## Reject All Changes

Reject all tracked changes in a Word document.

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);

// Check if document has changes
if (doc.HasChanges)
{
    // Reject all tracked changes
    doc.Revisions.RejectAll();
}

var outputStream = new FileStream("output.docx", FileMode.Create, FileAccess.Write);
doc.Save(outputStream, FormatType.Docx);
outputStream.Close();
stream.Close();
doc.Close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`
- `"output.docx"` → Replace with `"{output-file-path}"`

---

## Accept All Changes by a Particular Reviewer

Accept all changes made by a specific author.

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);

for (int i = doc.Revisions.Count - 1; i >= 0; i--)
{
    if (doc.Revisions[i].Author == "Nancy Davolio")
    {
        doc.Revisions[i].Accept();
    }
    
    if (i > doc.Revisions.Count - 1)
        i = doc.Revisions.Count;
}

var outputStream = new FileStream("output.docx", FileMode.Create, FileAccess.Write);
doc.Save(outputStream, FormatType.Docx);
outputStream.Close();
stream.Close();
doc.Close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`
- `"output.docx"` → Replace with `"{output-file-path}"`
- `"Nancy Davolio"` → Replace with `"{reviewer-name}"`

---

## Reject All Changes by a Particular Reviewer

Reject all changes made by a specific author.

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);

for (int i = doc.Revisions.Count - 1; i >= 0; i--)
{
    if (doc.Revisions[i].Author == "Nancy Davolio")
    {
        doc.Revisions[i].Reject();
    }
    
    if (i > doc.Revisions.Count - 1)
        i = doc.Revisions.Count;
}

var outputStream = new FileStream("output.docx", FileMode.Create, FileAccess.Write);
doc.Save(outputStream, FormatType.Docx);
outputStream.Close();
stream.Close();
doc.Close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`
- `"output.docx"` → Replace with `"{output-file-path}"`
- `"Nancy Davolio"` → Replace with `"{reviewer-name}"`

---

## Get Revision Information

Retrieve details about tracked changes — author, date, and revision type.

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);

// Access the first revision
if (doc.Revisions.Count > 0)
{
    Revision revision = doc.Revisions[0];
    
    // Get revision details
    string author = revision.Author;              // Name of reviewer
    DateTime dateTime = revision.Date;            // Date and time of change
    RevisionType revisionType = revision.RevisionType; // Type of change
    
    // Use the information
    Console.WriteLine($"Author: {author}");
    Console.WriteLine($"Date: {dateTime}");
    Console.WriteLine($"Type: {revisionType}");
}
stream.Close();
doc.Close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`

### RevisionType Values
```csharp
RevisionType.Insertions  // Text insertion
RevisionType.Deletions   // Text deletion
RevisionType.Formatting // Formatting changes
RevisionType.MoveFrom     // Text moved
RevisionType.MoveTo
```

---

## Iterate and Process All Revisions

#### Common for Cross-Platform and Windows-Specific
Process all revisions with detailed information.

```csharp
var stream = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);

// Check if document has changes
if (doc.HasChanges)
{
    // Iterate through all revisions
    for (int i = 0; i < doc.Revisions.Count; i++)
    {
        Revision revision = doc.Revisions[i];
        
        // Get revision details
        string author = revision.Author;
        DateTime changeDate = revision.Date;
        RevisionType changeType = revision.RevisionType;
        
        // Process based on author
        if (author == "Nancy Davolio")
        {
            revision.Accept();
        }
        else if (author == "John Smith")
        {
            revision.Reject();
        }
    }
}
// Save modified document
var outputStream = new FileStream("output.docx", FileMode.Create, FileAccess.Write);
doc.Save(outputStream, FormatType.Docx);
outputStream.Close();
stream.Close();
doc.Close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`
- `"output.docx"` → Replace with `"{output-file-path}"`
- `"Nancy Davolio"`, `"John Smith"` → Replace with `"{reviewer-names}"`

---

## Check for Tracked Changes

#### Common for Cross-Platform and Windows-Specific
Verify if a document contains any tracked changes before processing.

```csharp
var stream = new FileStream("document.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);

// Check if document has tracked changes
if (doc.HasChanges)
{
    Console.WriteLine($"Document has {doc.Revisions.Count} tracked changes");
    
    // Process changes
    doc.Revisions.AcceptAll();
}
else
{
    Console.WriteLine("Document has no tracked changes");
}
stream.Close();
doc.Close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`
