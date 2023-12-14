using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;


[Authorize]
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

    [AllowAnonymous]
    [HttpPost("authenticate")]
    public IActionResult Authenticate()
    {
        // In a real-world scenario, authenticate the user (e.g., check credentials)
        // For simplicity, we'll just generate a token for any user

        var token = GenerateJwtToken();
        return Ok(new { token });
    }

    private string GenerateJwtToken()
    {
        var key = Encoding.ASCII.GetBytes("your-secret-key-here"); // Same secret key as in Startup.cs
        var tokenHandler = new JwtSecurityTokenHandler();
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new Claim[]
            {
                new Claim(ClaimTypes.Name, "username");
                new Claim(ClaimTypes.password, "password");
            }),
            Expires = DateTime.UtcNow.AddDays(1), // Token expiration time
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }
}
