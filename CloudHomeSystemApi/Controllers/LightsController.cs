using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/lights")]
public class LightsController : ControllerBase
{
    private static bool areLightsOn = false;

    [HttpGet("status")]
    public IActionResult GetLightsStatus()
    {
        return Ok(new { lightsOn = areLightsOn });
    }

    [HttpPost("toggle")]
    public IActionResult ToggleLights()
    {
        areLightsOn = !areLightsOn;
        return Ok(new { lightsOn = areLightsOn });
    }
}
