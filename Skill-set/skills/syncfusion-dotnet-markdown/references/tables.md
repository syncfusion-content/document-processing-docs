# Tables

## Overview
Create and manipulate markdown tables with support for headers, multiple rows/columns, cell alignment, and inline formatting using MdTable, MdTableRow, and MdTableCell classes.

## Table Structure

### Core Classes
```csharp
public class MdTable : IMdBlock
{
    public List<MdTableRow> Rows { get; }  // Collection of table rows
    public List<MdColumnAlignment> ColumnAlignments { get; set;} //alignments for each columns in table.
}

public class MdTableRow
{
    public List<MdTableCell> Cells { get; }  // Collection of cells in row
}

public class MdTableCell
{
    public List<IMdInline> Items { get; }   // Inline content (text, links, etc.)
}
```

## Creating Basic Tables

### Simple 2x2 Table
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Add table
MdTable table = doc.AddTable();

// Header row
MdTableRow headerRow = table.AddTableRow();
MdTableCell header1 = headerRow.AddTableCell();
header1.Items.Add(new MdTextRange { Text = "Name" });
MdTableCell header2 = headerRow.AddTableCell();
header2.Items.Add(new MdTextRange { Text = "Age" });

// Data row
MdTableRow dataRow = table.AddTableRow();
MdTableCell cell1 = dataRow.AddTableCell();
cell1.Items.Add(new MdTextRange { Text = "Alice" });
MdTableCell cell2 = dataRow.AddTableCell();
cell2.Items.Add(new MdTextRange { Text = "30" });

string markdown = doc.GetMarkdownText();
doc.Dispose();

// Output:
// | Name | Age |
// | --- | --- |
// | Alice | 30 |
```

### Table with Multiple Rows
```csharp
MarkdownDocument doc = new MarkdownDocument();
MdTable table = doc.AddTable();

// Header
MdTableRow header = table.AddTableRow();
MdTableCell c1 = header.AddTableCell();
c1.Items.Add(new MdTextRange { Text = "Product" });
MdTableCell c2 = header.AddTableCell();
c2.Items.Add(new MdTextRange { Text = "Price" });
MdTableCell c3 = header.AddTableCell();
c3.Items.Add(new MdTextRange { Text = "Stock" });

// Data rows
string[][] data = {
    new[] { "Widget", "$10", "50" },
    new[] { "Gadget", "$20", "30" },
    new[] { "Tool", "$15", "40" }
};

foreach (string[] row in data)
{
    MdTableRow dataRow = table.AddTableRow();
    foreach (string value in row)
    {
        dataRow.AddTableCell().Items.Add(new MdTextRange { Text = value });
    }
}

string markdown = doc.GetMarkdownText();
doc.Dispose();

// Output:
// | Product | Price | Stock |
// | --- | --- | --- |
// | Widget | $10 | 50 |
// | Gadget | $20 | 30 |
// | Tool | $15 | 40 |
```

## Column Alignment

Column alignments are set via the `ColumnAlignments` property on `MdTable`, not on individual cells.

```csharp
// Set column alignments on the table (left, center, right)
table.ColumnAlignments = new List<MdColumnAlignment>
{
    MdColumnAlignment.Left,
    MdColumnAlignment.Center,
    MdColumnAlignment.Right
};

// Header
MdTableRow header = table.AddTableRow();
header.AddTableCell().Items.Add(new MdTextRange { Text = "Name" });
header.AddTableCell().Items.Add(new MdTextRange { Text = "Status" });
header.AddTableCell().Items.Add(new MdTextRange { Text = "Price" });

// Data row
MdTableRow data = table.AddTableRow();
data.AddTableCell().Items.Add(new MdTextRange { Text = "Laptop" });
data.AddTableCell().Items.Add(new MdTextRange { Text = "Electronics" });
data.AddTableCell().Items.Add(new MdTextRange { Text = "$999" });

string markdown = doc.GetMarkdownText();
doc.Dispose();

