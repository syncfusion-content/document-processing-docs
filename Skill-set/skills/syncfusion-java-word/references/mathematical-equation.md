# Mathematical Equations

> Create, modify, and manage mathematical equations in Word documents using WMath DOM and LaTeX syntax.

---

## Required common usings

```java
import com.syncfusion.docio.*;
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

```java
 WordDocument document = new WordDocument();
document.ensureMinimal();

WMath math = document.getLastParagraph().appendMath();
IOfficeMath officeMath = math.getMathParagraph().getMaths().add();
IOfficeMathAccent mathAccent = (IOfficeMathAccent) officeMath.getFunctions().add(0, MathFunctionType.Accent);
mathAccent.setAccentCharacter("̆");

IOfficeMathRunElement officeMathRunElement = (IOfficeMathRunElement) mathAccent.getEquation().getFunctions().add(0, MathFunctionType.RunElement);
officeMathRunElement.setItem(new WTextRange(document));
WTextRange textRange = (WTextRange) officeMathRunElement.getItem();
textRange.setText("a");

ByteArrayOutputStream stream = new ByteArrayOutputStream();
document.save(stream, FormatType.Docx);
document.close();
```

### Fraction Equation

```java
 WordDocument document = new WordDocument();
document.ensureMinimal();

WMath math = document.getLastParagraph().appendMath();
IOfficeMath officeMath = math.getMathParagraph().getMaths().add();

IOfficeMathFraction mathFraction = (IOfficeMathFraction) officeMath.getFunctions().add(0, MathFunctionType.Fraction);
mathFraction.setFractionType(MathFractionType.NormalFractionBar);

IOfficeMathRunElement numerator = (IOfficeMathRunElement) mathFraction.getNumerator().getFunctions().add(0, MathFunctionType.RunElement);
numerator.setItem(new WTextRange(document));
((WTextRange) numerator.getItem()).setText("a");

IOfficeMathRunElement denominator = (IOfficeMathRunElement) mathFraction.getDenominator().getFunctions().add(0, MathFunctionType.RunElement);
denominator.setItem(new WTextRange(document));
((WTextRange) denominator.getItem()).setText("b");

ByteArrayOutputStream stream = new ByteArrayOutputStream();
document.save(stream, FormatType.Docx);
document.close();
```

### Radical Equation (Square Root)

```java
WordDocument document = new WordDocument();
document.ensureMinimal();

WMath wmath = document.getLastParagraph().appendMath();
IOfficeMath officeMath = wmath.getMathParagraph().getMaths().add();

IOfficeMathRadical officeMathRadical = (IOfficeMathRadical) officeMath.getFunctions().add(0, MathFunctionType.Radical);
officeMathRadical.setHideDegree(false);

IOfficeMathRunElement degree = (IOfficeMathRunElement) officeMathRadical.getDegree().getFunctions().add(0, MathFunctionType.RunElement);
degree.setItem(new WTextRange(document));
((WTextRange) degree.getItem()).setText("2");

IOfficeMathRunElement officeMathRunElement = (IOfficeMathRunElement) officeMathRadical.getEquation().getFunctions().add(0, MathFunctionType.RunElement);
officeMathRunElement.setItem(new WTextRange(document));
((WTextRange) officeMathRunElement.getItem()).setText("x");

ByteArrayOutputStream stream = new ByteArrayOutputStream();
document.save(stream, FormatType.Docx);
document.close();
```

### Matrix Equation

```java
 WordDocument document = new WordDocument();
document.ensureMinimal();

WMath wmath = document.getLastParagraph().appendMath();
IOfficeMath officeMath = wmath.getMathParagraph().getMaths().add();

IOfficeMathMatrix mathMatrix = (IOfficeMathMatrix) officeMath.getFunctions().add(0, MathFunctionType.Matrix);
mathMatrix.setVerticalAlignment(MathVerticalAlignment.Center);
mathMatrix.setColumnWidth(1);

// Add two columns and two rows
mathMatrix.getColumns().add();
mathMatrix.getRows().add();
mathMatrix.getColumns().add();
mathMatrix.getRows().add();

// Set cell (1,1)
IOfficeMath cell11 = mathMatrix.getRows().get(0).getArguments().get(0);
IOfficeMathRunElement elem = (IOfficeMathRunElement) cell11.getFunctions().add(0, MathFunctionType.RunElement);
elem.setItem(new WTextRange(document));
((WTextRange) elem.getItem()).setText("1");

