# Mail Merge

> Data-driven document generation — simple field merge, merge with regions, images, and nested merge.

---

## Required common usings

```csharp
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
```

## Required usings for Windows-Specific

```csharp
using System;
using System.IO;
```

## Simple Field Mail Merge

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
// Open a template with merge fields, or create fields programmatically
var doc = new WordDocument();
var section = doc.AddSection();

// Add a paragraph with merge field
var para = section.AddParagraph();
para.AppendText("Dear ");
para.AppendField("FirstName", FieldType.FieldMergeField);
para.AppendText(", welcome to ");
para.AppendField("Company", FieldType.FieldMergeField);
para.AppendText("!");

// Define field names and values
var fieldNames = new[] { "FirstName", "Company" };
var fieldValues = new[] { "Alice", "Contoso" };

// Execute mail merge
doc.MailMerge.Execute(fieldNames, fieldValues);
doc.Close();
```

### Placeholders
- `"FirstName"`, `"Company"` → Replace with `"{field-name}"`
- `"Alice"`, `"Contoso"` → Replace with `"{field-value}"`

---

## Mail Merge with Group (Repeated Regions)

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
var section = doc.AddSection();

// Title
var title = section.AddParagraph();
title.AppendText("Employee Report");
title.ApplyStyle(BuiltinStyle.Heading1);

// Create a table for the merge region
var table = section.AddTable();
table.ResetCells(2, 3);

// Header row
table.Rows[0].Cells[0].AddParagraph().AppendText("Name");
table.Rows[0].Cells[1].AddParagraph().AppendText("Department");
table.Rows[0].Cells[2].AddParagraph().AppendText("Location");

// Add BeginGroup field before the first merge field.
var firstMergeFieldCell = table.Rows[1].Cells[0];
var beginGroup = table.Rows[1].Cells[0].AddParagraph();
beginGroup.AppendField("BeginGroup:Employees", FieldType.FieldMergeField);

// Template row with merge fields (this row will be repeated)
var nameCell = table.Rows[1].Cells[0].AddParagraph();
nameCell.AppendField("Name", FieldType.FieldMergeField);

var deptCell = table.Rows[1].Cells[1].AddParagraph();
deptCell.AppendField("Department", FieldType.FieldMergeField);

var locCell = table.Rows[1].Cells[2].AddParagraph();
locCell.AppendField("Location", FieldType.FieldMergeField);

// Add EndGroup field after the last merge field.
var lastMergeFieldCell = table.Rows[1].Cells[2];
var endGroup = table.Rows[1].Cells[2].AddParagraph();
endGroup.AppendField("EndGroup:Employees", FieldType.FieldMergeField);

// Create a DataTable with data
var dt = new System.Data.DataTable("Employees");
dt.Columns.Add("Name");
dt.Columns.Add("Department");
dt.Columns.Add("Location");
dt.Rows.Add("Alice", "Engineering", "New York");
dt.Rows.Add("Bob", "Marketing", "London");
dt.Rows.Add("Charlie", "Sales", "Tokyo");

// Execute mail merge with group
doc.MailMerge.ExecuteGroup(dt);
doc.Close();
```

### Placeholders
- `"Employees"` → Replace with `"{group-name}"`
- Column names → Replace with actual field names

---

## Mail Merge with Arrays (No DataTable)

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
var section = doc.AddSection();

var para = section.AddParagraph();
para.AppendText("Invoice for ");
para.AppendField("CustomerName", FieldType.FieldMergeField);
section.AddParagraph();

var details = section.AddParagraph();
details.AppendText("Order #: ");
details.AppendField("OrderNumber", FieldType.FieldMergeField);
section.AddParagraph();

var amount = section.AddParagraph();
amount.AppendText("Total: ");
amount.AppendField("TotalAmount", FieldType.FieldMergeField);

// Execute with string arrays
doc.MailMerge.Execute(
    new[] { "CustomerName", "OrderNumber", "TotalAmount" },
    new[] { "Contoso Ltd.", "INV-2026-001", "$1,250.00" }
);
doc.Close();
```

---

## Mail Merge from Template File

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
// Open an existing template document with merge fields
var templatePath = Path.Combine(Directory.GetCurrentDirectory(), "input", "{template-file}.docx");
// Cross-Platform
var doc = new WordDocument(templatePath, FormatType.Docx);
// Windows-Specific
var doc = new WordDocument(templatePath);
// Execute merge with field names and values
doc.MailMerge.Execute(
    new[] { "Date", "RecipientName", "Subject" },
    new[] { "March 5, 2026", "John Smith", "Monthly Report" }
);

// Save as a new document
var outputPath = Path.Combine(Directory.GetCurrentDirectory(), "output", "{filename}.docx");
doc.Save(outputPath);
doc.Close();
```

