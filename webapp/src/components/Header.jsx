import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const LINKS = {
  twitter: 'https://twitter.com/neetchy',
  instagram: 'https://www.instagram.com/neetchyband/',
  facebook: 'https://www.facebook.com/TheRealNeetchy/',
  soundcloud: 'https://soundcloud.com/neetchy',
  youtube: 'https://www.youtube.com/channel/UCtf4MfFGZI1yJdWVjA35a5g',
  spotify: 'https://open.spotify.com/artist/3q3AeIgVskTvUsaBjhL7CK',
  apple: 'https://music.apple.com/us/artist/neetchy/1462015908'
};

function IconLink(props) {
  const { href, icon } = props;
  const size = `4x`;
  return (
    <Nav.Link style={{ color: 'black' }} href={href}>
      <span className={`fa fa-${size} fa-${icon}`}></span>
    </Nav.Link>
  );
}

export default function Header(props) {
  return (
    <React.Fragment>
      <Navbar className="p-0">
        <Navbar.Brand
          style={{
            color: 'black',
            fontSize: '3rem',
            fontFamily: "'Permanent Marker', cursive"
          }}
          className="mx-auto"
        >
          neetchy.com
        </Navbar.Brand>
      </Navbar>
      <Nav justify className="p-0 mb-3 mt-2">
        <IconLink href={LINKS.twitter} icon="twitter" />
        <IconLink href={LINKS.instagram} icon="instagram" />
        <IconLink href={LINKS.facebook} icon="facebook" />
        <IconLink href={LINKS.spotify} icon="spotify" />
        <IconLink href={LINKS.apple} icon="apple" />
        <IconLink href={LINKS.youtube} icon="youtube" />
        <IconLink href={LINKS.soundcloud} icon="soundcloud" />
      </Nav>
    </React.Fragment>
  );
}
