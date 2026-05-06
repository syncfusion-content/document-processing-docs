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
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css';
@import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/tailwind3.css";
</style>
