---
layout: post
title: Text format in React Document editor component | Syncfusion
description: Learn here all about Text format in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Text format 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Text format in React Document editor component

Document Editor supports several formatting options for text like bold, italic, font color, highlight color, and more. This section describes how to modify the formatting for selected text in detail.

## Bold

The bold formatting for selected text can be get or set by using the following sample code.


  ```ts
   //Gets the value for bold formatting of selected text.
   let bold : boolean = documenteditor.selection.characterFormat.bold;
   //Sets bold formatting for selected text.
   documenteditor.selection.characterFormat.bold = true;
  ```


You can toggle the bold formatting based on existing value at selection. Refer to the following sample code.

   ```ts
   documenteditor.editor.toggleBold();
   ```

## Italic

The Italic formatting for selected text can be get or set by using the following sample code.

    ```ts
    //Gets the value for italic formatting of selected text.
    let italic : boolean = documenteditor.selection.characterFormat.italic;
   //Sets italic formatting for selected text.
    documenteditor.selection.characterFormat.italic= true|false;
   ```

You can toggle the Italic formatting based on existing value at selection. Refer to the following sample code.

  ```ts
   documenteditor.editor.toggleItalic();
  ```

## Underline property

The underline style for selected text can be get or set by using the following sample code.

   ```ts
   //Gets the value for underline formatting of selected text.
   let underline : Underline = documenteditor.selection.characterFormat.underline;
   //Sets underline formatting for selected text.
   documenteditor.selection.characterFormat.underline='Single' | 'None';
   ```

You can toggle the underline style of selected text based on existing value at selection by specifying a value. Refer to the following sample code.

   ```ts
    documenteditor.editor.toggleUnderline('Single');
   ```

## Strikethrough property

The strikethrough style for selected text can be get or set by using the following sample code.

   ```ts
    //Gets the value for strikethrough formatting of selected text.
    let strikethrough : Strikethrough = documenteditor.selection.characterFormat.strikethrough;
    //Sets strikethrough formatting for selected text.
    documenteditor.selection.characterFormat.strikethrough='Single' | 'Normal';
   ```

You can toggle the strikethrough style of selected text based on existing value at selection by specifying a value. Refer to the following sample code.

    ```ts
     documenteditor.editor.toggleStrikethrough();
    ```

## Superscript property

The selected text can be made superscript by using the following sample code.

    ```ts
    //Gets the value for baselineAlignment formatting of selected text.
     let baselineAlignment : BaselineAlignment = documenteditor.selection.characterFormat.baselineAlignment;
    //Sets baselineAlignment formatting for selected text.
     documenteditor.selection.characterFormat.baselineAlignment='Superscript';
   ```

Toggle the selected text as superscript or normal using the following sample code.

    ```ts
      documenteditor.editor.toggleSuperscript();
    ```

## Subscript property

The selected text can be made subscript by using the following sample code.

    ```ts
     //Gets the value for baselineAlignment formatting of selected text.
     let baselineAlignment : BaselineAlignment = documenteditor.selection.characterFormat.baselineAlignment;
    //Sets baselineAlignment formatting for selected text.
     documenteditor.selection.characterFormat.baselineAlignment='Subscript'; 
   ```

Toggle the selected text as subscript or normal using the following sample code.

   ```ts
    documenteditor.editor.toggleSubscript();
  ```

You can make a subscript or superscript text as normal using the following code.

   ```ts
     documenteditor.selection.characterFormat.baselineAlignment='Normal';
   ```

## Change case

You can apply different case formatting based on the selected text. Refer to the following sample code.

```ts
documenteditor.editor.changeCase('Uppercase'|'Lowercase'|'SentenceCase'|'ToggleCase'|'CapitalizeEachWord');
```

## Size

The size of selected text can be get or set using the following code.

   ```ts
   //Gets the value for fontSize formatting of selected text.
   let fontSize : number = documenteditor.selection.characterFormat.fontSize;
   //Sets fontSize formatting for selected text.
   documenteditor.selection.characterFormat.fontSize= 32;
   ```

## Color

### Change Font Color by UI Option

In the Document Editor, the Text Properties pane features two icons for managing text color within the user interface (UI):

* **Colored Box:** This icon visually represents the **current color** applied to the selected text.
* **Text (A) Icon:** Clicking this icon allows users **to modify the color** of the selected text by choosing a new color from the available options.

This Font Color option appear as follows.

![Font Color](images/fontColor.PNG)

### Change Font Color by Code

The color of selected text can be get or set using the following code.

```ts
//Gets the value for fontColor formatting of selected text.
let fontColor : string = documenteditor.selection.characterFormat.fontColor;
//Sets fontColor formatting for selected text.
documenteditor.selection.characterFormat.fontColor= 'Pink';
documenteditor.selection.characterFormat.fontColor= '#FFC0CB';
```

## Font

The font style of selected text can be get or set using the following sample code.

```ts
//Gets the value for fontFamily formatting of selected text.
let baselineAlignment : string = documenteditor.selection.characterFormat.fontFamily;
//Sets fontFamily formatting for selected text.
documenteditor.selection.characterFormat.fontFamily= 'Arial';
```

## Highlight color

The highlight color of the selected text can be get or set using the following sample code.

```ts
//Gets the value for highlightColor formatting of selected text.
let highlightColor : HighlightColor = documenteditor.selection.characterFormat.highlightColor;
//Sets highlightColor formatting for selected text.
documenteditor.selection.characterFormat.highlightColor= 'Pink';
```

## Toolbar with options for text formatting

