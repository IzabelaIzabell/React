import React from 'react';
import './gameBoard.css'
import HeroImg from './heroimg'

class Hero extends React.Component {
  constructor(props){
    super(props);
    this.state={
      good_bad:""

    }
  }
   
  playerGender = (event) => this.setState({good_bad: event.target.value})

    
  selected =() =>{
    console.log("dziala")
  }

 render(){
    console.log(this.state.good_bad)
   
      return (
        <div className ="nullNew" id={this.state.good_bad}>
          <h1>Choose your team</h1>
     
          <select value={this.state.good_bad} onChange={this.playerGender} > 
                        <option value ="/">--</option>
                        <option value="Good">Good</option>
                        <option value="Dangerous">Bad</option>
          </select> <br></br>
         <HeroImg selectedIntention ={this.state.good_bad}/>
    </div>)

  }
}

export default Hero;
