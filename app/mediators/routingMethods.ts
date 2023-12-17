// Path: app/mediators/routingMethods.ts
'use client';
import { useRouter } from 'next/navigation';

type ReturnType = () => void;

const HandleOnClickRoute = ({ route, id }: { route: string, id: number }): ReturnType => {
  const router = useRouter();

  return () => {
    router.push(`${route}/${id}`);
  };
};

export { HandleOnClickRoute as handleOnClickRoute };
