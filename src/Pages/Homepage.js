import React from 'react';
import Film from '../film.json'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


class Homepage extends React.Component {
    constructor () {
        super()
        this.state = {
          films :Film
    
        }
      }
    render() {
        // console.log(this.props);
        const {films} = this.state
      return (
        <>
            <div className ="container">
                <h2> homepage</h2>
                <div className ="row">
                    
                {films.map((film , index) =>  <div key={index} className='col-12'><Link to={`/film/${film.id}`}>{film.title}</Link></div> )}
                </div>
            </div>
        </>
  
  
      )
    }
  }
  
  export default Homepage;