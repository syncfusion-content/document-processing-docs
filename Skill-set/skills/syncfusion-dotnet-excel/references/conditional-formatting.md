# Apply Conditional Formatting to Excel Cells

> Highlight cells automatically based on rules — cell value, text, dates, top/bottom ranks, data bars, color scales, icon sets, and custom formulas using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No itional usings required)
> **Required usings for .NET Framework (Windows):** (No itional usings required)

> Note: On .NET Framework use `System.Drawing.Color` (e.g., `Color.Yellow`) for APIs that accept framework colors. When targeting portable/.NET Core with Syncfusion XlsIO Core packages, use `Syncfusion.Drawing.Color`. `ExcelKnownColors` constants work across platforms and need no modification.

---

## Highlight Cells Based on Cell Value

### Minimal Code
```csharp
IConditionalFormats formats = sheet["C2:C100"].ConditionalFormats;
IConditionalFormat format   = formats.AddCondition();

format.FormatType   = ExcelCFType.CellValue;
format.Operator     = ExcelComparisonOperator.Greater;
format.FirstFormula = "100";
format.BackColor    = ExcelKnownColors.Light_green;
```

### Placeholders
- `"100"` → Replace with `"{threshold-value}"`
- `ExcelKnownColors.Light_green` → Replace with `"{color-enum}"`

### Greater Than
Highlights cells where the value is greater than a threshold.

### Between Two Values
```csharp
format.Operator      = ExcelComparisonOperator.Between;
format.FirstFormula  = "50";
format.SecondFormula = "100";
format.BackColor     = ExcelKnownColors.Light_yellow;
```

### Placeholders
- `"50"` → Replace with `"{min-value}"`
- `"100"` → Replace with `"{max-value}"`
- `ExcelKnownColors.Light_yellow` → Replace with `"{color-enum}"`

### Common Comparison Operators
```csharp
format.Operator = ExcelComparisonOperator.Greater;
format.Operator = ExcelComparisonOperator.GreaterOrEqual;
format.Operator = ExcelComparisonOperator.Less;
format.Operator = ExcelComparisonOperator.LessOrEqual;
format.Operator = ExcelComparisonOperator.Equal;
format.Operator = ExcelComparisonOperator.NotEqual;
format.Operator = ExcelComparisonOperator.Between;
format.Operator = ExcelComparisonOperator.NotBetween;
```

---

## Highlight Cells Based on Text

### Minimal Code
```csharp
IConditionalFormats formats = sheet["B2:B100"].ConditionalFormats;
IConditionalFormat format   = formats.AddCondition();

format.FormatType   = ExcelCFType.SpecificText;
format.Operator     = ExcelComparisonOperator.ContainsText;
format.FirstFormula = "Pending";
format.BackColor    = ExcelKnownColors.Light_orange;
```

### Placeholders
- `"Pending"` → Replace with `"{text-value}"`
- `ExcelKnownColors.Light_orange` → Replace with `"{color-enum}"`

### Text Operator Options
```csharp
// Contains text
format.Operator     = ExcelComparisonOperator.ContainsText;
format.FirstFormula = "Pending";

// Does not contain
format.Operator     = ExcelComparisonOperator.NotContainsText;
format.FirstFormula = "Complete";

// Begins with
format.Operator     = ExcelComparisonOperator.BeginsWith;
format.FirstFormula = "EMP";

// Ends with
format.Operator     = ExcelComparisonOperator.EndsWith;
format.FirstFormula = "Ltd";
```

---

## Highlight Cells Based on Date

### Minimal Code
```csharp
IConditionalFormats formats = sheet["E2:E100"].ConditionalFormats;
IConditionalFormat format   = formats.AddCondition();

format.FormatType        = ExcelCFType.TimePeriod;
format.TimePeriodType    = CFTimePeriods.Today;
format.BackColor         = ExcelKnownColors.Light_yellow;
```

### Placeholders
- `ExcelKnownColors.Light_yellow` → Replace with `"{color-enum}"`

