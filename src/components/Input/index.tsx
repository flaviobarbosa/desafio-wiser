// import { StyledInput } from './Input';
import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  p {
    font-size: 10px;
    line-height: 48px;

    margin-left: 3rem;
    margin-bottom: -1rem;
    margin-top: -0.5rem;

    color: #ff377f;
  }

  .invalidEmail {
    border: 1px solid #ff377f;
  }

  @media (min-width: 768px) {
    p {
      margin-left: 1.5rem;
    }
  }
`;

const Input: React.FC = ({ children }) => <StyledInput>{children}</StyledInput>;

export default Input;
