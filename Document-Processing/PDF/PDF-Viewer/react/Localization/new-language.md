---
layout: post
title: Set a New Language in React PDF Viewer | Syncfusion
description: Learn how to localize the Syncfusion React PDF Viewer with culture codes using L10n.load and the locale property.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Set a new language in the React PDF Viewer

Use the React PDF Viewer’s [locale](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#locale) property together with `L10n.load` to display UI text, tooltips, and messages in your users’ language. Provide only the keys you need to override; missing keys fall back to the default `en-US` values.

![German Locale](../../javascript-es6/images/locale-de.gif)

## When to use this
- You need the viewer UI (e.g., toolbar text, dialogs, tooltips) to appear in a specific language.
- You want to override a few labels (e.g., “Open”, “Zoom”, “Print”) without redefining every string.

## Prerequisites
- `@syncfusion/ej2-react-pdfviewer` installed in a React app.
- (Optional) A list of keys you want to override.

## Quick start (set German)
1. **Load translations** with `L10n.load` at app start (only include the keys you want to change). The example below loads the full set; you can load only the keys you need.
2. **Set the culture** by passing a `locale` value to `<PdfViewerComponent/>`.
3. **Render the viewer** as usual. Missing keys automatically fall back to `en-US`.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  PdfViewerComponent,
  Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  ThumbnailView, Print, TextSelection, TextSearch, Annotation,
  FormDesigner, FormFields, PageOrganizer, Inject
} from '@syncfusion/ej2-react-pdfviewer';
import { L10n } from '@syncfusion/ej2-base';

