# ICalcData — Syncfusion Calculate Data Source Interface

> `ICalcData` is an interface that allows `CalcEngine` to communicate with arbitrary data sources. Implement this interface to integrate calculation support into classes representing row/column data structures.

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

`ICalcData` interface enables:

- Integration of `CalcEngine` with custom business objects
- Cell-based data access via row/column coordinates
- Event-driven dependency tracking through the `ValueChanged` event
- Support for data grid integration and multi-sheet calculations

---

## Interface Members

### Methods

#### SetValueRowCol

Sets a value at the specified row and column index.

```csharp
void SetValueRowCol(object value, int row, int col)
```

**Parameters:**
- `value`: The value to set
- `row`: 1-based row index
- `col`: 1-based column index

**Example:**
```csharp
public class CalcData : ICalcData
{
    Dictionary<string, object> values = new Dictionary<string, object>();

    public void SetValueRowCol(object value, int row, int col)
    {
        var key = RangeInfo.GetAlphaLabel(col) + row;
        if (!values.ContainsKey(key))
            values.Add(key, value);
        else if (values.ContainsKey(key) && values[key] != value)
            values[key] = value;
    }
}

// Usage
CalcData calcData = new CalcData();
calcData.SetValueRowCol(90, 1, 1);   // A1 = 90
calcData.SetValueRowCol(50, 1, 2);   // B1 = 50
```

---

#### GetValueRowCol

Retrieves the value from the specified row and column index.

```csharp
object GetValueRowCol(int row, int col)
```

**Parameters:**
- `row`: 1-based row index
- `col`: 1-based column index

**Returns:** The value at the specified cell, or null if not found

**Example:**
```csharp
public class CalcData : ICalcData
{
    Dictionary<string, object> values = new Dictionary<string, object>();

    public object GetValueRowCol(int row, int col)
    {
        object value = null;
        var key = RangeInfo.GetAlphaLabel(col) + row;
        this.values.TryGetValue(key, out value);
        return value;
    }
}

// Usage
CalcData calcData = new CalcData();
calcData.SetValueRowCol(100, 1, 1);
var value = calcData.GetValueRowCol(1, 1);  // 100
```

---

#### WireParentObject

Called after `CalcEngine` is created or when `RegisterGridAsSheet` is called. Use this to initialize event handlers or perform setup.

```csharp
void WireParentObject()
```

**Example:**
```csharp
public class CalcData : ICalcData
{
    public void WireParentObject()
    {
        // Perform initialization or subscribe to events
        // This method is called when CalcEngine assigns this as its parent
    }
}
```

---

### Events

#### ValueChanged

Occurs whenever a cell value is changed. `CalcEngine` listens to this event for dependency tracking.

```csharp
event ValueChangedEventHandler ValueChanged
```

**Event Arguments:**
- `row`: Row index of the changed cell
- `col`: Column index of the changed cell  
- `value`: New value

**Example:**
```csharp
public class CalcData : ICalcData
{
    public event ValueChangedEventHandler ValueChanged;

    private void OnValueChanged(int row, int col, string value)
    {
        if (ValueChanged != null)
            ValueChanged(this, new ValueChangedEventArgs(row, col, value));
    }

    public void SetValueRowCol(object value, int row, int col)
    {
        // Set value logic here...
        
        // Raise the ValueChanged event
        OnValueChanged(row, col, value?.ToString());
    }
}
```

---

## Complete Implementation Example

### Basic ICalcData Implementation

```csharp
public class CalcData : ICalcData
{
    public event ValueChangedEventHandler ValueChanged;
    private Dictionary<string, object> values = new Dictionary<string, object>();

    // Get value from cell
    public object GetValueRowCol(int row, int col)
    {
        object value = null;
        var key = RangeInfo.GetAlphaLabel(col) + row;
        this.values.TryGetValue(key, out value);
        return value;
    }

    // Set value to cell
    public void SetValueRowCol(object value, int row, int col)
    {
        var key = RangeInfo.GetAlphaLabel(col) + row;
        if (!values.ContainsKey(key))
            values.Add(key, value);
        else if (values.ContainsKey(key) && values[key] != value)
            values[key] = value;

        // Raise event to notify CalcEngine
        OnValueChanged(row, col, value?.ToString());
    }

    // Wire parent object
    public void WireParentObject() { }

    // Raise the ValueChanged event
    private void OnValueChanged(int row, int col, string value)
    {
        if (ValueChanged != null)
            ValueChanged(this, new ValueChangedEventArgs(row, col, value));
    }
}
```

---

## Using ICalcData with CalcEngine

### Step 1: Create Custom Class

```csharp
public class CalcData : ICalcData
{
    // Implementation (see above)
}
```

