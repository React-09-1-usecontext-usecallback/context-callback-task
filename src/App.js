import React from "react";
import './App.css';
import Contacts from './contacts';
import Logo from "./Logo";

export const ContactContext = React.createContext();


function App() {

// NOTE: Keep state of contacts here and pass it to Contacts component as a prop
// NOTE: This way you will be able to use it in ChannelStatistics using Context  

  return (
    <div className="grid-container">
      <div>
        <Contacts/>
      </div>
      <div>       
        <Logo />       
      </div>
    </div>
  );
}

export default App;
