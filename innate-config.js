/*function credit to chatgpt*/
async function isUrlReachable(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error('Error checking URL reachability:', error);
    return false;
  }
}

var servers=["https://server.marcosrubn.com","https://innate-server.vercel.app/innate/https://server.marcosruben.com"];
async function getServer(){
  var server="";
  for (var i=0;i<servers.length;i++){
    isUrlReachable(servers[i])
      .then(reachable => {
        if (reachable) {
          console.log("server found, using server "+servers[i]);
          return servers[i];
        } else {
          console.log('server '+servers[i]+" failed, alternating...");
        }
    });
  }
}
