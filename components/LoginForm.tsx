import { SyntheticEvent, useState } from 'react';
import { Card, CardActions, CardActionButton } from '@rmwc/card';
import { Typography } from '@rmwc/typography';
import { TextField } from '@rmwc/textfield';
import { createSnackbarQueue, SnackbarQueue } from '@rmwc/snackbar';

import { useAuth } from '@/lib/auth';
import styles from '@/styles/LoginForm.module.css';

const LoginForm = () => {
  const auth = useAuth();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const { messages, notify } = createSnackbarQueue();

  const handleChange = (type: string) => (e: SyntheticEvent) => {
    setLoginData((prev) => ({ ...prev, [type]: e.target.value }));
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    auth.signInWithEmail(loginData).catch((error) => {
      console.log('error------->', error);
      setLoading(false);
      notify({
        title: 'An error occurred.',
        body: error.message,
        icon: 'warning',
        dismissesOnAction: true,
        actions: [{ title: 'Dismiss' }],
      });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className={styles.card}>
        <Typography use="headline6" tag="h2">
          Login form with email and password
        </Typography>
        <TextField
          required
          label="Email"
          value={loginData.email}
          type="email"
          onChange={handleChange('email')}
        />
        <TextField
          required
          label="Password"
          value={loginData.password}
          type="password"
          onChange={handleChange('password')}
        />

        <CardActions fullBleed>
          <CardActionButton
            label="Login"
            trailingIcon="arrow_forward"
            type="submit"
            disabled={loading}
          />
        </CardActions>
      </Card>

      <SnackbarQueue messages={messages} />
    </form>
  );
};

export default LoginForm;
