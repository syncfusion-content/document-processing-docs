---
title: FAQ about Mail merge | DocIO | Syncfusion
description: Learn about the frequently asked questions about mail merge in Word document in the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---
# Frequently asked questions about mail merge in Word document

The frequently asked questions about working with mail merge in Word documents using DocIO are listed below.

## Is it possible to format merge fields with image formats before performing a mail merge?

No, it is not possible to format merge fields with image formats before performing a mail merge. Merge fields in Word documents support only text formatting, whereas images require graphical formatting. However, you can format images dynamically using the [MergeImageField](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.MergeImageFieldEventHandler.html) event in DocIO during the mail merge process.

The following code example shows how to use the [MergeImageField](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.MergeImageFieldEventHandler.html) event during Mail merge process.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Mail-Merge/Event-for-image-mail-merge-field/.NET/Event-for-image-mail-merge-field/Program.cs" %}
//Opens the template document
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Uses the mail merge events handler for image fields
document.MailMerge.MergeImageField += new MergeImageFieldEventHandler(MergeField_ProductImage);
//Specifies the field names and field values
string[] fieldNames = new string[] { "Logo"};
string[] fieldValues = new string[] { "Logo.png"};
//Executes the mail merge with groups
document.MailMerge.Execute(fieldNames, fieldValues);
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the Word document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens the template document
WordDocument document = new WordDocument("Template.docx");
//Uses the mail merge events handler for image fields
document.MailMerge.MergeImageField += new MergeImageFieldEventHandler(MergeField_ProductImage);
//Specifies the field names and field values
string[] fieldNames = new string[] { "Logo"};
string[] fieldValues = new string[] { "Logo.png"};
//Executes the mail merge with groups
document.MailMerge.Execute(fieldNames, fieldValues);
//Saves and closes WordDocument instance
document.Save("Sample.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens the template document
Dim document As New WordDocument("Template.docx")
'Uses the mail merge events handler for image fields
AddHandler document.MailMerge.MergeImageField, AddressOf MergeField_ProductImage
'Specifies the field names and field values
Dim fieldNames As String() = New String() {"Logo"}
Dim fieldValues As String() = New String() {"Logo.png"}
'Executes the mail merge with groups
document.MailMerge.Execute(fieldNames, fieldValues)
'Saves and closes WordDocument instance
document.Save("Sample.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

The following code example shows how to bind the image from file system during Mail merge process by using [MergeImageFieldEventHandler](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.MergeImageFieldEventHandler.html).

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
private void MergeField_ProductImage(object sender, MergeImageFieldEventArgs args)
{
    //Binds image from file system during mail merge
    if (args.FieldName == "Logo")
    {
        string ProductFileName = args.FieldValue.ToString();
        //Gets the image from file system
        FileStream imageStream = new FileStream(ProductFileName, FileMode.Open, FileAccess.Read);
        args.ImageStream = imageStream;
        //Gets the picture, to be merged for image merge field
        WPicture picture = args.Picture;
        //Resizes the picture
        picture.Height = 50;
        picture.Width = 150;
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
private void MergeField_ProductImage(object sender, MergeImageFieldEventArgs args)
{
    //Binds image from file system during mail merge
    if (args.FieldName == "Logo")
    {
        string ProductFileName = args.FieldValue.ToString();
        //Gets the image from file system
        args.Image = Image.FromFile(ProductFileName);
        //Gets the picture, to be merged for image merge field
        WPicture picture = args.Picture;
        //Resizes the picture
        picture.Height = 50;
        picture.Width = 150;
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Private Sub MergeField_ProductImage(ByVal sender As Object, ByVal args As MergeImageFieldEventArgs)
    'Binds image from file system during mail merge
    If args.FieldName = "Logo" Then
        Dim ProductFileName As String = args.FieldValue.ToString()
        'Gets the image from file system
        args.Image = Image.FromFile(ProductFileName)
        'Gets the picture, to be merged for image merge field
        Dim picture As WPicture = args.Picture
        'Resizes the picture
        picture.Height = 50
        picture.Width = 150
    End If
End Sub
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Mail-Merge/Event-for-image-mail-merge-field).

## Why does DocIO use merge field values from the parent group when the nested group data does not contain a value?

If the data source for nested group mail merge has the same field name in both the nested and parent groups, this behavior occurs.

**Explanation:**
In DocIO, if a merge field in a nested group has a null value, the mail merge process automatically checks the parent group for a field with the same name. If the field exists in the parent group, its value is assigned to the field in the nested group. This is the default behavior in DocIO.

**Example:**
Consider the following data source structure:

**Parent group:**
FieldName: FirstName = Andrew
FieldName: LastName = Fuller

**Nested group:**
FieldName: FirstName = null
If the FirstName field in the nested group has a null value, DocIO will automatically assign the FirstName value from the parent group (Andrew) to the nested group field.

**Suggestions to modify this behavior:**
To prevent the nested group's field from inheriting the value of the parent group, you can use one of the following solutions:

**Solution 1:** Set empty strings for empty fields
Assign an empty string to the merge field in the nested group instead of null. This ensures that the field remains empty and does not inherit values from the parent group.

**Solution 2:** Use unique field names
Rename fields in the parent and nested groups to have distinct names. This avoids any conflict and ensures the parent group’s values are not applied to the nested group.

## How to identify merge fields that do not exist in the data source?

To find merge fields that have null values or missing from the data source, set [ClearFields](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.MailMerge.html#Syncfusion_DocIO_DLS_MailMerge_ClearFields) API as false before performing mail merge. This ensures unmerged fields remain visible in the output document. Refer [here](https://help.syncfusion.com/document-processing/word/word-library/net/mail-merge/mail-merge-options#remove-empty-merge-fields) for code example.

For identifying only null value fields or missing from data source, use the [BeforeClearField](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.BeforeClearFieldEventHandler.html) event during the mail merge process to replace them with an error message. Refer [here](https://help.syncfusion.com/document-processing/word/word-library/net/mail-merge/mail-merge-events#beforeclearfield-event) for code example.
