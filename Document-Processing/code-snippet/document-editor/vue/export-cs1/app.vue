<template>
    <div id="app">
        <div>
            <button v-on:click='saveAsSfdt'>Save</button>
        </div>
        <ejs-documenteditor ref="documenteditor" :enableSfdtExport='true' :enableSelection='true' :enableEditor='true'
            :isReadOnly='false' height="370px" style="width: 100%;"></ejs-documenteditor>
    </div>
</template>
<script>
import { DocumentEditorComponent, Selection, Editor, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

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
        DocumentEditor: [SfdtExport, Selection, Editor]
    },
    methods: {
        saveAsSfdt: function () {
            //Download the current document in sfdt format.
            this.$refs.documenteditor.save('sample', 'Sfdt');
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
