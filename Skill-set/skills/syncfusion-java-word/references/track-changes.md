# Track Changes

> Accept or reject tracked changes — manage revisions, filter by reviewer, retrieve revision information.

---

## Required common usings

```java
import com.syncfusion.docio.*;
import java.io.FileInputStream;
import java.io.FileOutputStream;
```

## Enable Track Changes

Enable tracking of all changes made to the document (author, date, time for insertions, deletions, modifications).

### Minimal Code

```java
WordDocument doc = new WordDocument();
doc.ensureMinimal();
IWSection section = doc.getSections().get(0);
IWParagraph para = section.addParagraph();
para.appendText("This document has track changes enabled.");

doc.setTrackChanges(true);

FileOutputStream stream = new FileOutputStream("output.docx");
doc.save(stream, FormatType.Docx);
stream.close();
doc.close();
```

### Placeholders
- `"output.docx"` → Replace with `"{output-file-path}"`

---

## Accept All Changes

Accept all tracked changes in a Word document.

### Minimal Code

```java
FileInputStream stream = new FileInputStream("document.docx");
WordDocument doc = new WordDocument(stream, FormatType.Docx);

if (doc.getHasChanges()) {
    doc.getRevisions().acceptAll();
}

FileOutputStream outputStream = new FileOutputStream("output.docx");
doc.save(outputStream, FormatType.Docx);
outputStream.close();
stream.close();
doc.close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`
- `"output.docx"` → Replace with `"{output-file-path}"`

---

## Reject All Changes

Reject all tracked changes in a Word document.

### Minimal Code

```java
FileInputStream stream = new FileInputStream("document.docx");
WordDocument doc = new WordDocument(stream, FormatType.Docx);

// Check if document has changes
if (doc.getHasChanges()) {
    // Reject all tracked changes
    doc.getRevisions().rejectAll();
}

FileOutputStream outputStream = new FileOutputStream("output.docx");
doc.save(outputStream, FormatType.Docx);
outputStream.close();
stream.close();
doc.close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`
- `"output.docx"` → Replace with `"{output-file-path}"`

---

## Accept All Changes by a Particular Reviewer

Accept all changes made by a specific author.

### Minimal Code

```java
FileInputStream stream = new FileInputStream("document.docx");
WordDocument doc = new WordDocument(stream, FormatType.Docx);

for (int i = doc.getRevisions().getCount() - 1; i >= 0; i--) {
    Revision rev = doc.getRevisions().get(i);
    if ("Nancy Davolio".equals(rev.getAuthor())) {
        rev.accept();
    }
    if (i > doc.getRevisions().getCount() - 1) {
        i = doc.getRevisions().getCount();
    }
}

FileOutputStream outputStream = new FileOutputStream("output.docx");
doc.save(outputStream, FormatType.Docx);
outputStream.close();
stream.close();
doc.close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`
- `"output.docx"` → Replace with `"{output-file-path}"`
- `"Nancy Davolio"` → Replace with `"{reviewer-name}"`

---

## Reject All Changes by a Particular Reviewer

Reject all changes made by a specific author.

### Minimal Code

```java
FileInputStream stream = new FileInputStream("document.docx");
WordDocument doc = new WordDocument(stream, FormatType.Docx);

for (int i = doc.getRevisions().getCount() - 1; i >= 0; i--) {
    Revision rev = doc.getRevisions().get(i);
    if ("Nancy Davolio".equals(rev.getAuthor())) {
        rev.reject();
    }
    if (i > doc.getRevisions().getCount() - 1) {
        i = doc.getRevisions().getCount();
    }
}

FileOutputStream outputStream = new FileOutputStream("output.docx");
doc.save(outputStream, FormatType.Docx);
outputStream.close();
stream.close();
doc.close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`
- `"output.docx"` → Replace with `"{output-file-path}"`
- `"Nancy Davolio"` → Replace with `"{reviewer-name}"`

---

## Get Revision Information

Retrieve details about tracked changes — author, date, and revision type.

### Minimal Code

```java
FileInputStream stream = new FileInputStream("document.docx");
WordDocument doc = new WordDocument(stream, FormatType.Docx);

if (doc.getRevisions().getCount() > 0) {
    Revision revision = doc.getRevisions().get(0);

    String author = revision.getAuthor();
    LocalDateTime dateTime = revision.getDate();
    RevisionType revisionType = revision.getRevisionType();

    System.out.println("Author: " + author);
    System.out.println("Date: " + dateTime);
    System.out.println("Type: " + revisionType);
}

stream.close();
doc.close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`

### RevisionType Values
```java
RevisionType.Insertions  // Text insertion
RevisionType.Deletions   // Text deletion
RevisionType.Formatting // Formatting changes
RevisionType.MoveFrom     // Text moved
RevisionType.MoveTo
```

---

## Iterate and Process All Revisions

Process all revisions with detailed information.

```java
FileInputStream stream = new FileInputStream("document.docx");
WordDocument doc = new WordDocument(stream, FormatType.Docx);

// Check if document has changes
if (doc.getHasChanges()) {
    // Iterate through all revisions
    for (int i = 0; i < doc.getRevisions().getCount(); i++) {
        Revision revision = doc.getRevisions().get(i);

        // Get revision details
        String author = revision.getAuthor();
        LocalDateTime changeDate = revision.getDate();
        RevisionType changeType = revision.getRevisionType();

        // Process based on author
        if ("Nancy Davolio".equals(author)) {
            revision.accept();
        } else if ("John Smith".equals(author)) {
            revision.reject();
        }
    }
}

// Save modified document
FileOutputStream outputStream = new FileOutputStream("output.docx");
doc.save(outputStream, FormatType.Docx);
outputStream.close();
stream.close();
doc.close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`
- `"output.docx"` → Replace with `"{output-file-path}"`
- `"Nancy Davolio"`, `"John Smith"` → Replace with `"{reviewer-names}"`

---

## Check for Tracked Changes

Verify if a document contains any tracked changes before processing.

```java
FileInputStream stream = new FileInputStream("document.docx");
WordDocument doc = new WordDocument(stream, FormatType.Docx);

// Check if document has tracked changes
if (doc.getHasChanges()) {
    System.out.println("Document has " + doc.getRevisions().getCount() + " tracked changes");

    // Process changes
    doc.getRevisions().acceptAll();
} else {
    System.out.println("Document has no tracked changes");
}

stream.close();
doc.close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`
