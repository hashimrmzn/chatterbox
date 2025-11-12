import React from 'react'
import { Search } from "lucide-react";
import { Form, InputGroup, Button,Card,Image } from 'react-bootstrap'

const dummyChats = [
  {
    id: 1,
    name: "John Cena",
    message: "Hello from WWE 💪",
    time: "10:24 AM",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Tony Stark",
    message: "Let's build something awesome 🚀",
    time: "9:15 AM",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "ChatBot",
    message: "Hey there! How can I assist you?",
    time: "Yesterday",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

function LeftAside() {

    return (
        <>
            <aside style={{ width: "30%" }} className='sidebar'>
                <div className="search-bar-div">
                    <Form>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Search users to start chat..."
                                className="search-input"
                            />
                            <Button variant="primary" type="submit" className="search-btn">
                                <Search size={18} className="me-1" />
                                Search
                            </Button>
                        </InputGroup>
                    </Form>
                </div>
                <div className="chat-list">
                    {dummyChats.map((chat) => (
                        <Card key={chat.id} className="chat-card mb-2">
                            <div className="d-flex align-items-center p-2">
                                <Image
                                    src={chat.avatar}
                                    roundedCircle
                                    width="45"
                                    height="45"
                                    alt={chat.name}
                                    className="me-3"
                                />
                                <div className="flex-grow-1">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h6 className="mb-0 fw-semibold">{chat.name}</h6>
                                        <small className="text-muted">{chat.time}</small>
                                    </div>
                                    <p className="text-muted mb-0 small">{chat.message}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </aside>
        </>
    )
}

export default LeftAside