import Layout from '@/components/Layout';
import { useAuth } from '@/lib/auth';
// import { useRouter } from 'next/router';

export default function Home() {
  const auth = useAuth();
  const user = auth?.user;

  return <Layout user={user}>LOGIN</Layout>;
}
