import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  Inject,
  FormDesigner,
} from '@syncfusion/ej2-react-pdfviewer';
import React, { useState } from 'react';


const PDFViewer = () => {
  let viewer: any;
  const loadDocumentFromBase64 = async () => {
    const response = await fetch("http://localhost:3000/api/hello");
    const data = await response.json();
    viewer.load("data:application/pdf;base64,"+ data.base64);
  };
  return (<>
    <br />
    <br />
    <br />
    <button onClick={loadDocumentFromBase64}>LoadDocumentFromBase64</button>
    <PdfViewerComponent
      id="container"
      ref={(scope) => {
        viewer = scope;
      }}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/25.1.40/dist/ej2-pdfviewer-lib"
      // serviceUrl='https://localhost:44309/pdfviewer'
      style={{ height: '640px' }}
    >
      <Inject
        services={[
          Toolbar,
          Magnification,
          Navigation,
          LinkAnnotation,
          BookmarkView,
          ThumbnailView,
          Print,
          TextSelection,
          TextSearch,
          // Annotation,
          // FormFields,
          // FormDesigner,
        ]}
      />
    </PdfViewerComponent>
  </>)
};

export default PDFViewer;