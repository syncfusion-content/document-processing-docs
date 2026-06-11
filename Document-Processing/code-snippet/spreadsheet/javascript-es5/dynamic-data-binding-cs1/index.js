var spreadsheet = new ej.spreadsheet.Spreadsheet({
    showRibbon: false,
    showFormulaBar: false,
    sheets: [
        {
            ranges: [{ dataSource: data }],
            columns: [
                { width: 90 }, { width: 100 }, { width: 96 },
                { width: 120 }, { width: 130 }, { width: 120 }
            ]
        }],
    dataSourceChanged: function (args) {
        appendElement("Data source changed with" + "<b>&nbsp;" + args.action + "</b> action<hr>");
    }
});

spreadsheet.appendTo('#spreadsheet');

document.getElementById('changeDataBtn').addEventListener('click', function () {
    spreadsheet.sheets[0].ranges[0].dataSource = itemData;
});

document.getElementById('clearBtn').addEventListener('click', function () {
    document.getElementById('EventLog').innerHTML = "";
});

function appendElement(html) {
    var span = document.createElement("span");
    span.innerHTML = html;
    var log = document.getElementById('EventLog');
    log.insertBefore(span, log.firstChild);
}