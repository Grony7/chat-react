import {
  MessageAuthor,
  MessageAvatar,
  MessageText,
  MessageTextWrapper,
  MessageWrapper
} from './styles.js';
import PropTypes from 'prop-types';

const MessageComponent = ({message, isMyMessage}) => {

  return (
    <MessageWrapper $isMyMessage={isMyMessage}>
      {!isMyMessage && <MessageAvatar src={message.photoURL} width='30' height='30' alt='аватар'/>}
      <MessageTextWrapper $isMyMessage={isMyMessage}>
        {!isMyMessage && <MessageAuthor>{message.displayName}</MessageAuthor>} <MessageText>{message.text}</MessageText>
      </MessageTextWrapper>
    </MessageWrapper>
  );
};

MessageComponent.propTypes = {
  isMyMessage: PropTypes.bool.isRequired,
  message: PropTypes.object.isRequired,
};

export default MessageComponent;
