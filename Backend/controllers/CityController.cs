using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CityController : Controller
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[]
            {
                "Anantnag", "Pulwama", "Srinagar", "Shopain", "Kulgam"
            };
        }
    }
}
