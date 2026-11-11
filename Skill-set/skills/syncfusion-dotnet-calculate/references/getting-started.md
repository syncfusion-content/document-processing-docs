# Getting Started — Syncfusion Windows Forms Calculation Engine

> This guide helps you get started with Essential Calculate. Learn how to set up the library, choose the right approach, and perform your first calculations.

---

## Prerequisites and Setup Requirements

Before using the Syncfusion Calculate Library, ensure the following setup is complete:

### 1. NuGet Package Installation

Required packages in your `.csproj` file:

### For WPF, Windows Forms, ASP.NET 
```csharp
dotnet add package Syncfusion.Calculate.Base
```
### For Universal Windows Platform
```csharp
dotnet add package Syncfusion.Calculate.UWP
```

---
### 2. Program.cs Configuration

*These two namespaces should not be used simultaneously because they conflict with each other*

For XLSIO 
```csharp
using Syncfusion.XlsIO;
```
For calculate 
```csharp
using Syncfusion.Calculate;

// for custom functions add the below namespace as well
using static Syncfusion.Calculate.CalcEngine;
```
### Basic Calculate code

### Minimal code

### CalcQuickBase
```csharp
CalcQuickBase calcQuick = new CalcQuickBase();   

//Computing expressions,

string formula = "(5+25)*2";
string result = calcQuick.ParseAndCompute(formula);

//Computing in built formulas,

string formula = "SUM(5,5)";
string result = calcQuick.ParseAndCompute(formula);
```
### ICalcData
```csharp
//Custom class,

public class CalcData : ICalcData
{
    Dictionary<string, object> values = new Dictionary<string, object>();

    //Defining SetValueRowCol method in Custom(user defined) Class,
    public void SetValueRowCol(object value, int row, int col)
    {
        var key = RangeInfo.GetAlphaLabel(col) + row;
        if (!values.ContainsKey(key))
            values.Add(key, value);
        else if (values.ContainsKey(key) && values[key] != value)
            values[key] = value;
    }
}

//Main class,

public void Main()
{
    CalcData calcData = new CalcData();

    calcData.SetValueRowCol(10, 1, 1);

    calcData.SetValueRowCol(20, 1, 2);

    CalcEngine engine = new CalcEngine(calcData);

    string formula = “SUM (A1, B1)”;

    string result = engine.ParseAndComputeFormula(formula);
}

```

For XLSIO
```csharp
//Creates a new instance for ExcelEngine,

ExcelEngine excelEngine = new ExcelEngine();

//Loads or open an existing workbook through Open method of IWorkbook, 

IWorkbook workbook = excelEngine.Excel.Workbooks.Open(@"..\..\Data\Sample.xlsx");

//Accessing the worksheet,
IWorksheet sheet = workbook.Worksheets[0];

//Formula calculation is enabled for the sheet,
sheet.EnableSheetCalculations();

//Assigning values in the worksheet,

worksheet["C3"].Number = 45;
         
worksheet["C4"].Number = 20;
            
worksheet["C5"].Number = 38;

//Assigning the formula in the worksheet,           
worksheet["C24"].Formula = "=SUM(C3:C4)-C5";

//Getting the calculated value,
var value = sheet.Range["C24"].CalculatedValue;

//Formula calculation is disabled for the sheet,
sheet.DisableSheetCalculations();
```
---
## Quick Start with CalcQuickBase

### Simplest Approach

The `CalcQuickBase` class is the simplest way to use Essential Calculate. It provides direct formula parsing and computation without managing complex data sources.

#### Compute Simple Expressions

```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

// Expression: (5 + 25) * 2 = 60
string formula = "(5+25)*2";
string result = calcQuick.ParseAndCompute(formula);  // "60"
```

#### Compute Built-in Formulas

```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

// Sum: SUM(5, 5) = 10
string formula = "SUM(5, 5)";
string result = calcQuick.ParseAndCompute(formula);  // "10"
```

---

## Compute Formula using ICalcData

For more complex scenarios requiring data management, use the `ICalcData` interface.

### Step 1: Create a Custom Class from ICalcData

```csharp
public class CalcData : ICalcData
{
    public event ValueChangedEventHandler ValueChanged;
    private Dictionary<string, object> values = new Dictionary<string, object>();

    public object GetValueRowCol(int row, int col)
    {
        object value = null;
        var key = RangeInfo.GetAlphaLabel(col) + row;
        this.values.TryGetValue(key, out value);
        return value;
    }

    public void SetValueRowCol(object value, int row, int col)
    {
        var key = RangeInfo.GetAlphaLabel(col) + row;
        if (!values.ContainsKey(key))
            values.Add(key, value);
        else if (values.ContainsKey(key) && values[key] != value)
            values[key] = value;
    }

    public void WireParentObject() { }

    private void OnValueChanged(int row, int col, string value)
    {
        if (ValueChanged != null)
            ValueChanged(this, new ValueChangedEventArgs(row, col, value));
    }
}
```

