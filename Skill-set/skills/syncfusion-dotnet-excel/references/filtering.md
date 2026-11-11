# Filter Data in Excel Worksheets

> Filter Excel worksheet data using AutoFilters — apply custom filters, text/date filters, dynamic filters, color filters, icon filters, and advanced filtering with Syncfusion XlsIO.

---

> **Required usings:** `Syncfusion.XlsIO`, `System`, `System.Collections.Generic`, `System.Drawing` (for color filters)
> **Filter Types Supported:** Custom Filter, Text Filter, DateTime Filter, Dynamic Filter, Color Filter, Icon Filter, Top10 Filter, Advanced Filter

---

## Apply AutoFilter to a Range

Enable AutoFilter on a worksheet range to add filter dropdown buttons to the header row. Set the `FilterRange` property on the worksheet's `AutoFilters` collection.

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
// Set the filter range on the worksheet AutoFilters
worksheet.AutoFilters.FilterRange = worksheet.Range["A1:D10"];
```

### Disable AutoFilter
```csharp
// Remove the filter range to disable AutoFilter
worksheet.AutoFilters.FilterRange = null;
```

---

## Text Filter (Combination Filter)

Filter a column to show only rows with specific text values using `AddTextFilter()`.

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.AutoFilters.FilterRange = worksheet.Range["A1:B22"];

IAutoFilter filter = worksheet.AutoFilters[0]; // column A (0-based index)
filter.AddTextFilter(new string[] { "London", "Ireland", "Canada" });
```

### Single Text Filter
```csharp
// Show only "Sales" in column A
IAutoFilter filter = worksheet.AutoFilters[0];
filter.AddTextFilter(new string[] { "Sales" });
```

### Multiple Text Filters (OR)
```csharp
// Show "Sales" OR "Marketing" in column A
IAutoFilter filter = worksheet.AutoFilters[0];
filter.AddTextFilter(new string[] { "Sales", "Marketing" });
```

---

## Custom Filter (Number Range)

Filter a column to show only rows with numbers within a specific range by setting conditions using `FirstCondition` and `SecondCondition`.

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.AutoFilters.FilterRange = worksheet.Range["A1:A11"];

IAutoFilter filter = worksheet.AutoFilters[0];
IAutoFilterCondition first = filter.FirstCondition;
first.ConditionOperator = ExcelFilterCondition.Greater;
first.Double = 100;
IAutoFilterCondition second = filter.SecondCondition;
second.ConditionOperator = ExcelFilterCondition.Less;
second.Double = 200;
```

### Filter Greater Than
```csharp
IAutoFilter filter = worksheet.AutoFilters[0];
filter.FirstCondition.ConditionOperator = ExcelFilterCondition.Greater;
filter.FirstCondition.Double = 100;
```

### Filter Less Than
```csharp
IAutoFilter filter = worksheet.AutoFilters[0];
filter.FirstCondition.ConditionOperator = ExcelFilterCondition.Less;
filter.FirstCondition.Double = 200;
```

---

## DateTime Filter (Combination Filter)

Filter a column to show only rows with dates within a specific range using `AddDateFilter()`.

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.AutoFilters.FilterRange = worksheet.Range["A1:B22"];

IAutoFilter dateFilter = worksheet.AutoFilters[1]; // column B
// Add a date filter with year, month, day, hour, minute, second, and grouping type
dateFilter.AddDateFilter(2020, 11, 27, 0, 0, 0, DateTimeGroupingType.minute);
```

### Current Year Filter
```csharp
int year = DateTime.Now.Year;
IAutoFilter dateFilter = worksheet.AutoFilters[1];
dateFilter.AddDateFilter(year, 1, 1, 0, 0, 0, DateTimeGroupingType.day);
```

### Dynamic Filter (Relative Dates)
```csharp
IAutoFilter dateFilter = worksheet.AutoFilters[1];
dateFilter.AddDynamicFilter(DynamicFilterType.NextQuarter);
```

---

## Filter with Multiple Criteria

Apply filters to multiple columns simultaneously (AND condition).

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.AutoFilters.FilterRange = worksheet.Range["A1:B22"];

// Text filter on column A: "London", "Ireland", "Canada"
IAutoFilter filter1 = worksheet.AutoFilters[0];
filter1.AddTextFilter(new string[] { "London", "Ireland", "Canada" });

