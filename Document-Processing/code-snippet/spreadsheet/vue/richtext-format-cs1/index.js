import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";

Vue.use(SpreadsheetPlugin);

new Vue({
  el: '#app',
  template: `
    <ejs-spreadsheet ref="spreadsheet" :showFormulaBar="false" :created="onCreated">
      <e-sheets>
        <e-sheet>
          <e-columns>
            <e-column :width="200"></e-column>
          </e-columns>
          <e-rows>
            <e-row>
              <e-cells>
                <e-cell value="Plain Text"></e-cell>
              </e-cells>
            </e-row>

            <e-row>
              <e-cells>
                <e-cell
                  value="Mineral Water H2O"
                  :richText="[
                    { text: 'Mineral Water H' },
                    { text: '2', style: { verticalAlign: 'sub' } },
                    { text: 'O' }
                  ]">
                </e-cell>
              </e-cells>
            </e-row>

            <e-row>
              <e-cells>
                <e-cell
                  value="Energy Supplement C6H12O6"
                  :richText="[
                    { text: 'Energy Supplement C' },
                    { text: '6', style: { verticalAlign: 'sub' } },
                    { text: 'H' },
                    { text: '12', style: { verticalAlign: 'sub' } },
                    { text: 'O' },
                    { text: '6', style: { verticalAlign: 'sub' } }
                  ]">
                </e-cell>
              </e-cells>
            </e-row>

            <e-row>
              <e-cells>
                <e-cell value="H2O"></e-cell>
              </e-cells>
            </e-row>
          </e-rows>
        </e-sheet>
      </e-sheets>
    </ejs-spreadsheet>
  `,

  methods: {
    onCreated: function () {
      const spreadsheet = this.$refs.spreadsheet;

      // Update A4 with subscript
      spreadsheet.updateCell({
        richText: [
          { text: 'H' },
          { text: '2', style: { verticalAlign: 'sub' } },
          { text: 'O' }
        ]
      }, 'A4');

      // Update A5 with superscript
      spreadsheet.updateCell({
        value: 'X2',
        richText: [
          { text: 'X' },
          { text: '2', style: { verticalAlign: 'super' } }
        ]
      }, 'A5');
    }
  }
});