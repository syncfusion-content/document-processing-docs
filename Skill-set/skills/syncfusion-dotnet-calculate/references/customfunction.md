# Custom Functions — Syncfusion Windows Forms Calculation Engine

> Essential Calculate supports 400+ built-in functions. You can extend this by creating and registering custom functions for domain-specific calculations.

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

Custom functions allow you to:

- Extend the built-in function library
- Implement domain-specific calculations
- Reuse calculation logic across formulas
- Support variable numbers of arguments

---

## LibraryFunction Delegate

Custom functions must conform to the `LibraryFunction` delegate signature:

```csharp
public delegate string LibraryFunction(string args);
```

**Parameters:**
- `args` - A string containing comma-separated arguments

**Returns:**
- A string representation of the calculated result

**Naming Rules:**
- Function names must contain only letters, digits, or underscores
- Serves as the hash key in the library

---

## Creating Custom Functions

### Step 1: Write a Method

Create a method that implements the calculation logic:

```csharp
// Simple custom function: Calculate minimum value
public string CustomMin(string args)
{
    double min = double.MaxValue;
    double d;

    // Split arguments by the argument separator
    var splitArgs = args.Split(new char[] { CalcEngine.ParseArgumentSeparator });

    foreach (string s in splitArgs)
    {
        s = engine.GetValueFromArg(s);
        // Parse each argument as a number
        if (double.TryParse(s, NumberStyles.Number | NumberStyles.AllowExponent, null, out d))
            min = Math.Min(min, d);
    }

    return min == double.MaxValue ? "0" : min.ToString();
}
```

### Step 2: Register with CalcEngine

Register the custom function with `CalcEngine`:

```csharp
CalcData calcData = new CalcData();
CalcEngine engine = new CalcEngine(calcData);

// Register custom function
engine.AddFunction("CustomMin", new LibraryFunction(CustomMin));
```

**Rules:**
- Function name must start with an alphabetic character
- Must contain only alphanumeric characters
- Cannot be the name of an existing library function

### Step 3: Use the Custom Function

Use the custom function like any built-in function:

```csharp
// Set values
calcData.SetValueRowCol(100, 1, 1);  // A1 = 100
calcData.SetValueRowCol(50, 1, 2);   // B1 = 50
calcData.SetValueRowCol(75, 1, 3);   // C1 = 75

// Compute using custom function
string result = engine.ParseAndComputeFormula("=CustomMin(A1, B1, C1)");  // "50"
```

---

## Custom Function Examples

### Example 1: Calculate Minimum Value

```csharp
public string CustomMin(string args)
{
    double min = double.MaxValue;
    double d;
    var splitArgs = args.Split(new char[] { CalcEngine.ParseArgumentSeparator });

    foreach (string s in splitArgs)
    {
        s = engine.GetValueFromArg(s);
        if (double.TryParse(s, NumberStyles.Number | NumberStyles.AllowExponent, null, out d))
            min = Math.Min(min, d);
    }

    return min == double.MaxValue ? "0" : min.ToString();
}

// Usage
CalcData calcData = new CalcData();
CalcEngine engine = new CalcEngine(calcData);
engine.AddFunction("MIN_CUSTOM", new LibraryFunction(CustomMin));

calcData.SetValueRowCol(50, 1, 1);
calcData.SetValueRowCol(100, 1, 2);
calcData.SetValueRowCol(75, 1, 3);

string result = engine.ParseAndComputeFormula("=MIN_CUSTOM(A1, B1, C1)");  // "50"
```

---

### Example 2: Calculate Maximum Value

```csharp
public string CustomMax(string args)
{
    double max = double.MinValue;
    double d;
    var splitArgs = args.Split(new char[] { CalcEngine.ParseArgumentSeparator });

    foreach (string s in splitArgs)
    {
        s = engine.GetValueFromArg(s);
        if (double.TryParse(s, NumberStyles.Number | NumberStyles.AllowExponent, null, out d))
            max = Math.Max(max, d);
    }

    return max == double.MinValue ? "0" : max.ToString();
}
```

---

### Example 3: Custom Discount Calculation

