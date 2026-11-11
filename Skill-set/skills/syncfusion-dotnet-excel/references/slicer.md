# Excel Slicer

> Create and manage table slicers to enable UI-based filtering for easy data selection using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## Access Slicers Collection

### Minimal Code
```csharp
ISlicers slicers = worksheet.Slicers;
```

### Placeholders
- `worksheet` → Replace with `{worksheet-object}`

---

## Create Slicer

### Important: Return Type and Parameter Order
The `Slicers.Add()` method returns **`int`** (the slicer index), **NOT** `ISlicer`. Always capture the return value and access the slicer from the collection using the returned index.

### Correct Method Signature
```csharp
int slicerIndex = sheet.Slicers.Add(table, columnIndex, row, column);
ISlicer slicer = sheet.Slicers[slicerIndex];
```

### Parameter Description
- **Parameter 1** (table): The IListObject (table) to attach the slicer to
- **Parameter 2** (columnIndex): Column index in the table (1-based) that the slicer will filter
- **Parameter 3** (row): Starting row position where the slicer will be placed on the sheet
- **Parameter 4** (column): Starting column position where the slicer will be placed on the sheet

### Minimal Code
```csharp
IListObject table = worksheet.ListObjects[0];

// Step 1: Add() returns an int index
int slicerIndex = sheet.Slicers.Add(table, 2, 8, 1);

// Step 2: Access the slicer from the collection using the index
ISlicer slicer = sheet.Slicers[slicerIndex];
```

---

## Common Error: Direct Assignment to ISlicer

### ❌ WRONG - Type Mismatch
```csharp
// This will cause CS0029 compilation error
ISlicer slicer = sheet.Slicers.Add(table, 2, 8, 1);
```

### ✅ CORRECT - Capture Index First
```csharp
// Step 1: Capture the int index returned by Add()
int slicerIndex = sheet.Slicers.Add(table, 2, 8, 1);

// Step 2: Access ISlicer from collection using the index
ISlicer slicer = sheet.Slicers[slicerIndex];
```

---

## Creating a Slicer for Specific Columns (Recommended Pattern)

### Example: Table with WorkID, Assignee, Status
```csharp
IListObject table = worksheet.ListObjects[0];  // Table with 3 columns

// Slicer for column 2 (Assignee), placed at row 8, column 1
int assigneeSlicerIdx = sheet.Slicers.Add(table, 2, 8, 1);
ISlicer assigneeSlicer = sheet.Slicers[assigneeSlicerIdx];
assigneeSlicer.Name = "AssigneeSlicer";
assigneeSlicer.Caption = "Filter by Assignee";
assigneeSlicer.DisplayHeader = true;

// Slicer for column 3 (Status), placed at row 14, column 1
int statusSlicerIdx = sheet.Slicers.Add(table, 3, 14, 1);
ISlicer statusSlicer = sheet.Slicers[statusSlicerIdx];
statusSlicer.Name = "StatusSlicer";
statusSlicer.Caption = "Filter by Status";
statusSlicer.DisplayHeader = true;
```

---

## Slicer Name

### Get Slicer Name
```csharp
ISlicer slicer = sheet.Slicers[0];
string name = slicer.Name;
```

### Set Slicer Name
```csharp
ISlicer slicer = sheet.Slicers[0];
slicer.Name = "Slicer1";
```

---

## Slicer Caption

### Set Caption
```csharp
ISlicer slicer = sheet.Slicers[0];
slicer.Caption = "Select any value";
```

---

## Position Slicer

### Set Top Position
```csharp
ISlicer slicer = sheet.Slicers[0];
slicer.Top = 100;
```

### Set Left Position
```csharp
ISlicer slicer = sheet.Slicers[0];
slicer.Left = 300;
```

---

## Resize Slicer

### Set Height
```csharp
ISlicer slicer = sheet.Slicers[0];
slicer.Height = 200;
```

### Set Width
```csharp
ISlicer slicer = sheet.Slicers[0];
slicer.Width = 150;
```

---

## Slicer Item Size

### Set Item Height
```csharp
ISlicer slicer = sheet.Slicers[0];
slicer.SlicerItemHeight = 0.4;
```

### Set Item Width
```csharp
ISlicer slicer = sheet.Slicers[0];
slicer.SlicerItemWidth = 80;
```

---

## Slicer Columns

### Set Number of Columns
```csharp
ISlicer slicer = sheet.Slicers[0];
slicer.NumberOfColumns = 2;
```

---

## Slicer Header

### Show/Hide Header
```csharp
ISlicer slicer = sheet.Slicers[0];
slicer.DisplayHeader = true;
```

---

## Slicer Style

### Apply Style
```csharp
ISlicer slicer = sheet.Slicers[0];
slicer.SlicerStyle = ExcelSlicerStyle.SlicerStyleDark2;
```

