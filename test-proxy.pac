 function FindProxyForURL(url, host) {
 
 alert("url is " + url);
    if ((host === "www.company.net") ||
        (host === "webmail.company.net") ||
        (host === "portal.company.net") ||
        (dnsDomainIs(host, ".public.company.net"))) {
        return "PROXY localhost:8121";
    }
 
    return "DIRECT";
}
