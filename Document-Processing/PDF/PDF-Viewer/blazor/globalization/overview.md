---
layout: post
title: Globalization in Blazor PDF Viewer Component | Syncfusion
description: Learn about globalization and localization in Syncfusion Blazor PDF Viewer to support multiple languages and cultures.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Overview of Globalization and Localization

Blazor PDF Viewer supports globalization and localization to help you build applications that serve users across different languages and cultural regions.

## What is Globalization?

Globalization is the design and development approach of creating applications that work seamlessly across different cultures, languages, and regions. This includes supporting:

- Multiple languages for UI text
- Culture-specific date, time, and number formats
- Right-to-left (RTL) text directions for languages like Arabic and Hebrew
- Regional preferences and conventions

## What is Localization?

Localization is the process of adapting your application's content and interface for specific languages and regions. In Blazor PDF Viewer, this includes:

- Translating toolbar buttons, dialogs, and error messages
- Displaying culture-based resource strings
- Supporting RTL layout and text direction
- Applying culture-specific formatting

## Why Localize Your PDF Viewer?

Localizing your PDF Viewer application provides:

- **Better User Experience:** Users see the interface in their preferred language
- **Broader Market Reach:** Support for multiple languages expands your application's accessibility
- **Cultural Respect:** Display content in culturally appropriate formats and directions
- **Compliance:** Meet regional requirements and accessibility standards

## Localization Approaches in Blazor PDF Viewer

### Static Localization

Use predefined culture-based resource files (.resx) that ship with your application. Ideal for applications with:

- A fixed set of supported languages
- Translations that don't change frequently
- Simple deployment requirements

### Dynamic Localization

Load translations from external sources (databases, APIs, or cloud services) at runtime. Ideal for applications with:

- Frequently updated translations
- A large number of supported languages
- User-contributed or crowd sourced content

## How Blazor PDF Viewer Supports Localization

Blazor PDF Viewer provides:

- **ISyncfusionStringLocalizer Interface:** Implement custom localization logic
- **Culture-Based Resource Files:** Download predefined .resx files for supported languages
- **EnableRtl Property:** Enable right-to-left layout support
- **Culture Configuration:** Set your application's culture in `Program.cs`

## Supported Languages

Blazor PDF Viewer includes localization support for multiple languages. See [supported cultures](https://github.com/syncfusion/blazor-locale) for the complete list.

## Related Resources

- [Blazor Common Localization](https://blazor.syncfusion.com/documentation/common/localization)
- [Blazor Common Globalization](https://blazor.syncfusion.com/documentation/common/globalization)

## Next Steps

- [Set up static localization](localization)
- [Enable right-to-left support](rtl-support)
