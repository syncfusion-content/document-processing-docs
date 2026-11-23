---
layout: post
title: Thumbnails in Angular PPTX Editor | Syncfusion
description: Learn how to enable or disable the thumbnail panel and set its size in the Angular PPTX Editor.
platform: document-processing
control: Thumbnails
documentation: ug
domainurl:
---

# Thumbnails in Angular PPTX Editor

The thumbnail panel shows a scrollable list of slide previews on the left of the editor. Selecting a thumbnail opens that slide. The panel is available when the `ThumbnailViewService` is provided and `enableThumbnail` is `true`.

## Enable or disable thumbnails

Provide `ThumbnailViewService` and set `enableThumbnail` to show the panel. The default value is `true`. Set `enableThumbnail` to `false` to remove the panel. Changing the property at runtime mounts or removes the panel without reloading the presentation.

`thumbnailPanelVisible` expands or collapses the panel while the feature stays enabled. The default is `true`. On a host narrower than 768 px the panel starts collapsed unless the user has already shown or hidden it.

The View tab Show group also has a Thumbnails toggle. That item needs `ToolbarService` and `enableToolbar`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
import { Component, ViewEncapsulation } from '@angular/core';
import { PptxEditorModule, ThumbnailViewService, ToolbarService } from '@syncfusion/ej2-angular-pptxeditor';

@Component({
    selector: 'app-root',
    templateUrl: 'app.html',
    encapsulation: ViewEncapsulation.None,
    providers: [ThumbnailViewService, ToolbarService],
    standalone: true,
    imports: [PptxEditorModule]
})
export class App { }
{% endhighlight %}
{% highlight html tabtitle="app.html" %}
<ejs-pptxeditor id="pptx-editor" [enableThumbnail]="true" [thumbnailPanelVisible]="true" [enableToolbar]="true"></ejs-pptxeditor>
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-ribbon/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-angular-pptxeditor/styles/material3.css';
{% endhighlight %}
{% endtabs %}

To turn the feature off, set `enableThumbnail` to `false` and omit `ThumbnailViewService` from `providers`. Without the service, the thumbnail panel is not available.

## Size and scrollbar

`thumbnailPanelWidth` sets the panel width in CSS pixels. The value is clamped to 120-240. The default is 184. A value outside the range is clamped. A non-numeric value is ignored and the width stays at the default.

The resize handle on the panel edge changes the same width. Arrow keys on the handle also resize it. The width follows the right-to-left setting when `enableRtl` is `true`.

The thumbnail list scrolls vertically when the slides do not fit in the panel. The scrollbar is part of the list. It is not a separate module, and there is no property to show or hide it. Widening the panel makes each preview larger. The preview height follows the slide aspect ratio.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
import { Component, ViewEncapsulation } from '@angular/core';
import { PptxEditorModule, ThumbnailViewService } from '@syncfusion/ej2-angular-pptxeditor';

@Component({
    selector: 'app-root',
    templateUrl: 'app.html',
    encapsulation: ViewEncapsulation.None,
    providers: [ThumbnailViewService],
    standalone: true,
    imports: [PptxEditorModule]
})
export class App { }
{% endhighlight %}
{% highlight html tabtitle="app.html" %}
<ejs-pptxeditor id="pptx-editor" [enableThumbnail]="true" [thumbnailPanelWidth]="100"></ejs-pptxeditor>
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-ribbon/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-angular-pptxeditor/styles/material3.css';
{% endhighlight %}
{% endtabs %}
