# Advanced Data Import Operations

> Advanced import operations — HTML tables, XML data, arrays, collection objects, nested collections, DataColumn, DataView, and grid controls using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`, `System.Data`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## HTML Table to Excel

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.ImportHtmlTable(Path.GetFullPath("Data/table.html"), 1, 1);
```

### With Custom Start Position
```csharp
// Import HTML table starting at row 3, column B
sheet.ImportHtmlTable("input.html", 3, 2);
```

### Placeholders
- `"Data/table.html"` → Replace with `"{html-file-path}"`
- `1, 1` → Replace with `"{start-row}`, `"{start-column}"`

---

## HTML Table with Formula to Excel

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet.ImportHtmlTable("table.html", 1, 1, HtmlImportOptions.DetectFormulas);
```

### With Formatting
```csharp
// Import HTML with formula detection and formatting
sheet.ImportHtmlTable("template.html", 2, 1, HtmlImportOptions.DetectFormulas);
```

### Placeholders
- `HtmlImportOptions.DetectFormulas` → Detects and imports formulas from HTML

---

## Import Array to Excel

### Minimal Code
```csharp
object[] array = new object[4] { "Income", "Expense", "Profit", "Loss" };
sheet.ImportArray(array, 1, 1, false);
```

### Multi-Dimensional Array
```csharp
object[,] data = new object[3, 2] { { "Name", "Age" }, { "Alice", 30 }, { "Bob", 25 } };
sheet.ImportArray(data, 1, 1, false);
```

### Placeholders
- `array` → Replace with `"{object-array}"`
- `false` → Replace with `"{transpose-array}"` (true to rotate)

---

## Import DataColumn to Excel

### Minimal Code
```csharp
DataTable dt = new DataTable();
dt.Columns.Add("Employees", typeof(string));
DataColumn column = dt.Columns[0];

sheet.ImportDataColumn(column, true, 1, 1);
```

### From Existing DataTable
```csharp
DataTable dt = GetDataTable(); // Returns populated DataTable
DataColumn column = dt.Columns["EmployeeName"];

sheet.ImportDataColumn(column, true, 1, 1); // With header
```

### Placeholders
- `column` → Replace with `"{data-column}"`

---

## Import DataView to Excel

### Minimal Code
```csharp
DataTable dt = new DataTable();
// ... populate DataTable
DataView view = dt.DefaultView;

sheet.ImportDataView(view, true, 1, 1);
```

### With Row Filters
```csharp
DataTable dt = GetDataTable();
DataView view = new DataView(dt);
view.RowFilter = "Salary > 50000";

sheet.ImportDataView(view, true, 1, 1); // Only high earners
```

### Placeholders
- `view` → Replace with `"{data-view}"`

---

## Import Collection Objects to Excel

### Minimal Code
```csharp
IList<Customer> customers = GetCustomers();
sheet.ImportData(customers, 2, 1, false);
```

### With Display Names
```csharp
// Uses [DisplayNameAttribute("Custom Header")]
IList<Employee> employees = GetEmployees();
sheet.ImportData(employees, 1, 1, true); // true = include headers
```

### Placeholders
- `customers` → Replace with `"{collection-objects}"`
- `2, 1` → Replace with `"{start-row}`, `"{start-column}"`

---

## Import Collection Objects with ExcelImportDataOptions

### Minimal Code
```csharp
ExcelImportDataOptions options = new ExcelImportDataOptions();
options.FirstRow = 2;
options.FirstColumn = 1;
options.IncludeHeader = true;
options.PreserveTypes = true;

sheet.ImportData(GetCustomers(), options);
```

### Configuration Options
```csharp
ExcelImportDataOptions options = new ExcelImportDataOptions();
options.FirstRow = 3;           // Start at row 3
options.FirstColumn = 2;        // Start at column B
options.IncludeHeader = false;  // Skip headers
options.PreserveTypes = true;   // Maintain data types

sheet.ImportData(GetSalesData(), options);
```

---

## Import Nested Collection Objects (Default Layout)

### Minimal Code
```csharp
IList<Brand> vehicles = GetVehicleDetails(); // Hierarchical data

ExcelImportDataOptions options = new ExcelImportDataOptions();
options.NestedDataLayoutOptions = ExcelNestedDataLayoutOptions.Default;
options.IncludeHeader = true;

sheet.ImportData(vehicles, options);
```

