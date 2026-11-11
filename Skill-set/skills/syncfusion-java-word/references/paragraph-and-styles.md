# Paragraphs & Styles

> Paragraph elements and formatting — adding paragraphs, applying styles, text formatting, images, breaks, and text boxes.

---

## Required common usings

```java
import com.syncfusion.docio.*;
import com.syncfusion.javahelper.system.drawing.ColorSupport;
import java.io.FileInputStream;
```

## Add Paragraph

### Minimal Code
```java
WSection section = (WSection) doc.addSection();
WParagraph para = (WParagraph) section.addParagraph();
para.appendText("Adding a new paragraph to the document");
```

### Modify Existing Paragraph
```java
WParagraph para = doc.getSections().get(0).getBody().getParagraphs().get(0);
		for (Object item : para.getChildEntities()) {
		    if (item instanceof WTextRange) {
		        WTextRange textRange = (WTextRange) item;
		        textRange.getCharacterFormat().setBold(true);
		        textRange.getCharacterFormat().setFontSize(14f);
		        break;
		    }
		}
```

---

## Applying Paragraph Formatting

### Common Formatting Options
```java
var para = section.AddParagraph();
para.AppendText("Formatted paragraph");

// Spacing and indentation
para.getParagraphFormat().setBeforeSpacing(18f);
para.getParagraphFormat().setAfterSpacing(18f);
para.getParagraphFormat().setLeftIndent(36f);
para.getParagraphFormat().setRightIndent(18f);
para.getParagraphFormat().setFirstLineIndent(10f);  // Positive = first line, Negative = hanging
para.getParagraphFormat().setLineSpacing(10f);

// Alignment and background
para.getParagraphFormat().setHorizontalAlignment(HorizontalAlignment.Center);
para.getParagraphFormat().setBackColor(ColorSupport.getLightGray()); // LightGray

// Keep options
para.getParagraphFormat().setKeep(true);           // Keep lines together
para.getParagraphFormat().setKeepFollow(true);     // Keep with next paragraph
```

### RTL Paragraph
```java
para.getParagraphFormat().setBidi(true);  // Right-to-left direction
```

### Borders
```java
para.getParagraphFormat().getBorders().setBorderType(BorderStyle.Single);
para.getParagraphFormat().getBorders().setLineWidth(0.5f);
para.getParagraphFormat().getBorders().setColor(ColorSupport.getBlack());
```

### Placeholders
- `18f`, `10f` → Replace with desired spacing/indent values in points
- `HorizontalAlignment.Center` → Use `Left`, `Right`, `Justify`, `Distributed`
- `BorderStyle.Single` → Use `Double`, `Dotted`, `Dashed`, etc.

---

## Paragraph Styles

### Apply Built-in Style

```java
WParagraph para = (WParagraph) section.addParagraph();
para.appendText("This is a heading");
para.applyStyle(BuiltinStyle.Heading1);
```

### Create Custom Style

```java
WParagraphStyle customStyle = (WParagraphStyle)doc.addParagraphStyle("CustomStyle");
customStyle.getCharacterFormat().setFontName("Calibri");
customStyle.getCharacterFormat().setFontSize(14f);
customStyle.getCharacterFormat().setItalic(true);
customStyle.getCharacterFormat().setTextColor(ColorSupport.getDarkBlue()); // DarkBlue

customStyle.getParagraphFormat().setBackColor(ColorSupport.getLightGray()); // LightGray
customStyle.getParagraphFormat().setBeforeSpacing(18f);
customStyle.getParagraphFormat().setAfterSpacing(18f);
customStyle.getCharacterFormat().getBorder().setBorderType(BorderStyle.DotDash);
// Optional: Add ListFormat to style
customStyle.getListFormat().applyDefBulletStyle();
WParagraph para = (WParagraph) section.addParagraph();
para.appendText("Styled paragraph");
para.applyStyle("CustomStyle");
```

### Access & Modify Styles

```java
IStyleCollection styles = doc.getStyles();
Object styleObj = styles.findByName("Heading 1");
if (styleObj instanceof WParagraphStyle) {
	WParagraphStyle heading1Style = (WParagraphStyle) styleObj;
	heading1Style.getCharacterFormat().setTextColor(ColorSupport.getDarkBlue()); // DarkBlue
}
```

### Remove Style
```java
WParagraphStyle style = (WParagraphStyle) doc.getStyles().findByName("CustomStyle");
style.remove();
```

### Placeholders
- `"CustomStyle"` → Replace with `"{style-name}"`
- `BuiltinStyle.Heading1` → Use `Heading2`, `Emphasis`, `Normal`, etc.

---

## Working with Text

### Append Text
```java
WParagraph para = (WParagraph) section.addParagraph();
WTextRange textRange = (WTextRange) para.appendText("Formatted text");
textRange.getCharacterFormat().setBold(true);
textRange.getCharacterFormat().setFontSize(14f);
textRange.getCharacterFormat().setTextColor(ColorSupport.getGreen());
textRange.getCharacterFormat().setFontName("Times New Roman");
```

### Replace Text

```java
WParagraph para = doc.getSections().get(0).getBody().getParagraphs().get(0);
for (Object item : para.getChildEntities()){
if (item instanceof WTextRange) {
WTextRange textRange = (WTextRange) item;
textRange.setText("Replaced text");
textRange.getCharacterFormat().setFontSize(14f);
break;
}
}
```

