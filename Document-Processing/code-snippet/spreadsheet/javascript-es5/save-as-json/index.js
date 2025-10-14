//Initialize the Spreadsheet control
var spreadsheet = new ej.spreadsheet.Spreadsheet({
    allowOpen: true,
    openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
    beforeOpen: (args) => {
        // your code snippets here
    }
});

//Render the initialized Spreadsheet
spreadsheet.appendTo('#spreadsheet');

var saveElement = document.getElementById("save");
if (saveElement) {
    // Save button click event listener
    saveElement.onclick = () => {
        var valueOnlyCheckbox = document.getElementById("valueOnly").checked;
        var options = valueOnlyCheckbox ? { onlyValues: true } : createOptions();
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
                        var anchor = ej.base.createElement('a', {
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
    };
}

function createOptions() {
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
}

function toggleCheckboxes() {
    var valueOnlyCheckbox = document.getElementById('valueOnly');
    var checkboxes = document.querySelectorAll('#Saveasjson input[type="checkbox"]:not(#valueOnly)');
    checkboxes.forEach(checkbox => {
        checkbox.disabled = valueOnlyCheckbox.checked;
        if (valueOnlyCheckbox.checked) {
            checkbox.checked = false;
        }
    });
}

var valueOnlyElement = document.getElementById('valueOnly');
if (valueOnlyElement) {
    valueOnlyElement.addEventListener('change', toggleCheckboxes);
}