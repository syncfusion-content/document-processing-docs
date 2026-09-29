---
layout: post
title: Web Services in Syncfusion JavaScript DOCX Editor Control| Syncfusion
description: Learn about the overview of web services in Syncfusion Essential Studio JavaScript DOCX Editor control and more details.
platform: document-processing
control: Web services 
documentation: ug
domainurl: ##DomainURL##
---

# Web Services in Syncfusion JavaScript DOCX Editor Control

You can deploy web APIs for server-side dependencies of [JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) component in the following platforms.

* [ASP.NET Core](./web-services/core)
* [ASP.NET MVC](./web-services/mvc)
* [Java](./web-services/java)

## Which operations require server-side interaction

| Operations | When client-server communication is triggered | What type of data will be transferred between client and server? |
|------------|--------------------------------------|------------------------|
|[Open file formats other than SFDT](./import#convert-word-documents-into-sfdt)|When opening the document other than SFDT (JavaScript DOCX Editor's native file format), the server-side web API is invoked from client-side script.|**Client**: Sends the input file.<br>**Server**: Receives the input file and sends the converted SFDT back to the client.<br><br>The server-side web API internally extracts the content from the document (DOCX, DOC, WordML, RTF, HTML) using Word library (DocIO) and converts it into SFDT for opening the document in DOCX Editor.|
|[Paste with formatting](./clipboard#paste-with-formatting)|When pasting the formatted content (HTML/RTF) received from system clipboard. For converting HTML/RTF to SFDT format.<br><br> **Note**: However, plain text received from the system clipboard will be pasted directly on the client side.|**Client**: Sends the input HTML or RTF string. <br>**Server**: Receives the input HTML or RTF string and sends the converted SFDT back to the client.|
|[Restrict editing](./restrict-editing)|When protecting the document, for generating a hash.|**Client**: Sends the input data for the hashing algorithm.<br> **Server**: Receives the input data for the hashing algorithm and sends the result hash information back to the client.|
|[Spellcheck](./spell-check) (default)|When the spellchecker is enabled on the client-side DOCX Editor, and it performs the spell check validation for words in the document.|**Client**: Sends the words (string) with their language for spelling validation.<br> **Server**: Receives the words (string) with their language for spelling validation and sends the validation result as JSON back to the client.|
|[SpellCheckByPage](./spell-check)|DOCX Editor provides options to spell check page by page when loading the documents. By [enabling optimized spell check](./spell-check#enableoptimizedspellcheck) on the client side, you can perform spellcheck page by page when loading the documents.|**Client**: Sends the words (string) with their language for spelling validation.<br> **Server**: Receives the words (string) with their language for spelling validation and sends the validation result as JSON back to the client.|
|[Save as file formats other than SFDT and DOCX](./saving-documents/server-side-export) (optional API)|You can configure this API if you want to save the document in a file format other than DOCX and SFDT.<br><br> For saving the files as WordML, DOC, RTF, HTML, ODT, or Text using the Word library (DocIO) and PDF using the Word (DocIO) and PDF libraries.|You can transfer the document from the client to the server either as SFDT or DOCX format.<br><br>First option (SFDT):<br>**Client**: Sends the SFDT.<br>**Server**: Receives the SFDT and saves the converted document as any file format supported by [Word library (DocIO)](https://www.syncfusion.com/word-framework/net/word-library) on the server or sends the saved file to the client browser.<br><br>Second option (DOCX):<br>**Client**: Sends the DOCX file.<br>**Server**: Receives the DOCX file and saves the converted document as any file format supported by [Word library (DocIO)](https://www.syncfusion.com/word-framework/net/word-library) on the server or sends the saved file to the client browser.|

N> If you don't require the above functionalities, then you can deploy it as a pure client-side component without any server-side interactions.

Please refer to the [example from GitHub](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) to configure the web service and set the [serviceUrl](https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/).

If your running web service URL is `http://localhost:62869/`, set the serviceUrl as shown below:

```ts
container.serviceUrl = "http://localhost:62869/api/documenteditor/";
```

## Required Web API structure

Please check the table below for the expected web API structure.

| Expected method name | Parameters | Return type |
|-----|----|----|
| Import | Files(IFormCollection) | JSON (SFDT format) |
| SystemClipboard | CustomerParameter: content (type string either RTF or HTML) and type (either .rtf or .html) | JSON (SFDT format) |
| RestrictEditing | Parameter of type CustomRestrictParameter<br>public class CustomRestrictParameter<br>        {<br>            public string passwordBase64 { get; set; }<br>            public string saltBase64 { get; set; }<br>            public int spinCount { get; set; }<br>        } | Result hash information |
| SpellCheck (default) | Parameter: SpellCheckJsonData<br>public class SpellCheckJsonData <br>{<br>            public int LanguageID { get; set; }<br>            public string TexttoCheck { get; set; }<br>            public bool CheckSpelling { get; set; }<br>            public bool CheckSuggestion { get; set; }<br>            public bool AddWord { get; set; }<br>        }  | JSON type of Spellcheck containing details of the spell checked word |
| SpellCheckByPage | Parameter: SpellCheckJsonData<br>public class SpellCheckJsonData <br>{<br>            public int LanguageID { get; set; }<br>            public string TexttoCheck { get; set; }<br>            public bool CheckSpelling { get; set; }<br>            public bool CheckSuggestion { get; set; }<br>            public bool AddWord { get; set; }<br>        }  | JSON type of Spellcheck containing details of the spell checked word |
| Save (optional API) | Parameter: SaveParameter <br>public class SaveParameter<br>{<br>public string Content { get; set; }<br> public string FileName { get; set; }<br> } | void (Save the file as a file stream) |
| ExportSFDT (optional API) | Parameter: SaveParameter <br>public class SaveParameter<br>{<br>public string Content { get; set; }<br> public string FileName { get; set; }<br> } | FileStreamResult (to save the document on the client side) |
| Export (optional API) | Files(IFormCollection) | FileStreamResult (to save the document on the client side) |

## Customize the expected method name

The DOCX Editor component provides an option to customize the expected method name for Import, SystemClipboard, RestrictEditing, and SpellCheck using [serverActionSettings](https://ej2.syncfusion.com/javascript/documentation/api/document-editor-container/documentEditorContainerModel#serveractionsettings).

The following example code illustrates how to customize the method name using serverActionSettings.

```javascript
    var container = new ej.documenteditor.DocumentEditorContainer({ enableToolbar: true, height: '590px', enableSpellCheck: true });
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
    container.serviceUrl = hostUrl + 'api/documenteditor/';
    // Customize the API name.
    var settings = { import: 'Import1', systemClipboard: 'SystemClipboard1', spellCheck: 'SpellCheck1', restrictEditing: 'RestrictEditing1' };
    container.serverActionSettings = settings;
    container.appendTo('#container');
```

## Add custom headers to the XMLHttpRequest

The DOCX Editor component provides an option to add custom headers to the XMLHttpRequest using the [`headers`](https://help.syncfusion.com/document-processing/word/word-processor/javascript-es5/header-footer).

```javascript
    var container = new ej.documenteditor.DocumentEditorContainer({ enableToolbar: true, height: '590px'});
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
    container.serviceUrl = hostUrl + 'api/documenteditor/';
    // Custom headers.
    var customHeaders = [{ 'Authorization': 'Bearer YOUR_ACCESS_TOKEN' }, { 'Content-Type': 'application/json' }];
    container.headers = customHeaders;
    container.appendTo('#container');
```

## Modify the XMLHttpRequest before sending a request

The DOCX Editor component provides an option to modify the XMLHttpRequest object (setting additional headers, if needed) using the [`beforeXmlHttpRequestSend`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor-container#beforexmlhttprequestsend) event, which is triggered before a server request.

You can customize the required [`XMLHttpRequest`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/xmlHttpRequestEventArgs) properties.

The following example code illustrates how to modify the XMLHttpRequest using beforeXmlHttpRequestSend.

```javascript
var container = new ej.documenteditor.DocumentEditorContainer({
  enableToolbar: true,
  height: '590px',
});
// The below action cancels all server-side interactions except spell check.
container.beforeXmlHttpRequestSend = function(args) {
  // Here, modifying the request headers.
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

N> The customizable serverActionType values are `'Import'`, `'RestrictEditing'`, `'SpellCheck'`, and `'SystemClipboard'`.