---
layout: post
title: Remove form fields in MVC PDF Viewer | Syncfusion
description: Learn how to remove PDF form fields using the UI and programmatically in the Syncfusion MVC PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Remove PDF Form Fields from a PDF in MVC

## Remove Form Fields Using the UI
**Steps:**
1.	Enable **Form Designer mode**.
2.	Select the form field.
3.	Click **Delete** in the toolbar or press the **Delete** key.
![Form Designer toolbar with Delete icon](../../../javascript-es6/images/ui-del-formfields.png)

## Remove Form Fields Programmatically
Use **deleteFormField()** with a field reference or ID.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="deleteAllFields">Delete Form Fields</button>
<button id="deleteById">Delete First Field By ID</button>
<div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

<script>
    document.addEventListener("DOMContentLoaded", function () {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        document.getElementById('deleteAllFields').addEventListener('click', function () {
            var fields = pdfviewer.formFieldCollections.slice();
            fields.forEach(function (field) { pdfviewer.formDesignerModule.deleteFormField(field); });
        });
        document.getElementById('deleteById').addEventListener('click', function () {
            if (pdfviewer.formFieldCollections.length > 0) {
                var id = pdfviewer.formFieldCollections[0].id;
                if (id) {
                    pdfviewer.formDesignerModule.deleteFormField(id);
                }
            }
        });
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
- [Customize form fields](./customize-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../form-fields-api)