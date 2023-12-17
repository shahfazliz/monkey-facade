// Path: app/components/Users.tsx
import React from 'react';
import { type User } from '../types/userType';

interface UsersProps {
  users: User[]
}

const Users = async ({ users }: UsersProps): Promise<JSX.Element> => {
  return (<>
    <div>Users</div>
    <ul>
      {users.map((user: User) => (<li key={user.id}>{user.name}</li>))}
    </ul>
  </>);
};

export default Users;
