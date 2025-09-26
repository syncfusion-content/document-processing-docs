---
layout: post
title: Using Hyperlinks in Blazor DocumentEditor Component | Syncfusion
description: Learn how to create, manage, and customize hyperlinks in the Syncfusion Blazor Document Editor component, including linking to web pages, bookmarks, and handling navigation.
platform: blazor
control: DocumentEditor
documentation: ug
---

# Using Hyperlinks in Blazor DocumentEditor Component

A hyperlink is a reference in a document that links content to another location, such as a web page, an email address, or a bookmark within the same document. The [Blazor Word Processor](https://www.syncfusion.com/blazor-components/blazor-word-processor) (Document Editor) provides comprehensive support for creating, editing, and customizing hyperlinks.

## Creating and Editing Hyperlinks via the UI

The user interface offers intuitive ways to add and manage hyperlinks.

### Automatic Hyperlink Creation

The Document Editor can automatically format a URL as a hyperlink. Simply type an address and press `ENTER`, `SPACEBAR`, or `TAB`. The text will be converted to a functional hyperlink if it begins with one of the following prefixes:

*   http://
*   https://
*   file:///
*   www.
*   mailto:

### Using the Hyperlink Dialog

For more control, the component includes a built-in dialog for inserting and editing hyperlinks. To open it, place the cursor on the desired text and press `Ctrl+K`.

The dialog allows you to:
*   Link to an existing web page or file by entering its URL.
*   Link to an email address.
*   Link to a bookmark within the current document.

You can also open the dialog programmatically:

```csharp
@* The following code example demonstrates how to open the hyperlink dialog. *@
container.DocumentEditor.OpenDialog(DialogType.Hyperlink);
```

## Managing Hyperlinks Programmatically

The Document Editor exposes a rich set of APIs for managing hyperlinks in code.

### Insert a Hyperlink

Use the `InsertHyperlinkAsync` method to create a hyperlink at the current selection. You can specify both the destination URL and the display text.

```csharp
@* The following code example demonstrates how to insert a hyperlink to "https://www.google.com" with the display text "Google". *@
await container.DocumentEditor.Editor.InsertHyperlinkAsync("https://www.google.com", "Google");
```

### Remove a Hyperlink

To remove a hyperlink and convert it back to plain text, use the `RemoveHyperlinkAsync` method. This can also be done by pressing the `Backspace` key at the end of the hyperlinked text.

```csharp
@* The following code example demonstrates how to remove a hyperlink from the current selection. *@
await container.DocumentEditor.Editor.RemoveHyperlinkAsync();
```

### Copy a Hyperlink's URL

To copy the destination URL of a hyperlink to the clipboard, use the `CopyHyperlinkAsync` method.

```csharp
@* The following code example demonstrates how to copy the URL of the hyperlink at the current selection. *@
await container.DocumentEditor.Selection.CopyHyperlinkAsync();
```

## Customizing Hyperlink Navigation

By default, clicking a hyperlink navigates to its destination. This behavior can be customized using the `OnRequestNavigate` event.

This event is triggered when a user `Ctrl+Clicks` a hyperlink, providing details about the link type and destination. You can intercept this action to define custom logic, such as opening the link in a new tab or handling it within your application.

Setting `args.IsHandled = true` prevents the editor's default navigation action from executing, giving you full control over the process.

```cshtml
<SfDocumentEditor ID="cont" IsReadOnly="false" EnableEditor="true" EnableSelection="true" @ref="container" Height="590px">
    <DocumentEditorEvents OnRequestNavigate="OnRequestNavigate" Created="OnCreated"></DocumentEditorEvents>
</SfDocumentEditor>

@code {
    SfDocumentEditor container;

    // An event handler to customize hyperlink navigation.
    public async Task OnRequestNavigate(RequestNavigateEventArgs args)
    {
        // Check if the link is a web URL. Bookmarks are handled internally.
        if (args.LinkType == HyperlinkType.Web)
        {
            // Prevent the default navigation.
            args.IsHandled = true;

            // Get the full URL.
            string url = args.NavigationLink;
            if (!string.IsNullOrEmpty(args.LocalReference))
            {
                url += "#" + args.LocalReference;
            }

            // Implement custom logic, e.g., opening the URL in a new browser tab.
            await JSRuntime.InvokeVoidAsync("open", url, "_blank");
        }
    }

    public void OnCreated()
    {
        // Your creation logic here.
    }
}
```

You can also programmatically trigger navigation for the hyperlink at the current selection by calling the `NavigateHyperlinkAsync` method.

```csharp
@* The following code example demonstrates how to trigger navigation for the selected hyperlink. *@
await container.DocumentEditor.Selection.NavigateHyperlinkAsync();
```