# Add Comments and Threaded Comments to Excel Cells

> Add, format, and manage cell comments (notes) and threaded comments — add, edit, delete, show/hide, style comment boxes, and work with threaded comment replies using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** `Syncfusion.Drawing`
> **Required usings for .NET Framework (Windows):** `System.Drawing`

---

## Add a Comment (Note)

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
IComment comment = sheet["B2"].AddComment();
comment.Text = "This is a comment.";
```

### Placeholders
- `"This is a comment."` → Replace with `"{comment-text}"`

### With Author
```csharp
IComment comment = sheet["B2"].AddComment();
comment.Text   = "Please verify this value.";
comment.Author = "Alice Johnson";
```

### Placeholders
- `"Alice Johnson"` → Replace with `"{author-name}"`

---

### Show and Hide Comments

### Minimal Code
```csharp
IComment comment = sheet["B2"].AddComment();
comment.Text    = "Important note here.";
comment.IsVisible = true;  // Always visible
```

### Toggle Visibility
```csharp
// Always show the comment
comment.IsVisible = true;

// Hide the comment (show only on hover - default behavior)
comment.IsVisible = false;
```

### Show All Comments on the Sheet
```csharp
foreach (IComment c in sheet.Comments)
{
    c.IsVisible = true;
}
```

---

## Style the Comment Box

### Minimal Code
```csharp
IComment comment = sheet["B2"].AddComment();
comment.Text     = "Highlighted comment.";

// Background color
comment.Fill.ForeColorIndex = ExcelKnownColors.Light_yellow;
```

### Full Style Options
```csharp
IComment comment = sheet["B2"].AddComment();
comment.Text     = "Styled comment box.";
comment.Author   = "Alice Johnson";

// Background fill color
comment.Fill.ForeColorIndex  = ExcelKnownColors.Light_yellow;
comment.Fill.Pattern         = ExcelPattern.Solid;

// Border
comment.Line.ForeColorIndex  = ExcelKnownColors.Dark_blue;
comment.Line.Weight          = ExcelLineWeight.Medium;

// Resize the comment box
comment.Width  = 200;
comment.Height = 80;
```

---

## Format Comment Text (Font)

### Minimal Code
```csharp
IComment comment = sheet["B2"].AddComment();
comment.RichText.Text = "Important note.";
comment.RichText.SetFont(0, 13, workbook.CreateFont());
```

### Bold, Italic, Color, Size
```csharp
IComment comment = sheet["C3"].AddComment();
comment.RichText.Text = "Warning: Value exceeds threshold.";

// Apply font to the full text (start index 0, length = text length)
IFont font      = workbook.CreateFont();
font.Bold       = true;
font.Italic     = true;
font.Color      = ExcelKnownColors.Dark_red;
font.Size       = 10;
font.FontName   = "Calibri";

comment.RichText.SetFont(0, comment.RichText.Text.Length, font);
```

### Mixed Font in One Comment
```csharp
IComment comment = sheet["D4"].AddComment();
comment.RichText.Text = "Status: Pending Review";

// Style "Status: "  bold
IFont boldFont    = workbook.CreateFont();
boldFont.Bold     = true;
boldFont.Size     = 10;
comment.RichText.SetFont(0, 8, boldFont);

// Style "Pending Review"  red italic
IFont redFont     = workbook.CreateFont();
redFont.Italic    = true;
redFont.Color     = ExcelKnownColors.Red;
redFont.Size      = 10;
comment.RichText.SetFont(8, 14, redFont);
```

---

## Resize and Reposition the Comment Box

### Minimal Code
```csharp
IComment comment  = sheet["B2"].AddComment();
comment.Text      = "Note here.";
comment.Width     = 180;
comment.Height    = 60;
```

### Set Position
```csharp
IComment comment  = sheet["B2"].AddComment();
comment.Text      = "Repositioned comment.";
comment.Width     = 200;
comment.Height    = 80;
comment.Left      = 150;  // Horizontal offset in pixels
comment.Top       = 50;   // Vertical offset in pixels
```

---

## Read Existing Comments

### Minimal Code
```csharp
foreach (IComment comment in sheet.Comments)
{
    Console.WriteLine($"Cell: {comment.Row},{comment.Column} | Author: {comment.Author} | Text: {comment.Text}");
}
```

### Read Comment from a Specific Cell
```csharp
IComment comment = sheet["B2"].Comment;

if (comment != null)
{
    Console.WriteLine($"Author : {comment.Author}");
    Console.WriteLine($"Text   : {comment.Text}");
    Console.WriteLine($"Visible: {comment.IsVisible}");
}
```

---

## Delete a Comment

### Minimal Code
```csharp
sheet["B2"].Comment.Delete();
```

### Delete All Comments on the Sheet
```csharp
// Collect cell addresses first to avoid modifying collection while iterating
List<string> cellsWithComments = new List<string>();
foreach (IComment c in sheet.Comments)
{
    cellsWithComments.Add(c.Row + "," + c.Column);
}

foreach (string cell in cellsWithComments)
{
    var parts = cell.Split(',');
    sheet[int.Parse(parts[0]), int.Parse(parts[1])].Comment.Delete();
}
```

---

## Add a Threaded Comment

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet["B2"].AddThreadedComment("Please verify this figure.", "Alice Johnson", DateTime.Now);
```

