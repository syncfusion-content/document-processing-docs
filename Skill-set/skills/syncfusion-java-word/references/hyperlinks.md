# Hyperlinks

> Create and manage hyperlinks — web links, email links, file links, bookmark links, image hyperlinks, and modify existing hyperlink URLs.

---

## Required common usings

```java
import com.syncfusion.docio.*;
import com.synfusion.javahelper.system.*;
import java.io.FileInputStream;
```

## Web Hyperlink

Create a hyperlink to an external website or web address.

```java
var doc = new WordDocument();
var section = doc.addSection();
var para = section.addParagraph();
para.appendText("Web Hyperlink: ");
para = section.addParagraph();
// Append web hyperlink to the paragraph
IWField field = para.appendHyperlink("http://www.syncfusion.com", "Syncfusion", HyperlinkType.WebLink);
doc.save(outputPath);
doc.close();
```

### Placeholders
- `"http://www.syncfusion.com"` → Replace with `"{web-url}"`
- `"Syncfusion"` → Replace with `"{display-text}"`

---

## Email Hyperlink

Create a hyperlink that opens an email client to send an email to a specified address.

```java
var doc = new WordDocument();
var section = doc.addSection();
var para = section.addParagraph();
para.appendText("Email Hyperlink: ");
para = section.addParagraph();
// Append email hyperlink to the paragraph
para.appendHyperlink("mailto:sales@syncfusion.com", "Sales", HyperlinkType.EMailLink);
doc.save(outputPath);
doc.close();
```

### Placeholders
- `"mailto:sales@syncfusion.com"` → Replace with `"mailto:{email-address}"`
- `"Sales"` → Replace with `"{display-text}"`

### Email with Subject and CC/BCC

```java
// Email with subject
para.appendHyperlink("mailto:sales@syncfusion.com?subject=Hello", "Send Email", HyperlinkType.EMailLink);

// Email with subject and body
para.appendHyperlink("mailto:sales@syncfusion.com?subject=Hello&body=Welcome", "Send Email", HyperlinkType.EMailLink);
```

---

## File Hyperlink

Create a hyperlink to a file that can be opened when clicked.

```java
var doc = new WordDocument();
var section = doc.addSection();
var para = section.addParagraph();
para.appendText("File Hyperlinks: ");
para = section.addParagraph();
// Append file hyperlink to the paragraph
para.appendHyperlink(@"Template.docx", "File", HyperlinkType.FileLink);
doc.save(outputPath);
doc.close();
```

### Placeholders
- `@"Template.docx"` → Replace with `@"{file-path}"`
- `"File"` → Replace with `"{display-text}"`

### File with Full Path

```java
// Absolute file path
para.appendHyperlink(@"C:\Documents\Report.pdf", "Open Report", HyperlinkType.FileLink);

// Network path
para.appendHyperlink(@"\\server\share\Document.docx", "Network File", HyperlinkType.FileLink);
```

---

## Bookmark Hyperlink

Create a hyperlink that navigates to a bookmark within the same document or another document.

### Bookmark in Same Document

```java
var doc = new WordDocument();
var section = doc.addSection();
var para = section.addParagraph();

// Create a bookmark
para.appendBookmarkStart("Introduction");
para.appendText("Introduction Section");
para.appendBookmarkEnd("Introduction");

para = section.addParagraph();
para.appendText("Go to section: ");
// Create hyperlink to the bookmark
para.appendHyperlink("Introduction", "Bookmark", HyperlinkType.Bookmark);

doc.save(outputPath);
doc.close();
```

### Bookmark in External Document

```java
// Link to bookmark in another document
para.appendHyperlink("ExternalDocument.docx#BookmarkName", "External Bookmark", HyperlinkType.Bookmark);
```

### Placeholders
- `"Introduction"` → Replace with `"{bookmark-name}"`
- `"Bookmark"` → Replace with `"{display-text}"`
- `"ExternalDocument.docx#BookmarkName"` → Replace with `"{file}#{bookmark-name}"`

---

## Image Hyperlink

Use an image as the display content for a hyperlink instead of text.

```java
var doc = new WordDocument();
var section = doc.addSection();
var para = section.addParagraph();
para.appendText("Image Hyperlink");
para = section.addParagraph();
// Create and load an image
WPicture picture = new WPicture(doc);
picture.loadImage(new FileInputStream("Image.png"));
// Append image as hyperlink display content
para.appendHyperlink("http://www.syncfusion.com", picture, HyperlinkType.WebLink);
doc.save(outputPath);
doc.close();
```

### Placeholders
- `@"Image.png"` → Replace with `@"{image-path}"`
- `"http://www.syncfusion.com"` → Replace with `"{hyperlink-url}"`

### Image Hyperlink to File

```java
WPicture picture = new WPicture(doc);
picture.loadImage(new FileInputStream("icon.png"));
// Create file hyperlink with image
para.appendHyperlink(@"Document.pdf", picture, HyperlinkType.FileLink);
```

---

## Modify Hyperlink

Locate and modify the URL or display text of an existing hyperlink in a document.

### Modify URL in Existing Document

```java
FileInputStream fileStream = new FileInputStream("Sample.docx");
var doc = new WordDocument(fileStream, FormatType.Docx);
WParagraph para = doc.getLastParagraph();
// Iterate through paragraph items to find hyperlinks
for(Object item_tempObj : para.getChildEntities())
{
	ParagraphItem item = (ParagraphItem)item_tempObj;
	if(item instanceof WField)
	{
		if(((WField)(item)).getFieldType() == FieldType.FieldHyperlink)
		{
			//Get the hyperlink field.
			Hyperlink link = new Hyperlink((WField)(item));
			if(link.getType() == HyperlinkType.WebLink)
			{
				// Modify the URL of the hyperlink
				link.setUri("http://www.google.com");
				link.setTextToDisplay("Google");
				break;
			}
		}
	}
}
doc.save(outputPath);
doc.close();
```

