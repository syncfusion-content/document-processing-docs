
        import Vue from 'vue'
        import { DocumentEditorPlugin, Selection, Editor, DocumentEditorKeyDownEventArgs, SfdtExport, WordExport } from '@syncfusion/ej2-vue-documenteditor';

        Vue.use(DocumentEditorPlugin);

        
new Vue({
	el: '#app',
	template: `
   <div>
          <ejs-documenteditor ref="documenteditor" height="370px" style="width: 100%;display:block" :isReadOnly='false' :enableSelection='true' :enableSfdtExport='true' :enableWordExport=true :enableEditor='true' v-bind:keyDown='onKeyDown'></ejs-documenteditor>
   </div>
`,

            data: function() {
                return {
                };
            },
            provide: {
                DocumentEditor : [SfdtExport, Selection, Editor, WordExport]
            }
            methods: {
                onKeyDown: function(args) {
                    let keyCode: number = args.event.which || args.event.keyCode;

                    let isCtrlKey: boolean = (args.event.ctrlKey || args.event.metaKey) ? true : ((keyCode === 17) ? true : false);

                    let isAltKey: boolean = args.event.altKey ? args.event.altKey : ((keyCode === 18) ? true : false);

                    // 83 is the character code for 'S'
                    if (isCtrlKey && !isAltKey && keyCode === 83) {
                        //To prevent default save operation, set the isHandled property to true
                        args.isHandled = true;
                        this.$refs.documenteditor.save('sample', 'Docx');
                        args.event.preventDefault();
                    } else if (isCtrlKey && isAltKey && keyCode === 83) {
                        this.$refs.documenteditor.save('sample', 'Sfdt');
                    }
                }
            }
        
});