# Shapes

> All shape operations — adding shapes, formatting, rotating, grouping, ungrouping, and managing shape properties.

---

## Required common usings

```java
import com.syncfusion.docio.*;
```

## Add Shape

### Minimal Code

```java
WParagraph paragraph = (WParagraph) section.addParagraph();
Shape rectangle = paragraph.appendShape(AutoShapeType.RoundedRectangle, 150f, 100f);
rectangle.setVerticalPosition(72f);
rectangle.setHorizontalPosition(72f);
```

### Add Shape with Text Content

```java
WParagraph paragraph = (WParagraph) section.addParagraph();
Shape rectangle = paragraph.appendShape(AutoShapeType.RoundedRectangle, 150f, 100f);
rectangle.setVerticalPosition(72f);
rectangle.setHorizontalPosition(72f);
// Add paragraph inside the shape and set text formatting
WParagraph shapePara = (WParagraph) rectangle.getTextBody().addParagraph();
WTextRange text = (WTextRange) shapePara.appendText("This text is in rounded rectangle shape");
text.getCharacterFormat().setTextColor(ColorSupport.fromName("Green"));
text.getCharacterFormat().setBold(true);
```

### Multiple Shapes

```java
WParagraph paragraph = (WParagraph) section.addParagraph();
Shape rectangle = paragraph.appendShape(AutoShapeType.RoundedRectangle, 150f, 100f);
rectangle.setVerticalPosition(72f);
rectangle.setHorizontalPosition(72f);

// Add text inside the rounded rectangle
WParagraph shapePara = (WParagraph) rectangle.getTextBody().addParagraph();
shapePara.appendText("This text is in rounded rectangle shape");

paragraph = (WParagraph) section.addParagraph();
paragraph.appendBreak(BreakType.LineBreak);

Shape pentagon = paragraph.appendShape(AutoShapeType.Pentagon, 100f, 100f);
pentagon.setHorizontalPosition(72f);
pentagon.setVerticalPosition(200f);

// Add text inside the pentagon
WParagraph pentaPara = (WParagraph) pentagon.getTextBody().addParagraph();
pentaPara.appendText("This text is in pentagon shape");
```

### Placeholders
- `AutoShapeType.RoundedRectangle` → Replace with `{shape-type}`
- `150, 100` → Replace with `{width}, {height}`

---

## Format Shape

```java
WParagraph paragraph = (WParagraph) section.addParagraph();
Shape rectangle = paragraph.appendShape(AutoShapeType.RoundedRectangle, 150f, 100f);
rectangle.setVerticalPosition(72f);
rectangle.setHorizontalPosition(72f);

// Fill
rectangle.getFillFormat().setFill(true);
rectangle.getFillFormat().setColor(ColorSupport.fromName("Gray"));
// transparency as fraction (75% -> 0.75)
rectangle.getFillFormat().setTransparency(0.75f);

// Text wrapping
rectangle.getWrapFormat().setTextWrappingStyle(TextWrappingStyle.Square);
rectangle.getWrapFormat().setTextWrappingType(TextWrappingType.Right);

// Origins
rectangle.setHorizontalOrigin(HorizontalOrigin.Margin);
rectangle.setVerticalOrigin(VerticalOrigin.Page);

// Line format
rectangle.getLineFormat().setDashStyle(LineDashing.Dot);
rectangle.getLineFormat().setColor(ColorSupport.fromName("Gray"));
```

---

## Rotate Shape

```java
WParagraph paragraph = section.addParagraph();
Shape rectangle = paragraph.appendShape(AutoShapeType.RoundedRectangle, 150f, 100f);
rectangle.setVerticalPosition(72f);
rectangle.setHorizontalPosition(72f);

rectangle.setRotation(90f);

rectangle.setFlipHorizontal(true);
rectangle.setFlipVertical(false);
```

---

## Group Shapes

> **Important Requirements:**
> 1. Shapes must be positioned relative to the "Page"
> 2. Wrapping style should NOT be "In Line with Text" (use InFrontOfText or Behind)

### Minimal Code

```java
WParagraph paragraph = (WParagraph) section.addParagraph();
// Create a group shape and add it to the paragraph
GroupShape groupShape = new GroupShape(document);
paragraph.getChildEntities().add(groupShape);
// Create a rounded-rectangle shape and configure it
Shape shape = new Shape(document, AutoShapeType.RoundedRectangle);
shape.setHeight(100f);
shape.setWidth(150f);
shape.setHorizontalPosition(72f);
shape.setVerticalPosition(72f);
shape.setHorizontalOrigin(HorizontalOrigin.Page);
shape.setVerticalOrigin(VerticalOrigin.Page);
shape.getWrapFormat().setTextWrappingStyle(TextWrappingStyle.InFrontOfText);
```