// Output:
// | Name | Status | Price |
// | :--- | :---: | ---: |
// | Laptop | Electronics | $999 |
```

## Formatting Cell Content

### Bold Text in Cells
```csharp
MdTableCell cell = row.AddTableCell();
var bold = new MdTextRange { Text = "Important" };
bold.TextFormat.Bold = true;
cell.Items.Add(bold);

// Output: | **Important** |
```

### Italic Text in Cells
```csharp
MdTableCell cell = row.AddTableCell();
var italic = new MdTextRange { Text = "Note" };
italic.TextFormat.Italic = true;
cell.Items.Add(italic);

// Output: | *Note* |
```

### Code Spans in Cells
```csharp
MdTableCell cell = row.AddTableCell();
var code = new MdTextRange { Text = "AddTable()" };
code.TextFormat.CodeSpan = true;
cell.Items.Add(code);

// Output: | `AddTable()` |
```

### Multiple Formats in Cell
```csharp
MdTableCell cell = row.AddTableCell();
cell.Items.Add(new MdTextRange { Text = "Use " });
var code = new MdTextRange { Text = "Parse()" };
code.TextFormat.CodeSpan = true;
cell.Items.Add(code);
cell.Items.Add(new MdTextRange { Text = " method" });

// Output: | Use `Parse()` method |
```

### Links in Cells
```csharp
MdTableCell cell = row.AddTableCell();
var link = new MdHyperlink { DisplayText = "Documentation", Url = "https://example.com/docs" };
cell.Items.Add(link);

// Output: | [Documentation](https://example.com/docs) |
```

## Practical Examples

### API Documentation Table
```csharp
MarkdownDocument doc = new MarkdownDocument();
MdTable table = doc.AddTable();

// Header
MdTableRow header = table.AddTableRow();
header.AddTableCell().Items.Add(new MdTextRange { Text = "Method" });
header.AddTableCell().Items.Add(new MdTextRange { Text = "Description" });
header.AddTableCell().Items.Add(new MdTextRange { Text = "Returns" });

// Column alignment should be set via `MdTable.ColumnAlignments` (see above)

// Data rows
MdTableRow row1 = table.AddTableRow();
var method1 = new MdTextRange { Text = "AddParagraph()" };
method1.TextFormat.CodeSpan = true;
row1.AddTableCell().Items.Add(method1);
row1.AddTableCell().Items.Add(new MdTextRange { Text = "Adds a new paragraph" });
row1.AddTableCell().Items.Add(new MdTextRange { Text = "MdParagraph" });

MdTableRow row2 = table.AddTableRow();
var method2 = new MdTextRange { Text = "AddTable()" };
method2.TextFormat.CodeSpan = true;
row2.AddTableCell().Items.Add(method2);
row2.AddTableCell().Items.Add(new MdTextRange { Text = "Adds a new table" });
row2.AddTableCell().Items.Add(new MdTextRange { Text = "MdTable" });

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Product Pricing Table
```csharp
MarkdownDocument doc = new MarkdownDocument();
MdTable table = doc.AddTable();

// Header
MdTableRow header = table.AddTableRow();
header.AddTableCell().Items.Add(new MdTextRange { Text = "Plan" });
header.AddTableCell().Items.Add(new MdTextRange { Text = "Users" });
header.AddTableCell().Items.Add(new MdTextRange { Text = "Price" });

// Data rows
string[][] plans = {
    new[] { "Basic", "1-5", "$10/mo" },
    new[] { "Pro", "6-20", "$50/mo" },
    new[] { "Enterprise", "Unlimited", "$200/mo" }
};

foreach (string[] plan in plans)
{
    MdTableRow row = table.AddTableRow();
    var planName = new MdTextRange { Text = plan[0] };
    planName.TextFormat.Bold = true;
    row.AddTableCell().Items.Add(planName);
    row.AddTableCell().Items.Add(new MdTextRange { Text = plan[1] });
    row.AddTableCell().Items.Add(new MdTextRange { Text = plan[2] });
}

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Comparison Table
```csharp
MarkdownDocument doc = new MarkdownDocument();
MdTable table = doc.AddTable();

