import { GoogleOAuthProvider } from '@react-oauth/google';

//components
import Messenger from './components/Messenger';

function App() {

  const clientId = '410759455290-2us52g4lnol0iqmidua6muibnmtvrpqt.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
