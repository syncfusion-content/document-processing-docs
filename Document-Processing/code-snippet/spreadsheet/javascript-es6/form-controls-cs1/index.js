import { Workbook } from '@syncfusion/ej2-xlsx';

// Create a new workbook
const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Add a checkbox
const checkBox = sheet.addCheckBox(
  2,
  2,
  96,
  18,
  'AgreeBox',
  'I agree',
  'checked',
  'C2'
);

// Add combo box and dropdown
sheet.cell('A1').value = 'Red';
sheet.cell('A2').value = 'Green';
sheet.cell('A3').value = 'Blue';

const combo = sheet.addComboBox(2, 3, 120, 20, 'ColorCombo', 'A1:A3', 'D2');
const dropdown = sheet.addComboDropdown(5, 3, 120, 20, 'ColorDrop', 'A1:A3');
const comboEdit = sheet.addComboEditBox(8, 3, 120, 20, 'ColorEdit', 'A1:A3');

// Add option button, group box, and label
sheet.addGroupBox(2, 2, 200, 80, 'PlanGroup', 'Plan');
sheet.addOptionButton(3, 3, 100, 18, 'PlanBasic', 'Basic', 'checked', 'G2', true, true);
sheet.addOptionButton(4, 3, 100, 18, 'PlanPro', 'Pro', 'unchecked', 'G2');
sheet.addFormLabel(6, 2, 120, 18, 'PlanLabel', 'Choose a plan');

// Add button, list box, scroll bar, spin button, and edit box
sheet.addButton(2, 2, 90, 24, 'RunBtn', 'Run', 'Module1.RunReport');
sheet.addListBox(5, 2, 120, 80, 'ItemsList', 'A1:A5', 'B5');
sheet.addScrollBar(5, 5, 18, 100, 'QtyScroll', 'C5', 0, 0, 100, 1, 10, false);
sheet.addSpinButton(5, 7, 18, 24, 'QtySpin', 'D5', 1, 0, 50, 1);
sheet.addEditBox(8, 2, 160, 24, 'NotesEdit', '', 'E8', true);

// Access collections
const checkBoxes = sheet.checkBoxes;
const comboBoxes = sheet.comboBoxes;
const optionButtons = sheet.optionButtons;
const buttons = sheet.buttons;
const listBoxes = sheet.listBoxes;
const scrollBars = sheet.scrollBars;
const spinButtons = sheet.spinButtons;
const editBoxes = sheet.editBoxes;
const labels = sheet.labels;
const groupBoxes = sheet.groupBoxes;

console.log(`Total checkboxes: ${checkBoxes.length}`);
console.log(`Total option buttons: ${optionButtons.length}`);
console.log(`Total buttons: ${buttons.length}`);

// Remove a control by name
if (checkBoxes.length > 0) {
  sheet.checkBoxes.removeByName('AgreeBox');
}

// Or remove by position
if (buttons.length > 0) {
  sheet.buttons.removeAt(0);
}
