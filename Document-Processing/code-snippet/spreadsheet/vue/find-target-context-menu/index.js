
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { closest } from '@syncfusion/ej2-base';
Vue.use(SpreadsheetPlugin);

new Vue({
  el: '#app',
  template: `<ejs-spreadsheet ref= "spreadsheet" :contextMenuBeforeOpen="contextMenuBeforeOpen"></ejs-spreadsheet>
`,

  methods: {
    contextMenuBeforeOpen: function (args) {
      if (closest(args.event.target, '.e-sheet-content')) {
        console.log('Cell Context Menu');
      } else if (closest(args.event.target, '.e-colhdr-table')) {
        console.log('Column Header Context Menu');
      } else if (closest(args.event.target, '.e-rowhdr-table')) {
        console.log('Row Header Context Menu');
      } else if (closest(args.event.target, '.e-toolbar-item')) {
        console.log('Footer Context Menu');
      }
    }
  }

});