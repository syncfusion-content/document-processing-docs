---
layout: post
title: Built-in Formulas and Functions in React Spreadsheet | Syncfusion
description: Learn here all about built-in formulas and functions in React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Formulas 
platform: document-processing
documentation: ug
---

# Built-in Formulas and Functions in React Spreadsheet

The Spreadsheet component supports a comprehensive set of built-in formulas organized by category. Each formula can be used for calculations, data analysis, text manipulation, date operations, and logical evaluations.

## Math & Trigonometry

| Formula | Description |
|---------|-------------|
| ABS | Returns the value of a number without its sign. |
| CEILING | Rounds a number up to the nearest multiple of a given factor. |
| DECIMAL | Converts a text representation of a number in a given base into a decimal number. |
| DEGREES | Converts radians to degrees. |
| EVEN | Rounds a positive number up and negative number down to the nearest even integer. |
| EXP | Returns e raised to the power of the given number. |
| FACT | Returns the factorial of a number. |
| FLOOR | Rounds a number down to the nearest multiple of a given factor. |
| INT | Rounds a number down to the nearest integer. |
| LN | Returns the natural logarithm of a number. |
| LOG | Returns the logarithm of a number to the base that you specify. |
| MOD | Returns a remainder after a number is divided by divisor. |
| ODD | Rounds a positive number up and negative number down to the nearest odd integer. |
| PI | Returns the value of pi. |
| POWER | Returns the result of a number raised to power. |
| PRODUCT | Multiplies a series of numbers and/or cells. |
| RADIANS | Converts degrees into radians. |
| RAND | Returns a random number between 0 and 1. |
| RANDBETWEEN | Returns a random integer based on specified values. |
| ROUND | Rounds a number to the specified number of digits. |
| ROUNDDOWN | Rounds a number down, toward zero. |
| ROUNDUP | Rounds a number up, away from zero. |
| SQRT | Returns the square root of a positive number. |
| TRUNC | Truncates a supplied number to a specified number of decimal places. |


## Statistical & Aggregate

| Formula | Description |
|---------|-------------|
| AVERAGE | Calculates average for the series of numbers and/or cells excluding text. |
| AVERAGEA | Calculates the average for the cells evaluating TRUE as 1, text and FALSE as 0. |
| AVERAGEIF | Calculates the average of cells that meet a specified condition. |
| AVERAGEIFS | Calculates average for cells based on multiple specified conditions. |
| COUNT | Counts the cells that contain numeric values in a range. |
| COUNTA | Counts the cells that contain values in a range. |
| COUNTBLANK | Returns the number of empty cells in a specified range of cells. |
| COUNTIF | Counts the cells based on a specified condition. |
| COUNTIFS | Counts the cells based on multiple specified conditions. |
| GEOMEAN | Returns the geometric mean of a given array or range of positive data. |
| INTERCEPT | Calculates the point of the Y-intercept line via linear regression. |
| LARGE | Returns the `k-th` largest value in a given array. |
| MAX | Returns the largest number of the given arguments. |
| MEDIAN | Returns the median of the given set of numbers. |
| MIN | Returns the smallest number of the given arguments. |
| RSQ | Returns the square of the Pearson product moment correlation coefficient based on data points. |
| SLOPE | Returns the slope of the line from linear regression of the data points. |
| SMALL | Returns the `k-th` smallest value in a given array. |
| SUM | Adds a series of numbers and/or cells. |
| SUMIF | Adds the cells based on a specified condition. |
| SUMIFS | Adds the cells based on multiple specified conditions. |
| SUMPRODUCT | Returns the sum of the products of corresponding arrays in given arrays. |
| SUBTOTAL | Returns subtotal for a range using the given function number. |


## Date & Time

| Formula | Description |
|---------|-------------|
| DATE | Returns the date based on given year, month, and day. |
| DATEVALUE | Converts a date string into date value. |
| DAY | Returns the day from the given date. |
| DAYS | Returns the number of days between two dates. |
| EDATE | Returns a date with given number of months before or after the specified date. |
| EOMONTH | Returns the last day of the month that is a specified number of months before or after a start date. |
| HOUR | Returns the number of hours in a specified time string. |
| MINUTE | Returns the number of minutes in a specified time string. |
| MONTH | Returns the number of months in a specified date string. |
| NOW | Returns the current date and time. |
| SECOND | Returns the number of seconds in a specified time string. |
| TIME | Converts hours, minutes, seconds to the time formatted text. |
| TODAY | Returns the current date. |
| WEEKDAY | Returns the day of the week for a specified date. |

## Logical

| Formula | Description |
|---------|-------------|
| AND | Returns TRUE if all the arguments are TRUE, otherwise returns FALSE. |
| IF | Returns value based on the given expression. |
| IFERROR | Returns value if no error found; else returns specified value. |
| IFS | Returns value based on multiple given expressions. |
| NOT | Returns the inverse of a given logical expression. |
| OR | Returns TRUE if any of the arguments are TRUE, otherwise returns FALSE. |


## Lookup & Reference

| Formula | Description |
|---------|-------------|
| ADDRESS | Returns a cell reference as text, given specified row and column numbers. |
| CHOOSE | Returns a value from list of values, based on index number. |
| HLOOKUP | Looks for a value in the top row of an array and returns a value in the same column from a specified row. |
| INDEX | Returns a value of the cell in a given range based on row and column number. |
| LOOKUP | Looks for a value in a one-row or one-column range, then returns a value from the same position in another range. |
| MATCH | Returns the relative position of a specified value in a given range. |
| SORT | Sorts the contents of a column, range, or array in ascending or descending order. |
| UNIQUE | Returns unique values from a range or array. |
| VLOOKUP | Looks for a value in the first column of a lookup range and returns a corresponding value from a different column. |

## Text

| Formula | Description |
|---------|-------------|
| CHAR | Returns the character from the specified number. |
| CODE | Returns the numeric code for the first character in a given string. |
| CONCAT | Concatenates a list or a range of text strings. |
| CONCATENATE | Combines two or more strings together. |
| DOLLAR | Converts the number to currency formatted text. |
| EXACT | Checks whether two text strings are exactly the same and returns TRUE or FALSE. |
| FIND | Returns the position of a string within another string (case sensitive). |
| LEN | Returns the number of characters in a given string. |
| PROPER | Converts text to proper case (first letter capitalized). |
| T | Checks whether a value is text or not and returns the text. |
| TEXT | Converts the supplied value into text by using the user-specified format. |

## Information

| Formula | Description |
|---------|-------------|
| ISNUMBER | Returns true when the value parses as a numeric value; otherwise returns false. |
