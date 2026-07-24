---
title: Printing Contents in WPF RichTextBox control | Syncfusion
description: Learn here all about Printing Contents support in Syncfusion WPF RichTextBox (SfRichTextBoxAdv) control and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: printing,print-dialog,print-completed,print-comments
---
# Printing Contents in WPF RichTextBox (SfRichTextBoxAdv)

The [WPF RichTextBox](https://www.syncfusion.com/docx-editor-sdk/wpf-docx-editor) (SfRichTextBoxAdv) supports an API to print the rich text content as pages using the print dialog through the [PrintDocument](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_PrintDocument) method.

## Print

The following sample code demonstrates how to print the document content as pages.
{% tabs %}
{% highlight c# %}
// Displays the Print Dialog to perform printing of document content as pages.
richTextBoxAdv.PrintDocument();


{% endhighlight %}
{% highlight VB %}
' Displays the Print Dialog to perform printing of document content as pages.
richTextBoxAdv.PrintDocument()


{% endhighlight %}
{% endtabs %}

## PrintCompleted event

The SfRichTextBoxAdv also supports the [PrintCompleted](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_PrintCompleted) event that is raised when the printing operation completes. The [PrintCompletedEventArgs](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.PrintCompletedEventArgs.html) provides information about the print operation. The following code example demonstrates how to handle the print completed event.
{% tabs %}
{% highlight c# %}
// Hooks the print completed event.
richTextBoxAdv.PrintCompleted += RichTextBoxAdv_PrintCompleted;

// Called whenever the print completed event is fired.
private void RichTextBoxAdv_PrintCompleted(object obj, PrintCompletedEventArgs args)
{
    // Handle your code here.
}

// Unhooks the print completed event.
richTextBoxAdv.PrintCompleted -= RichTextBoxAdv_PrintCompleted;


{% endhighlight %}
{% highlight VB %}
' Hooks the print completed event.
AddHandler richTextBoxAdv.PrintCompleted, AddressOf RichTextBoxAdv_PrintCompleted

' Called whenever the print completed event is fired.
Private Sub RichTextBoxAdv_PrintCompleted(obj As Object, args As PrintCompletedEventArgs)
	' Handle your code here.
End Sub

' Unhooks the print completed event.
RemoveHandler richTextBoxAdv.PrintCompleted, AddressOf RichTextBoxAdv_PrintCompleted
{% endhighlight %}
{% endtabs %}

## UI command for printing

The following code example demonstrates how to bind the [PrintDocumentCommand](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_PrintDocumentCommand) UI command to invoke printing in SfRichTextBoxAdv.
{% tabs %}
{% highlight XAML %}
<!-- Binds button to the PrintDocumentCommand -->
<Button Content="Print" Command="RichTextBoxAdv:SfRichTextBoxAdv.PrintDocumentCommand" CommandTarget="{Binding ElementName=richTextBoxAdv}" />


{% endhighlight %}

{% endtabs %}

## Hide comments when printing

In the SfRichTextBoxAdv control, comments are shown by default when printing the document (the default value of `PrintComments` is `true`). You can hide the comments while printing by setting the [PrintComments](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.EditorSettings.html#Syncfusion_Windows_Controls_RichTextBoxAdv_EditorSettings_PrintComments) property of the [EditorSettings](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.EditorSettings.html) class to `false`.

The following code example illustrates how to hide the comments when printing the document.

{% tabs %}
{% highlight xaml %}
<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv">
    <RichTextBoxAdv:SfRichTextBoxAdv.EditorSettings>
        <RichTextBoxAdv:EditorSettings PrintComments="False" />
    </RichTextBoxAdv:SfRichTextBoxAdv.EditorSettings>
</RichTextBoxAdv:SfRichTextBoxAdv>

{% endhighlight %}
{% highlight c# %}
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
richTextBoxAdv.EditorSettings.PrintComments = false;

{% endhighlight %}
{% highlight VB %}
Dim richTextBoxAdv As New SfRichTextBoxAdv()
richTextBoxAdv.EditorSettings.PrintComments = False

{% endhighlight %}
{% endtabs %}

N> In order to invoke printing, the standard keyboard shortcut CTRL + P can also be used.

You can refer to our [WPF RichTextBox](https://www.syncfusion.com/docx-editor-sdk/wpf-docx-editor) feature tour page for its groundbreaking feature representations. You can also explore our [WPF RichTextBox example](https://github.com/syncfusion/docx-editor-sdk-wpf-demos) to know how to render and configure the editing tool.

## See Also

- [Commands in WPF RichTextBox](Commands)
- [Document Properties in WPF RichTextBox](Document-Properties)
- [EditorSettings in WPF RichTextBox](EditorSettings)