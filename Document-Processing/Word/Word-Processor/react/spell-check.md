---
layout: post
title: Spell check in React DOCX Editor | Syncfusion
description: Learn how to use Spell check in the React Document Editor to detect and correct errors seamlessly, without relying on Microsoft Word.
control: Spell check 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Spell Check in React Document Editor

[React Document Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) supports spell checking for document content. It identifies misspelled words and provides suggestions through a dialog and the context menu. The spell checker is compatible with [Hunspell](https://github.com/wooorm/dictionaries) dictionary files.

## Features

* Supports context menu suggestions for misspelled words.

* Provides options such as Ignore, Ignore All, Change, and Change All in the spell check dialog.

## Configure spell check in React Document Editor

Spell checking is enabled using the [enableSpellCheck](https://ej2.syncfusion.com/documentation/api/document-editor-container/index-default#enablespellcheck) property and by configuring the spellChecker settings. A server-side service is required to process text, detect misspelled words, and provide suggestions for display in the editor.

### Client-side configuration

Spell check can be enabled in the Document Editor using the [enableSpellCheck](https://ej2.syncfusion.com/documentation/api/document-editor-container/index-default#enablespellcheck) property. Configure the spell check settings with a valid service URL and language ID to enable spelling validation and suggestions.

The following code example demonstrates how to enable spell check and configure basic spell checker settings:

{% tabs %}
{% highlight ts tabtitle="TS" %}

import * as React from 'react';
import { DocumentEditorContainerComponent, SpellChecker, Toolbar } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
    const containerRef = React.useRef(null);
    React.useEffect(() => {
        if (containerRef.current) {
            let container: DocumentEditorContainerComponent = containerRef.current as DocumentEditorContainerComponent;
            // Get the SpellChecker instance from DocumentEditorContainer.
            let spellChecker: SpellChecker = container.documentEditor.spellChecker;
            // Set the language ID for spell checker. Here, 1033 is the language ID for English (United States).
            spellChecker.languageID = 1033;
            // remove the underline for misspelled words.
            spellChecker.removeUnderline = false;
            // Allow suggestions for misspelled words.
            spellChecker.allowSpellCheckAndSuggestion = true;
        }
    }, []);
    return (
        <DocumentEditorContainerComponent
            height="590px"
            ref={containerRef}
            // Use the following service URL only for demo purposes
            serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
            enableToolbar={true}
            enableSpellCheck={true}
        />
    );
}
export default App;

{% endhighlight %}
{% endtabs %}

### Server-side configuration

The above-mentioned hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service as shown below.

The Document Editor client requires a server-side API to process text, identify misspelled words, and provide suggestions in the context menu. The server returns a JSON response containing details about misspelled words and their suggestions.

For more information on configuring the spell check service, refer to the following:

- [Web Service for Spell Check in ASP.NET Core](https://help.syncfusion.com/document-processing/word/word-processor/react/web-services/core#spell-check)

- [Web Service for Spell Check in ASP.NET MVC](https://help.syncfusion.com/document-processing/word/word-processor/react/web-services/mvc#spell-check)

- [Web Service for Spell Check in Java](https://help.syncfusion.com/document-processing/word/word-processor/react/web-services/java#spell-check)

## Spell check settings

### Allow suggestions

By default, the Document Editor retrieves both spelling errors and suggestions for misspelled words, allowing users to correct them through context menu options. This behavior can be modified using the [allowSpellCheckAndSuggestion](https://ej2.syncfusion.com/react/documentation/api/document-editor/spellchecker#allowspellcheckandsuggestion) API to perform only spell checking without fetching suggestions.

The following code example demonstrates how to enable spell check suggestions.

```ts

container.documentEditor.spellChecker.allowSpellCheckAndSuggestion = false;

```

### Remove underline

By default, misspelled words are marked with a squiggly line. This behavior can be disabled using the [removeUnderline](https://ej2.syncfusion.com/react/documentation/api/document-editor/spellchecker#get-removeunderline-boolean) API, which prevents squiggly lines from being rendered for misspelled words.

The following code example demonstrates how to configure this behavior.

```ts

container.documentEditor.spellChecker.removeUnderline = true;

```

### Language configuration

The Document Editor supports multi-language spell checking. Multiple languages (dictionaries) can be added on the server side, and the language used for spell checking must match the [languageID](https://ej2.syncfusion.com/documentation/api/document-editor/spellchecker#get-languageid-number) specified in the Document Editor.

The following code example demonstrates how to configure the languageID.

```ts

container.documentEditor.spellChecker.languageID = 1033; //LCID of "en-us"

```

### Add new word to dictionary

If a root word is missing from the dictionary file, it can be added along with rules to generate possible word forms using the AddNewWord API in the server-side spell check library.

N> Rules are automatically generated based on the root word, possible words, and affix file. Passing null for the affPath and possibleWords parameters adds only the root word to the dictionary.

The following server-side example demonstrates how to add a new root word along with rules to generate possible word forms:

{% tabs %}
{% highlight C# tabtitle="C#" %}

SpellChecker spellChecker = new SpellChecker();

// Adds the specified new root word to the dictionary along with the rule to form the possible words.
spellChecker.AddNewWord("en.dic", "en.aff", "construct", new string[] { "constructs", "reconstruct", "constructed", "constructive" });

{% endhighlight %}
{% endtabs %}

### Dictionary cache

To improve performance, dictionary data can be cached on the **server side** using the InitializeDictionaries method. This avoids reloading dictionary files for every spell check request and reduces processing time.

By default, only one dictionary is cached. Multiple dictionaries can be maintained by increasing the cache count as shown below:

{% tabs %}
{% highlight C# tabtitle="C#" %}

List<DictionaryData> spellDictCollection = new List<DictionaryData>();
string personalDictPath = string.Empty;
int cacheCount = 2;
// Initialize dictionaries
SpellChecker.InitializeDictionaries(spellDictCollection, personalDictPath, cacheCount);

{% endhighlight %}
{% endtabs %}

If dictionaries are initialized using the InitializeDictionaries method, the default constructor of the SpellChecker should be used to perform spell checks and retrieve suggestions. This approach prevents the reinitialization of already loaded dictionaries.

To write a Web API for word-by-word spell checking, refer to the [link](https://help.syncfusion.com/document-processing/word/word-processor/react/web-services/core#spell-check-word-by-word).


### Optimized spell check

The Document Editor provides an option to perform spell checking page by page when loading documents. By default, this property is set to false, so the spell check web API is called for each word in the document. To optimize the frequency of spell check API calls, you can enable the [enableOptimizedSpellCheck](https://ej2.syncfusion.com/react/documentation/api/document-editor/spellchecker#get-enableoptimizedspellcheck-boolean) property.

The following code example illustrates how to enable optimized spell checking.

```ts

container.documentEditor.spellChecker.enableOptimizedSpellCheck = true;

```

## Context menu

Right-click on a misspelled word to open the context menu with spell check options. See the screenshot below for reference.

### More suggestions

The context menu shows suggestions for misspelled words. By clicking the required word from the suggestions, the misspelled word is replaced automatically.

### Add to dictionary

This option allows the current word to be added to the dictionary. As a result, the spell checker will not treat the word as an error in the future.

### Ignore Once and Ignore All

If the word should not be added to the dictionary and should not be marked as an error, the Ignore Once or Ignore All options can be used.

**Ignore Once:** Ignores only the current occurrence of a word.

**Ignore All:** Ignores all occurrences of a word in the entire document.

### Spelling

This option allows the spell check dialog to be opened. Refer to the following screenshot for additional details.

## Spelling in status bar

The Spelling option is available in the status bar once spell check is enabled. It allows you to enable or disable spell check and control underline behavior directly from the status bar.

## Online demo

Explore how to enable spell check in the Document Editor using React through the live demo provided [here](https://document.syncfusion.com/demos/docx-editor/react/#/tailwind3/document-editor/spell-check).