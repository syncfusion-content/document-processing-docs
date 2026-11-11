# Advanced Filtering Operations - AutoFilters, Custom, Dynamic, Color, and Icon Filters

> Advanced filtering operations — apply Top10 filters, custom filters with conditions, combination filters (text and datetime), dynamic filters, color filters, icon filters, and advanced filters with criteria ranges using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## Apply Top10 Filter

### Minimal Code
```csharp
worksheet.AutoFilters.FilterRange = worksheet.Range["A1:A10"];
IAutoFilter filter = worksheet.AutoFilters[0];
filter.IsTop = true;
filter.IsTop10 = true;
filter.Top10Number = 5;
```

### Top 10 Values
```csharp
worksheet.AutoFilters.FilterRange = worksheet.Range["A1:E50"];
IAutoFilter filter = worksheet.AutoFilters[0];
filter.IsTop = true;
filter.IsTop10 = true;
filter.Top10Number = 10;
```

### Placeholders
- `worksheet.Range["A1:A10"]` → Replace with `"{filter-range}"`
- `worksheet.AutoFilters[0]` → First column in filter
- `filter.Top10Number = 5` → Replace with `{number}` (top N rows)

---

## Custom Filter - First and Second Condition

### Minimal Code
```csharp
worksheet.AutoFilters.FilterRange = worksheet.Range["A1:A11"];
IAutoFilter filter = worksheet.AutoFilters[0];
IAutoFilterCondition firstCondition = filter.FirstCondition;
firstCondition.ConditionOperator = ExcelFilterCondition.Greater;
firstCondition.Double = 100;
```

### Custom Filter with Two Conditions
```csharp
IAutoFilterCondition secondCondition = filter.SecondCondition;
secondCondition.ConditionOperator = ExcelFilterCondition.Less;
secondCondition.Double = 200;
```

### Placeholders
- `ExcelFilterCondition.Greater` → Replace with condition (Greater, Less, Equal, NotEqual, etc.)
- `firstCondition.Double = 100` → Replace with `{comparison-value}`

---

## Custom Filter - Condition Operators

### Minimal Code
```csharp
firstCondition.ConditionOperator = ExcelFilterCondition.Greater;
```

### Available Operators
```csharp
ExcelFilterCondition.Equal              // =
ExcelFilterCondition.NotEqual           // !=
ExcelFilterCondition.Greater            // >
ExcelFilterCondition.Less               // <
ExcelFilterCondition.GreaterOrEqual     // >=
ExcelFilterCondition.LessOrEqual        // <=
ExcelFilterCondition.BeginsWith         // Text starts with
ExcelFilterCondition.EndsWith           // Text ends with
ExcelFilterCondition.Contains           // Text contains
ExcelFilterCondition.NotContains        // Text does not contain
```

### Placeholders
- `ExcelFilterCondition.*` → Choose appropriate operator

---

## Combination Filter - Text Filter

### Minimal Code
```csharp
worksheet.AutoFilters.FilterRange = worksheet.Range["A1:B22"];
IAutoFilter filter = worksheet.AutoFilters[0];
filter.AddTextFilter(new string[] { "London", "Ireland", "Canada" });
```

### Add Multiple Text Values
```csharp
filter.AddTextFilter(new string[] { "New York", "Los Angeles", "Chicago" });
```

### Placeholders
- `new string[] { "London", "Ireland", "Canada" }` → Replace with array of text values

---

## Combination Filter - DateTime Filter

### Minimal Code
```csharp
IAutoFilter filter = worksheet.AutoFilters[1];
filter.AddDateFilter(2020, 11, 27, 0, 0, 0, DateTimeGroupingType.minute);
```

### Add Date Filter by Day
```csharp
filter.AddDateFilter(2024, 1, 15, 0, 0, 0, DateTimeGroupingType.day);
```

