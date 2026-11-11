# Data Validation

> Add and manage data validation rules in Excel worksheets using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## Text Length Validation

### Minimal Code
```csharp
IDataValidation validation = sheet.Range["A3"].DataValidation;
validation.AllowType = ExcelDataType.TextLength;
validation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
validation.FirstFormula = "0";
validation.SecondFormula = "5";
```

---

## Time Validation

### Minimal Code
```csharp
IDataValidation validation = sheet.Range["A3"].DataValidation;
validation.AllowType = ExcelDataType.Time;
validation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
validation.FirstFormula = "10.00";
validation.SecondFormula = "12.00";
```

---

## List Validation

### Minimal Code
```csharp
IDataValidation validation = sheet.Range["A3"].DataValidation;
validation.ListOfValues = new string[] { "ListItem1", "ListItem2", "ListItem3" };
```

### With Error Message
```csharp
IDataValidation validation = sheet.Range["C3"].DataValidation;
validation.ListOfValues = new string[] { "Engineering", "Marketing", "Finance", "HR", "Sales" };
validation.ShowErrorBox = true;
validation.ErrorBoxText = "Choose the value from the list";
validation.ErrorBoxTitle = "ERROR";
validation.ShowPromptBox = true;
validation.PromptBoxText = "Data validation for list";
```

---

## Number Validation

### Minimal Code
```csharp
IDataValidation validation = sheet.Range["A3"].DataValidation;
validation.AllowType = ExcelDataType.Integer;
validation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
validation.FirstFormula = "0";
validation.SecondFormula = "10";
```

### With Error Message
```csharp
IDataValidation validation = sheet.Range["D3"].DataValidation;
validation.AllowType = ExcelDataType.Integer;
validation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
validation.FirstFormula = "0";
validation.SecondFormula = "10";
validation.ShowErrorBox = true;
validation.ErrorBoxText = "Enter a value between 0 to 10";
validation.ErrorBoxTitle = "ERROR";
validation.ShowPromptBox = true;
validation.PromptBoxText = "Data validation for numbers";
```

---

## Date Validation

### Minimal Code
```csharp
IDataValidation validation = sheet.Range["A3"].DataValidation;
validation.AllowType = ExcelDataType.Date;
validation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
validation.FirstDateTime = new DateTime(2003, 5, 10);
validation.SecondDateTime = new DateTime(2004, 5, 10);
```

### With Error Message
```csharp
IDataValidation validation = sheet.Range["E3"].DataValidation;
validation.AllowType = ExcelDataType.Date;
validation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
validation.FirstDateTime = new DateTime(2003, 5, 10);
validation.SecondDateTime = new DateTime(2004, 5, 10);
validation.ShowErrorBox = true;
validation.ErrorBoxText = "Enter a value between 10/5/2003 to 10/5/2004";
validation.ErrorBoxTitle = "ERROR";
validation.ShowPromptBox = true;
validation.PromptBoxText = "Data validation for date";
```

---

## List Validation with User-defined Range

### Minimal Code
```csharp
IDataValidation validation = worksheet.Range["C3"].DataValidation;
validation.AllowType = ExcelDataType.User;
validation.FirstFormula = "=Sheet1!$B$1:$B$3";
```

---

## Custom Formula Validation

### Minimal Code
```csharp
IDataValidation validation = sheet.Range["A3"].DataValidation;
validation.AllowType = ExcelDataType.Formula;
validation.FirstFormula = "=A1>10";
```

### Practical Examples
```csharp
// Only allow unique values (no duplicates in column A)
IDataValidation validation = sheet.Range["A2:A100"].DataValidation;
validation.AllowType = ExcelDataType.Formula;
validation.FirstFormula = "=COUNTIF($A$2:$A$100,A2)=1";

// Only allow values greater than the cell above
IDataValidation validation2 = sheet.Range["B3:B100"].DataValidation;
validation2.AllowType = ExcelDataType.Formula;
validation2.FirstFormula = "=B3>B2";

// Only allow weekdays (no weekends)
IDataValidation validation3 = sheet.Range["C2:C100"].DataValidation;
validation3.AllowType = ExcelDataType.Formula;
validation3.FirstFormula = "=WEEKDAY(C2,2)<=5";
```

---

## Show Prompt Box

### Minimal Code
```csharp
IDataValidation validation = sheet.Range["A3"].DataValidation;
validation.ListOfValues = new string[] { "ListItem1", "ListItem2", "ListItem3" };
validation.IsPromptBoxVisible = true;
validation.PromptBoxText = "Select a value from the list";
validation.ShowPromptBox = true;
```

---

## Remove Data Validation

### Minimal Code
```csharp
worksheet.UsedRange.Clear(ExcelClearOptions.ClearDataValidations);
```

---

## Complete Data Validation Example

