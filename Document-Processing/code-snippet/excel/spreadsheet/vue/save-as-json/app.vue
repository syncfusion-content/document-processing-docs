<template>
  <div class="control-section" id="spreadsheet-default-section">
      <div id="Saveasjson">
      <label id="Heading">Save As Json Options:</label> <br>
      <input type="checkbox" id="valueOnly" @change="toggleCheckboxes"><label for="valueOnly">Only Values</label>
      <input type="checkbox" id="style"><label for="style">Ignore Style</label>
      <input type="checkbox" id="formula"><label for="formula">Ignore Formula</label>
      <input type="checkbox" id="format"><label for="format">Ignore Format</label>
      <input type="checkbox" id="cf"><label for="cf">Ignore CF</label>
      <input type="checkbox" id="dv"><label for="dv">Ignore Validation</label>
      <input type="checkbox" id="freeze"><label for="freeze">Ignore Freezepane</label>
      <input type="checkbox" id="wrap"><label for="wrap">Ignore Wrap</label>
      <input type="checkbox" id="chart"><label for="chart">Ignore Chart</label>
      <input type="checkbox" id="image"><label for="image">Ignore Image</label>
      <input type="checkbox" id="note"><label for="note">Ignore Note</label>
      <button id="save" @click="saveFile()">Save with JSON Serialization</button>
    </div>
    <ejs-spreadsheet id="spreadsheet" ref="spreadsheet" :openUrl="openUrl" :allowOpen="true">
    </ejs-spreadsheet>
</div>
</template>

<script>
import { SpreadsheetComponent } from '@syncfusion/ej2-vue-spreadsheet';
import { createElement } from "@syncfusion/ej2-base";

export default {
  components: {
  'ejs-spreadsheet': SpreadsheetComponent,
 },  
 data: () => {
  return {
    openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open'
  }
},
methods: {
  saveFile: function() {
    var spreadsheet = this.$refs.spreadsheet;
    var valueOnlyCheckbox = document.getElementById("valueOnly").checked;
    var options = valueOnlyCheckbox ? { onlyValues: true } : this.createOptions();
    spreadsheet.saveAsJson(options).then((response) => {
      var formData = new FormData();
      formData.append(
          'JSONData',
          JSON.stringify(response.jsonObject.Workbook)
      );
      formData.append('fileName', 'Sample');
      formData.append('saveType', 'Xlsx');
      formData.append('pdfLayoutSettings', JSON.stringify({ fitSheetOnOnePage: false, orientation: 'Portrait' })),
          fetch(
              'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
              {
                  method: 'POST',
                  body: formData,
              }
          ).then((response) => {
              response.blob().then((data) => {
                  var anchor = createElement('a', {
                      attrs: { download: 'Sample.xlsx' },
                  });
                  var url = URL.createObjectURL(data);
                  anchor.href = url;
                  document.body.appendChild(anchor);
                  anchor.click();
                  URL.revokeObjectURL(url);
                  document.body.removeChild(anchor);
              });
          });
    });
  },
  createOptions: function() {
    var options = {};
    options.ignoreStyle = document.getElementById('style').checked;
    options.ignoreFormula = document.getElementById('formula').checked;
    options.ignoreFormat = document.getElementById('format').checked;
    options.ignoreConditionalFormat = document.getElementById('cf').checked;
    options.ignoreValidation = document.getElementById('dv').checked;
    options.ignoreFreezePane = document.getElementById('freeze').checked;
    options.ignoreWrap = document.getElementById('wrap').checked;
    options.ignoreChart = document.getElementById('chart').checked;
    options.ignoreImage = document.getElementById('image').checked;
    options.ignoreNote = document.getElementById('note').checked;
    return options;
  },
  toggleCheckboxes: () => {
    var valueOnlyCheckbox = document.getElementById('valueOnly');
    var checkboxes = document.querySelectorAll('#Saveasjson input[type="checkbox"]:not(#valueOnly)');
    checkboxes.forEach(checkbox => {
        checkbox.disabled = valueOnlyCheckbox.checked;
        if (valueOnlyCheckbox.checked) {
            checkbox.checked = false;
        }
    });
  }
}
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/material.css";

#Saveasjson {
  margin-top: 10px;
  margin-bottom: 20px;
}

#Saveasjson input[type="checkbox"] {
  margin: 7px;
}

#Saveasjson label {
  font-size: 14px;
}

#Heading {
  font-weight: bold;
}
</style>
