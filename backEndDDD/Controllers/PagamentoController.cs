using Microsoft.AspNetCore.Mvc;
using Stripe.Checkout;


[ApiController]
[Route("[controller]")]
public class PagamentoController : ControllerBase
{
    [HttpPost("create-checkout-session")]
    public IActionResult CreateCheckoutSession()
    {
        var domain = "http://localhost:3000"; // seu frontend React

        var options = new SessionCreateOptions
        {
            PaymentMethodTypes = new List<string>
            {
              "card",
            },
            LineItems = new List<SessionLineItemOptions>
            {
              new SessionLineItemOptions
              {
                PriceData = new SessionLineItemPriceDataOptions
                {
                  Currency = "brl",
                  UnitAmount = 5000, // R$50,00 em centavos
                  ProductData = new SessionLineItemPriceDataProductDataOptions
                  {
                    Name = "DDDescomplica PDF",
                  },
                },
                Quantity = 1,
              },
            },
            Mode = "payment",
            SuccessUrl = domain + "/download",
            CancelUrl = domain + "/produto",
        };

        var service = new SessionService();
        Session session = service.Create(options);

        return Ok(new { url = session.Url });
    }
}
