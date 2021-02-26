import { useState } from 'react';
import api from '../../api';
import Button from '../Button';
import Card from '../Card';
import Input from '../Input';
import PasswordReset from '../PasswordReset';
import Subtitle from '../Subtitle';
import Title from '../Title';

const Form: React.FC = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const emailIsNotValid = () => {
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return !valid;
  };

  const submit = () => {
    if (emailIsNotValid()) {
      setInvalidEmail(true);

      return;
    }
    const login = { email, password };

    api.post('/login', login).then(success).catch(failed);
  };

  const success = () => {
    alert('Sucesso');
    setInvalidEmail(false);
  };

  const failed = () => {
    alert('Erro');
  };

  return (
    <Card>
      <Title />
      <Subtitle />
      <form>
        <Input>
          <label htmlFor='email'>e-mail</label>
          <input
            type='email'
            className={invalidEmail ? 'invalidEmail' : ''}
            value={email}
            onChange={(e) => setEmail(e.target.value)}></input>
          {invalidEmail && <p>Digite um email válido</p>}
        </Input>
        <Input>
          <label htmlFor='password'>senha</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}></input>
        </Input>
        <Button click={submit}>entrar</Button>
      </form>
      <PasswordReset />
    </Card>
  );
};

export default Form;
