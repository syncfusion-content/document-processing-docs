<template>
  <ejs-spreadsheet
    ref="spreadsheet"
    :actionBegin="onActionBegin">
    <e-sheets>
      <e-sheet :name="'Sheet1'">
        <e-ranges>
          <e-range :dataSource="defaultData" :startCell="'A1'"></e-range>
        </e-ranges>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script setup>
import { ref } from 'vue';
import {
  SpreadsheetComponent as EjsSpreadsheet,
  ColumnsDirective as EColumns,
  ColumnDirective as EColumn,
  RangesDirective as ERanges,
  RangeDirective as ERange,
  SheetsDirective as ESheets,
  SheetDirective as ESheet
} from '@syncfusion/ej2-vue-spreadsheet';
import { getDefaultData } from './data.js';

const spreadsheet = ref(null);
const defaultData = getDefaultData();

const onActionBegin = (args) => {
  const action = args.action;
  const eventArgs = args.args && args.args.eventArgs;
  if (action === 'beforeReplaceAll' && eventArgs) {
    const ss = spreadsheet.value && spreadsheet.value.ej2Instances;
    if (!ss) return;
    const selectedRange = ss.getActiveSheet().selectedRange;
    if (!selectedRange) return;
    const selectedRangeCollection = generateCellCollection(selectedRange, ss);
    const replaceAllCollection = eventArgs.addressCollection;
    if (!Array.isArray(replaceAllCollection)) return;
    const selectedSet = new Set(selectedRangeCollection);
    const updatedCollection = replaceAllCollection.map(cell =>
      cell && selectedSet.has(cell) ? cell : null
    );
    if (updatedCollection.length > 0) {
      eventArgs.addressCollection = updatedCollection;
    }
  }
};

const generateCellCollection = (range, ss) => {
  const collection = [];
  let [startCell, endCell] = range.split(':');
  endCell = endCell || startCell;
  const activeSheetName = ss.getActiveSheet().name;
  const matchParts = (cellRef) => cellRef.match(/[A-Z]+|\d+/g) || [];
  const [startCol, startRowStr] = matchParts(startCell);
  const [endCol, endRowStr] = matchParts(endCell);
  const colRange = [
    startCol.toUpperCase().charCodeAt(0),
    endCol.toUpperCase().charCodeAt(0),
  ];
  const rowRange = [parseInt(startRowStr, 10), parseInt(endRowStr, 10)];
  for (let col = colRange[0]; col <= colRange[1]; col++) {
    for (let row = rowRange[0]; row <= rowRange[1]; row++) {
      collection.push(`${activeSheetName}!${String.fromCharCode(col)}${row}`);
    }
  }
  return collection;
};
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