```csharp
using Syncfusion.XlsIO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  // Data Validation for Text Length
  IDataValidation txtLengthValidation = worksheet.Range["A3"].DataValidation;
  worksheet.Range["A1"].Text = "Enter the Text in A3";
  worksheet.Range["A1"].AutofitColumns();
  txtLengthValidation.AllowType = ExcelDataType.TextLength;
  txtLengthValidation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
  txtLengthValidation.FirstFormula = "0";
  txtLengthValidation.SecondFormula = "5";
  txtLengthValidation.ShowErrorBox = true;
  txtLengthValidation.ErrorBoxText = "Text length should be lesser than 5 characters";
  txtLengthValidation.ErrorBoxTitle = "ERROR";
  txtLengthValidation.PromptBoxText = "Data validation for text length";
  txtLengthValidation.ShowPromptBox = true;

  // Data Validation for Time
  IDataValidation timeValidation = worksheet.Range["B3"].DataValidation;
  worksheet.Range["B1"].Text = "Enter the time between 10:00 and 12:00 'o Clock in B3";
  worksheet.Range["B1"].AutofitColumns();
  timeValidation.AllowType = ExcelDataType.Time;
  timeValidation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
  timeValidation.FirstFormula = "10.00";
  timeValidation.SecondFormula = "12.00";
  timeValidation.ShowErrorBox = true;
  timeValidation.ErrorBoxText = "Enter a correct time";
  timeValidation.ErrorBoxTitle = "ERROR";
  timeValidation.PromptBoxText = "Data validation for time";
  timeValidation.ShowPromptBox = true;

  // Data Validation for List
  IDataValidation listValidation = worksheet.Range["C3"].DataValidation;
  worksheet.Range["C1"].Text = "Data Validation List in C3";
  worksheet.Range["C1"].AutofitColumns();
  listValidation.ListOfValues = new string[] { "ListItem1", "ListItem2", "ListItem3" };
  listValidation.ErrorBoxText = "Choose the value from the list";
  listValidation.ErrorBoxTitle = "ERROR";
  listValidation.PromptBoxText = "Data validation for list";
  listValidation.IsPromptBoxVisible = true;
  listValidation.ShowPromptBox = true;

  // Data Validation for Numbers
  IDataValidation numberValidation = worksheet.Range["D3"].DataValidation;
  worksheet.Range["D1"].Text = "Enter the Number in D3";
  worksheet.Range["D1"].AutofitColumns();
  numberValidation.AllowType = ExcelDataType.Integer;
  numberValidation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
  numberValidation.FirstFormula = "0";
  numberValidation.SecondFormula = "10";
  numberValidation.ShowErrorBox = true;
  numberValidation.ErrorBoxText = "Enter a value between 0 to 10";
  numberValidation.ErrorBoxTitle = "ERROR";
  numberValidation.PromptBoxText = "Data validation for numbers";
  numberValidation.ShowPromptBox = true;

  // Data Validation for Date
  IDataValidation dateValidation = worksheet.Range["E3"].DataValidation;
  worksheet.Range["E1"].Text = "Enter the Date in E3";
  worksheet.Range["E1"].AutofitColumns();
  dateValidation.AllowType = ExcelDataType.Date;
  dateValidation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
  dateValidation.FirstDateTime = new DateTime(2003, 5, 10);
  dateValidation.SecondDateTime = new DateTime(2004, 5, 10);
  dateValidation.ShowErrorBox = true;
  dateValidation.ErrorBoxText = "Enter a value between 10/5/2003 to 10/5/2004";
  dateValidation.ErrorBoxTitle = "ERROR";
  dateValidation.PromptBoxText = "Data validation for date";
  dateValidation.ShowPromptBox = true;

  // Custom Data Validation
  IDataValidation customValidation = worksheet.Range["F3"].DataValidation;
  customValidation.AllowType = ExcelDataType.Formula;
  customValidation.FirstFormula = "=A1>10";
  customValidation.ErrorBoxText = "Enter a value greater than 10 in A1";
  customValidation.ErrorBoxTitle = "ERROR";
  customValidation.PromptBoxText = "Custom DataValidation";
  customValidation.ShowPromptBox = true;

  workbook.SaveAs("DataValidation.xlsx");
}
```

---

## Validation Comparison Operators

```csharp
// Available comparison operators for data validation:
ExcelDataValidationComparisonOperator.Between
ExcelDataValidationComparisonOperator.NotBetween
ExcelDataValidationComparisonOperator.Equal
ExcelDataValidationComparisonOperator.NotEqual
ExcelDataValidationComparisonOperator.Greater
ExcelDataValidationComparisonOperator.GreaterOrEqual
ExcelDataValidationComparisonOperator.Less
ExcelDataValidationComparisonOperator.LessOrEqual
```

---

## Data Validation Types

```csharp
// Available validation types via AllowType property:
ExcelDataType.TextLength     // Text length validation
ExcelDataType.Time           // Time validation
ExcelDataType.Date           // Date validation
ExcelDataType.Integer        // Number (integer) validation
ExcelDataType.User           // User-defined list from range
ExcelDataType.Formula        // Custom formula validation
```

---

## Use Cases

- Department dropdowns for employee data
- Priority levels (Low, Medium, High)
- Status values (Active, Inactive, Pending)
- Numeric ranges for age, salary, or quantity
- Date ranges for project timelines
- Time ranges for shift schedules
- Custom formulas for business rules

