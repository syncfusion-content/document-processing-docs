
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { data  } from './data.js';
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
  <ejs-spreadsheet ref="spreadsheet" :created="created">
                <e-sheets>
                  <e-sheet>
                    <e-ranges>
                      <e-range :dataSource="dataSource"></e-range>
                    </e-ranges>
                  </e-sheet>
                </e-sheets>
              </ejs-spreadsheet>
`,

   data: () => {
    return {
      dataSource: data,
    }
  },
  methods: {
   created: function () {
       var spreadsheet = this.$refs.spreadsheet;
       // To change width of single column
       spreadsheet.setColumnsWidth(100, ['F']);
       // To change width of multiple columns
       spreadsheet.setColumnsWidth(120, ['A:C', 'G:I', 'K:M']);
      }
    }

});