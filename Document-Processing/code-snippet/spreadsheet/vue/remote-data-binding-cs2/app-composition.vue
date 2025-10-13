<template>
    <ejs-spreadsheet ref="spreadsheet" :created="created">
        <e-sheets>
            <e-sheet name="Order Details" :columns="columns">
                <e-ranges>
                    <e-range :dataSource="dataSource"></e-range>
                </e-ranges>
            </e-sheet>
        </e-sheets>
    </ejs-spreadsheet>
</template>

<script setup>
import { ref } from "vue"
import { SpreadsheetComponent as EjsSpreadsheet, RangesDirective as ERanges, RangeDirective as ERange, SheetsDirective as ESheets, SheetDirective as ESheet } from "@syncfusion/ej2-vue-spreadsheet";
import { DataManager, ODataAdaptor } from "@syncfusion/ej2-data";

const spreadsheet = ref(null);
const dataSource = new DataManager({
    // Remote service url.
    url: "https://services.syncfusion.com/vue/production/api/Orders",
    adaptor: new ODataAdaptor(),
    crossDomain: true
});
const columns = [{ width: 80 }, { width: 80 }, { width: 80 }, { width: 80 }, { width: 80 }, { width: 80 }, { width: 280 }, { width: 180 }, { width: 80 }, { width: 180 }, { width: 180 }];
const created = function () {
    //Applies cell and number formatting to specified range of the active sheet.
    spreadsheet.value.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:K1');
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
