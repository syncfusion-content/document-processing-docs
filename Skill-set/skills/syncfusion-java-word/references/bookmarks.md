# Bookmarks

> All bookmark operations — creating bookmarks, navigating to bookmarks, retrieving content, inserting content, replacing content, and deleting bookmarks.

---

## Required Common usings

```java
import com.syncfusion.docio.*;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.nio.file.Paths;
import com.syncfusion.javahelper.system.drawing.ColorSupport;
```
## Add Bookmark

### Minimal Code
```java
WParagraph para = (WParagraph) section.addParagraph();
para.appendBookmarkStart("BookmarkName");
para.appendText("Content inside bookmark");
para.appendBookmarkEnd("BookmarkName");
```

### With Formatted Content
```java
WParagraph para = (WParagraph) section.addParagraph();
para.appendBookmarkStart("Northwind");
IWTextRange text = para.appendText("The Northwind sample database provides data you can experiment with and database objects that demonstrate features you might want to implement in your own databases.");
text.getCharacterFormat().setBold(true);
text.getCharacterFormat().setFontSize(12f);
para.appendBookmarkEnd("Northwind");
para.appendText(" Using Northwind, you can become familiar with how a relational database is structured.");
```

### Placeholders
- `"BookmarkName"` → Replace with `"{bookmark-name}"`
- `"Content inside bookmark"` → Replace with `"{bookmark-content}"`

---

## Get Bookmark Instance

### Minimal Code
```java
// Access a bookmark by name
Bookmark bookmark = doc.getBookmarks().findByName("BookmarkName");
```

### Access Bookmark Properties
```java
Bookmark bookmark = doc.getBookmarks().findByName("Northwind");
// Access the paragraph containing bookmark start
WParagraph ownerPara = bookmark.getBookmarkStart().getOwnerParagraph();
```

#### set back color
```java
ownerPara.getParagraphFormat().setBackColor(ColorSupport.getLightGray());
```

### Placeholders
- `"BookmarkName"` → Replace with `"{bookmark-name}"`

---

## Remove Bookmark

### Minimal Code
```java
// Find and remove a bookmark
Bookmark bookmark = doc.getBookmarks().findByName("BookmarkName");
doc.getBookmarks().remove(bookmark);
```

### Remove by Name
```java
// Remove bookmark directly by name
Bookmark bookmark = doc.getBookmarks().findByName("Northwind");
if (bookmark != null) 
{			
	doc.getBookmarks().remove(bookmark);
}
```

### Remove all Bookmarks
```java
// Remove all the bookmarks from Word document
doc.getBookmarks().clear();
```

### Placeholders
- `"BookmarkName"` → Replace with `"{bookmark-name}"`

---

## Navigate to Bookmark

### Minimal Code
```java
// Create bookmark navigator and move to bookmark
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(doc);
bookmarkNavigator.moveToBookmark("BookmarkName");
```

### Navigate with Position Control
```java
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(doc);
// Move to bookmark end
bookmarkNavigator.moveToBookmark("BookmarkName", false, true);
// Move to bookmark start
bookmarkNavigator.moveToBookmark("BookmarkName", true, false);
```

### Placeholders
- `"BookmarkName"` → Replace with `"{bookmark-name}"`

---

## Retrieve Bookmark Content

### Get Content as TextBodyPart (Single Section)
```java
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(doc);
bookmarkNavigator.moveToBookmark("BookmarkName");
// Get bookmark content as TextBodyPart
TextBodyPart part = bookmarkNavigator.getBookmarkContent();

// Add retrieved content to another section
doc.addSection();
for (int i = 0; i < part.getBodyItems().getCount(); i++)
	doc.getLastSection().getBody().getChildEntities().add(part.getBodyItems().get(i));
```

### Get Content as WordDocumentPart (Multi-Section)
```java
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(doc);
bookmarkNavigator.moveToBookmark("BookmarkName");
// Get bookmark content as WordDocumentPart
WordDocumentPart wordDocumentPart = bookmarkNavigator.getContent();

// Save as separate Word document
WordDocument newDocument = wordDocumentPart.getAsWordDocument();
newDocument.Save(outputPath);
newDocument.Close();
wordDocumentPart.Close();
```

### Placeholders
- `"BookmarkName"` → Replace with `"{bookmark-name}"`

---

## Retrieve Word Document Content

