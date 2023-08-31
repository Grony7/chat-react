import {
  ChatField,
  Field,
  FieldButton,
  FieldWrapper,
  StyledSection
} from './styles.js';
import {useContext, useEffect, useRef, useState} from 'react';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {Context} from '../../../app/app.jsx';
import {collection, query, orderBy, addDoc, serverTimestamp} from "firebase/firestore";
import Loader from '../../ui/loader.jsx';
import {useAuthState} from 'react-firebase-hooks/auth';
import MessageComponent from '../../ui/messageComponent/messageComponent.jsx';
import {useNavigate} from 'react-router-dom';

const ChatBlock = () => {
  const {auth, firestore} = useContext(Context);
  const [user] = useAuthState(auth)
  const [value, setValue] = useState('');

  const messagesRef = collection(firestore, "messages");
  const messagesQuery = query(messagesRef, orderBy("createdAt"));
  const [messages, loading] = useCollectionData(messagesQuery);

  const ChatFieldRef = useRef(null);

  useEffect(() => {
    if (ChatFieldRef.current) {
      const scrollContainer = ChatFieldRef.current;

      scrollContainer.scrollTop = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    }
  }, [loading]);

  const sendMessage = async () => {
    if (!value) return;

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
      <ChatField ref={ChatFieldRef}>
        {
          messages.map((message, index) => {
            return (
                <MessageComponent
                  key={index}
                  message={message}
                  isMyMessage={message.uid === user.uid}/>
              )
            }
          )
        }
      </ChatField>
      <FieldWrapper>
        <Field value={value} onKeyDown={handleKeyDown} onChange={(e) => setValue(e.target.value)}/>
        <FieldButton disabled={!value} onClick={sendMessage}>
          Отправить
        </FieldButton>
      </FieldWrapper>
    </StyledSection>
  )
}

export default ChatBlock;
