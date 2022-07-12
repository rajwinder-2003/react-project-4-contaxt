import React, {Fragment} from 'react';
import './App.css';
import PackegContext from './Context';
import Provider from './Provider';

const Agents = () => {
  return <AgentOne/>
}
const AgentOne = () => {
  return <AgentTwo/>
}
const AgentTwo = () => {
  return <AgentBond/>
}
const AgentBond = () => {
  return (
    <PackegContext.Consumer>
      {
        (Context) => (
          <Fragment>
            <h3>Agent Information</h3>
            <p>Mission Name: {Context.data.mname}</p>
            <p>Aggent Name: {Context.data.agent}</p>
            <h2>Mission Status: {Context.data.accept}</h2>
            <button onClick={Context.isMissionAccepted}> Accept</button>
          </Fragment>
        )
      }
    </PackegContext.Consumer>
  )
}


const App = () => {
  
  return (
    <div className="App">
      <h1>hello</h1>
      <Provider>
        <Agents/>
      </Provider>
    </div>
  );
}

export default App;
