const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    const {
        method
    } = request;

    if (method === 'GET') {
        response.end('<h1>Hello!</h1>');
    }

    // Pembedaannya terletak pada penanganan request dengan method POST.
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
            response.end(`<h1>Hai, ${name}!</h1>`);
        });
    }
    // End of the difference
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});