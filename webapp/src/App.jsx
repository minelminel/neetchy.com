import React, { useEffect } from 'react';

import Header from './components/Header';
import Banner from './components/Banner';
import Content from './components/Content';
import Marquee from './components/Marquee';
import Events from './components/Events';

import analytics from './Analytics';

import data from './data';

export default function App() {
  useEffect(() => {
    analytics({
      host: 'http://ec2-3-142-255-1.us-east-2.compute.amazonaws.com',
      campaign: 1
    });
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Content>
        <Banner />
        <Marquee />
        <Events>
          {data.events?.map((event, index) => (
            <Events.Event {...event} key={index} />
          ))}
        </Events>
      </Content>
    </React.Fragment>
  );
}
