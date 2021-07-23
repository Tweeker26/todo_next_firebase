import firebase from '@/lib/firebase';

export type TodoItem = {
  createdAt: Date;
  isComplete: boolean;
  owner: string;
  title: string;
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
