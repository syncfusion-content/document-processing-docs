---
layout: post
title: Style form fields in the ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to configure typography, colors, borders, alignment, and other style settings for form fields using the UI and Programmatically in the ASP.NET Core.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Customize the appearance of PDF Form Fields in ASP.NET Core PDF Viewer

**Styling** customizes appearance only (font, color, alignment, border, background, indicator text).

## Customize appearance of form fields using the UI
Use the **Properties** panel to adjust:
- Font family and size, text color, and alignment
- Border color and thickness
- Background color
![Textbox style from UI showing font, color, and border settings](../../../javascript-es6/images/ui-textbox-style.png)

## Customize appearance of form fields programmatically
Use [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) to apply styles:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button onclick="updateTextboxStyle()">Update Textbox Style</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>

<script>
    function updateTextboxStyle() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        var fields = viewer.retrieveFormFields() || [];
        var tb = fields.find(function(f) { return f.name === 'First Name'; }) || fields[0];
        if (tb) {
            viewer.formDesignerModule.updateFormField(tb, {
                value: 'John',
                fontFamily: 'Courier',
                fontSize: 12,
                color: 'black',
                borderColor: 'black',
                backgroundColor: 'white',
                alignment: 'Left',
                thickness: 2
            });
        }
    }
</script>
{% endhighlight %}
{% endtabs %}

## Set Default Styles for New Form Fields
Define defaults so fields added from the toolbar inherit styles.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                   documentLoad="onDocumentLoad">
    </ejs-pdfviewer>
</div>

<script>
    function onDocumentLoad() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.textFieldSettings = {
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
    }
</script>
{% endhighlight %}
{% endtabs %}

[View Sample on GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples)

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