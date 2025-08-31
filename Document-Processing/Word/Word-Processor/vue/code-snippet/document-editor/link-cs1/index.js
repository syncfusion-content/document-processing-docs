
    import Vue from 'vue'
    import { DocumentEditorPlugin, Selection, RequestNavigateEventArgs } from '@syncfusion/ej2-vue-documenteditor';

    Vue.use(DocumentEditorPlugin);

    
new Vue({
	el: '#app',
	template: `
        <div id="app">
            <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' v-bind:requestNavigate="onRequestNavigate" height="370px" style="width: 100%;"></ejs-documenteditor>
        </div>
`,

        data: function() {
            return {
            };
        },
        provide: {
            DocumentEditor : [Selection]
        }
        methods: {
            onRequestNavigate: function(args: RequestNavigateEventArgs) {
            if (args.linkType !== 'Bookmark') {
                    let link: string = args.navigationLink;
                    if (args.localReference.length > 0) {
                    link += '#' + args.localReference;
                    }
                    window.open(link);
                    args.isHandled = true;
                }
            }
        }
    
});