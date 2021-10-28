import React from 'react';
import Container from 'react-bootstrap/Container';
import artwork from '../static/img/scene-daddy.jpeg';

const style = { textAlign: `center`, fontFamily: `TimesNewRoman` };

export default function Marquee() {
  return (
    <Container style={style}>
      <h3>
        New Singles: <i>'One I Wanna Be'</i> &amp; <i>'Spaghetti and Wine'</i> Out Now
      </h3>
      <img
        alt={`Album Artwork`}
        src={artwork}
        style={{ maxHeight: `300px`, maxWidth: `300px`, marginBottom: `15px` }}
      />
    </Container>
  );
}
