public ActionResult Default()
{
    List<object> zoomItems = new List<object>();
    zoomItems.Add(new { text = "200%" });
    zoomItems.Add(new { text = "175%" });
    zoomItems.Add(new { text = "150%" });
    zoomItems.Add(new { text = "125%" });
    zoomItems.Add(new { text = "100%" });
    zoomItems.Add(new { text = "75%" });
    zoomItems.Add(new { text = "50%" });
    zoomItems.Add(new { text = "25%" });
    zoomItems.Add(new { separator = true });
    zoomItems.Add(new { text = "Fit one page" });
    zoomItems.Add(new { text = "Fit page width" });
    ViewBag.zoomList = zoomItems;

    return View();
}