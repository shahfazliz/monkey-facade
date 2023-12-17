// Path: app/builders/UsersPageBuilder.tsx
import { fetchUsers } from '../proxies/userProxy';
import React from 'react';
import type { User } from '../types/userType';
import Users from '../components/Users';

/**
 * @author Jor-El
 * @description This component renders the Users page, which displays a list of users.
 * @returns {ReactNode} The UsersPage component.
 * @example
 * ```
 *  <UsersPageBuilder />
 * ```
 */
const UsersPageBuilder = async (): Promise<JSX.Element> => {
  const users: User[] = await fetchUsers();

  return <Users users={users} />;
};

export default UsersPageBuilder;
