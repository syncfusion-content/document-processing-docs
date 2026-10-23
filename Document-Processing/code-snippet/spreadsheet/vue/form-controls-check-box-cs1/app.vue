<template>
  <div>
    <ejs-spreadsheet ref="spreadsheetRef" :showFormulaBar="false">
      <e-sheets>
        <e-sheet name="FormControls">
          <e-columns>
            <e-column :width="150"></e-column>
            <e-column :width="150"></e-column>
            <e-column :width="150"></e-column>
            <e-column :width="150"></e-column>
          </e-columns>
          <e-rows>
            <e-row :index="0">
              <e-cells>
                <e-cell :index="0" value="Form Controls Demo" :style="boldCenter"></e-cell>
              </e-cells>
            </e-row>
            <e-row :index="1">
              <e-cells>
                <e-cell :index="0" value="Check Box Control"></e-cell>
                <e-cell :index="1" value=""></e-cell>
                <e-cell :index="2" value="Cell Link"></e-cell>
                <e-cell :index="3" value=""></e-cell>
              </e-cells>
            </e-row>
            <e-row :index="3">
              <e-cells>
                <e-cell :index="0" value="Notifications"></e-cell>
                <e-cell :index="1" value=""></e-cell>
                <e-cell :index="2" value="Cell Link"></e-cell>
                <e-cell :index="3" value=""></e-cell>
              </e-cells>
            </e-row>
            <e-row :index="5">
              <e-cells>
                <e-cell :index="0" value="Select All"></e-cell>
                <e-cell :index="1" value=""></e-cell>
                <e-cell :index="2" value="Cell Link"></e-cell>
                <e-cell :index="3" value=""></e-cell>
              </e-cells>
            </e-row>
          </e-rows>
        </e-sheet>
      </e-sheets>
    </ejs-spreadsheet>
  </div>
</template>

<script>
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RowsDirective, RowDirective, CellsDirective, CellDirective, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-spreadsheet";

export default {
  name: "App",
  components: {
    "ejs-spreadsheet": SpreadsheetComponent,
    "e-sheets": SheetsDirective,
    "e-sheet": SheetDirective,
    "e-rows": RowsDirective,
    "e-row": RowDirective,
    "e-cells": CellsDirective,
    "e-cell": CellDirective,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective
  },
  data() {
    return {
      boldCenter: { fontWeight: 'bold', textAlign: 'center' }
    };
  },
  mounted() {
    let spreadsheet = this.$refs.spreadsheetRef;
    if (spreadsheet) {
      // Insert Check Box form control
      spreadsheet.addFormControl({
        type: 'CheckBox',
        target: 'B2',
        name: 'checkboxControl',
        caption: 'Accept Terms',
        checkedValue: true,
        uncheckedValue: false,
        linkedCell: 'D2',
        fontName: 'Calibri',
        fontSize: 14
      });

      // Insert another Check Box with different properties
      spreadsheet.addFormControl({
        type: 'CheckBox',
        target: 'B4',
        name: 'checkboxControl2',
        caption: 'Enable Notifications',
        checkedValue: true,
        uncheckedValue: false,
        linkedCell: 'D4'
      });

      // Insert Check Box with mixed state
      spreadsheet.addFormControl({
        type: 'CheckBox',
        target: 'B6',
        name: 'checkboxControl3',
        caption: 'Select All Options',
        linkedCell: 'D6'
      });
    }
  }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css';
@import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/tailwind3.css";
</style>
