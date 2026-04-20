<template>
  <ejs-spreadsheet ref="spreadsheet" :allowSorting='true' :dataBound="dataBound" :sortComplete="sortComplete">
    <e-sheets>
      <e-sheet>
        <e-ranges>
          <e-range :dataSource="dataSource"></e-range>
        </e-ranges>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script>
import { SpreadsheetComponent, RangesDirective, RangeDirective, SheetsDirective, SheetDirective } from "@syncfusion/ej2-vue-spreadsheet";
import { tradeData } from './data.js';

export default {
  name: "App",
  components: {
    "ejs-spreadsheet": SpreadsheetComponent,
    "e-sheets": SheetsDirective,
    "e-sheet": SheetDirective,
    "e-ranges": RangesDirective,
    "e-range": RangeDirective
  },
  data: () => {
    return {
      dataSource: tradeData,
    }
  },
  methods: {
    dataBound: function () {
      let spreadsheet = this.$refs.spreadsheet;
      let sortDescriptors = [
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
      let spreadsheet = this.$refs.spreadsheet;
      spreadsheet.selectRange(args.range);
      // code here.
    },
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/material.css";
</style>
