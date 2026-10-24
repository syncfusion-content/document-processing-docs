import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";

Vue.use(SpreadsheetPlugin);

new Vue({
	el: '#app',
	template: `
   <ejs-spreadsheet ref="spreadsheet" :created="created"></ejs-spreadsheet>`,
	methods: {
		created: function () {
			let spreadsheet = this.$refs.spreadsheet;
			fetch('./data.json').then(response => response.json()).then(jsonData => {
				spreadsheet.openFromJson({ file: jsonData });
			});
		}
	}
});