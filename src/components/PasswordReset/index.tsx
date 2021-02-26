import styled from 'styled-components';

const PasswordResetStyled = styled.div`
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;

  display: flex;
  flex-direction: column;

  margin-top: 7.5rem;

  a {
    color: #ffffff;
  }

  @media (min-width: 768px) {
    color: #989fdb;
    margin-top: 2rem;

    a {
      color: #c728a7;
    }
  }

  @media (min-width: 1024px) {
    color: #989fdb;
    margin-top: 2rem;

    a {
      max-width: 297px;
    }
  }
`;

const PasswordReset = () => {
  return (
    <PasswordResetStyled>
      <p>Esqueceu seu login ou senha?</p>
      <p>
        Clique <a href='#'>aqui</a>
      </p>
    </PasswordResetStyled>
  );
};

export default PasswordReset;