// Header
MdTableRow header = table.AddTableRow();
header.AddTableCell().Items.Add(new MdTextRange { Text = "Feature" });
header.AddTableCell().Items.Add(new MdTextRange { Text = "Free" });
header.AddTableCell().Items.Add(new MdTextRange { Text = "Premium" });

// Column alignment should be set via `MdTable.ColumnAlignments` (see above)

// Feature rows
string[][] features = {
    new[] { "Storage", "10 GB", "100 GB" },
    new[] { "Users", "1", "Unlimited" },
    new[] { "Support", "Email", "24/7 Phone" }
};

foreach (string[] feature in features)
{
    MdTableRow row = table.AddTableRow();
    row.AddTableCell().Items.Add(new MdTextRange { Text = feature[0] });
    row.AddTableCell().Items.Add(new MdTextRange { Text = feature[1] });
    row.AddTableCell().Items.Add(new MdTextRange { Text = feature[2] });
}

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Status Dashboard Table
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 2");
title.AddTextRange().Text = "System Status";

// Table
MdTable table = doc.AddTable();

// Header
MdTableRow header = table.AddTableRow();
header.AddTableCell().Items.Add(new MdTextRange { Text = "Service" });
header.AddTableCell().Items.Add(new MdTextRange { Text = "Status" });
header.AddTableCell().Items.Add(new MdTextRange { Text = "Last Check" });

// Column alignment should be set via `MdTable.ColumnAlignments` (see above)

// Status rows
string[][] services = {
    new[] { "API", "✅ Operational", "2 mins ago" },
    new[] { "Database", "✅ Operational", "5 mins ago" },
    new[] { "CDN", "⚠️ Degraded", "1 min ago" }
};

foreach (string[] service in services)
{
    MdTableRow row = table.AddTableRow();
    var serviceName = new MdTextRange { Text = service[0] };
    serviceName.TextFormat.CodeSpan = true;
    row.AddTableCell().Items.Add(serviceName);
    row.AddTableCell().Items.Add(new MdTextRange { Text = service[1] });
    row.AddTableCell().Items.Add(new MdTextRange { Text = service[2] });
}

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

## Parsing Existing Tables

### Read Table Structure
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdTable table)
    {
        Console.WriteLine($"Table with {table.Rows.Count} rows");
        
        foreach (MdTableRow row in table.Rows)
        {
            Console.WriteLine($"Row with {row.Cells.Count} cells:");
            foreach (MdTableCell cell in row.Cells)
            {
                string cellText = GetCellText(cell);
                Console.WriteLine($"  - {cellText}");
            }
        }
    }
}

string GetCellText(MdTableCell cell)
{
    StringBuilder text = new StringBuilder();
    foreach (IMdInline inline in cell.Items)
    {
        if (inline is MdTextRange tr)
            text.Append(tr.Text);
    }
    return text.ToString();
}
```

### Extract Table Data
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdTable table)
    {
        // Extract as 2D array
        string[][] data = new string[table.Rows.Count][];
        
        for (int i = 0; i < table.Rows.Count; i++)
        {
            MdTableRow row = table.Rows[i];
            data[i] = new string[row.Cells.Count];
            
            for (int j = 0; j < row.Cells.Count; j++)
            {
                data[i][j] = GetCellText(row.Cells[j]);
            }
        }
        
        // Process data
        Console.WriteLine("Headers: " + string.Join(", ", data[0]));
        for (int i = 1; i < data.Length; i++)
        {
            Console.WriteLine("Row " + i + ": " + string.Join(", ", data[i]));
        }
    }
}
```

