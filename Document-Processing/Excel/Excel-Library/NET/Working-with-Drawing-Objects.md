---
title: Working with Drawing Objects | Syncfusion
description: This section explains about drawing objects in Essential XlsIO. XlsIO provides Option button support only for XLSX format.
platform: document-processing
control: XlsIO
documentation: UG
---

# Working with Drawing Objects 

## Form Controls 

You can add and manipulate the text Box, option button, check box, and combo box controls into the worksheet. Enable these controls to create forms which are very user friendly.

N> Support for Active X Form controls is not yet available.

This section explains the usage of the following [Form Controls](https://support.microsoft.com/en-us/office/overview-of-forms-form-controls-and-activex-controls-on-a-worksheet-15ba7e28-8d7f-42ab-9470-ffb9ab94e7c2?ui=en-us&rs=en-us&ad=us#bmcontrols_on_the_forms_toolbar).

* Text Box
* Check Box
* Combo Box
* Option Button

### Text Box

The [ITextBoxShape](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ITextBoxShape.html) interface represents a text box in a worksheet. Various properties like Horizontal and Vertical Alignment, Alternative Text, Text Rotation, and so on are also supported.

The following code example illustrates how to add and manipulate a text box control.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Excel%20Shapes/Text%20Box/.NET/Text%20Box/Text%20Box/Program.cs,180" %}
 using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet sheet = workbook.Worksheets[0];

	//Creates a new Text Box
	ITextBoxShape textbox = sheet.TextBoxes.AddTextBox(2, 2, 30, 200);
	textbox.Text = "Text Box 1";
	textbox = sheet.TextBoxes.AddTextBox(6, 2, 30, 200);
	textbox.Text = "Text Box 2";

	//Reads a Text Box
	ITextBoxShape shape1 = sheet.TextBoxes[0];
	shape1.Text = "TextBox";

	//Format the control
	shape1.Fill.ForeColor = Color.Gold;
	shape1.Fill.BackColor = Color.Black;
	shape1.Fill.Pattern = ExcelGradientPattern.Pat_90_Percent;

	//Remove a Text Box
	ITextBoxShape shape2 = sheet.TextBoxes[1];
	shape2.Remove();

	#region Save
	//Saving the workbook
	FileStream outputStream = new FileStream(Path.GetFullPath("Output/TextBox.xlsx"), FileMode.Create, FileAccess.Write);
	workbook.SaveAs(outputStream);
	#endregion

	//Dispose streams
	outputStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];

  //Creates a new Text Box
  ITextBoxShape textbox = sheet.TextBoxes.AddTextBox(2, 2, 30, 200);
  textbox.Text = "Text Box 1";
  textbox = sheet.TextBoxes.AddTextBox(6, 2, 30, 200);
  textbox.Text = "Text Box 2";

  //Reads a Text Box
  ITextBoxShape shape1 = sheet.TextBoxes[0];
  shape1.Text = "TextBox";

  //Format the control
  shape1.Fill.ForeColor = Color.Gold;
  shape1.Fill.BackColor = Color.Black;
  shape1.Fill.Pattern = ExcelGradientPattern.Pat_90_Percent;

  //Remove a Text Box
  ITextBoxShape shape2 = sheet.TextBoxes[1];
  shape2.Remove();

  workbook.SaveAs("Textbox.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Creates a new Text Box
  Dim textbox As ITextBoxShape = sheet.TextBoxes.AddTextBox(2, 2, 30, 200)
  textbox.Text = "Text Box 1"
  textbox = sheet.TextBoxes.AddTextBox(6, 2, 30, 200)
  textbox.Text = "Text Box 2"

  'Reads a Text Box
  Dim shape1 As ITextBoxShape = sheet.TextBoxes(0)
  shape1.Text = "TextBox"

  'Format the control
  shape1.Fill.ForeColor = Color.Gold
  shape1.Fill.BackColor = Color.Black
  shape1.Fill.Pattern = ExcelGradientPattern.Pat_90_Percent

  'Remove a Text Box
  Dim shape2 As ITextBoxShape = sheet.TextBoxes(1)
  shape2.Remove()

  workbook.SaveAs("Textbox.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  

A complete working example to add a text box in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Excel%20Shapes/Text%20Box/.NET/Text%20Box). 

**Text Box in Chart**

Syncfusion<sup>&reg;</sup> XlsIO supports creating and reading text box within Excel chart. The following code example illustrates this.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  FileStream inputStream = new FileStream("Sample.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(inputStream, ExcelOpenType.Automatic);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Read the text 
  for (int chartIndex = 0; chartIndex < worksheet.Charts.Count; chartIndex++)
  {
    for (int textBoxIndex = 0; textBoxIndex < worksheet.Charts[chartIndex].TextBoxes.Count; textBoxIndex++)
    {
      String text = worksheet.Charts[chartIndex].TextBoxes[textBoxIndex].Text;
    }
  }

  //Creates a new text box in the chart 
  ITextBoxShape textbox = worksheet.Charts[0].TextBoxes.AddTextBox(2, 2, 80, 300);
  textbox.Text = "Text Box in the chart";

  //Saving the workbook as stream
  FileStream outputStream = new FileStream(Output.xlsx, FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(outputStream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;

  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Read the text 
  for (int chartIndex = 0; chartIndex < worksheet.Charts.Count; chartIndex++)
  {
    for (int textBoxIndex = 0; textBoxIndex < worksheet.Charts[chartIndex].TextBoxes.Count; textBoxIndex++)
    {
      String text = worksheet.Charts[chartIndex].TextBoxes[textBoxIndex].Text;
    }
  }

  //Creates a new text box in the chart 
  ITextBoxShape textbox = worksheet.Charts[0].TextBoxes.AddTextBox(2, 2, 80, 300);
  textbox.Text = "Text Box in the chart";

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx

  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  Dim chartIndex As Integer
  Dim textBoxIndex As Integer

  For chartIndex = 0 To worksheet.Charts.Count - 1 Step chartIndex + 1
    For textBoxIndex = 0 To worksheet.Charts(chartIndex).TextBoxes.Count - 1 Step textBoxIndex + 1
      Dim text As String = worksheet.Charts(chartIndex).TextBoxes(textBoxIndex).Text
    Next
  Next

  Dim textbox As ITextBox = worksheet.Charts(0).TextBoxes.AddTextBox(2, 2, 80, 300)
  textbox.Text = "Text Box in the chart"

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

### Check Box

[ICheckBoxShape](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ICheckBoxShape.html) object represents a check box in a worksheet. The following code example illustrates how to insert and manipulate a check box control.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Excel%20Shapes/Check%20Box/.NET/Check%20Box/Check%20Box/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet sheet = workbook.Worksheets[0];

	//Create a check box with cell link
	ICheckBoxShape checkBoxRed = sheet.CheckBoxes.AddCheckBox(2, 4, 20, 75);
	checkBoxRed.Text = "Red";
	checkBoxRed.CheckState = ExcelCheckState.Unchecked;
	checkBoxRed.LinkedCell = sheet["B2"];
	ICheckBoxShape checkBoxBlue = sheet.CheckBoxes.AddCheckBox(4, 4, 20, 75);
	checkBoxBlue.Text = "Blue";
	checkBoxBlue.CheckState = ExcelCheckState.Checked;
	checkBoxBlue.LinkedCell = sheet["B4"];

	//Read a check box
	checkBoxRed = sheet.CheckBoxes[0];
	checkBoxRed.CheckState = ExcelCheckState.Checked;

	//Remove a check box
	checkBoxBlue = sheet.CheckBoxes[1];
	checkBoxBlue.Remove();

	#region Save
	//Saving the workbook
	FileStream outputStream = new FileStream(Path.GetFullPath("Output/CheckBox.xlsx"), FileMode.Create, FileAccess.Write);
	workbook.SaveAs(outputStream);
	#endregion

	//Dispose streams
	outputStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];

  //Create a check box with cell link
  ICheckBoxShape checkBoxRed = sheet.CheckBoxes.AddCheckBox(2, 4, 20, 75);
  checkBoxRed.Text = "Red";
  checkBoxRed.CheckState = ExcelCheckState.Unchecked;
  checkBoxRed.LinkedCell = sheet["B2"];
  ICheckBoxShape checkBoxBlue = sheet.CheckBoxes.AddCheckBox(4, 4, 20, 75);
  checkBoxBlue.Text = "Blue";
  checkBoxBlue.CheckState = ExcelCheckState.Checked;
  checkBoxBlue.LinkedCell = sheet["B4"];

  //Read a check box
  checkBoxRed = sheet.CheckBoxes[0];
  checkBoxRed.CheckState = ExcelCheckState.Checked;

  //Remove a check box
  checkBoxBlue = sheet.CheckBoxes[1];
  checkBoxBlue.Remove();

  workbook.SaveAs("Checkbox.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Create a check box with cell link
  Dim checkBoxRed As ICheckBoxShape = sheet.CheckBoxes.AddCheckBox(2, 4, 20, 75)
  checkBoxRed.Text = "Red"
  checkBoxRed.CheckState = ExcelCheckState.Unchecked
  checkBoxRed.LinkedCell = sheet("B2")
  Dim checkBoxBlue As ICheckBoxShape = sheet.CheckBoxes.AddCheckBox(4, 4, 20, 75)
  checkBoxBlue.Text = "Blue"
  checkBoxBlue.CheckState = ExcelCheckState.Checked
  checkBoxBlue.LinkedCell = sheet("B4")

  'Read a check box
  checkBoxRed = sheet.CheckBoxes(0)
  checkBoxRed.CheckState = ExcelCheckState.Checked

  'Remove a check box
  checkBoxBlue = sheet.CheckBoxes(1)
  checkBoxBlue.Remove()

  workbook.SaveAs("Checkbox.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to add a check box in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Excel%20Shapes/Check%20Box/.NET/Check%20Box). 

### Combo Box

[IComboBoxShape](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IComboBoxShape.html) object represents a combo box in a worksheet. The following code example illustrates how to insert and manipulate a combo box control.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Excel%20Shapes/Combo%20Box/.NET/Combo%20Box/Combo%20Box/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet sheet = workbook.Worksheets[0];

	//Filling Values
	sheet["A2"].Text = "RGB colors";
	sheet["A3"].Text = "Red";
	sheet["A4"].Text = "Green";
	sheet["A5"].Text = "Blue";
	sheet["B5"].Text = "Selected Index";

	//Create a Combo Box
	IComboBoxShape comboBox1 = sheet.ComboBoxes.AddComboBox(2, 3, 20, 100);
	//Assign a value to the Combo Box
	comboBox1.ListFillRange = sheet["A3:A5"];
	comboBox1.LinkedCell = sheet["C5"];
	comboBox1.SelectedIndex = 2;

	//Create a Combo Box
	IComboBoxShape comboBox2 = sheet.ComboBoxes.AddComboBox(5, 3, 20, 100);
	//Assign a value to the Combo Box
	comboBox2.ListFillRange = sheet["A3:A5"];
	comboBox2.LinkedCell = sheet["C5"];
	comboBox2.SelectedIndex = 1;

	//Read a Combo Box
	comboBox1 = sheet.ComboBoxes[0];
	comboBox1.SelectedIndex = 1;

	//Remove a Combo Box
	comboBox2 = sheet.ComboBoxes[1];
	comboBox2.Remove();

	#region Save
	//Saving the workbook
	FileStream outputStream = new FileStream(Path.GetFullPath("Output/ComboBox.xlsx"), FileMode.Create, FileAccess.Write);
	workbook.SaveAs(outputStream);
	#endregion

	//Dispose streams
	outputStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];

  //Filling Values
  sheet["A2"].Text = "RGB colors";
  sheet["A3"].Text = "Red";
  sheet["A4"].Text = "Green";
  sheet["A5"].Text = "Blue";
  sheet["B5"].Text = "Selected Index";

  //Create a Combo Box
  IComboBoxShape comboBox1 = sheet.ComboBoxes.AddComboBox(2, 3, 20, 100);
  //Assign a value to the Combo Box
  comboBox1.ListFillRange = sheet["A3:A5"];
  comboBox1.LinkedCell = sheet["C5"];
  comboBox1.SelectedIndex = 2;

  //Create a Combo Box
  IComboBoxShape comboBox2 = sheet.ComboBoxes.AddComboBox(5, 3, 20, 100);
  //Assign a value to the Combo Box
  comboBox2.ListFillRange = sheet["A3:A5"];
  comboBox2.LinkedCell = sheet["C5"];
  comboBox2.SelectedIndex = 1;

  //Read a Combo Box
  comboBox1 = sheet.ComboBoxes[0];
  comboBox1.SelectedIndex = 1;

  //Remove a Combo Box
  comboBox2 = sheet.ComboBoxes[1];
  comboBox2.Remove();

  workbook.SaveAs("Combobox.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Filling Values
  sheet("A2").Text = "RGB colors"
  sheet("A3").Text = "Red"
  sheet("A4").Text = "Green"
  sheet("A5").Text = "Blue"
  sheet("B5").Text = "Selected Index"

  'Create a Combo Box
  Dim comboBox1 As IComboBoxShape = sheet.ComboBoxes.AddComboBox(2, 3, 20, 100)
  'Assign a value to the Combo Box
  comboBox1.ListFillRange = sheet("A3:A5")
  comboBox1.LinkedCell = sheet("C5")
  comboBox1.SelectedIndex = 2

  'Create a Combo Box
  Dim comboBox2 As IComboBoxShape = sheet.ComboBoxes.AddComboBox(5, 3, 20, 100)
  'Assign a value to the Combo Box
  comboBox2.ListFillRange = sheet("A3:A5")
  comboBox2.LinkedCell = sheet("C5")
  comboBox2.SelectedIndex = 1

  'Read a Combo Box
  comboBox1 = sheet.ComboBoxes(0)
  comboBox1.SelectedIndex = 1

  'Remove a Combo Box
  comboBox2 = sheet.ComboBoxes(1)
  comboBox2.Remove()

  workbook.SaveAs("Combobox.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to add a combo box in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Excel%20Shapes/Combo%20Box/.NET/Combo%20Box). 

### Option Button

[IOptionButtonShape](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IOptionButtonShape.html) object represents an option button in a worksheet. The following code example illustrates how to insert and manipulate an option button control.

N> XlsIO provides Option button support only for XLSX format.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Excel%20Shapes/Option%20Button/.NET/Option%20Button/Option%20Button/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet sheet = workbook.Worksheets[0];

	//Create an Option Button
	IOptionButtonShape optionButton1 = sheet.OptionButtons.AddOptionButton(2, 3);
	//Assign a value to the Option Button
	optionButton1.Text = "Fed Ex";

	//Format the control
	optionButton1.Fill.FillType = ExcelFillType.SolidColor;
	optionButton1.Fill.ForeColor = Syncfusion.Drawing.Color.Yellow;
	//Change the check state
	optionButton1.CheckState = ExcelCheckState.Checked;

	//Create an Option Button
	IOptionButtonShape optionButton2 = sheet.OptionButtons.AddOptionButton(5, 3);
	//Assign a value to the Option Button
	optionButton2.Text = "DHL";

	//Read an Option Button
	optionButton1 = sheet.OptionButtons[0];
	optionButton1.CheckState = ExcelCheckState.Unchecked;

	//Remove an Option Button
	optionButton2 = sheet.OptionButtons[1];
	optionButton2.Remove();

	#region Save
	//Saving the workbook
	FileStream outputStream = new FileStream(Path.GetFullPath("Output/OptionButton.xlsx"), FileMode.Create, FileAccess.Write);
	workbook.SaveAs(outputStream);
	#endregion

	//Dispose streams
	outputStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];

  //Create an Option Button
  IOptionButtonShape optionButton1 = sheet.OptionButtons.AddOptionButton(2, 3);
  //Assign a value to the Option Button
  optionButton1.Text = "Fed Ex";

  //Format the control
  optionButton1.Fill.FillType = ExcelFillType.SolidColor;
  optionButton1.Fill.ForeColor = Color.Yellow;
  //Change the check state
  optionButton1.CheckState = ExcelCheckState.Checked;

  //Create an Option Button
  IOptionButtonShape optionButton2 = sheet.OptionButtons.AddOptionButton(5, 3);
  //Assign a value to the Option Button
  optionButton2.Text = "DHL";

  //Read an Option Button
  optionButton1 = sheet.OptionButtons[0];
  optionButton1.CheckState = ExcelCheckState.Unchecked;

  //Remove an Option Button
  optionButton2 = sheet.OptionButtons[1];
  optionButton2.Remove();

  workbook.SaveAs("OptionButton.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Create an Option Button
  Dim optionButton1 As IOptionButtonShape = sheet.OptionButtons.AddOptionButton(2, 3)
  'Assign a value to the Option Button
  optionButton1.Text = "Fed Ex"

  'Format the control
  optionButton1.Fill.FillType = ExcelFillType.SolidColor
  optionButton1.Fill.ForeColor = Color.Yellow
  'Change the check state
  optionButton1.CheckState = ExcelCheckState.Checked

  'Create an Option Button
  Dim optionButton2 As IOptionButtonShape = sheet.OptionButtons.AddOptionButton(5, 3)
  'Assign a value to the Option Button
  optionButton2.Text = "DHL"

  'Read an Option Button
  optionButton1 = sheet.OptionButtons(0)
  optionButton1.CheckState = ExcelCheckState.Unchecked

  'Remove an Option Button
  optionButton2 = sheet.OptionButtons(1)
  optionButton2.Remove()

  workbook.SaveAs("OptionButton.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to add option button in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Excel%20Shapes/Option%20Button/.NET/Option%20Button). 

## Comments

[ICommentShape](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ICommentShape.html) object represents a [comment](https://support.microsoft.com/en-gb/office/insert-comments-and-notes-in-excel-bdcc9f5d-38e2-45b4-9a92-0b2b5c7bf6f8?redirectsourcepath=%252fen-us%252farticle%252fannotate-a-worksheet-by-using-comments-3b7065dd-531a-4ffe-8f18-8d047a6ccae7) in a worksheet. You can insert both **Regular** and **Rich** **Text** comments. 

### Add

The following code example illustrates how to add a comment, a comment with an author, and a rich text comment

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Excel%20Shapes/Comment/.NET/Comment/Comment/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet sheet = workbook.Worksheets[0];

	//Adding comments to a cell
	sheet.Range["A1"].AddComment().Text = "Comments";

    //Adding comments with author to a cell
    worksheet.Range["A3"].AddComment().Text = worksheet.Range["A3"].Comment.Author;

	//Add Rich Text Comments
	IRange range = sheet.Range["A6"];
	range.AddComment().RichText.Text = "RichText";
	IRichTextString richText = range.Comment.RichText;

	//Formatting first 4 characters
	IFont redFont = workbook.CreateFont();
	redFont.Bold = true;
	redFont.Color = ExcelKnownColors.Red;
	richText.SetFont(0, 3, redFont);

	#region Save
	//Saving the workbook
	FileStream outputStream = new FileStream(Path.GetFullPath("Output/Comment.xlsx"), FileMode.Create, FileAccess.Write);
	workbook.SaveAs(outputStream);
	#endregion

	//Dispose streams
	outputStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];

  //Adding comments to a cell
  sheet.Range["A1"].AddComment().Text = "Comments";

  //Adding comments with author to a cell
  worksheet.Range["A3"].AddComment().Text = worksheet.Range["A3"].Comment.Author;

  //Add Rich Text Comments
  IRange range = sheet.Range["A6"];
  range.AddComment().RichText.Text = "RichText";
  IRichTextString richText = range.Comment.RichText;

  //Formatting first 4 characters
  IFont redFont = workbook.CreateFont();
  redFont.Bold = true;
  redFont.Color = ExcelKnownColors.Red;
  richText.SetFont(0, 3, redFont);

  workbook.SaveAs("Comments.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Adding comments to a cell
  sheet.Range("A1").AddComment().Text = "Comments"

  'Adding comments with author to a cell
  worksheet.Range("A3").AddComment().Text = worksheet.Range("A3").Comment.Author;

  'Add Rich Text Comments
  Dim range As IRange = sheet.Range("A6")
  range.AddComment().RichText.Text = "RichText"
  Dim richText As IRichTextString = range.Comment.RichText

  'Formatting first 4 characters
  Dim redFont As IFont = workbook.CreateFont()
  redFont.Bold = True
  redFont.Color = ExcelKnownColors.Red
  richText.SetFont(0, 3, redFont)

  workbook.SaveAs("Comments.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to add comment in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Excel%20Shapes/Comment/.NET/Comment).

### Formatting

A comment box can be resized, repositioned, and aligned according to user preferences, allowing control over its height, width, and text alignment. You can also enhance its appearance by applying various fill options, such as solid colors or gradients.

The following code example illustrates how to set the size, position, alignment, and fill of a comment.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Excel%20Shapes/Formatting%20Comment/.NET/Formatting%20Comment/Formatting%20Comment/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Adding comment in the worksheet with text
  worksheet.Range["A1"].AddComment();
  ICommentShape comment = worksheet.Comments[0];
  comment.Text = "Comment1";

  //Set size for the comment
  comment.Height = 150;
  comment.Width = 100;

  //Set position for the comment
  comment.Left = 200;
  comment.Top = 100;

  //Set alignment for the comment
  comment.HAlignment = ExcelCommentHAlign.Right;
  comment.VAlignment = ExcelCommentVAlign.Bottom;

  //Set fill for the comment
  comment.Fill.TwoColorGradient();
  comment.Fill.GradientStyle = ExcelGradientStyle.Horizontal;
  comment.Fill.GradientColorType = ExcelGradientColor.TwoColor;
  comment.Fill.ForeColorIndex = ExcelKnownColors.Red;
  comment.Fill.BackColorIndex = ExcelKnownColors.White;

  //Saving the workbook as stream
  FileStream outputStream = new FileStream(Path.GetFullPath("Output/Output.xlsx"), FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(outputStream);

  //Dispose stream
  outputStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Adding comment in the worksheet with text
  worksheet.Range["A1"].AddComment();
  ICommentShape comment = worksheet.Comments[0];
  comment.Text = "Comment1";

  //Set size for the comment
  comment.Height = 150;
  comment.Width = 100;

  //Set position for the comment
  comment.Left = 200;
  comment.Top = 100;

  //Set alignment for the comment
  comment.HAlignment = ExcelCommentHAlign.Right;
  comment.VAlignment = ExcelCommentVAlign.Bottom;

  //Set fill for the comment
  comment.Fill.TwoColorGradient();
  comment.Fill.GradientStyle = ExcelGradientStyle.Horizontal;
  comment.Fill.GradientColorType = ExcelGradientColor.TwoColor;
  comment.Fill.ForeColorIndex = ExcelKnownColors.Red;
  comment.Fill.BackColorIndex = ExcelKnownColors.White;

  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Adding comment in the worksheet with text
  worksheet.Range("A1").AddComment()
  Dim comment As ICommentShape = worksheet.Comments(0)
  comment.Text = "Comment1"

  'Set size for the comment
  comment.Height = 150
  comment.Width = 100

  'Set position for the comment
  comment.Left = 200
  comment.Top = 100

  'Set alignment for the comment
  comment.HAlignment = ExcelCommentHAlign.Right
  comment.VAlignment = ExcelCommentVAlign.Bottom

  'Set fill for the comment
  comment.Fill.TwoColorGradient()
  comment.Fill.GradientStyle = ExcelGradientStyle.Horizontal
  comment.Fill.GradientColorType = ExcelGradientColor.TwoColor
  comment.Fill.ForeColorIndex = ExcelKnownColors.Red
  comment.Fill.BackColorIndex = ExcelKnownColors.White

  'Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example for formatting comments in C# is present on [this GitHub page]().

### Visibility

Comments in an Excel document can be shown or hidden using [IsVisible](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IComment.html#Syncfusion_XlsIO_IComment_IsVisible) property. The following code example illustrates this.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Excel%20Shapes/Show%20or%20Hide%20Comment/.NET/Show%20or%20Hide%20Comment/Show%20or%20Hide%20Comment/Program.cs,180" %}
 using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet worksheet = workbook.Worksheets[0];

	//Adding comments in the worksheet
	worksheet.Range["E5"].AddComment();
	worksheet.Range["E15"].AddComment();

	//Adding text in comments
	worksheet.Comments[0].Text = "Comment1";
	worksheet.Comments[1].Text = "Comment2";

	//Show comment
	worksheet.Comments[0].IsVisible = true;
	//Hide comment
	worksheet.Comments[1].IsVisible = false;

	#region Save
	//Saving the workbook
	FileStream outputStream = new FileStream(Path.GetFullPath("Output/ShowOrHideComment.xlsx"), FileMode.Create, FileAccess.Write);
	workbook.SaveAs(outputStream);
	#endregion

	//Dispose streams
	outputStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Adding comments in the worksheet
  worksheet.Range["E5"].AddComment();
  worksheet.Range["E15"].AddComment();

  //Adding text in comments
  worksheet.Comments[0].Text = "Comment1";
  worksheet.Comments[1].Text = "Comment2";

  //Show comment
  worksheet.Comments[0].IsVisible = true;
  //Hide comment
  worksheet.Comments[1].IsVisible = false;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Adding comments in the worksheet
  worksheet.Range("E5").AddComment()
  worksheet.Range("E15").AddComment()

  'Adding text in comments
  worksheet.Comments(0).Text = "Comment1"
  worksheet.Comments(1).Text = "Comment2"

  'Show comment
  worksheet.Comments(0).IsVisible = True
  'Hide comment
  worksheet.Comments(1).IsVisible = False

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to show or hide comment in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Excel%20Shapes/Show%20or%20Hide%20Comment/.NET/Show%20or%20Hide%20Comment).

Following code snippets illustrates how to remove all the comments in existing worksheet.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Excel%20Shapes/Remove%20Comments/.NET/Remove%20Comments/Remove%20Comments/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	FileStream inputStream = new FileStream(Path.GetFullPath(@"Data/InputTemplate.xlsx"), FileMode.Open, FileAccess.Read);
	IWorkbook workbook = application.Workbooks.Open(inputStream);
	IWorksheet worksheet = workbook.Worksheets[0];

	//Remove all the comments in worksheet
	worksheet.Comments.Clear();

	#region Save
	//Saving the workbook
	FileStream outputStream = new FileStream(Path.GetFullPath("Output/RemoveComments.xlsx"), FileMode.Create, FileAccess.Write);
	workbook.SaveAs(outputStream);
	#endregion

	//Dispose streams
	outputStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  IWorkbook workbook = application.Workbooks.Open("Comments.xlsx");
  IWorksheet sheet = workbook.Worksheets[0];

  //Remove all the comments in worksheet
  sheet.Comments.Clear();

  workbook.Version = ExcelVersion.Excel2013;
  workbook.SaveAs("RemoveComments.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  Dim workbook As IWorkbook = application.Workbooks.Open("Comments.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Remove all the comments in worksheet
  sheet.Comments.Clear()

  workbook.Version = ExcelVersion.Excel2013
  workbook.SaveAs("RemoveComments.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to remove comment in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Excel%20Shapes/Remove%20Comments/.NET/Remove%20Comments). 

## Threaded Comments

Threaded comments are a way to add and organize annotations or discussions related to specific cells in a worksheet. [IThreadedComment](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IThreadedComment.html) object represents a threaded comment in a worksheet.

### Create

The following code explains how to create a threaded comment for a specific cell using [AddThreadedComment](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_AddThreadedComment_System_String_System_String_System_DateTime_) method.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Threaded%20Comments/Add%20Comment/.NET/Add%20Comment/Add%20Comment/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;

	FileStream inputStream = new FileStream(Path.GetFullPath(@"Data/CommentsTemplate.xlsx"), FileMode.Open, FileAccess.Read);
	IWorkbook workbook = application.Workbooks.Open(inputStream, ExcelOpenType.Automatic);

	IWorksheet worksheet = workbook.Worksheets[0];

	//Add Threaded Comment
	IThreadedComment threadedComment = worksheet.Range["H16"].AddThreadedComment("What is the reason for the higher total amount of \"desk\"  in the west region?", "User1", DateTime.Now);

	#region Save
	//Saving the workbook
	FileStream outputStream = new FileStream(Path.GetFullPath("Output/AddComment.xlsx"), FileMode.Create, FileAccess.Write);
	workbook.SaveAs(outputStream);
	#endregion

	//Dispose streams
	outputStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("CommentsTemplate.xlsx", ExcelOpenType.Automatic);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Add threaded comment
  worksheet.Range["H16"].AddThreadedComment("What is the reason for the higher total amount of \"desk\"  in the west region?", "User1", DateTime.Now);

  //Saving the workbook
  workbook.SaveAs("Ouptput.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine

  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("CommentsTemplate.xlsx", ExcelOpenType.Automatic)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Add threaded comment
  worksheet.Range("H16").AddThreadedComment("What is the reason for the higher total amount of ""desk""  in the west region?", "User1", DateTime.Now)

  'Saving the workbook  
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to create a threaded comment in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Threaded%20Comments/Add%20Comment/.NET/Add%20Comment).

### Reply

The following code adds a replies to an existing threaded comment using the [AddReply](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IThreadedComment.html#Syncfusion_XlsIO_IThreadedComment_AddReply_System_String_System_String_System_DateTime_) method of [IThreadedComment](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IThreadedComment.html).

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Threaded%20Comments/Reply%20Comment/.NET/Reply%20Comment/Reply%20Comment/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;

	FileStream inputStream = new FileStream(Path.GetFullPath(@"Data/CommentsTemplate.xlsx"), FileMode.Open, FileAccess.Read);
	IWorkbook workbook = application.Workbooks.Open(inputStream, ExcelOpenType.Automatic);

	IWorksheet worksheet = workbook.Worksheets[0];

	//Access the collection of threaded comments in the worksheet
	IThreadedComments threadedComments = worksheet.ThreadedComments;

	//Add Reply to the Threaded Comment
	threadedComments[0].AddReply("The unit cost of desk is higher compared to other items in the west region. As a result, the total amount is elevated.", "User2", DateTime.Now);

	#region Save
	//Saving the workbook
	FileStream outputStream = new FileStream(Path.GetFullPath("Output/ReplyComment.xlsx"), FileMode.Create, FileAccess.Write);
	workbook.SaveAs(outputStream);
	#endregion

	//Dispose streams
	outputStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("CommentsTemplate.xlsx", ExcelOpenType.Automatic);
  IWorksheet worksheet = workbook.Worksheets[0];
  
  //Add replies to the threaded comement
  worksheet.Range["H16"].ThreadedComment.AddReply("The unit cost of desk is higher compared to other items in the west region. As a result, the total amount is elevated.", "User2", DateTime.Now);
  worksheet.Range["H16"].ThreadedComment.AddReply("Additionally, Wilson sold 31 desks in the west region, which is also a contributing factor to the increased total amount.", "User3", DateTime.Now);

  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine

  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("CommentsTemplate.xlsx", ExcelOpenType.Automatic)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Add replies to the threaded comement
  worksheet.Range("H16").ThreadedComment.AddReply("The unit cost of desk is higher compared to other items in the west region. As a result, the total amount is elevated.", "User2", DateTime.Now)
  worksheet.Range("H16").ThreadedComment.AddReply("Additionally, Wilson sold 31 desks in the west region, which is also a contributing factor to the increased total amount.", "User3", DateTime.Now)

  'Saving the workbook  
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to add replies in a existing threaded comment in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Threaded%20Comments/Reply%20Comment/.NET/Reply%20Comment).

The following screenshot represents the output Excel file of threaded comments generated by the XlsIO.

![Threaded Comments](../../Conversions/Excel-to-PDF/NET/Excel-to-PDF-Conversion_images/Excel-to-PDF-Conversion_img10.png)

### Mark as resolved

The threaded comment discussion can be marked as resolved by enabling the [IsResolved](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IThreadedComment.html#Syncfusion_XlsIO_IThreadedComment_IsResolved) property. By default, the value is set to **false**.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Threaded%20Comments/Resolve%20Comment/.NET/Resolve%20Comment/Resolve%20Comment/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;

	FileStream inputStream = new FileStream(Path.GetFullPath(@"Data/CommentsTemplate.xlsx"), FileMode.Open, FileAccess.Read);
	IWorkbook workbook = application.Workbooks.Open(inputStream, ExcelOpenType.Automatic);

	IWorksheet worksheet = workbook.Worksheets[0];

	//Access the collection of threaded comments in the worksheet
	IThreadedComments threadedComments = worksheet.ThreadedComments;

	//Mark as Resolved
	threadedComments[0].IsResolved = true;

	#region Save
	//Saving the workbook
	FileStream outputStream = new FileStream(Path.GetFullPath("Output/ResolveComment.xlsx"), FileMode.Create, FileAccess.Write);
	workbook.SaveAs(outputStream);
	#endregion

	//Dispose streams
	outputStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("CommentsTemplate.xlsx", ExcelOpenType.Automatic);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Get the collection of threaded comments in the worksheet
  IThreadedComments threadedComments = worksheet.ThreadedComments;

  //Resolve the thread
  threadedComments[0].IsResolved = true;

  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine

  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("CommentsTemplate.xlsx", ExcelOpenType.Automatic)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Get the collection of threaded comments in the worksheet
  Dim threadedComments As IThreadedComments = worksheet.ThreadedComments

  'Resolve the thread
  threadedComments[0].IsResolved = True

  'Saving the workbook  
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to mark a treaded comment as resolved in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Threaded%20Comments/Resolve%20Comment/.NET/Resolve%20Comment).

### Delete

The following code shows how to delete a threaded comment from the collection of threaded comments using the [Delete](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IThreadedComment.html#Syncfusion_XlsIO_IThreadedComment_Delete) method.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  FileStream inputStream = new FileStream("CommentsTemplate.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(inputStream, ExcelOpenType.Automatic);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Get the collection of threaded comments in the worksheet
  IThreadedComments threadedComments = worksheet.ThreadedComments;

  //Delete the threaded comment
  threadedComments[0].Delete();

  //Saving the workbook as stream
  FileStream stream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("CommentsTemplate.xlsx", ExcelOpenType.Automatic);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Get the collection of threaded comments in the worksheet
  IThreadedComments threadedComments = worksheet.ThreadedComments;

  //Delete the threaded comment
  threadedComments[0].Delete();

  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine

  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("CommentsTemplate.xlsx", ExcelOpenType.Automatic)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Get the collection of threaded comments in the worksheet
  Dim threadedComments As IThreadedComments = worksheet.ThreadedComments

  'Delete the threaded comment
  threadedComments[0].Delete()

  'Saving the workbook  
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

### Clear

The following code clears all the threaded comments in the worksheet using the [Clear](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IThreadedComments.html#Syncfusion_XlsIO_IThreadedComments_Clear) method of [IThreadedComments](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IThreadedComments.html).

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  FileStream inputStream = new FileStream("CommentsTemplate.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(inputStream, ExcelOpenType.Automatic);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Get the collection of threaded comments in the worksheet
  IThreadedComments threadedComments = worksheet.ThreadedComments;

  //Clear all the threaded comments
  threadedComments.Clear();

  //Saving the workbook as stream
  FileStream stream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("CommentsTemplate.xlsx", ExcelOpenType.Automatic);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Get the collection of threaded comments in the worksheet
  IThreadedComments threadedComments = worksheet.ThreadedComments;

  //Clear all the threaded comments
  threadedComments.Clear();

  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine

  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("CommentsTemplate.xlsx", ExcelOpenType.Automatic)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

 'Get the collection of threaded comments in the worksheet
  Dim threadedComments As IThreadedComments = worksheet.ThreadedComments

  'Clear all the threaded comments
  threadedComments.Clear()

  'Saving the workbook  
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## AutoShapes

The [IShape](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IShape.html) interface represents an [AutoShape](https://support.microsoft.com/en-gb/office/add-shapes-0e492bb4-3f91-43b5-803f-dd0998e0eb89?redirectsourcepath=%252fen-us%252farticle%252fadd-change-or-delete-shapes-4f7931c3-7794-440e-820e-9469ad756f05) in an Excel workbook. 

To learn more about various AutoShape types supported in XlsIO, refer to the [AutoShapeType](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.AutoShapeType.html) enumeration in API section.

The following code example illustrates how to insert and format AutoShapes.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Excel%20Shapes/AutoShapes/.NET/AutoShapes/AutoShapes/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet worksheet = workbook.Worksheets[0];

	//Adding an AutoShape
	IShape shape1 = worksheet.Shapes.AddAutoShapes(AutoShapeType.RoundedRectangle, 2, 7, 60, 192);
	IShape shape2 = worksheet.Shapes.AddAutoShapes(AutoShapeType.CircularArrow, 8, 7, 60, 192);

	//Set the value inside the shape
	shape1.TextFrame.TextRange.Text = "AutoShape";

	//Format the shape
	shape1.Fill.ForeColorIndex = ExcelKnownColors.Light_blue;
	shape1.TextFrame.VerticalAlignment = ExcelVerticalAlignment.MiddleCentered;

	//Read an AutoShape
	shape1 = worksheet.Shapes[0];
	shape1.TextFrame.TextRange.Text = "RoundedRectangle";

	//Remove an AutoShape
	shape2 = worksheet.Shapes[1];
	shape2.Remove();

	#region Save
	//Saving the workbook
	FileStream outputStream = new FileStream(Path.GetFullPath("Output/AutoShapes.xlsx"), FileMode.Create, FileAccess.Write);
	workbook.SaveAs(outputStream);
	#endregion

	//Dispose streams
	outputStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Adding an AutoShape
  IShape shape1 = worksheet.Shapes.AddAutoShapes(AutoShapeType.RoundedRectangle, 2, 7, 60, 192);
  IShape shape2 = worksheet.Shapes.AddAutoShapes(AutoShapeType.CircularArrow, 8, 7, 60, 192);

  //Set the value inside the shape
  shape1.TextFrame.TextRange.Text = "AutoShape";

  //Format the shape
  shape1.Fill.ForeColorIndex = ExcelKnownColors.Light_blue;
  shape1.TextFrame.VerticalAlignment = ExcelVerticalAlignment.MiddleCentered;

  //Read an AutoShape
  shape1 = worksheet.Shapes[0];
  shape1.TextFrame.TextRange.Text = "RoundedRectangle";

  //Remove an AutoShape
  shape2 = worksheet.Shapes[1];
  shape2.Remove();

  workbook.SaveAs("Autoshapes.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Adding an AutoShape
  Dim shape1 As IShape = worksheet.Shapes.AddAutoShapes(AutoShapeType.RoundedRectangle, 2, 7, 60, 192)
  Dim shape2 As IShape = worksheet.Shapes.AddAutoShapes(AutoShapeType.CircularArrow, 8, 7, 60, 192)

  'Set the value inside the shape.
  shape1.TextFrame.TextRange.Text = "AutoShape"

  'Format the shape
  shape1.Fill.ForeColorIndex = ExcelKnownColors.Light_blue
  shape1.TextFrame.VerticalAlignment = ExcelVerticalAlignment.MiddleCentered

  'Read an AutoShape
  shape1 = worksheet.Shapes(0)
  shape1.TextFrame.TextRange.Text = "RoundedRectangle"

  'Remove an AutoShape
  shape2 = worksheet.Shapes(1)
  shape2.Remove()

  workbook.SaveAs("Autoshapes.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to add AutoShapes in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Excel%20Shapes/AutoShapes/.NET/AutoShapes). 

## Group Shapes

Group shape can be used to work with multiple shapes at a single instant. 
For example, you can change positions, size or set colors for all shapes at the same time through a single group shape.

### Create Group Shapes

The shapes in the worksheet can be grouped into a single shape by creating group shape in XlsIO using [IGroupShape](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IGroupShape.html) interface. 

The following code example illustrates how to create a group shape.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Excel%20Shapes/Group%20Shapes/.NET/Group%20Shapes/Group%20Shapes/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	FileStream inputStream = new FileStream(Path.GetFullPath(@"Data/InputTemplate.xlsx"), FileMode.Open, FileAccess.Read);
	IWorkbook workbook = application.Workbooks.Open(inputStream);
	IWorksheet worksheet = workbook.Worksheets[0];

	IShapes shapes = worksheet.Shapes;

	IShape[] groupItems;
	for (int i = 0; i < shapes.Count; i++)
	{
		if (shapes[i].Name == "Development" || shapes[i].Name == "Production" || shapes[i].Name == "Sales")
		{
			groupItems = new IShape[] { shapes[i], shapes[i + 1], shapes[i + 2], shapes[i + 3], shapes[i + 4], shapes[i + 5] };
			shapes.Group(groupItems);
			i = -1;
		}
	}

	groupItems = new IShape[] { shapes[0], shapes[1], shapes[2], shapes[3], shapes[4], shapes[5], shapes[6] };

	// Group the selected shapes
	shapes.Group(groupItems);

	#region Save
	//Saving the workbook
	FileStream outputStream = new FileStream(Path.GetFullPath("Output/GroupShapes.xlsx"), FileMode.Create, FileAccess.Write);
	workbook.SaveAs(outputStream);
	#endregion

	//Dispose streams
	outputStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
IWorkbook workbook = application.Workbooks.Open("GroupShape.xlsx");
IWorksheet worksheet = workbook.Worksheets[0];

IShapes shapes = worksheet.Shapes;

// Select the shapes you want to group	
IShape[] groupItems = new IShape[] { shapes[0], shapes[1] };

// Group the selected shapes
IGroupShape GroupShape = shapes.Group(groupItems);

workbook.SaveAs("GroupShape.xlsx");
workbook.Close();
excelEngine.Dispose();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim excelEngine As ExcelEngine = New ExcelEngine()
Dim application As IApplication = excelEngine.Excel
Dim workbook As IWorkbook = application.Workbooks.Open("GroupShape.xlsx")
Dim worksheet As IWorksheet = workbook.Worksheets(0)
	
Dim shapes As IShapes = worksheet.Shapes

' Select the shapes you want to group	
Dim groupItems As IShape() = New IShape() {shapes(0), shapes(1)}

' Group the selected shapes
Dim GroupShape As IGroupShape = shapes.Group(groupItems)
	
workbook.SaveAs("GroupShape.xlsx")	
workbook.Close()	
excelEngine.Dispose()
{% endhighlight %}
{% endtabs %}  

A complete working example to group shapes in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Excel%20Shapes/Group%20Shapes/.NET/Group%20Shapes). 

### Ungroup shapes

Group shape can be ungrouped, and its inner shapes are added to worksheet as an individual shape. 

The following code example illustrates how to ungroup the shape.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Excel%20Shapes/Ungroup%20Shapes/.NET/Ungroup%20Shapes/Ungroup%20Shapes/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	FileStream inputStream = new FileStream(Path.GetFullPath(@"Data/InputTemplate.xlsx"), FileMode.Open, FileAccess.Read);
	IWorkbook workbook = application.Workbooks.Open(inputStream);
	IWorksheet worksheet = workbook.Worksheets[0];

	IShapes shapes = worksheet.Shapes;

	// Ungroup group shape.
	shapes.Ungroup(shapes[0] as IGroupShape);

	#region Save
	//Saving the workbook
	FileStream outputStream = new FileStream(Path.GetFullPath("Output/UngroupShapes.xlsx"), FileMode.Create, FileAccess.Write);
	workbook.SaveAs(outputStream);
	#endregion

	//Dispose streams
	outputStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
IWorkbook workbook = application.Workbooks.Open("GroupShape.xlsx");
IWorksheet worksheet = workbook.Worksheets[0];

IShapes shapes = worksheet.Shapes;

// Ungroup the selected specified group shape
shapes.Ungroup(shapes[0] as IGroupShape);

workbook.SaveAs("GroupShape.xlsx");
workbook.Close();
excelEngine.Dispose();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim excelEngine As ExcelEngine = New ExcelEngine()
Dim application As IApplication = excelEngine.Excel
Dim workbook As IWorkbook = application.Workbooks.Open("GroupShape.xlsx")
Dim worksheet As IWorksheet = workbook.Worksheets(0)
	
Dim shapes As IShapes = worksheet.Shapes

' Ungroup the selected specified group shape
shapes.Ungroup(TryCast(shapes(0), IGroupShape))
	
workbook.SaveAs("GroupShape.xlsx")	
workbook.Close()	
excelEngine.Dispose()
{% endhighlight %}
{% endtabs %} 

A complete working example to ungroup shapes in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Excel%20Shapes/Ungroup%20Shapes/.NET/Ungroup%20Shapes). 

### Ungroup all shapes

When ungrouping the group shape, its immediate inner shapes only be ungrouped. Ungroup the group shape and its all the inner shapes can be possible in XlsIO. 
In [Ungroup](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IShapes.html#Syncfusion_XlsIO_IShapes_Ungroup_Syncfusion_XlsIO_IGroupShape_System_Boolean_) method, **isAll** boolean value indicates whether the group inner shape will be grouped or not. 

The following code example illustrates how to ungroup the group shape and its inner shapes.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Excel%20Shapes/Ungroup%20All%20Shapes/.NET/Ungroup%20All%20Shapes/Ungroup%20All%20Shapes/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{

	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	FileStream inputStream = new FileStream(Path.GetFullPath(@"Data/InputTemplate.xlsx"), FileMode.Open, FileAccess.Read);
	IWorkbook workbook = application.Workbooks.Open(inputStream);
	IWorksheet worksheet = workbook.Worksheets[0];

	IShapes shapes = worksheet.Shapes;

	// Ungroup group shape and its all the inner shapes.
	shapes.Ungroup(shapes[0] as IGroupShape, true);

	#region Save
	//Saving the workbook
	FileStream outputStream = new FileStream(Path.GetFullPath("Output/UngroupAllShapes.xlsx"), FileMode.Create, FileAccess.Write);
	workbook.SaveAs(outputStream);
	#endregion

	//Dispose streams
	outputStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
IWorkbook workbook = application.Workbooks.Open("GroupShape.xlsx");
IWorksheet worksheet = workbook.Worksheets[0];

IShapes shapes = worksheet.Shapes;

// Ungroup the selected specified group shape and its inner shapes by specifying isAll property
shapes.Ungroup(shapes[0] as IGroupShape, true);

workbook.SaveAs("GroupShape.xlsx");
workbook.Close();
excelEngine.Dispose();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim excelEngine As ExcelEngine = New ExcelEngine()
Dim application As IApplication = excelEngine.Excel
Dim workbook As IWorkbook = application.Workbooks.Open("GroupShape.xlsx")
Dim worksheet As IWorksheet = workbook.Worksheets(0)
	
Dim shapes As IShapes = worksheet.Shapes

' Ungroup the selected specified group shape and its inner shapes by specifying isAll property
shapes.Ungroup(TryCast(shapes(0), IGroupShape), True)
	
workbook.SaveAs("GroupShape.xlsx")	
workbook.Close()	
excelEngine.Dispose()
{% endhighlight %}
{% endtabs %} 

A complete working example to ungroup all shapes in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Excel%20Shapes/Ungroup%20All%20Shapes/.NET/Ungroup%20All%20Shapes). 

## OLE Objects 

[IOleObject](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IOleObject.html) object represents an [OLE Object](https://support.microsoft.com/en-gb/office/assign-an-action-to-a-picture-or-an-ole-object-4051f10f-5d82-4180-90e7-a91d54d86738?redirectsourcepath=%252fen-us%252farticle%252fcreate-change-or-delete-an-ole-object-f767f0f1-4170-4850-9b96-0b6c07ec6ea4) in a worksheet. 

N> XlsIO supports OLE Objects for XLSX format in Windows, ASP.NET, and WPF platforms only.

**OLE** **Objects** **and** **Linking** **Types**

XlsIO supports two types of association of the objects:

* Linked objects
* Embedded objects 

**1****.** **Linked** **Objects** 

Linked objects remains as a separate files. When the file is opened in another machine, then the linked object should be in the same location as created.

The following sample code illustrates how to link an OLE Object to an Excel document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Create image stream
  FileStream imageStream = new FileStream("image.png", FileMode.Open);
  //Get image from stream
  Image image = Image.FromStream(imageStream);

  //Add ole object
  IOleObject oleObject = worksheet.OleObjects.AddLink("../../Data/Document.docx", image);

  //Saving the workbook as stream
  FileStream stream = new FileStream("LinkedObjects.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];

  Image image = Image.FromFile("image.png");
  //Select the object, image for the display icon and the type of the OLEObject to insert
  IOleObject ole2 = sheet.OleObjects.Add("Document.docx", image, OleLinkType.Link);

  workbook.SaveAs("LinkedObjects.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  Dim image As Image = Image.FromFile("image.png")
  'Select the object, image for the display icon and the type of the OLEObject to insert
  Dim ole2 As IOleObject = sheet.OleObjects.Add("Document.docx", image, OleLinkType.Link)

  workbook.SaveAs("LinkedObjects.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  

**2****.** **Embedded** **Objects**  

Embedded objects are stored in the document. When the file is opened in another machine, the embedded object can be viewed without having access to the original data.

The following sample code illustrates how to embed an OLE Object to an Excel document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Create file stream and image stream
  FileStream inputStream = new FileStream("Test.pptx", FileMode.Open);
  FileStream imageStream = new FileStream("image.png", FileMode.Open);

  //Get image from stream
  Image image = Image.FromStream(imageStream);

  //Add ole object
  IOleObject oleObject = worksheet.OleObjects.Add(inputStream, image, OleObjectType.PowerPointPresentation);

  //Saving the workbook as stream
  FileStream stream = new FileStream("EmbeddedObjects.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];

  Image image = Image.FromFile("image.png");
  // Select the object, image for the display icon and the type of the OLEObject to insert
  IOleObject ole1 = sheet.OleObjects.Add("Test.pptx", image, OleLinkType.Embed);

  workbook.SaveAs("EmbeddedObjects.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  Dim image As Image = Image.FromFile("image.png")
  'Select the object, image for the display icon and the type of the OLEObject to insert
  Dim ole1 As IOleObject = sheet.OleObjects.Add("Test.pptx", image, OleLinkType.Embed)

  workbook.SaveAs("EmbeddedObjects.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  

The following code example illustrates how to insert and manipulate OLEObjects with their properties through [IOleObjects](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IOleObjects.html) interface.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Create file stream and image stream
  FileStream inputStream1 = new FileStream("Employee.docx", FileMode.Open);
  FileStream inputStream2 = new FileStream("Customer.docx", FileMode.Open);
  FileStream imageStream = new FileStream("Images.png", FileMode.Open);

  //Get image from stream
  Image image = Image.FromStream(imageStream);

  //Add ole object
  IOleObject oleObject1 = worksheet.OleObjects.Add(inputStream1, image, OleObjectType.WordDocument);
  IOleObject oleObject2 = worksheet.OleObjects.Add(inputStream2, image, OleObjectType.WordDocument);

  //Displays image as icon
  oleObject1.DisplayAsIcon = true;

  //Set the location of the OleObject
  oleObject1.Location = worksheet["K8"];

  //Reads icon as a image
  Image image1 = oleObject1.Picture;

  //Reads OleObject as a IPictureShape
  IPictureShape shape = oleObject1.Shape;

  //Set the size of the OleObject
  oleObject1.Size = new Size(30, 30);

  //Remove OleObjects
  oleObject2 = worksheet.OleObjects[1];
  oleObject2.Shape.Remove();

  //Saving the workbook as stream
  FileStream stream = new FileStream("OleObjects.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];

  //Icon image
  Image image = Image.FromFile("Images.png");

  //Select the object, image for the display icon and the type of the OLEObject to insert
  IOleObject oleObject1 = sheet.OleObjects.Add("Employee.docx", image, OleLinkType.Embed);

  //Select the object, image for the display icon and the type of the OLEObject to insert
  IOleObject oleObject2 = sheet.OleObjects.Add("Customer.docx", image, OleLinkType.Embed);

  //Displays image as icon
  oleObject1.DisplayAsIcon = true;

  //Set the location of the OleObject
  oleObject1.Location = sheet["K8"];

  //Reads icon as a image
  Image image1 = oleObject1.Picture;

  //Reads OleObject as a IPictureShape
  IPictureShape shape = oleObject1.Shape;

  //Set the size of the OleObject
  oleObject1.Size = new Size(30, 30);

  //Remove OleObjects
  oleObject2 = sheet.OleObjects[1];
  oleObject2.Shape.Remove();

  workbook.SaveAs("OleObjects.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Icon image
  Dim image As Image = Image.FromFile("Images.png")

  'Select the object, image for the display icon and the type of the OLEObject to insert
  Dim oleObject1 As IOleObject = sheet.OleObjects.Add("Employee.docx", image, OleLinkType.Embed)

  'Select the object, image for the display icon and the type of the OLEObject to insert
  Dim oleObject2 As IOleObject = sheet.OleObjects.Add("Customer.docx", image, OleLinkType.Embed)

  'Displays image as icon
  oleObject1.DisplayAsIcon = True

  'Set the location of the OleObject
  oleObject1.Location = sheet("K8")

  'Reads icon as a image
  Dim image1 As Image = oleObject1.Picture

  'Reads OleObject as a IPictureShape
  Dim shape As IPictureShape = oleObject1.Shape

  'Set the size of the OleObject
  oleObject1.Size = New Size(30, 30)

  'Remove OleObjects
  oleObject2 = sheet.OleObjects(1)
  oleObject2.Shape.Remove()

  workbook.SaveAs("OleObjects.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  

## Hide or Unhide Shapes

You can programmatically hide or un-hide shapes in an Excel worksheet using the [IShapes](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IShapes.html) interface. The following code snippets demonstrate how to toggle shape visibility in Excel using C# (cross-platform and Windows-specific) and VB.NET.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Excel%20Shapes/Hide%20or%20Unhide%20Shape/.NET/Hide%20or%20Unhide%20Shape/Hide%20or%20Unhide%20Shape/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine()) 
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx; 
    FileStream inputStream = new FileStream("Data/Input.xlsx", FileMode.Open, FileAccess.Read); 
    IWorkbook workbook = application.Workbooks.Open(inputStream); 
    IWorksheet worksheet = workbook.Worksheets[0];

    IShapes shapes = worksheet.Shapes;
    AutoShapeImpl shape1 = shapes[0] as AutoShapeImpl;

    //Set shape1 to be hidden
    shape1.IsHidden = true;

    AutoShapeImpl shape2 = shapes[1] as AutoShapeImpl;

    //Set shape2 to be visible
    shape2.IsHidden = false;

    //Saving the workbook as stream
    FileStream outputStream = new FileStream("Output/Output.xlsx", FileMode.Create, FileAccess.Write);
    workbook.SaveAs(outputStream);
    outputStream.Dispose();
    inputStream.Dispose();
} 
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine()) 
{ 
    IApplication application = excelEngine.Excel; 
    IWorkbook workbook = application.Workbooks.Open("Input.xlsx"); 
    IWorksheet worksheet = workbook.Worksheets[0];

    IShapes shapes = worksheet.Shapes;
    AutoShapeImpl shape1 = shapes[0] as AutoShapeImpl;

    //Set shape1 to be hidden
    shape1.IsHidden = true;

    AutoShapeImpl shape2 = shapes[1] as AutoShapeImpl;

    //Set shape2 to be visible
    shape2.IsHidden = false;

    workbook.SaveAs("Output.xlsx");
} 
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine() 
    Dim application As IApplication = excelEngine.Excel 
    Dim workbook As IWorkbook = application.Workbooks.Open("Input.xlsx") 
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    Dim shapes As IShapes = worksheet.Shapes
    Dim shape1 As AutoShapeImpl = TryCast(shapes(0), AutoShapeImpl)

    'Set shape1 to be hidden
    shape1.IsHidden = True

    Dim shape2 As AutoShapeImpl = TryCast(shapes(1), AutoShapeImpl)

    'Set shape2 to be visible
    shape2.IsHidden = False

    workbook.SaveAs("Output.xlsx")
End Using 
{% endhighlight %} 
{% endtabs %}

A complete working example to hide or un-hide shapes in an Excel worksheet in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Excel%20Shapes/Hide%20or%20Unhide%20Shape/.NET/Hide%20or%20Unhide%20Shape). 


