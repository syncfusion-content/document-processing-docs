import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, BeforeOpenEventArgs, SerializationOptions } from '@syncfusion/ej2-react-spreadsheet';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';

function App() {
  const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
  const uploaderRef = React.useRef<UploaderComponent>(null);
  const asyncSettings = {
    saveUrl:
      'https://services.syncfusion.com/react/production/api/FileUploader/Save',
    removeUrl:
      'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
  };
  const allowedExtensions: string = '.xlsx, .xls, .csv';
  const buttons = { browse: 'Choose file' },
  const onSuccess = (args) => {
    if (args.operation == 'upload')
      spreadsheetRef.current.open({ file: args.file.rawFile });
  };
  const createOptions = () => {
    const options: SerializationOptions = {};
    options.ignoreStyle = (document.getElementById('style') as HTMLInputElement).checked;
    options.ignoreFormula = (document.getElementById('formula') as HTMLInputElement).checked;
    options.ignoreFormat = (document.getElementById('format') as HTMLInputElement).checked;
    options.ignoreConditionalFormat = (document.getElementById('cf') as HTMLInputElement).checked;
    options.ignoreValidation = (document.getElementById('dv') as HTMLInputElement).checked;
    options.ignoreFreezePane = (document.getElementById('freeze') as HTMLInputElement).checked;
    options.ignoreWrap = (document.getElementById('wrap') as HTMLInputElement).checked;
    options.ignoreChart = (document.getElementById('chart') as HTMLInputElement).checked;
    options.ignoreImage = (document.getElementById('image') as HTMLInputElement).checked;
    options.ignoreNote = (document.getElementById('note') as HTMLInputElement).checked;
    return options;
  }

  const toggleCheckboxes = () => {
    let valueOnlyCheckbox: HTMLInputElement = document.getElementById('valueOnly') as HTMLInputElement;
    let checkboxes: NodeListOf<Element> = document.querySelectorAll('#Openfromjson input[type="checkbox"]:not(#valueOnly)');
    checkboxes.forEach(checkbox => {
        (checkbox as HTMLInputElement).disabled = valueOnlyCheckbox.checked;
        if (valueOnlyCheckbox.checked) {
            (checkbox as HTMLInputElement).checked = false;
        }
    });
  }

  const beforeOpen = (args: BeforeOpenEventArgs) => {
    args.cancel = true;
    let valueOnlyCheckbox: boolean = (document.getElementById("valueOnly") as HTMLInputElement).checked;
    let options: SerializationOptions = valueOnlyCheckbox ? { onlyValues: true } : createOptions();
    fetch(
      'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
      args.requestData
    ).then((response) => {
      response.json().then((data) => {
        spreadsheetRef.current.openFromJson({ file: data }, options)
      });
    });
  }
    
    return (<div className='control-pane'>
            <div className='control-section spreadsheet-control'>
                <div id="Openfromjson">
                    <label id="Heading">Open From Json Options:</label> <br/>
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
                    <UploaderComponent
                        ref={uploaderRef}
                        asyncSettings={asyncSettings}
                        success={onSuccess}
                        allowedExtensions={allowedExtensions}
                        buttons={buttons}
                        showFileList={false}
                    ></UploaderComponent>
                </div>
                <SpreadsheetComponent  ref={spreadsheetRef} beforeOpen={beforeOpen}>
                </SpreadsheetComponent>
            </div>
        </div>);
}

export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
