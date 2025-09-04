<template>
  <ejs-spreadsheet ref="spreadsheet" :allowFiltering='true' :dataBound="dataBound">
    <e-sheets>
      <e-sheet>
        <e-ranges>
          <e-range :dataSource="dataSource"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width="width1"></e-column>
          <e-column :width="width2"></e-column>
          <e-column :width="width3"></e-column>
          <e-column :width="width2"></e-column>
          <e-column :width="width2"></e-column>
          <e-column :width="width3"></e-column>
          <e-column :width="width1"></e-column>
          <e-column :width="width1"></e-column>
          <e-column :width="width4"></e-column>
          <e-column :width="width1"></e-column>
          <e-column :width="width2"></e-column>
          <e-column :width="width5"></e-column>
        </e-columns>
      </e-sheet>
    </e-sheets></ejs-spreadsheet>
</template>

<script>
import { SpreadsheetComponent, ColumnsDirective, ColumnDirective, RangesDirective, RangeDirective, SheetsDirective, SheetDirective } from "@syncfusion/ej2-vue-spreadsheet";
import { tradeData } from './data.js';

export default {
  name: "App",
  components: {
    "ejs-spreadsheet": SpreadsheetComponent,
    "e-sheets": SheetsDirective,
    "e-sheet": SheetDirective,
    "e-ranges": RangesDirective,
    "e-range": RangeDirective,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective
  },
  data: () => {
    return {
      dataSource: tradeData,
      width1: 100,
      width2: 130,
      width3: 96,
      width4: 110,
      width5: 150,
    }
  },
  methods: {
    dataBound: function () {
      let spreadsheet = this.$refs.spreadsheet;
      if (spreadsheet.ej2Instances.activeSheetIndex === 0) {
        let departments = ['Sweden', 'Canada', 'UK'];
        let predicateList = []
        departments.forEach((department) => { predicateList.push({ field: 'D', predicate: 'or', operator: 'equal', value: department }); })
        spreadsheet.applyFilter(predicateList);
      }
    }
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
