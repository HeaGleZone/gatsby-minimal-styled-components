import styled from 'styled-components';

const MenuButtonStyled = styled.button`
  /* display: none; */
  width: 36px;
  height: 36px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  outline: none;
  position: relative;
  z-index: 101;

  @media screen and (max-width: 800px) {
    display: block;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  display: block;
  background: ${props => props.theme.primary};
  position: absolute;
`;

const Top = styled(Line)`
  transform: rotate(0);
  transition: 0.4s transform ease, 0.4s top ease, 0.2s background ease;
  top: ${props => (props.isClicked ? '17px' : '7px')};
  transform: ${props => (props.isClicked ? 'rotate(45deg)' : 'rotate(0deg)')};
`;

const Center = styled(Line)`
  top: 17px;
  transition: 0.4s opacity ease, 0.4s, 0.2s background ease;
  opacity: ${props => (props.isClicked ? 0 : 1)};
`;

const Bottom = styled(Line)`
  transform: rotate(0);
  transition: 0.4s transform ease, 0.4s top ease, 0.2s background ease;
  top: ${props => (props.isClicked ? '17px' : '27px')};
  transform: ${props => (props.isClicked ? 'rotate(-45deg)' : 'rotate(0deg)')};
`;

export { MenuButtonStyled, Top, Bottom, Center };