### Placeholders
- `2020, 11, 27` → Replace with `{year}, {month}, {day}`
- `0, 0, 0` → Replace with `{hours}, {minutes}, {seconds}`
- `DateTimeGroupingType.minute` → Replace with grouping type (day, month, year, minute, second, etc.)

---

## Dynamic Filter - Relative Date Filter

### Minimal Code
```csharp
worksheet.AutoFilters.FilterRange = worksheet.Range["A1:A13"];
IAutoFilter filter = worksheet.AutoFilters[0];
filter.AddDynamicFilter(DynamicFilterType.NextQuarter);
```

### Dynamic Filter Types
```csharp
DynamicFilterType.NextQuarter       // Next quarter from today
DynamicFilterType.LastQuarter       // Last quarter
DynamicFilterType.NextMonth         // Next month
DynamicFilterType.LastMonth         // Last month
DynamicFilterType.NextYear          // Next year
DynamicFilterType.LastYear          // Last year
DynamicFilterType.Q1                // First quarter
DynamicFilterType.Q2                // Second quarter
DynamicFilterType.Q3                // Third quarter
DynamicFilterType.Q4                // Fourth quarter
DynamicFilterType.NextWeek          // Next week
DynamicFilterType.LastWeek          // Last week
DynamicFilterType.Today             // Today
DynamicFilterType.Tomorrow          // Tomorrow
DynamicFilterType.Yesterday         // Yesterday
```

### Placeholders
- `DynamicFilterType.NextQuarter` → Replace with appropriate `DynamicFilterType`

---

## Color Filter - Cell Color

### Minimal Code
```csharp
worksheet.AutoFilters.FilterRange = worksheet.Range["A1:A11"];
IAutoFilter filter = worksheet.AutoFilters[0];
filter.AddColorFilter(Syncfusion.Drawing.Color.Red, ExcelColorFilterType.CellColor);
```

### Filter by Cell Background Color
```csharp
filter.AddColorFilter(Syncfusion.Drawing.Color.Yellow, ExcelColorFilterType.CellColor);
```

### Placeholders
- `Syncfusion.Drawing.Color.Red` → Replace with desired color
- `ExcelColorFilterType.CellColor` → Keep for cell background color

---

## Color Filter - Font Color

### Minimal Code
```csharp
worksheet.AutoFilters.FilterRange = worksheet.Range["A1:A11"];
IAutoFilter filter = worksheet.AutoFilters[0];
filter.AddColorFilter(Syncfusion.Drawing.Color.Red, ExcelColorFilterType.FontColor);
```

### Filter by Font Color
```csharp
filter.AddColorFilter(Syncfusion.Drawing.Color.Blue, ExcelColorFilterType.FontColor);
```

### Placeholders
- `Syncfusion.Drawing.Color.Red` → Replace with desired font color
- `ExcelColorFilterType.FontColor` → Keep for font color filtering

---

## Icon Filter - Icon Set Type

### Minimal Code
```csharp
worksheet.AutoFilters.FilterRange = worksheet.Range["A1:A8"];
IAutoFilter filter = worksheet.AutoFilters[0];
filter.AddIconFilter(ExcelIconSetType.ThreeFlags, 2);
```

### Filter by Icon
```csharp
filter.AddIconFilter(ExcelIconSetType.ThreeTrafficLights, 1);
```

### Placeholders
- `ExcelIconSetType.ThreeFlags` → Replace with icon set type
- `2` → Replace with `{icon-id}` (1-based index of icon)

---

## Advanced Filter - Filter in Place

### Minimal Code
```csharp
IRange filterRange = worksheet.Range["A8:G51"];
IRange criteriaRange = worksheet.Range["A2:B5"];
worksheet.AdvancedFilter(ExcelFilterAction.FilterInPlace, filterRange, criteriaRange, null, false);
```

### Filter Data Without Copying
```csharp
IRange dataRange = worksheet.Range["A1:D100"];
IRange criteria = worksheet.Range["F1:F2"];
worksheet.AdvancedFilter(ExcelFilterAction.FilterInPlace, dataRange, criteria, null, false);
```

