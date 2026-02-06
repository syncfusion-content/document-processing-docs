---
layout: post
title: Form Fields API in ASP.NET Core PDF Viewer | Syncfusion
description:  Learn how to use Form Fields API to enable, update, retrieve and clear in the Syncfusion ASP.NET Core PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Form Fields API in ASP.NET Core PDF Viewer

The PDF Viewer provides comprehensive APIs to create, edit, validate, navigate, and manage form fields programmatically. The following APIs are available:

| API | Description |
|---|---|
| [updateFormFieldsValue](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfieldsvalue) | Updates the value for one or more form fields.|
| [updateFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) | Updates the properties of one or more form fields.|
| [retrieveFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#retrieveformfields) | Retrieves all form fields or by specific criteria.|
| [resetFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#resetformfields) | Resets the specified or all form fields to their default values.|
| [importFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#importformfields) | Imports values and states for form fields from a JSON object or file stream.|
| [focusFormField](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#focusformfield) | Sets focus to a form field by name or ID.|
| [exportFormFieldsAsObject](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#exportformfieldsasobject) | Exports form fields as a JSON object.|
| [exportFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#exportformfields) | Exports form fields as a downloadable file.|
| [clearFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#clearformfields) | Clears values of specified or all form fields without removing them.|
| [isFormFieldDocument](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_IsFormFieldDocument) | Indicates whether the loaded document contains form fields.|
| [isFormDesignerToolbarVisible](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_IsFormDesignerToolbarVisible) | Gets whether the Form Designer toolbar is currently visible.|
| [formFieldCollections](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#formfieldcollections) | Gets the collection of current form fields with their properties.|
| [enableFormFieldsValidation](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableFormFieldsValidation) | Enables or disables form field validation.|
| [enableFormFields](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableFormFields) | Enables or disables interaction with form fields.|
| [enableFormDesignerToolbar](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableFormDesignerToolbar) | Shows or hides the Form Designer toolbar.|

## updateFormFieldsValue

Updates the value of one or more form fields programmatically.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="updateFormFieldsValue">updateFormFieldsValue</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var viewerElement = document.getElementById('pdfviewer');
  var pdfviewer = viewerElement && viewerElement.ej2_instances && viewerElement.ej2_instances[0];
  var btn = document.getElementById('updateFormFieldsValue');
  if (btn) {
    btn.onclick = function () {
      var fields = pdfviewer && pdfviewer.retrieveFormFields && pdfviewer.retrieveFormFields();
      var field = (fields && fields.find(function (f) { return f && f.name === 'First Name'; })) || (fields && fields[0]);
      if (field) {
        field.value = 'John Doe';
        field.tooltip = 'First';
        pdfviewer.updateFormFieldsValue(field);
      }
    };
  }
});
</script>
{% endhighlight %}
{% endtabs %}

## updateFormFields

Updates form field properties such as bounds, color, font, isReadOnly, required, and more.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="updateFormFields">updateFormFields</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var viewerElement = document.getElementById('pdfviewer');
  var pdfviewer = viewerElement && viewerElement.ej2_instances && viewerElement.ej2_instances[0];
  var btn = document.getElementById('updateFormFields');
  if (btn) {
    btn.onclick = function () {
      var fields = pdfviewer && pdfviewer.retrieveFormFields && pdfviewer.retrieveFormFields();
      var field = (fields && fields.find(function (f) { return f && f.name === 'First Name'; })) || (fields && fields[0]);
      if (field) {
        pdfviewer.formDesignerModule.updateFormField(field, {
          value: 'John',
          fontFamily: 'Courier',
          fontSize: 12,
          color: 'black',
          backgroundColor: 'white',
          borderColor: 'black',
          thickness: 2,
          alignment: 'Left',
          maxLength: 50
        });
      }
    };
  }
});
</script>
{% endhighlight %}
{% endtabs %}

## retrieveFormFields

Retrieves all form fields and their properties or filters by type/name.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="retrieveFormFields">retrieveFormFields</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var viewerElement = document.getElementById('pdfviewer');
  var pdfviewer = viewerElement && viewerElement.ej2_instances && viewerElement.ej2_instances[0];
  var btn = document.getElementById('retrieveFormFields');
  if (btn) {
    btn.onclick = function () {
      var fields = pdfviewer && pdfviewer.retrieveFormFields && pdfviewer.retrieveFormFields();
      console.log(fields);
    };
  }
});
</script>
{% endhighlight %}
{% endtabs %}

## resetFormFields

Resets specified form fields or all fields to their default values.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="resetFormFields">resetFormFields</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var viewerElement = document.getElementById('pdfviewer');
  var pdfviewer = viewerElement && viewerElement.ej2_instances && viewerElement.ej2_instances[0];
  var btn = document.getElementById('resetFormFields');
  if (btn) {
    btn.onclick = function () {
      pdfviewer.resetFormFields();
    };
  }
});
</script>
{% endhighlight %}
{% endtabs %}

## importFormFields

Imports form field data from an object or file into the current document.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="importFormFields">importFormFields</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var viewerElement = document.getElementById('pdfviewer');
  var pdfviewer = viewerElement && viewerElement.ej2_instances && viewerElement.ej2_instances[0];
  var btn = document.getElementById('importFormFields');
  if (btn) {
    btn.onclick = function () {
      // The file for importing should be accessible at the given path or as a file stream depending on your integration
      pdfviewer.importFormFields('File', 'Json');
    };
  }
});
</script>
{% endhighlight %}
{% endtabs %}

## focusFormField

