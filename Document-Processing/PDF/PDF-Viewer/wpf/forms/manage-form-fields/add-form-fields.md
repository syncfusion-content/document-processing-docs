---
layout: post
title: Add form fields in the WPF PDF Viewer | Syncfusion
description: Learn how to add each PDF form field programmatically in the Syncfusion WPF PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

## Add Form Fields Programmatically (API)

The PDF Viewer allows users to programmatically add form fields without user interaction at runtime.

### Textbox

**Add Programmatically (API)**

[PdfTextBoxField](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfTextBoxField.html) class is used to create a text box field in PDF forms. 

The below code snippet illustrates how to add a textbox field to a LoadedDocument
{% tabs %}
{% highlight C# %}

private void AddTextbox_Click(object sender, RoutedEventArgs e)
{
    if (pdfViewer.LoadedDocument.Form != null)
    {
        PdfLoadedPage page = pdfViewer.LoadedDocument.Pages[0] as PdfLoadedPage;
        //Create a textbox field and add the properties.
        PdfTextBoxField textBoxField = new PdfTextBoxField(page, "FirstName");
        textBoxField.Bounds = new RectangleF(0, 0, 100, 20);
        //Add the form field to the document.
        pdfViewer.LoadedDocument.Form.Fields.Add(textBoxField);
    }
}

{% endhighlight %}
{% highlight VB %}

Private Sub AddTextbox_Click(sender As Object, e As RoutedEventArgs)
    If pdfViewer.LoadedDocument.Form IsNot Nothing Then
        Dim page As PdfLoadedPage = TryCast(pdfViewer.LoadedDocument.Pages(0), PdfLoadedPage)
        `Create a textbox field and add the properties.
        Dim textBoxField As PdfTextBoxField = New PdfTextBoxField(page, "FirstName")
        textBoxField.Bounds = New RectangleF(0, 0, 100, 20)
        `Add the form field to the document.
        pdfViewer.LoadedDocument.Form.Fields.Add(textBoxField)
    End If
End Sub

{% endhighlight %}
{% endtabs %}


### Password

**Add Programmatically (API)**

{% tabs %}
{% highlight C# %}

private void AddPasswordbox_Click(object sender, RoutedEventArgs e)
{
    if (pdfViewer.LoadedDocument.Form != null)
    {
	    PdfLoadedPage page = pdfViewer.LoadedDocument.Pages[0] as PdfLoadedPage;
        PdfTextBoxField passwordField = new PdfTextBoxField(page, "UserPassword");
		passwordField.Bounds = new RectangleF(0, 30, 150, 22);
		passwordField.Password = true;
		pdfViewer.LoadedDocument.Form.Fields.Add(passwordField);
    }
}

{% endhighlight %}
{% highlight VB %}

Private Sub AddPasswordbox_Click(sender As Object, e As RoutedEventArgs)
    If pdfViewer.LoadedDocument.Form IsNot Nothing Then
        Dim page As PdfLoadedPage = TryCast(pdfViewer.LoadedDocument.Pages(0), PdfLoadedPage)
        Dim passwordField As New PdfTextBoxField(page, "UserPassword")
		passwordField.Bounds = New RectangleF(0, 30, 150, 22)
		passwordField.Password = True
		' Add the field to the PDF form
		pdfViewer.LoadedDocument.Form.Fields.Add(passwordField)
    End If
End Sub

{% endhighlight %}
{% endtabs %}

### CheckBox

**Add Programmatically (API)**
You can create the check box field in PDF forms using [PdfCheckBoxField](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfCheckBoxField.html) class. 

Please refer the below code snippet for adding the check box field in LoadedDocument.

{% tabs %}
{% highlight C# %}

private void AddCheckbox_Click(object sender, RoutedEventArgs e)
{
    if (pdfViewer.LoadedDocument.Form != null)
    {
	    PdfLoadedPage page = pdfViewer.LoadedDocument.Pages[0] as PdfLoadedPage;
		//Create Check Box field.
        PdfCheckBoxField checkBoxField = new PdfCheckBoxField(page, "CheckBox");
        //Set check box properties.
        checkBoxField.ToolTip = "Check Box";
        checkBoxField.Bounds = new RectangleF(0, 20, 10, 10);
        //Add the form field to the document.
        pdfViewer.LoadedDocument.Form.Fields.Add(checkBoxField);
    }
}

{% endhighlight %}
{% highlight VB %}

Private Sub AddCheckbox_Click(sender As Object, e As RoutedEventArgs)
    If pdfViewer.LoadedDocument.Form IsNot Nothing Then
        Dim page As PdfLoadedPage = TryCast(pdfViewer.LoadedDocument.Pages(0), PdfLoadedPage)
        'Create Check Box field.
		Dim checkBoxField As New PdfCheckBoxField(page, "CheckBox")
		'Set check box properties.
		checkBoxField.ToolTip = "Check Box"
		checkBoxField.Bounds = New RectangleF(0, 20, 10, 10)
		'Add the form field to the document.
		pdfViewer.LoadedDocument.Form.Fields.Add(checkBoxField)
    End If
End Sub

{% endhighlight %}
{% endtabs %}

### RadioButton

**Add Programmatically (API)**

To create the radio button in the PDF forms, you can use [PdfRadioButtonListField](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfRadioButtonListField.html) class and you can create the radio button list items by using the [PdfRadioButtonListItem](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfRadioButtonListItem.html) class.

Please refer the below code snippet for adding the radio button in LoadedDocument.

{% tabs %}
{% highlight C# %}

private void AddRadioButton_Click(object sender, RoutedEventArgs e)
{
    if (pdfViewer.LoadedDocument.Form != null)
    {
	    PdfLoadedPage page = pdfViewer.LoadedDocument.Pages[0] as PdfLoadedPage;
		PdfRadioButtonListField employeesRadioList = new PdfRadioButtonListField(page, "employeesRadioList");
		//Create radio button items.
		PdfRadioButtonListItem radioButtonItem1 = new PdfRadioButtonListItem("1-9");
		radioButtonItem1.Bounds = new RectangleF(100, 140, 20, 20);
		PdfRadioButtonListItem radioButtonItem2 = new PdfRadioButtonListItem("10-49");
		radioButtonItem2.Bounds = new RectangleF(100, 170, 20, 20);
		//Add the items to radio button group.
		employeesRadioList.Items.Add(radioButtonItem1);
		employeesRadioList.Items.Add(radioButtonItem2);
		//Add the radio button into form.
		pdfViewer.LoadedDocument.Form.Fields.Add(employeesRadioList);
    }
}

{% endhighlight %}
{% highlight VB %}

Private Sub AddRadioButton_Click(sender As Object, e As RoutedEventArgs)
    If pdfViewer.LoadedDocument.Form IsNot Nothing Then
        Dim page As PdfLoadedPage = TryCast(pdfViewer.LoadedDocument.Pages(0), PdfLoadedPage)
        'Create radio button list field.
		Dim employeesRadioList As New PdfRadioButtonListField(page, "employeesRadioList")
		'Create radio button items.
		Dim radioButtonItem1 As New PdfRadioButtonListItem("1-9")
		radioButtonItem1.Bounds = New RectangleF(100, 140, 20, 20)
		Dim radioButtonItem2 As New PdfRadioButtonListItem("10-49")
		radioButtonItem2.Bounds = New RectangleF(100, 170, 20, 20)
		'Add the items to the radio button group.
		employeesRadioList.Items.Add(radioButtonItem1)
		employeesRadioList.Items.Add(radioButtonItem2)
		'Add the radio button group into the form.
		pdfViewer.LoadedDocument.Form.Fields.Add(employeesRadioList)
    End If
End Sub

{% endhighlight %}
{% endtabs %}

### ListBox

**Add Programmatically (API)**
You can create the list box field in PDF forms using [PdfListBoxField](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfListBoxField.html) class.

Please refer the below code snippet for adding the list box field in LoadedDocument.

{% tabs %}
{% highlight C# %}

private void AddListbox_Click(object sender, RoutedEventArgs e)
{
    if (pdfViewer.LoadedDocument.Form != null)
    {
	    PdfLoadedPage page = pdfViewer.LoadedDocument.Pages[0] as PdfLoadedPage;
		//Create list box.
		PdfListBoxField listBoxField = new PdfListBoxField(page, "list1");
		//Set the properties.
		listBoxField.Bounds = new RectangleF(100, 60, 100, 50);
		//Add the items to the list box.
		listBoxField.Items.Add(new PdfListFieldItem("English", "English"));
		listBoxField.Items.Add(new PdfListFieldItem("French", "French"));
		listBoxField.Items.Add(new PdfListFieldItem("German", "German"));
		//Select the item.
		listBoxField.SelectedIndex = 0;
		//Set the multi select option.
		listBoxField.MultiSelect = true;
		//Add the list box into PDF document.
		pdfViewer.LoadedDocument.Form.Fields.Add(listBoxField);
    }
}

{% endhighlight %}
{% highlight VB %}

Private Sub AddListbox_Click(sender As Object, e As RoutedEventArgs)
    If pdfViewer.LoadedDocument.Form IsNot Nothing Then
        Dim page As PdfLoadedPage = TryCast(pdfViewer.LoadedDocument.Pages(0), PdfLoadedPage)
        'Create list box.
		Dim listBoxField As New PdfListBoxField(page, "list1")
		'Set the properties.
		listBoxField.Bounds = New RectangleF(100, 60, 100, 50)
		'Add the items to the list box.
		listBoxField.Items.Add(New PdfListFieldItem("English", "English"))
		listBoxField.Items.Add(New PdfListFieldItem("French", "French"))
		listBoxField.Items.Add(New PdfListFieldItem("German", "German"))
		'Select the item.
		listBoxField.SelectedIndex = 0
		'Enable multi-select option.
		listBoxField.MultiSelect = True
		'Add the list box into the PDF document.
		pdfViewer.LoadedDocument.Form.Fields.Add(listBoxField)
    End If
End Sub

{% endhighlight %}
{% endtabs %}

### ComboBox

**Add Programmatically (API)**
[PdfComboBoxField](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfComboBoxField.html) class is used to create a combo box field in PDF forms. You can add a list of items to the combo box by using the [PdfListFieldItem](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfListFieldItem.html) class.

Please refer the below code snippet for adding the combo box in LoadedDocument.

{% tabs %}
{% highlight C# %}

private void AddCombobox_Click(object sender, RoutedEventArgs e)
{
    if (pdfViewer.LoadedDocument.Form != null)
    {
	     PdfLoadedPage page = pdfViewer.LoadedDocument.Pages[0] as PdfLoadedPage;
		//Create a combo box for the first page.
		PdfComboBoxField comboBoxField = new PdfComboBoxField(page, "JobTitle");
		//Set the combo box properties.
		comboBoxField.Bounds = new RectangleF(0, 60, 100, 20);
		//Set tooltip.
		comboBoxField.ToolTip = "Job Title";
		//Add list items.
		comboBoxField.Items.Add(new PdfListFieldItem("Development", "accounts"));
		comboBoxField.Items.Add(new PdfListFieldItem("Support", "advertise"));
		comboBoxField.Items.Add(new PdfListFieldItem("Documentation", "content"));
		//Add combo box to the form.
		pdfViewer.LoadedDocument.Form.Fields.Add(comboBoxField);
    }
}

{% endhighlight %}
{% highlight VB %}

Private Sub AddCombobox_Click(sender As Object, e As RoutedEventArgs)
    If pdfViewer.LoadedDocument.Form IsNot Nothing Then
        Dim page As PdfLoadedPage = TryCast(pdfViewer.LoadedDocument.Pages(0), PdfLoadedPage)
       'Create a combo box for the first page.
		Dim comboBoxField As New PdfComboBoxField(page, "JobTitle")
		'Set the combo box properties.
		comboBoxField.Bounds = New RectangleF(0, 60, 100, 20)
		'Set tooltip.
		comboBoxField.ToolTip = "Job Title"
		'Add list items.
		comboBoxField.Items.Add(New PdfListFieldItem("Development", "accounts"))
		comboBoxField.Items.Add(New PdfListFieldItem("Support", "advertise"))
		comboBoxField.Items.Add(New PdfListFieldItem("Documentation", "content"))
		'Add combo box to the form.
		pdfViewer.LoadedDocument.Form.Fields.Add(comboBoxField)
    End If
End Sub

{% endhighlight %}
{% endtabs %}

### Signature Field

**Add Programmatically (API)**
You can add the signature field in PDF forms using [PdfSignatureField](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfSignatureField.html) class.

Please refer the below code snippet for adding the signature field in LoadedDocument.

{% tabs %}
{% highlight C# %}

private void AddSignatureField_Click(object sender, RoutedEventArgs e)
{
    if (pdfViewer.LoadedDocument.Form != null)
    {
	    PdfLoadedPage page = pdfViewer.LoadedDocument.Pages[0] as PdfLoadedPage;
		//Create PDF Signature field.
		PdfSignatureField signatureField = new PdfSignatureField(page, "Signature");
		//Set properties to the signature field.
		signatureField.Bounds = new RectangleF(0, 100, 90, 20);
		signatureField.ToolTip = "Signature";
		//Add the form field to the document.
		pdfViewer.LoadedDocument.Form.Fields.Add(signatureField);
    }
}

{% endhighlight %}
{% highlight VB %}

Private Sub AddSignatureField_Click(sender As Object, e As RoutedEventArgs)
    If pdfViewer.LoadedDocument.Form IsNot Nothing Then
        Dim page As PdfLoadedPage = TryCast(pdfViewer.LoadedDocument.Pages(0), PdfLoadedPage)
		Dim signatureField As New PdfSignatureField(page, "Signature")
		' Set properties of the signature field.
		signatureField.Bounds = New RectangleF(0F, 100F, 90F, 20F)
		signatureField.ToolTip = "Signature"
		' Add the form field to the document.
		pdfViewer.LoadedDocument.Form.Fields.Add(signatureField)
    End If
End Sub

{% endhighlight %}
{% endtabs %}

N > To ensure the signature appears in the document, save the loaded PDF after applying the signature.

## See Also
-  [Overviewe](./overview)
- [Modify form fields](./modify-form-fields)
- [Remove form fields](./remove-form-fields)
- [Form Fields API](../form-fields-api)