---
layout: post
title: Form Field Events in WPF Pdfviewer control | Syncfusion
description: Learn here all about different form field event in Syncfusion WPF Pdfviewer.
control: Form Field Events
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# PDF Viewer Form Field Events in WPF

The Syncfusion **WPF PDF Viewer** provides a comprehensive set of **form field events** that allow developers to track user interactions, respond to form changes, and implement custom business logic. 

## Retrieve the form field details 

You can retrieve the details of a form field through the [FormFieldClicked](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.PdfViewer.PdfViewerControl.html#Syncfusion_Windows_PdfViewer_PdfViewerControl_FormFieldClicked) event of [PdfViewerControl](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.PdfViewer.PdfViewerControl.html) by simply clicking on the field. The [FormField](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.PdfViewer.FormFieldClickedEventArgs.html#Syncfusion_Windows_PdfViewer_FormFieldClickedEventArgs_FormField) property of the [FormFieldClickedEventArgs](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.PdfViewer.FormFieldClickedEventArgs.html) needs to be typecast to the respective control.The following code snippet explains how to retrieve details for all [supported form fields](https://help.syncfusion.com/wpf/pdf-viewer/form-filling-in-pdf#supported-form-fields) using the FormFieldClicked event.

{% tabs %}
{% highlight c# %}

//Wire the `FormFieldClicked` event.
pdfViewer.FormFieldClicked += PdfViewer_FormFieldClicked;

private void PdfViewer_FormFieldClicked(object sender, FormFieldClickedEventArgs args)
{
    if (args.FormField is TextBox)
            {
                //Typecast the `FormField` property to `System.Windows.Controls.TextBox`
                TextBox text = args.FormField as TextBox;
                //{Insert your code here}
            }
            else if (args.FormField is PasswordBox)
            {
                //Typecast the `FormField` property to `System.Windows.Controls.PasswordBox`
                PasswordBox PasstextBox = args.FormField as PasswordBox;
                //{Insert your code here}
            }          
            else if (args.FormField is ListBox)
            {
                //Typecast the `FormField` property to `System.Windows.Controls.ListBox`
                ListBox listBox = args.FormField as ListBox;
                //{Insert your code here}
            }         
            else if (args.FormField is ComboBox)
            {
                //Typecast the `FormField` property to `System.Windows.Controls.ComboBox`
                ComboBox comboBox = args.FormField as ComboBox;
                //{Insert your code here}
            }
            else if (args.FormField is CheckBox)
            {
                //Typecast the `FormField` property to `System.Windows.Controls.CheckBox`
                CheckBox checkBox = args.FormField as CheckBox;
                //{Insert your code here}
            }
            else if (args.FormField is RadioButton)
            {
                //Typecast the `FormField` property to `System.Windows.Controls.RadioButton`
                RadioButton radiobtn = args.FormField as RadioButton;
                //{Insert your code here}
            }	 
}

{% endhighlight %}
{% endtabs %}


**Common Use Cases**

Form field events can be used to:
- Track user interaction with form fields
- Update UI elements dynamically
- Trigger workflow actions based on field changes
- Enforce business rules during form editing

## See also

-  [Overviewe](./overview)
- [Import form fields](./import-form-fields)
- [Export form fields](./export-form-fields)
- [Add form fields](./add-form-fields)
- [Modify form fields](./modify-form-fields)
- [Remove form fields](./remove-form-fields) 
- [Form fields API](./form-fields-api)