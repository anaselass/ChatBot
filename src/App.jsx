import ChatBotIcon from "./components/ChatBotIcon";

const App = () => {
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
          <div className="message user-message">
            <p className="message-text">
              Lorem ipsum dolor sit amet. consectetur adipisicing elit. Quis
            </p>
          </div>
        </div>

        {/* Chat bot footer */}
        <div className="chat-footer">
          <form action="#" className="chat-form">
            <input
              type="text"
              placeholder="Message..."
              className="message-input"
              required
            />
            <button class="material-symbols-outlined">keyboard_arrow_up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
