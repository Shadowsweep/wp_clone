import Messenger from "./components/Messenger.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  const clientId ='569109135800-54mqvft6ftojrt19a1t5lh3i20iv04dg.apps.googleusercontent.com'
  return (

    <GoogleOAuthProvider  clientId={clientId}  >
      <Messenger />

    </GoogleOAuthProvider>
  );
}

export default App;
