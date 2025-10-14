// Initialize the Spreadsheet component.

var sheet = [
    {
        name: 'PriceDetails',
        rows: [
            {
                cells: [
                    { value: 'Item Name' },
                    { value: 'Quantity' },
                    { value: 'Price' },
                    { value: 'Amount' },
                    { value: 'Stock Detail' },
                    { value: 'Website' }
                ]
            },
            {
                cells: [
                    { value: 'Casual Shoes' },
                    { value: '10' },
                    { value: '$20' },
                    { value: '$200' },
                    { value: 'OUT OF STOCK' },
                    { value: 'Amazon', hyperlink: 'https://www.amazon.com/' }
                ]
            },
            {
                cells: [
                    { value: 'Sports Shoes' },
                    { value: '20' },
                    { value: '$30' },
                    { value: '$600' },
                    { value: 'IN STOCK', hyperlink: 'Stock!A2:B2'},
                    { value: 'Overstack', hyperlink: 'https://www.overstock.com/' }
                ]
            },
            {
                cells: [
                    { value: 'Formal Shoes' },
                    { value: '20' },
                    { value: '$15' },
                    { value: '$300' },
                    { value: 'IN STOCK', hyperlink: 'Stock!A3:B3'},
                    { value: 'AliExpress', hyperlink: 'https://www.aliexpress.com/' }
                ]
            },
            {
                cells: [
                    { value: 'Sandals & Floaters' },
                    { value: '15' },
                    { value: '$20' },
                    { value: '$300' },
                    { value: 'OUT OF STOCK'},
                    { value: 'AliBaba', hyperlink: 'http://www.alibaba.com/' }
                ]
            },
            {
                cells: [
                    { value: 'Flip-Flops & Slippers' },
                    { value: '30' },
                    { value: '$10' },
                    { value: '$300' },
                    { value: 'IN STOCK', hyperlink: 'Stock!A4:B4' },
                    { value: 'Taobao', hyperlink: 'https://taobao.com/' }
                ]
            },
            {
                cells: [
                    { value: 'Sneakers' },
                    { value: '40' },
                    { value: '$20' },
                    { value: '$800' },
                    { value: 'OUT OF STOCK' },
                    { value: 'Walmart', hyperlink: 'https://www.walmart.com/' }
                ]
            },
            {
                cells: [
                    { value: 'Running Shoes' },
                    { value: '20' },
                    { value: '$10' },
                    { value: '$200' },
                    { value: 'IN STOCK', hyperlink: 'Stock!A5:B5' },
                    { value: 'Ebay', hyperlink: 'https://www.ebay.com/' }
                ]
            },
            {
                cells: [
                    { value: 'Loafers' },
                    { value: '31' },
                    { value: '$10' },
                    { value: '$310' },
                    { value: 'IN STOCK', hyperlink: 'Stock!A6:B6' },
                    { value: 'Flipkart', hyperlink: 'https://www.flipkart.com/' }
                ]
            },
            {
                cells: [
                    { value: 'Cricket Shoes', },
                    { value: '41' },
                    { value: '$30' },
                    { value: '$1210' },
                    { value: 'IN STOCK', hyperlink: 'Stock!A7:B7' },
                    { value: 'NewEgg', hyperlink: 'https://www.newegg.com/' }
                ]
            },
            {
                cells: [
                    { value: 'T-Shirts' },
                    { value: '50' },
                    { value: '$10' },
                    { value: '$500' },
                    { value: 'IN STOCK', hyperlink: 'Stock!A8:B8' },
                    { value: 'Overstock', hyperlink: 'https://www.overstock.com/' }
                ]
            }
        ],
        columns: [
            { width: 160 }, { width: 80 }, { width: 80 },
            { width: 80 }, { width: 160 }, { width: 120 }
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
            {
                cells: [
                    { value: 'Loafers' },
                    { value: '31' },
                ]
            },
            {
                cells: [
                    { value: 'Cricket Shoes', },
                    { value: '47' },
                ]
            },
            {
                cells: [
                    { value: 'T-Shirts' },
                    { value: '60' },
                ]
            }
        ],
        columns: [
            { width: 160 }, { width: 120 }
        ]
}
];
var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheet,
    beforeHyperlinkClick: function(args) {
        args.target = '_self'; //change target attribute
    }
}
);

// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');