// Set cell (1,2)
IOfficeMath cell12 = mathMatrix.getRows().get(0).getArguments().get(1);
elem = (IOfficeMathRunElement) cell12.getFunctions().add(0, MathFunctionType.RunElement);
elem.setItem(new WTextRange(document));
((WTextRange) elem.getItem()).setText("2");

ByteArrayOutputStream stream = new ByteArrayOutputStream();
document.save(stream, FormatType.Docx);
document.close();
```

### N-Array (Summation)

```java
 WordDocument document = new WordDocument();
document.ensureMinimal();

WMath wMath = document.getLastParagraph().appendMath();
IOfficeMath officeMath = wMath.getMathParagraph().getMaths().add();

IOfficeMathNArray officeMathNArray = (IOfficeMathNArray) officeMath.getFunctions().add(0, MathFunctionType.NArray);
officeMathNArray.setNArrayCharacter("∑");
officeMathNArray.setHasGrow(false);
officeMathNArray.setHideLowerLimit(false);
officeMathNArray.setHideUpperLimit(false);
officeMathNArray.setSubSuperscriptLimit(true);

IOfficeMathRunElement runElem = (IOfficeMathRunElement) officeMathNArray.getSubscript().getFunctions().add(0, MathFunctionType.RunElement);
runElem.setItem(new WTextRange(document));
((WTextRange) runElem.getItem()).setText("n=1");

runElem = (IOfficeMathRunElement) officeMathNArray.getSuperscript().getFunctions().add(0, MathFunctionType.RunElement);
runElem.setItem(new WTextRange(document));
((WTextRange) runElem.getItem()).setText("10");

runElem = (IOfficeMathRunElement) officeMathNArray.getEquation().getFunctions().add(0, MathFunctionType.RunElement);
runElem.setItem(new WTextRange(document));
((WTextRange) runElem.getItem()).setText("x");

ByteArrayOutputStream stream = new ByteArrayOutputStream();
document.save(stream, FormatType.Docx);
document.close();
```

### Superscript/Subscript

```java
WordDocument document = new WordDocument();
document.ensureMinimal();

WMath wmath = document.getLastParagraph().appendMath();
IOfficeMath officeMath = wmath.getMathParagraph().getMaths().add();

IOfficeMathScript officeMathScript = (IOfficeMathScript) officeMath.getFunctions().add(0, MathFunctionType.SubSuperscript);
officeMathScript.setScriptType(MathScriptType.Superscript);

IOfficeMathRunElement officeMathRunElement = (IOfficeMathRunElement) officeMathScript.getScript().getFunctions().add(0, MathFunctionType.RunElement);
officeMathRunElement.setItem(new WTextRange(document));
WTextRange textRange = (WTextRange) officeMathRunElement.getItem();
textRange.setText("2");

officeMathRunElement = (IOfficeMathRunElement) officeMathScript.getEquation().getFunctions().add(0, MathFunctionType.RunElement);
officeMathRunElement.setItem(new WTextRange(document));
((WTextRange) officeMathRunElement.getItem()).setText("x");

