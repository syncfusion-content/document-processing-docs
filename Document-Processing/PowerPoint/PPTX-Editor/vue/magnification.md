---
layout: post
title: Magnification in Vue PPTX Editor | Syncfusion
description: Zoom a presentation in the Vue PPTX Editor from the status bar and ribbon, fit the slide to the window, and enable or disable zooming.
control: Magnification
platform: document-processing
documentation: ug
domainurl:
---

# Magnification in Vue PPTX Editor

The Vue PPTX Editor provides magnification so you can enlarge or reduce the slide in the view area. You can zoom from the status bar, fit the slide to the window, and choose a zoom level from the View ribbon.

Zooming is available when the `Magnification` module is provided and `enableMagnification` is `true`. By default, `enableMagnification` is `true` and `zoom` is `100`. The supported range is **10%** to **400%**. Values outside that range are clamped, and an invalid value is ignored.

## Zooming via status bar

The status bar at the bottom of the editor includes a zoom cluster:

* **-** decreases the zoom by 10 percentage points.
* The slider snaps to 25%, 50%, 75%, 100%, 125%, 150%, 200%, 300%, and 400%.
* **+** increases the zoom by 10 percentage points.
* The percentage label shows the current zoom.
* The fit icon fits the whole slide in the view area.

These controls call the editor zoom APIs. You can use the same APIs from code.

