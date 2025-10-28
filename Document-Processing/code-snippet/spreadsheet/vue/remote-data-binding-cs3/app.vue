<template>
    <ejs-spreadsheet ref="spreadsheet">
        <e-sheets>
            <e-sheet name="Order Details" :columns="columns" :created="created">
                <e-ranges>
                    <e-range :dataSource="dataSource"></e-range>
                </e-ranges>
            </e-sheet>
        </e-sheets>
    </ejs-spreadsheet>
</template>

<script>
import { SpreadsheetComponent, RangesDirective, RangeDirective, SheetsDirective, SheetDirective } from "@syncfusion/ej2-vue-spreadsheet";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";

export default {
    name: "App",
    components: {
        "ejs-spreadsheet": SpreadsheetComponent,
        "e-sheets": SheetsDirective,
        "e-sheet": SheetDirective,
        "e-ranges": RangesDirective,
        "e-range": RangeDirective
    },
    data: () => {
        return {
            dataSource: new DataManager({
                // Remote service url.
                url: "https://services.syncfusion.com/vue/production/api/Orders",
                adaptor: new WebApiAdaptor(),
                crossDomain: true
            }),
            columns: [{ width: 80 }, { width: 80 }, { width: 80 }, { width: 80 }, { width: 80 }, { width: 80 }, { width: 280 }, { width: 180 }, { width: 80 }, { width: 180 }, { width: 180 }],
        }
    },
    methods: {
        created: function () {
            //Applies cell and number formatting to specified range of the active sheet.
            this.$refs.spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:K1');
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
