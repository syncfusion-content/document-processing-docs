

import { DocumentEditor, Editor, Selection, ImageResizer, EditorHistory } from '@syncfusion/ej2-documenteditor';
import { Button } from '@syncfusion/ej2-buttons';
//Inject require modules.
DocumentEditor.Inject(Editor, Selection, ImageResizer, EditorHistory);
let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false,
    enableEditor: true,
    enableSection: true,
    enableImageResizer: true,
    enableEditorHistory: true,
    height: '370px'
});
documenteditor.appendTo('#DocumentEditor');
//Insert Image From URL with alternate text
documenteditor.editor.insertImage('https://cdn.syncfusion.com/content/images/Logo/Logo_Black_72dpi_without.png', 200, 200, 'Syncfusion');
let insertPictureButton: Button = new Button();
insertPictureButton.appendTo('#insert-picture');

//Open file picker.
document.getElementById('insert-picture').addEventListener('click', () => {
    let pictureUpload: HTMLInputElement = document.getElementById("insertImageButton") as HTMLInputElement;
    pictureUpload.value = '';
    pictureUpload.click();
});
// File picker change event.
document.getElementById('insertImageButton').addEventListener('change', onInsertImage);

//Get select image from file picker and insert it in Document Editor.
function onInsertImage(args: any): void {
    if (navigator.userAgent.match('Chrome') || navigator.userAgent.match('Firefox') || navigator.userAgent.match('Edge') || navigator.userAgent.match('MSIE') || navigator.userAgent.match('.NET')) {
        if (args.target.files[0]) {
            let path = args.target.files[0];
            let reader = new FileReader();
            reader.onload = function (frEvent: any) {
                let base64String = frEvent.target.result;
                let image = document.createElement('img');
                image.addEventListener('load', function () {
                    //Insert image.
                    documenteditor.editor.insertImage(base64String, this.width, this.height);
                })
                image.src = base64String;
            };
            reader.readAsDataURL(path);
        }
        //Safari does not Support FileReader Class
    } else {
        let image = document.createElement('img');
        image.addEventListener('load', function () {
            documenteditor.editor.insertImage(args.target.value);
        })
        image.src = args.target.value;
    }
}


