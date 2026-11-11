# CalcEngine — Syncfusion Calculate Engine

> Core computation engine for Essential Calculate. `CalcEngine` accepts an `ICalcData` object as its data source and provides methods to parse, compute, and manage formulas with full dependency tracking and cross-sheet support.

---

## Assembly Reference

```csharp
// NuGet Package
Syncfusion.Calculate.Base

// Namespace
using Syncfusion.Calculate;
```

---

## Instantiation

### Minimal Code
```csharp
CalcData calcData = new CalcData(); // class derived from ICalcData
CalcEngine engine = new CalcEngine(calcData);
```

---

## Parse Formula

`ParseFormula` converts a formula string into a Reverse Polish Notation (RPN) token string that `CalcEngine` can compute efficiently.

```csharp
CalcData calcData = new CalcData();
CalcEngine engine = new CalcEngine(calcData);

string formula = "2+3*1";
string parsedFormula = engine.ParseFormula(formula);
// e.g., returns "n2n3n1ma"
```

### Using CalcQuickBase Engine
```csharp
CalcQuickBase calcQuick = new CalcQuickBase();
string parsedFormula = calcQuick.Engine.ParseFormula("2+3*1");
```

---

## Compute Formula

`ComputeFormula` evaluates a pre-parsed (RPN) formula string and returns the computed result.

```csharp
CalcData calcData = new CalcData();
CalcEngine engine = new CalcEngine(calcData);

string parsedFormula = engine.ParseFormula("2+3*1");
string result = engine.ComputeFormula(parsedFormula);  // "5"
```

### Using CalcQuickBase Engine
```csharp
CalcQuickBase calcQuick = new CalcQuickBase();
string parsedFormula = calcQuick.Engine.ParseFormula("2+3*1");
string result = calcQuick.Engine.ComputeFormula(parsedFormula);
```

---

## ParseAndComputeFormula

Combines parse and compute in a single call. Evaluates formulas using cell references resolved from the `ICalcData` object.

### Compute Expression
```csharp
CalcData calcData = new CalcData();
CalcEngine engine = new CalcEngine(calcData);

string result = engine.ParseAndComputeFormula("(5+25)*2");  // "60"
```

### Compute Built-in Formula
```csharp
string result = engine.ParseAndComputeFormula("SUM(4,5,6)");  // "15"
```

### Compute with Cell References
```csharp
CalcData calcData = new CalcData();
calcData.SetValueRowCol(10, 1, 1);  // A1 = 10
calcData.SetValueRowCol(20, 1, 2);  // B1 = 20

CalcEngine engine = new CalcEngine(calcData);

string result = engine.ParseAndComputeFormula("SUM(A1, B1)");  // "30"
```

### Using CalcQuickBase Engine
```csharp
CalcQuickBase calcQuick = new CalcQuickBase();
string result = calcQuick.Engine.ParseAndComputeFormula("SUM(4,5,6)");
```

---

## Cross-Sheet Reference

Register multiple `ICalcData` objects under a shared family ID to enable formula references across sheets.

```csharp
// Data sources
CalcData calcData  = new CalcData();
CalcData calcData1 = new CalcData();

calcData.SetValueRowCol(10, 1, 1);   // Sheet1!A1 = 10
calcData1.SetValueRowCol(20, 1, 1);  // Sheet2!A1 = 20

// Create engines
CalcEngine engine  = new CalcEngine(calcData);
CalcEngine engine1 = new CalcEngine(calcData1);

// Create shared family ID
int familyId = CalcEngine.CreateSheetFamilyID();

// Register both sheets in the same family
engine.RegisterGridAsSheet("Sheet1", calcData,  familyId);
engine.RegisterGridAsSheet("Sheet2", calcData1, familyId);

// Cross-sheet formula
string result = engine.ParseAndComputeFormula("SUM(Sheet1!A1, Sheet2!A1)");  // "30"
```

---

## Region / Culture Settings

Override the default argument separator (`,`) and decimal separator (`.`) to match the current culture.

```csharp
// Assign current culture's decimal separator
CalcEngine.ParseDecimalSeparator =
    System.Threading.Thread.CurrentThread.CurrentCulture
        .NumberFormat.NumberDecimalSeparator.ToCharArray()[0];

// Assign current culture's argument separator
CalcEngine.ParseArgumentSeparator =
    System.Threading.Thread.CurrentThread.CurrentCulture
        .TextInfo.ListSeparator.ToCharArray()[0];
```

---

## Format Computed Results

```csharp
CalcData calcData = new CalcData();
CalcEngine engine = new CalcEngine(calcData);

string formula = "SUM(4,5,6)";

// Format as decimal
string decResult = decimal.Parse(engine.ParseAndComputeFormula(formula)).ToString("0.00");

// Format as percentage
string pctResult = double.Parse(engine.ParseAndComputeFormula(formula)).ToString("0.00%");
```

---

## Error Strings

`CalcEngine` exposes two arrays for error message handling.

