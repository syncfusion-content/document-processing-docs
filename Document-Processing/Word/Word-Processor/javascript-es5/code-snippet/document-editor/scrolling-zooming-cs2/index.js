var documenteditor = new ej.documenteditor.DocumentEditor({
  isReadOnly: false, serviceUrl: 'https://services.syncfusion.com/js/production/api/documenteditor/'
});
documenteditor.enableAllModules();
documenteditor.appendTo('#DocumentEditor');
onLoadDefaultDocument();
documenteditor.selection.goToPage(3);

function onLoadDefaultDocument() {
  var defaultDocument = {
    "sections": [
      {
        "blocks": [
          {
            "paragraphFormat": {
              "styleName": "Normal"
            },
            "inlines": [
              {
                "text": "First page"
              }
            ]
          }
        ],
        "headersFooters": {},
      },
      {
        "blocks": [
          {
            "paragraphFormat": {
              "styleName": "Normal"
            },
            "inlines": [
              {
                "text": "Second page"
              }
            ]
          }
        ],
        "headersFooters": {},
      },
      {
        "blocks": [
          {
            "paragraphFormat": {
              "styleName": "Normal"
            },
            "inlines": [
              {
                "text": "Third page"
              }
            ]
          }
        ],
        "headersFooters": {},
      }
    ],
    "characterFormat": {},
    "paragraphFormat": {},
    "background": {
      "color": "#FFFFFFFF"
    },
    "styles": [
      {
        "type": "Paragraph",
        "name": "Normal",
        "next": "Normal"
      },
      {
        "type": "Character",
        "name": "Default Paragraph Font"
      }
    ]
  }
  documenteditor.open(JSON.stringify(defaultDocument));
  documenteditor.focusIn();
}

