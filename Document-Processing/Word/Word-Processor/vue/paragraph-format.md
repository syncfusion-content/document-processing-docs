---
layout: post
title: Paragraph format in Vue Document editor component | Syncfusion
description: Learn here all about Paragraph format in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Paragraph format 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Paragraph format in Vue Document editor component

Document Editor supports various paragraph formatting options such as text alignment, indentation, paragraph spacing, and more.

## Indentation

You can modify the left or right indentation of selected paragraphs using the following sample code.

```javascript
this.$refs.documenteditor.ej2Instances.selection.paragraphFormat.leftIndent= 24;
this.$refs.documenteditor.ej2Instances.selection.paragraphFormat.rightIndent= 24;
```

## Special indentation

You can define special indent for first line of the paragraph using the following sample code.

```javascript
this.$refs.documenteditor.ej2Instances.selection.paragraphFormat.firstLineIndent= 24;
```

## Increase indent

You can increase the left indent of selected paragraphs by a factor of 36 points using the following sample code.

```javascript
this.$refs.documenteditor.ej2Instances.editor.increaseIndent()
```

## Decrease indent

You can decrease the left indent of selected paragraphs by a factor of 36 points using the following sample code.

```javascript
this.$refs.documenteditor.ej2Instances.editor.decreaseIndent()
```

## Text alignment

You can get or set the text alignment of selected paragraphs using the following sample code.

```javascript
this.$refs.documenteditor.ej2Instances.selection.paragraphFormat.textAlignment= 'Center' | 'Left' | 'Right' | 'Justify';
```

You can toggle the text alignment of selected paragraphs by specifying a value using the following sample code.

```javascript
this.$refs.documenteditor.ej2Instances.editor.toggleTextAlignment('Center' | 'Left' | 'Right' | 'Justify');
```

## Line spacing and its type

You can define the line spacing and its type for selected paragraphs using the following sample code.

```javascript
//Set line spacing type.
this.$refs.documenteditor.ej2Instances.selection.paragraphFormat.lineSpacingType='AtLeast';

//Set line spacing.
this.$refs.documenteditor.ej2Instances.selection.paragraphFormat.lineSpacing= 6;
```

## Paragraph spacing

You can define the spacing before or after the paragraph by using the following sample code.

```javascript
//Set before spacing.
this.$refs.documenteditor.ej2Instances.selection.paragraphFormat.beforeSpacing= 24;

//Set after spacing.
this.$refs.documenteditor.ej2Instances.selection.paragraphFormat.afterSpacing= 24;
```

You can also set automatic spacing before and after the paragraph by using the following sample code.

```ts
this.$refs.documenteditor.ej2Instances.selection.paragraphFormat.spaceBeforeAuto = true;
this.$refs.documenteditor.ej2Instances.selection.paragraphFormat.spaceAfterAuto = true;
```

>Note: If auto spacing property is enabled, then value defined in the `beforeSpacing` and `afterSpacing` property will not be considered.

## Pagination properties

You can enable or disable the following pagination properties for the paragraphs in a Word document.

* Widow/Orphan control - whether the first and last lines of the paragraph are to remain on the same page as the rest of the paragraph when paginating the document.
* Keep with next - whether the specified paragraph remains on the same page as the paragraph that follows it while paginating the document.
* Keep lines together - whether all lines in the specified paragraphs remain on the same page while paginating the document.

The following example code illustrates how to enable or disable these pagination properties for the selected paragraphs.

```javascript
this.$refs.documenteditor.selection.paragraphFormat.widowControl = false;
this.$refs.documenteditor.selection.paragraphFormat.keepWithNext = true;
this.$refs.documenteditor.selection.paragraphFormat.keepLinesTogether = true;
```

## Paragraph Border

You can apply borders to the paragraphs in a Word document. Using borders, decorate the paragraphs to set them apart from other paragraphs in the document.

The following example code illustrates how to apply box border for the selected paragraphs.

