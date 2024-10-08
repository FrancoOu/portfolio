import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from "@react-email/components"
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
    message: string
    senderEmail: string
}

export default function ContactFormEmail({
    message,
    senderEmail
}:ContactFormEmailProps) {
  return (
        <Html>
            <Head/>
            <Preview>New Message from Portfolio Site</Preview>
            <Tailwind>
                <Body className='bg-gray-100'>
                    <Container>
                        <Section className='bg-white border  border-black/0.1 my-10 px-10 py-4 rounded-md '>
                            <Heading className='leading-tight'>You received the message from the Contact Form</Heading>
                            <Text>{message}</Text>
                            <Hr/>
                            <Text>Email from: {senderEmail}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
            
        </Html>
  )
}
