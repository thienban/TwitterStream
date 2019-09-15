import React from 'react';
import {Grid2Columns, Grid1Columns} from './components/grid'
const App: React.FC = () => {
  return (
    <div>
      <Grid2Columns>
      <input></input>
      <input></input>
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
