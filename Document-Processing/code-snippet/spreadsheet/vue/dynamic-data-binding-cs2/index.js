
import Vue from "vue";
import { SpreadsheetPlugin, getRangeIndexes, getSwapRange, getRangeAddress } from "@syncfusion/ej2-vue-spreadsheet";
import { defaultData } from './data.js';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
Vue.use(SpreadsheetPlugin);

new Vue({
  el: '#app',
  template: `<div>
  <ejs-button class="e-btn custom-btn" @click="updateDataCollection">Update Dynamic Content</ejs-button>
  <ejs-spreadsheet ref="spreadsheet" :created="created">
    <e-sheets>
      <e-sheet>
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
    </e-sheets></ejs-spreadsheet>
</div>
`,

  data: () => {
    return {
      dataSource: defaultData,
      width1: 180,
      width2: 130,
      width3: 120,
    }
  },
  methods: {
    created: function () {
      var spreadsheet = this.$refs.spreadsheet;
      spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
    },
    updateDataCollection: function () {
      var spreadsheet = this.$refs.spreadsheet;
      var newDataCollection = {
        dataSource: [
          {
            'Payment Mode': 'Debit Card',
            'Delivery Date': '07/11/2015',
            'Amount': '8529.22',
          },
          {
            'Payment Mode': 'Cash On Delivery',
            'Delivery Date': '7/13/2016',
            'Amount': '17866.19',
          },
          {
            'Payment Mode': 'Net Banking',
            'Delivery Date': '09/04/2015',
            'Amount': '13853.09',
          },
          {
            'Payment Mode': 'Credit Card',
            'Delivery Date': '12/15/2017',
            'Amount': '2338.74',
          },
          {
            'Payment Mode': 'Credit Card',
            'Delivery Date': '10/08/2014',
            'Amount': '9578.45',
          },
          {
            'Payment Mode': 'Cash On Delivery',
            'Delivery Date': '7/01/2017',
            'Amount': '19141.62',
          },
          {
            'Payment Mode': 'Credit Card',
            'Delivery Date': '12/20/2015',
            'Amount': '6543.30',
          },
          {
            'Payment Mode': 'Credit Card',
            'Delivery Date': '11/24/2014',
            'Amount': '13035.06',
          },
          {
            'Payment Mode': 'Debit Card',
            'Delivery Date': '05/12/2014',
            'Amount': '18488.80',
          },
          {
            'Payment Mode': 'Net Banking',
            'Delivery Date': '12/30/2014',
            'Amount': '12317.04',
          },
          {
            'Payment Mode': 'Credit Card',
            'Delivery Date': '12/18/2013',
            'Amount': '6230.13',
          },
          {
            'Payment Mode': 'Cash On Delivery',
            'Delivery Date': '02/02/2015',
            'Amount': '9709.49',
          },
          {
            'Payment Mode': 'Debit Card',
            'Delivery Date': '11/19/2014',
            'Amount': '9766.10',
          },
          {
            'Payment Mode': 'Net Banking',
            'Delivery Date': '02/08/2014',
            'Amount': '7685.49',
          },
          {
            'Payment Mode': 'Debit Card',
            'Delivery Date': '08/05/2016',
            'Amount': '18012.45',
          },
          {
            'Payment Mode': 'Credit Card',
            'Delivery Date': '05/30/2016',
            'Amount': '2785.49',
          },
          {
            'Payment Mode': 'Debit Card',
            'Delivery Date': '12/10/2016',
            'Amount': '9967.74',
          },
        ],
        startCell: 'D1',
      };
      spreadsheet.updateRange(newDataCollection, 0);
    },
  }
});