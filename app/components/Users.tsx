import { User } from "../types/userType";

type UsersProps = {
  users: Array<User>
};

const Users = async ({ users }: UsersProps) => {
  return (<>
    <div>Users</div>
    <ul>
      {users.map((user: User) => (<li key={user.id}>{user.name}</li>))}
    </ul>
  </>);
};

export default Users;