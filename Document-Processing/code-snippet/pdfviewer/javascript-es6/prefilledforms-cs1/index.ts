import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
        TextSelection, Annotation, FormDesigner, FormFields, TextFieldSettings, 
        RadioButtonFieldSettings, CheckBoxFieldSettings, InitialFieldSettings, SignatureFieldSettings, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer({ 
    documentPath:'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
    resourceUrl:'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib'  
});
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = function (args) {
    pdfviewer.formDesignerModule.addFormField("Textbox", { name: "First Name", bounds: { X: 146, Y: 229, Width: 150, Height: 24 } as TextFieldSettings });
    pdfviewer.formDesignerModule.addFormField("Textbox", { name: "Middle Name", bounds: { X: 338, Y: 229, Width: 150, Height: 24 } as TextFieldSettings});
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'Last Name',bounds: { X: 530, Y: 229, Width: 150, Height: 24 } as TextFieldSettings,});
    pdfviewer.formDesignerModule.addFormField('RadioButton', {bounds: { X: 148, Y: 289, Width: 18, Height: 18 },name: 'Gender',isSelected: false} as RadioButtonFieldSettings);
    pdfviewer.formDesignerModule.addFormField('RadioButton', {bounds: { X: 292, Y: 289, Width: 18, Height: 18 },name: 'Gender',isSelected: false,} as RadioButtonFieldSettings);
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOB Month',bounds: { X: 146, Y: 320, Width: 35, Height: 24 } as TextFieldSettings,});
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOB Date',bounds: { X: 193, Y: 320, Width: 35, Height: 24 } as TextFieldSettings,});
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOB Year',bounds: { X: 242, Y: 320, Width: 35, Height: 24 } as TextFieldSettings,});
    pdfviewer.formDesignerModule.addFormField('InitialField', {name: 'Agree',bounds: { X: 148, Y: 408, Width: 200, Height: 43 },} as InitialFieldSettings);
    pdfviewer.formDesignerModule.addFormField('InitialField', {name: 'Do Not Agree',bounds: { X: 148, Y: 466, Width: 200, Height: 43 },} as InitialFieldSettings);
    pdfviewer.formDesignerModule.addFormField('CheckBox', {name: 'Text Message',bounds: { X: 56, Y: 664, Width: 20, Height: 20 },isChecked:true,} as CheckBoxFieldSettings);
    pdfviewer.formDesignerModule.addFormField('CheckBox', {name: 'Email',bounds: { X: 242, Y: 664, Width: 20, Height: 20 },isChecked:true,} as CheckBoxFieldSettings);
    pdfviewer.formDesignerModule.addFormField('CheckBox', {name: 'Appointment Reminder',bounds: { X: 56, Y: 740, Width: 20, Height: 20 },isChecked: true,} as CheckBoxFieldSettings);
    pdfviewer.formDesignerModule.addFormField('CheckBox', {name: 'Request for Customerservice',bounds: { X: 56, Y: 778, Width: 20, Height: 20 },isChecked: false,} as CheckBoxFieldSettings);
    pdfviewer.formDesignerModule.addFormField('CheckBox', {name: 'Information Billing',bounds: { X: 290, Y: 740, Width: 20, Height: 20 },isChecked: false,} as CheckBoxFieldSettings);
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'My Email',bounds: { X: 146, Y: 850, Width: 200, Height: 24 } as TextFieldSettings,});
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'My Phone',bounds: { X: 482, Y: 850, Width: 200, Height: 24 } as TextFieldSettings,});
    pdfviewer.formDesignerModule.addFormField('SignatureField', {name: 'Sign',bounds: { X: 57, Y: 923, Width: 200, Height: 43 },} as SignatureFieldSettings);
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOS Month',bounds: { X: 386, Y: 923, Width: 35, Height: 24 } as TextFieldSettings,});
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOS Date',bounds: { X: 434, Y: 923, Width: 35, Height: 24 } as TextFieldSettings} );
    pdfviewer.formDesignerModule.addFormField('Textbox', {name: 'DOS Year',bounds: { X: 482, Y: 923, Width: 35, Height: 24 } as TextFieldSettings,});

    // Fill all fields programmatically
    const fields = pdfviewer.formFieldCollections || [];

    const setVal = (f: any, props: any) => {
        if (!f) return;
        Object.assign(f, props);
        // prefer updateFormFieldsValue if available
        if (typeof pdfviewer.updateFormFieldsValue === 'function') {
            pdfviewer.updateFormFieldsValue(f);
        } else if (pdfviewer.formDesignerModule && typeof pdfviewer.formDesignerModule.updateFormField === 'function') {
            pdfviewer.formDesignerModule.updateFormField(f, props);
        }
    };

    setVal(fields.find((x: any) => x.name === 'First Name'), { value: 'John' });
    setVal(fields.find((x: any) => x.name === 'Middle Name'), { value: 'Mitchel' });
    setVal(fields.find((x: any) => x.name === 'Last Name'), { value: 'Clarke' });

    // Select first Gender radio button (assuming first added is Male)
    const genders = fields.filter((x: any) => x.name === 'Gender');
    if (genders.length) {
        setVal(genders[0], { isSelected: true });
    }

    setVal(fields.find((x: any) => x.name === 'DOB Month'), { value: '01' });
    setVal(fields.find((x: any) => x.name === 'DOB Date'), { value: '15' });
    setVal(fields.find((x: any) => x.name === 'DOB Year'), { value: '1980' });

    setVal(fields.find((x: any) => x.name === 'Agree'), { value: 'John Mitchel Clarke' });

    setVal(fields.find((x: any) => x.name === 'My Email'), { value: 'john.mitchel@example.com' });
    setVal(fields.find((x: any) => x.name === 'My Phone'), { value: '555-123-4567' });

    // Signature field: set a simple value placeholder (rendering a drawn signature programmatically requires a signature image)
    setVal(fields.find((x: any) => x.name === 'Sign'), { value: 'John Mitchel Clarke' });

    setVal(fields.find((x: any) => x.name === 'DOS Month'), { value: '01' });
    setVal(fields.find((x: any) => x.name === 'DOS Date'), { value: '21' });
    setVal(fields.find((x: any) => x.name === 'DOS Year'), { value: '2026' });
}


