
      import Vue from 'vue'
      import { DocumentEditorPlugin, Selection, Editor, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

      Vue.use(DocumentEditorPlugin);

      
new Vue({
	el: '#app',
	template: `
     <div style="height:330px">
          <ejs-documenteditor ref="documenteditor" :height="height" style="width: 100%;display:block" :isReadOnly='false' :enableSelection='true' :enableSfdtExport='true' :enableEditor='true' v-bind:keyDown='onKeyDown'></ejs-documenteditor>
     </div>
`,

          data: function() {
              return {
                  height: '370px'
              };
          },
          provide: {
              DocumentEditor : [SfdtExport, Selection, Editor]
          }
          methods: {
              onKeyDown: function(args) {
                  let keyCode: number = args.event.which || args.event.keyCode;
                  let isCtrlKey: boolean = (args.event.ctrlKey || args.event.metaKey) ? true : ((keyCode === 17) ? true : false);
                  //67 is the character code for 'C'
                  if (isCtrlKey && keyCode === 67) {
                      //To prevent copy operation set isHandled to true
                      args.isHandled = true;
                  }
              }
          }
      
});