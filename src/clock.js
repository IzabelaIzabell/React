import React from 'react';
import './flag.css'


class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            time: this.props.time
        }
    }

   getSubstring =()=> {
        var chngStr = this.state.time;
        console.log(chngStr)
        var lastSpace = chngStr.lastIndexOf(' ');
        var resu = (chngStr.substr(10, lastSpace))
        // 10 start lastSpace end 
        return resu.slice(0,resu.length-1)
        // -the last string
        //slice wydobywa fragment tabeli i zwraca nowa 
   }
    render(){
    //     console.log(this.state.time)
    //     var string = "2019-04-28 10:23:26.643+0200";
    //     let chngStr = string.substring();
    //     console.log(chngStr)
    //     var lastSpace = chngStr.lastIndexOf(' ');
    //    var resu = (chngStr.substr(10, lastSpace))

    //    let final = resu.slice(0,resu.length-1)
    //    console.log(final)

      return(<div className="containerApi" id="clock">Your current time: {this.getSubstring(this.state.time)}</div>)
    }
}

export default Clock;