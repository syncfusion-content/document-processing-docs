# Parse and Compute — Syncfusion Windows Forms Calculation Engine

> This section describes parsing and computing formulas in Essential Calculate. Learn how to convert formulas into Reverse Polish Notation (RPN) and compute results.

---

## Assembly Reference

```csharp
// NuGet Package
Syncfusion.Calculate.Base

// Namespace
using Syncfusion.Calculate;
```

---

## Parsing Overview

Essential Calculate includes a built-in formula parser that converts formulas into an optimized format for efficient computation.

### Parse Formula

The `ParseFormula` method converts a formula string into Reverse Polish Notation (RPN) expression.

#### How ParseFormula Works

- Converts infix notation to RPN (stack-based evaluation format)
- Recognizes and replaces Named Ranges with their values
- Tokenizes operators, operands, and library functions
- Returns a string representation of parsed tokens

#### Example

**Input Formula:** `2+3*1`

**Parsed Formula (RPN):** `n2n3n1ma`

*Where: `n` = number, `m` = multiply, `a` = add*

---

## Parse Formula Method

### Using ICalcData

```csharp
CalcData calcData = new CalcData();
CalcEngine engine = new CalcEngine(calcData);

string formula = "2+3*1";
string parsedFormula = engine.ParseFormula(formula);
// Output: "n2n3n1ma"
```

### Using CalcQuickBase

```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

string formula = "2+3*1";
string parsedFormula = calcQuick.Engine.ParseFormula(formula);
// Output: "n2n3n1ma"
```

---

## Parsing Order & Operator Precedence

The parser processes formulas according to the following operator precedence:

1. **E+ E-** - Exponential notation (e.g., `1.2e-1`, `1.2e+1`)
2. **^** - Exponentiation
3. **/ \*** - Division and Multiplication
4. **+ -** - Addition and Subtraction (binary)
5. **< > = <= >= <>** - Comparison operators
6. **&** - Text concatenation

### Parsing Direction
All operations are parsed **left to right** within the same precedence level.

---

## Computation Overview

### ComputeFormula

The `ComputeFormula` method evaluates a pre-parsed (RPN) formula string and returns the computed result.

#### Algorithm
- Uses a stack-oriented calculation technique
- Pops operands from stack as needed
- Applies operators
- Pushes results back onto stack

---

## ComputeFormula Method

### Using ICalcData

```csharp
CalcData calcData = new CalcData();
CalcEngine engine = new CalcEngine(calcData);

string formula = "2+3*1";

// Step 1: Parse the formula
string parsedFormula = engine.ParseFormula(formula);

// Step 2: Compute the parsed formula
string result = engine.ComputeFormula(parsedFormula);  // "5"
```

### Using CalcQuickBase

```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

string formula = "2+3*1";

// Step 1: Parse
string parsedFormula = calcQuick.Engine.ParseFormula(formula);

// Step 2: Compute
string result = calcQuick.Engine.ComputeFormula(parsedFormula);  // "5"
```

### Recompute with Different Values

```csharp
CalcData calcData = new CalcData();
CalcEngine engine = new CalcEngine(calcData);

// Parse once
string parsedFormula = engine.ParseFormula("A1 + B1 * 2");

// Compute with first set of values
calcData.SetValueRowCol(10, 1, 1);  // A1 = 10
calcData.SetValueRowCol(5, 1, 2);   // B1 = 5
string result1 = engine.ComputeFormula(parsedFormula);  // "20" (10 + 5*2)

// Compute with different values (no re-parsing needed)
calcData.SetValueRowCol(20, 1, 1);  // A1 = 20
calcData.SetValueRowCol(3, 1, 2);   // B1 = 3
string result2 = engine.ComputeFormula(parsedFormula);  // "26" (20 + 3*2)
```

---

## ParseAndCompute (CalcQuickBase)

The `ParseAndCompute` method on `CalcQuickBase` combines parsing and computation in a single call.

### Simple Usage

```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

// Direct computation
string result = calcQuick.ParseAndCompute("(5+25)*2");  // "60"
```

### With Built-in Functions

```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

string result = calcQuick.ParseAndCompute("SUM(5, 5)");  // "10"
```

### With Variables

```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

calcQuick["A"] = "10";
calcQuick["B"] = "20";

string result = calcQuick.ParseAndCompute("[A] + [B]");  // "30"
```

---

## ParseAndComputeFormula (CalcEngine)

The `ParseAndComputeFormula` method combines parsing and computation in a single call with full formula support.

### Using ICalcData

```csharp
CalcData calcData = new CalcData();
CalcEngine engine = new CalcEngine(calcData);

// Expressions
string result1 = engine.ParseAndComputeFormula("(5+25)*2");  // "60"

// Built-in formulas
string result2 = engine.ParseAndComputeFormula("SUM(4,5,6)");  // "15"
```

### With Cell References

```csharp
CalcData calcData = new CalcData();

// Set cell values
calcData.SetValueRowCol(10, 1, 1);   // A1 = 10
calcData.SetValueRowCol(20, 1, 2);   // B1 = 20
calcData.SetValueRowCol(30, 1, 3);   // C1 = 30

CalcEngine engine = new CalcEngine(calcData);

string result = engine.ParseAndComputeFormula("SUM(A1, B1, C1)");  // "60"
```

### Using CalcQuickBase

```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

string result1 = calcQuick.Engine.ParseAndComputeFormula("(5+25)*2");
string result2 = calcQuick.Engine.ParseAndComputeFormula("SUM(4,5,6)");
```

---

## Error Messages

### ErrorStrings Array

Excel-compatible error strings recognized by Essential Calculate:

