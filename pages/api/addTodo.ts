import { NextApiRequest, NextApiResponse } from 'next';

import firebase from '@/lib/firebase';
import { TodoItem } from '@/types/index';

const { Timestamp } = firebase.firestore;

async function addTodo(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { body } = req;
    const { todo, uid } = JSON.parse(body);

    const firestore = firebase.firestore();
    const todoRef = firestore.collection('todos').doc();

    const data: TodoItem = {
      createdAt: Timestamp.now(),
      isComplete: false,
      owner: uid,
      title: todo,
      id: todoRef.id,
    };

    await todoRef.set(data);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
}

export default addTodo;
