import { useRef } from "react";

const ChatForm = ({ setChatHistory }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";
    console.log("User message:", userMessage);
    setChatHistory((history) => [
      ...history,
      { type: "user", text: userMessage },
    ]);
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
      />
      <button class="material-symbols-outlined">keyboard_arrow_up</button>
    </form>
  );
};

export default ChatForm;
