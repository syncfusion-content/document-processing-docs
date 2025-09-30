---
layout: post
title: Form Field Events | Syncfusion
description: Learn here all about different form field in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Form Field Events
documentation: ug
domainurl: ##DomainURL##
---

# PDF Viewer form field events

The PDF Viewer component supports the following form field events:

| Form Field events | Description |
|---|---|
| [formFieldAdd](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldAddArgs/) | Triggered when a form field is added.|
| [formFieldClick](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldClickArgs/) | Triggered when a form field is clicked.|
| [formFieldDoubleClick](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldDoubleClickArgs/) | Triggered when a form field is double-clicked.|
| [formFieldFocusOut](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldFocusOutEventArgs/) | Triggered when focus moves out of a form field.|
| [formFieldMouseLeave](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldMouseLeaveArgs/) | Triggered when the mouse cursor leaves a form field.|
| [formFieldMouseOver](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldMouseoverArgs/) | Triggered when the mouse cursor hovers over a form field.|
| [formFieldMove](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldMoveArgs/) | Triggered when a form field is moved.|
| [formFieldPropertiesChange](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldPropertiesChangeArgs/) | Triggered when a form field property changes.|
| [formFieldRemove](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldRemoveArgs/) | Triggered when a form field is removed.|
| [formFieldResize](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldResizeArgs/) | Triggered when a form field is resized.|
| [formFieldSelect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldSelectArgs/) | Triggered when a form field is selected.|
| [formFieldUnselect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldUnselectArgs/) | Triggered when a form field is unselected.|
| [validateFormFields](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/validateFormFieldsArgs/) | Triggered when validation fails.|

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

The [formFieldClick](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldClickArgs/) event is triggered when a form field is clicked. The event arguments provide details about the form field click.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldclickevent-cs2/src/app/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldclickevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldDoubleClick event

The [formFieldDoubleClick](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldDoubleClickArgs/) event is triggered when a form field is double-clicked. The event arguments provide details about the double-click action.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/formfielddoubleclickevent-cs2/src/app/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/formfielddoubleclickevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldFocusOut event

The [formFieldFocusOut](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldFocusOutEventArgs/) event is triggered when a form field loses focus. The event arguments provide details about the focus-out action.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldfocusoutevent-cs2/src/app/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldfocusoutevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldMouseLeave event

The [formFieldMouseLeave](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldMouseLeaveArgs/) event is triggered when the mouse leaves a form field. The event arguments provide details about the mouse-leave action.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldmouseleaveevent-cs2/src/app/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldmouseleaveevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldMouseOver event

The [formFieldMouseOver](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldMouseoverArgs/) event is triggered when the mouse hovers over a form field. The event arguments provide details about the mouse-over action.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldmouseoverevent-cs2/src/app/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldmouseoverevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldMove event

The [formFieldMove](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldMoveArgs/) event is triggered when a form field is moved. The event arguments provide details about the move action.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldmousemoveevent-cs2/src/app/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldmousemoveevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldPropertiesChange event

The [formFieldPropertiesChange](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldPropertiesChangeArgs/) event is triggered when a form field's properties change. The event arguments provide details about which property changed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldpropertieschangeevent-cs2/src/app/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldpropertieschangeevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldRemove event

The [formFieldRemove](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldRemoveArgs/) event is triggered when a form field is removed from the PDF. The event arguments provide details about the removed field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldremoveevent-cs2/src/app/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldremoveevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldResize event

The [formFieldResize](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldResizeArgs/) event is triggered when a form field is resized. The event arguments provide details about the resized field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldresizeevent-cs2/src/app/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldresizeevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldSelect event

The [formFieldSelect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldSelectArgs/) event is triggered when a form field is selected. The event arguments provide details about the selected field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldselectevent-cs2/src/app/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldselectevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## formFieldUnselect event

The [formFieldUnselect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formFieldUnselectArgs/) event is triggered when a form field is unselected. The event arguments provide details about the unselected field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldunselectevent-cs2/src/app/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldunselectevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## validateFormFields event

The [validateFormFields](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/validateFormFieldsArgs/) event is triggered when a required form field is left unfilled before downloading the PDF. The event arguments provide details about which fields are incomplete.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldvalidationevent-cs2/src/app/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/angular/formfieldvalidationevent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

