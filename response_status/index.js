const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    const {
        method,
        url
    } = request;

    if (url == '/') {
        if (method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Ini adalah homepage</h1>');
        }
    } else if (url == '/about') {
        if (method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Ini adalah halaman about</h1>');
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
                response.end(`<h1>Hai, ${name}! ini adalah halaman about</h1>`);
            });
        }
    } else {
        response.statusCode = 400;
        response.end('<h1>Halaman tidak dapat ditemukan!</h1>');
    }
};