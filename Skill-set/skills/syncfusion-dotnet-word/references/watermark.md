# Watermarks

> Apply text and picture watermarks to Word documents — background watermarks for document identification and security.

---

## Required common usings

```csharp
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
```

## Text Watermark

### Add Text Watermark

#### Common Setup
```csharp
WordDocument document = new WordDocument();
document.EnsureMinimal();
IWParagraph paragraph = document.LastParagraph;
paragraph.AppendText("Document content goes here");
```

#### Cross-Platform
```csharp
TextWatermark textWatermark = new TextWatermark("CONFIDENTIAL", "", 250, 100);
```

#### Windows-Specific
```csharp
TextWatermark textWatermark = new TextWatermark();
textWatermark.Text = "CONFIDENTIAL";
```

#### Common code for Cross-Platform and Windows-Specific
```csharp
document.Watermark = textWatermark;
textWatermark.Size = 72;
textWatermark.Layout = WatermarkLayout.Horizontal;
textWatermark.Semitransparent = false;
textWatermark.Color = Color.Black;
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
document.Close();
```

### Text Watermark Properties
```csharp
textWatermark.Size = 72;                        // Font size in points
textWatermark.Layout = WatermarkLayout.Horizontal;  // or Diagonal
textWatermark.Semitransparent = true;           // Semi-transparent effect
textWatermark.Color = Color.Black;              // Watermark color
textWatermark.FontName = "Calibri";             // Font name
```

### Placeholders
- `"CONFIDENTIAL"` → Replace with `"{watermark-text}"`
- `250, 100` → Replace with `{rotation-angle}, {opacity}` values
- `72` → Replace with desired font size
- `WatermarkLayout.Horizontal` → Use `Diagonal` for diagonal layout

---

## Picture Watermark

### Add Picture Watermark

#### Common Setup
```csharp
WordDocument document = new WordDocument();
document.EnsureMinimal();
IWParagraph paragraph = document.LastParagraph;
paragraph.AppendText("Document content goes here");

PictureWatermark picWatermark = new PictureWatermark();
picWatermark.Scaling = 120f;
picWatermark.Washout = true;
document.Watermark = picWatermark;
```

#### Cross-Platform
```csharp
FileStream imageStream = new FileStream("watermark.jpg", FileMode.Open, FileAccess.Read);
BinaryReader br = new BinaryReader(imageStream);
byte[] imageBytes = br.ReadBytes((int)imageStream.Length);
picWatermark.LoadPicture(imageBytes);
imageStream.Close();
br.Close();
```

#### Windows-Specific
```csharp
picWatermark.Picture = Image.FromFile("Watermark.jpg");
```

#### Common code for Cross-Platform and Windows-Specific
```csharp
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
document.Close();
```
### Picture Watermark Properties
```csharp
picWatermark.Scaling = 120f;
picWatermark.Washout = true;
```

### Placeholders
- `"watermark.jpg"` → Replace with `"{image-file-path}"`
- `120f` → Replace with desired scaling percentage
- `true` → Set `false` to disable washout effect

---

## Identify Watermark Type

### Common code for Cross-Platform and Windows-Specific
```csharp
WatermarkType watermarkType = document.Watermark.Type;
```

### WatermarkType Options
- **Text** — Text watermark
- **Picture** — Picture watermark
- **NoWatermark** — No watermark applied

---

## Remove Watermark

### Clear Watermark
```csharp
document.Watermark = null;  // Removes existing watermark
```
