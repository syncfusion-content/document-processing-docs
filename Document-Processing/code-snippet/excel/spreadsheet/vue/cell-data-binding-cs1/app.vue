<template>
    <ejs-spreadsheet>
        <e-sheets>
            <e-sheet name="Monthly Budget">
                <e-rows>
                    <e-row>
                        <e-cells>
                            <e-cell value="Category"></e-cell>
                            <e-cell value="Planned cost"></e-cell>
                            <e-cell value="Actual cost"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row>
                        <e-cells>
                            <e-cell value="Food"></e-cell>
                            <e-cell value="$7000"></e-cell>
                            <e-cell value="$8120"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row>
                        <e-cells>
                            <e-cell value="Loan"></e-cell>
                            <e-cell value="$1500"></e-cell>
                            <e-cell value="$1500"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row>
                        <e-cells>
                            <e-cell value="Medical"></e-cell>
                            <e-cell value="$300"></e-cell>
                            <e-cell value="$0"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row>
                        <e-cells>
                            <e-cell value="Clothing"></e-cell>
                            <e-cell value="$400"></e-cell>
                            <e-cell value="$140"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row>
                        <e-cells>
                            <e-cell value="Education"></e-cell>
                            <e-cell value="$900"></e-cell>
                            <e-cell value="$750"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row>
                        <e-cells>
                            <e-cell value="Insurance"></e-cell>
                            <e-cell value="$30"></e-cell>
                            <e-cell value="$30"></e-cell>
                        </e-cells>
                    </e-row>
                </e-rows>
                <e-columns>
                    <e-column :width="width1"></e-column>
                    <e-column :width="width2"></e-column>
                    <e-column :width="width1"></e-column>
                </e-columns>
            </e-sheet>
        </e-sheets>
    </ejs-spreadsheet>
</template>

<script>

import { SpreadsheetComponent, SheetsDirective, SheetDirective, ColumnsDirective, ColumnDirective, RowsDirective, RowDirective, CellsDirective, CellDirective } from "@syncfusion/ej2-vue-spreadsheet";

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

    data: () => {
        return {
            width1: 110,
            width2: 115,
            width3: 100
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