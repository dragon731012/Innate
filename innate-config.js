const innate={
  server1:"https://server.marcosrub.com",
  server2:"https://innate-server.vercel.app"
};

var oldi=-1;
for (var i=0;i<innate.length){
  if (oldi=i){
    break;
  }
  try{
    innate.server=new URL("/",innate.server1);
  } catch {
    i++;
  }
  oldi++;
}