> **Note:** Essential Calculate expects 1-based indexing for rows and columns.

### Step 2: Set Values into ICalcData

```csharp
CalcData calcData = new CalcData();
calcData.SetValueRowCol("10", 1, 1);  // A1 = 10
calcData.SetValueRowCol("20", 1, 2);  // B1 = 20
```

### Step 3: Initialize CalcEngine

```csharp
CalcEngine engine = new CalcEngine(calcData);
```

### Step 4: Evaluate Formulas

```csharp
CalcData calcData = new CalcData();

// Set values
calcData.SetValueRowCol(10, 1, 1);   // A1 = 10
calcData.SetValueRowCol(20, 1, 2);   // B1 = 20

// Create engine
CalcEngine engine = new CalcEngine(calcData);

// Compute formula using cell references
string formula = "SUM(A1, B1)";
string result = engine.ParseAndComputeFormula(formula);  // "30"
```

---

## Choosing Between CalcQuickBase and ICalcData

### CalcQuickBase

**Best for:** Quick calculations, variable-based computations, prototyping

**Characteristics:**
- Simplest API
- Direct formula parsing and computation
- Variable registration with `[]` notation
- No runtime value modification (by default)
- Requires `AutoCalc = true` for dependency tracking


### ICalcData

**Best for:** Data grid integration, runtime modifications, complex scenarios

**Characteristics:**
- Requires interface implementation
- Supports cell-based data access
- Runtime value modification via `SetValueRowCol`
- Automatic dependency tracking through `ValueChanged` event
- Better for data-driven applications

---

## Cross-Sheet Reference

Enable calculations across multiple sheets by registering `ICalcData` objects with a shared family ID.

### Step 1: Create Multiple Data Sources

```csharp
CalcData calcData  = new CalcData();  // Sheet1 data
CalcData calcData1 = new CalcData();  // Sheet2 data

// Add values to Sheet1
calcData.SetValueRowCol(10, 1, 1);   // Sheet1!A1 = 10

// Add values to Sheet2
calcData1.SetValueRowCol(20, 1, 1);  // Sheet2!A1 = 20
```

### Step 2: Create Engines

```csharp
CalcEngine engine  = new CalcEngine(calcData);
CalcEngine engine1 = new CalcEngine(calcData1);
```

### Step 3: Create Family ID

```csharp
int familyId = CalcEngine.CreateSheetFamilyID();
```

### Step 4: Register Sheets

```csharp
engine.RegisterGridAsSheet("Sheet1", calcData,  familyId);
engine.RegisterGridAsSheet("Sheet2", calcData1, familyId);
```

### Step 5: Use Cross-Sheet Formulas

```csharp
string formula = "SUM(Sheet1!A1, Sheet2!A1)";
string result = engine.ParseAndComputeFormula(formula);  // "30"
```

---

## Culture & Region Settings

Configure decimal and argument separators for different locale settings.

### Set Custom Separators

```csharp
// Set to current culture's decimal separator
CalcEngine.ParseDecimalSeparator = 
    System.Threading.Thread.CurrentThread.CurrentCulture
        .NumberFormat.NumberDecimalSeparator.ToCharArray()[0];

// Set to current culture's argument separator
CalcEngine.ParseArgumentSeparator = 
    System.Threading.Thread.CurrentThread.CurrentCulture
        .TextInfo.ListSeparator.ToCharArray()[0];
```

### Example: German Culture
```csharp
// German: decimal separator = ',', argument separator = ';'
CalcEngine.ParseDecimalSeparator = ',';
CalcEngine.ParseArgumentSeparator = ';';

string result = engine.ParseAndComputeFormula("SUM(5,5;10,5)");  // "20,5"
```

---

## Quick Reference

| Task | Approach | Class |
|------|----------|-------|
| Simple calculation | Direct formula | `CalcQuickBase.ParseAndCompute()` |
| Variables | Named values | `CalcQuickBase` with `[]` notation |
| Cell references | Row/Column data | `CalcEngine` with `ICalcData` |
| Multiple sheets | Sheet registration | `CalcEngine.RegisterGridAsSheet()` |
| Custom functions | Function registration | `CalcEngine.AddFunction()` |
| Culture support | Separators | `CalcEngine.ParseDecimalSeparator` |

---

## Next Steps

- Learn about [Parse and Compute Operations](parse-compute.md)
- Explore [CalcQuickBase](calcquickbase.md) for detailed API
- Understand [ICalcData Interface](icalcdata.md)
- Discover [Cross-Sheet References](calcengine.md#cross-sheet-reference)
- Create [Custom Functions](customfunction.md)
