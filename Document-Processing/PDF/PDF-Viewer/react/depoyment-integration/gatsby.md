---
layout: post
title: Getting started with React PDF Viewer in Gatsby | Syncfusion
description: How to integrate the Syncfusion React PDF Viewer into a Gatsby site (quickstart, how-to, reference, explanation).
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with the React PDF Viewer in Gatsby

How to integrate the Syncfusion React PDF Viewer into a Gatsby site. Use the Quickstart below to get a working viewer, then consult the How-to and Reference sections for configuration details (WASM, static assets, and SSR notes).

## Quickstart for Gatsby

#### Create or open your Gatsby site:

```bash
# create a new Gatsby site (or use an existing one)
gatsby new my-gatsby-site
cd my-gatsby-site
npm install
```

#### Install the PDF Viewer package:

```bash
npm install @syncfusion/ej2-react-pdfviewer --save
```

#### Optional — host runtime resources locally or use the CDN

If you want to host the viewer runtime and WASM locally, copy the runtime files into Gatsby's `static` directory so they are served at the root URL (`/`). The example component below uses the CDN `resourceUrl` for a quick demo; hosting locally is recommended for production.

Optional local copy (Unix/macOS / Git Bash / WSL):

```bash
cp -R ./node_modules/@syncfusion/ej2-pdfviewer/dist/ej2-pdfviewer-lib static/ej2-pdfviewer-lib
# copy a sample PDF to static/assets (create folder if needed)
mkdir -p static/assets && cp ./path/to/sample.pdf static/assets/sample.pdf
```

- Add viewer CSS imports to `src/components/layout.css` (recommended for Gatsby component-scoped styling):

Create `src/components/layout.css` and add the imports below (relative path to `node_modules` used from `src/components`):

```css
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import "../../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css";
```

Then import the stylesheet in `gatsby-browser.js` at your project root so it is included in the client bundle:

```js
// gatsby-browser.js
import './src/components/layout.css';
```

- Use a client-only approach (Gatsby is server-side rendered). A simple and reliable pattern is to render the viewer after mount with a mounted flag. Create `src/components/pdfviewer.js` with the component below (the example also shows where to register a Syncfusion license if you have one):

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
// src/components/pdfviewer.js
import React, { useEffect, useState } from 'react';
import {
    PdfViewerComponent,
    Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
    BookmarkView, ThumbnailView, Print, TextSelection, TextSearch
    , FormFields, FormDesigner, Inject
} from '@syncfusion/ej2-react-pdfviewer';

export default function PdfViewer() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => setIsClient(true), []);

    if (!isClient) return null; // prevent SSR crash (window not defined)

    return (
        <div style={{ height: "100vh" }}>
            <PdfViewerComponent
                id="pdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                style={{ height: "100%", width: "100%" }}
            >
                <Inject services={[
                    Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
                    BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
                    Magnification, FormFields, FormDesigner
                ]} />
            </PdfViewerComponent>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

Add a page that uses the component at `src/pages/index.js`:

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
// src/pages/index.js
import React from "react";
import PdfViewer from "../components/pdfviewer";
export default function PdfViewerPage() {
  return (
    <main>
      <h1 style={{ padding: "10px 20px", background: "#f5f5f5" }}>
        Syncfusion PDF Viewer in Gatsby
      </h1>
      <PdfViewer />
    </main>
  );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

#### Run the Gatsby dev server:

```bash
npm run develop
```

## See also

- [Getting started overview](../getting-started-overview)
- [Creating a Next.js application using Syncfusion React PDF Viewer](./nextjs-getting-started)
- [Getting started with Syncfusion React PDF Viewer in Remix](./remix)