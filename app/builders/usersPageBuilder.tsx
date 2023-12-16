import type { User } from '../types/userType';
import { fetchUsers } from '../proxies/userProxy';
import Users from '../components/Users';

const usersPageBuilder = async () => {
  const users: Array<User> = await fetchUsers();

  return <Users users={users} />;
};

export default usersPageBuilder;
