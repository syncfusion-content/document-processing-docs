
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";

Vue.use(SpreadsheetPlugin);
;
new Vue({
	el: '#app',
	template: `
  <ejs-spreadsheet
    :openUrl="openUrl"
    :allowOpen="true"
    :beforeOpen="beforeOpen"
  ></ejs-spreadsheet>
`,

  data: () => {
    return {
      openUrl:
        "https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open",
    };
  },
  methods: {
    beforeOpen: function (args) {
      args.requestData = {
        ...args.requestData,
        headers: { Authorization: "YOUR TEXT" },
      };
    },
  },

});