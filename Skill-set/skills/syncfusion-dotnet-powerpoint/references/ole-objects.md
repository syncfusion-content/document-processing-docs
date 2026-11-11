# Working with OLE Objects

> Inserting, extracting, and managing OLE (Object Linking and Embedding) objects in PowerPoint presentations. Support for Excel, Word, and other embedded file formats with display options.

---

## Required Usings

```csharp
using Syncfusion.Presentation;
```
---

## Insert OLE Object to Slide

### Minimal Code
```csharp
FileStream excelStream = new FileStream("OleTemplate.xlsx", FileMode.Open);
FileStream imageStream = new FileStream("OlePicture.png", FileMode.Open);
IOleObject oleObject = slide.Shapes.AddOleObject(imageStream, "Excel.Sheet.12", excelStream);
oleObject.Left = 10;
oleObject.Top = 10;
oleObject.Width = 400;
oleObject.Height = 300;
```


### Placeholders
- `"OleTemplate.xlsx"` → Replace with actual Excel file path
- `"OlePicture.png"` → Replace with actual image file path
- `"Excel.Sheet.12"` → Replace with desired OLE programmatic identifier
- `10, 10` → Replace with desired left and top position
- `400, 300` → Replace with desired width and height
- `"OleObjectSample.pptx"` → Replace with desired output filename

---

## Insert OLE Object with Display As Icon

### Minimal Code
```csharp
FileStream wordStream = new FileStream("OleTemplate.docx", FileMode.Open);
FileStream imageStream = new FileStream("OlePicture.png", FileMode.Open);
IOleObject oleObject = slide.Shapes.AddOleObject(imageStream, "Word.Document.12", wordStream);
oleObject.DisplayAsIcon = true;
```

### DisplayAsIcon Property
```csharp
oleObject.DisplayAsIcon = true;   // Display as icon (opens in separate application)
oleObject.DisplayAsIcon = false;  // Display embedded preview
```

### Placeholders
- `"OleTemplate.docx"` → Replace with actual Word file path
- `"OlePicture.png"` → Replace with actual icon image file path
- `"Word.Document.12"` → Replace with desired OLE programmatic identifier
- `10, 10` → Replace with desired position
- `400, 300` → Replace with desired size
- `"OleObjectSample.pptx"` → Replace with desired output filename

---

## Extract Embedded OLE Object Data

### Minimal Code
```csharp
IOleObject oleObject = slide.Shapes[2] as IOleObject;
byte[] array = oleObject.ObjectData;
string fileName = oleObject.FileName;
```

### About ObjectData Property
The `ObjectData` property contains the complete binary data of the embedded OLE object file. This allows you to extract and save embedded files from the presentation.

### Placeholders
- `"EmbeddedOleObject.pptx"` → Replace with actual input file path
- `[2]` → Replace with desired OLE object index
- `outputFile` → Variable will contain the extracted file name

---

## Get Linked OLE Object File Path

### Minimal Code
```csharp
IOleObject oleObject = slide.Shapes[1] as IOleObject;
string linkPath = oleObject.LinkPath;
```


### Placeholders
- `"EmbeddedOleObject.pptx"` → Replace with actual input file path
- `[1]` → Replace with desired OLE object index
- `"OleObjectSample.pptx"` → Replace with desired output filename

---

## Get OLE Image Data

### Minimal Code
```csharp
IOleObject oleObject = slide.Shapes[1] as IOleObject;
byte[] imageData = oleObject.ImageData;
```

### About ImageData Property
The `ImageData` property contains the image data that is displayed for the OLE object in the presentation. This is the visual representation shown on the slide.

### Placeholders
- `"EmbeddedOleObject.pptx"` → Replace with actual input file path
- `[1]` → Replace with desired OLE object index
- `"OleImage.emf"` → Replace with desired output image filename

---

## Access OLE Object Properties

### Minimal Code
```csharp
IOleObject oleObject = slide.Shapes[0] as IOleObject;
string fileName = oleObject.FileName;
string progId = oleObject.ProgId;
bool displayAsIcon = oleObject.DisplayAsIcon;
```

### Placeholders
- `"EmbeddedOleObject.pptx"` → Replace with actual input file path
- `[0]` → Replace with desired shape index

---

## OLE Objects Properties Reference

### Object Data Properties
```csharp
byte[] objectData = oleObject.ObjectData;      // Get embedded object data
string fileName = oleObject.FileName;          // Get file name
string progId = oleObject.ProgId;              // Get programmatic identifier
string linkPath = oleObject.LinkPath;          // Get linked file path
byte[] imageData = oleObject.ImageData;        // Get display image data
```

### Display Properties
```csharp
oleObject.DisplayAsIcon = true;                // Display as icon or embedded preview
oleObject.Left = 10;                           // Set left position
oleObject.Top = 10;                            // Set top position
oleObject.Width = 400;                         // Set width
oleObject.Height = 300;                        // Set height
```

### Common OLE Identifiers
```csharp
"Excel.Sheet.12"            // Microsoft Excel Worksheet
"Excel.Sheet.8"             // Microsoft Excel 97-2003 Worksheet
"Word.Document.12"          // Microsoft Word Document
"Word.Document.8"           // Microsoft Word 97-2003 Document
"PowerPoint.Slide.12"       // PowerPoint Slide
"Visio.Drawing.11"          // Visio Drawing
"Acrobat.Document.DC"       // Adobe PDF
"Package"                   // Generic embedded file
```

### Placeholders
- Properties should be customized based on specific OLE object requirements
