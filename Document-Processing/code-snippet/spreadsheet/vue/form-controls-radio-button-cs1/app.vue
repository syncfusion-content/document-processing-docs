<template>
  <div>
    <ejs-spreadsheet ref="spreadsheetRef" :showFormulaBar="false">
      <e-sheets>
        <e-sheet name="RadioButtonDemo">
          <e-columns>
            <e-column :width="150"></e-column>
            <e-column :width="180"></e-column>
            <e-column :width="150"></e-column>
            <e-column :width="150"></e-column>
          </e-columns>
          <e-rows>
            <e-row :index="0">
              <e-cells>
                <e-cell :index="0" value="Shipping Options" :style="boldCenter"></e-cell>
              </e-cells>
            </e-row>
            <e-row :index="1">
              <e-cells>
                <e-cell :index="0" value="Select Shipping"></e-cell>
                <e-cell :index="1" value=""></e-cell>
                <e-cell :index="2" value="Selected"></e-cell>
                <e-cell :index="3" value=""></e-cell>
              </e-cells>
            </e-row>
            <e-row :index="5">
              <e-cells>
                <e-cell :index="0" value="Payment Method" :style="boldCenter"></e-cell>
              </e-cells>
            </e-row>
            <e-row :index="6">
              <e-cells>
                <e-cell :index="0" value="Choose Payment"></e-cell>
                <e-cell :index="1" value=""></e-cell>
                <e-cell :index="2" value="Selected"></e-cell>
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
      // Insert Radio Button form controls - Group 1
      spreadsheet.addFormControl({
        type: 'RadioButton',
        target: 'B2',
        name: 'shippingGroup',
        caption: 'Standard Shipping',
        value: 'standard',
        linkedCell: 'D2',
        fontName: 'Calibri',
        fontSize: 14
      });

      spreadsheet.addFormControl({
        type: 'RadioButton',
        target: 'B3',
        name: 'shippingGroup',
        caption: 'Express Shipping',
        value: 'express',
        linkedCell: 'D3'
      });

      spreadsheet.addFormControl({
        type: 'RadioButton',
        target: 'B4',
        name: 'shippingGroup',
        caption: 'Overnight Shipping',
        value: 'overnight',
        linkedCell: 'D4'
      });

      // Insert Radio Button form controls - Group 2
      spreadsheet.addFormControl({
        type: 'RadioButton',
        target: 'B6',
        name: 'paymentGroup',
        caption: 'Credit Card',
        value: 'creditcard',
        linkedCell: 'D6'
      });

      spreadsheet.addFormControl({
        type: 'RadioButton',
        target: 'B7',
        name: 'paymentGroup',
        caption: 'Debit Card',
        value: 'debitcard',
        linkedCell: 'D7'
      });

      spreadsheet.addFormControl({
        type: 'RadioButton',
        target: 'B8',
        name: 'paymentGroup',
        caption: 'Wire Transfer',
        value: 'transfer',
        linkedCell: 'D8'
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
