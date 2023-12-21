'use client';
import { type UserType } from '@/app/types/userType';
import React, { type ReactNode, useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';

/**
 * @author Jor-El
 * @module NewUserPage
 * @description A component for creating a new user.
 *
 * @param {Object} props The component props.
 * @param {function} props.onCreateUser A callback function to create a new user.
 *
 * @returns {React.Component} The NewUserPage component.
 *
 * @example
 * const App = () => {
 *   const [user, setUser] = useState(null);
 *
 *   const createUser = (newUser) => {
 *     setUser(newUser);
 *   };
 *
 *   return (
 *     <div>
 *       <NewUserPage onCreateUser={createUser} />
 *     </div>
 *   );
 * };
 */
interface Props {
  onCreateUser: (user: Partial<UserType>) => void
}

const NewUserPage = ({ onCreateUser }: Props): ReactNode => {
  const router = useRouter();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    const [firstName, lastName] = name.split(' ');

    const user: Partial<UserType> = {
      firstName,
      lastName,
      email,
      password,
    };

    onCreateUser(user);
    router.push('/');
  };

  return (
    <div>
      <h1>Create New User</h1>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => { setName(e.target.value); }} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value); }} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value); }} />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewUserPage;
