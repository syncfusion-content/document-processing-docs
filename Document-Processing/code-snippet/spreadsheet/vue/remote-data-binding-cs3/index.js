
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
    <ejs-spreadsheet ref="spreadsheet">
            <e-sheets>
                <e-sheet name="Order Details" :columns="columns" :created="created">
                    <e-ranges>
                        <e-range :dataSource="dataSource"></e-range>
                    </e-ranges>
                </e-sheet>
            </e-sheets>
        </ejs-spreadsheet>
`,

   data: () => {
    return {
     dataSource: new DataManager({
                    // Remote service url
                    url: 'https://services.syncfusion.com/vue/production/api/Orders',
                    adaptor: new WebApiAdaptor(),
                    crossDomain: true
                }),
        columns: [{ width: 80 }, { width: 80 }, { width: 80 }, { width: 80 }, { width: 80 }, { width: 80 }, { width: 280 }, { width: 180 }, { width: 80 }, { width: 180 }, { width: 180 }],
    }
  },
  methods: {
    created: function () {
        //Applies cell and number formatting to specified range of the active sheet
        this.$refs.spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' },'A1:K1');
      }
    }

});