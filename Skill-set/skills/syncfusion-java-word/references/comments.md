
# Comments

> Add, modify, remove, and manage comments — insert comments on specific text, access parent comments, retrieve commented items.

---

## Required common usings

```java
import com.syncfusion.docio.*;
import java.io.FileInputStream;
import java.io.FileOutputStream;
```

## Add Comment

Add a new comment to a paragraph with author information and timestamp.

### Minimal Code

```java
WordDocument doc = new WordDocument();
doc.ensureMinimal();
// Get the last paragraph and add text
WParagraph para = doc.getLastParagraph();
para.appendText("This is sample text for comment.");

// Add comment to paragraph
WComment comment = para.appendComment("This needs review");

// Set comment metadata
comment.getFormat().setUser("Peter");
comment.getFormat().setUserInitials("PT");
comment.getFormat().setDateTime(LocalDateTime.now())

// Save document
try (FileOutputStream stream = new FileOutputStream("output.docx")) {
    doc.save(stream, FormatType.Docx);
}
doc.close();
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

```java
FileInputStream stream = new FileInputStream("document.docx");
WordDocument doc = new WordDocument(stream, FormatType.Docx);

// Iterate through all comments
for (int i = 0; i < doc.getComments().getCount(); i++) {
    WComment comment = doc.getComments().get(i);
    // Modify comment by author
    if ("Peter".equals(comment.getFormat().getUser())) {
        comment.getTextBody().getLastParagraph().setText("Updated comment text");
    }
}

// Save modified document
try (FileOutputStream outputStream = new FileOutputStream("output.docx")) {
    doc.save(outputStream, FormatType.Docx);
}
stream.close();
doc.close();
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

```java
try (FileInputStream stream = new FileInputStream("document.docx")) {
    WordDocument doc = new WordDocument(stream, FormatType.Docx);

    // Find all text patterns ending with comma
    TextSelection[] textSelections = doc.findAll(java.util.regex.Pattern.compile("\\w+,"));

    if (textSelections != null) {
        for (int i = 0; i < textSelections.length; i++) {
            WTextRange textRange = textSelections[i].getAsOneRange();
            WParagraph paragraph = textRange.getOwnerParagraph();
            int textIndex = paragraph.getChildEntities().indexOf(textRange);

            // Add comment to paragraph
            WComment comment = paragraph.appendComment(String.format("Review item %d", i + 1));
            comment.getFormat().setUser("Peter");
            comment.getFormat().setUserInitials("PT");
            comment.getFormat().setDateTime(LocalDateTime.now());

            // Insert comment next to text (API may use insert/add)
            paragraph.getChildEntities().insert(textIndex + 1, comment);

            // Add text to commented items
            comment.addCommentedItem(textRange);
        }
    }

    // Save modified document
    try (FileOutputStream outputStream = new FileOutputStream("output.docx")) {
        doc.save(outputStream, FormatType.Docx);
    }
    doc.close();
}
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

```java
FileInputStream stream = new FileInputStream("document.docx");
WordDocument doc = new WordDocument(stream, FormatType.Docx);

// Remove all comments from document
doc.getComments().clear();

// Save modified document
FileOutputStream outputStream = new FileOutputStream("output.docx");
doc.save(outputStream, FormatType.Docx);
doc.close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`
- `"output.docx"` → Replace with `"{output-file-path}"`

---

## Remove Specific Comment

Remove a particular comment by index.

### Minimal Code

```java
FileInputStream stream = new FileInputStream("document.docx");
WordDocument doc = new WordDocument(stream, FormatType.Docx);

// Remove comment at index 1 (second comment)
if (doc.getComments().getCount() > 1) {
    doc.getComments().removeAt(1);
}

WComment comment = doc.getComments().get(3);
// Remove by instance
doc.getComments().remove(comment);

// Save modified document
FileOutputStream outputStream = new FileOutputStream("output.docx");
doc.save(outputStream, FormatType.Docx);
outputStream.close();
stream.close();
doc.close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`
- `1`, `3` → Replace with `"{comment-index}"`
- `"output.docx"` → Replace with `"{output-file-path}"`

---

## Access Parent Comment

Get the parent comment of a reply comment using the Ancestor property.

### Minimal Code

```java
FileInputStream stream = new FileInputStream("document.docx");
WordDocument doc = new WordDocument(stream, FormatType.Docx);

// Iterate through comments
for (int i = 0; i < doc.getComments().getCount(); i++) {
    WComment comment = doc.getComments().get(i);
    // Get parent comment (ancestor)
    WComment parentComment = comment.getAncestor();

    if (parentComment != null) {
        System.out.println("Parent comment: " +
            parentComment.getTextBody().getLastParagraph().getText());
        System.out.println("Reply: " +
            comment.getTextBody().getLastParagraph().getText());
    } else {
        System.out.println("This is a parent comment: " +
            comment.getTextBody().getLastParagraph().getText());
    }
}

stream.close();
doc.close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`

---

## Retrieve Commented Items

Get the paragraph items (text, images, etc.) that are within a comment.

### Minimal Code

```java
FileInputStream stream = new FileInputStream("document.docx");
WordDocument doc = new WordDocument(stream, FormatType.Docx);

