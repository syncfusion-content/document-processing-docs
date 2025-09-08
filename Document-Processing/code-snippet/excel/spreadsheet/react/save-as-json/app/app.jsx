import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import { createElement } from '@syncfusion/ej2-base';

function App() {
  const spreadsheetRef = React.useRef(null);

  const createOptions = () => {
    let options = {};
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
  }

  const toggleCheckboxes = () => {
    let valueOnlyCheckbox = document.getElementById('valueOnly');
    let checkboxes = document.querySelectorAll('#Saveasjson input[type="checkbox"]:not(#valueOnly)');
    checkboxes.forEach(checkbox => {
      checkbox.disabled = valueOnlyCheckbox.checked;
      if (valueOnlyCheckbox.checked) {
        checkbox.checked = false;
      }
    });
  }

  const saveFile = () => {
    let valueOnlyCheckbox = document.getElementById("valueOnly").checked;
    let options = valueOnlyCheckbox ? { onlyValues: true } : createOptions();
    spreadsheetRef.current.saveAsJson(options).then((response) => {
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
            let anchor = createElement('a', {
              attrs: { download: 'Sample.xlsx' },
            });
            let url = URL.createObjectURL(data);
            anchor.href = url;
            document.body.appendChild(anchor);
            anchor.click();
            URL.revokeObjectURL(url);
            document.body.removeChild(anchor);
          });
        });
    });
  }
    
    return (<div className='control-pane'>
            <div className='control-section spreadsheet-control'>
                <div id="Saveasjson">
                    <label id="Heading">Save As Json Options:</label> <br/>
                    <input type="checkbox" id="valueOnly" onChange={toggleCheckboxes}/><label htmlFor="valueOnly">Only Values</label>
                    <input type="checkbox" id="style"/><label htmlFor="style">Ignore Style</label>
                    <input type="checkbox" id="formula"/><label htmlFor="formula">Ignore Formula</label>
                    <input type="checkbox" id="format"/><label htmlFor="format">Ignore Format</label>
                    <input type="checkbox" id="cf"/><label htmlFor="cf">Ignore CF</label>
                    <input type="checkbox" id="dv"/><label htmlFor="dv">Ignore Validation</label>
                    <input type="checkbox" id="freeze"/><label htmlFor="freeze">Ignore Freezepane</label>
                    <input type="checkbox" id="wrap"/><label htmlFor="wrap">Ignore Wrap</label>
                    <input type="checkbox" id="chart"/><label htmlFor="chart">Ignore Chart</label>
                    <input type="checkbox" id="image"/><label htmlFor="image">Ignore Image</label>
                    <input type="checkbox" id="note"/><label htmlFor="note">Ignore Note</label>
                    <button id="save" className="e-btn" onClick={saveFile}>Save with JSON Serialization</button>
                </div>
                <SpreadsheetComponent  ref={spreadsheetRef} openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open' allowOpen={true} >
                </SpreadsheetComponent>
            </div>
        </div>);
}

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);
