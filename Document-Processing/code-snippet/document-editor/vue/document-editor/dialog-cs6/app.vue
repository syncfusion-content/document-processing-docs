<template>
    <div id="app" style="height:400px">
        <div>
            <button v-on:click='showPageSetupDialog'>Open dialog</button>
        </div>
        <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
            :enableSfdtExport='true' :enablePageSetupDialog='true' height="370px"
            style="width: 100%;"></ejs-documenteditor>
    </div>
</template>
<script>
import { DocumentEditorComponent, Selection, Editor, PageSetupDialog, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

export default {
    name: "App",
    components: {
        "ejs-documenteditor": DocumentEditorComponent
    },
    data: function () {
        return {
        };
    },
    provide: {
        //Inject require modules.
        DocumentEditor: [Selection, Editor, PageSetupDialog, SfdtExport]
    },
    methods: {
        showPageSetupDialog: function () {
            //Open page setup dialog.
            this.$refs.documenteditor.showDialog('PageSetup');
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
