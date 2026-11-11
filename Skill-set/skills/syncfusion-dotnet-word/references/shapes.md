# Shapes

> All shape operations — adding shapes, formatting, rotating, grouping, ungrouping, and managing shape properties.

---

## Required common usings

```csharp
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.OfficeChart;
```

## Required usings for Windows-Specific

```csharp
using System;
using System.IO;
```

## Add Shape

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
WParagraph paragraph = section.AddParagraph() as WParagraph;
Shape rectangle = paragraph.AppendShape(AutoShapeType.RoundedRectangle, 150, 100);
rectangle.VerticalPosition = 72;
rectangle.HorizontalPosition = 72;
```

### Add Shape with Text Content

#### Common for Cross-Platform and Windows-Specific
```csharp
WParagraph paragraph = section.AddParagraph() as WParagraph;
Shape rectangle = paragraph.AppendShape(AutoShapeType.RoundedRectangle, 150, 100);
rectangle.VerticalPosition = 72;
rectangle.HorizontalPosition = 72;
IWParagraph shapePara = rectangle.TextBody.AddParagraph() as WParagraph;
IWTextRange text = shapePara.AppendText("This text is in rounded rectangle shape");
text.CharacterFormat.TextColor = Color.Green;
text.CharacterFormat.Bold = true;
```

### Multiple Shapes

#### Common for Cross-Platform and Windows-Specific
```csharp
WParagraph paragraph = section.AddParagraph() as WParagraph;
Shape rectangle = paragraph.AppendShape(AutoShapeType.RoundedRectangle, 150, 100);
rectangle.VerticalPosition = 72;
rectangle.HorizontalPosition = 72;

paragraph = section.AddParagraph() as WParagraph;
paragraph.AppendBreak(BreakType.LineBreak);
Shape pentagon = paragraph.AppendShape(AutoShapeType.Pentagon, 100, 100);
pentagon.HorizontalPosition = 72;
pentagon.VerticalPosition = 200;
IWParagraph pentaPara = pentagon.TextBody.AddParagraph() as WParagraph;
pentaPara.AppendText("This text is in pentagon shape");
```

### Placeholders
- `AutoShapeType.RoundedRectangle` → Replace with `{shape-type}`
- `150, 100` → Replace with `{width}, {height}`

---

## Format Shape

#### Common for Cross-Platform and Windows-Specific
```csharp
IWParagraph paragraph = section.AddParagraph() as WParagraph;
Shape rectangle = paragraph.AppendShape(AutoShapeType.RoundedRectangle, 150, 100);
rectangle.VerticalPosition = 72;
rectangle.HorizontalPosition = 72;

rectangle.FillFormat.Fill = true;
rectangle.FillFormat.Color = Color.LightGray;
rectangle.FillFormat.Transparency = 75;

rectangle.WrapFormat.TextWrappingStyle = TextWrappingStyle.Square;
rectangle.WrapFormat.TextWrappingType = TextWrappingType.Right;

rectangle.HorizontalOrigin = HorizontalOrigin.Margin;
rectangle.VerticalOrigin = VerticalOrigin.Page;

rectangle.LineFormat.DashStyle = LineDashing.Dot;
rectangle.LineFormat.Color = Color.DarkGray;

rectangle.TextFrame.InternalMargin.Left = 30;
rectangle.TextFrame.InternalMargin.Right = 24;
rectangle.TextFrame.InternalMargin.Bottom = 18;
rectangle.TextFrame.InternalMargin.Top = 6;
```

---

## Rotate Shape

#### Common for Cross-Platform and Windows-Specific
```csharp
WParagraph paragraph = section.AddParagraph() as WParagraph;
Shape rectangle = paragraph.AppendShape(AutoShapeType.RoundedRectangle, 150, 100);
rectangle.VerticalPosition = 72;
rectangle.HorizontalPosition = 72;

rectangle.Rotation = 90;

rectangle.FlipHorizontal = true;

rectangle.FlipVertical = false;
```

---

## Group Shapes

> **Important Requirements:**
> 1. Shapes must be positioned relative to the "Page"
> 2. Wrapping style should NOT be "In Line with Text" (use InFrontOfText or Behind)

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
WParagraph paragraph = section.AddParagraph() as WParagraph;
GroupShape groupShape = new GroupShape(document);
paragraph.ChildEntities.Add(groupShape);

Shape shape = new Shape(document, AutoShapeType.RoundedRectangle);
shape.Height = 100;
shape.Width = 150;
shape.HorizontalPosition = 72;
shape.VerticalPosition = 72;
shape.HorizontalOrigin = HorizontalOrigin.Page;
shape.VerticalOrigin = VerticalOrigin.Page;
shape.WrapFormat.TextWrappingStyle = TextWrappingStyle.InFrontOfText;
groupShape.Add(shape);
```

