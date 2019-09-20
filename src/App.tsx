import React from 'react';
import {Grid1Columns} from './components/grid'
import styled from "styled-components";
import Form from './components/form';

const App: React.FC = () => {

  const Background = styled.div`
  background: linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87));
  `;
  return (
    <Background>
      <Form/>
      <Grid1Columns>
        <p>Graphique</p>
      </Grid1Columns>
    </Background>
  );
}

export default App;
