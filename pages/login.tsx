import { useAuth } from '@/lib/auth';
import Layout from '@/components/Layout';
import LoginForm from '@/components/LoginForm';

export default function Login() {
  const { user } = useAuth();

  return (
    <Layout user={user}>
      <LoginForm />
    </Layout>
  );
}
