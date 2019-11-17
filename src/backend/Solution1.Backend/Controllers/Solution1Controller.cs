using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Solution1.Backend.Controllers
{
    [Authorize]
    [Route("[Controller]")]
    public class Solution1Controller : Controller
    {
        [Authorize]
        public IActionResult Test()
        {
            return new JsonResult(from c in User.Claims select new { c.Type, c.Value });
        }
    }
}