var innate={
  server:"https://server.marcosruben.com"
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
    alert("Cannot connect to server.");
  }
}
start();
