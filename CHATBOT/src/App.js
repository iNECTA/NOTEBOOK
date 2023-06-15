import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
import InteractiveNotebook from './InteractiveNotebook';


function App() {
  const [notebookText, setNotebookText] = useState(`...`);  // initial notebook text

  // You can define the createChatBotMessage and setStateFunc here
  const createChatBotMessage = (text, options) => {
    return {
      text: text,
      ...options
    }
  }

  const setStateFunc = (state) => {
    // Logic to update state
  }

  const updateNotebook = (newNotebookText) => {
    setNotebookText(newNotebookText);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Chatbot 
          config={config}
          actionProvider={new ActionProvider(createChatBotMessage, setStateFunc)} 
          messageParser={new MessageParser(updateNotebook)}
        />
        <InteractiveNotebook notebookText={notebookText} />
      </header>
    </div>
  );
}

export default App;
