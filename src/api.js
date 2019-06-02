import React from 'react';
import Clock from './clock'
import './flag.css'



class FlagsApi extends React.Component{
  
    
      componentDidMount() {
        fetch('https://api.ipgeolocation.io/ipgeo?apiKey=080053faad5448749930b6bdb1ec0a7f')
          .then(response => {
            response.json().then(data => {
              this.setState(data);
              console.log(response)
              console.log(data)
            });
          }).catch(err => {
            console.log('Błąd!', err);
          });
      }
    
      render() {

   


        if (this.state) {
          return (
            <div>
              <div className="containerApi">Your country is {this.state.country_name}</div>
              <div className="divCointainerFlag">
              <img id="flag"src={this.state.country_flag} alt="" />
              </div>
             
              <Clock time = {this.state.time_zone.current_time}/>
            </div>
          );
        } else {
          return (
            <div></div>
          );
        }
      }
    


// render(){
//     return(
//         <div></div>
//     )
// }
}
export default FlagsApi;
