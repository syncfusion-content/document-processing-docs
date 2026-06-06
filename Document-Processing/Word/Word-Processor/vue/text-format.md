---
layout: post
title: Text format in Vue Document editor component | Syncfusion
description: Learn here all about Text format in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Text format 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Text format in Vue Document editor component

Document Editor supports several formatting options for text like bold, italic, font color, highlight color, and more. This section describes how to modify the formatting for selected text in detail.

## Bold

The bold formatting for selected text can be get or set by using the following sample code.

```ts

//Gets the value for bold formatting of selected text.
let bold : boolean = this.$refs.documenteditor.ej2Instances.selection.characterFormat.bold;
//Sets bold formatting for selected text.
this.$refs.documenteditor.ej2Instances.selection.characterFormat.bold = true;
```

You can toggle the bold formatting based on existing value at selection. Refer to the following sample code.

```ts
this.$refs.documenteditor.ej2Instances.editor.toggleBold();
```

## Italic

The Italic formatting for selected text can be get or set by using the following sample code.

```ts
//Gets the value for italic formatting of selected text.
let italic : boolean = this.$refs.documenteditor.ej2instances.selection.characterFormat.italic;
//Sets italic formatting for selected text.
this.$refs.documenteditor.ej2Instances.selection.characterFormat.italic= true|false;
```

You can toggle the Italic formatting based on existing value at selection. Refer to the following sample code.

```ts
this.$refs.documenteditor.ej2Instances.editor.toggleItalic();
```

## Underline property

The underline style for selected text can be get or set by using the following sample code.

```ts
//Gets the value for underline formatting of selected text.
let underline : Underline = this.$refs.documenteditor.ej2instances.selection.characterFormat.underline;
//Sets underline formatting for selected text.
this.$refs.documenteditor.ej2Instances.selection.characterFormat.underline='Single' | 'None';
```

You can toggle the underline style of selected text based on existing value at selection by specifying a value. Refer to the following sample code.

```ts
this.$refs.documenteditor.ej2Instances.editor.toggleUnderline('Single');
```

## Strikethrough property

The strikethrough style for selected text can be get or set by using the following sample code.

```ts
//Gets the value for strikethrough formatting of selected text.
let strikethrough : Strikethrough = this.$refs.documenteditor.ej2instances.selection.characterFormat.strikethrough;
//Sets strikethrough formatting for selected text.
this.$refs.documenteditor.ej2Instances.selection.characterFormat.strikethrough='Single' | 'Normal';
```

You can toggle the strikethrough style of selected text based on existing value at selection by specifying a value. Refer to the following sample code.

```ts
this.$refs.documenteditor.ej2Instances.editor.toggleStrikethrough();
```

## Superscript property

The selected text can be made superscript by using the following sample code.

```ts
//Gets the value for baselineAlignment formatting of selected text.
let baselineAlignment : BaselineAlignment = this.$refs.documenteditor.ej2instances.selection.characterFormat.baselineAlignment;
//Sets baselineAlignment formatting for selected text.
this.$refs.documenteditor.ej2Instances.selection.characterFormat.baselineAlignment='Superscript';
```

Toggle the selected text as superscript or normal using the following sample code.

```ts
this.$refs.documenteditor.ej2Instances.editor.toggleSuperscript();
```

## Subscript property

The selected text can be made subscript by using the following sample code.

```ts
//Gets the value for baselineAlignment formatting of selected text.
let baselineAlignment : BaselineAlignment = this.$refs.documenteditor.ej2instances.selection.characterFormat.baselineAlignment;
//Sets baselineAlignment formatting for selected text.
this.$refs.documenteditor.ej2Instances.selection.characterFormat.baselineAlignment='Subscript';
```

Toggle the selected text as subscript or normal using the following sample code.

```ts
this.$refs.documenteditor.ej2Instances.editor.toggleSubscript();
```

You can make a subscript or superscript text as normal using the following code.

```ts
this.$refs.documenteditor.ej2Instances.selection.characterFormat.baselineAlignment='Normal';
```

## Change case

You can apply different case formatting based on the selected text. Refer to the following sample code.

```ts
this.$refs.documenteditor.ej2Instances.documentEditor.editor.changeCase('Uppercase'|'Lowercase'|'SentenceCase'|'ToggleCase'|'CapitalizeEachWord');
```

## Size

The size of selected text can be get or set using the following code.

