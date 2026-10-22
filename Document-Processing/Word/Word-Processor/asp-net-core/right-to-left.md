---
layout: post
title: Right to Left in ASP.NET Core DOCX Editor | Syncfusion
description: Right-to-left support in ASP.NET Core DOCX Editor enables RTL user interfaces, including menus, dialogs, and text direction for RTL languages.
platform: document-processing
control: Right to Left
documentation: ug
---

# Right to Left in ASP.NET Core DOCX Editor

[ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) provides RTL (right-to-left) support. This can be enabled using the `enableRtl` property of the DocumentEditorContainer component.

## Enable right-to-left layout

Set the `enableRtl` property to `true` to render the DOCX Editor user interface — including the toolbar or ribbon, menus, dialogs, and property pane — in a right-to-left layout.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% raw %}
<div class="control-section">
    <div id='documenteditor_titlebar' class="e-de-ctn-title"></div>
    <div style="display:block; height: calc(100vh - 230px);">
        <ejs-documenteditorcontainer id="container" enableToolbar="true" enableRtl="true" height="100%"></ejs-documenteditorcontainer>
    </div>
</div>
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Localize the DOCX Editor for RTL languages

To fully localize the DOCX Editor for right-to-left languages such as Arabic, set the `locale` property to a right-to-left culture (for example, `ar-AE`) and load the localized strings using the `L10n.load` method. This translates the built-in texts of the toolbar, dialogs, and context menus into the specified language.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% raw %}
<ejs-documenteditorcontainer id="container" enableToolbar="true" enableRtl="true" locale="ar-AE" height="100%"></ejs-documenteditorcontainer>
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="Localization" %}
{% raw %}
ej.base.L10n.load({
    'ar-AE': {
        'documenteditor': {
            'Table': 'لجدول',
            'Row': 'لصف',
            'Cell': 'الخليه',
            'Ok': 'موافق',
            'Cancel': 'إلغاء الأمر',
            'Size': 'حجم',
            'Alignment': 'محاذاه',
            'Left': 'ليسار',
            'Center': 'مركز',
            'Right': 'الحق',
            'Justify': 'تبرير'
        }
    }
});
{% endraw %}
{% endhighlight %}
{% endtabs %}

N> Refer to the complete list of [localization keys](./global-local) to customize all the texts of the DOCX Editor.

## Online Demo

Explore how to enable right-to-left layout in Word documents using the ASP.NET Core DOCX Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/asp-net-core/documenteditor/righttoleft#/tailwind3).

## See Also

* [Feature modules](./feature-module)
* [Globalization](./global-local)
