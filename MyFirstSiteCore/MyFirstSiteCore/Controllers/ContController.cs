using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MyFirstSiteCore.Controllers
{
    public class ContController : Controller
    {
        public IActionResult Contact()
        {
            return View();
        }
    }
}