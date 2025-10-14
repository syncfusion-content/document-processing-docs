//Initialize the Spreadsheet control
var spreadsheet = new ej.spreadsheet.Spreadsheet({
    beforeOpen: (args) => {
        args.cancel = true;
        var valueOnlyCheckbox = document.getElementById("valueOnly").checked;
        var options = valueOnlyCheckbox ? { onlyValues: true } : createOptions();
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

var uploader = new ej.inputs.Uploader({
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
uploader.appendTo('#fileupload');

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
    var checkboxes = document.querySelectorAll('#Openfromjson input[type="checkbox"]:not(#valueOnly)');
    checkboxes.forEach(checkbox => {
        (checkbox).disabled = valueOnlyCheckbox.checked;
        if (valueOnlyCheckbox.checked) {
            (checkbox).checked = false;
        }
    });
}

var valueOnlyElement = document.getElementById('valueOnly');
if (valueOnlyElement) {
    valueOnlyElement.addEventListener('change', toggleCheckboxes);
}
