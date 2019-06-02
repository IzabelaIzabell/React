import React from 'react';
import './car.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import MainAnimation from './mainAnimation';
import BottomAnimation from './bottomAnimation'
import PlayerForm from './player'
import Counter from './gameCounter'




class App extends React.Component{
    
  
    render(){
        let batmanCar = <img src={require("./imagies/batman_car.png")} alt="batman car" className ="fastCar"/>
           
      
        return(
           <Router>
                <Route exact path = "/" component={MainAnimation}/>
                <Route exact path='/' render={() => <BottomAnimation car ={batmanCar}/> }/>
                <Route exact path ='/player' component={PlayerForm} />
                <Route exact path ='/player/game' component={Counter} />
          </Router>
        )
    }
}

export default App;