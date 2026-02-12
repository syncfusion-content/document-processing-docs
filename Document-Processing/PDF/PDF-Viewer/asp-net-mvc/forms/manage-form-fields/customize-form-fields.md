---
layout: post
title: Customize form fields in MVC PDF Viewer | Syncfusion
description: Learn how to customize PDF form fields using the UI and programmatically with APIs in the Syncfusion MVC PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Customize the appearance of PDF Form Fields in MVC PDF Viewer

**Styling** customizes appearance only (font, color, alignment, border, background, indicator text).

## Customize Appearance of Form Fields Using the UI
Use the **Properties** panel to adjust:
- Font family/size, text color, alignment
- Border color/thickness
- Background color
![Textbox style from UI](../../../javascript-es6/images/ui-textbox-style.png)

## Customize appearance Form Fields Programmatically
Use [updateFormField()](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#updateFormField) to apply styles:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:120px">
        <button id="CustomizeTextboxStyle">Update Textbox Style</button>
    </div>

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            document.getElementById('CustomizeTextboxStyle').addEventListener('click', function () {
                var fields = pdfviewer.retrieveFormFields();
                var tb = fields.find(function (f) { return f.name === 'First Name'; }) || fields[0];
                if (tb) {
                    pdfviewer.formDesignerModule.updateFormField(tb, {
                        value: 'John',
                        fontFamily: 'Courier',
                        fontSize: 12,
                        fontStyle: 'None',
                        color: 'black',
                        borderColor: 'black',
                        backgroundColor: 'white',
                        alignment: 'Left',
                        thickness: 2
                    });
                }
            });
        });
    </script>

{% endhighlight %}
{% endtabs %}

## Set Default Styles for New Form Fields
Define defaults so fields added from the toolbar inherit styles.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];

            // Apply as defaults for Textbox added from toolbar
            pdfviewer.textFieldSettings = {
                name: 'Textbox',
                isReadOnly: false,
                visibility: 'visible',
                isRequired: false,
                isPrint: true,
                tooltip: 'Textbox',
                thickness: 4,
                value: 'Textbox',
                fontFamily: 'Courier',
                fontSize: 10,
                fontStyle: 'None',
                color: 'black',
                borderColor: 'black',
                backgroundColor: 'White',
                alignment: 'Left',
                maxLength: 0,
                isMultiline: false
            };
        });
    </script>

{% endhighlight %}
{% endtabs %}

[View Sample on GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Create form fields](./create-form-fields)
- [Modify form fields](./modify-form-fields)
- [Remove form fields](./remove-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../form-fields-api)