### Filter Table Rows
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdTable table && table.Rows.Count > 1)
    {
        // Get header
        MdTableRow header = table.Rows[0];
        
        // Filter data rows (skip header)
        for (int i = 1; i < table.Rows.Count; i++)
        {
            MdTableRow row = table.Rows[i];
            string firstCell = GetCellText(row.Cells[0]);
            
            if (firstCell.Contains("Important"))
            {
                Console.WriteLine("Found important row: " + firstCell);
            }
        }
    }
}
```

## Modifying Tables

### Add Row to Existing Table
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdTable table)
    {
        // Add new row
        MdTableRow newRow = table.AddTableRow();
        newRow.AddTableCell().Items.Add(new MdTextRange { Text = "New Item" });
        newRow.AddTableCell().Items.Add(new MdTextRange { Text = "New Value" });
    }
}

string modified = doc.GetMarkdownText();
```

### Update Cell Content
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdTable table)
    {
        // Update specific cell (row 1, column 1)
        if (table.Rows.Count > 1 && table.Rows[1].Cells.Count > 1)
        {
            MdTableCell cell = table.Rows[1].Cells[1];
            cell.Items.Clear();
            cell.Items.Add(new MdTextRange { Text = "Updated Value" });
        }
    }
}

string modified = doc.GetMarkdownText();
```

// Change Column Alignment
```csharp
foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdTable table && table.Rows.Count > 0)
    {
        // Change all columns to center alignment by setting table.ColumnAlignments
        var alignments = new List<MdColumnAlignment>();
        for (int i = 0; i < table.Rows[0].Cells.Count; i++)
            alignments.Add(MdColumnAlignment.Center);
        table.ColumnAlignments = alignments;
    }
}
```

## Complex Table Example

### Technical Specification Table
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 1");
title.AddTextRange().Text = "Technical Specifications";

// Description
MdParagraph desc = doc.AddParagraph();
desc.AddTextRange().Text = "Detailed component specifications:";

// Specifications table
MdTable table = doc.AddTable();

// Header
MdTableRow header = table.AddTableRow();
header.AddTableCell().Items.Add(new MdTextRange { Text = "Component" });
header.AddTableCell().Items.Add(new MdTextRange { Text = "Specification" });
header.AddTableCell().Items.Add(new MdTextRange { Text = "Status" });
header.AddTableCell().Items.Add(new MdTextRange { Text = "Version" });

// CPU row
MdTableRow cpuRow = table.AddTableRow();
var cpu = new MdTextRange { Text = "CPU" };
cpu.TextFormat.Bold = true;
cpuRow.AddTableCell().Items.Add(cpu);
cpuRow.AddTableCell().Items.Add(new MdTextRange { Text = "Intel Core i7-12700K" });
cpuRow.AddTableCell().Items.Add(new MdTextRange { Text = "✅ Active" });
cpuRow.AddTableCell().Items.Add(new MdTextRange { Text = "12th Gen" });

// Memory row
MdTableRow memRow = table.AddTableRow();
var mem = new MdTextRange { Text = "Memory" };
mem.TextFormat.Bold = true;
memRow.AddTableCell().Items.Add(mem);
memRow.AddTableCell().Items.Add(new MdTextRange { Text = "32GB DDR5-5600" });
memRow.AddTableCell().Items.Add(new MdTextRange { Text = "✅ Active" });
memRow.AddTableCell().Items.Add(new MdTextRange { Text = "5.0" });

// Storage row
MdTableRow storRow = table.AddTableRow();
var stor = new MdTextRange { Text = "Storage" };
stor.TextFormat.Bold = true;
storRow.AddTableCell().Items.Add(stor);
storRow.AddTableCell().Items.Add(new MdTextRange { Text = "2TB NVMe SSD" });
storRow.AddTableCell().Items.Add(new MdTextRange { Text = "✅ Active" });
storRow.AddTableCell().Items.Add(new MdTextRange { Text = "Gen 4" });

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

## Table with Links

### Reference Table
```csharp
MarkdownDocument doc = new MarkdownDocument();
MdTable table = doc.AddTable();

