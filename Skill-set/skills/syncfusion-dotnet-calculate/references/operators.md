# Operators — Syncfusion Windows Forms Calculation Engine

> Operators define the type of calculation in an equation. Essential Calculate supports arithmetic, logical, and text concatenation operators with a defined precedence order.

---

## Assembly Reference

```csharp
// NuGet Package
Syncfusion.Calculate.Base

// Namespace
using Syncfusion.Calculate;
```

---

## Arithmetic Operators

Arithmetic operators perform mathematical operations such as addition, subtraction, multiplication, division, and exponentiation.

| Operator | Name | Denotation | Example | Result |
|----------|------|-----------|---------|--------|
| **+** | Addition | Add two values | `5 + 3` | `8` |
| **-** | Unary Negation | Negate a value | `-5` | `-5` |
| **-** | Subtraction | Subtract two values | `10 - 3` | `7` |
| **\*** | Multiplication | Multiply two values | `4 * 3` | `12` |
| **/** | Division | Divide two values | `20 / 4` | `5` |
| **^** | Exponentiation | Raise to a power | `2 ^ 3` | `8` |

### Arithmetic Operator Examples

```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

// Addition
string r1 = calcQuick.ParseAndCompute("10 + 5");        // "15"

// Subtraction
string r2 = calcQuick.ParseAndCompute("20 - 8");        // "12"

// Multiplication
string r3 = calcQuick.ParseAndCompute("6 * 7");         // "42"

// Division
string r4 = calcQuick.ParseAndCompute("100 / 4");       // "25"

// Exponentiation
string r5 = calcQuick.ParseAndCompute("2 ^ 10");        // "1024"

// Unary Negation
string r6 = calcQuick.ParseAndCompute("-50");           // "-50"

// Complex
string r7 = calcQuick.ParseAndCompute("(10 + 5) * 2 - 3 / 3");  // "29"
```

---

## Logical Operators

Logical (comparison) operators compare two values and return either `True` (1) or `False` (0).

| Operator | Name | Denotation | Example | Result |
|----------|------|-----------|---------|--------|
| **<** | Less Than | Check if less than | `5 < 10` | `True` (1) |
| **>** | Greater Than | Check if greater than | `10 > 5` | `True` (1) |
| **=** | Equal To | Check if equal | `5 = 5` | `True` (1) |
| **<=** | Less Than or Equal | Check if ≤ | `5 <= 10` | `True` (1) |
| **>=** | Greater Than or Equal | Check if ≥ | `10 >= 5` | `True` (1) |
| **<>** | Not Equal | Check if ≠ | `5 <> 10` | `True` (1) |

### Logical Operator Examples

```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

// Less Than
string r1 = calcQuick.ParseAndCompute("5 < 10");        // "1" (True)

// Greater Than
string r2 = calcQuick.ParseAndCompute("10 > 5");        // "1" (True)

// Equal To
string r3 = calcQuick.ParseAndCompute("5 = 5");         // "1" (True)
string r4 = calcQuick.ParseAndCompute("5 = 10");        // "0" (False)

// Less Than or Equal
string r5 = calcQuick.ParseAndCompute("5 <= 10");       // "1" (True)

// Greater Than or Equal
string r6 = calcQuick.ParseAndCompute("10 >= 5");       // "1" (True)

// Not Equal
string r7 = calcQuick.ParseAndCompute("5 <> 10");       // "1" (True)
string r8 = calcQuick.ParseAndCompute("5 <> 5");        // "0" (False)
```

### Using Logical Results in Calculations

True evaluates to **1** and False evaluates to **0** in arithmetic contexts:

```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

// Logical result as 1
string r1 = calcQuick.ParseAndCompute("(5 < 10) * 100");     // "100"

// Logical result as 0
string r2 = calcQuick.ParseAndCompute("(5 > 10) * 100");     // "0"

// Complex logical expression
string r3 = calcQuick.ParseAndCompute("(10 > 5) + (3 < 7)"); // "2"
```

---

## Text Concatenation Operator

The ampersand (&) operator concatenates (combines) text strings.

| Operator | Name | Denotation | Example | Result |
|----------|------|-----------|---------|--------|
| **&** | Concatenation | Join text strings | `"Hello" & " " & "World"` | `"Hello World"` |

### Text Concatenation Examples

```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

// Simple concatenation
string r1 = calcQuick.ParseAndCompute("\"Hello\" & \" \" & \"World\"");
// Result: "Hello World"

// With variables
calcQuick["FirstName"] = "\"John\"";
calcQuick["LastName"] = "\"Doe\"";
string r2 = calcQuick.ParseAndCompute("[FirstName] & \" \" & [LastName]");
// Result: "John Doe"

// Mix text and numbers
string r3 = calcQuick.ParseAndCompute("\"Total: \" & \"$\" & (100 + 50)");
// Result: "Total: $150"
```

---

## Operator Precedence

All operations follow a strict hierarchy. Operations at level 1 are performed first, followed by level 2, and so on. Within the same precedence level, operations are performed **left to right**.

| Level | Operators | Description |
|-------|-----------|-------------|
| **1** | **(Unary Minus)** | Negation |
| **2** | **^ / \*** | Exponentiation, Division, Multiplication |
| **3** | **+ -** | Addition, Subtraction |
| **4** | **< > = <= >= <>** | Comparison operators |
| **5** | **&** | Text concatenation |

### Operator Precedence Examples

```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

// Example 1: Unary minus (highest priority)
string r1 = calcQuick.ParseAndCompute("-2 ^ 2");  // "4" (not -4, negation applied after power)

// Example 2: Exponentiation before division and multiplication
string r2 = calcQuick.ParseAndCompute("6 / 2 * 3");   // "9" (left to right: 6/2=3, 3*3=9)

// Example 3: Division before addition
string r3 = calcQuick.ParseAndCompute("2 + 6 / 2");   // "5" (6/2=3 first, then 2+3)

// Example 4: Multiplication before subtraction
string r4 = calcQuick.ParseAndCompute("10 - 2 * 3");  // "4" (2*3=6 first, then 10-6)

// Example 5: Addition before comparison
string r5 = calcQuick.ParseAndCompute("5 + 3 > 7");   // "1" (5+3=8, then 8>7=1)

// Example 6: Comparison before concatenation
string r6 = calcQuick.ParseAndCompute("\"Result: \" & (10 > 5)");  // "Result: 1"
```

---

## Changing Default Precedence with Parentheses

Use parentheses `()` to override default operator precedence:

### Examples

```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

// Without parentheses
string r1 = calcQuick.ParseAndCompute("6 / 2 + 1");    // "4" (6/2=3, 3+1=4)

// With parentheses
string r2 = calcQuick.ParseAndCompute("6 / (2 + 1)");  // "2" (2+1=3, 6/3=2)

// Without parentheses
string r3 = calcQuick.ParseAndCompute("2 + 4 / 2");    // "4" (4/2=2, 2+2=4)

// With parentheses
string r4 = calcQuick.ParseAndCompute("(2 + 4) / 2");  // "3" (2+4=6, 6/2=3)

// Complex expression
string r5 = calcQuick.ParseAndCompute("((10 + 5) * 2) - (3 / 3)");  // "29"
```

---

## Formula Character & Square Brackets

### Formula Character (Equal Sign)

To indicate that a string is a formula, prefix it with the `FormulaCharacter` (default: `=`).

```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

// With formula character
calcQuick["Result"] = "= 5 + 5";      // Treated as formula
string r1 = calcQuick["Result"];      // "10"

// Without formula character (treated as string)
calcQuick["Value"] = "5 + 5";         // Stored as string
string r2 = calcQuick["Value"];       // "5 + 5"

// ParseAndCompute always treats as formula
string r3 = calcQuick.ParseAndCompute("5 + 5");  // "10" (no = needed)
```

### Square Brackets for Variables

In `CalcQuickBase`, variables must be enclosed in square brackets `[ ]`:

```csharp
CalcQuickBase calcQuick = new CalcQuickBase();

// Register variables with square brackets
calcQuick["A"] = "10";
calcQuick["B"] = "20";

// Use in formulas with square brackets
string result = calcQuick.ParseAndCompute("[A] + [B]");  // "30"

// Or with formula character assignment
calcQuick["Total"] = "=[A] + [B]";
string total = calcQuick["Total"];  // "30"
```

---

## Operator Usage Guidelines

### 1. Use Parentheses for Clarity

```csharp
// Clear and unambiguous
string r1 = calcQuick.ParseAndCompute("(10 + 5) * 2");     // "30"

// May be unclear
string r2 = calcQuick.ParseAndCompute("10 + 5 * 2");       // "20"
```

### 2. Mix Logical and Arithmetic Operators

```csharp
// Use IF with logical operators
CalcQuickBase calcQuick = new CalcQuickBase();
calcQuick["Score"] = "85";
string grade = calcQuick.ParseAndCompute("IF([Score] >= 90, \"A\", IF([Score] >= 80, \"B\", \"C\"))");
// Result: "B"
```

### 3. Text Concatenation for Output Formatting

```csharp
CalcQuickBase calcQuick = new CalcQuickBase();
calcQuick["Price"] = "100";
calcQuick["Quantity"] = "5";

string receipt = calcQuick.ParseAndCompute("\"Total: $\" & ([Price] * [Quantity])");
// Result: "Total: $500"
```

---

## Complete Operator Example

```csharp
public class OperatorExample
{
    public static void Main()
    {
        CalcQuickBase calcQuick = new CalcQuickBase();

        // Register variables
        calcQuick["Price"] = "100";
        calcQuick["Quantity"] = "5";
        calcQuick["TaxRate"] = "0.10";

        // Arithmetic: Calculate subtotal
        string subtotal = calcQuick.ParseAndCompute("[Price] * [Quantity]");  // "500"

        // Arithmetic: Calculate tax
        string tax = calcQuick.ParseAndCompute("[Price] * [Quantity] * [TaxRate]");  // "50"

        // Arithmetic: Calculate total
        string total = calcQuick.ParseAndCompute("[Price] * [Quantity] * (1 + [TaxRate])");  // "550"

        // Logical: Check if expensive
        string isExpensive = calcQuick.ParseAndCompute("[Price] > 50");  // "1" (True)

        // Concatenation: Format output
        string receipt = calcQuick.ParseAndCompute("\"Total: $\" & ([Price] * [Quantity])");  // "Total: $500"

        Console.WriteLine($"Subtotal: ${subtotal}");     // "Subtotal: $500"
        Console.WriteLine($"Tax: ${tax}");               // "Tax: $50"
        Console.WriteLine($"Total: ${total}");           // "Total: $550"
        Console.WriteLine($"Expensive: {isExpensive}");  // "Expensive: 1"
        Console.WriteLine(receipt);                       // "Total: $500"
    }
}
```

---

## Operator Reference Table

| Operator | Type | Usage | Example | Notes |
|----------|------|-------|---------|-------|
| + | Arithmetic | Addition | `5 + 3` | Binary operator |
| - | Arithmetic | Subtraction | `10 - 3` | Binary operator |
| - | Arithmetic | Negation | `-5` | Unary operator |
| * | Arithmetic | Multiplication | `4 * 3` | Binary operator |
| / | Arithmetic | Division | `20 / 4` | Binary operator |
| ^ | Arithmetic | Exponentiation | `2 ^ 3` | Binary operator |
| < | Logical | Less Than | `5 < 10` | Returns 1 (True) or 0 (False) |
| > | Logical | Greater Than | `10 > 5` | Returns 1 (True) or 0 (False) |
| = | Logical | Equal To | `5 = 5` | Returns 1 (True) or 0 (False) |
| <= | Logical | Less or Equal | `5 <= 10` | Returns 1 (True) or 0 (False) |
| >= | Logical | Greater or Equal | `10 >= 5` | Returns 1 (True) or 0 (False) |
| <> | Logical | Not Equal | `5 <> 10` | Returns 1 (True) or 0 (False) |
| & | Text | Concatenation | `"Hello" & " World"` | Joins strings |

---

## See Also

- [Parse and Compute](parse-compute.md) - Formula parsing
- [Named Ranges](namedranges.md) - Named cell references
- [CalcEngine](calcengine.md) - Advanced features
- [Getting Started](getting-started.md) - Setup guide
