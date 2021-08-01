import React from 'react';
import Container from 'react-bootstrap/Container';

export default function Content(props) {
  const { children } = props;
  return (
    <Container fluid="lg" className="content">
      {children}
    </Container>
  );
}
