---
layout: post
title: Hyperlink in Blazor DocumentEditor Component | Syncfusion
description: Checkout and learn here all about Hyperlink and its functionality in Syncfusion Blazor DocumentEditor component and more.
platform: document-processing
control: DocumentEditor
documentation: ug
---

# Hyperlink in Blazor DocumentEditor Component

A hyperlink is a reference in a document that links content to another location, such as a web page, an email address, or a bookmark within the same document. The [Blazor Word Processor](https://www.syncfusion.com/blazor-components/blazor-word-processor) (Document Editor) provides comprehensive support for creating, editing, and customizing hyperlinks.

## Navigate a hyperlink

By default, clicking a hyperlink navigates to its destination. This behavior can be customized using the `OnRequestNavigate` event.

This event is triggered when a user `Ctrl+Clicks` a hyperlink, providing details about the link type and destination. You can intercept this action to define custom logic, such as opening the link in a new tab or handling it within your application.

Setting `args.IsHandled = true` prevents the editor's default navigation action from executing, giving you full control over the process.

### Add the OnRequestNavigate event for DocumentEditor

The following example illustrates how to add OnRequestNavigate event for DocumentEditor.

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
await container.DocumentEditor.Selection.NavigateHyperlinkAsync();
```
## Copy Hyperlink

To copy the destination URL of a hyperlink to the clipboard, use the `CopyHyperlinkAsync` method.

```csharp
await container.DocumentEditor.Selection.CopyHyperlinkAsync();
```

## Add Hyperlink

The Document Editor can automatically format a URL as a hyperlink. Simply type an address and press `ENTER`, `SPACEBAR`, or `TAB`. The text will be converted to a functional hyperlink if it begins with one of the following prefixes:

*   http://
*   https://
*   file:///
*   www.
*   mail to:

Use the `InsertHyperlinkAsync` method to create a hyperlink at the current selection. You can specify both the destination URL and the display text.

```csharp
await container.DocumentEditor.Editor.InsertHyperlinkAsync("https://www.google.com", "Google");
```

## Remove Hyperlink

To remove a hyperlink and convert it back to plain text, use the `RemoveHyperlinkAsync` method. This can also be done by pressing the `Backspace` key at the end of the hyperlinked text.

```csharp
await container.DocumentEditor.Editor.RemoveHyperlinkAsync();
```

## Hyperlink Dialog

For more control, the component includes a built-in dialog for inserting and editing hyperlinks. To open it, place the cursor on the desired text and press `Ctrl+K`.
The dialog allows you to:
*   Link to an existing web page or file by entering its URL.
*   Link to an email address.
*   Link to a bookmark within the current document.
You can also open the dialog programmatically:

```csharp
container.DocumentEditor.OpenDialog(DialogType.Hyperlink);
```
You can use the following keyboard shortcut to open the hyperlink dialog if the selection is in hyperlink.

| Key Combination | Description |
|-----------------|-------------|
|Ctrl + K | Open hyperlink dialog that allows you to create or edit hyperlink|





