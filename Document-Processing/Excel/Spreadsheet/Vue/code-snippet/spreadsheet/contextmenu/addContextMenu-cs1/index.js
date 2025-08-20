
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
Vue.use(SpreadsheetPlugin);

new Vue({
  el: '#app',
  template: `
   <ejs-spreadsheet ref="spreadsheet" :contextMenuBeforeOpen="contextMenuBeforeOpen"></ejs-spreadsheet>
`,

  methods: {
    contextMenuBeforeOpen: function (args) {
      var spreadsheet = this.$refs.spreadsheet;
      if (args.element.id === spreadsheet.$el.id + '_contextmenu') {
        // To add context menu items.
        spreadsheet.addContextMenuItems([{ text: 'Custom Item' }], 'Paste Special', false); //To pass the items, Item before / after that the element to be inserted, Set false if the items need to be inserted before the text.
      }
    }
  }

});