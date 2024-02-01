import React, { useState } from 'react';
import { createUser } from '../services/userAPI';
import Header from '../components/Header';
import Loading from './Loading';

export default function Login() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleClick = async (event: React.MouseEvent) => {
    event.preventDefault();
    setLoading(true);
    await createUser({ name: username });
    setLoading(false);
  };

  const loginForm = () => {
    return (
      <>
        <Header />
        <form>
          <input
            value={ username }
            onChange={ handleUsernameChange }
            type="text"
            data-testid="login-name-input"
          />
          <button
            onClick={ handleClick }
            disabled={ username.length < 3 }
            data-testid="login-submit-button"
          >
            Entrar
          </button>
        </form>
      </>
    );
  };

  return (loading ? <Loading /> : loginForm());
}
