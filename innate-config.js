const servers=["https://innate-server.vercel.app/innate/https://server.marcosruben.com"];

function getText(file){
    return new Promise((resolve) => {
      fetch(file)
        .then((response) => {
          return response.text();
        })
        .then((txt) => {
          resolve(txt.trim());
        });
    });
  }

async function getServer(){
    for (var i=0;i<servers.length;i++){
        var found=true;
        try{
            await getText(servers[i]);
        } catch (e) {
            found=false;
        }
        if (found){
            return new URL("/",servers[0]);
        }
    }
    return null;
}