// DateTime filter on column B
IAutoFilter filter2 = worksheet.AutoFilters[1];
filter2.AddDateFilter(2020, 11, 27, 0, 0, 0, DateTimeGroupingType.minute);
```

---

## Top10 Filter

Filter a column to show only the top N items based on numeric values.

### Top 5 Items
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.AutoFilters.FilterRange = worksheet.Range["A1:A10"];

IAutoFilter filter = worksheet.AutoFilters[0];
filter.IsTop = true;
filter.IsTop10 = true;
filter.Top10Number = 5;
```

### Top 10 Items
```csharp
IAutoFilter filter = worksheet.AutoFilters[0];
filter.IsTop = true;
filter.IsTop10 = true;
filter.Top10Number = 10;
```

---

## Color Filter

Filter a column based on cell fill color or font color.

### Cell Color Filter
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.AutoFilters.FilterRange = worksheet.Range["A1:A11"];

IAutoFilter filter = worksheet.AutoFilters[0];
filter.AddColorFilter(Syncfusion.Drawing.Color.Red, ExcelColorFilterType.CellColor);
```

### Font Color Filter
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.AutoFilters.FilterRange = worksheet.Range["A1:A11"];

IAutoFilter filter = worksheet.AutoFilters[0];
filter.AddColorFilter(Syncfusion.Drawing.Color.Red, ExcelColorFilterType.FontColor);
```

---

## Icon Filter

Filter a column based on conditional formatting icon sets.

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.AutoFilters.FilterRange = worksheet.Range["A1:A8"];

IAutoFilter filter = worksheet.AutoFilters[0];
// Filter based on ThreeFlags icon set, icon ID 2
filter.AddIconFilter(ExcelIconSetType.ThreeFlags, 2);
```

---

## Advanced Filter

Perform complex filtering with custom criteria range. Supports Filter in Place or Filter Copy actions, and optional unique records filtering.

### Filter in Place
```csharp
IWorksheet worksheet = workbook.Worksheets[0];

IRange filterRange = worksheet.Range["A8:G51"];
IRange criteriaRange = worksheet.Range["A2:B5"];

worksheet.AdvancedFilter(ExcelFilterAction.FilterInPlace, filterRange, criteriaRange, null, false);
```

### Filter Copy (with Unique Records)
```csharp
IWorksheet worksheet = workbook.Worksheets[0];

IRange filterRange = worksheet.Range["A8:G51"];
IRange criteriaRange = worksheet.Range["A2:B5"];
IRange copyToRange = worksheet.Range["I8"];

// Filter and copy to new location, removing duplicates
worksheet.AdvancedFilter(ExcelFilterAction.FilterCopy, filterRange, criteriaRange, copyToRange, true);
```

---

## Clear All Filters

Remove all filters by clearing the worksheet `AutoFilters.FilterRange`.

### Minimal Code
```csharp
// Remove filter range to clear all filters and disable AutoFilter
worksheet.AutoFilters.FilterRange = null;
```

---

## Custom Filter (Number Range)

Filter a column to show only rows with numbers within a specific range by setting conditions using `FirstCondition` and `SecondCondition`.

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.AutoFilters.FilterRange = worksheet.Range["A1:A11"];

IAutoFilter filter = worksheet.AutoFilters[0];
IAutoFilterCondition first = filter.FirstCondition;
first.ConditionOperator = ExcelFilterCondition.Greater;
first.Double = 100;
IAutoFilterCondition second = filter.SecondCondition;
second.ConditionOperator = ExcelFilterCondition.Less;
second.Double = 200;
```

### Filter Greater Than
```csharp
IAutoFilter filter = worksheet.AutoFilters[0];
filter.FirstCondition.ConditionOperator = ExcelFilterCondition.Greater;
filter.FirstCondition.Double = 100;
```

### Filter Less Than
```csharp
IAutoFilter filter = worksheet.AutoFilters[0];
filter.FirstCondition.ConditionOperator = ExcelFilterCondition.Less;
filter.FirstCondition.Double = 200;
```

---

## DateTime Filter (Combination Filter)

Filter a column to show only rows with dates within a specific range using `AddDateFilter()`.

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.AutoFilters.FilterRange = worksheet.Range["A1:B22"];

