import firebase from '@/lib/firebase';

export type TodoItem = {
  createdAt: Date;
  isComplete: boolean;
  owner: string;
  title: string;
};

export interface IAuthContext {
  user: firebase.User | null;
  loading: boolean;
  signInWithEmail: (email: string, password: string) => void;
  signOut: () => void;
}
