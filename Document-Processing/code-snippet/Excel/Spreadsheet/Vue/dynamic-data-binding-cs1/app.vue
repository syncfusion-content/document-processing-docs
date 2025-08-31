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

<script>
import { SpreadsheetComponent, ColumnsDirective, ColumnDirective, RangesDirective, RangeDirective, SheetsDirective, SheetDirective } from "@syncfusion/ej2-vue-spreadsheet";
import { tradeData, defaultData } from './data.js';
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  name: "App",
  components: {
    "ejs-button": ButtonComponent,
    "ejs-spreadsheet": SpreadsheetComponent,
    "e-sheets": SheetsDirective,
    "e-sheet": SheetDirective,
    "e-ranges": RangesDirective,
    "e-range": RangeDirective,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective
  },
  data: () => {
    return {
      width1: 110,
      width2: 115,
      width3: 100,
      dataSource: tradeData
    }
  },
  methods: {
    dataSourceChanged: function (args) {
      this.appendElement("Data source changed with" + "<b>&nbsp;" + args.action + "</b> action<hr>"
      );
    },

    dataSourceBtnClick: function () {
      this.$refs.spreadsheet.ej2Instances.sheets[0].ranges[0].dataSource = defaultData;
    },

    clearBtnClick: function () {
      document.getElementById("EventLog").innerHTML = "";
    },

    appendElement: function (html) {
      let span = document.createElement("span");
      span.innerHTML = html;
      let log = document.getElementById("EventLog");
      log.insertBefore(span, log.firstChild);
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
