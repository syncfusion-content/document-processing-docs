---
layout: post
title: Form Fields API in Vue PDF Viewer | Syncfusion
description:  Learn How to use Form Fields API to enable, update, retrieve and clear in the Syncfusion Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Form Fields API in Vue PDF Viewer

The Vue PDF Viewer provides APIs to create, edit, validate, navigate, and manage form fields programmatically. The following APIs are available:

| API | Description |
|---|---|
| [updateFormFieldsValue](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#updateformfieldsvalue) | Updates the value for one or more form fields.|
| [updateFormFields](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#updateformfields) | Updates the properties of one or more form fields.|
| [retrieveFormFields](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#retrieveformfields) | Retrieves all form fields or by specific criteria.|
| [resetFormFields](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#resetformfields) | Resets the specified or all form fields to their default values.|
| [importFormFields](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#importformfields) | Imports values and states for form fields from a JSON object or file stream.|
| [focusFormField](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#focusformfield) | Sets focus to a form field by name or ID.|
| [exportFormFieldsAsObject](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#exportformfieldsasobject) | Exports form fields as a JSON object.|
| [exportFormFields](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#exportformfields) | Exports form fields as a downloadable file.|
| [clearFormFields](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#clearformfields) | Clears values of specified or all form fields without removing them.|
| [isFormFieldDocument](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#isformfielddocument) | Indicates whether the loaded document contains form fields.|
| [isFormDesignerToolbarVisible](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#isformdesignertoolbarvisible) | Gets whether the Form Designer toolbar is currently visible.|
| [formFieldCollections](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#formfieldcollections) | Gets the collection of current form fields with their properties.|
| [enableFormFieldsValidation](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#enableformfieldsvalidation) | Enables or disables form field validation.|
| [enableFormFields](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#enableformfields) | Enables or disables interaction with form fields.|
| [enableFormDesignerToolbar](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#enableformdesignertoolbar) | Shows or hides the Form Designer toolbar.|

## updateFormFieldsValue

Updates the value of one or more form fields programmatically.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button id="updateFormFields">updateFormFields</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height:640px" />
  </div>
</template>

<script>
  import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, Annotation, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer],
  },
  mounted() {
    const btn = document.getElementById('updateFormFields');
    if (btn) {
      btn.onclick = () => {
        const pdfviewer = this.$refs.pdfviewer.ej2Instances;
        const fields = pdfviewer.retrieveFormFields();
        const field = fields.find((f) => f.name === 'First Name') || fields[0];
        if (field) {
          field.value = 'John Doe';
          field.tooltip = 'First';
          pdfviewer.updateFormFieldsValue(field);
        }
      };
    }
  },
};
</script>
{% endhighlight %}
{% endtabs %}

## updateFormFields

Updates form field properties such as bounds, color, font, isReadOnly, required, and more.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button id="updateFormFields">updateFormFields</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height:640px" />
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  provide: { PdfViewer: [Toolbar, Magnification, Navigation, Annotation, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer] },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  mounted() {
    const btn = document.getElementById('updateFormFields');
    if (btn) {
      btn.onclick = () => {
        const pdfviewer = this.$refs.pdfviewer.ej2Instances;
        const fields = pdfviewer.retrieveFormFields();
        const field = fields.find((f) => f.name === 'First Name') || fields[0];
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
            maxLength: 50,
          });
        }
      };
    }
  },
};
</script>
{% endhighlight %}
{% endtabs %}

## retrieveFormFields

Retrieves all form fields and their properties or filters by type/name.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button id="retrieveFormFields">retrieveFormFields</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height:640px" />
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  provide: { PdfViewer: [Toolbar, Magnification, Navigation, Annotation, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer] },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  mounted() {
    const btn = document.getElementById('retrieveFormFields');
    if (btn) {
      btn.onclick = () => {
        const pdfviewer = this.$refs.pdfviewer.ej2Instances;
        const fields = pdfviewer.retrieveFormFields();
        console.log(fields);
      };
    }
  },
};
</script>
{% endhighlight %}
{% endtabs %}

## resetFormFields

Resets specified form fields or all fields to their default values.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button id="resetFormFields">resetFormFields</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height:640px" />
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  provide: { PdfViewer: [Toolbar, Magnification, Navigation, Annotation, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer] },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  mounted() {
    const btn = document.getElementById('resetFormFields');
    if (btn) {
      btn.onclick = () => {
        const pdfviewer = this.$refs.pdfviewer.ej2Instances;
        pdfviewer.resetFormFields();
      };
    }
  },
};
</script>
{% endhighlight %}
{% endtabs %}

## importFormFields

Imports form field data from an object or file into the current document.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button id="importFormFields">importFormFields</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height:640px" />
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';
import { FormFieldDataFormat } from '@syncfusion/ej2-pdfviewer';

export default {
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  provide: { PdfViewer: [Toolbar, Magnification, Navigation, Annotation, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer] },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  mounted() {
    const btn = document.getElementById('importFormFields');
    if (btn) {
      btn.onclick = () => {
        const pdfviewer = this.$refs.pdfviewer.ej2Instances;
        pdfviewer.importFormFields('File', FormFieldDataFormat.Json);
      };
    }
  },
};
</script>
{% endhighlight %}
{% endtabs %}

## focusFormField

Moves focus to a form field by name or ID.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button id="focusFormField">focusFormField</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height:640px" />
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  provide: { PdfViewer: [Toolbar, Magnification, Navigation, Annotation, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer] },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  mounted() {
    const btn = document.getElementById('focusFormField');
    if (btn) {
      btn.onclick = () => {
        const pdfviewer = this.$refs.pdfviewer.ej2Instances;
        pdfviewer.focusFormField('FirstName');
      };
    }
  },
};
</script>
{% endhighlight %}
{% endtabs %}

## exportFormFieldsAsObject

Exports current form field values and states as a JSON object.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button id="exportFormFieldsAsObject">exportFormFieldsAsObject</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height:640px" />
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';
import { FormFieldDataFormat } from '@syncfusion/ej2-pdfviewer';

export default {
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  provide: { PdfViewer: [Toolbar, Magnification, Navigation, Annotation, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer] },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  mounted() {
    const btn = document.getElementById('exportFormFieldsAsObject');
    if (btn) {
      btn.onclick = () => {
        const pdfviewer = this.$refs.pdfviewer.ej2Instances;
        pdfviewer.exportFormFieldsAsObject(FormFieldDataFormat.Fdf).then((data) => {
          console.log('Exported object:', data);
        });
      };
    }
  },
};
</script>
{% endhighlight %}
{% endtabs %}

## exportFormFields

Exports form field data to a file for download.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button id="exportFormFields">exportFormFields</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height:640px" />
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';
import { FormFieldDataFormat } from '@syncfusion/ej2-pdfviewer';

export default {
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  provide: { PdfViewer: [Toolbar, Magnification, Navigation, Annotation, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer] },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  mounted() {
    const btn = document.getElementById('exportFormFields');
    if (btn) {
      btn.onclick = () => {
        const pdfviewer = this.$refs.pdfviewer.ej2Instances;
        pdfviewer.exportFormFields('FormData', FormFieldDataFormat.Json);
      };
    }
  },
};
</script>
{% endhighlight %}
{% endtabs %}

## clearFormFields

Clears values of specified or all fields without removing the fields themselves.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button id="clearFormFields">clearFormFields</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height:640px" />
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  provide: { PdfViewer: [Toolbar, Magnification, Navigation, Annotation, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer] },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  mounted() {
    const btn = document.getElementById('clearFormFields');
    if (btn) {
      btn.onclick = () => {
        const pdfviewer = this.$refs.pdfviewer.ej2Instances;
        const field = pdfviewer.retrieveFormFields();
        pdfviewer.clearFormFields(field[0]);
      };
    }
  },
};
</script>
{% endhighlight %}
{% endtabs %}

## isFormFieldDocument

Returns true if the loaded document contains one or more form fields.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button id="checkFormFieldDocument">checkFormFieldDocument</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height:640px" />
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  provide: { PdfViewer: [Toolbar, Magnification, Navigation, Annotation, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer] },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  mounted() {
    const element = document.getElementById('checkFormFieldDocument');
    if (element) {
      element.onclick = () => {
        const pdfviewer = this.$refs.pdfviewer.ej2Instances;
        console.log(pdfviewer.isFormFieldDocument);
      };
    }
  },
};
</script>
{% endhighlight %}
{% endtabs %}

## isFormDesignerToolbarVisible

Opens the Form Designer toolbar and returns its visibility status.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height:640px" @documentLoad="onDocumentLoad" />
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  provide: { PdfViewer: [Toolbar, Magnification, Navigation, Annotation, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer] },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  methods: {
    onDocumentLoad() {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      // Open the Form Designer toolbar and read its visibility state
      pdfviewer.enableFormDesignerToolbar(true);
      console.log(pdfviewer.isFormDesignerToolbarVisible);
    },
  },
};
</script>
{% endhighlight %}
{% endtabs %}

## formFieldCollections

Gets the current collection of form fields with their properties from the viewer instance.

```html
<button id="formfieldcollection">formfieldcollection</button>
```
{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button id="formfieldcollection">formfieldcollection</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height:640px" />
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  provide: { PdfViewer: [Toolbar, Magnification, Navigation, Annotation, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer] },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  mounted() {
    const element = document.getElementById('formfieldcollection');
    if (element) {
      element.onclick = () => {
        const pdfviewer = this.$refs.pdfviewer.ej2Instances;
        console.log(pdfviewer.formFieldCollections);
      };
    }
  },
};
</script>
{% endhighlight %}
{% endtabs %}

## enableFormFieldsValidation

Enables or disables built-in validation for required and constrained fields.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  provide: { PdfViewer: [Toolbar, Magnification, Navigation, Annotation, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer] },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  mounted() {
    const element = document.getElementById('checkFormFieldDocument');
    if (element) {
      element.onclick = () => {
        const pdfviewer = this.$refs.pdfviewer.ej2Instances;
        console.log(pdfviewer.isFormFieldDocument);
      };
    }
  },
};
</script>
  provide: { PdfViewer: [Toolbar, Magnification, Navigation, Annotation, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer] },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  methods: {
    onDocumentLoad() {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      pdfviewer.enableFormFieldsValidation = true;
    },
  },
};
</script>
{% endhighlight %}
{% endtabs %}

## enableFormFields

Enables or disables user interaction with form fields globally.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height:640px" @documentLoad="onDocumentLoad" />
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  provide: { PdfViewer: [Toolbar, Magnification, Navigation, Annotation, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer] },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  methods: {
    onDocumentLoad() {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      pdfviewer.enableFormFields = false; // Disable interaction with all fields
    },
  },
};
</script>
{% endhighlight %}
{% endtabs %}

## enableFormDesignerToolbar

Shows or hides the Form Designer toolbar at runtime.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height:640px" @documentLoad="onDocumentLoad" />
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  provide: { PdfViewer: [Toolbar, Magnification, Navigation, Annotation, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer] },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  methods: {
    onDocumentLoad() {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      pdfviewer.enableFormDesignerToolbar(true); // show
      // pdfviewer.enableFormDesignerToolbar(false); // hide
    },
  },
};
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