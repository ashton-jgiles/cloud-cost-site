import { api } from './axios';

export const GetServices = async () => {
    const response = await api.get('/services/getServices');
    return response.data;
}

export const GetCostByProvider = async () => {
    const response = await api.get('/costs/costsByProvider'); // Calls NestJS GET /user
    return response.data;
};

export const GetCostByService = async () => {
    const response = await api.get('/costs/costsByService');
    return response.data;
}

export const CostByTeam = async () => {
    const response = await api.get('costs/costsByTeam');
    return response.data;
}

export const CostTrend = async () => {
    const response = await api.get('costs/costsTrend');
    return response.data;
}