```ts
// left
this.$refs.documenteditor.selection.paragraphFormat.borders.left.lineStyle = 'Single';
this.$refs.documenteditor.selection.paragraphFormat.borders.left.lineWidth = 3;
this.$refs.documenteditor.selection.paragraphFormat.borders.left.color = "#000000";

//right
this.$refs.documenteditor.selection.paragraphFormat.borders.right.lineStyle = 'Single';
this.$refs.documenteditor.selection.paragraphFormat.borders.right.lineWidth = 3;
this.$refs.documenteditor.selection.paragraphFormat.borders.right.color = "#000000";

//top
this.$refs.documenteditor.selection.paragraphFormat.borders.top.lineStyle = 'Single';
this.$refs.documenteditor.selection.paragraphFormat.borders.top.lineWidth = 3;
this.$refs.documenteditor.selection.paragraphFormat.borders.top.color = "#000000";

//bottom
this.$refs.documenteditor.selection.paragraphFormat.borders.bottom.lineStyle = 'Single';
this.$refs.documenteditor.selection.paragraphFormat.borders.bottom.lineWidth = 3;
this.$refs.documenteditor.selection.paragraphFormat.borders.bottom.color = "#000000";
```

Note: At present, the Document editor component displays all the border styles as single line. But you can apply any border style and get the proper display in Microsoft Word app when opening the exported Word document.

## Show or Hide Paragraph marks

You can show or hide the hidden formatting symbols like spaces, tab, paragraph marks, and breaks in Document editor component. These marks help identify the start and end of a paragraph and all the hidden formatting symbols in a Word document.

The following example code illustrates how to show or hide paragraph marks.

```ts
this.$refs.documenteditor.documentEditorSettings.showHiddenMarks = true;
```

## Toolbar with paragraph formatting options

The following sample demonstrates the paragraph formatting options using a toolbar.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app" style="height:330px">
    <div>
      <ejs-toolbar v-bind:clicked='toolbarButtonClick'>
        <e-items>
          <e-item prefixIcon='e-de-ctnr-alignleft e-icons' id='AlignLeft' tooltipText='Align Left'></e-item>
          <e-item prefixIcon='e-de-ctnr-aligncenter e-icons' id='AlignCenter' tooltipText='Align Center'></e-item>
          <e-item prefixIcon='e-de-ctnr-alignright e-icons' id='AlignRight' tooltipText='Align Right'></e-item>
          <e-item prefixIcon='e-de-ctnr-justify e-icons' id='Justify' tooltipText='Justify'></e-item>
          <e-item prefixIcon='e-de-ctnr-increaseindent e-icons' id='IncreaseIndent' tooltipText='Increase Indent'></e-item>
          <e-item prefixIcon='e-de-ctnr-decreaseindent e-icons' id='DecreaseIndent' tooltipText='Decrease Indent'></e-item>
          <e-item type='Separator'></e-item>
          <e-item prefixIcon='e-de-ctnr-clearall e-icons' id='ClearFormat' tooltipText='ClearFormatting'></e-item>
          <e-item type='Separator'></e-item>
          <e-item prefixIcon='e-de-e-paragraph-mark e-icons' id='ShowParagraphMark'
            tooltipText='Show the hidden characters like spaces, tab, paragraph marks, and breaks.(Ctrl + *)'></e-item>
        </e-items>
      </ejs-toolbar>
    </div>
    <ejs-documenteditor ref="documenteditor" v-bind:selectionChange='onSelectionChange' :enableSelection='true'
      :isReadOnly='false' :enableEditor='true' :enableEditorHistory='true' :enableSfdtExport='true'
      :enableContextMenu='true' height="370px" style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script setup>
import { DocumentEditorComponent as EjsDocumenteditor, Editor, Selection, EditorHistory, SfdtExport, ContextMenu } from '@syncfusion/ej2-vue-documenteditor';
import { ToolbarComponent as EjsToolbar, ItemsDirective as EItems, ItemDirective as EItem } from "@syncfusion/ej2-vue-navigations";
import { provide, ref } from 'vue';

const documenteditor = ref(null);
provide('DocumentEditor', [Editor, Selection, EditorHistory, SfdtExport, ContextMenu])

