# CalcQuickBase — Syncfusion Windows Forms Calculation Engine

> `CalcQuickBase` is the simplest way to use Essential Calculate. It provides direct formula parsing and computation, variable registration, and automatic calculation tracking without managing complex data sources.

---

## Assembly Reference

```csharp
// NuGet Package
Syncfusion.Calculate.Base

// Namespace
using Syncfusion.Calculate;
```

---

## Overview

`CalcQuickBase` is a predefined class derived from the `ICalcData` interface. It allows you to:

- Parse and compute formulas directly
- Register variable names for use in formulas
- Perform manual or automatic calculations
- Track dependencies between variables

---

## Instantiation

### Minimal Code
```csharp
CalcQuickBase calcQuick = new CalcQuickBase();
```

### Access the Internal Engine
```csharp
CalcQuickBase calcQuick = new CalcQuickBase();
CalcEngine engine = calcQuick.Engine;  // Access underlying CalcEngine
```

---

## Compute Using Values

### Parse and Compute Method

The `ParseAndCompute` method directly parses and computes a formula string without storing it.

#### Simple Expressions
```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

string formula = "(5+25)*2";
string result = calcQuick.ParseAndCompute(formula);  // "60"
```

#### Built-in Formulas
```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

string formula = "SUM(5, 5)";
string result = calcQuick.ParseAndCompute(formula);  // "10"

string formula2 = "AVERAGE(10, 20, 30)";
string result2 = calcQuick.ParseAndCompute(formula2);  // "20"
```

---

## Compute Using Variables

### Register Variable Names

Variables in `CalcQuickBase` must be enclosed in square brackets `[ ]`. Variable names must:

- Begin with an alphabetical character
- Contain only letters and digits
- Be case-insensitive
- Serve as indexer keys for the `CalcQuickBase` object

```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

// Register variables by assigning values
calcQuick["A"] = "5";
calcQuick["B"] = "6";
calcQuick["C"] = "11";
```

### Direct Computation with Variables

To treat a string as a formula, prefix it with the `FormulaCharacter` (default: `=`). This enables automatic parsing and computation.

```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

// Register variables
calcQuick["A"] = "5";
calcQuick["B"] = "6";
calcQuick["C"] = "11";

// Compute expressions with variables
calcQuick["result"] = "=([A]+[B])/[C]";  // "1"

// Compute built-in formulas with variables
calcQuick["sum"] = "=SUM([A], [B])";  // "11"

// Access the results
string expressionResult = calcQuick["result"];  // "1"
string sumResult = calcQuick["sum"];            // "11"
```

### Using ParseAndCompute with Variables

Any formula passed to `ParseAndCompute` is automatically treated as a formula, regardless of the `FormulaCharacter`.

```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

// Register variables
calcQuick["A"] = "5";
calcQuick["B"] = "6";
calcQuick["C"] = "11";

// Compute expressions
string expressionResult = calcQuick.ParseAndCompute("([A]+[B])/[C]");  // "1"

// Compute formulas
string sumResult = calcQuick.ParseAndCompute("SUM([A], [B])");  // "11"
```

### Demo Code
```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

calcQuick["A"] = "5";
calcQuick["B"] = "6";
calcQuick["C"] = "11";

// Using direct formula assignment
calcQuick["result"] = calcQuick.ParseAndCompute("([A]+[B])/[C]");

// Using built-in formula
calcQuick["result"] = calcQuick.ParseAndCompute("SUM([A], [B])");

Console.WriteLine(calcQuick["result"]);  // Output depends on last assignment
```

---

## Automatic Calculations

By default, `CalcQuickBase` does not track dependencies between variables. To enable automatic recalculation, set the `AutoCalc` property to `true`.

### Enable Auto Calculation

```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

// Register variables
calcQuick["A"] = "5";
calcQuick["B"] = "6";
calcQuick["C"] = "11";

// Create a dependent formula
calcQuick["result"] = "=SUM([A], [B], [C])";

// Enable automatic calculation
calcQuick.AutoCalc = true;

// Change a variable value
calcQuick["C"] = "3";

// Refresh to recalculate all dependent formulas
calcQuick.RefreshAllCalculations();

// Get the updated result
var output = calcQuick["result"];  // "14" (5 + 6 + 3)
```

### Without ParseAndCompute Method

```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

// Register variables
calcQuick["A"] = "5";
calcQuick["B"] = "6";
calcQuick["C"] = "11";

// Create formula using FormulaCharacter
calcQuick["result"] = "=[A]+[B]+[C]";

// Enable automatic calculation
calcQuick.AutoCalc = true;

// Change variable value
calcQuick["C"] = "3";

// Refresh all calculations
calcQuick.RefreshAllCalculations();

// Access updated result
var output = calcQuick["result"];  // "14"
```

### Complete Example with Auto Calculation

```csharp
// Initialize
CalcQuickBase calcQuick = new CalcQuickBase();

// Register variables with values
calcQuick["A"] = "5";
calcQuick["B"] = "6";
calcQuick["C"] = "11";

// Compute and store result
calcQuick["result"] = calcQuick.ParseAndCompute("SUM([A],[B],[C])");

// Enable automatic calculation mode
calcQuick.AutoCalc = true;

// Change variable "C" to "3"
calcQuick["C"] = "3";

// Recalculate formulas stored in CalcQuickBase
calcQuick.RefreshAllCalculations();

// Output result after change
var output = calcQuick["result"];  // Updated based on AutoCalc

Console.WriteLine($"Result: {output}");
```

