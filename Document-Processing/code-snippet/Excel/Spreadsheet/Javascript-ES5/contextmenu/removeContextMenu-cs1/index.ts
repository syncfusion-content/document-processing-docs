

import { enableRipple } from '@syncfusion/ej2-base';
import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

    //Initialize Spreadsheet component
    let spreadsheet: Spreadsheet = new Spreadsheet({
        // To remove existing context menu items.
        contextMenuBeforeOpen: (): void => {
            spreadsheet.removeContextMenuItems(["Insert Column"], false); //Items that needs to be removed, Set `true` if the given `text` is a unique id.
        }
    });

    //Render initialized Spreadsheet component
    spreadsheet.appendTo('#spreadsheet');


