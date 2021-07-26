import Layout from '@/components/Layout';
import LoginForm from '@/components/LoginForm';

import styles from '@/styles/Main.module.css';

export default function Login() {
  return (
    <Layout>
      <main className={styles.main}>
        <LoginForm />
      </main>
    </Layout>
  );
}
