<template>
    <ejs-spreadsheet>
        <e-sheets>
            <e-sheet name="Shipment Details" :columns="columns">
                <e-ranges>
                    <e-range :dataSource="dataSource" :query="query" :showFieldAsHeader="false"
                        startCell="A2"></e-range>
                </e-ranges>
                <e-rows>
                    <e-row>
                        <e-cells>
                            <e-cell value="Order ID"></e-cell>
                            <e-cell value="Customer Name"></e-cell>
                            <e-cell value="Freight"></e-cell>
                            <e-cell value="Ship Name"></e-cell>
                            <e-cell value="Ship City"></e-cell>
                            <e-cell value="Ship Country"></e-cell>
                        </e-cells>
                    </e-row>
                </e-rows>
            </e-sheet>
        </e-sheets>
    </ejs-spreadsheet>
</template>

<script setup>
import { SpreadsheetComponent as EjsSpreadsheet, RowsDirective as ERows, RowDirective as ERow, CellsDirective as ECells, CellDirective as ECell, RangesDirective as ERanges, RangeDirective as ERange, SheetsDirective as ESheets, SheetDirective as ESheet } from "@syncfusion/ej2-vue-spreadsheet";
import { DataManager, Query } from "@syncfusion/ej2-data";
import { defaultData } from './data.js';

const dataSource = new DataManager({
    // Remote service url.
    url: "https://services.syncfusion.com/vue/production/api/Orders",
    crossDomain: true
})
const query = new Query().select(['OrderID', 'CustomerID', 'Freight', 'ShipName', 'ShipCity', 'ShipCountry']).take(200);
const columns = [{ width: 100 }, { width: 130 }, { width: 100 }, { width: 220 }, { width: 150 }, { width: 180 }];
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