To enable magnification, provide the `Magnification` module and add the dependent component styles from the **../node_modules/@syncfusion** package folder. Add the style references in **src/App.css**.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-ribbon/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-pptxeditor/styles/material3.css';
```

The following code shows how to enable magnification and zoom from the editor instance.

{% tabs %}
{% highlight js tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <div class="control-section">
        <ejs-pptxeditor ref="pptxeditor" :enableMagnification="true" :zoom="100" :created="onCreated"></ejs-pptxeditor>
    </div>
</template>
<script setup>
import { PptxEditorComponent, Magnification } from '@syncfusion/ej2-vue-pptxeditor';
import { provide, ref } from 'vue';

const pptxeditor = ref(null);
provide('PptxEditor', [Magnification]);

const onCreated = () => {
    let pptxEditor = pptxeditor.value.ej2Instances;
    // Status-bar - and + use the same 10-point step.
    pptxEditor.zoomIn();
    pptxEditor.zoomOut();

    // Set an explicit percentage. The value is clamped to 10-400.
    pptxEditor.setZoom(150);
};
</script>

{% endhighlight %}
{% highlight js tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div class="control-section">
        <ejs-pptxeditor ref="pptxeditor" :enableMagnification="true" :zoom="100" :created="onCreated"></ejs-pptxeditor>
    </div>
</template>
<script>
import { PptxEditorComponent, Magnification } from '@syncfusion/ej2-vue-pptxeditor';

export default {
    components: {
        'ejs-pptxeditor': PptxEditorComponent
    },
    provide: {
        PptxEditor: [Magnification]
    },
    methods: {
        onCreated: function () {
            let pptxEditor = this.$refs.pptxeditor.ej2Instances;
            // Status-bar - and + use the same 10-point step.
            pptxEditor.zoomIn();
            pptxEditor.zoomOut();

            // Set an explicit percentage. The value is clamped to 10-400.
            pptxEditor.setZoom(150);
        }
    }
};
</script>

{% endhighlight %}
{% endtabs %}

`zoomIn` and `zoomOut` change the current zoom by 10 percentage points. `setZoom` sets an absolute percentage. `zoomTo100` sets the zoom to 100%.

## Fit to window

**Fit to Window** scales the whole slide so it fits in the view area. Use it from:

* The fit icon on the status bar.
* **View** > **Fit to Window**.
* **View** > **Zoom** > **Fit to window**.

The following code fits the slide to the window from the editor instance. `fitWidth` fits the slide width instead, keeping the aspect ratio.

{% tabs %}
{% highlight js tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <div class="control-section">
        <ejs-pptxeditor ref="pptxeditor" :enableMagnification="true" :created="onCreated"></ejs-pptxeditor>
    </div>
</template>
<script setup>
import { PptxEditorComponent, Magnification } from '@syncfusion/ej2-vue-pptxeditor';
import { provide, ref } from 'vue';

const pptxeditor = ref(null);
provide('PptxEditor', [Magnification]);

const onCreated = () => {
    let pptxEditor = pptxeditor.value.ej2Instances;
    // Fit the whole slide in the view area.
    pptxEditor.fitToWindow();

    // Fit the slide width in the view area.
    // pptxEditor.fitWidth();
};
</script>

{% endhighlight %}
{% highlight js tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div class="control-section">
        <ejs-pptxeditor ref="pptxeditor" :enableMagnification="true" :created="onCreated"></ejs-pptxeditor>
    </div>
</template>
<script>
import { PptxEditorComponent, Magnification } from '@syncfusion/ej2-vue-pptxeditor';

export default {
    components: {
        'ejs-pptxeditor': PptxEditorComponent
    },
    provide: {
        PptxEditor: [Magnification]
    },
    methods: {
        onCreated: function () {
            let pptxEditor = this.$refs.pptxeditor.ej2Instances;
            // Fit the whole slide in the view area.
            pptxEditor.fitToWindow();

            // Fit the slide width in the view area.
            // pptxEditor.fitWidth();
        }
    }
};
</script>

{% endhighlight %}
{% endtabs %}

## Zooming via ribbon

The **View** tab **Zoom** group provides:

| Command | Behavior |
| --- | --- |
| Zoom > Fit to window | Fits the whole slide in the view area. |
| Zoom > Fit to width | Fits the slide width in the view area. |
| Zoom > 200%, 150%, 100%, 75%, 50% | Sets that zoom percentage. |
| Zoom > Zoom... | Opens the Zoom dialog for fit options, presets, and a custom percentage. |
| Fit to Window | Fits the whole slide in the view area. |

The same actions are available from the editor instance.

{% tabs %}
{% highlight js tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <div class="control-section">
        <ejs-pptxeditor ref="pptxeditor" :enableToolbar="true" :enableMagnification="true" :created="onCreated"></ejs-pptxeditor>
    </div>
</template>
<script setup>
import { PptxEditorComponent, Toolbar, Magnification } from '@syncfusion/ej2-vue-pptxeditor';
import { provide, ref } from 'vue';

const pptxeditor = ref(null);
provide('PptxEditor', [Toolbar, Magnification]);

const onCreated = () => {
    let pptxEditor = pptxeditor.value.ej2Instances;
    pptxEditor.setZoom(200);
    // Use and set the required zoom option based on your viewing preference.
    // pptxEditor.fitToWindow();
    // pptxEditor.fitWidth();
    // pptxEditor.zoomTo100();
};
</script>

{% endhighlight %}
{% highlight js tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div class="control-section">
        <ejs-pptxeditor ref="pptxeditor" :enableToolbar="true" :enableMagnification="true" :created="onCreated"></ejs-pptxeditor>
    </div>
</template>
<script>
import { PptxEditorComponent, Toolbar, Magnification } from '@syncfusion/ej2-vue-pptxeditor';

export default {
    components: {
        'ejs-pptxeditor': PptxEditorComponent
    },
    provide: {
        PptxEditor: [Toolbar, Magnification]
    },
    methods: {
        onCreated: function () {
            let pptxEditor = this.$refs.pptxeditor.ej2Instances;
            pptxEditor.setZoom(200);
            // Use and set the required zoom option based on your viewing preference.
            // pptxEditor.fitToWindow();
            // pptxEditor.fitWidth();
            // pptxEditor.zoomTo100();
        }
    }
};
</script>

{% endhighlight %}
{% endtabs %}

The `zoomChange` event is raised after the effective zoom percentage changes. `zoomType` is `percentage` for `setZoom`, `zoomIn`, `zoomOut`, and `zoomTo100`, and `fit` for a fit layout.

{% tabs %}
{% highlight js tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <div class="control-section">
        <ejs-pptxeditor :enableMagnification="true" :zoomChange="onZoomChange"></ejs-pptxeditor>
    </div>
</template>
<script setup>
import { PptxEditorComponent, Magnification } from '@syncfusion/ej2-vue-pptxeditor';
import { provide } from 'vue';

provide('PptxEditor', [Magnification]);

const onZoomChange = (args) => {
    // args.previousZoom, args.newZoom, args.zoomType
    console.log(args.previousZoom + ' -> ' + args.newZoom);
};
</script>

{% endhighlight %}
{% highlight js tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div class="control-section">
        <ejs-pptxeditor :enableMagnification="true" :zoomChange="onZoomChange"></ejs-pptxeditor>
    </div>
</template>
<script>
import { PptxEditorComponent, Magnification } from '@syncfusion/ej2-vue-pptxeditor';

export default {
    components: {
        'ejs-pptxeditor': PptxEditorComponent
    },
    provide: {
        PptxEditor: [Magnification]
    },
    methods: {
        onZoomChange: function (args) {
            // args.previousZoom, args.newZoom, args.zoomType
            console.log(args.previousZoom + ' -> ' + args.newZoom);
        }
    }
};
</script>

{% endhighlight %}
{% endtabs %}

## Enable or disable zooming

Zoom APIs and the status-bar zoom controls are active only when the `Magnification` module is provided and `enableMagnification` is `true`. Set `enableMagnification` to `false` to make zooming inert. The status-bar fit button, zoom step buttons, and zoom slider stay visible but are disabled.

{% tabs %}
{% highlight js tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <div class="control-section">
        <button @click="disableZoom">Disable zoom</button>
        <button @click="enableZoom">Enable zoom</button>
        <ejs-pptxeditor ref="pptxeditor" :enableMagnification="true"></ejs-pptxeditor>
    </div>
</template>
<script setup>
import { PptxEditorComponent, Magnification, Toolbar } from '@syncfusion/ej2-vue-pptxeditor';
import { provide, ref } from 'vue';

const pptxeditor = ref(null);
provide('PptxEditor', [Magnification, Toolbar]);

const disableZoom = () => {
    pptxeditor.value.ej2Instances.enableMagnification = false;
};
const enableZoom = () => {
    pptxeditor.value.ej2Instances.enableMagnification = true;
};
</script>

{% endhighlight %}
{% highlight js tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div class="control-section">
        <button @click="disableZoom">Disable zoom</button>
        <button @click="enableZoom">Enable zoom</button>
        <ejs-pptxeditor ref="pptxeditor" :enableMagnification="true"></ejs-pptxeditor>
    </div>
</template>
<script>
import { PptxEditorComponent, Magnification, Toolbar } from '@syncfusion/ej2-vue-pptxeditor';

export default {
    components: {
        'ejs-pptxeditor': PptxEditorComponent
    },
    provide: {
        PptxEditor: [Magnification, Toolbar]
    },
    methods: {
        disableZoom: function () {
            this.$refs.pptxeditor.ej2Instances.enableMagnification = false;
        },
        enableZoom: function () {
            this.$refs.pptxeditor.ej2Instances.enableMagnification = true;
        }
    }
};
</script>

{% endhighlight %}
{% endtabs %}

While `enableMagnification` is `false`, `setZoom`, `zoomIn`, `zoomOut`, `zoomTo100`, `fitToWindow`, and `fitWidth` do nothing. The `Magnification` module must stay provided if you turn zooming back on.

## Notes

* Zoom percentage is clamped to 10-400.
* Status-bar **-** and **+** step by 10 percentage points. The slider uses the snap levels 25, 50, 75, 100, 125, 150, 200, 300, and 400.
* `fitToWindow` fits the whole slide. `fitWidth` fits the slide width and keeps the aspect ratio.
* Ribbon zoom commands require the provided `Toolbar` module and `enableToolbar` set to `true`, in addition to `Magnification`.
* Without the provided `Magnification` module, every zoom API does nothing.