### Available Styles
- SlicerStyleLight1 through SlicerStyleLight6
- SlicerStyleDark1 through SlicerStyleDark6

---

## Select Slicer Items

### Access Slicer Cache
```csharp
ISlicer slicer = sheet.Slicers[0];
ISlicerCache cache = slicer.SlicerCache;
```

### Select Item
```csharp
ISlicerCache cache = slicer.SlicerCache;
cache.SlicerCacheItems[0].IsSelected = true;
```

### Select Multiple Items
```csharp
ISlicerCache cache = slicer.SlicerCache;
cache.SlicerCacheItems[0].IsSelected = true;
cache.SlicerCacheItems[1].IsSelected = true;
```

---

## Slicer Filter Type

### Set Cross Filter Type
```csharp
ISlicerCache cache = slicer.SlicerCache;
cache.CrossFilterType = SlicerCrossFilterType.ShowItemsWithDataAtTop;
```

### Available Filter Types
- ShowItemsWithDataAtTop
- ShowItemsWithNoData

---

## Sort Slicer Items

### Sort Ascending
```csharp
ISlicerCache cache = slicer.SlicerCache;
cache.IsAscending = true;
```

### Sort Descending
```csharp
ISlicerCache cache = slicer.SlicerCache;
cache.IsAscending = false;
```

---

## Custom List Sorting

### Enable Custom Sorting
```csharp
ISlicerCache cache = slicer.SlicerCache;
cache.UseCustomListSorting = true;
```

---

## Complete Slicer Example

### Create and Format Slicer
```csharp
IListObject table = sheet.ListObjects[0];

// Step 1: Create slicer and capture the returned index
int slicerIndex = sheet.Slicers.Add(table, 2, 8, 1);

// Step 2: Access the slicer from the collection
ISlicer slicer = sheet.Slicers[slicerIndex];

// Step 3: Configure the slicer properties
slicer.Name = "Slicer1";
slicer.Caption = "Select any value";
slicer.Top = 100;
slicer.Left = 300;
slicer.Height = 200;
slicer.Width = 150;
slicer.NumberOfColumns = 2;
slicer.DisplayHeader = true;
slicer.SlicerStyle = ExcelSlicerStyle.SlicerStyleDark2;
```

### Create Multiple Slicers for Different Columns (Full Example)
```csharp
IListObject table = sheet.ListObjects[0];  // Table with 3 columns: WorkID, Assignee, Status

// Slicer for column 2 (Assignee)
int assigneeSlicerIdx = sheet.Slicers.Add(table, 2, 8, 1);
ISlicer assigneeSlicer = sheet.Slicers[assigneeSlicerIdx];
assigneeSlicer.Name = "AssigneeSlicer";
assigneeSlicer.Caption = "Filter by Assignee";
assigneeSlicer.DisplayHeader = true;
assigneeSlicer.NumberOfColumns = 1;
assigneeSlicer.SlicerStyle = ExcelSlicerStyle.SlicerStyleLight3;

// Slicer for column 3 (Status)
int statusSlicerIdx = sheet.Slicers.Add(table, 3, 14, 1);
ISlicer statusSlicer = sheet.Slicers[statusSlicerIdx];
statusSlicer.Name = "StatusSlicer";
statusSlicer.Caption = "Filter by Status";
statusSlicer.DisplayHeader = true;
statusSlicer.NumberOfColumns = 1;
statusSlicer.SlicerStyle = ExcelSlicerStyle.SlicerStyleLight3;
```

---

## Slicer Item Access

### Get All Slicer Items
```csharp
ISlicerCache cache = slicer.SlicerCache;
int itemCount = cache.SlicerCacheItems.Count;
```

### Access Item Properties
```csharp
ISlicerCacheItem item = cache.SlicerCacheItems[0];
bool isSelected = item.IsSelected;
```

---

## Important Notes

### Column Index (1-based)
The `columnIndex` parameter is **1-based** and refers to the column position within the table:
- Column 1 = First column
- Column 2 = Second column
- Column 3 = Third column

### Position Parameters (row, column)
The `row` and `column` parameters define where the slicer shape will be placed on the worksheet, not which column to filter. Use `columnIndex` (2nd parameter) to specify the table column to filter.

### Return Value vs Type
- `Slicers.Add()` returns `int` (the slicer index in the collection), NOT `ISlicer`
- Always capture the return value in an `int` variable
- Access the slicer using `sheet.Slicers[slicerIndex]`

---

## Limitations

### Slicer Support
- Slicers require XLSX format
- Can only be created for table objects (IListObject)
- Requires Excel 2010 or later for full compatibility
- The `columnIndex` must be a valid column in the table (1-based, between 1 and table column count)