// Header
MdTableRow header = table.AddTableRow();
header.AddTableCell().Items.Add(new MdTextRange { Text = "Resource" });
header.AddTableCell().Items.Add(new MdTextRange { Text = "Link" });
header.AddTableCell().Items.Add(new MdTextRange { Text = "Description" });

// Documentation link
MdTableRow row1 = table.AddTableRow();
row1.AddTableCell().Items.Add(new MdTextRange { Text = "API Docs" });
var link1 = new MdHyperlink { DisplayText = "View Docs", Url = "https://example.com/api" };
row1.AddTableCell().Items.Add(link1);
row1.AddTableCell().Items.Add(new MdTextRange { Text = "Complete API reference" });

// GitHub link
MdTableRow row2 = table.AddTableRow();
row2.AddTableCell().Items.Add(new MdTextRange { Text = "Source Code" });
var link2 = new MdHyperlink { DisplayText = "GitHub", Url = "https://github.com/example/repo" };
row2.AddTableCell().Items.Add(link2);
row2.AddTableCell().Items.Add(new MdTextRange { Text = "Open source repository" });

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

## HTML Conversion

Tables are converted to HTML:
```html
<table>
  <thead>
    <tr>
      <th align="left">Header 1</th>
      <th align="center">Header 2</th>
      <th align="right">Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">Data 1</td>
      <td align="center">Data 2</td>
      <td align="right">Data 3</td>
    </tr>
  </tbody>
</table>
```

## Best Practices

1. **Consistent Columns**: Ensure all rows have the same number of cells
2. **Header Row**: First row should be headers with appropriate alignment
3. **Alignment**: Set alignment via `MdTable.ColumnAlignments` (applies to entire column)
4. **Cell Content**: Keep cell content concise
5. **Formatting**: Use inline formatting (bold, code) sparingly
6. **Empty Cells**: Use empty strings for blank cells
7. **Table Width**: Limit columns to 5-6 for readability

## Limitations

- Markdown tables don't support merged cells (rowspan/colspan)
- No native support for cell borders or colors
- Limited to rectangular structure (all rows must have same cell count)
- Some renderers require consistent column counts
- Alignment applies to entire column (set on header cells)

## Troubleshooting

- **Misaligned columns**: Ensure all rows have equal cell count
- **Alignment not working**: Set column alignments via `MdTable.ColumnAlignments`, not on cells
- **Empty table**: Verify rows and cells are added correctly
- **Formatting issues**: Check inline content (text ranges, links) in cells
- **Parse errors**: Ensure source markdown has valid table syntax

## Common Mistakes

```csharp
// ❌ Wrong: Inconsistent cell count
MdTableRow header = table.AddTableRow();
header.AddTableCell().Items.Add(new MdTextRange { Text = "A" });
header.AddTableCell().Items.Add(new MdTextRange { Text = "B" });

MdTableRow data = table.AddTableRow();
data.AddTableCell().Items.Add(new MdTextRange { Text = "Value" }); // Missing second cell

// ✅ Correct: Matching cell count
MdTableRow header = table.AddTableRow();
header.AddTableCell().Items.Add(new MdTextRange { Text = "A" });
header.AddTableCell().Items.Add(new MdTextRange { Text = "B" });

MdTableRow data = table.AddTableRow();
data.AddTableCell().Items.Add(new MdTextRange { Text = "Value 1" });
data.AddTableCell().Items.Add(new MdTextRange { Text = "Value 2" });

// ❌ Wrong: Setting alignment on data row
MdTableRow data = table.AddTableRow();
// data.Cells[0].CellAlignment = MdHorizontalAlignment.Right; // Won't work — use `MdTable.ColumnAlignments`

// ✅ Correct: Set column alignments on the table
MdTable table = doc.AddTable();
table.ColumnAlignments = new List<MdColumnAlignment> { MdColumnAlignment.Right };
```