### Get Entire Word Document Content as WordDocumentPart
```java
WordDocument doc = new WordDocument(new FileInputStream("Template.docx"), FormatType.Docx);
// Get Word document content as WordDocumentPart
WordDocumentPart wordDocumentPart = new WordDocumentPart(doc);
```

### Placeholders
- `"Template.docx"` → Replace with `"{filename}.docx"`

---

## Retrieve Bookmark Content Within Table

### Minimal Code
```java
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(doc);
bookmarkNavigator.moveToBookmark("BkmkInTable");
// Set column range for rectangular selection
bookmarkNavigator.CurrentBookmark.FirstColumn = 1;
bookmarkNavigator.CurrentBookmark.LastColumn = 3;
// Get the selected content
TextBodyPart part = bookmarkNavigator.getBookmarkContent();
```

### Full Example with Table
```java
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(doc);
bookmarkNavigator.moveToBookmark("BkmkInTable");
// Set column range for rectangular selection
bookmarkNavigator.getCurrentBookmark().setFirstColumn((short) 1);
bookmarkNavigator.getCurrentBookmark().setLastColumn((short) 3);
// Get the selected content
TextBodyPart part = bookmarkNavigator.getBookmarkContent();
// Add to new section
doc.addSection();
for (int i = 0; i < part.getBodyItems().getCount(); i++)
	doc.getLastSection().getBody().getChildEntities().add(part.getBodyItems().get(i));
```

### Placeholders
- `"BkmkInTable"` → Replace with `"{bookmark-name}"`
- `1`, `3` → Replace with `{start-column}`, `{end-column}`

---

## Insert Content into Bookmark

### Insert Simple Text

#### Insert with Formatting
```java
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(doc);
bookmarkNavigator.moveToBookmark("BookmarkName");
// Insert text before bookmark end and preserve existing formatting.
bookmarkNavigator.insertText("New text content here.", true);
```

#### Insert without Formatting
```java
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(doc);
bookmarkNavigator.moveToBookmark("BookmarkName");
// Insert text before bookmark end and discard existing formatting.
bookmarkNavigator.insertText("New text content here.", false);
```

### Insert Paragraph
```java
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(doc);
bookmarkNavigator.moveToBookmark("BookmarkName", false, true);
// Create new paragraph
IWParagraph paragraph = new WParagraph(doc);
paragraph.appendText("This is a new paragraph inserted at the bookmark location.");
// Insert paragraph after bookmark start
bookmarkNavigator.insertParagraph(paragraph);
```

### Insert Paragraph Item (Image)

#### Common code for insert image
```java
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(doc);
bookmarkNavigator.moveToBookmark("BookmarkName", false, true);
// Insert picture after bookmark end
WPicture picture = (WPicture) bookmarkNavigator.insertParagraphItem(ParagraphItemType.Picture);
```

#### Code to load image
```java
FileInputStream imageStream = new FileInputStream("image.png");
picture.loadImage(imageStream);
```

#### Common code for set image scale
```java
picture.setWidthScale(50);
picture.setHeightScale(50);
```

### Insert Table
```java
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(doc);
bookmarkNavigator.moveToBookmark("BookmarkName", false, false);
// Create and insert table
WTable table = new WTable(document);
table.resetCells(3, 2);;
table.getRows().get(0).getCells().get(1).addParagraph().appendText("Column 2");
table.getRows().get(1).getCells().get(0).addParagraph().appendText("Data 1");
table.getRows().get(2).getCells().get(0).addParagraph().appendText("Data 3");
table.getRows().get(2).getCells().get(1).addParagraph().appendText("Data 4");
bookmarkNavigator.insertTable(table);
```

### Insert TextBodyPart
```java
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(doc);
bookmarkNavigator.moveToBookmark("SourceBookmark");
// Get content from source bookmark
TextBodyPart textBodyPart = bookmarkNavigator.getBookmarkContent();

// Move to destination bookmark
bookmarkNavigator.moveToBookmark("DestinationBookmark", true, true);
// Insert the text body part
bookmarkNavigator.insertTextBodyPart(textBodyPart);
```

### Placeholders
- `"BookmarkName"` → Replace with `"{bookmark-name}"`
- `"New text content here."` → Replace with `"{text-content}"`

---

## Delete Bookmark Content

### Minimal Code
```java
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(doc);
bookmarkNavigator.moveToBookmark("BookmarkName");
// Delete content but preserve formatting
bookmarkNavigator.deleteBookmarkContent(false);
```

