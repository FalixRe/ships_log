import logo from './logo.svg';
import './App.css';
import React, {useState } from 'react';

function DataCellInput() {
  const [dateOfLog, setDateOfLog] = useState(new Date().getDate());//is it needed?

  function handleChange(e) {//is it needed?
    setDateOfLog(e.target.value) 
  }

var date = new Date();
var currentDate = date.toISOString().substring(0,10);
// var day = ("0" + now.getDate()).slice(-2);
// var month = ("0" + (now.getMonth() + 1)).slice(-2);
// var today = now.getFullYear()+"-"+(month)+"-"+(day) ;

  return (
    <td> 
      <input type="date" value={currentDate} onChange={handleChange}/>
    </td>
  )
}

function TimeCellInput() {
  const [timeOfLog, setTimeOfLog] = useState((new Date().getTime()));//is it needed?

  function handleChange(e) {//is it needed?
    setTimeOfLog(e.target.value) 
  }
  var date = new Date();
  var currentTime = date.toISOString().substring(11,16);
  
  return (
    <td> 
      <input type="time" value={currentTime} onChange={handleChange}/>
    </td>
  )
}


class CoordinatesCellInput extends React.Component {
  state = {
    shipLatitude: 0,
    shipLongitude: 0
  }

  updatePositionFromGps = (position) => {
    this.setState({
      shipLatitude: position.coords.latitude,
      shipLongitude: position.coords.longitude
    });
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.updatePositionFromGps);
  }
  //const [shipLatitude, setShipLatitude] = useState('');//is it needed?
  //const [shipLongitude, setShipLongitude] = useState('');//is it needed?

  handleChangeLatitude = (e) => {//is it needed?
    this.setState({
      shipLatitude: e.target.value
    });
    //setShipLatitude(e.target.value) 
  }

  handleChangeLongitude = (e) => {//is it needed?
    this.setState({
      shipLongitude: e.target.value
    });
    //setShipLongitude(e.target.value) 
  }
//
//<input type="number" value={this.state.shipLatitude} onChange={this.handleChangeLatitude}/>
//<input type="number" value={this.state.shipLongitude} onChange={this.handleChangeLongitude}/>
//
  render() {
    return (
      <td> 
         <input type="number" value={this.state.shipLatitude} onChange={this.handleChangeLatitude}/>
         <input type="number" value={this.state.shipLongitude} onChange={this.handleChangeLongitude}/>
      </td>
    )
  }
}

// function CoordinatesCellInput() {

//   navigator.geolocation.getCurrentPosition(function(position) {
//     setShipLatitude("Latitude is :", position.coords.latitude);
//     setShipLongitude("Longitude is :", position.coords.longitude);
//   });



//   const [shipLatitude, setShipLatitude] = useState('');//is it needed?
//   const [shipLongitude, setShipLongitude] = useState('');//is it needed?

//   function handleChangeLatitude(e) {//is it needed?
//     setShipLatitude(e.target.value) 
//   }

//   function handleChangeLongitude(e) {//is it needed?
//     setShipLongitude(e.target.value) 
//   }
//   return (
//     <td> 
//       <input type="number" value={shipLatitude} onChange={handleChangeLatitude}/>
//       <input type="number" value={shipLongitude} onChange={handleChangeLongitude}/>
//     </td>
//   )
// }

function ShipsLogTable() {
  return (
    <table >
      <tr>
        <DataCellInput />
        <TimeCellInput />
        <CoordinatesCellInput />
        <td>Zdarzenia</td>
      </tr>
    </table>
  )
}



function App() {
  return (
    <div className="App">
      <ShipsLogTable />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
