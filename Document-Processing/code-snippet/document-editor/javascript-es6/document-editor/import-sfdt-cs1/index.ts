

import { DocumentEditor } from '@syncfusion/ej2-documenteditor';

// Initialize the Document Editor component.
let documenteditor: DocumentEditor = new DocumentEditor({ height: '370px' });

documenteditor.appendTo('#DocumentEditor');

document.getElementById('file_upload').setAttribute('accept', '.sfdt');

//Open file picker.
document.getElementById("import").addEventListener("click", (): void => {
    document.getElementById('file_upload').click();
});

document.getElementById('file_upload').addEventListener("change", (e: any): void => {
    if (e.target.files[0]) {
        //Get the selected file.
        let file = e.target.files[0];
        if (file.name.substr(file.name.lastIndexOf('.')) === '.sfdt') {
            let fileReader: FileReader = new FileReader();
            fileReader.onload = (e: any) => {
                let contents: string = e.target.result;
                //Open the sfdt document in the Document Editor.
                documenteditor.open(contents);
            };
            //Read the file content.
            fileReader.readAsText(file);
            documenteditor.documentName = file.name.substr(0, file.name.lastIndexOf('.'));
        }
    }
});



