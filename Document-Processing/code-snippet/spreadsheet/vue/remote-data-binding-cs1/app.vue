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

<script>
import { SpreadsheetComponent, RowsDirective, RowDirective, CellsDirective, CellDirective, RangesDirective, RangeDirective, SheetsDirective, SheetDirective } from "@syncfusion/ej2-vue-spreadsheet";
import { DataManager, Query } from "@syncfusion/ej2-data";

export default {
    name: "App",
    components: {
        "ejs-spreadsheet": SpreadsheetComponent,
        "e-sheets": SheetsDirective,
        "e-sheet": SheetDirective,
        "e-ranges": RangesDirective,
        "e-range": RangeDirective,
        "e-rows": RowsDirective,
        "e-row": RowDirective,
        "e-cells": CellsDirective,
        "e-cell": CellDirective
    },
    data: () => {
        return {
            dataSource: new DataManager({
                // Remote service url.
                url: "https://services.syncfusion.com/vue/production/api/Orders",
                crossDomain: true
            }),
            query: new Query().select(['OrderID', 'CustomerID', 'Freight', 'ShipName', 'ShipCity', 'ShipCountry']).take(200),
            columns: [{ width: 100 }, { width: 130 }, { width: 100 }, { width: 220 }, { width: 150 }, { width: 180 }],
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
