<template>
    <ejs-spreadsheet ref="spreadsheet" :beforeHyperlinkClick="beforeHyperlinkClick">
        <e-sheets>
            <e-sheet name="PriceDetails">
                <e-rows>
                    <e-row>
                        <e-cells>
                            <e-cell value="Item Name"></e-cell>
                            <e-cell value="Stock Detail"></e-cell>
                            <e-cell value="Website"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row>
                        <e-cells>
                            <e-cell value="Casual Shoes"></e-cell>
                            <e-cell value="OUT OF STOCK"></e-cell>
                            <e-cell value="Amazon" hyperlink="https://www.amazon.com/"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row>
                        <e-cells>
                            <e-cell value="Sports Shoes"></e-cell>
                            <e-cell value="IN STOCK" hyperlink="Stock!A2:B2"></e-cell>
                            <e-cell value="Overstack" hyperlink="https://www.overstock.com/"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row>
                        <e-cells>
                            <e-cell value="Formal Shoes"></e-cell>
                            <e-cell value="IN STOCK" hyperlink="Stock!A3:B3"></e-cell>
                            <e-cell value="AliExpress" hyperlink="https://www.aliexpress.com/"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row>
                        <e-cells>
                            <e-cell value="Sandals & Floaters"></e-cell>
                            <e-cell value="OUT OF STOCK"></e-cell>
                            <e-cell value="AliBaba" hyperlink="https://www.aliBaba.com/"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row>
                        <e-cells>
                            <e-cell value="Flip-Flops & Slippers"></e-cell>
                            <e-cell value="IN STOCK" hyperlink="Stock!A4:B4"></e-cell>
                            <e-cell value="Taobao" hyperlink="https://www.taobao.com/"></e-cell>
                        </e-cells>
                    </e-row>
                </e-rows>
                <e-columns>
                    <e-column :width="width1"></e-column>
                    <e-column :width="width1"></e-column>
                    <e-column :width="width2"></e-column>
                </e-columns>
            </e-sheet>
            <e-sheet name="Stock">
                <e-rows>
                    <e-row>
                        <e-cells>
                            <e-cell value="Item Name"></e-cell>
                            <e-cell value="Available Count"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row>
                        <e-cells>
                            <e-cell value="Sports Shoes"></e-cell>
                            <e-cell value="30"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row>
                        <e-cells>
                            <e-cell value="Formal Shoes"></e-cell>
                            <e-cell value="25"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row>
                        <e-cells>
                            <e-cell value="Flip-Flops & Slippers"></e-cell>
                            <e-cell value="40"></e-cell>
                        </e-cells>
                    </e-row>
                    <e-row>
                        <e-cells>
                            <e-cell value="Running Shoes"></e-cell>
                            <e-cell value="25"></e-cell>
                        </e-cells>
                    </e-row>
                </e-rows>
                <e-columns>
                    <e-column :width="width1"></e-column>
                    <e-column :width="width2"></e-column>
                </e-columns>
            </e-sheet>
        </e-sheets></ejs-spreadsheet>
</template>

<script>
import { SpreadsheetComponent, ColumnsDirective, ColumnDirective, RowsDirective, RowDirective, CellsDirective, CellDirective, RangesDirective, RangeDirective, SheetsDirective, SheetDirective } from "@syncfusion/ej2-vue-spreadsheet";

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
            width1: 160,
            width2: 120,
        }
    },
    methods: {
        beforeHyperlinkClick: function (args) {
            args.target = '_self'; //change target attribute
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