IAutoFilter dateFilter = worksheet.AutoFilters[1]; // column B
// Add a date filter with year, month, day, hour, minute, second, and grouping type
dateFilter.AddDateFilter(2020, 11, 27, 0, 0, 0, DateTimeGroupingType.minute);
```

### Current Year Filter
```csharp
int year = DateTime.Now.Year;
IAutoFilter dateFilter = worksheet.AutoFilters[1];
dateFilter.AddDateFilter(year, 1, 1, 0, 0, 0, DateTimeGroupingType.day);
```

### Dynamic Filter (Relative Dates)
```csharp
IAutoFilter dateFilter = worksheet.AutoFilters[1];
dateFilter.AddDynamicFilter(DynamicFilterType.NextQuarter);
```

---

## Filter with Multiple Criteria

Apply filters to multiple columns simultaneously (AND condition).

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.AutoFilters.FilterRange = worksheet.Range["A1:B22"];

// Text filter on column A: "London", "Ireland", "Canada"
IAutoFilter filter1 = worksheet.AutoFilters[0];
filter1.AddTextFilter(new string[] { "London", "Ireland", "Canada" });

// DateTime filter on column B
IAutoFilter filter2 = worksheet.AutoFilters[1];
filter2.AddDateFilter(2020, 11, 27, 0, 0, 0, DateTimeGroupingType.minute);
```

---

## Top10 Filter

Filter a column to show only the top N items based on numeric values.

### Top 5 Items
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.AutoFilters.FilterRange = worksheet.Range["A1:A10"];

IAutoFilter filter = worksheet.AutoFilters[0];
filter.IsTop = true;
filter.IsTop10 = true;
filter.Top10Number = 5;
```

### Top 10 Items
```csharp
IAutoFilter filter = worksheet.AutoFilters[0];
filter.IsTop = true;
filter.IsTop10 = true;
filter.Top10Number = 10;
```

---

## Color Filter

Filter a column based on cell fill color or font color.

### Cell Color Filter
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.AutoFilters.FilterRange = worksheet.Range["A1:A11"];

IAutoFilter filter = worksheet.AutoFilters[0];
filter.AddColorFilter(Syncfusion.Drawing.Color.Red, ExcelColorFilterType.CellColor);
```

### Font Color Filter
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.AutoFilters.FilterRange = worksheet.Range["A1:A11"];

IAutoFilter filter = worksheet.AutoFilters[0];
filter.AddColorFilter(Syncfusion.Drawing.Color.Red, ExcelColorFilterType.FontColor);
```

---

## Icon Filter

Filter a column based on conditional formatting icon sets.

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.AutoFilters.FilterRange = worksheet.Range["A1:A8"];

IAutoFilter filter = worksheet.AutoFilters[0];
// Filter based on ThreeFlags icon set, icon ID 2
filter.AddIconFilter(ExcelIconSetType.ThreeFlags, 2);
```

---

## Advanced Filter

Perform complex filtering with custom criteria range. Supports Filter in Place or Filter Copy actions, and optional unique records filtering.

### Filter in Place
```csharp
IWorksheet worksheet = workbook.Worksheets[0];

IRange filterRange = worksheet.Range["A8:G51"];
IRange criteriaRange = worksheet.Range["A2:B5"];

worksheet.AdvancedFilter(ExcelFilterAction.FilterInPlace, filterRange, criteriaRange, null, false);
```

### Filter Copy (with Unique Records)
```csharp
IWorksheet worksheet = workbook.Worksheets[0];

IRange filterRange = worksheet.Range["A8:G51"];
IRange criteriaRange = worksheet.Range["A2:B5"];
IRange copyToRange = worksheet.Range["I8"];

// Filter and copy to new location, removing duplicates
worksheet.AdvancedFilter(ExcelFilterAction.FilterCopy, filterRange, criteriaRange, copyToRange, true);
```

---

## Clear All Filters

Remove all filters by clearing the worksheet `AutoFilters.FilterRange`.

### Minimal Code
```csharp
// Remove filter range to clear all filters and disable AutoFilter
worksheet.AutoFilters.FilterRange = null;
```

---

## Sorting Data with Filters

When AutoFilters are applied, use the `DataSorter` from `AutoFilters` rather than directly from the worksheet.

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.AutoFilters.FilterRange = worksheet.Range["A1:E100"];

// Access sort fields from AutoFilters
IDataSort sorter = worksheet.AutoFilters.DataSorter;
sorter.SortRange = worksheet.UsedRange;
sorter.SortFields.Add(0, SortOn.Values, OrderBy.Ascending);
sorter.Sort();
```

### Multiple Sort Fields
```csharp
IDataSort sorter = worksheet.AutoFilters.DataSorter;
sorter.SortRange = worksheet.UsedRange;
sorter.SortFields.Add(0, SortOn.Values, OrderBy.Ascending);
sorter.SortFields.Add(1, SortOn.Values, OrderBy.Descending);
sorter.Sort();
```

---

## Accessing Filter Information

Access filter details based on filter column index and filter type.

### Minimal Code
```csharp
IAutoFilter filter = worksheet.AutoFilters[0];

