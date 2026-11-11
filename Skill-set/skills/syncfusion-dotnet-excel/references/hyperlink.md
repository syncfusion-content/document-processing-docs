# Add and Manage Hyperlinks in Excel Cells

> Add hyperlinks to cells — link to external URLs, internal cells, email addresses, files, and manage hyperlink properties, formatting, and removal using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## Add Hyperlink to External URL

Add a clickable hyperlink to a cell that opens an external web URL.

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
IRange cell = sheet["A1"];
IHyperLink hyperlink = sheet.HyperLinks.Add(cell);
hyperlink.Address = "https://www.example.com";
hyperlink.TextToDisplay = "Click here";
```

### Placeholders
- `"https://www.example.com"` → Replace with `"{url}"`
- `"Click here"` → Replace with `"{cell-text}"`

### With Display Text and Tooltip
```csharp
IRange cell = sheet["B2"];
IHyperLink hyperlink = sheet.HyperLinks.Add(cell);
hyperlink.Address = "https://www.google.com";
hyperlink.TextToDisplay = "Visit Google";
hyperlink.ScreenTip = "Click to open Google";
```

### Apply to Range
```csharp
IRange range = sheet["A1:A10"];
foreach (IRange cell in range.Cells)
{
    IHyperLink link = sheet.HyperLinks.Add(cell);
    link.Address = "https://example.com";
    link.TextToDisplay = cell.Text ?? string.Empty;
}
```

---

## Add Hyperlink to Internal Cell

Add a hyperlink that navigates to another cell or sheet within the same workbook.

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
IRange cell = sheet["A1"];
IHyperLink hyperlink = sheet.HyperLinks.Add(cell);
hyperlink.Address = "Sheet2!B5";
hyperlink.TextToDisplay = "Go to Sheet2";
```

### Placeholders
- `"Sheet2!B5"` → Replace with `"{sheet-cell-reference}"`

### Navigate to Another Sheet
```csharp
IRange c3 = sheet["C3"];
IHyperLink hyperlink = sheet.HyperLinks.Add(c3);
hyperlink.Address = "SalesData!A1:C50";
hyperlink.TextToDisplay = "View Sales Data";
```

### Navigate to Named Range
```csharp
// Create a named range first
workbook.Names.Add("DataRange", workbook.Worksheets[0]["A1:D100"]);

// Add hyperlink to named range
IRange d5 = sheet["D5"];
IHyperLink hyperlink = sheet.HyperLinks.Add(d5);
hyperlink.Address = "DataRange";
hyperlink.TextToDisplay = "Go to Data Range";
```

---

## Add Email Hyperlink

Add a hyperlink that opens the default email client to send an email.

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
IRange cell = sheet["A1"];
IHyperLink hyperlink = sheet.HyperLinks.Add(cell);
hyperlink.Address = "mailto:user@example.com";
hyperlink.TextToDisplay = "Send Email";
```

### Placeholders
- `"user@example.com"` → Replace with `"{email-address}"`

### With Email Subject
```csharp
IRange b2 = sheet["B2"];
IHyperLink hyperlink = sheet.HyperLinks.Add(b2);
hyperlink.Address = "mailto:support@company.com?subject=Support Request";
hyperlink.TextToDisplay = "Contact Support";
```

### With Subject and Body
```csharp
string emailLink = "mailto:info@example.com?subject=Product Inquiry&body=Hello, I have a question about your product.";
IRange c3 = sheet["C3"];
IHyperLink hyperlink = sheet.HyperLinks.Add(c3);
hyperlink.Address = emailLink;
hyperlink.TextToDisplay = "Send Inquiry";
```

---

## Add File Hyperlink

Add a hyperlink that opens a file or folder.

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
IRange cell = sheet["A1"];
IHyperLink hyperlink = sheet.HyperLinks.Add(cell);
hyperlink.Address = "C:\\Documents\\Report.pdf";
hyperlink.TextToDisplay = "Open Report";
```

### Placeholders
- `"C:\\Documents\\Report.pdf"` → Replace with `"{file-path}"`

### Relative File Path
```csharp
IRange b2 = sheet["B2"];
IHyperLink hyperlink = sheet.HyperLinks.Add(b2);
hyperlink.Address = "..\\files\\data.xlsx";
hyperlink.TextToDisplay = "Open Data File";
```

### Open Folder
```csharp
IRange c3 = sheet["C3"];
IHyperLink hyperlink = sheet.HyperLinks.Add(c3);
hyperlink.Address = "C:\\Shared\\Documents";
hyperlink.TextToDisplay = "Open Folder";
```

