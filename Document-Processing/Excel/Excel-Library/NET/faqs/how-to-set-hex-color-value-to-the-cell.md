---
title: Set hex color in an Excel cell using XlsIO | Syncfusion 
description: Learn how to apply a hex color to an Excel cell with the Syncfusion .NET Excel library (XlsIO). Convert a hex string to RGB and assign it to CellStyle.Color. 
platform: document-processing
control: XlsIO
documentation: UG
---

# How to set a hex color value for a cell?

XlsIO does not provide a direct API to assign a hex color string to a cell style. Convert the hex value to an RGB Color and then assign it to CellStyle.Color. The following example demonstrates this approach.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{               
    IApplication application = excelEngine.Excel;                
    IWorkbook workbook = application.Workbooks.Create(1);               
    IWorksheet worksheet = workbook.Worksheets[0];

    // Set hex color
    worksheet["A1"].CellStyle.Color = HexToRgb("#FF0000");

    workbook.SaveAs("HexColor.xlsx");
    workbook.Close();
    excelEngine.Dispose();
}

public static Color HexToRgb(string hexColor)
{
    hexColor = hexColor.TrimStart('#');
    int hexValue = int.Parse(hexColor, System.Globalization.NumberStyles.HexNumber);
    Color rgbColor = Color.FromArgb(
        hexValue >> 16) & 0xFF,   // Red
        hexValue >> 8) & 0xFF,    // Green
        hexValue & 0xFF            // Blue
    );

    return rgbColor;
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    // Set hex color
    worksheet["A1"].CellStyle.Color = HexToRgb("#FF0000");

    workbook.SaveAs("HexColor.xlsx");
    workbook.Close();
    excelEngine.Dispose();
}

public static Color HexToRgb(string hexColor)
{
    hexColor = hexColor.TrimStart('#');
    int hexValue = int.Parse(hexColor, System.Globalization.NumberStyles.HexNumber);
    Color rgbColor = Color.FromArgb(
        (hexValue >> 16) & 0xFF,   // Red
        (hexValue >> 8) & 0xFF,    // Green
        hexValue & 0xFF            // Blue
    );

    return rgbColor;
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    ' Set hex color
    worksheet("A1").CellStyle.Color = HexToRgb("#FF0000")

    workbook.SaveAs("HexColor.xlsx")
    workbook.Close()
End Using

Public Function HexToRgb(hexColor As String) As Color
    hexColor = hexColor.TrimStart("#"c)
    Dim hexValue As Integer = Integer.Parse(hexColor, NumberStyles.HexNumber, CultureInfo.InvariantCulture)
    Dim rgbColor As Color = Color.FromArgb(
        (hexValue >> 16) And &HFF,  ' Red
        (hexValue >> 8) And &HFF,   ' Green
        hexValue And &HFF           ' Blue
    )
    Return rgbColor
End Function
{% endhighlight %}
{% endtabs %}  

## See Also

* [How to get the RGB color value for the applied cell color?](how-to-get-the-rgb-color-value-for-the-applied-cell-color)
* [How to get RGB values of a cell’s background color?](how-to-get-rgb-values-of-a-cells-background-color)
* [XlsIO support for cell background color transparency in Excel](does-xlsio-support-opacity-or-transparency-for-cell-background-colors-in-excel)
