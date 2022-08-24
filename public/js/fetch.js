
const fetchData = (method, data, endpoint) => fetch(endpoint, {
  method,
  body: JSON.stringify(data),
  headers: { 'Content-type': 'application/json' },
}).then((res) =>res.json(data));
