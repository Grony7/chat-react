import styled from "styled-components";
import {Section} from '../../styled';
import {Link} from 'react-router-dom';
import {SlLogout, SlLogin} from 'react-icons/sl';


export const HeaderWrapper = styled.header `
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
  0 0 1px rgba(0, 0, 0, 0.04);
  background-color: #3cc4ff;
  z-index: 5;
  color: ${(props) => props.theme.colorWhite};
`;

export const StyledSection = styled(Section)`
  position: relative;
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 0;
  
  justify-content: space-between;
  align-items: center;
`;

export const LoginLink = styled(Link)`
  display: flex;
  align-items: center;
  
  margin-right: -15px;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  
  &:hover {
    opacity: 0.7;
  }
`;

export const LoginIcon = styled(SlLogin)`
  width: 24px;
  height: 24px;
  padding: 15px;

  fill: ${(props) => props.theme.colorWhite};
`;

export const LogOutWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogOutButton = styled.button`
  margin-right: -15px;
  background-color: transparent;
  border: none;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const LogOutIcon = styled(SlLogout)`
  width: 24px;
  height: 24px;
  padding: 15px;
  
  fill: ${(props) => props.theme.colorWhite};
  
  &:hover {
    opacity: 0.7;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

export const UserName = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px
`;

export const UserPhoto = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 10px;

  border-radius: 50%;
  object-fit: cover;
`;
