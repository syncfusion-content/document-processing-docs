<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created">
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
import { data } from './data.js';

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
      dataSource: data,
    }
  },
  methods: {
    created: function () {
      let spreadsheet = this.$refs.spreadsheet;
      // To change width of single column
      spreadsheet.setColumnsWidth(100, ['F']);
      // To change width of multiple columns
      spreadsheet.setColumnsWidth(120, ['A:C', 'G:I', 'K:M']);
    }
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/spreadsheet/index.css';
</style>