### Group Shape with Multiple Items (Shape, Textbox, Picture)

```java
 WordDocument document = new WordDocument();
WSection section = (WSection) document.addSection();

WParagraph paragraph = (WParagraph) section.addParagraph();
GroupShape groupShape = new GroupShape(document);
paragraph.getChildEntities().add(groupShape);

// Rounded rectangle shape
Shape shape = new Shape(document, AutoShapeType.RoundedRectangle);
shape.setHeight(100f);
shape.setWidth(150f);
shape.setHorizontalPosition(72f);
shape.setVerticalPosition(72f);
shape.setHorizontalOrigin(HorizontalOrigin.Page);
shape.setVerticalOrigin(VerticalOrigin.Page);
shape.getWrapFormat().setTextWrappingStyle(TextWrappingStyle.InFrontOfText);
groupShape.add(shape);

// Picture
WPicture picture = new WPicture(document);
FileInputStream imageStream = new FileInputStream("Image.png");
picture.loadImage(imageStream);
imageStream.close();

picture.setTextWrappingStyle(TextWrappingStyle.InFrontOfText);
picture.setHeight(100f);
picture.setWidth(100f);
picture.setHorizontalPosition(400f);
picture.setVerticalPosition(150f);
picture.setHorizontalOrigin(HorizontalOrigin.Page);
picture.setVerticalOrigin(VerticalOrigin.Page);
groupShape.add(picture);

// Text box
WTextBox textbox = new WTextBox(document);
textbox.getTextBoxFormat().setWidth(150f);
textbox.getTextBoxFormat().setHeight(75f);
WParagraph textboxPara = (WParagraph) textbox.getTextBoxBody().addParagraph();
textboxPara.appendText("Text inside text box");
textbox.getTextBoxFormat().setTextWrappingStyle(TextWrappingStyle.Behind);
textbox.getTextBoxFormat().setHorizontalPosition(200f);
textbox.getTextBoxFormat().setVerticalPosition(200f);
textbox.getTextBoxFormat().setHorizontalOrigin(HorizontalOrigin.Page);
textbox.getTextBoxFormat().setVerticalOrigin(VerticalOrigin.Page);
groupShape.add(textbox);

// Save
Path outDir = Paths.get(System.getProperty("user.dir"), "output");
Files.createDirectories(outDir);
FileOutputStream fos = new FileOutputStream(outDir.resolve("GroupedShapes.docx").toFile());
document.save(fos, FormatType.Docx);
fos.close();
document.close();
```

### Group Shapes from Array

```java
 GroupShape groupShape = new GroupShape(document);
paragraph.getChildEntities().add(groupShape);

// Rounded rectangle shape
Shape shape = new Shape(document, AutoShapeType.RoundedRectangle);
shape.setHeight(100f);
shape.setWidth(150f);
shape.setHorizontalPosition(72f);
shape.setVerticalPosition(72f);
shape.setHorizontalOrigin(HorizontalOrigin.Page);
shape.setVerticalOrigin(VerticalOrigin.Page);
shape.getWrapFormat().setTextWrappingStyle(TextWrappingStyle.InFrontOfText);
groupShape.add(shape);

// Text box
WTextBox textbox = new WTextBox(document);
textbox.getTextBoxFormat().setWidth(150f);
textbox.getTextBoxFormat().setHeight(75f);
WParagraph textboxParagraph = (WParagraph) textbox.getTextBoxBody().addParagraph();
textboxParagraph.appendText("Text inside text box");
textbox.getTextBoxFormat().setTextWrappingStyle(TextWrappingStyle.Behind);
textbox.getTextBoxFormat().setHorizontalPosition(200f);
textbox.getTextBoxFormat().setVerticalPosition(200f);
textbox.getTextBoxFormat().setHorizontalOrigin(HorizontalOrigin.Page);
textbox.getTextBoxFormat().setVerticalOrigin(VerticalOrigin.Page);
groupShape.add(textbox);


// set group position if needed
groupShape.setHorizontalPosition(72f);
paragraph.getChildEntities().add(groupShape);
```

---

## Nested Group Shapes

