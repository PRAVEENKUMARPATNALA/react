import React,{Component} from 'react';

// function Prave(props) {
//     return(
//         <h2>{props.name} Role is : {props.role}</h2>
//     );
// }

// class Prave extends React.Component{
//     render(){
//         return(
//             <h2>{this.props.name} Role is : {this.props.role}</h2>
//         )
//     }
// }

// class Prave extends Component{
//     constructor(){
//         super();
//         this.state={
//             name:"sohel",
//             secondname:"venkat"
//         }
//     }

//     changeState=()=>{
//         this.setState({
//             name:"monal",
//             secondname:"bigboss"
//         })
//     }
//     render(){
//         return(
//             <div>
//             <h2>{this.state.name}</h2>
//             <h1>{this.state.secondname}</h1>
//             <button onClick={this.changeState}>Click me</button>
//             </div>
//         );
//     }
// }

class Prave extends Component{
    constructor(){
        super();
        this.state={
            count:1
        }
    }

    changeCount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <div>
                <center>
                <h2>{this.state.count}</h2>
                <button onClick={this.changeCount}>Click Here</button>
                </center>
            </div>
        );
    }
}

export default Prave;