import { useEffect } from 'react';
import { useRouter } from 'next/router';

import firebase from '@/lib/firebase';
import Layout from '@/components/Layout';
import Table from '@/components/Table';
import AddTodo from '@/components/AddTodo';

import styles from '@/styles/Main.module.css';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { currentUser } = firebase.auth();
        localStorage.setItem('uid', currentUser!.uid);
      } else {
        localStorage.setItem('uid', '');
        router.push('/login');
      }
    });
  }, []);

  return (
    <Layout>
      <main className={styles.main}>
        <AddTodo />
        <Table />
      </main>
    </Layout>
  );
}
