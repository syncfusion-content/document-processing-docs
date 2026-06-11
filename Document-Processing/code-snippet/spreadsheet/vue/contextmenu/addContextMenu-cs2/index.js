
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
   <ejs-spreadsheet ref="spreadsheet" :contextMenuBeforeOpen="contextMenuBeforeOpen"></ejs-spreadsheet>
`,

  methods: {
  contextMenuBeforeOpen: function () {
        var spreadsheet = this.$refs.spreadsheet;
        // To remove context menu items.
         spreadsheet.removeContextMenuItems(["Insert Column"], false); //Items that needs to be removed, Set `true` if the given `text` is a unique id.
      }
    }

});