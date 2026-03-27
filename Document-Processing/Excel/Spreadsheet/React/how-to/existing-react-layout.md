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

### Place the Spreadsheet inside basic divs

Insert the Spreadsheet inside a container with a defined height. The Spreadsheet automatically fills the available space within its parent element.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/integrate-into-layouts-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/integrate-into-layouts-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/integrate-into-layouts-cs1" %}

### Place the Spreadsheet inside a flex layout

When placing the Spreadsheet inside a flex container, ensure the flex item has min-height: 0 so the component can grow and shrink correctly. The parent container must have a defined height.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/integrate-into-layouts-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/integrate-into-layouts-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/integrate-into-layouts-cs2" %}

### Place the Spreadsheet inside a CSS grid

Define explicit row or column sizes using grid-template-rows or grid-template-columns. This ensures the grid cell has a measurable height for the Spreadsheet to render correctly.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/integrate-into-layouts-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/integrate-into-layouts-cs3/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/integrate-into-layouts-cs3" %}

### Use Spreadsheet inside Tab components

The React Spreadsheet component is supported inside Syncfusion Tab components.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/integrate-into-layouts-cs4/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/integrate-into-layouts-cs4/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/integrate-into-layouts-cs4" %}

### Use spreadsheet inside Dialog

If the spreadsheet sits inside a dialog, for example Syncfusion Dialog, render or initialize the spreadsheet after the dialog open events. The DOM must be visible for the spreadsheet to measure layout.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/integrate-into-layouts-cs5/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/integrate-into-layouts-cs5/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/integrate-into-layouts-cs5" %}

### Use Spreadsheet inside collapsible sections

For accordions or collapsible containers, you can render the Spreadsheet inside an `AccordionItem`. If the item is rendered while hidden, trigger a resize event when the section becomes active so the component can recalculate its layout.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/integrate-into-layouts-cs6/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/integrate-into-layouts-cs6/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/integrate-into-layouts-cs6" %}

## See also

- [Overview of Syncfusion React Tab component](https://ej2.syncfusion.com/react/documentation/tab/getting-started)
- [Overview of Syncfusion React Dialog component](https://ej2.syncfusion.com/react/documentation/dialog/getting-started)
- [Overview of Syncfusion React Accordion component](https://ej2.syncfusion.com/react/documentation/accordion/getting-started)
