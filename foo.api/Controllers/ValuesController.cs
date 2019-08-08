using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace foo.api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public IActionResult GetAsync() => Ok("Hello, World!");
    }
}
