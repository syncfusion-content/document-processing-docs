# Named Ranges — Syncfusion Windows Forms Calculation Engine

> Named Ranges allow you to assign meaningful names to cells, ranges of cells, formulas, constants, or tables. This makes formulas easier to understand and maintain.

---

## Assembly Reference

```csharp
// NuGet Package
Syncfusion.Calculate.Base

// Namespace
using Syncfusion.Calculate;
```

---

## Naming Conventions

Named ranges must follow these rules:

- **Start with Letter or Underscore** - Name must begin with a letter or underscore (`_`)
- **Not Single Letter** - Cannot be a single letter
- **No Spaces** - Names cannot contain spaces
- **Alphanumeric Only** - Can contain letters, digits, and underscores
- **No Cell References** - Cannot match cell references (e.g., `A1`, `B2`)
- **Case-Insensitive** - `MyRange`, `myrange`, and `MYRANGE` are the same
- **Max Length** - Up to 255 characters

### Valid Names
- `SalesData`
- `Q4_Revenue`
- `_InternalMargin`
- `Average_Price`
- `Tax_Rate_2024`

### Invalid Names
- `A` (single letter)
- `A1` (looks like cell reference)
- `Sales Data` (contains space)
- `2023Sales` (starts with digit)

---

## Add Named Range

Use the `AddNamedRange` method to define a name for a cell, range, or formula.

### Basic Named Range

```csharp
CalcData calcData = new CalcData();
CalcEngine engine = new CalcEngine(calcData);

// Create a named range for a single cell
engine.AddNamedRange("PRICE", "A1");

// Create a named range for a range of cells
engine.AddNamedRange("SUMRANGE", "A1:D4");

// Use in formulas
string result = engine.ParseAndComputeFormula("SUM(SUMRANGE)");
```

### Named Range Examples

```csharp
CalcData calcData = new CalcData();

// Set up data
calcData.SetValueRowCol(100, 1, 1);  // A1 = 100
calcData.SetValueRowCol(200, 2, 1);  // A2 = 200
calcData.SetValueRowCol(300, 3, 1);  // A3 = 300

CalcEngine engine = new CalcEngine(calcData);

// Add named ranges
engine.AddNamedRange("PRODUCT_A", "A1");
engine.AddNamedRange("PRODUCT_B", "A2");
engine.AddNamedRange("PRODUCT_C", "A3");
engine.AddNamedRange("TOTAL_SALES", "A1:A3");

// Use in formulas
string sum = engine.ParseAndComputeFormula("SUM(TOTAL_SALES)");        // "600"
string total = engine.ParseAndComputeFormula("PRODUCT_A + PRODUCT_B"); // "300"
```

---

## Use Named Ranges in Formulas

Named ranges make formulas more readable and maintainable.

### Example: Budget Calculation

```csharp
CalcData calcData = new CalcData();

// Set up budget data
calcData.SetValueRowCol(50000, 1, 1);   // Revenue = 50000
calcData.SetValueRowCol(20000, 2, 1);   // Expenses = 20000
calcData.SetValueRowCol(3000, 3, 1);    // Tax = 3000

CalcEngine engine = new CalcEngine(calcData);

// Create meaningful named ranges
engine.AddNamedRange("REVENUE", "A1");
engine.AddNamedRange("EXPENSES", "A2");
engine.AddNamedRange("TAX", "A3");

// Use named ranges in formulas
string profit = engine.ParseAndComputeFormula("REVENUE - EXPENSES - TAX");  // "27000"

// More readable than: engine.ParseAndComputeFormula("A1 - A2 - A3");
```

---

## Remove Named Range

Use the `RemoveNamedRange` method to delete a named range.

```csharp
CalcData calcData = new CalcData();
CalcEngine engine = new CalcEngine(calcData);

// Add named range
engine.AddNamedRange("SUMRANGE", "A1:C4");

// Remove the named range
engine.RemoveNamedRange("SUMRANGE");

// This will now result in an error
string result = engine.ParseAndComputeFormula("SUM(SUMRANGE)");
```

---

## Manage Named Ranges

The `NamedRanges` collection allows you to view, modify, or replace named ranges.