### Delete with Formatting
```java
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(doc);
bookmarkNavigator.moveToBookmark("BookmarkName");
// Delete content including formatting
bookmarkNavigator.deleteBookmarkContent(true);
```

### Placeholders
- `"BookmarkName"` → Replace with `"{bookmark-name}"`

---

## Replace Bookmark Content

### Replace with TextBodyPart
```java
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(doc);
bookmarkNavigator.moveToBookmark("SourceBookmark");
// Get content from source
TextBodyPart textBodyPart = bookmarkNavigator.getBookmarkContent();

// Move to target bookmark
bookmarkNavigator.moveToBookmark("TargetBookmark");
// Replace content
bookmarkNavigator.replaceBookmarkContent(textBodyPart);
```

### Replace with Plain Text

#### Replace with Formatting
```java
// Bookmark "BookmarkName" already exists and contains formatted text
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(doc);
// Move to the virtual cursor before the end location of the bookmark "BookmarkName"
bookmarkNavigator.moveToBookmark("BookmarkName");
// Replace the bookmark content with simple text and preserve existing formatting.
bookmarkNavigator.replaceBookmarkContent(" Northwind Database is a set of tables containing data fitted into predefined categories.", true);
```

#### Replace without Formatting
```java
// Bookmark "BookmarkName" already exists and contains formatted text
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(doc);
// Move to the virtual cursor before the end location of the bookmark "BookmarkName"
bookmarkNavigator.moveToBookmark("BookmarkName");
// Replace the bookmark content with simple text and discard existing formatting.
bookmarkNavigator.replaceBookmarkContent(" Northwind Database is a set of tables containing data fitted into predefined categories.", false);
```

### Replace with WordDocumentPart
```java
WordDocument templateDoc = new WordDocument(new FileInputStream("Template.docx"), FormatType.Docx);
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(templateDoc);
bookmarkNavigator.moveToBookmark("SourceBookmark");
// Get content as WordDocumentPart
WordDocumentPart wordDocumentPart = bookmarkNavigator.getContent();

// Load target document
WordDocument targetDoc = new WordDocument(new FileInputStream("Target.docx"), FormatType.Docx);
bookmarkNavigator = new BookmarksNavigator(targetDoc);
bookmarkNavigator.moveToBookmark("TargetBookmark");
// Replace content
bookmarkNavigator.replaceContent(wordDocumentPart);

wordDocumentPart.close();
templateDoc.close();
```

### Placeholders
- `"SourceBookmark"`, `"TargetBookmark"` → Replace with `"{source-bookmark-name}"`, `"{target-bookmark-name}"`

---

## Complete Example: Bookmark Operations

### Full Example
```java
String outputPath = Paths.get(System.getProperty("user.dir"),"output","BookmarkOperations.docx").toString();
// Create document
WordDocument doc = new WordDocument();
WSection section = (WSection) doc.addSection();
section.getPageSetup().getMargins().setAll(72f);

// Add title
WParagraph title = (WParagraph) section.addParagraph();
title.appendText("Bookmark Operations Demo");
title.applyStyle(BuiltinStyle.Heading1);
section.addParagraph();

// Add first paragraph with bookmark
WParagraph para1 = (WParagraph) section.addParagraph();
para1.appendText("Before bookmark. ");
para1.appendBookmarkStart("ContentBookmark");
para1.appendText("This content is inside the bookmark and can be retrieved, replaced, or deleted.");
para1.appendBookmarkEnd("ContentBookmark");
para1.appendText(" After bookmark.");
section.addParagraph();

// Navigate to bookmark and insert content
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(doc);
bookmarkNavigator.moveToBookmark("ContentBookmark", false, true);
bookmarkNavigator.insertText(" Inserted text after bookmark start", false);

// Add another section with bookmark
doc.AddSection();
var para2 = doc.LastSection.AddParagraph();
para2.AppendText("Target section with empty bookmark: ");
para2.AppendBookmarkStart("EmptyBookmark");
para2.AppendBookmarkEnd("EmptyBookmark");

// Copy content from first bookmark to second
bookmarkNavigator.MoveToBookmark("ContentBookmark");
TextBodyPart contentPart = bookmarkNavigator.GetBookmarkContent();
bookmarkNavigator.MoveToBookmark("EmptyBookmark");
bookmarkNavigator.ReplaceBookmarkContent(contentPart);

doc.save(outputPath);
doc.close();
System.out.println("SUCCESS: " + outputPath);
```
