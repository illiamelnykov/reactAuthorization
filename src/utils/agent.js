import axios from 'axios';

const agent = axios.create({
  baseURL: '/',
});

agent.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  return {
    ...config,
    headers: { ...config.headers, 'x-api-key': `${token}` },
  }
});

async function request({ method, url, data }) {
  try {
    return await agent({
      method,
      url,
      data,
    });
  } catch(e) {
    return e;
  }
};
export default request;