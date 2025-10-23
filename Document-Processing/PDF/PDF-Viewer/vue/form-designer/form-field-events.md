---
layout: post
title: Form Field Events in Vue Pdfviewer control | Syncfusion
description: Learn here all about different form field in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Form Field Events
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# PDF Viewer Form Field events in Vue PDF Viewer control

The PDF Viewer control provides the support to different Form Field events. The Form Field events supported by the PDF Viewer Control are:

| Form Field events | Description |
|---|---|
| formFieldAdd | Event trigger when a form field is added.|
| formFieldClick | Events trigger when the form field is selected.|
| formFieldDoubleClick | Events trigger when the form field is double-clicked.|
| formFieldFocusOut | Events trigger when focus out from the form fields.|
| formFieldMouseLeave | Events trigger when the mouse cursor leaves the form field.|
| formFieldMouseOver | Events trigger when the mouse cursor is over a form field.|
| formFieldMove | Events trigger when a form field is moved.|
| formFieldPropertiesChange | Events trigger when a property of form field is changed.|
| formFieldRemove | Events trigger when a form field is removed.|
| formFieldResize | Events trigger when a form field is resized.|
| formFieldSelect | Events trigger when a form field is selected.|
| formFieldUnselect | Events trigger when a form field is unselected.|
| validateFormFields | Events trigger when validation is failed.|

## formFieldAdd event

The [formFieldAdd](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/formfieldaddargs/) event is triggered when a new form field is added, either programmatically or through user interaction. The event arguments provide the necessary information about the form field addition.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :formFieldAdd="formFieldAdded"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])

const formFieldAdded = function (args) {
    console.log('form field page number: ' + args.pageIndex);
    console.log('form field event name: ' + args.name);
    console.log('form field data: ', args.field);
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :formFieldAdd="formFieldAdded"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    formFieldAdded: function (args) {
        console.log('form field page number: ' + args.pageIndex);
        console.log('form field event name: ' + args.name);
        console.log('form field data: ', args.field);
    },
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## formFieldClick event

The [formFieldClick](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/formFieldClickArgs/) event is triggered when a form field is clicked. The event arguments provide the necessary information about the form field click event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :formFieldClick="formFieldClicked"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])

const formFieldClicked = function (args) {
    console.log('Form field event name: ' + args.name);
    console.log('Is form field cancel: ' + args.cancel);
    console.log('Form field data: ',  args.field);
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :formFieldClick="formFieldClicked"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    formFieldClicked: function (args) {
        console.log('Form field event name: ' + args.name);
        console.log('Is form field cancel: ' + args.cancel);
        console.log('Form field data: ',  args.field);
    },
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## formFieldDoubleClick event

The [formFieldDoubleClick](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/formFieldDoubleClickArgs/) event is triggered when a form field is double-clicked. The event arguments provide the necessary information about the form field double-click event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :formFieldDoubleClick="formFieldDoubleClicked"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])

const formFieldDoubleClicked = function (args) {
    console.log('Form field event name: ' + args.name);
    console.log('Is form field cancel: ' + args.cancel);
    console.log('Form field data: ',  args.field);
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :formFieldDoubleClick="formFieldDoubleClicked"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    formFieldDoubleClicked: function (args) {
        console.log('Form field event name: ' + args.name);
        console.log('Is form field cancel: ' + args.cancel);
        console.log('Form field data: ',  args.field);
    },
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## formFieldFocusOut event

The [formFieldFocusOut](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/formfieldfocusouteventargs/) event is triggered when a form field loses focus. The event arguments provide the necessary information about the form field focus out event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :formFieldFocusOut="formFieldFocusOuted"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])

const formFieldFocusOuted = function (args) {
    console.log('Form field event name: ' + args.name);
    console.log('Is form field cancel: ' + args.cancel);
    console.log('Form field data: ',  args.field);
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :formFieldFocusOut="formFieldFocusOuted"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    formFieldFocusOuted: function (args) {
        console.log('Form field event name: ' + args.name);
        console.log('Is form field cancel: ' + args.cancel);
        console.log('Form field data: ',  args.field);
    },
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## formFieldMouseLeave event

The [formFieldMouseLeave](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/formfieldmouseleaveargs/) event is triggered when the mouse leaves a form field. The event arguments provide the necessary information about the form field mouse leave event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :formFieldMouseLeave="formFieldMouseLeaved"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])

