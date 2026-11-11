# Fill Series with Linear, Growth, DateTime, and Auto Fill

> Worksheet fill series operations — populate ranges with sequential values using defined direction, series type, step value, and stop value with Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## Linear Series by Columns

### Minimal Code
```csharp
IRange range = worksheet["A1:A100"];
range.FillSeries(ExcelSeriesBy.Columns, ExcelFillSeries.Linear, 1, 100);
```

### Fill Number Series with Step
```csharp
worksheet["A1"].Number = 1;
IRange range = worksheet["A1:A100"];
range.FillSeries(ExcelSeriesBy.Columns, ExcelFillSeries.Linear, 5, 1000);
```

### Placeholders
- `"A1:A100"` → Replace with `"{range-address}"` (range to fill)
- `1` → Replace with `"{step-value}"` (increment between values)
- `100` → Replace with `"{stop-value}"` (ending value)
- `Columns` → Replace with `Rows` for horizontal filling

---

## Linear Series by Rows

### Minimal Code
```csharp
IRange range = worksheet["A1:Z1"];
range.FillSeries(ExcelSeriesBy.Rows, ExcelFillSeries.Linear, 2, 50);
```

### Fill Horizontal Series
```csharp
worksheet["A1"].Number = 10;
IRange range = worksheet["A1:Z1"];
range.FillSeries(ExcelSeriesBy.Rows, ExcelFillSeries.Linear, 5, 100);
```

### Placeholders
- `"A1:Z1"` → Replace with `"{range-address}"` (row range)
- `Rows` → Keep for horizontal filling
- `2` → Replace with `"{step-value}"`
- `50` → Replace with `"{stop-value}"`

---

## Growth Series by Columns

### Minimal Code
```csharp
IRange range = worksheet["A1:A100"];
range.FillSeries(ExcelSeriesBy.Columns, ExcelFillSeries.Growth, 2, 100);
```

### Fill Exponential Growth Series
```csharp
worksheet["A1"].Number = 1;
IRange range = worksheet["A1:A100"];
range.FillSeries(ExcelSeriesBy.Columns, ExcelFillSeries.Growth, 2, 1000);
```

### Placeholders
- `"A1:A100"` → Replace with `"{range-address}"` (range to fill)
- `2` → Replace with `"{growth-factor}"` (multiplication factor)
- `100` → Replace with `"{stop-value}"` (ending value)
- `Columns` → Replace with `Rows` for horizontal filling

---

## Growth Series by Rows

### Minimal Code
```csharp
IRange range = worksheet["A1:Z1"];
range.FillSeries(ExcelSeriesBy.Rows, ExcelFillSeries.Growth, 2, 500);
```

### Fill Horizontal Exponential Series
```csharp
worksheet["A1"].Number = 2;
IRange range = worksheet["A1:Z1"];
range.FillSeries(ExcelSeriesBy.Rows, ExcelFillSeries.Growth, 3, 2000);
```

### Placeholders
- `"A1:Z1"` → Replace with `"{range-address}"` (row range)
- `Rows` → Keep for horizontal filling
- `2` → Replace with `"{growth-factor}"`
- `500` → Replace with `"{stop-value}"`

---

## DateTime Days Series

### Minimal Code
```csharp
IRange range = worksheet["A1:A100"];
range.FillSeries(ExcelSeriesBy.Columns, ExcelFillSeries.Days, 2, new DateTime(2026, 1, 1));
```

### Fill Date Series by Days
```csharp
worksheet["A1"].DateTime = new DateTime(2024, 1, 1);
IRange range = worksheet["A1:A50"];
range.FillSeries(ExcelSeriesBy.Columns, ExcelFillSeries.Days, 1, new DateTime(2024, 12, 31));
```

### Placeholders
- `"A1:A100"` → Replace with `"{range-address}"` (range to fill)
- `2` → Replace with `"{day-step}"` (days increment)
- `new DateTime(2026, 1, 1)` → Replace with `"{stop-date}"` (ending date)
- `Columns` → Replace with `Rows` for horizontal filling

---

## DateTime Weekdays Series

### Minimal Code
```csharp
IRange range = worksheet["A1:A100"];
range.FillSeries(ExcelSeriesBy.Columns, ExcelFillSeries.Weekdays, 1, new DateTime(2026, 12, 31));
```

### Fill Workday Series
```csharp
worksheet["A1"].DateTime = new DateTime(2024, 1, 1);
IRange range = worksheet["A1:A100"];
range.FillSeries(ExcelSeriesBy.Columns, ExcelFillSeries.Weekdays, 1, new DateTime(2024, 12, 31));
```

