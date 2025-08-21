
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { tradeData } from './data.js';
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
   <ejs-spreadsheet ref="spreadsheet" :allowSorting='true' :dataBound="dataBound" :sortComplete="sortComplete">
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
      dataSource: tradeData,
    }
  },
  methods: {
    dataBound: function () {
        var spreadsheet = this.$refs.spreadsheet;
        var sortDescriptors = [
        {
            field: 'F',
            order: 'Ascending'
        },
        {
            field: 'E',
            order: 'Ascending'
        },
        {
            field: 'C',
            order: 'Descending'
        }];
        if (spreadsheet.ej2Instances.activeSheetIndex === 0) {
            spreadsheet.sort({ sortDescriptors: sortDescriptors, containsHeader: true }, 'A1:H30');
        }
    },
    sortComplete: function (args) {
        var spreadsheet = this.$refs.spreadsheet;
        spreadsheet.selectRange(args.range);
        // code here.
    },
    }

});