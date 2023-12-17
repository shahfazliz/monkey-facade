// Path: app/components/NavBar.tsx
import React, { type ReactNode } from 'react';

interface Props {
  title: string
  children: ReactNode[]
};

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
