<template>
  <div>
    <ejs-dropdownbutton :items='items' :select='itemSelect'>Print</ejs-dropdownbutton>
    <ejs-spreadsheet id="spreadsheet" ref="spreadsheet" :created="created" :dataBound="dataBound">
      <e-sheets>
        <e-sheet name="Budget">
          <e-ranges>
            <e-range :dataSource="dataSource1"></e-range>
          </e-ranges>
          <e-columns>
            <e-column :width=100></e-column>
            <e-column :width=100></e-column>
            <e-column :width=100></e-column>
            <e-column :width=100></e-column>
          </e-columns>
        </e-sheet>
        <e-sheet name="Salary">
          <e-ranges>
            <e-range :dataSource="dataSource2"></e-range>
          </e-ranges>
          <e-columns>
            <e-column :width=100></e-column>
            <e-column :width=100></e-column>
            <e-column :width=100></e-column>
            <e-column :width=100></e-column>
          </e-columns>
        </e-sheet>
      </e-sheets>
    </ejs-spreadsheet>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet, ColumnsDirective as EColumns, ColumnDirective as EColumn, RangesDirective as ERanges, RangeDirective as ERange, SheetsDirective as ESheets, SheetDirective as ESheet } from "@syncfusion/ej2-vue-spreadsheet";
import { salaryData, budgetData } from './data.js';
import { DropDownButtonComponent as EjsDropdownbutton } from "@syncfusion/ej2-vue-splitbuttons";
import { createElement, getComponent, print } from '@syncfusion/ej2-base';

const spreadsheet = ref(null);
let printElement = createElement("div", {
  className: "e-sheet-panel",
  innerHTML:
    '<div class="e-spreadsheet-print"></div><div class="e-sheet"><div class="e-main-panel style="height:100%" style="overflow: unset"><div class="e-sheet-content" ></div></div></div>'
}) // creating same hierarchy of element as DOM
let isPrint = false;

const dataSource1 = budgetData;
const dataSource2 = salaryData;
const items = [
  {
    text: "Print"
  },
  {
    text: "Print All"
  }];

const created = function () {
  spreadsheet.value.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
  spreadsheet.value.cellFormat({ fontWeight: 'bold' }, 'A11:D11');
  spreadsheet.value.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Salary!A1:D1');
}

const itemSelect = function (args) {
  if (args.item.text === 'Print') {
    printElement.querySelector(".e-sheet-content").innerHTML = document.querySelector(
      ".e-sheet-content"
    ).outerHTML; //  To add the spreadsheet table
    let usedRange = spreadsheet.value.getActiveSheet().usedRange;
    let tbody = printElement.querySelector('tbody');
    for (let i = tbody.getElementsByClassName('e-row').length; i >= 0; i--) {
      if (tbody.getElementsByClassName('e-row')[i] && parseInt(tbody.getElementsByClassName('e-row')[i].getAttribute('aria-rowindex'), 10) > usedRange.rowIndex + 1) {
        tbody.getElementsByClassName('e-row')[i].remove();
      }
    }
    (printElement.querySelector('.e-sheet-content').children[0].getElementsByClassName('e-virtualtrack')[0]).style.height = 'auto';
    print(printElement);
    printElement.querySelector(".e-sheet-content").innerHTML = '';
  }
  if (args.item.text === 'Print All') {
    let sheets = spreadsheet.value.sheets;
    if (spreadsheet.value.activeSheetIndex === 0) {
      printElement.querySelector(".e-sheet-content").innerHTML = document.querySelector(
        ".e-sheet-content"
      ).outerHTML; //  To add the spreadsheet table

      let usedRange1 = spreadsheet.value.getActiveSheet().usedRange;
      let tbody1 = printElement.querySelector('tbody');
      for (let a = tbody1.getElementsByClassName('e-row').length; a >= 0; a--) {
        if (tbody1.getElementsByClassName('e-row')[a] && parseInt(tbody1.getElementsByClassName('e-row')[a].getAttribute('aria-rowindex'), 10) > usedRange1.rowIndex + 1) {
          tbody1.getElementsByClassName('e-row')[a].remove();
        }
      }

      if (sheets[spreadsheet.value.activeSheetIndex + 1]) {
        spreadsheet.value.goTo(sheets[spreadsheet.value.activeSheetIndex + 1].name + "!A1");
        isPrint = true;
      } else {
        print(printElement);
        printElement.querySelector(".e-sheet-content").innerHTML = '';
      }
    } else {
      if (sheets[0]) {
        spreadsheet.value.goTo(sheets[0].name + "!A1");
        isPrint = true;
      }
    }
  }
}

const dataBound = function () {
  if (isPrint) {
    printElement.querySelector(
      '.e-sheet-content'
    ).innerHTML += document.querySelector('.e-sheet-content').outerHTML;
    let usedRange = spreadsheet.value.getActiveSheet()
      .usedRange;
    let tbody = printElement
      .querySelector('.e-sheet-content')
      .children[spreadsheet.value.activeSheetIndex].querySelector('tbody');
    for (
      let i = tbody.getElementsByClassName('e-row').length;
      i >= 0;
      i--
    ) {
      if (
        tbody.getElementsByClassName('e-row')[i] &&
        parseInt(tbody.getElementsByClassName('e-row')[i].getAttribute('aria-rowindex'), 10) > usedRange.rowIndex + 1) {
        tbody.getElementsByClassName('e-row')[i].remove();
      }
    }
    let sheets = spreadsheet.value.sheets;
    if (sheets.length - 1 === spreadsheet.value.activeSheetIndex) {
      let count = printElement.querySelector('.e-sheet-content')
        .childElementCount;
      if (count > 1) {
        for (let j = 0; j < count; j++) {
          (printElement
            .querySelector('.e-sheet-content')
            .children[j].getElementsByClassName(
              'e-virtualtrack'
            )[0]).style.height = 'auto';
          printElement
            .querySelector('.e-sheet-content')
            .children[j].setAttribute('style', 'page-break-after: always;');
        }
      }
      print(printElement);
      isPrint = false;
      printElement.querySelector('.e-sheet-content').innerHTML = '';
    } else {
      if (sheets[spreadsheet.value.activeSheetIndex + 1]) {
        spreadsheet.value.goTo(
          sheets[spreadsheet.value.activeSheetIndex + 1].name + '!A1'
        );
      }
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
