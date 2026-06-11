---
title: Align a picture inside a cell in an Excel worksheet | Syncfusion
description: Learn how to align an image precisely within a worksheet cell using the Syncfusion .NET Excel (XlsIO) library, including positioning, fitting to the cell.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to align a picture inside a cell in an Excel worksheet?
Image can be aligned in the cell as required using the **TopRowOffset** and **LeftColumnOffset** properties of **ShapeImpl**. In the Microsoft Excel UI, the image is dragged to the required position manually. In the same way, there are no specific values for this property. The values can only be assigned manually. 

The following example shows how to align a picture inside a worksheet cell using the Syncfusion .NET Excel (XlsIO) library.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    int row = 2;
    int column = 3;

    //Adding a picture
    FileStream imageStream = new FileStream("../../../Data/Image.png", FileMode.Open, FileAccess.Read);
    IPictureShape shape = worksheet.Pictures.AddPicture(row, column, imageStream);

    //Insert the image into the cell 
    (shape as ShapeImpl).Height = worksheet.GetRowHeightInPixels(row);
    (shape as ShapeImpl).Width = worksheet.GetColumnWidthInPixels(column);

    //Algin the image inside the cell
    (shape as ShapeImpl).TopRowOffset = 50;
    (shape as ShapeImpl).LeftColumnOffset = 50;

    #region Save
    //Saving the workbook
    workbook.SaveAs("../../../Output/Picture.xlsx");
    #endregion

    //Dispose streams
    imageStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    int row = 2;
    int column = 3;

    //Adding a picture
    string image = "../../Data/Image.png";
    IPictureShape shape = worksheet.Pictures.AddPicture(row, column, image);

    // Insert the image into the cell 
    (shape as ShapeImpl).Height = worksheet.GetRowHeightInPixels(row);
    (shape as ShapeImpl).Width = worksheet.GetColumnWidthInPixels(column);

    //Algin the image inside the cell
    (shape as ShapeImpl).TopRowOffset = 50;
    (shape as ShapeImpl).LeftColumnOffset = 50;

    #region Save
    //Saving the workbook
    workbook.SaveAs("../../Output/Picture.xlsx");
    #endregion
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
 Using excelEngine As New ExcelEngine()
     Dim application As IApplication = excelEngine.Excel
     application.DefaultVersion = ExcelVersion.Xlsx

     Dim workbook As IWorkbook = application.Workbooks.Create(1)
     Dim worksheet As IWorksheet = workbook.Worksheets(0)

     Dim row As Integer = 2
     Dim column As Integer = 3

     ' Adding a picture
     Dim image As String = "../../Data/Image.png"
     Dim shape As IPictureShape = worksheet.Pictures.AddPicture(row, column, image)

     ' Insert the image into the cell
     Dim impl As ShapeImpl = CType(shape, ShapeImpl)
     impl.Height = worksheet.GetRowHeightInPixels(row)
     impl.Width = worksheet.GetColumnWidthInPixels(column)

     ' Align the image inside the cell
     impl.TopRowOffset = 50
     impl.LeftColumnOffset = 50

     ' Save
     workbook.SaveAs("../../Output/Picture.xlsx")
 End Using
{% endhighlight %}
{% endtabs %}  