### Placeholders
- `"Please verify this figure."` → Replace with `"{thread-comment}"`

### With Multiple Replies
```csharp
// Add the first (parent) threaded comment
IThreadedComment parent = sheet["B2"].AddThreadedComment(
    "Sales figure looks off. Please verify.",
    "Alice Johnson",
    new DateTime(2026, 3, 1, 9, 0, 0));

// Add replies to the parent comment
parent.AddReply("Checked  the value is correct per Q1 report.", "Bob Smith",   new DateTime(2026, 3, 1, 10, 30, 0));
parent.AddReply("Confirmed. Closing this thread.",               "Alice Johnson", new DateTime(2026, 3, 1, 11, 0, 0));
```

---

### Read Threaded Comments

### Minimal Code
```csharp
foreach (IThreadedComment tc in sheet.ThreadedComments)
{
    Console.WriteLine($"Cell   : {tc.RowIndex},{tc.ColumnIndex}");
    Console.WriteLine($"Author : {tc.Author}");
    Console.WriteLine($"Text   : {tc.Text}");
    Console.WriteLine($"Date   : {tc.CreatedTime}");

    foreach (IThreadedComment reply in tc.Replies)
    {
        Console.WriteLine($"  Reply  {reply.Author}: {reply.Text}");
    }
}
```

### Read from a Specific Cell
```csharp
IThreadedComment tc = sheet["B2"].ThreadedComment;

if (tc != null)
{
    Console.WriteLine($"Author : {tc.Author}");
    Console.WriteLine($"Text   : {tc.Text}");
    Console.WriteLine($"Replies: {tc.Replies.Count}");

    foreach (IThreadedComment reply in tc.Replies)
    {
        Console.WriteLine($"  {reply.Author} ({reply.CreatedTime:dd/MM/yyyy HH:mm}): {reply.Text}");
    }
}
```

---

## Delete a Threaded Comment

### Minimal Code
```csharp
sheet["B2"].ThreadedComment.Delete();
```

### Delete All Threaded Comments on the Sheet
```csharp
List<(int row, int col)> cells = new List<(int, int)>();
foreach (IThreadedComment tc in sheet.ThreadedComments)
{
    cells.Add((tc.RowIndex, tc.ColumnIndex));
}

foreach (var (row, col) in cells)
{
    sheet[row, col].ThreadedComment?.Delete();
}
```

---

## Full End-to-End Example

```csharp
using Syncfusion.XlsIO;
using System.Drawing;

ExcelEngine excelEngine    = new ExcelEngine();
IApplication application   = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook  = application.Workbooks.Create(1);
IWorksheet sheet    = workbook.Worksheets[0];
sheet.Name          = "Budget Review";

// Write headers and data
sheet["A1"].Text = "Item";       sheet["B1"].Text = "Budget";   sheet["C1"].Text = "Actual";
sheet["A2"].Text = "Marketing";  sheet["B2"].Number = 50000;    sheet["C2"].Number = 62000;
sheet["A3"].Text = "Operations"; sheet["B3"].Number = 80000;    sheet["C3"].Number = 78500;
sheet["A4"].Text = "HR";         sheet["B4"].Number = 30000;    sheet["C4"].Number = 31000;

// Style headers
IRange header = sheet["A1:C1"];
header.CellStyle.Font.Bold  = true;
header.CellStyle.Color      = Color.FromArgb(255, 68, 114, 196);
header.CellStyle.Font.Color = ExcelKnownColors.White;

// 1. Regular comment (note) on C2  over budget
sheet["C2"].AddComment();
ICommentShape note = sheet.Comments[sheet.Comments.Count - 1];
// Note: some API surfaces expose `Author` as read-only; set authors via document properties if needed.
note.Text            = "Over budget by $12,000. Needs approval.";
note.IsVisible       = true;
note.Fill.ForeColorIndex = ExcelKnownColors.Light_yellow;
note.Width           = 200;
note.Height          = 60;

// Style the comment text
IFont noteFont   = workbook.CreateFont();
noteFont.Bold    = true;
noteFont.Color   = ExcelKnownColors.Dark_red;
noteFont.Size    = 9;
note.RichText.Text = note.Text;
note.RichText.SetFont(0, note.Text.Length, noteFont);

// 2. Threaded comment on B3  under budget query
IThreadedComment tc = sheet["B3"].AddThreadedComment(
    "Operations came in under budget. Any unused funds to be reallocated?",
    "Alice Johnson",
    new DateTime(2026, 3, 5, 9, 0, 0));

tc.AddReply("Yes, $1,500 to be moved to the training budget.",
    "Bob Smith", new DateTime(2026, 3, 5, 10, 0, 0));

tc.AddReply("Noted. I will update the reallocation sheet.",
    "Alice Johnson", new DateTime(2026, 3, 5, 10, 30, 0));

// 3. Simple comment on C4
sheet["C4"].AddComment();
ICommentShape hrNote = sheet.Comments[sheet.Comments.Count - 1];
// hrNote.Author is typically read-only
hrNote.Text       = "Slightly over due to new hire onboarding costs.";
hrNote.IsVisible    = false; // Show on hover only

// Auto-fit columns
for (int col = 1; col <= 3; col++)
    sheet.AutofitColumn(col);

workbook.SaveAs("output/budget-review.xlsx");
workbook.Close();
excelEngine.Dispose();
```

