import styled from 'styled-components';

const StyledButton = styled.div`
  width: 168px;
  height: 48px;

  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  border-radius: 8px;

  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;

  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: -1.5rem;
  left: 4.5rem;

  cursor: pointer;

  @media (min-width: 768px) {
    box-shadow: 0px 10px 25px #cf99db;
    position: unset;

    width: 297px;
    height: 48px;

    margin: 2rem auto;
  }

  @media (min-width: 1024px) {
    box-shadow: 0px 10px 25px #cf99db;
    position: unset;

    height: 48px;
    margin-top: 2rem;
  }
`;

const Button: React.FC = ({ children }) => <StyledButton>{children}</StyledButton>;

export default Button;