### Time Period Options
```csharp
format.TimePeriodType = CFTimePeriods.Today;
format.TimePeriodType = CFTimePeriods.Yesterday;
format.TimePeriodType = CFTimePeriods.Tomorrow;
format.TimePeriodType = CFTimePeriods.Last7Days;
format.TimePeriodType = CFTimePeriods.ThisWeek;
format.TimePeriodType = CFTimePeriods.LastWeek;
format.TimePeriodType = CFTimePeriods.NextWeek;
format.TimePeriodType = CFTimePeriods.ThisMonth;
format.TimePeriodType = CFTimePeriods.LastMonth;
format.TimePeriodType = CFTimePeriods.NextMonth;
```

---

## Highlight Duplicate or Unique Values

### Minimal Code - Duplicates
```csharp
IConditionalFormats formats = sheet["A2:A100"].ConditionalFormats;
IConditionalFormat format   = formats.AddCondition();

format.FormatType = ExcelCFType.Duplicate;
format.BackColor  = ExcelKnownColors.Light_orange;
```

### Unique Values
```csharp
format.FormatType = ExcelCFType.Unique;
format.BackColor  = ExcelKnownColors.Light_green;
```

---

## Top / Bottom Rules

### Minimal Code - Top N Values
```csharp
IConditionalFormats formats = sheet["D2:D100"].ConditionalFormats;
IConditionalFormat format   = formats.AddCondition();

format.FormatType = ExcelCFType.TopBottom;
format.TopBottom  = ExcelCFTopBottomType.Top;
format.Rank       = 10;
format.Percent    = false;
format.BackColor  = ExcelKnownColors.Light_green;
```

### Bottom N Percent
```csharp
format.TopBottom = ExcelCFTopBottomType.Bottom;
format.Rank      = 10;
format.Percent   = true;
```

---

## Above / Below Average

### Minimal Code - Above Average
```csharp
IConditionalFormats formats = sheet["D2:D100"].ConditionalFormats;
IConditionalFormat format   = formats.AddCondition();

format.FormatType        = ExcelCFType.AboveBelowAverage;
format.AboveBelowAverage = ExcelCFAverageType.Above;
format.BackColor         = ExcelKnownColors.Light_green;
```

### Below Average
```csharp
format.AboveBelowAverage = ExcelCFAverageType.Below;
format.BackColor         = ExcelKnownColors.Light_orange;
```

---

## Data Bars

### Minimal Code
```csharp
IConditionalFormats formats = sheet["D2:D100"].ConditionalFormats;
IConditionalFormat format   = formats.AddCondition();

format.FormatType       = ExcelCFType.DataBar;
format.DataBar.BarColor = ExcelKnownColors.Blue;
```

### With Custom Range
```csharp
format.DataBar.MinPoint.Type  = ConditionValueType.Number;
format.DataBar.MinPoint.Value = "0";
format.DataBar.MaxPoint.Type  = ConditionValueType.Number;
format.DataBar.MaxPoint.Value = "1000";
format.DataBar.ShowValue      = true;
```

---

## Color Scales

### Two-Color Scale
```csharp
IConditionalFormats formats = sheet["D2:D100"].ConditionalFormats;
IConditionalFormat format   = formats.Condition();

format.FormatType = ExcelCFType.ColorScale;

// Min color (low values)
format.ColorScale.MinPoint.Type     = ConditionValueType.Lowest;
format.ColorScale.MinPoint.ColorRGB = ExcelKnownColors.Red;

// Max color (high values)
format.ColorScale.MaxPoint.Type     = ConditionValueType.Highest;
format.ColorScale.MaxPoint.ColorRGB = ExcelKnownColors.Green;
```

### Three-Color Scale
```csharp
IConditionalFormats formats = sheet["D2:D100"].ConditionalFormats;
IConditionalFormat format   = formats.AddCondition();

format.FormatType = ExcelCFType.ColorScale;

// Min  red
format.ColorScale.MinPoint.Type     = ConditionValueType.Lowest;
format.ColorScale.MinPoint.ColorRGB = ExcelKnownColors.Red;

// Mid  yellow
format.ColorScale.MidPoint.Type     = ConditionValueType.Percentile;
format.ColorScale.MidPoint.Value    = "50";
format.ColorScale.MidPoint.ColorRGB = ExcelKnownColors.Yellow;

// Max  green
format.ColorScale.MaxPoint.Type     = ConditionValueType.Highest;
format.ColorScale.MaxPoint.ColorRGB = ExcelKnownColors.Green;
```

