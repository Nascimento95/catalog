import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


class Nav extends React.Component {
    render() {
       
      return (
        <>
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Homepage</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                </li>
            </ul>
        </>
  
  
      )
    }
  }
  
  export default Nav;