# Excel Macros

> Create, edit, and manage VBA macros in Excel documents using Syncfusion XlsIO. Support for document, standard, class, and form modules.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## Access VBA Project

### Minimal Code
```csharp
IVbaProject project = workbook.VbaProject;
IVbaModules vbaModules = project.Modules;
```

---

## Create Document Module

### Minimal Code
```csharp
IVbaProject project = workbook.VbaProject;
IVbaModule module = project.Modules.Add("Document", VbaModuleType.Document);
```

### Add VBA Code
```csharp
IVbaModule vbaModule = vbaModules[sheet.CodeName];
vbaModule.Code = "Sub Auto_Open\n MsgBox \"Workbook Opened\" \n End Sub";
```

---

## Create Standard Module

### Minimal Code
```csharp
IVbaProject project = workbook.VbaProject;
IVbaModule module = project.Modules.Add("StdModule", VbaModuleType.StdModule);
```

### Add VBA Code
```csharp
IVbaModule vbaModule = vbaModules.Add("StdModule", VbaModuleType.StdModule);
vbaModule.Code = "Sub Auto_Open\n MsgBox \"Macro Added\" \n End Sub";
```

---

## Create Class Module

### Minimal Code
```csharp
IVbaProject project = workbook.VbaProject;
IVbaModule module = project.Modules.Add("ClassModule", VbaModuleType.ClassModule);
```

### Add Class Code
```csharp
IVbaModule clsModule = vbaModules.Add("MyClass", VbaModuleType.ClassModule);
clsModule.Code = "Public Sub Create()\n MsgBox \"Created a class\" \n End Sub";
```

### Use Class in Standard Module
```csharp
IVbaModule vbaModule = vbaModules.Add("Module1", VbaModuleType.StdModule);
vbaModule.Code = "Sub Auto_Open()\n Dim obj As New MyClass \n obj.Create \n End Sub";
```

---

## Create Form Module

### Minimal Code
```csharp
IVbaProject project = workbook.VbaProject;
IVbaModule module = project.Modules.Add("UserForm", VbaModuleType.MsForm);
```

### Copy Form from Another Workbook
```csharp
IWorkbook sourceBook = application.Workbooks.Open("source.xls");
IVbaProject sourceProject = sourceBook.VbaProject;
IVbaModule sourceForm = sourceProject.Modules["UserForm1"];

IVbaModule formModule = project.Modules.Add(sourceForm.Name, VbaModuleType.MsForm);
formModule.Code = sourceForm.Code;
formModule.DesignerStorage = sourceForm.DesignerStorage;
```

---

## Assign Macro to Shape

### Minimal Code
```csharp
IShape shape = sheet.Shapes.AddAutoShapes(AutoShapeType.Rectangle, 1, 2, 60, 70);
shape.Name = "Shape1";
shape.OnAction = "StdModule.Invoke";
```

### Create Macro First
```csharp
IVbaModule vbaModule = vbaModules.Add("StdModule", VbaModuleType.StdModule);
vbaModule.Code = "Sub Invoke()\n MsgBox \"Macro Executed\" \n End Sub";
```

---

## Edit Existing Macro

### Minimal Code
```csharp
IWorkbook workbook = application.Workbooks.Open("macro.xls");
IVbaProject project = workbook.VbaProject;
IVbaModule vbaModule = project.Modules["Module1"];
```

### Edit Macro Code
```csharp
IVbaModule vbaModule = vbaModules["Module1"];
vbaModule.Name = "Module1";
vbaModule.Code = "Sub Auto_Open()\n MsgBox \"Edited Macro\" \n End Sub";
```

---

## Remove Macro by Name

### Minimal Code
```csharp
IVbaProject project = workbook.VbaProject;
IVbaModules vbaModules = project.Modules;
vbaModules.Remove("Module1");
```

---

## Remove Macro by Index

### Minimal Code
```csharp
IVbaProject project = workbook.VbaProject;
IVbaModules vbaModules = project.Modules;
vbaModules.RemoveAt(2);
```

---

## Clear All Macros

### Minimal Code
```csharp
IVbaProject project = workbook.VbaProject;
IVbaModules vbaModules = project.Modules;
vbaModules.Clear();
```

---

## Save Macro-Enabled Document

### Save as XLSM
```csharp
FileStream outputStream = new FileStream("output.xlsm", FileMode.Create);
workbook.SaveAs(outputStream, ExcelSaveType.SaveAsMacro);
outputStream.Dispose();
```

### Save as XLTM
```csharp
FileStream outputStream = new FileStream("output.xltm", FileMode.Create);
workbook.SaveAs(outputStream, ExcelSaveType.SaveAsMacroTemplate);
outputStream.Dispose();
```

---

## Skip Macros on Save

### Minimal Code
```csharp
application.SkipOnSave = SkipExtRecords.Macros;
workbook.SaveAs(outputStream, ExcelSaveType.SaveAsXLS);
```

### Purpose
Saves macro-enabled document as normal XLSX/XLS without macros

---

## VBA Module Types

```csharp
VbaModuleType.Document       // Default module for worksheet/workbook
VbaModuleType.StdModule      // Standard module for recorded macros
VbaModuleType.ClassModule    // Class module for object models
VbaModuleType.MsForm         // Form module with controls (read-only in creation)
```

---

## Excel Save Types for Macros

```csharp
ExcelSaveType.SaveAsMacro           // Save as XLSM (Excel 2007+)
ExcelSaveType.SaveAsMacroTemplate   // Save as XLTM (Excel template)
ExcelSaveType.SaveAsXLS             // Save as XLS (Excel 97-2003)
```

---

## Complete Macro Example

```csharp
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet sheet = workbook.Worksheets[0];

    // Create VBA project
    IVbaProject project = workbook.VbaProject;
    IVbaModules vbaModules = project.Modules;

    // Add standard module with macro
    IVbaModule vbaModule = vbaModules.Add("StdModule", VbaModuleType.StdModule);
    vbaModule.Code = "Sub Auto_Open\n MsgBox \"Welcome\" \n End Sub";

    // Add shape with macro
    IShape shape = sheet.Shapes.AddAutoShapes(AutoShapeType.Rectangle, 1, 2, 60, 70);
    shape.Name = "Btn1";
    shape.OnAction = "StdModule.Auto_Open";

    // Save as macro-enabled
    FileStream outputStream = new FileStream("output.xlsm", FileMode.Create);
    workbook.SaveAs(outputStream, ExcelSaveType.SaveAsMacro);
    outputStream.Dispose();
}
```

---

## Notes

- Macros are parsed only when accessed
- Opening and saving macro files preserves macros by default
- Form modules can only be copied from existing workbooks, not created from scratch
- XLSM format requires ExcelSaveType.SaveAsMacro when saving via stream
