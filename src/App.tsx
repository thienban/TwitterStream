import React from 'react';
import {Grid2Columns, Grid1Columns} from './components/grid'
import Input from './components/input';
import Button from './components/button'
import {useUserfrom} from './hooks/formHook';
import List from './components/list';
import styled from "styled-components";

const App: React.FC = () => {
  const Background = styled.div`
  background: linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87));
  `;
  const { inputs, handleInputChange } = useUserfrom({});
  console.log(inputs);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const term = inputs ? inputs.input1:"";
    fetch("/setSearchTerm",
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ term })
      })
  }
  return (
    <Background>
      <Grid2Columns>
      <Input
        Type="text"
        Name="input1"
        Input= {inputs ? inputs.input1 : undefined}
        onChange= {handleInputChange}
      />
      <Input
        Type="text"
        Name="input2"
        Input= {inputs ? inputs.input2 : undefined}
        onChange= {handleInputChange}

      />
      <Button label="GO" onClick={handleSubmit}/>
      <Button label="RESET" onClick={handleSubmit}/>
      </Grid2Columns>
      <Grid1Columns>
        <List/>
      </Grid1Columns>
      <Grid1Columns>
        <p>Graphique</p>
      </Grid1Columns>
    </Background>
  );
}

export default App;
