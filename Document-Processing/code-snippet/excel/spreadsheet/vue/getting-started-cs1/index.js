
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";

Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
   <ejs-spreadsheet></ejs-spreadsheet>
`,
 
});