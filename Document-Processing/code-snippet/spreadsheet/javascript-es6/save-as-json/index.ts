import { Spreadsheet, BeforeOpenEventArgs, SerializationOptions } from '@syncfusion/ej2-spreadsheet';
import { createElement } from '@syncfusion/ej2-base';

//Initialize the Spreadsheet control
let spreadsheet: Spreadsheet = new Spreadsheet({
    allowOpen: true,
    openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
    beforeOpen: (args: BeforeOpenEventArgs) => {
        // your code snippets here
    }
});

//Render the initialized Spreadsheet
spreadsheet.appendTo('#spreadsheet');

const saveElement: HTMLElement | null = document.getElementById("save");
if (saveElement) {
    // Save button click event listener
    saveElement.onclick = () => {
        const valueOnlyCheckbox: boolean = (document.getElementById("valueOnly") as HTMLInputElement).checked;
        const options: SerializationOptions = valueOnlyCheckbox ? { onlyValues: true } : createOptions();
        spreadsheet.saveAsJson(options).then((response: any) => {
            const formData: FormData = new FormData();
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
                        const anchor: any = createElement('a', {
                            attrs: { download: 'Sample.xlsx' },
                        });
                        const url = URL.createObjectURL(data);
                        anchor.href = url;
                        document.body.appendChild(anchor);
                        anchor.click();
                        URL.revokeObjectURL(url);
                        document.body.removeChild(anchor);
                    });
                });
        });
    };
}

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
    const checkboxes: NodeListOf<Element> = document.querySelectorAll('#Saveasjson input[type="checkbox"]:not(#valueOnly)');
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