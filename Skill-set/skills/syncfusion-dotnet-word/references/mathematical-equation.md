# Mathematical Equations

> Create, modify, and manage mathematical equations in Word documents using WMath DOM and LaTeX syntax.

---

## Required common usings

```csharp
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.Office;
```

## Required usings for Windows-Specific

```csharp
using System;
using System.IO;
```

## Types of Equations

DocIO supports the following equation structures:
- Accent, Bar, Box, Border Box, Delimiter
- Equation Array, Fraction, Function, Group Character
- Limit, Matrix, N-Array, Radical, Phantom
- SubSuperscript, Left SubSuperscript, Right SubSuperscript

---

## Create Equations

### Accent Equation

#### Common for Cross-Platform and Windows-Specific
```csharp
WordDocument document = new WordDocument();
document.EnsureMinimal();
WMath math = document.LastParagraph.AppendMath();
IOfficeMath officeMath = math.MathParagraph.Maths.Add();
IOfficeMathAccent mathAccent = officeMath.Functions.Add(0, MathFunctionType.Accent) as IOfficeMathAccent;
mathAccent.AccentCharacter = "̆";
IOfficeMathRunElement officeMathRunElement = mathAccent.Equation.Functions.Add(0, MathFunctionType.RunElement) as IOfficeMathRunElement;
officeMathRunElement.Item = new WTextRange(document);
WTextRange textRange = officeMathRunElement.Item as WTextRange;
textRange.Text = "a";
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
document.Close();
```

### Fraction Equation

#### Common for Cross-Platform and Windows-Specific
```csharp
WordDocument document = new WordDocument();
document.EnsureMinimal();
WMath math = document.LastParagraph.AppendMath();
IOfficeMath officeMath = math.MathParagraph.Maths.Add();
IOfficeMathFraction mathFraction = officeMath.Functions.Add(0, MathFunctionType.Fraction) as IOfficeMathFraction;
mathFraction.FractionType = MathFractionType.NormalFractionBar;

IOfficeMathRunElement numerator = mathFraction.Numerator.Functions.Add(0, MathFunctionType.RunElement) as IOfficeMathRunElement;
numerator.Item = new WTextRange(document);
(numerator.Item as WTextRange).Text = "a";

IOfficeMathRunElement denominator = mathFraction.Denominator.Functions.Add(0, MathFunctionType.RunElement) as IOfficeMathRunElement;
denominator.Item = new WTextRange(document);
(denominator.Item as WTextRange).Text = "b";

MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
document.Close();
```

### Radical Equation (Square Root)

#### Common for Cross-Platform and Windows-Specific
```csharp
WordDocument document = new WordDocument();
document.EnsureMinimal();
WMath wmath = document.LastParagraph.AppendMath();
IOfficeMath officeMath = wmath.MathParagraph.Maths.Add();
IOfficeMathRadical officeMathRadical = officeMath.Functions.Add(0, MathFunctionType.Radical) as IOfficeMathRadical;
officeMathRadical.HideDegree = false;

IOfficeMathRunElement degree = officeMathRadical.Degree.Functions.Add(0, MathFunctionType.RunElement) as IOfficeMathRunElement;
degree.Item = new WTextRange(document);
(degree.Item as WTextRange).Text = "2";

IOfficeMathRunElement officeMathRunElement = officeMathRadical.Equation.Functions.Add(0, MathFunctionType.RunElement) as IOfficeMathRunElement;
officeMathRunElement.Item = new WTextRange(document);
(officeMathRunElement.Item as WTextRange).Text = "x";

MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
document.Close();
```

### Matrix Equation

#### Common for Cross-Platform and Windows-Specific
```csharp
WordDocument document = new WordDocument();
document.EnsureMinimal();
WMath wmath = document.LastParagraph.AppendMath();
IOfficeMath officeMath = wmath.MathParagraph.Maths.Add();
IOfficeMathMatrix mathMatrix = officeMath.Functions.Add(0, MathFunctionType.Matrix) as IOfficeMathMatrix;
mathMatrix.VerticalAlignment = MathVerticalAlignment.Center;
mathMatrix.ColumnWidth = 1;

mathMatrix.Columns.Add();
mathMatrix.Rows.Add();
mathMatrix.Columns.Add();
mathMatrix.Rows.Add();

// Set cell values
IOfficeMath cell11 = mathMatrix.Rows[0].Arguments[0];
IOfficeMathRunElement elem = cell11.Functions.Add(0, MathFunctionType.RunElement) as IOfficeMathRunElement;
elem.Item = new WTextRange(document);
(elem.Item as WTextRange).Text = "1";

IOfficeMath cell12 = mathMatrix.Rows[0].Arguments[1];
elem = cell12.Functions.Add(0, MathFunctionType.RunElement) as IOfficeMathRunElement;
elem.Item = new WTextRange(document);
(elem.Item as WTextRange).Text = "2";

MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
document.Close();
```

