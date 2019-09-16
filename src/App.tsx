import React from 'react';
import {Grid2Columns, Grid1Columns} from './components/grid'
import Input from './components/input';
import {useUserfrom} from './hooks/formHook';
const App: React.FC = () => {
  const { inputs, handleInputChange } = useUserfrom({});
  console.log(inputs);
  return (
    <div>
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
      <button>Nique React</button>
      <button>Reset</button>
      </Grid2Columns>
      <Grid1Columns>
        <p>Graphique</p>
      </Grid1Columns>
    </div>
  );
}

export default App;
