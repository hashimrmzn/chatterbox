import React from 'react'
import { Container, Stack, Form, InputGroup, Button } from 'react-bootstrap'
import LeftAside from '../components/Chat/LeftAside'
import ChatWindow from '../components/Chat/ChatWindow'


function ChatPage() {
  return (
    <>
      <section className='chatpage'>
        <Container style={{ display: "flex" }}>
          <LeftAside />
          <Stack style={{ width: "30%" }}>
            <ChatWindow />
          </Stack>
        </Container>
      </section>
    </>
  )
}

export default ChatPage