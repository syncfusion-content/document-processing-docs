---
layout: post
title: Free text annotation in Vue Pdfviewer component | Syncfusion
description: Learn about free text annotations in the Syncfusion Vue PDF Viewer (Essential JS 2): add, edit, delete, and default settings.
control: Free text annotation
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Free text annotation in Vue Pdfviewer component

The PDF Viewer control provides options to add, edit, and delete free text annotations.

## Add a free text annotation to the PDF document

Free text annotations can be added to the PDF document using the annotation toolbar.

* Click the **Edit Annotation** button in the PDF Viewer toolbar. The annotation toolbar appears below it.
* Select the **Free Text Annotation** button to enable free text annotation mode.
* Add text anywhere on the pages of the PDF document.

When in pan mode, selecting free text annotation switches the PDF Viewer to text select mode.

![Free text tool in the annotation toolbar](../images/freetext_tool.png)

The following example switches to free text annotation mode using a button click.


{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <button id="set">FreeText</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl"
      :documentLoad="documentLoad">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = 'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib';

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer])

const documentLoad = () => {
  document.getElementById('set').addEventListener('click', () => {
    this.$refs.pdfviewer.ej2Instances.annotation.setAnnotationMode('FreeText');
  });
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <button id="set">FreeText</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl"
      :documentLoad="documentLoad">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: 'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  },

  methods: {
    documentLoad() {
      document.getElementById('set').addEventListener('click', () => {
        this.$refs.pdfviewer.ej2Instances.annotation.setAnnotationMode('FreeText');
      });
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <button id="set">FreeText</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl"
      :documentLoad="documentLoad">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer])

const documentLoad = () => {
  document.getElementById('set').addEventListener('click', () => {
    this.$refs.pdfviewer.ej2Instances.annotation.setAnnotationMode('FreeText');
  });
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <button id="set">FreeText</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl"
      :documentLoad="documentLoad">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  },
  methods: {
    documentLoad() {
      document.getElementById('set').addEventListener('click', () => {
        this.$refs.pdfviewer.ej2Instances.annotation.setAnnotationMode('FreeText');
      });
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Add a free text annotation programmatically to the PDF document

The PDF Viewer library allows adding a free text annotation programmatically using the [addAnnotation()](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/annotation/#annotation) method.

Here is an example of adding a free text annotation programmatically using addAnnotation():

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="addAnnotation">Add Annotation programatically</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl"
      :addAnnotation="addAnnotation">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = 'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib';

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer])

const addAnnotation = function () {
  pdfviewer.value.ej2Instances.annotation.addAnnotation("FreeText", {
    offset: { x: 100, y: 150 },
    fontSize: 16,
    fontFamily: "Helvetica",
    pageNumber: 1,
    width: 200,
    height: 40,
    isLock: false,
    textAlignment: 'Center',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'red',
    fillColor: 'blue',
    fontColor: 'white',
    defaultText: "Syncfusion"
  });
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="addAnnotation">Add Annotation programatically</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl"
      :addAnnotation="addAnnotation">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: 'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  },
  methods: {
    addAnnotation: function () {
      this.$refs.pdfviewer.ej2Instances.annotation.addAnnotation("FreeText", {
        offset: { x: 100, y: 150 },
        fontSize: 16,
        fontFamily: "Helvetica",
        pageNumber: 1,
        width: 200,
        height: 40,
        isLock: false,
        textAlignment: 'Center',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'red',
        fillColor: 'blue',
        fontColor: 'white',
        defaultText: "Syncfusion"
      });
    }
  }
}
</script>


{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="addAnnotation">Add Annotation programatically</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl"
      :addAnnotation="addAnnotation">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer])

const addAnnotation = function () {
  pdfviewer.value.ej2Instances.annotation.addAnnotation("FreeText", {
    offset: { x: 100, y: 150 },
    fontSize: 16,
    fontFamily: "Helvetica",
    pageNumber: 1,
    width: 200,
    height: 40,
    isLock: false,
    textAlignment: 'Center',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'red',
    fillColor: 'blue',
    fontColor: 'white',
    defaultText: "Syncfusion"
  });
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="addAnnotation">Add Annotation programatically</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl"
      :addAnnotation="addAnnotation">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  },
  methods: {
    addAnnotation: function () {
      this.$refs.pdfviewer.ej2Instances.annotation.addAnnotation("FreeText", {
        offset: { x: 100, y: 150 },
        fontSize: 16,
        fontFamily: "Helvetica",
        pageNumber: 1,
        width: 200,
        height: 40,
        isLock: false,
        textAlignment: 'Center',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'red',
        fillColor: 'blue',
        fontColor: 'white',
        defaultText: "Syncfusion"
      });
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Change the content of an existing free text annotation programmatically

To change the content of an existing free text annotation programmatically, use the editAnnotation() method.

Here is an example of changing the content of a free text annotation using editAnnotation():

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="editAnnotation">Edit Annotation programatically</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = 'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib';

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer])

const editAnnotation = function () {
  const viewer = pdfviewer.value.ej2Instances;
  for (let i = 0; i < viewer.annotationCollection.length; i++) {
    if (viewer.annotationCollection[i].subject === "Text Box") {
      const width = viewer.annotationCollection[i].bounds.width;
      const height = viewer.annotationCollection[i].bounds.height;
      viewer.annotationCollection[i].bounds = { x: 100, y: 100, width: width, height: height };
      viewer.annotationCollection[i].dynamicText = 'syncfusion';
      viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="editAnnotation">Edit Annotation programatically</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: 'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  },
  methods: {
    editAnnotation: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      for (let i = 0; i < viewer.annotationCollection.length; i++) {
        if (viewer.annotationCollection[i].subject === "Text Box") {
          const width = viewer.annotationCollection[i].bounds.width;
          const height = viewer.annotationCollection[i].bounds.height;
          viewer.annotationCollection[i].bounds = { x: 100, y: 100, width: width, height: height };
          viewer.annotationCollection[i].dynamicText = 'syncfusion';
          viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
        }
      }
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="editAnnotation">Edit Annotation programatically</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer])

const editAnnotation = function () {
  const viewer = pdfviewer.value.ej2Instances;
  for (let i = 0; i < viewer.annotationCollection.length; i++) {
    if (viewer.annotationCollection[i].subject === "Text Box") {
      const width = viewer.annotationCollection[i].bounds.width;
      const height = viewer.annotationCollection[i].bounds.height;
      viewer.annotationCollection[i].bounds = { x: 100, y: 100, width: width, height: height };
      viewer.annotationCollection[i].dynamicText = 'syncfusion';
      viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="editAnnotation">Edit Annotation programatically</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  },
  methods: {
    editAnnotation: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      for (let i = 0; i < viewer.annotationCollection.length; i++) {
        if (viewer.annotationCollection[i].subject === "Text Box") {
          const width = viewer.annotationCollection[i].bounds.width;
          const height = viewer.annotationCollection[i].bounds.height;
          viewer.annotationCollection[i].bounds = { x: 100, y: 100, width: width, height: height };
          viewer.annotationCollection[i].dynamicText = 'syncfusion';
          viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
        }
      }
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

N> The current version of the PDF Viewer does not edit existing document text. New free text annotations can be added and modified within the document.

## Edit the properties of free text annotations

Font family, font size, styles, font color, text alignment, fill color, stroke color, border thickness, and opacity can be edited using the Font Family, Font Size, Font Color, Text Align, Font Style, Edit Color, Edit Stroke Color, Edit Thickness, and Edit Opacity tools in the annotation toolbar.

### Edit font family

Edit the font family by selecting a font in the Font Family tool.

![Change font family](../images/fontfamily.png)

### Edit font size

Edit the font size by selecting a size in the Font Size tool.

![Change font size](../images/fontsize.png)

### Edit font color

Edit the font color using the color palette in the Font Color tool.

![Change font color](../images/fontcolor.png)

### Edit the text alignment

Align text by selecting an option from the Text Align tool.

![FreeTextAnnotation](../images/textalign.png)

### Edit text styles

Edit text styles by selecting options in the Font Style tool.

![Change text styles](../images/fontstyle.png)

### Edit fill color

Edit the fill color using the color palette in the Edit Color tool.

![Change fill color](../images/fillcolor.png)

### Edit stroke color

Edit the stroke color using the color palette in the Edit Stroke Color tool.

![Change stroke color](../images/fontstroke.png)

### Edit thickness

Edit border thickness using the range slider in the Edit Thickness tool.

![Change border thickness](../images/fontthickness.png)

### Edit opacity

Edit opacity using the range slider in the Edit Opacity tool.

![Change opacity](../images/fontopacity.png)

## Set default properties during control initialization

Default properties for free text annotations can be set before creating the control using FreeTextSettings.

After changing default values, the selected values are applied. The following example sets default free text annotation settings.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl"
      :freeTextSettings="freetextSettings">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = 'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib';
const freetextSettings = { fillColor: 'green', borderColor: 'blue', fontColor: 'yellow' };

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer])

</script>

{% endhighlight %}
{% highlight html tabtitle="Optiions API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl"
      :freeTextSettings="freetextSettings">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: 'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib',
      freetextSettings: { fillColor: 'green', borderColor: 'blue', fontColor: 'yellow' }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  },
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl"
      :freeTextSettings="freetextSettings">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const freetextSettings = { fillColor: 'green', borderColor: 'blue', fontColor: 'yellow' }

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer])

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl"
      :freeTextSettings="freetextSettings">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      freetextSettings: { fillColor: 'green', borderColor: 'blue', fontColor: 'yellow' }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  }
}
</script>

{% endhighlight %}
{% endtabs %}