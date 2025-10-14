---
layout: post
title: Image in React Document editor component | Syncfusion
description: Learn here all about Image in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Image 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Image in React Document editor component

Document Editor supports common raster format images like PNG, BMP, JPEG, SVG and GIF. You can insert an image file or online image in the document using the [`insertImage()`](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor#insertimage) method. Refer to the following sample code.

{% raw %}

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    DocumentEditorComponent, SfdtExport, Selection, Editor, ImageResizer, EditorHistory
} from '@syncfusion/ej2-react-documenteditor';


DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, ImageResizer, EditorHistory);
function App() {
    let documenteditor: DocumentEditorComponent;

    function insertPicture() {
        let pictureUpload: HTMLInputElement = document.getElementById("insertImageButton") as HTMLInputElement;
        pictureUpload.value = '';
        //Open file picker.
        pictureUpload.click();
    }

    function onInsertImage(args: any) {
        let proxy: any = documenteditor;
        if (navigator.userAgent.match('Chrome') || navigator.userAgent.match('Firefox') || navigator.userAgent.match('Edge') || navigator.userAgent.match('MSIE') || navigator.userAgent.match('.NET')) {
            if (args.target.files[0]) {
                //Get selected file.
                let path = args.target.files[0];
                let reader = new FileReader();
                reader.onload = function (frEvent: any) {
                    let base64String = frEvent.target.result;
                    let image = document.createElement('img');
                    image.addEventListener('load', function () {
                        //Insert image in Document Editor.
                        proxy.editor.insertImage(base64String, proxy.editor.width, proxy.editor.height);
                    })
                    image.src = base64String;
                };
                //Convert image into base64 string..
                reader.readAsDataURL(path);
            }
            //Safari does not Support FileReader Class
        } else {
            let image = document.createElement('img');
            image.addEventListener('load', function () {
                //Insert image in Document Editor.
                proxy.editor.insertImage(args.target.value);
            })
            image.src = args.target.value;
        }
    }
    return (
        <div>
            <input type="file" id="insertImageButton" style={{ "position": "fixed", "left": "-110em" }} accept=".jpg,.jpeg,.png,.bmp" onChange={onInsertImage} />
            <button onClick={insertPicture}>Dialog</button>
            <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => { documenteditor = scope; }} isReadOnly={false} enableSelection={true} enableEditor={true} enableImageResizer={true} enableEditorHistory={true} />
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
```
{% endraw %}

Image files will be internally converted to base64 string. Whereas, online images are preserved as URL.

>Note: EMF and WMF images can't be inserted, but these types of images will be preserved in Document Editor when using ASP.NET MVC Web API.

## Image resizing

Document Editor provides built-in image resizer that can be injected into your application based on the requirements. This allows you to resize the image by dragging the resizing points using mouse or touch interactions. This resizer appears as follows.

![Image](images/image.png)

## Changing size

Document Editor expose API to get or set the size of the selected image. Refer to the following sample code.

```ts
documenteditor.selection.imageFormat.width = 800;
documenteditor.selection.imageFormat.height = 800;
```

>Note: Images are stored and processed(read/write) as base64 string in DocumentEditor. The online image URL is preserved as a URL in DocumentEditor upon saving.

## Text wrapping style

Text wrapping refers to how images fit with surrounding text in a document. Please [refer to this page](./text-wrapping-style) for more information about text wrapping styles available in Word documents.

## Positioning the image

DocumentEditor preserves the position properties of the image and displays the image based on position properties. It does not support modifying the position properties. Whereas the image will be automatically moved along with text edited if it is positioned relative to the line or paragraph.

## See Also

* [Feature modules](./feature-module)