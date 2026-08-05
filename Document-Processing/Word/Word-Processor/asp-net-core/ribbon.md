---
layout: post
title: Ribbon in DOCX Editor control | Syncfusion
description: Learn here all about the Ribbon UI in the ASP.NET Core Document Editor control, how to switch between Ribbon and Toolbar modes.
platform: document-processing
control: DocumentEditor
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon in Document Editor Control

The [ASP.NET Core Document Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) provides a modern Ribbon interface similar to Microsoft Word. The Ribbon UI organizes commands in well-structured tabs and groups, giving you an efficient way to access editing features. Additionally, the Ribbon interface supports contextual tabs that appear only when elements such as tables, images, or headers/footers are selected in the document.

You can switch between the **Toolbar** and **Ribbon** UI, and choose between **Classic** and **Simplified** ribbon layouts.

## Enable Ribbon Mode

To enable the `Ribbon` in the Document Editor, use the `toolbarMode` property of `DocumentEditorContainer`. The available toolbar modes are:

- **`'Toolbar'`** - The traditional toolbar UI.
- **`'Ribbon'`** - The Ribbon UI, which provides a tabbed interface with grouped commands.

By default, `toolbarMode` is `Toolbar`.

The following example shows how to enable the `Ribbon` in the Document Editor.

```typescript

<ejs-documenteditorcontainer id="container" toolbarMode="Ribbon" serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"></ejs-documenteditorcontainer>
<script>
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar, ej.documenteditor.Ribbon);
</script>
```

## Ribbon Layouts

The Document Editor provides two different Ribbon layouts:

- **Classic**: A traditional, Office-like ribbon with detailed grouping and larger icons.
- **Simplified**: A more compact ribbon design with streamlined controls.

By default, `ribbonLayout` is set to `Simplified`.

The following example shows how to configure the ribbon layout in the Document Editor:

```typescript

<ejs-documenteditorcontainer id="container" toolbarMode="Ribbon" ribbonLayout="Classic" serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"></ejs-documenteditorcontainer>
<script>
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar, ej.documenteditor.Ribbon);
</script>
```


## See Also

* [How to customize the ribbon](./how-to/customize-ribbon)