---

## Icon Sets

### Minimal Code
```csharp
IConditionalFormats formats = sheet["D2:D100"].ConditionalFormats;
IConditionalFormat format   = formats.AddCondition();

format.FormatType          = ExcelCFType.IconSet;
format.IconSet.IconSetType = ExcelIconSetType.ThreeArrows;
```

### Available Icon Types
Common options: `ThreeArrows`, `ThreeTrafficLights1`, `ThreeFlags`, `FourArrows`, `FiveRating`, `FiveBoxes`, etc.

### With Custom Thresholds
```csharp
format.IconSet.IconSetType = ExcelIconSetType.ThreeTrafficLights1;
format.IconSet.IconCriteria[0].Type     = ConditionValueType.Percent;
format.IconSet.IconCriteria[0].Value    = "80";
format.IconSet.IconCriteria[1].Type     = ConditionValueType.Percent;
format.IconSet.IconCriteria[1].Value    = "50";
```

---

## Custom Formula Rule

### Minimal Code
```csharp
IConditionalFormats formats = sheet["A2:F100"].ConditionalFormats;
IConditionalFormat format   = formats.AddCondition();

format.FormatType   = ExcelCFType.Formula;
format.FirstFormula = "=$D2>500";  // Highlight entire row when column D > 500
format.BackColor    = ExcelKnownColors.Light_green;
```

### Highlight Entire Row Based on a Column Value
```csharp
// Highlight full row when Status column (col F) = "Overdue"
IConditionalFormats formats = sheet["A2:F100"].ConditionalFormats;
IConditionalFormat format   = formats.AddCondition();

format.FormatType   = ExcelCFType.Formula;
format.FirstFormula = "=$F2=\"Overdue\"";
format.BackColor    = ExcelKnownColors.Light_orange;
format.FontColor    = ExcelKnownColors.Red;
format.IsBold       = true;
```

### Highlight Every Other Row (Alternating)
```csharp
IConditionalFormats formats = sheet["A2:E100"].ConditionalFormats;
IConditionalFormat format   = formats.AddCondition();

format.FormatType   = ExcelCFType.Formula;
format.FirstFormula = "=MOD(ROW(),2)=0";
format.BackColor    = ExcelKnownColors.Light_yellow;
```

---

## Apply Font Formatting in Conditional Format

### Minimal Code
```csharp
IConditionalFormats formats = sheet["C2:C100"].ConditionalFormats;
IConditionalFormat format   = formats.AddCondition();

format.FormatType   = ExcelCFType.CellValue;
format.Operator     = ExcelComparisonOperator.Less;
format.FirstFormula = "0";

// Font formatting
format.FontColor    = ExcelKnownColors.Red;
format.IsBold       = true;
format.IsItalic     = true;
```

### All Font & Fill Options
```csharp
format.BackColor     = ExcelKnownColors.Light_orange; // Background color
format.FontColor     = ExcelKnownColors.Red;          // Font color
format.IsBold        = true;                          // Bold
format.IsItalic      = true;                          // Italic
format.Underline     = true;                          // Underline
format.Strikethrough = true;                          // Strikethrough
```

---

## Multiple Rules on the Same Range

### Minimal Code
```csharp
IConditionalFormats formats = sheet["D2:D100"].ConditionalFormats;

// Rule 1  Orange for values < 0
IConditionalFormat rule1 = formats.AddCondition();
rule1.FormatType         = ExcelCFType.CellValue;
rule1.Operator           = ExcelComparisonOperator.Less;
rule1.FirstFormula       = "0";
rule1.BackColor          = ExcelKnownColors.Light_orange;

// Rule 2  Yellow for values between 0 and 50
IConditionalFormat rule2 = formats.AddCondition();
rule2.FormatType         = ExcelCFType.CellValue;
rule2.Operator           = ExcelComparisonOperator.Between;
rule2.FirstFormula       = "0";
rule2.SecondFormula      = "50";
rule2.BackColor          = ExcelKnownColors.Light_yellow;

// Rule 3  Green for values > 50
IConditionalFormat rule3 = formats.AddCondition();
rule3.FormatType         = ExcelCFType.CellValue;
rule3.Operator           = ExcelComparisonOperator.Greater;
rule3.FirstFormula       = "50";
rule3.BackColor          = ExcelKnownColors.Light_green;
```

