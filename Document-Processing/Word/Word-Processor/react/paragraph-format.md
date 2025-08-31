---
layout: post
title: Paragraph format in React Document editor component | Syncfusion
description: Learn here all about Paragraph format in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Paragraph format 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Paragraph format in React Document editor component

Document Editor supports various paragraph formatting options such as text alignment, indentation, paragraph spacing, and more.

## Indentation

You can modify the left or right indentation of selected paragraphs using the following sample code.

```ts
documenteditor.selection.paragraphFormat.leftIndent= 24;
documenteditor.selection.paragraphFormat.rightIndent= 24;
```

## Special indentation

You can define special indent for first line of the paragraph using the following sample code.

```ts
documenteditor.selection.paragraphFormat.firstLineIndent= 24;
```

## Increase indent

You can increase the left indent of selected paragraphs by a factor of 36 points using the following sample code.

```ts
documenteditor.editor.increaseIndent()
```

## Decrease indent

You can decrease the left indent of selected paragraphs by a factor of 36 points using the following sample code.

```ts
documenteditor.editor.decreaseIndent()
```

## Text alignment

You can get or set the text alignment of selected paragraphs using the following sample code.

```ts
documenteditor.selection.paragraphFormat.textAlignment= 'Center' | 'Left' | 'Right' | 'Justify';
```

You can toggle the text alignment of selected paragraphs by specifying a value using the following sample code.

```ts
documenteditor.editor.toggleTextAlignment('Center' | 'Left' | 'Right' | 'Justify');
```

## Line spacing and its type

You can define the line spacing and its type for selected paragraphs using the following sample code.

```ts
documenteditor.selection.paragraphFormat.lineSpacingType='AtLeast';
documenteditor.selection.paragraphFormat.lineSpacing= 6;
```

## Paragraph spacing

You can define the spacing before or after the paragraph by using the following sample code.

```ts
documenteditor.selection.paragraphFormat.beforeSpacing= 24;
documenteditor.selection.paragraphFormat.afterSpacing= 24;
```

You can also set automatic spacing before and after the paragraph by using the following sample code.

```ts
documenteditor.selection.paragraphFormat.spaceBeforeAuto = true;
documenteditor.selection.paragraphFormat.spaceAfterAuto = true;
```

>Note: If auto spacing property is enabled, then value defined in the `beforeSpacing` and `afterSpacing` property will not be considered.

## Paragraph Border

You can apply borders to the paragraphs in a Word document. Using borders, decorate the paragraphs to set them apart from other paragraphs in the document.

The following example code illustrates how to apply box border for the selected paragraphs.

```ts
// left
documenteditor.selection.paragraphFormat.borders.left.lineStyle = 'Single';
documenteditor.selection.paragraphFormat.borders.left.lineWidth = 3;
documenteditor.selection.paragraphFormat.borders.left.color = "#000000";

//right
documenteditor.selection.paragraphFormat.borders.right.lineStyle = 'Single';
documenteditor.selection.paragraphFormat.borders.right.lineWidth = 3;
documenteditor.selection.paragraphFormat.borders.right.color = "#000000";

//top
documenteditor.selection.paragraphFormat.borders.top.lineStyle = 'Single';
documenteditor.selection.paragraphFormat.borders.top.lineWidth = 3;
documenteditor.selection.paragraphFormat.borders.top.color = "#000000";

//bottom
documenteditor.selection.paragraphFormat.borders.bottom.lineStyle = 'Single';
documenteditor.selection.paragraphFormat.borders.bottom.lineWidth = 3;
documenteditor.selection.paragraphFormat.borders.bottom.color = "#000000";
```

Note: At present, the Document editor component displays all the border styles as single line. But you can apply any border style and get the proper display in Microsoft Word app when opening the exported Word document.

## Pagination properties

You can enable or disable the following pagination properties for the paragraphs in a Word document.

* Widow/Orphan control - whether the first and last lines of the paragraph are to remain on the same page as the rest of the paragraph when paginating the document.
* Keep with next - whether the specified paragraph remains on the same page as the paragraph that follows it while paginating the document.
* Keep lines together - whether all lines in the specified paragraphs remain on the same page while paginating the document.

The following example code illustrates how to enable or disable these pagination properties for the selected paragraphs.

```ts
documenteditor.selection.paragraphFormat.widowControl = false;
documenteditor.selection.paragraphFormat.keepWithNext = true;
documenteditor.selection.paragraphFormat.keepLinesTogether = true;
```

## Show or Hide Paragraph marks

You can show or hide the hidden formatting symbols like spaces, tab, paragraph marks, and breaks in Document editor component. These marks help identify the start and end of a paragraph and all the hidden formatting symbols in a Word document.

The following example code illustrates how to show or hide paragraph marks.

```ts
documenteditor.documentEditorSettings.showHiddenMarks = true;
```

## Toolbar with paragraph formatting options

The following sample demonstrates the paragraph formatting options using a toolbar.