### Get Named Range Count

```csharp
CalcData calcData = new CalcData();
CalcEngine engine = new CalcEngine(calcData);

// Add some named ranges
engine.AddNamedRange("RANGE1", "A1:A10");
engine.AddNamedRange("RANGE2", "B1:B10");
engine.AddNamedRange("RANGE3", "C1:C10");

// Get count
int count = engine.NamedRanges.Count;  // 3
```

### Modify Existing Named Range

```csharp
CalcData calcData = new CalcData();
CalcEngine engine = new CalcEngine(calcData);

// Add named range
engine.AddNamedRange("GROUPCELLS", "A1:C4");

// Modify the range
engine.NamedRanges["GROUPCELLS"] = "A3:A8";

// Now the named range points to A3:A8
```

### List All Named Ranges

```csharp
CalcData calcData = new CalcData();
CalcEngine engine = new CalcEngine(calcData);

// Add named ranges
engine.AddNamedRange("SALES", "A1:A10");
engine.AddNamedRange("EXPENSES", "B1:B10");
engine.AddNamedRange("PROFIT", "C1:C10");

// Iterate through all named ranges
foreach (var name in engine.NamedRanges.Keys)
{
    string range = engine.NamedRanges[name].ToString();
    Console.WriteLine($"{name}: {range}");
}

// Output:
// SALES: A1:A10
// EXPENSES: B1:B10
// PROFIT: C1:C10
```

---

## Advanced Named Range Examples

### Named Range with Formula

```csharp
CalcData calcData = new CalcData();

// Set values
calcData.SetValueRowCol(100, 1, 1);  // A1 = 100
calcData.SetValueRowCol(200, 1, 2);  // B1 = 200

CalcEngine engine = new CalcEngine(calcData);

// Define named ranges
engine.AddNamedRange("PRICE_A", "A1");
engine.AddNamedRange("PRICE_B", "B1");

// Use in formulas
string avgPrice = engine.ParseAndComputeFormula("AVERAGE(PRICE_A, PRICE_B)");  // "150"
string maxPrice = engine.ParseAndComputeFormula("MAX(PRICE_A, PRICE_B)");      // "200"
```

### Nested Named Ranges in Functions

```csharp
CalcData calcData = new CalcData();

// Create a data matrix
for (int row = 1; row <= 3; row++)
{
    for (int col = 1; col <= 3; col++)
    {
        calcData.SetValueRowCol(row * col * 10, row, col);
    }
}

CalcEngine engine = new CalcEngine(calcData);

// Define named ranges for rows
engine.AddNamedRange("ROW1", "A1:C1");
engine.AddNamedRange("ROW2", "A2:C2");
engine.AddNamedRange("ROW3", "A3:C3");

// Use named ranges in aggregate functions
string sum1 = engine.ParseAndComputeFormula("SUM(ROW1)");         // "60"
string sum2 = engine.ParseAndComputeFormula("SUM(ROW2)");         // "120"
string sumAll = engine.ParseAndComputeFormula("SUM(ROW1,ROW2,ROW3)");  // "280"
```

### Dynamic Named Range Updates

```csharp
CalcData calcData = new CalcData();
CalcEngine engine = new CalcEngine(calcData);

// Initial setup
calcData.SetValueRowCol(100, 1, 1);
calcData.SetValueRowCol(200, 1, 2);

engine.AddNamedRange("TOTAL", "A1:B1");

// Use named range
string result1 = engine.ParseAndComputeFormula("SUM(TOTAL)");  // "300"

// Expand the named range
engine.NamedRanges["TOTAL"] = "A1:C1";

// Add more data
calcData.SetValueRowCol(150, 1, 3);

// Recalculate with updated range
string result2 = engine.ParseAndComputeFormula("SUM(TOTAL)");  // "450"
```

---

## Best Practices

### 1. Use Descriptive Names

```csharp
// Good - Clear and descriptive
engine.AddNamedRange("QUARTERLY_SALES", "A1:A4");
engine.AddNamedRange("EMPLOYEE_COUNT", "B5");

// Avoid - Too vague
engine.AddNamedRange("DATA1", "A1:A4");
engine.AddNamedRange("VAL", "B5");
```