### Text Formatting Options
```java
textRange.getCharacterFormat().setBold(true);
textRange.getCharacterFormat().setItalic(true);
textRange.getCharacterFormat().setUnderlineStyle(UnderlineStyle.Single);
textRange.getCharacterFormat().setShadow(true);
textRange.getCharacterFormat().setSmallCaps(true);
textRange.getCharacterFormat().setBidi(true); // RTL character formatting
textRange.getCharacterFormat().setHighlightColor(ColorSupport.getYellow());
// Superscript and subscript
textRange.getCharacterFormat().setSubSuperScript(SubSuperScript.SuperScript);  // or SubScript
```
### Placeholders
- `"Formatted text"` → Replace with desired text
- `UnderlineStyle.Single` → Use `Double`, `Dotted`, `DotDash`, `Wavy`, etc.

---

## Tab Stops

### Add Tab Stops

```java
WParagraph para = (WParagraph) section.addParagraph();
para.getParagraphFormat().getTabs().addTab(11f, TabJustification.Left, TabLeader.Dotted);
para.getParagraphFormat().getTabs().addTab(62f, TabJustification.Right, TabLeader.Single);
para.appendText("First\tSecond\tThird");
```

### Remove Tab Stop

```java
para.getParagraphFormat().getTabs().removeByTabPosition(11);
```

### Remove all Tabs

```java
para.getParagraphFormat().getTabs().clear();
```

### Placeholders
- `11, 62` → Replace with desired tab position values
- `TabJustification.Left` → Use `Center`, `Right`, `Decimal`
- `TabLeader.Dotted` → Use `Single`, `Heavy`, `None`

---

## Breaks

### Types of Breaks

```java
WParagraph para = (WParagraph) section.addParagraph();
para.appendText("Before break");
para.appendBreak(BreakType.LineBreak);           // Line break
para.appendText("After line break");

WParagraph para2 = (WParagraph) section.addParagraph();
para2.appendText("Before page break");
para2.appendBreak(BreakType.PageBreak);          // Page break
para2.appendText("After page break");

WParagraph para3 = (WParagraph) section.addParagraph();
para3.appendText("Before column break");
para3.appendBreak(BreakType.ColumnBreak);        // Column break
para3.appendText("After column break");
```

### Text Wrapping Break

```java
WParagraph para = section.getParagraphs().get(0);
Break textWrapBreak = new Break(doc, BreakType.TextWrappingBreak);
para.getChildEntities().insert(1, textWrapBreak);  // Insert after image/object
```

### Placeholders
- `BreakType.PageBreak` → Use `LineBreak`, `ColumnBreak`, `TextWrappingBreak`

---

## Working with Symbols

### Add Symbol

```java
WParagraph para = (WParagraph) section.addParagraph();
para.appendText("Currency symbol: ");
para.appendSymbol((byte) 100);  // Character code
```

### Modify Symbol

```java
for (Object paraObj : doc.getSections().get(0).getBody().getParagraphs()) {
		    if (paraObj instanceof WParagraph) {
		        WParagraph para = (WParagraph) paraObj;
		        for (Object item : para.getChildEntities()) {
		            if (item instanceof WSymbol) {
		                WSymbol symbol = (WSymbol) item;
		                if (symbol.getCharacterCode() == 100) {
		                    symbol.setCharacterCode((byte) 40);
		                    symbol.setFontName("Wingdings");
		                    break;
		                }
		            }
		        }
		    }
		}
```

### Placeholders
- `100` → Replace with desired character code

---

## Text Box

### Add Text Box
```java
WParagraph para = (WParagraph) section.addParagraph();
WTextBox textBox = (WTextBox) para.appendTextBox(150, 75); // Width, Height
WParagraph boxPara = (WParagraph) textBox.getTextBoxBody().addParagraph();
boxPara.appendText("Text inside text box");
```

### Format & Rotate Text Box

```java
textBox.getTextBoxFormat().setFillColor(ColorSupport.getLightGreen()); // LightGreen
textBox.getTextBoxFormat().setLineWidth(2f);
textBox.getTextBoxFormat().setTextDirection(TextDirection.VerticalTopToBottom);
textBox.getTextBoxFormat().setTextWrappingStyle(TextWrappingStyle.InFrontOfText);
textBox.getTextBoxFormat().setHorizontalPosition(200);
textBox.getTextBoxFormat().setVerticalPosition(200);
textBox.getTextBoxFormat().setRotation(90);
textBox.getTextBoxFormat().setFlipHorizontal(true);
textBox.getTextBoxFormat().getInternalMargin().setTop(5f);
textBox.getTextBoxFormat().getInternalMargin().setBottom(5f);
```

### Add Image to Text Box

```java
FileInputStream imageStream = new FileInputStream("image.jpg");
WParagraph boxPara = (WParagraph) textBox.getTextBoxBody().addParagraph();
WPicture picture = (WPicture) boxPara.appendPicture(imageStream);
picture.setHeight(50);
picture.setWidth(75);
imageStream.close();
```

### Placeholders
- `150, 75` → Replace with desired width and height
- `200` → Replace with desired position value
- `"image.jpg"` → Replace with actual image file path

