import styled from 'styled-components';

export const MessageWrapper = styled.div`
  display: flex;
  
  flex-grow: 0;
  max-width: 50%;
  margin: ${(props) => (props.$isMyMessage ? '0 0 8px  auto' : '0 auto 8px 0')};
  
  &:last-of-type {
    margin-bottom: 0;
  }
`;


export const MessageAvatar = styled.img`
  border-radius: 50%;
  margin: auto 8px 0 0;
`;

export const MessageTextWrapper = styled.div`
  position: relative;
  padding: 10px;
  background-color: #ade5fd;
  border-radius: ${(props) => (props.$isMyMessage ? '10px 10px 0 10px' : '10px 10px 10px 0' )};
  
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    ${(props) => (props.$isMyMessage ? 'right: -5px' : 'left: -5px' )};
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #ade5fd transparent;
  }
`;

export const MessageAuthor = styled.span`
  display: block;
  margin: 0 auto 8px 0;
  font-size: 18px;
  line-height: 20px;
  color: #3f6679;
`;

export const MessageText = styled.p`
  margin: 0 auto 0 0;
  font-size: 16px;
  line-height: 20px;
  text-wrap: balance;
`;
