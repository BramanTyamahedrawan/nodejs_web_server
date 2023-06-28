const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');
    response.statusCode = 200;

    const {
        method,
        url
    } = request;

    if (url == '/') {
        if (method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Ini adalah homepage'
            }));
        }
    } else if (url == '/about') {
        if (method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Ini adalah halaman about'
            }));
        }

        if (method === 'POST') {
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {
                    name
                } = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({
                    message: `Hai, ${name}! ini adalah halaman about`
                }));
            });
        }
    } else {
        response.statusCode = 400;
        response.end(JSON.stringify({
            message: 'Halaman tidak dapat ditemukan!'
        }));
    }
};