### Step 2: Set Values

```csharp
CalcData calcData = new CalcData();
calcData.SetValueRowCol(10, 1, 1);   // A1 = 10
calcData.SetValueRowCol(20, 1, 2);   // B1 = 20
```

### Step 3: Initialize CalcEngine

```csharp
CalcEngine engine = new CalcEngine(calcData);
```

### Step 4: Compute Formulas

```csharp
string formula = "SUM(A1, B1)";
string result = engine.ParseAndComputeFormula(formula);  // "30"
```

---

## Complete Computation Example

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

// Usage
CalcData calcData = new CalcData();

// Set values
calcData.SetValueRowCol(10, 1, 1);   // A1 = 10
calcData.SetValueRowCol(20, 1, 2);   // B1 = 20

// Create engine
CalcEngine engine = new CalcEngine(calcData);

// Compute formula
string formula = "SUM(A1, B1)";
string result = engine.ParseAndComputeFormula(formula);  // "30"
```

---

## Integrating with Custom Controls

### DataGrid Integration Example

```csharp
public class CustomGrid : DataGrid, ICalcData
{
    public CustomGrid() { }

    public event ValueChangedEventHandler ValueChanged;

    public object GetValueRowCol(int row, int col)
    {
        if (row < 0 || col < 0)
            return "Invalid cell";
        
        string cellValue = (this.Items[row - 1] as DataRowView)
            .Row.ItemArray[col - 1].ToString();
        return cellValue;
    }

    public void SetValueRowCol(object value, int row, int col)
    {
        // Set the value to the specific cell
        (this.Items[row - 1] as DataRowView)
            .Row.ItemArray[col - 1] = value;
    }

    public void WireParentObject()
    {
        // Trigger any events for parent
    }
}

// Usage
this.grid.ItemsSource = dt.DefaultView;
CalcEngine engine = new CalcEngine(this.grid);
```

---

## Cross-Sheet References

Multiple `ICalcData` objects can be registered for cross-sheet calculations:

```csharp
// Create data sources
CalcData calcData1 = new CalcData();
CalcData calcData2 = new CalcData();

// Add values
calcData1.SetValueRowCol(10, 1, 1);  // Sheet1!A1 = 10
calcData2.SetValueRowCol(20, 1, 1);  // Sheet2!A1 = 20

// Create engines
CalcEngine engine1 = new CalcEngine(calcData1);
CalcEngine engine2 = new CalcEngine(calcData2);

// Create family ID
int familyId = CalcEngine.CreateSheetFamilyID();

// Register sheets
engine1.RegisterGridAsSheet("Sheet1", calcData1, familyId);
engine2.RegisterGridAsSheet("Sheet2", calcData2, familyId);

// Cross-sheet formula
string result = engine1.ParseAndComputeFormula("SUM(Sheet1!A1, Sheet2!A1)");  // "30"
```

---

## Key Characteristics

| Feature | Details |
|---------|---------|
| **Indexing** | 1-based row and column indices (A1 = row 1, col 1) |
| **Data Types** | Values are stored as objects |
| **Event-Driven** | `ValueChanged` event triggers dependency recalculation |
| **Flexibility** | Works with any row/column data structure |
| **Integration** | Compatible with DataGrids, custom controls, custom objects |

---

## Best Practices

1. **Use Dictionary for Storage** - Efficient key-value storage for sparse data
2. **Generate Cell Keys** - Use `RangeInfo.GetAlphaLabel(col)` for Excel-like labels
3. **Raise Events** - Always raise `ValueChanged` when data is modified
4. **Handle Null Values** - Return null when cells are empty
5. **1-Based Indexing** - Always use 1-based row/col indices

---

## Comparison with CalcQuickBase

| Aspect | ICalcData | CalcQuickBase |
|--------|-----------|--------------|
| **Interface** | Must implement | Predefined class |
| **Data Access** | Row/Column cells | Named variables |
| **Complexity** | More setup required | Minimal setup |
| **Best For** | Data grids, complex data | Simple calculations |
| **Cell References** | `A1, B2, C3` | `[A], [B], [C]` |

---

## Common Use Cases

1. **Spreadsheet-like Applications** - Grid-based calculations
2. **Data Analysis** - Processing tabular data
3. **Business Objects** - Adding calculations to existing objects
4. **Multi-Sheet Systems** - Cross-referenced sheets
5. **Custom Data Sources** - Any row/column format

---

## See Also

- [CalcEngine](calcengine.md) - Core calculation engine
- [CalcQuickBase](calcquickbase.md) - Simplified calculation interface
- [Getting Started](getting-started.md) - Setup guide
- [Parse and Compute](parse-compute.md) - Formula operations
