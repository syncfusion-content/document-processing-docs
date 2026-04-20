using Syncfusion.EJ2.Spreadsheet;
using System.Web.Mvc;

namespace YourProjectName.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Open(OpenRequest openRequest)
        {
            // The openRequest object is automatically populated with the file data 
            // and the parseOptions set in the client-side beforeOpen event.
            // Workbook.Open processes the request and returns the spreadsheet data as JSON.
            return Content(Workbook.Open(openRequest));
        }

        public ActionResult Save(SaveSettings saveSettings)
        {
            // Workbook.Save handles the spreadsheet data and returns the file
            // to be downloaded by the user.
            return Workbook.Save(saveSettings);
        }
    }
}