---
layout: post
title: Dialog in Vue Document editor component | Syncfusion
description: Learn here all about Dialog in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Dialog 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Dialog in Vue Document editor component

Document Editor provides dialog support to major operations such as insert or edit hyperlink, formatting text, paragraph, style, list and table properties.

## Font Dialog

Font dialog allows you to modify all text properties for selected contents at once such as bold, italic, underline, font size, font color, strikethrough, subscript and superscript.

Refer to the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/dialog-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/dialog-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/vue/dialog-cs1" %}

## Paragraph dialog

This dialog allows modifying the paragraph formatting for selection at once such as text alignment, indentation, and spacing.

To open this dialog, refer to the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/dialog-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/dialog-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/vue/dialog-cs2" %}

## Table dialog

This dialog allows creating and inserting a table at cursor position by specifying the required number of rows and columns.

To open this dialog, refer to the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/dialog-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/dialog-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/vue/dialog-cs3" %}

## Bookmark dialog

This dialog allows you to perform the following operations:

* View all bookmarks.
* Navigate to a bookmark.
* Create a bookmark at current selection.
* Delete an existing bookmark.
To open this dialog, refer to the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/dialog-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/dialog-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/vue/dialog-cs4" %}

## Hyperlink dialog

This dialog allows editing or inserting a hyperlink at cursor position.

To open this dialog, refer to the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/dialog-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/dialog-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/vue/dialog-cs5" %}

## Table of contents dialog

This dialog allows creating and inserting table of contents at cursor position. If the table of contents already exists at cursor position, you can customize its properties.

To open this dialog, refer to the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app" style="height:400px">
    <div>
      <button v-on:click='showTableOfContentsDialog'>Open dialog</button>
    </div>
    <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
      :enableTableOfContentsDialog='true' :enableSfdtExport='true' :enableEditorHistory="true" height="370px"
      style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script setup>
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor, TableOfContentsDialog, SfdtExport, EditorHistory } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const documenteditor = ref(null);
//Inject require modules
provide('DocumentEditor', [Selection, Editor, TableOfContentsDialog, EditorHistory, SfdtExport])

const showTableOfContentsDialog = function () {
  //Open the table of contents dialog.
  documenteditor.value.showDialog('TableOfContents');
}

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app" style="height:400px">
    <div>
      <button v-on:click='showTableOfContentsDialog'>Open dialog</button>
    </div>
    <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
      :enableTableOfContentsDialog='true' :enableEditorHistory="true" :enableSfdtExport='true' height="370px"
      style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script>
