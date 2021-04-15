const baseUrl = "https://apiatletica.herokuapp.com/api";
// const baseUrl = "http://127.0.0.1:8000/api";

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
    login: async (cpf, password) => {
      let json = await request("post", "/auth/login", { cpf, password });
      return json;
    },
    register: async (data) => {
      let json = await request("post", "/auth/register", { data });
      return json;
    },
    logout: async () => {
      let token = await localStorage.getItem("token");
      let json = await request("post", "/auth/logout", {}, token);
      localStorage.removeItem("token");
      return json;
    },

    getWall: async () => {
      let token = await localStorage.getItem("token");
      let json = await request("get", "/walls", {}, token);
      return json;
    },
    updateWall: async (id, data) => {
      let token = await localStorage.getItem("token");
      let json = await request("put", `/wall/${id}`, data, token);
      return json;
    },
    addWall: async (data) => {
      let token = await localStorage.getItem("token");
      let json = await request("post", "/walls", data, token);
      return json;
    },
    removeWall: async (id) => {
      let token = await localStorage.getItem("token");
      let json = await request("delete", `/wall/${id}`, {}, token);
      return json;
    },

    getDocuments: async () => {
      let token = await localStorage.getItem("token");
      let json = await request("get", "/docs", {}, token);
      return json;
    },
    addDocument: async (data) => {
      let token = await localStorage.getItem("token");
      let formData = new FormData();
      formData.append('title', data.title);
      if(data.file) {
        formData.append('file', data.file);
      }
      let req = await fetch(`${baseUrl}/docs`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });
      let json = await req.json();
      return json;
    },
    updateDocument: async (id, data) => {
      let token = await localStorage.getItem("token");
      let formData = new FormData();
      formData.append('title', data.title);
      if(data.file) {
        formData.append('file', data.file);
      }
      let req = await fetch(`${baseUrl}/doc/${id}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });
      let json = await req.json();
      return json;
    },
    removeDocument: async (id) => {
      let token = await localStorage.getItem("token");
      let json = await request("delete", `/doc/${id}`, {}, token);
      return json;
    },

    getReservations: async () => {
      let token = await localStorage.getItem("token");
      let json = await request("get", '/reservations', {}, token);
      return json;
    },

    getUnits: async () => {
      let token = await localStorage.getItem("token");
      let json = await request("get", '/courses', {}, token);
      return json;
    },
    getAreas: async () => {
      let token = await localStorage.getItem("token");
      let json = await request("get", '/courses', {}, token);
      return json;
    },
    addReservation: async (data) => {
      let token = await localStorage.getItem("token");
      let json = await request("post", '/reservations', data, token);
      return json;
    },
    updateReservation: async (id, data) => {
      let token = await localStorage.getItem("token");
      let json = await request("put", `/reservations/${id}`, data, token);
      return json;
    },
    removeReservation: async (id) => {
      let token = await localStorage.getItem("token");
      let json = await request("delete", `/reservations/${id}`, {}, token);
      return json;
    },
    
    getBillets: async () => {
      let token = await localStorage.getItem("token");
      let json = await request("get", '/billets', {}, token);
      return json;
    },

    getCourses: async () => {
      let token = await localStorage.getItem("token");
      let json = await request("get", "/courses", {});
      return json;
    },
  };
};
