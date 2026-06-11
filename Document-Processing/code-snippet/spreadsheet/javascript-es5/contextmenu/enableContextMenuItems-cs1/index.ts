

import { enableRipple } from '@syncfusion/ej2-base';
import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

    //Initialize Spreadsheet component
    let spreadsheet: Spreadsheet = new Spreadsheet({
        contextMenuBeforeOpen: (): void => {
            //To enable / disable context menu items.
          spreadsheet.enableContextMenuItems(['Rename'], false, false);
          // Contextmenu Items that needs to be enabled / disabled, Set true / false to enable / disable the menu items, Set true if the given text is a unique id.
        }
    });

    //Render initialized Spreadsheet component
    spreadsheet.appendTo('#spreadsheet');


