# OLE Objects

> Object Linking and Embedding — add, extract, and remove OLE objects (Excel, Word, PDF, etc.) in Word documents.

---

## Required common usings

```csharp
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using System.Data.OleDb;
```

## Required usings for Windows-Specific

```csharp
using System;
using System.IO;
```

## Add OLE Object

### Embedded OLE Object

#### Common for Cross-Platform and Windows-Specific
```csharp
WordDocument document = new WordDocument();
IWSection section = document.AddSection();
IWParagraph paragraph = section.AddParagraph();
// Open file to be embedded
FileStream fileStream = new FileStream("Book1.xlsx", FileMode.Open);
// Load picture for display
WPicture picture = new WPicture(document);
```
#### Cross-Platform
```csharp
FileStream imageStream = new FileStream("Image.png", FileMode.Open, FileAccess.ReadWrite);
picture.LoadImage(imageStream);
imageStream.Close();
```
#### Windows-Specific
```csharp
picture.LoadImage(Image.FromFile("Image.png"));
```

#### Common for Cross-Platform and Windows-Specific
```csharp
// Append OLE object
WOleObject oleObject = paragraph.AppendOleObject(fileStream, picture, OleObjectType.ExcelWorksheet);

MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
document.Close();
```

### OLE Object Types

#### Common for Cross-Platform and Windows-Specific
```csharp
OleObjectType.ExcelWorksheet    // Excel 2007+
OleObjectType.ExcelChart        // Excel Chart
OleObjectType.PowerPointSlide   // PowerPoint
OleObjectType.WordDocument      // Word Document
```

### Placeholders
- `"Book1.xlsx"` → Replace with `"{file-to-embed}"`
- `"Image.png"` → Replace with `"{preview-image}"`
- `OleObjectType.ExcelWorksheet` → Use appropriate object type

---

## Extract OLE Objects

### Extract and Save to File

#### Cross-Platform
```csharp
FileStream inputStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read);
WordDocument document = new WordDocument(inputStream, FormatType.Docx);

ExtractOLEObjects(document);
document.Close();
```
#### Windows-Specific
```csharp
WordDocument document = new WordDocument("Template.docx");

ExtractOLEObjects(document);
document.Close();
```
#### Common for Cross-Platform and Windows-Specific
```csharp
private static void ExtractOLEObjects(WordDocument document)
{
    foreach (WSection section in document.Sections)
    {
        foreach (WParagraph paragraph in section.Paragraphs)
        {
            foreach (Entity entity in paragraph.ChildEntities)
            {
                if (entity.EntityType == EntityType.OleObject)
                {
                    WOleObject oleObject = entity as WOleObject;
                    string oleTypeStr = oleObject.ObjectType;
                    
                    // Extract Excel Worksheet
                    if (oleTypeStr.Contains("Excel Worksheet") || oleTypeStr.StartsWith("Excel.Sheet.12"))
                    {
                        FileStream fstream = new FileStream("Workbook_" + oleObject.OleStorageName + ".xlsx", FileMode.Create);
                        fstream.Write(oleObject.NativeData, 0, oleObject.NativeData.Length);
                        fstream.Flush();
                        fstream.Close();
                    }
                    // Extract Excel 2003 Worksheet
                    else if (oleTypeStr.Contains("Excel 2003 Worksheet") || oleTypeStr.StartsWith("Excel.Sheet.8"))
                    {
                        FileStream fstream = new FileStream("Workbook_" + oleObject.OleStorageName + ".xls", FileMode.Create);
                        fstream.Write(oleObject.NativeData, 0, oleObject.NativeData.Length);
                        fstream.Flush();
                        fstream.Close();
                    }
                    // Extract Word Document
                    else if (oleTypeStr.Contains("Word.Document.12"))
                    {
                        FileStream fstream = new FileStream("Document_" + oleObject.OleStorageName + ".docx", FileMode.Create);
                        fstream.Write(oleObject.NativeData, 0, oleObject.NativeData.Length);
                        fstream.Flush();
                        fstream.Close();
                    }
                    else if (oleTypeStr.Contains("Word.Document.8"))
                    {
                        FileStream fstream = new FileStream("Document_" + oleObject.OleStorageName + ".doc", FileMode.Create);
                        fstream.Write(oleObject.NativeData, 0, oleObject.NativeData.Length);
                        fstream.Flush();
                        fstream.Close();
                    }
                    // Extract PDF
                    else if (oleTypeStr.Contains("Acrobat Document") || oleTypeStr.StartsWith("AcroExch.Document"))
                    {
                        FileStream fstream = new FileStream("Document_" + oleObject.OleStorageName + ".pdf", FileMode.Create);
                        fstream.Write(oleObject.NativeData, 0, oleObject.NativeData.Length);
                        fstream.Flush();
                        fstream.Close();
                    }
                }
            }
        }
    }
}
```

