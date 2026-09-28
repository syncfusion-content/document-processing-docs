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
                        value="Annual Sales Report 2026 (Draft)"
                        :richText="[
                            { text: 'Annual Sales Report ', style: { fontWeight: 'bold' } },
                            { text: '2026', style: { color: '#0078D4' } },
                            { text: ' (Draft)', style: { fontStyle: 'italic' } }
                        ]">
                    </e-cell>
                </e-cells>
            </e-row>

            <e-row>
                <e-cells>
                    <e-cell
                        value="Customer Loyalty Program"
                        :richText="[
                            { text: 'Customer Loyalty ', style: { textDecoration: 'underline' } },
                            { text: 'Program', style: { fontFamily: 'Georgia', fontSize: '14pt' } }
                        ]">
                    </e-cell>
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
        </e-rows>
        </e-sheet>
      </e-sheets>
    </ejs-spreadsheet>
  `,

  methods: {
    onCreated: function () {
      const spreadsheet = this.$refs.spreadsheet;
      spreadsheet.updateCell({
        value: 'Premium Membership valid until 31st Dec 2026',
        richText: [
            {
                text: 'Premium Membership ',
                style: {
                    fontWeight: 'bold',
                    color: '#2E7D32'
                }
            },
            {
                text: 'valid until ',
                style: {
                    fontStyle: 'italic'
                }
            },
            {
                text: '31',
                style: {
                    textDecoration: 'underline'
                }
            },
            {
                text: 'st',
                style: {
                    verticalAlign: 'super'
                }
            },
            {
                text: ' Dec 2026'
            }
        ]
      }, 'A5');
    }
  }
});