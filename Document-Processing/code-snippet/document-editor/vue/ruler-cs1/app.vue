<template>
  <div id="app">
    <button id='container_ruler_button' v-on:click="onClick">Show/Hide Ruler</button>
    <ejs-documenteditor id="container" height="370px" style="width: 100%" ref="container" :serviceUrl='serviceUrl'
      :isReadOnly='false' :enablePrint='true' :enableSfdtExport='true' :enableSelection='true' :enableContextMenu='true'
      :enableSearch='true' :enableOptionsPane='true' :enableWordExport='true' :enableTextExport='true'
      :enableEditor='true' :enableImageResizer='true' :enableEditorHistory='true' :enableHyperlinkDialog='true'
      :enableTableDialog='true' :enableBookmarkDialog='true' :enableTableOfContentsDialog='true'
      :enablePageSetupDialog='true' :enableStyleDialog='true' :enableListDialog='true' :enableParagraphDialog='true'
      :enableFontDialog='true' :enableTablePropertiesDialog='true' :enableBordersAndShadingDialog='true'
      :enableTableOptionsDialog='true' :documentEditorSettings='documentEditorSettings'></ejs-documenteditor>
  </div>
</template>

<script>
import { DocumentEditorComponent, Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog } from '@syncfusion/ej2-vue-documenteditor';

export default {
  name: "App",
  components: {
    "ejs-documenteditor": DocumentEditorComponent
  },
  data() {
    return {
      serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/',
      height: '370px',
      isReadOnly: false,
      documentEditorSettings: { showRuler: true }
    }
  },
  provide: {
    //Inject require modules.
    DocumentEditor: [Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog]
  },
  methods: {
    onClick: function () {
      this.$refs.container.ej2Instances.documentEditorSettings.showRuler = !this.$refs.container.ej2Instances.documentEditorSettings.showRuler
    }
  },
  mounted: function () {
    this.$refs.container.ej2Instances.documentEditorSettings.showRuler = true;
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
