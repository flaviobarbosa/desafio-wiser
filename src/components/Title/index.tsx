import styled from 'styled-components';

const TitleStyled = styled.div`
  font-size: 24px;
  line-height: 32px;
  color: #383e71;

  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }

  @media (min-width: 1024px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

const Title: React.FC = () => (
  <TitleStyled>
    <p>Olá, seja</p>
    <p>bem-vindo!</p>
  </TitleStyled>
);

export default Title;
