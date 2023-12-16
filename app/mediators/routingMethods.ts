'use client';
import { useRouter } from 'next/navigation';

const HandleOnClickRoute = ({ route, id }: { route: string, id: number }) => {
  const router = useRouter();

  return () => {
    router.push(`${route}/${id}`);
  };
};

export { HandleOnClickRoute as handleOnClickRoute };
