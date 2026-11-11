# Troubleshooting and Gotchas

## Table of Contents
- [Common mistakes](#common-mistakes)
- [Round-trip behavior](#round-trip-behavior)
- [Unsupported or internal APIs](#unsupported-or-internal-apis)
- [Security](#security)

## Common mistakes

| Symptom | Cause | Fix |
|---------|-------|-----|
| Error opening from a path string | `open` does not read file paths | Read bytes with `fs` and pass `Uint8Array` |
| `save('x.docx')` writes nothing in Node | It triggers a browser download | `fs.writeFileSync('x.docx', doc.saveSync())` |
| Base64 string rejected | Missing option | `open(b64, { format: 'base64' })` |
| `DetachedObjectError` | Mutating a removed/unattached paragraph or picture | Re-append or use the document facade methods |
| Invalid table range | Indices outside the table | Check `rows.length` / `cells.length` before editing cells |
| Wrong image size | Size not given; pixels at 96 DPI used | Pass `width`/`height` (points) |
| Anchored image position error | Both position and alignment set on one axis | Use only one per axis |
| Headers not shown on first page | `differentFirstPage` false | Set `pageSetup.differentFirstPage = true` and fill `firstPageHeader` |
| `paragraph.text` lacks field codes | By design | Only field results are included |

## Round-trip behavior

- Open → save preserves unsupported XML, package parts, relationships and Markup Compatibility content; a no-op load/save does not change semantics.
- Hyperlink and image relationship targets are finalized on save.
## Unsupported or internal APIs

- Bookmarks, comments, breaks, symbols, and editable ranges are not supported. Do not call `appendBookmark`, `appendComment`, `appendBreak`, `appendSymbol`, `appendEditableRange`, or `insertEditableRangeAt`.
- OLE object append and `setDefaultHeader` / `setDefaultFooter` helpers are not supported. Prefer `section.headersFooters`.
- `paragraph.numbering` is deprecated; use `listFormat`.
- `ImageOptions.wrapping` is deprecated; use `textWrappingStyle`.
- Image formats auto-detected: PNG and JPEG.
- Field authoring is limited to `PAGE, NUMPAGES, IF, MERGEFIELD, HYPERLINK`.
- If a symbol from these references is missing in your installed version, inspect `node_modules/@syncfusion/ej2-docx/**/*.d.ts` rather than guessing.

## Security

- Untrusted files: keep default resource limits (`LoadOptions.limits`); catch `SecurityError`, `PackageError`, `XmlError`.
- The library never executes macros, OLE, ActiveX or external content; it only preserves them.
- It is a commercial product; a Syncfusion license (or community license) is required for use.