### Access OLE Object Properties

#### Common for Cross-Platform and Windows-Specific
```csharp
string oleType = oleObject.ObjectType;              // Object type identifier
byte[] oleData = oleObject.NativeData;              // Embedded object data
string oleStorageName = oleObject.OleStorageName;   // OLE object name
```

### Placeholders
- `"Template.docx"` → Replace with `"{input-document}"`
- File format (.xlsx, .docx, .pdf) depends on `oleObject.ObjectType`

---

## Remove OLE Objects

### Remove All OLE Objects
#### Common for Cross-Platform and Windows-Specific
```csharp
FileStream inputStream = new FileStream("Input.docx", FileMode.Open, FileAccess.Read);
WordDocument document = new WordDocument(inputStream, FormatType.Automatic);
RemoveOLEObjects(document);
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
inputStream.Dispose();
document.Close();
```

```csharp
// Windows-Specific: Open and Save to File
WordDocument document = new WordDocument("Input.docx");

RemoveOLEObjects(document);

```

#### Common for Cross-Platform and Windows-Specific
```csharp
// Common for Cross-Platform and Windows-Specific
private static void RemoveOLEObjects(WordDocument document)
{
    bool isFieldStart = false;
    
    foreach (WSection section in document.Sections)
    {
        foreach (WParagraph paragraph in section.Paragraphs)
        {
            for (int i = 0; i < paragraph.ChildEntities.Count; i++)
            {
                Entity entity = paragraph.ChildEntities[i];
                
                // Remove OLE object
                if (entity.EntityType == EntityType.OleObject)
                {
                    paragraph.ChildEntities.Remove(entity);
                    isFieldStart = true;
                    i--;
                }
                // Remove field end marker
                else if (isFieldStart && entity.EntityType == EntityType.FieldMark 
                    && (entity as WFieldMark).Type == FieldMarkType.FieldEnd)
                {
                    paragraph.ChildEntities.Remove(entity);
                    isFieldStart = false;
                    i--;
                }
                // Remove field content
                else if (isFieldStart)
                {
                    paragraph.ChildEntities.Remove(entity);
                    i--;
                }
            }
        }
    }
}
```

### Remove Specific OLE Object

#### Common for Cross-Platform and Windows-Specific
```csharp
foreach (WSection section in document.Sections)
{
    foreach (WParagraph paragraph in section.Paragraphs)
    {
        for (int i = paragraph.ChildEntities.Count - 1; i >= 0; i--)
        {
            Entity entity = paragraph.ChildEntities[i];
            if (entity.EntityType == EntityType.OleObject)
            {
                WOleObject oleObject = entity as WOleObject;
                if (oleObject.ObjectType.Contains("Excel"))
                {
                    paragraph.ChildEntities.RemoveAt(i);
                }
            }
        }
    }
}
```

### Placeholders
- `"Input.docx"` → Replace with `"{input-document}"`
- Filter condition can be customized based on `ObjectType`

