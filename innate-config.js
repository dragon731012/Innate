var servers=["https://server.marcosrubn.com","https://innate-server.vercel.app/innate/https://server.marcosruben.com"];
async function getServer(){
  var server="";
  for (var i=0;i<servers.length;i++){
    var found=true;
    try {
      server=new URL("/",servers[i]);
    } catch (e) {
      found=false;
    }
    if (found){
      console.log("server found, using server "+server);
      return server;
    }
  }
}
