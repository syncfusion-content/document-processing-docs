---
layout: post
title: Slide Show in Vue PPTX Editor | Syncfusion
description: Slide Show in Vue PPTX Editor starts a presentation from the beginning, from the current slide, or in Presenter View.
control: SlideShow
platform: document-processing
documentation: ug
domainurl:
---

# Slide Show in Vue PPTX Editor

The Slide Show tab starts a full-screen presentation of the loaded slides. It includes **From Beginning**, **From Current Slide**, and **Presenter View**.

Slide Show is available only when the `SlideShow` module is injected and `enableSlideShow` is `true`. By default, `enableSlideShow` is `true`. If the module is not injected, or `enableSlideShow` is `false`, the Slide Show actions do nothing. They also do nothing when no presentation is loaded.

N> Slides are rendered as HTML, CSS, and SVG. Slide transitions and animations are not played.

## From Beginning

**From Beginning** starts the presentation at the first slide.

The following example injects the `SlideShow` module and starts the presentation from the first slide after the presentation is created.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <div id="app">
        <ejs-pptxeditor
            ref="pptxeditor"
            :enableSlideShow="true"
            height="590px"
            style="width: 100%;"
            :documentPath="documentPath"
            :created="onCreated">
        </ejs-pptxeditor>
    </div>
</template>

<script setup>
import { provide, ref } from "vue";
import {
    PptxEditorComponent as EjsPptxeditor,
    SlideShow
} from "@syncfusion/ej2-vue-pptxeditor";

const pptxeditor = ref(null);

const documentPath =
    "https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx";

// Inject SlideShow module
provide("pptxeditor", [SlideShow]);

const onCreated = () => {
    setTimeout(() => {
        pptxeditor.value.startSlideShowFromBeginning();
    }, 1000);
};
</script>

<style>
@import "@syncfusion/ej2-tailwind3-theme/styles/pptxeditor/index.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div id="app">
        <ejs-pptxeditor
            ref="pptxeditor"
            :enableSlideShow="true"
            height="590px"
            style="width: 100%;"
            :documentPath="documentPath"
            :created="onCreated">
        </ejs-pptxeditor>
    </div>
</template>

<script>
import { PptxEditorComponent, SlideShow } from '@syncfusion/ej2-vue-pptxeditor';

export default {
    name: "App",

    components: {
        "ejs-pptxeditor": PptxEditorComponent
    },

    data() {
        return {
            documentPath: 'https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx'
        };
    },

    provide: {
        pptxeditor: [SlideShow]
    },

    methods: {
        onCreated() {
            setTimeout(() => {
                this.$refs.pptxeditor.startSlideShowFromBeginning();
            }, 1000);
        }
    }
}
</script>

<style>
@import "@syncfusion/ej2-tailwind3-theme/styles/pptxeditor/index.css";
</style>

{% endhighlight %}
{% endtabs %}

## From Current Slide

**From Current Slide** starts the presentation at the slide that is currently selected in the editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <div id="app">
        <ejs-pptxeditor
            ref="pptxeditor"
            :enableSlideShow="true"
            height="590px"
            style="width: 100%;"
            :documentPath="documentPath"
            :created="onCreated">
        </ejs-pptxeditor>
    </div>
</template>

<script setup>
import { provide, ref } from "vue";
import {
    PptxEditorComponent as EjsPptxeditor,
    SlideShow
} from "@syncfusion/ej2-vue-pptxeditor";

const pptxeditor = ref(null);

const documentPath =
    "https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx";

// Inject SlideShow module
provide("pptxeditor", [SlideShow]);

const onCreated = () => {
    setTimeout(() => {
        pptxeditor.value.startSlideShowFromCurrent();
    }, 1000);
};
</script>

<style>
@import "@syncfusion/ej2-tailwind3-theme/styles/pptxeditor/index.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div id="app">
        <ejs-pptxeditor
            ref="pptxeditor"
            :enableSlideShow="true"
            height="590px"
            style="width: 100%;"
            :documentPath="documentPath"
            :created="onCreated">
        </ejs-pptxeditor>
    </div>
</template>

<script>
import { PptxEditorComponent, SlideShow } from '@syncfusion/ej2-vue-pptxeditor';

