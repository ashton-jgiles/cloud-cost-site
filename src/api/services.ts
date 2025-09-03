import { api } from './axios';

export const GetServices = async () => {
    const response = await api.get('/services/getServices');
    return response.data;
}
