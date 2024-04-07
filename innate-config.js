/*function credit to chatgpt*/
function isUrlReachable(url) {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest();
    xhr.open('HEAD', url);
    xhr.onload = () => resolve(xhr.status >= 200 && xhr.status < 300);
    xhr.onerror = () => resolve(false);
    xhr.send();
  });
}

const servers=["https://server.marcosruben.com","https://innate-server.vercel.app/innate/https://server.marcosruben.com"];
async function getServer(){
  var server="";
  for (var i=0;i<servers.length;i++){
    isUrlReachable(servers[i])
      .then(reachable => {
        if (reachable) {
          console.log("server found, using server "+servers[i]);
          return new URL("/",servers[i]);;
        } else {
          console.log('server '+servers[i]+" failed, alternating...");
        }
    });
  }
}