switch (filter.FilterType)
{
    case ExcelFilterType.CombinationFilter:
        CombinationFilter filterItems = (filter.FilteredItems as CombinationFilter);
        // Process text and date filter items
        break;

    case ExcelFilterType.CustomFilter:
        IAutoFilterCondition firstCondition = filter.FirstCondition;
        ExcelFilterDataType dataType = firstCondition.DataType;
        break;

    case ExcelFilterType.DynamicFilter:
        DynamicFilter dateFilter = (filter.FilteredItems as DynamicFilter);
        DynamicFilterType filterType = dateFilter.DateFilterType;
        break;

    case ExcelFilterType.ColorFilter:
        ColorFilter colorFilter = (filter.FilteredItems as ColorFilter);
        Syncfusion.Drawing.Color color = colorFilter.Color;
        ExcelColorFilterType filterType = colorFilter.ColorFilterType;
        break;

    case ExcelFilterType.IconFilter:
        IconFilter iconFilter = (filter.FilteredItems as IconFilter);
        int iconId = iconFilter.IconId;
        ExcelIconSetType iconSetType = iconFilter.IconSetType;
        break;
}
```

---

## Filter Type Reference

| Filter Type | Method | Use Case |
|---|---|---|
| **Text Filter** | `filter.AddTextFilter(new string[]{...})` | Filter by specific text values (OR logic) |
| **DateTime Filter** | `filter.AddDateFilter(year, month, day, hour, minute, second, groupingType)` | Filter by specific dates with grouping |
| **Dynamic Filter** | `filter.AddDynamicFilter(DynamicFilterType.*)` | Filter by relative dates (NextQuarter, LastWeek, etc.) |
| **Custom Filter** | `filter.FirstCondition.ConditionOperator` | Filter by numeric conditions (Greater, Less, Equal, etc.) |
| **Top10 Filter** | `filter.IsTop`, `filter.IsTop10`, `filter.Top10Number` | Filter top N items |
| **Color Filter** | `filter.AddColorFilter(color, colorFilterType)` | Filter by cell or font color |
| **Icon Filter** | `filter.AddIconFilter(iconSetType, iconId)` | Filter by conditional format icon |
| **Advanced Filter** | `worksheet.AdvancedFilter(action, range, criteria, copyTo, unique)` | Complex filtering with custom criteria |

---

## Condition Operators for Custom Filter

| Operator | Description |
|---|---|
| `Greater` | Greater than |
| `Less` | Less than |
| `GreaterOrEqual` | Greater than or equal |
| `LessOrEqual` | Less than or equal |
| `Equal` | Equal to |
| `NotEqual` | Not equal to |

---

## Dynamic Filter Types

| Type | Description |
|---|---|
| `NextQuarter` | Next quarter |
| `ThisQuarter` | This quarter |
| `LastQuarter` | Last quarter |
| `NextWeek` | Next week |
| `ThisWeek` | This week |
| `LastWeek` | Last week |
| `NextMonth` | Next month |
| `ThisMonth` | This month |
| `LastMonth` | Last month |
| `Above` | Values above average |
| `Below` | Values below average |

---

## Icon Set Types

| Type | Description |
|---|---|
| `ThreeArrows` | Three arrows |
| `ThreeArrowsGray` | Three gray arrows |
| `ThreeFlags` | Three flags |
| `ThreeTrafficLights1` | Three traffic lights (circles) |
| `ThreeTrafficLights2` | Three traffic lights (rounded) |
| `FourArrows` | Four arrows |
| `FourArrowsGray` | Four gray arrows |
| `FourTrafficLights` | Four traffic lights |
| `FiveArrows` | Five arrows |
| `FiveArrowsGray` | Five gray arrows |
| `FiveQuarters` | Five quarters |

---

## Common Scenarios

### Filter for Current Year Only
```csharp
sheet.AutoFilters.FilterRange = sheet["A1:E100"];
IAutoFilter dateFilter = sheet.AutoFilters[4];
int currentYear = DateTime.Now.Year;
dateFilter.AddDateFilter(currentYear, 1, 1, 0, 0, 0, DateTimeGroupingType.day);
```

### Filter for High-Value Items
```csharp
sheet.AutoFilters.FilterRange = sheet["A1:E100"];
IAutoFilter price = sheet.AutoFilters[3];
price.FirstCondition.ConditionOperator = ExcelFilterCondition.GreaterOrEqual;
price.FirstCondition.Double = 1000;
```

### Filter for Specific Categories
```csharp
sheet.AutoFilters.FilterRange = sheet["A1:E100"];
IAutoFilter categories = sheet.AutoFilters[1];
categories.AddTextFilter(new string[] { "Category A", "Category B" });
```

---

## Filter Limitations and Tips

1. **AutoFilter Header Row** — AutoFilter must include the header row; set the range to start from row 1
2. **Data Types** — Ensure column data types match filter criteria (text, numbers, dates)
3. **Empty Cells** — Filters can include/exclude empty cells; use appropriate criteria
4. **Case Sensitivity** — Text filters are typically case-insensitive
5. **Performance** — Filtering large datasets (100,000+ rows) may impact performance
6. **Visibility** — Filtering hides rows; they are not deleted and can be unhidden by clearing filters

| Criteria | Description | Usage |
|---|---|---|
| `BeginsWith` | Text begins with specific value | `filter.FirstCondition.ConditionOperator = ExcelFilterCondition.BeginsWith` |
| `EndsWith` | Text ends with specific value | `filter.FirstCondition.ConditionOperator = ExcelFilterCondition.EndsWith` |
| `Contains` | Text contains specific value | `filter.FirstCondition.ConditionOperator = ExcelFilterCondition.Contains` |
| `DoesNotContain` | Text does not contain value | `filter.FirstCondition.ConditionOperator = ExcelFilterCondition.DoesNotContain` |
| `Equal` | Exact match | `filter.FirstCondition.ConditionOperator = ExcelFilterCondition.Equal` |
| `NotEqual` | Does not match exactly | `filter.FirstCondition.ConditionOperator = ExcelFilterCondition.NotEqual` |
| `Greater` | Greater than value | `filter.FirstCondition.ConditionOperator = ExcelFilterCondition.Greater` |
| `Less` | Less than value | `filter.FirstCondition.ConditionOperator = ExcelFilterCondition.Less` |

---

## Filter Value Types

| Type | Example | Method |
|---|---|---|
| Text Values | "Sales", "Engineering" | `filter.AddTextFilter(...)` |
| Number Range | 50000 to 100000 | use `FirstCondition`/`SecondCondition` and `ExcelFilterCondition` |
| Date Range | 2024-01-01 to 2024-12-31 | `filter.AddDateFilter(...)` |
| Dynamic Filter | LastWeek, Quarter3 | `filter.AddDynamicFilter(...)` |

---

## Common Scenarios

### Filter for Current Year Only
```csharp
sheet.AutoFilters.FilterRange = sheet["A1:E100"];
IAutoFilter dateFilter = sheet.AutoFilters[4];
int currentYear = DateTime.Now.Year;
dateFilter.AddDateFilter(currentYear, 1, 1, 0, 0, 0, DateTimeGroupingType.day);
```

### Filter for High-Value Items
```csharp
sheet.AutoFilters.FilterRange = sheet["A1:E100"];
IAutoFilter price = sheet.AutoFilters[3];
price.FirstCondition.ConditionOperator = ExcelFilterCondition.GreaterOrEqual;
price.FirstCondition.Double = 1000;
```

### Filter for Specific Categories
```csharp
sheet.AutoFilters.FilterRange = sheet["A1:E100"];
IAutoFilter categories = sheet.AutoFilters[1];
categories.AddTextFilter(new string[] { "Category A", "Category B" });
```

---

## Filter Limitations and Tips

1. **AutoFilter Header Row** — AutoFilter must include the header row; set the range to start from row 1
2. **Data Types** — Ensure column data types match filter criteria (text, numbers, dates)
3. **Empty Cells** — Filters can include/exclude empty cells; use appropriate criteria
4. **Case Sensitivity** — Text filters are typically case-insensitive
5. **Performance** — Filtering large datasets (100,000+ rows) may impact performance
6. **Visibility** — Filtering hides rows; they are not deleted and can be unhidden by clearing filters

---

## Reference Links

- [Syncfusion XlsIO Documentation](https://help.syncfusion.com/document-processing/excel/overview)
- [AutoFilter API Reference](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IAutoFilter.html)
- [IAutoFilters (worksheet-level)](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IAutoFilters.html)
- [IAutoFilter](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IAutoFilter.html)
- [Syncfusion XlsIO Examples Repository](https://github.com/SyncfusionExamples/XlsIO-Examples)
