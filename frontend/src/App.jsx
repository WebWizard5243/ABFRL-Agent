import { useState } from "react";
import "./index.css";

const SESSION_ID = "demo-user-1"; // simulates omnichannel user

function App() {
  const [messages, setMessages] = useState([
    { sender: "agent", text: "Hi! I’m your ABFRL AI Sales Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const res = await fetch("https://abfrl-agent.onrender.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: input,
        sessionId: SESSION_ID
      })
    });

    const data = await res.json();

    setMessages((prev) => [
      ...prev,
      { sender: "agent", text: data.reply }
    ]);

    setLoading(false);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">ABFRL Conversational Sales Agent</div>

      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`message ${msg.sender === "user" ? "user" : "agent"}`}
          >
            {msg.text}
          </div>
        ))}
        {loading && <div className="message agent">Typing...</div>}
      </div>

      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask for recommendations, stock, checkout..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
