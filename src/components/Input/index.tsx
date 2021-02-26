// import { StyledInput } from './Input';
import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Input: React.FC = ({ children }) => <StyledInput>{children}</StyledInput>;

export default Input;
