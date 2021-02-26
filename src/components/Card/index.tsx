import styled from 'styled-components';

const CardStyled = styled.div`
  position: absolute;
  top: -260px;
  left: 32px;
  background: #faf5ff;
  border-radius: 8px;
  width: 311px;
  height: 357px;
  text-align: center;

  @media (min-width: 768px) {
    position: relative;
    margin: 18rem auto;
    top: 0;
    left: 0;
    width: 70%;
    text-align: left;
  }

  @media (min-width: 1024px) {
    position: relative;
    margin: 18rem auto;
    top: 0;
    left: 0;
    max-width: 297px;
    height: fit-content;
    text-align: left;
  }
`;

const Card: React.FC = ({ children }) => <CardStyled>{children}</CardStyled>;

export default Card;
