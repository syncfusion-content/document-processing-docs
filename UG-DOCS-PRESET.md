# UG Docs Preset — syncfusion-content/document-processing-docs

Reusable reference for writing and porting User Guide content in this repo.
Markdown-only Jekyll site. **No build / lint / test tooling in-repo** — verification is
reading diffs and resolving asset paths by hand.

---

## 1. Layout

```
Document-Processing/<Component>/<platform>/<feature>/<page>.md
```

| Component | Path |
|---|---|
| PDF Viewer | `Document-Processing/PDF/PDF-Viewer/` |
| Word Processor | `Document-Processing/Word-Processor/` |
| Spreadsheet | `Document-Processing/Spreadsheet/` |
| Library families | `PDF-Library`, `Word-Library`, `Excel-Library`, `PowerPoint-Library`, `Markdown-Library`, `Document-Chunking-Library` |

PDF-Viewer platforms:
`angular`, `react`, `vue`, `javascript-es5`, `javascript-es6`, `asp-net-core`, `asp-net-mvc`,
`blazor`, `blazor-classic`, `flutter`, `maui`, `uwp`, `winforms`, `wpf`, `xamarin`,
`xamarin-android`, `xamarin-ios`.

Forms feature folder (the one that matters most for form-field work):

```
<platform>/forms/
├── form-designer.md
├── overview.md
├── form-constrain.md
├── group-form-fields.md
├── form-validation.md
├── form-fields-api.md
├── read-form-field-values.md
├── submit-form-data.md
├── custom-data.md
├── flatten-form-fields.md
├── form-filling.md
├── form-field-events.md
├── form-handling-best-practices.md
├── overview-create-forms.md
├── import-export-form-fields/
└── manage-form-fields/
    ├── create-form-fields.md      ← field-type sections live here
    ├── modify-form-fields.md      ← field-type sections live here
    ├── remove-form-fields.md
    ├── customize-form-fields.md
    └── move-resize-form-fields.md
```

Note the folder is `manage-form-fields/` (not `forms/manage-form-fields` in the URL) —
relative links from inside it use `./create-form-fields` or `../overview`.

---

## 2. Front-matter (identical across platforms)

```yaml
---
layout: post
title: <Page Title in <Platform> PDF Viewer | Syncfusion>
description: <one line>
platform: document-processing
control: PDF Viewer
documentation: ug
---
```

Some pages additionally carry `domainurl: ##DomainURL##`.

**Keep front-matter byte-identical across platforms.** Only prose and code change.

---

## 3. Liquid / Markdown tags

```liquid
{% tabs %}
{% highlight js tabtitle="index.js" %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/pdfviewer/<platform>/<id>" %}

N> This renders as a Note callout.
```

Highlight tags and tab titles by platform:

| Platform | `highlight` tag | `tabtitle` |
|---|---|---|
| react | `js` | `index.js` |
| angular | `ts` | `Standalone` |
| vue | `html` | `Options API (~/src/App.vue)` or `Composition API (~/src/App.vue)` |
| javascript-es5 | `js` (bare fence, sometimes no tabs) | — |
| javascript-es6 | `ts` (bare fence) | — |
| asp-net-core | `cshtml` | `Standalone` |
| asp-net-mvc | `cshtml` | `Standalone` |

---

## 4. Cross-reference anchors

Field-type sections are linked as `#add-<slug>` even though the headings carry **no
explicit IDs** — the renderer prepends `add-`:

| Heading | Anchor |
|---|---|
| `### Textbox` | `#add-textbox` |
| `### Password` | `#add-password` |
| `### CheckBox` | `#add-checkbox` |
| `### RadioButton` | `#add-radiobutton` |
| `### ListBox` | `#add-listbox` |
| `### DropDown` | `#add-dropdown` |
| `### Signature Field` | `#add-signature-field` |
| `### Initial Field` | `#add-initial-field` |
| `### DateTime Picker` | `#add-datetime-picker` |

**When renaming a heading, update every inbound link to match.**

---

## 5. Image path conventions — critical

Images are **per-platform folders, not shared**.

| Platform | Path from `<platform>/forms/manage-form-fields/*.md` |
|---|---|
| `react`, `angular`, `vue`, `asp-net-core`, `asp-net-mvc` | `../../../javascript-es6/images/<file>.png` |
| `javascript-es5`, `javascript-es6` | `../../images/<file>.png` |

> ⚠️ `javascript-es5/images/` and `javascript-es6/images/` are **separate directories**
> that each hold their own copy of the UI screenshots. Adding an image to one does **not**
> make it available to the other — **copy it into both.**

Always verify every reference resolves before committing:

```python
import io, os, re
pat = re.compile(r"!\[[^\]]*\]\(([^)]+)\)")
for md, d in [(p, os.path.dirname(p)) for p in paths]:
    for src in pat.findall(io.open(md, encoding="utf-8").read()):
        if not src.startswith("http") and not os.path.exists(os.path.normpath(os.path.join(d, src))):
            print("BROKEN", md, src)
```

