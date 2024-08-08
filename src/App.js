import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

// const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID= "4e26b15b-6189-4f81-838f-c6f563ff704e"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;