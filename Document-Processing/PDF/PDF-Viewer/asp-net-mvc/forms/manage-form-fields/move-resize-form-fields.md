---
layout: post
title: Move and Resize form fields in MVC PDF Viewer | Syncfusion
description: Learn how to move and resize PDF form fields using the UI and programmatically with APIs in the Syncfusion MVC PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Move and Resize PDF Form Fields in MVC PDF Viewer
- **Move**: Drag the form field to reposition it.
- **Resize**: Use the resize handles to change width and height.

![Moveing and Resizing a form field](../../../javascript-es6/images/move-resize-forms.gif)

## Move and Resize Fields Programmatically (API)
You can set absolute bounds or move fields by a delta.

**Set absolute bounds**

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:120px">
        <button id="resizeMove">Resize and Move FormFields</button>
    </div>

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            document.getElementById('resizeMove').addEventListener('click', function () {
                var fields = pdfviewer.retrieveFormFields();
                var field = fields.find(function (f) { return f.name === 'First Name'; }) || fields[0];
                if (field) {
                    pdfviewer.formDesignerModule.updateFormField(field, {
                        bounds: { X: 140, Y: 210, Width: 220, Height: 24 }
                    });
                }
            });
        });
    </script>

{% endhighlight %}
{% endtabs %}


## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Create form fields](./create-form-fields)
- [Remove form Fields](./remove-form-fields)
- [Customize form fields](./customize-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Form fields API](../form-fields-api)