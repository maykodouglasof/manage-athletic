const baseUrl = "https://apiatletica.herokuapp.com/api";

const request = async (method, endpoint, params, token = null) => {
  method = method.toLowerCase();
  let fullUrl = `${baseUrl}${endpoint}`;
  let body = null;

  switch (method) {
    case "get":
      let queryString = new URLSearchParams(params).toString();
      fullUrl += `?${queryString}`;
      break;
    case "post":
    case "put":
    case "delete":
      body = JSON.stringify(params);
      break;
  }

  let headers = { "Content-Type": "application/json" };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  let req = await fetch(fullUrl, { method, headers, body });
  let json = await req.json();
  return json;
};

export default () => {
  return {
    getToken: async () => {
      return await localStorage.getItem("token");
    },
    validateToken: async () => {
      let token = await localStorage.getItem("token");
      let json = await request("post", "/auth/validate", {}, token);
      return json;
    },
    login: async (email, password) => {
      let json = await request("post", "/auth/login", { email, password });
      return json;
    },
    register: async (name, email, cpf, password, password_confirm) => {
      let json = await request("post", "/auth/register", { name, email, cpf, password, password_confirm });
      return json;
    },
  };
};
