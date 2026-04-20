<template>
    <ejs-spreadsheet ref="spreadsheet" :created="created" :height=515>
        <e-sheets>
            <e-sheet :name="BookSales">
                <e-rows>
                    <e-row :height="height" :cells="cells1"></e-row>
                </e-rows>
                <e-ranges>
                    <e-range :dataSource="dataSource" startCell="A3"></e-range>
                </e-ranges>
                <e-columns>
                    <e-column :width=110></e-column>
                    <e-column :width=100></e-column>
                    <e-column :width=100></e-column>
                    <e-column :width=100></e-column>
                    <e-column :width=100></e-column>
                    <e-column :width=100></e-column>
                </e-columns>
            </e-sheet>
        </e-sheets>
    </ejs-spreadsheet>
</template>

<script setup>
import { ref } from 'vue';
import { SpreadsheetComponent as EjsSpreadsheet, ColumnsDirective as EColumns, ColumnDirective as EColumn, RangesDirective as ERanges, RangeDirective as ERange, RowsDirective as ERows, RowDirective as ERow, SheetsDirective as ESheets, SheetDirective as ESheet, getFormatFromType } from "@syncfusion/ej2-vue-spreadsheet";
import { chartData } from './data.js';

const height = 30;
const BookSales = "Book Sales";
const dataSource = chartData;
const spreadsheet = ref(null);
const cells1 = [
    {
        value: 'Book Sales 2016-2020', style: {
            backgroundColor: '#357cd2', color: '#fff',
            fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle'
        }
    }
]
const created = function () {
    spreadsheet.value.cellFormat({ backgroundColor: '#357cd2', color: '#fff', fontWeight: 'bold', textAlign: 'center' }, 'A3:F3');
    spreadsheet.value.numberFormat(getFormatFromType('Currency'), 'B4:F8');
    spreadsheet.value.merge('A1:F1');
    //Render Column chart
    spreadsheet.value.insertChart([{ type: 'Column', theme: 'Bootstrap5Dark', range: 'A3:B6', id: 'column-chart' }]);
    //Render Line chart with Marker
    spreadsheet.value.insertChart([{ type: 'Line', range: 'A3:B6', markerSettings: { visible: true, shape: 'Circle', isFilled: false, size: 10, border: { width: 2, color: '#3cb371' } }, id: 'line-chart' }]);
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