```csharp
CalcData calcData = new CalcData();
CalcEngine engine = new CalcEngine(calcData);

// Excel-compatible error strings: #N/A, #VALUE!, #REF!, #DIV/0!, #NUM!, #NAME?, #NULL!
string[] excelErrors = CalcEngine.ErrorStrings;

// Internal error strings used by CalcEngine
string[] internalErrors = CalcEngine.FormulaErrorStrings;

// Reload error strings after customization
engine.ReloadErrorStrings();
```

### Default FormulaErrorStrings (partial)
```
"binary operators cannot start an expression"
"cannot parse"
"bad library"
"mismatched parentheses"
"unknown formula name"
"circular reference: "
"wrong number of arguments"
"invalid arguments"
"Calculation overflow"
"Missing sheet"
```

---

## Performance and Optimization Properties

### AllowShortCircuitIFs

Enables short-circuit evaluation for nested IF formulas, skipping unnecessary condition evaluations.

```csharp
CalcData calcData = new CalcData();
CalcEngine engine = new CalcEngine(calcData);

// Enable short-circuit IF evaluation
engine.AllowShortCircuitIFs = true;

// Complex nested IF formula - only evaluates necessary branches
string formula = "=IF(A1>100, \"High\", IF(A1>50, \"Medium\", IF(A1>0, \"Low\", \"None\")))";
string result = engine.ParseAndComputeFormula(formula);
```

**Type:** Property (bool)  
**Default:** false  
**Use Case:** Optimize nested IF formulas with multiple conditions

---

### CalculatingSuspended

Suspends all calculations temporarily during bulk updates, then resumes computation after changes are complete.

```csharp
// Class derived from ICalcData
CalcData calcData = new CalcData();

CalcEngine engine = new CalcEngine(calcData);

// Set values to the variables
calcData.SetValueRowCol(100, 1, 1); 
calcData.SetValueRowCol(200, 1, 2);
calcData.SetValueRowCol(140, 2, 2);
calcData.SetValueRowCol(120, 3, 2);
calcData.SetValueRowCol(100, 4, 2);  

// Parsing the formula
var parsedFormula = engine.ParseFormula("=SUM(A1:E4)"); 

// Computing the value of parsed formula
string result = engine.ComputeFormula(parsedFormula);

// Turn off calculations
engine.CalculatingSuspended = true;

Random random = new Random();

// Makes multiple updates to cells involved in calculation
for (int i = 0; i < 5000; i++)
{
    for (int j = 0; j < 5000; j++)
    {
        calcData.SetValueRowCol(random.Next(5) + 1,i,j);
    }
}

// Turn on calculations
engine.CalculatingSuspended = false;

// Again computing the value of parsed formula
result = engine.ComputeFormula(parsedFormula);
```

**Type:** Property (bool)  
**Default:** false  
**Use Case:** Massive performance improvement for bulk data updates

---

### UseFormulaValues

Enables caching of formula values to avoid redundant recalculations for cells with many dependencies.

```csharp
CalcData calcData = new CalcData();
CalcEngine engine = new CalcEngine(calcData);

// Enable formula value caching
engine.UseFormulaValues = true;

// First computation
string result1 = engine.ParseAndComputeFormula("=SUM(A1:Z1000)");

// Subsequent access uses cached value instead of recalculating
string result2 = engine.ParseAndComputeFormula("=SUM(A1:Z1000)");
```

**Type:** Property (bool)  
**Default:** false  
**Use Case:** Reduce redundant calculations for repeated formula accesses

---

### MaximumRecursiveCalls

Sets the maximum depth of recursive calculations to prevent stack overflow errors.

```csharp
CalcData calcData = new CalcData();
CalcEngine engine = new CalcEngine(calcData);

// Default is 100, increase for deeply nested formulas
engine.MaximumRecursiveCalls = 10000;

// Enables computation of deeply nested or recursive formulas
string formula = "=SUMPRODUCT((A1:Z100>50)*1)";
string result = engine.ParseAndComputeFormula(formula);
```

**Type:** Property (int)  
**Default:** 100  
**Warning:** Setting too high may cause stack overflow. Balance based on application needs.  
**Use Case:** Deep recursion or complex nested calculations

---

### ThrowCircularException

Controls whether circular references throw an exception or allow iterative calculations to proceed.

```csharp
CalcData calcData = new CalcData();
CalcEngine engine = new CalcEngine(calcData);

// Enable circular exception throwing
engine.ThrowCircularException = true;

// Create circular reference: A1 = B1, B1 = A1
calcData.SetValueRowCol("=B1", 1, 1);  // A1 = =B1
calcData.SetValueRowCol("=A1", 1, 2);  // B1 = =A1

try
{
    string result = engine.ParseAndComputeFormula("A1");
}
catch (Exception ex)
{
    Console.WriteLine($"Circular reference detected: {ex.Message}");
}
```

**Type:** Property (bool)  
**Default:** false  
**Use Case:** Detect and handle circular reference errors

---

## Iteration Properties

### IterationMaxCount

Sets the maximum number of iterations for formulas with circular references. When greater than 0, enables iterative calculation mode.

```csharp
CalcEngine engine = new CalcEngine(new CalcData());

// Enable iterative calculations with maximum iterations
engine.IterationMaxCount = 100;  // Maximum 100 iterations

// When set, CircularException behavior is automatically adjusted
// Formula calculations will iterate up to the specified count
```

