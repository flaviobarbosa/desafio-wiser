import styled from 'styled-components';

import Input from '../Input';
import Button from '../Button';
import PasswordReset from '../PasswordReset';
import Title from '../Title';
import Subtitle from '../Subtitle';
import Card from '../Card';

const Form: React.FC = () => (
  <Card>
    <Title />
    <Subtitle />
    <Input>
      <label htmlFor='email'>e-mail</label>
      <input type='email' name='email' id='email'></input>
    </Input>
    <Input>
      <label htmlFor='password'>senha</label>
      <input type='password' name='password' id='password'></input>
    </Input>
    <Button>entrar</Button>
    <PasswordReset />
  </Card>
);

export default Form;
