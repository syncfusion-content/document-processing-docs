<template>
  <div>
    <ejs-spreadsheet ref="spreadsheet">
      <SheetsDirective>
        <SheetDirective name="Car Sales Report">
          <RangesDirective>
            <RangeDirective :dataSource="salesData" />
          </RangesDirective>
        </SheetDirective>
      </SheetsDirective>
    </ejs-spreadsheet>

    <button class="e-btn e-primary" @click="onClick">Save</button>
  </div>
</template>

<script>
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective } from "@syncfusion/ej2-vue-spreadsheet";
import { salesData } from "./data";

export default {
  name: "App",
  components: {
    "ejs-spreadsheet": SpreadsheetComponent,
    SheetsDirective,
    SheetDirective,
    RangesDirective,
    RangeDirective
  },
  data() {
    return { salesData };
  },
  methods: {
    onClick() {
      const spreadsheetObj = this.$refs.spreadsheet;
      if (!spreadsheetObj) return;
      spreadsheetObj.save({
        url: "https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save",
        fileName: "Worksheet",
        saveType: "Xlsx"
      });
    }
  }
};
</script>