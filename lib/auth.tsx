import { useState, useEffect, useContext, createContext } from 'react';
import Router from 'next/router';

import firebase from './firebase';
import { IAuthContext, UserType } from '../types';

const defaultContext: IAuthContext = {
  user: null,
  loading: false,
  signInWithEmail: ({ email, password }) => new Promise((resolve) => resolve(null)),
  signOut: () => null,
};

const AuthContext = createContext<IAuthContext>(defaultContext);

export function AuthProvider({ children }: any) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth(): IAuthContext {
  const [user, setUser] = useState<UserType>(null);
  const [loading, setLoading] = useState(true);

  const handleUser = (user: UserType) => {
    if (user) {
      setUser(user);
      setLoading(false);
      return user;
    } else {
      setUser(null);
      setLoading(false);
      return false;
    }
  };

  const signInWithEmail = ({ email, password }: { email: string; password: string }) => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        handleUser(response.user);
        Router.push('/');
      });
  };

  const signOut = () => {
    Router.push('/login');

    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(null));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    signInWithEmail,
    signOut,
  };
}