```ts
//Gets the value for fontSize formatting of selected text.
let fontSize : number = this.$refs.documenteditor.ej2instances.selection.characterFormat.fontSize;
//Sets fontSize formatting for selected text.
this.$refs.documenteditor.ej2Instances.selection.characterFormat.fontSize= 32;
```

## Color

### Change Font Color by UI Option

In the Document Editor, the Text Properties pane features two icons for managing text color within the user interface (UI):

* **Colored Box:** This icon visually represents the **current color** applied to the selected text.
* **Text (A) Icon:** Clicking this icon allows users **to modify the color** of the selected text by choosing a new color from the available options.

This Font Color option appear as follows.

![Font Color](images/fontColor.PNG)

### Change Font Color by Code

The color of selected text can be get or set using the following code.

```ts
//Gets the value for fontColor formatting of selected text.
let fontColor : string = this.$refs.documenteditor.ej2instances.selection.characterFormat.fontColor;
//Sets fontColor formatting for selected text.
this.$refs.documenteditor.ej2Instances.selection.characterFormat.fontColor= 'Pink';
this.$refs.documenteditor.ej2Instances.selection.characterFormat.fontColor= '#FFC0CB';
```

## Font

The font style of selected text can be get or set using the following sample code.

```ts
//Gets the value for fontFamily formatting of selected text.
let baselineAlignment : string = this.$refs.documenteditor.ej2instances.selection.characterFormat.fontFamily;
//Sets fontFamily formatting for selected text.
this.$refs.documenteditor.ej2Instances.selection.characterFormat.fontFamily= 'Arial';
```

## Highlight color

The highlight color of the selected text can be get or set using the following sample code.

```ts
//Gets the value for highlightColor formatting of selected text.
let highlightColor : HighlightColor = this.$refs.documenteditor.ej2instances.selection.characterFormat.highlightColor;
//Sets highlightColor formatting for selected text.
this.$refs.documenteditor.ej2Instances.selection.characterFormat.highlightColor= 'Pink';
```

## Toolbar with options for text formatting

Refer to the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div>
      <ejs-toolbar v-on:clicked="toolbarButtonClick">
        <e-items>
          <e-item prefixIcon="e-de-ctnr-bold e-icons" tooltipText="Bold" id="bold"></e-item>
          <e-item prefixIcon="e-de-ctnr-italic e-icons" tooltipText="Italic" id="italic"></e-item>
          <e-item prefixIcon="e-de-ctnr-underline e-icons" tooltipText="Underline" id="underline"></e-item>
          <e-item prefixIcon="e-de-ctnr-strikethrough e-icons" tooltipText="Strikethrough" id="strikethrough"></e-item>
          <e-item prefixIcon="e-de-ctnr-subscript e-icons" tooltipText="Subscript" id="subscript"></e-item>
          <e-item prefixIcon="e-de-ctnr-superscript e-icons" tooltipText="Superscript" id="superscript"></e-item>
          <e-item type="Separator"></e-item>
          <e-item type="Input" template="fontColorTemplate"></e-item>
          <e-item type="Separator"></e-item>
          <e-item type="Input" template="fontFamilyTemplate"></e-item>
          <e-item type="Input" template="fontSizeTemplate"></e-item>
        </e-items>
        <template v-slot:fontColorTemplate>
          <ejs-colorpicker value='#000000' :showButtons='true' v-bind:change='onFontColorChange'> </ejs-colorpicker>
        </template>
        <template v-slot:fontFamilyTemplate>
          <ejs-combobox :dataSource='fontStyle' :width='120' :index='2' :allowCustom='true'
            v-bind:change='onFontFamilyChange' :showClearButton='false'> </ejs-combobox>
        </template>
        <template v-slot:fontSizeTemplate>
          <ejs-combobox :dataSource='fontSize' :width='80' :index='2' :allowCustom='true'
            v-bind:change='onFontSizeChange' :showClearButton='false'> </ejs-combobox>
        </template>
      </ejs-toolbar>
    </div>
    <ejs-documenteditor ref="documenteditor" v-bind:selectionChange='onSelectionChange' :isReadOnly='false'
      :enableEditor='true' :enableEditorHistory='true' :enableSfdtExport='true' height="370px"
      style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script setup>