const formFieldMouseLeaved = function (args) {
    console.log('Form field event name: ' + args.name);
    console.log('Is form field cancel: ' + args.cancel);
    console.log('Form field data: ',  args.field);
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :formFieldMouseLeave="formFieldMouseLeaved"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    formFieldMouseLeaved: function (args) {
        console.log('Form field event name: ' + args.name);
        console.log('Is form field cancel: ' + args.cancel);
        console.log('Form field data: ',  args.field);
    },
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## formFieldMouseOver event

The [formFieldMouseOver](https://helpej2.syncfusion.com/vue/documentation/api/pdfviewer/formFieldMouseoverArgs/) event is triggered when the mouse hovers over a form field. The event arguments provide the necessary information about the form field mouse over event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :formFieldMouseover="formFieldMouseovered"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])

const formFieldMouseovered = function (args) {
    console.log('form field page number: ', args.pageIndex);
    console.log('form field event name: ' + args.name);
    console.log('form field data: ', args.field);
    console.log(' mouse over x position '+ args.X + ' mouse over y position '+ args.Y );
    console.log(' mouse over X position respect to the page '+ args.pageX + ' mouse over Y position respect to the page '+ args.pageY);
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :formFieldMouseover="formFieldMouseovered"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    formFieldMouseovered: function (args) {
        console.log('form field page number: ', args.pageIndex);
        console.log('form field event name: ' + args.name);
        console.log('form field data: ', args.field);
        console.log(' mouse over x position '+ args.X + ' mouse over y position '+ args.Y );
        console.log(' mouse over X position respect to the page '+ args.pageX + ' mouse over Y position respect to the page '+ args.pageY);
    },
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## formFieldMove event

The [formFieldMove](https://helpej2.syncfusion.com/vue/documentation/api/pdfviewer/formFieldMoveArgs/) event is triggered when the mouse moves inside a form field. The event arguments provide the necessary information about the form field mouse move event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :formFieldMove="formFieldMoved"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])

const formFieldMoved = function (args) {
    console.log('form field page number: ', args.pageIndex);
    console.log('form field event name: ' + args.name);
    console.log('form field data: ', args.field);
    console.log('mouse current position '+ args.currentPosition);
    console.log('mouse current position '+ args.previousPosition);
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :formFieldMove="formFieldMoved"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    formFieldMoved: function (args) {
        console.log('form field page number: ', args.pageIndex);
        console.log('form field event name: ' + args.name);
        console.log('form field data: ', args.field);
        console.log('mouse current position '+ args.currentPosition);
        console.log('mouse current position '+ args.previousPosition);
    },
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## formFieldPropertiesChange event

The [formFieldPropertiesChange](https://helpej2.syncfusion.com/vue/documentation/api/pdfviewer/formFieldPropertiesChangeArgs/)  event is triggered when the properties of a form field are changed. The event arguments provide the necessary information about which property of the form field has been changed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :formFieldPropertiesChange="formFieldPropertiesChanged"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])

const formFieldPropertiesChanged = function (args) {
    console.log('form field page number: ', args.pageIndex);
    console.log('form field event name: ' + args.name);
    console.log('form field data: ', args.field);
    console.log('Whether form field alignment changed '+ args.isAlignmentChanged);
    console.log('Whether form field backgropund color changed '+ args.isBackgroundColorChanged);
    console.log('Whether form field border color changed '+ args.isBorderColorChanged);
    console.log('Whether form field border width changed '+ args.isBorderWidthChanged);
    console.log('Whether form field color changed changed '+ args.isColorChanged);
    console.log('Whether form field custom data changed '+ args.isCustomDataChanged);
    console.log('Whether form field font family changed '+ args.isFontFamilyChanged);
    console.log('Whether form field font size changed '+ args.isFontSizeChanged);
    console.log('Whether form field font style changed '+ args.isFontStyleChanged);
    console.log('Whether form field maximum length changed '+ args.isMaxLengthChanged);
    console.log('Whether form field name changed '+ args.isNameChanged);
    console.log('Whether form field readonly changed '+ args.isReadOnlyChanged);
    console.log('Whether form field required changed '+ args.isRequiredChanged);
    console.log('Whether form field print changed '+ args.isPrintChanged);
    console.log('Whether form field tool tip changed '+ args.isToolTipChanged);
    console.log('Whether form field visiblity changed '+ args.isVisibilityChanged);
    console.log('Whether form field value changed '+ args.isValueChanged);
    console.log('Whether form field new value changed '+ args.newValue);
    console.log('Whether form field old valuue changed '+ args.oldValue);
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :formFieldPropertiesChange="formFieldPropertiesChanged"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    formFieldPropertiesChanged: function (args) {
        console.log('form field page number: ', args.pageIndex);
        console.log('form field event name: ' + args.name);
        console.log('form field data: ', args.field);
        console.log('Whether form field alignment changed '+ args.isAlignmentChanged);
        console.log('Whether form field backgropund color changed '+ args.isBackgroundColorChanged);
        console.log('Whether form field border color changed '+ args.isBorderColorChanged);
        console.log('Whether form field border width changed '+ args.isBorderWidthChanged);
        console.log('Whether form field color changed changed '+ args.isColorChanged);
        console.log('Whether form field custom data changed '+ args.isCustomDataChanged);
        console.log('Whether form field font family changed '+ args.isFontFamilyChanged);
        console.log('Whether form field font size changed '+ args.isFontSizeChanged);
        console.log('Whether form field font style changed '+ args.isFontStyleChanged);
        console.log('Whether form field maximum length changed '+ args.isMaxLengthChanged);
        console.log('Whether form field name changed '+ args.isNameChanged);
        console.log('Whether form field readonly changed '+ args.isReadOnlyChanged);
        console.log('Whether form field required changed '+ args.isRequiredChanged);
        console.log('Whether form field print changed '+ args.isPrintChanged);
        console.log('Whether form field tool tip changed '+ args.isToolTipChanged);
        console.log('Whether form field visiblity changed '+ args.isVisibilityChanged);
        console.log('Whether form field value changed '+ args.isValueChanged);
        console.log('Whether form field new value changed '+ args.newValue);
        console.log('Whether form field old valuue changed '+ args.oldValue);
    },
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## formFieldRemove event

The [formFieldRemove](https://helpej2.syncfusion.com/vue/documentation/api/pdfviewer/formFieldRemoveArgs/) event is triggered when a form field is removed from the PDF. The event arguments provide the necessary information about which form field has been removed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :formFieldRemove="formFieldRemoved"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])

const formFieldRemoved = function (args) {
    console.log('form field page number: ', args.pageIndex);
    console.log('form field event name: ' + args.name);
    console.log('form field data: ', args.field);
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :formFieldRemove="formFieldRemoved"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    formFieldRemoved: function (args) {
        console.log('form field page number: ', args.pageIndex);
        console.log('form field event name: ' + args.name);
        console.log('form field data: ', args.field);
    },
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## formFieldResize event

The [formFieldResize](https://helpej2.syncfusion.com/vue/documentation/api/pdfviewer/formFieldResizeArgs/) events are triggered when a form field in a PDF is resized. These events provide the relevant details about the specific form field that has been resized.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :formFieldResize="formFieldResized"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])

const formFieldResized = function (args) {
    console.log('form field page number: ', args.pageIndex);
    console.log('form field event name: ' + args.name);
    console.log('form field data: ', args.field);
    console.log('form field current position: ', args.currentPosition);
    console.log('form field previous position: ', args.previousPosition);
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :formFieldResize="formFieldResized"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    formFieldResized: function (args) {
        console.log('form field page number: ', args.pageIndex);
        console.log('form field event name: ' + args.name);
        console.log('form field data: ', args.field);
        console.log('form field current position: ', args.currentPosition);
        console.log('form field previous position: ', args.previousPosition);
    },
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## formFieldSelect event

The [formFieldSelect](https://helpej2.syncfusion.com/vue/documentation/api/pdfviewer/formFieldSelectArgs/) events are triggered when a form field in a PDF is selected. These events provide the necessary details about the specific form field that has been selected.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :formFieldSelect="formFieldSelected"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])

const formFieldSelected = function (args) {
    console.log('form field page number: ', args.pageIndex);
    console.log('form field event name: ' + args.name);
    console.log('form field data: ', args.field);
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :formFieldSelect="formFieldSelected"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    formFieldSelected: function (args) {
        console.log('form field page number: ', args.pageIndex);
        console.log('form field event name: ' + args.name);
        console.log('form field data: ', args.field);
    },
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## formFieldUnselect event

The [formFieldUnselect](https://helpej2.syncfusion.com/vue/documentation/api/pdfviewer/formFieldUnselectArgs/) events are triggered when a form field in a PDF is unselected. These events provide the necessary details about the specific form field that has been unselected.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :formFieldUnselect="formFieldUnselected"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])

const formFieldUnselected = function (args) {
    console.log('form field page number: ', args.pageIndex);
    console.log('form field event name: ' + args.name);
    console.log('form field data: ', args.field);
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :formFieldUnselect="formFieldUnselected"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    formFieldUnselected: function (args) {
        console.log('form field page number: ', args.pageIndex);
        console.log('form field event name: ' + args.name);
        console.log('form field data: ', args.field);
    },
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## validateFormFields event

The [validateFormFields](https://helpej2.syncfusion.com/vue/documentation/api/pdfviewer/validateFormFieldsArgs/) events are triggered when a required form field is left unfilled before downloading the PDF. These events provide the necessary information for validating which form fields are incomplete.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :validateFormFields="validateFormField"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])

const validateFormField = function (args) {
    console.log('form field event name: ' + args.name);
    console.log('form field document name: ' + args.documentName);
    console.log('form field data: ', args.formField);
    console.log('non fillable form field details: ', args.nonFillableFields);
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :validateFormFields="validateFormField"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    validateFormField: function (args) {
        console.log('form field event name: ' + args.name);
        console.log('form field document name: ' + args.documentName);
        console.log('form field data: ', args.formField);
        console.log('non fillable form field details: ', args.nonFillableFields);
    },
  }
}
</script>

{% endhighlight %}
{% endtabs %}