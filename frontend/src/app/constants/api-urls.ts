import { environment } from "../../environments/environment"; 

const apiBaseUrl = environment.apiUrl;

export const API_URLS = {
  csrf: `${apiBaseUrl}/sanctum/csrf-cookie`,
  login: `${apiBaseUrl}/api/login`,
  logout: `${apiBaseUrl}/api/logout`,
  user: `${apiBaseUrl}/api/user`,
  message: `${apiBaseUrl}/message`
};