```ts

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    DocumentEditorComponent, Selection, Editor, EditorHistory, ContextMenu
} from '@syncfusion/ej2-react-documenteditor';
import { ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-navigations';
import { DropDownButtonComponent, ItemModel } from '@syncfusion/ej2-react-splitbuttons';

//Inject require modules.
DocumentEditorComponent.Inject(Selection, Editor, EditorHistory, ContextMenu);
function App() {
    let documenteditor: DocumentEditorComponent;
    React.useEffect(() => {
        componentDidMount()
    }, []);
    let items: ItemModel[] = [
        {
            text: 'Single',
        },
        {
            text: '1.15',
        },
        {
            text: '1.5',
        },
        {
            text: 'Double',
        },
    ];

    function contentTemplate1() {
        return (<DropDownButtonComponent items={items} iconCss="e-de-icon-LineSpacing" select={lineSpacingAction} ></DropDownButtonComponent>);
    }
    function componentDidMount(): void {
        documenteditor.selectionChange = () => {
            setTimeout(() => { onSelectionChange(); }, 20);
        };
    }

    function toolbarButtonClick(arg): void {
        switch (arg.item.id) {
            case 'AlignLeft':
                //Toggle the Left alignment for selected or current paragraph
                documenteditor.editor.toggleTextAlignment('Left');
                break;
            case 'AlignRight':
                //Toggle the Right alignment for selected or current paragraph
                documenteditor.editor.toggleTextAlignment('Right');
                break;
            case 'AlignCenter':
                //Toggle the Center alignment for selected or current paragraph
                documenteditor.editor.toggleTextAlignment('Center');
                break;
            case 'Justify':
                //Toggle the Justify alignment for selected or current paragraph
                documenteditor.editor.toggleTextAlignment('Justify');
                break;
            case 'IncreaseIndent':
                //Increase the left indent of selected or current paragraph
                documenteditor.editor.increaseIndent();
                break;
            case 'DecreaseIndent':
                //Decrease the left indent of selected or current paragraph
                documenteditor.editor.decreaseIndent();
                break;
            case 'ClearFormat':
                documenteditor.editor.clearFormatting();
                break;
            case 'ShowParagraphMark':
                //Show or hide the hidden characters like spaces, tab, paragraph marks, and breaks.
                documenteditor.documentEditorSettings.showHiddenMarks = !documenteditor.documentEditorSettings.showHiddenMarks;
                break;
        }
    }
    //Change the line spacing of selected or current paragraph
    function lineSpacingAction(args: any) {
        let text: string = args.item.text;
        switch (text) {
            case 'Single':
                documenteditor.selection.paragraphFormat.lineSpacing = 1;
                break;
            case '1.15':
                documenteditor.selection.paragraphFormat.lineSpacing = 1.15;
                break;
            case '1.5':
                documenteditor.selection.paragraphFormat.lineSpacing = 1.5;
                break;
            case 'Double':
                documenteditor.selection.paragraphFormat.lineSpacing = 2;
                break;
        }
        setTimeout((): void => {
            documenteditor.focusIn();
        }, 30);
    }
    // Selection change to retrieve formatting
    function onSelectionChange() {
        if (documenteditor.selection) {
            var paragraphFormat = documenteditor.selection.paragraphFormat;
            var toggleBtnId = ['AlignLeft', 'AlignCenter', 'AlignRight', 'Justify', 'ShowParagraphMark'];
            //Remove toggle state.
            for (var i = 0; i < toggleBtnId.length; i++) {
                let toggleBtn: HTMLElement = document.getElementById(toggleBtnId[i]);
                toggleBtn.classList.remove('e-btn-toggle');
            }
            //Add toggle state based on selection paragraph format.
            if (paragraphFormat.textAlignment === 'Left') {
                document.getElementById('AlignLeft').classList.add('e-btn-toggle');
            } else if (paragraphFormat.textAlignment === 'Right') {
                document.getElementById('AlignRight').classList.add('e-btn-toggle');
            } else if (paragraphFormat.textAlignment === 'Center') {
                document.getElementById('AlignCenter').classList.add('e-btn-toggle');
            } else {
                document.getElementById('Justify').classList.add('e-btn-toggle');
            }
            if (documenteditor.documentEditorSettings.showHiddenMarks) {
                document.getElementById('ShowParagraphMark').classList.add('e-btn-toggle');
            }
            // #endregion
        }
    }

    return (
        <div>
            <ToolbarComponent id='toolbar' clicked={toolbarButtonClick}>
                <ItemsDirective>
                    <ItemDirective id="AlignLeft" prefixIcon="e-de-ctnr-alignleft e-icons" tooltipText="Align Left" />
                    <ItemDirective id="AlignCenter" prefixIcon="e-de-ctnr-aligncenter e-icons" tooltipText="Align Center" />
                    <ItemDirective id="AlignRight" prefixIcon="e-de-ctnr-alignright e-icons" tooltipText="Align Right" />
                    <ItemDirective id="Justify" prefixIcon="e-de-ctnr-justify e-icons" tooltipText="Justify" />
                    <ItemDirective type="Separator" />
                    <ItemDirective id="IncreaseIndent" prefixIcon="e-de-ctnr-increaseindent e-icons" tooltipText="Increase Indent" />
                    <ItemDirective id="DecreaseIndent" prefixIcon="e-de-ctnr-decreaseindent e-icons" tooltipText="Decrease Indent" />
                    <ItemDirective type="Separator" />
                    <ItemDirective template={contentTemplate1} />
                    <ItemDirective id="ClearFormat" prefixIcon="e-de-ctnr-clearall e-icons" tooltipText="Clear Formatting" />
                    <ItemDirective type="Separator" />
                    <ItemDirective id="ShowParagraphMark" prefixIcon="e-de-e-paragraph-mark e-icons" tooltipText="Show the hidden characters like spaces, tab, paragraph marks, and breaks.(Ctrl + *)" />
                </ItemsDirective>
            </ToolbarComponent>

            <DocumentEditorComponent
                id="container"
                ref={scope => {
                    documenteditor = scope;
                }}
                isReadOnly={false}
                enableSelection={true}
                enableEditor={true}
                enableEditorHistory={true}
                enableContextMenu={true}
                enableTableDialog={true}
                height={'330px'}
            />
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

## See Also

* [Feature modules](./feature-module)
* [Paragraph dialog](./dialog#paragraph-dialog)
* [Keyboard shortcuts](./keyboard-shortcut#paragraph-formatting)