var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
    resourceUrl:'https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib'
});
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer'); 
pdfviewer.documentLoad = function (args) {
pdfviewer.formDesignerModule.addFormField("Textbox", { name: "First Name", bounds: { X: 146, Y: 229, Width: 150, Height: 24 } });
pdfviewer.formDesignerModule.addFormField("Textbox", { name: "Middle Name", bounds: { X: 338, Y: 229, Width: 150, Height: 24 }});
pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'Last Name',bounds: { X: 530, Y: 229, Width: 150, Height: 24 },});
pdfviewer.formDesignerModule.addFormField('RadioButton', {bounds: { X: 148, Y: 289, Width: 18, Height: 18 },name: 'Gender',isSelected: false,});
pdfviewer.formDesignerModule.addFormField('RadioButton', {bounds: { X: 292, Y: 289, Width: 18, Height: 18 },name: 'Gender',isSelected: false,});
pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOB Month',bounds: { X: 146, Y: 320, Width: 35, Height: 24 },});
pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOB Date',bounds: { X: 193, Y: 320, Width: 35, Height: 24 },});
pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOB Year',bounds: { X: 242, Y: 320, Width: 35, Height: 24 },});
pdfviewer.formDesignerModule.addFormField('InitialField', {name: 'Agree',bounds: { X: 148, Y: 408, Width: 200, Height: 43 },});
pdfviewer.formDesignerModule.addFormField('InitialField', {name: 'Do Not Agree',bounds: { X: 148, Y: 466, Width: 200, Height: 43 },});
pdfviewer.formDesignerModule.addFormField('CheckBox', {name: 'Text Message',bounds: { X: 56, Y: 664, Width: 20, Height: 20 },isChecked: false,});
pdfviewer.formDesignerModule.addFormField('CheckBox', {name: 'Email',bounds: { X: 242, Y: 664, Width: 20, Height: 20 },isChecked: false,});
pdfviewer.formDesignerModule.addFormField('CheckBox', {name: 'Appointment Reminder',bounds: { X: 56, Y: 740, Width: 20, Height: 20 },isChecked: false,});
pdfviewer.formDesignerModule.addFormField('CheckBox', {name: 'Request for Customerservice',bounds: { X: 56, Y: 778, Width: 20, Height: 20 },isChecked: false,});
pdfviewer.formDesignerModule.addFormField('CheckBox', {name: 'Information Billing',bounds: { X: 290, Y: 740, Width: 20, Height: 20 },isChecked: false,});
pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'My Email',bounds: { X: 146, Y: 850, Width: 200, Height: 24 },});
pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'My Phone',bounds: { X: 482, Y: 850, Width: 200, Height: 24 },});
pdfviewer.formDesignerModule.addFormField('SignatureField', {name: 'Sign',bounds: { X: 57, Y: 923, Width: 200, Height: 43 },});
pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOS Month',bounds: { X: 386, Y: 923, Width: 35, Height: 24 },});
pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOS Date',bounds: { X: 434, Y: 923, Width: 35, Height: 24 },});
pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOS Year',bounds: { X: 482, Y: 923, Width: 35, Height: 24 },});
// Fill all fields programmatically
const fields = pdfviewer.formFieldCollections || [];

const setVal = (f, props) => {
    if (!f) return;

    Object.assign(f, props);

    // Prefer updateFormFieldsValue if available
    if (typeof pdfviewer.updateFormFieldsValue === 'function') {
        pdfviewer.updateFormFieldsValue(f);
    } else if (
        pdfviewer.formDesignerModule &&
        typeof pdfviewer.formDesignerModule.updateFormField === 'function'
    ) {
        pdfviewer.formDesignerModule.updateFormField(f, props);
    }
};

// Text fields
setVal(fields.find(x => x.name === 'First Name'), { value: 'John' });
setVal(fields.find(x => x.name === 'Middle Name'), { value: 'Mitchel' });
setVal(fields.find(x => x.name === 'Last Name'), { value: 'Clarke' });

// Radio button (Gender – select first option, e.g., Male)
const genders = fields.filter(x => x.name === 'Gender');
if (genders.length > 0) {
    setVal(genders[0], { isSelected: true });
}

// Date of Birth
setVal(fields.find(x => x.name === 'DOB Month'), { value: '01' });
setVal(fields.find(x => x.name === 'DOB Date'), { value: '15' });
setVal(fields.find(x => x.name === 'DOB Year'), { value: '1980' });

// Agree / Confirmation field
setVal(fields.find(x => x.name === 'Agree'), {
    value: 'John Mitchel Clarke'
});

// Contact details
setVal(fields.find(x => x.name === 'My Email'), {
    value: 'john.mitchel@example.com'
});
setVal(fields.find(x => x.name === 'My Phone'), {
    value: '555-123-4567'
});

// Signature field (text placeholder – image needed for actual signature)
setVal(fields.find(x => x.name === 'Sign'), {
    value: 'John Mitchel Clarke'
});

// Date of Signature
setVal(fields.find(x => x.name === 'DOS Month'), { value: '01' });
setVal(fields.find(x => x.name === 'DOS Date'), { value: '21' });
setVal(fields.find(x => x.name === 'DOS Year'), { value: '2026' });
}