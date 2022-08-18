import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';

const AccordionOne = ({customStyle}) => {
    return (
        <Accordion className={`rn-accordion-style ${customStyle}`} defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                   Who are we ?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Venture Media is a performance based marketing agency, ready to stand by your side to help you achieve your business goals</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Why us ?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>We are a team of experts in the digital marketing industry having proved their expertise while working with various clients. We'll help you identify the pain points in your marketing process and provide a tailored solution for your business</Card.Body>
                </Accordion.Collapse>
            </Card>

            {/* <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    How can I get the customer support?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>After purchasing the product need you any support you can be share with us with sending mail to rainbowit10@gmail.com.</Card.Body>
                </Accordion.Collapse>
            </Card> */}

            {/* <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    Can I get update regularly and For how long do I get updates?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>Yes, We will get update the Trydo. And you can get it any time. Next time we will comes with more feature. You can be get update for unlimited times. Our dedicated team works for update.</Card.Body>
                </Accordion.Collapse>
            </Card> */}

        </Accordion>
    )
}
export default AccordionOne

