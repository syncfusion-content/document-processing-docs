<template>
    <ejs-spreadsheet ref="spreadsheet" :created="created">
        <e-sheets>
            <e-sheet name="Price Details">
                <e-ranges>
                    <e-range :dataSource="dataSource"></e-range>
                </e-ranges>

                <e-formcontrols>
                    <e-formcontrol
                        type="CheckBox"
                        text="Check Box 1"
                        cellLink="G1"
                        :height="40"
                        :width="180"
                        :rowIndex="11"
                        :colIndex="0">
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

<script>
import {
    SpreadsheetComponent,
    SheetsDirective,
    SheetDirective,
    RowsDirective,
    RowDirective,
    CellsDirective,
    CellDirective,
    ColumnsDirective,
    ColumnDirective,
    RangesDirective,
    RangeDirective,
    FormControlsDirective,
    FormControlDirective
} from '@syncfusion/ej2-vue-spreadsheet';

import { defaultData } from './datasource';

export default {
    name: 'App',
    components: {
        'ejs-spreadsheet': SpreadsheetComponent,
        'e-sheets': SheetsDirective,
        'e-sheet': SheetDirective,
        'e-rows': RowsDirective,
        'e-row': RowDirective,
        'e-cells': CellsDirective,
        'e-cell': CellDirective,
        'e-ranges': RangesDirective,
        'e-range': RangeDirective,
        'e-columns': ColumnsDirective,
        'e-column': ColumnDirective,
        'e-formcontrols': FormControlsDirective,
        'e-formcontrol': FormControlDirective
    },

    data: () => {
        return {
            dataSource: defaultData,
            boldRight: {
                fontWeight: 'bold',
                textAlign: 'right'
            },
            bold: {
                fontWeight: 'bold'
            }
        };
    },

    methods: {
        created: function () {
            const spreadsheet = this.$refs.spreadsheet;

            spreadsheet.cellFormat(
                {
                    fontWeight: 'bold',
                    textAlign: 'center',
                    verticalAlign: 'middle'
                },
                'A1:F1'
            );

            spreadsheet.numberFormat('$#,##0.00', 'F2:F31');
            spreadsheet.numberFormat('m/d/yyyy', 'E2:E30');
        }
    }
};
</script>

<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/spreadsheet/index.css';
</style>