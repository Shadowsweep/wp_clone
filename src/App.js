import Messenger from "./components/Messenger.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/AccountProvider.jsx";


function App() {

  const clientId ='569109135800-54mqvft6ftojrt19a1t5lh3i20iv04dg.apps.googleusercontent.com'
  return (

    <GoogleOAuthProvider  clientId={clientId}  >
      <AccountProvider>
           <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