const toolbarButtonClick = function (arg) {
  switch (arg.item.id) {
    case 'AlignLeft':
      //Toggle the Left alignment for selected or current paragraph
      documenteditor.value.ej2Instances.editor.toggleTextAlignment('Left');
      break;
    case 'AlignRight':
      //Toggle the Right alignment for selected or current paragraph
      documenteditor.value.ej2Instances.editor.toggleTextAlignment('Right');
      break;
    case 'AlignCenter':
      //Toggle the Center alignment for selected or current paragraph
      documenteditor.value.ej2Instances.editor.toggleTextAlignment('Center');
      break;
    case 'Justify':
      //Toggle the Justify alignment for selected or current paragraph
      documenteditor.value.ej2Instances.editor.toggleTextAlignment('Justify');
      break;
    case 'IncreaseIndent':
      //Increase the left indent of selected or current paragraph
      documenteditor.value.ej2Instances.editor.increaseIndent();
      break;
    case 'DecreaseIndent':
      //Decrease the left indent of selected or current paragraph
      documenteditor.value.ej2Instances.editor.decreaseIndent();
      break;
    case 'ClearFormat':
      documenteditor.value.ej2Instances.editor.clearFormatting();
      break;
    case 'ShowParagraphMark':
      //Show or hide the hidden characters like spaces, tab, paragraph marks, and breaks.
      documenteditor.value.ej2Instances.documentEditorSettings.showHiddenMarks = !documenteditor.value.ej2Instances.documentEditorSettings.showHiddenMarks;
      break;
  }
}
const onSelectionChange = function () {
  if (documenteditor.value.ej2Instances.selection) {
    var paragraphFormat = documenteditor.value.ej2Instances.selection.paragraphFormat;
    var toggleBtnId = ['AlignLeft', 'AlignCenter', 'AlignRight', 'Justify', 'ShowParagraphMark'];
    for (var i = 0; i < toggleBtnId.length; i++) {
      let toggleBtn = document.getElementById(toggleBtnId[i]);
      //Remove toggle state.
      toggleBtn.classList.remove('e-btn-toggle');
    }
    //Add toggle state based on selection paragraph format.
    if (paragraphFormat.textAlignment === 'Left') {
      document.getElementById('AlignLeft').classList.add('e-btn-toggle');
    } else if (paragraphFormat.textAlignment === 'Right') {
      document.getElementById('AlignRight').classList.add('e-btn-toggle');
    } else if (paragraphFormat.textAlignment === 'Center') {
      document.getElementById('AlignCenter').classList.add('e-btn-toggle');
    } else {
      document.getElementById('Justify').classList.add('e-btn-toggle');
    }
    if (documenteditor.value.ej2Instances.documentEditorSettings.showHiddenMarks) {
      document.getElementById('ShowParagraphMark').classList.add('e-btn-toggle');
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
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app" style="height:330px">
    <div>
      <ejs-toolbar v-bind:clicked='toolbarButtonClick'>
        <e-items>
          <e-item prefixIcon='e-de-ctnr-alignleft e-icons' id='AlignLeft' tooltipText='Align Left'></e-item>
          <e-item prefixIcon='e-de-ctnr-aligncenter e-icons' id='AlignCenter' tooltipText='Align Center'></e-item>
          <e-item prefixIcon='e-de-ctnr-alignright e-icons' id='AlignRight' tooltipText='Align Right'></e-item>
          <e-item prefixIcon='e-de-ctnr-justify e-icons' id='Justify' tooltipText='Justify'></e-item>
          <e-item prefixIcon='e-de-ctnr-increaseindent e-icons' id='IncreaseIndent' tooltipText='Increase Indent'></e-item>
          <e-item prefixIcon='e-de-ctnr-decreaseindent e-icons' id='DecreaseIndent' tooltipText='Decrease Indent'></e-item>
          <e-item type='Separator'></e-item>
          <e-item prefixIcon='e-de-ctnr-clearall e-icons' id='ClearFormat' tooltipText='ClearFormatting'></e-item>
          <e-item type='Separator'></e-item>
          <e-item prefixIcon='e-de-e-paragraph-mark e-icons' id='ShowParagraphMark'
            tooltipText='Show the hidden characters like spaces, tab, paragraph marks, and breaks.(Ctrl + *)'></e-item>
        </e-items>
      </ejs-toolbar>
    </div>
    <ejs-documenteditor ref="documenteditor" v-bind:selectionChange='onSelectionChange' :enableSelection='true'
      :isReadOnly='false' :enableEditor='true' :enableEditorHistory='true' :enableSfdtExport='true'
      :enableContextMenu='true' height="370px" style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script>
import { DocumentEditorComponent, Editor, Selection, EditorHistory, SfdtExport, ContextMenu } from '@syncfusion/ej2-vue-documenteditor';
import { ToolbarComponent, ItemDirective, ItemsDirective } from "@syncfusion/ej2-vue-navigations";

export default {
  components: {
    'ejs-documenteditor': DocumentEditorComponent,
    'ejs-toolbar': ToolbarComponent,
    'e-items': ItemsDirective,
    'e-item': ItemDirective
  },
  data: function () {
    return {
    };
  },
  provide: {
    DocumentEditor: [Editor, Selection, EditorHistory, SfdtExport, ContextMenu]
  },
  methods: {
    toolbarButtonClick: function (arg) {
      switch (arg.item.id) {
        case 'AlignLeft':
          //Toggle the Left alignment for selected or current paragraph
          this.$refs.documenteditor.ej2Instances.editor.toggleTextAlignment('Left');
          break;
        case 'AlignRight':
          //Toggle the Right alignment for selected or current paragraph
          this.$refs.documenteditor.ej2Instances.editor.toggleTextAlignment('Right');
          break;
        case 'AlignCenter':
          //Toggle the Center alignment for selected or current paragraph
          this.$refs.documenteditor.ej2Instances.editor.toggleTextAlignment('Center');
          break;
        case 'Justify':
          //Toggle the Justify alignment for selected or current paragraph
          this.$refs.documenteditor.ej2Instances.editor.toggleTextAlignment('Justify');
          break;
        case 'IncreaseIndent':
          //Increase the left indent of selected or current paragraph
          this.$refs.documenteditor.ej2Instances.editor.increaseIndent();
          break;
        case 'DecreaseIndent':
          //Decrease the left indent of selected or current paragraph
          this.$refs.documenteditor.ej2Instances.editor.decreaseIndent();
          break;
        case 'ClearFormat':
          this.$refs.documenteditor.ej2Instances.editor.clearFormatting();
          break;
        case 'ShowParagraphMark':
          //Show or hide the hidden characters like spaces, tab, paragraph marks, and breaks.
          this.$refs.documenteditor.ej2Instances.documentEditorSettings.showHiddenMarks = !this.$refs.documenteditor.ej2Instances.documentEditorSettings.showHiddenMarks;
          break;
      }
    },
    onSelectionChange: function () {
      if (this.$refs.documenteditor.ej2Instances.selection) {
        var paragraphFormat = this.$refs.documenteditor.ej2Instances.selection.paragraphFormat;
        var toggleBtnId = ['AlignLeft', 'AlignCenter', 'AlignRight', 'Justify', 'ShowParagraphMark'];
        for (var i = 0; i < toggleBtnId.length; i++) {
          let toggleBtn = document.getElementById(toggleBtnId[i]);
          //Remove toggle state.
          toggleBtn.classList.remove('e-btn-toggle');
        }
        //Add toggle state based on selection paragraph format.
        if (paragraphFormat.textAlignment === 'Left') {
          document.getElementById('AlignLeft').classList.add('e-btn-toggle');
        } else if (paragraphFormat.textAlignment === 'Right') {
          document.getElementById('AlignRight').classList.add('e-btn-toggle');
        } else if (paragraphFormat.textAlignment === 'Center') {
          document.getElementById('AlignCenter').classList.add('e-btn-toggle');
        } else {
          document.getElementById('Justify').classList.add('e-btn-toggle');
        }
        if (this.$refs.documenteditor.ej2Instances.documentEditorSettings.showHiddenMarks) {
          document.getElementById('ShowParagraphMark').classList.add('e-btn-toggle');
        }
      }
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

## See Also

* [Feature modules](./feature-module)
* [Paragraph dialog](./dialog#paragraph-dialog)
* [Keyboard shortcuts](./keyboard-shortcut#paragraph-formatting)