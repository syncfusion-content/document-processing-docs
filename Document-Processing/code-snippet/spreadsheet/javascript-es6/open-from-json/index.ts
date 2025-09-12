import { Spreadsheet, BeforeOpenEventArgs, SerializationOptions } from '@syncfusion/ej2-spreadsheet';
import { Uploader } from '@syncfusion/ej2-inputs';

//Initialize the Spreadsheet control
let spreadsheet: Spreadsheet = new Spreadsheet({
    beforeOpen: (args: BeforeOpenEventArgs) => {
        args.cancel = true;
        const valueOnlyCheckbox: boolean = (document.getElementById("valueOnly") as HTMLInputElement).checked;
        const options: SerializationOptions = valueOnlyCheckbox ? { onlyValues: true } : createOptions();
        fetch(
            'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
            args.requestData
        ).then((response) => {
            response.json().then((data) => {
                spreadsheet.openFromJson({ file: data }, options)
            });
        });
    }
});

//Render the initialized Spreadsheet
spreadsheet.appendTo('#spreadsheet');

let uploadObj: Uploader = new Uploader({
    asyncSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    },
    allowedExtensions: '.xlsx, .xls, .csv',
    showFileList: false,
    buttons: {
        browse: 'Choose file',
    },
    success: (args) => {
        if (args.operation == 'upload') {
            spreadsheet.open({ file: args.file.rawFile });
        }
    }
});
uploadObj.appendTo('#fileupload');

function createOptions(): SerializationOptions {
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

function toggleCheckboxes(): void {
    const valueOnlyCheckbox: HTMLInputElement = document.getElementById('valueOnly') as HTMLInputElement;
    const checkboxes: NodeListOf<Element> = document.querySelectorAll('#Openfromjson input[type="checkbox"]:not(#valueOnly)');
    checkboxes.forEach(checkbox => {
        (checkbox as HTMLInputElement).disabled = valueOnlyCheckbox.checked;
        if (valueOnlyCheckbox.checked) {
            (checkbox as HTMLInputElement).checked = false;
        }
    });
}

const valueOnlyElement: HTMLElement | null = document.getElementById('valueOnly');
if (valueOnlyElement) {
    valueOnlyElement.addEventListener('change', toggleCheckboxes);
}
