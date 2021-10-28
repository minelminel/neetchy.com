import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const url = 'https://www.bonfire.com/neetchy/';

export default function Banner() {
  return (
    <Container className="text-center mt-3 mb-3">
      <Button href={url} variant="warning" block style={{ fontWeight: 'bolder' }}>
        <div>Merch Now Available!</div>
        <div>Click Here To Shop</div>
      </Button>
    </Container>
  );
}