/** 1) Provide only the keys you want to override; others fall back to en-US */
L10n.load({
    'de': {
        'PdfViewer': {
        'PdfViewer': 'PDF-Viewer',
        'Cancel': 'Abbrechen',
        'Download file': 'Datei herunterladen',
        'Download': 'Herunterladen',
        'Enter Password': 'Dieses Dokument ist passwortgeschützt. Bitte geben Sie ein Passwort ein.',
        'File Corrupted': 'Datei beschädigt',
        'File Corrupted Content': 'Die Datei ist beschädigt und kann nicht geöffnet werden.',
        'Fit Page': 'Seite anpassen',
        'Fit Width': 'Breite anpassen',
        'Automatic': 'Automatisch',
        'Go To First Page': 'Erste Seite anzeigen',
        'Invalid Password': 'Falsches Passwort. Bitte versuchen Sie es erneut.',
        'Next Page': 'Nächste Seite anzeigen',
        'OK': 'OK',
        'Open': 'Datei öffnen',
        'Page Number': 'Aktuelle Seitenzahl',
        'Previous Page': 'Vorherige Seite anzeigen',
        'Go To Last Page': 'Letzte Seite anzeigen',
        'Zoom': 'Zoomen',
        'Zoom In': 'Hineinzoomen',
        'Zoom Out': 'Herauszoomen',
        'Page Thumbnails': 'Miniaturansichten der Seiten',
        'Bookmarks': 'Lesezeichen',
        'Print': 'Drucken',
        'Organize Pages': 'Seiten organisieren',
        'Insert Right': 'Rechts einfügen',
        'Insert Left': 'Links einfügen',
        'Total': 'Gesamt',
        'Pages': 'Seiten',
        'Rotate Right': 'Drehe nach rechts',
        'Rotate Left': 'Nach links drehen',
        'Delete Page': 'Seite löschen',
        'Delete Pages': 'Seiten löschen',
        'Copy Page': 'Seite kopieren',
        'Copy Pages': 'Seiten kopieren',
        'Import Document': 'Dokument importieren',
        'Save': 'Speichern',
        'Save As': 'Speichern als',
        'Select All': 'Wählen Sie Alle',
        'Change Page Zoom': 'Seitenzoom ändern',
        'Increase Page Zoom': 'Seitenzoom vergrößern',
        'Decrease Page Zoom': 'Seitenzoom verringern',
        'Password Protected': 'Passwort erforderlich',
        'Copy': 'Kopieren',
        'Text Selection': 'Textauswahltool',
        'Panning': 'Schwenkmodus',
        'Text Search': 'Text finden',
        'Find in document': 'Im Dokument suchen',
        'Match case': 'Gross- / Kleinschreibung',
        'Match any word': 'Treffe irgendein Wort',
        'Apply': 'Anwenden',
        'GoToPage': 'Gehen Sie zur Seite',
        'No Matches': 'PDF Viewer hat die Suche im Dokument abgeschlossen. Es wurden keine Übereinstimmungen gefunden.',
        'No More Matches': 'PDF Viewer hat die Suche im Dokument abgeschlossen. Es wurden keine weiteren Übereinstimmungen gefunden.',
        'No Search Matches': 'Keine Treffer gefunden',
        'No More Search Matches': 'Keine weiteren Übereinstimmungen gefunden',
        'Exact Matches': 'Genaue Übereinstimmungen',
        'Total Matches': 'Gesamtspiele',
        'Undo': 'Rückgängig machen',
        'Redo': 'Wiederholen',
        'Annotation': 'Anmerkungen hinzufügen oder bearbeiten',
        'FormDesigner': 'Fügen Sie Formularfelder hinzu und bearbeiten Sie sie',
        'Highlight': 'Text hervorheben',
        'Underline': 'Text unterstreichen',
        'Strikethrough': 'Durchgestrichener Text',
        'Squiggly': 'Zickzack',
        'Delete': 'löschen',
        'Opacity': 'Opazität',
        'Color edit': 'Farbe ändern',
        'Opacity edit': 'Deckkraft ändern',
        'Highlight context': 'Markieren',
        'Underline context': 'Unterstreichen',
        'Strikethrough context': 'Durchgestrichener Kontext',
        'Squiggly context': 'Geschwungener Kontext',
        'Server error': 'Der Webdienst hört nicht zu. ',
        'Client error': 'Der Client-Seiten-Fehler wird gefunden. Bitte überprüfen Sie die benutzerdefinierten Header in der Eigenschaft von AjaxRequestSets und Web -Aktion in der Eigenschaftsassettierungseigenschaft.',
        'Cors policy error': 'Das Dokument kann aufgrund einer ungültigen URL- oder Zugriffsbeschränkungen nicht abgerufen werden. Bitte überprüfen Sie die Dokument -URL und versuchen Sie es erneut.',
        'Open text': 'Offen',
        'First text': 'Erste Seite',
        'Previous text': 'Vorherige Seite',
        'Next text': 'Nächste Seite',
        'Last text': 'Letzte Seite',
        'Zoom in text': 'Hineinzoomen',
        'Zoom out text': 'Rauszoomen',
        'Selection text': 'Auswahl',
        'Pan text': 'Pan-Text',
        'Print text': 'Drucken',
        'Search text': 'Suchen',
        'Annotation Edit text': 'Anmerkung bearbeiten',
        'FormDesigner Edit text': 'Fügen Sie Formularfelder hinzu und bearbeiten Sie sie',
        'Line Thickness': 'Dicke der Linie',
        'Line Properties': 'Linieneigenschaften',
        'Start Arrow': 'Startpfeil',
        'End Arrow': 'Endpfeil',
        'Line Style': 'Linienstil',
        'Fill Color': 'Füllfarbe',
        'Line Color': 'Linienfarbe',
        'None': 'Keiner',
        'Open Arrow': 'Offen',
        'Closed Arrow': 'Geschlossen',
        'Round Arrow': 'Runden',
        'Square Arrow': 'Quadrat',
        'Diamond Arrow': 'Diamant',
        'Butt': 'Hintern',
        'Cut': 'Schneiden',
        'Paste': 'Einfügen',
        'Delete Context': 'Löschen',
        'Properties': 'Eigenschaften',
        'Add Stamp': 'Stempel hinzufügen',
        'Add Shapes': 'Formen hinzufügen',
        'Stroke edit': 'Ändern Sie die Strichfarbe',
        'Change thickness': 'Randstärke ändern',
        'Add line': 'Zeile hinzufügen',
        'Add arrow': 'Pfeil hinzufügen',
        'Add rectangle': 'Rechteck hinzufügen',
        'Add circle': 'Kreis hinzufügen',
        'Add polygon': 'Polygon hinzufügen',
        'Add Comments': 'Füge Kommentare hinzu',
        'Comments': 'Kommentare',
        'SubmitForm': 'Formular abschicken',
        'No Comments Yet': 'Noch keine Kommentare',
        'Accepted': 'Akzeptiert',
        'Completed': 'Vollendet',
        'Cancelled': 'Abgesagt',
        'Rejected': 'Abgelehnt',
        'Leader Length': 'Führungslänge',
        'Scale Ratio': 'Skalenverhältnis',
        'Calibrate': 'Kalibrieren',
        'Calibrate Distance': 'Distanz kalibrieren',
        'Calibrate Perimeter': 'Umfang kalibrieren',
        'Calibrate Area': 'Bereich kalibrieren',
        'Calibrate Radius': 'Radius kalibrieren',
        'Calibrate Volume': 'Lautstärke kalibrieren',
        'Depth': 'Tiefe',
        'Closed': 'Geschlossen',
        'Round': 'Runden',
        'Square': 'Quadrat',
        'Diamond': 'Diamant',
        'Edit': 'Bearbeiten',
        'Comment': 'Kommentar',
        'Comment Panel': 'Kommentarpanel',
        'Set Status': 'Status festlegen',
        'Post': 'Post',
        'Page': 'Seite',
        'Add a comment': 'Einen Kommentar hinzufügen',
        'Add a reply': 'Fügen Sie eine Antwort hinzu',
        'Import Annotations': 'Importieren Sie Annotationen aus der JSON-Datei',
        'Export Annotations': 'Annotation an die JSON-Datei exportieren',
        'Export XFDF': 'Annotation in XFDF-Datei exportieren',
        'Import XFDF': 'Importieren Sie Annotationen aus der XFDF-Datei',
        'Add': 'Hinzufügen',
        'Clear': 'Klar',
        'Bold': 'Fett',
        'Italic': 'Kursiv',
        'Strikethroughs': 'Durchgestrichen',
        'Underlines': 'Unterstreichen',
        'Superscript': 'Hochgestellt',
        'Subscript': 'Index',
        'Align left': 'Linksbündig',
        'Align right': 'Rechts ausrichten',
        'Center': 'Zentrum',
        'Justify': 'Rechtfertigen',
        'Font color': 'Schriftfarbe',
        'Text Align': 'Textausrichtung',
        'Text Properties': 'Schriftstil',
        'SignatureFieldDialogHeaderText': 'Signatur hinzufügen',
        'HandwrittenSignatureDialogHeaderText': 'Signatur hinzufügen',
        'InitialFieldDialogHeaderText': 'Initial hinzufügen',
        'HandwrittenInitialDialogHeaderText': 'Initial hinzufügen',
        'Draw Ink': 'Tinte zeichnen',
        'Create': 'Erstellen',
        'Font family': 'Schriftfamilie',
        'Font size': 'Schriftgröße',
        'Free Text': 'Freier Text',
        'Import Failed': 'Ungültiger JSON-Dateityp oder Dateiname; Bitte wählen Sie eine gültige JSON-Datei aus',
        'Import PDF Failed': 'Ungültiger PDF-Dateityp oder PDF-Datei nicht gefunden. Bitte wählen Sie eine gültige PDF-Datei aus',
        'File not found': 'Die importierte JSON-Datei wird nicht am gewünschten Ort gefunden',
        'Export Failed': 'Exportanmerkungen sind gescheitert. Bitte stellen Sie sicher, dass Anmerkungen ordnungsgemäß hinzugefügt werden',
        'of': 'von',
        'Dynamic': 'Dynamisch',
        'Standard Business': 'Standardgeschäft',
        'Sign Here': 'Hier unterschreiben',
        'Custom Stamp': 'Benutzerdefinierte Stempel',
        'Enter Signature as Name': 'Gib deinen Namen ein',
        'Draw-hand Signature': 'ZIEHEN',
        'Type Signature': 'TYP',
        'Upload Signature': 'HOCHLADEN',
        'Browse Signature Image': 'DURCHSUCHE',
        'Save Signature': 'Signatur speichern',
        'Save Initial': 'Initial speichern',
        'Textbox': 'Textfeld',
        'Password': 'Passwort',
        'Check Box': 'Kontrollkästchen',
        'Radio Button': 'Optionsfeld',
        'Dropdown': 'Dropdown',
        'List Box': 'Listenfeld',
        'Signature': 'Unterschrift',
        'Delete FormField': 'Formular löschen',
        'Textbox Properties': 'Textbox-Eigenschaften',
        'Name': 'Name',
        'Tooltip': 'Tooltip',
        'Value': 'Wert',
        'Form Field Visibility': 'Sichtbarkeit des Formularfelds',
        'Read Only': 'Schreibgeschützt',
        'Required': 'Erforderlich',
        'Checked': 'Geprüft',
        'Show Printing': 'Druck anzeigen',
        'Formatting': 'Format',
        'Fill': 'Füllen',
        'Border': 'Grenze',
        'Border Color': 'Randfarbe',
        'Thickness': 'Dicke',
        'Max Length': 'Maximale Länge',
        'List Item': 'Artikelname',
        'Export Value': 'Exportwert',
        'Dropdown Item List': 'Dropdown-Elementliste',
        'List Box Item List': 'Listenfeldelementliste',
        'General': 'Allgemein',
        'Appearance': 'Aussehen',
        'Options': 'Optionen',
        'Delete Item': 'Löschen',
        'Up': 'Hoch',
        'Down': 'Runter',
        'Multiline': 'Mehrzeilig',
        'Revised': 'Überarbeitet',
        'Reviewed': 'Bewertet',
        'Received': 'Erhalten',
        'Confidential': 'Vertraulich',
        'Approved': 'Genehmigt',
        'Not Approved': 'Nicht bestätigt',
        'Witness': 'Zeuge',
        'Initial Here': 'Anfang hier',
        'Draft': 'Entwurf',
        'Final': 'Finale',
        'For Public Release': 'Für die Veröffentlichung',
        'Not For Public Release': 'Nicht für die Veröffentlichung',
        'For Comment': 'Für Kommentar',
        'Void': 'Leere',
        'Preliminary Results': 'Vorläufige Ergebnisse',
        'Information Only': 'Nur Informationen',
        'in': 'In',
        'm': 'M',
        'ft_in': 'ft_in',
        'ft': 'ft',
        'p': 'P',
        'cm': 'cm',
        'mm': 'mm',
        'pt': 'pt',
        'cu': 'cu',
        'sq': 'Quadrat',
        'Initial': 'Initiale',
        'Extract Pages': 'Seiten extrahieren',
        'Delete Pages After Extracting': 'Seiten nach dem Extrahieren löschen',
        'Extract Pages As Separate Files': 'Seiten als separate Dateien extrahieren',
        'Extract': 'Auszug',
        'Example: 1,3,5-12': 'Beispiel: 1,3,5-12',
        'No matches': 'Der Viewer hat die Suche im Dokument abgeschlossen.',
        'No Text Found': 'Kein Text gefunden'
        }
  }
});

// Inject required services for the toolbar, navigation, annotations, and form designer modules.
PdfViewerComponent.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields);
/** 2) Set locale="de" on the component */
export function App() {
  return (
    <div className='control-section'>
      {/* Render the PDF Viewer with the German locale */}
      <PdfViewerComponent
        id="pdfViewer"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
        locale="de"
      />
    </div>
  );
}

const root = createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

## How it works
- [locale](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#locale) sets the culture used by the viewer for all strings.
- `L10n.load({...})` registers your culture-specific string overrides at runtime.
- Missing keys fall back to `en-US`.

## Troubleshooting
- **Overrides not applied?** Ensure the culture code matches in both `locale` and `L10n.load`.
- **Some labels still English?** Add those keys to your `L10n.load` object.
- **Service issues?** Verify your `serviceUrl` endpoint.

## See also
- [Default Language](./default-language)
- [RTL Language Support](./rtl-language-support)
