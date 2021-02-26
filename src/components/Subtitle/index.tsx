import styled from 'styled-components';

const SubtitleStyled = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #989fdb;

  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 2rem;
    width: 15rem;
  }

  @media (min-width: 1024px) {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 2rem;
  }
`;

const Subtitle: React.FC = () => (
  <SubtitleStyled>
    <p>Para acessar a plataforma, faça seu login.</p>
  </SubtitleStyled>
);

export default Subtitle;
