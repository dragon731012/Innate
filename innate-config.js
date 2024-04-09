var innate={
  server:"https://server.marcosrubesn.com/",
  backup1:"https://cors-fv0g.onrender.com/https://server.marcosruben.com/"
};

/* function credit to chatgpt */
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
  } else if (await checkWebsite(new URL("/",innate.backup1))){
    innate.server=new URL("/",innate.backup1);
  } else {
    window.location.href="/notfound";
  }
}
start();
