// Initialize Spreadsheet component without openUrl for client-side processing.
var spreadsheet = new ej.spreadsheet.Spreadsheet({
    allowOpen: true
});

// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');

var fileInput = document.getElementById('fileInput');
if (fileInput) {
    fileInput.addEventListener('change', function (event) {
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            spreadsheet.open({ file: file });
        }
    });
}
