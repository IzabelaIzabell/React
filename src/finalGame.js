import React from 'react';
import './finalGame.css'

class FinalGame extends React.Component{
    constructor(props){
        super(props);
        this.state={
            good_bad:"",
            list1: this.props.imgages,
            list2:[],
            counter:0,
            text:"",
            top:this.props.randomPropsY,
            left:this.props.randomPropsX,
            position:this.props.position
            
        }
    }
    playerGender = (event) => this.setState({good_bad: event.target.value})
    

    handleSelect = (e, fromlist, toList, elToPush, index) => {
        let dummy1 = this.state[fromlist].slice();
        console.log(dummy1)
        //zwraca tablice - element klikniety max el 50 
        let dummy2 = this.state[toList].slice();
        console.log(dummy2)
        //Wydobywa fragment tablicy i zwraca go jako nową tablicę inaczej klikniete elementy tworza nowa tablice 
        dummy1.splice(index, 1);
        //array.splice(start, deleteCount) Zmienia zawartość tablicy, dodając nowe elementy podczas usuwania starych elementów.
        //Indeks od którego rozpoczynamy modyfikację tablicy.
        dummy2.push(elToPush);

        console.log("list1 " +dummy1)
        console.log("list2 "+ dummy2)
     
        this.setState({
            [fromlist] : dummy1,
            [toList] : dummy2,
            counter: this.state.counter + 1
        });
    };


    mouseOn =()=>{
        console.log("najechalam")
        let randomNumber = Math.floor((Math.random() * (10-1) + 1));
        var nrPx = (randomNumber)
        let nrRight = randomNumber
        console.log(nrRight)
        
        let newPositionX =this.state.left + nrPx 
        console.log(newPositionX)
        let newPositionY = this.state.top +nrPx 
        console.log(newPositionY)
        if (newPositionX >=40 ){
            let randomNumberX = Math.floor((Math.random() * (40-1) + 1));
            newPositionX = randomNumberX;

        }
        if (newPositionY >80){
            let randomNumberY =  Math.floor((Math.random() * (80- 35+1) +35 ))
            newPositionY =randomNumberY
        }

        console.log(nrPx)
        this.setState({
           left: newPositionX,
            top: newPositionY,
            right: nrRight 
        })
    }


    mouseClick = ()=>{
        console.log("klik")
        let randomNumber = Math.floor((Math.random() * (10-1) + 1));
        var nrPx = (randomNumber)
        let nrRight = randomNumber
        console.log(nrRight)
        
        let newPositionX =this.state.left + nrPx 
        console.log(newPositionX)
        let newPositionY = this.state.top +nrPx 
        console.log(newPositionY)
        if (newPositionX >=40 ){
            let randomNumberX = Math.floor((Math.random() * (40-1) + 1));
            newPositionX = randomNumberX;

        }
        if (newPositionY >80){
            let randomNumberY =  Math.floor((Math.random() * (80- 35+1) +35 ))
            newPositionY =randomNumberY
        }

        console.log(nrPx)
        this.setState({
           left: newPositionX,
            top: newPositionY,
            right: nrRight 
        })

    }
   
   componentDidMount =()=>{
      
        this.timeout = setTimeout(()=>{
            this.setState({
                text: alert(`GAME OVER! YOUR SCORE IS ${this.state.counter} IN 30 SECONDS` )
           
            })
          },30000);

    }
    componentWillUnmount(){
        clearTimeout(this.timeout);
    }
   
    render(){ 
        console.log(this.props.class)
        let opposetTitle=""
        if(this.props.class === "Good"){
            opposetTitle= "Dangerous place"
        }else{
            opposetTitle ="Good place"
        }
      
        

        const lista1 = this.state.list1.map((elToPush, index) => {
            return <li id="person" className="people" onMouseEnter = {this.mouseOn} onMouseDown ={this.mouseClick}
            style = {{  left:this.state.left +"%",
                top:this.state.top +"%",
                position:this.props.position}} 
                key={index} 
                onClick={e => this.handleSelect(e, 'list1', 'list2', elToPush, index)}>
                {elToPush} 
          
            </li>;
        });
  
        const lista2 = this.state.list2.map((elToPush, index) => {
            return <li  className="people" key={index}>
            {elToPush}
            </li>;
        });
        
        
        
        
        return (
            <div id="container">
                <div className= "places">
                    <div className="direction">
                    <h3>{opposetTitle}</h3>
                    <ul className ="firstPlace" id={this.props.class}>{lista1}</ul>
                    </div>
                    <div className="direction">
                        <h3> {this.props.class} place</h3>
                        <ul id="secondPlace" className={this.props.class}>{lista2}</ul>
                    </div>
                </div>
            </div>

        )
    }
}
export default FinalGame;