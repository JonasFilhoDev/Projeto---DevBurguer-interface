import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001',
});


api.interceptors.request.use((config) => {
    let token = null;
    try {
        const stored = localStorage.getItem('devburguer:userData');
        if (stored) {
            const parsed = JSON.parse(stored);
            token = parsed?.token || null;
        }
    } catch (e) {
        token = null;
    }

    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }

    return config;
});