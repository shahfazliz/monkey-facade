'use client';
import { useRouter } from 'next/navigation';

/**
 * @author Jor-El
 * @module app/mediators/routingMethods.ts
 * @description This file contains a reusable function to handle onClick events for navigation.
 *
 * @param {Object} param0
 * @param {string} param0.route The route to navigate to.
 * @param {number} param0.id The id of the item to navigate to.
 *
 * @returns {Function} A function that can be used as an onClick handler.
 *
 * @example
 * ```
 * import { handleOnClickRoute } from 'app/mediators/routingMethods';
 *
 * const MyComponent = () => {
 *   const handleClick = handleOnClickRoute({ route: '/user', id: 1 });
 *
 *   return (
 *     <button onClick={handleClick}>
 *       Click me to go to the user page
 *     </button>
 *   );
 * };
 * ```
 */
const HandleOnClickRoute = ({ route, id }: { route: string, id: number }): () => void => {
  const router = useRouter();

  return () => {
    router.push(`${route}/${id}`);
  };
};

export { HandleOnClickRoute as handleOnClickRoute };
