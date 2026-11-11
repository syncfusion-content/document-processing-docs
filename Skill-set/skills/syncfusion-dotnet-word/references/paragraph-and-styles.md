# Paragraphs & Styles

> Paragraph elements and formatting — adding paragraphs, applying styles, text formatting, images, breaks, and text boxes.

---

## Required common usings

```csharp
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
```
## Required using for Cross-Platform
```csharp
using Syncfusion.Drawing;
```

## Add Paragraph

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var section = doc.AddSection();
var para = section.AddParagraph();
para.AppendText("Adding a new paragraph to the document");
```

### Modify Existing Paragraph

#### Common for Cross-Platform and Windows-Specific
```csharp
var para = doc.Sections[0].Body.Paragraphs[0];
foreach (var item in para.ChildEntities)
{
    if (item is WTextRange textRange)
    {
        textRange.CharacterFormat.Bold = true;
        textRange.CharacterFormat.FontSize = 14;
        break;
    }
}
```

---

## Applying Paragraph Formatting

### Common Formatting Options
```csharp
var para = section.AddParagraph();
para.AppendText("Formatted paragraph");

// Spacing and indentation
para.ParagraphFormat.BeforeSpacing = 18f;
para.ParagraphFormat.AfterSpacing = 18f;
para.ParagraphFormat.LeftIndent = 36f;
para.ParagraphFormat.RightIndent = 18f;
para.ParagraphFormat.FirstLineIndent = 10f;  // Positive = first line, Negative = hanging
para.ParagraphFormat.LineSpacing = 10f;

// Alignment and background
para.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
// Cross-Platform
para.ParagraphFormat.BackColor = Syncfusion.Drawing.Color.LightGray;
//Windows-Specific
para.ParagraphFormat.BackColor = System.Drawing.Color.LightGray;
// Keep options
para.ParagraphFormat.Keep = true;           // Keep lines together
para.ParagraphFormat.KeepFollow = true;     // Keep with next paragraph
```

### RTL Paragraph
```csharp
para.ParagraphFormat.Bidi = true;  // Right-to-left direction
```

### Borders
```csharp
para.ParagraphFormat.Borders.BorderType = BorderStyle.Single;
para.ParagraphFormat.Borders.LineWidth = 0.5f;
// Cross-Platform
para.ParagraphFormat.Borders.Color = Syncfusion.Drawing.Color.Black;
// Windows-Specific
para.ParagraphFormat.Borders.Color = System.Drawing.Color.Black;
```

### Placeholders
- `18f`, `10f` → Replace with desired spacing/indent values in points
- `HorizontalAlignment.Center` → Use `Left`, `Right`, `Justify`, `Distributed`
- `BorderStyle.Single` → Use `Double`, `Dotted`, `Dashed`, etc.

---

## Paragraph Styles

### Apply Built-in Style

#### Common for Cross-Platform and Windows-Specific
```csharp
var para = section.AddParagraph();
para.AppendText("This is a heading");
para.ApplyStyle(BuiltinStyle.Heading1);
```

### Create Custom Style

#### Common for Cross-Platform and Windows-Specific
```csharp
var customStyle = doc.AddParagraphStyle("CustomStyle") as WParagraphStyle;
customStyle.CharacterFormat.FontName = "Calibri";
customStyle.CharacterFormat.FontSize = 14;
customStyle.CharacterFormat.Italic = true;
customStyle.CharacterFormat.TextColor = Syncfusion.Drawing.Color.DarkBlue;
customStyle.ParagraphFormat.BackColor = Syncfusion.Drawing.Color.LightGray;
customStyle.ParagraphFormat.BeforeSpacing = 18f;
customStyle.ParagraphFormat.AfterSpacing = 18f;
customStyle.ParagraphFormat.Borders.BorderType = BorderStyle.DotDash;
//Optional: Add ListFormat to style
customStyle.ListFormat.ApplyDefBulletStyle();
var para = section.AddParagraph();
para.AppendText("Styled paragraph");
para.ApplyStyle("CustomStyle");
```

### Access & Modify Styles

#### Common for Cross-Platform and Windows-Specific
```csharp
var styles = doc.Styles;
var heading1Style = styles.FindByName("Heading 1") as WParagraphStyle;
if (heading1Style != null)
{
```
#### Cross-Platform
```csharp
    heading1Style.CharacterFormat.TextColor = Syncfusion.Drawing.Color.DarkBlue;
```
#### Windows-Specific
```csharp
    heading1Style.CharacterFormat.TextColor = System.Drawing.Color.DarkBlue;
```
#### Common for Cross-Platform and Windows-Specific
```csharp
    heading1Style.ParagraphFormat.FirstLineIndent = 36;
}
```

### Remove Style
```csharp
var style = doc.Styles.FindByName("CustomStyle") as WParagraphStyle;
style.Remove();
```

### Placeholders
- `"CustomStyle"` → Replace with `"{style-name}"`
- `BuiltinStyle.Heading1` → Use `Heading2`, `Emphasis`, `Normal`, etc.

---

## Working with Text

### Append Text

#### Common for Cross-Platform and Windows-Specific
```csharp
var para = section.AddParagraph();
var textRange = para.AppendText("Formatted text");
textRange.CharacterFormat.Bold = true;
textRange.CharacterFormat.FontSize = 14;
```
#### Cross-Platform
```csharp
    textRange.CharacterFormat.TextColor = Syncfusion.Drawing.Color.Green;
