---
layout: post
title: Form Field Events | Syncfusion
description: Learn here all about different form field in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Form Field Events
documentation: ug
domainurl: ##DomainURL##
---

# PDF Viewer Form Field events in Angular

The PDF Viewer control provides the support to different Form Field events. The Form Field events supported by the PDF Viewer Control are:

| Form Field events | Description |
|---|---|
| [formFieldAdd](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldAddArgs/) | Event trigger when a form field is added.|
| [formFieldClick](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldClickArgs/) | Events trigger when the form field is selected.|
| [formFieldDoubleClick](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldDoubleClickArgs/) | Events trigger when the form field is double-clicked.|
| [formFieldFocusOut](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldFocusOutEventArgs/) | Events trigger when focus out from the form fields.|
| [formFieldMouseLeave](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldMouseLeaveArgs/) | Events trigger when the mouse cursor leaves the form field.|
| [formFieldMouseOver](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldMouseoverArgs/) | Events trigger when the mouse cursor is over a form field.|
| [formFieldMove](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldMoveArgs/) | Events trigger when a form field is moved.|
| [formFieldPropertiesChange](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldPropertiesChangeArgs/) | Events trigger when a property of form field is changed.|
| [formFieldRemove](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldRemoveArgs/) | Events trigger when a form field is removed.|
| [formFieldResize](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldResizeArgs/) | Events trigger when a form field is resized.|
| [formFieldSelect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldSelectArgs/) | Events trigger when a form field is selected.|
| [formFieldUnselect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldUnselectArgs/) | Events trigger when a form field is unselected.|
| [validateFormFields](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/validateFormFieldsArgs/) | Events trigger when validation is failed.|

## formFieldAdd event

The [formFieldAdd](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldAddArgs/) event is triggered when a new form field is added, either programmatically or through user interaction. The event arguments provide the necessary information about the form field addition.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldaddevent-cs2/src/app/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldaddevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldClick event

The [formFieldClick](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldClickArgs/) event is triggered when a form field is clicked. The event arguments provide the necessary information about the form field click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldclickevent-cs2/src/app/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldclickevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldDoubleClick event

The [formFieldDoubleClick](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldDoubleClickArgs/) event is triggered when a form field is double-clicked. The event arguments provide the necessary information about the form field double-click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/formfielddoubleclickevent-cs2/src/app/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/formfielddoubleclickevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldFocusOut event

The [formFieldFocusOut](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldFocusOutEventArgs/) event is triggered when a form field loses focus. The event arguments provide the necessary information about the form field focus out event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldfocusoutevent-cs2/src/app/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldfocusoutevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldMouseLeave event

The [formFieldMouseLeave](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldMouseLeaveArgs/) event is triggered when the mouse leaves a form field. The event arguments provide the necessary information about the form field mouse leave event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldmouseleaveevent-cs2/src/app/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldmouseleaveevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldMouseOver event

The [formFieldMouseOver](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldMouseoverArgs/) event is triggered when the mouse hovers over a form field. The event arguments provide the necessary information about the form field mouse over event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldmouseoverevent-cs2/src/app/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldmouseoverevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldMove event

The [formFieldMove](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldMoveArgs/) event is triggered when the mouse moves inside a form field. The event arguments provide the necessary information about the form field mouse move event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldmousemoveevent-cs2/src/app/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldmousemoveevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldPropertiesChange event

The [formFieldPropertiesChange](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldPropertiesChangeArgs/) event is triggered when the properties of a form field are changed. The event arguments provide the necessary information about which property of the form field has been changed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldpropertieschangeevent-cs2/src/app/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldpropertieschangeevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldRemove event

The [formFieldRemove](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldRemoveArgs/) event is triggered when a form field is removed from the PDF. The event arguments provide the necessary information about which form field has been removed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldremoveevent-cs2/src/app/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldremoveevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldResize event

The [formFieldResize](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldResizeArgs/) events are triggered when a form field in a PDF is resized. These events provide the relevant details about the specific form field that has been resized.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldresizeevent-cs2/src/app/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldresizeevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldSelect event

The [formFieldSelect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldSelectArgs/) events are triggered when a form field in a PDF is selected. These events provide the necessary details about the specific form field that has been selected.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldselectevent-cs2/src/app/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldselectevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldUnselect event

The [formFieldUnselect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldUnselectArgs/) events are triggered when a form field in a PDF is unselected. These events provide the necessary details about the specific form field that has been unselected.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldunselectevent-cs2/src/app/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldunselectevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## validateFormFields event

The [validateFormFields](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/validateFormFieldsArgs/) events are triggered when a required form field is left unfilled before downloading the PDF. These events provide the necessary information for validating which form fields are incomplete.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldvalidationevent-cs2/src/app/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldvalidationevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

