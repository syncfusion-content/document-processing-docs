<template>
   <ejs-spreadsheet ref="spreadsheet" :contextMenuBeforeOpen="contextMenuBeforeOpen"></ejs-spreadsheet>
</template>

<script>
import { SpreadsheetComponent } from "@syncfusion/ej2-vue-spreadsheet";

export default {
   name: "App",
   components: {
      "ejs-spreadsheet": SpreadsheetComponent
   },
   methods: {
      contextMenuBeforeOpen: function () {
         let spreadsheet = this.$refs.spreadsheet;
         // To remove context menu items.
         spreadsheet.removeContextMenuItems(["Insert Column"], false); //Items that needs to be removed, Set `true` if the given `text` is a unique id.
      }
   }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/spreadsheet/index.css';
</style>
