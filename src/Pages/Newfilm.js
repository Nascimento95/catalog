import React, { PureComponent } from 'react'
import Film from '../film.json'


class Newfilm extends PureComponent {
    

    render() {
        console.log(this.props);
        const {id} = this.props.match.params
        console.log(id);
        const film = Film.find(film => film.id == id)
        return (
            <div className="container">   
                <div className="row text-center">
                    <h1 className="text-center">Film</h1>
                    <div className="col-12 ">
                        <div className="">
                            <img src={film.image}/>
                            <p><span className="fw-bold">titre :</span>  {film.title}</p>
                            <p><span className="fw-bold">réalisateur :</span>  {film.director}</p>
                            <p><span className="fw-bold">les acteur :</span>  {film.stars}</p>
                            
                            <p> <span className="fw-bold">description :</span>  {film.description}</p>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Newfilm