import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LINKS = {
  entry: 'https://bandtogetherbuffalo.com/shutdown-showcase-round-1/artists-6/',
  ballot: 'https://bandtogetherbuffalo.com/shutdown-showcase-round-1/round-1-ballot/'
};

export default function Banner() {
  return (
    <Jumbotron>
      <h1>We need your help!</h1>
      <p>
        We are entered in an online battle-of-the-bands and need your vote in order to advance to
        the next round! Voting is open right now until Monday February 1st. Help support our group
        and get to know some other kick-ass local acts in the process. Click the buttons below to
        view our entry and navigate directly to the ballot page. Thank you!
      </p>
      <Row>
        <Col>
          <Button href={LINKS.entry} className="mx-auto" variant="primary" block>
            View our entry
          </Button>
        </Col>
        <Col>
          <Button href={LINKS.ballot} className="mx-auto" variant="success" block>
            Cast your vote!
          </Button>
        </Col>
      </Row>
    </Jumbotron>
  );
}
