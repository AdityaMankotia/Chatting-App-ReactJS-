import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
const App=() => {
    if(!localStorage.getItem('username'))
    return <LoginForm />
    return(
        <ChatEngine
             height="100vh"
             projectID="e984a24d-6b57-4d2c-8ddc-11866d900636"
             userName={localStorage.getItem('username')}
             userSecret={localStorage.getItem('password')}
             renderChatFeed={(chatAppProps)=> <ChatFeed  {...chatAppProps}/>}
        />
    );
}

export default App;