Moves focus to a form field by name or ID.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="focusFormField">focusFormField</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var viewerElement = document.getElementById('pdfviewer');
  var pdfviewer = viewerElement && viewerElement.ej2_instances && viewerElement.ej2_instances[0];
  var btn = document.getElementById('focusFormField');
  if (btn) {
    btn.onclick = function () {
      pdfviewer.focusFormField('FirstName');
    };
  }
});
</script>
{% endhighlight %}
{% endtabs %}

## exportFormFieldsAsObject

Exports current form field values and states as a JSON object.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="exportFormFieldsAsObject">exportFormFieldsAsObject</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var viewerElement = document.getElementById('pdfviewer');
  var pdfviewer = viewerElement && viewerElement.ej2_instances && viewerElement.ej2_instances[0];
  var btn = document.getElementById('exportFormFieldsAsObject');
  if (btn) {
    var exportedData;
    btn.onclick = function () {
      pdfviewer.exportFormFieldsAsObject('Fdf').then(function (data) {
        exportedData = data; // Save or send to server
        console.log('Exported object:', exportedData);
      });
    };
  }
});
</script>
{% endhighlight %}
{% endtabs %}

## exportFormFields

Exports form field data to a file for download.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="exportFormFields">exportFormFields</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var viewerElement = document.getElementById('pdfviewer');
  var pdfviewer = viewerElement && viewerElement.ej2_instances && viewerElement.ej2_instances[0];
  var btn = document.getElementById('exportFormFields');
  if (btn) {
    btn.onclick = function () {
      pdfviewer.exportFormFields('FormData', 'Json');
    };
  }
});
</script>
{% endhighlight %}
{% endtabs %}

## clearFormFields

Clears values of specified or all fields without removing the fields themselves.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="clearformfield">clearformfield</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var viewerElement = document.getElementById('pdfviewer');
  var pdfviewer = viewerElement && viewerElement.ej2_instances && viewerElement.ej2_instances[0];
  var btn = document.getElementById('clearformfield');
  if (btn) {
    btn.onclick = function () {
      var field = pdfviewer.retrieveFormFields();
      pdfviewer.clearFormFields(field[0]);
    };
  }
});
</script>
{% endhighlight %}
{% endtabs %}

## isFormFieldDocument

Returns true if the loaded document contains one or more form fields.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="checkFormFieldDocument">checkFormFieldDocument</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var viewerElement = document.getElementById('pdfviewer');
  var pdfviewer = viewerElement && viewerElement.ej2_instances && viewerElement.ej2_instances[0];
  var element = document.getElementById('checkFormFieldDocument');
  if (element) {
    element.onclick = function () {
      console.log(pdfviewer.isFormFieldDocument);
    };
  }
});
</script>
{% endhighlight %}
{% endtabs %}

## isFormDesignerToolbarVisible

Opens the form designer toolbar when the PDF document is loaded in the PDF Viewer control initially
and get the form designer Toolbar Visible status.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var viewerElement = document.getElementById('pdfviewer');
  var pdfviewer = viewerElement && viewerElement.ej2_instances && viewerElement.ej2_instances[0];
  if (!pdfviewer) return;
  // Open the Form Designer toolbar and read its visibility state
  pdfviewer.enableFormDesignerToolbar(true);
  console.log(pdfviewer.isFormDesignerToolbarVisible);
});
</script>
{% endhighlight %}
{% endtabs %}

## formFieldCollections

Gets the current collection of form fields with their properties from the viewer instance.

```html
<button id="formfieldcollection">formfieldcollection</button>
```
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="formfieldcollection">formfieldcollection</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var viewerElement = document.getElementById('pdfviewer');
  var pdfviewer = viewerElement && viewerElement.ej2_instances && viewerElement.ej2_instances[0];
  var element = document.getElementById('formfieldcollection');
  if (element) {
    element.onclick = function () {
      console.log(pdfviewer.formFieldCollections);
    };
  }
});
</script>
{% endhighlight %}
{% endtabs %}

## enableFormFieldsValidation

Enables or disables built-in validation for required and constrained fields.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var viewerElement = document.getElementById('pdfviewer');
  var pdfviewer = viewerElement && viewerElement.ej2_instances && viewerElement.ej2_instances[0];
  if (!pdfviewer) return;
  pdfviewer.enableFormFieldsValidation = true; // enable form fields validation
});
</script>
{% endhighlight %}
{% endtabs %}

## enableFormFields

Enables or disables user interaction with form fields globally.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var viewerElement = document.getElementById('pdfviewer');
  var pdfviewer = viewerElement && viewerElement.ej2_instances && viewerElement.ej2_instances[0];
  if (!pdfviewer) return;
  pdfviewer.enableFormFields = false;  // Disable interaction with all fields
});
</script>
{% endhighlight %}
{% endtabs %}

## enableFormDesignerToolbar

Shows or hides the Form Designer toolbar at runtime.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var viewerElement = document.getElementById('pdfviewer');
  var pdfviewer = viewerElement && viewerElement.ej2_instances && viewerElement.ej2_instances[0];
  if (!pdfviewer) return;
  // Show or hide the Form Designer toolbar at runtime
  pdfviewer.enableFormDesignerToolbar(true); // show
  // pdfviewer.enableFormDesignerToolbar(false); // hide
});
</script>
{% endhighlight %}
{% endtabs %}

## See also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create form fields](./manage-form-fields/create-form-fields)
- [Edit form fields](./manage-form-fields/modify-form-fields)
- [Group form fields](./group-form-fields)
- [Add custom data to form fields](./custom-data)
- [Form Constrain](./form-constrain)
- [Form fields Validation](./form-validation)