```csharp
public string ApplyDiscount(string args)
{
    var splitArgs = args.Split(new char[] { CalcEngine.ParseArgumentSeparator });
    
    if (splitArgs.Length < 2)
        return "Invalid arguments";

    if (double.TryParse(splitArgs[0], out double price) &&
        double.TryParse(splitArgs[1], out double discountPercent))
    {
        double discountedPrice = price * (1 - (discountPercent / 100));
        return discountedPrice.ToString("F2");
    }

    return "Invalid arguments";
}

// Usage
CalcData calcData = new CalcData();
CalcEngine engine = new CalcEngine(calcData);
engine.AddFunction("Discount", new LibraryFunction(ApplyDiscount));

calcData.SetValueRowCol(100, 1, 1);  // Original price
calcData.SetValueRowCol(20, 1, 2);   // Discount %

string result = engine.ParseAndComputeFormula("=Discount(A1, B1)");  // "80.00"
```

---

### Example 4: Grade Calculator

```csharp
public string CalculateGrade(string args)
{
    var splitArgs = args.Split(new char[] { CalcEngine.ParseArgumentSeparator });
    
    if (splitArgs.Length < 1)
        return "Invalid arguments";

    if (double.TryParse(splitArgs[0], out double score))
    {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    }

    return "Invalid arguments";
}

// Usage
engine.AddFunction("Grade", new LibraryFunction(CalculateGrade));

calcData.SetValueRowCol(85, 1, 1);
string result = engine.ParseAndComputeFormula("=Grade(A1)");  // "B"
```

---

### Example 5: Complex Financial Calculation

```csharp
public string CalculateCompoundInterest(string args)
{
    var splitArgs = args.Split(new char[] { CalcEngine.ParseArgumentSeparator });
    
    if (splitArgs.Length < 4)
        return "Invalid arguments";

    if (double.TryParse(splitArgs[0], out double principal) &&
        double.TryParse(splitArgs[1], out double rate) &&
        double.TryParse(splitArgs[2], out double time) &&
        double.TryParse(splitArgs[3], out double frequency))
    {
        double amount = principal * Math.Pow(1 + (rate / frequency), frequency * time);
        return amount.ToString("F2");
    }

    return "Invalid arguments";
}

// Usage
engine.AddFunction("CompoundInterest", new LibraryFunction(CalculateCompoundInterest));

calcData.SetValueRowCol(1000, 1, 1);    // Principal
calcData.SetValueRowCol(0.05, 1, 2);    // Rate (5%)
calcData.SetValueRowCol(5, 1, 3);       // Time (5 years)
calcData.SetValueRowCol(12, 1, 4);      // Frequency (monthly)

string result = engine.ParseAndComputeFormula("=CompoundInterest(A1, B1, C1, D1)");  // Compound amount
```

---

## Managing Custom Functions

### Remove Custom Function

Remove a single custom function by name:

```csharp
CalcEngine engine = new CalcEngine(new CalcData());

// Add custom function
engine.AddFunction("CustomMin", new LibraryFunction(CustomMin));

// Remove custom function
engine.RemoveFunction("CustomMin");
```

### Clear All Functions

Remove all functions (built-in and custom) from the library:

```csharp
CalcEngine engine = new CalcEngine(new CalcData());

// Clear all functions
engine.LibraryFunctions.Clear();
```

---

### Replace Function

To replace a function implementation, remove the old one and add the new one:

```csharp
CalcEngine engine = new CalcEngine(new CalcData());

// Remove old implementation
engine.RemoveFunction("CheckMin");

// Add new implementation with same name
engine.AddFunction("CheckMin", new LibraryFunction(ImprovedCustomMin));
```

---

## Access Library Functions

View all available functions in the library:

```csharp
CalcData calcData = new CalcData();
CalcEngine engine = new CalcEngine(calcData);

// Get the library functions collection
var libraryFunctions = engine.LibraryFunctions;

// List all function names
foreach (var functionName in libraryFunctions.Keys)
{
    Console.WriteLine(functionName);
}

// Check if a function exists
bool hasSum = libraryFunctions.ContainsKey("SUM");
```

---

## Performance Optimization

### Reduce Memory Usage

Removing unused functions reduces memory usage and speeds up parsing:

```csharp
CalcEngine engine = new CalcEngine(new CalcData());

// Clear all functions
engine.LibraryFunctions.Clear();

// Add only the functions you need
engine.AddFunction("SUM", LibraryFunction.Sum);      // Pseudo-code
engine.AddFunction("AVERAGE", LibraryFunction.Average);
engine.AddFunction("CustomCalc", new LibraryFunction(CustomCalc));
```

**Benefits:**
- Reduced memory footprint
- Faster parsing
- Improved performance

