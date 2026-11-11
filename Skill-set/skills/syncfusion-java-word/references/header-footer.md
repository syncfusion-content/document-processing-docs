# Headers & Footers

> Headers and footers — add headers/footers (odd, even, first page), page numbers with fields, borders, images, and remove headers/footers.

---

## Required common usings

```java
w
import java.nio.file.Paths;
import com.syncfusion.javahelper.system.drawing.ColorSupport;
```

## Add Headers & Footers

### Add Default Header & Footer

```java
WordDocument document = new WordDocument();
IWSection section = document.addSection();

// Add default header (odd pages)
IWParagraph headerPara = section.getHeadersFooters().getOddHeader().addParagraph();
headerPara.appendText("[ Default Page Header ]");

// Add default footer (odd pages)
IWParagraph footerPara = section.getHeadersFooters().getOddFooter().addParagraph();
footerPara.appendText("[ Default Page Footer ]");

// Add content to document
IWParagraph para = section.addParagraph();
para.appendText("AdventureWorks Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company.");
```

---

## Different First Page Header & Footer

### Set Different First Page Header/Footer

```java
 IWSection section = document.getSections().get(0);
section.getPageSetup().setDifferentFirstPage(true);

// First page header
IWParagraph firstPageHeader = section.getHeadersFooters().getFirstPageHeader().addParagraph();
firstPageHeader.appendText("[First Page Header]");

// First page footer
IWParagraph firstPageFooter = section.getHeadersFooters().getFirstPageFooter().addParagraph();
firstPageFooter.appendText("[ First Page Footer ]");

// Default (odd) header
IWParagraph defaultHeader = section.getHeadersFooters().getOddHeader().addParagraph();
defaultHeader.appendText("[ Default Page Header ]");

// Default (odd) footer
IWParagraph defaultFooter = section.getHeadersFooters().getOddFooter().addParagraph();
defaultFooter.appendText("[ Default Page Footer ]");
```

---

## Different Odd & Even Page Headers/Footers

### Set Different Headers for Odd and Even Pages

```java
IWSection section = document.getSections().get(0);

// Use different headers/footers for odd and even pages
section.getPageSetup().setDifferentOddAndEvenPages(true);

// Odd page header
IWParagraph oddHeader = section.getHeadersFooters().getOddHeader().addParagraph();
oddHeader.appendText("[ Odd Page Header ]");

// Odd page footer
IWParagraph oddFooter = section.getHeadersFooters().getOddFooter().addParagraph();
oddFooter.appendText("[ Odd Page Footer ]");

// Even page header
IWParagraph evenHeader = section.getHeadersFooters().getEvenHeader().addParagraph();
evenHeader.appendText("[Even Page Header ]");

// Even page footer
IWParagraph evenFooter = section.getHeadersFooters().getEvenFooter().addParagraph();
evenFooter.appendText("[ Even Page Footer ]");
```

---

## Link Headers/Footers to Previous Section

### Use Previous Section Header/Footer

```java
WordDocument document = new WordDocument();
// First section
IWSection section1 = document.addSection();
section1.getHeadersFooters().getHeader().addParagraph().appendText("[ First Section Header ]");
section1.getHeadersFooters().getFooter().addParagraph().appendText("[ First Section Footer ]");
IWParagraph para1 = section1.addParagraph();
para1.appendText("First section content");

// Second section (links headers/footers to previous section)
IWSection section2 = document.addSection();
section2.getHeadersFooters().getHeader().addParagraph().appendText("[ Second Section Header ]");
section2.getHeadersFooters().getFooter().addParagraph().appendText("[ Second Section Footer ]");
section2.getHeadersFooters().setLinkToPrevious(true); // Inherit header/footer
IWParagraph para2 = section2.addParagraph();
para2.appendText("Second section content");

// Third section (unlink from previous)
IWSection section3 = document.addSection();
section3.getHeadersFooters().getHeader().addParagraph().appendText("[ Third Section Header ]");
section3.getHeadersFooters().getFooter().addParagraph().appendText("[ Third Section Footer ]");
IWParagraph para3 = section3.addParagraph();
para3.appendText("Third section content");
```

### Options

| API | Effect |
|---|---|
| getHeadersFooters().setLinkToPrevious | Links **all** headers & footers |
| getHeadersFooters().getHeader().setLinkToPrevious | Links **only header** |
| getHeadersFooters().getFooter().setLinkToPrevious | Links **only footer** |

---

## Add Page Numbers

### Add Simple Page Number

```java
IWSection section = document.getSections().get(0);

IWParagraph footerPara = section.getHeadersFooters().getFooter().addParagraph();
footerPara.appendText("Page ");
footerPara.appendField("Page", FieldType.FieldPage);
```

### Add Page Number with Total Pages

```java
IWSection section = document.getSections().get(0);
section.getPageSetup().setPageStartingNumber(1);
section.getPageSetup().setRestartPageNumbering(true);
section.getPageSetup().setPageNumberStyle(PageNumberStyle.Arabic);

IWParagraph footerPara = section.getHeadersFooters().getFooter().addParagraph();
footerPara.getParagraphFormat().getTabs().addTab(523f, TabJustification.Right, TabLeader.NoLeader);
footerPara.appendText("Copyright Northwind Inc. 2001 - 2015\t");
footerPara.appendText(" Page ");
footerPara.appendField("CurrentPageNumber", FieldType.FieldPage);
footerPara.appendText(" of ");
footerPara.appendField("TotalNumberOfPages", FieldType.FieldNumPages);
```

### Page Number Field Types

