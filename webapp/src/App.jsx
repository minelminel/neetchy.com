import React from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Marquee from './components/Marquee';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Content>
        <Marquee />
      </Content>
    </React.Fragment>
  );
}