### N-Array (Summation)

#### Common for Cross-Platform and Windows-Specific
```csharp
WordDocument document = new WordDocument();
document.EnsureMinimal();
WMath wMath = document.LastParagraph.AppendMath();
IOfficeMath officeMath = wMath.MathParagraph.Maths.Add();
IOfficeMathNArray officeMathNArray = officeMath.Functions.Add(0, MathFunctionType.NArray) as IOfficeMathNArray;
officeMathNArray.NArrayCharacter = "∑";
officeMathNArray.HasGrow = false;
officeMathNArray.HideLowerLimit = false;
officeMathNArray.HideUpperLimit = false;
officeMathNArray.SubSuperscriptLimit = true;

IOfficeMathRunElement officeMathRunElement = officeMathNArray.Subscript.Functions.Add(0, MathFunctionType.RunElement) as IOfficeMathRunElement;
officeMathRunElement.Item = new WTextRange(document);
(officeMathRunElement.Item as WTextRange).Text = "n=1";

officeMathRunElement = officeMathNArray.Superscript.Functions.Add(0, MathFunctionType.RunElement) as IOfficeMathRunElement;
officeMathRunElement.Item = new WTextRange(document);
(officeMathRunElement.Item as WTextRange).Text = "10";

officeMathRunElement = officeMathNArray.Equation.Functions.Add(0, MathFunctionType.RunElement) as IOfficeMathRunElement;
officeMathRunElement.Item = new WTextRange(document);
(officeMathRunElement.Item as WTextRange).Text = "x";

MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
document.Close();
```

### Superscript/Subscript

#### Common for Cross-Platform and Windows-Specific
```csharp
WordDocument document = new WordDocument();
document.EnsureMinimal();
WMath wmath = document.LastParagraph.AppendMath();
IOfficeMath officeMath = wmath.MathParagraph.Maths.Add();
IOfficeMathScript officeMathScript = officeMath.Functions.Add(0, MathFunctionType.SubSuperscript) as IOfficeMathScript;
officeMathScript.ScriptType = MathScriptType.Superscript;

IOfficeMathRunElement officeMathRunElement = officeMathScript.Script.Functions.Add(0, MathFunctionType.RunElement) as IOfficeMathRunElement;
officeMathRunElement.Item = new WTextRange(document);
WTextRange textRange = officeMathRunElement.Item as WTextRange;
textRange.Text = "2";

officeMathRunElement = officeMathScript.Equation.Functions.Add(0, MathFunctionType.RunElement) as IOfficeMathRunElement;
officeMathRunElement.Item = new WTextRange(document);
(officeMathRunElement.Item as WTextRange).Text = "x";

MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
document.Close();
```

### Delimiter

#### Common for Cross-Platform and Windows-Specific
```csharp
WordDocument document = new WordDocument();
document.EnsureMinimal();
WMath math = document.LastParagraph.AppendMath();
IOfficeMath officeMath = math.MathParagraph.Maths.Add();
IOfficeMathDelimiter mathDelimiter = officeMath.Functions.Add(0, MathFunctionType.Delimiter) as IOfficeMathDelimiter;
mathDelimiter.BeginCharacter = "[";
mathDelimiter.EndCharacter = "]";
mathDelimiter.IsGrow = true;
mathDelimiter.DelimiterShape = MathDelimiterShapeType.Match;

IOfficeMathRunElement officeMathRunElement = mathDelimiter.Equation.Add(0).Functions.Add(0, MathFunctionType.RunElement) as IOfficeMathRunElement;
officeMathRunElement.Item = new WTextRange(document);
(officeMathRunElement.Item as WTextRange).Text = "a+b";

MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
document.Close();
```

---

## Modify Existing Equations

### Common for Cross-Platform and Windows-Specific

Access and modify equation components by traversing the equation tree:

```csharp
FileStream fileStream = new FileStream("input.docx", FileMode.Open, FileAccess.ReadWrite);
WordDocument document = new WordDocument(fileStream, FormatType.Automatic);

// Access paragraph containing equation
WParagraph paragraph = document.LastSection.Body.ChildEntities[0] as WParagraph;
WMath math = paragraph.ChildEntities[0] as WMath;

// Access specific equation function
IOfficeMathRadical mathRadical = math.MathParagraph.Maths[0].Functions[0] as IOfficeMathRadical;

// Modify content
IOfficeMathRunElement runElement = mathRadical.Equation.Functions[0] as IOfficeMathRunElement;
(runElement.Item as WTextRange).Text = "modified text";

// Apply formatting
(runElement.Item as WTextRange).CharacterFormat.Bold = true;
(runElement.Item as WTextRange).CharacterFormat.FontSize = 20;
runElement.MathFormat.Style = MathStyleType.Italic;

MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
document.Close();
```

### Remove and Replace Functions

