---
layout: post
title: Customize form fields in the ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to customize PDF form fields using the UI and programmatically with APIs in the Syncfusion ASP.NET Core PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Customize the appearance of PDF Form Fields in ASP.NET Core PDF Viewer

**Styling** customizes appearance only (font, color, alignment, border, background, indicator text).

## Customize Appearance of Form Fields Using the UI
Use the **Properties** panel to adjust:
- Font family/size, text color, alignment
- Border color/thickness
- Background color
![Textbox style from UI](../../../javascript-es6/images/ui-textbox-style.png)

## Customize appearance Form Fields Programmatically
Use [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) to apply styles.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="CustomizeTextboxStyle">Update Textbox Style</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  document.getElementById('CustomizeTextboxStyle').addEventListener('click', function () {
    if (!pdfviewer || !pdfviewer.formDesignerModule) {
      console.warn('PDF Viewer or formDesignerModule not ready');
      return;
    }
    var fields = pdfviewer.retrieveFormFields();
    var tb = (fields || []).find(function (f) { return f.name === 'First Name'; }) || fields[0];
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
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  pdfviewer.documentLoad = function () {
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
    if (typeof pdfviewer.dataBind === 'function') { pdfviewer.dataBind(); }
  };
});
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
