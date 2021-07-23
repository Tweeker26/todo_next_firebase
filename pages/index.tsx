import { useEffect } from 'react';

import Layout from '@/components/Layout';
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const auth = useAuth();
  const user = auth?.user;

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user]);

  return <Layout user={user}>INDEX</Layout>;
}