---

## Format Hyperlink Appearance

Style hyperlinked cells with colors, fonts, and underline.

### Minimal Code
```csharp
IRange cell = sheet["A1"];
IHyperLink hyperlink = sheet.HyperLinks.Add(cell);
hyperlink.Address = "https://example.com";
cell.Text = "Click Here";

// Format as hyperlink (blue and underlined)
cell.CellStyle.Font.Color = ExcelKnownColors.Blue;
cell.CellStyle.Font.Underline = ExcelUnderline.Single;
```

### Custom Hyperlink Style
```csharp
IRange cell = sheet["B2"];
IHyperLink hyperlink = sheet.HyperLinks.Add(cell);
hyperlink.Address = "https://example.com";
cell.Text = "Styled Link";

// Custom formatting
cell.CellStyle.Font.Bold = true;
cell.CellStyle.Font.Color = ExcelKnownColors.Dark_blue;
cell.CellStyle.Font.FontName = "Calibri";
cell.CellStyle.Font.Size = 12;
cell.CellStyle.Font.Underline = ExcelUnderline.Double;
```

---

## Access and Modify Hyperlinks

Read and modify existing hyperlinks in cells.

### Minimal Code
```csharp
IRange cell = sheet["A1"];
// Find hyperlink object for the cell from the worksheet HyperLinks collection
IHyperLink hyperlink = null;
for (int i = 0; i < sheet.HyperLinks.Count; i++)
{
    var hl = sheet.HyperLinks[i];
    if (hl != null && hl.Range != null && hl.Range.AddressLocal == cell.AddressLocal)
    {
        hyperlink = hl;
        break;
    }
}
if (hyperlink != null)
{
    string url = hyperlink.Address;
    string displayText = hyperlink.TextToDisplay;
}
```

### Change Hyperlink Address
```csharp
IRange cell = sheet["A1"];
for (int i = 0; i < sheet.HyperLinks.Count; i++)
{
    var hl = sheet.HyperLinks[i];
    if (hl != null && hl.Range != null && hl.Range.AddressLocal == cell.AddressLocal)
    {
        hl.Address = "https://newurl.com";
        hl.TextToDisplay = "Updated Link";
        break;
    }
}
```

### Copy Hyperlink to Another Cell
```csharp
IRange sourceCell = sheet["A1"];
IHyperLink sourceLink = null;
for (int i = 0; i < sheet.HyperLinks.Count; i++)
{
    var hl = sheet.HyperLinks[i];
    if (hl != null && hl.Range != null && hl.Range.AddressLocal == sourceCell.AddressLocal)
    {
        sourceLink = hl;
        break;
    }
}
if (sourceLink != null)
{
    IRange targetCell = sheet["B1"];
    IHyperLink newLink = sheet.HyperLinks.Add(targetCell);
    newLink.Address = sourceLink.Address;
    newLink.TextToDisplay = sourceLink.TextToDisplay;
    newLink.ScreenTip = sourceLink.ScreenTip;
    newLink.Type = sourceLink.Type;
}
```

---

## Remove Hyperlink

Remove a hyperlink while keeping the cell text.

### Minimal Code
```csharp
IRange cell = sheet["A1"];
// Find hyperlink index and remove via the worksheet HyperLinks collection
for (int i = 0; i < sheet.HyperLinks.Count; i++)
{
    var hl = sheet.HyperLinks[i];
    if (hl != null && hl.Range != null && hl.Range.AddressLocal == cell.AddressLocal)
    {
        sheet.HyperLinks.RemoveAt(i);
        break;
    }
}
```

### Remove All Hyperlinks from Range
```csharp
IRange range = sheet["A1:C10"];
foreach (IRange cell in range.Cells)
{
    // locate hyperlink for each cell and remove if found
    for (int i = 0; i < sheet.HyperLinks.Count; i++)
    {
        var hl = sheet.HyperLinks[i];
        if (hl != null && hl.Range != null && hl.Range.AddressLocal == cell.AddressLocal)
        {
            sheet.HyperLinks.RemoveAt(i);
            break;
        }
    }
}
```

### Remove All Hyperlinks from Sheet
```csharp
IWorksheet sheet = workbook.Worksheets[0];
// Remove all hyperlinks from the worksheet by removing from the HyperLinks collection backwards
for (int i = sheet.HyperLinks.Count - 1; i >= 0; i--)
{
    sheet.HyperLinks.RemoveAt(i);
}
```

