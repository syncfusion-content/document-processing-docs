---
layout: post
title: Form Field Events in WPF Pdfviewer control | Syncfusion
description: Learn about the different form field events supported in the Syncfusion WPF PDF Viewer and how they help manage user interactions and enhance form workflows.
control: Form Field Events
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# PDF Viewer Form Field Events

The Syncfusion WPF PDF Viewer supports form field click events, allowing applications to detect when a user clicks on a form field. These events can be used to trigger application‑specific actions or handle basic interactions when a form field is selected.

## Retrieve the form field details 
WPF PDF Viewer allows form field details to be retrieved through the [FormFieldClicked](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.PdfViewer.PdfViewerControl.html#Syncfusion_Windows_PdfViewer_PdfViewerControl_FormFieldClicked) event of [PdfViewerControl](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.PdfViewer.PdfViewerControl.html) when a form field is clicked in the PDF document. The [FormField](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.PdfViewer.FormFieldClickedEventArgs.html#Syncfusion_Windows_PdfViewer_FormFieldClickedEventArgs_FormField) property available in [FormFieldClickedEventArgs](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.PdfViewer.FormFieldClickedEventArgs.html) must be typecast to the appropriate form field type to access specific details.

The following code snippet demonstrates how to retrieve details for all supported form fields using the FormFieldClicked event.


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

-  [Overview](./overview)
- [Import form fields](./import-export-form-fields/import-form-fields)
- [Export form fields](./import-export-form-fields/export-form-fields)
- [Add form fields](./manage-form-fields/add-form-fields)
- [Modify form fields](./manage-form-fields/modify-form-fields)
- [Remove form fields](./manage-form-fields/remove-form-fields) 
- [Form fields API](./form-fields-api)