### Placeholders
- `"{template-file}.docx"` → Replace with actual template filename
- `"{filename}.docx"` → Replace with output filename

---

## Mail Merge Events (Custom Formatting)

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
// Subscribe to MergeField event for custom processing
 doc.MailMerge.MergeField += (sender, args) =>
 {
     if (string.Equals(args.FieldName, "TotalAmount", StringComparison.OrdinalIgnoreCase))
     {
         // Optionally format the value before inserting.
         if (args.FieldValue != null && decimal.TryParse(args.FieldValue.ToString(), out var amount))
             args.Text = amount.ToString("#,##0.00");

         args.TextRange.CharacterFormat.Bold = true;
         args.TextRange.CharacterFormat.TextColor = Color.DarkBlue;
     }
      
     // Conditional formatting based on row index
     if (args.RowIndex % 2 == 0)
     {
         args.CharacterFormat.Italic = true;
     }

     // Conditional logic based on group
     if (string.Equals(args.GroupName, "Orders", StringComparison.OrdinalIgnoreCase))
     {
         args.CharacterFormat.FontName = "Calibri";
     }
 };

 doc.MailMerge.Execute(fieldNames, fieldValues);
```

---

## Nested Mail Merge

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
var section = doc.AddSection();

// Create merge fields
section.AddParagraph().AppendField("BeginGroup:ProductList", FieldType.FieldMergeField);
IWParagraph para = section.AddParagraph();
para.AppendText("Product: ");
para.AppendField("ProductName", FieldType.FieldMergeField);
// Child group → Customers
section.AddParagraph().AppendField("BeginGroup:Customers", FieldType.FieldMergeField);
para = section.AddParagraph();
para.AppendText("Customer ID: ");
para.AppendField("CustomerId", FieldType.FieldMergeField);
para = section.AddParagraph();
para.AppendText("Customer Name: ");
para.AppendField("CustomerName", FieldType.FieldMergeField);
section.AddParagraph().AppendField("EndGroup:Customers", FieldType.FieldMergeField);
// End parent group
section.AddParagraph().AppendField("EndGroup:ProductList", FieldType.FieldMergeField);

// Nested mail merge requires a relational DataSet
var dataSet = new System.Data.DataSet();
// Customers (child)
var customers = new DataTable("Customers");
customers.Columns.Add("CustomerId");
customers.Columns.Add("CustomerName");
customers.Columns.Add("ProductName");
customers.Rows.Add("1001", "Diego Roel", "Essential DocIO");
customers.Rows.Add("1002", "Maria Larsson", "Essential DocIO");
customers.Rows.Add("1003", "Pedro Afonso", "Essential XlsIO");
customers.Rows.Add("1009", "Bernardo Batista", "Essential PDF");
// ProductList (parent)
var products = new DataTable("ProductList");
products.Columns.Add("ProductName");
products.Rows.Add("Essential DocIO");
products.Rows.Add("Essential XlsIO");
products.Rows.Add("Essential PDF");
// Add to DataSet
dataSet.Tables.Add(products);
dataSet.Tables.Add(customers);
var commands = new ArrayList
{
    new DictionaryEntry("ProductList", ""),
    new DictionaryEntry("Customers", "ProductName = %ProductList.ProductName%")
};

// Execute nested mail merge
doc.MailMerge.ExecuteNestedGroup(dataSet, commands);
doc.Close();
```

---

## Mail Merge with DataTable

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
var section = doc.AddSection();

// Add merge fields
var para = section.AddParagraph();
para.AppendField("Name", FieldType.FieldMergeField);
section.AddParagraph().AppendField("Email", FieldType.FieldMergeField);
section.AddParagraph().AppendField("Phone", FieldType.FieldMergeField);

// Create DataTable
var dt = new System.Data.DataTable();
dt.Columns.Add("Name");
dt.Columns.Add("Email");
dt.Columns.Add("Phone");
dt.Rows.Add("John Doe", "john@example.com", "555-0001");
dt.Rows.Add("Jane Smith", "jane@example.com", "555-0002");

