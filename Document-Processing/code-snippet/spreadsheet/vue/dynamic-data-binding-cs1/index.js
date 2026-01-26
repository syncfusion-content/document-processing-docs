
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { tradeData, defaultData } from './data.js';
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ButtonPlugin);
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
    <div>
    <div>
      <ejs-button id="changeDataBtn" class="e-btn" v-on:click.native="dataSourceBtnClick" style="margin-bottom: 10px" >Change Datasource</ejs-button>
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
`,

   data: () => {
    return {
      width1: 110,
      width2: 115,
      width3: 100
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
      var span = document.createElement("span");
      span.innerHTML = html;
      var log = document.getElementById("EventLog");
      log.insertBefore(span, log.firstChild);
    }
  }

});