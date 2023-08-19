import {
  ChatField,
  Field,
  FieldButton,
  FieldWrapper,
  MessageAuthor,
  MessageAvatar, MessageText,
  MessageWrapper,
  StyledSection
} from './styles.js';
import {useContext, useState} from 'react';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {Context} from '../../../app/app.jsx';
import {collection, query, orderBy, addDoc, serverTimestamp} from "firebase/firestore";
import Loader from '../../ui/loader.jsx';
import {useAuthState} from 'react-firebase-hooks/auth';

const ChatBlock = () => {
  const {auth, firestore} = useContext(Context);
  const [user] = useAuthState(auth)
  const [value, setValue] = useState('');

  const messagesRef = collection(firestore, "messages");
  const messagesQuery = query(messagesRef, orderBy("createdAt"));
  const [messages, loading] = useCollectionData(messagesQuery);

  console.log(messages)


  const sendMessage = async () => {
    await addDoc(messagesRef, {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: serverTimestamp()
    });
    setValue('');
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  }

  if (loading) {
    return <Loader/>
  }

  return (
    <StyledSection>
      <ChatField>
        {
          messages.map((message, index) => (

              <MessageWrapper key={index}>
                <MessageAvatar src={message.photoURL} width='30' height='30' alt='аватар' />
                <MessageAuthor>{message.displayName}</MessageAuthor>
                <MessageText>{message.text}</MessageText>
              </MessageWrapper>
            )
          )
        }
      </ChatField>
      <FieldWrapper>
        <Field value={value} onKeyDown={handleKeyDown} onChange={(e) => setValue(e.target.value)}/>
        <FieldButton onClick={sendMessage}>
          Отправить
        </FieldButton>
      </FieldWrapper>
    </StyledSection>
  )
}

export default ChatBlock;
