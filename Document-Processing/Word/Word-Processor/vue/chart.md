---
layout: post
title: Charts in Vue DOCX Editor component | Syncfusion
description: Chart support in Vue DOCX Editor ensures accurate rendering and preservation when opening Word documents.
control: Chart 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Charts in Vue DOCX Editor component

[Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/vue-docx-editor) (Document Editor) provides chart preservation support. Using Document Editor, you can see the chart reports from your Word document.

The following example shows chart preservation in DOCX Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/chart-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/chart-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/vue/chart-cs1" %}

## Supported Chart Types

The following chart types are supported in DOCX Editor:

* Scatter_Markers
* Bubble
* Area
* Area_Stacked
* Area_Stacked_100
* Bar_Clustered
* Bar_Stacked
* Bar_Stacked_100
* Column_Clustered
* Column_Stacked
* Column_Stacked_100
* Pie
* Doughnut
* Line
* Line_Markers
* Line_Markers_Stacked
* Line_Markers_Stacked_100
* Line_Stacked
* Line_Stacked_100

## Online Demo

Explore how to preserve charts in Word documents using the Vue DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/vue/#/tailwind3/document-editor/chart.html).

## See Also

* [Feature modules](./feature-module)
* [Getting started](./getting-started)