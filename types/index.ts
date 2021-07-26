import firebase from '@/lib/firebase';

export type TodoItem = {
  createdAt: firebase.firestore.Timestamp;
  isComplete: boolean;
  owner: string;
  title: string;
  id: string;
};

export interface IAuthContext {
  user: UserType;
  loading: boolean;
  signInWithEmail: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<UserType | void>;
  signOut: () => void;
}

export type UserType = firebase.User | null | undefined;