### Group Shape with Multiple Items (Shape, Textbox, Picture)

#### Common Setup
```csharp
WParagraph paragraph = section.AddParagraph() as WParagraph;
GroupShape groupShape = new GroupShape(document);
paragraph.ChildEntities.Add(groupShape);

Shape shape = new Shape(document, AutoShapeType.RoundedRectangle);
shape.Height = 100;
shape.Width = 150;
shape.HorizontalPosition = 72;
shape.VerticalPosition = 72;
shape.HorizontalOrigin = HorizontalOrigin.Page;
shape.VerticalOrigin = VerticalOrigin.Page;
shape.WrapFormat.TextWrappingStyle = TextWrappingStyle.InFrontOfText;
groupShape.Add(shape);

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

#### Common Setup
```csharp
picture.TextWrappingStyle = TextWrappingStyle.InFrontOfText;
picture.Height = 100;
picture.Width = 100;
picture.HorizontalPosition = 400;
picture.VerticalPosition = 150;
picture.HorizontalOrigin = HorizontalOrigin.Page;
picture.VerticalOrigin = VerticalOrigin.Page;
groupShape.Add(picture);

WTextBox textbox = new WTextBox(document);
textbox.TextBoxFormat.Width = 150;
textbox.TextBoxFormat.Height = 75;
IWParagraph textboxPara = textbox.TextBoxBody.AddParagraph();
textboxPara.AppendText("Text inside text box");
textbox.TextBoxFormat.TextWrappingStyle = TextWrappingStyle.Behind;
textbox.TextBoxFormat.HorizontalPosition = 200;
textbox.TextBoxFormat.VerticalPosition = 200;
textbox.TextBoxFormat.HorizontalOrigin = HorizontalOrigin.Page;
textbox.TextBoxFormat.VerticalOrigin = VerticalOrigin.Page;
groupShape.Add(textbox);
```

### Group Shapes from Array

#### Common for Cross-Platform and Windows-Specific
```csharp
ParagraphItem[] paragraphItems = new ParagraphItem[3];

Shape shape = new Shape(document, AutoShapeType.RoundedRectangle);
shape.Height = 100;
shape.Width = 150;
shape.HorizontalPosition = 72;
shape.VerticalPosition = 72;
shape.HorizontalOrigin = HorizontalOrigin.Page;
shape.VerticalOrigin = VerticalOrigin.Page;
shape.WrapFormat.TextWrappingStyle = TextWrappingStyle.InFrontOfText;
paragraphItems[0] = shape;

WTextBox textbox = new WTextBox(document);
textbox.TextBoxFormat.Width = 150;
textbox.TextBoxFormat.Height = 75;
IWParagraph textboxParagraph = textbox.TextBoxBody.AddParagraph();
textboxParagraph.AppendText("Text inside text box");
textbox.TextBoxFormat.TextWrappingStyle = TextWrappingStyle.Behind;
textbox.TextBoxFormat.HorizontalPosition = 200;
textbox.TextBoxFormat.VerticalPosition = 200;
textbox.TextBoxFormat.HorizontalOrigin = HorizontalOrigin.Page;
textbox.TextBoxFormat.VerticalOrigin = VerticalOrigin.Page;
paragraphItems[1] = textbox;

WChart chart = new WChart(document);
chart.Height = 270;
chart.Width = 446;
chart.ChartType = OfficeChartType.Pie;
chart.WrapFormat.TextWrappingStyle = TextWrappingStyle.InFrontOfText;
chart.VerticalPosition = 350;

// Set chart title
chart.ChartTitle = "Best Selling Products";
chart.ChartTitleArea.FontName = "Calibri";
chart.ChartTitleArea.Size = 14;

// Set chart data
chart.ChartData.SetValue(1, 1, "");
chart.ChartData.SetValue(1, 2, "Sales");
chart.ChartData.SetValue(2, 1, "Product A");
chart.ChartData.SetValue(2, 2, 141.396);
chart.ChartData.SetValue(3, 1, "Product B");
chart.ChartData.SetValue(3, 2, 80.368);
chart.ChartData.SetValue(4, 1, "Product C");
chart.ChartData.SetValue(4, 2, 71.155);

// Create series
IOfficeChartSerie pieSeries = chart.Series.Add("Sales");
pieSeries.Values = chart.ChartData[2, 2, 4, 2];
pieSeries.DataPoints.DefaultDataPoint.DataLabels.IsValue = true;
pieSeries.DataPoints.DefaultDataPoint.DataLabels.Position = OfficeDataLabelPosition.Outside;

