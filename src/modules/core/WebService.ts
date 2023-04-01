import _ from 'lodash';

type ApiConfig = {
  baseUrl?: string;
};

interface WebServiceProtocol {
  get: <T>(url: string, params?: any, config?: ApiConfig) => Promise<T>;
}

export class WebService implements WebServiceProtocol {
  defaultConfig: {baseUrl: string};

  constructor() {
    this.defaultConfig = {
      baseUrl: 'https://dev.obtenmas.com/catom/api/',
    };
  }

  get: <T>(url: string, params?: any, config?: ApiConfig) => Promise<T> = (
    url,
    params,
    config = this.defaultConfig,
  ) => {
    const queryParams = Object.keys(_.omitBy(params ?? {}, _.isNil))
      .map((key: string) => `${key}=${encodeURIComponent(params[key])}`)
      .join('&');
    return fetch(`${config.baseUrl}/${url}?${queryParams}`, {
      method: 'GET',
    }).then(response => response.json());
  };
}
