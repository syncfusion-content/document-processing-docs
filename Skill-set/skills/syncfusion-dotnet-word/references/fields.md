# Fields

> DocIO snippets for working with Word fields — inserting, formatting, updating, and retrieving dynamic content.

---

## Required common usings
```csharp
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
```

# Required usings for Cross-Platform
```csharp
using Syncfusion.DocIORenderer;
```
---

## Add Merge Field

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var para = section.AddParagraph();
para.AppendText("Name: ");
para.AppendField("Name", FieldType.FieldMergeField);
```

---

## Add Date Field

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var para = section.AddParagraph();

var field = para.AppendField("Date", FieldType.FieldDate);
field.FieldCode = @"DATE  \@" + "\"MMMM d, yyyy\""; 
```

---

## Add Page Number Field

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var footer = section.HeadersFooters.Footer.AddParagraph();

footer.AppendText("Page ");
footer.AppendField("Page", FieldType.FieldPage);

footer.AppendText(" of ");
footer.AppendField("NumPages", FieldType.FieldNumPages);
```

---

## Updating Fields

### Minimal Code

#### Cross-Platform
```csharp
using Syncfusion.DocIORenderer;

doc.UpdateDocumentFields(true);
```

#### Windows-Specific
```csharp
doc.UpdateDocumentFields();
```

---

## IF Field (Conditional Field)

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var field = section.AddParagraph()
                   .AppendField("If", FieldType.FieldIf) as WIfField;

field.FieldCode = "IF 100 >= 1000 \"The given statement is Correct\" \"The given statement is Wrong\"";
doc.UpdateDocumentFields();
```

---

## SEQ Field (Sequence Field)

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var field = section.AddParagraph()
                   .AppendField("SEQ", FieldType.FieldSequence);

field.FieldCode = "SEQ Item \\* ARABIC";
doc.UpdateDocumentFields();
```

### Multiple Sequence

#### Common for Cross-Platform and Windows-Specific
```csharp
for (int i = 0; i < 3; i++)
{
    var para = section.AddParagraph();
    para.AppendText("Item ");

    var field = para.AppendField("SEQ", FieldType.FieldSequence);
    field.FieldCode = "SEQ Item \\* ARABIC";
}
doc.UpdateDocumentFields();
```

### Sequence Options

#### Common for Cross-Platform and Windows-Specific
```csharp
WSeqField field = (WSeqField)section.AddParagraph().AppendField("SEQ", FieldType.FieldSequence);
//Set the RepeatNearestNumber of the SeqField.
field.RepeatNearestNumber = true;
//Set the ResetNumber of the SeqField.
field.ResetNumber = 7;
//Set the NumberFormat of the SeqField.
field.NumberFormat = CaptionNumberingFormat.Number; 
//Set the BookmarkName of the SeqField.
field.BookmarkName = "Bookmark1";
//Set the HideResult of the SeqField.
field.HideResult = true;
//Set the InsertNextNumber of the SeqField.
field.InsertNextNumber = true;
doc.UpdateDocumentFields();
```

---

## Document variables

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var para = section.AddParagraph();
//Adds the DocVariable field with Variable name and its type
para.AppendField("FirstName", FieldType.FieldDocVariable);
para = section.AddParagraph();
//Adds the DocVariable field with Variable name and its type
para.AppendField("LastName", FieldType.FieldDocVariable);
//Adds the value for variable in WordDocument.Variable collection
doc.Variables.Add("FirstName", "Jeff");
doc.Variables.Add("LastName", "Smith");
//Updates the document fields
doc.UpdateDocumentFields();
```

---

## Cross Reference Field (Bookmark)

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
IWSection section = doc.AddSection();
//Adds a new paragraph into Word document
IWParagraph paragraph = section.AddParagraph();
//Adds text, bookmark start and end in the paragraph
paragraph.AppendBookmarkStart("Title");
paragraph.AppendText("Adventure Works Cycles");
paragraph.AppendBookmarkEnd("Title");
paragraph = section.AddParagraph();
paragraph.AppendText("Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company.");
section = doc.AddSection();
section.AddParagraph();
paragraph = section.AddParagraph() as WParagraph;
//Gets the collection of bookmark start in the word document
List<Entity> items = doc.GetCrossReferenceItems(ReferenceType.Bookmark);
paragraph.AppendText("Bookmark Cross Reference starts here ");
//Appends the cross reference for bookmark “Title” with ContentText as reference kind
paragraph.AppendCrossReference(ReferenceType.Bookmark, ReferenceKind.ContentText, items[0], true, false, false, string.Empty);
//Updates the document Fields
doc.UpdateDocumentFields();
```

---

## Unlink fields

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
WField field = section.AddParagraph().AppendField("Date", FieldType.FieldDate) as WField;
//Updates the field
field.Update();
//Unlink the field
field.Unlink();
```

---

## Formatting Fields

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
IWField field = section.AddParagraph().AppendField("Page", FieldType.FieldPage);
IEntity entity = field;
//Iterates to sibling items until Field End 
while (entity.NextSibling != null)
{
    if (entity is WTextRange)
        //Sets character format for text ranges 
        (entity as WTextRange).CharacterFormat.FontSize = 6;
    else if ((entity is WFieldMark) && (entity as WFieldMark).Type == FieldMarkType.FieldEnd)
        break;
    //Gets next sibling item.
    entity = entity.NextSibling;
}
```

---

## Retrieve Fields

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
foreach (WSection sec in doc.Sections)
{
    foreach (WParagraph para in sec.Body.Paragraphs)
    {
        foreach (var item in para.ChildEntities)
        {
            if (item is WField field)
            {
                string code = field.FieldCode;
                string value = field.FieldValue;
            }
        }
    }
}

//Retrieve by index
//WField field = doc.Sections[0].Paragraphs[0].ChildEntities[2] as WField;
```

---