### Layout Options
```csharp
// Default - Property value once per object
options.NestedDataLayoutOptions = ExcelNestedDataLayoutOptions.Default;

// Merge - Parent records in merged rows
options.NestedDataLayoutOptions = ExcelNestedDataLayoutOptions.Merge;

// Repeat - Parent records in all rows
options.NestedDataLayoutOptions = ExcelNestedDataLayoutOptions.Repeat;
```

---

## Import Nested Collection with Grouping (Collapse)

### Minimal Code
```csharp
IList<Brand> vehicles = GetVehicleDetails();

ExcelImportDataOptions options = new ExcelImportDataOptions();
options.NestedDataLayoutOptions = ExcelNestedDataLayoutOptions.Default;
options.NestedDataGroupOptions = ExcelNestedDataGroupOptions.Collapse;
options.CollapseLevel = 2; // Collapse at level 2

sheet.ImportData(vehicles, options);
```

### Grouping Options
```csharp
// Expand - Imported data grouped and expanded
options.NestedDataGroupOptions = ExcelNestedDataGroupOptions.Expand;

// Collapse - Grouped and collapsed at first level
options.NestedDataGroupOptions = ExcelNestedDataGroupOptions.Collapse;
options.CollapseLevel = 2; // Collapse level (1-8)
```

---

## Import Collection Objects with Hyperlinks

### Minimal Code
```csharp
// Company class with Hyperlink property (implements IHyperLink)
IList<Company> companies = GetCompanies();
sheet.ImportData(companies, 2, 1, false);
```

### With Images and URLs
```csharp
// Hyperlink class implements IHyperLink interface
public class Hyperlink : IHyperLink
{
    public string Address { get; set; }
    public string TextToDisplay { get; set; }
    public ExcelHyperLinkType Type { get; set; }
    public byte[] Image { get; set; }
}

// Import collection with embedded hyperlinks
sheet.ImportData(GetCompaniesWithLinks(), 1, 1, true);
```

---

## Import XML Data to Excel

### Minimal Code
```csharp
FileStream stream = new FileStream("data.xml", FileMode.Open, FileAccess.Read);
sheet.ImportXml(stream, 1, 6);
stream.Dispose();
```

### From XML File Path
```csharp
using (FileStream stream = new FileStream("Data/XmlFile.xml", FileMode.Open, FileAccess.Read))
{
    sheet.ImportXml(stream, 1, 1); // Start at A1
}
```

### Placeholders
- `1, 6` → Replace with `"{start-row}`, `"{start-column}"`

---

## Add XML Maps to Excel Workbook

### Minimal Code
```csharp
FileStream stream = new FileStream("schema.xml", FileMode.Open, FileAccess.Read);
workbook.XmlMaps.Add(stream);
stream.Dispose();
```

### Multiple XML Maps
```csharp
// Add schema for data validation and mapping
using (FileStream stream = new FileStream("Data/XmlFile.xml", FileMode.Open, FileAccess.Read))
{
    workbook.XmlMaps.Add(stream);
}
```

---

## Import from DataGrid Control (Windows Forms)

### Minimal Code
```csharp
DataGrid dataGrid = GetDataGrid(); // From UI control
IWorksheet sheet = workbook.Worksheets[0];

// XlsIO formats the grid data including headers and styling
sheet.ImportDataGrid(dataGrid, 1, 1);
```

### Note
> Supported only in Windows Forms and WPF platforms

---

## Import from GridView Control (ASP.NET)

### Minimal Code
```csharp
GridView gridView = GetGridView(); // From ASP.NET page
IWorksheet sheet = workbook.Worksheets[0];

sheet.ImportGridView(gridView, 1, 1);
```

### Note
> Supported only in ASP.NET and ASP.NET MVC platforms

---

## Import from DataGridView Control (Windows Forms)

### Minimal Code
```csharp
DataGridView dataGridView = GetDataGridView(); // From UI control
IWorksheet sheet = workbook.Worksheets[0];

// Includes sorted data applied in the control
sheet.ImportDataGridView(dataGridView, 1, 1);
```

### Includes Sorting
```csharp
DataGridView dgv = GetDataGridView();

// Import preserves sorting applied in control
sheet.ImportDataGridView(dgv, 1, 1);
```

### Note
> Supported only in Windows Forms and WPF platforms
