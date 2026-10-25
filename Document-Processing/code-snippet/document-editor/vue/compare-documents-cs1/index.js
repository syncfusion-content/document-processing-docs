import Vue from 'vue';
import { DocumentEditorPlugin, DocumentEditorContainerComponent } from '@syncfusion/ej2-vue-documenteditor';
import { originalDocument, revisedDocument } from './data.js';

Vue.use(DocumentEditorPlugin);

new Vue({
    el: '#app',
    components: {
     'ejs-documenteditorcontainer': DocumentEditorContainerComponent
    },
	template: `
        <div id="app">
            <button id='compare' v-on:click="onCompare">Compare Documents</button>
            <ejs-documenteditorcontainer
              id="editor"
              ref="editor"
              :serviceUrl="serviceUrl"
              height="590px"
              width="100%"
              :enableToolbar="false"
              :enableTrackChanges='true'
              :showPropertiesPane="false"
            >
            </ejs-documenteditorcontainer>
        </div>
        `,
      data(){
        return {
            serviceUrl:'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
        }
      },
      methods: {
        onCompare: function () {
          let http = new XMLHttpRequest();
          http.open('POST', 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/CompareDocuments', true);
          http.responseType = 'text';
          //Form data with the original and revised SFDT documents.
          let formData = new FormData();
          formData.append('originalFile', new File([originalDocument], 'original.sfdt', { type: 'application/json' }));
          formData.append('revisedFile', new File([revisedDocument], 'revised.sfdt', { type: 'application/json' }));
          formData.append('author', 'Author');
          formData.append('dateTime', new Date().toISOString());
          http.onreadystatechange = () => {
            if (http.readyState === 4) {
              if (http.status === 200 || http.status === 304) {
                // Open the resultant SFDT content (with tracked changes) in the Document Editor.
                this.$refs.editor.ej2Instances.documentEditor.showTrackChanges = true;
                this.$refs.editor.ej2Instances.documentEditor.open(http.responseText);
              } else {
                alert('Failed to compare the documents. Please try again.');
              }
            }
          };
          http.send(formData);
        }
      }

});