// Set category labels
chart.PrimaryCategoryAxis.CategoryLabels = chart.ChartData[2, 1, 4, 1];

// Format chart area
chart.ChartArea.Fill.ForeColor = Color.FromArgb(242, 242, 242);
chart.PlotArea.Fill.ForeColor = Color.FromArgb(242, 242, 242);
chart.ChartArea.Border.LinePattern = OfficeChartLinePattern.None;

paragraphItems[2] = chart;

GroupShape groupShape = new GroupShape(document, paragraphItems);
groupShape.HorizontalPosition = 72;
paragraph.ChildEntities.Add(groupShape);
```

---

## Nested Group Shapes

#### Common Setup
```csharp
WParagraph paragraph = section.AddParagraph() as WParagraph;
GroupShape groupShape = new GroupShape(document);
paragraph.ChildEntities.Add(groupShape);

// Add shape to outer group
Shape shape = new Shape(document, AutoShapeType.RoundedRectangle);
shape.Height = 100;
shape.Width = 150;
shape.HorizontalPosition = 72;
shape.VerticalPosition = 72;
shape.HorizontalOrigin = HorizontalOrigin.Page;
shape.VerticalOrigin = VerticalOrigin.Page;
shape.WrapFormat.TextWrappingStyle = TextWrappingStyle.InFrontOfText;
groupShape.Add(shape);

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

#### Common Setup
```csharp
picture.TextWrappingStyle = TextWrappingStyle.InFrontOfText;
picture.Height = 100;
picture.Width = 100;
picture.HorizontalPosition = 400;
picture.VerticalPosition = 150;
picture.HorizontalOrigin = HorizontalOrigin.Page;
picture.VerticalOrigin = VerticalOrigin.Page;
groupShape.Add(picture);

GroupShape nestedGroupShape = new GroupShape(document);

WTextBox textbox = new WTextBox(document);
textbox.TextBoxFormat.Width = 150;
textbox.TextBoxFormat.Height = 75;
IWParagraph textboxParagraph = textbox.TextBoxBody.AddParagraph();
textboxParagraph.AppendText("Text inside text box");
textbox.TextBoxFormat.TextWrappingStyle = TextWrappingStyle.Behind;
textbox.TextBoxFormat.HorizontalPosition = 200;
textbox.TextBoxFormat.VerticalPosition = 200;
textbox.TextBoxFormat.HorizontalOrigin = HorizontalOrigin.Page;
textbox.TextBoxFormat.VerticalOrigin = VerticalOrigin.Page;
nestedGroupShape.Add(textbox);

Shape nestedShape = new Shape(document, AutoShapeType.Oval);
nestedShape.Height = 100;
nestedShape.Width = 150;
nestedShape.HorizontalPosition = 200;
nestedShape.VerticalPosition = 72;
nestedShape.HorizontalOrigin = HorizontalOrigin.Page;
nestedShape.VerticalOrigin = VerticalOrigin.Page;
nestedShape.WrapFormat.TextWrappingStyle = TextWrappingStyle.InFrontOfText;
nestedGroupShape.HorizontalPosition = 72;
nestedGroupShape.VerticalPosition = 72;
nestedGroupShape.Add(nestedShape);

groupShape.Add(nestedGroupShape);
```

---

## Ungroup Shapes

### Ungroup Single Group Shape

#### Common for Cross-Platform and Windows-Specific
```csharp
FileStream fileStream = new FileStream("Template.docx", FileMode.Open, FileAccess.ReadWrite);
WordDocument document = new WordDocument(fileStream, FormatType.Docx);
WParagraph lastParagraph = document.LastParagraph;

for (int i = 0; i < lastParagraph.ChildEntities.Count; i++)
{
    if (lastParagraph.ChildEntities[i] is GroupShape)
    {
        GroupShape groupShape = lastParagraph.ChildEntities[i] as GroupShape;
        groupShape.Ungroup();
        break;
    }
}

MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
document.Close();
```

### Ungroup All Group Shapes

#### Common for Cross-Platform and Windows-Specific
```csharp
foreach (WSection section in document.Sections)
{
    foreach (TextBodyItem item in section.Body.ChildEntities)
    {
        if (item is WParagraph)
        {
            WParagraph para = item as WParagraph;
            for (int i = para.ChildEntities.Count - 1; i >= 0; i--)
            {
                if (para.ChildEntities[i] is GroupShape)
                {
                    GroupShape groupShape = para.ChildEntities[i] as GroupShape;
                    groupShape.Ungroup();
                }
            }
        }
    }
}
```
