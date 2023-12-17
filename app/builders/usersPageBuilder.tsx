// Path: app/builders/UsersPageBuilder.tsx
import { fetchUsers } from '../proxies/userProxy';
import React from 'react';
import type { User } from '../types/userType';
import Users from '../components/Users';

const UsersPageBuilder = async (): Promise<JSX.Element> => {
  const users: User[] = await fetchUsers();

  return <Users users={users} />;
};

export default UsersPageBuilder;