ByteArrayOutputStream stream = new ByteArrayOutputStream();
document.save(stream, FormatType.Docx);
document.close();
```

### Delimiter

```java
WordDocument document = new WordDocument();
document.ensureMinimal();
WMath math = document.getLastParagraph().appendMath();
IOfficeMath officeMath = math.getMathParagraph().getMaths().add();
IOfficeMathDelimiter mathDelimiter =(IOfficeMathDelimiter) officeMath.getFunctions().add(0, MathFunctionType.Delimiter);
mathDelimiter.setBeginCharacter("[");
mathDelimiter.setEndCharacter("]");
mathDelimiter.setIsGrow(true);
mathDelimiter.setDelimiterShape(MathDelimiterShapeType.Match);
IOfficeMathRunElement officeMathRunElement =(IOfficeMathRunElement) mathDelimiter.getEquation().add(0).getFunctions().add(0, MathFunctionType.RunElement);
officeMathRunElement.setItem(new WTextRange(document));
((WTextRange)officeMathRunElement.getItem()).setText("a+b");
document.save("Sample.docx", FormatType.Docx);
document.close();
```

---

## Modify Existing Equations

Access and modify equation components by traversing the equation tree:

```java
WordDocument document = new WordDocument("Input.docx");
//Access the paragraph from Word document
WParagraph paragraph = (WParagraph) document.getLastSection().getBody().getChildEntities().get(0);
//Access the mathematical equation from the paragraph
WMath math = (WMath) paragraph.getChildEntities().get(0);
//Access the radical equation
IOfficeMathRadical mathRadical = (IOfficeMathRadical) math.getMathParagraph().getMaths().get(0).getFunctions().get(1);
//Access the fraction equation in radical
IOfficeMathFraction mathFraction = (IOfficeMathFraction) mathRadical.getEquation().getFunctions().get(0);
//Access the n-array equation in fraction
IOfficeMathNArray mathNAry = (IOfficeMathNArray) mathFraction.getNumerator().getFunctions().get(0);
//Access the math script in n-array
IOfficeMathScript mathScript = (IOfficeMathScript) mathNAry.getEquation().getFunctions().get(0);
//Access the delimiter in math script
IOfficeMathDelimiter mathDelimiter = (IOfficeMathDelimiter) mathScript.getEquation().getFunctions().get(0);
//Removes the delimiter
mathScript.getEquation().getFunctions().remove(mathDelimiter);
//Modifies the run element in math script
IOfficeMathRunElement MathParagraphItem = (IOfficeMathRunElement) mathScript.getEquation().getFunctions().add(MathFunctionType.RunElement);
MathParagraphItem.setItem( new WTextRange(document));
//Sets the text value
((WTextRange)MathParagraphItem.getItem()).setText("x");
//Applies character format to the text
((WTextRange)MathParagraphItem.getItem()).getCharacterFormat().setItalic(true);
((WTextRange)MathParagraphItem.getItem()).getCharacterFormat().setFontSize(20);
//Applies math format to the text
MathParagraphItem.getMathFormat().setStyle(MathStyleType.Italic);
//Saves the word document
document.save("Output.docx");
//close the word document
document.close();
```

### Remove and Replace Functions

```java
// Try to remove the delimiter function
boolean removed = mathScript.getEquation().getFunctions().remove(mathDelimiter);

// Fallback: remove by index if remove(Object) isn't supported
if (!removed) {
    int idx = mathScript.getEquation().getFunctions().indexOf(mathDelimiter);
    if (idx >= 0) mathScript.getEquation().getFunctions().remove(idx);
}

// Add a new run element with text "x"
IOfficeMathRunElement newElement = (IOfficeMathRunElement)
    mathScript.getEquation().getFunctions().add(0, MathFunctionType.RunElement);
newElement.setItem(new WTextRange(document));
((WTextRange) newElement.getItem()).setText("x");
```

---

## Group Character Equation

You can add a group character (overbrace, underbrace, etc.) to equations. The following code example shows how to create an equation with grouping character:

```java
WordDocument document = new WordDocument();
document.ensureMinimal();

WMath math = document.getLastParagraph().appendMath();
IOfficeMath officeMath = math.getMathParagraph().getMaths().add();

IOfficeMathGroupCharacter groupChar = (IOfficeMathGroupCharacter)
officeMath.getFunctions().add(0, MathFunctionType.GroupCharacter);

groupChar.setGroupCharacter("⏞");
groupChar.setHasAlignTop(true);
groupChar.setHasCharacterTop(true);

IOfficeMathRunElement runElem = (IOfficeMathRunElement)
groupChar.getEquation().getFunctions().add(0, MathFunctionType.RunElement);
runElem.setItem(new WTextRange(document));
((WTextRange) runElem.getItem()).setText("a-b");

ByteArrayOutputStream stream = new ByteArrayOutputStream();
document.save(stream, FormatType.Docx);
document.close();
```

---

## Create Equations Using LaTeX

DocIO supports creating equations directly from LaTeX syntax:

```java
WordDocument document = new WordDocument();
document.ensureMinimal();

// Create equation from LaTeX
document.getLastParagraph().appendMath("E=mc^2");

// LaTeX rendering is handled through the equation parsing
// Example: E=mc² can be created programmatically

ByteArrayOutputStream stream = new ByteArrayOutputStream();
document.save(stream, FormatType.Docx);
document.close();
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

```java
WTextRange textRange = (WTextRange) runElement.getItem();
textRange.getCharacterFormat().setBold(true);
textRange.getCharacterFormat().setItalic(true);
textRange.getCharacterFormat().setFontSize(14f);
textRange.getCharacterFormat().setTextColor(Color.BLUE);
```

### Math Formatting

```java
// assume runElement is an existing IOfficeMathRunElement
runElement.getMathFormat().setStyle(MathStyleType.Italic);
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
