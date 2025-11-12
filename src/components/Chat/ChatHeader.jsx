import React from "react";
import { Image, Button } from "react-bootstrap";
import { Phone, Video, Info } from "lucide-react";

function ChatHeader() {
  return (
    <header
      className="chat-header d-flex align-items-center justify-content-between px-3 py-2 border-bottom bg-light"
      style={{
        height: "65px",
      }}
    >
      {/* Left side: User Info */}
      <div className="d-flex align-items-center">
        <Image
          src="https://i.pravatar.cc/150?img=2"
          roundedCircle
          width="45"
          height="45"
          alt="User Avatar"
          className="me-3 border"
        />
        <div>
          <h6 className="mb-0 fw-semibold">Tony Stark</h6>
          <small className="text-success">Online</small>
        </div>
      </div>

      {/* Right side: Actions */}
      <div className="d-flex align-items-center gap-2">
        <Button variant="outline-secondary" size="sm">
          <Phone size={18} />
        </Button>
        <Button variant="outline-secondary" size="sm">
          <Video size={18} />
        </Button>
        <Button variant="outline-secondary" size="sm">
          <Info size={18} />
        </Button>
      </div>
    </header>
  );
}

export default ChatHeader;
