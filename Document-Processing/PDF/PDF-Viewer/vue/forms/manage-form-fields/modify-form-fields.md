---
layout: post
title: Modify form fields in the Vue PDF Viewer | Syncfusion
description: Learn how to modify PDF form fields using the UI and programmatically with APIs in the Syncfusion Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Modify PDF Form Field Properties in Vue
You can modify form fields using the **UI** or **API**.

## Modify PDF Form Field Properties using the UI
- Right click a field → **Properties** to update settings.
![Textbox properties panel](../../../javascript-es6/images/ui-textbox-edit.png)
- Drag to move; use handles to resize.
- Use the toolbar to toggle field mode or add new fields.

## Modify PDF Form Field Properties programmatically
Use [updateFormField()](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#updateformfields) to change behavior/data (including position and size).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button @click="modifyTextbox">Apply Textbox Changes</button>
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
  methods: {
    modifyTextbox() {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      // Retrieve form fields collection
      const fields = pdfviewer.retrieveFormFields();
      // Find the textbox field by name (Here field name is First Name)
      const field = fields.find(f => f.name === 'First Name') || fields[0];
      if (field) {
        // Update textbox field styling and value
        pdfviewer.formDesignerModule.updateFormField(field, {
          value: 'John',
          fontFamily: 'Courier',
          fontSize: 12,
          fontStyle: 'None',
          color: 'black',
          backgroundColor: 'white',
          borderColor: 'black',
          thickness: 2,
          alignment: 'Left',
          maxLength: 50
        });
      }
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Modify PDF Form Field Properties by Field type

### Textbox
- UI: Update value, font, size, colors, border thickness, alignment, max length, multiline.
![Textbox properties panel](../../../javascript-es6/images/ui-textbox-edit.png)
Use [updateFormField()](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#updateformfields) for value, typography, alignment, colors, borders.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button @click="modifyTextbox">Apply Textbox Changes</button>
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
  methods: {
    modifyTextbox() {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      const fields = pdfviewer.retrieveFormFields();
      const field = fields.find(f => f.name === 'First Name') || fields[0];
      if (field) {
        pdfviewer.formDesignerModule.updateFormField(field, {
          value: 'John',
          fontFamily: 'Courier',
          fontSize: 12,
          fontStyle: 'None',
          color: 'black',
          backgroundColor: 'white',
          borderColor: 'black',
          thickness: 2,
          alignment: 'Left',
          maxLength: 50
        });
      }
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### Password

- UI: Tooltip, required, max length, font, appearance.
![Password edited from UI](../../../javascript-es6/images/ui-password-edit.png)
Use [updateFormField()](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#updateformfields) for tooltip, validation flags, typography, colors, alignment, borders.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button @click="modifyPasswordBox">Edit PasswordBox</button>
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
  methods: {
    modifyPasswordBox() {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      const fields = pdfviewer.retrieveFormFields();
      const field = fields.find(f => f.name === 'Password');
      if (field) {
        pdfviewer.formDesignerModule.updateFormField(field, {
          tooltip: 'Enter your password',
          isReadOnly: false,
          isRequired: true,
          isPrint: true,
          fontFamily: 'Courier',
          fontSize: 10,
          color: 'black',
          borderColor: 'black',
          backgroundColor: 'white',
          alignment: 'Left',
          maxLength: 20,
          thickness: 1
        });
      }
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### CheckBox
- UI: Toggle checked state.
![CheckBox edited from UI](../../../javascript-es6/images/ui-checkbox-edit.png)
Use [updateFormField()](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#updateformfields) for isChecked, tooltip, colors, borders.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button @click="modifyCheckbox">Modify CheckBox</button>
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
  methods: {
    modifyCheckbox() {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      const fields = pdfviewer.retrieveFormFields();
      const cb = fields.find(f => f.name === 'Subscribe');
      if (cb) {
        pdfviewer.formDesignerModule.updateFormField(cb, {
          isChecked: true,
          backgroundColor: 'white',
          borderColor: 'black',
          thickness: 2,
          tooltip: 'Subscribe to newsletter'
        });
      }
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### RadioButton
•	UI: Set selected item in a group (same Name).
![RadioButton edited from UI](../../../javascript-es6/images/ui-radiobutton-edit.png)
•	API: [updateFormField()](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#updateformfields) to set selected value and border appearance.
{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button @click="editRadio">Modify RadioButton</button>
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
  methods: {
    editRadio() {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      const fields = pdfviewer.retrieveFormFields();
      const genderRadios = fields.filter(f => f.name === 'Gender');
      if (genderRadios[1]) {
        pdfviewer.formDesignerModule.updateFormField(genderRadios[0], { isSelected: false });
        pdfviewer.formDesignerModule.updateFormField(genderRadios[1], { isSelected: true, thickness: 2, borderColor: 'black' });
      }
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### ListBox
•	UI: Add/remove items, set selection, adjust fonts/colors.
![ListBox edited from UI](../../../javascript-es6/images/ui-listbox-edit.png)
•	API: [updateFormField()](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#updateformfields) for items, selection, borders.
{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button @click="editListBox">Edit ListBox</button>
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
  methods: {
    editListBox() {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      const fields = pdfviewer.retrieveFormFields();
      const lb = fields.find(f => f.name === 'States');
      if (lb) {
        const option = [
          { itemName: 'Alabama', itemValue: 'AL' },
          { itemName: 'Alaska', itemValue: 'AK' },
          { itemName: 'Arizona', itemValue: 'AZ' },
        ];
        pdfviewer.formDesignerModule.updateFormField(lb, {
          fontFamily: 'Courier',
          fontSize: 5,
          color: 'black',
          backgroundColor: 'white',
          tooltip: 'listbox',
          options: option,
        });
      }
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### DropDown
•	UI: Add/remove items, default value, appearance.
![DropDown edited from UI](../../../javascript-es6/images/ui-dropdown-edit.png)
•	API: [updateFormField()](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#updateformfields) for items, value, borders.
{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button @click="editDropDown">Edit DropDown</button>
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
  methods: {
    editDropDown() {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      const fields = pdfviewer.retrieveFormFields();
      const dd = fields.find(f => f.name === 'Country');
      if (dd) {
        pdfviewer.formDesignerModule.updateFormField(dd, {
          options: [
            { itemName: 'USA', itemValue: 'US' },
            { itemName: 'Canada', itemValue: 'CA' },
            { itemName: 'Mexico', itemValue: 'MX' }
          ],
          value: 'US',
          fontFamily: 'Courier',
          fontSize: 10,
          color: 'black',
          borderColor: 'black',
          backgroundColor: 'white'
        });
      }
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### Signature Field
•	UI: Tooltip, thickness, indicator text, required/visibility.
![Signature field edited from UI](../../../javascript-es6/images/ui-signature-edit.png)
•	API: [updateFormField()](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#updateformfields) for tooltip, required, colors, borders.
{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button @click="editSignature">Edit Signature</button>
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
  methods: {
    editSignature() {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      const fields = pdfviewer.retrieveFormFields();
      const sig = fields.find(f => f.name === 'Sign');
      if (sig) {
        pdfviewer.formDesignerModule.updateFormField(sig, {
          tooltip: 'Please sign here',
          thickness: 3,
          isRequired: true,
          isPrint: true,
          backgroundColor: 'white',
          borderColor: 'black'
        });
      }
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### Initial Field
•	UI: Tooltip, indicator text, thickness, required/visibility.
![Initial field edited from UI](../../../javascript-es6/images/ui-initial-edit.png)
•	API: [updateFormField()](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#updateformfields) for tooltip, required, colors, borders.
{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button @click="editInitial">Edit Initial</button>
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
  methods: {
    editInitial() {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      const fields = pdfviewer.retrieveFormFields();
      const init = fields.find(f => f.name === 'Initial');
      if (init) {
        pdfviewer.formDesignerModule.updateFormField(init, {
          tooltip: 'Add your initials',
          thickness: 2,
          isRequired: true,
          isPrint: true,
          backgroundColor: 'white',
          borderColor: 'black'
        });
      }
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

[View Sample on GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Create form fields](./create-form-fields)
- [Remove form Fields](./remove-form-fields)
- [Style form fields](./customize-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Form fields API](../form-fields-api)