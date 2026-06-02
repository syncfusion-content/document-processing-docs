---
layout: post
title: Add Custom Translations for any Spreadsheet text in React Spreadsheet | Syncfusion
description: Add or customize translations for any Spreadsheet text in your current locale in the React Spreadsheet Component.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Adding Custom Translations for Any Spreadsheet Text in Your Current Locale

You can add or override custom translations for any built-in or default text displayed by the Syncfusion Spreadsheet React component, regardless of whether it is already localized. This means you can customize the UI text for your current locale—even for strings that already appear in English or another language by default—by providing your own translations for the relevant keys in the locale object.

## Steps to Add Custom Translations

1. Review the Spreadsheet UI and identify any built-in or default text you want to customize for your selected locale.
2. Create a JavaScript object with key-value pairs, where each key is a string identifier (for any built-in text) and each value is your custom translation.

```js
const customLocale = {
    'Cut': 'Cortar',
    'Copy': 'Copiar',
    'Paste': 'Pegar',
    // You can override any built-in text, even if it already appears in English by default
    // Add more translations as needed
};
```

3. Use the `L10n.load` method to merge your custom translations with the existing locale. This updates only the specified strings, while the rest remain unchanged. You can use this approach for any locale, including the default English locale ('en').

```js
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
    'es': {
        "spreadsheet": customLocale
    }
    // For English (default), use 'en-US' as the key
    // 'en-US': { 'spreadsheet': customLocale }
});
```

4. When initializing the Spreadsheet, set the [`locale`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#locale) property to your desired locale code (e.g., 'es' for Spanish, 'en-US' for English).

```js
<SpreadsheetComponent locale='es' />
```

For more information, refer to the [localization](../global-local#localization) section of the documentation.