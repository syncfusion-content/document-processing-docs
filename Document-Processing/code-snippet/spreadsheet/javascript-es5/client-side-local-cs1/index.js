// Initialize Spreadsheet component.
var spreadsheet = new ej.spreadsheet.Spreadsheet({
    allowOpen: true
});

// Render initialized Spreadsheet component.
spreadsheet.appendTo('#spreadsheet');

// Select a local XLSX file without uploading it.
var input = document.createElement('input');
input.type = 'file';
input.accept = '.xlsx';
input.onchange = function () {
    if (input.files.length) {
        spreadsheet.open({ file: input.files[0] });
    }
};
document.body.appendChild(input);
