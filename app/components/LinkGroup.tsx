// Path: app/components/LinkGroup.tsx
import React, { type ReactNode } from 'react';

interface Props {
  title: string
  children: ReactNode[]
};

const LinkGroup = ({ children, title }: Props): ReactNode => {
  return (
    <details>
      <summary>{title}</summary>
      <ul className="p-2 bg-base-100 rounded-t-none">
        {
          children?.map((child: ReactNode, index: number) => {
            return <li key={index}>{child}</li>;
          })
        }
      </ul>
    </details>
  );
};

export default LinkGroup;
