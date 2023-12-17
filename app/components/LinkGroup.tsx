// Path: app/components/LinkGroup.tsx
import React, { type ReactNode } from 'react';

interface Props {
  title: string
  children: ReactNode[]
};

/**
 * @author Jor-El
 * @description This component renders a group of links with a title.
 * @param {string} title The title of the group.
 * @param {ReactNode[]} children The links to be rendered.
 * @returns {ReactNode} The group of links.
 * @example
 * <LinkGroup title="Social Media">
 *   <a href="https://twitter.com">Twitter</a>
 *   <a href="https://facebook.com">Facebook</a>
 *   <a href="https://instagram.com">Instagram</a>
 * </LinkGroup>
 */
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