### Placeholders
- `ExcelFilterAction.FilterInPlace` → Keep for in-place filtering
- `filterRange` → Data range to filter
- `criteriaRange` → Range containing filter criteria
- `null` → No copy destination
- `false` → Do not filter unique records only

---

## Advanced Filter - Filter and Copy

### Minimal Code
```csharp
IRange filterRange = worksheet.Range["A8:G51"];
IRange criteriaRange = worksheet.Range["A2:B5"];
IRange copyToRange = worksheet.Range["I8"];
worksheet.AdvancedFilter(ExcelFilterAction.FilterCopy, filterRange, criteriaRange, copyToRange, true);
```

### Copy Filtered Results to New Location
```csharp
IRange sourceData = worksheet.Range["A1:E50"];
IRange criteria = worksheet.Range["G1:G3"];
IRange destination = worksheet.Range["A60"];
worksheet.AdvancedFilter(ExcelFilterAction.FilterCopy, sourceData, criteria, destination, false);
```

### Placeholders
- `ExcelFilterAction.FilterCopy` → Keep for copy action
- `copyToRange` → Destination range where filtered data is copied
- `true` → Include unique values only (remove duplicates)

---

## Accessing Filter - Get Filter Type

### Minimal Code
```csharp
IAutoFilter filter = worksheet.AutoFilters[0];
switch (filter.FilterType)
{
    case ExcelFilterType.CombinationFilter:
        CombinationFilter filterItems = (filter.FilteredItems as CombinationFilter);
        break;
    case ExcelFilterType.DynamicFilter:
        DynamicFilter dateFilter = (filter.FilteredItems as DynamicFilter);
        break;
    case ExcelFilterType.CustomFilter:
        IAutoFilterCondition firstCondition = filter.FirstCondition;
        break;
}
```

### Get Color Filter Information
```csharp
case ExcelFilterType.ColorFilter:
    ColorFilter colorFilter = (filter.FilteredItems as ColorFilter);
    Syncfusion.Drawing.Color color = colorFilter.Color;
    ExcelColorFilterType filterType = colorFilter.ColorFilterType;
    break;
```

### Placeholders
- `ExcelFilterType.*` → Filter type to access
- `filter.FilteredItems` → Cast to appropriate filter type

---

## Accessing Filter - Get Icon Filter Information

### Minimal Code
```csharp
case ExcelFilterType.IconFilter:
    IconFilter iconFilter = (filter.FilteredItems as IconFilter);
    int iconId = iconFilter.IconId;
    ExcelIconSetType iconSetType = iconFilter.IconSetType;
    break;
```

### Get Icon Details
```csharp
ExcelIconSetType icon = iconFilter.IconSetType;
int id = iconFilter.IconId;
```

### Placeholders
- `iconFilter.IconId` → Returns icon identifier
- `iconFilter.IconSetType` → Returns icon set type

---

## Sort Data with Filters

### Minimal Code
```csharp
ISortFields sortFieldsCollection = worksheet.AutoFilters.DataSorter.SortFields;
List<ISortField> sortFields = new List<ISortField>();
for (int i = 0; i < sortFieldsCollection.Count; i++)
{
    sortFields.Add(sortFieldsCollection[i]);
}
```

### Remove and Re-apply Sort
```csharp
foreach (ISortField sortField in sortFields)
{
    worksheet.AutoFilters.DataSorter.SortFields.Remove(sortField);
}
IDataSort sorter = worksheet.AutoFilters.DataSorter;
sorter.SortRange = worksheet.UsedRange;
sorter.SortFields.Add(0, SortOn.Values, OrderBy.Ascending);
sorter.Sort();
```

### Placeholders
- `worksheet.AutoFilters.DataSorter` → Access sorter through filtered range
- `sorter.SortFields.Add()` → Add sort criteria
- `OrderBy.Ascending` → Replace with sorting direction

---


