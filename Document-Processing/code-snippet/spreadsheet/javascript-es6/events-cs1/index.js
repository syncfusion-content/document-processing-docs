ej.base.enableRipple(true);

var columns = [
    { width: 180 },
    { width: 130 },
    { width: 130 },
    { width: 180 },
    { width: 130 },
    { width: 120 }
];

var sheets = [{
    name: 'Sheet1',
    ranges: [{ dataSource: data }],
    columns: columns
}];

function appendElement(html) {
    var span = document.createElement('span');
    span.innerHTML = html;
    var log = document.getElementById('EventLog');
    if (log) {
        log.insertBefore(span, log.firstChild);
    }
}

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheets,

    actionBegin: function (args) {
        appendElement('actionBegin triggered for <b>&nbsp;' + args.action + '</b> action<hr>');
        console.log(args);
    },

    actionComplete: function (args) {
        appendElement('actionComplete triggered for <b>&nbsp;' + args.action + '</b> action<hr>');
        console.log(args);
    },

    // Removed the unwanted support for this sample
    showRibbon: false,
    showFormulaBar: false
});

spreadsheet.appendTo('#spreadsheet');

document.getElementById('clearBtn').addEventListener('click', function () {
    var eventLog = document.getElementById('EventLog');
    if (eventLog) {
        eventLog.innerHTML = '';
    }
});