---

## Reset Keys

All registered variables can be cleared using the `ResetKeys` method.

```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

// Register variables
calcQuick["A"] = "5";
calcQuick["B"] = "6";
calcQuick["C"] = "11";

// Clear all registered keys
calcQuick.ResetKeys();

// Variables are now cleared
var value = calcQuick["A"];  // null
```

---

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| `Engine` | `CalcEngine` | Gets the underlying CalcEngine object for advanced operations |
| `AutoCalc` | `bool` | Gets or sets whether automatic calculation is enabled (default: `false`) |
| `FormulaCharacter` | `char` | Gets or sets the character to identify formulas (default: `'='`) |

---

## Key Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `ParseAndCompute(string formula)` | `string` | Parses and computes a formula string and returns the result |
| `RefreshAllCalculations()` | `void` | Forces recalculation of all dependent variables when `AutoCalc = true` |
| `ResetKeys()` | `void` | Clears all registered variable keys |

---

## Indexer

`CalcQuickBase` supports indexer-based access to variables:

```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

// Set value using indexer
calcQuick["A"] = "10";

// Get value using indexer
string value = calcQuick["A"];  // "10"

// Set formula using indexer
calcQuick["result"] = "=[A] * 2";  // "20"

// Get formula result using indexer
string result = calcQuick["result"];  // "20"
```

---

## Common Use Cases

### Use Case 1: Simple Calculator
```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

string result1 = calcQuick.ParseAndCompute("5 + 5");           // "10"
string result2 = calcQuick.ParseAndCompute("10 * 2");          // "20"
string result3 = calcQuick.ParseAndCompute("100 / 4");         // "25"
string result4 = calcQuick.ParseAndCompute("2 ^ 8");           // "256"
```

### Use Case 2: Variable-Based Calculations
```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

calcQuick["Price"] = "100";
calcQuick["Quantity"] = "5";
calcQuick["Tax"] = "0.15";

calcQuick["SubTotal"] = "=[Price]*[Quantity]";
calcQuick["TaxAmount"] = "=[SubTotal]*[Tax]";
calcQuick["Total"] = "=[SubTotal]+[TaxAmount]";

Console.WriteLine($"Total: {calcQuick["Total"]}");  // "575"
```

### Use Case 3: Dynamic Updates with Auto Calculation
```csharp
CalcQuickBase calcQuick = new CalcQuickBase();
calcQuick.AutoCalc = true;

calcQuick["Sales"] = "1000";
calcQuick["Commission"] = "=[Sales]*0.1";

Console.WriteLine($"Commission: {calcQuick["Commission"]}");  // "100"

// Update sales
calcQuick["Sales"] = "2000";
calcQuick.RefreshAllCalculations();

Console.WriteLine($"Commission: {calcQuick["Commission"]}");  // "200"
```

### Use Case 4: Built-in Formula Functions
```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

calcQuick["A"] = "10";
calcQuick["B"] = "20";
calcQuick["C"] = "15";

string sum = calcQuick.ParseAndCompute("SUM([A], [B], [C])");      // "45"
string avg = calcQuick.ParseAndCompute("AVERAGE([A], [B], [C])");  // "15"
string max = calcQuick.ParseAndCompute("MAX([A], [B], [C])");      // "20"
string min = calcQuick.ParseAndCompute("MIN([A], [B], [C])");      // "10"
```

---

## Quick Reference

```csharp
// Create instance
CalcQuickBase calcQuick = new CalcQuickBase();

// Direct computation
string r1 = calcQuick.ParseAndCompute("5+5");

// Register variables
calcQuick["X"] = "10";
calcQuick["Y"] = "20";

// Use variables in formulas
calcQuick["Z"] = "=[X]+[Y]";
string r2 = calcQuick.ParseAndCompute("=[X]*[Y]");

// Auto calculation
calcQuick.AutoCalc = true;
calcQuick["X"] = "5";
calcQuick.RefreshAllCalculations();

// Clear all
calcQuick.ResetKeys();
```

---

## Comparison with CalcEngine

| Feature | CalcQuickBase | CalcEngine |
|---------|--------------|-----------|
| **Ease of Use** | Very Simple | Moderate |
| **Data Source** | Variables only | Arbitrary (ICalcData) |
| **Setup Required** | Minimal | Requires ICalcData implementation |
| **Cell References** | Square bracket variables `[X]` | Cell coordinates `A1, B2` |
| **Best For** | Quick calculations, prototyping | Data grids, complex scenarios |

---

## Best Practices

1. **Use `ParseAndCompute`** when you don't need to store formula results
2. **Enable `AutoCalc`** when working with dependent calculations
3. **Call `RefreshAllCalculations`** after updating variables with AutoCalc enabled
4. **Use `ResetKeys`** to clear unused variables and free memory
5. **Leverage Built-in Functions** for complex calculations (SUM, AVERAGE, IF, etc.)

---

## See Also

- [CalcEngine](calcengine.md) - Advanced calculation engine
- [ICalcData](icalcdata.md) - Custom data source interface
- [Parse and Compute](parse-compute.md) - Formula parsing and computation
- [Getting Started](getting-started.md) - Comparison guide
