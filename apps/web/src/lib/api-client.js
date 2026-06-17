/**
 * API Server Client
 * 
 * This is a helper to make requests to the backend API.
 * The backend is served at /hcgi/api
 * 
 * Usage:
 * const response = await apiServerClient.fetch('/hitpay/initialize', {
 *   method: 'POST',
 *   body: JSON.stringify({ ... })
 * });
 * const data = await response.json();
 */

const API_BASE_URL = '/hcgi/api';

export const apiServerClient = {
  fetch: async (endpoint, options = {}) => {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const mergedOptions = {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    };

    return fetch(url, mergedOptions);
  },
};