// Execute with DataTable
doc.MailMerge.Execute(dt);
doc.Close();
```

---

## Mail Merge with DataRow

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
var section = doc.AddSection();

// Add merge fields
var para = section.AddParagraph();
para.AppendField("Name", FieldType.FieldMergeField);
section.AddParagraph().AppendField("Email", FieldType.FieldMergeField);
section.AddParagraph().AppendField("Phone", FieldType.FieldMergeField);

// Create DataTable
var dt = new System.Data.DataTable();
dt.Columns.Add("Name");
dt.Columns.Add("Email");
dt.Columns.Add("Phone");
dt.Rows.Add("John Doe", "john@example.com", "555-0001");
dt.Rows.Add("Jane Smith", "jane@example.com", "555-0002");

// Execute with single DataRow
DataRow row = dt.Rows[0];
doc.MailMerge.Execute(row);
doc.Close();
```

---

## Mail Merge with Dynamic Objects

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
// Create dynamic data source
dynamic obj = new ExpandoObject();
obj.Title = "Invoice";
obj.InvoiceID = "INV-2026-001";
obj.Amount = "$5,000.00";

var doc = new WordDocument();
var section = doc.AddSection();

section.AddParagraph().AppendField("Title", FieldType.FieldMergeField);
section.AddParagraph().AppendField("InvoiceID", FieldType.FieldMergeField);
section.AddParagraph().AppendField("Amount", FieldType.FieldMergeField);

// Execute with dynamic object
doc.MailMerge.Execute(new[] { obj });
doc.Close();
```

---

## Mail Merge with Business Objects

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
// Define business object class
public class Employee
{
    public string Name { get; set; }
    public string Position { get; set; }
    public string Department { get; set; }
}

// Create list of business objects
var employees = new List<Employee>
{
    new() { Name = "Alice", Position = "Manager", Department = "HR" },
    new() { Name = "Bob", Position = "Developer", Department = "IT" }
};

var doc = new WordDocument();
var section = doc.AddSection();

// Add merge fields matching property names
section.AddParagraph().AppendField("Name", FieldType.FieldMergeField);
section.AddParagraph().AppendField("Position", FieldType.FieldMergeField);
section.AddParagraph().AppendField("Department", FieldType.FieldMergeField);

// Execute with business object collection
doc.MailMerge.Execute(employees);
doc.Close();
```

---

## Mail Merge with DataView

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
// Create and filter DataTable
var dt = new System.Data.DataTable();
dt.Columns.Add("Name");
dt.Columns.Add("Status");
dt.Rows.Add("Alice", "Active");
dt.Rows.Add("Bob", "Inactive");
dt.Rows.Add("Charlie", "Active");

// Create filtered DataView
var dv = new System.Data.DataView(dt, "Status='Active'", "Name", System.Data.DataViewRowState.CurrentRows);

var doc = new WordDocument();
var section = doc.AddSection();

section.AddParagraph().AppendField("Name", FieldType.FieldMergeField);
section.AddParagraph().AppendField("Status", FieldType.FieldMergeField);

// Execute with DataView
doc.MailMerge.Execute(dv);
doc.Close();
```

---

## Mail Merge with XML

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
// Create XML-based DataSet
var xmlPath = Path.Combine(Directory.GetCurrentDirectory(), "input", "data.xml");
var dataSet = new System.Data.DataSet();
dataSet.ReadXml(xmlPath);

var doc = new WordDocument();
var section = doc.AddSection();

section.AddParagraph().AppendField("ProductName", FieldType.FieldMergeField);
section.AddParagraph().AppendField("Price", FieldType.FieldMergeField);

// Execute with DataSet from XML
doc.MailMerge.ExecuteGroup(dataSet.Tables[0]);
doc.Close();
```

---

## Mail Merge with MailMergeDataTable 

### Group Mail Merge

#### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
var section = doc.AddSection();
// Add merge fields
section.AddParagraph().AppendField("BeginGroup:Employees", FieldType.FieldMergeField);
section.AddParagraph().AppendField("Name", FieldType.FieldMergeField);
section.AddParagraph().AppendField("EndGroup:Employees", FieldType.FieldMergeField);
// Create data source (List of objects)
var employees = new List<dynamic>
{
    new { Name = "Alice" },
    new { Name = "Bob" }
};
// Convert to MailMergeDataTable
var dataTable = new MailMergeDataTable("Employees", employees);
// Execute group mail merge
doc.MailMerge.ExecuteGroup(dataTable);
doc.Close();