---

## Best Practices

### 1. Handle Invalid Arguments

```csharp
public string SafeCalculation(string args)
{
    try
    {
        var splitArgs = args.Split(new char[] { CalcEngine.ParseArgumentSeparator });
        
        if (splitArgs.Length == 0)
            return "#NUM!";  // Return error string

        // Perform calculation
        return result.ToString();
    }
    catch (Exception ex)
    {
        return "#VALUE!";  // Return error string
    }
}
```

### 2. Use Consistent Return Types

```csharp
// Always return string
public string MyFunction(string args)
{
    // ... calculation logic ...
    return result.ToString();  // Convert to string
}
```

### 3. Document Function Behavior

```csharp
/// <summary>
/// Calculates the discount applied to a price
/// </summary>
/// <param name="args">Comma-separated: price, discount percentage</param>
/// <returns>Discounted price as string</returns>
public string ApplyDiscount(string args)
{
    // Implementation
}
```

### 4. Follow Naming Conventions

```csharp
// Good - Clear and descriptive
engine.AddFunction("CalculateDiscount", new LibraryFunction(ApplyDiscount));
engine.AddFunction("CompoundInterest", new LibraryFunction(CalculateCompoundInterest));

// Avoid - Too vague
engine.AddFunction("Calc", new LibraryFunction(MyCalc));
engine.AddFunction("Process", new LibraryFunction(MyProcess));
```

---

## Complete Custom Function Example

```csharp
public class CustomFunctionExample
{
    // Custom function: Calculate average of values
    public string CalculateAverage(string args)
    {
        var splitArgs = args.Split(new char[] { CalcEngine.ParseArgumentSeparator });
        
        if (splitArgs.Length == 0)
            return "0";

        double sum = 0;
        int count = 0;

        foreach (string s in splitArgs)
        {
            s = engine.GetValueFromArg(s);
            if (double.TryParse(s, out double value))
            {
                sum += value;
                count++;
            }
        }

        return count > 0 ? (sum / count).ToString() : "0";
    }

    public static void Main()
    {
        CalcData calcData = new CalcData();
        CalcEngine engine = new CalcEngine(calcData);
        CustomFunctionExample example = new CustomFunctionExample();

        // Register custom function
        engine.AddFunction("MyAverage", new LibraryFunction(example.CalculateAverage));

        // Set values
        calcData.SetValueRowCol(10, 1, 1);   // A1 = 10
        calcData.SetValueRowCol(20, 1, 2);   // B1 = 20
        calcData.SetValueRowCol(30, 1, 3);   // C1 = 30

        // Use custom function
        string result = engine.ParseAndComputeFormula("=MyAverage(A1, B1, C1)");  // "20"

        Console.WriteLine($"Average: {result}");  // "Average: 20"

        // Remove custom function
        engine.RemoveFunction("MyAverage");
    }
}
```

---

## Error Handling

### Standard Error Strings

Return standard Excel-compatible error strings for invalid operations:

```csharp
public string ValidatedCalc(string args)
{
    if (string.IsNullOrEmpty(args))
        return "#VALUE!";  // Invalid value

    if (!IsValidFormat(args))
        return "#REF!";    // Invalid reference

    try
    {
        // Perform calculation
    }
    catch (DivideByZeroException)
    {
        return "#DIV/0!";  // Division by zero
    }
    catch (OverflowException)
    {
        return "#NUM!";    // Numeric error
    }
}
```

### Error Strings Table

| Error | Meaning |
|-------|---------|
| `#VALUE!` | Invalid value type |
| `#DIV/0!` | Division by zero |
| `#REF!` | Invalid reference |
| `#NUM!` | Invalid numeric operation |
| `#NAME?` | Unrecognized function |
| `#N/A` | Value not available |
| `#NULL!` | Invalid range |

---

## Key Methods

| Method | Description |
|--------|-------------|
| `AddFunction(string name, LibraryFunction func)` | Register a custom function |
| `RemoveFunction(string name)` | Remove a custom function |
| `LibraryFunctions.Clear()` | Clear all functions |
| `LibraryFunctions.ContainsKey(string name)` | Check if function exists |

---

## See Also

- [CalcEngine](calcengine.md) - Core engine features
- [Parse and Compute](parse-compute.md) - Formula operations
- [Overview](overview.md) - Built-in functions reference
- [Getting Started](getting-started.md) - Setup guide
