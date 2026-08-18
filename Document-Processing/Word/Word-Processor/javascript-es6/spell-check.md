---
layout: post
title: Spell Check in TypeScript DOCX Editor | Syncfusion
description: The spell check feature in TypeScript DOCX Editor enables spelling verification and suggestion workflows to help create error-free documents.
platform: document-processing
control: Spell check 
documentation: ug
domainurl: ##DomainURL##
---

# Spell Check in TypeScript DOCX Editor

The [TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) supports spell checking for document content. It identifies misspelled words and provides suggestions through a dialog and the context menu. The spell checker is compatible with [Hunspell](https://github.com/wooorm/dictionaries) dictionary files.

```ts
import { DocumentEditorContainer, Toolbar, SpellChecker } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);
let container: DocumentEditorContainer = new DocumentEditorContainer({
    enableToolbar: true, enableSpellCheck: true
});
container.appendTo('#container');
//Accessing spell checker.
let spellChecker: SpellChecker = container.documentEditor.spellChecker;
//Set language ID to map dictionary in server side.
spellChecker.languageID = 1033;
spellChecker.removeUnderline = false;
//Allow suggestion for misspelled word.
spellChecker.allowSpellCheckAndSuggestion = true;
```

N> Document Editor requires server-side dependencies for spell check configuration. Refer to the [Document Editor Web API service projects](https://help.syncfusion.com/document-processing/word/word-processor/javascript-es6/web-services/core#spell-check) link for configuring spell checker in server-side. To know about server-side dependencies, please refer to this [page](./web-services-overview).

## Features

* Supports context menu suggestions for misspelled words.

* Provides built-in options such as Ignore, Ignore All, Change, and Change All for misspelled words in the spell check dialog.

## Enable spell check

To enable spell check in the Document Editor, set [`enableSpellCheck`](https://ej2.syncfusion.com/documentation/api/document-editor#enablespellcheck) property as `true` and then configure SpellCheckSettings.

## Disable spell check

To disable spell check in the Document Editor, set [`enableSpellCheck`](https://ej2.syncfusion.com/documentation/api/document-editor#enablespellcheck) property as `false` or remove [`enableSpellCheck`](https://ej2.syncfusion.com/documentation/api/document-editor#enablespellcheck) property initialization code. The default value of this property is `false`.

## Spell check settings

### Remove underline

By default, misspelled words are marked with a squiggly line. You can also disable this behavior by enabling the [`removeUnderline`](https://ej2.syncfusion.com/documentation/api/document-editor/spellChecker#removeunderline) API and now, the squiggly lines will never be rendered for misspelled words.

```ts
documentEditor.spellChecker.removeUnderline = false;
```

### Allow suggestions

By default, on performing spell check in the Document Editor, both spelling and suggestions for the misspelled words are retrieved, and misspelled words can be corrected through context menu suggestions. You can modify this behavior using the [`allowSpellCheckAndSuggestion`](https://ej2.syncfusion.com/documentation/api/document-editor/spellChecker#allowspellcheckandsuggestion) API, which will perform only spell check.

```ts
documentEditor.spellChecker.allowSpellCheckAndSuggestion = false;
```

### Language configuration

Document Editor provides multi-language spell check support. You can add as many languages (dictionaries) on the server side, and to use that language for spell checking in the Document Editor, it must be matched with the [`languageID`](https://ej2.syncfusion.com/documentation/api/document-editor/spellChecker#languageid) you pass in the Document Editor.

```ts
documentEditor.spellChecker.languageID = 1033; //LCID of "en-us"
```

### Optimized spell check

Document Editor provides an option to spell check page by page when loading the documents. The default value of this property is `false`, so when opening the document, the spell check web API will be called for each word in the document. To optimize the frequency of spell check web API calls, you can enable this property.

The following code example illustrates how to enable optimized spell checking.

```ts
documentEditor.spellChecker.enableOptimizedSpellCheck = true;
```

### Dictionary cache

Starting from `v20.1.0.xx`, we have optimized the performance and memory usage of the spell checker by adding a static method to initialize the dictionaries with a specified cache count.

By default, the spell checker holds only one language dictionary in memory. If you want to hold multiple dictionaries in memory, you need to set the cache limit by using the `InitializeDictionaries` method as in the below example.

```c#
 List<DictionaryData> spellDictCollection = new List<DictionaryData>();
 string personalDictPath = string.Empty;
 int cacheCount = 2;

 // Initialize dictionaries
 SpellChecker.InitializeDictionaries(spellDictCollection, personalDictPath, cacheCount);
```

If dictionaries are initialized using the `InitializeDictionaries` method, then we should use the default constructor of the `SpellChecker` to check spelling and get suggestions as in the below example code; it will prevent reinitialization of already loaded dictionaries.

```c#
public string SpellCheck([FromBody] SpellCheckJsonData spellChecker)
{
    try {
            SpellChecker spellCheck = new SpellChecker();
        spellCheck.GetSuggestions(spellChecker.LanguageID, spellChecker.TexttoCheck, spellChecker.CheckSpelling, spellChecker.CheckSuggestion, spellChecker.AddWord);
        return Newtonsoft.Json.JsonConvert.SerializeObject(spellCheck);
    }
    catch
    {
        return "{\"SpellCollection\":[],\"HasSpellingError\":false,\"Suggestions\":null}";
    }
}
```

Previously, on every `SpellChecker.GetSuggestion()` method call, the `.aff` and dictionary data would be parsed to generate suggestions for misspelled words. Starting from `v20.1.0.xx`, the `.aff` and dictionary data are parsed only for the first time alone while calling `SpellChecker.GetSuggestion()` method.

### Add new word to dictionary

If you find any root word missing in the dictionary file, then you can add that new root word and the rule to form the possible words to the dictionary file using the `AddNewWord` API in the server-side Spell check library.

N> The rules are framed automatically using the root word, the possible words, and affix file. If you pass null for the parameters `affPath` and `possibleWords`, then it will add a single root word to the dictionary. This API is included starting from `v20.2.0.xx`.

The following code example demonstrates how to add a new root word to the dictionary along with the rule to form the possible words.

```c#
SpellChecker spellChecker = new SpellChecker();
// Adds the specified new root word to the dictionary along with the rule to form the possible words.
spellChecker.AddNewWord("en.dic","en.aff", "construct", new string[] { "constructs", "reconstruct", "constructed", "constructive" });
```

## Context menu

Right-click on a misspelled word to open the context menu with spell check options. Please see the below screenshot for your reference.

![Spell check option in JavaScript document editor context menu](images/spell-check-menu.png)

### Suggestions

Context menu shows the suggestions for misspelled words. By clicking on the required word from the suggestions, the misspelled word gets replaced automatically.

### Add to dictionary

Using this option, you can add the current word to the dictionary so that the spell checker does not consider that word as an error in the future.

### Ignore Once and Ignore All

If you do not wish to add the word to the dictionary and do not want to show an error, use the Ignore Once or Ignore All options.

**Ignore Once:** Ignores only the current occurrence of a word from error.

**Ignore All:** Ignores all occurrences of a word from error in the entire document.

### Spelling

Using this option, you can open the spell check dialog. Please see the below screenshot for your reference.

![Spell check dialog in JavaScript document editor](images/spell-check-dialog.png)

* Refer to the [Spell checker](https://help.syncfusion.com/document-processing/word/word-processor/javascript-es6/web-services/core#spell-check) link for configuring the spell checker in server-side.
