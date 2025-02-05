import http from "node:http";

const server = http.createServer((request, response) => {
  const { method } = request; // = request.method, desestruturou (procurou o method dentro do request)

  // return response.end("Method:" + method);
  return response.writeHead(200).end("Method:" + method);
});
server.listen(3333); //3333 padrao api
