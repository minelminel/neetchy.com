import React from 'react';
import Container from 'react-bootstrap/Container';
import artwork from '../static/img/scene-daddy.jpeg';

const style = { textAlign: `center` };

export default function Marquee() {
  return (
    <Container style={style}>
      <h3>
        New Single: <i>'Time On My Side'</i> Out Now
      </h3>
      <img
        alt={`Album Artwork`}
        src={artwork}
        style={{ maxHeight: `300px`, maxWidth: `300px`, marginBottom: `15px` }}
      />
    </Container>
  );
}
