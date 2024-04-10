var innate={
  server:"https://server.marcosruben.com/",
  backup1:"https://cors-fv0g.onrender.com/https://server.marcosruben.com/",
  backup2:"https://server2.ecem-sarl.com/https://server.marcosruben.com/",
  backup3:"https://server2.ldeazevedo.com/https://server.marcosruben.com/"
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

if (localStorage.getItem("server")==null){
  localStorage.setItem("server",innate.server);
}
async function start(){
  if (await checkWebsite(localStorage.getItem("server"))){
  } else if (await checkWebsite(innate.server)){
    localStorage.setItem("server",innate.server);
  } else if (await checkWebsite(innate.backup1)){
    localStorage.setItem("server",innate.backup1);
  } else if (await checkWebsite(innate.backup2)){
    localStorage.setItem("server",innate.backup2);
  } else if (await checkWebsite(innate.backup3)){
    localStorage.setItem("server",innate.backup3);
  } else {
    window.location.href="/notfound";
  }
}
start();
