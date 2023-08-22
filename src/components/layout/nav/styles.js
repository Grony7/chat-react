import styled from "styled-components";
import {Link} from 'react-router-dom';

export const NavSection = styled.nav`
  display: flex;
  margin-left: -30px;
`;

export const NavLink = styled(Link)`
  display: block;
  padding: 26px 30px;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  
  &:hover {
    opacity: 0.7;
  }
`
