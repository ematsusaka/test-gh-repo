import { request } from './client';
import type { Post } from '../types';

export function getPosts(): Promise<Post[]> {
  return request<Post[]>('/posts');
}

export function getPostsByUserId(userId: number): Promise<Post[]> {
  return request<Post[]>(`/posts?userId=${userId}`);
}
