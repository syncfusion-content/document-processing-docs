---
layout: post
title: How to Open Angular DOCX Editor in Read-Only Mode | Syncfusion
description: Open Syncfusion® Angular DOCX Editor in read-only mode to prevent document modifications while allowing users to view content.
platform: document-processing
control: Default read-only
documentation: ug
domainurl: ##DomainURL##
---

# How to Open Angular DOCX Editor in Read-Only Mode

In this article, we are going to see how to open a document in read-only mode by default in [Angular DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/angular-docx-editor) (Document Editor) & Document Editor Container.

## Opening a document in read-only mode by default in DocumentEditor

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/angular/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/angular/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/document-editor/angular/getting-started-cs2" %}

## Opening a document in read-only mode by default in DocumentEditorContainer

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/angular/document-editor-container-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/angular/document-editor-container-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/document-editor/angular/document-editor-container-cs3" %}

N> You can use the `restrictEditing` in `DocumentEditorContainer` and `isReadOnly` in `DocumentEditor` based on your requirement to change the component to read-only mode.