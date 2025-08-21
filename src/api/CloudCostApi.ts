import { api } from '../api/axios';
import type { User } from '../types/User';

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get('/users/user'); // Calls NestJS GET /user
  return response.data;
};