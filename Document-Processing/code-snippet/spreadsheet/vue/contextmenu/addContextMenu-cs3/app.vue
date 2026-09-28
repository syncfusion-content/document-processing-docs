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
      //To enable / disable context menu items.
      spreadsheet.enableContextMenuItems(['Rename'], false, false); // Contextmenu Items that needs to be enabled / disabled, Set true / false to enable / disable the menu items, Set true if the given text is a unique id.
    }
  }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/spreadsheet/index.css';
</style>
