import React from 'react';
import {Grid1Columns} from './components/grid'
import styled from "styled-components";
import Form from './components/form';
import Chart from './components/lineChart'

const App: React.FC = () => {

  const Background = styled.div`
  background: linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87));
  `;
  const Center  = styled.div`
    grid-area: a;
    align-self: center;
    justify-self: center;
  `;
  return (
    <Background>
      <Form/>
      <Grid1Columns>
        <Center>
        <p>Graphique</p>
         <Chart/>
         </Center>
      </Grid1Columns>
    </Background>
  );
}

export default App;