```java
//Create a new Word document.
WordDocument document = new WordDocument();
//Add new section to the document.
IWSection section = document.addSection();
//Add new paragraph to the section.
WParagraph paragraph = (WParagraph)section.addParagraph();
//Create new group shape.
GroupShape groupShape = new GroupShape(document);
//Add group shape to the paragraph.
paragraph.getChildEntities().add(groupShape);
//Append new shape to the document.
Shape shape = new Shape(document, AutoShapeType.RoundedRectangle);
//Set height and width for shape.
shape.setHeight(100);
shape.setWidth(150);
//Set Wrapping style for shape.
shape.getWrapFormat().setTextWrappingStyle(TextWrappingStyle.InFrontOfText);
//Set horizontal and vertical position for shape.
shape.setHorizontalPosition(72);
shape.setVerticalPosition(72);
//Set horizontal and vertical origin for shape.
shape.setHorizontalOrigin(HorizontalOrigin.Page);
shape.setVerticalOrigin(VerticalOrigin.Page);
//Add the specified shape to group shape.
groupShape.add(shape);
//Append new picture to the document.
WPicture picture = new WPicture(document);
//Load image from the file.
FileStreamSupport imageStream = new FileStreamSupport("Image.png", FileMode.Open, FileAccess.ReadWrite);
picture.loadImage(imageStream.toArray());
//Set wrapping style for picture.
picture.setTextWrappingStyle(TextWrappingStyle.InFrontOfText);
//Set height and width for the picture.
picture.setHeight(100);
picture.setWidth(100);
//Set horizontal and vertical position for the picture.
picture.setHorizontalPosition(400);
picture.setVerticalPosition(150);
//Set horizontal and vertical origin for the picture.
picture.setHorizontalOrigin(HorizontalOrigin.Page);
picture.setVerticalOrigin(VerticalOrigin.Page);
//Add specified picture to the group shape.
groupShape.add(picture);
//Create new nested group shape.
GroupShape nestedGroupShape = new GroupShape(document);
//Append new textbox to the document.
WTextBox textbox = new WTextBox(document);
//Set width and height for the textbox.
textbox.getTextBoxFormat().setWidth(150);
textbox.getTextBoxFormat().setHeight(75);
//Add new text to the textbox body.
IWParagraph textboxParagraph = textbox.getTextBoxBody().addParagraph();
//Add new text to the textbox paragraph.
textboxParagraph.appendText("Text inside text box");
//Set wrapping style for the textbox.
textbox.getTextBoxFormat().setTextWrappingStyle(TextWrappingStyle.Behind);
//Set horizontal and vertical position for the textbox.
textbox.getTextBoxFormat().setHorizontalPosition(200);
textbox.getTextBoxFormat().setVerticalPosition(200);
//Set horizontal and vertical origin for the textbox.
textbox.getTextBoxFormat().setVerticalOrigin(VerticalOrigin.Page);
textbox.getTextBoxFormat().setHorizontalOrigin(HorizontalOrigin.Page);
//Add specified textbox to the nested group shape.
nestedGroupShape.add(textbox);
//Append new shape to the document.
shape = new Shape(document, AutoShapeType.Oval);
//Set height and width for the new shape.
shape.setHeight(100);
shape.setWidth(150);
//Set horizontal and vertical position for the shape.
shape.setHorizontalPosition(200);
shape.setVerticalPosition(72);
//Set horizontal and vertical origin for the shape.
shape.setHorizontalOrigin(HorizontalOrigin.Page);
shape.setVerticalOrigin(VerticalOrigin.Page);
//Set horizontal and vertical position for the nested group shape.
nestedGroupShape.setHorizontalPosition(72);
nestedGroupShape.setVerticalPosition(72);
//Add specified shape to the nested group shape.
nestedGroupShape.add(shape);
//Add nested group shape to the group shape of the paragraph.
groupShape.add(nestedGroupShape);
//Save and close the Word document instance.
document.save("Output.docx", FormatType.Docx);
document.close();
```

---

## Ungroup Shapes

### Ungroup Single Group Shape

```java
//Load the template document.
WordDocument document = new WordDocument("Template.docx", FormatType.Automatic);
//Get the last paragraph.
WParagraph lastParagraph = document.getLastParagraph();
//Iterate through the paragraph items to get the group shape.
for (int i = 0; i < lastParagraph.getChildEntities().getCount(); i++)
{
	if (lastParagraph.getChildEntities().get(i) instanceof GroupShape)
	{
		GroupShape groupShape = (GroupShape)lastParagraph.getChildEntities().get(i);
		//Ungroup the child shapes in the group shape.
		groupShape.ungroup();
		break;
	}
}
//Save and closes the Word document instance.
document.save("Output.docx", FormatType.Docx);
document.close();
```

### Ungroup All Group Shapes

```java
for (Object obj : document.getSections()) {
WSection section = (WSection) obj;
for (Object obj1 : section.getBody().getChildEntities()) {
    ITextBodyItem item = (ITextBodyItem) obj1;
if (item instanceof WParagraph) {
WParagraph para = (WParagraph) item;
for (int i = para.getChildEntities().getCount() - 1; i >= 0; i--) {
Object child = para.getChildEntities().get(i);
if (child instanceof GroupShape) {
GroupShape groupShape = (GroupShape) child;
groupShape.ungroup();
}
}
}
}
}		    
```
