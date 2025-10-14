<template>
    <div id="app" style="height:400px">
        <div>
            <button v-on:click='showHyperlinkDialog'>Open dialog</button>
        </div>
        <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true' v-bind:requestNavigate="onRequestNavigate"
            :enableHyperlinkDialog='true' :enableSfdtExport='true' height="370px"
            style="width: 100%;"></ejs-documenteditor>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor, HyperlinkDialog, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

const documenteditor = ref(null);
provide('DocumentEditor', [Selection, Editor, HyperlinkDialog, SfdtExport]);

const showHyperlinkDialog = function () {
    //Opens hyperlink dialog.
    documenteditor.value.showDialog('Hyperlink');
}
const onRequestNavigate= function (args) {
    if (args.linkType !== 'Bookmark') {
        let link = args.navigationLink;
        if (args.localReference.length > 0) {
            link += '#' + args.localReference;
        }
        window.open(link);
        args.isHandled = true;
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
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
