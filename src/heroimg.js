import React from 'react';
import FinalGame from './finalGame'
import './classHeros.css'

class HeroImg extends React.Component{

  
    render(){
      
        let randomX= Math.floor((Math.random() * (40-1) + 1));
        let randomY=Math.floor((Math.random() * (80- 60+1) +60 ));
        let imgPeople= <img src={require("./imagies/person.png")} className ="cell" alt="person"/>
        let arrForPeople =[];
            for ( let i=0; i<50; i++){
                arrForPeople.push(imgPeople)
            }
            console.log(this.props.selectedIntention)
            let intentionResult;
            if (this.props.selectedIntention === "Good"){
                intentionResult = ["./imagies/batman.png","./imagies/cat.png"]
            } else if (this.props.selectedIntention === "Dangerous") {
                intentionResult = ["./imagies/joker-female.png","./imagies/joker.png"]
            }else {return null}
  

        return(
            <div className="team">
                <h2>Your team</h2>
                <div class="containerForHeros">
                    {intentionResult.map((newSrc,index)=>{
                        return <img className={this.props.selectedIntention} key={index} src={require(`${newSrc}`)}
                        alt="ccccd" onClick ={this.selected}/> })} 
                       
                        <FinalGame position={'absolute'} imgages={arrForPeople} class={this.props.selectedIntention} randomPropsX={randomX} randomPropsY={randomY}/>
                </div>
            </div>
           
        )
    }
}
    

export default HeroImg;


           
          
