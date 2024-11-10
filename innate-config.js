var innate={
  server:"https://innate.ape3d.com/server/"
};

function canReach(url){
  return new Promise((resolve) => {
    fetch(url)
    .then((response) => {
      if (response.ok) {
        resolve(true);
      } else {
        resolve(false);
      }
    })
    .catch(() => resolve(false));
  });
}

async function checkIfReachable(){
  if (!await canReach(innate.server+"index.php")){
    document.body.innerHTML="Unable to reach server! Please contact the website owner to notify them of this problem. If you are the owner, please contact dragon73101@gmail.com for help resolving this issue.";
  }
}

localStorage.setItem("server",innate.server);

checkIfReachable();
