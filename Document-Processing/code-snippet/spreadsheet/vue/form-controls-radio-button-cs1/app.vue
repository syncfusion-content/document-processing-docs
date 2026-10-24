<template>
  <div>
    <ejs-spreadsheet ref="spreadsheetRef" :showFormulaBar="false" :allowFormControl="true">
      <e-sheets>
        <e-sheet name="RadioButtonDemo" :formControls="formControls">
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
      formControls: [
        // Shipping options group - linked to same cell (D2)
        {
          type: 'RadioButton',
          text: 'Standard Shipping',
          cellLink: 'D2',
          value: 'Unchecked',
          top: 40,
          left: 150,
          height: 20,
          width: 120
        },
        {
          type: 'RadioButton',
          text: 'Express Shipping',
          cellLink: 'D2',
          value: 'Unchecked',
          top: 70,
          left: 150,
          height: 20,
          width: 120
        },
        {
          type: 'RadioButton',
          text: 'Overnight Shipping',
          cellLink: 'D2',
          value: 'Unchecked',
          top: 100,
          left: 150,
          height: 20,
          width: 120
        },
        // Payment options group - linked to same cell (D4)
        {
          type: 'RadioButton',
          text: 'Credit Card',
          cellLink: 'D4',
          value: 'Unchecked',
          top: 160,
          left: 150,
          height: 20,
          width: 120
        },
        {
          type: 'RadioButton',
          text: 'Debit Card',
          cellLink: 'D4',
          value: 'Unchecked',
          top: 190,
          left: 150,
          height: 20,
          width: 120
        },
        {
          type: 'RadioButton',
          text: 'Wire Transfer',
          cellLink: 'D4',
          value: 'Unchecked',
          top: 220,
          left: 150,
          height: 20,
          width: 120
        }
      ],
      boldCenter: { fontWeight: 'bold', textAlign: 'center' }
    }
  }
}
</script>
