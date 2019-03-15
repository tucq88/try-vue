import axios from 'axios';

const host = '/';

// build http header
function buildHeader(): { [key: string]: string } {
  return {
    'Content-Type': 'application/json',
  };
}

export let ax = axios.create({
  baseURL: host,
  headers: buildHeader(),
  timeout: 10000,
  responseType: 'json',
  transformRequest: [
    (data) => {
      return data;
    },
  ],
  transformResponse: [
    (data) => {
      if (!data) {
        const msg = 'Unknow Error';
        throw new Error(msg);
      }
      return data;
    },
  ],
});

ax.interceptors.request.use((config) => {
  const identity = localStorage.getItem('user');
  config.headers.Authorization =  identity ? `Bearer ${identity.email}` : '';
  return config;
}, (error) => {
  return Promise.reject(error);
});

/* tslint:disable-next-line */
function processData(data: any = {}) {
  if (data instanceof FormData) {
    // data.append('token', token)
  } else {
    // data.token = token
  }

  return data;
}

function handleError(err: any) {
  if (axios.isCancel(err)) {
    // handle cancel
  } else {
    // alert error
  }
}

export function get<T>(url: string, data?: any): Promise<T> {
  return ax
    .get(url, {
      params: processData(data),
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      handleError(err);
      throw err;
    });
}

export function post<T>(url: string, data?: any): Promise<T> {
  return ax
    .post(url, processData(data))
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      handleError(err);
      throw err;
    });
}
