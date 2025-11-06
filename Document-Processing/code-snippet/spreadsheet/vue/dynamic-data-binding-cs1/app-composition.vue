<template>
  <div>
    <div>
      <ejs-button id="changeDataBtn" class="e-btn" v-on:click.native="dataSourceBtnClick"
        style="margin-bottom: 10px">Change Datasource</ejs-button>
      <ejs-spreadsheet ref="spreadsheet" :dataSourceChanged="dataSourceChanged">
        <e-sheets>
          <e-sheet name="Car Sales Report">
            <e-ranges>
              <e-range :dataSource="dataSource"></e-range>
            </e-ranges>
            <e-columns>
              <e-column :width="width1"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width1"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width3"></e-column>
            </e-columns>
          </e-sheet>
        </e-sheets>
      </ejs-spreadsheet>
    </div>
    <div>
      <h4><b>Event Trace</b></h4>
      <div id="evt" style="border: 1px solid #dcdcdc;padding: 10px;">
        <div style="height:173px;overflow: auto;min-width: 250px;">
          <span id="EventLog" style="word-break: normal;"></span>
        </div>
        <ejs-button id="clearBtn" class='e-btn'>Clear</ejs-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet, ColumnsDirective as EColumns, ColumnDirective as EColumn, RangesDirective as ERanges, RangeDirective as ERange, SheetsDirective as ESheets, SheetDirective as ESheet } from "@syncfusion/ej2-vue-spreadsheet";
import { tradeData, defaultData } from './data.js';
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";

const spreadsheet = ref(null);
const width1 = 110;
const width2 = 115;
const width3 = 100;
const dataSource = tradeData;

const dataSourceChanged = function (args) {
  appendElement("Data source changed with" + "<b>&nbsp;" + args.action + "</b> action<hr>");
}

const dataSourceBtnClick = function () {
  spreadsheet.value.ej2Instances.sheets[0].ranges[0].dataSource = defaultData;
}

const clearBtnClick = function () {
  document.getElementById("EventLog").innerHTML = "";
}

const appendElement = function (html) {
  let span = document.createElement("span");
  span.innerHTML = html;
  let log = document.getElementById("EventLog");
  log.insertBefore(span, log.firstChild);
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
