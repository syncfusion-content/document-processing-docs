---
layout: post
title: Globalization in Blazor Spreadsheet | Syncfusion
description: Learn how to localize the Blazor Spreadsheet, display culture-specific values, and enable right-to-left layout.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Globalization in Blazor Spreadsheet

## Localization

The Blazor Spreadsheet uses `ISyncfusionStringLocalizer` to translate built-in UI text based on the application UI culture. Follow the Blazor Common [Localization](https://blazor.syncfusion.com/documentation/common/localization) guide to add the required resource files, register the localization service, and set the active culture before the Spreadsheet renders.

Use `SfResources.resx` as the default resource file and add the culture-specific `.resx` file to the application `Resources` folder. The `SfResources.resx` file must be set to `Public`, and the custom localizer must return `SfResources.ResourceManager`.

| Locale keywords | Text |
|-----|-----|
| `Spreadsheet_InvalidPassword` | Incorrect Password. Please try again. |
| `Spreadsheet_ABS` | Returns the absolute value of a number |
| `Spreadsheet_ACOS` | Returns the arccosine of a number |
| `Spreadsheet_ACOSH` | Returns the inverse hyperbolic cosine of a number |
| `Spreadsheet_ADDRESS` | Returns a reference as text to a cell |
| `Spreadsheet_ANDFormula` | Returns TRUE if all of its arguments are TRUE |
| `Spreadsheet_AREAS` | Returns the number of areas in a reference |
| `Spreadsheet_ARRAYTOTEXT` | Returns the text representation of an array |
| `Spreadsheet_ASC` | Converts full-width characters to half-width characters in a string |
| `Spreadsheet_ASIN` | Returns the arcsine of a number |
| `Spreadsheet_ASINH` | Returns the inverse hyperbolic sine of a number |
| `Spreadsheet_ATAN` | Returns the arctangent of a number |
| `Spreadsheet_ATAN2` | Returns the arctangent from x- and y-coordinates |
| `Spreadsheet_ATANH` | Returns the inverse hyperbolic tangent of a number |
| `Spreadsheet_AVEDEV` | Returns the average of absolute deviations from mean |
| `Spreadsheet_AVERAGE` | Returns the average of its arguments |
| `Spreadsheet_AVERAGEA` | Returns the average of its arguments |
| `Spreadsheet_AVERAGEIF` | Returns the average of cells meeting a criterion |
| `Spreadsheet_AVERAGEIFS` | Returns the average of cells meeting multiple criteria |
| `Spreadsheet_BESSELI` | Returns the modified Bessel function In(x) |
| `Spreadsheet_BESSELJ` | Returns the Bessel function Jn(x) |
| `Spreadsheet_BESSELK` | Returns the modified Bessel function Kn(x) |
| `Spreadsheet_BESSELY` | Returns the Bessel function Yn(x) |
| `Spreadsheet_BIN2DEC` | Converts a binary number to decimal |
| `Spreadsheet_BIN2HEX` | Converts a binary number to hexadecimal |
| `Spreadsheet_BIN2OCT` | Converts a binary number to octal |
| `Spreadsheet_BINOMDIST` | Returns the individual term binomial distribution probability |
| `Spreadsheet_BYCOL` | Applies a LAMBDA to each column and returns an array of the results |
| `Spreadsheet_BYROW` | Applies a LAMBDA to each row and returns an array of the results |
| `Spreadsheet_CEILING` | Rounds a number to nearest integer or multiple |
| `Spreadsheet_CELL` | Returns information about the formatting, location, or contents |
| `Spreadsheet_CHAR` | Returns the character specified by the code number |
| `Spreadsheet_CHIDIST` | Returns the one-tailed probability of the chi-squared distribution |
| `Spreadsheet_CHIINV` | Returns inverse of chi-squared distribution |
| `Spreadsheet_CHITEST` | Returns the test for independence |
| `Spreadsheet_CHOOSE` | Chooses a value from a list of values |
| `Spreadsheet_CHOOSECOLS` | Returns specified columns from an array |
| `Spreadsheet_CHOOSEROWS` | Returns specified rows from an array |
| `Spreadsheet_CLEAN` | Removes all non-printable characters from text |
| `Spreadsheet_CODE` | Returns a numeric code for the first character in a text string |
| `Spreadsheet_COLUMN` | Returns the column number of a reference |
| `Spreadsheet_COLUMNS` | Returns the number of columns in a reference |
| `Spreadsheet_COMBIN` | Returns the number of combinations for a given number of objects |
| `Spreadsheet_COMPLEX` | Converts real and imaginary coefficients into a complex number |
| `Spreadsheet_CONCAT` | Combines the text from multiple ranges and/or strings |
| `Spreadsheet_CONCATENATE` | Joins several text items into one text item |
| `Spreadsheet_CONFIDENCE` | Returns the confidence interval for a population mean |
| `Spreadsheet_CONVERT` | Converts a number from one measurement system to another |
| `Spreadsheet_CORREL` | Returns the correlation coefficient between two data sets |
| `Spreadsheet_COS` | Returns the cosine of a number |
| `Spreadsheet_COSH` | Returns the hyperbolic cosine of a number |
| `Spreadsheet_COUNT` | Counts how many numbers are in the list of arguments |
| `Spreadsheet_COUNTA` | Counts how many values are in the list of arguments |
| `Spreadsheet_COUNTBLANK` | Counts the number of blank cells within a range |
| `Spreadsheet_COUNTIF` | Counts cells meeting given criteria |
| `Spreadsheet_COVAR` | Returns covariance, the average of the products of paired deviations |
| `Spreadsheet_CRITBINOM` | Returns smallest value for cumulative binomial distribution |
| `Spreadsheet_CUMIPMT` | Returns the cumulative interest paid between two periods |
| `Spreadsheet_CUMPRINC` | Returns the cumulative principal paid on a loan between two periods |
| `Spreadsheet_DATE` | Returns the serial number of a particular date |
| `Spreadsheet_DATEVALUE` | Converts a date in the form of text to a serial number |
| `Spreadsheet_DAY` | Converts a serial number to a day of the month |
| `Spreadsheet_DAYS360` | Calculates the number of days between two dates based on a 360-day year |
| `Spreadsheet_DB` | Returns asset depreciation using fixed-declining balance |
| `Spreadsheet_DDB` | Returns asset depreciation using double-declining balance |
| `Spreadsheet_DEC2BIN` | Converts a decimal number to binary |
| `Spreadsheet_DECHEX` | Converts a decimal number to hexadecimal |
| `Spreadsheet_DEC2OCT` | Converts a decimal number to octal |
| `Spreadsheet_DEGREES` | Converts radians to degrees |
| `Spreadsheet_DELTA` | Tests whether two values are equal |
| `Spreadsheet_DEVSQ` | Returns the sum of squares of deviations |
| `Spreadsheet_DISC` | Returns the discount rate for a security |
| `Spreadsheet_DOLLAR` | Converts a number to text, using the $ (dollar) currency format |
| `Spreadsheet_DOLLARDE` | Converts fractional dollar price to decimal |
| `Spreadsheet_DOLLARFR` | Converts decimal dollar price to fractional |
| `Spreadsheet_DURATION` | Returns the annual duration of a security with periodic interest payments |
| `Spreadsheet_EDATE` | Returns date that is months before/after start date |
| `Spreadsheet_EFFECT` | Returns the effective annual interest rate |
| `Spreadsheet_EOMONTH` | Returns last day of month before/after specified months |
| `Spreadsheet_ERF` | Returns the error function |
| `Spreadsheet_ERFC` | Returns the complementary error function |
| `Spreadsheet_ERRORTYPE` | Returns a number corresponding to an error type |
| `Spreadsheet_EVEN` | Rounds a number up to the nearest even integer |
| `Spreadsheet_EXACT` | Checks to see if two text values are identical |
| `Spreadsheet_EXP` | Returns e raised to the power of a given number |
| `Spreadsheet_EXPONDIST` | Returns the exponential distribution |
| `Spreadsheet_FACT` | Returns the factorial of a number |
| `Spreadsheet_FACTDOUBLE` | Returns the double factorial of a number |
| `Spreadsheet_FDIST` | Returns the F probability distribution |
| `Spreadsheet_FIND` | Finds one text value within another (case-sensitive) |
| `Spreadsheet_FINDB` | Finds one text value within another (case-sensitive) |
| `Spreadsheet_FINV` | Returns the inverse of the F probability distribution |
| `Spreadsheet_FISHER` | Returns the Fisher transformation |
| `Spreadsheet_FISHERINV` | Returns the inverse of the Fisher transformation |
| `Spreadsheet_FIXED` | Formats a number as text with a fixed number of decimals |
| `Spreadsheet_FLOOR` | Rounds a number down, toward zero |
| `Spreadsheet_FORECAST` | Returns a value along a linear trend |
| `Spreadsheet_FV` | Returns the future value of an investment |
| `Spreadsheet_FVSCHEDULE` | Returns future value after compound interest rates |
| `Spreadsheet_GAMMADIST` | Returns the gamma distribution |
| `Spreadsheet_GAMMAINV` | Returns the inverse of the gamma cumulative distribution |
| `Spreadsheet_GAMMALN` | Returns the natural logarithm of the gamma function, Γ(x) |
| `Spreadsheet_GCD` | Returns the greatest common divisor |
| `Spreadsheet_GEOMEAN` | Returns the geometric mean |
| `Spreadsheet_GESTEP` | Tests whether a number is greater than a threshold value |
| `Spreadsheet_GROWTH` | Returns values along an exponential trend |
| `Spreadsheet_HARMEAN` | Returns the harmonic mean |
| `Spreadsheet_HEX2BIN` | Converts a hexadecimal number to binary |
| `Spreadsheet_HEX2DEC` | Converts a hexadecimal number to decimal |
| `Spreadsheet_HEX2OCT` | Converts a hexadecimal number to octal |
| `Spreadsheet_HLOOKUP` | Looks in the top row of an array and returns the value of the indicated cell |
| `Spreadsheet_HOUR` | Converts a serial number to an hour |
| `Spreadsheet_HYPERLINKFormula` | Creates shortcut to open document on network/internet |
| `Spreadsheet_HYPGEOMDIST` | Returns the hypergeometric distribution |
| `Spreadsheet_IF` | Specifies a logical test to perform |
| `Spreadsheet_IFERROR` | Returns a specified value if a formula evaluates to an error |
| `Spreadsheet_IFS` | Returns value corresponding to first TRUE condition |
| `Spreadsheet_IMABS` | Returns the absolute value (modulus) of a complex number |
| `Spreadsheet_IMAGINARY` | Returns the imaginary coefficient of a complex number |
| `Spreadsheet_IMARGUMENT` | Returns the argument theta, an angle expressed in radians |
| `Spreadsheet_IMCONJUGATE` | Returns the complex conjugate of a complex number |
| `Spreadsheet_IMCOS` | Returns the cosine of a complex number |
| `Spreadsheet_IMDIV` | Returns the quotient of two complex numbers |
| `Spreadsheet_IMEXP` | Returns the exponential of a complex number |
| `Spreadsheet_IMLN` | Returns the natural logarithm of a complex number |
| `Spreadsheet_IMLOG10` | Returns the base-10 logarithm of a complex number |
| `Spreadsheet_IMLOG2` | Returns the base-2 logarithm of a complex number |
| `Spreadsheet_IMPOWER` | Returns a complex number raised to an integer power |
| `Spreadsheet_IMPRODUCT` | Returns the product of from 2 to 29 complex numbers |
| `Spreadsheet_IMREAL` | Returns the real coefficient of a complex number |
| `Spreadsheet_IMSIN` | Returns the sine of a complex number |
| `Spreadsheet_IMSQRT` | Returns the square root of a complex number |
| `Spreadsheet_IMSUB` | Returns the difference between two complex numbers |
| `Spreadsheet_IMSUM` | Returns the sum of complex numbers |
| `Spreadsheet_INDEX` | Uses an index to choose a value from a reference or array |
| `Spreadsheet_INDIRECT` | Returns a reference indicated by a text value |
| `Spreadsheet_INFO` | Returns information about the current operating environment |
| `Spreadsheet_INT` | Rounds a number down to the nearest integer |
| `Spreadsheet_INTERCEPT` | Returns the intercept of the linear regression line |
| `Spreadsheet_INTRATE` | Returns the interest rate for a fully invested security |
| `Spreadsheet_IPMT` | Returns the interest payment for an investment for a given period |
| `Spreadsheet_IRR` | Returns the internal rate of return for a series of cash flows |
| `Spreadsheet_ISBLANK` | Returns TRUE if the value is blank |
| `Spreadsheet_ISERR` | Returns TRUE if the value is any error value except #N/A |
| `Spreadsheet_ISERROR` | Returns TRUE if the value is any error value |
| `Spreadsheet_ISEVEN` | Returns TRUE if the number is even |
| `Spreadsheet_ISLOGICAL` | Returns TRUE if the value is a logical value |
| `Spreadsheet_ISNA` | Returns TRUE if the value is the #N/A error value |
| `Spreadsheet_ISNONTEXT` | Returns TRUE if the value is not text |
| `Spreadsheet_ISNUMBER` | Returns TRUE if the value is a number |
| `Spreadsheet_ISODD` | Returns TRUE if the number is odd |
| `Spreadsheet_ISPMT` | Calculates interest paid during investment period |
| `Spreadsheet_ISREF` | Returns TRUE if the value is a reference |
| `Spreadsheet_ISTEXT` | Returns TRUE if the value is text |
| `Spreadsheet_KURT` | Returns the kurtosis of a data set |
| `Spreadsheet_LAMBDA` | Allows to use own formula parameters and logic |
| `Spreadsheet_LARGE` | Returns the k-th largest value in a data set |
| `Spreadsheet_LCM` | Returns the least common multiple |
| `Spreadsheet_LEFT` | Returns the leftmost characters from a text value |
| `Spreadsheet_LEFTB` | Returns the leftmost characters from a text value |
| `Spreadsheet_LEN` | Returns the number of characters in a text string |
| `Spreadsheet_LENB` | Returns the number of characters in a text string |
| `Spreadsheet_LET` | Returns the result of a formula that can use variables. |
| `Spreadsheet_LN` | Returns the natural logarithm of a number |
| `Spreadsheet_LOG` | Returns the logarithm of a number to a specified base |
| `Spreadsheet_LOG10` | Returns the base-10 logarithm of a number |
| `Spreadsheet_LOGEST` | Returns the parameters of an exponential trend |
| `Spreadsheet_LOGINV` | Returns the inverse of the log-normal distribution |
| `Spreadsheet_LOGNORMDIST` | Returns the cumulative log-normal distribution |
| `Spreadsheet_LOOKUP` | Looks up values in a vector or array |
| `Spreadsheet_LOWER` | Converts text to lowercase |
| `Spreadsheet_MATCH` | Looks up values in a reference or array |
| `Spreadsheet_MAX` | Returns the maximum value in a list of arguments |
| `Spreadsheet_MAXA` | Returns the maximum value in a list of arguments, including numbers, text, and logical values |
| `Spreadsheet_MAXIFS` | Returns maximum value among cells meeting criteria |
| `Spreadsheet_MDETERM` | Returns the matrix determinant of an array |
| `Spreadsheet_MEDIAN` | Returns the median of the given numbers |
| `Spreadsheet_MID` | Returns characters from text starting at position |
| `Spreadsheet_MIDB` | Returns a specific number of characters from a text string starting at the position you specify |
| `Spreadsheet_MIN` | Returns the minimum value in a list of arguments |
| `Spreadsheet_MINA` | Returns the smallest value in a list of arguments, including numbers, text, and logical values |
| `Spreadsheet_MINIFS` | Returns minimum value among cells meeting criteria |
| `Spreadsheet_MINUTE` | Converts a serial number to a minute |
| `Spreadsheet_MINVERSE` | Returns the matrix inverse of an array |
| `Spreadsheet_MIRR` | Returns IRR with different financing rates |
| `Spreadsheet_MMULT` | Returns the matrix product of two arrays |
| `Spreadsheet_MOD` | Returns the remainder from division |
| `Spreadsheet_MODE` | Returns the most common value in a data set |
| `Spreadsheet_MONTH` | Converts a serial number to a month |
| `Spreadsheet_MROUND` | Returns a number rounded to the desired multiple |
| `Spreadsheet_MULTINOMIAL` | Returns the multinomial of a set of numbers |
| `Spreadsheet_N` | Returns a value converted to a number |
| `Spreadsheet_NA` | Returns the error value #N/A |
| `Spreadsheet_NEGBINOMDIST` | Returns the negative binomial distribution |
| `Spreadsheet_NETWORKDAYS` | Returns the number of whole workdays between two dates |
| `Spreadsheet_NORMDIST` | Returns the normal cumulative distribution |
| `Spreadsheet_NORMINV` | Returns the inverse of the normal cumulative distribution |
| `Spreadsheet_NORMSDIST` | Returns the standard normal cumulative distribution |
| `Spreadsheet_NORMSINV` | Returns the inverse of the standard normal cumulative distribution |
| `Spreadsheet_NOT` | Reverses the logic of its argument |
| `Spreadsheet_NOW` | Returns the serial number of the current date and time |
| `Spreadsheet_NPER` | Returns the number of periods for an investment |
| `Spreadsheet_NPV` | Returns net present value based on cash flows |
| `Spreadsheet_OCT2BIN` | Converts an octal number to binary |
| `Spreadsheet_OCT2DEC` | Converts an octal number to decimal |
| `Spreadsheet_OCT2HEX` | Converts an octal number to hexadecimal |
| `Spreadsheet_ODD` | Rounds a number up to the nearest odd integer |
| `Spreadsheet_OFFSET` | Returns a reference offset from a given reference |
| `Spreadsheet_ORFormula` | Returns TRUE if any argument is TRUE |
| `Spreadsheet_PEARSON` | Returns the Pearson product moment correlation coefficient |
| `Spreadsheet_PERCENTILE` | Returns the k-th percentile of values in a range |
| `Spreadsheet_PERCENTRANK` | Returns the percentage rank of a value in a data set |
| `Spreadsheet_PERMUT` | Returns the number of permutations for a given number of objects |
| `Spreadsheet_PI` | Returns the value of pi |
| `Spreadsheet_PMT` | Returns the periodic payment for an annuity |
| `Spreadsheet_POISSON` | Returns the Poisson distribution |
| `Spreadsheet_POWER` | Returns the result of a number raised to a power |
| `Spreadsheet_PPMT` | Returns the payment on the principal for an investment for a given period |
| `Spreadsheet_PROB` | Returns probability of values between limits |
| `Spreadsheet_PRODUCT` | Multiplies its arguments |
| `Spreadsheet_PROPER` | Capitalizes the first letter in each word of a text value |
| `Spreadsheet_PV` | Returns the present value of an investment |
| `Spreadsheet_QUARTILE` | Returns the quartile of a data set |
| `Spreadsheet_QUOTIENT` | Returns the integer portion of a division |
| `Spreadsheet_RADIANS` | Converts degrees to radians |
| `Spreadsheet_RAND` | Returns a random number between 0 and 1 |
| `Spreadsheet_RANDBETWEEN` | Returns a random number between the numbers you specify |
| `Spreadsheet_RANK` | Returns the rank of a number in a list of numbers |
| `Spreadsheet_RATE` | Returns the interest rate per period of an annuity |
| `Spreadsheet_RECEIVED` | Returns amount received at security maturity |
| `Spreadsheet_REPLACE` | Replaces characters within text |
| `Spreadsheet_REPLACEB` | Replaces characters within text |
| `Spreadsheet_REPT` | Repeats text a given number of times |
| `Spreadsheet_RIGHT` | Returns the rightmost characters from a text value |
| `Spreadsheet_RIGHTB` | Returns the rightmost characters from a text value |
| `Spreadsheet_ROMAN` | Converts an Arabic numeral to roman, as text |
| `Spreadsheet_ROUND` | Rounds a number to a specified number of digits |
| `Spreadsheet_ROUNDDOWN` | Rounds a number down, toward zero |
| `Spreadsheet_ROUNDUP` | Rounds a number up, away from zero |
| `Spreadsheet_ROW` | Returns the row number of a reference |
| `Spreadsheet_ROWS` | Returns the number of rows in a reference |
| `Spreadsheet_RSQ` | Returns the square of the Pearson product moment correlation coefficient |
| `Spreadsheet_SEARCHFormula` | Finds one text value within another (not case-sensitive) |
| `Spreadsheet_SEARCHB` | Finds one text value within another (not case-sensitive) |
| `Spreadsheet_SECOND` | Converts a serial number to a second |
| `Spreadsheet_SERIESSUM` | Returns the sum of a power series based on the formula |
| `Spreadsheet_SIGN` | Returns the sign of a number |
| `Spreadsheet_SIN` | Returns the sine of the given angle |
| `Spreadsheet_SINH` | Returns the hyperbolic sine of a number |
| `Spreadsheet_SKEW` | Returns the skewness of a distribution |
| `Spreadsheet_SLN` | Returns the straight-line depreciation of an asset for one period |
| `Spreadsheet_SLOPE` | Returns the slope of the linear regression line |
| `Spreadsheet_SORTFormula` | Returns the cell range values in ascending or descending order |
| `Spreadsheet_SMALL` | Returns the k-th smallest value in a data set |
| `Spreadsheet_SQRT` | Returns a positive square root |
| `Spreadsheet_SQRTPI` | Returns the square root of (number * pi) |
| `Spreadsheet_STANDARDIZE` | Returns a normalized value |
| `Spreadsheet_STDEV` | Estimates standard deviation based on a sample |
| `Spreadsheet_STDEVA` | Estimates standard deviation based on a sample, including numbers, text, and logical values |
| `Spreadsheet_STDEVP` | Calculates standard deviation based on the entire population |
| `Spreadsheet_STDEVPA` | Calculates standard deviation based on the entire population, including numbers, text, and logical values |
| `Spreadsheet_STEYX` | Returns the standard error of the predicted y-value for each x in the regression |
| `Spreadsheet_SUBSTITUTE` | Substitutes new text for old text in a text string |
| `Spreadsheet_SUBTOTAL` | Returns a subtotal in a list or database |
| `Spreadsheet_SUM` | Adds its arguments |
| `Spreadsheet_SUMIF` | Adds the cells specified by a given criteria |
| `Spreadsheet_SUMPRODUCT` | Returns the sum of the products of corresponding array components |
| `Spreadsheet_SUMSQ` | Returns the sum of the squares of the arguments |
| `Spreadsheet_SUMX2MY2` | Returns the sum of the difference of squares of corresponding values in two arrays |
| `Spreadsheet_SUMX2PY2` | Returns the sum of the sum of squares of corresponding values in two arrays |
| `Spreadsheet_SUMXMY2` | Returns the sum of squares of differences of corresponding values in two arrays |
| `Spreadsheet_SWITCH` | Returns result matching first true value |
| `Spreadsheet_SYD` | Returns sum-of-years' digits depreciation |
| `Spreadsheet_T` | Converts its arguments to text |
| `Spreadsheet_TAN` | Returns the tangent of a number |
| `Spreadsheet_TANH` | Returns the hyperbolic tangent of a number |
| `Spreadsheet_TEXTFormula` | Formats a number and converts it to text |
| `Spreadsheet_TEXTBEFORE` | Returns text that occurs before a given character |
| `Spreadsheet_TEXTJOIN` | Combines text with delimiter |
| `Spreadsheet_TEXTSPLIT` | Splits the cell text across rows or columns |
| `Spreadsheet_TIMEFormula` | Returns the serial number of a particular time |
| `Spreadsheet_TIMEVALUE` | Converts a time in the form of text to a serial number |
| `Spreadsheet_TOCOL` | Transforms an array into a single column |
| `Spreadsheet_TODAYFormula` | Returns the serial number of today's date |
| `Spreadsheet_TOROW` | Transforms an array into a single row |
| `Spreadsheet_TRANSPOSE` | Returns the transpose of an array |
| `Spreadsheet_TRIM` | Removes spaces from text |
| `Spreadsheet_TRIMMEAN` | Returns the mean of the interior of a data set |
| `Spreadsheet_TRUNC` | Truncates a number to an integer |
| `Spreadsheet_TYPE` | Returns a number indicating the data type of a value |
| `Spreadsheet_UNIQUE` | Returns the list of unique values present inside a list or range. |
| `Spreadsheet_UPPER` | Converts text to uppercase |
| `Spreadsheet_VALUEFormula` | Converts a text argument to a number |
| `Spreadsheet_VALUETOTEXT` | Returns the text from any specified value. |
| `Spreadsheet_VAR` | Estimates variance based on a sample |
| `Spreadsheet_VARA` | Estimates variance based on a sample, including numbers, text, and logical values |
| `Spreadsheet_VARP` | Calculates variance based on the entire population |
| `Spreadsheet_VARPA` | Calculates population variance including all values |
| `Spreadsheet_VDB` | Returns asset depreciation for partial period |
| `Spreadsheet_VLOOKUP` | Looks up value in first column and returns cell in same row |
| `Spreadsheet_WEEKDAY` | Converts a serial number to a day of the week |
| `Spreadsheet_WEEKNUM` | Returns week number within year |
| `Spreadsheet_WEIBULL` | Returns the Weibull distribution |
| `Spreadsheet_WORKDAY` | Returns date after specified workdays |
| `Spreadsheet_XIRR` | Returns IRR for non-periodic cash flows |
| `Spreadsheet_XLOOKUP` | Returns value of first or approximate match |
| `Spreadsheet_XMATCH` | Returns position of value in range |
| `Spreadsheet_YEAR` | Converts a serial number to a year |
| `Spreadsheet_YEARFRAC` | Returns fraction of year between dates |
| `Spreadsheet_ZTEST` | Returns the one-tailed probability-value of a z-test |
| `Spreadsheet_FALSE` | Returns the logical value FALSE |
| `Spreadsheet_TRUE` | Returns the logical value TRUE |
| `Spreadsheet_function` | Function to perform |
| `Spreadsheet_Formulas` | Formulas |
| `Spreadsheet_CalculationOption` | Calculation Option |
| `Spreadsheet_Automatic` | Automatic |
| `Spreadsheet_Manual` | Manual |
| `Spreadsheet_CalculateSheet` | Calculate Sheet |
| `Spreadsheet_Calculatebook` | Calculate Workbook |
| `Spreadsheet_operation` | operation |
| `Spreadsheet_Description` | Description |
| `Spreadsheet_PickCategory` | Pick a Category |
| `Spreadsheet_AllUsers` | Allow all users of this worksheet to |
| `Spreadsheet_RequiredPassword` | Enter password if required |
| `Spreadsheet_SelectLockedCells` | Select Locked Cells |
| `Spreadsheet_SelectUnLockedCells` | Select Unlocked Cells |
| `Spreadsheet_FormatCells` | Format Cells |
| `Spreadsheet_FormatColumns` | Format Columns |
| `Spreadsheet_FormatRows` | Format Rows |
| `Spreadsheet_InsertColumns` | Insert Columns |
| `Spreadsheet_InsertRows` | Insert Rows |
| `Spreadsheet_InsertHyperlinks` | Insert Hyperlinks |
| `Spreadsheet_UnlockedRanges` | Unlocked Ranges |
| `Spreadsheet_RangeName` | Range Name |
| `Spreadsheet_RangeValue` | Range Value |
| `Spreadsheet_AddRange` | Add Range |
| `Spreadsheet_UpdateRange` | Update Range |
| `Spreadsheet_EnterRangeName` | Enter Range Name |
| `Spreadsheet_Password` | Password |
| `Spreadsheet_EnterPassword` | Enter Password |
| `Spreadsheet_ConfirmPassword` | Confirm Password |
| `Spreadsheet_ProtectError` | The sheet is protected. Some parts may be view-only and can't be changed |
| `Spreadsheet_SelectedRange` | You can't filter empty cell. Select a cell in the data range and try again. |
| `Spreadsheet_SingleCell` | Select a single cell in a range and try again. |
| `Spreadsheet_Review` | Review |
| `Spreadsheet_Protection` | Protection |
| `Spreadsheet_ProtectSheet` | Protect Sheet |
| `Spreadsheet_UnprotectSheet` | Unprotect Sheet |
| `Spreadsheet_Protectbook` | Protect Workbook |
| `Spreadsheet_Unprotectbook` | Unprotect workbook |
| `Spreadsheet_BookError` | Failed to protect workbook:  |
| `Spreadsheet_IncorrectPassword` | Incorrect password |
| `Spreadsheet_PasswordOptional` | Enter the password |
| `Spreadsheet_PasswordMatch` | Passwords do not match |
| `Spreadsheet_ManageProtection` | Manage Protection |
| `Spreadsheet_UnlockRange` | Unlock Range |
| `Spreadsheet_SheetOptions` | Sheet Options |
| `Spreadsheet_EnterValue` | Enter Value |
| `Spreadsheet_FilterValue` | Filter Value |
| `Spreadsheet_Filter` | Filter |
| `Spreadsheet_ClearFilterFrom` | Clear Filter From |
| `Spreadsheet_Reapply` | Reapply |
| `Spreadsheet_FilterByCellValue` | Filter by Value of Selected Cell |
| `Spreadsheet_NoResult` | No Result |
| `Spreadsheet_Cancel` | Cancel |
| `Spreadsheet_Blanks` | Blanks |
| `Spreadsheet_Search` | Search |
| `Spreadsheet_SelectAll` | Select All |
| `Spreadsheet_AddCurrentSelectionFilter` | Add current selection to filter |
| `Spreadsheet_AND` | AND |
| `Spreadsheet_OR` | OR |
| `Spreadsheet_MatchCase` | MatchCase |
| `Spreadsheet_StartsWith` | Starts With |
| `Spreadsheet_DoesNotStartWith` | Does Not Start With |
| `Spreadsheet_EndsWith` | Ends With |
| `Spreadsheet_DoesNotEndWith` | Does Not End With |
| `Spreadsheet_Equal` | Equal |
| `Spreadsheet_NotEqual` | Not Equal |
| `Spreadsheet_Contains` | Contains |
| `Spreadsheet_DoesNotContain` | Does Not Contain |
| `Spreadsheet_LessThan` | Less Than |
| `Spreadsheet_LessThanOrEqual` | Less Than Or Equal |
| `Spreadsheet_GreaterThan` | Greater Than |
| `Spreadsheet_GreaterThanOrEqual` | Greater Than Or Equal |
| `Spreadsheet_Between` | Between |
| `Spreadsheet_CustomFilter` | Custom Filter |
| `Spreadsheet_FilterOperator` | Filter Operator |
| `Spreadsheet_ClearFilter` | Clear Filter |
| `Spreadsheet_NumberFilter` | Number Filter |
| `Spreadsheet_TextFilter` | Text Filter |
| `Spreadsheet_DateFilter` | Date Filter |
| `Spreadsheet_TimeFilter` | Time Filter |
| `Spreadsheet_DateTimeFilter` | Date Time Filter |
| `Spreadsheet_CustomFilterDatePlaceHolder` | Custom Filter Date Place Holder |
| `Spreadsheet_Update` | Update |
| `Spreadsheet_SortAscending` | Ascending |
| `Spreadsheet_SortDescending` | Descending |
| `Spreadsheet_Tomorrow` | Tomorrow |
| `Spreadsheet_Today` | Today |
| `Spreadsheet_Yesterday` | Yesterday |
| `Spreadsheet_NextWeek` | Next Week |
| `Spreadsheet_ThisWeek` | This Week |
| `Spreadsheet_LastWeek` | Last Week |
| `Spreadsheet_NextMonth` | Next Month |
| `Spreadsheet_ThisMonth` | This Month |
| `Spreadsheet_LastMonth` | Last Month |
| `Spreadsheet_NextQuarter` | Next Quarter |
| `Spreadsheet_ThisQuarter` | This Quarter |
| `Spreadsheet_LastQuarter` | Last Quarter |
| `Spreadsheet_NextYear` | Next Year |
| `Spreadsheet_ThisYear` | This Year |
| `Spreadsheet_LastYear` | Last Year |
| `Spreadsheet_DeleteWarning` | You can't undo deleted sheet, and you may lose some data. |
| `Spreadsheet_CopyCut` | This won't work with your current selection. Make sure the copy areas don't overlap. |
| `Spreadsheet_RenameSheet` | Rename Sheet |
| `Spreadsheet_RenameSheetTo` | Rename sheet to |
| `Spreadsheet_EnterName` | Enter the Sheet Name |
| `Spreadsheet_MultiRange` | This action can't be done on multiple range selection |
| `Spreadsheet_SingleRange` | Select a single range and try again |
| `Spreadsheet_WorkBook` | Unsaved changes will be lost. Are you sure you want to create a new workbook? |
| `Spreadsheet_DeleteSheet` | Are you sure you want to delete this sheet? |
| `Spreadsheet_Spreadsheet` | Spreadsheet |
| `Spreadsheet_InsertLeft` | Insert column to the left |
| `Spreadsheet_InsertRight` | Insert column to the right |
| `Spreadsheet_File` | File |
| `Spreadsheet_ExpandRibbonTab` | Expand Toolbar |
| `Spreadsheet_CollapseRibbonTab` | Collapse Toolbar |
| `Spreadsheet_ExcelExport` | Excel Export |
| `Spreadsheet_DownloadPDF` | Download as PDF |
| `Spreadsheet_DataOperations` | Data Operations |
| `Spreadsheet_General` | General |
| `Spreadsheet_Number` | Number |
| `Spreadsheet_Currency` | Currency |
| `Spreadsheet_Accounting` | Accounting |
| `Spreadsheet_ShortDate` | Short Date |
| `Spreadsheet_LongDate` | Long Date |
| `Spreadsheet_Time` | Time |
| `Spreadsheet_Percentage` | Percentage |
| `Spreadsheet_Fraction` | Fraction |
| `Spreadsheet_Scientific` | Scientific |
| `Spreadsheet_Custom` | Custom |
| `Spreadsheet_NumberFormat` | Number Format |
| `Spreadsheet_Algerian` | Algerian |
| `Spreadsheet_Arial` | Arial |
| `Spreadsheet_Calibri` | Calibri |
| `Spreadsheet_Cambria` | Cambria |
| `Spreadsheet_CambriaMath` | Cambria Math |
| `Spreadsheet_CourierNew` | Courier New |
| `Spreadsheet_Candara` | Candara |
| `Spreadsheet_Georgia` | Georgia |
| `Spreadsheet_Impact` | Impact |
| `Spreadsheet_SegoePrint` | Segoe Print |
| `Spreadsheet_SegoeScript` | Segoe Script |
| `Spreadsheet_SegoeUI` | Segoe UI |
| `Spreadsheet_Symbol` | Symbol |
| `Spreadsheet_TimesNewRoman` | Times New Roman |
| `Spreadsheet_Verdana` | Verdana |
| `Spreadsheet_Windings` | Windings |
| `Spreadsheet_Home` | Home |
| `Spreadsheet_SortFilter` | Sort and Filter |
| `Spreadsheet_KeepSourceFormat` | Keep Source Format |
| `Spreadsheet_MergeFormat` | Merge Format |
| `Spreadsheet_KeepTextOnly` | Keep Text Only |
| `Spreadsheet_ClearAll` | Clear All |
| `Spreadsheet_ClearFormats` | Clear Formats |
| `Spreadsheet_ClearContents` | Clear Contents |
| `Spreadsheet_ClearHyperlinks` | Clear Hyperlinks |
| `Spreadsheet_Ascending` | Ascending |
| `Spreadsheet_Descending` | Descending |
| `Spreadsheet_CustomSort` | CustomSort |
| `Spreadsheet_Clear` | Clear |
| `Spreadsheet_Open` | Open |
| `Spreadsheet_SaveAs` | Save As |
| `Spreadsheet_MicrosoftExcel` | Microsoft Excel |
| `Spreadsheet_MicrosoftExcel972003` | Microsoft Excel 97-2003 |
| `Spreadsheet_Print` | Print |
| `Spreadsheet_Text` | Text |
| `Spreadsheet_Value` | Value |
| `Spreadsheet_AlignLeft` | Align Left |
| `Spreadsheet_AlignCenter` | Align Center |
| `Spreadsheet_AlignRight` | Align Right |
| `Spreadsheet_AlignTop` | Align Top |
| `Spreadsheet_AlignMiddle` | Align Middle |
| `Spreadsheet_AlignBottom` | Align Bottom |
| `Spreadsheet_New` | New |
| `Spreadsheet_Bold` | Bold |
| `Spreadsheet_Italic` | Italic |
| `Spreadsheet_Underline` | Underline |
| `Spreadsheet_Strikethrough` | Strikethrough |
| `Spreadsheet_WrapText` | Wrap Text |
| `Spreadsheet_ChangeCase` | Change Case |
| `Spreadsheet_Clipboard` | Clipboard |
| `Spreadsheet_Font` | Font |
| `Spreadsheet_Link` | Link |
| `Spreadsheet_Image` | Image |
| `Spreadsheet_Insert` | Insert |
| `Spreadsheet_Delete` | Delete |
| `Spreadsheet_Save` | Save |
| `Spreadsheet_FontColor` | Font Color |
| `Spreadsheet_BackgroundColor` | Background Color |
| `Spreadsheet_VerticalAlignment` | Vertical Alignment |
| `Spreadsheet_HorizontalAlignment` | Horizontal Alignment |
| `Spreadsheet_FileName` | File Name |
| `Spreadsheet_Duplicate` | Duplicate |
| `Spreadsheet_Rename` | Rename |
| `Spreadsheet_Hide` | Hide |
| `Spreadsheet_MoveRight` | Move Right |
| `Spreadsheet_MoveLeft` | Move Left |
| `Spreadsheet_Copy` | Copy |
| `Spreadsheet_Paste` | Paste |
| `Spreadsheet_Hyperlink` | Hyperlink |
| `Spreadsheet_InvalidLinkAddress` | The address of this site is not valid. Check the address and try again. |
| `Spreadsheet_LinkOpenFailed` | Can't open link |
| `Spreadsheet_LinkReferenceMissing` | This link has a reference in the workbook that may not exist. |
| `Spreadsheet_InsertLink` | Insert Link |
| `Spreadsheet_EditLink` | Edit Link |
| `Spreadsheet_EditHyperlink` | Edit Hyperlink |
| `Spreadsheet_OpenHyperlink` | Open Hyperlink |
| `Spreadsheet_RemoveHyperlink` | Remove Hyperlink |
| `Spreadsheet_NameBox` | Name Box |
| `Spreadsheet_InsertFunction` | Insert Function |
| `Spreadsheet_FormulaBar` | Formula Bar |
| `Spreadsheet_ExpandFormulaBar` | Expand Formula Bar |
| `Spreadsheet_CollapseFormulaBar` | Collapse Formula Bar |
| `Spreadsheet_InsertRowsAbove` | Insert Rows Above |
| `Spreadsheet_InsertRowsBelow` | Insert Rows Below |
| `Spreadsheet_InvalidNameSyntax` | The syntax of this name is incorrect |
| `Spreadsheet_InvalidNameRule1` | Starts with a letter, underscore or backslash |
| `Spreadsheet_InvalidNameRule2` | Remaining characters only contain alphabets, numerics, periods or underscores |
| `Spreadsheet_InvalidNameRule3` | Does not use space or forbidden characters |
| `Spreadsheet_NameExists` | This name already exists. |
| `Spreadsheet_RangeNotFound` | The selected Range not in this sheet. |
| `Spreadsheet_NoDataInRange` | The selected range contains no data. |
| `Spreadsheet_CellReference` | Invalid name, Name cannot be cell reference. |
| `Spreadsheet_NameRequired` | Name is required |
| `Spreadsheet_RangeRequired` | Range is required |
| `Spreadsheet_InvalidRangeFormat` | Invalid range format. Use format like A1:B10 or A1:B10, C1:D5 |
| `Spreadsheet_Scope` | Scope |
| `Spreadsheet_ManageNames` | Manage Names |
| `Spreadsheet_NameManager` | Name Manager |
| `Spreadsheet_NoRecords` | No Records |
| `Spreadsheet_Undo` | Undo |
| `Spreadsheet_Redo` | Redo |
| `Spreadsheet_FontSize` | Font Size |
| `Spreadsheet_DataLimitExceed` | File data is too large and it takes more time to process, do you want to continue? |
| `Spreadsheet_FileLimitExceed` | File size is too large and it takes more time to process, do you want to continue? |
| `Spreadsheet_PasswordPrompt` | is protected |
| `Spreadsheet_UnsupportedFile` | Unsupported File |
| `Spreadsheet_View` | View |
| `Spreadsheet_Borders` | Borders |
| `Spreadsheet_RightBorder` | Right Border |
| `Spreadsheet_BottomBorder` | Bottom Border |
| `Spreadsheet_TopBorder` | Top Border |
| `Spreadsheet_LeftBorder` | Left Border |
| `Spreadsheet_NoBorder` | No Border |
| `Spreadsheet_AllBorders` | All Borders |
| `Spreadsheet_OutsideBorders` | Outside Borders |
| `Spreadsheet_InsideBorders` | Inside Borders |
| `Spreadsheet_HorizontalBorders` | Horizontal Borders |
| `Spreadsheet_VerticalBorders` | Vertical Borders |
| `Spreadsheet_BorderColor` | Border Color |
| `Spreadsheet_BorderStyle` | Border Style |
| `Spreadsheet_Thin` | Thin |
| `Spreadsheet_Medium` | Medium |
| `Spreadsheet_Thick` | Thick |
| `Spreadsheet_Dotted` | Dotted |
| `Spreadsheet_Dashed` | Dashed |
| `Spreadsheet_Double` | Double |
| `Spreadsheet_ShowGridlines` | Show Gridlines |
| `Spreadsheet_HideGridlines` | Hide Gridlines |
| `Spreadsheet_MergeCell` | Merge Cell |
| `Spreadsheet_MergeCellDialog` | Merge cells only keeps the upper-left value and discards other values. |
| `Spreadsheet_MergeCellSize` | To do this, All merged cells need to be the same size. |
| `Spreadsheet_MergeCenter` | Merge & Centre |
| `Spreadsheet_MergeAcross` | Merge Across |
| `Spreadsheet_MergeCells` | Merge Cells |
| `Spreadsheet_UnMergeCells` | Unmerge Cells |
| `Spreadsheet_Cut` | Cut |
| `Spreadsheet_OkButton` | OK |
| `Spreadsheet_Sort` | Sort |
| `Spreadsheet_InvalidFileNameMessage` | Use a name that doesn't include these characters: \ / : * ? " \| |
| `Spreadsheet_EmptyFileName` | File name cannot be empty. |
| `Spreadsheet_WebPage` | Web Page |
| `Spreadsheet_ThisDocument` | This Document |
| `Spreadsheet_DisplayText` | Display Text |
| `Spreadsheet_Url` | Url |
| `Spreadsheet_Sheet` | Sheet |
| `Spreadsheet_ReferenceCell` | Cell Reference |
| `Spreadsheet_CircularReference` | We found that you typed a formula with a circular reference. |
| `Spreadsheet_FillSeries` | Fill Series |
| `Spreadsheet_FillFormattingOnly` | Fill Formatting Only |
| `Spreadsheet_FillWithoutFormatting` | Fill Without Formatting |
| `Spreadsheet_CopyCells` | Copy Cells |
| `Spreadsheet_PasteRange` | You can’t paste this here, because the copy area and paste area aren’t the same size. Please try pasting into a different range. |

## Internationalization

The Blazor Spreadsheet uses the current .NET culture to display culture-specific values such as numbers, dates, times, currencies, and percentages. Follow the Blazor Common [Globalization](https://blazor.syncfusion.com/documentation/common/globalization) guide for the culture APIs used in the sample.

The following example uses the `fr-FR` culture and applies number formats to show localized output.

```razor
@using System.Globalization
@using Syncfusion.Blazor.Spreadsheet

<SfSpreadsheet @ref="SpreadsheetInstance" DataSource="SpreadsheetData">
</SfSpreadsheet>

@code {
    private SfSpreadsheet SpreadsheetInstance;

    private object[,] SpreadsheetData = new object[,]
    {
        { "Item", "Date", "Time", "Amount", "Percentage" },
        { "Sample", 45367, 0.6458333333, 1250.5, 0.875 }
    };

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            var culture = new CultureInfo("fr-FR");
            CultureInfo.DefaultThreadCurrentCulture = culture;
            CultureInfo.DefaultThreadCurrentUICulture = culture;

            await SpreadsheetInstance.NumberFormatAsync("dd/MM/yyyy", "B2");
            await SpreadsheetInstance.NumberFormatAsync("hh:mm", "C2");
            await SpreadsheetInstance.NumberFormatAsync("#,##0.00 €", "D2");
            await SpreadsheetInstance.NumberFormatAsync("0,00%", "E2");
        }
    }
}
```

## Right-to-left support

The Blazor Spreadsheet supports right-to-left layout globally and at the component level. Use the Blazor Common [Right-to-left](https://blazor.syncfusion.com/documentation/common/right-to-left) guide for the service-level configuration.

### Global RTL

Enable RTL globally in `Program.cs` while registering Syncfusion Blazor services.

```csharp
using Syncfusion.Blazor;

builder.Services.AddSyncfusionBlazor(options =>
{
    options.EnableRtl = true;
});
```

### Component-level RTL

Set the `EnableRtl` property to `true` on an individual Spreadsheet instance when only that component should render in RTL mode.

```razor
@using Syncfusion.Blazor.Spreadsheet

<SfSpreadsheet EnableRtl="true">
    <SpreadsheetSheets>
        <SpreadsheetSheet></SpreadsheetSheet>
    </SpreadsheetSheets>
</SfSpreadsheet>
```

## See also

- [Blazor Common Localization](https://blazor.syncfusion.com/documentation/common/localization)
- [Blazor Common Globalization](https://blazor.syncfusion.com/documentation/common/globalization)
- [Blazor Common Right-to-left](https://blazor.syncfusion.com/documentation/common/right-to-left)
- [Syncfusion Blazor locale repository](https://github.com/syncfusion/blazor-locale)