### Placeholders
- `"A1:A100"` → Replace with `"{range-address}"` (range to fill)
- `1` → Replace with `"{weekday-step}"` (weekday increment)
- `new DateTime(2026, 12, 31)` → Replace with `"{stop-date}"` (ending date)

---

## DateTime Months Series

### Minimal Code
```csharp
IRange range = worksheet["A1:A100"];
range.FillSeries(ExcelSeriesBy.Columns, ExcelFillSeries.Months, 1, new DateTime(2026, 12, 1));
```

### Fill Monthly Series
```csharp
worksheet["A1"].DateTime = new DateTime(2024, 1, 1);
IRange range = worksheet["A1:A48"];
range.FillSeries(ExcelSeriesBy.Columns, ExcelFillSeries.Months, 1, new DateTime(2028, 12, 1));
```

### Placeholders
- `"A1:A100"` → Replace with `"{range-address}"` (range to fill)
- `1` → Replace with `"{month-step}"` (months increment)
- `new DateTime(2026, 12, 1)` → Replace with `"{stop-date}"` (ending date)

---

## DateTime Years Series

### Minimal Code
```csharp
IRange range = worksheet["A1:A50"];
range.FillSeries(ExcelSeriesBy.Columns, ExcelFillSeries.Years, 2, new DateTime(2100, 1, 1));
```

### Fill Yearly Series
```csharp
worksheet["A1"].DateTime = new DateTime(2025, 1, 1);
IRange range = worksheet["A1:A50"];
range.FillSeries(ExcelSeriesBy.Columns, ExcelFillSeries.Years, 1, new DateTime(2075, 1, 1));
```

### Placeholders
- `"A1:A50"` → Replace with `"{range-address}"` (range to fill)
- `2` → Replace with `"{year-step}"` (years increment)
- `new DateTime(2100, 1, 1)` → Replace with `"{stop-date}"` (ending date)

---

## AutoFill Series

### Minimal Code
```csharp
IRange range = worksheet["A1:A100"];
range.FillSeries(ExcelSeriesBy.Columns, ExcelFillSeries.AutoFill, 0, 0);
```

### AutoFill Pattern Detection
```csharp
worksheet["A1"].Text = "Item 1";
worksheet["A2"].Text = "Item 2";
IRange range = worksheet["A1:A100"];
range.FillSeries(ExcelSeriesBy.Columns, ExcelFillSeries.AutoFill, 0, 0);
```

### Placeholders
- `"A1:A100"` → Replace with `"{range-address}"` (range to fill)
- `0, 0` → Keep as-is (not used for AutoFill)
- `Columns` → Replace with `Rows` for horizontal filling

---

## Linear Trend Series

### Minimal Code
```csharp
worksheet["A1"].Number = 2;
worksheet["A2"].Number = 4;
worksheet["A3"].Number = 6;
IRange range = worksheet["A1:A100"];
range.FillSeries(ExcelSeriesBy.Columns, ExcelFillSeries.Linear, true);
```

### Fill Using Linear Regression
```csharp
worksheet["A1"].Number = 10;
worksheet["A2"].Number = 20;
worksheet["A3"].Number = 30;
IRange range = worksheet["A1:A100"];
range.FillSeries(ExcelSeriesBy.Columns, ExcelFillSeries.Linear, true);
```

### Placeholders
- `A1:A100` → Replace with `"{range-address}"` (range to fill)
- `true` → Keep as-is to enable trend calculation
- `Linear` → Can replace with `Growth` for exponential trend

---

## Growth Trend Series

### Minimal Code
```csharp
worksheet["A1"].Number = 2;
worksheet["A2"].Number = 4;
worksheet["A3"].Number = 8;
IRange range = worksheet["A1:A100"];
range.FillSeries(ExcelSeriesBy.Columns, ExcelFillSeries.Growth, true);
```

### Fill Using Exponential Regression
```csharp
worksheet["A1"].Number = 1;
worksheet["A2"].Number = 2;
worksheet["A3"].Number = 4;
IRange range = worksheet["A1:A100"];
range.FillSeries(ExcelSeriesBy.Columns, ExcelFillSeries.Growth, true);
```

### Placeholders
- `"A1:A100"` → Replace with `"{range-address}"` (range to fill)
- `true` → Keep as-is to enable trend calculation
- `Growth` → Exponential progression type
