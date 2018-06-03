import React, { Component } from 'react';
import './App.css';
import DatePicker from './component/DatePicker'
class App extends Component {
  render() {
    return (
      <div className="App">
          <div style={{width:'200px'}}>
              <DatePicker
                  disabledDate={dis}
                  onChange={change}
              />
          </div>
      </div>
    );
  }
}
function dis(date){
    return date < new Date();
}
function change(date,dateString){
    console.log(date)
}
export default App;
