---
layout: post
title: Overview in React Document editor component | Syncfusion
description: Learn here all about Index in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Index 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Overview

The Document Editor component is used to create, edit, view, and print Word documents in web applications. All the user interactions and editing operations that run purely in the client-side provides much faster editing experience to the users.

## Key Features

* [Opens](./import) the native `Syncfusion Document Text (*.sfdt)` format documents in the client-side.
* [Saves the documents](./export) in the client-side as `Syncfusion Document Text (*.sfdt)` and `Word document (*.docx)`.
* Supports document elements like text, [image](./image), [table](./table), fields, [bookmark](./bookmark),[shapes](./shapes), [section](./section-format), [header and footer](./header-footer).
* Supports the commonly used fields like [hyperlink](./link), page number, page count, and table of contents.
* Supports formats like [text](./text-format), [paragraph](./paragraph-format), [bullets and numbering](./list-format), [table](./table-format), [page settings](./section-format), etc.
* Provides support to create, edit, and apply [paragraph and character styles](./styles).
* Provides support to [find and replace](./find-and-replace) text within the document.
* Supports all the common editing and formatting operations along with [undo and redo](./history).
* Provides support to [cut](./clipboard#cut), [copy](./clipboard#copy), and [paste](./clipboard#paste) rich text contents within the component. Also allows pasting simple text to and from other applications.
* Provides support to insert, and edit [form fields](./form-fields).
* Provides support to insert, and edit [comments](./comments).
* Provides support to track the [inserted and deleted content](./track-changes).
* Provides support to perform [spell checking](./spell-check) for any input text
* Allows user interactions like [zoom](./scrolling-zooming#zooming), [scroll](./scrolling-zooming), select contents through touch, mouse, and keyboard.
* Provides intuitive UI options like context menu, [dialogs](./dialog), and [navigation pane](./find-and-replace#options-pane).
* [Localizes](./global-local) all the static text to any desired language.
* Allows to create a lightweight Word viewer using module injection to view and [prints](./print) Word documents.
* Provides a [server-side helper library](./web-services) to open the Word documents like DOCX, DOC, WordML, RTF, and Text, by converting it to SFDT file format.

## Supported Web platforms
 
* [Javascript(ES5)](../javascript-es5/getting-started)
* [Javascript(ES6)](../javascript-es6/getting-started)
* [Angular](../angular/getting-started)
* [React](../react/getting-started)
* [Vue](../vue/getting-started)
* [ASP.NET Core](../asp-net-core/getting-started-core)
* [ASP.NET MVC](../asp-net-mvc/getting-started)
* [Blazor](../blazor/getting-started/server-side-application)

### Supported platforms for server-side dependencies

You can deploy web APIs for server-side dependencies of Document Editor component in the following platforms.

* [ASP.NET Core](./web-services/core)
* [ASP.NET MVC](./web-services/mvc)
* [Java](./web-services/java)

To know more about server-side dependencies, refer this [page](./web-services-overview).

#### Which operations require server-side interaction

* Open file formats other than SFDT
* Paste with formatting
* Restrict editing
* Spellcheck
* Save as file formats other than SFDT and DOCX

>Note: If you don't require the above functionalities then you can deploy as pure client-side component without any server-side interactions.