// Iterate through all comments
for (int i = 0; i < doc.getComments().getCount(); i++) {
    WComment comment = doc.getComments().get(i);

    // Get the text of the comment
    String commentText = comment.getTextBody().getLastParagraph().getText();

    // Get paragraph items within comment
    ParagraphItemCollection commentedItems = comment.getCommentedItems();

    if (commentedItems.getCount() > 0) {
        System.out.println("Comment: " + commentText);
        System.out.println("Commented items count: " + commentedItems.getCount());

        // Access individual items
        for (int j = 0; j < commentedItems.getCount(); j++) {
            ParagraphItem item = commentedItems.get(j);
            if (item instanceof WTextRange) {
                WTextRange textRange = (WTextRange) item;
                System.out.println("Commented text: " + textRange.getText());
            }
        }
    }
}

stream.close();
doc.close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`

---

## Remove or Replace Commented Items

Remove or replace the paragraph items (text, images, etc.) that are within a comment.

### Remove Commented Items

#### Common for Cross-Platform and Windows-Specific
```java
FileInputStream stream = new FileInputStream("document.docx");
WordDocument doc = new WordDocument(stream, FormatType.Docx);

// Iterate through comments
for (Object obj : doc.getComments()) {
    WComment comment = (WComment) obj;
    // Remove all items associated with the comment
    comment.removeCommentedItems();
}

// Save document
FileOutputStream outputStream = new FileOutputStream("output.docx");
doc.save(outputStream, FormatType.Docx);
outputStream.close();
stream.close();
doc.close();
```

### Replace Commented Items using TextBodyPart

#### Common for Cross-Platform and Windows-Specific
```java
FileInputStream stream = new FileInputStream("document.docx");
WordDocument doc = new WordDocument(stream, FormatType.Docx);

// Create replacement content
TextBodyPart replacementPart = new TextBodyPart(doc);
WParagraph para = replacementPart.AddParagraph();
para.AppendText("Updated content for the comment.");

// Replace commented items
for (Object obj : doc.getComments()) {
    WComment comment = (WComment) obj;
    comment.replaceCommentedItems(replacementPart);
}

// Save document
FileOutputStream outputStream = new FileOutputStream("output.docx");
doc.save(outputStream, FormatType.Docx);
outputStream.close();
stream.close();
doc.close();
```

###  Replace Commented Items using String

#### Common for Cross-Platform and Windows-Specific
```java
FileInputStream stream = new FileInputStream("document.docx");
WordDocument doc = new WordDocument(stream, FormatType.Docx);

// Replace commented items with plain text
for (Object obj : doc.getComments()) {
    WComment comment = (WComment) obj;
    comment.replaceCommentedItems("This content has been replaced.");
}

// Save document
FileOutputStream outputStream = new FileOutputStream("output.docx");
doc.save(outputStream, FormatType.Docx);
outputStream.close();
stream.close();
doc.close();
```

### Placeholders
- `document.docx` → Replace with `{input-file-path}`
- `Updated content for the comment.` and `This content has been replaced.` → Replace with `{replacement-text}`
- `output.docx` → Replace with `{output-file-path}`

---

## List All Comments

Retrieve and display all comments in a document with metadata.

```java
FileInputStream stream = new FileInputStream("document.docx");
WordDocument doc = new WordDocument(stream, FormatType.Docx);

System.out.println("Total comments: " + doc.getComments().getCount());

// Iterate through all comments
for (int i = 0; i < doc.getComments().getCount(); i++) {
    WComment comment = doc.getComments().get(i);

    System.out.println("\n--- Comment " + (i + 1) + " ---");
    System.out.println("Author: " + comment.getFormat().getUser());
    System.out.println("Initials: " + comment.getFormat().getUserInitials());
    System.out.println("Date: " + comment.getFormat().getDateTime());
    System.out.println("Text: " + comment.getTextBody().getLastParagraph().getText());
    System.out.println("Resolved: " + comment.getDone());

    // Check if it's a reply
    WComment parent = comment.getAncestor();
    if (parent != null) {
        System.out.println("Reply to: " + parent.getTextBody().getLastParagraph().getText());
    }
}

stream.close();
doc.close();
```

### Placeholders
- `"document.docx"` → Replace with `"{input-file-path}"`

---

## Edit Comment by Author

Find and modify all comments by a specific author.

```java
FileInputStream stream = new FileInputStream("document.docx");
WordDocument doc = new WordDocument(stream, FormatType.Docx);

String targetAuthor = "Peter";
String newText = "Action required";

// Find and modify comments by author
for (int i = 0; i < doc.getComments().getCount(); i++) {
    WComment comment = doc.getComments().get(i);
    if (targetAuthor.equals(comment.getFormat().getUser())) {
        comment.getTextBody().getLastParagraph().setText(newText);
        comment.getFormat().setDateTime(LocalDateTime.now());
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
- `"Peter"` → Replace with `"{target-author}"`
- `"Action required"` → Replace with `"{new-comment-text}"`
- `"output.docx"` → Replace with `"{output-file-path}"`
