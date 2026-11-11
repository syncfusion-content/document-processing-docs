# Excel Drawing Objects

> Create and manipulate drawing objects including text boxes, checkboxes, combo boxes, option buttons, comments, and shapes using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `Syncfusion.XlsIO.Implementation`, `System`, `System.Drawing`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** `Syncfusion.Drawing`
> **Required usings for .NET Framework (Windows):** (No additional usings required)

> **Note:** For color values use the type that matches your target platform to avoid compilation errors:
> - On .NET Core / .NET 5+ / ASP.NET Core, prefer `Syncfusion.Drawing.Color` (add `using Syncfusion.Drawing;`) when examples use Syncfusion color APIs.
> - On .NET Framework (Windows), prefer `System.Drawing.Color` (add `using System.Drawing;`) for compatibility.

---

## Text Box

### Create Text Box
```csharp
ITextBoxShape textbox = sheet.TextBoxes.AddTextBox(2, 2, 30, 200);
textbox.Text = "Text Box 1";
```

### Parameters
- Row: Starting row position
- Column: Starting column position
- Height: Height in pixels
- Width: Width in pixels

### Format Text Box
```csharp
ITextBoxShape shape = sheet.TextBoxes[0];
shape.Fill.ForeColor = Color.Gold;
shape.Fill.BackColor = Color.Black;
shape.Fill.Pattern = ExcelGradientPattern.Pat_90_Percent;
```

### Remove Text Box
```csharp
ITextBoxShape shape = sheet.TextBoxes[1];
shape.Remove();
```

---

## Check Box

### Create Check Box
```csharp
ICheckBoxShape checkbox = sheet.CheckBoxes.AddCheckBox(2, 4, 20, 75);
checkbox.Text = "Red";
checkbox.CheckState = ExcelCheckState.Unchecked;
```

### Link Check Box to Cell
```csharp
ICheckBoxShape checkbox = sheet.CheckBoxes[0];
checkbox.LinkedCell = sheet["B2"];
```

### Set Check State
```csharp
ICheckBoxShape checkbox = sheet.CheckBoxes[0];
checkbox.CheckState = ExcelCheckState.Checked;
```

### Remove Check Box
```csharp
ICheckBoxShape checkbox = sheet.CheckBoxes[1];
checkbox.Remove();
```

---

## Combo Box

### Create Combo Box
```csharp
IComboBoxShape comboBox = sheet.ComboBoxes.AddComboBox(2, 3, 20, 100);
```

### Assign List to Combo Box
```csharp
IComboBoxShape comboBox = sheet.ComboBoxes[0];
comboBox.ListFillRange = sheet["A3:A5"];
```

### Link Combo Box to Cell
```csharp
IComboBoxShape comboBox = sheet.ComboBoxes[0];
comboBox.LinkedCell = sheet["C5"];
```

### Set Selected Index
```csharp
IComboBoxShape comboBox = sheet.ComboBoxes[0];
comboBox.SelectedIndex = 2;
```

### Remove Combo Box
```csharp
IComboBoxShape comboBox = sheet.ComboBoxes[1];
comboBox.Remove();
```

---

## Option Button

### Create Option Button
```csharp
IOptionButtonShape optionButton = sheet.OptionButtons.AddOptionButton(2, 3);
optionButton.Text = "Fed Ex";
```

### Format Option Button
```csharp
IOptionButtonShape optionButton = sheet.OptionButtons[0];
optionButton.Fill.FillType = ExcelFillType.SolidColor;
optionButton.Fill.ForeColor = Color.Yellow;
```

### Set Check State
```csharp
IOptionButtonShape optionButton = sheet.OptionButtons[0];
optionButton.CheckState = ExcelCheckState.Checked;
```

### Remove Option Button
```csharp
IOptionButtonShape optionButton = sheet.OptionButtons[1];
optionButton.Remove();
```

---

## Comment

### Add Comment
```csharp
sheet.Range["A1"].AddComment().Text = "Comment text";
```

### Add Comment with Author
```csharp
ICommentShape comment = sheet.Range["A3"].AddComment();
comment.Text = comment.Author;
```

### Format Comment
```csharp
ICommentShape comment = sheet.Comments[0];
comment.Height = 150;
comment.Width = 100;
comment.Left = 200;
comment.Top = 100;
```

### Set Comment Alignment
```csharp
ICommentShape comment = sheet.Comments[0];
comment.HAlignment = ExcelCommentHAlign.Right;
comment.VAlignment = ExcelCommentVAlign.Bottom;
```

### Show/Hide Comment
```csharp
sheet.Comments[0].IsVisible = true;
sheet.Comments[1].IsVisible = false;
```