---

## Hyperlink Properties

### Minimal Code
```csharp
IRange cell = sheet["A1"];
IHyperLink hyperlink = sheet.HyperLinks.Add(cell);
hyperlink.Address = "https://example.com";           // URL or cell reference
hyperlink.TextToDisplay = "Click Here";              // Display text in cell
hyperlink.ScreenTip = "This opens example.com";      // Tooltip on hover
hyperlink.Type = ExcelHyperLinkType.Url;               // Type of hyperlink
```

### HyperLink Type Options
```csharp
hyperlink.Type = ExcelHyperLinkType.Url;             // External URL
hyperlink.Type = ExcelHyperLinkType.Workbook;        // Internal cell/sheet
hyperlink.Type = ExcelHyperLinkType.File;            // File path
hyperlink.Type = ExcelHyperLinkType.Url;             // Email address (use mailto: in Address)
```

### Read Hyperlink Properties
```csharp
IRange cell = sheet["A1"];
IHyperLink link = null;
for (int i = 0; i < sheet.HyperLinks.Count; i++)
{
    var hl = sheet.HyperLinks[i];
    if (hl != null && hl.Range != null && hl.Range.AddressLocal == cell.AddressLocal)
    {
        link = hl;
        break;
    }
}
if (link != null)
{
    string address = link.Address;
    string displayText = link.TextToDisplay;
    string tooltip = link.ScreenTip;
    ExcelHyperLinkType type = link.Type;
}
```

---

## Common Scenarios

### Create Table of Contents with Internal Links
```csharp
IWorksheet sheet = workbook.Worksheets[0];

IHyperLink hyperlink4 = sheet.HyperLinks.Add(sheet.Range["C13"]);
hyperlink4.Type = ExcelHyperLinkType.Workbook;
hyperlink4.Address = "Sheet1!A15";
hyperlink4.ScreenTip = "Click here";
hyperlink4.TextToDisplay = "Hyperlink to cell A15";

```

### Create Contact Information Links
```csharp
IWorksheet sheet = workbook.Worksheets[0];

IHyperLink hyperlink1 = sheet.HyperLinks.Add(sheet.Range["C7"]);
hyperlink1.Type = ExcelHyperLinkType.Url;
hyperlink1.Address = "mailto:Username@syncfusion.com";
hyperlink1.ScreenTip = "Send Mail";
```

### Create Dynamic URL Hyperlinks
```csharp
IWorksheet sheet = workbook.Worksheets[0];

IHyperLink hyperlink = sheet.HyperLinks.Add(sheet.Range["C5"]);
hyperlink.Type = ExcelHyperLinkType.Url;
hyperlink.Address = "http://www.syncfusion.com";
hyperlink.ScreenTip = "To know more about Syncfusion products, go through this link.";
```

### Create Report Links
```csharp
string[] reportFiles = new string[]
{
    "C:\\Reports\\Q1_Report.pdf",
    "C:\\Reports\\Q2_Report.pdf",
    "C:\\Reports\\Q3_Report.pdf",
    "C:\\Reports\\Q4_Report.pdf"
};

IWorksheet sheet = workbook.Worksheets[0];
sheet.Range["A1"].Text = "Reports";

for (int i = 0; i < reportFiles.Length; i++)
{
    int row = i + 2;

    // Add hyperlink to the cell
    IHyperLink link = sheet.HyperLinks.Add(sheet.Range[$"A{row}"]);
    link.TextToDisplay = $"Q{i + 1} Report";
    link.Address = reportFiles[i];
}
```

---

## Hyperlink Limitations and Tips

1. **Cell Reference Format** — Use sheet name with exclamation mark: `Sheet2!A1`
2. **Named Ranges** — Can use named range as hyperlink target
3. **Email Links** — Use `mailto:` prefix for email addresses
4. **File Paths** — Support both absolute and relative paths
5. **Special Characters** — URL-encode special characters in URLs
6. **Remove Before Edit** — Remove and re-add to change hyperlink
7. **Display Text** — Separate from underlying hyperlink address

---

## Reference Links

- [Syncfusion XlsIO Documentation](https://help.syncfusion.com/document-processing/excel/overview)
- [IHyperLink API Reference](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IHyperLink.html)
- [HyperLink Type Enum](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.HyperlinkType.html)
- [Syncfusion XlsIO Examples Repository](https://github.com/SyncfusionExamples/XlsIO-Examples)
