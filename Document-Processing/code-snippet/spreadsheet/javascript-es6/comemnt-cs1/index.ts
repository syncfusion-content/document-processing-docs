import { Spreadsheet, SheetModel } from '@syncfusion/ej2-spreadsheet';
import { shipmentData } from './datasource.ts';

// Added comments using the cell data binding
let sheets: SheetModel[] = [{
    name: 'Shipment Details',
    ranges: [{ dataSource: shipmentData }],
    columns: [{ width: 80 }, { width: 130 }, { width: 150 }, { width: 100 }, { width: 100 }],
    rows: [{
        index: 1, cells: [{
            index: 4, comment: {
                author: 'Julius Gorner', text: 'Confirm delivery status for Order 10248.', createdTime: 'November 18, 2025 at 3:00 PM',
                isResolved: true, replies: [{ author: 'Cristi Espinos', text: 'Status verified as delivered.', createdTime: 'November 18, 2025 at 3:30 PM' },
                { author: 'Julius Gorner', text: 'Acknowledged, thank you.', createdTime: 'November 18, 2025 at 3:45 PM' }]
            }
        }]
    },
    {
        index: 3, cells: [{
            index: 4, comment: {
                author: 'Julius Gorner', text: 'Order 10250 is marked as Shipped, any update on current status?', createdTime: 'November 16, 2025 at 9:00 PM',
                isResolved: false, replies: [{ author: 'Cristi Espinos', text: 'Shipment is in transit.', createdTime: 'November 17, 2025 at 3:30 PM' },
                { author: 'Julius Gorner', text: 'Thanks for the update.', createdTime: 'November 17, 2025 at 3:45 PM' }]
            }
        }]
    },
    {
        index: 6, cells: [{
            index: 4, comment: {
                author: 'Julius Gorner', text: 'Reason for cancellation of Order 10253?', createdTime: 'November 18, 2025 at 1:00 PM',
                isResolved: false, replies: [{ author: 'Cristi Espinos', text: 'Customer requested cancellation.', createdTime: 'November 18, 2025 at 1:30 PM' },
                { author: 'Julius Gorner', text: 'Understood, thanks.', createdTime: 'November 18, 2025 at 3:15 PM' }]
            }
        }]
    },
    {
        index: 7, cells: [{
            index: 4, comment: {
                author: 'Julius Gorner', text: 'Pending status for Order 10254 - any progress?', createdTime: 'November 19, 2025 at 3:00 PM',
                isResolved: false, replies: [{ author: 'Cristi Espinos', text: 'Awaiting customs clearance.', createdTime: 'November 19, 2025 at 3:30 PM' },
                { author: 'Julius Gorner', text: 'Please keep me posted,', createdTime: 'November 19, 2025 at 3:45 PM' }]
            }
        }]
    },
    {
        index: 9, cells: [{
            index: 4, comment: {
                author: 'Julius Gorner', text: 'Order 10256 shipped, tracking details shared?', createdTime: 'November 18, 2025 at 3:00 AM',
                isResolved: false, replies: [{ author: 'Cristi Espinos', text: 'Tracking sent via email,', createdTime: 'November 18, 2025 at 3:30 AM' },
                { author: 'Julius Gorner', text: 'Received, thank you,', createdTime: 'November 18, 2025 at 3:45 AM' }]
            }
        }]
    },
    {
        index: 10, cells: [{
            index: 4, comment: {
                author: 'Julius Gorner', text: 'Delivered order 10257, confirm recipient name.', createdTime: 'November 18, 2025 at 2:00 PM',
                isResolved: true, replies: [{ author: 'Cristi Espinos', text: 'Recipient verified as Michael Holz.', createdTime: 'November 18, 2025 at 2:30 PM' },
                { author: 'Julius Gorner', text: 'Great, noted.', createdTime: 'November 18, 2025 at 2:45 PM' }]
            }
        }]
    },
    {
        index: 11, cells: [{
            index: 4, comment: {
                author: 'Julius Gorner', text: 'Order 10258 cancelled, reason documented?', createdTime: 'November 18, 2025 at 12:00 PM',
                isResolved: false, replies: [{ author: 'Cristi Espinos', text: 'Customer changed requirements', createdTime: 'November 18, 2025 at 12:30 PM' },
                { author: 'Julius Gorner', text: 'Understood, thanks.', createdTime: 'November 18, 2025 at 12:45 PM' }]
            }
        }]
    }],
}];

let spreadsheet: Spreadsheet = new Spreadsheet({
    // To show the comments review pane on initial rendering.
    showCommentsPane: true,
    openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
    saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
    sheets: sheets,
    created: (): void => {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Shipment Details!A1:F1');
        // Added comment using the updateCell method.
        spreadsheet.updateCell({
            comment: {
                author: 'Cristi Espinos', text: 'Validate customer name for Order 10249.', createdTime: 'November 18, 2025 at 4:00 PM',
                isResolved: false, replies: [{ author: 'Julius Gorner', text: 'Confirmed as Karin Josephs', createdTime: 'November 18, 2025 at 4:30 PM' },
                { author: 'Cristi Espinos', text: 'Perfect, noted.', createdTime: 'November 18, 2025 at 5:30 PM' }]
            }
        }, 'Shipment Details!B3');
        spreadsheet.updateCell({
            comment: {
                author: 'Cristi Espinos', text: 'Verify address details for delivery.', createdTime: 'November 18, 2025 at 4:00 PM',
                isResolved: true, replies: [{ author: 'Julius Gorner', text: 'Address confirmed as Boulevard Tirou, 255.', createdTime: 'November 18, 2025 at 4:30 PM' }]
            }
        }, 'Shipment Details!C6');
        spreadsheet.updateCell({
            comment: {
                author: 'Cristi Espinos', text: 'Confirm country for Order 10255 delivery.', createdTime: 'November 18, 2025 at 4:00 PM',
                isResolved: false, replies: [{ author: 'Julius Gorner', text: 'Country verified as Switzerland.', createdTime: 'November 18, 2025 at 4:30 PM' },
                { author: 'Cristi Espinos', text: 'Acknowledged.', createdTime: 'November 18, 2025 at 5:30 PM' }]
            }
        }, 'Shipment Details!D9');
    }
});

spreadsheet.appendTo('#spreadsheet');