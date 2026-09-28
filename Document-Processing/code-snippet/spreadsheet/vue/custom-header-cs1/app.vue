<template>
  <ejs-spreadsheet :openUrl="openUrl" :allowOpen="true" :beforeOpen="beforeOpen"></ejs-spreadsheet>
</template>

<script>
import { SpreadsheetComponent } from "@syncfusion/ej2-vue-spreadsheet";

export default {
  name: "App",
  components: {
    "ejs-spreadsheet": SpreadsheetComponent
  },
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
};
</script>

<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/spreadsheet/index.css';
</style>