Refer to the following example.


```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, Selection, Editor, EditorHistory, ContextMenu } from '@syncfusion/ej2-react-documenteditor';
import { ToolbarComponent, ItemDirective, ItemsDirective } from '@syncfusion/ej2-react-navigations';
import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

DocumentEditorComponent.Inject(Selection, Editor, EditorHistory, ContextMenu);

function App() {
    let documenteditor: DocumentEditorComponent;
    React.useEffect(() => {
        componentDidMount()
    }, []);
    function componentDidMount() {
        documenteditor.selectionChange = () => {
            setTimeout(() => { onSelectionChange(); }, 20);
        };
    }

    function toolbarButtonClick(arg) {
        switch (arg.item.id) {
            case 'bold':
                //Toggles the bold of selected content
                documenteditor.editor.toggleBold();
                break;
            case 'italic':
                //Toggles the Italic of selected content
                documenteditor.editor.toggleItalic();
                break;
            case 'underline':
                //Toggles the underline of selected content
                documenteditor.editor.toggleUnderline('Single');
                break;
            case 'strikethrough':
                //Toggles the strikethrough of selected content
                documenteditor.editor.toggleStrikethrough();
                break;
            case 'subscript':
                //Toggles the subscript of selected content
                documenteditor.editor.toggleSubscript();
                break;
            case 'superscript':
                //Toggles the superscript of selected content
                documenteditor.editor.toggleSuperscript();
                break;
        }
    }
    //To change the font Style of selected content
    function changeFontFamily(args): void {
        documenteditor.selection.characterFormat.fontFamily = args.value;
        documenteditor.focusIn();
    }
    //To Change the font Size of selected content
    function changeFontSize(args): void {
        documenteditor.selection.characterFormat.fontSize = args.value;
        documenteditor.focusIn();
    }
    //To Change the font Color of selected content
    function changeFontColor(args) {
        documenteditor.selection.characterFormat.fontColor = args.currentValue.hex;
        documenteditor.focusIn();
    }

    //Selection change to retrieve formatting
    function onSelectionChange() {
        if (documenteditor.selection) {
            enableDisableFontOptions();
            // #endregion
        }
    }
    function enableDisableFontOptions() {
        var characterformat = documenteditor.selection.characterFormat;
        var properties = [characterformat.bold, characterformat.italic, characterformat.underline, characterformat.strikethrough];
        var toggleBtnId = ["bold", "italic", "underline", "strikethrough"];
        for (let i = 0; i < properties.length; i++) {
            changeActiveState(properties[i], toggleBtnId[i]);
        }
    }
    function changeActiveState(property, btnId) {
        let toggleBtn: HTMLElement = document.getElementById(btnId);
        if ((typeof (property) == 'boolean' && property == true) || (typeof (property) == 'string' && property !== 'None'))
            toggleBtn.classList.add("e-btn-toggle");
        else {
            if (toggleBtn.classList.contains("e-btn-toggle"))
                toggleBtn.classList.remove("e-btn-toggle");
        }
    }
    let fontStyle: string[] = ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Candara', 'Courier New', 'Georgia', 'Impact', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Symbol', 'Times New Roman', 'Verdana', 'Windings'
    ];
    let fontSize: string[] = ['8', '9', '10', '11', '12', '14', '16', '18',
        '20', '22', '24', '26', '28', '36', '48', '72', '96'];
    function contentTemplate1() {
        return (<ColorPickerComponent showButtons={true} value='#000000' change={changeFontColor}></ColorPickerComponent>);
    }
    function contentTemplate2() {
        return (<ComboBoxComponent dataSource={fontStyle} change={changeFontFamily} index={2} allowCustom={true} showClearButton={false} ></ComboBoxComponent>);
    }
    function contentTemplate3() {
        return (<ComboBoxComponent dataSource={fontSize} change={changeFontSize} index={2} allowCustom={true} showClearButton={false} ></ComboBoxComponent>);
    }
    return (
        <div>
            <ToolbarComponent id='toolbar' clicked={toolbarButtonClick}>
                <ItemsDirective>
                    <ItemDirective id="bold" prefixIcon="e-de-icon-Bold" tooltipText="Bold" />
                    <ItemDirective id="italic" prefixIcon="e-de-icon-Italic" tooltipText="Italic" />
                    <ItemDirective id="underline" prefixIcon="e-de-icon-Underline" tooltipText="Underline" />
                    <ItemDirective id="strikethrough" prefixIcon="e-de-icon-Strikethrough" tooltipText="Strikethrough" />
                    <ItemDirective id="subscript" prefixIcon="e-de-icon-Subscript" tooltipText="Subscript" />
                    <ItemDirective id="superscript" prefixIcon="e-de-icon-Superscript" tooltipText="Superscript" />
                    <ItemDirective type="Separator" />
                    <ItemDirective template={contentTemplate1} />
                    <ItemDirective type="Separator" />
                    <ItemDirective template={contentTemplate2} />
                    <ItemDirective template={contentTemplate3} />
                </ItemsDirective>
            </ToolbarComponent>

            <DocumentEditorComponent
                id="container"
                height={'330px'}
                ref={scope => {
                    documenteditor = scope;
                }}
                isReadOnly={false}
                enableSelection={true}
                enableEditor={true}
                enableEditorHistory={true}
                enableContextMenu={true}
            />
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

## See Also

* [Feature modules](./feature-module)
* [Font dialog](./dialog#font-dialog)
* [Keyboard shortcuts](./keyboard-shortcut#text-formatting)