import React, {useState} from 'react';
import {Grid2Columns, Grid1Columns} from './components/grid'
import Input from './components/input';
import Button from './components/button'
import {useUserfrom} from './hooks/formHook';
import List from './components/list';
import styled from "styled-components";

const App: React.FC = () => {
  const [reset, setReset] = useState(false);
  const Background = styled.div`
  background: linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87));
  `;
  const { inputs, handleInputChange } = useUserfrom({});
  console.log(inputs);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const term = inputs ? inputs.input1:"";
    //const second = inputs ? inputs.input3:"";
    //const term = first+','+second;
    fetch("http://localhost:3001/setSearchTerm",
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ term })
      })
    setReset(false);
  }
  const handleReset = (e: any) => {
    e.preventDefault();
    fetch("http://localhost:3001/pause",
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(res => {
        console.log(res);
        setReset(true);
      }) ;
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
      <Button label="RESET" onClick={handleReset}/>
      </Grid2Columns>
      <Grid1Columns>
        <List mustReset={reset}/>
      </Grid1Columns>
      <Grid1Columns>
        <p>Graphique</p>
      </Grid1Columns>
    </Background>
  );
}

export default App;
