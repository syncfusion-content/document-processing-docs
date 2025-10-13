
import Vue from "vue";
import { SpreadsheetPlugin, getRangeIndexes } from "@syncfusion/ej2-vue-spreadsheet";
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { defaultData } from './data.js';
Vue.use(SpreadsheetPlugin);
Vue.use(DropDownButtonPlugin);

new Vue({
	el: '#app',
	template: `
  <div>
    <ejs-dropdownbutton :items='items' :select='itemSelect'>Clipboard</ejs-dropdownbutton>
    <ejs-spreadsheet ref="spreadsheet" :created="created">
      <e-sheets>
          <e-sheet>
            <e-ranges>
              <e-range :dataSource="dataSource"></e-range>
            </e-ranges>
             <e-columns>
              <e-column :width="width1"></e-column>
              <e-column :width="width2"></e-column>
            </e-columns>
          </e-sheet>
        </e-sheets></ejs-spreadsheet>
        <div>
`,

   data: () => {
    return {
      dataSource: defaultData,
      width1: 130,
      width2: 96,
      items:[
        {
          text: "Cut"
        },
        {
          text: "Copy"
        },
        {
          text: "Paste"
        }]
    }
  },
  methods: {
  created: function () {
       var spreadsheet = this.$refs.spreadsheet;
    spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
      },
      itemSelect: function(args) {
      var spreadsheet = this.$refs.spreadsheet;
      if (args.item.text === 'Cut')
        spreadsheet.cut();
      if (args.item.text === 'Copy')
        spreadsheet.copy();
      if (args.item.text === 'Paste')
        spreadsheet.paste();
   }
  }

});