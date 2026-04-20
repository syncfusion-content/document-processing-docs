import Vue from 'vue';
import { SpreadsheetPlugin } from '@syncfusion/ej2-vue-spreadsheet';
import { getDefaultData } from './data.js';

Vue.use(SpreadsheetPlugin);

new Vue({
  el: '#app',
  template: `
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
  `,
  data() {
    return {
      defaultData: getDefaultData,
    };
  },
  methods: {
    onActionBegin(args) {
      // Force paste to values only
      if (args && args.action === 'clipboard' && args.args && args.args.eventArgs) {
        args.args.eventArgs.type = 'Values';
      }
    },
  },
});