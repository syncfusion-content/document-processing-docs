import * as ReactDOM from 'react-dom';
import * as React from 'react';
import  { PdfViewerComponent, Toolbar, Magnification, Annotation, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  function showToolbarClicked() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.toolbar.showToolbarItem(["OpenOption"],false);
  }
  return (
  <div>
    <div className='control-section'>
        <button onClick={showToolbarClicked}>ShowToolbarItem</button>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" 
          resourceUrl="https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib"
          height= '640px'>

                <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                                    ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);