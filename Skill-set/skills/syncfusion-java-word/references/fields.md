# Fields

> DocIO snippets for working with Word fields — inserting, formatting, updating, and retrieving dynamic content.

---

## Required common usings
```java
import com.syncfusion.docio.*;
```

---

## Add Merge Field

### Minimal Code

```java
IWParagraph para = section.addParagraph();
para.appendText("Name: ");
para.appendField("Name", FieldType.FieldMergeField);
```

---

## Add Date Field

### Minimal Code

```java
IWParagraph para = section.addParagraph();

WField field = (WField) para.appendField("Date", FieldType.FieldDate);
field.setFieldCode(StringSupport.concat("DATE  \\@","\"MMMM d, yyyy\"" ));
```

---

## Add Page Number Field

### Minimal Code

```java
IWParagraph footer = section.getHeadersFooters().getFooter().addParagraph();

footer.appendText("Page ");
footer.appendField("Page", FieldType.FieldPage);
footer.appendText(" of ");
footer.appendField("NumPages", FieldType.FieldNumPages);
```

---

## Updating Fields

### Minimal Code
```java
doc.updateDocumentFields();
```

---

## IF Field (Conditional Field)

### Minimal Code

```java
WIfField field = (WIfField) section.addParagraph()
        .appendField("If", FieldType.FieldIf);

field.setFieldCode("IF \"True\" = \"True\" \"The given statement is Correct\" \"The given statement is Wrong\"");
doc.updateDocumentFields();
```

---

## SEQ Field (Sequence Field)

### Minimal Code

```java
WSeqField field = (WSeqField) section.addParagraph()
        .appendField("SEQ", FieldType.FieldSequence);

field.setFieldCode("SEQ Item \\* ARABIC");
doc.updateDocumentFields();
```

### Multiple Sequence

```java
for (int i = 0; i < 3; i++)
{
    IWParagraph para = section.addParagraph();
    para.appendText("Item ");
    WField field = (WField) para.appendField("SEQ", FieldType.FieldSequence);
    field.setFieldCode("SEQ Item \\* ARABIC");
}
doc.updateDocumentFields();
```

### Sequence Options

```java
WSeqField field = (WSeqField) section.addParagraph()
        .appendField("SEQ", FieldType.FieldSequence);
		
field.setRepeatNearestNumber(true);
field.setResetNumber(7);
field.setNumberFormat(CaptionNumberingFormat.Number);
field.setBookmarkName("Bookmark1");
field.setHideResult(true);
field.setInsertNextNumber(true);

doc.updateDocumentFields();
```

---

## Document variables

### Minimal Code

```java
IWParagraph para = section.addParagraph();
para.appendField("FirstName", FieldType.FieldDocVariable);
para = section.addParagraph();
para.appendField("LastName", FieldType.FieldDocVariable);
//Adds the value for variable in WordDocument.Variable collection
doc.getVariables().add("FirstName", "Jeff");
doc.getVariables().add("LastName", "Smith");
//Updates the document fields
doc.updateDocumentFields();
```

---

## Cross Reference Field (Bookmark)

### Minimal Code

```java
IWSection section = doc.addSection();
//Adds a new paragraph into Word document
IWParagraph paragraph = section.addParagraph();
//Adds text, bookmark start and end in the paragraph
paragraph.appendBookmarkStart("Title");
paragraph.appendText("Adventure Works Cycles");
paragraph.appendBookmarkEnd("Title");
paragraph = section.addParagraph();
paragraph.appendText("Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company.");
section = doc.addSection();
section.addParagraph();
paragraph = section.addParagraph();
//Gets the collection of bookmark start in the word document
ListSupport<Entity> items = doc.getCrossReferenceItems(ReferenceType.Bookmark);
paragraph.appendText("Bookmark Cross Reference starts here ");
//Appends the cross reference for bookmark “Title” with ContentText as reference kind
paragraph.appendCrossReference(ReferenceType.Bookmark, ReferenceKind.ContentText, items.get(0), true, false, false, "");
//Updates the document Fields
doc.updateDocumentFields();
```

---

## Unlink fields

### Minimal Code

```java
WField field = (WField) section.addParagraph()
        .appendField("Date", FieldType.FieldDate);
field.update();
field.unlink();
```

---

## Formatting Fields

### Minimal Code

```java
IWField field = document.getLastParagraph().appendField("Page", FieldType.FieldPage);
IEntity entity = field;
//Iterates to sibling items until Field End.
while (entity.getNextSibling() != null) 
{
	if (entity instanceof WTextRange)
		//Sets character format for text ranges.
		((WTextRange) entity).getCharacterFormat().setFontSize((float) 6);
	else if ((entity instanceof WFieldMark) 
	        && ((WFieldMark) entity).getType().getEnumValue() == FieldMarkType.FieldEnd.getEnumValue())
		break;
	//Gets next sibling item.
	entity = entity.getNextSibling();
}
```

---

## Retrieve Fields

### Minimal Code

```java
for (Object secObj : doc.getSections()) {
    WSection sec = (WSection) secObj;
    for (Object paraObj : sec.getBody().getParagraphs()) {
        WParagraph para = (WParagraph) paraObj;
        for (Object item : para.getChildEntities()) {
            if (item instanceof WField) {
                WField field = (WField) item;
                String code = field.getFieldCode();
                String value = field.getFieldValue();
            }
        }
    }
}

//Retrieve by index
//WField field = (WField)((WParagraph) doc.getSections().get(0).getBody().getParagraphs().get(0)).getChildEntities().get(2);

```

---