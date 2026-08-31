---
title: Clipboard in WPF DOCX Editor | Syncfusion
description: The clipboard in WPF DOCX Editor offers copy and paste support in rich text, text, and image formats, enabling flexible content transfer.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: clipboard
---
# Clipboard in WPF DOCX Editor

The [WPF DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/wpf-docx-editor) (SfRichTextBoxAdv) takes advantage of the clipboard support and allows you to copy or paste contents to and from the clipboard in the following formats.

* Rich text format.

* Text.

* Image.

## UI commands to access clipboard operations


The following code example demonstrates how to bind commands for accessing clipboard operations.
{% tabs %}
{% highlight xaml %}
<!-- Binds button to the CutCommand -->
<Button Content="Cut" Command="RichTextBoxAdv:SfRichTextBoxAdv.CutCommand" CommandTarget="{Binding ElementName=richTextBoxAdv}" />
<!-- Binds button to the CopyCommand -->
<Button Content="Copy" Command="RichTextBoxAdv:SfRichTextBoxAdv.CopyCommand" CommandTarget="{Binding ElementName=richTextBoxAdv}" />
<!-- Binds button to the PasteCommand -->
<Button Content="Paste" Command="RichTextBoxAdv:SfRichTextBoxAdv.PasteCommand" CommandTarget="{Binding ElementName=richTextBoxAdv}" />


{% endhighlight %}

{% endtabs %}

N> In order to cut, copy, or paste, the standard keyboard shortcuts such as CTRL+X, CTRL+C, and CTRL+V can also be used.

N> You can refer to our [WPF DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/wpf-docx-editor) feature tour page for its groundbreaking feature representations. You can also explore our [WPF DOCX Editor example](https://github.com/syncfusion/docx-editor-sdk-wpf-demos) to know how to render and configure the editing tool.

## See also

- [Document Properties in WPF DOCX Editor](./Document-Properties)
- [Selection in WPF DOCX Editor](./Selection)
- [Commands in WPF DOCX Editor](./Commands)
