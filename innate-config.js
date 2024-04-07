function valid(url){
    return new Promise((resolve) => {
      fetch(url)
        .then(response => {
          resolve(true);
        })
        .catch(error => {
          resolve(false);
        });
    });
  }

const servers=["https://server.marcosruben.com","https://innate-server.vercel.app/innate/https://server.marcosruben.com"];
async function getServer(){
  var server="";
  for (var i=0;i<servers.length;i++){
    if (valid(servers[i]){
      console.log("server found, using server "+servers[i]);
      return new URL("/",servers[i]);;
    } else {
      console.log('server '+servers[i]+" failed, alternating...");
    }
  }
}
