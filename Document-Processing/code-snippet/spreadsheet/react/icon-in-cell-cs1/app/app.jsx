import React, { useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './data';
import { getSheet, setColumn, setRow } from '@syncfusion/ej2-spreadsheet';

function App() {
  const spreadsheetRef = useRef(null);

  // Sample data for the spreadsheet.
  const data = defaultData();

  // Manages row and column group definitions.
  const groups = useRef({
    rows: [
      { startIndx: 1, endIndx: 9, sheetIndx: 0, hidden: false },
      { startIndx: 10, endIndx: 20, sheetIndx: 0, hidden: true },
      { startIndx: 21, endIndx: 25, sheetIndx: 0, hidden: false },
    ],
    cols: [{ startIndx: 1, endIndx: 3, sheetIndx: 0, hidden: false }],
  });

  /**
   * Initializes the spreadsheet after it is created.
   */
  const handleCreated = () => {
    // Freeze the first row and column to add the group wrapper icons.
    spreadsheetRef.current?.freezePanes(1, 1);
    // Apply formatting to the header row.
    spreadsheetRef.current?.cellFormat(
      { fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' },
      'B2:G2'
    );

    // Initialize the visibility of row groups.
    groups.current.rows.forEach((group, i) => {
      if (group.hidden) {
        toggleGroupVisibility('rows', i, true);
      }
    });

    // Initialize the visibility of column groups.
    groups.current.cols.forEach((group, i) => {
      if (group.hidden) {
        toggleGroupVisibility('cols', i, true);
      }
    });
  };

  //Triggers after each action completes in spreadsheet
  const handleActionComplete = (args) => {
    // Handle delete actions for rows and columns.
    if (args.action === 'delete') {
      // Verifying the groupType using args.eventArgs.modelType to pass the corresponding group collection.
      const groupType = args.eventArgs.modelType === 'Row' ? 'rows' : 'cols';
      // Verifying if the action is not undo then deletion is performed else insertion is performed.
      if (!args.isUndo) {
        deleteGrpCollection(
          groups.current[groupType],
          args.eventArgs.startIndex,
          args.eventArgs.endIndex
        );
      } else {
        insertGrpCollection(
          groups.current[groupType],
          args.eventArgs.startIndex,
          args.eventArgs.deletedModel
        );
      }
    }

    // Handle insert actions for rows and columns.
    if (args.action === 'insert') {
      // Verifying the groupType using args.eventArgs.modelType to pass the corresponding group collection.
      const groupType = args.eventArgs.modelType === 'Row' ? 'rows' : 'cols';
      const insertAt =
        args.eventArgs.insertType === 'above' ||
        args.eventArgs.insertType === 'before'
          ? args.eventArgs.index
          : args.eventArgs.index - 1;
      // Verifying if the action is not undo then insertion is performed else deletion is performed.
      if (!args.isUndo) {
        insertGrpCollection(
          groups.current[groupType],
          insertAt,
          args.eventArgs.model
        );
      } else {
        deleteGrpCollection(
          groups.current[groupType],
          args.eventArgs.index,
          args.eventArgs.index + args.eventArgs.model.length - 1
        );
      }
    }
  };

  // Updates group indices after rows or columns are inserted.
  const insertGrpCollection = (grpCollection, indx, model) => {
    const insertLength = model.length;
    let targetGroupIndex = -1;

    // Find which group the insertion occurred in.
    for (let i = 0; i < grpCollection.length; i++) {
      const group = grpCollection[i];
      if (
        (indx >= group.startIndx && indx <= group.endIndx) ||
        indx === group.endIndx + 1
      ) {
        targetGroupIndex = i;
        break;
      }
    }

    if (targetGroupIndex === -1) return;

    // Expand the affected group.
    grpCollection[targetGroupIndex].endIndx += insertLength;

    // Shift subsequent groups.
    for (let i = targetGroupIndex + 1; i < grpCollection.length; i++) {
      grpCollection[i].startIndx += insertLength;
      grpCollection[i].endIndx += insertLength;
    }
  };

  /**
   * Updates group indices after rows or columns are deleted.
   */
  const deleteGrpCollection = (grpCollection, startIndx, endIndx) => {
    let startGroupIndex = -1;
    let endGroupIndex = -1;

    // Find which group(s) the deletion occurred in.
    for (let i = 0; i < grpCollection.length; i++) {
      const group = grpCollection[i];
      if (startIndx >= group.startIndx && startIndx <= group.endIndx)
        startGroupIndex = i;
      if (endIndx >= group.startIndx && endIndx <= group.endIndx)
        endGroupIndex = i;
      if (startGroupIndex !== -1 && endGroupIndex !== -1) break;
    }

    if (startGroupIndex === -1) return;

    const deletedCount = endIndx - startIndx + 1;

    // Adjust group boundaries based on deletion.
    if (startGroupIndex === endGroupIndex) {
      // Deletion within a single group.
      grpCollection[startGroupIndex].endIndx -= deletedCount;
      for (let i = startGroupIndex + 1; i < grpCollection.length; i++) {
        grpCollection[i].startIndx -= deletedCount;
        grpCollection[i].endIndx -= deletedCount;
      }
    } else {
      // Deletion spans multiple groups.
      grpCollection[startGroupIndex].endIndx = startIndx - 1;
      if (endGroupIndex !== -1) {
        const endGroup = grpCollection[startGroupIndex + 1];
        endGroup.startIndx = startIndx;
        endGroup.endIndx -= deletedCount;
      }
      for (let i = startGroupIndex + 2; i < grpCollection.length; i++) {
        grpCollection[i].startIndx -= deletedCount;
        grpCollection[i].endIndx -= deletedCount;
      }
    }
  };

  /**
   * Renders group expand/collapse icons in the header row/column.
   */
  const handleBeforeCellRender = (args) => {
    if (args.rowIndex !== undefined) {
      // Render row group icons in the first column.
      if (args.colIndex === 0) {
        groups.current.rows.forEach((group, i) => {
          if (group.startIndx === args.rowIndex) {
            const wrapperDiv = createGroupWrapper('rows', i, group.hidden);
            args.element.insertBefore(wrapperDiv, args.element.firstChild);
          }
        });
      }
      // Render column group icons in the first row.
      else if (args.rowIndex === 0) {
        groups.current.cols.forEach((group, i) => {
          if (group.startIndx === args.colIndex) {
            const wrapperDiv = createGroupWrapper('cols', i, group.hidden);
            args.element.insertBefore(wrapperDiv, args.element.firstChild);
          }
        });
      }
    }
  };

  /**
   * Toggles the visibility of a specified row or column group.
   */
  const toggleGroupVisibility = (groupType, groupIndex, fromCreatedEvent) => {
    const group = groups.current[groupType][groupIndex];
    if (!fromCreatedEvent) {
      group.hidden = !group.hidden;
    }

    const sheet = getSheet(spreadsheetRef.current, group.sheetIndx);
    // Hide or show the rows/columns within the group.
    for (let i = group.startIndx + 1; i <= group.endIndx; i++) {
      if (groupType === 'rows') {
        setRow(sheet, i, { hidden: group.hidden });
      } else {
        setColumn(sheet, i, { hidden: group.hidden });
      }
    }
  };

  // To create a group wrapper icon.
  const createGroupWrapper = (groupType, groupIndex, isHidden) => {
    const wrapperDiv = document.createElement('div');
    wrapperDiv.className = 'e-custom-wrapper';

    const iconSpan = document.createElement('span');
    iconSpan.className = `e-icons ${
      isHidden ? 'e-plus' : 'e-horizontal-line'
    } e-custom-icon`;

    wrapperDiv.appendChild(iconSpan);
    wrapperDiv.addEventListener('click', () => {
      if (spreadsheetRef.current) {
        toggleGroupVisibility(groupType, groupIndex, false);
        spreadsheetRef.current.resize(); // Ensure the UI updates correctly.
      }
    });

    return wrapperDiv;
  };

  return (
    <SpreadsheetComponent
      ref={(s) => {
        spreadsheetRef.current = s;
      }}
      openUrl="https://services.syncfusion.com/js/production/api/spreadsheet/open"
      saveUrl="https://services.syncfusion.com/js/production/api/spreadsheet/save"
      sheets={[{ ranges: [{ dataSource: data, startCell: 'B2' }] }]}
      created={handleCreated}
      actionComplete={handleActionComplete}
      beforeCellRender={handleBeforeCellRender}
    />
  );
}

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);