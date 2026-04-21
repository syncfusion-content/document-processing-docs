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

The React Spreadsheet component is fully supported within [Syncfusion Tab component](https://ej2.syncfusion.com/react/documentation/api/tab/index-default). You can safely place and render the Spreadsheet inside a Tab item.

The following sample shows how to render the Spreadsheet inside the Tab component.

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

If the Spreadsheet is placed inside a dialog (for example, a Syncfusion Dialog), render or initialize the Spreadsheet only within the dialog’s open event. The parent container must be visible in the DOM for the Spreadsheet to correctly measure and compute its layout.

And if the Spreadsheet is rendered while the dialog container is hidden and the container is made visible later, the Spreadsheet may not render correctly. In such cases, invoke the [resize](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#resize) method in the dialog's open event to re-render the Spreadsheet layout based on the currently visible parent container.

The following sample shows how to render Spreadsheet inside the Dialog component.

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

When placing the Spreadsheet inside an accordion or any collapsible container (for example, within an AccordionItem), it is important to ensure that the Spreadsheet is rendered only when the corresponding section is visible. The Spreadsheet relies on the visibility of its parent container in the DOM to accurately measure dimensions and compute its layout.

If the accordion item is initialized while it is in a collapsed (hidden) state, the Spreadsheet will not be able to calculate its layout correctly, which may result in improper rendering. To avoid this, you can either:

- Render or initialize the Spreadsheet only when the accordion item becomes active (expanded), or
- If the Spreadsheet must be rendered while the accordion item is hidden, explicitly trigger a Spreadsheet's [resize](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#resize) method in the accordion's expanded event to re-render the Spreadsheet layout based on the current parent container.

The following sample shows how to render the Spreadsheet inside the Accordion.

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

The Spreadsheet measures its parent container to calculate column widths, row heights and layout. If the parent container has no height (collapsed, `display:none`, or not yet mounted) measurements will be zero and the Spreadsheet may render incorrectly, be clipped, or not display at all.

Initialize or refresh the Spreadsheet when its parent container becomes visible (tab active, modal opened, accordion expanded) so internal layout code can compute sizes.

## Resize & visibility tips

After the parent container becomes visible, call the Spreadsheet instance's [resize](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#resize) method so it can recompute layout:

```js
setTimeout(() => {
	spreadsheetRef.current.resize();
}, 0);
```

> **Note**: Mount the Spreadsheet component only when the corresponding pane becomes visible. If the Spreadsheet must be mounted while hidden, call its [resize](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#resize) method after the pane is shown so that the layout is recalculated correctly.

## When to use these patterns

- Use Dialogs for temporary or isolated spreadsheet previews.
- Use Tabs/Accordion patterns for multi-pane UIs — ensure a resize/refresh is triggered when a pane becomes active.
- Avoid placing the Spreadsheet in invisible containers without a resize/refresh strategy; otherwise measurements will be zero and layout will break.

## See also

- [Overview of Syncfusion React Tab component](https://ej2.syncfusion.com/react/documentation/tab/getting-started)
- [Overview of Syncfusion React Dialog component](https://ej2.syncfusion.com/react/documentation/dialog/getting-started)
- [Overview of Syncfusion React Accordion component](https://ej2.syncfusion.com/react/documentation/accordion/getting-started)
