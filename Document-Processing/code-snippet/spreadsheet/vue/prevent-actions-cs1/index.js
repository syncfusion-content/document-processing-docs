
import Vue from "vue";
import { SpreadsheetPlugin, getRangeIndexes, getCellIndexes } from "@syncfusion/ej2-vue-spreadsheet";
import { defaultData } from './data.js';
Vue.use(SpreadsheetPlugin);

new Vue({
  el: '#app',
  template: `<div>
  <ejs-spreadsheet ref="spreadsheet" :created="created" :cellEdit="cellEdit" :actionBegin="actionBegin">
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
      readOnlyColumns: [0, 2]
    }
  },
  methods: {
    created: function () {
      var spreadsheet = this.$refs.spreadsheet;
      spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
    },
    cellEdit: function (args) {
        var addressRange = getCellIndexes(args.address.split('!')[1]);
        // preventing cellEditing from the readOnly columns
        if (this.readOnlyColumns.includes(addressRange[1])) {
            args.cancel = true;
        }
    },
    actionBegin: function (args) {
        var address;
        if (args.action == "clipboard") {
            address = args.args.eventArgs.pastedRange;
        }
        else if (args.action == "autofill") {
            address = args.args.eventArgs.fillRange;
        }
        else if (args.action == "format" || args.action == "validation" || args.action == "conditionalFormat") {
            address = args.args.eventArgs.range;
        }
        else if (args.action == "cut") {
            address = args.args.copiedRange
        }
        if (address) {
            var addressRange = getRangeIndexes(address);
            var colStart = addressRange[1];
            var colEnd = addressRange[3];
            // preventing other actions from the readOnly columns
            for (var col = colStart; col <= colEnd; col++) {
                if (readOnlyColumns.includes(col)) {
                    if (args.args.action == "cut") {
                        args.args.cancel = true;
                    } else {
                        args.args.eventArgs.cancel = true;
                    }
                    break;
                }
            }
        }
    }
  }
});