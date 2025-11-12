import React, { useState, useRef, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import { Card, Image } from "react-bootstrap";


const dummyMessages = [
  { id: 1, sender: "Tony", text: "Hey! How are you?", type: "received" },
  { id: 2, sender: "Me", text: "I am good! How about you?", type: "sent" },
  { id: 3, sender: "Tony", text: "Doing great, working on a project 🚀", type: "received" },
];

function ChatWindow() {
  const [messages, setMessages] = useState(dummyMessages);
  const messagesEndRef = useRef(null);

  const handleSendMessage = (msg) => {
    setMessages((prev) => [...prev, { id: prev.length + 1, sender: "Me", text: msg, type: "sent" }]);
  };

  // Scroll to bottom when new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-window d-flex flex-column" style={{ height: "100vh", flex: 1 }}>
      <ChatHeader />
      <div className="chat-messages flex-grow-1 overflow-auto p-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`d-flex mb-2 ${msg.type === "sent" ? "justify-content-end" : "justify-content-start"}`}
          >
            {msg.type === "received" && (
              <Image
                src="https://i.pravatar.cc/150?img=2"
                roundedCircle
                width="36"
                height="36"
                className="me-2"
              />
            )}
            <Card
              className={`p-2 ${msg.type === "sent" ? "bg-primary text-white" : "bg-light text-dark"}`}
              style={{ maxWidth: "60%" }}
            >
              {msg.text}
            </Card>
            {msg.type === "sent" && (
              <Image
                src="https://i.pravatar.cc/150?img=3"
                roundedCircle
                width="36"
                height="36"
                className="ms-2"
              />
            )}
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <MessageInput onSend={handleSendMessage} />
    </div>
  );
}

export default ChatWindow;
