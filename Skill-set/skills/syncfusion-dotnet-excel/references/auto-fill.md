# Auto Fill Series and Patterns in Excel Worksheet

> Worksheet auto fill operations — populate cell ranges with patterns, sequences, trends, and date progressions by defining source range and fill type using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## Fill Copy

### Minimal Code
```csharp
IRange source = worksheet["A1:A3"];
IRange destination = worksheet["A4:A100"];
source.AutoFill(destination, ExcelAutoFillType.FillCopy);
```

### Copy Values to Multiple Ranges
```csharp
IRange source = worksheet["A1:A3"];
IRange destination = worksheet["A4:A100"];
source.AutoFill(destination, ExcelAutoFillType.FillCopy);
```

### Placeholders
- `"A1:A3"` → Replace with `"{source-range}"` (pattern source)
- `"A4:A100"` → Replace with `"{destination-range}"` (where to fill)
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Fill Series

### Minimal Code
```csharp
IRange source = worksheet["A1:A3"];
IRange destination = worksheet["A4:A100"];
source.AutoFill(destination, ExcelAutoFillType.FillSeries);
```

### Fill Number Series
```csharp
worksheet["A1"].Number = 2;
worksheet["A2"].Number = 4;
worksheet["A3"].Number = 6;
IRange source = worksheet["A1:A3"];
IRange destination = worksheet["A4:A100"];
source.AutoFill(destination, ExcelAutoFillType.FillSeries);
```

### Placeholders
- `"A1:A3"` → Replace with `"{source-range}"` (sequence pattern)
- `"A4:A100"` → Replace with `"{destination-range}"` (fill area)
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Fill Formats

### Minimal Code
```csharp
IRange source = worksheet["A1:A3"];
IRange destination = worksheet["A4:A100"];
source.AutoFill(destination, ExcelAutoFillType.FillFormats);
```

### Copy Formatting Only
```csharp
IRange source = worksheet["A1:A3"];
IRange destination = worksheet["A4:A100"];
source.AutoFill(destination, ExcelAutoFillType.FillFormats);
```

### Placeholders
- `"A1:A3"` → Replace with `"{source-range}"` (formatted cells)
- `"A4:A100"` → Replace with `"{destination-range}"` (apply format to)
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Fill Values

### Minimal Code
```csharp
IRange source = worksheet["A1:A3"];
IRange destination = worksheet["A4:A100"];
source.AutoFill(destination, ExcelAutoFillType.FillValues);
```

### Copy Values Without Formatting
```csharp
IRange source = worksheet["A1:A3"];
IRange destination = worksheet["A4:A100"];
source.AutoFill(destination, ExcelAutoFillType.FillValues);
```

### Placeholders
- `"A1:A3"` → Replace with `"{source-range}"` (values to copy)
- `"A4:A100"` → Replace with `"{destination-range}"` (fill area)
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Fill Days

### Minimal Code
```csharp
IRange source = worksheet["A1:A3"];
IRange destination = worksheet["A4:A100"];
source.AutoFill(destination, ExcelAutoFillType.FillDays);
```

### Auto Fill Date Series by Days
```csharp
worksheet["A1"].DateTime = new DateTime(2024, 1, 1);
worksheet["A2"].DateTime = new DateTime(2024, 1, 2);
worksheet["A3"].DateTime = new DateTime(2024, 1, 3);
IRange source = worksheet["A1:A3"];
IRange destination = worksheet["A4:A100"];
source.AutoFill(destination, ExcelAutoFillType.FillDays);
```

### Placeholders
- `"A1:A3"` → Replace with `"{source-range}"` (date pattern)
- `"A4:A100"` → Replace with `"{destination-range}"` (fill area)
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Fill Weekdays

### Minimal Code
```csharp
IRange source = worksheet["A1:A3"];
IRange destination = worksheet["A4:A100"];
source.AutoFill(destination, ExcelAutoFillType.FillWeekdays);
```

### Auto Fill Workday Series
```csharp
IRange source = worksheet["A1:A3"];
IRange destination = worksheet["A4:A100"];
source.AutoFill(destination, ExcelAutoFillType.FillWeekdays);
```

### Placeholders
- `"A1:A3"` → Replace with `"{source-range}"` (weekday date pattern)
- `"A4:A100"` → Replace with `"{destination-range}"` (fill area)
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Fill Months

### Minimal Code
```csharp
IRange source = worksheet["A1:A3"];
IRange destination = worksheet["A4:A100"];
source.AutoFill(destination, ExcelAutoFillType.FillMonths);
```

### Auto Fill Monthly Series
```csharp
IRange source = worksheet["A1:A3"];
IRange destination = worksheet["A4:A100"];
source.AutoFill(destination, ExcelAutoFillType.FillMonths);
```

### Placeholders
- `"A1:A3"` → Replace with `"{source-range}"` (month date pattern)
- `"A4:A100"` → Replace with `"{destination-range}"` (fill area)
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Fill Years

### Minimal Code
```csharp
IRange source = worksheet["A1:A3"];
IRange destination = worksheet["A4:A100"];
source.AutoFill(destination, ExcelAutoFillType.FillYears);
```

### Auto Fill Yearly Series
```csharp
IRange source = worksheet["A1:A3"];
IRange destination = worksheet["A4:A100"];
source.AutoFill(destination, ExcelAutoFillType.FillYears);
```

### Placeholders
- `"A1:A3"` → Replace with `"{source-range}"` (year date pattern)
- `"A4:A100"` → Replace with `"{destination-range}"` (fill area)
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Linear Trend

### Minimal Code
```csharp
IRange source = worksheet["A1:A3"];
IRange destination = worksheet["A4:A100"];
source.AutoFill(destination, ExcelAutoFillType.LinearTrend);
```

### Fill with Linear Progression
```csharp
worksheet["A1"].Number = 10;
worksheet["A2"].Number = 20;
worksheet["A3"].Number = 30;
IRange source = worksheet["A1:A3"];
IRange destination = worksheet["A4:A100"];
source.AutoFill(destination, ExcelAutoFillType.LinearTrend);
```

### Placeholders
- `"A1:A3"` → Replace with `"{source-range}"` (linear pattern)
- `"A4:A100"` → Replace with `"{destination-range}"` (fill area)
- `worksheet` → Replace with `"{target-worksheet}"`

---

## Growth Trend

### Minimal Code
```csharp
IRange source = worksheet["A1:A3"];
IRange destination = worksheet["A4:A100"];
source.AutoFill(destination, ExcelAutoFillType.GrowthTrend);
```

### Fill with Exponential Growth
```csharp
worksheet["A1"].Number = 1;
worksheet["A2"].Number = 2;
worksheet["A3"].Number = 4;
IRange source = worksheet["A1:A3"];
IRange destination = worksheet["A4:A100"];
source.AutoFill(destination, ExcelAutoFillType.GrowthTrend);
```

### Placeholders
- `"A1:A3"` → Replace with `"{source-range}"` (growth pattern)
- `"A4:A100"` → Replace with `"{destination-range}"` (fill area)
- `worksheet` → Replace with `"{target-worksheet}"`
