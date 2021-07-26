import { NextApiRequest, NextApiResponse } from 'next';

import firebase from '@/lib/firebase';
import { TodoItem } from '@/types/index';

async function getTodos(req: NextApiRequest, res: NextApiResponse) {
  try {
    const firestore = firebase.firestore();
    const snapshot = await firestore.collection('todos').get();
    const todos: TodoItem[] = [];

    snapshot.forEach((doc) => {
      todos.push(doc.data() as TodoItem);
    });

    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error });
  }
}

export default getTodos;
