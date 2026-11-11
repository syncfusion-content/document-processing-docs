# Watermarks

> Apply text and picture watermarks to Word documents — background watermarks for document identification and security.

---

## Required common usings

```java
import com.syncfusion.docio.*;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ByteArrayOutputStream;
```

## Text Watermark

### Add Text Watermark

```java
WordDocument document = new WordDocument();
document.ensureMinimal();
IWParagraph paragraph = document.getLastParagraph();
paragraph.appendText("Document content goes here");

TextWatermark textWatermark = new TextWatermark("CONFIDENTIAL", "", 250, 100);
document.setWatermark(textWatermark);
textWatermark.setSize(72);
textWatermark.setLayout(WatermarkLayout.Horizontal);
textWatermark.setSemitransparent(false);
textWatermark.setColor(ColorSupport.fromName("Blue"));

ByteArrayOutputStream stream = new ByteArrayOutputStream();
document.save(stream, FormatType.Docx);
document.close();
```

### Text Watermark Properties
```java
textWatermark.setSize(72);                              // Font size in points
textWatermark.setLayout(WatermarkLayout.Horizontal);    // or Diagonal
textWatermark.setSemitransparent(true);                 // Semi-transparent effect
textWatermark.setColor(Syncfusion.Drawing.Color.BLACK); // Watermark color
textWatermark.setFontName("Calibri");                   // Font name
```

### Placeholders
- `"CONFIDENTIAL"` → Replace with `"{watermark-text}"`
- `250, 100` → Replace with `{rotation-angle}, {opacity}` values
- `72` → Replace with desired font size
- `WatermarkLayout.Horizontal` → Use `Diagonal` for diagonal layout

---

## Picture Watermark

### Add Picture Watermark

```java
WordDocument document = new WordDocument();
document.ensureMinimal();
IWParagraph paragraph = document.getLastParagraph();
paragraph.appendText("Document content goes here");

PictureWatermark picWatermark = new PictureWatermark();
picWatermark.setScaling(120f);
picWatermark.setWashout(true);
document.setWatermark(picWatermark);

FileInputStream imageStream = new FileInputStream("watermark.jpg");
byte[] imageBytes = imageStream.readAllBytes();
picWatermark.loadPicture(imageBytes);
imageStream.close();

ByteArrayOutputStream stream = new ByteArrayOutputStream();
document.save(stream, FormatType.Docx);
document.close();
```
### Picture Watermark Properties
```java
picWatermark.setScaling(120f);
picWatermark.setWashout(true);
```

### Placeholders
- `"watermark.jpg"` → Replace with `"{image-file-path}"`
- `120f` → Replace with desired scaling percentage
- `true` → Set `false` to disable washout effect

---

## Identify Watermark Type

### Common code for Cross-Platform and Windows-Specific
```java
WatermarkType watermarkType = document.getWatermark().getType();
```

### WatermarkType Options
- **Text** — Text watermark
- **Picture** — Picture watermark
- **NoWatermark** — No watermark applied

---

## Remove Watermark

### Clear Watermark
```java
document.setWatermark(null);  // Removes existing watermark
```
