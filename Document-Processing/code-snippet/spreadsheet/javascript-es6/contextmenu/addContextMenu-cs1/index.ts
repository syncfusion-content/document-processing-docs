

import { enableRipple } from '@syncfusion/ej2-base';
import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

    //Initialize Spreadsheet component
    let spreadsheet: Spreadsheet = new Spreadsheet({
        contextMenuBeforeOpen: (args): void => {
            if (args.element.id === spreadsheet.element.id + '_contextmenu') {
           // To add context menu items.
             spreadsheet.addContextMenuItems([{ text: 'Custom Item' }], 'Paste Special', false);
           //To pass the items, Item before / after that the element to be inserted, Set false if the items need to be inserted before the text.
          }
        }
    });

    //Render initialized Spreadsheet component
    spreadsheet.appendTo('#spreadsheet');


