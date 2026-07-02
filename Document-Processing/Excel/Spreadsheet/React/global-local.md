---
layout: post
title: Global local in React Spreadsheet component | Syncfusion
description: Learn here all about Global local in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Global local 
platform: document-processing
documentation: ug
---

# Global local in React Spreadsheet component

## Localization

The [`Localization`](https://helpej2.syncfusion.com/react/documentation/common/globalization/localization) library allows you to localize the default text content of the Spreadsheet. The Spreadsheet has static text on some features (cell formatting, Merge, Data validation, etc.) that can be changed to other cultures (Arabic, Deutsch, French, etc.) by defining the
[`locale`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#locale) value and translation object.

The following list of properties and their values are used in the Spreadsheet.

Locale keywords |Text
-----|-----
`Cut` | Cut
`Copy` | Copy
`Paste` | Paste
`PasteSpecial` | Paste Special
`All` | All
`Values` | Values
`Formats` | Formats
`Font` | Font
`FontSize` | Font Size
`Bold` | Bold
`Italic` | Italic
`Underline` | Underline
`Strikethrough` | Strikethrough
`TextColor` | Text Color
`FillColor` | Fill Color
`HorizontalAlignment` | Horizontal Alignment
`AlignLeft` | Align Left
`AlignCenter` | Center
`AlignRight` | Align Right
`VerticalAlignment` | Vertical Alignment
`AlignTop` | Align Top
`AlignMiddle` | Align Middle
`AlignBottom` | Align Bottom
`InsertFunction` | Insert Function
`Insert` | Insert
`Delete` | Delete
`Rename` | Rename
`Hide` | Hide
`Unhide` | Unhide
`NameBox` | Name Box
`ShowHeaders` | Show Headers
`HideHeaders` | Hide Headers
`ShowGridLines` | Show Gridlines
`HideGridLines` | Hide Gridlines
`AddSheet` | Add Sheet
`ListAllSheets` | List All Sheets
`FullScreen` | Full Screen
`CollapseToolbar` | Collapse Toolbar
`ExpandToolbar` | Expand Toolbar
`CollapseFormulaBar` | Collapse Formula Bar
`ExpandFormulaBar` | Expand Formula Bar
`File` | File
`Home` | Home
`Formulas` | Formulas
`View` | View
`New` | New
`Open` | Open
`SaveAs` | Save As
`ExcelXlsx` | Microsoft Excel
`ExcelXls` | Microsoft Excel 97-2003
`CSV` | Comma-separated values
`FormulaBar` | Formula Bar
`Ok` | Ok
`Close` | Close
`Cancel` | Cancel
`Apply` | Apply
`MoreColors` | More Colors
`StandardColors` | Standard Colors
`General` | General
`Number` | Number
`Currency` | Currency
`Accounting` | Accounting
`ShortDate` | Short Date
`LongDate` | Long Date
`Time` | Time
`Percentage` | Percentage
`Fraction` | Fraction
`Scientific` | Scientific
`Text` | Text
`NumberFormat` | Number Format
`MobileFormulaBarPlaceHolder` | Enter value or Formula
`PasteAlert` | You can't paste it here because the copy area and paste area aren't in the same size. Please try pasting in a different range.
`DestroyAlert` | Are you sure you want to destroy the current workbook without saving and create a new workbook?
`SheetRenameInvalidAlert` | Sheet name contains invalid character.
`SheetRenameEmptyAlert` | Sheet name cannot be empty.
`SheetRenameAlreadyExistsAlert` | Sheet name already exists. Please enter another name.
`DeleteSheetAlert` | Are you sure you want to delete this sheet?
`DeleteSingleLastSheetAlert` | A Workbook must contain at least one visible worksheet.
`PickACategory` | Pick a category
`Description` | Description
`UnsupportedFile` | Unsupported File
`InvalidUrl` | Invalid Url
`SUM` | Adds a series of numbers and/or cells.
`SUMIF` | Adds the cells based on the specified condition.
`SUMIFS` | Adds the cells based on the specified conditions.
`ABS` | Returns the value of a number without its sign.
`RAND` | Returns a random number between 0 and 1.
`RANDBETWEEN` | Returns a random integer based on the specified values.
`FLOOR` | Rounds a number down to the nearest multiple of a given factor.
`CEILING` | Rounds a number up to the nearest multiple of a given factor.
`PRODUCT` | Multiplies a series of numbers and/or cells.
`AVERAGE` | Calculates average for the series of numbers and/or cells excluding text.
`AVERAGEIF` | Calculates average for the cells based on the specified criterion.
`AVERAGEIFS` | Calculates average for the cells based on the specified conditions.
`AVERAGEA` | Calculates the average for the cells evaluating TRUE as 1 text and FALSE as 0.
`COUNT` | Counts the cells that contain numeric values in a range.
`COUNTIF` | Counts the cells based on the specified condition.
`COUNTIFS` | Counts the cells based on specified conditions.
`COUNTA` | Counts the cells that contain values in a range.
`MIN` | Returns the smallest number of the given arguments.
`MAX` | Returns the largest number of the given arguments.
`DATE` | Returns the date based on the given year, month, and day.
`DAY` | Returns the day from the given date.
`DAYS` | Returns the number of days between two dates.
`IF` | Returns value based on the given expression.
`IFS` | Returns value based on the given multiple expressions.
`AND` | Returns TRUE if all the arguments are TRUE otherwise returns FALSE.
`OR` | Returns TRUE if any of the arguments are TRUE otherwise returns FALSE.
`IFERROR` | Returns value if no error found else it will return specified value.
`CHOOSE` | Returns a value from the list of values based on the index number.
`INDEX` | Returns the value of the cell in a given range based on row and column number.
`FIND` | Returns the position of a string within another string which is case sensitive.
`CONCATENATE` | Combines two or more strings together.
`CONCAT` | Concatenates a list or a range of text strings.
`SUBTOTAL` | Returns subtotal for a range using the given function number.
`RADIANS` | Converts degrees into radians.
`MATCH` | Returns the relative position of a specified value in the given range.
`DefineNameExists` | This name already exists try a different name.
`CircularReference` | When a formula refers to one or more circular references this may result in an incorrect calculation.
`ShowRowsWhere` | Show rows where |
`CustomFilterDatePlaceHolder` | Choose a date
`CustomFilterPlaceHolder` | Enter the value
`CustomFilter` | Custom Filter
`Between` | Between
`MatchCase` | Match Case
`DateTimeFilter` | DateTime Filters
`Undo` | Undo
`Redo` | Redo
`DateFilter` | Date Filters
`TextFilter` | Text Filters
`NumberFilter` | Number Filters
`ClearFilter` | Clear Filter
`NoResult` | No Matches Found
`FilterFalse` | False
`FilterTrue` | True
`Blanks` | Blanks
`SelectAll` | Select All
`GreaterThanOrEqual` | Greater Than Or Equal
`GreaterThan` | Greater Than
`LessThanOrEqual` | Less Than Or Equal
`LessThan` | Less Than
`NotEqual` | Not Equal
`Equal` | Equal
`Contains` | Contains
`EndsWith` | Ends With
`StartsWith` | Starts With
`ClearButton` | Clear
`FilterButton` | Filter
`CancelButton` | Cancel
`OKButton` | OK
`Search` | Search
`Link` | Link
`Hyperlink` | Hyperlink
`EditHyperlink` | Edit Hyperlink
`OpenHyperlink` | Open Hyperlink
`RemoveHyperlink` | Remove Hyperlink
`InsertLink` | Insert Link
`EditLink` | Edit Link
`WebPage` | WEB PAGE
`ThisDocument` | THIS DOCUMENT
`DisplayText` | Display Text
`Url` | URL
`CellReference` | Cell Reference
`Sheet` | Sheet
`DefinedNames` | Defined Names
`EnterTheTextToDisplay` | Enter the text to display
`EnterTheUrl` | Enter the URL
`ProtectSheet` | Protect Sheet
`UnprotectSheet` | Unprotect Sheet
`SelectCells` | Select cells
`FormatCells` | Format cells
`FormatRows` | Format rows
`Format` Columns | Format columns
`InsertLinks` | Insert links
`ProtectContent` | Protect the contents of locked cells
`ProtectAllowUser` | Allow all users of this worksheet to |
`EditAlert` | The cell you're trying to change is protected. To make a change, unprotect the sheet.
`FindReplaceTooltip` | Find & Replace
`InsertingEmptyValue` | Reference value is not valid.
`ByRow` |  By Row
`ByColumn` | By Column
`MatchExactCellElements` | Match Exact Cell Contents
`EntercellAddress` | Enter Cell Address
`FindAndReplace` | Find and Replace
`ReplaceAllEnd` |  matches replaced with.
`FindNextBtn` | Find Next
`FindPreviousBtn` | Find Previous
`ReplaceBtn` | Replace
`ReplaceAllBtn` | Replace All
`GotoHeader` | Go To
`GotoSpecialHeader` | Go To Special
`SearchWithin` | Search within
`SearchBy` | Search by
`Reference` | Reference
`Workbook` | Workbook
`NoElements` | We couldn’t find what you were looking for.
`FindWhat` | Find what
`ReplaceWith` | Replace with
`EnterValue` | Enter Value
`DefineNameInValid` | The name that you entered is not valid.
`FindValue` | Find Value
`ReplaceValue` | Replace Value
`DataValidation` | Data Validation
`CLEARALL` | CLEAR ALL
`APPLY` | APPLY
`CellRange` | Cell Range
`Allow` | Allow
`Data` | Data
`Minimum` | Minimum
`Maximum` | Maximum
`IgnoreBlank` | Ignore blank
`WholeNumber` | Whole Number
`Decimal` | Decimal
`Date` | Date
`TextLength` | Text Length
`List` | List
`NotBetween` | Not between
`EqualTo` | Equal to
`NotEqualTo` | Not equal to
`Greaterthan` | Greater than
`Lessthan` | Less than
`GreaterThanOrEqaulTo` | Greater than or eqaul to
`LessThanOrEqualTo` | Less than or equal to
`InCellDropDown` | In-cell-dropdown
`Sources` | Sources
`Value` | Value
`Retry` | Retry
`DialogError` | The list source must be a reference to a single row or column.
`ValidationError` | This value doesn't match the data validation restrictions defined for the cell.
`HideRow` | Hide Row
`HideRows` | Hide Rows
`UnHideRows` | UnHide Rows
`HideColumn` | Hide Column
`HideColumns` | Hide Columns
`UnHideColumns` | UnHide Columns
`InsertRow` | Insert Row
`InsertRows` | Insert Rows
`InsertColumn` | Insert Column
`InsertColumns` | Insert Columns
`DeleteRow` | Delete Row
`DeleteRows` | Delete Rows
`DeleteColumn` | Delete Column
`DeleteColumns` | Delete Columns
`Borders` | Borders
`TopBorders` | Top Borders
`LeftBorders` | Left Borders
`RightBorders` | Right Borders
`BottomBorders` | Bottom Borders
`AllBorders` | All Borders
`HorizontalBorders` | Horizontal Borders
`VerticalBorders` | Vertical Borders
`OutsideBorders` | Outside Borders
`InsideBorders` | Inside Borders
`NoBorders` | No Borders
`BorderColor` | Border Color
`BorderStyle` | Border Style
`INTERCEPT` | Calculates the point of the Y-intercept line via linear regression.
`SLOPE` | Returns the slope of the line from linear regression of the data points.
`FreezePanes` | Freeze Panes
`FreezeRows` | Freeze Rows
`FreezeColumns` | Freeze Columns
`UnfreezePanes` | Unfreeze Panes
`UnfreezeRows` | Unfreeze Rows
`UnfreezeColumns` | Unfreeze Columns
`MergeCells` | Merge Cells
`MergeAll` | Merge All
`MergeHorizontally` | Merge Horizontally
`MergeVertically` | Merge Vertically
`Unmerge` | Unmerge
`UnmergeCells` | Unmerge Cells
`SortAscending` | Ascending
`SortDescending` | Descending
`CustomSort` | Custom Sort
`ClearAllFilter` | Clear
`ReapplyFilter` | Reapply
`Clear` | Clear
`ClearContents` | Clear Contents
`ClearAll` | Clear All
`ClearFormats` | Clear Formats
`ClearHyperlinks` | Clear Hyperlinks
`Image` | Image
`AddColumn` | Add Column
`SortBy` | Sort by
`ThenBy` | Then by
`Chart` | Chart
`Column` | Column
`Bar` | Bar
`Area` | Area
`Pie` | Pie
`Doughnut` | Doughnut
`PieAndDoughnut` | Pie/Doughnut
`Line` | Line
`Radar` | Radar
`Scatter` | Scatter
`ChartDesign` | Chart Design
`ClusteredColumn` | Clustered Column
`StackedColumn` | Stacked Column
`StackedColumn100` | 100% Stacked Column
`ClusteredBar` | Clustered Bar
`StackedBar` | Stacked Bar
`StackedBar100` | 100% Stacked Bar
`StackedArea` | Stacked Area
`StackedArea100` | 100% Stacked Area
`StackedLine` | Stacked Line
`StackedLine100` | 100% Stacked Line
`AddChartElement` | Add Chart Element
`Axes` | Axes
`AxisTitle` | Axis Title
`ChartTitle` | Chart Title
`DataLabels` | Data Labels
`Gridlines` | Gridlines
`Legends` | Legends
`PrimaryHorizontal` | Primary Horizontal
`PrimaryVertical` | Primary Vertical
`None` | None
`AboveChart` | Above Chart
`Center` | Center
`InsideEnd` | Inside End
`InsideBase` | Inside Base
`OutsideEnd` | OutSide End
`PrimaryMajorHorizontal` | Primary Major Horizontal
`PrimaryMajorVertical` | Primary Major Vertical
`PrimaryMinorHorizontal` | Primary Minor Horizontal
`PrimaryMinorVertical` | Primary Minor Vertical
`Right` | Right
`Left` | Left
`Bottom` | Bottom
`Top` | Top
`SwitchRowColumn` | Switch Row/Column
`ChartTheme` | Chart Theme
`ChartType` | Chart Type
`Material` | Material
`Fabric` | Fabric
`Bootstrap` | Bootstrap
`HighContrastLight` | HighContrastLight
`MaterialDark` | MaterialDark
`FabricDark` | FabricDark
`HighContrast` | HighContrast
`BootstrapDark` | BootstrapDark
`Bootstrap4` | Bootstrap4
`VerticalAxisTitle` | Vertical Axis Title
`HorizontalAxisTitle` | Horizontal Axis Title
`EnterTitle` | Enter Title
`ProtectWorkbook` | Protect Workbook
`Password` | Password (optional) |
`unProtectPassword` | Password
`EnterThePassword` | Enter the password
`ConfirmPassword` | Confirm Password
`EnterTheConfirmPassword` | Re-enter your password
`PasswordAlert` | Confirmation password is not identical
`UnProtectWorkbook` | Unprotect Workbook
`UnProtectPasswordAlert` | The password you supplied is not correct.
`InCorrectPassword` | Unable to open the file or worksheet with the given password.
`PasswordAlertMsg` | Please enter the password
`ConfirmPasswordAlertMsg` | Please enter the confirm password
`IsProtected` | is protected

### Loading translations

To load translation object in an application, use [`load`](https://helpej2.syncfusion.com/react/documentation/common/globalization/internationalization#loading-culture-data) function of the [`L10n`](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization) class.

The following example demonstrates the Spreadsheet in `French` culture. In the below sample we have translated the ribbon tab names and Home tab content (clipboard, cell style).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/local-data-binding-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/local-data-binding-cs2/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/local-data-binding-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/local-data-binding-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/local-data-binding-cs2" %}

## Internationalization

The Internationalization library is used to globalize number, date, and time values in the spreadsheet component.

The following example demonstrates the Spreadsheet in French [ `fr-CH`] culture. In the below sample we have globalized the Date(Date column), Time(Time column), and Currency(Amount column) formats.

```ts
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { L10n, loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import * as cagregorian from './ca-gregorian.json';
import * as currencies from './currencies.json';
import * as numberingSystems from './numberingSystems.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';
import { data } from './datasource';
loadCldr(currencies, cagregorian, numbers, timeZoneNames, numberingSystems);
setCulture('fr-CH');
setCurrencyCode('EUR');
L10n.load({
  'fr-CH': {
        'spreadsheet': {
            "InsertingEmptyValue": "La valeur de référence n'est pas valide.",
            "FindValue": "Trouver la valeur",
            "ReplaceValue": "Remplacer la valeur",
            "FindReplaceTooltip": "Rechercher et remplacer",
            "ByRow": "Par lignes",
            "ByColumn": "Par colonnes",
            "MatchExactCellElements": "Correspondance exacte du contenu de la cellule",
            "EnterCellAddress": "Entrez l'adresse de la cellule",
            "FindAndReplace": "Trouver et remplacer",
            "ReplaceAllEnd": " correspondances remplacées par ",
            "FindNextBtn": "Rechercher suivant",
            "FindPreviousBtn": "Rechercher précédent",
            "ReplaceBtn": "Remplacer",
            "ReplaceAllBtn": "Tout remplacer",
            "GotoHeader": "Aller à",
            "Sheet": "Feuille",
            "SearchWithin": "Rechercher dans",
            "SearchBy": "Rechercher par",
            "Reference": "Référence",
            "Workbook": "Cahier",
            "NoElements": "Nous n'avons pas trouvé ce que vous cherchiez.",
            "FindWhat": "Trouver quoi",
            "ReplaceWith": "Remplacer par",
            "FileName": "Nom de fichier",
            "ExtendValidation": "La sélection contient certaines cellules sans validation des données. Voulez-vous étendre la validation à ces cellules ?",
            "Yes": "Oui",
            "No": "Non",
            "PROPER": "Convertit un texte en cas approprié ; première lettre en majuscule et les autres lettres en minuscule.",
            "Cut": "Couper",
            "Copy": "Copier",
            "Paste": "Coller",
            "PasteSpecial": "Collage spécial",
            "All": "Tous",
            "MathTrig": "Mathématiques et trigonométriques",
            "Statistical": "Statistique",
            "Logical": "Logique",
            "LookupReference": "Recherche et référence",
            "Information": "Informations",
            "DateTime": "Date et heure",
            "Values": "Valeurs",
            "Formats": "Formats",
            "Font": "Police de caractère",
            "FontSize": "Taille de police",
            "Bold": "Audacieux",
            "Italic": "Italique",
            "Underline": "Souligner",
            "Strikethrough": "Barré",
            "TextColor": "Couleur du texte",
            "FillColor": "Couleur de remplissage",
            "HorizontalAlignment": "Alignement horizontal",
            "AlignLeft": "Aligner à gauche",
            "AlignCenter": "Aligner au centre",
            "AlignRight": "Aligner à droite",
            "VerticalAlignment": "Alignement vertical",
            "AlignTop": "Aligner en haut",
            "AlignMiddle": "Aligner au milieu",
            "AlignBottom": "Aligner en bas",
            "MergeCells": "Fusionner les cellules",
            "MergeAll": "Tout fusionner",
            "MergeHorizontally": "Fusionner horizontalement",
            "MergeVertically": "Fusionner verticalement",
            "Unmerge": "Annuler la fusion",
            "UnmergeCells": "Annuler la fusion des cellules",
            "SelectMergeType": "Sélectionner le type de fusion",
            "MergeCellsAlert": "La fusion de cellules ne conservera que la valeur la plus à gauche (Uppermost). Fusionner quand même ?",
            "PasteMergeAlert": "Impossible de faire cela sur une cellule fusionnée.",
            "Borders": "Bordures",
            "TopBorders": "Bordures supérieures",
            "LeftBorders": "Bordures de gauche",
            "RightBorders": "Bordures à droite",
            "BottomBorders": "Bordures inférieures",
            "AllBorders": "Toutes les bordures",
            "HorizontalBorders": "Bordures horizontales",
            "VerticalBorders": "Bordures verticales",
            "OutsideBorders": "Bordures extérieures",
            "InsideBorders": "Bordures intérieures",
            "NoBorders": "Pas de bordures",
            "BorderColor": "Couleur des bordures",
            "BorderStyle": "Style des bordures",
            "InsertFunction": "Insérer une fonction",
            "Insert": "Insérer",
            "Delete": "Supprimer",
            "DuplicateSheet": "Dupliquer",
            "MoveRight": "Déplacer à droite",
            "MoveLeft": "Déplacer à gauche",
            "Rename": "Renommer",
            "Hide": "Cacher",
            "NameBox": "Boîte de nom",
            "ShowHeaders": "Afficher les en-têtes",
            "HideHeaders": "Masquer les en-têtes",
            "ShowGridLines": "Afficher les quadrillages",
            "HideGridLines": "Masquer les quadrillages",
            "FreezePanes": "Figer les volets",
            "FreezeRows": "Figer les lignes",
            "FreezeColumns": "Figer les colonnes",
            "UnfreezePanes": "Dégeler les volets",
            "UnfreezeRows": "Dégeler les lignes",
            "UnfreezeColumns": "Dégeler les colonnes",
            "AddSheet": "Ajouter une feuille",
            "ListAllSheets": "Répertorier toutes les feuilles",
            "CollapseToolbar": "Réduire la barre d'outils",
            "ExpandToolbar": "Développer la barre d'outils",
            "CollapseFormulaBar": "Réduire la barre de formule",
            "ExpandFormulaBar": "Agrandir la barre de formule",
            "File": "Fichier",
            "Home": "Domicile",
            "Formulas": "Formules",
            "View": "Vue",
            "New": "Nouveau",
            "Open": "Ouvrir",
            "SaveAs": "Enregistrer sous",
            "ExcelXlsx": "Microsoft Excel",
            "ExcelXls": "Microsoft Excel 97-2003",
            "CSV": "Valeurs séparées par des virgules",
            "FormulaBar": "Barre de formule",
            "Sort": "Trier",
            "SortAscending": "Ascendant",
            "SortDescending": "Décroissant",
            "CustomSort": "Tri personnalisé",
            "AddColumn": "Ajouter une colonne",
            "ContainsHeader": "Les données contiennent un en-tête",
            "CaseSensitive": "Sensible aux majuscules et minuscules",
            "SortBy": "Trier par",
            "ThenBy": "Puis par",
            "SelectAColumn": "Sélectionner une colonne",
            "SortEmptyFieldError": "Tous les critères de tri doivent avoir une colonne spécifiée. Vérifiez les critères de tri sélectionnés et réessayez.",
            "SortDuplicateFieldError": " est trié par valeurs plus d'une fois. Supprimez les critères de tri en double et réessayez.",
            "SortOutOfRangeError": "Sélectionnez une cellule ou une plage à l'intérieur de la plage utilisée et réessayez.",
            "MultiRangeSortError": "Cela ne peut pas être fait sur une sélection de plages multiples. Sélectionnez une seule plage et réessayez.",
            "HideRow": "Masquer la ligne",
            "HideRows": "Masquer les lignes",
            "UnhideRows": "Afficher les lignes",
            "HideColumn": "Masquer la colonne",
            "HideColumns": "Masquer les colonnes",
            "UnhideColumns": "Afficher les colonnes",
            "InsertRow": "Insérer une ligne",
            "InsertRows": "Insérer des lignes",
            "Above": "Au-dessus",
            "Below": "En-dessous",
            "InsertColumn": "Insérer une colonne",
            "InsertColumns": "Insérer des colonnes",
            "Before": "Avant",
            "After": "Après",
            "DeleteRow": "Supprimer la ligne",
            "DeleteRows": "Supprimer les lignes",
            "DeleteColumn": "Supprimer la colonne",
            "DeleteColumns": "Supprimer les colonnes",
            "Ok": "OK",
            "Close": "Fermer",
            "MoreOptions": "Plus d'options",
            "Cancel": "Annuler",
            "Apply": "Appliquer",
            "MoreColors": "Plus de couleurs",
            "StandardColors": "Couleurs standard",
            "General": "Général",
            "Number": "Nombre",
            "Currency": "Devise",
            "Accounting": "Comptabilité",
            "ShortDate": "Date courte",
            "LongDate": "Date longue",
            "Time": "Temps",
            "Percentage": "Pourcentage",
            "Fraction": "Fraction",
            "Scientific": "Scientifique",
            "Text": "Texte",
            "NumberFormat": "Format de nombre",
            "MobileFormulaBarPlaceHolder": "Entrez une valeur ou une formule",
            "PasteAlert": "Vous ne pouvez pas coller ceci ici, car la zone de copie et la zone de collage ne sont pas de la même taille. Veuillez essayer de coller dans une autre plage.",
            "DestroyAlert": "Voulez-vous vraiment détruire le classeur actuel sans enregistrer et créer un nouveau classeur ?",
            "SheetRenameInvalidAlert": "Le nom de la feuille contient un caractère non valide.",
            "SheetRenameEmptyAlert": "Le nom de la feuille ne peut pas être vide.",
            "SheetRenameAlreadyExistsAlert": "Le nom de la feuille existe déjà. Veuillez entrer un autre nom.",
            "DeleteSheetAlert": "Êtes-vous sûr de vouloir supprimer cette feuille ?",
            "DeleteSingleLastSheetAlert": "Un classeur doit contenir au moins une feuille de calcul visible.",
            "PickACategory": "Choisissez une catégorie",
            "Description": "Description",
            "UnsupportedFile": "Fichier non pris en charge",
            "DataLimitExceeded": "Les données du fichier sont trop volumineuses et le traitement prendra plus de temps, voulez-vous continuer ?",
            "FileSizeLimitExceeded": "La taille du fichier est trop grande et le traitement prendra plus de temps, voulez-vous continuer ?",
            "InvalidUrl": "URL invalide",
            "SUM": "Ajoute une série de nombres et/ou de cellules.",
            "SUMIF": "Ajoute les cellules en fonction de la condition spécifiée.",
            "SUMIFS": "Ajoute les cellules en fonction des conditions spécifiées.",
            "ABS": "Renvoie la valeur d'un nombre sans son signe.",
            "RAND": "Renvoie un nombre aléatoire entre 0 et 1.",
            "RANDBETWEEN": "Renvoie un entier aléatoire basé sur les valeurs spécifiées.",
            "FLOOR": "Arrondit un nombre au multiple inférieur le plus proche d'un facteur donné.",
            "CEILING": "Arrondit un nombre au multiple le plus proche d'un facteur donné.",
            "PRODUCT": "Multiplie une série de nombres et/ou de cellules.",
            "AVERAGE": "Calcule la moyenne de la série de nombres et/ou de cellules excluant le texte.",
            "AVERAGEIF": "Calcule la moyenne des cellules en fonction du critère spécifié.",
            "AVERAGEIFS": "Calcule la moyenne des cellules en fonction des conditions spécifiées.",
            "AVERAGEA": "Calcule la moyenne des cellules évaluant VRAI comme 1, texte et FAUX comme 0.",
            "COUNT": "Compte les cellules qui contiennent des valeurs numériques dans une plage.",
            "COUNTIF": "Compte les cellules en fonction de la condition spécifiée.",
            "COUNTIFS": "Compte les cellules en fonction des conditions spécifiées.",
            "COUNTA": "Compte les cellules qui contiennent des valeurs dans une plage.",
            "MIN": "Renvoie le plus petit nombre d'arguments donnés.",
            "MAX": "Renvoie le plus grand nombre d'arguments donnés.",
            "DATE": "Renvoie la date en fonction de l'année, du mois et du jour donnés.",
            "DAY": "Renvoie le jour à partir de la date donnée.",
            "DAYS": "Renvoie le nombre de jours entre deux dates.",
            "IF": "Renvoie une valeur basée sur l'expression donnée.",
            "IFS": "Renvoie une valeur basée sur les multiples expressions données.",
            "CalculateAND": "Renvoie TRUE si tous les arguments sont TRUE, sinon renvoie FALSE.",
            "CalculateOR": "Renvoie TRUE si l'un des arguments est TRUE, sinon renvoie FALSE.",
            "IFERROR": "Renvoie une valeur si aucune erreur n'est trouvée sinon retourne la valeur spécifiée.",
            "CHOOSE": "Renvoie une valeur à partir d'une liste de valeurs, basée sur le numéro d'index.",
            "INDEX": "Renvoie une valeur de la cellule dans une plage donnée en fonction du numéro de ligne et de colonne.",
            "FIND": "Renvoie la position d'une chaîne dans une autre chaîne, qui est sensible à la casse.",
            "CONCATENATE": "Combine deux ou plusieurs chaînes ensemble.",
            "CONCAT": "Concatène une liste ou une plage de chaînes de texte.",
            "SUBTOTAL": "Renvoie le sous-total pour une plage à l'aide du numéro de fonction donné.",
            "RADIANS": "Convertit des degrés en radians.",
            "MATCH": "Renvoie la position relative d'une valeur spécifiée dans une plage donnée.",
            "SLOPE": "Renvoie la pente de la ligne à partir de la régression linéaire des points de données.",
            "INTERCEPT": "Calcule le point de la ligne d'ordonnée à l'origine via une régression linéaire.",
            "UNIQUE": "Renvoie des valeurs uniques d'une plage ou d'un tableau.",
            "TEXT": "Convertit une valeur en texte dans le format numérique spécifié.",
            "DefineNameExists": "Ce nom existe déjà, essayez un autre nom.",
            "CircularReference": "Lorsqu'une formule fait référence à une ou plusieurs références circulaires, cela peut entraîner un calcul incorrect.",
            "SORT": "Trie une plage d'un tableau",
            "T": "Vérifie si une valeur est du texte ou non et renvoie le texte.",
            "EXACT": "Vérifie si deux chaînes de texte sont exactement identiques et renvoie TRUE ou FALSE.",
            "LEN": "Renvoie le nombre de caractères dans une chaîne donnée.",
            "MOD": "Renvoie le reste après qu'un nombre a été divisé par un diviseur.",
            "ODD": "Arrondit un nombre positif à l'entier impair le plus proche et un nombre négatif vers le bas.",
            "PI": "Renvoie la valeur de pi.",
            "COUNTBLANK": "Renvoie le nombre de cellules vides dans une plage spécifiée.",
            "EVEN": "Arrondit un nombre positif à l'entier pair le plus proche et un nombre négatif vers le bas.",
            "DECIMAL": "Convertit une représentation textuelle d'un nombre dans une base donnée en un nombre décimal.",
            "ADDRESS": "Renvoie une référence de cellule sous forme de texte, en fonction des numéros de ligne et de colonne spécifiés.",
            "CHAR": "Renvoie le caractère correspondant au nombre spécifié.",
            "CODE": "Renvoie le code numérique du premier caractère d'une chaîne donnée.",
            "DOLLAR": "Convertit un nombre en texte au format monétaire.",
            "SMALL": "Renvoie la k-ième plus petite valeur dans un tableau donné.",
            "LARGE": "Renvoie la k-ième plus grande valeur dans un tableau donné.",
            "TIME": "Convertit les heures, les minutes et les secondes en texte au format horaire.",
            "DEGREES": "Convertit les radians en degrés.",
            "FACT": "Renvoie la factorielle d'un nombre.",
            "MEDIAN": "Renvoie la médiane de l'ensemble de nombres donné.",
            "EDATE": "Renvoie une date avec un nombre donné de mois avant ou après la date spécifiée.",
            "DATEVALUE": "Convertit une chaîne de date en valeur de date.",
            "NOW": "Renvoie la date et l'heure actuelles.",
            "HOUR": "Renvoie le nombre d'heures dans une chaîne de temps spécifiée.",
            "MINUTE": "Renvoie le nombre de minutes dans une chaîne de temps spécifiée.",
            "SECOND": "Renvoie le nombre de secondes dans une chaîne de temps spécifiée.",
            "MONTH": "Renvoie le nombre de mois dans une chaîne de date spécifiée.",
            "OR": "OU ALORS",
            "AND": "ET",
            "CustomFilterDatePlaceHolder": "Choisissez une date",
            "CustomFilterPlaceHolder": "Entrez la valeur",
            "CustomFilter": "Filtre personnalisé",
            "Between": "Compris entre",
            "MatchCase": "Cas de correspondance",
            "DateTimeFilter": "Filtres DateHeure",
            "Undo": "annuler",
            "Redo": "Refaire",
            "ClearAllFilter": "Dégager",
            "ReapplyFilter": "Réappliquer",
            "DateFilter": "Filtres de dates",
            "TextFilter": "Filtres de texte",
            "NumberFilter": "Filtres numériques",
            "ClearFilter": "Effacer le filtre",
            "NoResult": "Aucun résultat",
            "FilterFalse": "Faux",
            "FilterTrue": "Vrai",
            "Blanks": "Blancs",
            "SelectAll": "Tout sélectionner",
            "GreaterThanOrEqual": "Meilleur que ou égal",
            "GreaterThan": "Plus grand que",
            "LessThanOrEqual": "Inférieur ou égal",
            "LessThan": "Moins que",
            "NotEqual": "Inégal",
            "Equal": "Égal",
            "Contains": "Contient",
            "NotContains": "Ne contient pas",
            "EndsWith": "Se termine par",
            "NotEndsWith": "Ne se termine pas par",
            "StartsWith": "Commence avec",
            "NotStartsWith": "Ne commence pas par",
            "IsEmpty": "Vide",
            "IsNotEmpty": "Pas vide",
            "ClearButton": "Dégager",
            "FilterButton": "Filtre",
            "CancelButton": "Annuler",
            "OKButton": "D'ACCORD",
            "Search": "Rechercher",
            "DataValidation": "La validation des données",
            "CellRange": "Plage de cellules",
            "Allow": "Permettre",
            "Data": "Données",
            "Minimum": "Le minimum",
            "Maximum": "Maximum",
            "IgnoreBlank": "Ignorer le blanc",
            "WholeNumber": "Nombre entier",
            "Decimal": "Décimal",
            "Date": "Date",
            "TextLength": "Longueur du texte",
            "List": "Liste",
            "NotBetween": "Pas entre",
            "EqualTo": "Égal à",
            "NotEqualTo": "Pas égal à",
            "GreaterThanOrEqualTo": "Plus grand ou égal à",
            "LessThanOrEqualTo": "Inférieur ou égal à",
            "InCellDropDown": "Liste déroulante dans la cellule",
            "Sources": "Sources",
            "Value": "Évaluer",
            "Formula": "Formule",
            "Retry": "Retenter",
            "DialogError": "La source de la liste doit être une référence à une seule ligne ou colonne.",
            "NamedRangeError": "Une plage nommée que vous avez spécifiée ne peut être trouvée.",
            "MinMaxError": "Le maximum doit être supérieur ou égal au minimum.",
            "InvalidNumberError": "Veuillez entrer un numéro valide.",
            "InvalidFormula": "Veuillez entrer une formule valide.",
            "Spreadsheet": "Tableur",
            "MoreValidation": "Cette sélection contient plus d'une validation.",
            "FileNameError": "Un nom de fichier ne peut pas contenir de caractères tels que \\ / : * ? \" < > [ ] |",
            "ValidationError": "Cette valeur ne correspond pas aux restrictions de validation des données définies pour la cellule.",
            "ListLengthError": "Les valeurs de la liste ne permettent que jusqu'à 256 caractères",
            "ProtectSheet": "Feuille de protection",
            "UnprotectSheet": "Déprotéger la feuille",
            "SelectCells": "Sélectionnez les cellules verrouillées",
            "SelectUnlockedCells": "Sélectionnez les cellules déverrouillées",
            "Save": "Sauver",
            "EmptyFileName": "Le nom du fichier ne peut pas être vide.",
            "LargeName": "Le nom est trop long.",
            "FormatCells": "Formater les cellules",
            "FormatRows": "Mettre en forme les lignes",
            "FormatColumns": "Formater les colonnes",
            "InsertLinks": "Insérer des liens",
            "ProtectContent": "Protéger le contenu des cellules verrouillées",
            "ProtectAllowUser": " Autoriser tous les utilisateurs de cette feuille de calcul à :",
            "EditAlert": "La cellule que vous essayez de modifier est protégée. Pour rendre la monnaie, déprotégez la feuille.",
            "ReadonlyAlert": "Vous essayez de modifier une cellule qui est en mode lecture seule. Pour apporter des modifications, veuillez désactiver le statut de lecture seule.",
            "ClearValidation": "Effacer la validation",
            "ISNUMBER": "Renvoie true lorsque la valeur est analysée en tant que valeur numérique.",
            "ROUND": "Arrondit un nombre à un nombre de chiffres spécifié.",
            "GEOMEAN": "Renvoie la moyenne géométrique d'un tableau ou d'une plage de données positives.",
            "POWER": "Renvoie le résultat d'un nombre élevé à la puissance",
            "LOG": "Renvoie le logarithme d'un nombre à la base que vous spécifiez.",
            "TRUNC": "Renvoie la valeur tronquée d'un nombre à un nombre spécifié de décimales.",
            "EXP": "Renvoie e élevé à la puissance du nombre donné.",
            "LOOKUP": "Recherche une valeur dans une plage à une seule ligne ou à une seule colonne, puis renvoie une valeur au même emplacement dans une plage à une seule ligne ou à une seule colonne.",
            "HLOOKUP": "Recherche la valeur dans la ligne supérieure du tableau de valeurs, puis renvoie la valeur dans la même colonne que la ligne du tableau que vous avez spécifiée.",
            "VLOOKUP": "Recherche la valeur spécifiée dans la première colonne de la plage de recherche et renvoie la valeur correspondante dans la deuxième colonne de la même ligne.",
            "NOT": "Renvoie l'inverse de l'expression logique spécifiée.",
            "EOMONTH": "Renvoie le dernier jour du mois correspondant au nombre de mois spécifié avant ou après la date de début initialement spécifiée.",
            "SQRT": "Renvoie la racine carrée d'un nombre positif.",
            "ROUNDDOWN": "Arrondissez le nombre à zéro.",
            "RSQ": "Renvoie le coefficient de corrélation quadratique du moment du produit Pearson en fonction des points de données known_y et known_x.",
            "HighlightCellsRules": "Mettre en surbrillance les règles des cellules",
            "CFEqualTo": "Égal à",
            "TextThatContains": "Texte qui contient",
            "ADateOccuring": "Une date survenant",
            "DuplicateValues": "Valeurs en double",
            "TopBottomRules": "Règles du haut/du bas",
            "Top10Items": "Top 10 des articles",
            "Top10": "Top 10",
            "Bottom10Items": "Les 10 derniers articles",
            "Bottom10": "Les 10 derniers",
            "AboveAverage": "Au dessus de la moyenne",
            "BelowAverage": "Sous la moyenne",
            "FormatCellsGreaterThan": "Mettre en forme les cellules supérieures à :",
            "FormatCellsLessThan": "Mettre en forme les cellules inférieures à :",
            "FormatCellsBetween": "Mettre en forme les cellules qui sont ENTRE :",
            "FormatCellsEqualTo": "Mettre en forme les cellules qui sont ÉGALES À :",
            "FormatCellsThatContainTheText": "Mettre en forme les cellules contenant le texte :",
            "FormatCellsThatContainADateOccurring": "Mettre en forme les cellules contenant une date :",
            "FormatCellsDuplicate": "Mettre en forme les cellules contenant :",
            "FormatCellsTop": "Formatez les cellules qui se classent dans le TOP :",
            "FormatCellsBottom": "Mettre en forme les cellules qui se classent en BAS :",
            "FormatCellsAbove": "Mettre en forme les cellules qui sont SUPÉRIEURES À LA MOYENNE :",
            "FormatCellsBelow": "Mettre en forme les cellules qui sont INFÉRIEURES À LA MOYENNE :",
            "With": "avec",
            "DataBars": "Barres de données",
            "ColorScales": "Échelles de couleurs",
            "IconSets": "Ensembles d'icônes",
            "ClearRules": "Règles claires",
            "SelectedCells": "Effacer les règles des cellules sélectionnées",
            "EntireSheet": "Effacer les règles de la feuille entière",
            "LightRedFillWithDarkRedText": "Remplissage rouge clair avec texte rouge foncé",
            "YellowFillWithDarkYellowText": "Remplissage jaune avec texte jaune foncé",
            "GreenFillWithDarkGreenText": "Remplissage vert avec texte vert foncé",
            "RedFill": "Remplissage rouge",
            "RedText": "Texte rouge",
            "Duplicate": "Dupliquer",
            "Unique": "Unique",
            "And": "et",
            "WebPage": "Page Web",
            "ThisDocument": "Ce document",
            "DisplayText": "Afficher le texte",
            "Url": "URL",
            "CellReference": "Référence de cellule",
            "DefinedNames": "Noms définis",
            "EnterTheTextToDisplay": "Entrez le texte à afficher",
            "EnterTheUrl": "Saisissez l'URL",
            "INT": "Renvoie un nombre à l'entier le plus proche.",
            "SUMPRODUCT": "Renvoie la somme du produit de plages de tableaux données.",
            "TODAY": "Renvoie la date actuelle comme valeur de date.",
            "ROUNDUP": "Arrondit un nombre à partir de zéro.",
            "Link": "Lien",
            "Hyperlink": "Lien hypertexte",
            "EditHyperlink": "Modifier le lien hypertexte",
            "OpenHyperlink": "Ouvrir le lien hypertexte",
            "RemoveHyperlink": "Supprimer le lien hypertexte",
            "InvalidHyperlinkAlert": "L'adresse de ce site n'est pas valide. Vérifie l'adresse et essaye de nouveau.",
            "InsertLink": "Insérer un lien",
            "EditLink": "Modifier le lien",
            "WrapText": "Envelopper le texte",
            "Update": "Mettre à jour",
            "SortAndFilter": "Trier et filtrer",
            "Filter": "Filtre",
            "FilterCellValue": "Filtrer par valeur de la cellule sélectionnée",
            "FilterOutOfRangeError": "Sélectionnez une cellule ou une plage à l'intérieur de la plage utilisée et réessayez.",
            "ClearFilterFrom": "Effacer le filtre de",
            "LN": "Renvoie le logarithme naturel d'un nombre.",
            "DefineNameInValid": "Le nom que vous avez saisi n'est pas valide.",
            "EmptyError": "Vous devez entrer une valeur",
            "ClearHighlight": "Effacer la surbrillance",
            "HighlightInvalidData": "Mettre en surbrillance les données non valides",
            "Clear": "Dégager",
            "ClearContents": "Effacer le contenu",
            "ClearAll": "Tout effacer",
            "ClearFormats": "Effacer les formats",
            "ClearHyperlinks": "Effacer les hyperliens",
            "Image": "Image",
            "ConditionalFormatting": "Mise en forme conditionnelle",
            "BlueDataBar": "Barre de données bleue",
            "GreenDataBar": "Barre de données verte",
            "RedDataBar": "Barre de données rouge",
            "OrangeDataBar": "Barre de données orange",
            "LightBlueDataBar": "Barre de données bleu clair",
            "PurpleDataBar": "Barre de données violette",
            "GYRColorScale": "Échelle de couleur vert - jaune - rouge",
            "RYGColorScale": "Échelle de couleurs rouge - jaune - vert",
            "GWRColorScale": "Échelle de couleur vert - blanc - rouge",
            "RWGColorScale": "Échelle de couleur rouge - blanc - vert",
            "BWRColorScale": "Échelle de couleur bleu - blanc - rouge",
            "RWBColorScale": "Échelle de couleurs rouge - blanc - bleu",
            "WRColorScale": "Échelle de couleur blanc - rouge",
            "RWColorScale": "Échelle de couleur rouge - blanc",
            "GWColorScale": "Échelle de couleur vert - blanc",
            "WGColorScale": "Échelle de couleur blanc - vert",
            "GYColorScale": "Échelle de couleur vert - jaune",
            "YGColorScale": "Échelle de couleur jaune - vert",
            "ThreeArrowsColor": "3 flèches (colorées)",
            "ThreeArrowsGray": "3 Flèches (Gris)",
            "ThreeTriangles": "3 triangles",
            "FourArrowsColor": "4 Flèches (Gris)",
            "FourArrowsGray": "4 flèches (colorées)",
            "FiveArrowsColor": "5 Flèches (Gris)",
            "FiveArrowsGray": "5 flèches (colorées)",
            "ThreeTrafficLights1": "3 feux de signalisation (sans bordure)",
            "ThreeTrafficLights2": "3 feux de circulation (cerclés)",
            "ThreeSigns": "3 signes",
            "FourTrafficLights": "4 feux de circulation",
            "RedToBlack": "Rouge à noir",
            "ThreeSymbols1": "3 symboles (encerclés)",
            "ThreeSymbols2": "3 symboles (sans cercle)",
            "ThreeFlags": "3 drapeaux",
            "ThreeStars": "3 étoiles",
            "FourRatings": "4 notes",
            "FiveQuarters": "5 trimestres",
            "FiveRatings": "5 notes",
            "FiveBoxes": "5 Boîtes",
            "Chart": "Graphique",
            "Column": "Colonne",
            "Bar": "Bar",
            "Area": "Zone",
            "Pie": "Tarte",
            "Doughnut": "Donut",
            "PieAndDoughnut": "Tarte/Beignet",
            "Line": "La ligne",
            "Radar": "Radar",
            "Scatter": "Dispersion",
            "ChartDesign": "Conception de graphique",
            "ClusteredColumn": "Colonne groupée",
            "StackedColumn": "Colonne empilée",
            "StackedColumn100": "Colonne empilée à 100 %",
            "ClusteredBar": "Barre groupée",
            "StackedBar": "Barre empilée",
            "StackedBar100": "Barre empilée à 100 %",
            "StackedArea": "Zone empilée",
            "StackedArea100": "100 % de zone empilée",
            "StackedLine": "Ligne empilée",
            "StackedLine100": "Ligne empilée à 100 %",
            "LineMarker": "Ligne avec marqueurs",
            "StackedLineMarker": "Ligne empilée avec marqueurs",
            "StackedLine100Marker": "Ligne empilée à 100 % avec marqueurs",
            "AddChartElement": "Ajouter un élément de graphique",
            "Axes": "Haches",
            "AxisTitle": "Titre de l'axe",
            "ChartTitle": "Titre du graphique",
            "DataLabels": "Étiquettes de données",
            "Gridlines": "Quadrillage",
            "Legends": "Légendes",
            "PrimaryHorizontal": "Horizontale primaire",
            "PrimaryVertical": "Verticale primaire",
            "None": "Aucun",
            "AboveChart": "Graphique ci-dessus",
            "Center": "Centre",
            "InsideEnd": "Fin intérieure",
            "InsideBase": "À l'intérieur de la base",
            "OutsideEnd": "Extrémité extérieure",
            "PrimaryMajorHorizontal": "Primaire Majeur Horizontal",
            "PrimaryMajorVertical": "Primaire Majeur Vertical",
            "PrimaryMinorHorizontal": "Primaire Mineure Horizontale",
            "PrimaryMinorVertical": "Primaire Mineure Verticale",
            "Right": "Droite",
            "Left": "Gauche",
            "Bottom": "Bas",
            "Top": "Haut",
            "SwitchRowColumn": "Changer de ligne/colonne",
            "ChartTheme": "Thème du graphique",
            "ChartType": "Type de graphique",
            "Material": "Matériau",
            "Fabric": "Tissu",
            "Bootstrap": "Amorcer",
            "HighContrastLight": "Lumière à contraste élevé",
            "MaterialDark": "Matériau foncé",
            "FabricDark": "Tissu Foncé",
            "HighContrast": "Contraste élevé",
            "BootstrapDark": "Bootstrap foncé",
            "Bootstrap4": "Bootstrap4",
            "Bootstrap5Dark": "Bootstrap5 Sombre",
            "Bootstrap5": "Bootstrap5",
            "Tailwind": "Vent arrière",
            "TailwindDark": "Vent arrière sombre",
            "Tailwind3": "Vent Arrière 3",
            "Tailwind3Dark": "Vent Arrière 3 Sombre",
            "VerticalAxisTitle": "Titre de l'axe vertical",
            "HorizontalAxisTitle": "Titre de l'axe horizontal",
            "EnterTitle": "Entrez le titre",
            "UnprotectWorksheet": "Déprotéger la feuille",
            "ReEnterPassword": "Entrez à nouveau le mot de passe pour continuer",
            "SheetPassword": "Mot de passe pour déprotéger la feuille :",
            "ProtectWorkbook": "Protéger le classeur",
            "Password": "Mot de passe (facultatif) :",
            "EnterThePassword": "Entrer le mot de passe",
            "ConfirmPassword": "Confirmez le mot de passe",
            "EnterTheConfirmPassword": "Entrez à nouveau votre mot de passe",
            "PasswordAlert": "Le mot de passe de confirmation n'est pas identique",
            "UnprotectWorkbook": "Déprotéger le classeur",
            "UnprotectPasswordAlert": "Le mot de passe que vous avez fourni n'est pas correct.",
            "IncorrectPassword": "Impossible d'ouvrir le fichier ou la feuille de calcul avec le mot de passe donné",
            "PasswordAlertMsg": "S'il vous plaît entrer le mot de passe",
            "ConfirmPasswordAlertMsg": "Veuillez entrer le mot de passe de confirmation",
            "IsProtected": "est protégé",
            "PDF": "Documents PDF",
            "AutoFillMergeAlertMsg": "Pour ce faire, toutes les cellules fusionnées doivent avoir la même taille.",
            "Fluent": "Courant",
            "FluentDark": "Courant Sombre",
            "Fluent2": "Courant 2",
            "Fluent2Dark": "Courant 2 Foncé",
            "Fluent2HighContrast": "Fluent 2 contraste élevé",
            "Custom": "Personnalisé",
            "WEEKDAY": "Renvoie le jour de la semaine correspondant à une date.",
            "FillSeries": "Remplir la série",
            "CopyCells": "Copier les cellules",
            "FillFormattingOnly": "Remplir la mise en forme uniquement",
            "FillWithoutFormatting": "Remplir sans formater",
            "CustomFormat": "Formats de nombre personnalisés",
            "CustomFormatPlaceholder": "Tapez ou sélectionnez un format personnalisé",
            "CustomFormatTypeList": "Taper",
            "CellReferenceTypoError": "Nous avons trouvé une faute de frappe dans votre référence de cellule. Voulez-vous corriger cette référence comme suit ?",
            "AddCurrentSelection": "Ajouter la sélection actuelle au filtre",
            "ExternalWorkbook": "Un fichier Excel importé contient une référence de classeur externe. Voulez-vous importer ce fichier ?",
            "Directional": "Directionnel",
            "Shapes": "Formes",
            "Indicators": "Indicateurs",
            "Ratings": "Notes",
            "InvalidFormulaError": "Nous avons constaté que vous avez saisi une formule non valide.",
            "InvalidArguments": "Nous avons constaté que vous avez saisi une formule avec des arguments non valides.",
            "EmptyExpression": "Nous avons constaté que vous aviez tapé une formule avec une expression vide.",
            "MismatchedParenthesis": "Nous avons constaté que vous avez tapé une formule avec une ou plusieurs parenthèses ouvrantes ou fermantes manquantes.",
            "ImproperFormula": "Nous avons constaté que vous avez saisi une formule incorrecte.",
            "WrongNumberOfArguments": "Nous avons constaté que vous avez saisi une formule avec un nombre incorrect d'arguments.",
            "Requires3Arguments": "Nous avons constaté que vous avez tapé une formule qui nécessite 3 arguments.",
            "MismatchedStringQuotes": "Nous avons constaté que vous aviez saisi une formule avec des guillemets incompatibles.",
            "FormulaCircularRef": "Nous avons constaté que vous aviez tapé une formule avec une référence circulaire.",
            "Comment": "Commentaire",
            "Comments": "Commentaires",
            "NewComment": "Nouveau commentaire",
            "NewReply": "Nouvelle réponse",
            "ShowComments": "Afficher les commentaires",
            "PreviousComment": "Commentaire précédent",
            "NextComment": "Commentaire suivant",
            "DeleteComment": "Supprimer le commentaire",
            "DeleteThread": "Supprimer le fil",
            "EditComment": "Modifier le commentaire",
            "CommentEditingInProgress": "L'édition est en cours",
            "AddComment": "Ajouter un commentaire",
            "Reply": "Répondre",
            "Post": "Publier un commentaire",
            "ResolveThread": "Résoudre le fil de discussion",
            "Resolved": "Résolu",
            "Reopen": "Réouvrir",
            "ThreadAction": "Plus d'actions sur le fil de discussion",
            "CommentAction": "Plus d'actions de commentaires",
            "EmptyFilterComment": "Aucun commentaire ne correspond au filtre.",
            "EmptyComment": "Il n'y a aucun commentaire dans cette fiche.",
            "Active": "Actif",
            "Notes": "Remarques",
            "AddNote": "Ajouter Une Note",
            "EditNote": "Modifier la note",
            "DeleteNote": "Supprimer la note",
            "ShowHideNote": "Afficher/Masquer la note",
            "ShowAllNotes": "Afficher toutes les notes",
            "PreviousNote": "Remarque précédente",
            "NextNote": "Remarque suivante",
            "Review": "Examen",
            "Print": "Imprimer",
            "CalcOptions": "Options de calcul",
            "CalcOptionsTip": "Choisissez de calculer les formules automatiquement ou manuellement",
            "CalcActiveSheet": "Calculer la feuille",
            "CalcWorkbook": "Calculer le classeur",
            "Automatic": "Automatique",
            "Manual": "Manuel",
            "CalcSheetTip": "Calculer la feuille active",
            "CalcWorkbookTip": "Calculer le classeur entier"
        }
    }
});

function App() {
  const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
  React.useEffect(() => {
    let spreadsheet = spreadsheetRef.current;
    if (spreadsheet) {
      //Applies cell and number formatting to specified range of the active sheet
      spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
      spreadsheet.numberFormat('$#,##0.00', 'F2:F11');
    }
  }, []);

  return (
    <SpreadsheetComponent ref={spreadsheetRef} locale='fr-CH' >
      <SheetsDirective>
        <SheetDirective>
          <RangesDirective>
            <RangeDirective dataSource={data}></RangeDirective>
          </RangesDirective>
          <ColumnsDirective>
            <ColumnDirective width={100}></ColumnDirective>
            <ColumnDirective width={110}></ColumnDirective>
            <ColumnDirective width={100}></ColumnDirective>
            <ColumnDirective width={180}></ColumnDirective>
            <ColumnDirective width={130}></ColumnDirective>
            <ColumnDirective width={130}></ColumnDirective>
          </ColumnsDirective>
        </SheetDirective>
      </SheetsDirective>
    </SpreadsheetComponent>
  );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
```

Internationalization [`sample link`](https://stackblitz.com/edit/react-5rhnwd-ujh6z5?file=index.js)

## Right to left (RTL)

RTL provides an option to switch the text direction and layout of the Spreadsheet component from right to left. It improves the user experiences and accessibility for users who use right-to-left languages (Arabic, Farsi, Urdu, etc.). To enable RTL Spreadsheet, set the [`enableRtl`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#enablertl) to true.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/internationalization-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/internationalization-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/internationalization-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/internationalization-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/internationalization-cs1" %}

## Note

You can refer to our [React Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [React Spreadsheet example](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) to knows how to present and manipulate data.

## See Also

* [Localization](https://helpej2.syncfusion.com/react/documentation/common/globalization/localization)