```
#### Windows-Specific
```csharp
   textRange.CharacterFormat.TextColor = System.Drawing.Color.Green;
```
#### Common for Cross-Platform and Windows-Specific
```csharp
textRange.CharacterFormat.FontName = "Times New Roman";
```

### Replace Text

#### Common for Cross-Platform and Windows-Specific
```csharp
var para = doc.Sections[0].Body.Paragraphs[0];
foreach (var item in para.ChildEntities)
{
    if (item is WTextRange textRange)
    {
        textRange.Text = "Replaced text";
        textRange.CharacterFormat.FontSize = 14;
        break;
    }
}
```

### Text Formatting Options

#### Common for Cross-Platform and Windows-Specific
```csharp
textRange.CharacterFormat.Bold = true;
textRange.CharacterFormat.Italic = true;
textRange.CharacterFormat.UnderlineStyle = UnderlineStyle.Single;
textRange.CharacterFormat.Shadow = true;
textRange.CharacterFormat.SmallCaps = true;
textRange.CharacterFormat.Bidi = true; // RTL character formatting
```
#### Cross-Platform
```csharp
textRange.CharacterFormat.HighlightColor = Syncfusion.Drawing.Color.Yellow;
```
#### Windows-Specific
```csharp
textRange.CharacterFormat.HighlightColor = System.Drawing.Color.Yellow;
```
#### Common for Cross-Platform and Windows-Specific
```csharp
// Superscript and subscript
textRange.CharacterFormat.SubSuperScript = SubSuperScript.SuperScript;  // or SubScript
```

### Placeholders
- `"Formatted text"` → Replace with desired text
- `UnderlineStyle.Single` → Use `Double`, `Dotted`, `DotDash`, `Wavy`, etc.

---

## Tab Stops

### Add Tab Stops

#### Common for Cross-Platform and Windows-Specific
```csharp
var para = section.AddParagraph();
para.ParagraphFormat.Tabs.AddTab(11, TabJustification.Left, TabLeader.Dotted);
para.ParagraphFormat.Tabs.AddTab(62, TabJustification.Right, TabLeader.Single);
para.AppendText("First\tSecond\tThird");
```

### Remove Tab Stop

#### Common for Cross-Platform and Windows-Specific
```csharp
para.ParagraphFormat.Tabs.RemoveByTabPosition(11);
```

### Remove all Tabs

#### Common for Cross-Platform and Windows-Specific
```csharp
para.ParagraphFormat.Tabs.Clear();
```

### Placeholders
- `11, 62` → Replace with desired tab position values
- `TabJustification.Left` → Use `Center`, `Right`, `Decimal`
- `TabLeader.Dotted` → Use `Single`, `Heavy`, `None`

---

## Breaks

### Types of Breaks

#### Common for Cross-Platform and Windows-Specific
```csharp
var para = section.AddParagraph();
para.AppendText("Before break");
para.AppendBreak(BreakType.LineBreak);           // Line break
para.AppendText("After line break");

