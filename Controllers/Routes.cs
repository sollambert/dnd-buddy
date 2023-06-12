using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using System.Collections.Generic;
using System.Linq;

[ApiController]
[Route("[controller]")]
public class RoutesController : ControllerBase
{
    private readonly EndpointDataSource _endpointDataSource;

    public RoutesController(EndpointDataSource endpointDataSource)
    {
        _endpointDataSource = endpointDataSource;
    }

    [HttpGet]
    public IEnumerable<RouteInfo> Get()
    {
        return _endpointDataSource
            .Endpoints
            .OfType<RouteEndpoint>()
            .Select(e => new RouteInfo
            {
                RoutePattern = e.RoutePattern.RawText,
                HttpMethod = GetHttpMethods(e),
                EndpointName = e.DisplayName,
            });
    }

    private string GetHttpMethods(RouteEndpoint e)
    {
        var metadata = e.Metadata.GetMetadata<HttpMethodMetadata>();
        return metadata?.HttpMethods.FirstOrDefault();
    }

    public class RouteInfo
    {
        public string RoutePattern { get; set; }
        public string HttpMethod { get; set; }
        public string EndpointName { get; set; }
    }
}