#### Common for Cross-Platform and Windows-Specific
```csharp
// Remove function
IOfficeMathScript mathScript = /* your script object */;
IOfficeMathDelimiter mathDelimiter = /* your delimiter object */;
mathScript.Equation.Functions.Remove(mathDelimiter);

// Add new function
IOfficeMathRunElement newElement = mathScript.Equation.Functions.Add(0, MathFunctionType.RunElement) as IOfficeMathRunElement;
newElement.Item = new WTextRange(document);
(newElement.Item as WTextRange).Text = "x";
```

---

## Group Character Equation

You can add a group character (overbrace, underbrace, etc.) to equations. The following code example shows how to create an equation with grouping character:

### Common for Cross-Platform and Windows-Specific
```csharp
WordDocument document = new WordDocument();
document.EnsureMinimal();
WMath math = document.LastParagraph.AppendMath();
IOfficeMath officeMath = math.MathParagraph.Maths.Add();
IOfficeMathGroupCharacter officeMathGroupCharacter = officeMath.Functions.Add(0, MathFunctionType.GroupCharacter) as IOfficeMathGroupCharacter;

// Sets the group character
officeMathGroupCharacter.GroupCharacter = "⏞";
// Enables the flag to align group character at top
officeMathGroupCharacter.HasAlignTop = true;
// Enables the flag to align the text and group character
officeMathGroupCharacter.HasCharacterTop = true;

// Adds the run element for group character
IOfficeMathRunElement officeMathRunElement = officeMathGroupCharacter.Equation.Functions.Add(0, MathFunctionType.RunElement) as IOfficeMathRunElement;
officeMathRunElement.Item = new WTextRange(document);
// Sets text for group character equation
(officeMathRunElement.Item as WTextRange).Text = "a-b";

MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
document.Close();
```

---

## Create Equations Using LaTeX

DocIO supports creating equations directly from LaTeX syntax:

### Common for Cross-Platform and Windows-Specific
```csharp
WordDocument document = new WordDocument();
document.EnsureMinimal();
// Create equation from LaTeX
document.LastParagraph.AppendMath(@"E=mc^2");
// LaTeX rendering is handled through the equation parsing
// Example: E=mc² can be created programmatically

MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
document.Close();
```

**Supported LaTeX Elements:**
- Fractions: `\frac{a}{b}`
- Superscript: `x^2`, `x^{2+3}`
- Subscript: `x_n`, `x_{n+1}`
- Roots: `\sqrt{x}`, `\sqrt[n]{x}`
- Summation: `\sum_{i=1}^{n}`, `\int`, `\prod`
- Greek letters: `\alpha`, `\beta`, `\gamma`
- Accents: `\bar{x}`, `\hat{x}`, `\widetilde{x}`

---

## Formatting Options

### Character Formatting

#### Common for Cross-Platform and Windows-Specific
```csharp
var textRange = runElement.Item as WTextRange;
textRange.CharacterFormat.Bold = true;
textRange.CharacterFormat.Italic = true;
textRange.CharacterFormat.FontSize = 14;
textRange.CharacterFormat.TextColor = Color.Blue;
```

### Math Formatting

#### Common for Cross-Platform and Windows-Specific
```csharp
runElement.MathFormat.Style = MathStyleType.Italic;
```

---

## Key Equation Types Reference

| Type | Use Case | Properties |
|------|----------|-----------|
| **Fraction** | Numerator/denominator ratios | `FractionType` (NormalFractionBar, Skewed, Linear, NoBar) |
| **Radical** | Square root, nth root | `HideDegree`, `Degree`, `Equation` |
| **Matrix** | Multi-row/column arrays | `RowSpacing`, `ColumnWidth`, `VerticalAlignment` |
| **Superscript** | Exponents, powers | `ScriptType` (Superscript, Subscript) |
| **N-Array** | Summation, integral, product | `NArrayCharacter`, `SubSuperscriptLimit` |
| **Delimiter** | Brackets, parentheses | `BeginCharacter`, `EndCharacter`, `IsGrow` |
| **Bar** | Overline, underline | `BarTop` (true=overline, false=underline) |
| **Accent** | Accents on symbols | `AccentCharacter` |

---

## Supported Input Formats

- DOC, DOCX, Word Processing XML (2003 & 2007)
- DOT, DOTX, DOCM, DOTM
- RTF, Text, Markdown, HTML

---

## Limitations

- Equations only supported in Open XML Format (DOCX, DOCM)
- Cannot be used in Word 97-2003 (.doc) format
- Rendering requires compatible Office Math display libraries

### Placeholders
- `outputPath` → Replace with `"{output-file-path}"`
- `"input.docx"` → Replace with `"{input-docx-path}"`
- `MathStyleType` values → `{Italic|Bold|DoubleStruck|Script|etc}`
- `MathFunctionType` values → See supported types list above
