<template>
  <div class="control-pane">
    <div class="control-section spreadsheet-control">
      <div style="margin-bottom: 10px;">
        <button class="e-btn e-primary" @click="handleSaveAsJson">
          Save as JSON
        </button>
      </div>

      <div>
        <ejs-spreadsheet ref="spreadsheet"></ejs-spreadsheet>
      </div>

      <div v-if="savedJson">
        <strong>Saved JSON</strong>
        <pre>{{ savedJson }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent } from "@syncfusion/ej2-vue-spreadsheet";

const spreadsheet = ref(null);
const savedJson = ref(null);

const handleSaveAsJson = async () => {
  if (!spreadsheet.value) return;
  const result = await spreadsheet.value.saveAsJson();
  const content = JSON.stringify(result.jsonObject, null, 2);
  savedJson.value = content;
};
</script>