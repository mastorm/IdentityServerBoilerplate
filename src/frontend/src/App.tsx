import React, {useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import {UserManager} from "oidc-client";

const manager = new UserManager({
  authority: "http://localhost:5000",
  client_id: "spa",
  redirect_uri: "http://localhost:3000/",
  response_type: "code",
  scope: "openid profile backend"
});

const App: React.FC = () => {
  manager.signinRedirectCallback().then(res => {
    console.log(res)
  });

  const doSignIn = useCallback(() => {

    manager.signinRedirect().then(res => {
      console.log(res)
    });
  }, []);

  const doSignOut = useCallback(() => {
    manager.signoutPopup().then(res => {
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={doSignIn} >Signin</button>
        <button onClick={doSignOut} >Signin</button>
      </header>
    </div>
  );
}

export default App;
