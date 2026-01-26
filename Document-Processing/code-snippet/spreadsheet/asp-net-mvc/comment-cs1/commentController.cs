public ActionResult Open(OpenRequest openRequest)
{
    return Content(Workbook.Open(openRequest));
}

public void Save(SaveSettings saveSettings)
{
    Workbook.Save(saveSettings);
}

public ActionResult Index()
{
    List<object> data = new List<object>()
    {
        new { OrderID = 10248, CustomerName = "Paul Henriot", Address = "59 rue de l Abbaye", Country = "France", Status = "Delivered" },
        new { OrderID = 10249, CustomerName = "Karin Josephs", Address = "Luisenstr. 48", Country = "Germany", Status = "Delivered" },
        new { OrderID = 10250, CustomerName = "Mario Pontes", Address = "Rua do Paço, 67", Country = "Brazil", Status = "Shipped" },
        new { OrderID = 10251, CustomerName = "Mary Saveley", Address = "2, rue du Commerce", Country = "France", Status = "Delivered" },
        new { OrderID = 10252, CustomerName = "Pascale Cartrain", Address = "Boulevard Tirou, 255", Country = "Belgium", Status = "Shipped" },
        new { OrderID = 10253, CustomerName = "Carlos Hernández", Address = "Rua do Paço, 67", Country = "Brazil", Status = "Cancelled" },
        new { OrderID = 10254, CustomerName = "Yang Wang", Address = "Hauptstr. 31", Country = "Switzerland", Status = "Pending" },
        new { OrderID = 10255, CustomerName = "Antonio Moreno", Address = "Starenweg 5", Country = "Switzerland", Status = "Delivered" },
        new { OrderID = 10256, CustomerName = "Paula Parente", Address = "Rua do Mercado, 12", Country = "Brazil", Status = "Shipped" },
        new { OrderID = 10257, CustomerName = "Michael Holz", Address = "Carrera 22 con Ave.", Country = "Venezuela", Status = "Delivered" },
        new { OrderID = 10258, CustomerName = "Roland Mendel", Address = "Kirchgasse 6", Country = "Austria", Status = "Cancelled" }
    };
    ViewBag.DefaultData = data;
    return View();
}