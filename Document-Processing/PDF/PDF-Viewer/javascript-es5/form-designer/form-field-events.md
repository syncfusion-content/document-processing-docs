---
layout: post
title: Form Field Events in JavaScript PDF Viewer control | Syncfusion
description: Learn here all about different form field in Syncfusion JavaScript PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# PDF Viewer Form Field events in JavaScript

The PDF Viewer control provides the support to different Form Field events. The Form Field events supported by the PDF Viewer Control are:

| Form Field events | Description |
|---|---|
| [formFieldAdd](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldAddArgs) | Event trigger when a form field is added.|
| [formFieldClick](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldClickArgs) | Events trigger when the form field is selected.|
| [formFieldDoubleClick](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldDoubleClickArgs) | Events trigger when the form field is double-clicked.|
| [formFieldFocusOut](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldFocusOutEventArgs) | Events trigger when focus out from the form fields.|
| [formFieldMouseLeave](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldMouseLeaveArgs) | Events trigger when the mouse cursor leaves the form field.|
| [formFieldMouseOver](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldMouseoverArgs) | Events trigger when the mouse cursor is over a form field.|
| [formFieldMove](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldMoveArgs) | Events trigger when a form field is moved.|
| [formFieldPropertiesChange](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldPropertiesChangeArgs) | Events trigger when a property of form field is changed.|
| [formFieldRemove](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldRemoveArgs) | Events trigger when a form field is removed.|
| [formFieldResize](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldResizeArgs) | Events trigger when a form field is resized.|
| [formFieldSelect](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldSelectArgs) | Events trigger when a form field is selected.|
| [formFieldUnselect](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldUnselectArgs) | Events trigger when a form field is unselected.|
| [validateFormFields](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/validateFormFieldsArgs) | Events trigger when validation is failed.|

## formFieldAdd event

The [formFieldAdd](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldAddArgs) event is triggered when a new form field is added, either programmatically or through user interaction. The event arguments provide the necessary information about the form field addition.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pdfviewer/javascript-es5/formfieldaddevent-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/formfieldaddevent-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

## formFieldClick event

The [formFieldClick](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldClickArgs) event is triggered when a form field is clicked. The event arguments provide the necessary information about the form field click event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pdfviewer/javascript-es5/formfieldclickevent-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/formfieldclickevent-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

## formFieldDoubleClick event

The [formFieldDoubleClick](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldDoubleClickArgs) event is triggered when a form field is double-clicked. The event arguments provide the necessary information about the form field double-click event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pdfviewer/javascript-es5/formfielddoubleclickevent-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/formfielddoubleclickevent-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

## formFieldFocusOut event

The [formFieldFocusOut](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldFocusOutEventArgs) event is triggered when a form field loses focus. The event arguments provide the necessary information about the form field focus out event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pdfviewer/javascript-es5/formfieldfocusoutevent-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/formfieldfocusoutevent-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

## formFieldMouseLeave event

The [formFieldMouseLeave](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldMouseLeaveArgs) event is triggered when the mouse leaves a form field. The event arguments provide the necessary information about the form field mouse leave event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pdfviewer/javascript-es5/formfieldmouseleaveevent-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/formfieldmouseleaveevent-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

## formFieldMouseOver event

The [formFieldMouseOver](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldMouseoverArgs) event is triggered when the mouse hovers over a form field. The event arguments provide the necessary information about the form field mouse over event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pdfviewer/javascript-es5/formfieldmouseoverevent-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/formfieldmouseoverevent-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

## formFieldMove event

The [formFieldMove](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldMoveArgs) event is triggered when the mouse moves inside a form field. The event arguments provide the necessary information about the form field mouse move event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pdfviewer/javascript-es5/formfieldmoveevent-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/formfieldmoveevent-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

## formFieldPropertiesChange event

The [formFieldPropertiesChange](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldPropertiesChangeArgs)  event is triggered when the properties of a form field are changed. The event arguments provide the necessary information about which property of the form field has been changed.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pdfviewer/javascript-es5/formfieldpropertieschangeevent-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/formfieldpropertieschangeevent-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

## formFieldRemove event

The [formFieldRemove](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldRemoveArgs) event is triggered when a form field is removed from the PDF. The event arguments provide the necessary information about which form field has been removed.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pdfviewer/javascript-es5/formfieldremoveevent-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/formfieldremoveevent-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

## formFieldResize event

The [formFieldResize](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldResizeArgs) events are triggered when a form field in a PDF is resized. These events provide the relevant details about the specific form field that has been resized.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pdfviewer/javascript-es5/formfieldresizeevent-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/formfieldresizeevent-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

## formFieldSelect event

The [formFieldSelect](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldSelectArgs) events are triggered when a form field in a PDF is selected. These events provide the necessary details about the specific form field that has been selected.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pdfviewer/javascript-es5/formfieldselectevent-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/formfieldselectevent-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

## formFieldUnselect event

The [formFieldUnselect](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldUnselectArgs) events are triggered when a form field in a PDF is unselected. These events provide the necessary details about the specific form field that has been unselected.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pdfviewer/javascript-es5/formfieldunselectevent-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/formfieldunselectevent-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

## validateFormFields event

The [validateFormFields](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/validateFormFieldsArgs) events are triggered when a required form field is left unfilled before downloading the PDF. These events provide the necessary information for validating which form fields are incomplete.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pdfviewer/javascript-es5/formfieldvalidationevent-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/formfieldvalidationevent-cs2/index.html %}
{% endhighlight %}
{% endtabs %}