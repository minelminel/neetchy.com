import React from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Marquee from './components/Marquee';
import Events from './components/Events';

import data from './data';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Content>
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
