import { api } from './axios';

export const GetProviders = async () => {
    const response = await api.get('/providers/getProviders');
    return response.data;
}