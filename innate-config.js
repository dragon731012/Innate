/*function credit to https://www.freecodecamp.org/news/check-if-a-javascript-string-is-a-url*/
const isValidUrl = urlString=> {
      try { 
      	return Boolean(new URL(urlString)); 
      }
      catch(e){ 
      	return false; 
      }
  }

var servers=["https://server.marcosrubn.com","https://innate-server.vercel.app/innate/https://server.marcosruben.com"];
async function getServer(){
  var server="";
  for (var i=0;i<servers.length;i++){
    if (isValidUrl(servers[i])){
      console.log("server found, using server "+servers[i]);
      return servers[i];
    }
  }
}