### Remove Comment
```csharp
sheet.Comments.Clear();
```

---

## Threaded Comment

### Create Threaded Comment
```csharp
IThreadedComment threadedComment = worksheet.Range["H16"].AddThreadedComment(
    "What is the reason?", 
    "User1", 
    DateTime.Now);
```

### Add Reply to Threaded Comment
```csharp
IThreadedComments threadedComments = worksheet.ThreadedComments;
threadedComments[0].AddReply("Reply text", "User2", DateTime.Now);
```

### Mark as Resolved
```csharp
IThreadedComments threadedComments = worksheet.ThreadedComments;
threadedComments[0].IsResolved = true;
```

### Delete Threaded Comment
```csharp
IThreadedComments threadedComments = worksheet.ThreadedComments;
threadedComments[0].Delete();
```

### Clear All Threaded Comments
```csharp
IThreadedComments threadedComments = worksheet.ThreadedComments;
threadedComments.Clear();
```

---

## AutoShape

### Add AutoShape
```csharp
IShape shape = worksheet.Shapes.AddAutoShapes(AutoShapeType.RoundedRectangle, 2, 7, 60, 192);
```

### Set AutoShape Text
```csharp
IShape shape = worksheet.Shapes[0];
shape.TextFrame.TextRange.Text = "AutoShape";
```

### Format AutoShape
```csharp
IShape shape = worksheet.Shapes[0];
shape.Fill.ForeColorIndex = ExcelKnownColors.Light_blue;
shape.TextFrame.VerticalAlignment = ExcelVerticalAlignment.MiddleCentered;
```

### Remove AutoShape
```csharp
IShape shape = worksheet.Shapes[1];
shape.Remove();
```

---

## Group Shapes

### Create Group Shape
```csharp
IShape[] groupItems = new IShape[] { shapes[0], shapes[1], shapes[2] };
shapes.Group(groupItems);
```

### Ungroup Shape
```csharp
IGroupShape groupShape = worksheet.Shapes[0] as IGroupShape;
worksheet.Shapes.Ungroup(groupShape);
```

### Ungroup All Shapes
```csharp
IGroupShape groupShape = worksheet.Shapes[0] as IGroupShape;
worksheet.Shapes.Ungroup(groupShape, true);
```

---

## Shape Visibility

### Hide Shape
```csharp
AutoShapeImpl shape = worksheet.Shapes[0] as AutoShapeImpl;
shape.IsHidden = true;
```

### Show Shape
```csharp
AutoShapeImpl shape = worksheet.Shapes[0] as AutoShapeImpl;
shape.IsHidden = false;
```

---

## OLE Objects

### Embed OLE Object
```csharp
FileStream inputStream = new FileStream("Test.pptx", FileMode.Open);
FileStream imageStream = new FileStream("image.png", FileMode.Open);
Image image = Image.FromStream(imageStream);
IOleObject oleObject = worksheet.OleObjects.Add(inputStream, image, OleObjectType.PowerPointPresentation);
```

### Link OLE Object
```csharp
FileStream imageStream = new FileStream("image.png", FileMode.Open);
Image image = Image.FromStream(imageStream);
IOleObject oleObject = worksheet.OleObjects.AddLink("../../Data/Document.docx", image);
```

### Set OLE Object Location
```csharp
IOleObject oleObject = worksheet.OleObjects[0];
oleObject.Location = worksheet["K8"];
```

### Set OLE Object Size
```csharp
IOleObject oleObject = worksheet.OleObjects[0];
oleObject.Size = new Size(30, 30);
```

### Display OLE Object as Icon
```csharp
IOleObject oleObject = worksheet.OleObjects[0];
oleObject.DisplayAsIcon = true;
```

### Get OLE Object Picture
```csharp
IOleObject oleObject = worksheet.OleObjects[0];
Image image = oleObject.Picture;
```

### Get OLE Object Shape
```csharp
IOleObject oleObject = worksheet.OleObjects[0];
IPictureShape shape = oleObject.Shape;
```

### Remove OLE Object
```csharp
IOleObject oleObject = worksheet.OleObjects[1];
oleObject.Shape.Remove();
```

---

## Available AutoShape Types

```csharp
AutoShapeType.RoundedRectangle
AutoShapeType.CircularArrow
AutoShapeType.Rectangle
AutoShapeType.Circle
AutoShapeType.Triangle
// And many more shapes available
```

---

## Check State Options

```csharp
ExcelCheckState.Checked      // Checked state
ExcelCheckState.Unchecked    // Unchecked state
```

---

## OLE Object Types

```csharp
OleObjectType.WordDocument
OleObjectType.PowerPointPresentation
// And other supported object types
```