import { DocumentEditorComponent, Selection, Editor, TableOfContentsDialog, EditorHistory, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditor': DocumentEditorComponent
  },
  data: function () {
    return {
    };
  },
  provide: {
    //Inject require modules
    DocumentEditor: [Selection, Editor, TableOfContentsDialog, EditorHistory, SfdtExport]
  },
  methods: {
    showTableOfContentsDialog: function () {
      //Open the table of contents dialog.
      this.$refs.documenteditor.showDialog('TableOfContents');
    }
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Styles Dialog

This dialog allows managing the styles in a document. It will display all the styles in the document with options to modify the properties of the existing style or create new style with the help of ‘Style dialog’. Refer to the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app" style="height:400px">
    <div>
      <button v-on:click='showStylesDialog'>Open dialog</button>
    </div>
    <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
      :enableStylesDialog='true' :enableSfdtExport='true' :enableStyleDialog='true' :enableEditorHistory="true" height="370px"
      style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script setup>
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor, StylesDialog, StyleDialog, EditorHistory, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const documenteditor = ref(null);
//Inject require modules
provide('DocumentEditor', [Selection, Editor, StylesDialog, StyleDialog, EditorHistory, SfdtExport]);

const showStylesDialog = function () {
  //Open the styles dialog.
  documenteditor.value.showDialog('Styles');
}

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app" style="height:400px">
    <div>
      <button v-on:click='showStylesDialog'>Open dialog</button>
    </div>
    <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
      :enableStylesDialog='true' :enableSfdtExport='true' :enableStyleDialog='true' :enableEditorHistory="true" height="370px"
      style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script>
import { DocumentEditorComponent, Selection, Editor, StylesDialog, StyleDialog, EditorHistory, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditor': DocumentEditorComponent
  },
  data: function () {
    return {
    };
  },
  provide: {
    //Inject require modules
    DocumentEditor: [Selection, Editor, StylesDialog, StyleDialog, EditorHistory, SfdtExport]
  },
  methods: {
    showStylesDialog: function () {
      //Open the styles dialog.
      this.$refs.documenteditor.showDialog('Styles');
    }
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Style dialog

You can directly use this dialog for modifying any existing style or add new style by providing the style name.

To open this dialog, refer to the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app" style="height:400px">
    <div>
      <button v-on:click='showStyleDialog'>Open dialog</button>
    </div>
    <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
      :enableSfdtExport='true' :enableStyleDialog='true' :enableEditorHistory="true" height="370px" style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script setup>
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor, StyleDialog, StylesDialog, EditorHistory, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const documenteditor = ref(null);
provide('DocumentEditor', [Selection, Editor, StyleDialog, StylesDialog, EditorHistory, SfdtExport])

const showStyleDialog = function () {
  //Open styles dialog.
  documenteditor.value.showDialog('Style');
}

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app" style="height:400px">
    <div>
      <button v-on:click='showStyleDialog'>Open dialog</button>
    </div>
    <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
      :enableSfdtExport='true' :enableStyleDialog='true' :enableEditorHistory="true" height="370px" style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script>
import { DocumentEditorComponent, Selection, Editor, StyleDialog, StylesDialog, EditorHistory, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditor': DocumentEditorComponent
  },
  data: function () {
    return {
    };
  },
  provide: {
    //Inject require modules
    DocumentEditor: [Selection, Editor, StyleDialog, StylesDialog, EditorHistory, SfdtExport]
  },
  methods: {
    showStyleDialog: function () {
      //Open styles dialog.
      this.$refs.documenteditor.showDialog('Style');
    }
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## List dialog

This dialog allows creating a new list or modifying existing lists in the document.

To open this dialog, refer to the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app" style="height:400px">
    <div>
      <button v-on:click='showListDialog'>Open dialog</button>
    </div>
    <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
      :enableSfdtExport='true' :enableListDialog='true' height="370px" style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script setup>
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor, ListDialog, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const documenteditor = ref(null);
provide('DocumentEditor', [Selection, Editor, ListDialog, SfdtExport]);

const showListDialog = function () {
  //Open list dialog.
  documenteditor.value.showDialog('List');
}

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app" style="height:400px">
    <div>
      <button v-on:click='showListDialog'>Open dialog</button>
    </div>
    <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
      :enableSfdtExport='true' :enableListDialog='true' height="370px" style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script>
import { DocumentEditorComponent, Selection, Editor, ListDialog, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditor': DocumentEditorComponent
  },
  data: function () {
    return {
    };
  },
  provide: {
    //Inject require modules
    DocumentEditor: [Selection, Editor, ListDialog, SfdtExport]
  },
  methods: {
    showListDialog: function () {
      //Open list dialog.
      this.$refs.documenteditor.showDialog('List');
    }
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Borders and shading dialog

This dialog allows customizing the border style, border width, and background color of the table or selected cells.

To open this dialog, refer to the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app" style="height:400px">
    <div>
      <button v-on:click='showBordersAndShadingDialog'>Open dialog</button>
    </div>
    <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
      :enableSfdtExport='true' :enableBordersAndShadingDialog='true' height="370px" style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script setup>
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor, BordersAndShadingDialog, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const documenteditor = ref(null);
provide('DocumentEditor', [Selection, Editor, BordersAndShadingDialog, SfdtExport]);

const showBordersAndShadingDialog = function () {
  //Open borders and shading dialog.
  documenteditor.value.showDialog('BordersAndShading');
}

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app" style="height:400px">
    <div>
      <button v-on:click='showBordersAndShadingDialog'>Open dialog</button>
    </div>
    <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
      :enableSfdtExport='true' :enableBordersAndShadingDialog='true' height="370px"
      style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script>
import { DocumentEditorComponent, Selection, Editor, BordersAndShadingDialog, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditor': DocumentEditorComponent
  },
  data: function () {
    return {
    };
  },
  provide: {
    //Inject require modules
    DocumentEditor:  [Selection, Editor, BordersAndShadingDialog, SfdtExport]
  },
  methods: {
    showBordersAndShadingDialog: function () {
      //Open borders and shading dialog.
      this.$refs.documenteditor.showDialog('BordersAndShading');
    }
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Table options dialog

This dialog allows customizing the default cell margins and spacing between each cells of the selected table.

To open this dialog, refer to the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app" style="height:400px">
    <div>
      <button v-on:click='showTableOptionsDialog'>Open dialog</button>
    </div>
    <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
      :enableSfdtExport='true' :enableTableOptionsDialog='true' :enableTablePropertiesDialog='true' :enableEditorHistory="true" height="370px"
      style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script setup>
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor, TableOptionsDialog, TablePropertiesDialog, EditorHistory, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';
import { onMounted, provide, ref } from 'vue';

const documenteditor = ref(null);
provide('DocumentEditor', [Selection, Editor, TableOptionsDialog, TablePropertiesDialog, EditorHistory, SfdtExport]);

const showTableOptionsDialog = function () {
  //Open table options dialog.
  documenteditor.value.showDialog('TableOptions');
}

onMounted(function () {
  documenteditor.value.ej2Instances.editor.insertTable(2, 2);
})
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app" style="height:400px">
    <div>
      <button v-on:click='showTableOptionsDialog'>Open dialog</button>
    </div>
    <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
      :enableSfdtExport='true' :enableTableOptionsDialog='true' :enableTablePropertiesDialog='true' :enableEditorHistory="true" height="370px"
      style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script>
import { DocumentEditorComponent, Selection, Editor, TableOptionsDialog, TablePropertiesDialog, EditorHistory, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditor': DocumentEditorComponent
  },
  data: function () {
    return {
    };
  },
  provide: {
    //Inject require modules
    DocumentEditor: [Selection, Editor, TableOptionsDialog, TablePropertiesDialog, EditorHistory, SfdtExport]
  },
  methods: {
    showTableOptionsDialog: function () {
      //Open table options dialog.
      this.$refs.documenteditor.showDialog('TableOptions');
    }
  },
  mounted() {
    this.$refs.documenteditor.ej2Instances.editor.insertTable(2, 2);
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Table properties dialog

This dialog allows customizing the table, row, and cell properties of the selected table.

To open this dialog, refer to the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app" style="height:400px">
    <div>
      <button v-on:click='showTablePropertiesDialog'>Open dialog</button>
    </div>
    <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
      :enableSfdtExport='true' :enableTablePropertiesDialog='true' :enableEditorHistory="true" height="370px"
      style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script setup>
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor, TablePropertiesDialog, EditorHistory, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';
import { onMounted, provide, ref } from 'vue';

const documenteditor = ref(null);
provide('DocumentEditor', [Selection, Editor, TablePropertiesDialog, EditorHistory, SfdtExport]);
const showTablePropertiesDialog = function () {
  //Open table properties dialog.
  documenteditor.value.showDialog('TableProperties');
}

onMounted(function () {
  documenteditor.value.ej2Instances.editor.insertTable(2, 2);
})
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app" style="height:400px">
    <div>
      <button v-on:click='showTablePropertiesDialog'>Open dialog</button>
    </div>
    <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
      :enableSfdtExport='true' :enableTablePropertiesDialog='true' :enableEditorHistory="true" height="370px"
      style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script>
import { DocumentEditorComponent, Selection, Editor, TablePropertiesDialog, EditorHistory, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditor': DocumentEditorComponent
  },
  data: function () {
    return {
    };
  },
  provide: {
    DocumentEditor: [Selection, Editor, TablePropertiesDialog, EditorHistory, SfdtExport]
  },
  methods: {
    showTablePropertiesDialog: function () {
      //Open table properties dialog.
      this.$refs.documenteditor.showDialog('TableProperties');
    }
  },
  mounted() {
    this.$refs.documenteditor.ej2Instances.editor.insertTable(2, 2);
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Page setup dialog

This dialog allows customizing margins, size, and layout options for pages of the section.

To open this dialog, refer to the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/dialog-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/dialog-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/vue/dialog-cs6" %}

## See Also

* [Feature module](./feature-module)