export default {
    name: "App",

    components: {
        "ejs-pptxeditor": PptxEditorComponent
    },

    data() {
        return {
            documentPath: 'https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx'
        };
    },

    provide: {
        pptxeditor: [SlideShow]
    },

    methods: {
        onCreated() {
            setTimeout(() => {
                this.$refs.pptxeditor.startSlideShowFromCurrent();
            }, 1000);
        }
    }
}
</script>

<style>
@import "@syncfusion/ej2-tailwind3-theme/styles/pptxeditor/index.css";
</style>

{% endhighlight %}
{% endtabs %}

## Presenter View

**Presenter View** opens the presenter panel for the running presentation. If a presentation is not already running, the editor starts one from the current slide and then opens Presenter View.

Presenter View shows the current slide, the next slide, speaker notes when they are available, a timer, and the slide counter. It also provides previous, next, and jump actions. Closing Presenter View keeps the presentation running.

N> Presenter View is an in-page panel. It does not open a separate window.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <div id="app">
        <ejs-pptxeditor
            ref="pptxeditor"
            :enableSlideShow="true"
            height="590px"
            style="width: 100%;"
            :documentPath="documentPath"
            :created="onCreated">
        </ejs-pptxeditor>
    </div>
</template>

<script setup>
import { provide, ref } from "vue";
import {
    PptxEditorComponent as EjsPptxeditor,
    SlideShow
} from "@syncfusion/ej2-vue-pptxeditor";

const pptxeditor = ref(null);

const documentPath =
    "https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx";

// Inject SlideShow module
provide("pptxeditor", [SlideShow]);

const onCreated = () => {
    setTimeout(() => {
        pptxeditor.value.startPresenterView();
    }, 1000);
};
</script>

<style>
@import "@syncfusion/ej2-tailwind3-theme/styles/pptxeditor/index.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div id="app">
        <ejs-pptxeditor
            ref="pptxeditor"
            :enableSlideShow="true"
            height="590px"
            style="width: 100%;"
            :documentPath="documentPath"
            :created="onCreated">
        </ejs-pptxeditor>
    </div>
</template>

<script>
import { PptxEditorComponent, SlideShow } from '@syncfusion/ej2-vue-pptxeditor';

export default {
    name: "App",

    components: {
        "ejs-pptxeditor": PptxEditorComponent
    },

    data() {
        return {
            documentPath: 'https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx'
        };
    },

    provide: {
        pptxeditor: [SlideShow]
    },

    methods: {
        onCreated() {
            setTimeout(() => {
                this.$refs.pptxeditor.startPresenterView();
            }, 1000);
        }
    }
}
</script>

<style>
@import "@syncfusion/ej2-tailwind3-theme/styles/pptxeditor/index.css";
</style>

{% endhighlight %}
{% endtabs %}


## Disable Slide Show

`enableSlideShow` controls whether Slide Show is available. The default value is `true`, so Slide Show works when the `SlideShow` module is injected. Set `enableSlideShow` to `false` to disable it. Slide Show actions then do nothing.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <div id="app">
        <ejs-pptxeditor
            ref="pptxeditor"
            :enableSlideShow="false"
            height="590px"
            style="width: 100%;"
            :documentPath="documentPath">
        </ejs-pptxeditor>
    </div>
</template>

<script setup>
import { provide } from "vue";
import {
    PptxEditorComponent as EjsPptxeditor,
    SlideShow
} from "@syncfusion/ej2-vue-pptxeditor";

const documentPath =
    "https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx";

// Inject SlideShow module
provide("pptxeditor", [SlideShow]);
</script>

<style>
@import "@syncfusion/ej2-tailwind3-theme/styles/pptxeditor/index.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div id="app">
        <ejs-pptxeditor
            ref="pptxeditor"
            :enableSlideShow="false"
            height="590px"
            style="width: 100%;"
            :documentPath="documentPath">
        </ejs-pptxeditor>
    </div>
</template>

<script>
import { PptxEditorComponent, SlideShow } from '@syncfusion/ej2-vue-pptxeditor';

export default {
    name: "App",

    components: {
        "ejs-pptxeditor": PptxEditorComponent
    },

    data() {
        return {
            documentPath: 'https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx'
        };
    },

    provide: {
        pptxeditor: [SlideShow]
    }
}
</script>

<style>
@import "@syncfusion/ej2-tailwind3-theme/styles/pptxeditor/index.css";
</style>

{% endhighlight %}
{% endtabs %}
