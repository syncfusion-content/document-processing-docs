var documenteditor = new ej.documenteditor.DocumentEditor({
    isReadOnly: false,
    enableEditor: true,
    enableSection: true,
    enableImageResizer: true,
    enableEditorHistory: true
});
documenteditor.appendTo('#DocumentEditor');
//Insert Image From URL with alternate text
documenteditor.editor.insertImage('https://cdn.syncfusion.com/content/images/Logo/Logo_Black_72dpi_without.png', 200, 200, 'Syncfusion');
document.getElementById('insert-picture').addEventListener('click', () => {
    var pictureUpload = document.getElementById("insertImageButton");
    pictureUpload.value = '';
    pictureUpload.click();
});
document.getElementById('insertImageButton').addEventListener('change', onInsertImage);
function onInsertImage(args) {
    if (navigator.userAgent.match('Chrome') || navigator.userAgent.match('Firefox') || navigator.userAgent.match('Edge') || navigator.userAgent.match('MSIE') || navigator.userAgent.match('.NET')) {
        if (args.target.files[0]) {
            var path = args.target.files[0];
            var reader = new FileReader();
            reader.onload = function (frEvent) {
                var base64String = frEvent.target.result;
                var image = document.createElement('img');
                image.addEventListener('load', function () {
                    documenteditor.editor.insertImage(base64String, this.width, this.height);
                })
                image.src = base64String;
            };
            reader.readAsDataURL(path);
        }
        //Safari does not Support FileReader Class
    } else {
        var image = document.createElement('img');
        image.addEventListener('load', function () {
            documenteditor.editor.insertImage(args.target.value);
        })
        image.src = args.target.value;
    }
}

