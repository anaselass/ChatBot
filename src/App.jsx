import { useState } from "react";
import ChatBotIcon from "./components/ChatBotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  return (
    <div className="container">
      <div className="chatbot-popup">
        {/* Chat bot header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatBotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button class="material-symbols-outlined">keyboard_arrow_down</button>
        </div>

        {/* Chat bot body */}
        <div className="chat-body">
          <div className="message bot-message">
            <ChatBotIcon />
            <p className="message-text">
              hey there 👏 <br /> how can I help you today?
            </p>
          </div>

          {chatHistory.map((chat, index) => (
            <ChatMessage />
          ))}
        </div>

        {/* Chat bot footer */}
        <div className="chat-footer">
          <ChatForm setChatHistory={setChatHistory} />
        </div>
      </div>
    </div>
  );
};

export default App;