```java
FieldType.FieldPage      // Current page number
FieldType.FieldNumPages  // Total number of pages
FieldType.FieldDate      // Current date field
FieldType.FieldTime      // Current time field
```

### Page Number Style Options

```java
PageNumberStyle.Arabic        // 1, 2, 3...
PageNumberStyle.RomanUpper    // I, II, III...
PageNumberStyle.RomanLower    // i, ii, iii...
```

---

## Add Images to Headers/Footers

### Add Logo to Header

#### Common Setup
```java
IWSection section = document.getSections().get(0);
IWParagraph headerPara = section.getHeadersFooters().getHeader().addParagraph();
```

#### Common Setup
```java
FileInputStream imageStream = new FileInputStream("logo.jpg");
IWPicture picture = headerPara.appendPicture(imageStream);
picture.setWidth(50);
picture.setHeight(50);

headerPara.appendText("  Company Logo");
```

---

## Adjust Header/Footer Distance

### Set Header & Footer Distance

```java
IWSection section = document.getSections().get(0);
section.getPageSetup().setHeaderDistance(100f);
section.getPageSetup().setFooterDistance(100f);
```

---

## Add Borders to Page

### Apply Page Borders

```java
IWSection section = document.getSections().get(0);

section.getPageSetup().getBorders().setBorderType(BorderStyle.Single);
section.getPageSetup().getBorders().setColor(ColorSupport.fromName("Blue"));
section.getPageSetup().getBorders().setLineWidth(0.75f);

section.getPageSetup().getBorders().getTop().setSpace(5f);
section.getPageSetup().getBorders().getBottom().setSpace(5f);
section.getPageSetup().getBorders().getRight().setSpace(5f);
section.getPageSetup().getBorders().getLeft().setSpace(5f);
```

### Border Style Options

```java
BorderStyle.Single      // Single line
BorderStyle.Double      // Double line
BorderStyle.Dot         // Dotted line
BorderStyle.DotDash     // Dot-dash line
BorderStyle.Triple      // Triple line
```

---

## Remove Headers & Footers

### Remove All Headers and Footers

```java
WordDocument document = new WordDocument();

for (Object obj : document.getSections()) {
	IWSection section = (IWSection) obj;

	section.getHeadersFooters().getFirstPageHeader().getChildEntities().clear();
	section.getHeadersFooters().getFirstPageFooter().getChildEntities().clear();
	section.getHeadersFooters().getOddHeader().getChildEntities().clear();
	section.getHeadersFooters().getOddFooter().getChildEntities().clear();
	section.getHeadersFooters().getEvenHeader().getChildEntities().clear();
	section.getHeadersFooters().getEvenFooter().getChildEntities().clear();
}
```

### Remove Headers from Specific Section

```java
IWSection section = document.getSections().get(0);

section.getHeadersFooters().getOddHeader().getChildEntities().clear();
section.getHeadersFooters().getEvenHeader().getChildEntities().clear();
section.getHeadersFooters().getFirstPageHeader().getChildEntities().clear();
```

### Remove Footers from Specific Section

```java
IWSection section = document.getSections().get(0);

section.getHeadersFooters().getOddFooter().getChildEntities().clear();
section.getHeadersFooters().getEvenFooter().getChildEntities().clear();
section.getHeadersFooters().getFirstPageFooter().getChildEntities().clear();
```

---

## Open Existing Document and Modify Headers/Footers

### Open and Modify Headers

#### Cross-Platform
```java
FileInputStream inputStream = new FileInputStream("input.docx");
WordDocument document = new WordDocument(inputStream, FormatType.Docx);

IWParagraph headerPara = document.getSections().get(0).getHeadersFooters().getHeader().addParagraph();
headerPara.appendText("Modified Header");

document.save("output.docx", FormatType.Docx);
document.close();
```

---

## Practical Example: Complete Document with Header/Footer

```java
WordDocument document = new WordDocument();
IWSection section = document.addSection();

// Configure page setup
section.getPageSetup().setPageStartingNumber(1);
section.getPageSetup().setPageNumberStyle(PageNumberStyle.Arabic);

// Add header with company name
IWParagraph headerPara = section.getHeadersFooters().getHeader().addParagraph();
headerPara.appendText("Company Report");
headerPara.getParagraphFormat().setHorizontalAlignment(HorizontalAlignment.Center);

// Add footer with page numbers
IWParagraph footerPara = section.getHeadersFooters().getFooter().addParagraph();
footerPara.getParagraphFormat().getTabs().addTab(523f, TabJustification.Right, TabLeader.NoLeader);
footerPara.appendText("Copyright 2025\t");
footerPara.appendText("Page ");
footerPara.appendField("Page", FieldType.FieldPage);
footerPara.appendText(" of ");
footerPara.appendField("NumPages", FieldType.FieldNumPages);

// Add document content
IWParagraph contentPara = section.addParagraph();
contentPara.appendText("This is the document body content.");
contentPara.getParagraphFormat().setPageBreakAfter(true);

IWParagraph contentPara2 = section.addParagraph();
contentPara2.appendText("This is content on the second page.");
```

---

## Placeholders
- `"{input-document}"` → Replace with `"input.docx"` or file path
- `"{output-filename}"` → Replace with `"output.docx"` or desired file path
- `"{image-file-path}"` → Replace with `"logo.jpg"` or image path
- Header/footer text like `"[ Default Page Header ]"` → Replace with actual header/footer content
- Border width values in points (0.75f = 0.75 point, 0.5f = 0.5 point)
- Tab position `523f` is in twips (1/20th of a point) for right alignment
