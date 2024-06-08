self.addEventListener('fetch', (event) => {
    let request = event.request;
    if (request.url.startsWith('http://')) {
        const upgradedRequest = new Request(
            request.url.replace('http://', 'https://'),
            {
                method: request.method,
                headers: request.headers,
                mode: request.mode,
                credentials: request.credentials,
                redirect: request.redirect,
                referrer: request.referrer,
                body: request.body,
                cache: request.cache,
                integrity: request.integrity
            }
        );
        event.respondWith(fetch(upgradedRequest));
    }
});
