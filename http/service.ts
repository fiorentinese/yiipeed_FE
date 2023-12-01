import axios, { type AxiosInstance } from 'axios';

const headers = {
	Accept: 'application/json',
	'Content-Type': 'application/json; charset=utf-8',

	'Accept-Language': 'it',
};
const injectToken = (config: any) => {
	try {
		const token = localStorage.getItem('token');
		if (token != null) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	} catch (error) {
		// console.log(error)
		return config;
	}
};
export class Http {
	instance: AxiosInstance | any = null;
	public http: any;

	constructor() {
		return this.instance !== null ? this.instance : this.initHttp();
	}

	initHttp() {
		const http = axios.create({
			baseURL: import.meta.env.VITE_ENDPOINT || 'http://127.0.0.1:5000',
			headers,
		});
		http.interceptors.request.use(
			config => {
				return injectToken(config);
				//config.headers.Authorization = `Bearer 12345`;
				return config;
			},
			error => {
				const { response } = error;
				return Promise.reject(response);
			},
		);

		http.interceptors.response.use(
			response => {
				return response;
			},
			error => {
				const { response } = error;
				this.handleError(response);
				return Promise.reject(response);
			},
		);

		this.instance = http;
		return http;
	}

	request(config: any) {
		return this.http.request(config);
	}

	get(url: string) {
		return this.http.get(url);
	}

	post(url: string, data: any, config?: any) {
		return this.instance.post(url, data, config);
	}

	patch(url: string, data: any, config?: any) {
		return this.http.patch(url, data, config);
	}

	put(url: string, data: any) {
		return this.http.put(url, data);
	}

	delete(url: string) {
		return this.http.delete(url);
	}
	handleError(error: any) {
		if (error) {
			const { status } = error;

			switch (status) {
				case 500: {
					// Handle InternalServerError
					break;
				}
				case 403: {
					// Handle Forbidden
					break;
				}
				case 401: {
					// Handle Unauthorized
					break;
				}
				case 429: {
					// Handle TooManyRequests
					break;
				}
			}
		} else {
			console.warn('🆘 No internet connection found. App is running in offline mode.');
		}
	}
}

export const http = new Http();
