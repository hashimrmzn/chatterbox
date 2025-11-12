import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { Send } from "lucide-react";

function MessageInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;
    onSend(message);
    setMessage("");
  };

  return (
    <Form onSubmit={handleSend} className="message-input-form p-2 border-top bg-light">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" variant="primary">
          <Send size={18} />
        </Button>
      </InputGroup>
    </Form>
  );
}

export default MessageInput;
