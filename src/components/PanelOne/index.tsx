import styled from 'styled-components';

export default styled.div`
  background-image: linear-gradient(360deg, #130525 0%, rgba(105, 57, 153, 0) 100%),
    URL('/res/images/shutterstock.png');
  background-size: cover;
  width: 380px;
  height: 407px;

  @media (min-width: 768px) {
    width: 325px;
    height: inherit;
    background-position-x: -23rem;
  }

  @media (min-width: 1024px) {
    width: 910px;
    height: 100%;
    background-position-x: 0;
  }
`;
