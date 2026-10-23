<template>
  <div>
    <ejs-spreadsheet ref="spreadsheetRef" :showFormulaBar="false">
      <e-sheets>
        <e-sheet name="DropDownDemo">
          <e-columns>
            <e-column :width="150"></e-column>
            <e-column :width="200"></e-column>
            <e-column :width="150"></e-column>
            <e-column :width="150"></e-column>
            <e-column :width="100"></e-column>
            <e-column :width="100"></e-column>
            <e-column :width="100"></e-column>
            <e-column :width="150"></e-column>
            <e-column :width="150"></e-column>
            <e-column :width="100"></e-column>
          </e-columns>
          <e-rows>
            <e-row :index="0">
              <e-cells>
                <e-cell :index="0" value="Drop Down Form Controls" :style="boldCenter"></e-cell>
              </e-cells>
            </e-row>
            <e-row :index="1">
              <e-cells>
                <e-cell :index="0" value="Delivery Options"></e-cell>
                <e-cell :index="1" value=""></e-cell>
                <e-cell :index="2" value="Selected Index"></e-cell>
                <e-cell :index="3" value=""></e-cell>
              </e-cells>
            </e-row>
            <e-row :index="3">
              <e-cells>
                <e-cell :index="0" value="Payment Method"></e-cell>
                <e-cell :index="1" value=""></e-cell>
                <e-cell :index="2" value="Selected Index"></e-cell>
                <e-cell :index="3" value=""></e-cell>
              </e-cells>
            </e-row>
            <e-row :index="5">
              <e-cells>
                <e-cell :index="0" value="Priority Level"></e-cell>
                <e-cell :index="1" value=""></e-cell>
                <e-cell :index="2" value="Selected Index"></e-cell>
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
      // Define the input range for dropdown
      spreadsheet.insertRange('H1:H5', 'H', false);
      
      // Set dropdown values in range H1:H5
      spreadsheet.getActiveSheet().setFormula('H1', 'Standard Delivery');
      spreadsheet.getActiveSheet().setFormula('H2', 'Express Delivery');
      spreadsheet.getActiveSheet().setFormula('H3', 'Priority Delivery');
      spreadsheet.getActiveSheet().setFormula('H4', 'Pickup at Store');
      spreadsheet.getActiveSheet().setFormula('H5', 'Digital Download');

      // Insert Drop Down form control with input range
      spreadsheet.addFormControl({
        type: 'DropDown',
        target: 'B2',
        name: 'deliveryDropdown',
        caption: 'Select Delivery',
        value: 'Standard Delivery',
        inputRange: '$H$1:$H$5',
        linkedCell: 'D2',
        fontName: 'Calibri',
        fontSize: 14
      });

      // Define the input range for second dropdown
      spreadsheet.insertRange('I1:I4', 'I', false);
      
      // Set dropdown values for payment methods
      spreadsheet.getActiveSheet().setFormula('I1', 'Cash on Delivery');
      spreadsheet.getActiveSheet().setFormula('I2', 'Credit Card');
      spreadsheet.getActiveSheet().setFormula('I3', 'Debit Card');
      spreadsheet.getActiveSheet().setFormula('I4', 'Online Payment');

      // Insert second Drop Down form control
      spreadsheet.addFormControl({
        type: 'DropDown',
        target: 'B4',
        name: 'paymentDropdown',
        caption: 'Select Payment',
        value: 'Cash on Delivery',
        inputRange: '$I$1:$I$4',
        linkedCell: 'D4'
      });

      // Define the input range for priority dropdown
      spreadsheet.insertRange('J1:J3', 'J', false);
      
      // Set dropdown values for priority
      spreadsheet.getActiveSheet().setFormula('J1', 'Low');
      spreadsheet.getActiveSheet().setFormula('J2', 'Medium');
      spreadsheet.getActiveSheet().setFormula('J3', 'High');

      // Insert third Drop Down form control
      spreadsheet.addFormControl({
        type: 'DropDown',
        target: 'B6',
        name: 'priorityDropdown',
        caption: 'Select Priority',
        value: 'Medium',
        inputRange: '$J$1:$J$3',
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
