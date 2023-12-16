import type { User } from '../types/userType';

const fetchUsers = async (): Promise<Array<User>> => {
    // Services can come from anywhere, so we need to import them dynamically
    // maybe some logic to use other service here
    // UserService = import('../services/otherService');
    const UserServices = import('../services/jsonPlaceholder');
    const { readUsers: getUsers } = await UserServices;

    const response = await getUsers();
    const users: Array<User> = await response.json();
    return users;
}

export { fetchUsers };