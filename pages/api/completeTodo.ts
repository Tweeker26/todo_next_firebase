import { NextApiRequest, NextApiResponse } from 'next';

import firebase from '@/lib/firebase';

async function completeTodo(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { body } = req;
    const { id, isComplete } = JSON.parse(body);

    const firestore = firebase.firestore();
    await firestore.collection('todos').doc(String(id)).update({
      isComplete,
    });

    res.status(200).json(true);
  } catch (error) {
    res.status(500).json({ error });
  }
}

export default completeTodo;
