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


innate.server=new URL("/",innate.server);