import { DocumentEditorComponent as EjsDocumenteditor, Editor, Selection, EditorHistory, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';
import { ItemDirective as EItem, ItemsDirective as EItems, ToolbarComponent as EjsToolbar } from "@syncfusion/ej2-vue-navigations";
import { ColorPickerComponent as EjsColorpicker } from '@syncfusion/ej2-vue-inputs';
import { ComboBoxComponent as EjsCombobox } from "@syncfusion/ej2-vue-dropdowns";
import { onMounted, provide, ref } from 'vue';

const documenteditor = ref(null);
const fontStyle = ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Candara', 'Courier New', 'Georgia', 'Impact', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Symbol', 'Times New Roman', 'Verdana', 'Windings'];
const fontSize = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72', '96'];

provide('DocumentEditor', [Editor, Selection, EditorHistory, SfdtExport])

const toolbarButtonClick = function (arg) {
  switch (arg.item.id) {
    case 'bold':
      //Toggles the bold of selected content
      documenteditor.value.ej2Instances.editor.toggleBold();
      break;
    case 'italic':
      //Toggles the Italic of selected content
      documenteditor.value.ej2Instances.editor.toggleItalic();
      break;
    case 'underline':
      //Toggles the underline of selected content
      documenteditor.value.ej2Instances.editor.toggleUnderline('Single');
      break;
    case 'strikethrough':
      //Toggles the strikethrough of selected content
      documenteditor.value.ej2Instances.editor.toggleStrikethrough();
      break;
    case 'subscript':
      //Toggles the subscript of selected content
      documenteditor.value.ej2Instances.editor.toggleSubscript();
      break;
    case 'superscript':
      //Toggles the superscript of selected content
      documenteditor.value.ej2Instances.editor.toggleSuperscript();
      break;
  }
}
const onFontFamilyChange = function (args) {
  documenteditor.value.ej2Instances.selection.characterFormat.fontFamily = args.value;
  documenteditor.value.focusIn();
}
const onFontSizeChange = function (args) {
  documenteditor.value.ej2Instances.selection.characterFormat.fontSize = args.value;
  documenteditor.value.focusIn();
}
const onFontColorChange = function (args) {
  documenteditor.value.ej2Instances.selection.characterFormat.fontColor = args.currentValue.hex;
  documenteditor.value.focusIn();
}
const onSelectionChange = function () {
  var characterformat = documenteditor.value.ej2Instances.selection.characterFormat;
  var properties = [characterformat.bold, characterformat.italic, characterformat.underline, characterformat.strikeThrough];
  var toggleBtnId = ["bold", "italic", "underline", "strikethrough"];
  for (var i = 0; i < properties.length; i++) {
    let toggleBtn = document.getElementById(toggleBtnId[i]);
    if ((typeof (properties[i]) == 'boolean' && properties[i] == true) || (typeof (properties[i]) == 'string' && properties[i] !== 'None'))
      toggleBtn.classList.add("e-btn-toggle");
    else {
      if (toggleBtn.classList.contains("e-btn-toggle"))
        toggleBtn.classList.remove("e-btn-toggle");
    }
  }
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
  <div id="app">
    <div>
      <ejs-toolbar v-on:clicked="toolbarButtonClick">
        <e-items>
          <e-item prefixIcon="e-de-ctnr-bold e-icons" tooltipText="Bold" id="bold"></e-item>
          <e-item prefixIcon="e-de-ctnr-italic e-icons" tooltipText="Italic" id="italic"></e-item>
          <e-item prefixIcon="e-de-ctnr-underline e-icons" tooltipText="Underline" id="underline"></e-item>
          <e-item prefixIcon="e-de-ctnr-strikethrough e-icons" tooltipText="Strikethrough" id="strikethrough"></e-item>
          <e-item prefixIcon="e-de-ctnr-subscript e-icons" tooltipText="Subscript" id="subscript"></e-item>
          <e-item prefixIcon="e-de-ctnr-superscript e-icons" tooltipText="Superscript" id="superscript"></e-item>
          <e-item type="Separator"></e-item>
          <e-item type="Input" template="fontColorTemplate"></e-item>
          <e-item type="Separator"></e-item>
          <e-item type="Input" template="fontFamilyTemplate"></e-item>
          <e-item type="Input" template="fontSizeTemplate"></e-item>
        </e-items>
        <template v-slot:fontColorTemplate>
          <ejs-colorpicker value='#000000' :showButtons='true' v-bind:change='onFontColorChange'> </ejs-colorpicker>
        </template>
        <template v-slot:fontFamilyTemplate>
          <ejs-combobox :dataSource='fontStyle' :width='120' :index='2' :allowCustom='true'
            v-bind:change='onFontFamilyChange' :showClearButton='false'> </ejs-combobox>
        </template>
        <template v-slot:fontSizeTemplate>
          <ejs-combobox :dataSource='fontSize' :width='80' :index='2' :allowCustom='true'
            v-bind:change='onFontSizeChange' :showClearButton='false'> </ejs-combobox>
        </template>
      </ejs-toolbar>
    </div>
    <ejs-documenteditor ref="documenteditor" v-bind:selectionChange='onSelectionChange' :isReadOnly='false'
      :enableEditor='true' :enableEditorHistory='true' :enableSfdtExport='true' height="370px"
      style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script>
import { DocumentEditorComponent, Editor, Selection, EditorHistory, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';
import { ItemDirective, ItemsDirective, ToolbarComponent } from "@syncfusion/ej2-vue-navigations";
import { ColorPickerComponent } from '@syncfusion/ej2-vue-inputs';
import { ComboBoxComponent } from "@syncfusion/ej2-vue-dropdowns";

export default {
  components: {
    'ejs-documenteditor': DocumentEditorComponent,
    'ejs-toolbar': ToolbarComponent,
    'e-items': ItemsDirective,
    'e-item': ItemDirective,
    'ejs-colorpicker': ColorPickerComponent,
    'ejs-combobox': ComboBoxComponent
  },
  data: function () {
    return {
      fontStyle: ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Candara', 'Courier New', 'Georgia', 'Impact', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Symbol', 'Times New Roman', 'Verdana', 'Windings'],
      fontSize: ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72', '96']
    };
  },
  provide: {
    DocumentEditor: [Editor, Selection, EditorHistory, SfdtExport]
  },
  methods: {
    toolbarButtonClick: function (arg) {
      switch (arg.item.id) {
        case 'bold':
          //Toggles the bold of selected content
          this.$refs.documenteditor.ej2Instances.editor.toggleBold();
          break;
        case 'italic':
          //Toggles the Italic of selected content
          this.$refs.documenteditor.ej2Instances.editor.toggleItalic();
          break;
        case 'underline':
          //Toggles the underline of selected content
          this.$refs.documenteditor.ej2Instances.editor.toggleUnderline('Single');
          break;
        case 'strikethrough':
          //Toggles the strikethrough of selected content
          this.$refs.documenteditor.ej2Instances.editor.toggleStrikethrough();
          break;
        case 'subscript':
          //Toggles the subscript of selected content
          this.$refs.documenteditor.ej2Instances.editor.toggleSubscript();
          break;
        case 'superscript':
          //Toggles the superscript of selected content
          this.$refs.documenteditor.ej2Instances.editor.toggleSuperscript();
          break;
      }
    },
    onFontFamilyChange: function (args) {
      this.$refs.documenteditor.ej2Instances.selection.characterFormat.fontFamily = args.value;
      this.$refs.documenteditor.focusIn();
    },
    onFontSizeChange: function (args) {
      this.$refs.documenteditor.ej2Instances.selection.characterFormat.fontSize = args.value;
      this.$refs.documenteditor.focusIn();
    },
    onFontColorChange: function (args) {
      this.$refs.documenteditor.ej2Instances.selection.characterFormat.fontColor = args.currentValue.hex;
      this.$refs.documenteditor.focusIn();
    },
    onSelectionChange: function () {
      var characterformat = this.$refs.documenteditor.ej2Instances.selection.characterFormat;
      var properties = [characterformat.bold, characterformat.italic, characterformat.underline, characterformat.strikeThrough];
      var toggleBtnId = ["bold", "italic", "underline", "strikethrough"];
      for (var i = 0; i < properties.length; i++) {
        let toggleBtn = document.getElementById(toggleBtnId[i]);
        if ((typeof (properties[i]) == 'boolean' && properties[i] == true) || (typeof (properties[i]) == 'string' && properties[i] !== 'None'))
          toggleBtn.classList.add("e-btn-toggle");
        else {
          if (toggleBtn.classList.contains("e-btn-toggle"))
            toggleBtn.classList.remove("e-btn-toggle");
        }
      }
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

## See Also

* [Feature modules](./feature-module)
* [Font dialog](./dialog#font-dialog)
* [Keyboard shortcuts](./keyboard-shortcut#text-formatting)