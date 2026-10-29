---
layout: post
title: Globalization in Blazor Spreadsheet | Syncfusion
description: Learn how to localize the Blazor Spreadsheet, configure culture-specific formatting, and enable right-to-left layout.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Globalization in Blazor Spreadsheet

## Localization

The built-in UI text of the Blazor Spreadsheet can be translated by using Syncfusion Blazor resource files and the registered `ISyncfusionStringLocalizer`. Start by downloading `SfResources.resx` and the required culture-specific resource file from the Syncfusion Blazor locale repository, then add them to the application `Resources` folder. Set the access modifier of `SfResources.resx` to `Public`, implement `ISyncfusionStringLocalizer`, and register the Syncfusion localization service. After that, set the application culture and UI culture so the Spreadsheet uses the active UI culture for its localized text.

For complete steps to add resource files, register `ISyncfusionStringLocalizer`, and configure static or dynamic culture for different Blazor application models, refer to the [Blazor Common Localization](https://blazor.syncfusion.com/documentation/common/localization) documentation.

The following table lists the verified Blazor Spreadsheet localization words from `SfResources.resx`.

| Locale key | Default text |
|------------|--------------|
| `InvalidPassword` | Incorrect Password. Please try again. |
| `ABS` | Returns the absolute value of a number |
| `ACOS` | Returns the arccosine of a number |
| `ACOSH` | Returns the inverse hyperbolic cosine of a number |
| `ADDRESS` | Returns a reference as text to a cell |
| `ANDFormula` | Returns TRUE if all of its arguments are TRUE |
| `AREAS` | Returns the number of areas in a reference |
| `ARRAYTOTEXT` | Returns the text representation of an array |
| `ASC` | Converts full-width characters to half-width characters in a string |
| `ASIN` | Returns the arcsine of a number |
| `ASINH` | Returns the inverse hyperbolic sine of a number |
| `ATAN` | Returns the arctangent of a number |
| `ATAN2` | Returns the arctangent from x- and y-coordinates |
| `ATANH` | Returns the inverse hyperbolic tangent of a number |
| `AVEDEV` | Returns the average of absolute deviations from mean |
| `AVERAGE` | Returns the average of its arguments |
| `AVERAGEA` | Returns the average of its arguments |
| `AVERAGEIF` | Returns the average of cells meeting a criterion |
| `AVERAGEIFS` | Returns the average of cells meeting multiple criteria |
| `BESSELI` | Returns the modified Bessel function In(x) |
| `BESSELJ` | Returns the Bessel function Jn(x) |
| `BESSELK` | Returns the modified Bessel function Kn(x) |
| `BESSELY` | Returns the Bessel function Yn(x) |
| `BIN2DEC` | Converts a binary number to decimal |
| `BIN2HEX` | Converts a binary number to hexadecimal |
| `BIN2OCT` | Converts a binary number to octal |
| `BINOMDIST` | Returns the individual term binomial distribution probability |
| `BYCOL` | Applies a LAMBDA to each column and returns an array of the results |
| `BYROW` | Applies a LAMBDA to each row and returns an array of the results |
| `CEILING` | Rounds a number to nearest integer or multiple |
| `CELL` | Returns information about the formatting, location, or contents |
| `CHAR` | Returns the character specified by the code number |
| `CHIDIST` | Returns the one-tailed probability of the chi-squared distribution |
| `CHIINV` | Returns inverse of chi-squared distribution |
| `CHITEST` | Returns the test for independence |
| `CHOOSE` | Chooses a value from a list of values |
| `CHOOSECOLS` | Returns specified columns from an array |
| `CHOOSEROWS` | Returns specified rows from an array |
| `CLEAN` | Removes all non-printable characters from text |
| `CODE` | Returns a numeric code for the first character in a text string |
| `COLUMN` | Returns the column number of a reference |
| `COLUMNS` | Returns the number of columns in a reference |
| `COMBIN` | Returns the number of combinations for a given number of objects |
| `COMPLEX` | Converts real and imaginary coefficients into a complex number |
| `CONCAT` | Combines the text from multiple ranges and/or strings |
| `CONCATENATE` | Joins several text items into one text item |
| `CONFIDENCE` | Returns the confidence interval for a population mean |
| `CONVERT` | Converts a number from one measurement system to another |
| `CORREL` | Returns the correlation coefficient between two data sets |
| `COS` | Returns the cosine of a number |
| `COSH` | Returns the hyperbolic cosine of a number |
| `COUNT` | Counts how many numbers are in the list of arguments |
| `COUNTA` | Counts how many values are in the list of arguments |
| `COUNTBLANK` | Counts the number of blank cells within a range |
| `COUNTIF` | Counts cells meeting given criteria |
| `COVAR` | Returns covariance, the average of the products of paired deviations |
| `CRITBINOM` | Returns smallest value for cumulative binomial distribution |
| `CUMIPMT` | Returns the cumulative interest paid between two periods |
| `CUMPRINC` | Returns the cumulative principal paid on a loan between two periods |
| `DATE` | Returns the serial number of a particular date |
| `DATEVALUE` | Converts a date in the form of text to a serial number |
| `DAY` | Converts a serial number to a day of the month |
| `DAYS360` | Calculates the number of days between two dates based on a 360-day year |
| `DB` | Returns asset depreciation using fixed-declining balance |
| `DDB` | Returns asset depreciation using double-declining balance |
| `DEC2BIN` | Converts a decimal number to binary |
| `DECHEX` | Converts a decimal number to hexadecimal |
| `DEC2OCT` | Converts a decimal number to octal |
| `DEGREES` | Converts radians to degrees |
| `DELTA` | Tests whether two values are equal |
| `DEVSQ` | Returns the sum of squares of deviations |
| `DISC` | Returns the discount rate for a security |
| `DOLLAR` | Converts a number to text, using the $ (dollar) currency format |
| `DOLLARDE` | Converts fractional dollar price to decimal |
| `DOLLARFR` | Converts decimal dollar price to fractional |
| `DURATION` | Returns the annual duration of a security with periodic interest payments |
| `EDATE` | Returns date that is months before/after start date |
| `EFFECT` | Returns the effective annual interest rate |
| `EOMONTH` | Returns last day of month before/after specified months |
| `ERF` | Returns the error function |
| `ERFC` | Returns the complementary error function |
| `ERRORTYPE` | Returns a number corresponding to an error type |
| `EVEN` | Rounds a number up to the nearest even integer |
| `EXACT` | Checks to see if two text values are identical |
| `EXP` | Returns e raised to the power of a given number |
| `EXPONDIST` | Returns the exponential distribution |
| `FACT` | Returns the factorial of a number |
| `FACTDOUBLE` | Returns the double factorial of a number |
| `FDIST` | Returns the F probability distribution |
| `FIND` | Finds one text value within another (case-sensitive) |
| `FINDB` | Finds one text value within another (case-sensitive) |
| `FINV` | Returns the inverse of the F probability distribution |
| `FISHER` | Returns the Fisher transformation |
| `FISHERINV` | Returns the inverse of the Fisher transformation |
| `FIXED` | Formats a number as text with a fixed number of decimals |
| `FLOOR` | Rounds a number down, toward zero |
| `FORECAST` | Returns a value along a linear trend |
| `FV` | Returns the future value of an investment |
| `FVSCHEDULE` | Returns future value after compound interest rates |
| `GAMMADIST` | Returns the gamma distribution |
| `GAMMAINV` | Returns the inverse of the gamma cumulative distribution |
| `GAMMALN` | Returns the natural logarithm of the gamma function, Γ(x) |
| `GCD` | Returns the greatest common divisor |
| `GEOMEAN` | Returns the geometric mean |
| `GESTEP` | Tests whether a number is greater than a threshold value |
| `GROWTH` | Returns values along an exponential trend |
| `HARMEAN` | Returns the harmonic mean |
| `HEX2BIN` | Converts a hexadecimal number to binary |
| `HEX2DEC` | Converts a hexadecimal number to decimal |
| `HEX2OCT` | Converts a hexadecimal number to octal |
| `HLOOKUP` | Looks in the top row of an array and returns the value of the indicated cell |
| `HOUR` | Converts a serial number to an hour |
| `HYPERLINKFormula` | Creates shortcut to open document on network/internet |
| `HYPGEOMDIST` | Returns the hypergeometric distribution |
| `IF` | Specifies a logical test to perform |
| `IFERROR` | Returns a specified value if a formula evaluates to an error |
| `IFS` | Returns value corresponding to first TRUE condition |
| `IMABS` | Returns the absolute value (modulus) of a complex number |
| `IMAGINARY` | Returns the imaginary coefficient of a complex number |
| `IMARGUMENT` | Returns the argument theta, an angle expressed in radians |
| `IMCONJUGATE` | Returns the complex conjugate of a complex number |
| `IMCOS` | Returns the cosine of a complex number |
| `IMDIV` | Returns the quotient of two complex numbers |
| `IMEXP` | Returns the exponential of a complex number |
| `IMLN` | Returns the natural logarithm of a complex number |
| `IMLOG10` | Returns the base-10 logarithm of a complex number |
| `IMLOG2` | Returns the base-2 logarithm of a complex number |
| `IMPOWER` | Returns a complex number raised to an integer power |
| `IMPRODUCT` | Returns the product of from 2 to 29 complex numbers |
| `IMREAL` | Returns the real coefficient of a complex number |
| `IMSIN` | Returns the sine of a complex number |
| `IMSQRT` | Returns the square root of a complex number |
| `IMSUB` | Returns the difference between two complex numbers |
| `IMSUM` | Returns the sum of complex numbers |
| `INDEX` | Uses an index to choose a value from a reference or array |
| `INDIRECT` | Returns a reference indicated by a text value |
| `INFO` | Returns information about the current operating environment |
| `INT` | Rounds a number down to the nearest integer |
| `INTERCEPT` | Returns the intercept of the linear regression line |
| `INTRATE` | Returns the interest rate for a fully invested security |
| `IPMT` | Returns the interest payment for an investment for a given period |
| `IRR` | Returns the internal rate of return for a series of cash flows |
| `ISBLANK` | Returns TRUE if the value is blank |
| `ISERR` | Returns TRUE if the value is any error value except #N/A |
| `ISERROR` | Returns TRUE if the value is any error value |
| `ISEVEN` | Returns TRUE if the number is even |
| `ISLOGICAL` | Returns TRUE if the value is a logical value |
| `ISNA` | Returns TRUE if the value is the #N/A error value |
| `ISNONTEXT` | Returns TRUE if the value is not text |
| `ISNUMBER` | Returns TRUE if the value is a number |
| `ISODD` | Returns TRUE if the number is odd |
| `ISPMT` | Calculates interest paid during investment period |
| `ISREF` | Returns TRUE if the value is a reference |
| `ISTEXT` | Returns TRUE if the value is text |
| `KURT` | Returns the kurtosis of a data set |
| `LAMBDA` | Allows to use own formula parameters and logic |
| `LARGE` | Returns the k-th largest value in a data set |
| `LCM` | Returns the least common multiple |
| `LEFT` | Returns the leftmost characters from a text value |
| `LEFTB` | Returns the leftmost characters from a text value |
| `LEN` | Returns the number of characters in a text string |
| `LENB` | Returns the number of characters in a text string |
| `LET` | Returns the result of a formula that can use variables. |
| `LN` | Returns the natural logarithm of a number |
| `LOG` | Returns the logarithm of a number to a specified base |
| `LOG10` | Returns the base-10 logarithm of a number |
| `LOGEST` | Returns the parameters of an exponential trend |
| `LOGINV` | Returns the inverse of the log-normal distribution |
| `LOGNORMDIST` | Returns the cumulative log-normal distribution |
| `LOOKUP` | Looks up values in a vector or array |
| `LOWER` | Converts text to lowercase |
| `MATCH` | Looks up values in a reference or array |
| `MAX` | Returns the maximum value in a list of arguments |
| `MAXA` | Returns the maximum value in a list of arguments, including numbers, text, and logical values |
| `MAXIFS` | Returns maximum value among cells meeting criteria |
| `MDETERM` | Returns the matrix determinant of an array |
| `MEDIAN` | Returns the median of the given numbers |
| `MID` | Returns characters from text starting at position |
| `MIDB` | Returns a specific number of characters from a text string starting at the position you specify |
| `MIN` | Returns the minimum value in a list of arguments |
| `MINA` | Returns the smallest value in a list of arguments, including numbers, text, and logical values |
| `MINIFS` | Returns minimum value among cells meeting criteria |
| `MINUTE` | Converts a serial number to a minute |
| `MINVERSE` | Returns the matrix inverse of an array |
| `MIRR` | Returns IRR with different financing rates |
| `MMULT` | Returns the matrix product of two arrays |
| `MOD` | Returns the remainder from division |
| `MODE` | Returns the most common value in a data set |
| `MONTH` | Converts a serial number to a month |
| `MROUND` | Returns a number rounded to the desired multiple |
| `MULTINOMIAL` | Returns the multinomial of a set of numbers |
| `N` | Returns a value converted to a number |
| `NA` | Returns the error value #N/A |
| `NEGBINOMDIST` | Returns the negative binomial distribution |
| `NETWORKDAYS` | Returns the number of whole workdays between two dates |
| `NORMDIST` | Returns the normal cumulative distribution |
| `NORMINV` | Returns the inverse of the normal cumulative distribution |
| `NORMSDIST` | Returns the standard normal cumulative distribution |
| `NORMSINV` | Returns the inverse of the standard normal cumulative distribution |
| `NOT` | Reverses the logic of its argument |
| `NOW` | Returns the serial number of the current date and time |
| `NPER` | Returns the number of periods for an investment |
| `NPV` | Returns net present value based on cash flows |
| `OCT2BIN` | Converts an octal number to binary |
| `OCT2DEC` | Converts an octal number to decimal |
| `OCT2HEX` | Converts an octal number to hexadecimal |
| `ODD` | Rounds a number up to the nearest odd integer |
| `OFFSET` | Returns a reference offset from a given reference |
| `ORFormula` | Returns TRUE if any argument is TRUE |
| `PEARSON` | Returns the Pearson product moment correlation coefficient |
| `PERCENTILE` | Returns the k-th percentile of values in a range |
| `PERCENTRANK` | Returns the percentage rank of a value in a data set |
| `PERMUT` | Returns the number of permutations for a given number of objects |
| `PI` | Returns the value of pi |
| `PMT` | Returns the periodic payment for an annuity |
| `POISSON` | Returns the Poisson distribution |
| `POWER` | Returns the result of a number raised to a power |
| `PPMT` | Returns the payment on the principal for an investment for a given period |
| `PROB` | Returns probability of values between limits |
| `PRODUCT` | Multiplies its arguments |
| `PROPER` | Capitalizes the first letter in each word of a text value |
| `PV` | Returns the present value of an investment |
| `QUARTILE` | Returns the quartile of a data set |
| `QUOTIENT` | Returns the integer portion of a division |
| `RADIANS` | Converts degrees to radians |
| `RAND` | Returns a random number between 0 and 1 |
| `RANDBETWEEN` | Returns a random number between the numbers you specify |
| `RANK` | Returns the rank of a number in a list of numbers |
| `RATE` | Returns the interest rate per period of an annuity |
| `RECEIVED` | Returns amount received at security maturity |
| `REPLACE` | Replaces characters within text |
| `REPLACEB` | Replaces characters within text |
| `REPT` | Repeats text a given number of times |
| `RIGHT` | Returns the rightmost characters from a text value |
| `RIGHTB` | Returns the rightmost characters from a text value |
| `ROMAN` | Converts an Arabic numeral to roman, as text |
| `ROUND` | Rounds a number to a specified number of digits |
| `ROUNDDOWN` | Rounds a number down, toward zero |
| `ROUNDUP` | Rounds a number up, away from zero |
| `ROW` | Returns the row number of a reference |
| `ROWS` | Returns the number of rows in a reference |
| `RSQ` | Returns the square of the Pearson product moment correlation coefficient |
| `SEARCHFormula` | Finds one text value within another (not case-sensitive) |
| `SEARCHB` | Finds one text value within another (not case-sensitive) |
| `SECOND` | Converts a serial number to a second |
| `SERIESSUM` | Returns the sum of a power series based on the formula |
| `SIGN` | Returns the sign of a number |
| `SIN` | Returns the sine of the given angle |
| `SINH` | Returns the hyperbolic sine of a number |
| `SKEW` | Returns the skewness of a distribution |
| `SLN` | Returns the straight-line depreciation of an asset for one period |
| `SLOPE` | Returns the slope of the linear regression line |
| `SORTFormula` | Returns the cell range values in ascending or descending order |
| `SMALL` | Returns the k-th smallest value in a data set |
| `SQRT` | Returns a positive square root |
| `SQRTPI` | Returns the square root of (number * pi) |
| `STANDARDIZE` | Returns a normalized value |
| `STDEV` | Estimates standard deviation based on a sample |
| `STDEVA` | Estimates standard deviation based on a sample, including numbers, text, and logical values |
| `STDEVP` | Calculates standard deviation based on the entire population |
| `STDEVPA` | Calculates standard deviation based on the entire population, including numbers, text, and logical values |
| `STEYX` | Returns the standard error of the predicted y-value for each x in the regression |
| `SUBSTITUTE` | Substitutes new text for old text in a text string |
| `SUBTOTAL` | Returns a subtotal in a list or database |
| `SUM` | Adds its arguments |
| `SUMIF` | Adds the cells specified by a given criteria |
| `SUMPRODUCT` | Returns the sum of the products of corresponding array components |
| `SUMSQ` | Returns the sum of the squares of the arguments |
| `SUMX2MY2` | Returns the sum of the difference of squares of corresponding values in two arrays |
| `SUMX2PY2` | Returns the sum of the sum of squares of corresponding values in two arrays |
| `SUMXMY2` | Returns the sum of squares of differences of corresponding values in two arrays |
| `SWITCH` | Returns result matching first true value |
| `SYD` | Returns sum-of-years' digits depreciation |
| `T` | Converts its arguments to text |
| `TAN` | Returns the tangent of a number |
| `TANH` | Returns the hyperbolic tangent of a number |
| `TEXTFormula` | Formats a number and converts it to text |
| `TEXTBEFORE` | Returns text that occurs before a given character |
| `TEXTJOIN` | Combines text with delimiter |
| `TEXTSPLIT` | Splits the cell text across rows or columns |
| `TIMEFormula` | Returns the serial number of a particular time |
| `TIMEVALUE` | Converts a time in the form of text to a serial number |
| `TOCOL` | Transforms an array into a single column |
| `TODAYFormula` | Returns the serial number of today's date |
| `TOROW` | Transforms an array into a single row |
| `TRANSPOSE` | Returns the transpose of an array |
| `TRIM` | Removes spaces from text |
| `TRIMMEAN` | Returns the mean of the interior of a data set |
| `TRUNC` | Truncates a number to an integer |
| `TYPE` | Returns a number indicating the data type of a value |
| `UNIQUE` | Returns the list of unique values present inside a list or range. |
| `UPPER` | Converts text to uppercase |
| `VALUEFormula` | Converts a text argument to a number |
| `VALUETOTEXT` | Returns the text from any specified value. |
| `VAR` | Estimates variance based on a sample |
| `VARA` | Estimates variance based on a sample, including numbers, text, and logical values |
| `VARP` | Calculates variance based on the entire population |
| `VARPA` | Calculates population variance including all values |
| `VDB` | Returns asset depreciation for partial period |
| `VLOOKUP` | Looks up value in first column and returns cell in same row |
| `WEEKDAY` | Converts a serial number to a day of the week |
| `WEEKNUM` | Returns week number within year |
| `WEIBULL` | Returns the Weibull distribution |
| `WORKDAY` | Returns date after specified workdays |
| `XIRR` | Returns IRR for non-periodic cash flows |
| `XLOOKUP` | Returns value of first or approximate match |
| `XMATCH` | Returns position of value in range |
| `YEAR` | Converts a serial number to a year |
| `YEARFRAC` | Returns fraction of year between dates |
| `ZTEST` | Returns the one-tailed probability-value of a z-test |
| `FALSE` | Returns the logical value FALSE |
| `TRUE` | Returns the logical value TRUE |
| `function` | Function to perform |
| `Formulas` | Formulas |
| `CalculationOption` | Calculation Option |
| `Automatic` | Automatic |
| `Manual` | Manual |
| `CalculateSheet` | Calculate Sheet |
| `Calculatebook` | Calculate Workbook |
| `operation` | operation |
| `Description` | Description |
| `PickCategory` | Pick a Category |
| `AllUsers` | Allow all users of this worksheet to |
| `RequiredPassword` | Enter password if required |
| `SelectLockedCells` | Select Locked Cells |
| `SelectUnLockedCells` | Select Unlocked Cells |
| `FormatCells` | Format Cells |
| `FormatColumns` | Format Columns |
| `FormatRows` | Format Rows |
| `InsertColumns` | Insert Columns |
| `InsertRows` | Insert Rows |
| `InsertHyperlinks` | Insert Hyperlinks |
| `UnlockedRanges` | Unlocked Ranges |
| `RangeName` | Range Name |
| `RangeValue` | Range Value |
| `AddRange` | Add Range |
| `UpdateRange` | Update Range |
| `EnterRangeName` | Enter Range Name |
| `Password` | Password |
| `EnterPassword` | Enter Password |
| `ConfirmPassword` | Confirm Password |
| `ProtectError` | The sheet is protected. Some parts may be view-only and can't be changed |
| `SelectedRange` | You can't filter empty cell. Select a cell in the data range and try again. |
| `SingleCell` | Select a single cell in a range and try again. |
| `Review` | Review |
| `Protection` | Protection |
| `ProtectSheet` | Protect Sheet |
| `UnprotectSheet` | Unprotect Sheet |
| `Protectbook` | Protect Workbook |
| `Unprotectbook` | Unprotect workbook |
| `BookError` | Failed to protect workbook:  |
| `IncorrectPassword` | Incorrect password |
| `PasswordOptional` | Enter the password |
| `PasswordMatch` | Passwords do not match |
| `ManageProtection` | Manage Protection |
| `UnlockRange` | Unlock Range |
| `SheetOptions` | Sheet Options |
| `EnterValue` | Enter Value |
| `FilterValue` | Filter Value |
| `Filter` | Filter |
| `ClearFilterFrom` | Clear Filter From |
| `Reapply` | Reapply |
| `FilterByCellValue` | Filter by Value of Selected Cell |
| `NoResult` | No Result |
| `Cancel` | Cancel |
| `Blanks` | Blanks |
| `Search` | Search |
| `SelectAll` | Select All |
| `AddCurrentSelectionFilter` | Add current selection to filter |
| `AND` | AND |
| `OR` | OR |
| `MatchCase` | MatchCase |
| `StartsWith` | Starts With |
| `DoesNotStartWith` | Does Not Start With |
| `EndsWith` | Ends With |
| `DoesNotEndWith` | Does Not End With |
| `Equal` | Equal |
| `NotEqual` | Not Equal |
| `Contains` | Contains |
| `DoesNotContain` | Does Not Contain |
| `LessThan` | Less Than |
| `LessThanOrEqual` | Less Than Or Equal |
| `GreaterThan` | Greater Than |
| `GreaterThanOrEqual` | Greater Than Or Equal |
| `Between` | Between |
| `CustomFilter` | Custom Filter |
| `FilterOperator` | Filter Operator |
| `ClearFilter` | Clear Filter |
| `NumberFilter` | Number Filter |
| `TextFilter` | Text Filter |
| `DateFilter` | Date Filter |
| `TimeFilter` | Time Filter |
| `DateTimeFilter` | Date Time Filter |
| `CustomFilterDatePlaceHolder` | Custom Filter Date Place Holder |
| `Update` | Update |
| `SortAscending` | Ascending |
| `SortDescending` | Descending |
| `Tomorrow` | Tomorrow |
| `Today` | Today |
| `Yesterday` | Yesterday |
| `NextWeek` | Next Week |
| `ThisWeek` | This Week |
| `LastWeek` | Last Week |
| `NextMonth` | Next Month |
| `ThisMonth` | This Month |
| `LastMonth` | Last Month |
| `NextQuarter` | Next Quarter |
| `ThisQuarter` | This Quarter |
| `LastQuarter` | Last Quarter |
| `NextYear` | Next Year |
| `ThisYear` | This Year |
| `LastYear` | Last Year |
| `DeleteWarning` | You can't undo deleted sheet, and you may lose some data. |
| `CopyCut` | This won't work with your current selection. Make sure the copy areas don't overlap. |
| `RenameSheet` | Rename Sheet |
| `RenameSheetTo` | Rename sheet to |
| `EnterName` | Enter the Sheet Name |
| `MultiRange` | This action can't be done on multiple range selection |
| `SingleRange` | Select a single range and try again |
| `WorkBook` | Unsaved changes will be lost. Are you sure you want to create a new workbook? |
| `DeleteSheet` | Are you sure you want to delete this sheet? |
| `Spreadsheet` | Spreadsheet |
| `InsertLeft` | Insert column to the left |
| `InsertRight` | Insert column to the right |
| `File` | File |
| `ExpandRibbonTab` | Expand Toolbar |
| `CollapseRibbonTab` | Collapse Toolbar |
| `ExcelExport` | Excel Export |
| `DownloadPDF` | Download as PDF |
| `DataOperations` | Data Operations |
| `General` | General |
| `Number` | Number |
| `Currency` | Currency |
| `Accounting` | Accounting |
| `ShortDate` | Short Date |
| `LongDate` | Long Date |
| `Time` | Time |
| `Percentage` | Percentage |
| `Fraction` | Fraction |
| `Scientific` | Scientific |
| `Custom` | Custom |
| `NumberFormat` | Number Format |
| `Algerian` | Algerian |
| `Arial` | Arial |
| `Calibri` | Calibri |
| `Cambria` | Cambria |
| `CambriaMath` | Cambria Math |
| `CourierNew` | Courier New |
| `Candara` | Candara |
| `Georgia` | Georgia |
| `Impact` | Impact |
| `SegoePrint` | Segoe Print |
| `SegoeScript` | Segoe Script |
| `SegoeUI` | Segoe UI |
| `Symbol` | Symbol |
| `TimesNewRoman` | Times New Roman |
| `Verdana` | Verdana |
| `Windings` | Windings |
| `Home` | Home |
| `SortFilter` | Sort and Filter |
| `KeepSourceFormat` | Keep Source Format |
| `MergeFormat` | Merge Format |
| `KeepTextOnly` | Keep Text Only |
| `ClearAll` | Clear All |
| `ClearFormats` | Clear Formats |
| `ClearContents` | Clear Contents |
| `ClearHyperlinks` | Clear Hyperlinks |
| `Ascending` | Ascending |
| `Descending` | Descending |
| `CustomSort` | CustomSort |
| `Clear` | Clear |
| `Open` | Open |
| `SaveAs` | Save As |
| `MicrosoftExcel` | Microsoft Excel |
| `MicrosoftExcel972003` | Microsoft Excel 97-2003 |
| `Print` | Print |
| `Text` | Text |
| `Value` | Value |
| `AlignLeft` | Align Left |
| `AlignCenter` | Align Center |
| `AlignRight` | Align Right |
| `AlignTop` | Align Top |
| `AlignMiddle` | Align Middle |
| `AlignBottom` | Align Bottom |
| `New` | New |
| `Bold` | Bold |
| `Italic` | Italic |
| `Underline` | Underline |
| `Strikethrough` | Strikethrough |
| `WrapText` | Wrap Text |
| `ChangeCase` | Change Case |
| `Clipboard` | Clipboard |
| `Font` | Font |
| `Link` | Link |
| `Image` | Image |
| `Insert` | Insert |
| `Delete` | Delete |
| `Save` | Save |
| `FontColor` | Font Color |
| `BackgroundColor` | Background Color |
| `VerticalAlignment` | Vertical Alignment |
| `HorizontalAlignment` | Horizontal Alignment |
| `FileName` | File Name |
| `Duplicate` | Duplicate |
| `Rename` | Rename |
| `Hide` | Hide |
| `MoveRight` | Move Right |
| `MoveLeft` | Move Left |
| `Copy` | Copy |
| `Paste` | Paste |
| `Hyperlink` | Hyperlink |
| `InvalidLinkAddress` | The address of this site is not valid. Check the address and try again. |
| `LinkOpenFailed` | Can't open link |
| `LinkReferenceMissing` | This link has a reference in the workbook that may not exist. |
| `InsertLink` | Insert Link |
| `EditLink` | Edit Link |
| `EditHyperlink` | Edit Hyperlink |
| `OpenHyperlink` | Open Hyperlink |
| `RemoveHyperlink` | Remove Hyperlink |
| `NameBox` | Name Box |
| `InsertFunction` | Insert Function |
| `FormulaBar` | Formula Bar |
| `ExpandFormulaBar` | Expand Formula Bar |
| `CollapseFormulaBar` | Collapse Formula Bar |
| `InsertRowsAbove` | Insert Rows Above |
| `InsertRowsBelow` | Insert Rows Below |
| `InvalidNameSyntax` | The syntax of this name is incorrect |
| `InvalidNameRule1` | Starts with a letter, underscore or backslash |
| `InvalidNameRule2` | Remaining characters only contain alphabets, numerics, periods or underscores |
| `InvalidNameRule3` | Does not use space or forbidden characters |
| `NameExists` | This name already exists. |
| `RangeNotFound` | The selected Range not in this sheet. |
| `NoDataInRange` | The selected range contains no data. |
| `CellReference` | Invalid name, Name cannot be cell reference. |
| `NameRequired` | Name is required |
| `RangeRequired` | Range is required |
| `InvalidRangeFormat` | Invalid range format. Use format like A1:B10 or A1:B10, C1:D5 |
| `Scope` | Scope |
| `ManageNames` | Manage Names |
| `NameManager` | Name Manager |
| `NoRecords` | No Records |
| `Undo` | Undo |
| `Redo` | Redo |
| `FontSize` | Font Size |
| `DataLimitExceed` | File data is too large and it takes more time to process, do you want to continue? |
| `FileLimitExceed` | File size is too large and it takes more time to process, do you want to continue? |
| `PasswordPrompt` | is protected |
| `UnsupportedFile` | Unsupported File |
| `View` | View |
| `Borders` | Borders |
| `RightBorder` | Right Border |
| `BottomBorder` | Bottom Border |
| `TopBorder` | Top Border |
| `LeftBorder` | Left Border |
| `NoBorder` | No Border |
| `AllBorders` | All Borders |
| `OutsideBorders` | Outside Borders |
| `InsideBorders` | Inside Borders |
| `HorizontalBorders` | Horizontal Borders |
| `VerticalBorders` | Vertical Borders |
| `BorderColor` | Border Color |
| `BorderStyle` | Border Style |
| `Thin` | Thin |
| `Medium` | Medium |
| `Thick` | Thick |
| `Dotted` | Dotted |
| `Dashed` | Dashed |
| `Double` | Double |
| `ShowGridlines` | Show Gridlines |
| `HideGridlines` | Hide Gridlines |
| `MergeCell` | Merge Cell |
| `MergeCellDialog` | Merge cells only keeps the upper-left value and discards other values. |
| `MergeCellSize` | To do this, All merged cells need to be the same size. |
| `MergeCenter` | Merge & Centre |
| `MergeAcross` | Merge Across |
| `MergeCells` | Merge Cells |
| `UnMergeCells` | Unmerge Cells |
| `Cut` | Cut |
| `OkButton` | OK |
| `Sort` | Sort |
| `InvalidFileNameMessage` | Use a name that doesn't include these characters: \ / : * ? " \| |
| `EmptyFileName` | File name cannot be empty. |
| `WebPage` | Web Page |
| `ThisDocument` | This Document |
| `DisplayText` | Display Text |
| `Url` | Url |
| `Sheet` | Sheet |
| `ReferenceCell` | Cell Reference |
| `CircularReference` | We found that you typed a formula with a circular reference. |
| `FillSeries` | Fill Series |
| `FillFormattingOnly` | Fill Formatting Only |
| `FillWithoutFormatting` | Fill Without Formatting |
| `CopyCells` | Copy Cells |
| `PasteRange` | You can’t paste this here, because the copy area and paste area aren’t the same size. Please try pasting into a different range. |

## Internationalization

The Blazor Spreadsheet uses the application’s active .NET culture for culture-specific formatting and parsing. The active culture affects numbers, dates and times, currency, percentages, and the decimal and group separators. `CurrentCulture` determines number, date, time, percentage, and currency formatting, while `CurrentUICulture` determines which culture-specific `.resx` file is used for the UI text.

For information about configuring the application culture for Blazor Web App, Blazor WebAssembly, Blazor Server, and .NET MAUI Blazor applications, refer to the [Blazor Common Globalization](https://blazor.syncfusion.com/documentation/common/globalization) and [Blazor Common Localization](https://blazor.syncfusion.com/documentation/common/localization) documentation.

The following culture properties are commonly used in the application startup code:

```csharp
CultureInfo.DefaultThreadCurrentCulture
CultureInfo.DefaultThreadCurrentUICulture
```

## Right-to-left support

RTL can be enabled for an individual Spreadsheet or globally for supported Syncfusion Blazor components.

### Enable RTL for an individual Spreadsheet

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@using Syncfusion.Blazor.Spreadsheet

<SfSpreadsheet EnableRtl="true">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

{% endhighlight %}
{% endtabs %}

`EnableRtl="true"` enables RTL only for the individual Spreadsheet.

### Enable RTL globally

{% tabs %}
{% highlight csharp tabtitle="Program.cs" %}

using Syncfusion.Blazor;

builder.Services.AddSyncfusionBlazor(options =>
{
    options.EnableRtl = true;
});

{% endhighlight %}
{% endtabs %}

The global option enables RTL for all supported Syncfusion Blazor components. For the complete placement of the global RTL configuration in Blazor Web App and Blazor WebAssembly applications, refer to the [Blazor Common RTL](https://blazor.syncfusion.com/documentation/common/right-to-left) documentation.

## See also

- [Blazor Common Localization](https://blazor.syncfusion.com/documentation/common/localization)
- [Blazor Common Globalization](https://blazor.syncfusion.com/documentation/common/globalization)
- [Blazor Common RTL](https://blazor.syncfusion.com/documentation/common/right-to-left)
- [Blazor Spreadsheet Formatting](https://blazor.syncfusion.com/documentation/spreadsheet/formatting)
- [Syncfusion Blazor locale repository](https://github.com/syncfusion/blazor-locale)