```

### Nested Group Mail Merge

#### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
var section = doc.AddSection();
// Parent group
section.AddParagraph().AppendField("BeginGroup:Orders", FieldType.FieldMergeField);
section.AddParagraph().AppendField("OrderID", FieldType.FieldMergeField);
// Child group
section.AddParagraph().AppendField("BeginGroup:Items", FieldType.FieldMergeField);
section.AddParagraph().AppendField("Product", FieldType.FieldMergeField);
section.AddParagraph().AppendField("EndGroup:Items", FieldType.FieldMergeField);
// End parent group
section.AddParagraph().AppendField("EndGroup:Orders", FieldType.FieldMergeField);
// Create nested data
var orders = new List<dynamic>
{
    new {
        OrderID = "ORD-001",
        Items = new List<dynamic>
        {
            new { Product = "Laptop" },
            new { Product = "Mouse" }
        }
    },
    new {
        OrderID = "ORD-002",
        Items = new List<dynamic>
        {
            new { Product = "Keyboard" }
        }
    }
};
// Convert to MailMergeDataTable
var dataTable = new MailMergeDataTable("Orders", orders);
//Execute nested group mail merge
doc.MailMerge.ExecuteNestedGroup(dataTable);
doc.Close();
```

---

## Mail Merge with JSON

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
using System.Text.Json;

// Parse JSON
var jsonPath = Path.Combine(Directory.GetCurrentDirectory(), "input", "data.json");
var jsonContent = File.ReadAllText(jsonPath);
var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
var jsonData = JsonSerializer.Deserialize<List<Dictionary<string, object>>>(jsonContent, options);

var doc = new WordDocument();
var section = doc.AddSection();

section.AddParagraph().AppendField("FirstName", FieldType.FieldMergeField);
section.AddParagraph().AppendField("LastName", FieldType.FieldMergeField);

// Convert to DataTable and execute
var dt = new System.Data.DataTable();
if (jsonData?.Count > 0)
{
    foreach (var key in jsonData[0].Keys)
        dt.Columns.Add(key);
    
    foreach (var item in jsonData)
        dt.Rows.Add(item.Values.ToArray());
}

doc.MailMerge.Execute(dt);
doc.Close();
```

---

## Mail Merge Image Field (Image:FieldName)

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
var section = doc.AddSection();

// Add image merge field with "Image:" prefix
var para = section.AddParagraph();
para.AppendText("Photo: ");
para.AppendField("Image:Photo", FieldType.FieldMergeField);

var fieldNames = new[] { "Image:Photo" };
var imagePath = Path.Combine(Directory.GetCurrentDirectory(), "input", "photo.jpg");
var fieldValues = new string[] { imagePath };

// Execute mail merge with image
doc.MailMerge.Execute(fieldNames, fieldValues);
doc.Close();
```

---

## MergeImageField Event

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
// Subscribe to MergeImageField event for custom image processing
doc.MailMerge.MergeImageField += (sender, args) =>
{
   if (args.FieldName == "Logo")
    {
        string ProductFileName = args.FieldValue.ToString();
```
#### Cross-Platform
```csharp
        FileStream imageStream = new FileStream(ProductFileName, FileMode.Open, FileAccess.Read);
        args.ImageStream = imageStream;
```
#### Windows-Specific
```csharp
       args.Image = Image.FromFile(ProductFileName);
```
#### Common for Cross-Platform and Windows-Specific
```csharp
        WPicture picture = args.Picture;
        //Resizes the picture
        picture.Height = 50;
        picture.Width = 150;
    }
};

// Execute mail merge
doc.MailMerge.Execute(fieldNames, fieldValues);
```

---

## BeforeClearField and BeforeClearGroupField Events

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
// Handle unmerged fields
doc.MailMerge.ClearFields = false;
doc.MailMerge.BeforeClearField += (sender, args) =>
{
    string groupName = args.GroupName;
    // Check if field has mapping in data source
    if (args.HasMappedFieldInDataSource)
    {
        // If field value is null or empty, set error message or default value
        if (args.FieldValue == null || args.FieldValue == DBNull.Value)
        {
            args.FieldValue = "Error! Field " + args.FieldName + " is Null.";
        }
        else
            args.ClearField = true; // Clear if empty value exists
    }
    else
    {
        // Field not found in data source
        args.FieldValue = "Error! Field " + args.FieldName + " not found in data source.";
    }
};

// Handle unmerged group fields
doc.MailMerge.BeforeClearGroupField += (sender, args) =>
{
    //Access all field names inside the group
    string[] fieldNames = args.FieldNames;
    if (!args.HasMappedGroupInDataSource)
    {
        // Group not found in data source
        string groupName = args.GroupName;
        // Optionally provide alternate data or clear group
        args.ClearGroup = true; // Remove group if no data
    }
};

doc.MailMerge.ExecuteGroup(GetDataTable());
```

---

