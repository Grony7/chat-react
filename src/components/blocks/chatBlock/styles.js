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
  width: 100%;
  height: 70vh;
  border: 1px solid #000;
  margin: 10px 0;
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

export const MessageWrapper = styled.div`
  display: grid;
  grid-auto-columns: auto 1fr;
  grid-template-areas: 
    'avatar name'
    'avatar text';
  max-width: 50%;
`;

export const MessageAvatar = styled.img`
  grid-area: avatar;
`;

export const MessageAuthor = styled.span`
  grid-area: name;
  margin: 0 auto 0 0;
`;

export const MessageText = styled.p`
  grid-area: text;
  margin: 0 auto 0 0;
`;
