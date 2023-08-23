import { GoogleOAuthProvider } from '@react-oauth/google';

//components
import Messenger from './components/Messenger';
import AccountProvider from './context/AccountProvider';

function App() {

  const clientId = '410759455290-2us52g4lnol0iqmidua6muibnmtvrpqt.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
