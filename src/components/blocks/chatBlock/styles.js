import styled from 'styled-components';
import {Section} from '../../styled/index.js';

export const StyledSection = styled(Section)`
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 0;
  flex-direction: column;
  background-color: ${(props) => props.theme.colorWhite};
`;
export const ChatField = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70vh;
  padding: 10px;
  border: 1px solid #000;
  margin: 10px 0;
  overflow: auto;

  -ms-overflow-style: none;
  scrollbar-width: none; 

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
`;

export const Field = styled.input`
  padding: 6px 10px;
  margin: 0 16px 0 0;
  flex-grow: 1;
`;

export const FieldButton = styled.button`
  padding: 16px 8px;
`;
