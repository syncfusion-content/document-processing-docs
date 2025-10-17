---
layout: post
title: Export in JavaScript (ES5) Document editor control | Syncfusion
description: Learn here all about Export in Syncfusion JavaScript (ES5) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Export 
documentation: ug
domainurl: ##DomainURL##
---

# Export in JavaScript (ES5) Document editor control

Document Editor exports the document into various known file formats in client-side such as Microsoft Word document (.docx), Word template (.dotx), text document (.txt), and its own format called **Syncfusion Document Text (.sfdt)**.

We are providing two types of save APIs as mentioned below.

|API name|Purpose|Code Snippet for Document Editor|Code Snippet for Document Editor Container|
|--------|---------|----------|----------|
|save(filename,FormatType):void<br>FormatType: Sfdt or Docx or Txt|Creates the document with specified file name and format type. Then, the created file is downloaded in the client browser by default.|documenteditor.save('sample', 'Docx')|container.documenteditor.save('sample', 'Docx')|
|saveAsBlob(FormatType):Blob|Creates the document in specified format type and returns the created document as Blob.<br>This blob can be uploaded to your required server, database, or file path.|documenteditor.saveAsBlob('Docx')|container.documenteditor.saveAsBlob('Docx')|

## SFDT export

The following example shows how to export documents in Document Editor as Syncfusion document text (.sfdt).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/export-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/export-cs1" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/export-container-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/export-container-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/export-container-cs1" %}

## Word export

The following example shows how to export the document as Word document (.docx).

>Note: The Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor component's document pagination (page-by-page display) can't be guaranteed for all the Word documents to match the pagination of Microsoft Word application. For more information about [why the document pagination (page-by-page display) differs from Microsoft Word](./import#why-the-document-pagination-differs-from-microsoft-word)

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/export-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/export-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/export-cs2" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/export-container-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/export-container-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/export-container-cs2" %}

## Word Template Export 

The following example shows how to export the document as Word Template (.dotx).

>Note: The Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor component's document pagination (page-by-page display) can't be guaranteed for all the Word documents to match the pagination of Microsoft Word application. For more information about [why the document pagination (page-by-page display) differs from Microsoft Word](./import#why-the-document-pagination-differs-from-microsoft-word)

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/export-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/export-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/export-cs4" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/export-container-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/export-container-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/export-container-cs4" %}

## Text export

The following example shows how to export document as text document (.txt).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/export-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/export-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/export-cs3" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/export-container-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/export-container-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/export-container-cs3" %}

## Export as blob

Document Editor also supports API to store the document into a blob. Refer to the following sample to export document into blob in client-side.

```ts
import { DocumentEditor, FormatType, WordExport, SfdtExport } from '@syncfusion/ej2-documenteditor';

//Inject require modules for Export.
DocumentEditor.Inject(WordExport, SfdtExport);

let documenteditor: DocumentEditor = new DocumentEditor({ enableSfdtExport: true, enableWordExport: true, enableTextExport: true });

documenteditor.appendTo('#DocumentEditor');

documenteditor.open(sfdt);

document.getElementById('export').addEventListener('click', () => {
    //Export the current document as `Blob` object.
    documenteditor.saveAsBlob('Docx').then((exportedDocument: Blob) => {
      // The blob can be processed further
    });
});

```

For instance, to export the document as Rich Text Format file, implement an ASP.NET MVC web API controller using DocIO library by passing the DOCX blob. Refer to the following code example.

```c#
    //API controller for the conversion.
    [HttpPost]
    public HttpResponseMessage ExportAsRtf()
    {
        System.Web.HttpPostedFile data = HttpContext.Current.Request.Files[0];
        //Opens document stream
        WordDocument wordDocument = new WordDocument(data.InputStream);
        MemoryStream stream = new MemoryStream();
        //Converts document stream as RTF
        wordDocument.Save(stream, FormatType.Rtf);
        wordDocument.Close();
        stream.Position = 0;
        return new HttpResponseMessage() { Content = new StreamContent(stream) };
    }
```

In client-side, you can consume this web service and save the document as Rich Text Format (.rtf) file. Refer to the following example.

```ts
document.getElementById('export').addEventListener('click', () => {
    //Expor the document as `Blob` object.
    documenteditor.saveAsBlob('Docx').then((exportedDocument: Blob) => {
        // The blob can be processed further
        let formData: FormData = new FormData();
        formData.append('fileName', 'sample.docx');
        formData.append('data', exportedDocument);
        saveAsRtf(formData);
    });
});

function saveAsRtf(formData: FormData): void {
    //Send the blob object to server to process further.
    let httpRequest: XMLHttpRequest = new XMLHttpRequest();
    httpRequest.open('POST', '/api/DocumentEditor/ExportAsRtf', true);
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200 || httpRequest.status === 304) {
                if (!(!navigator.msSaveBlob)) {
                    navigator.msSaveBlob(httpRequest.response, 'sample.rtf');
                } else {
                    let downloadLink: HTMLAnchorElement = document.createElementNS('http://www.w3.org/1999/xhtml', 'a') as HTMLAnchorElement;
                    download('sample.rtf', 'rtf', httpRequest.response, downloadLink, 'download' in downloadLink);
                }
            } else {
                console.error(httpRequest.response);
            }
        }
    }
    httpRequest.responseType = 'blob';
    httpRequest.send(formData);
}

//Download the document in client side.
function download(fileName: string, extension: string, buffer: Blob, downloadLink: HTMLAnchorElement, hasDownloadAttribute: Boolean): void {
    if (hasDownloadAttribute) {
        downloadLink.download = fileName;
        let dataUrl: string = window.URL.createObjectURL(buffer);
        downloadLink.href = dataUrl;
        let event: MouseEvent = document.createEvent('MouseEvent');
        event.initEvent('click', true, true);
        downloadLink.dispatchEvent(event);
        setTimeout((): void => {
            window.URL.revokeObjectURL(dataUrl);
            dataUrl = undefined;
        });
    } else {
        if (extension !== 'docx' && extension !== 'xlsx') {
            let url: string = window.URL.createObjectURL(buffer);
            let isPopupBlocked: Window = window.open(url, '_blank');
            if (!isPopupBlocked) {
                window.location.href = url;
            }
        }
    }
}
```

## See Also

* [Feature modules](./feature-module)