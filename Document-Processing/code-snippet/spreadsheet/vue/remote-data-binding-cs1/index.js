
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { DataManager, Query } from "@syncfusion/ej2-data";
import { defaultData } from './data.js';
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
    <ejs-spreadsheet>
            <e-sheets>
                <e-sheet name="Shipment Details" :columns="columns">
                    <e-ranges>
                        <e-range :dataSource="dataSource" :query="query" :showFieldAsHeader="false" startCell="A2"></e-range>
                    </e-ranges>
                    <e-rows>
                        <e-row>
                            <e-cells>
                                <e-cell value="Order ID"></e-cell>
                                <e-cell value="Customer Name"></e-cell>
                                <e-cell value="Freight"></e-cell>
                                <e-cell value="Ship Name"></e-cell>
                                <e-cell value="Ship City"></e-cell>
                                <e-cell value="Ship Country"></e-cell>
                            </e-cells>
                        </e-row>
                    </e-rows>
                </e-sheet>
            </e-sheets>
        </ejs-spreadsheet>
`,

   data: () => {
    return {
     dataSource: new DataManager({
                    // Remote service url
                    url: 'https://services.syncfusion.com/vue/production/api/Orders',
                    crossDomain: true
                }),
        query: new Query().select(['OrderID', 'CustomerID', 'Freight', 'ShipName', 'ShipCity', 'ShipCountry']).take(200),
        columns: [{ width: 100 }, { width: 130 }, { width: 100 }, { width: 220 }, { width: 150 }, { width: 180 }],
    }
  }

});