import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Event = (props) => {
  const { date, time, text, location, link, action } = props;
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title>{`${date} - ${location}`}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{time}</Card.Subtitle>
        <Card.Text>{text}</Card.Text>
        {link && (
          <Button variant={'primary'} href={link}>
            {action}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

Event.defaultProps = {
  location: 'Location',
  date: 'Sat, January 1st',
  time: '7PM',
  text: 'Summary information',
  link: null,
  action: 'More Info'
};

export default function Events(props) {
  const { children } = props;
  return (
    <Container>
      <h3>Upcoming Events</h3>
      {children}
    </Container>
  );
}

Events.Event = Event;