```csharp
CalcEngine engine = new CalcEngine(new CalcData());

string[] excelErrors = CalcEngine.ErrorStrings;
// Output: "#N/A", "#VALUE!", "#REF!", "#DIV/0!", "#NUM!", "#NAME?", "#NULL!"
```

### FormulaErrorStrings Array

Internal error strings used by Essential Calculate:

```csharp
CalcEngine engine = new CalcEngine(new CalcData());

string[] internalErrors = CalcEngine.FormulaErrorStrings;
```

#### Default FormulaErrorStrings

| Error | Description |
|-------|-------------|
| `"binary operators cannot start an expression"` | Expression starts with binary operator |
| `"cannot parse"` | Parsing failed |
| `"bad library"` | Invalid library function |
| `"invalid char in front of"` | Invalid character placement |
| `"number contains 2 decimal points"` | Invalid number format |
| `"expression cannot end with an operator"` | Missing operand at expression end |
| `"invalid characters following an operator"` | Invalid character after operator |
| `"mismatched parentheses"` | Unbalanced parentheses |
| `"unknown formula name"` | Function not recognized |
| `"requires a single argument"` | Wrong number of arguments |
| `"circular reference: "` | Circular dependency detected |
| `"wrong number of arguments"` | Function argument count mismatch |
| `"invalid arguments"` | Invalid argument type/format |
| `"Calculation overflow"` | Result too large |
| `"Missing sheet"` | Referenced sheet not found |
| `"too complex"` | Formula exceeds complexity limit |

### Customize Error Strings

```csharp
CalcEngine engine = new CalcEngine(new CalcData());

// Modify error strings
CalcEngine.ErrorStrings[0] = "Custom N/A Error";

// Reload after customization
engine.ReloadErrorStrings();
```

---

## Formatting Computed Results

By default, computed values are returned as strings. Format them as needed:

### Format as Decimal

```csharp
CalcData calcData = new CalcData();
CalcEngine engine = new CalcEngine(calcData);

string formula = "SUM(4,5,6)";
string result = engine.ParseAndComputeFormula(formula);

// Format as decimal with 2 decimal places
string formatted = decimal.Parse(result).ToString("0.00");  // "15.00"
```

### Format as Percentage

```csharp
string formula = "0.25";
string result = engine.ParseAndComputeFormula(formula);

// Format as percentage
string formatted = double.Parse(result).ToString("0.00%");  // "25.00%"
```

### Format as Currency

```csharp
string formula = "SUM(100, 50.50)";
string result = engine.ParseAndComputeFormula(formula);

// Format as currency
string formatted = decimal.Parse(result).ToString("C");  // "$150.50"
```

### Format as Integer

```csharp
string formula = "ROUND(3.7)";
string result = engine.ParseAndComputeFormula(formula);

// Parse as integer
int formatted = int.Parse(result);  // 4
```

---

## Using CalcQuickBase

```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

string formula = "SUM(4,5,6)";

// Format as decimal
string decResult = decimal.Parse(calcQuick.ParseAndCompute(formula)).ToString("0.00");

// Format as percentage
string pctResult = double.Parse(calcQuick.ParseAndCompute(formula)).ToString("0.00%");
```

---

## Performance Optimization

### Parse Once, Compute Multiple Times

For frequently reused formulas, parse once and compute multiple times:

```csharp
CalcData calcData = new CalcData();
CalcEngine engine = new CalcEngine(calcData);

// Parse once
string parsedFormula = engine.ParseFormula("A1 + B1");

// Compute multiple times with different values
for (int i = 0; i < 1000; i++)
{
    calcData.SetValueRowCol(i * 10, 1, 1);      // A1
    calcData.SetValueRowCol(i * 5, 1, 2);       // B1
    
    string result = engine.ComputeFormula(parsedFormula);  // Reuse parsed formula
}
```

### Direct ParseAndComputeFormula

For one-time computations:

```csharp
CalcEngine engine = new CalcEngine(new CalcData());

// All-in-one approach
string result = engine.ParseAndComputeFormula("(5+25)*2");
```

---

## Complete Example

```csharp
public class ParseAndComputeExample
{
    public static void Main()
    {
        CalcData calcData = new CalcData();
        CalcEngine engine = new CalcEngine(calcData);

        // Set cell values
        calcData.SetValueRowCol(100, 1, 1);  // A1 = 100
        calcData.SetValueRowCol(50, 1, 2);   // B1 = 50
        calcData.SetValueRowCol(25, 1, 3);   // C1 = 25

        // Example 1: Direct computation
        string expr1 = engine.ParseAndComputeFormula("(5+10)*2");
        Console.WriteLine($"Expression: {expr1}");  // "30"

        // Example 2: Cell references
        string expr2 = engine.ParseAndComputeFormula("SUM(A1, B1, C1)");
        Console.WriteLine($"Sum: {expr2}");  // "175"

        // Example 3: Parse and compute separately
        string parsed = engine.ParseFormula("A1 - B1");
        string expr3 = engine.ComputeFormula(parsed);
        Console.WriteLine($"Subtraction: {expr3}");  // "50"

        // Example 4: Format result
        decimal formatted = decimal.Parse(expr2);
        Console.WriteLine($"Formatted: {formatted.ToString("C")}");  // "$175.00"
    }
}
```

---

## Key Points

1. **Parsing converts to RPN** - Enables efficient stack-based evaluation
2. **Parse once, compute multiple times** - Better performance for repeated use
3. **Cell references supported** - Through `ICalcData` or cross-sheet references
4. **Error handling** - Both Excel-compatible and internal error strings
5. **Result formatting** - Convert string results to desired format

---

## See Also

- [CalcEngine](calcengine.md) - Advanced engine features
- [CalcQuickBase](calcquickbase.md) - Simple calculation interface
- [ICalcData](icalcdata.md) - Data source implementation
- [Operators](operators.md) - Formula operators and precedence