## Field Mapping (Automatic)

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var dataSet = new System.Data.DataSet();
var table = new System.Data.DataTable("Employees");
table.Columns.Add("FirstName"); // Column name != merge field name
table.Columns.Add("LastName");
table.Rows.Add("John", "Doe");

dataSet.Tables.Add(table);

// Map data columns to merge field names
doc.MailMerge.MappedFields.Add("FirstName", "Name");
doc.MailMerge.MappedFields.Add("LastName", "Surname");

// Execute with field mapping
doc.MailMerge.ExecuteGroup(table);
doc.Close();
```

---

## Retrieve Merge Field Names

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var templatePath = Path.Combine(Directory.GetCurrentDirectory(), "input", "template.docx");
var doc = new WordDocument(templatePath, FormatType.Docx);

// Get all merge field names
var fieldNames = doc.MailMerge.GetMergeFieldNames();
Console.WriteLine($"Merge Fields: {string.Join(", ", fieldNames)}");

// Get merge group field names
var groupNames = doc.MailMerge.GetMergeGroupNames();
Console.WriteLine($"Group Fields: {string.Join(", ", groupNames)}");

doc.Close();
```

---

## Remove Empty Paragraphs

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
var section = doc.AddSection();

section.AddParagraph().AppendField("OptionalField", FieldType.FieldMergeField);

// Enable removal of empty paragraphs when field has no data
doc.MailMerge.RemoveEmptyParagraphs = true;

doc.MailMerge.Execute(
    new[] { "OptionalField" },
    new[] { "" } // Empty value
);

doc.Close();
```

---

## Clear Fields Option

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
var section = doc.AddSection();

section.AddParagraph().AppendField("Field1", FieldType.FieldMergeField);
section.AddParagraph().AppendField("Field2", FieldType.FieldMergeField);

// Control unmerged field removal
doc.MailMerge.ClearFields = true;  // Remove unmerged fields (default)
doc.MailMerge.ClearFields = false; // Keep unmerged fields in output

doc.MailMerge.Execute(
    new[] { "Field1" },
    new[] { "Value1" }
);

doc.Close();
```

---

## Insert Each Record as a New Row

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
var section = doc.AddSection();

// Create table (2 rows, 1 column)
var table = section.AddTable();
table.ResetCells(2, 1);

// Header row
table.Rows[0].Cells[0].AddParagraph().AppendText("Word Version");

// Template row (single cell required)
var para = table.Rows[1].Cells[0].AddParagraph();
para.AppendField("BeginGroup:Versions", FieldType.FieldMergeField);
para.AppendField("WordVersion", FieldType.FieldMergeField);
para.AppendField("EndGroup:Versions", FieldType.FieldMergeField);

// Create data source
var data = new DataTable("Versions");
data.Columns.Add("WordVersion");
data.Rows.Add("Word 2010");
data.Rows.Add("Word 2013");
data.Rows.Add("Word 2019");

// Enable option
doc.MailMerge.InsertAsNewRow = true;
// Execute group mail merge
doc.MailMerge.ExecuteGroup(data);
doc.Close();
```

---

## Start Each Record on a New Page

### Minimal Code

#### Common for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
var section = doc.AddSection();

// Create merge fields in body (NOT table)
var para = section.AddParagraph();
para.AppendField("BeginGroup:Employees", FieldType.FieldMergeField);
para.AppendText("Name: ");
para.AppendField("Name", FieldType.FieldMergeField);
para.AppendField("EndGroup:Employees", FieldType.FieldMergeField);

// Create data source
var data = new DataTable("Employees");
data.Columns.Add("Name");
data.Rows.Add("Alice");
data.Rows.Add("Bob");
data.Rows.Add("Charlie");

// Enable option
doc.MailMerge.StartAtNewPage = true;

// Execute group mail merge
doc.MailMerge.ExecuteGroup(data);

doc.Close();

```

---

## Mail Merge Settings (MailMergeSettings)

## Remove the Mail Merge Settings

### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("template.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);
// Access MailMergeSettings
var settings = doc.MailMerge.Settings;
//Check if document has mail merge settings
bool hasData = settings.HasData;
//Remove mail merge settings
if (settings.HasData)
    settings.RemoveData();
doc.Close();
```

## Change Mail Merge Data Source Path

### Common for Cross-Platform and Windows-Specific
```csharp
var stream = new FileStream("template.docx", FileMode.Open, FileAccess.Read);
var doc = new WordDocument(stream, FormatType.Docx);
//Access MailMergeSettings
var settings = doc.MailMerge.Settings;
//DataSource (file path of merge data)
settings.DataSource = "NewDataSource.txt";
doc.Close();
```