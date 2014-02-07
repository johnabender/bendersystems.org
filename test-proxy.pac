 function FindProxyForURL(url, host) {
 
    if( dnsDomainIs( host, ".engine.mobileapptracking.com" ) ) {
        return "PROXY localhost:8121";
    }
 
    return "DIRECT";
}
