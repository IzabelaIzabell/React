import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import {Link} from 'react-router-dom'
import './awesomeButton.css'


class BottomAnimation extends React.Component {
    constructor(props){
        super(props);
        this.state={
            view: this.props.car
        }
    }
   
    componentDidMount =()=>{
        let suprise= 
        <div>
            <AwesomeButton type="secondary" className="awesomeButton" >
                <Link to= "/player" style={{textDecorationLine:"none",color:"#2C561D"}}>Play</Link>
            </AwesomeButton>
        </div>  

        this.timeout = setTimeout(()=>{
            this.setState({
             view: suprise
            })
        },4000);

    }
    componentWillUnmount(){
        clearTimeout(this.timeout);
    }

    render(){
        return(
            <div>
                <div> {this.state.view}</div>
            </div>
        )
    }
}



export default BottomAnimation;