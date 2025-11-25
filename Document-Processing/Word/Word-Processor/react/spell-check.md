---
layout: post
title: Spell check in React Document editor component | Syncfusion
description: Learn here all about Spell check in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Spell check 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Spell check in React Document editor component

Document Editor supports performing spell checking for any input text. You can perform spell checking for the text in Document Editor and it will provide suggestions for the mis-spelled words through dialog and in context menu. Document editor's spell checker is compatible with [hunspell dictionary files](https://github.com/wooorm/dictionaries).

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorComponent,
  SfdtExport,
  Selection,
  Editor,
  SpellChecker,
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, SpellChecker);
function App() {
  let documenteditor;
  React.useEffect(() => {
    componentDidMount();
  }, []);
  function componentDidMount() {
   //Accessing spell checker.
let spellChecker = documenteditor.spellChecker;
//Set language id to map dictionary in server side.;
spellChecker.languageID = 1033;
spellChecker.removeUnderline = false;
//Allow suggetion for miss spelled word/
spellChecker.allowSpellCheckAndSuggestion = true;
  }

  return (
    <div>
      <DocumentEditorComponent
        id="container"
        height={'330px'}
        ref={(scope) => {
          documenteditor = scope;
        }}
        isReadOnly={false}
        enableSelection={true}
        enableEditor={true}
        enableSfdtExport={true}
        enableSpellCheck={true}
      />
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));


```

## Features

* Supports context menu suggestions.
* Provides built-in options to Ignore, Ignore All, Change, Change All for error words in spell checker dialog.

## Enable SpellCheck

To enable spell check in Document Editor, set [`enableSpellCheck`](https://ej2.syncfusion.com/react/documentation/api/document-editor#enablespellcheck) property as `true` and then configure SpellCheckSettings.

## Disable SpellCheck

To disable spell check in Document Editor, set [`enableSpellCheck`](https://ej2.syncfusion.com/react/documentation/api/document-editor#enablespellcheck) property as `false` or remove [`enableSpellCheck`](https://ej2.syncfusion.com/react/documentation/api/document-editor#enablespellcheck) property initialization code. The default value of this property is false.

## Spell check settings

### Remove Underline

By default, mis-spelled words are marked with squiggly line. You can also disable this behavior by enabling the [`removeUnderline`](https://ej2.syncfusion.com/react/documentation/api/document-editor/spellChecker#removeunderline) API and now, the squiggly lines will never be rendered for mis-spelled words.

```ts
documentEditor.spellChecker.removeUnderline = false;
```

### AllowSpellCheckAndSuggestion

By default, on performing spell check in Document Editor, both spelling and suggestions of the mis-spelled words will be retrieved, and this mis-spelled words can be corrected through context menu suggestions. You can modify this behavior using the [`allowSpellCheckAndSuggestion`](https://ej2.syncfusion.com/react/documentation/api/document-editor/spellChecker#allowspellcheckandsuggestion) API, which will perform only spell check.

```ts
documentEditor.spellChecker.allowSpellCheckAndSuggestion = false;
```

### LanguageID

Document Editor provides multi-language spell check support. You can add as many languages (dictionaries) in the server-side and to use that language for spell checking in Document Editor, it must be matched with [`languageID`](https://ej2.syncfusion.com/react/documentation/api/document-editor/spellChecker#languageid) you pass in the Document Editor.

```ts
documentEditor.spellChecker.languageID = 1033; //LCID of "en-us";
```

### EnableOptimizedSpellCheck

Document Editor provides option to spellcheck page by page when loading the documents. The default value of this property is false, so when opening the document spellcheck web API will be called for each word in the document. To optimize the frequency of spellcheck web API calls, you can enable this property.

The following code example illustrates how to enable optimized spell checking.

```ts
documentEditor.spellChecker.enableOptimizedSpellCheck = true;
```

### Spell check dictionary cache

Starting from `v20.1.0.xx`, we have optimized the performance and memory usage of spell checker by adding a static method to initialize the dictionaries with specified cache count.

By default, the spell checker holds only one language dictionary in memory. If you want to hold multiple dictionaries in memory, you need to set the cache limit by using `InitializeDictionaries` method as in the below example.

```csharp
 List<DictionaryData> spellDictCollection = new List<DictionaryData>();
 string personalDictPath = string.Empty;
 int cacheCount = 2;
 // Initialize dictionaries
 SpellChecker.InitializeDictionaries(spellDictCollection, personalDictPath, cacheCount);
```

If dictionaries are initialized using `InitializeDictionaries` method, then we should use default constructor of the `SpellChecker`to check spelling and get suggestion as in the below example code, it will prevent reinitialization of already loaded dictionaries.

```csharp
public string SpellCheck([FromBody] SpellCheckJsonData spellChecker)
{
      try
      {
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

Previously on every `SpellChecker.GetSuggestion()` method call, the `.aff` and dictionary data will be parsed to generate suggestion for miss spelled word. But, starting from `v20.1.0.xx`, the `.aff` and dictionary data will be parsed only for the first time alone while calling `SpellChecker.GetSuggestion()` method.

### Add new root word and possible words to dictionary

If you find any root word is missing in the dictionary file, then you can add that new root word and the rule to form the possible words to dictionary file using `AddNewWord` API in the server-side Spell check library.

>Note:
>1. The rules are framed automatically using the root word, the possible words and affix file.
>2. If you pass null for the parameters `affPath` and `possibleWords`, then it will add a single root word to dictionary.
>3. This API is included starting from `v20.2.0.xx`.

The following code example demonstrates how to add a new root word to the dictionary along with the rule to form the possible words.

```csharp
SpellChecker spellChecker = new SpellChecker();
// Adds the specified new root word to the dictionary along with the rule to form the possible words.
spellChecker.AddNewWord("en.dic","en.aff", "construct", new string[] { "constructs", "reconstruct", "constructed", "constructive" });
```

## Context menu

Right click on error word to open the context menu with spell check options. Please see below screenshot for your reference.

![Spell check option in context menu](images/spell-check-menu.png)

### Suggestions

Context menu shows the suggestions for mis-spelled words. By clicking on the required word from suggestion, the error word gets replaced automatically.

### Add To Dictionary

Using this option, you can add the current word to the dictionary. So that the spell checker does not consider that word as error in future.

### Ignore Once and Ignore All

If you do not wish to add the word to dictionary and do not want to show error, use Ignore Once or Ignore All options.

Ignore: ignore only the current occurrence of a word from error.

Ignore All: ignore all occurrence of a word from error in the entire document.

### Spelling

Using this option, you can open spell check dialog. Please see below screenshot for your reference.

![Spell check dialog](images/spell-check-dialog.png)

* Refer to the [Spell checker](https://help.syncfusion.com/document-processing/word/word-processor/react/web-services/core#spell-check) link for configuring spell checker in server-side.