A silently-broken image path is the single most common defect in a port.

---

## 6. Section placement

Field types are ordered consistently in both `create-form-fields.md` and
`modify-form-fields.md`:

```
Textbox → Password → CheckBox → RadioButton → ListBox → DropDown
        → Signature → Initial → <new feature>
```

**New field types go after Initial Field.**

---

## 7. Porting checklist — 4 files per platform

1. `forms/manage-form-fields/create-form-fields.md`
   - new `### <Field>` section after Initial Field
   - add to the "common field types" bullet near the top of the page
2. `forms/manage-form-fields/modify-form-fields.md`
   - new `### <Field>` section after Initial Field
3. `forms/form-designer.md`
   - add link in **both** the "Add Form Fields" list **and** the "Form Designer toolbar" list
   - extend the intro sentence: `…signature and initial fields, and <Feature>.`
4. `forms/overview.md`
   - add to the "Supported form field types" list

### Pages that do NOT enumerate field types — leave alone

Verified and deliberately untouched during the 1062839 port:

`group-form-fields.md`, `form-constrain.md`, `read-form-field-values.md`,
`form-fields-api.md`, `form-validation.md`, `form-filling.md`, `remove-form-fields.md`,
`customize-form-fields.md`, `move-resize-form-fields.md`, `import-export-form-fields/*`,
`submit-form-data.md`, `custom-data.md`, `flatten-form-fields.md`, `form-field-events.md`,
`form-handling-best-practices.md`, `overview-create-forms.md`.

These either use `addFormField('Textbox', …)` API examples or describe flag-based
behavior — adding the new field there would be inconsistent.

---

## 8. Code-sample skeleton per platform

Shared field-settings shape (types differ per platform):

```js
{
  name: 'DateField1',
  bounds: { X: 146, Y: 200, Width: 200, Height: 24 },
  pageNumber: 1,
  isDateField: true,
  fontSize: 10,
  color: 'black',
  fontFamily: 'Helvetica',
  backgroundColor: '#daeaf7ff',
  borderColor: '#303030',
  alignment: 'Left',
  isReadOnly: false,
  visibility: 'visible',
  isRequired: false,
  isPrint: true,
  tooltip: '',
  thickness: 1,
  actions: {
    format: { script: 'AFDate_FormatEx("m/d/yy")' }   // or AFTime_FormatEx("HH:MM")
  }
}
```

### react
```jsx
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
         BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch,
         FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() { const viewerRef = useRef(null); /* … */ }
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
```
- `<Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]} />`
- `resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"`
- `style={{ height: '680px' }}`

### angular
```ts
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  template: `<div class="content-wrapper">
      <ejs-pdfviewer #pdfViewer id="pdfViewer" (documentLoad)="onDocumentLoad()"
        [resourceUrl]="resourceUrl" [documentPath]="document"
        style="height: 640px; display: block;"></ejs-pdfviewer>
    </div>`,
  providers: [ToolbarService, MagnificationService, NavigationService, AnnotationService,
              TextSelectionService, TextSearchService, FormFieldsService, FormDesignerService],
})
export class AppComponent {
  @ViewChild('pdfViewer') public pdfviewer!: PdfViewerComponent;
}
```
- cast settings with `as any` · CDN `31.1.23`

### vue
```vue
export default {
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  provide: { PdfViewer: [Toolbar, Magnification, Navigation, Annotation, TextSelection,
                          TextSearch, FormFields, FormDesigner, PageOrganizer] },
  data() { return { documentPath: '…', resourceUrl: '…' }; },
  methods: {
    onDocumentLoad() {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      pdfviewer.formDesignerModule.addFormField('Textbox', { /* … */ });
    },
  },
};
```
- CDN `31.1.23`

### javascript-es5
Bare, no types/imports:
```js
pdfviewer.formDesignerModule.addFormField('Textbox', { name: 'DateField1', /* … */ });
```

### javascript-es6 / TypeScript
```ts
import { TextFieldSettings } from '@syncfusion/ej2-pdfviewer';
pdfviewer.formDesignerModule.addFormField('Textbox', { /* … */ } as TextFieldSettings);
```
Other casts in use: `as CheckBoxFieldSettings`, `as InitialFieldSettings`,
`as SignatureFieldSettings`, `as PasswordFieldSettings`, `as ListBoxFieldSettings`.

### asp-net-core
```html
<ejs-pdfviewer id="pdfviewer" style="height:600px"
  resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
  documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"></ejs-pdfviewer>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  // guard: if (!pdfviewer || !pdfviewer.formDesignerModule) { … return; }
});
</script>
```

### asp-net-mvc
```html
<div style="width:100%;height:600px">
  @Html.EJS().PdfViewer("pdfviewer")
    .DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
</div>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  });
</script>
```

### Sample PDFs / CDN
- `https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf` — create & modify samples
- `https://cdn.syncfusion.com/content/pdf/form-designer.pdf` — react modify samples
- CDN: react uses `31.2.2`; angular/vue/asp-net use `31.1.23`

