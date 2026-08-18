---
layout: post
title: Comments in JavaScript DOCX Editor | Syncfusion
description: The comments feature in JavaScript DOCX Editor enables users to add, review, navigate, reply to, and manage comments within documents.
platform: document-processing
control: Comments 
documentation: ug
domainurl: ##DomainURL##
---

# Comments in JavaScript DOCX Editor

[JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) allows you to add comments to documents. You can add, navigate and remove comments in code and from the UI.

To know more about the comments in DocumentEditor component, you can check the video below.

{% youtube "https://www.youtube.com/watch?v=Q8BYxr6OYHo" %}

## Add a new comment

Comments can be inserted to the selected text.

```js
//Add new comment in the document.
documentEditor.editor.insertComment('Test comment');
```

## Add a New Comment with Date, Author, and Status

Comments can be inserted into the selected text with a specified date, author, and status [`insertComment`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/editor#insertcomment).

```js
// In this example, a comment with the text "Hello world"
// is added by the author Nancy Davolio on July 23, 2024, at 2:30 PM. 
// The isResolved status is set to false.

// Create a specific date: July 23, 2024, at 2:30:00 PM.
// Note: July is represented by 6 (0-based index).
var specificDate = new Date(2024, 6, 23, 14, 30, 0);

// Define the properties of the comment including author, date, and resolution status.
var commentProperties = { 
    author: 'Nancy Davolio',          // The author of the comment.
    dateTime: specificDate,           // The date and time when the comment is created.
    isResolved: false                 // The status of the comment; false indicates it is unresolved.
};

// Insert the comment with the specified properties into the document editor.
documentEditor.editor.insertComment('Hello world', commentProperties);
```

## Add a Reply Comment with Date, Author, and Status

Reply comments can be inserted into the parent comment with a specified date, author using [`insertReplyComment`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/editor#insertreplycomment).

```js
// In this example, a comment with the text "Hello world"
// is added by the author Nancy Davolio on July 23, 2024, at 2:30 PM. 
// The isResolved status is set to false.

// Create a specific date: July 23, 2024, at 2:30:00 PM.
// Note: July is represented by 6 (0-based index).
var specificDate = new Date(2024, 6, 23, 14, 30, 0);

// Define the properties of the comment including author, date, and resolution status.
var commentProperties = { 
    author: 'Nancy Davolio',          // The author of the comment.
    dateTime: specificDate,           // The date and time when the comment is created.
    isResolved: false                 // The status of the comment; false indicates it is unresolved.
};

// Insert the comment with the specified properties into the document editor.
var comment = documentEditor.editor.insertComment('Hello world', commentProperties);
// Insert a reply comment with specified properties into the Document Editor
documentEditor.editor.insertReplyComment(comment.id, 'Hello world', commentProperties);
```

## Get Comments

Document Editor allows you to get the comments along with their replies and comment properties using [`getComments`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#getComments).

```js
//Get Comments in the document along with the properties author, date, status.
var commentInfo = container.documentEditor.getComments();
```


## Comment navigation

Next and previous comments can be navigated using the below code snippet.

```js
//Navigate to next comment
documentEditor.selection.navigateNextComment();

//Navigate to previous comment
documentEditor.selection.navigatePreviousComment();
```


## Delete comment

Current comment can be deleted using [`deleteComment`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/editor#deletecomment).


```js
//Delete the current selected comment.
container.documentEditor.editor.deleteComment();

//Get Comments in the document along with the properties author, date, status.
var commentinfo = container.documentEditor.getComments();

//Delete the particular parent comments and all of its reply comments
container.documentEditor.editor.deleteComment(commentinfo[0].id);

//Delete the particular reply comment.
container.documentEditor.editor.deleteComment(commentinfo[0].replies[0].id);
```

## Delete all comment

All the comments in the document can be deleted using the below code snippet.

```js
//Delete all the comments present in the current document.
documentEditor.editor.deleteAllComments();
```

## Protect the document in comments only mode

Document Editor provides support for protecting the document with `CommentsOnly` protection. In this protection, users are allowed to add or edit comments alone in the document.

Document Editor provides an option to protect and unprotect document using [`enforceProtection`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/editor#enforceprotection) and [`stopProtection`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/editor#stopprotection) API.

The following example code illustrates how to enforce and stop protection in Document Editor container.

```js

var container = new ej.documenteditor.DocumentEditorContainer({
  enableToolbar: true,
  height: '590px'
});
ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
container.appendTo('#container');

//enforce protection
container.documentEditor.editor.enforceProtection('123', 'CommentsOnly');

//stop the document protection
container.documentEditor.editor.stopProtection('123');

```

Comment only protection can be enabled in UI by using [Restrict Editing pane](./document-management#restrict-editing-pane)

![Enable comment only protection](images/commentsonly.png)

N> In the enforceProtection method, the first parameter denotes the password and the second parameter denotes the protection type. Possible values of protection type are `NoProtection |ReadOnly |FormFieldsOnly |CommentsOnly`. In the stopProtection method, the parameter denotes the password.

## Mention Support in comments

Mention support displays a list of items that users can select or tag from the suggested list. To use this feature, type the @ character in the comment box and select or tag the user from the suggestion list.

The following example illustrates how to enable mention support in the Document Editor

```js
var mentionData = [
    { "Name": "Mary Kate", "EmailId": "marry@company.com" },
    { "Name": "Andrew James", "EmailId": "james@company.com" },
    { "Name": "Andrew Fuller", "EmailId": "andrew@company.com" }
];

var container = new ej.documenteditor.DocumentEditorContainer({
    enableToolbar: true,
    height: '590px',
    // Enable mention support in document editor
    documentEditorSettings: {
        mentionSettings: { dataSource: mentionData, fields: { text: 'Name' } }
    }
});

ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
container.appendTo('#container');

```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Events

DocumentEditor provides the [beforeCommentAction](https://ej2.syncfusion.com/javascript/documentation/api/document-editor-container#beforecommentaction) event, which is triggered on comment actions such as Post, edit, reply, resolve, and reopen. This event provides an opportunity to perform custom logic on these comment actions. The event handler receives the [CommentActionEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/commentActionEventArgs) object as an argument, which allows access to information about the comment.

To demonstrate a specific use case, let’s consider an example where we want to restrict the delete functionality based on the author’s name. The following code snippet illustrates how to allow only the author of a comment to delete:

```js

var mentionData = [
    { "Name": "Mary Kate", "EmailId": "marry@company.com" },
    { "Name": "Andrew James", "EmailId": "james@company.com" },
    { "Name": "Andrew Fuller", "EmailId": "andrew@company.com"}
    ];
    // Initialize DocumentEditorContainer component.
    var documenteditorContainer = new ej.documenteditor.DocumentEditorContainer({ enableToolbar: true, height: '590px', beforeCommentAction:beforecomment,documentEditorSettings: {
    mentionSettings: { dataSource: mentionData, fields: { text: 'Name' }},
  } });
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
    documenteditorContainer.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
    //DocumentEditorContainer control rendering starts
    documenteditorContainer.appendTo('#DocumentEditor');
    documenteditorContainer.currentUser = "Guest User";


    // Event is triggered on comment actions such as Post, edit, reply, resolve, and reopen
    function beforecomment(args){
      // Check if the type is Delete and the author of the comment differs from the current user
      if(args.type === "Delete" && documenteditorContainer.currentUser !== args.author){
        // Cancel the comment action
        args.cancel = true;
      }
    }
```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Online Demo

Explore how to add, view, and manage comments in Word documents using the JavaScript (ES5) Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/javascript-es5/#/tailwind3/document-editor/comments.html).