/**
 * Default data source
 */
export let defaultData: Object[] = [
    { 'Item Name': 'Casual Shoes', Date: '02/14/2014', Time: '11:34:32 AM', Quantity: 10, Price: 20, Amount: 200, Discount: 1, Profit: 10 },
    { 'Item Name': 'Sports Shoes', Date: '06/11/2014', Time: '05:56:32 AM', Quantity: 20, Price: 30, Amount: 600, Discount: 5, Profit: 50 },
    { 'Item Name': 'Formal Shoes', Date: '07/27/2014', Time: '03:32:44 AM', Quantity: 20, Price: 15, Amount: 300, Discount: 7, Profit: 27 },
    { 'Item Name': 'Sandals & Floaters', Date: '11/21/2014', Time: '06:23:54 AM', Quantity: 15, Price: 20, Amount: 300, Discount: 11, Profit: 67 },
    { 'Item Name': 'Flip- Flops & Slippers', Date: '06/23/2014', Time: '12:43:59 AM', Quantity: 30, Price: 10, Amount: 300, Discount: 10, Profit: 70 },
    { 'Item Name': 'Sneakers', Date: '07/22/2014', Time: '10:55:53 AM', Quantity: 40, Price: 20, Amount: 800, Discount: 13, Profit: 66 },
    { 'Item Name': 'Running Shoes', Date: '02/04/2014', Time: '03:44:34 AM', Quantity: 20, Price: 10, Amount: 200, Discount: 3, Profit: 14 },
    { 'Item Name': 'Loafers', Date: '11/30/2014', Time: '03:12:52 AM', Quantity: 31, Price: 10, Amount: 310, Discount: 6, Profit: 29 },
    { 'Item Name': 'Cricket Shoes', Date: '07/09/2014', Time: '11:32:14 AM', Quantity: 41, Price: 30, Amount: 1210, Discount: 12, Profit: 166 },
    { 'Item Name': 'T-Shirts', Date: '10/31/2014', Time: '12:01:44 AM', Quantity: 50, Price: 10, Amount: 500, Discount: 9, Profit: 55 },
];

/**
 * Grid datasource
 */

export function getTradeData(dataCount?: number): object {
    let employees: string[] = [
        'Michael', 'Kathryn', 'Tamer', 'Martin', 'Davolio', 'Nancy', 'Fuller', 'Leverling', 'Peacock',
        'Margaret', 'Buchanan', 'Janet', 'Andrew', 'Callahan', 'Laura', 'Dodsworth', 'Anne',
        'Bergs', 'Vinet', 'Anton', 'Fleet', 'Zachery', 'Van', 'King', 'Jack', 'Rose'];
    let designation: string[] = ['Manager', 'CFO', 'Designer', 'Developer', 'Program Directory', 'System Analyst', 'Project Lead'];
    let mail: string[] = ['sample.com', 'arpy.com', 'rpy.com', 'mail.com', 'jourrapide.com'];
    let location: string[] = ['UK', 'USA', 'Sweden', 'France', 'Canada', 'Argentina', 'Austria', 'Germany', 'Mexico'];
    let status: string[] = ['Active', 'Inactive'];
    let trustworthiness: string[] = ['Perfect', 'Sufficient', 'Insufficient'];
    let tradeData: Object[] = [];
    let address: string[] = ['59 rue de lAbbaye', 'Luisenstr. 48', 'Rua do Paço, 67', '2, rue du Commerce', 'Boulevard Tirou, 255',
        'Rua do mailPaço, 67', 'Hauptstr. 31', 'Starenweg 5', 'Rua do Mercado, 12',
        'Carrera 22 con Ave. Carlos Soublette #8-35', 'Kirchgasse 6',
        'Sierras de Granada 9993', 'Mehrheimerstr. 369', 'Rua da Panificadora, 12', '2817 Milton Dr.', 'Kirchgasse 6',
        'Åkergatan 24', '24, place Kléber', 'Torikatu 38', 'Berliner Platz 43', '5ª Ave. Los Palos Grandes', '1029 - 12th Ave. S.',
        'Torikatu 38', 'P.O. Box 555', '2817 Milton Dr.', 'Taucherstraße 10', '59 rue de lAbbaye', 'Via Ludovico il Moro 22',
        'Avda. Azteca 123', 'Heerstr. 22', 'Berguvsvägen  8', 'Magazinweg 7', 'Berguvsvägen  8', 'Gran Vía, 1', 'Gran Vía, 1',
        'Carrera 52 con Ave. Bolívar #65-98 Llano Largo', 'Magazinweg 7', 'Taucherstraße 10', 'Taucherstraße 10',
        'Av. Copacabana, 267', 'Strada Provinciale 124', 'Fauntleroy Circus', 'Av. dos Lusíadas, 23',
        'Rua da Panificadora, 12', 'Av. Inês de Castro, 414', 'Avda. Azteca 123', '2817 Milton Dr.'];
    let employeeimg: string[] = ['usermale', 'userfemale'];
    if (typeof dataCount === 'string') {
        dataCount = parseInt(dataCount, 10);
    }
    for (let i: number = 1; i <= dataCount; i++) {
        let code: any = 10000;
        tradeData.push({
            'EmployeeID': code + i,
            'Employees':
                employees[Math.floor(Math.random() * employees.length)] + ' ' + employees[Math.floor(Math.random() * employees.length)],
            'Designation': designation[Math.floor(Math.random() * designation.length)],
            'Location': location[Math.floor(Math.random() * location.length)],
            'Status': status[Math.floor(Math.random() * status.length)],
            'Trustworthiness': trustworthiness[Math.floor(Math.random() * trustworthiness.length)],
            'Rating': Math.floor(Math.random() * 5),
            'Software': Math.floor(Math.random() * 100),
            'EmployeeImg': employeeimg[Math.floor(Math.random() * employeeimg.length)],
            'CurrentSalary': Math.floor((Math.random() * 100000)),
            'Address': address[Math.floor(Math.random() * address.length)],
        });
        let employee: string = 'Employees';
        let emp: string = tradeData[i - 1][employee];
        let sName: string = emp.substr(0, emp.indexOf(' ')).toLowerCase();
        let empmail: string = 'Mail';
        tradeData[i - 1][empmail] = sName + (Math.floor(Math.random() * 100) + 10) + '@' + mail[Math.floor(Math.random() * mail.length)];

    }
    return tradeData;
}

export let orderData: Object[] = [
  {
    OrderID: 10248,
    CustomerID: 'VINET',
    EmployeeID: 5,
    ShipName: 'Vins et alcools Chevalier',
    ShipCity: 'Reims',
    Website: 'https://www.amazon.com/'
  },
  {
    OrderID: 10249,
    CustomerID: 'TOMSP',
    EmployeeID: 6,
    ShipName: 'Toms Spezialitäten',
    ShipCity: 'Münster',
    Website: 'https://www.overstock.com/'
  },
  {
    OrderID: 10250,
    CustomerID: 'HANAR',
    EmployeeID: 4,
    ShipName: 'Hanari Carnes',
    ShipCity: 'Rio de Janeiro',
    Website: 'https://www.aliexpress.com/'
  },
  {
    OrderID: 10251,
    CustomerID: 'VICTE',
    EmployeeID: 3,
    ShipName: 'Victuailles en stock',
    ShipCity: 'Lyon',
    Website: 'http://www.alibaba.com/'
  },
  {
    OrderID: 10252,
    CustomerID: 'SUPRD',
    EmployeeID: 4,
    ShipName: 'Suprêmes délices',
    ShipCity: 'Charleroi',
    Website: 'https://taobao.com/'
  }
  ]