import styled from 'styled-components';

const FooterStyled = styled.footer`
  min-height: 80px;
  background: ${props => props.theme.background_secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4px 6px 4px 6px;

  & p {
    margin: 0;
    text-align: center;
  }
`;

export { FooterStyled };
