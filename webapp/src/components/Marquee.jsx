import React from 'react';
import Container from 'react-bootstrap/Container';
import artwork from '../static/img/jerry2.jpeg';

export default function Marquee() {
  // if our visible screen height (minus some offset) is greater
  // than the heigh of the image, resize the image so the whole
  // thing is visible without scrolling on mobile
  const [width, height] = [500, 500];

  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;

  const style = { textAlign: `center` };

  return (
    <Container style={style}>
      <img
        alt={`Album Artwork`}
        src={artwork}
        style={{ maxHeight: `100%`, maxWidth: `100%`, marginBottom: `15px` }}
      />
    </Container>
  );
}
