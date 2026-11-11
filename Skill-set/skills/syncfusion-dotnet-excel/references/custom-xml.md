# Custom XML Support

> Add and read custom XML parts in Excel workbooks to store arbitrary XML data using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`, `System.Text`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## Access Custom XML Collection

### Minimal Code
```csharp
ICustomXmlPartCollection customXmlParts = workbook.CustomXmlparts;
```

---

## Create Custom XML Part

### Minimal Code
```csharp
ICustomXmlPart customXmlPart = workbook.CustomXmlparts.Add("SD10003");
```

### Parameters
- `"SD10003"` → Unique identifier for the custom XML part

---

## Add XML Data to Custom XML Part

### Minimal Code
```csharp
ICustomXmlPart customXmlPart = workbook.CustomXmlparts.Add("SD10003");
byte[] xmlData = File.ReadAllBytes(Path.GetFullPath("data.xml"));
customXmlPart.Data = xmlData;
```

### From String
```csharp
ICustomXmlPart customXmlPart = workbook.CustomXmlparts.Add("SD10003");
string xmlContent = "<root><item>Value</item></root>";
customXmlPart.Data = System.Text.Encoding.Default.GetBytes(xmlContent);
```

---

## Read Custom XML Part by ID

### Minimal Code
```csharp
ICustomXmlPart customXmlPart = workbook.CustomXmlparts.GetById("SD10003");
```

---

## Get XML Data from Custom XML Part

### Minimal Code
```csharp
ICustomXmlPart customXmlPart = workbook.CustomXmlparts.GetById("SD10003");
byte[] xmlData = customXmlPart.Data;
string xmlString = System.Text.Encoding.Default.GetString(xmlData);
```

---

## Access Custom XML Part by Index

### Minimal Code
```csharp
ICustomXmlPart customXmlPart = workbook.CustomXmlparts[0];
Console.WriteLine(customXmlPart.Data);
```

---

## Get Custom XML Part Count

### Minimal Code
```csharp
int count = workbook.CustomXmlparts.Count;
Console.WriteLine($"Custom XML parts: {count}");
```

---

## Iterate Through All Custom XML Parts

### Minimal Code
```csharp
foreach (ICustomXmlPart part in workbook.CustomXmlparts)
{
    byte[] data = part.Data;
    string xml = System.Text.Encoding.Default.GetString(data);
    Console.WriteLine(xml);
}
```

---

## Update Custom XML Data

### Minimal Code
```csharp
ICustomXmlPart customXmlPart = workbook.CustomXmlparts.GetById("SD10003");
string newXmlContent = "<root><updated>New Value</updated></root>";
customXmlPart.Data = System.Text.Encoding.Default.GetBytes(newXmlContent);
```

---

## Save Workbook with Custom XML

### Minimal Code
```csharp
// Must save as XLSX format
workbook.SaveAs(Path.GetFullPath("output/custom-xml.xlsx"));
```

### Note
- XLSX format: Custom XML fully supported
- XLS format: Custom XML cannot be modified

---

## Complete Custom XML Example

```csharp
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    // Create custom XML part
    ICustomXmlPart customXmlPart = workbook.CustomXmlparts.Add("SD10001");

    // Add XML data
    string xmlContent = @"
    <root>
        <employee>
            <name>John</name>
            <salary>75000</salary>
        </employee>
        <employee>
            <name>Jane</name>
            <salary>85000</salary>
        </employee>
    </root>";
    customXmlPart.Data = System.Text.Encoding.Default.GetBytes(xmlContent);

    // Add second custom XML part
    ICustomXmlPart customXmlPart2 = workbook.CustomXmlparts.Add("SD10002");
    string xmlContent2 = "<metadata><version>1.0</version></metadata>";
    customXmlPart2.Data = System.Text.Encoding.Default.GetBytes(xmlContent2);

    // Save workbook
    workbook.SaveAs(Path.GetFullPath("output/custom-xml.xlsx"));
}
```

---

## Reading Custom XML from Existing File

```csharp
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("custom-xml.xlsx");

    // Read first custom XML part
    ICustomXmlPart part1 = workbook.CustomXmlparts.GetById("SD10001");
    string xml1 = System.Text.Encoding.Default.GetString(part1.Data);
    Console.WriteLine(xml1);

    // Read second custom XML part
    ICustomXmlPart part2 = workbook.CustomXmlparts.GetById("SD10002");
    string xml2 = System.Text.Encoding.Default.GetString(part2.Data);
    Console.WriteLine(xml2);
}
```

---

## Limitations

```csharp
// Custom XML Format Support:
// - XLSX format: Full support (create, read, modify)
// - XLS format: Cannot be created or modified
// - XLSM format: Full support
// - XLTX/XLTM: Full support
```

---

## Use Cases

- Store metadata in workbooks
- Embed configuration data in Excel files
- Store application-specific data with spreadsheets
- Exchange structured data with other systems
- Preserve custom properties and settings
