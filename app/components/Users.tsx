// Path: app/components/Users.tsx
import React from 'react';
import { type User } from '../types/userType';

interface Props {
  users: User[]
}

/**
 * @author Jor-El
 * @description Displays a list of users.
 * @param {UsersProps} props Component properties.
 * @param {User[]} props.users An array of users.
 * @returns {JSX.Element} The Users component.
 * @example
 * const users = [
 *  { id: 1, name: 'John Doe' },
 *  { id: 2, name: 'Jane Doe' },
 * ];
 *
 * return <Users users={users} />;
 */
const Users = async ({ users }: Props): Promise<JSX.Element> => {
  return (
    <>
      <div>Users</div>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Users;
