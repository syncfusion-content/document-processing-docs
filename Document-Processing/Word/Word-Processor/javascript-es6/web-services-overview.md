---
layout: post
title: Web Services in Syncfusion TypeScript DOCX Editor Control| Syncfusion
description: Learn about the overview of web services in Syncfusion Essential Studio TypeScript DOCX Editor control and more details.
platform: document-processing
control: Web services 
documentation: ug
domainurl: ##DomainURL##
---

# Web Services in Syncfusion TypeScript DOCX Editor Control

You can deploy web APIs for the server-side dependencies of the [TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) component on the following platforms.

* [ASP.NET Core](./web-services/core)
* [ASP.NET MVC](./web-services/mvc)
* [Java](./web-services/java)

## Which operations require server-side interaction

|Operations|When client-server communication will be triggered?|What type of data will be transferred between client and server?|
|------------|--------------------------------------|------------------------|
|[Open file formats other than SFDT](./import#convert-word-documents-into-sfdt)|When opening the document other than SFDT (the JavaScript (ES6) Document Editor's native file format), the server-side web API is invoked from client-side script.|**Client**: Sends the input file.<br>**Server**: Receives the input file and sends the converted SFDT back to the client.<br><br>The server-side web API internally extracts the content from the document (DOCX, DOC, WordML, RTF, HTML) using the Word library (DocIO) and converts it into SFDT for opening the document in the Document Editor.|
|[Paste with formatting](./clipboard#paste-with-formatting)|When pasting the formatted content (HTML/RTF) received from system clipboard. For converting HTML/RTF to SFDT format.<br><br> **Note**: Whereas plain text received from system clipboard will be pasted directly in the client-side.|**Client**: Sends the input Html or Rtf string. <br>**Server**: Receives the input Html or Rtf string and sends the converted SFDT back to the client.|
|[Restrict editing](./restrict-editing)|When protecting the document, for generating hash.|**Client**: Sends the input data for hashing algorithm.<br> **Server**: Receives the input data for hashing algorithm and sends the result hash information back to the client.|
|[Spellcheck](./spell-check)(default)|When the spellchecker is enabled on client-side Document Editor, and it performs the spell check validation for words in the document.|**Client**: Sends the words (string) with their language for spelling validation.<br> **Server**: Receives the words (string) with their language for spelling validation and sends the validation result as JSON back to the client.|
|[SpellCheckByPage](./spell-check)|Document Editor provides options to spellcheck page by page when loading the documents. By [enabling optimized spell check](./spell-check#enableoptimizedspellcheck) in client-side, you can perform spellcheck page by page when loading the documents.|**Client**: Sends the words (string) with their language for spelling validation.<br> **Server**: Receives the words (string) with their language for spelling validation and sends the validation result as JSON back to the client.|
|[Save as file formats other than SFDT and DOCX](./saving-documents/server-side-export) (optional API)|You can configure this API, if you want to save the document in file format other than DOCX and SFDT.<br><br> For saving the files as WordML, DOC, RTF, HTML, ODT, Text using the Word library (DocIO) and PDF using the Word (DocIO) and PDF libraries.|You can transfer document from client to server either as SFDT or DOCX format.<br><br>First option (SFDT):<br>**Client**: Sends the SFDT.<br>**Server**: Receives the SFDT and saves the converted document as any file format supported by [Word library (DocIO)](https://www.syncfusion.com/word-framework/net/word-library) in server or sends the saved file to the client browser.<br><br>Second option (DOCX):<br>**Client**: Sends the DOCX file.<br>**Server**: Receives the DOCX file and saves the converted document as any file format supported by [Word library (DocIO)](https://www.syncfusion.com/word-framework/net/word-library) in server or sends the saved file to the client browser.|

N> If you don't require the above functionalities, you can deploy the component as a pure client-side solution without any server-side interactions.

Please refer to the [example from GitHub](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) to configure the web service and set the [serviceUrl](https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/).

If your running web service Url is `http://localhost:62869/`, set the serviceUrl like below:

```ts
container.serviceUrl = "http://localhost:62869/api/documenteditor/";
```

## Required Web API structure

Please check the table below for the expected web API structure.

|Expected method name |Parameters |Return type |
|-----|----|----|
|Import |Files(IFormCollection) |json(sfdt format) |
|SystemClipboard|CustomerParameter: content(type string either rtf or html) and type(either .rtf or .html) |json(sfdt format) |
|RestrictEditing |Parameter of type CustomRestrictParameter<br>public class CustomRestrictParameter<br>        {<br>            public string passwordBase64 { get; set; }<br>            public string saltBase64 { get; set; }<br>            public int spinCount { get; set; }<br>        } |result hash information |
|SpellCheck(default) |Parameter: SpellCheckJsonData<br>public class SpellCheckJsonData <br>{<br>            public int LanguageID { get; set; }<br>            public string TexttoCheck { get; set; }<br>            public bool CheckSpelling { get; set; }<br>            public bool CheckSuggestion { get; set; }<br>            public bool AddWord { get; set; }<br>        }  |Json type of Spellcheck containing details of spell checked word |
|SpellCheckByPage |Parameter: SpellCheckJsonData<br>public class SpellCheckJsonData <br>{<br>            public int LanguageID { get; set; }<br>            public string TexttoCheck { get; set; }<br>            public bool CheckSpelling { get; set; }<br>            public bool CheckSuggestion { get; set; }<br>            public bool AddWord { get; set; }<br>        }  |Json type of Spellcheck containing details of spell checked word <br><br> **Note**: Document Editor provides options to spellcheck page by page when loading the documents. By [enabling optimized spell check](./spell-check#enableoptimizedspellcheck) in client-side, you can perform spellcheck page by page when loading the documents. |
|Save(optional API) |parameter: SaveParameter <br>public class SaveParameter<br>{<br>public string Content { get; set; }<br> public string FileName { get; set; }<br> } |void(Save the file as file stream) |
|ExportSFDT(optional API) |parameter: SaveParameter <br>public class SaveParameter<br>{<br>public string Content { get; set; }<br> public string FileName { get; set; }<br> } |FileStreamResult (to save the document in client-side) |
|Export(optional API) |Files(IFormCollection) |FileStreamResult (to save the document in client-side) |

## Customize the expected method name

Document Editor component provides an option to customize the expected method name for Import, SystemClipboard, RestrictEditing and SpellCheck using [serverActionSettings](https://ej2.syncfusion.com/documentation/api/document-editor-container/documentEditorContainerModel#serveractionsettings).

The following example code illustrates how to customize the method name using serverActionSettings.

```ts

    let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' ,enableSpellCheck:true});
    DocumentEditorContainer.Inject(Toolbar);
    container.serviceUrl = hostUrl + 'api/documenteditor/';
    // Customize the API name
    let settings = { import: 'Import1', systemClipboard: 'SystemClipboard1', spellCheck: 'SpellCheck1', restrictEditing: 'RestrictEditing1' }
    container.serverActionSettings = settings;
    container.appendTo('#container');

```

## Add custom headers to XMLHttpRequest

Document Editor component provides an option to add custom headers to the XMLHttpRequest using the [`headers`](https://help.syncfusion.com/document-processing/word/word-processor/javascript-es6/header-footer).

```ts

    let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px'});
    DocumentEditorContainer.Inject(Toolbar);
    container.serviceUrl = hostUrl + 'api/documenteditor/';
    // custom headers
    let customHeaders = [{ 'Authorization': 'Bearer YOUR_ACCESS_TOKEN' }, { 'Content-Type': 'application/json' }];
    container.headers = customHeaders;
    container.appendTo('#container');

```

## Modify the XMLHttpRequest before sending the request

Document Editor component provides an option to modify the XMLHttpRequest object (setting additional headers, if needed) using the [`beforeXmlHttpRequestSend`](https://ej2.syncfusion.com/documentation/api/document-editor-container#beforexmlhttprequestsend) event, which gets triggered before a server request.

You can customize the required [`XMLHttpRequest`](https://ej2.syncfusion.com/documentation/api/document-editor/xmlHttpRequestEventArgs) properties.

The following example code illustrates how to modify the XMLHttpRequest using beforeXmlHttpRequestSend.

```ts
import { DocumentEditorContainer, XmlHttpRequestEventArgs } from '@syncfusion/ej2-documenteditor';

let container: DocumentEditorContainer = new DocumentEditorContainer({
  enableToolbar: true,
  height: '590px',
});

// Below action, cancel all server-side interactions except spell check
container.beforeXmlHttpRequestSend = (args: XmlHttpRequestEventArgs): void => {
  //Here, modifying the request headers
  args.headers = [{ syncfusion: 'true' }];
  args.withCredentials = true;
  switch (args.serverActionType) {
    case 'Import':
    case 'RestrictEditing':
    case 'SystemClipboard':
      args.cancel = true;
      break;
  }
};
container.appendTo('#container');

```

N> The customizable serverActionType values are `'Import' | 'RestrictEditing' | 'SpellCheck' | 'SystemClipboard'`.