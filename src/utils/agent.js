import axios from 'axios';

const agent = axios.create({
  baseURL: '/',
});

agent.interceptors.request.use(config => {
  const token = localStorage.get('token');
  return {
    ...config,
    headers: { ...config.headers, 'x-api-key': `${token}` },
  }
});

function request({ method, url, data }) {
  return agent({
    method,
    url,
    data,
  });
};
export default request;