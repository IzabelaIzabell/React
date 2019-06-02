
import React from 'react';
import FlagsApi from './api'
import {Link} from 'react-router-dom'
import Modal from 'react-responsive-modal';
import './form.css'



class Windows extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className ="modalContainer">
  
        <img src={require("./imagies/question_mart_blue.png")} onClick={this.onOpenModal} className="modal" alt="more info"/><span className="checkInfo">Check more info </span>
        <Modal open={open} onClose={this.onCloseModal}>
       
         <h1 className="description">Good or bad? </h1>
         <p className="description">Choose your character and save or manipulate people from the cave! After the game starts, you have 30 seconds to click on a person and collect points for that. Be careful - people don’t trust you, no matter which side you choose and it’s not easy to click on them!</p>
         <p className="description">Good luck!</p>
        </Modal>
      </div>
    );
  }
}

class PlayerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            nick: "",
            email: "",
            finalResult: "",
            color:""
        }
    }
    playerNick = (event) => this.setState({nick: event.target.value})
    playerEmail = (event) => this.setState({email: event.target.value})
    handleSubmit = (event) => {
        event.preventDefault(); 
        let result = "";
        if (this.state.nick === "") {
            result = "Entry you nick name"
            this.setState({color:"red"});
        } else if (this.state.email.indexOf("@")<0){
            result = "Entry your email"
            this.setState({color:"red"});
        } else {
            this.setState({color:"green"});
            result= "Let's start " + this.state.nick
        }
        this.setState({finalResult: result})
    }

  
    render() {
      
       
        return (
          
            <div id="playerCounter">
              <Windows/>
                <form onSubmit={this.handleSubmit}>
                    <h1 style={{backgroundColor:this.state.color,
                    textAlign:"center"}}>{this.state.finalResult}</h1>
                    <input type="text" onChange={this.playerNick} value={this.state.nick} placeholder="Your nick" className="newForm"/><br></br>
                    <input type="text" onChange={this.playerEmail} value={this.state.email} placeholder="Your email" className="newForm"/><br></br>
                    <input type="submit" value="Send"className="newForm" id="sent"/><br></br>
                </form>
                 <FlagsApi/> 
                <button className="btnPlay"><Link to= "/player/game" style={{textDecorationLine:"none", color:"#64C9EF"}}>PLAY</Link></button>
             </div>
        )
    }
}

export default PlayerForm;