### Modify Hyperlink in Document Body

```java
// Open the document
WordDocument doc = new WordDocument(fileStream, FormatType.Docx);

// Iterate all sections
for (Object secObj : doc.getSections()) {
    WSection section = (WSection) secObj;

    // Iterate all body items
    for (Object bodyObj : section.getBody().getChildEntities()) {

        if (bodyObj instanceof WParagraph) {
            WParagraph para = (WParagraph) bodyObj;

            for (Object itemObj : para.getChildEntities()) {
                if (itemObj instanceof WField) {

                    WField field = (WField) itemObj;

                    if (field.getType() == FieldType.FieldHyperlink) {

                        Hyperlink link = new Hyperlink(field);

                        if (link.getUri().contains("oldurl")) {
                            link.setUri("http://www.newurl.com");
                            link.setTextToDisplay("New Link");
                        }
						
						//Optional: Retrieve other hyperlink properties					
						if (link.getType() == HyperlinkType.Bookmark) {
    						// Get bookmark name
    						String bookmarkName = link.getBookmarkName();
    						// Set bookmark name
    						link.setBookmarkName("NewBookmarkName");
    						// Get local reference (anchor)
    						String localReference = link.getLocalReference();
						}
						else if (link.getType() == HyperlinkType.FileLink) {
    						// Get file path
    						String filePath = link.getFilePath();
    						// Set file path
    						link.setFilePath("Template.pdf");
						}
						else if (link.getType() == HyperlinkType.WebLink
        						&& link.getPictureToDisplay() != null) {
    						// Image hyperlink (Picture used as display content)

    						// Get picture used for hyperlink display
    						WPicture picture = link.getPictureToDisplay();

						}
                    }
                }
            }
        }
    }
}
doc.save(outputPath);
doc.close();
```

### Placeholders
- `@"Sample.docx"` → Replace with `@"{input-file-path}"`
- `"http://www.google.com"` → Replace with `"{new-url}"`
- `"Google"` → Replace with `"{new-display-text}"`
- `"oldurl"` → Replace with `"{search-url-pattern}"`
- `"NewBookmarkName"` → Replace with `"{new-bookmark-name}"`
- `@"Template.pdf"` → Replace with `@"{new-file-path}"`

---

## Find All Hyperlinks

Traverse the document to find and collect all hyperlinks.

```java
WordDocument doc = new WordDocument(fileStream, FormatType.Docx);

ListSupport<Hyperlink> allHyperlinks = new ListSupport<Hyperlink>();

// Traverse whole document
for (Object secObj : doc.getSections()) {
    WSection section = (WSection) secObj;

    for (Object bodyObj : section.getBody().getChildEntities()) {

        if (bodyObj instanceof WParagraph) {
            WParagraph para = (WParagraph) bodyObj;

            for (Object itemObj : para.getChildEntities()) {

                if (itemObj instanceof WField) {
                    WField field = (WField) itemObj;

                    if (field.getType() == FieldType.FieldHyperlink) {
                        Hyperlink link = new Hyperlink(field);
                        allHyperlinks.add(link);
                    }
                }
            }
        }
    }
}

// Display all hyperlinks
for (Hyperlink link : allHyperlinks) {
    System.out.println("URL: " + link.getUri() +
                       ", Display Text: " + link.getTextToDisplay());
}

doc.close();
```
---

## Remove Hyperlink

Delete a hyperlink while preserving the display text.

```java
WordDocument doc = new WordDocument(fileStream, FormatType.Docx);
// Get last paragraph
WParagraph para = doc.getLastParagraph();

for (Object itemObj : para.getChildEntities()) {

    if (itemObj instanceof WField) {
        WField field = (WField) itemObj;

        if (field.getType() == FieldType.FieldHyperlink) {

            // Remove the hyperlink field
            para.getChildEntities().remove(field);
            break;
        }
    }
}

doc.save(outputPath);
doc.close();
```

---

## Complete Example: Hyperlink Operations
### Full Example

```java
var outputPath = = "output/HyperlinkOperations.docx";

var doc = new WordDocument();
var section = doc.addSection();
section.getPageSetup().getMargins().setAll(72f);

// Add title
var title = section.addParagraph();
title.appendText("Hyperlink Operations Demo");
title.applyStyle(BuiltinStyle.Heading1);
section.addParagraph();

// Web hyperlink
var para = section.addParagraph();
para.appendText("1. Web Hyperlink: ");
para.appendHyperlink("http://www.syncfusion.com", "Visit Syncfusion", HyperlinkType.WebLink);
section.addParagraph();

// Email hyperlink
para = section.addParagraph();
para.appendText("2. Email Hyperlink: ");
para.appendHyperlink("mailto:support@syncfusion.com", "Send Email", HyperlinkType.EMailLink);
section.addParagraph();

// Bookmark
para = section.addParagraph();
para.appendBookmarkStart("SectionA");
para.appendText("Section A - Content");
para.appendBookmarkEnd("SectionA");
section.addParagraph();

para = section.addParagraph();
para.appendText("3. Bookmark Hyperlink: ");
para.appendHyperlink("SectionA", "Go to Section A", HyperlinkType.Bookmark);
section.addParagraph();

// Image hyperlink
para = section.addParagraph();
para.appendText("4. Image Hyperlink: ");
WPicture picture = new WPicture(doc);
picture.loadImage(new FileInputStream("Image.png"));
para.appendHyperlink("http://www.example.com", picture, HyperlinkType.WebLink);
doc.save(outputPath);
doc.close();
System.out.println("SUCCESS: " + outputPath);
```

---

