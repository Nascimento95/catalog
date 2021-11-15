import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// import Newfilm from './Pages/Newfilm';
import Homepage from './Pages/Homepage';
import Notfound from './Pages/Notfound';
import 'bootstrap/dist/css/bootstrap.min.css'
import Newfilm from './Pages/Newfilm';


class App extends React.Component {

  render() {
   
    return (
      <BrowserRouter>
      
      <Switch>
        <Route  exact path="/" component={Homepage}  />
        <Route path="/film/:id" component={Newfilm} />
        <Route path="*" component={Notfound} />
      </Switch>
      
      </BrowserRouter>
    )
  }
}

export default App;
