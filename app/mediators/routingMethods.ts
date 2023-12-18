'use client';
import { useRouter } from 'next/navigation';

type ReturnType = () => void;

/**
 * @module app/mediators/routingMethods.ts
 */
const HandleOnClickRoute = ({ route, id }: { route: string, id: number }): ReturnType => {
  const router = useRouter();

  return () => {
    router.push(`${route}/${id}`);
  };
};

export { HandleOnClickRoute as handleOnClickRoute };
