import { request } from './client';
import type { User } from '../types';

export function getUsers(): Promise<User[]> {
  return request<User[]>('/users');
}

export function getUserById(id: number): Promise<User> {
  return request<User>(`/users/${id}`);
}
