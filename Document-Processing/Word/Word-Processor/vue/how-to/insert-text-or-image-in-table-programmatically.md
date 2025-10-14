---
layout: post
title: Insert text or image in table programmatically in Vue Document editor component | Syncfusion
description: Learn here all about Insert text or image in table programmatically in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Insert text or image in table programmatically 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Insert text or image in table programmatically in Vue Document editor component

Using Document editor API's, you can insert [`text`](../how-to/insert-text-in-current-position#insert-text-in-current-cursor-position) or [`image`](../image#images) in [`table`](../table#create-a-table) programmatically based on your requirement.

Use [`selection`](../how-to/move-selection-to-specific-position#selects-content-based-on-start-and-end-hierarchical-index) API's to navigate between rows and cells.

The following example illustrates how to create 2*2 table and then add text and image programmatically.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" :serviceUrl="serviceUrl" height="590px" id="container"
      :enableToolbar="true" v-on:created="onCreated.bind(this)"></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const container = ref(null);
const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

//Inject require modules.
provide('DocumentEditorContainer', [Toolbar])

const onCreated = function () {
  // To insert the table in cursor position
  container.value.ej2Instances.documentEditor.editor.insertTable(2, 2);
  // To insert the image at table first cell
  container.value.ej2Instances.documentEditor.editor.insertImage(
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4    //8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='
  );
  // To move the cursor to next cell
  moveCursorToNextCell();
  // To insert the image at table second cell
  container.value.ej2Instances.documentEditor.editor.insertImage(
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4    //8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='
  );
  // To move the cursor to next row
  moveCursorToNextRow();
  // To insert text in cursor position
  container.value.ej2Instances.documentEditor.editor.insertText('Text');
  // To move the cursor to next cell
  moveCursorToNextCell();
  // To insert text in cursor position
  container.value.ej2Instances.documentEditor.editor.insertText('Text');
}
const moveCursorToNextCell = function () {
  // To get current selection start offset
  let startOffset = container.value.ej2Instances.documentEditor.selection.startOffset;
  // Increasing cell index to consider next cell
  let cellIndex = parseInt(startOffset.substring(6, 7)) + 1;
  // Changing start offset
  startOffset =
    startOffset.substring(0, 6) +
    cellIndex.toString() +
    startOffset.substring(7, startOffset.length);
  // Navigating selection using select method
  container.value.ej2Instances.documentEditor.selection.select(startOffset, startOffset);
}
const moveCursorToNextRow = function () {
  // To get current selection start offset
  let startOffset = container.value.ej2Instances.documentEditor.selection.startOffset;
  // Increasing row index to consider next row
  let rowIndex = parseInt(startOffset.substring(4, 5)) + 1;
  let cellIndex =
    parseInt(startOffset.substring(6, 7)) != 0
      ? parseInt(startOffset.substring(6, 7)) - 1
      : 0;
  // Changing start offset
  startOffset =
    startOffset.substring(0, 4) +
    rowIndex.toString() +
    startOffset.substring(5, 6) +
    cellIndex +
    startOffset.substring(7, startOffset.length);
  // Navigating selection using select method
  container.value.ej2Instances.documentEditor.selection.select(startOffset, startOffset);
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" :serviceUrl="serviceUrl" height="590px" id="container"
      :enableToolbar="true" v-on:created="onCreated.bind(this)"></ejs-documenteditorcontainer>
  </div>
</template>
<script>
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent
  },
  data() {
    return {
      serviceUrl:
        'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/',
    };
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar]
  },
  methods: {
    onCreated: function () {
      // To insert the table in cursor position
      this.$refs.container.ej2Instances.documentEditor.editor.insertTable(2, 2);
      // To insert the image at table first cell
      this.$refs.container.ej2Instances.documentEditor.editor.insertImage(
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4    //8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='
      );
      // To move the cursor to next cell
      this.moveCursorToNextCell();
      // To insert the image at table second cell
      this.$refs.container.ej2Instances.documentEditor.editor.insertImage(
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4    //8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='
      );
      // To move the cursor to next row
      this.moveCursorToNextRow();
      // To insert text in cursor position
      this.$refs.container.ej2Instances.documentEditor.editor.insertText('Text');
      // To move the cursor to next cell
      this.moveCursorToNextCell();
      // To insert text in cursor position
      this.$refs.container.ej2Instances.documentEditor.editor.insertText('Text');
    },
    moveCursorToNextCell: function () {
      // To get current selection start offset
      let startOffset = this.$refs.container.ej2Instances.documentEditor.selection.startOffset;
      // Increasing cell index to consider next cell
      let cellIndex = parseInt(startOffset.substring(6, 7)) + 1;
      // Changing start offset
      startOffset =
        startOffset.substring(0, 6) +
        cellIndex.toString() +
        startOffset.substring(7, startOffset.length);
      // Navigating selection using select method
      this.$refs.container.ej2Instances.documentEditor.selection.select(startOffset, startOffset);
    },
    moveCursorToNextRow: function () {
      // To get current selection start offset
      let startOffset = this.$refs.container.ej2Instances.documentEditor.selection.startOffset;
      // Increasing row index to consider next row
      let rowIndex = parseInt(startOffset.substring(4, 5)) + 1;
      let cellIndex =
        parseInt(startOffset.substring(6, 7)) != 0
          ? parseInt(startOffset.substring(6, 7)) - 1
          : 0;
      // Changing start offset
      startOffset =
        startOffset.substring(0, 4) +
        rowIndex.toString() +
        startOffset.substring(5, 6) +
        cellIndex +
        startOffset.substring(7, startOffset.length);
      // Navigating selection using select method
      this.$refs.container.ej2Instances.documentEditor.selection.select(startOffset, startOffset);
    }
  }
};
</script>

{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

The output will be like below.
![Insert text or image in table programmatically](../images/table-image.png)