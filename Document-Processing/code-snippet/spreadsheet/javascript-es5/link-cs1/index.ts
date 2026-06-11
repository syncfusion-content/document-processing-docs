import { Spreadsheet, SheetModel, BeforeHyperlinkArgs } from '@syncfusion/ej2-spreadsheet';

let sheet: SheetModel[] = [
    {
        name: 'PriceDetails',
        rows: [
            {
                cells: [
                    { value: 'Item Name' },
                    { value: 'Stock Detail' },
                    { value: 'Website' }
                ]
            },
            {
                cells: [
                    { value: 'Casual Shoes' },
                    { value: 'OUT OF STOCK' },
                    { value: 'Amazon', hyperlink: 'https://www.amazon.com/' }
                ]
            },
            {
                cells: [
                    { value: 'Sports Shoes' },
                    { value: 'IN STOCK', hyperlink: 'Stock!A2:B2' },
                    { value: 'Overstack', hyperlink: 'https://www.overstock.com/' }
                ]
            },
            {
                cells: [
                    { value: 'Formal Shoes' },
                    { value: 'IN STOCK', hyperlink: 'Stock!A3:B3' },
                    { value: 'AliExpress', hyperlink: 'https://www.aliexpress.com/' }
                ]
            },
            {
                cells: [
                    { value: 'Sandals & Floaters' },
                    { value: 'OUT OF STOCK' },
                    { value: 'AliBaba', hyperlink: 'http://www.alibaba.com/' }
                ]
            },
            {
                cells: [
                    { value: 'Flip-Flops & Slippers' },
                    { value: 'IN STOCK', hyperlink: 'Stock!A4:B4' },
                    { value: 'Taobao', hyperlink: 'https://taobao.com/' }
                ]
            },
        ],
        columns: [
            { width: 160 }, { width: 160 }, { width: 120 }
        ]
    },
    {
        name: 'Stock',
        rows: [
            {
                cells: [
                    { value: 'Item Name' },
                    { value: 'Available Count' },
                ]
            },
            {
                cells: [
                    { value: 'Sports Shoes' },
                    { value: '30' },
                ]
            },
            {
                cells: [
                    { value: 'Formal Shoes' },
                    { value: '25' },
                ]
            },
            {
                cells: [
                    { value: 'Flip-Flops & Slippers' },
                    { value: '40' },
                ]
            },
            {
                cells: [
                    { value: 'Running Shoes' },
                    { value: '25' },
                ]
            },
        ],
        columns: [
            { width: 160 }, { width: 120 }
        ]
    }
];

//Initialize the SpreadSheet control
let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheet,
    beforeHyperlinkClick: (args: BeforeHyperlinkArgs) => {
        args.target = '_self'; //change target attribute
    }
});
spreadsheet.appendTo('#spreadsheet');
