
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { orderData } from './data.js';
Vue.use(SpreadsheetPlugin);
Vue.use(DropDownButtonPlugin);


new Vue({
	el: '#app',
	template: ` <div>
<ejs-dropdownbutton :items='items' :select='itemSelect'>Clear</ejs-dropdownbutton>
   <ejs-spreadsheet ref="spreadsheet" :created="created">
   <e-sheets>
          <e-sheet>
           <e-columns>
                      <e-column :width=88></e-column>
                      <e-column :width=88></e-column>
                      <e-column :width=160></e-column>
                      <e-column :width=100></e-column>
                      <e-column :width=150></e-column>
                    </e-columns>
            <e-ranges>
              <e-range :dataSource="dataSource"></e-range>
            </e-ranges>
          </e-sheet>
        </e-sheets></ejs-spreadsheet></div>
`,

   data: () => {
    return {
      dataSource: orderData,
      items:[
        {
          text: "Clear All"
        },
        {
          text: "Clear Formats"
        },
        {
          text: "Clear Contents"
        },
        {
          text: "Clear Hyperlinks"
        }]
    }
  },
   methods: {
   created: function () {
        var spreadsheet = this.$refs.spreadsheet;
        spreadsheet.cellFormat({ fontWeight: 'bold', fontSize: '12pt'}, 'A1:E1');
        spreadsheet.cellFormat({ color: '#10c469' }, 'B1:B10');
      },

     itemSelect: function(args) {
      var spreadsheet = this.$refs.spreadsheet;
      if (args.item.text === 'Clear All')
        spreadsheet.clear({ type: 'Clear All', range: 'D1:D10' }); // Clear the content, formats and hyperlinks applied in the provided range.
      if (args.item.text === 'Clear Formats')
        spreadsheet.clear({ type: 'Clear Formats', range: 'B1:B10' }); // Clear the formats applied in the provided range
      if (args.item.text === 'Clear Contents')
        spreadsheet.clear({ type: 'Clear Contents', range: 'A1:A10' }); // Clear the content in the provided range
      if (args.item.text === 'Clear Hyperlinks')
        spreadsheet.clear({ type: 'Clear Hyperlinks', range: 'F2:F6' }); // Clear the hyperlinks applied in the provided range
   }
  }

});