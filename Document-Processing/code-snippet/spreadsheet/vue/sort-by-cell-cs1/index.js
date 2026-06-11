
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { defaultData } from './data.js';
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
   <ejs-spreadsheet ref="spreadsheet" :allowSorting='true' :dataBound="dataBound" :beforeSort="beforeSort" :sortComplete="sortComplete">
   <e-sheets>
          <e-sheet>
            <e-ranges>
              <e-range :dataSource="dataSource"></e-range>
            </e-ranges>
          </e-sheet>
        </e-sheets></ejs-spreadsheet>
`,

   data: () => {
    return {
      dataSource: defaultData,
    }
  },
  methods: {
    dataBound: function () {
      var spreadsheet = this.$refs.spreadsheet;
        if (spreadsheet.ej2Instances.activeSheetIndex === 0) {
            spreadsheet.sort({ containsHeader: true }, 'A1:H11');
        }
      },
    beforeSort: function (args) {
        //code here to handle sorting arguments.
    },
    sortComplete: function (args) {
        var spreadsheet = this.$refs.spreadsheet;
        spreadsheet.selectRange(args.range);
        // code here.
    },
    }

});