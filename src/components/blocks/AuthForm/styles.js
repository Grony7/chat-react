import styled from 'styled-components';
import {Section} from '../../styled/index.js';
import {Link} from 'react-router-dom';

export const StyledSection = styled(Section)`
  position: relative;
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 0;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colorWhite};
`;

export const LoginWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const AuthGoogleButton = styled.button `
  padding: 10px 15px;
  &:hover {
    opacity: 0.7;
  }
`;
