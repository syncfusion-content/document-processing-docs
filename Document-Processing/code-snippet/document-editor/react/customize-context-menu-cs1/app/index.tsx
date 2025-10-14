


import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';
import { MenuItemModel } from '@syncfusion/ej2-navigations';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let container: DocumentEditorContainerComponent;
  React.useEffect(() => {
    onCreate()
  }, []);
  function onCreate() {
    // creating Custom Options
    let menuItems: MenuItemModel[] = [
      {
        text: 'Search In Google',
        id: 'search_in_google',
        iconCss: 'e-icons e-de-ctnr-find',
      },
    ];
    // adding Custom Options
    container.documentEditor.contextMenu.addCustomMenu(menuItems, false);
    // custom Options Select Event
    container.documentEditor.customContextMenuSelect = (args: any): void => {
      // custom Options Functionality
      let id: string = container.documentEditor.element.id;
      switch (args.id) {
        case id + 'search_in_google':
          let searchContent: string = container.documentEditor.selection.text;
          if (!container.documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
            window.open('http://google.com/search?q=' + searchContent);
          }
          break;
      }
    };
    //  custom options hide/show functionality
    container.documentEditor.customContextMenuBeforeOpen = (args: any): void => {
      let search: any = document.getElementById(args.ids[0]);
      search.style.display = 'none';
      let searchContent: string = container.documentEditor.selection.text;
      if (!container.documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
        search.style.display = 'block';
      }
    };
  }
  return (
    <DocumentEditorContainerComponent
      id="container"
      ref={(scope) => {
        container = scope;
      }}
      height={'590px'}
      serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
      enableToolbar={true}
      created={onCreate}
    />
  );
} export default App
ReactDOM.render(<App />, document.getElementById('sample'));


