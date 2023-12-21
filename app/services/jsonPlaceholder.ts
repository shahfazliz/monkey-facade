/**
 * @module app/services/jsonPlaceholder.ts
 * @description This module provides an interface to the JSONPlaceholder API.
 */
const readUsers = async (): Promise<Response> => {
  return await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
};

export { readUsers };