**Type:** Property (int)  
**Default:** 0 (iterative calculation disabled)  
**Use Case:** Allow controlled circular reference iterations

---

### IterationMaxTolerance

Sets the convergence tolerance for iterative calculations. Iterations stop when convergence is reached.

```csharp
CalcEngine engine = new CalcEngine(new CalcData());

// Set iteration tolerance for convergence detection
engine.IterationMaxTolerance = 0.001;  // Stop iterating when change < 0.001

// Use with IterationMaxCount for full iterative calculation control
engine.IterationMaxCount = 100;
```

**Type:** Property (double)  
**Default:** 0.001  
**Use Case:** Control precision of iterative calculations

---

## Stack Management

### MaxStackDepth

Static property controlling the maximum depth of calculation stack operations. Prevents memory issues with deeply nested formulas.

```csharp
CalcEngine engine = new CalcEngine(new CalcData());

// Default is 50, increase for complex nested operations
CalcEngine.MaxStackDepth = 10000;

// Allows complex nested formulas to execute
string complexFormula = "=((((A1+B1)*C1)/D1)^2)*100";
string result = engine.ParseAndComputeFormula(complexFormula);
```

**Type:** Static Property (int)  
**Default:** 50  
**Warning:** Excessive values may cause memory problems.  
**Use Case:** Complex nested formula evaluation

---

## Key Members

| Member | Type | Description |
|--------|------|-------------|
| `ParseFormula(string)` | Method | Parses the formula into an RPN token string for computation. |
| `ComputeFormula(string)` | Method | Computes a pre-parsed RPN token string and returns the result. |
| `ParseAndComputeFormula(string)` | Method | Parses and computes a formula string in one step; resolves cell references via `ICalcData`. |
| `RegisterGridAsSheet(string, ICalcData, int)` | Method | Registers an `ICalcData` object as a named sheet for cross-sheet formula references. |
| `CreateSheetFamilyID()` | Static Method | Creates a unique integer family ID used to group related `ICalcData` sheets. |
| `ParseArgumentSeparator` | Static Property | Gets or sets the argument separator character. Default is `,`. |
| `ParseDecimalSeparator` | Static Property | Gets or sets the decimal separator character. Default is `.`. |
| `ErrorStrings` | Static Property | Array of Excel-compatible error strings (`#VALUE!`, `#REF!`, etc.). |
| `FormulaErrorStrings` | Static Property | Array of internal Calculate error strings. |
| `ReloadErrorStrings()` | Method | Reloads or resets internal error strings after modification. |
| `AllowShortCircuitIFs` | Property | Enables short-circuit evaluation for nested IF formulas. |
| `CalculatingSuspended` | Property | Suspends calculations during bulk updates. |
| `UseFormulaValues` | Property | Enables formula value caching for optimization. |
| `MaximumRecursiveCalls` | Property | Sets maximum recursion depth to prevent stack overflow. |
| `ThrowCircularException` | Property | Controls circular reference exception throwing. |
| `IterationMaxCount` | Property | Sets maximum iterations for circular reference handling. |
| `IterationMaxTolerance` | Property | Sets convergence tolerance for iterative calculations. |
| `MaxStackDepth` | Static Property | Controls maximum calculation stack depth. |

---

## Supported Built-in Formulas (Selected)

| Category | Functions |
|----------|-----------|
| Math | `SUM`, `SUMIF`, `SUMIFS`, `PRODUCT`, `MOD`, `ROUND`, `ROUNDUP`, `ROUNDDOWN`, `ABS`, `SQRT`, `POWER`, `INT`, `CEILING`, `FLOOR`, `EXP`, `LOG`, `LOG10`, `LN`, `RAND`, `RANDBETWEEN` |
| Trigonometry | `SIN`, `COS`, `TAN`, `ASIN`, `ACOS`, `ATAN`, `ATAN2`, `SINH`, `COSH`, `TANH`, `DEGREES`, `RADIANS`, `PI` |
| Statistical | `AVERAGE`, `COUNT`, `COUNTA`, `MAX`, `MIN`, `STDEV`, `STDEVP`, `VAR`, `SUBTOTAL` |
| Lookup | `VLOOKUP`, `HLOOKUP`, `XLOOKUP`, `XMATCH`, `MATCH`, `INDEX` |
| Logical | `IF`, `AND`, `OR`, `NOT`, `IFERROR`, `IFNA` |
| Text | `CONCATENATE`, `LEFT`, `RIGHT`, `MID`, `LEN`, `UPPER`, `LOWER`, `TRIM`, `TEXT` |
| Date/Time | `TODAY`, `NOW`, `DATE`, `YEAR`, `MONTH`, `DAY`, `HOUR`, `MINUTE`, `SECOND`, `DATEDIF` |
| Information | `ISTEXT`, `ISNUMBER`, `ISBLANK`, `ISERROR`, `ISNA` |
| Matrix | `MMULT`, `MDETERM`, `MINVERSE`, `MUNIT`, `SUMPRODUCT`, `HSTACK`, `VSTACK` |
