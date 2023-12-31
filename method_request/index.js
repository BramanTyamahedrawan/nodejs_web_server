const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    // perbedaan terletak pada penanganan request dengan method GET, POST, PUT, dan DELETE.
    const {
        method
    } = request;

    if (method === 'GET') {
        response.end('<h1>Hello!</h1>');
    }

    if (method === 'POST') {
        response.end('<h1>Hai!</h1>');
    }

    if (method === 'PUT') {
        response.end('<h1>Bonjour!</h1>');
    }

    if (method === 'DELETE') {
        response.end('<h1>Salam!</h1>');
    }
    // End of the difference
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});