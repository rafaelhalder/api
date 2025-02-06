import { parseRoutePath } from "./utils/parseRoutePath.js";
export const routes = [
  {
    method: "GET",
    path: "/products",
    controller: (request, response) => {
      return response.end("Lista de Produtos!");
    },
  },
  {
    method: "POST",
    path: "/products",
    controller: (request, response) => {
      return response.writeHead(201).end(JSON.stringify(request.body));
    },
  },
  {
    method: "DELETE",
    path: "/products/:id",
    controller: (request, response) => {
      return response.end("Produto Removido! com ID " + request.params.id);
    },
  },
].map((route) => ({ ...route, path: parseRoutePath(route.path) }));
