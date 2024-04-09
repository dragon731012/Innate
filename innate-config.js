var innate={
  server:"https://server.marcosrubesn.com/",
  backup:"https://innate-server.vercel.app/innate/https:/server.marcosruben.com/"
};

async function checkWebsite(url) {
    try {
        const response = await fetch(url);
        
        if (response.ok) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}

async function start(){
  if (await checkWebsite(new URL("/",innate.server))){
    innate.server=new URL("/",innate.server);
  } else {
    innate.server=new URL("/",innate.backup);
  }
}
start();
