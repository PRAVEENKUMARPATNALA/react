import React from 'react';
import data from '../data.json';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

let Cards=()=>{
    let cardsData = data.details;
    console.log(cardsData);
    let images = [logo,logo];
    return(
        <div>
            <h1 className="text-primary">Card-1</h1>
            <div className="row">
            {cardsData.map((values,index)=>(
                <div className="col-sm-10 col-md-4 col-lg-4" key={index}>
                    <div className="card">
                        <img src={images[index]}></img>
                        <h2>
                            {values.card.name}
                        </h2>
                        <a href={"mailto:"+values.card.email}>
                            <h3>{values.card.email}</h3>
                        </a>
                        <h2>
                            {values.card.mobile}
                        </h2>
                        <h2>
                            {values.card.description}
                        </h2>
                        <Link to={{pathname:"/resume",personcard:{id:index}}} className="btn btn-primary">click me</Link>
                        {/* <button className="btn btn-primary">click me</button> */}
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}


export default Cards;