<template>
    <div id="app">
        <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
            v-bind:requestNavigate="onRequestNavigate" height="370px" style="width: 100%;"></ejs-documenteditor>
    </div>
</template>
<script>
import { DocumentEditorComponent, Selection, Editor, RequestNavigateEventArgs } from '@syncfusion/ej2-vue-documenteditor';

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
        DocumentEditor: [Selection, Editor]
    },
    methods: {
        onRequestNavigate: function (args) {
            if (args.linkType !== 'Bookmark') {
                let link = args.navigationLink;
                if (args.localReference.length > 0) {
                    link += '#' + args.localReference;
                }
                window.open(link);
                args.isHandled = true;
            }
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
