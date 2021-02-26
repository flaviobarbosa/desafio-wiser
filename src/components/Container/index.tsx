import styled from 'styled-components';

export default styled.div`
  @media (min-width: 768px) {
    main {
      max-width: 768px;
      display: flex;
      height: 1024px;
      background-color: #faf5ff;
      margin: auto;
    }
  }

  @media (min-width: 1024px) {
    main {
      display: flex;
      background-color: #faf5ff;
      margin: auto;
      max-width: 100vw;
      max-height: 100vh;
    }
  }
`;
