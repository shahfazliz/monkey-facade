import type { User } from '../types/userType';

const readUsers = async (): Promise<Response> => {
    return await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' }); 
}

export { readUsers };