---

## 9. API doc-link map

`updateFormField` / `formdesigner` per platform:

| Platform | URL |
|---|---|
| react | `https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formdesigner#updateformfield` |
| angular | `https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#updateformfields` |
| vue | `https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#updateformfields` |
| javascript-es5 / es6 | `https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields` |
| asp-net-core | `https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields` |
| asp-net-mvc | `https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#updateFormField` |

Override the bare `/documentation/` (no framework segment) URLs when porting to a
framework platform. Note the react/vue-style links point at `formdesigner#updateformfield`;
angular/vue/js/asp-net point at `index-default#updateformfields`.

---

## 10. Terminology

- Use the feature name as the product names it — **"DateTime picker"**, **not**
  "DateTime picker field".
- Field-type **sections** are titled `### DateTime Picker`; **list links** read
  `- [DateTime picker](…)`.
- Avoid "Date Time" (two words).
- Fix upstream typos when porting rather than copying them — e.g. React's
  `![DateTime Picker format Appearacne]` → `![DateTime Picker Appearance]` in the ports.

---

## 11. Git workflow

- Create a **task-named branch** off `origin/development` per task ID
  (e.g. `1062839-DateTimePicker`, `1061974`), push it, open a PR against `development`.
- When porting to sibling platforms off an **unmerged PR branch**, branch *from that PR
  branch* (so its images and content come along), **not** from `development`.
- Pull in an upstream PR revision:
  ```bash
  git fetch origin <sha>
  git cherry-pick <sha>
  ```
  (this is how the 1062839 image/content update was picked up)
- Author / co-author identity is set by the harness — do **not** run
  `git config user.name` / `user.email`, do **not** hand-add `Co-authored-by`.
- Never commit or push directly to `development`.

---

## 12. Reference example — task 1062839 DateTime picker (completed)

Ported to **react + angular + vue + javascript-es5 + javascript-es6 + asp-net-core +
asp-net-mvc** (7 platforms, 4 files each = 24 md files + 6 images).

**`create-form-fields.md` section shape:**

1. `### DateTime Picker`
2. `**Add via UI**:` — *"Open the Form Designer toolbar, select **DateTime Picker**, and
   click on a PDF page to place the field. The DateTime Picker tool adds date and time
   fields in Form Designer mode."* + `ui-date-time.png`
3. General-properties sentence + `ui-date-time-properties.png`
4. `#### Manual Entry and Picker` — date (calendar dropdown) + time (time dropdown),
   each bullet followed by its own indented screenshot (`ui-date-entry.png`,
   `ui-time-entry.png`)
5. `#### Strict Format Validation` — input/result table:
   `10/19/2026` Accepted · `19/10/26` Rejected · `not-a-date` Rejected
6. `#### Date / Time Toggle and Format Editing` + `ui-date-time-format.png`
7. **Common Formats** table:
   `m/d/yy`→`10/19/26` · `mm/dd/yyyy`→`10/19/2026` · `HH:MM`→`14:30` · `HH:MM:ss`→`14:30:45`
8. `#### Form Designer Appearance` + `ui-date-time-appearance.png`
9. `**Add Programmatically (API)**:` + full runnable sample adding both a Date field
   (`AFDate_FormatEx("m/d/yy")`) and a Time field (`AFTime_FormatEx("HH:MM")`) in one
   `onDocumentLoad` handler

**`modify-form-fields.md` — reviewer-directed shape:** the code sample was **removed** and
replaced by a UI walkthrough with screenshots:

> Select a DateTime Picker field in Form Designer to review or change its settings…
> Date and time fields can also be used to enter values directly or choose a value from the picker
> - For a date field, type a date or open the calendar picker.
> - For a time field, type a time or open the time picker.
>
> Use the field's **General** properties…  → `ui-date-time-properties.png`
> The **Appearance** properties include font, colors, border, and alignment. → `ui-date-time-appearance.png`
> Use the **Format** tab to change the field type… → `ui-date-time-format.png`
>
> - API: [`updateFormField()`](<platform link>) for value, format script, typography, colors, borders.

**Prefer this UI-walkthrough shape on `modify-form-fields.md` whenever the reviewer
supplies screenshots** — reviewers with screenshots consistently drop the code sample there
and keep only the one-line API pointer.

---

## 13. Pre-flight checklist before committing

- [ ] Front-matter unchanged on all touched files
- [ ] New section placed **after** `### Initial Field`
- [ ] Every image path resolves on disk (script in §5)
- [ ] New images copied into **both** `javascript-es5/images/` and `javascript-es6/images/`
- [ ] Anchor `#add-<slug>` matches the heading slug in **all** inbound links
- [ ] `form-designer.md` updated in **both** lists + intro sentence
- [ ] `overview.md` supported-types list updated
- [ ] Code sample uses the correct platform skeleton + CDN version
- [ ] API links use the platform-specific doc URL
- [ ] Terminology uses the product name without a redundant "field" suffix