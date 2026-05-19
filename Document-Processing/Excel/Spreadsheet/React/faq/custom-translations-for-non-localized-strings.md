---
layout: post
title: How to Add Custom Translations for Missing Strings in Syncfusion Spreadsheet | Syncfusion
description: Learn how to add or override custom translations for missing strings in your current locale in the Syncfusion Spreadsheet React component. Improve localization easily.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# How can I add custom translations for non-localized strings in my current locale?

This FAQ explains how to add or override custom translations for non-localized strings in your current locale for the Syncfusion Spreadsheet React component. This ensures a seamless and localized user experience.

## Steps to add custom translations for non-localized strings

1. Review the Spreadsheet UI and note any non-localized or default English text in your selected locale.
2. Create a JavaScript object with key-value pairs, where each key is the string identifier and the value is your custom translation.
   
```js
const customLocale = {
    'Cut': 'Cortar',
    'Copy': 'Copiar',
    'Paste': 'Pegar',
    // Add more translations as needed
};
```

3. Use the `L10n.load` method to merge your custom translations with the existing locale. This ensures that only the non-localized or overridden strings are updated, while the rest remain unchanged.

```js
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
    'es': {
        "spreadsheet": customLocale
    }
});
```

4. When initializing the Spreadsheet, set the [`locale`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#locale) property to your desired locale.

```js
   <SpreadsheetComponent locale='es' />
```

For more information, refer to the [localization](../global-local#localization) section of the documentation.