---

## Full End-to-End Example

```csharp
using Syncfusion.XlsIO;

ExcelEngine excelEngine    = new ExcelEngine();
IApplication application   = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook  = application.Workbooks.Create(1);
IWorksheet sheet    = workbook.Worksheets[0];
sheet.Name          = "Sales Report";

// Headers
sheet["A1"].Text = "Sales Rep";
sheet["B1"].Text = "Region";
sheet["C1"].Text = "Target";
sheet["D1"].Text = "Actual";
sheet["E1"].Text = "Status";

// Style headers
IRange header = sheet["A1:E1"];
header.CellStyle.Font.Bold  = true;
header.CellStyle.Color      = ExcelKnownColors.Blue;
header.CellStyle.Font.Color = ExcelKnownColors.White;

// Sample data
sheet["A2"].Text = "Alice";  sheet["B2"].Text = "North"; sheet["C2"].Number = 500; sheet["D2"].Number = 620; sheet["E2"].Text = "Complete";
sheet["A3"].Text = "Bob";    sheet["B3"].Text = "South"; sheet["C3"].Number = 400; sheet["D3"].Number = 310; sheet["E3"].Text = "Overdue";
sheet["A4"].Text = "Carol";  sheet["B4"].Text = "East";  sheet["C4"].Number = 600; sheet["D4"].Number = 598; sheet["E4"].Text = "Pending";
sheet["A5"].Text = "David";  sheet["B5"].Text = "West";  sheet["C5"].Number = 450; sheet["D5"].Number = 700; sheet["E5"].Text = "Complete";

// 1. Color scale on Actual column (D)
IConditionalFormats cfActual = sheet["D2:D5"].ConditionalFormats;
IConditionalFormat  csFormat = cfActual.AddCondition();
csFormat.FormatType                 = ExcelCFType.ColorScale;
csFormat.ColorScale.MinPoint.Type   = ConditionValueType.Lowest;
csFormat.ColorScale.MinPoint.ColorRGB = ExcelKnownColors.Red;
csFormat.ColorScale.MaxPoint.Type   = ConditionValueType.Highest;
csFormat.ColorScale.MaxPoint.ColorRGB = ExcelKnownColors.Green;

// 2. Data bar on Target column (C)
IConditionalFormats cfTarget = sheet["C2:C5"].ConditionalFormats;
IConditionalFormat  dbFormat = cfTarget.AddCondition();
dbFormat.FormatType         = ExcelCFType.DataBar;
dbFormat.DataBar.BarColor   = ExcelKnownColors.Blue;
dbFormat.DataBar.ShowValue  = true;

// 3. Highlight entire row orange when Status = "Overdue"
IConditionalFormats cfRow   = sheet["A2:E5"].ConditionalFormats;
IConditionalFormat  rowRule = cfRow.AddCondition();
rowRule.FormatType         = ExcelCFType.Formula;
rowRule.FirstFormula       = "=$E2=\"Overdue\"";
rowRule.BackColor          = ExcelKnownColors.Light_orange;
rowRule.FontColor          = ExcelKnownColors.Red;
rowRule.IsBold             = true;

// 4. Icon set on Actual column (D)
IConditionalFormats cfIcon   = sheet["D2:D5"].ConditionalFormats;
IConditionalFormat  iconRule = cfIcon.AddCondition();
iconRule.FormatType           = ExcelCFType.IconSet;
iconRule.IconSet.IconSetType  = ExcelIconSetType.ThreeArrows;

// Auto-fit columns
for (int col = 1; col <= 5; col++)
    sheet.AutofitColumn(col);

workbook.SaveAs("output/sales-report.xlsx");
workbook.Close();
excelEngine.Dispose();
```