var para2 = section.AddParagraph();
para2.AppendText("Before page break");
para2.AppendBreak(BreakType.PageBreak);          // Page break
para2.AppendText("After page break");

var para3 = section.AddParagraph();
para3.AppendText("Before column break");
para3.AppendBreak(BreakType.ColumnBreak);        // Column break
para3.AppendText("After column break");
```

### Text Wrapping Break

#### Common for Cross-Platform and Windows-Specific
```csharp
var para = section.Paragraphs[0];
var textWrapBreak = new Break(doc, BreakType.TextWrappingBreak);
para.ChildEntities.Insert(1, textWrapBreak);  // Insert after image/object
```

### Placeholders
- `BreakType.PageBreak` → Use `LineBreak`, `ColumnBreak`, `TextWrappingBreak`

---

## Working with Symbols

### Add Symbol

#### Common for Cross-Platform and Windows-Specific
```csharp
var para = section.AddParagraph();
para.AppendText("Currency symbol: ");
para.AppendSymbol(100);  // Character code
```

### Modify Symbol

#### Common for Cross-Platform and Windows-Specific
```csharp
foreach (var para in doc.Sections[0].Body.Paragraphs)
{
    foreach (var item in para.ChildEntities)
    {
        if (item is WSymbol symbol && symbol.CharacterCode == 100)
        {
            symbol.CharacterCode = 40;
            symbol.FontName = "Wingdings";
            break;
        }
    }
}
```

### Placeholders
- `100` → Replace with desired character code

---

## Text Box

### Add Text Box
```csharp
var para = section.AddParagraph();
var textBox = para.AppendTextBox(150, 75);  // Width, Height
var boxPara = textBox.TextBoxBody.AddParagraph();
boxPara.AppendText("Text inside text box");
```

### Format & Rotate Text Box

#### Common for Cross-Platform and Windows-Specific
```csharp
// Cross-Platform
textBox.TextBoxFormat.FillColor = Syncfusion.Drawing.Color.LightGreen;
// Windows-Specific
textBox.TextBoxFormat.FillColor = System.Drawing.Color.LightGreen;
textBox.TextBoxFormat.LineWidth = 2;
textBox.TextBoxFormat.TextDirection = Syncfusion.DocIO.DLS.TextDirection.VerticalTopToBottom;
textBox.TextBoxFormat.TextWrappingStyle = TextWrappingStyle.InFrontOfText;
textBox.TextBoxFormat.HorizontalPosition = 200;
textBox.TextBoxFormat.VerticalPosition = 200;
textBox.TextBoxFormat.Rotation = 90;
textBox.TextBoxFormat.FlipHorizontal = true;
textBox.TextBoxFormat.InternalMargin.Top = 5f;
textBox.TextBoxFormat.InternalMargin.Bottom = 5f;
```

### Add Image to Text Box

#### Common for Cross-Platform and Windows-Specific
```csharp
var imageStream = new FileStream("image.jpg", FileMode.Open, FileAccess.Read);
var boxPara = textBox.TextBoxBody.AddParagraph();
var picture = boxPara.AppendPicture(imageStream);
picture.Height = 50;
picture.Width = 75;
imageStream.Close();
```

### Placeholders
- `150, 75` → Replace with desired width and height
- `200` → Replace with desired position value
- `"image.jpg"` → Replace with actual image file path

