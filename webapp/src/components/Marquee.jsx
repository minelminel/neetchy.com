import React from 'react';
import Container from 'react-bootstrap/Container';
import artwork from '../static/img/album-art.png';

const style = { textAlign: `center`, fontFamily: `TimesNewRoman` };

export default function Marquee() {
  return (
    <Container style={style}>
      <h3>
        New Album: <i>'Songs For, And About You'</i> Available Now
      </h3>
      <img
        alt={`Album Artwork`}
        src={artwork}
        style={{ height: `75vh`, width: `75vh`, marginBottom: `15px` }}
      />
    </Container>
  );
}
