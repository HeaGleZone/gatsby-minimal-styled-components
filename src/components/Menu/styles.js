import styled from 'styled-components';

const MenuStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: content-box;
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.background_secondary};
  transition: transform 0.4s ease, background 0.2s ease;
  transform: ${props =>
    props.isOpen ? 'translate(0%, 0)' : 'translate(100%, 0)'};
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  z-index: 100;

  & a {
    position: relative;
    margin: 0 0.4em 0 0.4em;
    font-weight: bold;

    & ::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: ${props => props.theme.background_secondary};
      transition: width 0.3s;
    }

    & :hover {
      & ::after {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;

const Content = styled.div`
  position: relative;
  top: 0;
  width: 100vw;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15% 0 15% 0;
  overflow: auto;

  & a {
    font-size: 24px;

    &:last-child {
      margin-bottom: 0em;
    }
  }
`;

export { MenuStyled, Content };
