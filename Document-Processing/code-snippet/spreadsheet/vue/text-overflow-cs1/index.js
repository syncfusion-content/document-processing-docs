import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";

Vue.use(SpreadsheetPlugin);

new Vue({
  el: '#app',
  template: `
    <ejs-spreadsheet ref="spreadsheet">
      <e-sheets>
        <e-sheet name="Famous Quotes">
          <e-columns>
              <e-column :width="160"></e-column>
              <e-column :width="110"></e-column>
              <e-column :width="110"></e-column>
              <e-column :width="100"></e-column>
              <e-column :width="100"></e-column>
              <e-column :width="110"></e-column>
          </e-columns>

          <e-rows>
              <e-row>
                  <e-cells>
                      <e-cell
                          value="Famous Quotes"
                          :style="{ fontWeight: 'bold', fontSize: '16pt' }">
                      </e-cell>
                  </e-cells>
              </e-row>

              <e-row>
                  <e-cells>
                      <e-cell
                          value="Success is the sum of small efforts repeated day after day."
                          :style="{ fontSize: '14pt' }">
                      </e-cell>
                  </e-cells>
              </e-row>

              <e-row>
                  <e-cells>
                      <e-cell
                          value="Quality is never an accident it is always the result of intelligent effort."
                          :style="{ fontSize: '14pt' }">
                      </e-cell>
                  </e-cells>
              </e-row>

              <e-row>
                  <e-cells>
                      <e-cell
                          value="The future depends on what you do today and how consistently you do it."
                          :style="{ fontSize: '14pt' }">
                      </e-cell>
                  </e-cells>
              </e-row>

              <e-row>
                  <e-cells>
                      <e-cell
                          value="Well organized information helps teams make better decisions and achieve goals."
                          :style="{ fontSize: '14pt' }">
                      </e-cell>
                  </e-cells>
              </e-row>

              <e-row>
                  <e-cells>
                      <e-cell
                          value="Great achievements are built through planning persistence and continuous improvement."
                          :style="{ fontSize: '14pt' }">
                      </e-cell>
                  </e-cells>
              </e-row>
          </e-rows>
      </e-sheet>
      </e-sheets>
    </ejs-spreadsheet>
  `,
});