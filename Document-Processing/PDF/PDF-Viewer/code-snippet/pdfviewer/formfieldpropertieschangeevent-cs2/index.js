var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
    resourceUrl:'https://cdn.syncfusion.com/ej2/26.2.8/dist/ej2-pdfviewer-lib'
});
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer'); 

pdfviewer.formFieldPropertiesChange = function (formFieldPropertyChange) {
    console.log('form field page number: ', formFieldPropertyChange.pageIndex);
    console.log('form field event name: ' + formFieldPropertyChange.name);
    console.log('form field data: ', formFieldPropertyChange.field);
    console.log('Whether form field alignment changed '+ formFieldPropertyChange.isAlignmentChanged);
    console.log('Whether form field backgropund color changed '+ formFieldPropertyChange.isBackgroundColorChanged);
    console.log('Whether form field border color changed '+ formFieldPropertyChange.isBorderColorChanged);
    console.log('Whether form field border width changed '+ formFieldPropertyChange.isBorderWidthChanged);
    console.log('Whether form field color changed changed '+ formFieldPropertyChange.isColorChanged);
    console.log('Whether form field custom data changed '+ formFieldPropertyChange.isCustomDataChanged);
    console.log('Whether form field font family changed '+ formFieldPropertyChange.isFontFamilyChanged);
    console.log('Whether form field font size changed '+ formFieldPropertyChange.isFontSizeChanged);
    console.log('Whether form field font style changed '+ formFieldPropertyChange.isFontStyleChanged);
    console.log('Whether form field maximum length changed '+ formFieldPropertyChange.isMaxLengthChanged);
    console.log('Whether form field name changed '+ formFieldPropertyChange.isNameChanged);
    console.log('Whether form field readonly changed '+ formFieldPropertyChange.isReadOnlyChanged);
    console.log('Whether form field required changed '+ formFieldPropertyChange.isRequiredChanged);
    console.log('Whether form field print changed '+ formFieldPropertyChange.isPrintChanged);
    console.log('Whether form field tool tip changed '+ formFieldPropertyChange.isToolTipChanged);
    console.log('Whether form field visiblity changed '+ formFieldPropertyChange.isVisibilityChanged);
    console.log('Whether form field value changed '+ formFieldPropertyChange.isValueChanged);
    console.log('Whether form field new value changed '+ formFieldPropertyChange.newValue);
    console.log('Whether form field old valuue changed '+ formFieldPropertyChange.oldValue);
}