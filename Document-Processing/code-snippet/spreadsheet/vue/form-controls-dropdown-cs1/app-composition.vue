<template>
    <ejs-spreadsheet ref="spreadsheet" :created="created">
        <e-sheets>
            <e-sheet name="Price Details">
                <e-ranges>
                    <e-range :dataSource="dataSource"></e-range>
                </e-ranges>

                <e-formcontrols>
                    <e-formcontrol
                        type="DropDown"
                        text="Drop Down 1"
                        cellLink="G1"
                        inputRange: "A1:A10"
                        :height="40"
                        :width="180"
                    </e-formcontrol>
                </e-formcontrols>

                <e-rows>
                    <e-row :index="30">
                        <e-cells>
                            <e-cell
                                :index="4"
                                value="Total Amount:"
                                :style="boldRight">
                            </e-cell>
                            <e-cell
                                formula="=SUM(F2:F30)"
                                :style="bold">
                            </e-cell>
                        </e-cells>
                    </e-row>
                </e-rows>

                <e-columns>
                    <e-column :width="180"></e-column>
                    <e-column :width="130"></e-column>
                    <e-column :width="130"></e-column>
                    <e-column :width="180"></e-column>
                    <e-column :width="130"></e-column>
                    <e-column :width="120"></e-column>
                </e-columns>
            </e-sheet>
        </e-sheets>
    </ejs-spreadsheet>
</template>

<script setup>
import { ref } from 'vue';
import {
    SpreadsheetComponent as EjsSpreadsheet,
    SheetsDirective as ESheets,
    SheetDirective as ESheet,
    RowsDirective as ERows,
    RowDirective as ERow,
    CellsDirective as ECells,
    CellDirective as ECell,
    ColumnsDirective as EColumns,
    ColumnDirective as EColumn,
    RangesDirective as ERanges,
    RangeDirective as ERange,
    FormControlsDirective as EFormControls,
    FormControlDirective as EFormControl
} from '@syncfusion/ej2-vue-spreadsheet';

import { defaultData } from './datasource';

const spreadsheet = ref(null);

const dataSource = defaultData;

const boldRight = {
    fontWeight: 'bold',
    textAlign: 'right'
};

const bold = {
    fontWeight: 'bold'
};

const created = function () {
    spreadsheet.value.cellFormat(
        {
            fontWeight: 'bold',
            textAlign: 'center',
            verticalAlign: 'middle'
        },
        'A1:F1'
    );

    spreadsheet.value.numberFormat('$#,##0.00', 'F2:F31');
    spreadsheet.value.numberFormat('m/d/yyyy', 'E2:E30');
};
</script>

<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/spreadsheet/index.css';
</style>