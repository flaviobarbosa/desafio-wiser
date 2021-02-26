import styled from 'styled-components';

const Panel = styled.div`
  background: #130525;
  width: 380px;
  height: 300px;
  position: relative;

  @media (min-width: 768px) {
    background: inherit;
    width: 440px;
    height: inherit;
    position: relative;
  }

  @media (min-width: 1024px) {
    background: inherit;
    height: 100%;
    width: calc(100% - 910px);
    min-width: 400px;

    display: flex;
    align-items: center;
  }
`;

const PanelTwo: React.FC = ({ children }) => <Panel>{children}</Panel>;

export default PanelTwo;
