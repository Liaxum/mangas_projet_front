import axios from 'axios';

export function createRequest() {
  // eslint-disable-next-line new-cap
  return new axios.create({
    baseUrl: 'https://615b594d4a360f0017a815df.mockapi.io/',
  });
}

export class ApiError extends Error {
  constructor(exception) {
    super(exception.messageException);
    this.code = exception.code;
    this.message = exception.message;
  }
}

export function errorHandler(error) {
  throw new ApiError({ exceptionMessage: error.message, code: error.code });
}

export function successHandler(res) {
  if (res.statusCode !== 200 || ('success' in res.data && !res.data.success)) {
    return Promise.reject(new ApiError(res.data));
  }
  return res.data;
}