### 2. Organize Related Ranges

```csharp
// Group related named ranges
engine.AddNamedRange("SALES_Q1", "A1:A3");
engine.AddNamedRange("SALES_Q2", "A4:A6");
engine.AddNamedRange("SALES_Q3", "A7:A9");
engine.AddNamedRange("SALES_Q4", "A10:A12");
```

### 3. Use Uppercase for Consistency

```csharp
// Consistent naming convention
engine.AddNamedRange("REVENUE", "A1");
engine.AddNamedRange("EXPENSES", "A2");
engine.AddNamedRange("NET_PROFIT", "A3");
```

### 4. Clean Up Unused Named Ranges

```csharp
// Remove named ranges that are no longer needed
engine.RemoveNamedRange("DEPRECATED_RANGE");
engine.RemoveNamedRange("TEMP_VALUE");
```

---

## Common Use Cases

### Financial Calculations

```csharp
CalcData calcData = new CalcData();

calcData.SetValueRowCol(50000, 1, 1);   // A1 = Revenue
calcData.SetValueRowCol(30000, 2, 1);   // A2 = Expenses
calcData.SetValueRowCol(0.25, 3, 1);    // A3 = Tax Rate

CalcEngine engine = new CalcEngine(calcData);

engine.AddNamedRange("REVENUE", "A1");
engine.AddNamedRange("EXPENSES", "A2");
engine.AddNamedRange("TAX_RATE", "A3");

string grossProfit = engine.ParseAndComputeFormula("REVENUE - EXPENSES");       // "20000"
string tax = engine.ParseAndComputeFormula("REVENUE * TAX_RATE");               // "12500"
string netProfit = engine.ParseAndComputeFormula("REVENUE - EXPENSES - TAX");   // "7500"
```

### Sales Analysis

```csharp
CalcData calcData = new CalcData();

// Set sales data for regions
calcData.SetValueRowCol(100000, 1, 1);  // A1 = North Sales
calcData.SetValueRowCol(150000, 2, 1);  // A2 = South Sales
calcData.SetValueRowCol(120000, 3, 1);  // A3 = East Sales
calcData.SetValueRowCol(130000, 4, 1);  // A4 = West Sales

CalcEngine engine = new CalcEngine(calcData);

engine.AddNamedRange("NORTH_SALES", "A1");
engine.AddNamedRange("SOUTH_SALES", "A2");
engine.AddNamedRange("EAST_SALES", "A3");
engine.AddNamedRange("WEST_SALES", "A4");
engine.AddNamedRange("ALL_SALES", "A1:A4");

string topSales = engine.ParseAndComputeFormula("MAX(ALL_SALES)");       // "150000"
string avgSales = engine.ParseAndComputeFormula("AVERAGE(ALL_SALES)");   // "125000"
string totalSales = engine.ParseAndComputeFormula("SUM(ALL_SALES)");     // "500000"
```

---

## Key Methods

| Method | Description |
|--------|-------------|
| `AddNamedRange(string name, string range)` | Create a new named range |
| `RemoveNamedRange(string name)` | Delete a named range |
| `NamedRanges[name]` | Modify or retrieve a named range |
| `NamedRanges.Count` | Get total number of named ranges |
| `NamedRanges.Keys` | Get all named range names |

---

## Quick Reference

```csharp
CalcEngine engine = new CalcEngine(new CalcData());

// Add named ranges
engine.AddNamedRange("PRICE", "A1");
engine.AddNamedRange("QUANTITY", "B1");
engine.AddNamedRange("TAX_RATE", "C1");

// Use in formulas
string total = engine.ParseAndComputeFormula("PRICE * QUANTITY * (1 + TAX_RATE)");

// Modify named range
engine.NamedRanges["PRICE"] = "A1:A10";

// Remove named range
engine.RemoveNamedRange("TAX_RATE");

// Get count
int count = engine.NamedRanges.Count;
```

---

## See Also

- [CalcEngine](calcengine.md) - Core calculation engine
- [Parse and Compute](parse-compute.md) - Formula operations
- [Getting Started](getting-started.md) - Setup guide
- [Operators](operators.md) - Formula operators
