--- 
layout: post
title: Integrating Spreadsheet into existing React layouts | Syncfusion
description: Guidance on embedding the Spreadsheet into react layouts using the Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Integrating Spreadsheet into Existing React Layouts

## Overview

The React Spreadsheet component can be embedded into dashboards, admin panels, split‑screen views, tabs, dialogs, collapsible/accordion sections, sidebars, and multi‑column layouts. This guide provides concise layout patterns and minimal code examples to ensure the Spreadsheet renders correctly, resizes properly, and refreshes when hosted inside common layout containers.

## How‑To

### Use Spreadsheet inside Tab components

The React Spreadsheet component is supported inside Syncfusion Tab components.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/integrate-into-layouts-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/integrate-into-layouts-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/integrate-into-layouts-cs1" %}

### Use spreadsheet inside Dialog

If the spreadsheet sits inside a dialog, for example Syncfusion Dialog, render or initialize the spreadsheet after the dialog open events. The DOM must be visible for the spreadsheet to measure layout.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/integrate-into-layouts-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/integrate-into-layouts-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/integrate-into-layouts-cs2" %}

### Use Spreadsheet inside collapsible sections

For accordions or collapsible containers, you can render the Spreadsheet inside an `AccordionItem`. If the item is rendered while hidden, trigger a resize event when the section becomes active so the component can recalculate its layout.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/integrate-into-layouts-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/integrate-into-layouts-cs3/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/integrate-into-layouts-cs3" %}

## Why visibility and height matter

The Spreadsheet measures its host container to calculate column widths, row heights and layout. If the host element has no height (collapsed, `display:none`, or not yet mounted) measurements will be zero and the Spreadsheet may render incorrectly, be clipped, or not display at all.

Initialize or refresh the Spreadsheet when its host becomes visible (tab active, modal opened, accordion expanded) so internal layout code can compute sizes.

## Resize & visibility tips

After the parent element becomes visible, call the Spreadsheet instance's [resize](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#resize) method so it can recompute layout:

```js
setTimeout(() => {
	spreadsheetRef.current.resize();
}, 0);
```

## Note

Mount the Spreadsheet component only when the corresponding pane becomes visible. If the Spreadsheet must be mounted while hidden, call its [resize] (https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#resize) method after the pane is shown so that the layout is recalculated correctly.

## When to use these patterns

- Use Dialogs for temporary or isolated spreadsheet previews.
- Use Tabs/Accordion patterns for multi-pane UIs — ensure a resize/refresh is triggered when a pane becomes active.
- Avoid placing the Spreadsheet in invisible containers without a resize/refresh strategy; otherwise measurements will be zero and layout will break.

## See also

- [Overview of Syncfusion React Tab component](https://ej2.syncfusion.com/react/documentation/tab/getting-started)
- [Overview of Syncfusion React Dialog component](https://ej2.syncfusion.com/react/documentation/dialog/getting-started)
- [Overview of Syncfusion React Accordion component](https://ej2.syncfusion.com/react/documentation/accordion/getting-started)