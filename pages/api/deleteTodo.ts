import { NextApiRequest, NextApiResponse } from 'next';

import firebase from '@/lib/firebase';

async function deleteTodo(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { body: id } = req;

    const firestore = firebase.firestore();
    await firestore.collection('todos').doc(String(id)).delete();

    res.status(200).json(true);
  } catch (error) {
    res.status(500).json({ error });
  }
}

export default deleteTodo;
