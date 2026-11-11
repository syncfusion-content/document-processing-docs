# Overview — Syncfusion Windows Forms Calculation Engine

> Essential Calculate is a native .NET class library for parsing, computing expressions, and formulas with 400+ predefined functions. It's a non-UI component with full-fledged object model support for formula calculation without Microsoft Office dependencies.

---

## Core Features

- **400+ Predefined Functions** across Math, Trigonometry, Statistical, Lookup, Logical, Text, Date/Time, Information, and Matrix categories
- **Non-UI Component** - Works independently in any .NET environment (Windows Forms, WPF, ASP.NET, Xamarin, UWP)
- **No Microsoft Office Dependency** - Performs calculations without Excel or COM libraries
- **Named Ranges Support** - Define names for cells, ranges, formulas, constants, or tables
- **Cross-Sheet References** - Work with multiple sheets simultaneously
- **Custom Functions** - Register custom functions with n-number of optional arguments
- **Culture-Sensitive** - Supports custom decimal and argument separators
- **XlsIO Integration** - Fully integrated with Essential XlsIO for Excel spreadsheet calculations
- **Array Formulas** - Support for array formulas and dynamic references
- **Dependency Tracking** - Full dependency tracking and automatic recalculation

---

## Supported Environments

| Platform | Assembly | NuGet Package |
|----------|----------|---------------|
| Windows Forms, WPF, ASP.NET | `Syncfusion.Calculate.Base` | [Syncfusion.Calculate.Base](https://www.nuget.org/packages/Syncfusion.Calculate.Base/) |
| Universal Windows Platform | `Syncfusion.Calculate.UWP` | [Syncfusion.Calculate.UWP](https://www.nuget.org/packages/Syncfusion.Calculate.UWP/) |
| Xamarin.Forms | `Syncfusion.Calculate.Portable` | [Syncfusion.Xamarin.Calculate](https://www.nuget.org/packages/Syncfusion.Xamarin.Calculate/) |
| Xamarin.Android | `Syncfusion.Calculate.Android` | [Syncfusion.Xamarin.Calculate](https://www.nuget.org/packages/Syncfusion.Xamarin.Calculate/) |
| Xamarin.iOS | `Syncfusion.Calculate.iOS` | [Syncfusion.Xamarin.Calculate](https://www.nuget.org/packages/Syncfusion.Xamarin.Calculate/) |
| .NET Core | `Syncfusion.Calculate.Base` | [Syncfusion.Calculate.Base](https://www.nuget.org/packages/Syncfusion.Calculate.Base/) |

---

## Formula Types Supported

### Simple Algebraic Expressions
```csharp
(1.2^3 - 1) / 8
```

### Expressions with Intrinsic Functions
```csharp
4 * sqrt(exp(8.4))
```

### Expressions with Variables
```csharp
cos([textBox1] * pi() / 180)
```

### Spreadsheet-like Formulas
```csharp
SUM(A2:B14)
VLOOKUP(value, A1:C10, 2, FALSE)
```

---

## Function Categories

| Category | Supported Functions |
|----------|-------------------|
| **Math & Trigonometry** | ABS, ACOSH, ACOT, ACOTH, ACOS, ARABIC, ASIN, ASINH, ATAN, ATAN2, ATANH, BASE, CEILING, CEILING.Math, COMBIN, COMBINA, COS, COSH, COT, COTH, CSC, CSCH, DECIMAL, DEGREES, EVEN, EXP, FACT, FACTDOUBLE, FLOOR, GCD, GROUPBY, INT, LCM, LN, LOG, LOG10, MDETERM, MINVERSE, MMULT, MOD, MROUND, MUNIT, ODD, PI, POWER, PRODUCT, QUOTIENT, RADIANS, RAND, RANDBETWEEN, ROMAN, ROUND, ROUNDDOWN, ROUNDUP, SEC, SECH, SERIESSUM, SIGN, SIN, SINH, SQRT, SQRTPI, SUBTOTAL, SUM, SUMIF, SUMIFS, SUMPRODUCT, SUMSQ, SUMX2MY2, SUMX2PY2, SUMXMY2, TAN, TANH, TRUNC |
| **Database Functions** | DAVERAGE, DCOUNT, DCOUNTA, DGET, DMAX, DMIN, DPRODUCT, DSTDEV, DSTDEVP, DSUM, DVAR, DVARP |
| **Statistical** | AVEDEV, AVERAGE, AVERAGEA, AVERAGEIF, AVERAGEIFS, BETADIST, BETAINV, BETA.INV, BINOM.DIST, CHISQ.DIST, CHISQ.DIST.RT, CHISQ.INV, CHISQ.INV.RT, CHISQ.TEST, CONFIDENCE, CONFIDENCE.NORM, CONFIDENCE.T, CORREL, COUNT, COUNTA, COUNTBLANK, COUNTIF, COUNTIFS, COVARIANCE.P, COVARIANCE.S, DEVSQ, EXPON.DIST, F.DIST, F.DIST.RT, F.INV, F.INV.RT, F.TEST, FORECAST, FREQUENCY, GAMMA, GAMMA.DIST, GAMMA.INV, GAMMALN, GAMMALN.PRECISE, GEOMEAN, GROWTH, HARMEAN, HYPGEOM.DIST, INTERCEPT, KURT, LARGE, LINEST, LOGEST, LOGNORM.DIST, LOGNORM.INV, MAX, MAXA, MAXIFS, MEDIAN, MIN, MINA, MINIFS, MODE, MODE.MULT, MODE.SNGL, NEGBINOM.DIST, NORM.DIST, NORM.INV, NORM.S.DIST, NORM.S.INV, PERCENTILE, PERCENTILE.INC, PERCENTILE.EXC, PERCENTRANK, PERCENTRANK.INC, PERCENTRANK.EXC, POISSON.DIST, PROB, QUARTILE, QUARTILE.INC, QUARTILE.EXC, RANK, RANK.AVG, RANK.EQ, RSQ, SKEW, SKEW.P, SLOPE, SMALL, STANDARDIZE, STDEV, STDEV.P, STDEV.S, STDEVP, STEYX, SUMIF, T.DIST, T.DIST.2T, T.DIST.RT, T.INV, T.INV.2T, T.TEST, TTEST, TREND, TRIMMEAN, VAR, VAR.P, VAR.S, VARP, WEIBULL, WEIBULL.DIST, Z.TEST |
| **Engineering** | BESSELI, BESSELJ, BESSELK, BESSELY, BIN2DEC, BIN2HEX, BIN2OCT, BITAND, BITLSHIFT, BITOR, BITRSHIFT, BITXOR, COMPLEX, CONVERT, DEC2BIN, DEC2HEX, DEC2OCT, DELTA, ERF, ERF.PRECISE, ERFC, ERFC.PRECISE, GESTEP, HEX2BIN, HEX2DEC, HEX2OCT, IMABS, IMAGINARY, IMARGUMENT, IMCONJUGATE, IMCOS, IMCOSH, IMCOT, IMCSC, IMCSCH, IMDIV, IMEXP, IMLN, IMLOG10, IMLOG2, IMPOWER, IMPRODUCT, IMREAL, IMSEC, IMSECH, IMSIN, IMSINH, IMSQRT, IMSUB, IMSUM, IMTAN, OCT2BIN, OCT2DEC, OCT2HEX |
| **Date/Time** | DATE, DATEDIF, DATEVALUE, DAY, DAYS, DAYS360, EDATE, EOMONTH, HOUR, ISOWEEKNUM, MINUTE, MONTH, NETWORKDAYS, NETWORKDAYS.INTL, NOW, SECOND, TIME, TIMEVALUE, TODAY, WEEKDAY, WEEKNUM, WORKDAY, WORKDAY.INTL, YEAR, YEARFRAC |
| **Text** | ACHAR, ARRAYTOTEXT, ASC, BAHTTEXT, CHAR, CHOOSECOLS, CHOOSEROWS, CLEAN, CODE, CONCATENATE, CONCAT, DBCS, DOLLAR, DROP, EXACT, EXPAND, FILTER, FIND, FINDB, FIXED, FORMULA, IFERROR, IFNA, JIS, LEFT, LEFTB, LEN, LENB, LOWER, MID, MIDB, NUMBERVALUE, PROPER, REGEX, REPLACE, REPLACEB, REPT, RIGHT, RIGHTB, SEARCH, SEARCHB, SEQUENCE, SORT, SORTBY, SUBSTITUTE, T, TAKE, TEXT, TEXTAFTER, TEXTBEFORE, TEXTJOIN, TEXTSPLIT, TOCOL, TOROW, TRIM, UNICHAR, UNICODE, UNIQUE, UPPER, VALUE, VALUETOTEXT, WRAPCOLS, WRAPROWS |
| **Logical** | AND, FALSE, IF, IFERROR, IFNA, IFS, LET, NOT, OR, SWITCH, TRUE, XOR |
| **Lookup & Reference** | ADDRESS, AREAS, CHOOSE, COLUMN, COLUMNS, FORMULATEXT, HLOOKUP, HYPERLINK, INDEX, INDIRECT, LOOKUP, MATCH, OFFSET, ROW, ROWS, SHEET, SHEETS, TRANSPOSE, VLOOKUP |
| **Information** | CELL, ERROR.TYPE, ERRORTYPE, INFO, ISBLANK, ISERR, ISERROR, ISEVEN, ISFORMULA, ISLOGICAL, ISNA, ISNONTEXT, ISNUMBER, ISODD, ISREF, ISTEXT, N, NA, TYPE |
| **Web** | ENCODEURL, FILTERXML, WEBSERVICE |
| **Financial** | ACCRINT, ACCRINTM, AMORDEGRC, AMORLINC, COUPDAYBS, COUPDAYS, COUPDAYSNC, COUPPCD, COUPNCD, COUPNUM, CUMIPMT, CUMPRINC, DB, DDB, DISC, DOLLARDE, DOLLARFR, DURATION, EFFECT, FV, FVSCHEDULE, INTRATE, IPMT, IRR, ISPMT, MDURATION, MIRR, NOMINAL, NPER, NPV, ODDFPRICE, ODDFYIELD, ODDLPRICE, ODDLYIELD, PDURATION, PMT, PPMT, PRICE, PRICEMAT, PRICEDISC, PV, RATE, RECEIVED, RRI, SLN, SYD, TBILLEQ, TBILLPRICE, TBILLYIELD, VDB, XIRR, XNPV, YIELD, YIELDDISC, YIELDMAT |

---

## Architecture Overview

Essential Calculate uses a **non-UI component architecture** that enables:

- **Data Source Agnostic** - Implements `ICalcData` interface to work with arbitrary business objects
- **Extensible** - Add custom functions and operators
- **High Performance** - Efficient parsing with Reverse Polish Notation (RPN)
- **Dependency Management** - Automatic tracking of cell dependencies
- **Error Handling** - Comprehensive error reporting with Excel-compatible error strings

---

## Key Components

1. **CalcEngine** - Core computation engine for parsing and computing formulas
2. **CalcQuickBase** - Simplified interface for quick calculations with variables
3. **ICalcData** - Interface for integrating arbitrary data sources
4. **LibraryFunctions** - Collection of 400+ built-in and custom functions
5. **NamedRanges** - Management of named cell ranges and formulas

---

## Typical Use Cases

- **Financial Calculations** - Investment analysis, amortization schedules
- **Data Analysis** - Statistical computations, aggregations
- **Business Applications** - Invoice calculations, payroll systems
- **Scientific Computing** - Mathematical and trigonometric calculations
- **Spreadsheet Integration** - Read/write/compute Excel files without Excel
- **Custom Business Logic** - Domain-specific calculations with custom functions

---

## Getting Started

### Quick Calculation with CalcQuickBase
```csharp
CalcQuickBase calcQuick = new CalcQuickBase();
string result = calcQuick.ParseAndCompute("SUM(5, 10, 15)");  // "30"
```

### Calculation with ICalcData
```csharp
CalcData calcData = new CalcData();
calcData.SetValueRowCol(10, 1, 1);  // A1 = 10
calcData.SetValueRowCol(20, 1, 2);  // B1 = 20

CalcEngine engine = new CalcEngine(calcData);
string result = engine.ParseAndComputeFormula("SUM(A1, B1)");  // "30"
```

---

## Integration with XlsIO

Calculate integrates seamlessly with XlsIO for complete Excel spreadsheet support:

```csharp
ExcelEngine excelEngine = new ExcelEngine();
IWorkbook workbook = excelEngine.Excel.Workbooks.Open("sample.xlsx");
IWorksheet sheet = workbook.Worksheets[0];

sheet.EnableSheetCalculations();
sheet["C1"].Formula = "=A1 + B1";
var result = sheet["C1"].CalculatedValue;
sheet.DisableSheetCalculations();
```

---

## Resources

- **NuGet Packages** - Install via Package Manager
- **Custom Functions** - Create domain-specific calculations
- **Named Ranges** - Simplify complex formulas
- **Cross-Sheet References** - Multi-sheet calculations
- **Performance Optimization** - Tune for large datasets
