<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created" :showFormulaBar="false">
    <e-sheets>
      <e-sheet name="Car Sales Record">
        <e-ranges>
          <e-range :dataSource="dataSource"></e-range>
        </e-ranges>
        <e-columns>
          <e-column :width=120></e-column>
        </e-columns>
        <e-conditionalformats>
          <e-conditionalformat type="GreaterThan" cFColor="RedFT" value="700" range="B2:B9"></e-conditionalformat>
          <e-conditionalformat type="Bottom10Items" cFColor="YellowFT" value="4"
            range="C2:C9"></e-conditionalformat>
          <e-conditionalformat type="BlueDataBar" range="D2:D9"></e-conditionalformat>
        </e-conditionalformats>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script>

import { SpreadsheetComponent, ColumnsDirective, ColumnDirective, RangesDirective, RangeDirective, SheetsDirective, SheetDirective, ConditionalFormatsDirective, ConditionalFormatDirective } from "@syncfusion/ej2-vue-spreadsheet";
import { conditionalFormatData } from './data.js';

export default {
  name: "App",
  components: {
    "ejs-spreadsheet": SpreadsheetComponent,
    "e-sheets": SheetsDirective,
    "e-sheet": SheetDirective,
    "e-ranges": RangesDirective,
    "e-range": RangeDirective,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "e-conditionalformats": ConditionalFormatsDirective,
    "e-conditionalformat": ConditionalFormatDirective
  },
  data: () => {
    return {
      dataSource: conditionalFormatData,
    }
  },
  methods: {
    created: function () {
      let spreadsheet = this.$refs.spreadsheet;
      spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:N1');
      spreadsheet.conditionalFormat({ type: "RYGColorScale", range: 'E2:E9' });
      spreadsheet.conditionalFormat({ type: "ThreeArrows", range: 'H2:H9' });
      //Custom format
      spreadsheet.conditionalFormat({
        type: 'Top10Items', value: '1',
        format: { style: { color: '#ffffff', backgroundColor: '#009999', fontWeight: 'bold' } }, range: 'F2:F9'
      });
      spreadsheet.conditionalFormat({
        type: 'Bottom10Items', value: '1',
        format: { style: { color: '#ffffff', backgroundColor: '#c68d53', fontWeight: 'bold' } }, range: 'G2:G9'
      });
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/material.css";
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import "../node_modules/@syncfusion/ej2-spreadsheet/styles/material.css";
</style>
