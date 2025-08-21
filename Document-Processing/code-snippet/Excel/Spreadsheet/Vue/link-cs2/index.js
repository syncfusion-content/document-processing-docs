
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
   <ejs-spreadsheet ref="spreadsheet" :beforeHyperlinkClick="beforeHyperlinkClick">
   <e-sheets>
          <e-sheet name="PriceDetails">
             <e-rows>
                    <e-row>
                            <e-cells>
                                <e-cell value="Item Name"></e-cell>
                                <e-cell value="Stock Detail"></e-cell>
                                <e-cell value="Website"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell value="Casual Shoes"></e-cell>
                                <e-cell value="OUT OF STOCK"></e-cell>
                                <e-cell value="Amazon" hyperlink="https://www.amazon.com/"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell value="Sports Shoes"></e-cell>
                                <e-cell value="IN STOCK" hyperlink="Stock!A2:B2"></e-cell>
                                <e-cell value="Overstack" hyperlink="https://www.overstock.com/"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell value="Formal Shoes"></e-cell>
                                <e-cell value="IN STOCK" hyperlink="Stock!A3:B3"></e-cell>
                                <e-cell value="AliExpress" hyperlink="https://www.aliexpress.com/"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell value="Sandals & Floaters"></e-cell>
                                <e-cell value="OUT OF STOCK"></e-cell>
                                <e-cell value="AliBaba" hyperlink="https://www.aliBaba.com/"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell value="Flip-Flops & Slippers"></e-cell>
                                <e-cell value="IN STOCK" hyperlink="Stock!A4:B4"></e-cell>
                                <e-cell value="Taobao" hyperlink="https://www.taobao.com/"></e-cell>
                            </e-cells>
                        </e-row>
                    </e-rows>
            <e-columns>
              <e-column :width="width1"></e-column>
              <e-column :width="width1"></e-column>
              <e-column :width="width2"></e-column>
            </e-columns>
          </e-sheet>
          <e-sheet name="Stock">
             <e-rows>
                    <e-row>
                            <e-cells>
                                <e-cell value="Item Name"></e-cell>
                                <e-cell value="Available Count"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell value="Sports Shoes"></e-cell>
                                <e-cell value="30"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell value="Formal Shoes"></e-cell>
                                <e-cell value="25"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell value="Flip-Flops & Slippers"></e-cell>
                                <e-cell value="40"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell value="Running Shoes"></e-cell>
                                <e-cell value="25"></e-cell>
                            </e-cells>
                        </e-row>
                    </e-rows>
            <e-columns>
              <e-column :width="width1"></e-column>
              <e-column :width="width2"></e-column>
            </e-columns>
          </e-sheet>
        </e-sheets></ejs-spreadsheet>
`,

   data: () => {
    return {
      width1: 160,
      width2: 120,
    }
  },
  methods: {
  beforeHyperlinkClick: function (args) {
      args.target = '_self'; //change target attribute
      }
    }

});