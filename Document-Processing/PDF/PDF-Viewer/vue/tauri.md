---
layout: post
title: Tauri Integration with Vue PDF Viewer | Syncfusion
description: Learn how to create a Tauri desktop and mobile application and integrate the Syncfusion Vue PDF Viewer component.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Tauri Integration for Vue PDF Viewer

This guide shows you how to create a [Tauri](https://tauri.app/) desktop and mobile application and add the [Syncfusion Vue PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk/vue-pdf-viewer) component to the web frontend. Tauri wraps a web view (WebView2 on Windows, WebKit on macOS, and WebKitGTK on Linux for desktop, and WKWebView on iOS and Android System WebView on Android) in a lightweight native shell, so the same Vue code you ship to the browser can run as a desktop or mobile app with full filesystem and dialog access through Tauri plugin.

## Prerequisites

Before creating the Tauri application, ensure the following software is installed on your development machine:

- [Node.js 22+](https://nodejs.org/en/download) (LTS recommended)
- A package manager: `npm`, `yarn`, or `pnpm`
- [Rust tool chain](https://tauri.app/start/prerequisites/#rust) (install via [rust up](https://rust-lang.org/tools/install/))
- Platform-specific Tauri prerequisites (see the [Tauri prerequisites](https://tauri.app/start/prerequisites/) page for Windows / macOS / Linux requirements such as WebView2, Xcode Command Line Tools, or `webkit2gtk-4.1`)

References:

- [Tauri prerequisites](https://tauri.app/start/prerequisites/#rust)
- [Create a Tauri project](https://tauri.app/start/create-project/)

Verify the installed versions:

{% tabs %}
{% highlight bash tabtitle="CLI" %}

node -v

{% endhighlight %}
{% endtabs %}

## Create a Tauri Project

Tauri ships a project scaffold that creates a desktop shell around a frontend framework. The official scaffold is interactive, so the prompts vary by tool. Run the following command to start the scaffold:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm create tauri-app@latest

{% endhighlight %}
{% endtabs %}

Choose the following options when prompted:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

Project name:
tauri-vue-pdfviewer

Choose which language to use for your frontend:
TypeScript / JavaScript

Choose your package manager:
npm

Choose your UI template:
Vue

{% endhighlight %}
{% endtabs %}

> Note: The exact wording of the prompts depends on the installed version of `create-tauri-app`. Pick **Vue** as the UI template and **TypeScript** (or JavaScript) as the flavor. The example below assumes a TypeScript Vue + Vite project.

After the scaffold finishes, install the dependencies and verify the project builds:

{% tabs %}
{% highlight bash tabtitle="npm" %}

cd tauri-vue-pdfviewer
npm install

{% endhighlight %}
{% endtabs %}

## Install Syncfusion Vue PDF Viewer

Install the Syncfusion Vue PDF Viewer package from npm:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-vue-pdfviewer --save

{% endhighlight %}
{% endtabs %}

## Import the Required CSS

Install the Tailwind 3 theme package and add the styles to your global stylesheet. If your project already uses a different Syncfusion theme, replace the import with that theme.

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% endtabs %}

The required PDF Viewer theme styles are imported into the `<style>` section of the `src/App.vue` file:

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<style>
  @import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pdfviewer/index.css';
</style>

{% endhighlight %}
{% endtabs %}

## Add the Syncfusion Vue PDF Viewer

Open `src/App.vue` and replace its contents with the following code. The viewer is mounted inside a Vue 3 standalone component and configured to load a public sample PDF and the runtime assets from the Syncfusion CDN.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
{% raw %}
<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
         Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      resourceUrl: 'https://cdn.syncfusion.com/ej2/35.1.37/dist/ej2-pdfviewer-lib',
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                 Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields, PageOrganizer ]
  }
}
</script>

<template>
  <ejs-pdfviewer
    id="pdfViewer"
    :documentPath="documentPath"
    :resourceUrl="resourcesUrl"
    style="height:640px; display:block">
  </ejs-pdfviewer>
</template>
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Run the Application in Development

Run the following command from the project root to launch the Tauri desktop app in development mode:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm run tauri dev

{% endhighlight %}
{% endtabs %}

## Build the Application for Production

Run the following command from the project root to produce a release build of the Tauri desktop app:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm run tauri build

{% endhighlight %}
{% endtabs %}

Tauri compiles the Rust back end in release mode, bundles the frontend assets, and outputs platform-specific installers (such as `.msi` on Windows, `.dmg` on macOS, and `.deb`/`.AppImage` on Linux) under `src-tauri/target/release/bundle/`.

## See Also

- [PDF Viewer Getting Started](./getting-started-application.md)
- [Tauri documentation](https://tauri.app/start/)
