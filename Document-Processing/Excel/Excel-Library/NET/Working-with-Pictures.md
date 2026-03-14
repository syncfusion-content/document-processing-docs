---
title: Working with Pictures | Syncfusion
description: Briefs about inserting pictures in Essential XlsIO. It provides various simple and interactive options to insert Pictures into a worksheet.
platform: document-processing
control: XlsIO
documentation: UG
---
# Working with Pictures 

XlsIO allows to insert Pictures into a worksheet. Refer to the following code snippet. 

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Pictures%20in%20Excel/Add%20Picture/.NET/Add%20Picture/Add%20Picture/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet worksheet = workbook.Worksheets[0];

	//Adding a picture
	FileStream imageStream = new FileStream(Path.GetFullPath(@"Data/Image.png"), FileMode.Open, FileAccess.Read);
	IPictureShape shape = worksheet.Pictures.AddPicture(1, 1, imageStream);

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/AddPicture.xlsx"));
	#endregion

	//Dispose streams
	imageStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Adding a picture
  IPictureShape shape = worksheet.Pictures.AddPicture(1, 1, "Image.png");

  workbook.SaveAs("AddingImage.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Adding a picture
  Dim shape As IPictureShape = worksheet.Pictures.AddPicture(1, 1, "Image.png")

  workbook.SaveAs("AddingImage.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to insert picture in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Pictures%20in%20Excel/Add%20Picture/.NET/Add%20Picture).   

## Positioning and Re-Sizing Pictures

Pictures can be re-sized, positioned, and formatted using various properties of [IPictureShape](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPictureShape.html) interface. Refer to the following code snippet.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Pictures%20in%20Excel/Position%20and%20Resize%20Picture/.NET/Position%20and%20Resize%20Picture/Position%20and%20Resize%20Picture/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet worksheet = workbook.Worksheets[0];

	//Adding a picture
	FileStream imageStream = new FileStream(Path.GetFullPath(@"Data/Image.png"), FileMode.Open, FileAccess.Read);
	IPictureShape shape = worksheet.Pictures.AddPicture(1, 1, imageStream);

	//Positioning a Picture
	shape.Top = 100;
	shape.Left = 100;

	//Re-sizing a Picture
	shape.Height = 100;
	shape.Width = 100;

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/ResizePicture.xlsx"));
	#endregion

	//Dispose streams
	imageStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Adding a Picture
  IPictureShape shape = worksheet.Pictures.AddPicture(1, 1, "Image.png");

  //Positioning a Picture
  shape.Top = 100;
  shape.Left = 100;

  //Re-sizing a Picture
  shape.Height = 100;
  shape.Width = 100;

  workbook.SaveAs("AddingImage.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Adding a Picture
  Dim shape As IPictureShape = worksheet.Pictures.AddPicture(1, 1, "Image.png")

  'Positioning a Picture
  shape.Top = 100
  shape.Left = 100

  'Re-sizing a Picture
  shape.Height = 100
  shape.Width = 100

  workbook.SaveAs("AddingImage.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to position and resize picture in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Pictures%20in%20Excel/Position%20and%20Resize%20Picture/.NET/Position%20and%20Resize%20Picture).   

## Move and Size with cells
To move and size a picture along with cell modifications, we need to set the [IsMoveWithCell](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IShape.html#Syncfusion_XlsIO_IShape_IsMoveWithCell) and [IsSizeWithCell](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IShape.html#Syncfusion_XlsIO_IShape_IsSizeWithCell) properties to true.

The following code example illustrates how to move and size a picture along with cells.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Pictures%20in%20Excel/Move%20and%20Size%20with%20cells/.NET/Move%20and%20Size%20with%20cells/Move%20and%20Size%20with%20cells/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet worksheet = workbook.Worksheets[0];

	//Adding a picture
	FileStream imageStream = new FileStream(Path.GetFullPath(@"Data/Image.png"), FileMode.Open, FileAccess.Read);
	IPictureShape shape = worksheet.Pictures.AddPicture(1, 1, 5, 3, imageStream);
	shape = worksheet.Pictures.AddPicture(1, 5, 5, 7, imageStream);
	
	//Set move picture with cell
	shape.IsMoveWithCell = true;

	//Set size picture with cell
	shape.IsSizeWithCell = true;

	//Hide the column
	worksheet.HideColumn(5);

	//Saving the workbook 
	workbook.SaveAs(Path.GetFullPath(@"Output/Output.xlsx"));

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

  //Adding a picture
  IPictureShape shape = worksheet.Pictures.AddPicture(1, 1, 5, 3, "../../Data/Image.png");
  shape = worksheet.Pictures.AddPicture(1, 5, 5, 7, "../../Data/Image.png");

  //Set move picture with cell
  shape.IsMoveWithCell = true;

  //Set size picture with cell
  shape.IsSizeWithCell = true;

  //Hide the column
  worksheet.HideColumn(5);

  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Adding a picture
  Dim shape As IPictureShape = worksheet.Pictures.AddPicture(1, 1, 5, 3, "../../Data/Image.png")
  shape = worksheet.Pictures.AddPicture(1, 5, 5, 7, "../../Data/Image.png")

  'Set move picture with cell
  shape.IsMoveWithCell = True

  'Set size picture with cell
  shape.IsSizeWithCell = True

  'Hide the column
  worksheet.HideColumn(5)

  'Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to move and size a picture with cells in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Pictures%20in%20Excel/Move%20and%20Size%20with%20cells/.NET/Move%20and%20Size%20with%20cells).  

## Align picture

The following code snippet explains to align a picture within a cell.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  //A new workbook is created.[Equivalent to creating a new workbook in MS Excel]            
  IWorkbook workbook = application.Workbooks.Create(1);

  //The first worksheet object in the worksheets collection is accessed.
  IWorksheet worksheet = workbook.Worksheets[0];
  int scaleWidth = (int)application.ConvertUnits((int)worksheet["B1"].ColumnWidth, MeasureUnits.Millimeter, MeasureUnits.Pixel);
  int scaleHeight = (int)application.ConvertUnits((int)worksheet["B1"].RowHeight, MeasureUnits.Millimeter, MeasureUnits.Pixel);

  //Adding a picture
  FileStream imageStream = new FileStream("Image.png", FileMode.Open, FileAccess.Read);

  //Insert Image to B1
  worksheet.Pictures.AddPicture(1, 2, imageStream, scaleWidth, scaleHeight);

  //Resize B1 RowHeight & ColumnWidth
  worksheet.Range["B1"].RowHeight = 155;
  worksheet.Range["B1"].ColumnWidth = 10; 

  //Saving the workbook 
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;

  //A new workbook is created.[Equivalent to creating a new workbook in MS Excel]            
  IWorkbook workbook = application.Workbooks.Create(1);

  //The first worksheet object in the worksheets collection is accessed.
  IWorksheet worksheet = workbook.Worksheets[0];
  int scaleWidth = (int)application.ConvertUnits((int)worksheet["B1"].ColumnWidth, MeasureUnits.Millimeter, MeasureUnits.Pixel);
  int scaleHeight = (int)application.ConvertUnits((int)worksheet["B1"].RowHeight, MeasureUnits.Millimeter, MeasureUnits.Pixel);

  //Insert Image to B1
  worksheet.Pictures.AddPicture(1, 2, "image.png", scaleWidth, scaleHeight);

  //Resize B1 RowHeight & ColumnWidth
  worksheet.Range["B1"].RowHeight = 155;
  worksheet.Range["B1"].ColumnWidth = 10;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = ExcelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx

  'A new workbook is created.[Equivalent to creating a new workbook in MS Excel]            
  Dim workbook As IWorkbook = application.Workbooks.Create(1)

  'The first worksheet object in the worksheets collection is accessed.
  Dim worksheet As IWorksheet = workbook.Worksheets(0)
  Dim scaleWidth As Integer = CInt(application.ConvertUnits(CInt(worksheet("B1").ColumnWidth), MeasureUnits.Millimeter, MeasureUnits.Pixel))
  Dim scaleHeight As Integer = CInt(application.ConvertUnits(CInt(worksheet("B1").RowHeight), MeasureUnits.Millimeter, MeasureUnits.Pixel))

  'Insert Image to B1
  worksheet.Pictures.AddPicture(1, 2, "image.png", scaleWidth, scaleHeight)

  'Resize B1 RowHeight & ColumnWidth
  worksheet.Range("B1").RowHeight = 155
  worksheet.Range("B1").ColumnWidth = 10

  workbook.SaveAs("output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Image into Merged Region

The following code snippet explains how to add images into merged regions.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Pictures%20in%20Excel/ImageInMergedRegion/.NET/ImageInMergedRegion/ImageInMergedRegion/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	//Get the merged cells
	IRange[] range = new IRange[3];
	range[0] = worksheet.MergedCells[0];
	range[1] = worksheet.MergedCells[1];
	range[2] = worksheet.MergedCells[2];

	//Get the images
	string[] image = new string[3];
	image[0] = Path.GetFullPath(@"Data/Picture1.png");
	image[1] = Path.GetFullPath(@"Data/Picture2.png");
	image[2] = Path.GetFullPath(@"Data/Picture3.png");

	//Insert images
	int i = 0;
	foreach (IRange cell in range)
	{
		FileStream imageStream = new FileStream(image[i], FileMode.Open, FileAccess.Read);
		IPictureShape shape = worksheet.Pictures.AddPicture(cell.Row, cell.Column, imageStream);
		(shape as ShapeImpl).BottomRow = cell.MergeArea.LastRow;
		(shape as ShapeImpl).RightColumn = cell.MergeArea.LastColumn;
		i++;
		imageStream.Dispose();
	}

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/ImageInMergedRegion.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open(InputTemplate.xlsx);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Get the merged cells
  IRange[] range = new IRange[3];
  range[0] = worksheet.MergedCells[0];
  range[1] = worksheet.MergedCells[1];
  range[2] = worksheet.MergedCells[2];

  //Get the images
  string[] image = new string[3];
  image[0] = "Picture1.png";
  image[1] = "Picture2.png";
  image[2] = "Picture3.png";

  //Insert images
  int count = 0;
  foreach (IRange cell in range)
  {
    FileStream imageStream = new FileStream(image[count], FileMode.Open, FileAccess.Read);
    IPictureShape shape = worksheet.Pictures.AddPicture(cell.Row, cell.Column, imageStream);
    (shape as ShapeImpl).BottomRow = cell.MergeArea.LastRow;
    (shape as ShapeImpl).RightColumn = cell.MergeArea.LastColumn;
    count++;
    imageStream.Dispose();
  }

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  Dim range() As IRange = New IRange((3) - 1) {}
  range(0) = worksheet.MergedCells(0)
  range(1) = worksheet.MergedCells(1)
  range(2) = worksheet.MergedCells(2)

  Dim image() As String = New String((3) - 1) {}
  image(0) = "Picture1.png"
  image(1) = "Picture2.png"
  image(2) = "Picture3.png"

  Dim count As Integer = 0
  For Each cell As IRange In range
    Dim imageStream As FileStream = New FileStream(image(count), FileMode.Open, FileAccess.Read)
    Dim shape As IPictureShape = worksheet.Pictures.AddPicture(cell.Row, cell.Column, imageStream)
    CType(shape, ShapeImpl).BottomRow = cell.MergeArea.LastRow
    CType(shape, ShapeImpl).RightColumn = cell.MergeArea.LastColumn
    count = (count + 1)
    imageStream.Dispose
  Next

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to add picture into merged region in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Pictures%20in%20Excel/ImageInMergedRegion/.NET/ImageInMergedRegion).   

## Adding Images from External Link

An image can be added to a worksheet as an external link without downloading the original image. The picture will be downloaded every time the spreadsheet is opened in Microsoft Excel. The image is not physically embedded into the Excel document, but points to a web resource. Refer to the following code snippet.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Pictures%20in%20Excel/External%20Image/.NET/External%20Image/External%20Image/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet worksheet = workbook.Worksheets[0];

	//Add image from the specified url at the specified location in the worksheet
	worksheet.Pictures.AddPictureAsLink(1, 1, 5, 7, "https://cdn.syncfusion.com/content/images/company-logos/Syncfusion_Logo_Image.png");

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/ExternalImage.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Add image from the specified url at the specified location in the worksheet
  worksheet.Pictures.AddPictureAsLink(1, 1, 5, 7, "https://cdn.syncfusion.com/content/images/company-logos/Syncfusion_Logo_Image.png");

  //Save workbook
  workbook.SaveAs("ExternalImage.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Add image from the specified url at the specified location in the worksheet
  worksheet.Pictures.AddPictureAsLink(1, 1, 5, 7, "https://cdn.syncfusion.com/content/images/company-logos/Syncfusion_Logo_Image.png")

  'Save workbook
  workbook.SaveAs("ExternalImage.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to add picture from external link in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Pictures%20in%20Excel/External%20Image/.NET/External%20Image).   

## Adding SVG Images

SVG images can be inserted in Excel documents for displaying images with accuracy when scaling or zooming page. Adding SVG images is now supported in XlsIO with SVG and its fallback raster image data as parameters as in the following code snippet.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Pictures%20in%20Excel/Add%20SVG%20Picture/.NET/Add%20SVG%20Picture/Add%20SVG%20Picture/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet worksheet = workbook.Worksheets[0];

	FileStream svgStream = new FileStream(Path.GetFullPath(@"Data/Image.svg"), FileMode.Open);
	FileStream pngStream = new FileStream(Path.GetFullPath(@"Data/Image.png"), FileMode.Open);

	//Add svg image with given svg and png streams
	worksheet.Pictures.AddPicture(1, 1, svgStream, pngStream);

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/SVGImage.xlsx"));
	#endregion

	//Dispose streams
	svgStream.Dispose();
	pngStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  FileStream svgStream = new FileStream("Sample.svg", FileMode.Open);
  FileStream pngStream = new FileStream("Sample.png", FileMode.Open);

  //Add svg image with given svg and png streams
  worksheet.Pictures.AddPicture(1, 1, svgStream, pngStream);

  //Save workbook
  workbook.SaveAs("Svg.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  Dim svgStream As New FileStream("Sample.svg", FileMode.Open)
  Dim pngStream As New FileStream("Sample.png", FileMode.Open)

  'Add svg image with given svg and png streams
  worksheet.Pictures.AddPicture(1, 1, svgStream, pngStream)

  'Save workbook
  workbook.SaveAs("Svg.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to add SVG images in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Pictures%20in%20Excel/Add%20SVG%20Picture/.NET/Add%20SVG%20Picture).

