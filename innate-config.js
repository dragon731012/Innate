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
  var frame=document.createElement("iframe");
  frame.src="/loading";
  frame.style="width:100%;height:100%;position:absolute;left:0px;top:0px;border:0px;z-index:10000;";
  var localstorageworks=false;
  if (await checkWebsite(localStorage.getItem("server"))){
    localstorageworks=true;
  }
  if (!localstorageworks){
    document.body.appendChild(frame);
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
