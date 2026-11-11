# What-If Analysis in Excel

> Create and manage scenarios with what-if analysis to test different input values and see how they affect formula outcomes using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## Access Scenarios Collection

### Minimal Code
```csharp
IScenarios scenarios = worksheet.Scenarios;
```

### Placeholders
- `worksheet` → Replace with `{worksheet-object}`

---

## Create Scenarios

### Minimal Code
```csharp
List<object> values = new List<object> { 0.23, 0.8, 1.1, 0.5, 0.35, 0.2 };
scenarios.Add("Scenario Name", worksheet.Range["F5:F10"], values);
```

### Multiple Scenarios
```csharp
scenarios.Add("Current", worksheet.Range["D5:D10"], currentValues);
scenarios.Add("Increased", worksheet.Range["D5:D10"], increasedValues);
scenarios.Add("Decreased", worksheet.Range["D5:D10"], decreasedValues);
```

### Scenario with Different Ranges
```csharp
scenarios.Add("Cost Scenario", worksheet.Range["B2:B5"], costValues);
scenarios.Add("Revenue Scenario", worksheet.Range["C2:C5"], revenueValues);
```

---

## Modify Scenario

### Update Scenario Values
```csharp
IScenario scenario = scenarios[0];
scenario.ModifyScenario(worksheet.Range["F5:F10"], newValues);
```

### Modify Using Another Scenario
```csharp
scenario1.ModifyScenario(scenario2.ChangingCells, scenario2.Values);
```

---

## Delete Scenario

### Minimal Code
```csharp
scenarios[0].Delete();
```

### Delete by Name
```csharp
scenarios["Scenario Name"].Delete();
```

---

## Merge Scenarios

### Merge Scenarios from Another Worksheet
```csharp
worksheet1.Scenarios.Merge(worksheet2);
```

### Merge Multiple Worksheets
```csharp
worksheet1.Scenarios.Merge(worksheet2);
worksheet1.Scenarios.Merge(worksheet3);
```

---

## Create Scenario Summary

### Minimal Code
```csharp
worksheet.Scenarios.CreateSummary(worksheet.Range["L7"]);
```

### Summary with Different Result Range
```csharp
worksheet.Scenarios.CreateSummary(worksheet.Range["A1"]);
```

---

## Apply Scenarios

### Show Scenario
```csharp
scenarios[0].Show();
```

### Show Scenario by Name
```csharp
scenarios["Scenario Name"].Show();
```

### Iterate and Apply All Scenarios
```csharp
for (int i = 0; i < scenarios.Count; i++)
{
    scenarios[i].Show();
}
```

---

## Scenario Properties

### Set Scenario Name
```csharp
scenario.Name = "New Scenario Name";
```

### Add Scenario Comment
```csharp
scenario.Comment = "This scenario tests cost increases";
```

### Get Scenario Name
```csharp
string scenarioName = scenario.Name;
```

### Get Scenario Comment
```csharp
string comment = scenario.Comment;
```

---

## Scenario Protection and Visibility

### Hide Scenario
```csharp
scenario.Hidden = true;
```

### Protect Scenario (Lock)
```csharp
scenario.Locked = true;
```

### Unlock Scenario (Allow Edit)
```csharp
scenario.Locked = false;
```

### Protect Worksheet with Scenario
```csharp
worksheet.Protect("password");
```

---

## Scenario Data Access

### Access Scenario Changing Cells
```csharp
IRange changingCells = scenario.ChangingCells;
```

### Access Scenario Values
```csharp
List<object> values = scenario.Values;
```

### Get Scenario Name and Count
```csharp
int count = scenarios.Count;
string firstScenarioName = scenarios[0].Name;
```

---

## Complete Scenario Example

### Create Multiple Scenarios and Summary
```csharp
IScenarios scenarios = worksheet.Scenarios;

List<object> values1 = new List<object> { 100, 200, 300 };
List<object> values2 = new List<object> { 150, 250, 350 };

scenarios.Add("Low Sales", worksheet.Range["B2:B4"], values1);
scenarios.Add("High Sales", worksheet.Range["B2:B4"], values2);

scenarios.CreateSummary(worksheet.Range["E2"]);
```

---

## Scenario Workflows

### Apply Scenario and Save Separate File
```csharp
scenarios[0].Show();
IWorksheet copiedSheet = newWorkbook.Worksheets.AddCopy(worksheet);
newWorkbook.SaveAs("Scenario1.xlsx");
```

### Modify and Protect Scenario
```csharp
scenario.Comment = "Updated scenario";
scenario.Locked = true;
worksheet.Protect("scenarioPassword");
```

---

## Limitations

### XlsIO Scenario Support
```csharp
// Scenarios supported only for XLSX format
// Goal Seek and Data Table not supported in XlsIO
// Scenarios are worksheet-level, not workbook-level
```

