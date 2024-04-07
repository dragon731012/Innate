const servers=["https://server.marcosruben.com","https://innate-server.vercel.app/innate/https://server.marcosruben.com"];

async function findConnectableURL() {
    for (let url of servers) {
        try {
            await fetch(url);
            return url;
        } catch (error) {
            console.error(`Failed to connect to ${url}:`, error);
        }
    }
    return null;
}

async function getServer(){
    return new URL("/",servers[0]);
    /*
  return findConnectableURL()
    .then(connectableURL => {
        if (connectableURL) {
            return connectableURL;
        } else {
            console.log('No connectable URL found.');
        }
    })
    .catch(error => console.error('Error finding connectable URL:', error));
    */
}
