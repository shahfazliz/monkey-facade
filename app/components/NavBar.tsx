// Path: app/components/NavBar.tsx
import React, { type ReactNode } from 'react';

interface Props {
  title: string
  children: ReactNode[]
};

/**
 * @author Jor-El
 * @description A simple navigation bar for the application.
 *
 * @param title The title of the navigation bar.
 * @param children The children of the navigation bar.
 *
 * @returns The navigation bar.
 *
 * @example
 * const navBar = (
 *   <NavBar title="My App">
 *     <a href="/">Home</a>
 *     <a href="/about">About</a>
 *   </NavBar>
 * );
 */
const NavBar = ({ children, title }: Props): ReactNode => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{title}</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {
            children.map((child: ReactNode, index: number) => {
              return <li key={index}>{child}</li>;
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
