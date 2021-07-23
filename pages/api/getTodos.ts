import firebase from '@/lib/firebase';
import { TodoItem } from '@/types/index';

async function getTodos(req: Request, res: Response) {
  try {
    const firestore = firebase.firestore();
    const snapshot = await firestore.collection('todos').get();
    const todos: TodoItem[] = [];

    snapshot.forEach((doc) => {
      todos.push(doc.data() as TodoItem);
    });

    // @ts-ignore
    res.status(200).json(todos);
  } catch (error) {
    // @ts-ignore
    res.status(500).json({ error });
  }
}

export default getTodos;
